import Image, { getImageProps } from "next/image";
import {
  ArrowDownRightIcon,
  CalendarBlankIcon,
  CheckCircleIcon,
  EnvelopeSimpleIcon,
  LinkIcon,
  MagnifyingGlassIcon,
  PaperPlaneTiltIcon,
} from "@phosphor-icons/react/dist/ssr";
import { TrackedLink } from "./TrackedLink";

const activitySteps = [
  { label: "Researching", Icon: MagnifyingGlassIcon },
  { label: "First touch sent", Icon: PaperPlaneTiltIcon },
  { label: "Follow-up scheduled", Icon: CalendarBlankIcon },
  { label: "Reply detected", Icon: CheckCircleIcon },
] as const;

export function Hero() {
  const commonHeroImageProps = {
    alt: "",
    sizes: "100vw",
    fetchPriority: "high" as const,
  };
  const {
    props: { srcSet: desktopHeroSrcSet },
  } = getImageProps({
    ...commonHeroImageProps,
    src: "/brand/landscapes/screenprint/01-beacon-coast-hero-desktop-v4.webp",
    width: 1536,
    height: 1024,
  });
  const {
    props: { srcSet: mobileHeroSrcSet, ...mobileHeroProps },
  } = getImageProps({
    ...commonHeroImageProps,
    src: "/brand/landscapes/screenprint/01-beacon-coast-hero-mobile-v2.webp",
    width: 1122,
    height: 1402,
  });

  return (
    <section
      id="top"
      className="relative isolate min-h-[100svh] overflow-hidden border-b border-white/10 bg-brand-night text-white"
    >
      <picture className="absolute inset-0 -z-20">
        <source media="(min-width: 640px)" srcSet={desktopHeroSrcSet} />
        <source media="(max-width: 639px)" srcSet={mobileHeroSrcSet} />
        <img
          {...mobileHeroProps}
          alt=""
          className="landing-hero-media h-full w-full object-cover"
        />
      </picture>
      <div className="absolute inset-0 -z-10 bg-brand-night/54" aria-hidden />

      <div className="relative mx-auto grid min-h-[100svh] w-full max-w-[1400px] items-center gap-9 px-5 pb-10 pt-[96px] sm:gap-11 sm:px-8 sm:pb-14 sm:pt-[108px] lg:px-10 xl:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] xl:gap-8 xl:pb-12 xl:pt-[104px]">
        <div className="relative z-10 max-w-[720px] xl:max-w-[510px]">
          <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-white/78 sm:mb-5">
            <span className="h-px w-8 bg-brand-sky" aria-hidden />
            Autonomous outbound for lean teams
          </p>
          <h1 className="text-balance font-display text-[2.75rem] font-normal leading-[0.96] tracking-[-0.026em] text-white max-[360px]:text-[2.42rem] max-[360px]:leading-[0.95] sm:text-[3.7rem] xl:text-[3.8rem] 2xl:text-[4.15rem]">
            Outbound that keeps working until your leads are ready to book.
          </h1>
          <p className="mt-5 max-w-[640px] text-pretty text-sm leading-6 text-white/78 max-[360px]:text-[13px] max-[360px]:leading-[1.42rem] sm:text-base sm:leading-7 xl:max-w-[500px]">
            Set up your company, offers, target audiences, and operating rules once. Lemma runs the outbound loop—from research and first touch to follow-up and lead warming—across every connected channel.
          </p>

          <div className="mt-6 flex w-full flex-col gap-2.5 max-[360px]:mt-5 sm:mt-7 sm:w-auto sm:flex-row sm:items-center sm:gap-3">
            <TrackedLink
              href="https://app.heylemma.com/missions/new"
              event="cta_click"
              eventProps={{
                label: "Launch your outbound",
                page: "home",
                location: "hero",
              }}
              className="landing-button inline-flex min-h-12 items-center justify-center rounded-[10px] bg-accent px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_34px_-18px_rgba(43,87,213,0.95)] hover:bg-brand-cobalt-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Launch your outbound
            </TrackedLink>
            <TrackedLink
              href="#why-now"
              event="cta_click"
              eventProps={{
                label: "Why outbound stalls",
                page: "home",
                location: "hero",
                cta_id: "home_hero_why_now",
              }}
              className="landing-button inline-flex min-h-11 items-center justify-center gap-2 rounded-[10px] border border-white/42 bg-brand-night/32 px-6 py-2.5 text-sm font-semibold text-white hover:border-white/64 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:min-h-12 sm:py-3"
            >
              Why outbound stalls
              <ArrowDownRightIcon size={16} weight="bold" aria-hidden />
            </TrackedLink>
          </div>
        </div>

        <div className="relative z-10 min-w-0 xl:-mr-3 2xl:-ml-[20px] 2xl:-mr-[140px]">
          <div className="landing-activity-rail mb-3 hidden items-center gap-2 text-[10px] font-medium text-white/78 sm:flex sm:text-[11px]">
            <ol aria-label="Outbound activity from research to reply" className="flex min-w-0 flex-1 items-center gap-2">
              {activitySteps.map(({ label, Icon }, index) => (
                <li key={label} className={`flex min-w-0 items-center gap-2 ${index < activitySteps.length - 1 ? "flex-1" : ""}`}>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/28 bg-brand-night/58 text-white/88 backdrop-blur-md">
                    <Icon size={14} weight="regular" aria-hidden />
                  </span>
                  <span className="whitespace-nowrap">{label}</span>
                  {index < activitySteps.length - 1 && (
                    <span className="h-px min-w-3 flex-1 bg-white/24" aria-hidden />
                  )}
                </li>
              ))}
            </ol>
            <div className="ml-auto hidden shrink-0 items-center gap-1.5 rounded-full border border-white/24 bg-brand-night/58 px-2.5 py-1.5 text-[10px] text-white/74 backdrop-blur-md 2xl:flex">
              <LinkIcon size={12} aria-hidden />
              <EnvelopeSimpleIcon size={12} aria-hidden />
              LinkedIn + Email
            </div>
          </div>

          <div className="mb-3 flex items-center justify-between rounded-lg border border-white/22 bg-brand-night/62 px-3 py-2 text-[11px] font-medium text-white/76 backdrop-blur-md sm:hidden">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#7CCB8A] motion-safe:animate-pulse" aria-hidden />
              Outbound loop active
            </span>
            <span className="flex items-center gap-1.5 text-white/64">
              <LinkIcon size={12} aria-hidden />
              <EnvelopeSimpleIcon size={12} aria-hidden />
              LinkedIn + email
            </span>
          </div>

          <div className="landing-product-shell rounded-[18px] p-2 sm:rounded-[22px] sm:p-3">
            <div className="overflow-hidden rounded-[11px] border border-white/18 bg-white sm:rounded-[14px]">
              <div className="flex h-11 items-center justify-between border-b border-[#E6E7EA] px-3 text-ink sm:h-12 sm:px-4">
                <div className="flex min-w-0 items-center gap-2.5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#EEF3FF] text-brand-cobalt">
                    <PaperPlaneTiltIcon size={13} weight="bold" aria-hidden />
                  </span>
                  <span className="truncate text-[11px] font-semibold sm:text-xs">Outbox preview</span>
                </div>
                <span className="flex shrink-0 items-center gap-1.5 text-[10px] font-medium text-[#347A4A] sm:text-[11px]">
                  <span className="h-2 w-2 rounded-full bg-[#58A96F]" aria-hidden />
                  Autopilot active
                </span>
              </div>
              <div className="relative aspect-video overflow-hidden bg-white">
                <Image
                  src="/landing/outbox-plan.png"
                  alt="Cropped view of Lemma Outbox in its native light interface, showing active outbound work."
                  width={1280}
                  height={720}
                  unoptimized
                  sizes="(min-width: 1536px) 65vw, (min-width: 1280px) 58vw, (min-width: 640px) 92vw, 185vw"
                  className="absolute bottom-0 left-[-44%] h-auto w-[185%] max-w-none sm:left-[-39%] sm:w-[165%]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
