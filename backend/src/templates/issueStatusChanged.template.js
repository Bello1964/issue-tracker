const issueStatusChangedTemplate = ({
  assigneeName,
  issueTitle,
  oldStatus,
  newStatus,
}) => ({
  subject: `Issue Updated: ${issueTitle}`,
  html: `
    <h2>Hello ${assigneeName},</h2>

    <p>The status of an issue assigned to you has changed.</p>

    <p><strong>Issue:</strong> ${issueTitle}</p>

    <p><strong>Previous Status:</strong> ${oldStatus}</p>

    <p><strong>Current Status:</strong> ${newStatus}</p>

    <br/>

    <p>Mini Issue Tracker</p>
  `,
});

module.exports = issueStatusChangedTemplate;