"use client";

import { useState, type FormEvent } from "react";

const companySizes = [
  "1-10",
  "11-50",
  "51-200",
  "201-1000",
  "1000+",
];

const inputBase =
  "block w-full rounded-md bg-neutral-200/70 px-4 py-3 text-sm text-ink placeholder:text-subtle focus:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-accent/40";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO(cofounder): wire to a real endpoint (Resend server action,
    // Formspree, Tally, or a /api/contact route). For now this is a no-op
    // that pretends to succeed so the UI is fully wired.
    setStatus("sent");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="full-name" className="mb-1.5 block text-sm text-ink">
          Full name
        </label>
        <input
          id="full-name"
          name="fullName"
          type="text"
          required
          placeholder="Enter full name"
          className={inputBase}
        />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label
            htmlFor="company-name"
            className="mb-1.5 block text-sm text-ink"
          >
            Company name
          </label>
          <input
            id="company-name"
            name="companyName"
            type="text"
            required
            placeholder="Enter company name"
            className={inputBase}
          />
        </div>
        <div>
          <label htmlFor="work-email" className="mb-1.5 block text-sm text-ink">
            Work email
          </label>
          <input
            id="work-email"
            name="workEmail"
            type="email"
            required
            placeholder="Enter work email"
            className={inputBase}
          />
        </div>
      </div>

      <div>
        <label htmlFor="company-size" className="mb-1.5 block text-sm text-ink">
          Company size
        </label>
        <select
          id="company-size"
          name="companySize"
          required
          defaultValue=""
          className={`${inputBase} appearance-none bg-[url("data:image/svg+xml;utf8,%3Csvg%20width%3D%2710%27%20height%3D%2710%27%20viewBox%3D%270%200%2010%2010%27%20fill%3D%27none%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Cpath%20d%3D%27M2%203.5L5%206.5L8%203.5%27%20stroke%3D%27%23868686%27%20stroke-width%3D%271.2%27%20stroke-linecap%3D%27round%27%20stroke-linejoin%3D%27round%27%2F%3E%3C%2Fsvg%3E")] bg-[length:12px] bg-[position:right_16px_center] bg-no-repeat pr-10`}
        >
          <option value="" disabled>
            Please Select…
          </option>
          {companySizes.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="phone" className="mb-1.5 block text-sm text-ink">
          Phone number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="e.g. +1 555 555 1234"
          className={inputBase}
        />
      </div>

      <div>
        <label htmlFor="needs" className="mb-1.5 block text-sm text-ink">
          Can you share more about your needs?
        </label>
        <textarea
          id="needs"
          name="needs"
          required
          rows={6}
          placeholder="Please share more about your needs so we can better understand them and ensure our sales team can assist you effectively when they reach out."
          className={`${inputBase} resize-y`}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sent"}
        className="inline-flex w-full items-center justify-center rounded-md bg-accent px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#2f3fd6] disabled:opacity-70"
      >
        {status === "sent" ? "Sent — we'll be in touch" : "Submit"}
      </button>

      {status === "sent" && (
        <p className="text-xs text-muted">
          Note: this form is not wired to a backend yet. See ContactForm.tsx
          to connect it to Resend, Formspree, Tally, or a Next.js server action.
        </p>
      )}
    </form>
  );
}
