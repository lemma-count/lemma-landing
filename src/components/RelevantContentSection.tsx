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
            <span>Lemma keeps</span>
            <span>the conversation</span>
            <span>
              moving<span className={styles.warmSignalPeriod}>.</span>
            </span>
          </h2>
        </div>

        <div className={styles.warmExplanation}>
          <p>
            Lemma sends, waits, and follows up for days or weeks. When someone
            replies or the plan changes, it keeps the same conversation moving
            or brings you in when you need to decide.
          </p>
          <p className={styles.warmSequence}>
            Send · Wait · Follow up · Bring you in
          </p>
        </div>
      </div>
    </section>
  );
}
