"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const solutions = [
  { label: "Consultants", href: "/consultants" },
  { label: "Marketing", href: "/marketing" },
  { label: "Sales", href: "/sales" },
];

const links = [
  { label: "Home", href: "/" as const },
  { label: "Pricing", href: "/pricing" as const },
  { label: "Blog", href: "/blog" as const },
  { label: "Contact", href: "/contact" as const },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    function handle(e: MouseEvent) {
      if (!wrapperRef.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, []);

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <nav className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-6 lg:px-10">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/logo-black.png"
            alt="Lemma"
            width={120}
            height={28}
            priority
            className="h-6 w-auto"
          />
        </Link>

        <ul className="hidden items-center gap-8 text-sm text-ink md:flex">
          <li>
            <Link href="/" className="transition-colors hover:text-muted">
              Home
            </Link>
          </li>
          <li ref={wrapperRef} className="relative">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
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
                className={`transition-transform ${open ? "rotate-180" : ""}`}
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
            {open && (
              <div
                role="menu"
                className="absolute left-1/2 top-full mt-3 w-44 -translate-x-1/2 rounded-lg border border-border bg-white p-2 shadow-[0_12px_30px_-12px_rgba(0,0,0,0.15)]"
              >
                {solutions.map((s) => (
                  <Link
                    key={s.label}
                    href={s.href}
                    role="menuitem"
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-2 text-sm text-ink transition-colors hover:bg-neutral-100"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </li>
          {links.slice(1).map((l) => (
            <li key={l.label}>
              <Link
                href={l.href}
                className="transition-colors hover:text-muted"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="https://app.heylemma.com"
          className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
        >
          Start for free
          <span aria-hidden>→</span>
        </Link>
      </nav>
    </header>
  );
}
