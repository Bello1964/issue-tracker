const activityRepository = require("../repositories/activity.repository");

const {
  serializeActivity,
} = require("../serializers/activity.serializer");

class ActivityService {
 async logActivity(data, session = null) {
  return activityRepository.createActivity(data, session);
  }

  async getActivities(issueId) {
  const activities =
    await activityRepository.findActivitiesByIssue(issueId);

  return {
    activities: activities.map(serializeActivity),
  };
}
}

module.exports = new ActivityService();