const serializeIssue = (issue) => {
  if (!issue) return null;

  const obj = issue.toObject ? issue.toObject() : issue;

  function serializeUser(user) {
  if (!user) return null;

  return {
    id: user._id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
  };
}

  return {
    id: obj._id.toString(),

    title: obj.title,

    description: obj.description,

    status: obj.status,

    priority: obj.priority,

    createdBy: serializeUser(obj.createdBy),

    assignee: serializeUser(obj.assignee),

    dueDate: obj.dueDate,

    createdAt: obj.createdAt,

    updatedAt: obj.updatedAt,
  };
};

module.exports = {
  serializeIssue,
};