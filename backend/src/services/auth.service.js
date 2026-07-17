const ApiError = require("../utils/apiError");

const { AUTH_MESSAGES } = require("../utils/constants");

const userRepository = require("../repositories/user.repository");

const { hashPassword } = require("../lib/bcrypt");

const { generateToken } = require("../lib/jwt");

const { comparePassword } = require("../lib/bcrypt");

const { serializeUser } = require("../serializers/user.serializer");

class AuthService {
  async register(data) {
  let user;

try {
    
  const hashedPassword = await hashPassword(data.password);

   const user = await userRepository.createUser({
        ...data,
        password: hashedPassword,
    });

     const token = generateToken({
      id: user._id,
      role: user.role,
    });

    return {
      token,
      user: serializeUser(user),
    };

} catch (error) {
    if (error.code === 11000) {
        throw new ApiError({
            statusCode: 409,
            message: AUTH_MESSAGES.USER_EXISTS,
            code: "EMAIL_EXISTS",
        });
    }

    throw error;
};

   
  }

  async login(data) {
  const user = await userRepository.findUserByEmail(data.email);

  if (!user) {
    throw new ApiError({
      statusCode: 401,
      message: AUTH_MESSAGES.INVALID_CREDENTIALS,
      code: "INVALID_CREDENTIALS",
    });
  }

  const passwordMatches = await comparePassword(
    data.password,
    user.password
  );

  if (!passwordMatches) {
    throw new ApiError({
      statusCode: 401,
      message: AUTH_MESSAGES.INVALID_CREDENTIALS,
      code: "INVALID_CREDENTIALS",
    });
  }

  const token = generateToken({
    id: user._id,
    role: user.role,
  });

return {
  token,
  user: serializeUser(user),
};
};

async me(user) {
  return {
    user: serializeUser(user),
  };
}

}

module.exports = new AuthService();