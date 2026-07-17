const ApiError = require("../utils/apiError");

const notFound = (req, res, next) => {
  next(
  new ApiError({
    statusCode: 404,
    message: `Route ${req.originalUrl} not found`,
  })
);
};

module.exports = notFound;