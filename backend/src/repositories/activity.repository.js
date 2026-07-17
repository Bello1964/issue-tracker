const MongoRepository = require("./MongoRepository");
const ActivityLog = require("../models/ActivityLog");

class ActivityRepository extends MongoRepository {
  constructor() {
    super(ActivityLog);
  }

  async logActivity(data) {
    return this.create(data);
  }

  async findIssueActivity(issueId) {
   const activity = this.model
      .find({ issue: issueId })
      .populate("user", "firstName lastName")
      .sort({ createdAt: -1 });

    return activity;
  }

  async createActivity(data, session = null) {
  return this.create(data, { session });
  }

  async findActivitiesByIssue(issueId) {
  return this.model
    .find({
      issue: issueId,
    })
    .populate("user", "firstName lastName email")
    .sort({
      createdAt: -1,
    });
   }
}

module.exports = new ActivityRepository();