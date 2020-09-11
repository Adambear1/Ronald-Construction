// const nodemailer = require("nodemailer");
// require("dotenv").config();

// module.exports.newInquiry = function (newInquiry) {
//   var transporter = nodemailer.createTransport({
//     service: "Gmail",
//     auth: {
//       user: process.env.EMAIL,
//       pass: process.env,
//     },
//   });
//   let mailOptions = {
//     from: "ngoudeau2012@gmail.com",
//     to: newInquiry.email,
//     subject: `New Inquiry! - ${newInquiry.name}`,
//     text: `
//       Email: ${newInquiry.email}`,
//   };
//   transporter.sendMail(mailOptions, (err, data) => {
//     if (err) {
//       return err;
//     }
//     return console.log("Email sent!!!");
//   });
// };