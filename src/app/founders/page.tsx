import type { Metadata } from "next";
import { SolutionPage } from "@/components/SolutionPage";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Lemma for Founders - Find market pull before it is too late",
  description:
    "Lemma helps founders avoid defocus by hearing who cares now, why it matters, what blocks adoption, and where the company should bet next.",
  path: "/founders",
});

export default function FoundersPage() {
  return (
    <SolutionPage
      hero={{
        title: "Find where the market is pulling before it's too late.",
        body: "AI makes it cheap to build in every direction. Lemma helps founders avoid defocus by hearing who cares now, why it matters, what blocks adoption, and where the company should bet next.",
        ctaLabel: "Start a conversation",
        ctaHref: "https://app.heylemma.com",
        cardImage: "/assets/solution-founders-context.png",
        cardImageAlt:
          "Founder and cofounder reviewing customer interview notes in a startup workspace.",
      }}
      feature={{
        title: "Turn early conversations into market-pull context.",
        body: "Run adaptive voice conversations with prospects, customers, and stakeholders. Lemma turns what they say into evidence about which segment wants this, why now, what stands in the way, and which bet deserves focus.",
        visual: "founders",
        items: [
          {
            title: "Find who cares now.",
            body: "Identify the segment with real urgency, current workarounds, buying triggers, and language that sounds like pull.",
          },
          {
            title: "Avoid PMF illusions.",
            body: "Polite interest can burn months. Lemma probes for pain, urgency, alternatives, objections, and whether people would actually change behavior.",
          },
          {
            title: "Choose your next bet.",
            body: "Use the context to focus the company: what to build, who to sell to, what to say, and what not to pursue.",
          },
        ],
      }}
    />
  );
}
