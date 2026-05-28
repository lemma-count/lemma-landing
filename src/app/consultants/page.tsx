import type { Metadata } from "next";
import { SolutionPage } from "@/components/SolutionPage";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Lemma for Consultants - Turn stakeholder context into evidence",
  description:
    "Lemma helps consultants turn stakeholder conversations into client-ready evidence.",
  path: "/consultants",
});

export default function ConsultantsPage() {
  return (
    <SolutionPage
      hero={{
        title: "Turn stakeholder conversations into structured evidence.",
        body: "Lemma helps consultants hear the context behind stakeholder opinions before the room fills with debate.",
        ctaLabel: "Start a conversation",
        ctaHref: "https://app.heylemma.com",
        cardImage: "/assets/solution-consultants-context.png",
        cardImageAlt:
          "Consultant facilitating a stakeholder workshop with client decision makers.",
      }}
      feature={{
        title: "From stakeholder input to client-ready context.",
        body: "Use Lemma to collect richer stakeholder input, then turn it into evidence for stronger recommendations.",
        visual: "consultants",
        items: [
          {
            title: "Capture stakeholder briefs.",
            body: "Collect each person's role, constraints, and view of what needs to change.",
          },
          {
            title: "Map hidden friction.",
            body: "Surface the broken handoffs and local workarounds that meetings often miss.",
          },
          {
            title: "Support the recommendation.",
            body: "Turn conversations into evidence clients can trust.",
          },
        ],
      }}
    />
  );
}
