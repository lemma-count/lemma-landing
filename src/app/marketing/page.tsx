import type { Metadata } from "next";
import { SolutionPage } from "@/components/SolutionPage";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Lemma for Marketing - Capture buyer language and proof",
  description:
    "Lemma helps marketing teams hear buyer language through adaptive voice conversations.",
  path: "/marketing",
});

export default function MarketingPage() {
  return (
    <SolutionPage
      hero={{
        title: "Capture the language behind better messaging.",
        body: "AI can generate endless campaigns. Lemma helps marketers hear what buyers actually say before writing the next one.",
        ctaLabel: "Start a conversation",
        ctaHref: "https://app.heylemma.com",
        cardImage: "/assets/solution-marketing-context.png",
        cardImageAlt:
          "Product marketing team sorting customer notes and campaign concepts in a creative studio.",
      }}
      feature={{
        title: "Turn customer conversations into message evidence.",
        body: "Use Lemma to learn how customers describe the problem and what would stop them from acting.",
        visual: "marketing",
        items: [
          {
            title: "Find buyer language.",
            body: "Capture the words customers use when the problem becomes urgent.",
          },
          {
            title: "Map objections.",
            body: "Surface what buyers doubt and what proof would make the offer credible.",
          },
          {
            title: "Build the proof bank.",
            body: "Turn conversations into quotes, proof points, and language your team can reuse.",
          },
        ],
      }}
    />
  );
}
