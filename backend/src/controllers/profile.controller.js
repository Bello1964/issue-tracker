const profileService = require("../services/profile.service");

class ProfileController {
  async getProfile(req, res, next) {
    try {
      const result = await profileService.getProfile(
        req.auth.user
      );

      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new ProfileController();