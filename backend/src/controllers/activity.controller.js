exports.getIssueActivities = asyncHandler(async (req, res) => {
  const result = await issueService.getIssueActivities(
    req.validated.params.id,
    req.auth
  );

  return ApiResponse.success(res, result);
});