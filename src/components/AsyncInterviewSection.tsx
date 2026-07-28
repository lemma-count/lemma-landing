import {
  ArrowDown,
  CheckCircle2,
  Clock3,
  Link2,
  MessageCircleMore,
  Mic2,
} from "lucide-react";
import styles from "./LemmaMarketing.module.css";

const voiceConversationFlow = [
  {
    label: "LinkedIn reply",
    detail: "More questions need answering",
    icon: MessageCircleMore,
  },
  {
    label: "Voice conversation link",
    detail: "Sent without asking for a meeting",
    icon: Link2,
  },
  {
    label: "Opened when ready",
    detail: "The person starts when it suits them",
    icon: Clock3,
  },
  {
    label: "Questions at their pace",
    detail: "They can answer, pause, and ask questions",
    icon: Mic2,
  },
  {
    label: "Clear next step",
    detail: "Interested · Not interested · Needs your decision",
    icon: CheckCircle2,
  },
] as const;

export function AsyncInterviewSection() {
  return (
    <section
      id="voice-outbound"
      aria-labelledby="voice-outbound-title"
      className={`${styles.section} ${styles.voiceSection}`}
    >
      <div className={`${styles.frame} ${styles.voiceGrid}`}>
        <header className={styles.voiceCopy}>
          <p className={styles.eyebrow}>Asynchronous AI voice, by link</p>
          <h2
            id="voice-outbound-title"
            className={`${styles.sectionTitle} ${styles.editorialTitle} ${styles.voiceTitle}`}
          >
            Voice when the person is ready.
          </h2>
          <p className={styles.sectionBody}>
            When text is not enough, Lemma sends a voice link. They answer on
            their time; you join only when needed.
          </p>
        </header>

        <figure className={styles.voiceProof}>
          <div className={styles.voiceBrowser}>
            <div className={styles.voiceBrowserBar} aria-hidden>
              <span />
              <span />
              <span />
              <p>
                <Link2 size={13} strokeWidth={1.7} aria-hidden />
                AI voice conversation · Open when ready
              </p>
            </div>

            <ol className={styles.voiceFlow}>
              {voiceConversationFlow.map((item, index) => {
                const Icon = item.icon;

                return (
                  <li key={item.label} className={styles.voiceFlowItem}>
                    <span className={styles.voiceFlowIcon} aria-hidden>
                      <Icon size={18} strokeWidth={1.6} />
                    </span>
                    <div>
                      <strong>{item.label}</strong>
                      <p>{item.detail}</p>
                    </div>
                    {index < voiceConversationFlow.length - 1 ? (
                      <ArrowDown
                        className={styles.voiceFlowArrow}
                        size={17}
                        strokeWidth={1.5}
                        aria-hidden
                      />
                    ) : null}
                  </li>
                );
              })}
            </ol>

            <div className={styles.voiceReturn}>
              <span>Same person</span>
              <span>Same goal</span>
              <strong>Back to the outreach plan</strong>
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
}
