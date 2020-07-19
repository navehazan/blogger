const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);


const getMessage = (to) => ({
  to,
  from: "navegit@gmail.com",
  subject: "Dear blogger this is your task",
  text: "Write some blog about vpn",
  html: "<strong>Write some blog about vpn </strong>",
});

module.exports = { sgMail, getMessage };
