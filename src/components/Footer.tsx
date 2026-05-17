import Link from "next/link";
import Image from "next/image";
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
    <footer className="border-t border-[#e6e3dd] bg-[#f8f7f4] text-ink">
      <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-10 md:py-28">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_auto]">
          <div className="max-w-2xl">
            <Link
              href="/"
              aria-label="Lemma home"
              className="inline-flex items-center"
            >
              <Image
                src="/assets/lemma-logo-black.png"
                alt="Lemma"
                width={117}
                height={20}
                className="h-5 w-auto"
                style={{ width: "auto" }}
              />
            </Link>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted md:text-lg md:leading-8">
              Keep learning from the people closest to the decision. Lemma runs
              the interviews and turns their answers into evidence your team can
              act on.
            </p>
            <TrackedLink
              href="/contact"
              event="cta_click"
              eventProps={{ label: "Contact us", page: "footer", location: "footer" }}
              className="mt-7 inline-flex items-center gap-2 rounded-md bg-ink px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
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
                className="text-sm text-muted transition-colors hover:text-ink"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-16 flex items-center justify-end border-t border-[#e6e3dd] pt-6 text-xs text-subtle">
          <span>{new Date().getFullYear()} · Lemma</span>
        </div>
      </div>
    </footer>
  );
}
