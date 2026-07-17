/**
 * @swagger
 * components:
 *   schemas:
 *
 *     IssueResponse:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *           example: true
 *         message:
 *           type: string
 *           example: Issue retrieved successfully
 *         data:
 *           type: object
 *           properties:
 *             issue:
 *               $ref: '#/components/schemas/Issue'
 *
 *
 *     IssueListResponse:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *           example: true
 *         message:
 *           type: string
 *           example: Issues retrieved successfully
 *         data:
 *           type: object
 *           properties:
 *             issues:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Issue'
 *             pagination:
 *               type: object
 *               properties:
 *                 total:
 *                   type: integer
 *                   example: 25
 *                 page:
 *                   type: integer
 *                   example: 1
 *                 limit:
 *                   type: integer
 *                   example: 10
 *                 totalPages:
 *                   type: integer
 *                   example: 3
 *                 hasNextPage:
 *                   type: boolean
 *                   example: true
 *                 hasPreviousPage:
 *                   type: boolean
 *                   example: false
 *
 *
 *     DashboardStatisticsResponse:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *           example: true
 *         message:
 *           type: string
 *           example: Dashboard statistics retrieved successfully
 *         data:
 *           type: object
 *           properties:
 *             total:
 *               type: integer
 *               example: 18
 *             open:
 *               type: integer
 *               example: 8
 *             inProgress:
 *               type: integer
 *               example: 6
 *             resolved:
 *               type: integer
 *               example: 4
 *             lowPriority:
 *               type: integer
 *               example: 3
 *             mediumPriority:
 *               type: integer
 *               example: 10
 *             highPriority:
 *               type: integer
 *               example: 5
 *             overdue:
 *               type: integer
 *               example: 2
 *
 *
 *     Activity:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         action:
 *           type: string
 *           example: issue_updated
 *         description:
 *           type: string
 *           example: Updated issue priority
 *         createdBy:
 *           type: string
 *         createdAt:
 *           type: string
 *           format: date-time
 *
 *
 *     ActivityListResponse:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *           example: true
 *         message:
 *           type: string
 *           example: Issue activities retrieved successfully
 *         data:
 *           type: object
 *           properties:
 *             activities:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Activity'
 */