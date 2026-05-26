import type { Metadata } from "next";
import { SolutionPage } from "@/components/SolutionPage";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Lemma for Consultants — Collect stakeholder context",
  description:
    "Lemma runs adaptive voice conversations with stakeholders, experts, customers, and employees, then turns what they say into reports, workflow context, quotes, and client-ready evidence.",
  path: "/consultants",
});

export default function ConsultantsPage() {
  return (
    <SolutionPage
      hero={{
        title: "Collect stakeholder context before the room fills with opinions.",
        body: "Lemma runs adaptive voice conversations with stakeholders, experts, customers, and employees, then turns what they say into reports, workflow context, quotes, and client-ready evidence.",
        ctaLabel: "Start a conversation",
        ctaHref: "https://app.heylemma.com",
        cardImage: "/assets/card-client-discovery.png",
        cardImageAlt: "Create Client Discovery Engine product card",
      }}
      feature={{
        title: "Standardize discovery without flattening the nuance.",
        body: "Send Lemma to the people closest to the work and surface the bottlenecks, tradeoffs, workarounds, and context behind stronger recommendations.",
        image: "/assets/report-coverage.png",
        imageAlt:
          "Sample Lemma report: Coverage spans GTM, technical, and operational functions",
        items: [
          {
            title: "Interview more stakeholders, faster.",
            body: "Send one Lemma link and collect qualitative voice input in parallel. Broaden your sample without weeks of calendar work.",
          },
          {
            title: "Surface hidden friction.",
            body: "Lemma probes for broken handoffs, bottlenecks, alignment gaps, and local workarounds that surveys and notes often miss.",
          },
          {
            title: "Generate client-ready evidence.",
            body: "Turn conversations into themes, risk maps, stakeholder quotes, and workshop briefs that support stronger recommendations.",
          },
        ],
      }}
    />
  );
}
