import type { Metadata } from "next";
import Link from "next/link";
import { WorkflowContextVisual } from "@/components/ContextVisuals";
import { TrackedLink } from "@/components/TrackedLink";
import {
  breadcrumbJsonLd,
  createMetadata,
  faqJsonLd,
  stringifyJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Lead Qualification Form Template with Follow-Up - Lemma",
  description:
    "A lead qualification form template for teams that need adaptive voice follow-up, fit context, urgency, objections, quotes, and a useful next-step brief.",
  path: "/templates/lead-qualification-form",
});

const starterQuestions = [
  "What problem made you raise your hand?",
  "What are you using or doing today?",
  "Why does this matter now?",
  "Who needs to be involved before the next step?",
  "What would make this worth prioritizing?",
  "What should the team know before following up?",
];

const qualificationBriefItems = [
  "Fit signal",
  "Problem context",
  "Timing or urgency",
  "Stakeholder map",
  "Likely objection",
  "Recommended next step",
];

const staticFormCases = [
  "Simple newsletter capture",
  "Low-intent content downloads",
  "Known accounts with enough CRM context already",
  "Operational workflows that require unsupported form features",
];

const relatedLinks = [
  { href: "/templates/demo-request-form", label: "Demo request workflow" },
  { href: "/sales", label: "Sales use case" },
];

const faqItems = [
  {
    question: "What should a lead qualification form ask?",
    answer:
      "A lead qualification form should ask what problem the buyer is trying to solve, why it matters now, what they use today, who is involved, and what should happen next. The most useful answers often need follow-up.",
  },
  {
    question: "When should lead qualification become a conversation?",
    answer:
      "Lead qualification should become a conversation when fixed fields cannot explain fit, urgency, objections, or the right next step. Adaptive follow-up is useful when the next question depends on what the lead says first.",
  },
  {
    question: "How is this different from a demo request form?",
    answer:
      "A demo request form preserves explicit demo intent. A lead qualification workflow can qualify broader inbound interest before sales or a founder decides the right follow-up.",
  },
];

export default function LeadQualificationFormTemplatePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: stringifyJsonLd([
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Templates", path: "/templates" },
              {
                name: "Lead qualification form",
                path: "/templates/lead-qualification-form",
              },
            ]),
            faqJsonLd(faqItems),
          ]),
        }}
      />
      <section className="relative overflow-hidden bg-white pt-16 pb-14 md:pt-24 md:pb-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="grid gap-12 md:grid-cols-[0.86fr_0.74fr] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-subtle">
                Lead qualification context workflow
              </p>
              <h1 className="mt-5 text-balance text-5xl font-semibold leading-[0.98] tracking-tight text-ink md:text-7xl">
                Qualify leads by asking what their signal means.
              </h1>
              <p className="mt-7 max-w-[730px] text-pretty text-base leading-7 text-muted md:text-lg md:leading-8">
                Use Lemma when an inbound lead needs more than fixed fields.
                Leads answer by voice, Lemma asks follow-ups, and your team
                gets context for the right next step.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <TrackedLink
                  href="https://app.heylemma.com"
                  event="cta_click"
                  eventProps={{
                    label: "Create a lead qualification conversation",
                    page: "lead_qualification_form_template",
                    location: "hero",
                    cta_id: "lead_qualification_template_hero_create",
                  }}
                  className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white shadow-[0_12px_22px_-14px_rgba(61,80,255,0.9)] transition-colors hover:bg-[#2f3fd6]"
                >
                  Create a lead qualification conversation
                </TrackedLink>
                <TrackedLink
                  href="/templates/demo-request-form"
                  event="cta_click"
                  eventProps={{
                    label: "Compare demo request workflow",
                    page: "lead_qualification_form_template",
                    location: "hero",
                    cta_id: "lead_qualification_template_hero_demo_request",
                  }}
                  className="inline-flex items-center justify-center rounded-md border border-ink bg-white px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-neutral-100"
                >
                  Compare demo request workflow
                </TrackedLink>
              </div>
            </div>
            <WorkflowContextVisual kind="lead" />
          </div>

          <div className="mt-14 grid gap-3 rounded-[18px] bg-[#f8f7f4] p-3 ring-1 ring-[#e6e3dd] md:mt-20 md:grid-cols-2 md:p-4">
            <div className="rounded-[14px] border border-[#e6e3dd] bg-white p-5 md:p-7">
              <p className="text-sm font-semibold text-muted">
                Basic lead capture
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                Capture the fields.
              </h2>
              <p className="mt-4 text-sm leading-6 text-muted md:text-base md:leading-7">
                A lead submits firmographic details, a dropdown, or a short
                note. The team still has to infer whether the signal is urgent,
                qualified, or worth founder attention.
              </p>
            </div>
            <div className="rounded-[14px] border border-[#d7dcff] bg-white p-5 shadow-[0_24px_70px_-48px_rgba(61,80,255,0.85)] md:p-7">
              <p className="text-sm font-semibold text-accent">
                Adaptive context capture
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                Follow up on the signal.
              </h2>
              <p className="mt-4 text-sm leading-6 text-muted md:text-base md:leading-7">
                Lemma lets the lead explain the problem, then asks why now,
                what they tried, and what should happen next.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 px-6 py-20 md:grid-cols-[0.9fr_1.1fr] md:gap-16 md:px-10 md:py-28">
          <div>
            <h2 className="text-balance text-4xl font-semibold leading-[1.02] tracking-tight text-ink md:text-6xl">
              Start with the signal. Let follow-up find the fit.
            </h2>
            <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-muted md:text-lg md:leading-8">
              Lead qualification is most useful when the team understands the
              buyer situation, not just the submitted fields.
            </p>
          </div>

          <div className="grid gap-3">
            {starterQuestions.map((question, index) => (
              <div
                key={question}
                className="grid grid-cols-[2.5rem_1fr] items-start gap-4 rounded-[14px] border border-[#e6e3dd] bg-[#f8f7f4] p-5"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-semibold text-accent ring-1 ring-[#e6e3dd]">
                  {index + 1}
                </span>
                <p className="pt-2 text-base font-medium leading-6 text-ink">
                  {question}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8f7f4]">
        <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-subtle">
              Qualification brief
            </p>
            <h2 className="mt-4 text-balance text-4xl font-semibold leading-[1.02] tracking-tight text-ink md:text-6xl">
              Give the team context before they choose the next step.
            </h2>
            <p className="mt-5 text-pretty text-base leading-7 text-muted md:text-lg md:leading-8">
              The goal is not to make every lead answer more questions. The
              goal is to understand the leads where the next move depends on
              their situation.
            </p>
          </div>

          <div className="mt-10 grid gap-3 md:grid-cols-3">
            {qualificationBriefItems.map((item) => (
              <div
                key={item}
                className="rounded-[14px] border border-[#e6e3dd] bg-white p-5"
              >
                <h3 className="text-base font-semibold text-ink">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 px-6 py-20 md:grid-cols-2 md:gap-16 md:px-10 md:py-28">
          <div>
            <h2 className="text-balance text-4xl font-semibold leading-[1.02] tracking-tight text-ink md:text-5xl">
              When simple capture is enough.
            </h2>
            <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-muted md:text-lg md:leading-8">
              Lemma is for lead workflows where the useful next question
              depends on the first answer. Keep simple capture when fixed
              routing fields already tell the team what to do.
            </p>
          </div>

          <div className="grid gap-3">
            {staticFormCases.map((item) => (
              <div
                key={item}
                className="rounded-[14px] border border-[#e6e3dd] bg-white p-5"
              >
                <p className="text-base font-medium leading-6 text-ink">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0a0a0a] text-white">
        <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-10 md:py-24">
          <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <h2 className="text-balance text-4xl font-semibold leading-[1.02] tracking-tight md:text-6xl">
                Build the qualification conversation that finds fit.
              </h2>
              <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-white/70 md:text-lg md:leading-8">
                Turn inbound interest into an adaptive voice conversation that
                captures fit, urgency, objections, and the right follow-up.
              </p>
            </div>
            <TrackedLink
              href="https://app.heylemma.com"
              event="cta_click"
              eventProps={{
                label: "Create the conversation",
                page: "lead_qualification_form_template",
                location: "final_cta",
                cta_id: "lead_qualification_template_final_create",
              }}
              className="inline-flex items-center justify-center rounded-md bg-white px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-neutral-200"
            >
              Create the conversation
            </TrackedLink>
          </div>

          <div className="mt-12 flex flex-wrap gap-3 border-t border-white/15 pt-8">
            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md border border-white/20 px-4 py-2 text-sm font-medium text-white/75 transition-colors hover:border-white/50 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-[1280px] gap-6 px-6 py-20 md:grid-cols-3 md:px-10 md:py-28">
          {faqItems.map((item) => (
            <div
              key={item.question}
              className="rounded-[14px] border border-[#e6e3dd] bg-[#f8f7f4] p-6"
            >
              <h2 className="text-xl font-semibold tracking-tight text-ink">
                {item.question}
              </h2>
              <p className="mt-4 text-sm leading-6 text-muted">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
