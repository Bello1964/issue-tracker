const issueRepository = require("../repositories/issue.repository");
const userRepository = require("../repositories/user.repository");
const ApiError = require("../utils/apiError");
const activityService = require("./activity.service");
const DatabaseHelper = require("../helpers/database.helper");
const paginationHelper = require("../helpers/pagination.helper");
const { USER_ROLES } = require("../utils/constants");
const emailService = require("./email.service");

const {
  emitIssueCreated,
  emitIssueUpdated,
  emitIssueDeleted,
} = require("../socket/events");

const {
  ISSUE_MESSAGES,
  ACTIVITY_ACTIONS,
} = require("../utils/constants");

const {
  serializeIssue,
} = require("../serializers/issue.serializer");

class IssueService {

  async #getValidAssignee(assigneeId) {
    if (!assigneeId) {
      return null;
    }

    const assignee = await userRepository.findUserById(assigneeId);

    if (!assignee) {
      throw new ApiError({
        statusCode: 404,
        message: ISSUE_MESSAGES.ASSIGNEE_NOT_FOUND,
        code: "ASSIGNEE_NOT_FOUND",
      });
    }

    return assignee;
  }

 #buildIssueUpdates(data, assignee) {
  const updates = {};

  if (data.title !== undefined) updates.title = data.title;
  if (data.description !== undefined) updates.description = data.description;
  if (data.status !== undefined) updates.status = data.status;
  if (data.priority !== undefined) updates.priority = data.priority;
  if (data.dueDate !== undefined) updates.dueDate = data.dueDate;
  if (data.assignee !== undefined) updates.assignee = assignee?._id ?? null;

  return updates;
}

#isAdmin(auth) {
  return auth.user.role === USER_ROLES.ADMIN;
}

#isCreator(issue, auth) {
  return (
    issue.createdBy &&
    issue.createdBy._id.toString() === auth.user._id.toString()
  );
}

#isAssignee(issue, auth) {
  return (
    issue.assignee &&
    issue.assignee._id.toString() === auth.user._id.toString()
  );
}

#canViewIssue(issue, auth) {
  return (
    this.#isAdmin(auth) ||
    this.#isCreator(issue, auth) ||
    this.#isAssignee(issue, auth)
  );
}

#canEditIssue(issue, auth) {
  return (
    this.#isAdmin(auth) ||
    this.#isCreator(issue, auth)
  );
}

#buildVisibilityFilter(auth) {
  const filter = {
    isDeleted: false,
  };

  if (!this.#isAdmin(auth)) {
    filter.$or = [
      {
        createdBy: auth.user._id,
      },
      {
        assignee: auth.user._id,
      },
    ];
  }

  return filter;
}

#applySearchFilters(filter, query) {
  if (query.status) {
    filter.status = query.status;
  }

  if (query.priority) {
    filter.priority = query.priority;
  }

  if (query.assignee) {
    filter.assignee = query.assignee;
  }

  if (query.search) {
    filter.$and ??= [];

    filter.$and.push({
      $or: [
        {
          title: {
            $regex: query.search,
            $options: "i",
          },
        },
        {
          description: {
            $regex: query.search,
            $options: "i",
          },
        },
      ],
    });
  }

  return filter;
}

#buildSort(query) {
  const allowedSortFields = [
    "createdAt",
    "updatedAt",
    "priority",
    "dueDate",
    "status",
  ];

  const sortBy = allowedSortFields.includes(query.sortBy)
    ? query.sortBy
    : "createdAt";

  const order = query.order === "asc" ? 1 : -1;

  return {
    [sortBy]: order,
  };
}

#serializeIssues(issues) {
  return issues.map((issue) => serializeIssue(issue));
}

async createIssue(data, auth) {
  const { issue, assignee } = await DatabaseHelper.withTransaction(async (session) => {
    const assignee = await this.#getValidAssignee(data.assignee);

    const issue = await issueRepository.createIssue(
      {
        title: data.title,
        description: data.description,
        priority: data.priority,
        status: data.status,
        assignee: assignee?._id ?? null,
        dueDate: data.dueDate,
        createdBy: auth.user._id,
      },
      session
    );

    await activityService.logActivity(
      {
        issue: issue._id,
        user: auth.user._id,
        action: ACTIVITY_ACTIONS.ISSUE_CREATED,
      },
      session
    );

    return { issue, assignee };
  });

  emitIssueCreated(issue);

  if (assignee?.email) {
    try {
      await emailService.sendIssueAssignedEmail({
        email: assignee.email,
        assigneeName: `${assignee.firstName} ${assignee.lastName}`,
        issueTitle: issue.title,
        assignedBy: auth.user.firstName,
      });
    } catch (error) {
      console.error("Failed to send assignment email:", error);
    }
  }

  return {
    issue: serializeIssue(issue),
  };
}

async getIssue(id, auth) {
  const issue = await issueRepository.findIssueById(id);

  if (!issue) {
    throw new ApiError({
      statusCode: 404,
      message: ISSUE_MESSAGES.NOT_FOUND,
      code: "ISSUE_NOT_FOUND",
    });
  }

  if (!this.#canViewIssue(issue, auth)) {
    throw new ApiError({
      statusCode: 403,
      message: ISSUE_MESSAGES.FORBIDDEN,
      code: "FORBIDDEN",
    });
  }

  return {
    issue: serializeIssue(issue),
  };
}

async updateIssue(id, data, auth) {
  const issue = await issueRepository.findIssueById(id);

  if (!issue) {
    throw new ApiError({
      statusCode: 404,
      message: ISSUE_MESSAGES.NOT_FOUND,
      code: "ISSUE_NOT_FOUND",
    });
  }

  if (!this.#canEditIssue(issue, auth)) {
    throw new ApiError({
      statusCode: 403,
      message: ISSUE_MESSAGES.FORBIDDEN,
      code: "FORBIDDEN",
    });
  }

  const previousStatus = issue.status;
  const previousAssignee = issue.assignee?.toString();

  let assignee = issue.assignee;

  if ("assignee" in data) {
    assignee = data.assignee
      ? await this.#getValidAssignee(data.assignee)
      : null;
  }

  const updatedIssue = await DatabaseHelper.withTransaction(async (session) => {
    const updates = this.#buildIssueUpdates(data, assignee);

    const updatedIssue = await issueRepository.updateIssue(
      id,
      updates,
      { session }
    );

    await activityService.logActivity(
      {
        issue: updatedIssue._id,
        user: auth.user._id,
        action: ACTIVITY_ACTIONS.ISSUE_UPDATED,
      },
      session
    );

    return updatedIssue;
  });

  emitIssueUpdated(updatedIssue);

  if (
    previousStatus !== updatedIssue.status &&
    updatedIssue.assignee?.email
  ) {
    try {
      await emailService.sendStatusChangedEmail({
        email: updatedIssue.assignee.email,
        assigneeName: `${updatedIssue.assignee.firstName} ${updatedIssue.assignee.lastName}`,
        issueTitle: updatedIssue.title,
        oldStatus: previousStatus,
        newStatus: updatedIssue.status,
      });
    } catch (error) {
      console.error("Failed to send status email:", error);
    }
  }

  if (
    data.assignee &&
    previousAssignee !== data.assignee.toString() &&
    updatedIssue.assignee?.email
  ) {
    try {
      await emailService.sendIssueAssignedEmail({
        email: updatedIssue.assignee.email,
        assigneeName: `${updatedIssue.assignee.firstName} ${updatedIssue.assignee.lastName}`,
        issueTitle: updatedIssue.title,
        assignedBy: auth.user.firstName,
      });
    } catch (error) {
      console.error("Failed to send assignment email:", error);
    }
  }

  return {
    issue: serializeIssue(updatedIssue),
  };
}

async getIssues(query, auth) {
  const pagination = paginationHelper.build(query);

  const filter = this.#buildVisibilityFilter(auth);

  this.#applySearchFilters(filter, query);

  const sort = this.#buildSort(query);

  const [issues, totalItems] = await Promise.all([
    issueRepository.findIssues(filter, {
      skip: pagination.skip,
      limit: pagination.limit,
      sort,
    }),

    issueRepository.countIssues(filter),
  ]);

  return {
    issues: this.#serializeIssues(issues),

    pagination: paginationHelper.metadata({
      page: pagination.page,
      limit: pagination.limit,
      totalItems,
    }),
  };
}


async getIssueActivities(id, auth) {
  const issue = await issueRepository.findIssueById(id);

  if (!issue) {
    throw new ApiError({
      statusCode: 404,
      message: ISSUE_MESSAGES.NOT_FOUND,
      code: "ISSUE_NOT_FOUND",
    });
  }

  if (!this.#canViewIssue(issue, auth)) {
    throw new ApiError({
      statusCode: 403,
      message: ISSUE_MESSAGES.FORBIDDEN,
      code: "FORBIDDEN",
    });
  }

  return activityService.getActivities(issue._id);
}

async getIssueStatistics(auth) {
  const filter = this.#buildVisibilityFilter(auth);

  const statistics = await issueRepository.getIssueStatistics(
    filter,
    auth.user._id
  );

  return {
    generatedAt: new Date().toISOString(),
    statistics,
  };
}

async deleteIssue(id, auth) {
  const issue = await issueRepository.findIssueById(id);

  if (!issue) {
    throw new ApiError({
      statusCode: 404,
      message: ISSUE_MESSAGES.NOT_FOUND,
      code: "ISSUE_NOT_FOUND",
    });
  }

  if (!this.#canEditIssue(issue, auth)) {
    throw new ApiError({
      statusCode: 403,
      message: ISSUE_MESSAGES.FORBIDDEN,
      code: "FORBIDDEN",
    });
  }

  await DatabaseHelper.withTransaction(async (session) => {
    await issueRepository.updateIssue(
      id,
      {
        isDeleted: true,
        deletedAt: new Date(),
        deletedBy: auth.user._id,
      },
      { session }
    );

    await activityService.logActivity(
      {
        issue: issue._id,
        user: auth.user._id,
        action: ACTIVITY_ACTIONS.ISSUE_DELETED,
      },
      session
    );
  });

  emitIssueDeleted(id);

  return null;
}

}

module.exports = new IssueService();