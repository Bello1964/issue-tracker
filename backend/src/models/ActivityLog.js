const mongoose = require("mongoose");

const {
  baseSchema,
  schemaOptions,
} = require("./BaseModel");

const activityLogSchema = new mongoose.Schema(
  {
    issue: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Issue",
      required: true,
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    action: {
      type: String,
      required: true,
    },

    metadata: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
    },

    ...baseSchema,
  },
  schemaOptions
);

activityLogSchema.index({
  issue: 1,
  createdAt: -1,
});

module.exports = mongoose.model(
  "ActivityLog",
  activityLogSchema
);