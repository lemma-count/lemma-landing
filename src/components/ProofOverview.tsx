import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { lemmaBrandVisual } from "@/lib/lemma-brand-release";
import styles from "./LemmaMarketing.module.css";

const chapters = [
  {
    index: "01",
    title: "Alignment / Research",
    href: "#alignment",
    active: true,
  },
  {
    index: "02",
    title: "Permission / Control",
    href: "#control",
    active: false,
  },
  {
    index: "03",
    title: "Return / Human handoff",
    href: "#return",
    active: false,
  },
] as const;

export function ProofOverview() {
  return (
    <section id="how-it-works" className={styles.journeySection}>
      <div className={`${styles.frame} ${styles.journeyFrame}`}>
        <nav className={styles.chapterRail} aria-label="How Lemma works">
          {chapters.map((chapter) => (
            <Link
              key={chapter.index}
              href={chapter.href}
              className={`${styles.chapterTab} ${
                chapter.active ? styles.chapterTabActive : ""
              }`}
            >
              <span className={styles.chapterIndex}>{chapter.index}</span>
              <span className={styles.chapterName}>{chapter.title}</span>
              <ArrowRight size={18} strokeWidth={1.5} aria-hidden />
            </Link>
          ))}
        </nav>

        <article id="alignment" className={styles.alignmentChapter}>
          <div className={styles.alignmentCopy}>
            <p className={styles.eyebrow}>02 / Alignment and research</p>
            <h2 className={styles.alignmentTitle}>Reach the right people.</h2>
            <p className={styles.alignmentBody}>
              Add the Leads you want to reach. Lemma researches each person and
              company, checks fit against the Mission, and prepares outreach
              with a real reason to exist.
            </p>
            <Link href="/#product" className={styles.chapterTextLink}>
              Then keep them engaged
              <ArrowRight size={16} strokeWidth={1.5} aria-hidden />
            </Link>
          </div>

          <div className={styles.alignmentVisual} aria-hidden>
            <Image
              src={lemmaBrandVisual("lemma-horizon-court.webp")}
              alt=""
              fill
              sizes="(max-width: 899px) 100vw, 68vw"
              className={styles.alignmentImage}
            />
          </div>
        </article>
      </div>
    </section>
  );
}
