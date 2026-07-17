const { getIO } = require("./index");

const emitIssueCreated = (issue) => {
  const io = getIO();
  io.emit("issueCreated", issue);
  io.emit("dashboardUpdated");
};

const emitIssueUpdated = (issue) => {
  const io = getIO();
  io.emit("issueUpdated", issue);
  io.emit("dashboardUpdated");
};

const emitIssueDeleted = (id) => {
  const io = getIO();
  io.emit("issueDeleted", { id });
  io.emit("dashboardUpdated");
};

module.exports = {
  emitIssueCreated,
  emitIssueUpdated,
  emitIssueDeleted,
};