import type { Metadata } from "next";
import Link from "next/link";
import { TrackedLink } from "@/components/TrackedLink";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Adaptive Conversation Templates - Lemma",
  description:
    "Start with a shallow workflow, then use Lemma to ask adaptive voice follow-up questions and return decision-ready reports.",
  path: "/templates",
});

const templateCards = [
  {
    title: "Demo request form",
    href: "/templates/demo-request-form",
    eyebrow: "Sales",
    description:
      "Capture demo intent first, then ask useful follow-up questions about urgency, current workflow, constraints, and what would make the call useful.",
    output: "Buyer context, likely objections, useful quotes, and a sales-ready brief.",
  },
];

const upcomingTemplates = [
  "Customer feedback form",
  "Lead qualification form",
  "Churn feedback form",
  "NPS or CSAT follow-up form",
];

const workflowSteps = [
  {
    title: "Name the workflow",
    body: "Start from the form, survey, intake, call, or notes workflow your team already uses to collect context.",
  },
  {
    title: "Ask the next question",
    body: "Use voice follow-up when the useful answer depends on what the respondent says first.",
  },
  {
    title: "Read the report",
    body: "Turn answers into transcripts, summaries, themes, quotes, and a report the team can act on.",
  },
];

export default function TemplatesPage() {
  return (
    <main>
      <section className="bg-white pt-16 pb-14 md:pt-24 md:pb-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-accent">
              Adaptive conversation templates
            </p>
            <h1 className="mt-5 text-balance text-5xl font-semibold leading-[0.98] tracking-tight text-ink md:text-7xl">
              Turn shallow workflows into adaptive conversations.
            </h1>
            <p className="mt-7 max-w-3xl text-pretty text-base leading-7 text-muted md:text-lg md:leading-8">
              Use these templates when your team needs the reason, example,
              objection, tradeoff, or next step behind a first answer.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackedLink
                href="https://app.heylemma.com"
                event="cta_click"
                eventProps={{
                  label: "Create a conversation",
                  page: "templates_index",
                  location: "hero",
                  cta_id: "templates_index_hero_create",
                }}
                className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white shadow-[0_12px_22px_-14px_rgba(61,80,255,0.9)] transition-colors hover:bg-[#2f3fd6]"
              >
                Create a conversation
              </TrackedLink>
              <TrackedLink
                href="/guides/forms-vs-interviews"
                event="cta_click"
                eventProps={{
                  label: "Read the guide",
                  page: "templates_index",
                  location: "hero",
                  cta_id: "templates_index_hero_guide",
                }}
                className="inline-flex items-center justify-center rounded-md border border-ink bg-white px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-neutral-100"
              >
                Read the guide
              </TrackedLink>
            </div>
          </div>

          <div className="mt-14 grid gap-3 md:mt-20 md:grid-cols-3">
            {workflowSteps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-[14px] border border-[#e6e3dd] bg-[#f8f7f4] p-6"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-semibold text-accent ring-1 ring-[#e6e3dd]">
                  {index + 1}
                </span>
                <h2 className="mt-5 text-xl font-semibold tracking-tight text-ink">
                  {step.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-muted">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8f7f4]">
        <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-10 md:py-28">
          <div className="grid gap-8 md:grid-cols-[0.7fr_1fr] md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-accent">
                Available template
              </p>
              <h2 className="mt-4 text-balance text-4xl font-semibold leading-[1.02] tracking-tight text-ink md:text-6xl">
                Start with a workflow your team already understands.
              </h2>
            </div>
            <p className="max-w-2xl text-pretty text-base leading-7 text-muted md:text-lg md:leading-8">
              Each template names the old context-capture workflow, explains
              when adaptive follow-up is worth using, and shows the kind of
              report your team should expect from the responses.
            </p>
          </div>

          <div className="mt-10 grid gap-4">
            {templateCards.map((template) => (
              <Link
                key={template.href}
                href={template.href}
                className="grid gap-6 rounded-[16px] border border-[#e6e3dd] bg-white p-6 transition-colors hover:border-[#c9c4ba] md:grid-cols-[0.7fr_1fr] md:p-8"
              >
                <div>
                  <p className="text-sm font-semibold text-accent">
                    {template.eyebrow}
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-tight text-ink">
                    {template.title}
                  </h3>
                </div>
                <div>
                  <p className="text-base leading-7 text-muted">
                    {template.description}
                  </p>
                  <p className="mt-5 text-sm font-semibold text-ink">
                    Output: {template.output}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-20 md:grid-cols-2 md:px-10 md:py-28">
          <div>
            <h2 className="text-balance text-4xl font-semibold leading-[1.02] tracking-tight text-ink md:text-5xl">
              Next template areas.
            </h2>
            <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-muted md:text-lg md:leading-8">
              The next pages should cover form workflows where follow-up
              questions can change the decision, not simple collection jobs
              where fixed fields are already enough.
            </p>
          </div>
          <div className="grid gap-3">
            {upcomingTemplates.map((item) => (
              <div
                key={item}
                className="rounded-[14px] border border-[#e6e3dd] bg-[#f8f7f4] p-5"
              >
                <p className="text-base font-medium leading-6 text-ink">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
