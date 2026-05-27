import Link from "next/link";
import Image from "next/image";
import { navGroups, primaryLinks, productLinks } from "@/lib/navigation";
import { TrackedLink } from "./TrackedLink";

const footerGroups = [
  {
    title: "Product",
    links: [
      { label: "Home", href: "/" },
      ...productLinks,
      ...primaryLinks,
    ],
  },
  ...navGroups.map((group) => ({
    title: group.label,
    links: group.links,
  })),
];

export function Footer() {
  return (
    <footer className="border-t border-[#e6e3dd] bg-[#f8f7f4] text-ink">
      <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-10 md:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_auto]">
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
                style={{ width: "auto", height: "auto" }}
              />
            </Link>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted md:text-lg md:leading-8">
              Lemma helps founders and AI-native teams ask adaptive follow-up
              questions, collect human context, and turn it into usable
              intelligence for people and agents.
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

          <nav
            aria-label="Footer navigation"
            className="grid grid-cols-2 gap-x-10 gap-y-8 sm:grid-cols-4 lg:pt-1"
          >
            {footerGroups.map(({ title, links }) => (
              <div key={title} className="min-w-32">
                <h2 className="text-xs font-semibold uppercase tracking-[0.08em] text-subtle">
                  {title}
                </h2>
                <div className="mt-4 grid gap-3">
                  {links.map(({ label, href }) => (
                    <Link
                      key={href}
                      href={href}
                      className="text-sm text-muted transition-colors hover:text-ink"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
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
