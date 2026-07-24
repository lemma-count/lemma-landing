import Image from "next/image";
import { lemmaBrandVisual } from "@/lib/lemma-brand-release";
import styles from "./LemmaMarketing.module.css";

export function RelevantContentSection() {
  return (
    <section id="product" className={styles.warmSection}>
      <div className={`${styles.frame} ${styles.warmGrid}`}>
        <div className={styles.warmMedia}>
          <Image
            src={lemmaBrandVisual("lemma-signal-colonnade.webp")}
            alt=""
            fill
            sizes="(max-width: 899px) 100vw, 42vw"
            className={styles.warmImage}
          />
        </div>

        <div className={styles.warmStatement}>
          <p className={styles.eyebrow}>03 / Relevance over repetition</p>
          <h2 className={styles.warmTitle}>
            <span>Keep the</span>
            <span>conversation</span>
            <span>
              warm<span className={styles.warmSignalPeriod}>.</span>
            </span>
          </h2>
        </div>

        <div className={styles.warmExplanation}>
          <p>
            Lemma starts with a relevant reason to connect, follows up with the
            right content for that person, and keeps the next step moving
            without empty bumps.
          </p>
          <p className={styles.warmSequence}>
            Relevant opening · Useful follow-up · Context intact
          </p>
        </div>
      </div>
    </section>
  );
}
