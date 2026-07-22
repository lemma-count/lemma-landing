import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRightIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import { TrackedLink } from "./TrackedLink";

const footerGroups = [
  {
    title: "Product",
    links: [
      { label: "How it works", href: "/#how-it-works" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Account",
    links: [
      { label: "Sign in", href: "https://app.heylemma.com/login" },
      { label: "Start for free", href: "https://app.heylemma.com/missions/new" },
    ],
  },
  {
    title: "Company",
    links: [{ label: "Contact", href: "mailto:hello@heylemma.com" }],
  },
] as const;

export function Footer() {
  return (
    <footer
      id="final-cta"
      className="relative isolate overflow-hidden bg-brand-night text-white"
    >
      <Image
        src="/brand/landscapes/screenprint/01-beacon-coast-screenprint.webp"
        alt=""
        fill
        sizes="100vw"
        className="landing-footer-media -z-20 object-cover"
      />
      <div className="landing-footer-scrim absolute inset-0 -z-10" aria-hidden />

      <div className="relative mx-auto flex min-h-[680px] max-w-[1400px] flex-col px-5 pb-7 pt-20 sm:px-8 sm:pb-8 md:pt-24 lg:min-h-[640px] lg:px-10 lg:pt-24">
        <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">
          <div className="max-w-[920px]">
            <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-white/80">
              <span className="h-px w-8 bg-brand-signal" aria-hidden />
              For small teams
            </p>
            <h2 className="text-balance font-display text-[3.15rem] font-normal leading-[0.94] tracking-[-0.028em] text-white max-[360px]:text-[2.62rem] sm:text-6xl lg:text-[4.8rem] xl:text-[5.1rem]">
              You don&apos;t need a sales team to keep growing.
            </h2>
            <p className="mt-7 max-w-[680px] text-pretty text-base leading-7 text-white/76 sm:text-lg sm:leading-8">
              Give Lemma the direction. It does the prospecting.
            </p>
          </div>

          <TrackedLink
            href="https://app.heylemma.com/missions/new"
            event="cta_click"
            eventProps={{
              label: "Start for free",
              page: "home",
              location: "footer",
            }}
            className="landing-button inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[10px] bg-accent px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_34px_-18px_rgba(43,87,213,0.95)] hover:bg-brand-cobalt-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-fit lg:mb-2"
          >
            Start for free
            <ArrowUpRightIcon size={16} weight="bold" aria-hidden />
          </TrackedLink>
        </div>

        <div className="mt-14 grid gap-10 border-t border-white/26 pt-8 md:mt-16 lg:grid-cols-[1fr_auto] lg:gap-16">
          <div className="max-w-md">
            <Link href="/#top" aria-label="Lemma home" className="inline-flex">
              <Image
                src="/brand/logo/open-passage-lockup-white.png"
                alt="Lemma"
                width={125}
                height={25}
                className="h-6 w-auto"
              />
            </Link>
            <p className="mt-5 max-w-[360px] text-sm leading-6 text-white/74 sm:text-base sm:leading-7">
              The AI that runs your outbound.
            </p>
            <Link
              href="https://www.linkedin.com/company/heylemma"
              aria-label="Lemma on LinkedIn"
              className="landing-button mt-6 inline-flex h-10 w-10 items-center justify-center rounded-[10px] border border-white/34 text-white/76 hover:border-white/54 hover:bg-white/8 hover:text-white"
            >
              <LinkedinLogoIcon size={18} weight="fill" aria-hidden />
            </Link>
          </div>

          <nav
            aria-label="Footer navigation"
            className="grid grid-cols-2 gap-x-10 gap-y-10 sm:grid-cols-3 sm:gap-x-14 lg:gap-x-20"
          >
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-white/70">
                  {group.title}
                </h3>
                <div className="mt-5 grid gap-3">
                  {group.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-sm text-white/78 transition hover:text-white"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-white/24 pt-5 text-xs text-white/66">
          <span>© 2026 Lemma</span>
          <span aria-hidden className="h-px w-10 bg-white/24" />
        </div>
      </div>
    </footer>
  );
}
