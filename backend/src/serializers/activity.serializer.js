const serialize = (activity) => {
  if (!activity) return null;

  const object = activity.toObject ? activity.toObject() : activity;

  return {
    id: object._id.toString(),

    issue: object.issue,

    user: object.user,

    action: object.action,

    metadata: object.metadata,

    createdAt: object.createdAt,
  };
};

const serializeActivity = (data) => {
  if (Array.isArray(data)) {
    return data.map(serialize);
  }

  return serialize(data);
};

module.exports = {
  serializeActivity,
};