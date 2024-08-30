"use server";

import { z, ZodError } from "zod";
import nodemailer from "nodemailer";
import { ContactFormResponse } from "@/types/contactFormResponse.type";
import sendContactEmail from "./sendContactEmail";
import { ContactFormData } from "@/types/contactFormData.type";

// todo: abstract mailing
export async function sendMessage(
  _: any,
  formData: FormData
): Promise<ContactFormResponse> {
  // create object from formData
  const formDataObj = Object.fromEntries(formData.entries());

  // Validation
  // create schema
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

  // check against schema
  try {
    dataSchema.parse(formDataObj);
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

  // Emailing
  // object to be submited to sendContactEmail
  const data = {
    firstName: formDataObj.firstName.toString(),
    lastName: formDataObj.lastName.toString(),
    email: formDataObj.email.toString(),
    message: formDataObj.message.toString(),
  };

  try {
    // send email
    await sendContactEmail(data);
  } catch (err) {
    // error handling
    console.error(err);
    return { message: "Message failed to send!", success: false };
  }

  // send success message to client
  return { message: "Message sent!", success: true };
}
