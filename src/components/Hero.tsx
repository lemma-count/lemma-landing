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
            <span>Revenue,</span>
            <span className={styles.heroTitleAccent}>that no longer</span>
            <span className={styles.heroTitleAccent}>scales with</span>
            <span className={styles.heroTitleAccent}>
              headcount<span className={styles.heroSignalPeriod}>.</span>
            </span>
          </h1>
          <p className={styles.heroBody}>
            Tell Lemma who you want to reach and what you sell. It researches,
            follows up over time, and brings you in when a real opportunity
            emerges.
          </p>

          <div className={styles.heroActions}>
            <TrackedLink
              href={LEMMA_START_TRIAL_URL}
              event="cta_click"
              eventProps={{
                label: "Start free",
                page: "home",
                location: "hero",
              }}
              className={styles.primaryAction}
            >
              Start free
              <ArrowUpRight size={16} strokeWidth={1.5} aria-hidden />
            </TrackedLink>
            <Link href="/#how-it-works" className={styles.secondaryAction}>
              See how it works
              <ArrowDown size={16} strokeWidth={1.5} aria-hidden />
            </Link>
          </div>
          <p className={styles.trialMeta}>
            {lemmaTrial.days} days free · No card
          </p>
        </div>
      </div>
    </section>
  );
}
