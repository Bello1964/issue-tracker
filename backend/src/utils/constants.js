const USER_ROLES = {
  ADMIN: "admin",
  USER: "user",
};

const ISSUE_STATUS = {
  OPEN: "open",
  IN_PROGRESS: "in_progress",
  CLOSED: "closed",
};

const ISSUE_PRIORITY = {
  LOW: "low",
  MEDIUM: "medium",
  HIGH: "high",
};

const AUTH_MESSAGES = {
  USER_EXISTS: "A user with this email already exists",
  INVALID_CREDENTIALS: "Invalid email or password",
  UNAUTHORIZED: "Unauthorized",
  FORBIDDEN: "Forbidden",
  REGISTER_SUCCESS: "User registered successfully",
  LOGIN_SUCCESS: "Login successful",
  USER_FETCH_SUCCESS: "User profile retrieved successfully",
  LOGOUT_SUCCESS: "Logout successful",
};

const ISSUE_MESSAGES = {
  CREATED: "Issue created successfully",
  UPDATED: "Issue updated successfully",
  DELETED: "Issue deleted successfully",

  RETRIEVED: "Issue retrieved successfully",
  LIST_RETRIEVED: "Issues retrieved successfully",
  ACTIVITIES_RETRIEVED: "Issue activities retrieved successfully",
  STATISTICS_RETRIEVED: "Dashboard statistics retrieved successfully",

  NOT_FOUND: "Issue not found",
  ASSIGNEE_NOT_FOUND: "The selected assignee does not exist",

  FORBIDDEN: "You are not authorized to access this issue.",
};

const ACTIVITY_ACTIONS = {
  ISSUE_CREATED: "issue_created",
  ISSUE_UPDATED: "issue_updated",
  ISSUE_DELETED: "issue_deleted",
};

const COOKIE = {
  NAME: "token",
  OPTIONS: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  },
};

module.exports = {
  USER_ROLES,
  ISSUE_STATUS,
  ISSUE_PRIORITY,
  AUTH_MESSAGES,
  ISSUE_MESSAGES,
  ACTIVITY_ACTIONS,
  COOKIE,
};