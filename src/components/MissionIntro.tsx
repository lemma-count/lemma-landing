import Image from "next/image";

export function MissionIntro() {
  return (
    <section
      id="why-now"
      className="scroll-mt-20 border-t border-border bg-white text-ink"
    >
      <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-20 sm:px-8 md:py-24 lg:grid-cols-[minmax(320px,0.72fr)_minmax(0,1.28fr)] lg:items-center lg:gap-20 lg:px-10 lg:py-28">
        <div className="landing-reveal max-w-[540px]">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.14em] text-subtle">
            Why outbound stalls
          </p>
          <h2 className="text-balance text-[2.85rem] font-medium leading-[0.98] tracking-[-0.024em] sm:text-[3.55rem] lg:text-[4rem]">
            Most outbound dies between the first message and the booked meeting.
          </h2>
          <p className="mt-7 max-w-[500px] text-pretty text-base leading-7 text-muted sm:text-lg sm:leading-8">
            Sending the first message is not the hard part. Consistent research, follow-up, reply handling, and timing across channels are where teams lose momentum. When nobody owns that loop every day, warm leads cool down and your pipeline becomes unpredictable.
          </p>
        </div>

        <figure className="landing-reveal relative aspect-[16/7] overflow-hidden rounded-[18px] border border-border bg-landing-surface shadow-[0_24px_60px_-44px_rgba(4,16,42,0.34)] sm:aspect-[3/1]">
          <Image
            src="/brand/landscapes/screenprint/06-dawn-meadow-screenprint.webp"
            alt="Blue-hour meadow with a pale path leading through wildflowers to a warm clearing."
            fill
            sizes="(min-width: 1024px) 62vw, 100vw"
            className="object-cover object-bottom"
          />
        </figure>
      </div>
    </section>
  );
}
