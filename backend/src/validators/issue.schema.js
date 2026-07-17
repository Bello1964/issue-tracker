const { z } = require("zod");
const {
  ISSUE_PRIORITY,
  ISSUE_STATUS,
} = require("../utils/constants");

const createIssueSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, "Title must be at least 3 characters")
    .max(100, "Title cannot exceed 100 characters"),

  description: z
    .string()
    .trim()
    .max(1000, "Description cannot exceed 1000 characters")
    .optional(),

  priority: z
    .enum(Object.values(ISSUE_PRIORITY))
    .optional(),

  status: z
    .enum(Object.values(ISSUE_STATUS))
    .optional(),

  assignee: z
  .string()
  .regex(/^[0-9a-fA-F]{24}$/)
  .nullable()
  .optional(),

  dueDate: z
    .string()
    .datetime()
    .optional(),
}).strict();

const getIssuesQuerySchema = z.object({
 page: z.preprocess(
  (value) => value === undefined ? undefined : Number(value),
  z.number()
  .int()
  .positive()
  .optional()
  ),

  limit: z.preprocess(
  (value) => value === undefined ? undefined : Number(value),
  z.number()
  .int()
  .positive()
  .max(100)
  .optional()
  ),

  status: z
    .enum(Object.values(ISSUE_STATUS))
    .optional(),

  priority: z
    .enum(Object.values(ISSUE_PRIORITY))
    .optional(),

  assignee: z
  .string()
  .regex(/^[0-9a-fA-F]{24}$/)
  .nullable()
  .optional(),

  search: z
    .string()
    .trim()
    .max(100)
    .optional(),

  sortBy: z.enum([
    "createdAt",
    "updatedAt",
    "priority",
    "dueDate",
    "status",
  ]).optional(),

  order: z.enum([
    "asc",
    "desc",
  ]).optional(),
}).strict();

const getIssueParamsSchema = z.object({
  id: z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid issue id"),
});

const updateIssueSchema = createIssueSchema
  .partial()
  .strict();

module.exports = {
  createIssueSchema,
  updateIssueSchema,
  getIssuesQuerySchema,
  getIssueParamsSchema,
};