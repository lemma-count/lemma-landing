import Image from "next/image";
import {
  AdaptiveConversationVisual,
  HandoverVisual,
  PrioritizationVisual,
} from "./ProductVisuals";

const steps = [
  {
    index: "01",
    title: "Choose who you want to reach",
    body: "Import prospects from LinkedIn or another trusted source. Lemma helps you prioritize the right people and shape the strategy for reaching them.",
    Visual: PrioritizationVisual,
  },
  {
    index: "02",
    title: "Let Lemma take over",
    body: "Every prospect gets a path of their own. Lemma decides what to say, when to act, and how to move each conversation forward—without sequences for you to manage.",
    Visual: AdaptiveConversationVisual,
  },
  {
    index: "03",
    title: "Step in when it matters",
    body: "When a prospect is ready, Lemma books the meeting and hands you the full context—so you can focus on winning the client.",
    Visual: HandoverVisual,
  },
] as const;

export function ProofOverview() {
  return (
    <section
      id="how-it-works"
      className="relative isolate scroll-mt-20 overflow-hidden border-t border-border bg-paper text-ink"
    >
      <Image
        src="/brand/patterns/beacon-horizon-peripheral-v1.webp"
        alt=""
        fill
        sizes="100vw"
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 hidden h-full w-full select-none object-fill lg:block"
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 py-20 sm:px-8 md:py-24 lg:px-10 lg:py-28">
        <div className="landing-reveal max-w-[860px]">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.14em] text-subtle">
            How it works
          </p>
          <h2 className="text-balance text-[2.85rem] font-medium leading-[0.98] tracking-[-0.024em] sm:text-[3.55rem] lg:text-[4rem]">
            Set the direction. Lemma does the prospecting.
          </h2>
        </div>

        <div className="relative mt-12 grid gap-6 lg:mt-14 lg:grid-cols-3 lg:gap-7">
          <div aria-hidden className="absolute left-[8%] right-[8%] top-[2.95rem] hidden h-px bg-gradient-to-r from-brand-cobalt/18 via-brand-cobalt/62 to-brand-cobalt/18 lg:block" />
          {steps.map((step) => {
            const Visual = step.Visual;
            return (
            <article
              key={step.title}
              className="landing-reveal group relative z-10 min-w-0 rounded-[14px] border border-border bg-paper p-2.5 transition duration-300 hover:-translate-y-1 hover:border-brand-cobalt/28 hover:shadow-[0_24px_60px_-42px_rgba(4,16,42,0.42)]"
            >
              <div className="min-h-[210px] px-3 pb-6 pt-3 sm:px-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-md bg-brand-cobalt text-xs font-semibold text-white ring-[5px] ring-paper">
                  {step.index}
                </span>
                <h3 className="mt-7 text-xl font-semibold tracking-[-0.018em] text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">{step.body}</p>
              </div>

              <div className="overflow-hidden rounded-[11px] border border-white/12 bg-brand-night p-1.5 shadow-[0_22px_48px_-34px_rgba(4,16,42,0.75)]">
                <div className="aspect-[4/3] overflow-hidden rounded-[8px] bg-white">
                  <Visual />
                </div>
              </div>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
