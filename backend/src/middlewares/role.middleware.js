const ApiError = require("../utils/apiError");

const authorize =
  (...roles) =>
  (req, res, next) => {
    if (!req.auth?.user) {
      return next(
        new ApiError({
          statusCode: 401,
          message: "Authentication required",
        })
      );
    }

    if (!roles.includes(req.auth.user.role)) {
      return next(
        new ApiError({
          statusCode: 403,
          message: "Forbidden",
          code: "FORBIDDEN",
        })
      );
    }

    next();
  };

module.exports = authorize;