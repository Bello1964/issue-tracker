const ApiError = require("../utils/apiError");
const { verifyToken } = require("../lib/jwt");
const userRepository = require("../repositories/user.repository");
const { AUTH_MESSAGES, COOKIE, } = require("../utils/constants");

const authenticate = async (req, res, next) => {

  try {
    const token = req.cookies[COOKIE.NAME];

if (!token) {
  throw new ApiError({
    statusCode: 401,
    message: AUTH_MESSAGES.UNAUTHORIZED,
    code: "AUTH_REQUIRED",
  });
}

    const payload = verifyToken(token);

    const user = await userRepository.findUserById(payload.id);

    if (!user) {
      throw new ApiError({
        statusCode: 401,
        message: AUTH_MESSAGES.INVALID_CREDENTIALS,
        code: "INVALID_CREDENTIALS",
      });
    }

    req.auth = {
      token,
      payload,
      user,
    };

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authenticate;