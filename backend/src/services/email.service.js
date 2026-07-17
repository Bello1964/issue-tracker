const transporter = require("../config/mail");

const issueAssignedTemplate = require("../templates/issueAssigned.template");
const issueStatusChangedTemplate = require("../templates/issueStatusChanged.template");

class EmailService {
  async sendIssueAssignedEmail(data) {
    const template = issueAssignedTemplate(data);

    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: data.email,
      subject: template.subject,
      html: template.html,
    });
  }

  async sendStatusChangedEmail(data) {
    const template = issueStatusChangedTemplate(data);

    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: data.email,
      subject: template.subject,
      html: template.html,
    });
  }
}

module.exports = new EmailService();