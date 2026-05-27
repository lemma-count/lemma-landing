import type { Metadata } from "next";
import { TrackedLink } from "@/components/TrackedLink";
import { AlternativesVisual } from "@/components/ContextVisuals";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Alternatives - Lemma",
  description:
    "Compare Lemma with collection, survey, research, and repository tools based on the speed and depth of human context your team needs.",
  path: "/alternatives",
});

const formAlternatives = [
  {
    name: "Typeform",
    bestFor: "Polished forms and surveys with a strong respondent experience.",
    limit: "Useful when the planned questions are enough, weaker when the next useful question depends on the answer.",
    lemma: "Use Lemma when adaptive follow-up, buyer language, objections, and richer context matter more than collection polish.",
  },
  {
    name: "Google Forms",
    bestFor: "Fast, free collection into spreadsheet-like rows.",
    limit: "Good for structured facts, but thin when the team needs the reason, example, urgency, or tradeoff behind a response.",
    lemma: "Use Lemma when the row is not enough to decide what to build, say, sell, or fix.",
  },
  {
    name: "Tally",
    bestFor: "Simple no-code forms that are quick to publish.",
    limit: "Great for lightweight collection, less useful when answers need adaptive follow-up.",
    lemma: "Use Lemma when a lightweight intake should collect the context behind the first answer.",
  },
  {
    name: "Jotform",
    bestFor: "Operational forms, widgets, and business intake workflows.",
    limit: "Strong for collection and routing, not built around qualitative follow-up and synthesis.",
    lemma: "Use Lemma when the intake needs nuance, objections, workflow detail, and a usable context report.",
  },
  {
    name: "SurveyMonkey",
    bestFor: "Structured surveys, panels, and quantitative feedback programs.",
    limit: "Helpful for measuring known questions at scale, less helpful when the team needs the reason behind an answer.",
    lemma: "Use Lemma when reasons, examples, language, and quotes are the context the team needs.",
  },
  {
    name: "Airtable forms",
    bestFor: "Collecting structured records directly into an operational database.",
    limit: "Best when the answer is a record, not when the team needs to understand why someone said it.",
    lemma: "Use Lemma before the record when the context should shape routing, prioritization, or follow-up.",
  },
  {
    name: "HubSpot forms",
    bestFor: "Lead capture tied to CRM and marketing automation.",
    limit: "Good for conversion and routing, but the buyer context often still has to be collected later.",
    lemma: "Use Lemma when sales needs intent, urgency, fit, alternatives, and objections before the next conversation.",
  },
];

const researchAlternatives = [
  {
    name: "UserTesting",
    role: "User feedback and testing platform",
    note: "Useful for moderated or task-based insight. Lemma fits when you already know who to ask and need adaptive context capture.",
  },
  {
    name: "Maze",
    role: "Prototype and usability testing",
    note: "Useful for testing flows and prototypes. Lemma fits better when the job is open-ended human context, objections, and language.",
  },
  {
    name: "Sprig",
    role: "In-product research and feedback",
    note: "Useful for product-triggered feedback and research. Lemma fits when responses need adaptive follow-up and synthesis outside a fixed prompt.",
  },
  {
    name: "Dovetail",
    role: "Research repository and customer intelligence",
    note: "Useful for storing and analyzing research. Lemma is the capture layer when the team first needs richer conversations.",
  },
  {
    name: "Qualtrics",
    role: "Enterprise experience management",
    note: "Useful for large programs, governance, and measurement. Lemma is narrower and faster when a team needs context for a specific product or GTM move.",
  },
];

const choiceRules = [
  {
    title: "Choose a collection tool",
    body: "when the answer is predictable, structured, and useful without follow-up.",
  },
  {
    title: "Choose a survey platform",
    body: "when the main job is measuring a known question across a large sample.",
  },
  {
    title: "Choose a research platform",
    body: "when you need panels, usability testing, repository workflows, or enterprise research operations.",
  },
  {
    title: "Choose Lemma",
    body: "when your team needs the human context behind the answer before it builds, launches, sells, supports, or briefs agents.",
  },
];

export default function AlternativesPage() {
  return (
    <main>
      <section className="bg-white pt-16 pb-14 md:pt-24 md:pb-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="grid gap-12 md:grid-cols-[0.9fr_0.75fr] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-accent">
                Alternatives
              </p>
              <h1 className="mt-5 text-balance text-5xl font-semibold leading-[0.98] tracking-tight text-ink md:text-7xl">
                Choose the tool by the context you need.
              </h1>
              <p className="mt-7 max-w-3xl text-pretty text-base leading-7 text-muted md:text-lg md:leading-8">
                Collection, survey, research, and repository tools are useful
                when collection, measurement, testing, or storage is the job.
                Lemma is for founders and AI-native teams that need adaptive
                voice conversations to ask follow-up questions and collect the
                context behind what people say.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <TrackedLink
                  href="https://app.heylemma.com"
                  event="cta_click"
                  eventProps={{
                    label: "Start a conversation",
                    page: "alternatives",
                    location: "hero",
                    cta_id: "alternatives_hero_start",
                  }}
                  className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white shadow-[0_12px_22px_-14px_rgba(61,80,255,0.9)] transition-colors hover:bg-[#2f3fd6]"
                >
                  Start a conversation
                </TrackedLink>
                <TrackedLink
                  href="/product"
                  event="cta_click"
                  eventProps={{
                    label: "See product",
                    page: "alternatives",
                    location: "hero",
                    cta_id: "alternatives_hero_product",
                  }}
                  className="inline-flex items-center justify-center rounded-md border border-ink bg-white px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-neutral-100"
                >
                  See product
                </TrackedLink>
              </div>
            </div>
            <AlternativesVisual />
          </div>
        </div>
      </section>

      <section className="bg-[#f8f7f4]">
        <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-accent">
              Collection and survey tools
            </p>
            <h2 className="mt-4 text-balance text-4xl font-semibold leading-[1.02] tracking-tight text-ink md:text-6xl">
              Use collection tools when collection is the job.
            </h2>
          </div>

          <div className="mt-10 grid gap-4">
            {formAlternatives.map((tool) => (
              <section
                key={tool.name}
                className="grid gap-6 rounded-[16px] border border-[#e6e3dd] bg-white p-6 md:grid-cols-[0.32fr_1fr] md:p-8"
              >
                <h3 className="text-2xl font-semibold tracking-tight text-ink">
                  {tool.name}
                </h3>
                <div className="grid gap-4 text-sm leading-6 text-muted md:grid-cols-3">
                  <p>
                    <span className="font-semibold text-ink">Best for:</span>{" "}
                    {tool.bestFor}
                  </p>
                  <p>
                    <span className="font-semibold text-ink">Limit:</span>{" "}
                    {tool.limit}
                  </p>
                  <p>
                    <span className="font-semibold text-ink">Use Lemma when:</span>{" "}
                    {tool.lemma}
                  </p>
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-10 md:py-28">
          <div className="grid gap-8 md:grid-cols-[0.72fr_1fr] md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-accent">
                Research stack
              </p>
              <h2 className="mt-4 text-balance text-4xl font-semibold leading-[1.02] tracking-tight text-ink md:text-6xl">
                Research tools solve different parts of the context problem.
              </h2>
            </div>
            <p className="max-w-2xl text-pretty text-base leading-7 text-muted md:text-lg md:leading-8">
              Lemma can sit before or beside research tools. Its job is to
              ask adaptive follow-up questions, collect richer human context,
              and turn it into material your team can use.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {researchAlternatives.map((tool) => (
              <section
                key={tool.name}
                className="rounded-[16px] border border-[#e6e3dd] bg-[#f8f7f4] p-6"
              >
                <p className="text-sm font-semibold text-accent">
                  {tool.role}
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-ink">
                  {tool.name}
                </h3>
                <p className="mt-4 text-sm leading-6 text-muted">{tool.note}</p>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0a0a0a] text-white">
        <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-10 md:py-24">
          <div className="grid gap-10 md:grid-cols-[0.75fr_1fr] md:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-white/55">
                Rule of thumb
              </p>
              <h2 className="mt-4 text-balance text-4xl font-semibold leading-[1.02] tracking-tight md:text-6xl">
                Match the tool to the depth of context.
              </h2>
            </div>
            <div className="grid gap-3">
              {choiceRules.map((rule) => (
                <div
                  key={rule.title}
                  className="rounded-[14px] border border-white/15 bg-white/[0.06] p-5"
                >
                  <h3 className="text-base font-semibold">{rule.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/70">
                    {rule.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
