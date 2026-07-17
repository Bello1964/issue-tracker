const { z } = require("zod");

const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters")
  .max(64, "Password cannot exceed 64 characters")
  .regex(/[A-Z]/, "Password must contain an uppercase letter")
  .regex(/[a-z]/, "Password must contain a lowercase letter")
  .regex(/[0-9]/, "Password must contain a number");

const registerSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(2)
    .max(50),

  lastName: z
    .string()
    .trim()
    .min(2)
    .max(50),

  email: z
    .string()
    .trim()
    .toLowerCase()
    .email(),

  password: passwordSchema,
});

const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email(),

  password: z.string().min(1),
});

module.exports = {
  registerSchema,
  loginSchema,
};