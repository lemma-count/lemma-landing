"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Overview", href: "/report" },
  { label: "Samples", href: "/report/samples" },
  { label: "Methodology", href: "/report/methodology" },
  { label: "FAQ", href: "/report#faq" },
];

export function ReportSubNav() {
  const pathname = usePathname();

  function isActive(href: string) {
    const path = href.split("#")[0];
    if (path === "/report") return pathname === "/report";
    return pathname.startsWith(path);
  }

  return (
    <div className="sticky z-20 flex items-center justify-between border-b border-border bg-white/95 px-6 backdrop-blur-sm md:px-10" style={{ top: "var(--header-h, 81px)" }}>
      <div className="flex items-center gap-1">
        {links.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            className={`relative px-3 py-3 text-sm transition-colors ${
              isActive(href)
                ? "font-semibold text-ink after:absolute after:inset-x-3 after:bottom-0 after:h-[2px] after:bg-ink after:content-['']"
                : "text-muted hover:text-ink"
            }`}
          >
            {label}
          </Link>
        ))}
      </div>
      <Link
        href="#"
        className="hidden text-sm font-medium text-accent transition-colors hover:text-[#2f3fd6] md:block"
      >
        Get my report — $9.99 →
      </Link>
    </div>
  );
}
