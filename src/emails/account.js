const { send } = require("@sendgrid/mail");
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRIP_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail
    .send({
      to: email,
      from: "lorem1291@gmail.com",
      subject: "Welcome on task app",
      text: `Welcome ${name} you just joined my app !`,
    })
    .then(() => {
      console.log("message sent");
    })
    .catch((error) => {
      console.log(error.response.body);
    });
};

const sendCancelationEmail = (email, name) => {
  sgMail
    .send({
      to: email,
      from: "lorem1291@gmail.com",
      subject: "Sorry to see you go.",
      text: `Goodbye ${name}. hope to see you back soon !`,
    })
    .then(() => {
      console.log("message sent");
    })
    .catch((error) => {
      console.log(error.response.body);
    });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
};
