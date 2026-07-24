import type { Metadata } from "next";
import { CockpitSection } from "@/components/CockpitSection";
import { Hero } from "@/components/Hero";
import { LandingFaq, landingFaqItems } from "@/components/LandingFaq";
import { LongHorizonSection } from "@/components/LongHorizonSection";
import { MissionIntro } from "@/components/MissionIntro";
import { PricingPreview } from "@/components/PricingPreview";
import { ProofOverview } from "@/components/ProofOverview";
import { RelevantContentSection } from "@/components/RelevantContentSection";
import styles from "@/components/LemmaMarketing.module.css";
import { createMetadata, faqJsonLd, stringifyJsonLd } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Get new clients without doing the prospecting — Lemma",
  description:
    "Lemma researches the right prospects, starts LinkedIn conversations, shares relevant 1:1 content, handles replies, and helps move interested people toward a meeting.",
  path: "/",
  image: {
    url: "/brand/lemma/v1.4.0/visuals/lemma-alignment-court.webp",
    width: 1500,
    height: 1452,
    alt: "Airy Klein Blue architectural planes converging toward one precise passage and a tiny orange horizon signal.",
  },
});

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: stringifyJsonLd(
            faqJsonLd(
              landingFaqItems.map((item) => ({
                question: item.q,
                answer: item.a,
              })),
            ),
          ),
        }}
      />
      <main className={styles.root}>
        <Hero />
        <MissionIntro />
        <ProofOverview />
        <RelevantContentSection />
        <LongHorizonSection />
        <CockpitSection />
        <PricingPreview />
        <LandingFaq />
      </main>
    </>
  );
}
