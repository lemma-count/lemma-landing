import type { Metadata } from "next";
import Link from "next/link";
import { TrackedLink } from "@/components/TrackedLink";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Demo Request Form Template - Lemma",
  description:
    "Use Lemma to capture demo request intent first, then ask adaptive voice follow-up questions for sales context, urgency, constraints, and next steps.",
  path: "/templates/demo-request-form",
});

const starterQuestions = [
  "What made you request a demo now?",
  "What are you using today?",
  "What happens if this does not get solved?",
  "Who else is involved in the decision?",
  "What would make the call useful?",
  "What constraints should sales know before the conversation?",
];

const salesBriefItems = [
  "Buyer context",
  "Current workaround",
  "Urgency",
  "Likely objection or concern",
  "Useful quotes",
  "Recommended next action",
];

const staticFormCases = [
  "Simple newsletter capture",
  "Low-intent contact collection",
  "Workflows where fixed fields are enough",
  "Forms that require payments, uploads, quizzes, or native CRM writes",
];

const relatedLinks = [
  { href: "/typeform-alternative", label: "Typeform alternative" },
  { href: "/google-forms-alternative", label: "Google Forms alternative" },
  { href: "/contact", label: "Talk to Lemma" },
];

export default function DemoRequestFormTemplatePage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-white pt-16 pb-14 md:pt-24 md:pb-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="mx-auto max-w-[900px] text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-accent">
              Demo request form template
            </p>
            <h1 className="mt-5 text-balance text-5xl font-semibold leading-[0.98] tracking-tight text-ink md:text-7xl">
              Demo request form that qualifies after capture.
            </h1>
            <p className="mx-auto mt-7 max-w-[730px] text-pretty text-base leading-7 text-muted md:text-lg md:leading-8">
              Use Lemma when a static demo form is either too short to help
              sales or too long for the buyer to finish. Capture the request,
              ask adaptive follow-up questions by voice, and give the team a
              useful sales brief.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <TrackedLink
                href="https://app.heylemma.com"
                event="cta_click"
                eventProps={{
                  label: "Create a demo request voice form",
                  page: "demo_request_form_template",
                  location: "hero",
                  cta_id: "demo_request_template_hero_create",
                }}
                className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white shadow-[0_12px_22px_-14px_rgba(61,80,255,0.9)] transition-colors hover:bg-[#2f3fd6]"
              >
                Create a demo request voice form
              </TrackedLink>
              <TrackedLink
                href="/contact"
                event="cta_click"
                eventProps={{
                  label: "Talk through your demo form",
                  page: "demo_request_form_template",
                  location: "hero",
                  cta_id: "demo_request_template_hero_contact",
                }}
                className="inline-flex items-center justify-center rounded-md border border-ink bg-white px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-neutral-100"
              >
                Talk through your demo form
              </TrackedLink>
            </div>
          </div>

          <div className="mt-14 grid gap-3 rounded-[18px] bg-[#f8f7f4] p-3 ring-1 ring-[#e6e3dd] md:mt-20 md:grid-cols-2 md:p-4">
            <div className="rounded-[14px] border border-[#e6e3dd] bg-white p-5 md:p-7">
              <p className="text-sm font-semibold text-muted">
                Static demo forms
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                Force one form to do two jobs.
              </h2>
              <p className="mt-4 text-sm leading-6 text-muted md:text-base md:leading-7">
                Short forms preserve intent but leave sales without context.
                Long forms collect more detail, but the request can start to
                feel like homework.
              </p>
            </div>
            <div className="rounded-[14px] border border-[#d7dcff] bg-white p-5 shadow-[0_24px_70px_-48px_rgba(61,80,255,0.85)] md:p-7">
              <p className="text-sm font-semibold text-accent">
                Lemma voice forms
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                Capture the request, then follow up.
              </h2>
              <p className="mt-4 text-sm leading-6 text-muted md:text-base md:leading-7">
                Lemma lets a buyer answer by voice, then asks useful follow-up
                questions about why now, the current workflow, urgency,
                constraints, and what would make the call useful.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 px-6 py-20 md:grid-cols-[0.9fr_1.1fr] md:gap-16 md:px-10 md:py-28">
          <div>
            <h2 className="text-balance text-4xl font-semibold leading-[1.02] tracking-tight text-ink md:text-6xl">
              Start with a light form. Let the conversation do the qualifying.
            </h2>
            <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-muted md:text-lg md:leading-8">
              Keep the fixed fields to the essentials: name, email, company,
              role, and preferred next step. Use voice follow-up for the context
              that depends on what the buyer says first.
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
              Sales-ready output
            </p>
            <h2 className="mt-4 text-balance text-4xl font-semibold leading-[1.02] tracking-tight text-ink md:text-6xl">
              Give the team a brief, not another row to interpret.
            </h2>
            <p className="mt-5 text-pretty text-base leading-7 text-muted md:text-lg md:leading-8">
              The point is not to ask more questions for their own sake. The
              point is to turn buyer answers into usable context before sales
              walks into the conversation.
            </p>
          </div>

          <div className="mt-10 grid gap-3 md:grid-cols-3">
            {salesBriefItems.map((item) => (
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
              When to keep a static demo form.
            </h2>
            <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-muted md:text-lg md:leading-8">
              Lemma is for workflows where the useful next question depends on
              the buyer's first answer. A static form is still the better fit
              when the job is simple collection or an unsupported operational
              workflow.
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
                Build the form that asks the next question.
              </h2>
              <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-white/70 md:text-lg md:leading-8">
                Replace a shallow demo request form with an adaptive voice form
                that preserves intent and captures the sales context behind it.
              </p>
            </div>
            <TrackedLink
              href="https://app.heylemma.com"
              event="cta_click"
              eventProps={{
                label: "Create the voice form",
                page: "demo_request_form_template",
                location: "final_cta",
                cta_id: "demo_request_template_final_create",
              }}
              className="inline-flex items-center justify-center rounded-md bg-white px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-neutral-200"
            >
              Create the voice form
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
              Should a demo request form qualify leads before or after booking?
            </h2>
            <p className="mt-4 text-sm leading-6 text-muted">
              A demo request form should usually capture the high-intent request
              before asking for detailed qualification. If the buyer's context
              is messy, ask follow-up questions after the first step so sales
              gets a useful brief without making the request feel like homework.
            </p>
          </div>
          <div className="rounded-[14px] border border-[#e6e3dd] bg-[#f8f7f4] p-6">
            <h2 className="text-xl font-semibold tracking-tight text-ink">
              What should a demo request form ask?
            </h2>
            <p className="mt-4 text-sm leading-6 text-muted">
              Start with the minimum information needed to preserve the
              request: name, email, company, role, and preferred next step. Then
              follow up on why now, current workaround, urgency, constraints,
              decision process, and what would make the call useful.
            </p>
          </div>
          <div className="rounded-[14px] border border-[#e6e3dd] bg-[#f8f7f4] p-6">
            <h2 className="text-xl font-semibold tracking-tight text-ink">
              When should a lead qualification form become a conversation?
            </h2>
            <p className="mt-4 text-sm leading-6 text-muted">
              A lead qualification form should become a short conversation when
              the next useful question depends on the buyer's first answer.
              Fixed fields work for simple routing. Adaptive follow-up works
              better when sales needs the reason, example, objection, urgency,
              or tradeoff behind the request.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
