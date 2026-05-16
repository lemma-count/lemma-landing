"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { track } from "@vercel/analytics";

const solutions = [
  { label: "Consultants", href: "/consultants" },
  { label: "Marketing", href: "/marketing" },
  { label: "Sales", href: "/sales" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Nav() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const wrapperRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    function handle(e: MouseEvent) {
      if (!wrapperRef.current?.contains(e.target as Node)) setDropdownOpen(false);
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
    setMobileSolutionsOpen(false);
  }

  return (
    <header className="sticky top-0 z-30 w-full bg-white/90 backdrop-blur-sm border-b border-border/60">
      <nav className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" onClick={closeMobile}>
          <Image
            src="/assets/logo-black.png"
            alt="Lemma"
            width={120}
            height={28}
            priority
            className="h-6 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 text-sm text-ink md:flex">
          <li>
            <Link href="/" className="transition-colors hover:text-muted">
              Home
            </Link>
          </li>
          <li ref={wrapperRef} className="relative">
            <button
              type="button"
              onClick={() => setDropdownOpen((v) => !v)}
              aria-expanded={dropdownOpen}
              aria-haspopup="menu"
              className="inline-flex items-center gap-1 transition-colors hover:text-muted"
            >
              Solutions
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                aria-hidden
                className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
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
            {dropdownOpen && (
              <div
                role="menu"
                className="absolute left-1/2 top-full mt-3 w-44 -translate-x-1/2 rounded-lg border border-border bg-white p-2 shadow-[0_12px_30px_-12px_rgba(0,0,0,0.15)]"
              >
                {solutions.map((s) => (
                  <Link
                    key={s.label}
                    href={s.href}
                    role="menuitem"
                    onClick={() => setDropdownOpen(false)}
                    className="block rounded-md px-3 py-2 text-sm text-ink transition-colors hover:bg-neutral-100"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </li>
          {navLinks.slice(1).map((l) => (
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
          onClick={() => track("nav_cta_click", { location: "desktop" })}
          className="hidden items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-800 md:inline-flex"
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

      {/* Mobile drawer backdrop */}
      {mobileOpen && (
        <div
          aria-hidden
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden"
          onClick={closeMobile}
        />
      )}

      {/* Mobile drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-50 flex w-72 flex-col bg-white shadow-2xl transition-transform duration-300 md:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!mobileOpen}
      >
        {/* Drawer header */}
        <div className="flex h-20 items-center justify-between px-6">
          <Link href="/" onClick={closeMobile}>
            <Image
              src="/assets/logo-black.png"
              alt="Lemma"
              width={100}
              height={24}
              className="h-5 w-auto"
            />
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

            {/* Solutions accordion */}
            <li>
              <button
                type="button"
                onClick={() => setMobileSolutionsOpen((v) => !v)}
                className="flex w-full items-center justify-between rounded-md px-3 py-3 text-sm font-medium text-ink transition-colors hover:bg-neutral-100"
              >
                Solutions
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  aria-hidden
                  className={`transition-transform ${mobileSolutionsOpen ? "rotate-180" : ""}`}
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
              {mobileSolutionsOpen && (
                <ul className="ml-4 mt-1 space-y-1 border-l border-border pl-3">
                  {solutions.map((s) => (
                    <li key={s.label}>
                      <Link
                        href={s.href}
                        onClick={closeMobile}
                        className="block rounded-md px-3 py-2.5 text-sm text-muted transition-colors hover:bg-neutral-100 hover:text-ink"
                      >
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {navLinks.slice(1).map((l) => (
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
            onClick={() => { closeMobile(); track("nav_cta_click", { location: "mobile" }); }}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-black px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
          >
            Start for free
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
