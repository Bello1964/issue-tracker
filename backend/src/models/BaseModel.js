const { Schema } = require("mongoose");

const baseSchema = {
  isDeleted: {
    type: Boolean,
    default: false,
    index: true,
  },

  deletedAt: {
    type: Date,
    default: null,
  },
};

const schemaOptions = {
  timestamps: true,
  versionKey: false,
};

module.exports = {
  baseSchema,
  schemaOptions,
};