import type { Metadata } from "next";
import { SolutionPage } from "@/components/SolutionPage";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Lemma for Product - Know what to build next",
  description:
    "Lemma helps product teams understand which user problem deserves action.",
  path: "/product-growth",
});

export default function ProductGrowthPage() {
  return (
    <SolutionPage
      hero={{
        title: "Know which user problem deserves action.",
        body: "AI helps product teams ship faster. Lemma helps them understand which user problem deserves action before the next build.",
        ctaLabel: "Start a conversation",
        ctaHref: "https://app.heylemma.com",
        cardImage: "/assets/solution-product-context.png",
        cardImageAlt:
          "Product team observing a user research session and reviewing notes together.",
      }}
      feature={{
        title: "Turn user signals into product context.",
        body: "Use Lemma when analytics show something happened, but the team still needs the context behind it.",
        visual: "product",
        items: [
          {
            title: "Understand friction.",
            body: "Ask users what they were trying to do, where the workflow broke, and what they expected instead.",
          },
          {
            title: "Separate demand from noise.",
            body: "Hear whether the request points to real demand or one loud edge case.",
          },
          {
            title: "Bring evidence to roadmap calls.",
            body: "Bring user context, quotes, and priority signals into the roadmap meeting.",
          },
        ],
      }}
    />
  );
}
