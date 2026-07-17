class ApiError extends Error {
  constructor({
    statusCode = 500,
    message = "Internal Server Error",
    errors = null,
    code = null,
  }) {
    super(message);

    this.statusCode = statusCode;
    this.success = false;
    this.errors = errors;
    this.code = code;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = ApiError;