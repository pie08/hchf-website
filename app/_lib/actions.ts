"use server";

import { z, ZodError } from "zod";
import { Resend } from "resend";
import { ContactFormResponse } from "@/types/contactFormResponse";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.sendgrid.net",
  port: 587,
  auth: {
    user: process.env.SENDGRID_EMAIL_USERNAME,
    pass: process.env.SENDGRID_EMAIL_KEY,
  },
});

// todo: abstract mailing
export async function sendMessage(
  prevState: any,
  formData: FormData
): Promise<ContactFormResponse> {
  console.log(prevState);
  const data = Object.fromEntries(formData.entries());
  const { firstName, lastName, email, message } = data;

  //  validation
  const dataSchema = z.object({
    firstName: z.string({
      required_error: "First name is required",
    }),
    lastName: z.string({
      required_error: "Last name is required",
    }),
    email: z
      .string({
        required_error: "Email is required",
      })
      .email({
        message: "Invalid email address",
      }),
    message: z.string({
      required_error: "Message is required",
    }),
  });

  try {
    dataSchema.parse(data);
  } catch (err) {
    // error handling
    if (err instanceof ZodError) {
      const issue = err.issues[0];
      return {
        message: issue.message,
        success: false,
      };
    }
  }

  // configure amil options
  const mailOptions = {
    from: process.env.FROM_EMAIL_USERNAME,
    to: process.env.SENDTO_EMAIL,
    replyTo: `${email}`,
    subject: `New Message from ${firstName} ${lastName} <${email}>`,
    text: `------------- NAME & EMAIL --------------\n${firstName} ${lastName} <${email}>\n\n---------------- MESSAGE ----------------\n${message}`,
  };

  try {
    // send email
    await transporter.sendMail(mailOptions);
  } catch (err) {
    console.error(err);
    return { message: "Message failed to send!", success: false };
  }

  // send success message to client
  return { message: "Message sent!", success: true };
}
