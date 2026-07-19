import { z } from "zod";

const objectIdRegex =
  /^[a-f\d]{24}$/i;

export const issueSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, "Title must be at least 3 characters.")
    .max(
      120,
      "Title cannot exceed 120 characters."
    ),

  description: z
    .string()
    .trim()
    .max(
      1000,
      "Description cannot exceed 1000 characters."
    )
    .optional()
    .or(z.literal("")),

  priority: z.enum(
    ["low", "medium", "high"],
    {
      message: "Please select a priority.",
    }
  ),

  status: z.enum(
    ["open", "in_progress", "resolved"],
    {
      message: "Please select a status.",
    }
  ),

  assignee: z
    .string()
    .trim()
    .optional()
    .or(z.literal(""))
    .refine(
      (value) =>
        !value || objectIdRegex.test(value),
      {
        message:
          "Assignee must be a valid user ID.",
      }
    ),

  dueDate: z
    .string()
    .min(1, "Due date is required.")
    .refine(
      (value) => {
        const selected =
          new Date(value);

        return (
          !Number.isNaN(selected.getTime()) &&
          selected >
            new Date()
        );
      },
      {
        message:
          "Due date must be in the future.",
      }
    ),
});