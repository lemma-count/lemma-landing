import type { Metadata } from "next";
import Image from "next/image";
import { FAQ } from "@/components/FAQ";
import { TrackedLink } from "@/components/TrackedLink";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Google Forms Alternative - Lemma",
  description:
    "Lemma is a Google Forms alternative for teams that need reasons, examples, themes, quotes, and reports instead of shallow rows of text responses.",
  path: "/google-forms-alternative",
});

const faqItems = [
  {
    q: "Is Lemma a full Google Forms replacement?",
    a: "Lemma is best as a Google Forms alternative when the answers need follow-up: customer feedback, churn follow-up, lead qualification, intake, research, and proof collection. If you need simple registrations, file uploads, quizzes, payments, or spreadsheet-first operational forms, Google Forms may still be the better tool.",
  },
  {
    q: "Can I import a Google Form?",
    a: "Not as a one-click import. The practical workflow is to recreate the important questions in Lemma, then let the AI interviewer ask adaptive follow-up questions that a static form would miss.",
  },
  {
    q: "What does the respondent do?",
    a: "They open a Lemma link and answer by voice. Lemma guides a short conversation, adapts to what they say, and probes for reasons, examples, objections, tradeoffs, and next steps.",
  },
  {
    q: "What does the team get?",
    a: "Transcripts, summaries, themes, quotes, and report-style outputs grounded in what respondents actually said.",
  },
];

const workflowItems = [
  {
    title: "Customer feedback forms",
    body: "Go beyond a short text response by asking what happened, why it mattered, and what the customer would change first.",
  },
  {
    title: "Lead qualification forms",
    body: "Capture use case, urgency, constraints, decision process, and buying context before a sales conversation starts.",
  },
  {
    title: "Research and proof collection",
    body: "Collect examples, objections, outcomes, quotes, and buyer language instead of asking a team to interpret raw rows.",
  },
];

export default function GoogleFormsAlternativePage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-white pt-16 pb-14 md:pt-24 md:pb-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="mx-auto max-w-[900px] text-center">
            <h1 className="text-balance text-5xl font-semibold leading-[0.98] tracking-tight text-ink md:text-7xl">
              A Google Forms alternative for answers that need reasons.
            </h1>
            <p className="mx-auto mt-7 max-w-[710px] text-pretty text-base leading-7 text-muted md:text-lg md:leading-8">
              Google Forms gives you rows. Lemma runs adaptive AI voice forms
              that ask useful follow-up questions, then turn responses into
              transcripts, themes, quotes, and decision-ready reports.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <TrackedLink
                href="https://app.heylemma.com"
                event="cta_click"
                eventProps={{
                  label: "Sign up",
                  page: "google_forms_alternative",
                  location: "hero",
                }}
                className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white shadow-[0_12px_22px_-14px_rgba(61,80,255,0.9)] transition-colors hover:bg-[#2f3fd6]"
              >
                Sign up
              </TrackedLink>
              <TrackedLink
                href="/contact"
                event="cta_click"
                eventProps={{
                  label: "Try a voice interview",
                  page: "google_forms_alternative",
                  location: "hero",
                }}
                className="inline-flex items-center justify-center rounded-md border border-ink bg-white px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-neutral-100"
              >
                Try a voice interview
              </TrackedLink>
            </div>
          </div>

          <div className="mt-14 md:mt-20">
            <div className="relative mx-auto grid max-w-[1120px] gap-3 rounded-[18px] bg-[#f8f7f4] p-3 ring-1 ring-[#e6e3dd] md:grid-cols-2 md:p-4">
              <div className="rounded-[14px] border border-[#e6e3dd] bg-white p-5 md:p-7">
                <p className="text-sm font-semibold text-muted">
                  Static forms
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                  Turn important answers into rows.
                </h2>
                <p className="mt-4 text-sm leading-6 text-muted md:text-base md:leading-7">
                  A respondent fills a field. Your team gets a spreadsheet, but
                  the reason, example, hesitation, and next step are often left
                  for someone else to chase.
                </p>
              </div>
              <div className="rounded-[14px] border border-[#d7dcff] bg-white p-5 shadow-[0_24px_70px_-48px_rgba(61,80,255,0.85)] md:p-7">
                <p className="text-sm font-semibold text-accent">
                  Lemma voice forms
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                  Turn important answers into evidence.
                </h2>
                <p className="mt-4 text-sm leading-6 text-muted md:text-base md:leading-7">
                  Lemma follows up in the moment, captures the missing context,
                  and produces report-style outputs grounded in what people
                  actually said.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 px-6 py-20 md:grid-cols-2 md:gap-16 md:px-10 md:py-28">
          <div className="relative aspect-square w-full overflow-hidden rounded-[18px] border border-[#e6e3dd] bg-[#f8f7f4]">
            <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8">
              <Image
                src="/assets/report-coverage.png"
                alt="Sample Lemma report coverage"
                width={1300}
                height={1300}
                loading="eager"
                className="h-auto w-full max-w-[520px] rounded-xl border border-[#e6e3dd]"
              />
            </div>
          </div>

          <div>
            <h2 className="text-balance text-4xl font-semibold leading-[1.02] tracking-tight text-ink md:text-6xl">
              Use Lemma when a spreadsheet is not enough.
            </h2>
            <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-muted md:text-lg md:leading-8">
              Lemma is not trying to replace every simple Google Form. It
              replaces the forms where your team needs the why behind the
              answer, the example behind the claim, and the next action behind
              the feedback.
            </p>
            <div className="mt-10 grid gap-3">
              {workflowItems.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[18px] border border-[#e6e3dd] bg-white p-5"
                >
                  <h3 className="text-base font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FAQ items={faqItems} title="Google Forms vs Lemma" />
    </main>
  );
}
