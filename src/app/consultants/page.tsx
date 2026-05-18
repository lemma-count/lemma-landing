import type { Metadata } from "next";
import { SolutionPage } from "@/components/SolutionPage";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Lemma for Consultants — Scale stakeholder discovery",
  description:
    "Lemma runs AI-led voice interviews with stakeholders, subject matter experts, and employees, then turns those conversations into synthesized reports, workflow maps, and client-ready evidence.",
  path: "/consultants",
});

export default function ConsultantsPage() {
  return (
    <SolutionPage
      hero={{
        title: "Scale stakeholder discovery. Accelerate your engagements.",
        body: "Lemma runs AI-led voice interviews with stakeholders, subject matter experts, and employees, then turns those conversations into synthesized reports, workflow maps, and client-ready evidence.",
        ctaLabel: "Get Started Free",
        ctaHref: "https://app.heylemma.com",
        cardImage: "/assets/card-client-discovery.png",
        cardImageAlt: "Create Client Discovery Engine product card",
      }}
      feature={{
        title: "Standardize discovery without losing depth.",
        body: "Deploy Lemma to the people closest to the work and surface the nuance, bottlenecks, and context behind stronger recommendations.",
        image: "/assets/report-coverage.png",
        imageAlt:
          "Sample Lemma report: Coverage spans GTM, technical, and operational functions",
        items: [
          {
            title: "Interview more stakeholders, faster.",
            body: "Send one Lemma link and collect qualitative voice input in parallel. Broaden your sample without weeks of interviews.",
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
