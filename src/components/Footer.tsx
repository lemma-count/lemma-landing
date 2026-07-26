import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { lemmaBrandLogos, lemmaBrandVisual } from "@/lib/lemma-brand-release";
import { LEMMA_SIGN_IN_URL, LEMMA_START_TRIAL_URL } from "@/lib/links";
import { TrackedLink } from "./TrackedLink";
import styles from "./LemmaMarketing.module.css";

const footerGroups = [
  {
    title: "Explore",
    links: [
      { label: "How it works", href: "/#how-it-works" },
      { label: "Product", href: "/#product" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Account",
    links: [
      { label: "Start free trial", href: LEMMA_START_TRIAL_URL },
      { label: "Sign in", href: LEMMA_SIGN_IN_URL },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Email", href: "mailto:hello@heylemma.com" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/heylemma",
      },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer id="final-cta" className={`${styles.shell} ${styles.footer}`}>
      <Image
        src={lemmaBrandVisual("lemma-horizon-threshold.webp")}
        alt=""
        fill
        sizes="100vw"
        className={styles.closingImage}
      />
      <div className={styles.closingVeil} aria-hidden />

      <div className={`${styles.frame} ${styles.closing}`}>
        <div className={styles.closingCopy}>
          <p className={styles.eyebrow}>Start with 10 Leads</p>
          <h2 className={styles.closingTitle}>
            Let Lemma do the prospecting.
          </h2>
          <p className={styles.closingBody}>
            You choose who to reach. Lemma researches, follows up, and brings
            you back when the conversation needs you.
          </p>
          <TrackedLink
            href={LEMMA_START_TRIAL_URL}
            event="cta_click"
            eventProps={{
              label: "Start free",
              page: "global",
              location: "footer",
            }}
            className={styles.footerAction}
          >
            Start free
            <ArrowUpRight size={16} strokeWidth={1.5} aria-hidden />
          </TrackedLink>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.footerBrand}>
            <Link href="/#top" aria-label="Lemma home">
              <Image
                src={lemmaBrandLogos.horizontalPaper}
                alt="Lemma"
                width={125}
                height={25}
                className={styles.logo}
              />
            </Link>
            <p>
              LinkedIn outbound that keeps the work moving without taking
              control away from you.
            </p>
          </div>

          <nav className={styles.footerNav} aria-label="Footer navigation">
            {footerGroups.map((group) => (
              <div key={group.title} className={styles.footerNavGroup}>
                <h3>{group.title}</h3>
                <div>
                  {group.links.map((link) => (
                    <Link key={link.label} href={link.href}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>

          <div className={styles.copyright}>
            <span>© 2026 Lemma</span>
            <span>Open Passage / 1.4.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
