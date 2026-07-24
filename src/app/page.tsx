import { Hero } from "@/components/Hero";
import { ProofOverview } from "@/components/ProofOverview";
import { MissionIntro } from "@/components/MissionIntro";
import { LongHorizonSection } from "@/components/LongHorizonSection";
import { CockpitSection } from "@/components/CockpitSection";
import { LandingFaq, landingFaqItems } from "@/components/LandingFaq";
import { faqJsonLd, stringifyJsonLd } from "@/lib/seo";

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
      <main className="landing-root">
        <Hero />
        <MissionIntro />
        <ProofOverview />
        <LongHorizonSection />
        <CockpitSection />
        <LandingFaq />
      </main>
    </>
  );
}
