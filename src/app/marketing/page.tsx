import type { Metadata } from "next";
import { SolutionPage } from "@/components/SolutionPage";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Lemma for Marketing - Capture buyer language and proof",
  description:
    "Lemma helps marketing teams find buyer language, objections, proof, and category framing through adaptive voice conversations.",
  path: "/marketing",
});

export default function MarketingPage() {
  return (
    <SolutionPage
      hero={{
        title: "Capture the language behind better messaging.",
        body: "AI can generate endless campaigns. Lemma helps marketers find the buyer language, objections, proof, and category framing that make the work sound true.",
        ctaLabel: "Start a conversation",
        ctaHref: "https://app.heylemma.com",
        cardImage: "/assets/solution-marketing-context.png",
        cardImageAlt:
          "Product marketing team sorting customer notes and campaign concepts in a creative studio.",
      }}
      feature={{
        title: "Turn customer conversations into message evidence.",
        body: "Use Lemma to hear how customers describe the problem, what they compare against, why they believe, and what would stop them from acting.",
        visual: "marketing",
        items: [
          {
            title: "Find buyer language.",
            body: "Capture the words customers use for the problem, the value, the alternative, and the moment they started to care.",
          },
          {
            title: "Map objections.",
            body: "Surface what buyers doubt, what proof they need, and what would make the offer feel credible.",
          },
          {
            title: "Build the proof bank.",
            body: "Turn conversations into quotes, proof points, story angles, category language, and launch-message inputs.",
          },
        ],
      }}
    />
  );
}
