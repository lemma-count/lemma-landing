import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { lemmaBrandVisual } from "@/lib/lemma-brand-release";
import { LEMMA_START_TRIAL_URL } from "@/lib/links";
import { lemmaTrial } from "@/lib/pricing";
import { TrackedLink } from "./TrackedLink";
import styles from "./LemmaMarketing.module.css";

export function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={styles.heroMedia} aria-hidden>
        <Image
          src={lemmaBrandVisual("lemma-alignment-court.webp")}
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.heroImage}
        />
      </div>
      <div className={styles.heroVeil} aria-hidden />

      <div className={`${styles.frame} ${styles.heroGrid}`}>
        <div className={styles.heroCopy}>
          <h1 className={styles.heroTitle}>
            <span>Get new</span>
            <span>clients</span>
            <span className={styles.heroTitleAccent}>without</span>
            <span className={styles.heroTitleAccent}>doing the</span>
            <span className={styles.heroTitleAccent}>
              prospecting<span className={styles.heroSignalPeriod}>.</span>
            </span>
          </h1>
          <p className={styles.heroBody}>
            Tell Lemma who you want to reach. It researches each Lead, starts
            relevant conversations, shares the right content, follows up, and
            brings interested people back to you.
          </p>

          <div className={styles.heroActions}>
            <TrackedLink
              href={LEMMA_START_TRIAL_URL}
              event="cta_click"
              eventProps={{
                label: "Start winning clients",
                page: "home",
                location: "hero",
              }}
              className={styles.primaryAction}
            >
              Start winning clients
              <ArrowUpRight size={16} strokeWidth={1.5} aria-hidden />
            </TrackedLink>
            <Link href="/#how-it-works" className={styles.secondaryAction}>
              See how it works
              <ArrowDown size={16} strokeWidth={1.5} aria-hidden />
            </Link>
          </div>
          <p className={styles.trialMeta}>
            {lemmaTrial.days} days free · No credit card ·{" "}
            {lemmaTrial.managedLeads} Managed leads
          </p>
        </div>
      </div>
    </section>
  );
}
