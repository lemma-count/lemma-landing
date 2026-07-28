"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { lemmaBrandLogos } from "@/lib/lemma-brand-release";
import { LEMMA_START_TRIAL_URL } from "@/lib/links";
import { TrackedLink } from "./TrackedLink";
import styles from "./LemmaMarketing.module.css";

const navLinks = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "Product", href: "/#product" },
  { label: "Pricing", href: "/pricing" },
] as const;

function LemmaLogo() {
  return (
    <Image
      src={lemmaBrandLogos.horizontalInk}
      alt="Lemma"
      width={125}
      height={25}
      priority
      className={styles.logo}
    />
  );
}

export function Nav({ compact = false }: { compact?: boolean }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const mobileCloseRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!mobileOpen) return;

    const desktopQuery = window.matchMedia("(min-width: 900px)");
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

  return (
    <>
      <header
        className={`${styles.shell} ${styles.header} ${
          compact ? styles.headerScrolled : ""
        }`}
      >
        <nav aria-label="Main navigation" className={styles.nav}>
          <Link
            href="/#top"
            aria-label="Lemma home"
            aria-current={pathname === "/" ? "page" : undefined}
            className={styles.logoLink}
          >
            <LemmaLogo />
          </Link>

          <div className={styles.navLinks}>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                aria-current={
                  link.href === "/pricing" && pathname === "/pricing"
                    ? "page"
                    : undefined
                }
                className={styles.navLink}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className={styles.navActions}>
            <TrackedLink
              href={LEMMA_START_TRIAL_URL}
              event="nav_cta_click"
              eventProps={{
                label: "Start free",
                location: "desktop",
              }}
              className={`${styles.primaryAction} ${styles.navCta}`}
            >
              Start free
            </TrackedLink>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(true)}
            className={styles.menuTrigger}
          >
            Menu
          </button>
        </nav>
      </header>

      {mobileOpen && (
        <>
          <div
            aria-hidden="true"
            className={styles.mobileBackdrop}
            onClick={() => setMobileOpen(false)}
          />

          <div
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-label="Main menu"
            className={`${styles.shell} ${styles.mobilePanel}`}
          >
            <div className={styles.mobileHead}>
              <Link
                href="/#top"
                aria-label="Lemma home"
                aria-current={pathname === "/" ? "page" : undefined}
                className={styles.logoLink}
                onClick={() => setMobileOpen(false)}
              >
                <LemmaLogo />
              </Link>
              <button
                ref={mobileCloseRef}
                type="button"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
                className={styles.mobileClose}
              >
                Close
              </button>
            </div>

            <nav className={styles.mobileLinks} aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  aria-current={
                    link.href === "/pricing" && pathname === "/pricing"
                      ? "page"
                      : undefined
                  }
                  onClick={() => setMobileOpen(false)}
                  className={styles.navLink}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <TrackedLink
              href={LEMMA_START_TRIAL_URL}
              event="nav_cta_click"
              eventProps={{
                label: "Start free",
                location: "mobile",
              }}
              onClick={() => setMobileOpen(false)}
              className={`${styles.primaryAction} ${styles.mobileCta}`}
            >
              Start free
            </TrackedLink>
          </div>
        </>
      )}
    </>
  );
}
