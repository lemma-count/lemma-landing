import type { Metadata } from "next";
import { SolutionPage } from "@/components/SolutionPage";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Lemma for Founders - Find market pull before it is too late",
  description:
    "Lemma helps founders hear where the market is pulling before they bet more runway.",
  path: "/founders",
});

export default function FoundersPage() {
  return (
    <SolutionPage
      hero={{
        title: "Find where the market is pulling before it's too late.",
        body: "AI makes it cheap to build in every direction. Lemma helps founders hear where real pull is coming from before they bet more runway.",
        ctaLabel: "Start a conversation",
        ctaHref: "https://app.heylemma.com",
        cardImage: "/assets/solution-founders-context.png",
        cardImageAlt:
          "Founder and cofounder reviewing customer interview notes in a startup workspace.",
      }}
      feature={{
        title: "Turn early conversations into market-pull context.",
        body: "Run adaptive voice conversations with prospects and customers. Lemma turns their answers into evidence about the segment, the urgency, and the next bet.",
        visual: "founders",
        items: [
          {
            title: "Find who cares now.",
            body: "Identify the segment showing real urgency, not polite interest.",
          },
          {
            title: "Avoid PMF illusions.",
            body: "Lemma asks follow-ups that separate curiosity from a real willingness to change.",
          },
          {
            title: "Choose your next bet.",
            body: "Use the context to decide what to build, who to sell to, and what to stop chasing.",
          },
        ],
      }}
    />
  );
}
