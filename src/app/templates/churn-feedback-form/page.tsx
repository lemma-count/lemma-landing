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
  title: "Churn Feedback Form Template with Follow-Up - Lemma",
  description:
    "A churn feedback form template for teams that need adaptive voice follow-up, exit reasons, quotes, themes, and transcript-grounded next actions.",
  path: "/templates/churn-feedback-form",
});

const starterQuestions = [
  "What changed before you decided to leave?",
  "What were you hoping the product or service would help you do?",
  "Where did the experience break down?",
  "What workaround or alternative are you using now?",
  "What would have made staying easier?",
  "Which detail should the team hear in your own words?",
];

const churnReportItems = [
  "Reason behind the churn label",
  "Customer situation",
  "Expectation gap",
  "Current workaround",
  "Useful quotes",
  "Recommended next action",
];

const staticFormCases = [
  "Required cancellation fields where a label is enough",
  "Operational account closure workflows",
  "High-volume exits that only need structured routing",
  "Workflows that need account changes at the same moment",
];

const relatedLinks = [
  { href: "/customer-success", label: "Customer success use case" },
  { href: "/templates/customer-feedback-form", label: "Customer feedback workflow" },
];

const faqItems = [
  {
    question: "What should a churn feedback form ask?",
    answer:
      "A churn feedback form should ask what changed, where the experience broke down, and what the customer is doing instead. The useful answer is usually the reason behind the selected cancellation label.",
  },
  {
    question: "When should churn feedback become a conversation?",
    answer:
      "Churn feedback should become a conversation when the team needs to understand the customer's situation before deciding what to fix. Fixed fields are enough for routing. Follow-up questions are useful when the reason is ambiguous.",
  },
  {
    question: "How is this different from a cancellation survey?",
    answer:
      "A cancellation survey asks every customer the same questions. Lemma is useful when the next question should depend on the customer's first answer, so the team gets context instead of another unexplained label.",
  },
];

export default function ChurnFeedbackFormTemplatePage() {
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
                name: "Churn feedback form",
                path: "/templates/churn-feedback-form",
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
                Churn feedback context workflow
              </p>
              <h1 className="mt-5 text-balance text-5xl font-semibold leading-[0.98] tracking-tight text-ink md:text-7xl">
                Churn feedback that gets past the cancellation reason.
              </h1>
              <p className="mt-7 max-w-[730px] text-pretty text-base leading-7 text-muted md:text-lg md:leading-8">
                Use Lemma when a churn reason needs the story behind it.
                Customers answer by voice, Lemma asks follow-ups, and your team
                receives transcript-grounded context.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <TrackedLink
                  href="https://app.heylemma.com"
                  event="cta_click"
                  eventProps={{
                    label: "Create a churn feedback conversation",
                    page: "churn_feedback_form_template",
                    location: "hero",
                    cta_id: "churn_feedback_template_hero_create",
                  }}
                  className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white shadow-[0_12px_22px_-14px_rgba(61,80,255,0.9)] transition-colors hover:bg-[#2f3fd6]"
                >
                  Create a churn feedback conversation
                </TrackedLink>
                <TrackedLink
                  href="/customer-success"
                  event="cta_click"
                  eventProps={{
                    label: "See customer success use case",
                    page: "churn_feedback_form_template",
                    location: "hero",
                    cta_id: "churn_feedback_template_hero_customer_success",
                  }}
                  className="inline-flex items-center justify-center rounded-md border border-ink bg-white px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-neutral-100"
                >
                  See customer success use case
                </TrackedLink>
              </div>
            </div>
            <WorkflowContextVisual kind="feedback" />
          </div>

          <div className="mt-14 grid gap-3 rounded-[18px] bg-[#f8f7f4] p-3 ring-1 ring-[#e6e3dd] md:mt-20 md:grid-cols-2 md:p-4">
            <div className="rounded-[14px] border border-[#e6e3dd] bg-white p-5 md:p-7">
              <p className="text-sm font-semibold text-muted">
                Basic churn capture
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                Capture the reason code.
              </h2>
              <p className="mt-4 text-sm leading-6 text-muted md:text-base md:leading-7">
                A customer chooses a cancellation reason or leaves a short
                comment. Your team sees the label, but still has to infer what
                changed and what should happen next.
              </p>
            </div>
            <div className="rounded-[14px] border border-[#d7dcff] bg-white p-5 shadow-[0_24px_70px_-48px_rgba(61,80,255,0.85)] md:p-7">
              <p className="text-sm font-semibold text-accent">
                Adaptive context capture
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                Ask what changed.
              </h2>
              <p className="mt-4 text-sm leading-6 text-muted md:text-base md:leading-7">
                Lemma lets the customer explain the moment in their own words,
                then follows up on the expectation gap, workaround, and fix.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 px-6 py-20 md:grid-cols-[0.9fr_1.1fr] md:gap-16 md:px-10 md:py-28">
          <div>
            <h2 className="text-balance text-4xl font-semibold leading-[1.02] tracking-tight text-ink md:text-6xl">
              Start with the exit signal. Let the follow-up find the cause.
            </h2>
            <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-muted md:text-lg md:leading-8">
              Churn feedback is most useful when the team can connect the
              customer's reason to the workflow, expectation, or blocker behind
              it.
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
              Retention context
            </p>
            <h2 className="mt-4 text-balance text-4xl font-semibold leading-[1.02] tracking-tight text-ink md:text-6xl">
              Give the team a reason, not another unexplained label.
            </h2>
            <p className="mt-5 text-pretty text-base leading-7 text-muted md:text-lg md:leading-8">
              The goal is not to collect more exit feedback for its own sake.
              The goal is to understand why the customer left before the team
              decides what to fix.
            </p>
          </div>

          <div className="mt-10 grid gap-3 md:grid-cols-3">
            {churnReportItems.map((item) => (
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
              Lemma is for churn feedback where the useful answer depends on
              what the customer says first. Keep simple capture when the team
              only needs a structured cancellation reason.
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
                Build the churn feedback conversation that asks what changed.
              </h2>
              <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-white/70 md:text-lg md:leading-8">
                Turn a cancellation reason into an adaptive voice conversation
                that captures the context behind the exit.
              </p>
            </div>
            <TrackedLink
              href="https://app.heylemma.com"
              event="cta_click"
              eventProps={{
                label: "Create the churn feedback conversation",
                page: "churn_feedback_form_template",
                location: "final_cta",
                cta_id: "churn_feedback_template_final_create",
              }}
              className="inline-flex items-center justify-center rounded-md bg-white px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-neutral-200"
            >
              Create the churn feedback conversation
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
