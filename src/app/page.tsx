import { Hero } from "@/components/Hero";
import { ProofOverview } from "@/components/ProofOverview";
import { MissionIntro } from "@/components/MissionIntro";
import { CockpitSection } from "@/components/CockpitSection";

export default function Home() {
  return (
    <main className="landing-root">
      <Hero />
      <MissionIntro />
      <ProofOverview />
      <CockpitSection />
    </main>
  );
}
