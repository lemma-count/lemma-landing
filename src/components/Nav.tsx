"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ListIcon, XIcon } from "@phosphor-icons/react";
import { track } from "@vercel/analytics";
import { trackGrowthCta } from "@/lib/growth-analytics";

const navLinks = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Sign in", href: "https://app.heylemma.com/login" },
] as const;

function LemmaWordmark({ inverse = false }: { inverse?: boolean }) {
  return (
    <Image
      src={inverse ? "/brand/logo/open-passage-lockup-white.png" : "/brand/logo/open-passage-lockup-night.png"}
      alt="Lemma"
      width={125}
      height={25}
      priority
      className="h-6 w-auto"
    />
  );
}

export function Nav({
  inverse = false,
  compact = false,
}: {
  inverse?: boolean;
  compact?: boolean;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const mobileCloseRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!mobileOpen) return;

    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    if (desktopQuery.matches) {
      setMobileOpen(false);
      return;
    }

    const previouslyFocused = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    mobileCloseRef.current?.focus();

    function closeAtDesktop(event: MediaQueryListEvent) {
      if (event.matches) setMobileOpen(false);
    }

    function handleDrawerKeydown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        setMobileOpen(false);
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = Array.from(
        drawerRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ) ?? [],
      ).filter((element) => element.offsetParent !== null);

      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleDrawerKeydown);
    desktopQuery.addEventListener("change", closeAtDesktop);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleDrawerKeydown);
      desktopQuery.removeEventListener("change", closeAtDesktop);
      previouslyFocused?.focus();
    };
  }, [mobileOpen]);

  function trackNavCta(location: "desktop" | "mobile") {
    track("nav_cta_click", { location });
    trackGrowthCta("nav_cta_click", {
      cta_id: `nav_${location}_start_free`,
      cta_text: "Start for free",
      cta_href: "https://app.heylemma.com/missions/new",
      location,
    });
  }

  const navLinkClass = inverse
    ? "text-white/78 hover:text-white"
    : "text-ink hover:text-muted";

  return (
    <>
      <header className={`w-full transition-[background-color,border-color,box-shadow] duration-300 ${inverse ? "border-b border-transparent bg-transparent text-white" : "border-b border-[#d9e2ef]/90 bg-white/88 text-ink shadow-[0_12px_34px_-28px_rgba(4,16,42,0.55)] backdrop-blur-xl"}`}>
        <nav aria-label="Main navigation" className={`mx-auto flex max-w-[1400px] items-center justify-between px-5 transition-[height] duration-300 sm:px-8 lg:px-10 ${compact ? "h-[64px]" : "h-[72px]"}`}>
          <Link href="/#top" aria-label="Lemma home" className="flex items-center">
            <LemmaWordmark inverse={inverse} />
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition ${navLinkClass}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center lg:flex">
            <Link
              href="https://app.heylemma.com/missions/new"
              onClick={() => trackNavCta("desktop")}
              className={`landing-button rounded-[10px] px-4 py-2.5 text-sm font-semibold ${inverse ? "border border-white/48 bg-brand-night/28 text-white hover:border-white/70 hover:bg-white/10" : "bg-accent text-white shadow-[0_12px_28px_-18px_rgba(43,87,213,0.95)] hover:bg-brand-cobalt-hover"}`}
            >
              Start for free
            </Link>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(true)}
            className={`landing-button flex h-11 w-11 items-center justify-center rounded-[10px] lg:hidden ${inverse ? "text-white hover:bg-white/12" : "text-ink hover:bg-black/5"}`}
          >
            <ListIcon size={22} aria-hidden />
          </button>
        </nav>
      </header>

      {mobileOpen && (
        <>
          <button
            type="button"
            aria-label="Close menu"
            className="fixed inset-0 z-40 bg-black/45 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileOpen(false)}
          />

          <div
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-label="Main menu"
            className="fixed inset-y-0 right-0 z-50 flex w-[min(90vw,24rem)] flex-col bg-paper text-ink shadow-2xl lg:hidden"
          >
            <div className="flex h-[72px] items-center justify-between border-b border-border px-6">
              <Link href="/#top" aria-label="Lemma home" onClick={() => setMobileOpen(false)}>
                <LemmaWordmark />
              </Link>
              <button
                ref={mobileCloseRef}
                type="button"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-paper-deep"
              >
                <XIcon size={20} aria-hidden />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-6 py-7">
              <div className="grid">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="border-b border-border py-4 text-base font-semibold"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </nav>

            <div className="border-t border-border p-5">
              <Link
                href="https://app.heylemma.com/missions/new"
                onClick={() => {
                  setMobileOpen(false);
                  trackNavCta("mobile");
                }}
                className="landing-button inline-flex w-full items-center justify-center rounded-[10px] bg-accent px-5 py-3.5 text-sm font-semibold text-white hover:bg-brand-cobalt-hover"
              >
                Start for free
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}
