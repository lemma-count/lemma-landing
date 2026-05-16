import type { Metadata } from "next";
import Link from "next/link";
import { TrackedLink } from "@/components/TrackedLink";

export const metadata: Metadata = {
  title: "Sample Reports",
  description:
    "Sample AI work reports for practical knowledge-work roles, starting with an Operations Manager sample.",
};

const samples = [
  {
    label: "Available now",
    title: "Operations Manager",
    body: "Weekly updates, scattered notes, project handoffs, meeting follow-ups, and the first AI workflow to test.",
    href: "/report/samples/operations-manager",
    active: true,
  },
  {
    label: "Sample role",
    title: "Sales Representative",
    body: "Follow-ups, CRM notes, prospect research, and meeting prep.",
    href: null,
    active: false,
  },
  {
    label: "Sample role",
    title: "Marketing Coordinator",
    body: "Campaign notes, content drafts, stakeholder updates, and briefs.",
    href: null,
    active: false,
  },
  {
    label: "Sample role",
    title: "Customer Support Lead",
    body: "Ticket themes, recurring issues, customer updates, and internal summaries.",
    href: null,
    active: false,
  },
  {
    label: "Sample role",
    title: "Recruiter",
    body: "Candidate outreach, screening notes, interview packets, and handoff notes.",
    href: null,
    active: false,
  },
  {
    label: "Sample role",
    title: "HR Manager",
    body: "Policy updates, onboarding material, employee communication, and FAQs.",
    href: null,
    active: false,
  },
];

export default function SamplesPage() {
  return (
    <main>
      <div className="border-b border-border px-6 py-3 md:px-10">
        <Link href="/report" className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-ink">
          <span aria-hidden>←</span> Report overview
        </Link>
      </div>

      <section className="border-b border-border px-6 py-16 text-center md:px-10 md:py-20">
        <div className="mx-auto max-w-[1280px]">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
            Sample reports
          </p>
          <h1 className="mx-auto mt-4 max-w-[900px] text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-ink md:text-7xl">
            See what the report can look like.
          </h1>
          <p className="mx-auto mt-6 max-w-[640px] text-lg leading-relaxed text-muted">
            These examples use fictional people and common work patterns. Your
            report is built from your own voice interview.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {samples.map(({ label, title, body, href, active }) => (
              <article
                key={title}
                className={`flex min-h-[280px] flex-col border p-7 ${
                  active ? "border-ink" : "border-border"
                } bg-white`}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                  {label}
                </p>
                <h2 className="mt-4 text-2xl font-semibold text-ink">{title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{body}</p>
                {href ? (
                  <TrackedLink
                    href={href}
                    event="sample_click"
                    eventProps={{ role: title.toLowerCase().replace(/\s+/g, "-") }}
                    className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:text-accent transition-colors"
                  >
                    Read sample <span className="text-accent">→</span>
                  </TrackedLink>
                ) : (
                  <span className="mt-auto inline-flex items-center gap-1.5 text-sm text-subtle cursor-default">
                    Coming soon
                  </span>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border px-6 py-24 text-center md:px-10 md:py-32">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="mx-auto max-w-[760px] text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            Find the report for your work.
          </h2>
          <p className="mx-auto mt-5 max-w-[560px] text-base leading-relaxed text-muted">
            Take the interview and get a personal plan based on what you
            actually do.
          </p>
          <TrackedLink
            href="https://app.heylemma.com"
            event="cta_click"
            eventProps={{ label: "Get my report", page: "samples", location: "footer_cta" }}
            className="mt-7 inline-flex items-center rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#2f3fd6]"
          >
            Get my report — $9.99
          </TrackedLink>
        </div>
      </section>
    </main>
  );
}
