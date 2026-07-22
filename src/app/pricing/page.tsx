import type { Metadata } from "next";
import { TrackedLink } from "@/components/TrackedLink";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Pricing — Lemma",
  description: "Start using Lemma for free. Simple usage-based pricing is coming soon.",
  path: "/pricing",
  noIndex: true,
});

export default function PricingPage() {
  return (
    <main className="bg-white text-ink">
      <section className="mx-auto flex min-h-[72svh] max-w-[1100px] flex-col items-center justify-center px-5 py-24 text-center sm:px-8 md:py-32 lg:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-subtle">
          Pricing
        </p>
        <h1 className="mt-5 max-w-[850px] text-balance text-[3.25rem] font-medium leading-[0.96] tracking-[-0.026em] sm:text-6xl lg:text-7xl">
          Start free. Choose a plan when you&apos;re ready.
        </h1>
        <p className="mt-7 max-w-[620px] text-pretty text-base leading-7 text-muted sm:text-lg sm:leading-8">
          We&apos;re finalizing simple usage-based plans. You can start without a credit card today.
        </p>
        <TrackedLink
          href="https://app.heylemma.com/missions/new"
          event="cta_click"
          eventProps={{
            label: "Start for free",
            page: "pricing",
            location: "hero",
          }}
          className="landing-button mt-8 inline-flex min-h-12 items-center justify-center rounded-[10px] bg-accent px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_34px_-18px_rgba(43,87,213,0.95)] hover:bg-brand-cobalt-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cobalt"
        >
          Start for free
        </TrackedLink>
      </section>
    </main>
  );
}
