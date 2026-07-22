import Image from "next/image";

export function MissionIntro() {
  return (
    <section
      id="why-now"
      className="scroll-mt-20 border-t border-border bg-white text-ink"
    >
      <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-20 sm:px-8 md:py-24 lg:grid-cols-[minmax(320px,0.92fr)_minmax(0,1.08fr)] lg:items-center lg:gap-20 lg:px-10 lg:py-28">
        <div className="landing-reveal max-w-[650px]">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.14em] text-subtle">
            Why now
          </p>
          <h2 className="text-balance text-[2.85rem] font-medium leading-[0.98] tracking-[-0.024em] sm:text-[3.55rem] lg:text-[4rem]">
            Until now, outbound made you choose between quality and scale.
          </h2>
          <p className="mt-7 max-w-[600px] text-pretty text-base leading-7 text-muted sm:text-lg sm:leading-8">
            Manual prospecting gives every person real attention, but it takes hours. Automated sequences reach more people, but treat them like rows in a list. Lemma gives every prospect individual attention—without requiring yours.
          </p>
        </div>

        <figure className="landing-reveal relative aspect-[16/8] overflow-hidden rounded-[18px] border border-border bg-landing-surface shadow-[0_24px_60px_-44px_rgba(4,16,42,0.34)] sm:aspect-[3/2]">
          <Image
            src="/brand/landscapes/screenprint/06-dawn-meadow-screenprint.webp"
            alt="Blue-hour meadow with a pale path leading through wildflowers to a warm clearing."
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-bottom"
          />
        </figure>
      </div>
    </section>
  );
}
