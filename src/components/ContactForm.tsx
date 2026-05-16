"use client";

import { useState, useRef } from "react";
import { submitContact, type ContactState } from "@/app/actions/contact";

const companySizes = ["1-10", "11-50", "51-200", "201-1000", "1000+"];

const inputBase =
  "block w-full rounded-md bg-neutral-200/70 px-4 py-3 text-sm text-ink placeholder:text-subtle focus:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-accent/40";

export function ContactForm() {
  const [state, setState] = useState<ContactState>({ status: "idle" });
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const data = new FormData(e.currentTarget);
    const result = await submitContact(data);
    setState(result);
    setLoading(false);
    if (result.status === "sent") formRef.current?.reset();
  }

  if (state.status === "sent") {
    return (
      <div className="rounded-lg border border-border bg-neutral-50 px-6 py-12 text-center">
        <p className="text-lg font-medium text-ink">Message sent.</p>
        <p className="mt-2 text-sm text-muted">
          We&apos;ll get back to you at your work email shortly.
        </p>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
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
          <label htmlFor="company-name" className="mb-1.5 block text-sm text-ink">
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
          placeholder="e.g. +33 6 00 00 00 00"
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

      {state.status === "error" && (
        <p className="text-sm text-red-600">{state.message}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="inline-flex w-full items-center justify-center rounded-md bg-accent px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#2f3fd6] disabled:opacity-60"
      >
        {loading ? "Sending…" : "Submit"}
      </button>
    </form>
  );
}
