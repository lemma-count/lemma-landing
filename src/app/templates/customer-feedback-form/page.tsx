import type { Metadata } from "next";
import Link from "next/link";
import { TrackedLink } from "@/components/TrackedLink";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Customer Feedback Form Template - Lemma",
  description:
    "Use Lemma to turn customer feedback forms into adaptive voice follow-up conversations with themes, quotes, and a fix-ready feedback brief.",
  path: "/templates/customer-feedback-form",
});

const starterQuestions = [
  "What happened that made you give that answer?",
  "Can you walk through a recent example?",
  "What made this frustrating, useful, or surprising?",
  "How often does this come up?",
  "What did you try before this?",
  "What should the team fix, keep, or investigate next?",
];

const feedbackBriefItems = [
  "Customer theme",
  "Recent example",
  "Severity or frequency",
  "Representative quote",
  "Likely cause",
  "Recommended next action",
];

const staticFormCases = [
  "Simple preference polling",
  "Compliance or consent collection",
  "High-volume scoring where comments are optional",
  "Workflows that only need fixed fields for routing",
];

const relatedLinks = [
  { href: "/templates/demo-request-form", label: "Demo request form" },
  { href: "/guides/forms-vs-interviews", label: "Forms vs interviews" },
  { href: "/google-forms-alternative", label: "Google Forms alternative" },
];

export default function CustomerFeedbackFormTemplatePage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-white pt-16 pb-14 md:pt-24 md:pb-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="mx-auto max-w-[900px] text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-accent">
              Customer feedback form template
            </p>
            <h1 className="mt-5 text-balance text-5xl font-semibold leading-[0.98] tracking-tight text-ink md:text-7xl">
              Customer feedback form that asks why.
            </h1>
            <p className="mx-auto mt-7 max-w-[730px] text-pretty text-base leading-7 text-muted md:text-lg md:leading-8">
              Use Lemma when a static feedback form collects a score or comment
              but leaves the team guessing what actually happened. Let
              customers answer by voice, ask adaptive follow-up questions, and
              turn their answers into a feedback brief the team can act on.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <TrackedLink
                href="https://app.heylemma.com"
                event="cta_click"
                eventProps={{
                  label: "Create a customer feedback voice form",
                  page: "customer_feedback_form_template",
                  location: "hero",
                  cta_id: "customer_feedback_template_hero_create",
                }}
                className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white shadow-[0_12px_22px_-14px_rgba(61,80,255,0.9)] transition-colors hover:bg-[#2f3fd6]"
              >
                Create a feedback voice form
              </TrackedLink>
              <TrackedLink
                href="/contact"
                event="cta_click"
                eventProps={{
                  label: "Talk through your feedback form",
                  page: "customer_feedback_form_template",
                  location: "hero",
                  cta_id: "customer_feedback_template_hero_contact",
                }}
                className="inline-flex items-center justify-center rounded-md border border-ink bg-white px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-neutral-100"
              >
                Talk through your feedback form
              </TrackedLink>
            </div>
          </div>

          <div className="mt-14 grid gap-3 rounded-[18px] bg-[#f8f7f4] p-3 ring-1 ring-[#e6e3dd] md:mt-20 md:grid-cols-2 md:p-4">
            <div className="rounded-[14px] border border-[#e6e3dd] bg-white p-5 md:p-7">
              <p className="text-sm font-semibold text-muted">
                Static feedback forms
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                Capture the first answer, then stop.
              </h2>
              <p className="mt-4 text-sm leading-6 text-muted md:text-base md:leading-7">
                Scores and open text boxes can show that something matters, but
                they often miss the story, example, constraint, or tradeoff
                behind the response.
              </p>
            </div>
            <div className="rounded-[14px] border border-[#d7dcff] bg-white p-5 shadow-[0_24px_70px_-48px_rgba(61,80,255,0.85)] md:p-7">
              <p className="text-sm font-semibold text-accent">
                Lemma voice forms
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                Follow the answer to the reason.
              </h2>
              <p className="mt-4 text-sm leading-6 text-muted md:text-base md:leading-7">
                Lemma lets customers answer by voice, then asks useful
                follow-up questions about what happened, why it mattered, how
                often it happens, and what the team should do next.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 px-6 py-20 md:grid-cols-[0.9fr_1.1fr] md:gap-16 md:px-10 md:py-28">
          <div>
            <h2 className="text-balance text-4xl font-semibold leading-[1.02] tracking-tight text-ink md:text-6xl">
              Start with the feedback prompt. Let follow-up find the context.
            </h2>
            <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-muted md:text-lg md:leading-8">
              Keep the fixed fields light: customer, product area, score or
              sentiment, and permission to follow up. Use voice for the detail
              that depends on what the customer says first.
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
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-accent">
              Fix-ready output
            </p>
            <h2 className="mt-4 text-balance text-4xl font-semibold leading-[1.02] tracking-tight text-ink md:text-6xl">
              Give the team evidence, not another comment column.
            </h2>
            <p className="mt-5 text-pretty text-base leading-7 text-muted md:text-lg md:leading-8">
              The goal is not to collect more feedback for its own sake. The
              goal is to turn customer answers into themes, quotes, and next
              actions that help the team decide what to fix or investigate.
            </p>
          </div>

          <div className="mt-10 grid gap-3 md:grid-cols-3">
            {feedbackBriefItems.map((item) => (
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
              When to keep a static feedback form.
            </h2>
            <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-muted md:text-lg md:leading-8">
              Lemma is for feedback workflows where the useful next question
              depends on the customer's first answer. A static form can still
              be the better fit when the job is simple scoring, consent, or
              structured routing.
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
                Build the form that finds the reason.
              </h2>
              <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-white/70 md:text-lg md:leading-8">
                Replace shallow customer feedback rows with adaptive voice
                conversations and a brief your team can use.
              </p>
            </div>
            <TrackedLink
              href="https://app.heylemma.com"
              event="cta_click"
              eventProps={{
                label: "Create the feedback voice form",
                page: "customer_feedback_form_template",
                location: "final_cta",
                cta_id: "customer_feedback_template_final_create",
              }}
              className="inline-flex items-center justify-center rounded-md bg-white px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-neutral-200"
            >
              Create the feedback voice form
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
          <div className="rounded-[14px] border border-[#e6e3dd] bg-[#f8f7f4] p-6">
            <h2 className="text-xl font-semibold tracking-tight text-ink">
              What should a customer feedback form ask?
            </h2>
            <p className="mt-4 text-sm leading-6 text-muted">
              Start with the outcome you need to understand: score, sentiment,
              product area, or recent experience. Then ask what happened, why
              it mattered, how often it comes up, and what the customer thinks
              should change.
            </p>
          </div>
          <div className="rounded-[14px] border border-[#e6e3dd] bg-[#f8f7f4] p-6">
            <h2 className="text-xl font-semibold tracking-tight text-ink">
              When should feedback become a conversation?
            </h2>
            <p className="mt-4 text-sm leading-6 text-muted">
              Feedback should become a short conversation when the first answer
              is too shallow to guide a decision. Adaptive follow-up is useful
              when the team needs the example, cause, objection, frequency, or
              tradeoff behind the customer's response.
            </p>
          </div>
          <div className="rounded-[14px] border border-[#e6e3dd] bg-[#f8f7f4] p-6">
            <h2 className="text-xl font-semibold tracking-tight text-ink">
              Is this only for NPS or CSAT?
            </h2>
            <p className="mt-4 text-sm leading-6 text-muted">
              No. The same pattern works for product feedback, onboarding
              feedback, churn feedback, customer proof, or any qualitative
              workflow where the useful answer usually comes after the first
              answer.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
