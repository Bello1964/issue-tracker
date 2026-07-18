const express = require("express");

const router = express.Router();

const authenticate = require("../middlewares/auth.middleware");
const requireAdmin = require("../middlewares/admin.middleware");
const validate = require("../middlewares/validate.middleware");

const {
  userParamsSchema,
} = require("../validators/user.schema");

const userController = require("../controllers/user.controller");

router.get(
  "/",
  authenticate,
  requireAdmin,
  userController.getUsers
);

router.patch(
  "/:userId/promote",
  authenticate,
  requireAdmin,
  validate({
    params: userParamsSchema,
  }),
  userController.promoteUser
);

router.patch(
  "/:userId/demote",
  authenticate,
  requireAdmin,
  validate({
    params: userParamsSchema,
  }),
  userController.demoteUser
);

module.exports = router;