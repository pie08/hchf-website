import { ContactFormData } from "@/types/contactFormData.type";
import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
  host: "smtp.sendgrid.net",
  port: 587,
  auth: {
    user: process.env.SENDGRID_EMAIL_USERNAME,
    pass: process.env.SENDGRID_EMAIL_KEY,
  },
});

async function sendContactEmail({
  firstName,
  lastName,
  email,
  message,
}: ContactFormData) {
  // configure amil options
  const mailOptions = {
    from: process.env.FROM_EMAIL_USERNAME,
    to: process.env.SENDTO_EMAIL,
    replyTo: `${email}`,
    subject: `New Message from ${firstName} ${lastName} <${email}>`,
    text: `------------- NAME & EMAIL --------------\n${firstName} ${lastName} <${email}>\n\n---------------- MESSAGE ----------------\n${message}`,
  };

  // send mail
  await transporter.sendMail(mailOptions);
}

export default sendContactEmail;
