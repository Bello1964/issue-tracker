const mongoose = require("mongoose");

const {
  ISSUE_PRIORITY,
  ISSUE_STATUS,
} = require("../utils/constants");

const {
  baseSchema,
  schemaOptions,
} = require("./BaseModel");

const issueSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 100,
    },

    description: {
      type: String,
      default: "",
      maxlength: 1000,
    },

    status: {
      type: String,
      enum: Object.values(ISSUE_STATUS),
      default: ISSUE_STATUS.OPEN,
    },

    priority: {
      type: String,
      enum: Object.values(ISSUE_PRIORITY),
      default: ISSUE_PRIORITY.MEDIUM,
    },

    assignee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },

    createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    immutable: true,
   },

    dueDate: {
      type: Date,
      default: null,
    },

    ...baseSchema,
  },
  schemaOptions
);

issueSchema.index({
  status: 1,
  priority: 1,
});

issueSchema.index({
  assignee: 1,
});

issueSchema.index({
  createdBy: 1,
});

issueSchema.index({
  dueDate: 1,
});

module.exports = mongoose.model("Issue", issueSchema);