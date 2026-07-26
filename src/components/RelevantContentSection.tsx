import Image from "next/image";
import { lemmaBrandVisual } from "@/lib/lemma-brand-release";
import styles from "./LemmaMarketing.module.css";

export function RelevantContentSection() {
  return (
    <section id="follow-up" className={styles.warmSection}>
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
          <p className={styles.eyebrow}>How it works · Step 2</p>
          <h2 className={styles.warmTitle}>
            <span>Lemma researches,</span>
            <span>sends, and</span>
            <span>
              follows up<span className={styles.warmSignalPeriod}>.</span>
            </span>
          </h2>
        </div>

        <div className={styles.warmExplanation}>
          <p>
            Lemma researches each person, prepares and sends the messages your
            rules allow, waits, and follows up for days or weeks.
          </p>
          <p className={styles.warmSequence}>
            Research · Send · Wait · Follow up
          </p>
        </div>
      </div>
    </section>
  );
}
