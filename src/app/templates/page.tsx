import type { Metadata } from "next";
import Link from "next/link";
import { WorkflowContextVisual } from "@/components/ContextVisuals";
import { TrackedLink } from "@/components/TrackedLink";
import { breadcrumbJsonLd, createMetadata, stringifyJsonLd } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Adaptive Voice Form Templates - Lemma",
  description:
    "Adaptive voice form templates for feedback, demo requests, lead qualification, churn, NPS, CSAT, and other workflows that need follow-up questions.",
  path: "/templates",
});

const templateCards = [
  {
    title: "Customer feedback workflow",
    href: "/templates/customer-feedback-form",
    category: "Customer success",
    context: "What happened, why did it matter, and what should the team fix or understand next?",
    audience: "Customers, users, and accounts with recent feedback to explain.",
    goal: "Turn shallow feedback into reasons, examples, quotes, and next actions.",
    followUp:
      "Lemma asks what the customer expected, what changed, and what would make the experience better.",
    output: "A transcript-grounded feedback brief.",
    use: "Product, CX, and customer success teams.",
  },
  {
    title: "Demo request workflow",
    href: "/templates/demo-request-form",
    category: "Sales",
    context: "Which inbound buyers are worth prioritizing, and what should sales know before the call?",
    audience: "Demo requesters, high-intent leads, and product-qualified accounts.",
    goal: "Capture the buying context behind the request without making the first step feel like homework.",
    followUp:
      "Lemma asks why now, what changed, and what would make the call useful.",
    output: "A sales-ready buyer brief.",
    use: "Sales teams preparing the next step.",
  },
];

const upcomingTemplates = [
  "Lead qualification workflow",
  "Churn feedback workflow",
  "NPS or CSAT follow-up workflow",
];

const workflowSteps = [
  {
    title: "Choose the workflow",
    body: "Start from the business moment where your team needs better context.",
  },
  {
    title: "Send the conversation",
    body: "Use a Lemma workflow when the useful answer depends on what the respondent says first.",
  },
  {
    title: "Use the output",
    body: "Turn voice responses into evidence your team can act on.",
  },
];

export default function TemplatesPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: stringifyJsonLd(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Templates", path: "/templates" },
            ]),
          ),
        }}
      />
      <section className="bg-white pt-16 pb-14 md:pt-24 md:pb-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="grid gap-12 md:grid-cols-[0.86fr_0.74fr] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-subtle">
                Workflow starters
              </p>
              <h1 className="mt-5 text-balance text-5xl font-semibold leading-[0.98] tracking-tight text-ink md:text-7xl">
                Start the context workflow.
              </h1>
              <p className="mt-7 max-w-3xl text-pretty text-base leading-7 text-muted md:text-lg md:leading-8">
                Lemma workflow starters help teams run focused voice
                conversations faster. Each one asks follow-up questions and
                returns context your team can use.
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
                  href="/templates/demo-request-form"
                  event="cta_click"
                  eventProps={{
                    label: "See demo request workflow",
                    page: "templates_index",
                    location: "hero",
                    cta_id: "templates_index_hero_demo_request",
                  }}
                  className="inline-flex items-center justify-center rounded-md border border-ink bg-white px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-neutral-100"
                >
                  See demo request workflow
                </TrackedLink>
              </div>
            </div>
            <WorkflowContextVisual />
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
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-subtle">
                Available starter
              </p>
              <h2 className="mt-4 text-balance text-4xl font-semibold leading-[1.02] tracking-tight text-ink md:text-6xl">
                Start with a workflow where context changes what happens next.
              </h2>
            </div>
            <p className="max-w-2xl text-pretty text-base leading-7 text-muted md:text-lg md:leading-8">
              Each starter names who should answer, what Lemma should ask, and
              what the team should get back. The value is not the prompt. It is
              the context the conversation captures.
            </p>
          </div>

          <div className="mt-10 grid gap-4">
            {templateCards.map((template) => (
              <Link
                key={template.href}
                href={template.href}
                className="grid gap-6 rounded-[16px] border border-[#e6e3dd] bg-white p-6 transition-colors hover:border-[#c9c4ba] md:grid-cols-[0.62fr_1fr] md:p-8"
              >
                <div>
                  <p className="text-sm font-semibold text-accent">
                    {template.category}
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-tight text-ink">
                    {template.title}
                  </h3>
                  <p className="mt-5 text-sm font-semibold leading-6 text-ink">
                    Context needed: {template.context}
                  </p>
                </div>
                <div className="grid gap-4 text-sm leading-6 text-muted md:grid-cols-2">
                  <p>
                    <span className="font-semibold text-ink">Audience:</span>{" "}
                    {template.audience}
                  </p>
                  <p>
                    <span className="font-semibold text-ink">Goal:</span>{" "}
                    {template.goal}
                  </p>
                  <p>
                    <span className="font-semibold text-ink">Follow-up:</span>{" "}
                    {template.followUp}
                  </p>
                  <p>
                    <span className="font-semibold text-ink">Output:</span>{" "}
                    {template.output}
                  </p>
                  <p className="md:col-span-2">
                    <span className="font-semibold text-ink">Used by:</span>{" "}
                    {template.use}
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
              Next workflow areas.
            </h2>
            <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-muted md:text-lg md:leading-8">
              The next starters should cover workflows where a better follow-up
              changes the team's next decision.
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
