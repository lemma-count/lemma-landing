import type { Metadata } from "next";
import { FAQ } from "@/components/FAQ";
import { PricingSection } from "@/components/PricingSection";

export const metadata: Metadata = {
  title: "Pricing — Lemma",
  description:
    "Pricing that scales with the interviews you run. Each completed voice interview uses 1 credit. Invite as many teammates as you want. Pay for the conversations you collect.",
};

const faqItems = [
  {
    q: "What counts as an interview credit?",
    a: "One credit is consumed for each completed voice interview, regardless of length. Incomplete or dropped sessions are not counted.",
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
    a: "Yes. You can buy additional interview credits at any time from your workspace settings, on every plan.",
  },
  {
    q: "Do I pay per teammate?",
    a: "No. All plans include unlimited teammates. You only pay for the interviews you collect.",
  },
  {
    q: "Can I run multiple interview projects at the same time?",
    a: "Yes. You can run as many concurrent studies as you need; credits are pooled across the workspace.",
  },
  {
    q: "What integrations are included?",
    a: "Professional and Enterprise include integrations with docs, slides, CRM, support tools, and AI workspaces. Enterprise adds API access and webhooks.",
  },
];

export default function PricingPage() {
  return (
    <main className="pt-8 md:pt-12">
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-6 pt-12 pb-4 text-center md:px-10 md:pt-20 md:pb-6">
          <h1 className="mx-auto max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-ink md:text-6xl">
            Pricing that scales with the interviews you run.
          </h1>
          <div className="mx-auto mt-6 max-w-xl space-y-1 text-base text-muted md:text-lg">
            <p>Each completed voice interview uses 1 credit.</p>
            <p>Invite as many teammates as you want.</p>
            <p>Pay for the conversations you collect.</p>
          </div>
        </div>
        <PricingSection />
      </section>

      <FAQ items={faqItems} />
    </main>
  );
}
