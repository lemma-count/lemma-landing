import { Hero } from "@/components/Hero";
import { ProblemStatement } from "@/components/ProblemStatement";
import { Solution } from "@/components/Solution";
import { Stats } from "@/components/Stats";
import { UseCases } from "@/components/UseCases";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProblemStatement />
      <Solution />
      <UseCases />
      <Stats />
    </main>
  );
}
