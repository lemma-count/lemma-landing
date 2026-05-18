import type { Metadata } from "next";
import { SolutionPage } from "@/components/SolutionPage";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Lemma for Sales — Turn product intent into qualified pipeline",
  description:
    "Lemma engages prospects and PQLs your team can't reach manually, and turns every conversation into context and actions for faster product-led sales.",
  path: "/sales",
});

export default function SalesPage() {
  return (
    <SolutionPage
      hero={{
        title: "Turn product intent into qualified pipeline.",
        body: "Lemma engages prospects and PQLs your team can't reach manually, then turns every conversation into context and actions for faster product-led sales.",
        ctaLabel: "Get Started Free",
        ctaHref: "https://app.heylemma.com",
        cardImage: "/assets/card-plg-discovery.png",
        cardImageAlt: "Create PLG Discovery Engine product card",
      }}
      feature={{
        title: "Uncover the intent behind the product signals.",
        body: "Usage data shows activity, not intent. Lemma automates discovery across unworked accounts, turning product signals into qualified pipeline and clear next steps.",
        image: "/assets/report-coverage.png",
        imageAlt: "Sample Automated Product-Led Discovery Report",
        items: [
          {
            title: "Trigger discovery at high-intent moments.",
            body: "Automatically engage users the moment they hit a usage limit, invite their team, view pricing, or stall during onboarding.",
          },
          {
            title: "Automate lead qualification.",
            body: "Lemma's AI asks the exact questions your best AEs would. Instantly extract their core use case, budget, authority, and urgency.",
          },
          {
            title: "Route actionable data straight to your CRM.",
            body: "Turn raw conversations into structured insights pushed automatically to your CRM.",
          },
        ],
      }}
    />
  );
}
