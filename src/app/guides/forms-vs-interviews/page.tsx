import type { Metadata } from "next";
import Image from "next/image";
import { TrackedLink } from "@/components/TrackedLink";
import { createMetadata, stringifyJsonLd } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Forms vs Interviews: When to Use Each - Lemma",
  description:
    "Use static forms when first answers are enough. Use adaptive AI voice forms when follow-up questions, reasons, examples, quotes, and reports would change the decision.",
  path: "/guides/forms-vs-interviews",
  image: {
    url: "/assets/forms-vs-interviews-og.png",
    width: 1200,
    height: 630,
    alt: "Lemma turns static form rows into reasons, quotes, themes, and next actions.",
  },
});

const decisionRows = [
  {
    workflow: "Customer feedback",
    staticForm: "A score, a category, and a short comment.",
    interview: "The reason behind the score, what happened, and what to fix first.",
  },
  {
    workflow: "Lead qualification",
    staticForm: "Company size, role, budget range, and a request.",
    interview: "Use case, urgency, constraints, buying context, and next best question.",
  },
  {
    workflow: "Customer story intake",
    staticForm: "A testimonial prompt and a few open text fields.",
    interview: "Before-and-after detail, proof points, objections, and quotable language.",
  },
  {
    workflow: "Client or stakeholder discovery",
    staticForm: "A project brief with requirements and contact details.",
    interview: "Goals, tradeoffs, risks, decision criteria, and context for recommendations.",
  },
];

const checklistItems = [
  "The first answer is likely to be incomplete.",
  "The team needs reasons, examples, objections, or tradeoffs.",
  "Someone would otherwise schedule follow-up calls to clarify responses.",
  "The output needs to become a summary, report, recommendation, or sales note.",
  "Respondents can answer naturally by voice for a few minutes.",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Forms vs Interviews: When to Use Each",
  description:
    "A practical guide to choosing between static forms, interviews, and adaptive AI voice forms for workflows where follow-up questions matter.",
  author: {
    "@type": "Organization",
    name: "Lemma",
  },
  mainEntityOfPage: "https://www.heylemma.com/guides/forms-vs-interviews",
};

export default function FormsVsInterviewsGuidePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stringifyJsonLd(jsonLd) }}
      />

      <section className="bg-white pt-16 pb-14 md:pt-24 md:pb-24">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 px-6 md:grid-cols-[1.05fr_0.95fr] md:gap-16 lg:px-10">
          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.16em] text-subtle">
              Guide
            </p>
            <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[0.98] tracking-tight text-ink md:text-7xl">
              Forms vs interviews: when the first answer is not enough.
            </h1>
            <p className="mt-7 max-w-[700px] text-pretty text-base leading-7 text-muted md:text-lg md:leading-8">
              Static forms are efficient when a short answer is enough.
              Interviews are useful when the answer needs context. Lemma sits
              between them: an adaptive AI voice form that can ask follow-up
              questions and return transcripts, summaries, themes, quotes, and
              report-style outputs.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackedLink
                href="https://app.heylemma.com"
                event="cta_click"
                eventProps={{
                  label: "Create a voice form",
                  page: "forms_vs_interviews_guide",
                  location: "hero",
                  cta_id: "guide_forms_vs_interviews_create",
                }}
                className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white shadow-[0_12px_22px_-14px_rgba(61,80,255,0.9)] transition-colors hover:bg-[#2f3fd6]"
              >
                Create a voice form
              </TrackedLink>
              <TrackedLink
                href="/typeform-alternative"
                event="cta_click"
                eventProps={{
                  label: "Compare with Typeform",
                  page: "forms_vs_interviews_guide",
                  location: "hero",
                  cta_id: "guide_forms_vs_interviews_typeform",
                }}
                className="inline-flex items-center justify-center rounded-md border border-ink bg-white px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-neutral-100"
              >
                Compare with Typeform
              </TrackedLink>
            </div>
          </div>

          <div className="relative aspect-square overflow-hidden rounded-[18px] border border-[#e6e3dd] bg-[#f8f7f4]">
            <div className="absolute inset-0 flex items-center justify-center p-5 md:p-8">
              <Image
                src="/assets/report-coverage.png"
                alt="Lemma report coverage showing themes and evidence"
                width={1300}
                height={1300}
                priority
                className="h-auto w-full max-w-[520px] rounded-xl border border-[#e6e3dd]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-[#f8f7f4]">
        <div className="mx-auto max-w-[1280px] px-6 py-16 md:px-10 md:py-24">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.16em] text-subtle">
              Decision rule
            </p>
            <h2 className="text-balance text-4xl font-semibold leading-[1.02] tracking-tight text-ink md:text-6xl">
              Use a form for collection. Use an interview for explanation.
            </h2>
            <p className="mt-5 text-base leading-7 text-muted md:text-lg md:leading-8">
              The mistake is forcing every workflow into the same tool. A
              registration form should stay simple. A churn reason, demo
              request, proof intake, or client discovery form often needs the
              next useful question.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="rounded-[18px] border border-[#e6e3dd] bg-white p-5 md:p-6">
              <h3 className="text-lg font-semibold text-ink">
                Static form
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted">
                Best when the answer is known, structured, and complete enough
                to act on without clarification.
              </p>
            </div>
            <div className="rounded-[18px] border border-[#e6e3dd] bg-white p-5 md:p-6">
              <h3 className="text-lg font-semibold text-ink">
                Live interview
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted">
                Best when the topic is complex, sensitive, high-stakes, or
                important enough to justify calendar time.
              </p>
            </div>
            <div className="rounded-[18px] border border-[#d7dcff] bg-white p-5 shadow-[0_24px_70px_-52px_rgba(61,80,255,0.85)] md:p-6">
              <h3 className="text-lg font-semibold text-ink">
                Adaptive voice form
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted">
                Best when a static form would be too shallow and a live
                interview would be too slow.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-6 py-16 md:px-10 md:py-24">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.16em] text-subtle">
              Workflow examples
            </p>
            <h2 className="text-balance text-4xl font-semibold leading-[1.02] tracking-tight text-ink md:text-6xl">
              What changes when the form can follow up.
            </h2>
          </div>

          <div className="mt-10 overflow-hidden rounded-[18px] border border-[#e6e3dd]">
            <div className="grid bg-[#f8f7f4] text-sm font-semibold text-ink md:grid-cols-[0.9fr_1fr_1fr]">
              <div className="border-b border-[#e6e3dd] p-4 md:border-r">
                Workflow
              </div>
              <div className="border-b border-[#e6e3dd] p-4 md:border-r">
                Static form usually captures
              </div>
              <div className="border-b border-[#e6e3dd] p-4">
                Follow-up can capture
              </div>
            </div>
            {decisionRows.map((row) => (
              <div
                key={row.workflow}
                className="grid border-b border-[#e6e3dd] last:border-b-0 md:grid-cols-[0.9fr_1fr_1fr]"
              >
                <div className="border-[#e6e3dd] p-4 text-sm font-semibold text-ink md:border-r">
                  {row.workflow}
                </div>
                <div className="border-[#e6e3dd] p-4 text-sm leading-6 text-muted md:border-r">
                  {row.staticForm}
                </div>
                <div className="p-4 text-sm leading-6 text-muted">
                  {row.interview}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-white">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 px-6 py-16 md:grid-cols-[0.85fr_1.15fr] md:px-10 md:py-24">
          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.16em] text-subtle">
              Checklist
            </p>
            <h2 className="text-balance text-4xl font-semibold leading-[1.02] tracking-tight text-ink md:text-5xl">
              Turn the form into a short conversation when these are true.
            </h2>
          </div>
          <div className="grid gap-3">
            {checklistItems.map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-[18px] border border-[#e6e3dd] bg-[#f8f7f4] p-4"
              >
                <span
                  aria-hidden
                  className="mt-1 h-5 w-5 shrink-0 rounded-full bg-accent"
                />
                <p className="text-sm leading-6 text-ink">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-[#181817] text-white">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-6 px-6 py-14 md:flex-row md:items-center md:justify-between md:px-10 md:py-18">
          <div className="max-w-2xl">
            <h2 className="text-balance text-3xl font-semibold leading-tight md:text-5xl">
              Replace the shallow form with an adaptive voice form.
            </h2>
            <p className="mt-4 text-sm leading-6 text-white/72 md:text-base md:leading-7">
              Start with the question your current form asks, then let Lemma
              follow up for the reasons, examples, quotes, and report your team
              needs.
            </p>
          </div>
          <TrackedLink
            href="https://app.heylemma.com"
            event="cta_click"
            eventProps={{
              label: "Create a voice form",
              page: "forms_vs_interviews_guide",
              location: "footer",
              cta_id: "guide_forms_vs_interviews_footer_create",
            }}
            className="inline-flex shrink-0 items-center justify-center rounded-md bg-white px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-neutral-100"
          >
            Create a voice form
          </TrackedLink>
        </div>
      </section>
    </main>
  );
}
