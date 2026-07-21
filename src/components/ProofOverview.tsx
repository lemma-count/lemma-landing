import Image from "next/image";

const proofCards = [
  {
    id: "leads",
    index: "01",
    title: "Research the right Leads",
    body: "Understand each Lead, their company, and why the offer may matter now.",
    image: "/landing/mission-cockpit.png",
    alt: "Lemma Cockpit showing the people attached to one outreach Mission.",
  },
  {
    id: "outbox-plan",
    index: "02",
    title: "Keep the conversation moving",
    body: "Coordinate outreach and follow-up across every connected channel.",
    image: "/landing/outbox-plan.png",
    alt: "Lemma Outbox showing planned outreach work and execution state.",
  },
  {
    id: "needs-you",
    index: "03",
    title: "Step in only when needed",
    body: "See replies, exceptions, or decisions only when they need you.",
    image: "/landing/outbox-needs-you.png",
    alt: "Lemma Outbox showing work that needs an operator decision.",
  },
] as const;

export function ProofOverview() {
  return (
    <section
      id="cockpit"
      className="relative isolate scroll-mt-20 overflow-hidden border-t border-border bg-paper text-ink"
    >
      <Image
        src="/brand/patterns/beacon-horizon-peripheral-v1.webp"
        alt=""
        fill
        sizes="100vw"
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 hidden h-full w-full select-none object-fill lg:block"
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 py-20 sm:px-8 md:py-24 lg:px-10 lg:py-28">
        <div className="landing-reveal grid items-end gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(340px,0.48fr)] lg:gap-24">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.14em] text-subtle">
              End-to-end outbound
            </p>
            <h2 className="max-w-[760px] text-balance text-[2.85rem] font-medium leading-[0.98] tracking-[-0.024em] sm:text-[3.55rem] lg:text-[4rem]">
              One system keeps every Lead moving.
            </h2>
          </div>
          <p className="max-w-[520px] text-pretty text-base leading-7 text-muted sm:text-lg sm:leading-8">
            Lemma handles research, first touch, follow-up, replies, and the next step toward a meeting.
          </p>
        </div>

        <div className="relative mt-12 grid gap-6 lg:mt-14 lg:grid-cols-3 lg:gap-7">
          <div aria-hidden className="absolute left-[8%] right-[8%] top-[2.95rem] hidden h-px bg-gradient-to-r from-brand-cobalt/18 via-brand-cobalt/62 to-brand-cobalt/18 lg:block" />
          {proofCards.map((card) => (
            <article
              id={card.id}
              key={card.title}
              className="landing-reveal group relative z-10 min-w-0 scroll-mt-20 rounded-[14px] border border-border bg-paper p-2.5 transition duration-300 hover:-translate-y-1 hover:border-brand-cobalt/28 hover:shadow-[0_24px_60px_-42px_rgba(4,16,42,0.42)]"
            >
              <div className="flex min-h-[74px] items-start gap-3 px-2 pb-4 pt-2">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-brand-cobalt text-xs font-semibold text-white ring-[5px] ring-paper">
                  {card.index}
                </span>
                <div>
                  <h3 className="text-base font-semibold tracking-[-0.015em] text-ink">
                    {card.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-5 text-muted">{card.body}</p>
                </div>
              </div>

              <div className="overflow-hidden rounded-[11px] border border-white/12 bg-brand-night p-1.5 shadow-[0_22px_48px_-34px_rgba(4,16,42,0.75)]">
                <div className="overflow-hidden rounded-[8px] bg-white">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    width={1280}
                    height={720}
                    sizes="(min-width: 1024px) 31vw, 100vw"
                    className="h-auto w-full"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
