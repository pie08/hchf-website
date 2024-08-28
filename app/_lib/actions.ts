"use server";

export async function sendMessage(formData: FormData) {
  const { firstName, lastName, email, message } = Object.fromEntries(
    formData.entries()
  );

  // todo: validate with zod
  // validate all fields exist
  // validate email is valid
  // validate message length
  console.log(firstName);
  console.log(lastName);
  console.log(email);
  console.log(message);

  // send message info via email
}
