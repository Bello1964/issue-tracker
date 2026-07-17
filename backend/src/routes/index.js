const express = require("express");

const router = express.Router();

const authRoutes = require("./auth.routes");

const issueRoutes = require("./issue.routes");

router.use("/issues", issueRoutes);

router.use("/auth", authRoutes);

router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "API v1",
  });
});

module.exports = router;