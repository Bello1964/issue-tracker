const ApiError = require("../utils/apiError");

const userRepository = require("../repositories/user.repository");
const issueRepository = require("../repositories/issue.repository");

const profileSerializer = require("../serializers/profile.serializer");

const { USER_MESSAGES } = require("../utils/constants");

class ProfileService {
  async getProfile(user) {
  const statistics =
    await issueRepository.getUserIssueStatistics(
      user._id
    );

  return profileSerializer.serialize(
    user,
    statistics
  );
}
}

module.exports = new ProfileService();