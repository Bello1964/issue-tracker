const serialize = (user) => {
  if (!user) return null;

  const object = user.toObject ? user.toObject() : user;

  return {
    id: object._id.toString(),
    firstName: object.firstName,
    lastName: object.lastName,
    email: object.email,
    role: object.role,
    createdAt: object.createdAt,
    updatedAt: object.updatedAt,
  };
};

module.exports = {
  serializeUser: serialize,
};