import Image from "next/image";

const steps = [
  {
    title: "Start with what you need to understand",
    body: "Who cares, why now, what blocks them, and what would make this worth choosing.",
  },
  {
    title: "Run adaptive voice conversations",
    body: "Send one adaptive voice conversation to customers, users, buyers, leads, or stakeholders. Lemma listens and asks the next useful question.",
  },
  {
    title: "Use the context",
    body: "Get transcripts, summaries, themes, quotes, objections, context reports, and next actions before you build, launch, sell, support, prioritize, or brief agents.",
  },
];

const cardBg = "bg-[#f8f7f4]";

function CardSearch() {
  return (
    <div className={`relative h-full w-full ${cardBg}`}>
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="flex w-full max-w-sm items-center gap-2 rounded-full border border-[#e6e3dd] bg-white px-4 py-3 text-sm text-subtle">
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
            Ask customers, leads, or stakeholders…
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
          src="/assets/adaptive-voice-context.png"
          alt="Adaptive voice conversation turning follow-up answers into structured context cards."
          width={1254}
          height={1254}
          priority
          className="h-auto w-[88%] max-w-[350px] rounded-2xl border border-[#e6e3dd] shadow-[0_18px_50px_-38px_rgba(36,92,255,0.75)]"
        />
      </div>
    </div>
  );
}

function CardReport() {
  return (
    <div className={`relative h-full w-full ${cardBg}`}>
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="w-full max-w-[320px] rounded-xl border border-[#e6e3dd] bg-white p-4 text-left text-[11px] leading-snug text-ink">
          <p className="text-[12px] font-medium leading-snug">
            Buyers keep comparing us to the current manual workflow. The
            strongest pull is from teams that need proof before the next build
            cycle.
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
      <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-10 md:py-32">
        <div className="max-w-3xl">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.16em] text-subtle">
            The solution
          </p>
          <h2 className="text-balance text-4xl font-semibold leading-[1.02] tracking-tight text-ink md:text-6xl">
            Find the context behind what people say.
          </h2>
          <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-muted md:text-lg md:leading-8">
            Most teams already have signals. What they miss is context in the
            right shape: the real need, hidden objection, buying trigger,
            workflow detail, and language people actually use. Lemma asks
            adaptive follow-up questions and turns what it learns into usable
            context for people and agents.
          </p>
        </div>

        <div className="mt-14 border-t border-border pt-10">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-subtle">
            How it works
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3">
          {steps.map((step, i) => {
            const Card = cards[i];
            return (
              <div
                key={step.title}
                className="flex flex-col rounded-[18px] border border-[#e6e3dd] bg-white p-5"
              >
                <h3 className="text-base font-semibold text-ink">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{step.body}</p>
                <div className="mt-7 aspect-[4/3] w-full overflow-hidden rounded-[14px] border border-[#e6e3dd]">
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
