"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { track } from "@vercel/analytics";
import { trackGrowthCta } from "@/lib/growth-analytics";
import { navGroups, primaryLinks, productLinks, type NavGroupId } from "@/lib/navigation";

function LemmaWordmark({ inverse = false }: { inverse?: boolean }) {
  return (
    <Image
      src={inverse ? "/assets/lemma-logo-white.png" : "/assets/lemma-logo-black.png"}
      alt="Lemma"
      width={120}
      height={20}
      priority
      className="h-5 w-auto"
      style={{ width: "auto", height: "auto" }}
    />
  );
}

export function Nav() {
  const [openDropdown, setOpenDropdown] = useState<NavGroupId | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileOpenGroup, setMobileOpenGroup] = useState<NavGroupId | null>(null);
  const desktopNavRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    function handle(e: MouseEvent) {
      if (!desktopNavRef.current?.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  function closeMobile() {
    setMobileOpen(false);
    setMobileOpenGroup(null);
  }

  function trackNavCta(location: "desktop" | "mobile") {
    track("nav_cta_click", { location });
    trackGrowthCta("nav_cta_click", {
      cta_id: `nav_${location}_start_free`,
      cta_text: "Start for free",
      cta_href: "https://app.heylemma.com",
      location,
    });
  }

  return (
    <>
    <header className="w-full border-b border-border/70 bg-white/92 backdrop-blur-sm">
      <nav className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <Link href="/" className="flex items-center" onClick={closeMobile} aria-label="Lemma home">
          <LemmaWordmark />
        </Link>

        {/* Desktop nav */}
        <ul
          ref={desktopNavRef}
          className="hidden items-center gap-7 text-[13px] font-medium text-ink md:flex lg:gap-8"
        >
          <li>
            <Link href="/" className="transition-colors hover:text-muted">
              Home
            </Link>
          </li>
          {productLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="transition-colors hover:text-muted">
                {link.label}
              </Link>
            </li>
          ))}
          {navGroups.map((group) => (
            <li key={group.id} className="relative">
              <button
                type="button"
                onClick={() =>
                  setOpenDropdown((current) =>
                    current === group.id ? null : group.id
                  )
                }
                aria-expanded={openDropdown === group.id}
                aria-haspopup="menu"
                className="inline-flex items-center gap-1 transition-colors hover:text-muted"
              >
                {group.label}
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  aria-hidden
                  className={`transition-transform ${
                    openDropdown === group.id ? "rotate-180" : ""
                  }`}
                >
                  <path
                    d="M2 3.5L5 6.5L8 3.5"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              {openDropdown === group.id && (
                <div
                  role="menu"
                  className="absolute left-1/2 top-full mt-3 w-56 -translate-x-1/2 rounded-md border border-border bg-white p-2 shadow-[0_18px_40px_-22px_rgba(0,0,0,0.4)]"
                >
                  {group.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      role="menuitem"
                      onClick={() => setOpenDropdown(null)}
                      className="block rounded-md px-3 py-2 text-sm text-ink transition-colors hover:bg-neutral-100"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
          {primaryLinks.map((l) => (
            <li key={l.label}>
              <Link href={l.href} className="transition-colors hover:text-muted">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="https://app.heylemma.com"
          onClick={() => trackNavCta("desktop")}
          className="hidden items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-medium text-white shadow-[0_8px_18px_-12px_rgba(61,80,255,0.8)] transition-colors hover:bg-[#2f3fd6] md:inline-flex"
        >
          Start for free
          <span aria-hidden>→</span>
        </Link>

        {/* Mobile: hamburger */}
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(true)}
          className="flex h-10 w-10 items-center justify-center rounded-md text-ink transition-colors hover:bg-neutral-100 md:hidden"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
            <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
        </nav>
      </header>

      {/* Mobile drawer backdrop */}
      {mobileOpen && (
        <div
          aria-hidden
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden"
          onClick={closeMobile}
        />
      )}

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          className="fixed inset-y-0 right-0 z-50 flex w-[min(82vw,22rem)] flex-col bg-white shadow-2xl md:hidden"
          role="dialog"
          aria-modal="true"
        >
          {/* Drawer header */}
          <div className="flex h-16 items-center justify-between border-b border-border/70 px-6">
            <Link href="/" onClick={closeMobile} aria-label="Lemma home">
              <LemmaWordmark />
            </Link>
            <button
              type="button"
              aria-label="Close menu"
              onClick={closeMobile}
              className="flex h-9 w-9 items-center justify-center rounded-md text-ink transition-colors hover:bg-neutral-100"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Drawer links */}
          <nav className="flex-1 overflow-y-auto px-4 py-2">
            <ul className="space-y-1">
              <li>
                <Link
                  href="/"
                  onClick={closeMobile}
                  className="block rounded-md px-3 py-3 text-sm font-medium text-ink transition-colors hover:bg-neutral-100"
                >
                  Home
                </Link>
              </li>

              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={closeMobile}
                    className="block rounded-md px-3 py-3 text-sm font-medium text-ink transition-colors hover:bg-neutral-100"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

              {navGroups.map((group) => (
                <li key={group.id}>
                  <button
                    type="button"
                    onClick={() =>
                      setMobileOpenGroup((current) =>
                        current === group.id ? null : group.id
                      )
                    }
                    className="flex w-full items-center justify-between rounded-md px-3 py-3 text-sm font-medium text-ink transition-colors hover:bg-neutral-100"
                  >
                    {group.label}
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      aria-hidden
                      className={`transition-transform ${
                        mobileOpenGroup === group.id ? "rotate-180" : ""
                      }`}
                    >
                      <path
                        d="M2 3.5L5 6.5L8 3.5"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  {mobileOpenGroup === group.id && (
                    <ul className="ml-4 mt-1 space-y-1 border-l border-border pl-3">
                      {group.links.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            onClick={closeMobile}
                            className="block rounded-md px-3 py-2.5 text-sm text-muted transition-colors hover:bg-neutral-100 hover:text-ink"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}

              {primaryLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    onClick={closeMobile}
                    className="block rounded-md px-3 py-3 text-sm font-medium text-ink transition-colors hover:bg-neutral-100"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Drawer CTA */}
          <div className="border-t border-border p-4">
            <Link
              href="https://app.heylemma.com"
              onClick={() => { closeMobile(); trackNavCta("mobile"); }}
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-[#2f3fd6]"
            >
              Start for free
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
