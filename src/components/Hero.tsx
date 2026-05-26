import { TrackedLink } from "./TrackedLink";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-14 md:pt-24 md:pb-24">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="mx-auto max-w-[860px] text-center">
          <h1 className="text-balance text-5xl font-semibold leading-[0.98] tracking-tight text-ink md:text-7xl">
            AI made building easy. Now context is the moat.
          </h1>
          <p className="mx-auto mt-7 max-w-[650px] text-pretty text-base leading-7 text-muted md:text-lg md:leading-8">
            Lemma helps teams collect the human context they need to decide
            what to build, who wants it, why they care, and what to do next.
            Send adaptive voice conversations and get transcripts, themes,
            quotes, reports, and next actions.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <TrackedLink
              href="https://app.heylemma.com"
              event="cta_click"
              eventProps={{
                label: "Start a conversation",
                page: "home",
                location: "hero",
              }}
              className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white shadow-[0_12px_22px_-14px_rgba(61,80,255,0.9)] transition-colors hover:bg-[#2f3fd6]"
            >
              Start a conversation
            </TrackedLink>
            <TrackedLink
              href="/product"
              event="cta_click"
              eventProps={{
                label: "See how it works",
                page: "home",
                location: "hero",
                cta_id: "home_hero_product",
              }}
              className="inline-flex items-center justify-center rounded-md border border-ink bg-white px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-neutral-100"
            >
              See how it works
            </TrackedLink>
          </div>
        </div>

        <div className="mt-14 md:mt-20">
          <div className="relative mx-auto max-w-[1120px] rounded-[18px] bg-[radial-gradient(90%_80%_at_15%_15%,rgba(61,80,255,0.24),transparent_38%),radial-gradient(80%_75%_at_86%_18%,rgba(255,169,32,0.42),transparent_40%),linear-gradient(180deg,#f7f7f5,#f0f0ed)] p-2 shadow-[0_32px_90px_-44px_rgba(0,0,0,0.55)] ring-1 ring-black/5 md:p-3">
            <div className="overflow-hidden rounded-[12px] bg-neutral-100 ring-1 ring-black/10">
            <video
              src="/assets/demo.mp4"
              controls
              playsInline
              preload="metadata"
              className="block aspect-[16/9] w-full bg-neutral-100"
            />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
