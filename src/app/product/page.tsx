import type { Metadata } from "next";
import Link from "next/link";
import { TrackedLink } from "@/components/TrackedLink";
import { ProductContextVisual } from "@/components/ContextVisuals";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Product - Lemma",
  description:
    "Lemma runs AI-led voice conversations with the people who matter and turns what they say into usable context.",
  path: "/product",
});

const steps = [
  {
    title: "Frame the business question",
    body: "Start with the business question that needs better human context.",
  },
  {
    title: "Run AI-led conversations",
    body: "Send a voice conversation to the people closest to the question. Lemma asks the follow-ups.",
  },
  {
    title: "Use the context layer",
    body: "Review the evidence, patterns, and report before your team decides what to do next.",
  },
];

const outputs = [
  {
    title: "Evidence base",
    body: "Transcripts and raw answers from each voice conversation.",
  },
  {
    title: "Respondent briefs",
    body: "A plain-English summary of each person's situation.",
  },
  {
    title: "Pattern map",
    body: "Themes and repeated blockers across responses.",
  },
  {
    title: "Quote bank",
    body: "Useful lines from respondents, grounded in the transcript.",
  },
  {
    title: "Context report",
    body: "What the team learned and why it matters.",
  },
  {
    title: "Agent-ready knowledge base",
    body: "Structured context your team and agents can use as input.",
  },
];

const workflowLinks = [
  {
    title: "Founders",
    href: "/founders",
    body: "Understand market pull before committing more runway.",
  },
  {
    title: "Product",
    href: "/product-growth",
    body: "Learn which user problem deserves action.",
  },
  {
    title: "Sales",
    href: "/sales",
    body: "Turn product-led and self-serve signals into buyer context.",
  },
  {
    title: "Marketing",
    href: "/marketing",
    body: "Hear the words buyers actually use.",
  },
  {
    title: "Customer success",
    href: "/customer-success",
    body: "Understand why customers get stuck.",
  },
  {
    title: "Consultants",
    href: "/consultants",
    body: "Turn stakeholder conversations into structured evidence.",
  },
];

export default function ProductPage() {
  return (
    <main>
      <section className="bg-white">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 px-6 py-16 md:grid-cols-[0.95fr_1.05fr] md:gap-16 md:px-10 md:py-28">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-subtle">
              Product
            </p>
            <h1 className="mt-5 text-balance text-5xl font-semibold leading-[0.98] tracking-tight text-ink md:text-7xl">
              Build your context layer from AI-led voice conversations.
            </h1>
            <p className="mt-7 max-w-xl text-pretty text-base leading-7 text-muted md:text-lg md:leading-8">
              Run AI-led conversations with the people who matter to your
              business. Lemma listens, asks follow-ups, and turns what people
              say into context your team and agents can use.
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
                href="#outputs"
                event="cta_click"
                eventProps={{
                  label: "See outputs",
                  page: "product",
                  location: "hero",
                  cta_id: "product_hero_outputs",
                }}
                className="inline-flex items-center justify-center rounded-md border border-ink bg-white px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-neutral-100"
              >
                See outputs
              </TrackedLink>
            </div>
          </div>

          <div className="relative aspect-[5/4] w-full overflow-hidden rounded-[18px] border border-[#e6e3dd] bg-[#f8f7f4]">
            <ProductContextVisual />
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-white">
        <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-subtle">
              How it works
            </p>
            <h2 className="mt-4 text-balance text-4xl font-semibold leading-[1.02] tracking-tight text-ink md:text-6xl">
              From business question to usable context.
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

      <section id="outputs" className="bg-[#f8f7f4]">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 px-6 py-20 md:grid-cols-[0.85fr_1.15fr] md:gap-16 md:px-10 md:py-28">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-subtle">
              Outputs
            </p>
            <h2 className="text-balance text-4xl font-semibold leading-[1.02] tracking-tight text-ink md:text-6xl">
              Built for action, not storage.
            </h2>
            <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-muted md:text-lg md:leading-8">
              Lemma turns voice conversations into clear evidence so your team
              can make the next decision with less guessing.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {outputs.map((output) => (
              <div
                key={output.title}
                className="rounded-[14px] border border-[#e6e3dd] bg-white p-5"
              >
                <h3 className="text-base font-semibold text-ink">
                  {output.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {output.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-10 md:py-28">
          <div className="grid gap-8 md:grid-cols-[0.75fr_1fr] md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-subtle">
                Where it fits
              </p>
              <h2 className="mt-4 text-balance text-4xl font-semibold leading-[1.02] tracking-tight text-ink md:text-6xl">
                Use Lemma when better context changes what happens next.
              </h2>
            </div>
            <p className="max-w-2xl text-pretty text-base leading-7 text-muted md:text-lg md:leading-8">
              Use Lemma when the next move depends on what the people closest
              to the question know but your team has not captured yet.
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
