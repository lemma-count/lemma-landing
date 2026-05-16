"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactState =
  | { status: "idle" }
  | { status: "sent" }
  | { status: "error"; message: string };

export async function submitContact(formData: FormData): Promise<ContactState> {
  const fullName = formData.get("fullName") as string;
  const companyName = formData.get("companyName") as string;
  const workEmail = formData.get("workEmail") as string;
  const companySize = formData.get("companySize") as string;
  const phone = (formData.get("phone") as string) || "—";
  const needs = formData.get("needs") as string;

  if (!fullName || !companyName || !workEmail || !companySize || !needs) {
    return { status: "error", message: "Missing required fields." };
  }

  try {
    await resend.emails.send({
      from: "Lemma Contact <noreply@heylemma.com>",
      to: "contact@heylemma.com",
      replyTo: workEmail,
      subject: `New contact from ${fullName} — ${companyName}`,
      text: [
        `Name: ${fullName}`,
        `Company: ${companyName}`,
        `Email: ${workEmail}`,
        `Company size: ${companySize}`,
        `Phone: ${phone}`,
        ``,
        `Message:`,
        needs,
      ].join("\n"),
    });

    return { status: "sent" };
  } catch {
    return { status: "error", message: "Failed to send. Please try again." };
  }
}
