const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

function sendEmail({subject, message }) {
  return new Promise((resolve, reject) => {
    var transporter = nodemailer.createTransport({
  host: "smtp.iq.pl",
  port: 465,
  secure: true, // upgrade later with STARTTLS
  auth: {
    user: "d.samelak@it-premium.pl",
    pass: "XD",
  },
});

    const mail_configs = {
      from: "d.samelak@it-premium.pl",
      to: "domcio145@wp.pl",
      subject: subject,
      html: `
      <p>${message}</p>
      `,
    };
    transporter.sendMail(mail_configs, function (error, info) {
      if (error) {
        console.log(error);
        return reject({ message: `An error has occurred` });
      }
      return resolve({ message: "Email sent successfully" });
    });
  }); 
}

app.get("/", (req, res) => {
  console.log("Request Query:", req.query);
  sendEmail(req.query)
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});

app.listen(port, () => {
  console.log(`nodemailerProject is listening at http://localhost:${port}`);
});