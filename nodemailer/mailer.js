// mailer.js
const nodemailer = require("nodemailer");

function sendEmail({ subject, message }) {
  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      host: "smtp.iq.pl",
      port: 465,
      secure: true,
      auth: {
        user: "d.samelak@it-premium.pl",
        pass: "testpassword",
      },
    });

    const mailOptions = {
      from: "d.samelak@it-premium.pl",
      to: "domcio145@wp.pl",
      subject,
      html: `<p>${message}</p>`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        return reject({ message: "An error has occurred" });
      }
      return resolve({ message: "Email sent successfully" });
    });
  });
}

module.exports = sendEmail;
