const ApiError = require("../utils/apiError");
const {
  USER_ROLES,
  USER_MESSAGES,
} = require("../utils/constants");

module.exports = function requireAdmin(
  req,
  res,
  next
) {
  if (req.auth.user.role !== USER_ROLES.ADMIN) {
    return next(
      new ApiError({
        statusCode: 403,
        message: USER_MESSAGES.FORBIDDEN,
        code: "FORBIDDEN",
      })
    );
  }

  next();
};