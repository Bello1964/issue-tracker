const ApiError = require("../utils/apiError");

const errorMiddleware = (err, req, res, next) => {
console.error(err.stack || err);
  
  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
      code: err.code,
      errors: err.errors,
    });
  }

  return res.status(500).json({
    success: false,
    message:
      process.env.NODE_ENV === "production"
        ? "Internal Server Error"
        : err.message,
  });
};

module.exports = errorMiddleware;