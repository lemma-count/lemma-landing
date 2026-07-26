import Image from "next/image";
import { lemmaBrandVisual } from "@/lib/lemma-brand-release";
import styles from "./LemmaMarketing.module.css";

const lemmaHandles = [
  "Lead research and preparation",
  "Permitted LinkedIn execution",
  "Relevant 1:1 follow-up",
] as const;

const operatorKeeps = [
  "The target and Lead source",
  "Permissions and boundaries",
  "Reputation-sensitive judgment",
  "The relationship and the close",
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
          <p className={styles.eyebrow}>04 / Permission and return</p>
          <h2 className={styles.permissionTitle}>Step in when it matters.</h2>
          <p className={styles.permissionBody}>
            Lemma runs within the boundaries you set. Replies, blockers, and
            reputation-sensitive decisions return with the context you need to
            take over.
          </p>
          <p className={styles.permissionSignal}>
            <span className={styles.permissionSignalDot} aria-hidden />
            <span>Needs you / Human judgment</span>
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
              <h3>You keep</h3>
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
