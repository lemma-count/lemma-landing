import Link from "next/link";
import { TrackedLink } from "./TrackedLink";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Consultants", href: "/consultants" },
  { label: "Marketing", href: "/marketing" },
  { label: "Sales", href: "/sales" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-black text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_95%_at_78%_10%,rgba(72,32,18,0.88),rgba(18,6,2,0.8)_48%,#000_82%)]"
      />
      <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-10 md:py-28">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_auto]">
          <div className="max-w-2xl">
            <Link
              href="/"
              aria-label="Lemma home"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-white"
            >
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none" aria-hidden>
                <path
                  d="M1 2h10M1 5h10M1 8h10"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
              </svg>
              <span>Lemma</span>
            </Link>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 md:text-lg md:leading-8">
              Keep learning from the people closest to the decision. Lemma runs
              the interviews and turns their answers into evidence your team can
              act on.
            </p>
            <TrackedLink
              href="/contact"
              event="cta_click"
              eventProps={{ label: "Contact us", page: "footer", location: "footer" }}
              className="mt-7 inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-neutral-200"
            >
              Contact us
              <span aria-hidden>→</span>
            </TrackedLink>
          </div>

          <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-10 gap-y-3 md:grid-cols-1 md:pt-1">
            {footerLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-16 flex items-center justify-end border-t border-white/10 pt-6 text-xs text-white/60">
          <span>{new Date().getFullYear()} · Lemma</span>
        </div>
      </div>
    </footer>
  );
}
