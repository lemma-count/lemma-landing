import type { Metadata } from "next";
import Link from "next/link";
import { WorkflowContextVisual } from "@/components/ContextVisuals";
import { TrackedLink } from "@/components/TrackedLink";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Customer Feedback Context Workflow - Lemma",
  description:
    "Use Lemma to turn shallow customer feedback into a follow-up conversation.",
  path: "/templates/customer-feedback-form",
  noIndex: true,
});

const starterQuestions = [
  "What happened that made you want to give this feedback?",
  "What were you trying to accomplish at the time?",
  "What did you expect would happen?",
  "What happened instead?",
  "What would you change first?",
  "Which quote should the team hear?",
];

const feedbackReportItems = [
  "Workflow informed",
  "Customer situation",
  "Reason behind the first answer",
  "Repeated themes",
  "Useful quotes",
  "Recommended next action",
];

const staticFormCases = [
  "Simple ratings where the score is enough",
  "Structured facts that do not need explanation",
  "High-volume operational workflows with fixed fields",
  "Operational workflows that require unsupported form features",
];

const relatedLinks = [
  {
    href: "/blog/customer-feedback-is-not-evidence-until-it-survives-follow-up",
    label: "Customer feedback follow-up guide",
  },
];

export default function CustomerFeedbackFormTemplatePage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-white pt-16 pb-14 md:pt-24 md:pb-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="grid gap-12 md:grid-cols-[0.86fr_0.74fr] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-subtle">
                Customer feedback context workflow
              </p>
              <h1 className="mt-5 text-balance text-5xl font-semibold leading-[0.98] tracking-tight text-ink md:text-7xl">
                Customer feedback that asks what they meant.
              </h1>
              <p className="mt-7 max-w-[730px] text-pretty text-base leading-7 text-muted md:text-lg md:leading-8">
                Use Lemma when a customer signal needs the reason behind it.
                Customers answer by voice, Lemma asks follow-ups, and your team
                receives usable context.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <TrackedLink
                  href="https://app.heylemma.com"
                  event="cta_click"
                  eventProps={{
                    label: "Create a customer feedback conversation",
                    page: "customer_feedback_form_template",
                    location: "hero",
                    cta_id: "customer_feedback_template_hero_create",
                  }}
                  className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white shadow-[0_12px_22px_-14px_rgba(61,80,255,0.9)] transition-colors hover:bg-[#2f3fd6]"
                >
                  Create a customer feedback conversation
                </TrackedLink>
                <TrackedLink
                  href="/blog/customer-feedback-is-not-evidence-until-it-survives-follow-up"
                  event="cta_click"
                  eventProps={{
                    label: "Read the follow-up guide",
                    page: "customer_feedback_form_template",
                    location: "hero",
                    cta_id: "customer_feedback_template_hero_guide",
                  }}
                  className="inline-flex items-center justify-center rounded-md border border-ink bg-white px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-neutral-100"
                >
                  Read the follow-up guide
                </TrackedLink>
              </div>
            </div>
            <WorkflowContextVisual kind="feedback" />
          </div>

          <div className="mt-14 grid gap-3 rounded-[18px] bg-[#f8f7f4] p-3 ring-1 ring-[#e6e3dd] md:mt-20 md:grid-cols-2 md:p-4">
            <div className="rounded-[14px] border border-[#e6e3dd] bg-white p-5 md:p-7">
              <p className="text-sm font-semibold text-muted">
                Basic feedback capture
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                Capture the label.
              </h2>
              <p className="mt-4 text-sm leading-6 text-muted md:text-base md:leading-7">
                A customer picks a score or leaves a short comment. Your team
                sees the label, but still has to guess what happened, why it
                mattered, and what should change.
              </p>
            </div>
            <div className="rounded-[14px] border border-[#d7dcff] bg-white p-5 shadow-[0_24px_70px_-48px_rgba(61,80,255,0.85)] md:p-7">
              <p className="text-sm font-semibold text-accent">
                Adaptive context capture
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                Follow up on the moment.
              </h2>
              <p className="mt-4 text-sm leading-6 text-muted md:text-base md:leading-7">
                Lemma lets the customer explain the situation, then asks what
                happened and what should change.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 px-6 py-20 md:grid-cols-[0.9fr_1.1fr] md:gap-16 md:px-10 md:py-28">
          <div>
            <h2 className="text-balance text-4xl font-semibold leading-[1.02] tracking-tight text-ink md:text-6xl">
              Start with the signal. Let the follow-up find the reason.
            </h2>
            <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-muted md:text-lg md:leading-8">
              Customer feedback is most useful when the team knows which
              decision it should inform.
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
              Usable context
            </p>
            <h2 className="mt-4 text-balance text-4xl font-semibold leading-[1.02] tracking-tight text-ink md:text-6xl">
              Give the team evidence, not a pile of comments.
            </h2>
            <p className="mt-5 text-pretty text-base leading-7 text-muted md:text-lg md:leading-8">
              The goal is not to collect more feedback for its own sake. The
              goal is to understand what customers meant before the team acts.
            </p>
          </div>

          <div className="mt-10 grid gap-3 md:grid-cols-3">
            {feedbackReportItems.map((item) => (
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
              Lemma is for feedback where the useful answer depends on what the
              customer says first. Keep simple capture when the team only needs
              a structured fact or rating.
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
                Build the feedback conversation that asks why.
              </h2>
              <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-white/70 md:text-lg md:leading-8">
                Turn shallow feedback into an adaptive voice conversation that
                captures the context behind the first answer.
              </p>
            </div>
            <TrackedLink
              href="https://app.heylemma.com"
              event="cta_click"
              eventProps={{
                label: "Create the feedback conversation",
                page: "customer_feedback_form_template",
                location: "final_cta",
                cta_id: "customer_feedback_template_final_create",
              }}
              className="inline-flex items-center justify-center rounded-md bg-white px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-neutral-200"
            >
              Create the feedback conversation
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
              What should customer feedback ask?
            </h2>
            <p className="mt-4 text-sm leading-6 text-muted">
              Customer feedback should ask what happened, what the customer
              expected, and why it mattered. Fixed fields capture the category.
              Follow-up questions explain the situation behind it.
            </p>
          </div>
          <div className="rounded-[14px] border border-[#e6e3dd] bg-[#f8f7f4] p-6">
            <h2 className="text-xl font-semibold tracking-tight text-ink">
              When should feedback become a conversation?
            </h2>
            <p className="mt-4 text-sm leading-6 text-muted">
              Feedback should become a conversation when the first answer is a
              label rather than context. Short answers can show where to look,
              but follow-up questions reveal the reason behind the label.
            </p>
          </div>
          <div className="rounded-[14px] border border-[#e6e3dd] bg-[#f8f7f4] p-6">
            <h2 className="text-xl font-semibold tracking-tight text-ink">
              How is this different from fixed feedback?
            </h2>
            <p className="mt-4 text-sm leading-6 text-muted">
              Fixed feedback asks the same questions to every respondent. Lemma
              is useful when the next question should depend on the
              customer's first answer.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
