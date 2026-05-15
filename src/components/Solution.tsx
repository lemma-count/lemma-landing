import Image from "next/image";

const steps = [
  {
    title: "Start with a business question",
    body: "Define the decision, audience, and context you need: why users dropped, what customers think about your brand, what employees need, what buyers decided, or which customer story is worth writing.",
  },
  {
    title: "Launch adaptive voice conversations",
    body: "Send one link to customers, users, employees, buyers, partners, or stakeholders. Lemma guides each conversation based on the objective and the person's answers.",
  },
  {
    title: "Act on transcript-grounded insight",
    body: "View themes, quotes, and transcripts in a single hub. See the patterns that matter most, understand the evidence behind them, and push next steps to Slack, CRM, Docs, Decks, and AI workspaces.",
  },
];

const cardBg =
  "bg-[radial-gradient(120%_80%_at_20%_30%,#9ec5b1_0%,#4b8a7b_35%,#1c4940_70%,#0e2a25_100%)]";

function CardSearch() {
  return (
    <div className={`relative h-full w-full ${cardBg}`}>
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="flex w-full max-w-sm items-center gap-2 rounded-full bg-white/95 px-4 py-3 text-sm text-subtle shadow-[0_8px_24px_-8px_rgba(0,0,0,0.25)]">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden
          >
            <circle
              cx="7"
              cy="7"
              r="4.5"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M10.5 10.5L13.5 13.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <span className="truncate">
            Interview customers, leads, or stakeholders…
          </span>
        </div>
      </div>
    </div>
  );
}

function CardListening() {
  return (
    <div className={`relative h-full w-full ${cardBg}`}>
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <Image
          src="/assets/listening-bubble.png"
          alt="Listening prompt: Where did you notice friction or effort in that experience?"
          width={520}
          height={520}
          className="h-auto w-[78%] max-w-[320px] rounded-2xl"
        />
      </div>
    </div>
  );
}

function CardReport() {
  return (
    <div className={`relative h-full w-full ${cardBg}`}>
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="w-full max-w-[320px] rounded-xl bg-white p-4 text-left text-[11px] leading-snug text-ink shadow-[0_12px_30px_-10px_rgba(0,0,0,0.4)]">
          <p className="text-[12px] font-medium leading-snug">
            Coverage spans GTM, technical, and operational functions; no single
            role exceeds 20% of the sample, and adoption was largely peer-driven.
          </p>
          <div className="mt-3 grid grid-cols-2 gap-2 text-[10px] text-muted">
            <div className="rounded-md bg-neutral-100 p-2">
              <div className="h-1.5 w-10 rounded bg-neutral-300" />
              <div className="mt-1 h-1 w-16 rounded bg-neutral-200" />
            </div>
            <div className="rounded-md bg-neutral-100 p-2">
              <div className="h-1.5 w-12 rounded bg-neutral-300" />
              <div className="mt-1 h-1 w-14 rounded bg-neutral-200" />
            </div>
            <div className="rounded-md bg-neutral-100 p-2">
              <div className="h-1.5 w-8 rounded bg-neutral-300" />
              <div className="mt-1 h-1 w-12 rounded bg-neutral-200" />
            </div>
            <div className="rounded-md bg-neutral-100 p-2">
              <div className="h-1.5 w-10 rounded bg-neutral-300" />
              <div className="mt-1 h-1 w-16 rounded bg-neutral-200" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const cards = [CardSearch, CardListening, CardReport];

export function Solution() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-10 md:py-28">
        <div className="max-w-3xl">
          <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-ink md:text-5xl">
            Turn important conversations into decisions.
          </h2>
          <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-muted md:text-lg md:leading-8">
            Tell Lemma what you need to understand. Lemma runs focused voice
            conversations, adapts to each person, and produces a report with
            patterns, priorities, quotes, transcripts, and recommended next
            steps.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 border-t border-border pt-10 md:grid-cols-3">
          {steps.map((step, i) => {
            const Card = cards[i];
            return (
              <div key={step.title} className="flex flex-col">
                <h3 className="text-base font-semibold text-ink">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{step.body}</p>
                <div className="mt-6 aspect-[4/3] w-full overflow-hidden rounded-md">
                  <Card />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
