const issueAssignedTemplate = ({ assigneeName, issueTitle, assignedBy }) => ({
  subject: `New Issue Assigned: ${issueTitle}`,
  html: `
    <h2>Hello ${assigneeName},</h2>

    <p>You have been assigned a new issue.</p>

    <p><strong>Issue:</strong> ${issueTitle}</p>

    <p><strong>Assigned By:</strong> ${assignedBy}</p>

    <p>Please log in to the Mini Issue Tracker to view the issue details.</p>

    <br/>

    <p>Mini Issue Tracker</p>
  `,
});

module.exports = issueAssignedTemplate;