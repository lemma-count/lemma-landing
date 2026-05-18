import type { Metadata } from "next";
import Image from "next/image";
import { FAQ } from "@/components/FAQ";
import { TrackedLink } from "@/components/TrackedLink";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Typeform Alternative - Lemma",
  description:
    "Lemma is a Typeform alternative for teams that need richer answers than static forms can collect. Send adaptive AI voice forms and get transcript-grounded themes, quotes, and reports.",
  path: "/typeform-alternative",
});

const faqItems = [
  {
    q: "Is Lemma a full Typeform replacement?",
    a: "Lemma is best as a Typeform alternative when the job is qualitative: customer feedback, churn follow-up, lead qualification, story intake, research, and other workflows where the first answer is too shallow. If you need every form-builder input type, design control, or operational form workflow, Typeform may still be the better tool.",
  },
  {
    q: "Can I import an existing Typeform?",
    a: "Not as a one-click import. The practical workflow is to recreate the important questions, then let Lemma ask adaptive follow-up questions that a static form would miss.",
  },
  {
    q: "What does the respondent do?",
    a: "They open a Lemma link and answer by voice. Lemma guides a short conversation, adapts to what they say, and probes for reasons, examples, objections, and next steps.",
  },
  {
    q: "What does the team get?",
    a: "Transcripts, summaries, themes, quotes, and report-style outputs grounded in what respondents actually said.",
  },
];

const workflowItems = [
  {
    title: "Customer feedback and churn follow-up",
    body: "Ask why a score changed, what happened, what they expected instead, and what your team should fix first.",
  },
  {
    title: "Lead qualification and demo requests",
    body: "Capture use case, urgency, constraints, buying context, and the real reason someone wants to talk.",
  },
  {
    title: "Customer story and proof intake",
    body: "Collect the examples, outcomes, before-and-after detail, and quotes that static forms rarely produce.",
  },
];

export default function TypeformAlternativePage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-white pt-16 pb-14 md:pt-24 md:pb-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="mx-auto max-w-[880px] text-center">
            <h1 className="text-balance text-5xl font-semibold leading-[0.98] tracking-tight text-ink md:text-7xl">
              A Typeform alternative for answers that need follow-up.
            </h1>
            <p className="mx-auto mt-7 max-w-[690px] text-pretty text-base leading-7 text-muted md:text-lg md:leading-8">
              Typeform collects responses. Lemma runs adaptive AI voice forms
              that ask useful follow-up questions, then turn what people say
              into transcripts, themes, quotes, and decision-ready reports.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <TrackedLink
                href="https://app.heylemma.com"
                event="cta_click"
                eventProps={{
                  label: "Sign up",
                  page: "typeform_alternative",
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
                  page: "typeform_alternative",
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
                  Capture the first answer.
                </h2>
                <p className="mt-4 text-sm leading-6 text-muted md:text-base md:leading-7">
                  A respondent picks an option or fills a text box. The row is
                  clean, but the reason, example, tradeoff, and next step are
                  often missing.
                </p>
              </div>
              <div className="rounded-[14px] border border-[#d7dcff] bg-white p-5 shadow-[0_24px_70px_-48px_rgba(61,80,255,0.85)] md:p-7">
                <p className="text-sm font-semibold text-accent">
                  Lemma voice forms
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                  Ask the next useful question.
                </h2>
                <p className="mt-4 text-sm leading-6 text-muted md:text-base md:leading-7">
                  Lemma adapts to each answer, probes for the missing context,
                  and produces report-style outputs your team can actually use.
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
              Use Lemma when the form would be too shallow.
            </h2>
            <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-muted md:text-lg md:leading-8">
              Lemma is not trying to be a prettier form builder. It replaces
              Typeform when the answer matters enough that your team needs the
              reason, example, objection, and action behind it.
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

      <FAQ items={faqItems} title="Typeform vs Lemma" />
    </main>
  );
}
