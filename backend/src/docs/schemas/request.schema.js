/**
 * @swagger
 * components:
 *   schemas:
 *
 *     RegisterRequest:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *       properties:
 *         name:
 *           type: string
 *           example: John Doe
 *         email:
 *           type: string
 *           format: email
 *           example: john@example.com
 *         password:
 *           type: string
 *           format: password
 *           example: Password123!
 *
 *
 *     LoginRequest:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *           example: john@example.com
 *         password:
 *           type: string
 *           format: password
 *           example: Password123!
 *
 *
 *     CreateIssueRequest:
 *       type: object
 *       required:
 *         - title
 *       properties:
 *         title:
 *           type: string
 *           example: Fix login validation
 *
 *         description:
 *           type: string
 *           example: Backend accepts invalid email addresses.
 *
 *         priority:
 *           type: string
 *           enum:
 *             - low
 *             - medium
 *             - high
 *           example: high
 *
 *         assignee:
 *           type: string
 *           nullable: true
 *           example: 685fc8dce7bde8e2bb6b0b12
 *
 *         dueDate:
 *           type: string
 *           format: date-time
 *           example: 2026-08-01T18:00:00.000Z
 *
 *
 *     UpdateIssueRequest:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           example: Fix login validation
 *
 *         description:
 *           type: string
 *           example: Backend now rejects invalid emails.
 *
 *         status:
 *           type: string
 *           enum:
 *             - open
 *             - in_progress
 *             - closed
 *
 *         priority:
 *           type: string
 *           enum:
 *             - low
 *             - medium
 *             - high
 *
 *         assignee:
 *           type: string
 *           nullable: true
 *
 *         dueDate:
 *           type: string
 *           format: date-time
 */