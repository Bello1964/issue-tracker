/**
 * @swagger
 * components:
 *   schemas:
 *
 *     Issue:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: 685fc8dce7bde8e2bb6b0b12
 *
 *         title:
 *           type: string
 *           example: Fix login validation bug
 *
 *         description:
 *           type: string
 *           example: Backend currently accepts malformed email addresses.
 *
 *         status:
 *           type: string
 *           enum:
 *             - open
 *             - in_progress
 *             - closed
 *           example: open
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
 *           type: object
 *           nullable: true
 *           properties:
 *             id:
 *               type: string
 *               example: 685fc8dce7bde8e2bb6b0b12
 *             name:
 *               type: string
 *               example: Jane Doe
 *             email:
 *               type: string
 *               example: jane@example.com
 *
 *         createdBy:
 *           type: object
 *           properties:
 *             id:
 *               type: string
 *             name:
 *               type: string
 *             email:
 *               type: string
 *
 *         dueDate:
 *           type: string
 *           format: date-time
 *
 *         createdAt:
 *           type: string
 *           format: date-time
 *
 *         updatedAt:
 *           type: string
 *           format: date-time
 */