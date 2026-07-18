const { z } = require("zod");

const mongoId = /^[a-f\d]{24}$/i;

const userParamsSchema = z.object({
  userId: z.string().regex(mongoId, "Invalid user id."),
});

module.exports = {
  userParamsSchema,
};