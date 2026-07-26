import Image from "next/image";
import { lemmaBrandVisual } from "@/lib/lemma-brand-release";
import styles from "./LemmaMarketing.module.css";

const lemmaHandles = [
  "Research",
  "Messages you allow",
  "Waiting and following up",
] as const;

const operatorKeeps = [
  "Who to contact",
  "What Lemma may send",
  "Replies that need you",
  "When to take over",
] as const;

export function CockpitSection() {
  return (
    <section id="control" className={styles.permissionSection}>
      <div className={`${styles.frame} ${styles.permissionGrid}`}>
        <div className={styles.permissionMedia} aria-hidden>
          <Image
            src={lemmaBrandVisual("lemma-permission-gate.webp")}
            alt=""
            fill
            sizes="(max-width: 899px) 100vw, 50vw"
            unoptimized
            className={styles.permissionImage}
          />
        </div>

        <div id="return" className={styles.permissionCopy}>
          <p className={styles.eyebrow}>How it works · Step 3</p>
          <h2 className={styles.permissionTitle}>Take over when needed.</h2>
          <p className={styles.permissionBody}>
            When someone replies, something fails, or a choice needs you, Lemma
            shows the prior messages, the reply, and the next action. You decide
            what happens next.
          </p>
          <p className={styles.permissionSignal}>
            <span className={styles.permissionSignalDot} aria-hidden />
            <span>Ready for you</span>
          </p>

          <div className={styles.permissionColumns}>
            <div className={styles.permissionColumn}>
              <h3>Lemma handles</h3>
              <ul>
                {lemmaHandles.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className={styles.permissionColumn}>
              <h3>You decide</h3>
              <ul>
                {operatorKeeps.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
