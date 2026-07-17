const mongoose = require("mongoose");
const { baseSchema, schemaOptions } = require("./BaseModel");
const { USER_ROLES } = require("../utils/constants");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },

    lastName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      select: false,
    },

    role: {
      type: String,
      enum: Object.values(USER_ROLES),
      default: USER_ROLES.USER,
    },

    ...baseSchema,
  },
  schemaOptions
);


module.exports = mongoose.model("User", userSchema);