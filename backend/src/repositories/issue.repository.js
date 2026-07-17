const MongoRepository = require("./MongoRepository");
const Issue = require("../models/Issue");
const {
  ISSUE_STATUS,
  ISSUE_PRIORITY,
} = require("../utils/constants");

class IssueRepository extends MongoRepository {
  constructor() {
    super(Issue);
  }

  async createIssue(data, session) {
  const [issue] = await this.model.create([data], { session });

  return this.model
    .findById(issue._id)
    .populate("createdBy", "firstName lastName email")
    .populate("assignee", "firstName lastName email")
    .session(session);
  }

 async findIssueById(id) {
  return this.model
    .findOne({
      _id: id,
      isDeleted: false,
    })
    .populate("createdBy", "firstName lastName email")
    .populate("assignee", "firstName lastName email");
}

 async findIssues(filter={}, options) {
  const { skip, limit, sort } = options;

  return this.model
    .find(filter)
    .populate("createdBy", "firstName lastName email")
    .populate("assignee", "firstName lastName email")
    .sort(sort)
    .skip(skip)
    .limit(limit);
}

async getIssueStatistics(filter) {

  const [statistics] = await this.model.aggregate([
    {
      $match: filter,
    },

    {
      $group: {
        _id: null,

        total: {
          $sum: 1,
        },

        open: {
          $sum: {
            $cond: [
              {
                $eq: ["$status", ISSUE_STATUS.OPEN],
              },
              1,
              0,
            ],
          },
        },

        inProgress: {
          $sum: {
            $cond: [
              {
                $eq: ["$status", ISSUE_STATUS.IN_PROGRESS],
              },
              1,
              0,
            ],
          },
        },

        resolved: {
          $sum: {
            $cond: [
              {
                $eq: ["$status", ISSUE_STATUS.RESOLVED],
              },
              1,
              0,
            ],
          },
        },

        lowPriority: {
          $sum: {
            $cond: [
              {
                $eq: ["$priority", ISSUE_PRIORITY.LOW],
              },
              1,
              0,
            ],
          },
        },

        mediumPriority: {
          $sum: {
            $cond: [
              {
                $eq: ["$priority", ISSUE_PRIORITY.MEDIUM],
              },
              1,
              0,
            ],
          },
        },

        highPriority: {
          $sum: {
            $cond: [
              {
                $eq: ["$priority", ISSUE_PRIORITY.HIGH],
              },
              1,
              0,
            ],
          },
        },

        overdue: {
          $sum: {
            $cond: [
              {
                $and: [
                  {
                    $lt: ["$dueDate", "$$NOW"]
                  },
                  {
                    $ne: ["$status", ISSUE_STATUS.RESOLVED],
                  },
                  {
                    $ne: ["$dueDate", null],
                  },
                ],
              },
              1,
              0,
            ],
          },
        },
      },
    },

    {
      $project: {
        _id: 0,
      },
    },
  ]);

  return (
    statistics || {
      total: 0,
      open: 0,
      inProgress: 0,
      resolved: 0,
      lowPriority: 0,
      mediumPriority: 0,
      highPriority: 0,
      overdue: 0,
    }
  );
}

async countIssues(filter) {
  return this.model.countDocuments(filter);
}

async updateIssue(id, data, options = {}) {
  return this.model
    .findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
      ...options,
    })
    .populate("createdBy", "firstName lastName email")
    .populate("assignee", "firstName lastName email");
}

async softDeleteIssue(id, deletedBy, options = {}) {
  return this.updateById(
    id,
    {
      isDeleted: true,
      deletedAt: new Date(),
      deletedBy,
    },
    options
  );
 }

}

module.exports = new IssueRepository();