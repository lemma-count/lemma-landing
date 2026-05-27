import type { Metadata } from "next";
import { FAQ } from "@/components/FAQ";
import { PricingFlowVisual } from "@/components/ContextVisuals";
import { PricingSection } from "@/components/PricingSection";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Pricing — Lemma",
  description:
    "Pricing that scales with the adaptive conversations you collect. Each completed conversation uses 1 credit. Invite as many teammates as you want.",
  path: "/pricing",
});

const faqItems = [
  {
    q: "What counts as a conversation credit?",
    a: "One credit is consumed for each completed adaptive voice conversation, regardless of length. Incomplete or dropped sessions are not counted.",
  },
  {
    q: "Are credits monthly?",
    a: "On Professional, credits refresh every month. On Starter, credits are one-time and you can purchase additional credits at any time.",
  },
  {
    q: "Do unused credits roll over?",
    a: "Monthly credits on the Professional plan do not roll over. Extra credits you purchase à la carte remain valid for 12 months.",
  },
  {
    q: "Can I buy more credits if I run out?",
    a: "Yes. You can buy additional conversation credits at any time from your workspace settings, on every plan.",
  },
  {
    q: "Do I pay per teammate?",
    a: "No. You do not pay per seat. Invite the teammates you need and pay for the conversations you collect.",
  },
  {
    q: "Can I run multiple context workflows at the same time?",
    a: "Yes. You can run as many concurrent studies as you need; credits are pooled across the workspace.",
  },
  {
    q: "What if I need integrations or custom workflows?",
    a: "Talk to us. We will map the first workflow with you and confirm what is available for your plan.",
  },
];

export default function PricingPage() {
  return (
    <main>
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-6 pt-16 pb-8 text-center md:px-10 md:pt-28 md:pb-10">
          <h1 className="mx-auto max-w-4xl text-balance text-5xl font-semibold leading-[0.98] tracking-tight text-ink md:text-7xl">
            Pay for the conversations you collect.
          </h1>
          <div className="mx-auto mt-7 max-w-xl space-y-1 text-base leading-7 text-muted md:text-lg md:leading-8">
            <p>Each completed adaptive voice conversation uses 1 credit.</p>
            <p>Invite as many teammates as you want.</p>
            <p>Scale from one real workflow to always-on context capture.</p>
          </div>
          <PricingFlowVisual />
        </div>
        <PricingSection />
      </section>

      <FAQ items={faqItems} />
    </main>
  );
}
