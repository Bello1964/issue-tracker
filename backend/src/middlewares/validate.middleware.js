const { ZodError } = require("zod");

const validate = (schemas = {}) => {
  return (req, res, next) => {
    try {
      req.validated = {};

      if (schemas.body) {
        req.validated.body = schemas.body.parse(req.body);
      }

      if (schemas.params) {
        req.validated.params = schemas.params.parse(req.params);
      }

      if (schemas.query) {
        req.validated.query = schemas.query.parse(req.query);
      }

      if (schemas.headers) {
        req.validated.headers = schemas.headers.parse(req.headers);
      }

      next();
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({
          success: false,
          message: "Validation failed",
          errors: error.flatten(),
        });
      }

      next(error);
    }
  };
};

module.exports = validate;