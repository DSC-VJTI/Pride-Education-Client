import nodemailer from "nodemailer";
import ejs from "ejs";

const sib_pass = process.env.SIB_PASS;
console.log(sib_pass);
const sendOtpEmail = async (email: string, otp: number) => {
  try {
    // Create a transporter
    const transporter = nodemailer.createTransport({
      host: "smtp-relay.sendinblue.com",
      port: 587,
      auth: {
        user: "pride.education.website@gmail.com",
        pass: sib_pass
      }
    });

    const otpHtml = await ejs.renderFile(__dirname + "/../views/otp.ejs", {
      otp: otp
    });
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: "pride.education.website@gmail.com", // sender address
      to: email, // list of receivers
      subject: "Pride Education | OTP verification", // Subject line
      html: otpHtml // html body
    });

    console.log(`Message sent: ${info.messageId}`);
  } catch (error) {
    console.error(error);
    throw new Error(
      `Something went wrong in the sendmail method. Error: ${error.message}`
    );
  }
};

export default sendOtpEmail;
