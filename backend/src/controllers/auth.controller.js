const asyncHandler = require("../utils/asyncHandler");

const ApiResponse = require("../utils/apiResponse");

const authService = require("../services/auth.service");

const { AUTH_MESSAGES,  COOKIE, } = require("../utils/constants");

exports.register = asyncHandler(async (req, res) => {
  const { token, user } = await authService.register(req.validated.body);

  res.cookie(
    COOKIE.NAME,
    token,
    COOKIE.OPTIONS
  );

  return ApiResponse.success(
    res,
    { user },
    AUTH_MESSAGES.REGISTER_SUCCESS,
    201
  );
});

exports.login = asyncHandler(async (req, res) => {
  const { token, user } = await authService.login(req.validated.body);

  res.cookie(
    COOKIE.NAME,
    token,
    COOKIE.OPTIONS
  );

  return ApiResponse.success(
    res,
    { user },
    AUTH_MESSAGES.LOGIN_SUCCESS
  );
});

exports.logout = asyncHandler(async (req, res) => {
  res.clearCookie(
    COOKIE.NAME,
    {
      httpOnly: COOKIE.OPTIONS.httpOnly,
      secure: COOKIE.OPTIONS.secure,
      sameSite: COOKIE.OPTIONS.sameSite,
    }
  );

  return ApiResponse.success(
    res,
    null,
    AUTH_MESSAGES.LOGOUT_SUCCESS
  );
});
exports.me = asyncHandler(async (req, res) => {
  const result = await authService.me(req.auth.user);

  return ApiResponse.success(
    res,
    result,
    AUTH_MESSAGES.USER_FETCH_SUCCESS
  );
});