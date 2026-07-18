const userRepository = require("../repositories/user.repository");
const ApiError = require("../utils/apiError");

const {
  serializeUser,
  serializeUsers,
} = require("../serializers/user.serializer");
const {
  USER_ROLES,
  USER_MESSAGES,
} = require("../utils/constants");

class UserService {
    async getUsers() {
    const users = await userRepository.findUsers();

    return {
        users: serializeUsers(users),
    };
    }

  async promoteUser(userId, auth) {
    if (auth.user.role !== USER_ROLES.ADMIN) {
      throw new ApiError({
        statusCode: 403,
        message: USER_MESSAGES.FORBIDDEN,
        code: "FORBIDDEN",
      });
    }

    const user = await userRepository.findUserById(userId);

    if (!user) {
      throw new ApiError({
        statusCode: 404,
        message: USER_MESSAGES.NOT_FOUND,
        code: "USER_NOT_FOUND",
      });
    }

    if (user.role === USER_ROLES.ADMIN) {
      return {
        message: USER_MESSAGES.PROMOTED,
        user,
      };
    }

    const updatedUser = await userRepository.updateUserRole(
      userId,
      USER_ROLES.ADMIN
    );

    return {
    message: USER_MESSAGES.PROMOTED,
    user: serializeUser(updatedUser),
    };
  }

  async demoteUser(userId, auth) {
    if (auth.user.role !== USER_ROLES.ADMIN) {
      throw new ApiError({
        statusCode: 403,
        message: USER_MESSAGES.FORBIDDEN,
        code: "FORBIDDEN",
      });
    }

    if (auth.user._id.toString() === userId.toString()) {
      throw new ApiError({
        statusCode: 400,
        message: USER_MESSAGES.SELF_DEMOTION_NOT_ALLOWED,
        code: "SELF_DEMOTION_NOT_ALLOWED",
      });
    }

    const user = await userRepository.findUserById(userId);

    if (!user) {
      throw new ApiError({
        statusCode: 404,
        message: USER_MESSAGES.NOT_FOUND,
        code: "USER_NOT_FOUND",
      });
    }

    if (user.role === USER_ROLES.ADMIN) {
    const adminCount = await userRepository.countAdmins();

    if (adminCount <= 1) {
        throw new ApiError({
        statusCode: 400,
        message: USER_MESSAGES.LAST_ADMIN,
        code: "LAST_ADMIN",
        });
    }
    }

    const updatedUser = await userRepository.updateUserRole(
      userId,
      USER_ROLES.USER
    );

    return {
    message: USER_MESSAGES.DEMOTED,
    user: serializeUser(updatedUser),
    };
  }
}

module.exports = new UserService();