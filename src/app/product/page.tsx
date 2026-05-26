import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { TrackedLink } from "@/components/TrackedLink";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Product - Lemma",
  description:
    "Lemma sends adaptive voice conversations, asks follow-up questions, and turns human context into transcripts, themes, quotes, reports, and next actions.",
  path: "/product",
});

const steps = [
  {
    title: "Start with a decision",
    body: "Choose the decision that needs better context: what to build, why buyers care, why customers churn, or which message is working.",
  },
  {
    title: "Send one conversation link",
    body: "Respondents answer by voice. Lemma adapts to what they say and asks the follow-up questions a static form cannot ask.",
  },
  {
    title: "Use the report",
    body: "Your team gets transcripts, summaries, themes, quotes, and next actions grounded in what people actually said.",
  },
];

const outputs = [
  "Transcripts",
  "Summaries",
  "Themes",
  "Quotes",
  "Reports",
  "Next actions",
];

const workflowLinks = [
  {
    title: "Founders",
    href: "/founders",
    body: "Find where the market is pulling before you bet more runway.",
  },
  {
    title: "Product & growth",
    href: "/product-growth",
    body: "Understand friction, activation, demand, and what to build next.",
  },
  {
    title: "Sales",
    href: "/sales",
    body: "Capture buyer context before the sales conversation starts.",
  },
  {
    title: "Customer success",
    href: "/customer-success",
    body: "Learn why customers complain, renew, churn, or stop getting value.",
  },
];

export default function ProductPage() {
  return (
    <main>
      <section className="bg-white">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 px-6 py-16 md:grid-cols-[0.95fr_1.05fr] md:gap-16 md:px-10 md:py-28">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-accent">
              Product
            </p>
            <h1 className="mt-5 text-balance text-5xl font-semibold leading-[0.98] tracking-tight text-ink md:text-7xl">
              Collect human context before the next decision.
            </h1>
            <p className="mt-7 max-w-xl text-pretty text-base leading-7 text-muted md:text-lg md:leading-8">
              Lemma runs adaptive voice conversations with customers, buyers,
              users, employees, or stakeholders, then turns what they say into
              context your team and AI tools can act on.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackedLink
                href="https://app.heylemma.com"
                event="cta_click"
                eventProps={{
                  label: "Start a conversation",
                  page: "product",
                  location: "hero",
                  cta_id: "product_hero_start",
                }}
                className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white shadow-[0_12px_22px_-14px_rgba(61,80,255,0.9)] transition-colors hover:bg-[#2f3fd6]"
              >
                Start a conversation
              </TrackedLink>
              <TrackedLink
                href="/templates"
                event="cta_click"
                eventProps={{
                  label: "See templates",
                  page: "product",
                  location: "hero",
                  cta_id: "product_hero_templates",
                }}
                className="inline-flex items-center justify-center rounded-md border border-ink bg-white px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-neutral-100"
              >
                See templates
              </TrackedLink>
            </div>
          </div>

          <div className="relative aspect-[5/4] w-full overflow-hidden rounded-[18px] border border-[#e6e3dd] bg-[#f8f7f4]">
            <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8">
              <Image
                src="/assets/report-coverage.png"
                alt="Sample Lemma report coverage"
                width={1300}
                height={1300}
                priority
                className="h-auto w-full max-w-[560px] rounded-xl border border-[#e6e3dd]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-white">
        <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-accent">
              How it works
            </p>
            <h2 className="mt-4 text-balance text-4xl font-semibold leading-[1.02] tracking-tight text-ink md:text-6xl">
              A better input layer for AI-native teams.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-[14px] border border-[#e6e3dd] bg-[#f8f7f4] p-6"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-semibold text-accent ring-1 ring-[#e6e3dd]">
                  {index + 1}
                </span>
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8f7f4]">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 px-6 py-20 md:grid-cols-[0.85fr_1.15fr] md:gap-16 md:px-10 md:py-28">
          <div>
            <h2 className="text-balance text-4xl font-semibold leading-[1.02] tracking-tight text-ink md:text-6xl">
              Outputs your team can actually use.
            </h2>
            <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-muted md:text-lg md:leading-8">
              Lemma is not another place to store raw responses. It turns
              conversations into material your team can use before it builds,
              sells, supports, researches, or decides.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {outputs.map((output) => (
              <div
                key={output}
                className="rounded-[14px] border border-[#e6e3dd] bg-white p-5"
              >
                <h3 className="text-base font-semibold text-ink">{output}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-10 md:py-28">
          <div className="grid gap-8 md:grid-cols-[0.75fr_1fr] md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-accent">
                Where it fits
              </p>
              <h2 className="mt-4 text-balance text-4xl font-semibold leading-[1.02] tracking-tight text-ink md:text-6xl">
                Use it anywhere the first answer is too shallow.
              </h2>
            </div>
            <p className="max-w-2xl text-pretty text-base leading-7 text-muted md:text-lg md:leading-8">
              Static forms work when fixed fields are enough. Lemma fits when
              your next question depends on what the person just said.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {workflowLinks.map((workflow) => (
              <Link
                key={workflow.href}
                href={workflow.href}
                className="group rounded-[14px] border border-[#e6e3dd] bg-white p-6 transition-colors hover:border-[#c9c4ba]"
              >
                <h3 className="text-xl font-semibold tracking-tight text-ink">
                  {workflow.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">
                  {workflow.body}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent">
                  View use case
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    aria-hidden
                    className="transition-transform group-hover:translate-x-0.5"
                  >
                    <path
                      d="M2.5 6h7M6.5 3l3 3-3 3"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
