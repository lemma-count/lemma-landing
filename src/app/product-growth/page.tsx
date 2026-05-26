import type { Metadata } from "next";
import { SolutionPage } from "@/components/SolutionPage";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Lemma for Product & Growth - Understand what to build next",
  description:
    "Lemma helps product and growth teams collect user context around friction, activation, demand, messaging, and what to build next.",
  path: "/product-growth",
});

export default function ProductGrowthPage() {
  return (
    <SolutionPage
      hero={{
        title: "Find what to build, fix, or stop.",
        body: "AI makes it easy to ship more. Lemma helps product and growth teams collect the user context that explains what is worth shipping.",
        ctaLabel: "Start a conversation",
        ctaHref: "https://app.heylemma.com",
        cardImage: "/assets/card-plg-discovery.png",
        cardImageAlt: "Create PLG Discovery Engine product card",
      }}
      feature={{
        title: "Turn user signals into product context.",
        body: "Analytics can show where something happened. Lemma helps you understand why it happened, what the user expected, and what your team should do next.",
        image: "/assets/report-coverage.png",
        imageAlt: "Sample Lemma report showing product and growth evidence coverage",
        items: [
          {
            title: "Investigate friction",
            body: "Ask users what they were trying to do, where the workflow broke, and what they expected instead.",
          },
          {
            title: "Validate market pull",
            body: "Compare segments, jobs, urgency, alternatives, and current workarounds before committing another build cycle.",
          },
          {
            title: "Prioritize with evidence",
            body: "Turn conversations into themes, quotes, product risks, and next actions your team can review before the roadmap meeting.",
          },
        ],
      }}
    />
  );
}
