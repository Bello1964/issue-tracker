module.exports = {
  testEnvironment: "node",

  testMatch: [
    "**/tests/**/*.test.js",
  ],

  setupFilesAfterEnv: [
    "<rootDir>/tests/setup.js",
  ],

  clearMocks: true,

  collectCoverageFrom: [
    "src/**/*.js",
    "!src/server.js",
    "!src/config/**",
  ],

  coverageDirectory: "coverage",
};