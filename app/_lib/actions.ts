"use server";

import { z, ZodError } from "zod";
import { Resend } from "resend";
import { ContactFormResponse } from "@/types/contactFormResponse";
import nodemailer from "nodemailer";

const resend = new Resend(process.env.RESEND_API_KEY);
const transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "d54c5eda8534c0",
    pass: "fb4ed5df6f4570",
  },
});

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
    from: "no-reply@halfcenturyhealthandfitness.com",
    to: `${email}`,
    subject: `New Message from ${firstName} ${lastName} <${email}>`,
    text: `------------- NAME & EMAIL --------------\n${firstName} ${lastName} <${email}>\n\n---------------- MESSAGE ----------------\n${message}`,
  };

  // send email
  await transporter.sendMail(mailOptions);

  // send success message to client
  return { message: "Message sent!", success: true };
}
