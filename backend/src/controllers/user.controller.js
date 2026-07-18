const userService = require("../services/user.service");

class UserController {
  async getUsers(req, res, next) {
    try {
      const result = await userService.getUsers();

      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  async promoteUser(req, res, next) {
    try {
      const result = await userService.promoteUser(
        req.params.userId,
        req.auth
      );

      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  async demoteUser(req, res, next) {
    try {
      const result = await userService.demoteUser(
        req.params.userId,
        req.auth
      );

      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new UserController();