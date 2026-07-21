import Image from "next/image";
import {
  ArrowUpRightIcon,
  ArrowsClockwiseIcon,
  BinocularsIcon,
  CalendarCheckIcon,
  PaperPlaneTiltIcon,
  TargetIcon,
  UsersThreeIcon,
} from "@phosphor-icons/react/dist/ssr";
import { TrackedLink } from "./TrackedLink";

const stages = [
  { index: "01", label: "Choose the objective", Icon: TargetIcon },
  { index: "02", label: "Select the audience", Icon: UsersThreeIcon },
  { index: "03", label: "Research Leads", Icon: BinocularsIcon },
  { index: "04", label: "Start the conversation", Icon: PaperPlaneTiltIcon },
  { index: "05", label: "Follow up automatically", Icon: ArrowsClockwiseIcon },
  { index: "06", label: "Move toward a meeting", Icon: CalendarCheckIcon },
] as const;

const proofRows = [
  {
    id: "autopilot",
    eyebrow: "Autopilot",
    heading: "Lemma keeps working without waiting on you.",
    body: "It operates inside your rules and surfaces replies, exceptions, or decisions only when they need you.",
    image: "/landing/mission-outcome.png",
    alt: "Lemma Mission outcome showing completed work and the next action.",
    reverse: false,
    cta: true,
  },
  {
    id: "outbox",
    eyebrow: "Optional oversight",
    heading: "Review when you want more control.",
    body: "Switch a Mission or action into review mode without making approval the default.",
    image: "/landing/outbox-needs-you.png",
    alt: "Lemma Outbox showing decisions and execution issues that need operator attention.",
    reverse: true,
    cta: false,
  },
] as const;

export function CockpitSection() {
  return (
    <section
      id="product-proof"
      className="overflow-hidden border-t border-border bg-landing-surface text-ink"
    >
      <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 md:py-24 lg:px-10 lg:py-28">
        <div className="landing-reveal grid gap-10 lg:grid-cols-[minmax(300px,0.72fr)_minmax(0,1.28fr)] lg:items-start lg:gap-20">
          <div className="max-w-[520px]">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.14em] text-subtle">
              One continuous outbound loop
            </p>
            <h2 className="text-balance text-[2.85rem] font-medium leading-[0.98] tracking-[-0.024em] sm:text-[3.55rem] lg:text-[4rem]">
              Set the strategy once. Lemma keeps outbound running.
            </h2>
            <p className="mt-7 max-w-[470px] text-pretty text-base leading-7 text-muted sm:text-lg sm:leading-8">
              Your company, offers, audiences, channels, and guardrails become durable context. Each Mission uses that context without asking you to explain the business again.
            </p>
          </div>

          <ol className="border-y border-ink/16">
            {stages.map(({ index, label, Icon }) => (
              <li
                key={label}
                className="grid min-h-[68px] grid-cols-[3rem_2.5rem_minmax(0,1fr)] items-center border-b border-ink/12 py-4 last:border-b-0 sm:min-h-[74px] sm:grid-cols-[4rem_3rem_minmax(0,1fr)]"
              >
                <span className="text-xs font-semibold tracking-[0.1em] text-brand-cobalt">
                  {index}
                </span>
                <Icon size={22} weight="regular" className="text-ink/72" aria-hidden />
                <span className="text-base font-semibold tracking-[-0.012em] text-ink sm:text-lg">
                  {label}
                </span>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-20 border-t border-border sm:mt-24 lg:mt-24">
          {proofRows.map((row, index) => (
            <article
              id={row.id}
              key={row.eyebrow}
              className={`landing-reveal grid scroll-mt-20 items-center gap-10 py-16 sm:py-20 lg:gap-20 lg:py-20 ${row.reverse ? "lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)]" : "lg:grid-cols-[minmax(320px,0.8fr)_minmax(0,1.2fr)]"} ${index ? "border-t border-border" : ""}`}
            >
              <div className={`max-w-[500px] ${row.reverse ? "lg:order-2 lg:justify-self-end" : ""}`}>
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.14em] text-brand-cobalt">
                  {row.eyebrow}
                </p>
                <h2 className="text-balance text-[2.85rem] font-medium leading-[0.98] tracking-[-0.024em] sm:text-[3.55rem] lg:text-[4rem]">
                  {row.heading}
                </h2>
                <p className="mt-6 max-w-[420px] text-pretty text-base leading-7 text-muted sm:text-lg sm:leading-8">
                  {row.body}
                </p>

                {row.cta && (
                  <TrackedLink
                    href="https://app.heylemma.com/missions/new"
                    event="cta_click"
                    eventProps={{ label: "Launch your outbound", page: "home", location: "outbox" }}
                    className="landing-button mt-8 inline-flex items-center gap-2 border-b border-ink/28 pb-1 text-sm font-semibold text-ink hover:border-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-cobalt"
                  >
                    Launch your outbound
                    <ArrowUpRightIcon size={15} weight="bold" aria-hidden />
                  </TrackedLink>
                )}
              </div>

              <div className={`min-w-0 ${row.reverse ? "lg:order-1" : ""}`}>
                <div className="overflow-hidden rounded-[14px] border border-border bg-white p-2.5 shadow-[0_26px_64px_-48px_rgba(4,16,42,0.4)] sm:p-3">
                  <div className="overflow-hidden rounded-[9px] border border-black/8 bg-white">
                    <Image
                      src={row.image}
                      alt={row.alt}
                      width={1280}
                      height={720}
                      sizes="(min-width: 1024px) 61vw, 100vw"
                      className="h-auto w-full"
                    />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
