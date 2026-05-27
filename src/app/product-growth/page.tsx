import type { Metadata } from "next";
import { SolutionPage } from "@/components/SolutionPage";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Lemma for Product - Know what to build next",
  description:
    "Lemma helps product teams understand which user need, friction, or segment is worth building, fixing, killing, or prioritizing next.",
  path: "/product-growth",
});

export default function ProductGrowthPage() {
  return (
    <SolutionPage
      hero={{
        title: "Know what to build, fix, kill, or prioritize next.",
        body: "AI helps product teams ship faster. Lemma helps them understand which user need, friction, or segment is worth acting on.",
        ctaLabel: "Start a conversation",
        ctaHref: "https://app.heylemma.com",
        cardImage: "/assets/solution-product-context.png",
        cardImageAlt:
          "Product team observing a user research session and reviewing notes together.",
      }}
      feature={{
        title: "Turn user signals into product context.",
        body: "Use Lemma when analytics show something happened, but the team still needs to know why, what users expected, and what evidence should shape the next build.",
        visual: "product",
        items: [
          {
            title: "Understand friction.",
            body: "Ask users what they were trying to do, where the workflow broke, and what they expected instead.",
          },
          {
            title: "Separate demand from noise.",
            body: "Hear which segments, jobs, urgencies, alternatives, and workarounds point to something worth building.",
          },
          {
            title: "Bring evidence to roadmap calls.",
            body: "Turn conversations into user context, quotes, product risks, and priority signals your team can review before the roadmap meeting.",
          },
        ],
      }}
    />
  );
}
