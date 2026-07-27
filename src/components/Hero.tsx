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
            <span>Reach</span>
            <span>potential clients</span>
            <span className={styles.heroTitleAccent}>without doing</span>
            <span className={styles.heroTitleAccent}>every</span>
            <span className={styles.heroTitleAccent}>
              follow-up<span className={styles.heroSignalPeriod}>.</span>
            </span>
          </h1>
          <p className={styles.heroBody}>
            Tell Lemma who to contact, what you sell, and which messages it may
            send. Lemma sends, waits, and follows up on LinkedIn for days or
            weeks. When someone replies or the plan changes, it brings you in
            when you need to decide.
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
            {lemmaTrial.days} days free · No card · Start with{" "}
            {lemmaTrial.managedLeads} people
          </p>
        </div>
      </div>
    </section>
  );
}
