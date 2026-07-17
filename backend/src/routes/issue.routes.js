const express = require("express");

const router = express.Router();

const authenticate = require("../middlewares/auth.middleware");

const validate = require("../middlewares/validate.middleware");

const {
  createIssueSchema,
  updateIssueSchema,
  getIssueParamsSchema,
  getIssuesQuerySchema,
} = require("../validators/issue.schema");

const issueController = require("../controllers/issue.controller");

router.get(
  "/",
  authenticate,
  validate({
    query: getIssuesQuerySchema,
  }),
  issueController.getIssues
);

router.post(
  "/",
  authenticate,
  validate({
    body: createIssueSchema,
  }),
  issueController.createIssue
);


router.get(
  "/stats",
  authenticate,
  issueController.getIssueStatistics
);

router.get(
  "/:id/activities",
  authenticate,
  validate({
    params: getIssueParamsSchema,
  }),
  issueController.getIssueActivities
);

router.get(
  "/:id",
  authenticate,
  validate({
    params: getIssueParamsSchema,
  }),
  issueController.getIssue
);

router.patch(
  "/:id",
  authenticate,
  validate({
    params: getIssueParamsSchema,
    body: updateIssueSchema,
  }),
  issueController.updateIssue
);

router.delete(
  "/:id",
  authenticate,
  validate({
    params: getIssueParamsSchema,
  }),
  issueController.deleteIssue
);

module.exports = router;