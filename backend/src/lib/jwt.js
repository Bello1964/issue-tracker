const jwt = require("jsonwebtoken");

const generateToken = (payload) => {
  return jwt.sign(
    {
      id: payload.id,
      role: payload.role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN,
    }
  );
};

const verifyToken = (token) => {
  return jwt.verify(
    token,
    process.env.JWT_SECRET
  );
};

module.exports = {
  generateToken,
  verifyToken,
};