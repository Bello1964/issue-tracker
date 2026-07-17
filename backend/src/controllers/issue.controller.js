const asyncHandler = require("../utils/asyncHandler");

const ApiResponse = require("../utils/apiResponse");

const issueService = require("../services/issue.service");

const {
  ISSUE_MESSAGES,
} = require("../utils/constants");

exports.createIssue = asyncHandler(async (req, res) => {
  const result = await issueService.createIssue(
    req.validated.body,
    req.auth
  );

  return ApiResponse.success(
    res,
    result,
    ISSUE_MESSAGES.CREATED,
    201
  );
});

exports.getIssueActivities = asyncHandler(async (req, res) => {
  const result = await issueService.getIssueActivities(
    req.validated.params.id,
    req.auth
  );

  return ApiResponse.success(
  res,
  result,
  ISSUE_MESSAGES.ACTIVITIES_RETRIEVED
);;
});

exports.getIssues = asyncHandler(async (req, res) => {
  const result = await issueService.getIssues(
    req.validated.query,
    req.auth
  );

 return ApiResponse.success(
  res,
  result,
  ISSUE_MESSAGES.LIST_RETRIEVED
);
});

exports.getIssue = asyncHandler(async (req, res) => {
  const result = await issueService.getIssue(
    req.validated.params.id,
    req.auth
  );

  return ApiResponse.success(
  res,
  result,
  ISSUE_MESSAGES.RETRIEVED
);
});

exports.updateIssue = asyncHandler(async (req, res) => {
  const result = await issueService.updateIssue(
    req.validated.params.id,
    req.validated.body,
    req.auth
  );

 return ApiResponse.success(
  res,
  result,
  ISSUE_MESSAGES.UPDATED
);
});

exports.deleteIssue = asyncHandler(async (req, res) => {
  await issueService.deleteIssue(
    req.validated.params.id,
    req.auth
  );

  return ApiResponse.success(
    res,
    null,
    ISSUE_MESSAGES.DELETED
  );
});

exports.getIssueStatistics = asyncHandler(async (req, res) => {
  const result = await issueService.getIssueStatistics(req.auth);

  return ApiResponse.success(
    res,
    result,
    ISSUE_MESSAGES.STATISTICS_RETRIEVED
  );
});