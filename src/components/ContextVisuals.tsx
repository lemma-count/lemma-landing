import Image from "next/image";

export type VisualVariant =
  | "founders"
  | "product"
  | "marketing"
  | "sales"
  | "customerSuccess"
  | "consultants";

type SignalRow = {
  label: string;
  value: string;
  note: string;
};

type VisualConfig = {
  eyebrow: string;
  title: string;
  subtitle: string;
  rows: SignalRow[];
  quote: string;
  accent: string;
  soft: string;
  dark: string;
};

const configs: Record<VisualVariant, VisualConfig> = {
  founders: {
    eyebrow: "MARKET PULL",
    title: "Focus the next bet",
    subtitle: "who cares now, why now, what blocks adoption",
    accent: "#245CFF",
    soft: "#EAF0FF",
    dark: "#102A78",
    rows: [
      { label: "Urgent segment", value: "82%", note: "current workaround hurts" },
      { label: "Polite interest", value: "31%", note: "no behavior change" },
      { label: "Runway risk", value: "High", note: "too many directions open" },
    ],
    quote: "They would switch if we solved the handoff before planning.",
  },
  product: {
    eyebrow: "PRODUCT CONTEXT",
    title: "Prioritize with evidence",
    subtitle: "friction, demand, segment, consequence",
    accent: "#245CFF",
    soft: "#EEF7F4",
    dark: "#0E5D4E",
    rows: [
      { label: "Activation friction", value: "68%", note: "setup handoff breaks" },
      { label: "Demand signal", value: "Strong", note: "budget owner named" },
      { label: "Roadmap risk", value: "Low", note: "repeatable workflow" },
    ],
    quote: "The issue is not the feature. It is not knowing what to do next.",
  },
  marketing: {
    eyebrow: "MESSAGE EVIDENCE",
    title: "Use the words buyers use",
    subtitle: "language, objections, proof, category frame",
    accent: "#245CFF",
    soft: "#FFF2DF",
    dark: "#8A5200",
    rows: [
      { label: "Winning language", value: "Proof", note: "shows up in 14 calls" },
      { label: "Main objection", value: "Trust", note: "needs customer evidence" },
      { label: "Category frame", value: "Context", note: "anchors the story" },
    ],
    quote: "We do not need more output. We need to know what is true.",
  },
  sales: {
    eyebrow: "BUYER BRIEF",
    title: "Route the right follow-up",
    subtitle: "intent, urgency, fit, objection",
    accent: "#245CFF",
    soft: "#EFEAFE",
    dark: "#4B247A",
    rows: [
      { label: "Intent", value: "Active", note: "pricing viewed after invite spike" },
      { label: "Urgency", value: "30d", note: "current workflow failing" },
      { label: "Objection", value: "Proof", note: "needs internal story" },
    ],
    quote: "If this gives us a buyer brief, sales should call today.",
  },
  customerSuccess: {
    eyebrow: "RETENTION CONTEXT",
    title: "Find the reason behind the signal",
    subtitle: "activation, churn, renewal, expansion",
    accent: "#245CFF",
    soft: "#EAF7EA",
    dark: "#1C6B35",
    rows: [
      { label: "Churn risk", value: "Open", note: "value unclear after week one" },
      { label: "Activation gap", value: "Setup", note: "first useful output delayed" },
      { label: "Expansion", value: "Team", note: "adjacent workflow found" },
    ],
    quote: "The score showed the signal. The follow-up found the fix.",
  },
  consultants: {
    eyebrow: "STAKEHOLDER MAP",
    title: "Structure the room before opinions win",
    subtitle: "workflow, blockers, tradeoffs, alignment gaps",
    accent: "#245CFF",
    soft: "#F1F0EB",
    dark: "#3F3B34",
    rows: [
      { label: "Alignment gap", value: "Ops", note: "handoff ownership unclear" },
      { label: "Hidden blocker", value: "Legal", note: "approval step missing" },
      { label: "Recommendation", value: "Pilot", note: "one workflow first" },
    ],
    quote: "The debate changed once every stakeholder had evidence.",
  },
};

export function ProductContextVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#f8f7f4] p-4 text-left text-ink md:p-6">
      <div className="absolute left-6 top-6 h-24 w-24 rounded-full bg-[#245CFF]/10 blur-2xl" />
      <div className="absolute bottom-5 right-5 h-28 w-28 rounded-full bg-[#FFB547]/20 blur-2xl" />

      <div className="relative grid h-full gap-3 md:grid-cols-[0.85fr_0.8fr_1fr] md:items-center">
        <div className="rounded-xl border border-[#e6e3dd] bg-white/88 p-4 shadow-[0_18px_50px_-38px_rgba(0,0,0,0.55)]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-subtle">
            Signals
          </p>
          <div className="mt-4 grid gap-2">
            {["customers", "market", "team", "buyers"].map((label, index) => (
              <div key={label} className="flex items-center gap-2">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: index === 0 ? "#245CFF" : "#D8D6D0" }}
                />
                <span className="text-xs font-medium text-muted">{label}</span>
              </div>
            ))}
          </div>
          <div className="mt-5 h-2 rounded-full bg-[#eceae4]">
            <div className="h-2 w-[58%] rounded-full bg-[#245CFF]" />
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-[#d7dcff] bg-white shadow-[0_18px_50px_-34px_rgba(36,92,255,0.75)]">
            <div className="absolute inset-3 rounded-full bg-[#245CFF]/10" />
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#245CFF] text-white">
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden>
                <path d="M7 13h2m4-6v12m-8-8v4m12-6v8m4-5h-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-[#d7dcff] bg-white p-4 shadow-[0_22px_60px_-40px_rgba(36,92,255,0.7)]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-subtle">
            Usable context
          </p>
          <h3 className="mt-3 text-xl font-semibold leading-tight text-ink">
            What to build, say, sell, or fix next.
          </h3>
          <div className="mt-4 grid gap-2">
            {["follow-up depth", "buyer language", "objections", "agent input"].map((item) => (
              <div key={item} className="flex items-center justify-between gap-3 rounded-lg bg-[#f8f7f4] px-3 py-2">
                <span className="text-xs font-medium text-ink">{item}</span>
                <span className="h-1.5 w-14 rounded-full bg-[#245CFF]/70" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function SolutionVisual({ variant }: { variant: VisualVariant }) {
  const config = configs[variant];

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#f8f7f4] p-4 text-left text-ink md:p-6">
      <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full opacity-70 blur-3xl" style={{ backgroundColor: config.soft }} />
      <div className="absolute -bottom-14 left-8 h-36 w-36 rounded-full bg-[#245CFF]/10 blur-3xl" />

      <div className="relative h-full rounded-2xl border border-[#e6e3dd] bg-white/92 p-4 shadow-[0_22px_70px_-48px_rgba(0,0,0,0.65)] md:p-5">
        <div className="flex items-center justify-between gap-3">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-subtle">
            {config.eyebrow}
          </p>
          <span className="rounded-full px-2.5 py-1 text-[10px] font-semibold" style={{ backgroundColor: config.soft, color: config.dark }}>
            Context ready
          </span>
        </div>

        <h3 className="mt-4 max-w-[420px] text-2xl font-semibold leading-[1.05] tracking-tight text-ink md:text-3xl">
          {config.title}
        </h3>
        <p className="mt-2 max-w-[430px] text-xs leading-5 text-muted md:text-sm">
          {config.subtitle}
        </p>

        <div className="mt-5 grid gap-2">
          {config.rows.map((row, index) => (
            <div key={row.label} className="rounded-xl border border-[#eceae4] bg-[#fbfaf7] p-3">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-ink">{row.label}</p>
                  <p className="mt-0.5 text-[11px] leading-4 text-muted">{row.note}</p>
                </div>
                <span className="text-sm font-semibold" style={{ color: index === 0 ? config.accent : config.dark }}>
                  {row.value}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-xl border border-[#d7dcff] bg-[#f7f8ff] p-3">
          <div className="flex items-start gap-2">
            <span className="mt-1 h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: config.accent }} />
            <p className="text-xs font-medium leading-5 text-ink">
              {config.quote}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function UseCaseCardVisual({ variant }: { variant: VisualVariant }) {
  const config = configs[variant];

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#f8f7f4]">
      <div className="absolute inset-x-4 top-5 rounded-2xl border border-white/70 bg-white/85 p-4 shadow-[0_18px_50px_-35px_rgba(0,0,0,0.7)]">
        <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-subtle">
          {config.eyebrow}
        </p>
        <div className="mt-4 grid gap-2">
          {config.rows.slice(0, 3).map((row, index) => (
            <div key={row.label} className="flex items-center gap-2">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: index === 0 ? config.accent : "#c9c4ba" }}
              />
              <div className="h-2 flex-1 rounded-full bg-[#e9e6df]">
                <div
                  className="h-2 rounded-full"
                  style={{
                    width: index === 0 ? "82%" : index === 1 ? "54%" : "38%",
                    backgroundColor: index === 0 ? config.accent : "#8f8b82",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-20 left-5 right-5 rounded-2xl border border-[#e6e3dd] bg-white/90 p-4">
        <h3 className="text-2xl font-semibold leading-none tracking-tight text-ink">
          {config.title}
        </h3>
        <p className="mt-2 text-xs leading-5 text-muted">{config.subtitle}</p>
      </div>

      <div
        className="absolute -bottom-24 -right-20 h-56 w-56 rounded-full opacity-80 blur-2xl"
        style={{ backgroundColor: config.soft }}
      />
      <div className="absolute bottom-28 right-7 flex h-12 w-12 items-center justify-center rounded-full bg-[#245CFF] text-white shadow-[0_18px_40px_-20px_rgba(36,92,255,0.9)]">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
          <path d="M6 11h10M12 7l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}

export function AlternativesVisual() {
  const tools = [
    { label: "Forms", x: "14%", y: "68%", tone: "muted" },
    { label: "Surveys", x: "32%", y: "56%", tone: "muted" },
    { label: "Testing", x: "54%", y: "42%", tone: "muted" },
    { label: "Repos", x: "68%", y: "30%", tone: "muted" },
    { label: "Lemma", x: "74%", y: "18%", tone: "accent" },
  ];

  return (
    <div className="relative aspect-[5/4] overflow-hidden rounded-[18px] border border-[#e6e3dd] bg-[#f8f7f4] p-5 text-left shadow-[0_28px_80px_-58px_rgba(0,0,0,0.65)]">
      <div className="absolute -right-16 -top-12 h-40 w-40 rounded-full bg-[#245CFF]/15 blur-3xl" />
      <div className="absolute -bottom-14 left-8 h-36 w-36 rounded-full bg-[#FFB547]/20 blur-3xl" />
      <div className="relative h-full rounded-2xl border border-[#e6e3dd] bg-white/92 p-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-subtle">
          Tool fit map
        </p>
        <h3 className="mt-3 text-2xl font-semibold leading-tight text-ink">
          Choose by context depth.
        </h3>

        <div className="relative mt-6 h-[58%] rounded-xl border border-[#eceae4] bg-[#fbfaf7]">
          <div className="absolute inset-x-5 bottom-8 h-px bg-[#d8d6d0]" />
          <div className="absolute bottom-5 left-8 top-5 w-px bg-[#d8d6d0]" />
          <div className="absolute bottom-7 left-8 right-5 h-20 rounded-full bg-[linear-gradient(90deg,rgba(36,92,255,0.05),rgba(36,92,255,0.22))] blur-xl" />
          {tools.map((tool) => (
            <div
              key={tool.label}
              className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full px-3 py-1.5 text-xs font-semibold shadow-[0_12px_30px_-24px_rgba(0,0,0,0.7)] ${
                tool.tone === "accent"
                  ? "bg-[#245CFF] text-white"
                  : "border border-[#e6e3dd] bg-white text-muted"
              }`}
              style={{ left: tool.x, top: tool.y }}
            >
              {tool.label}
            </div>
          ))}
          <p className="absolute bottom-3 right-5 text-[10px] font-semibold uppercase tracking-[0.12em] text-subtle">
            more context
          </p>
          <p className="absolute left-4 top-5 -rotate-90 text-[10px] font-semibold uppercase tracking-[0.12em] text-subtle">
            more depth
          </p>
        </div>

        <div className="mt-4 rounded-xl border border-[#d7dcff] bg-[#f7f8ff] p-3">
          <p className="text-xs font-medium leading-5 text-ink">
            Use Lemma when the next useful question depends on what someone just said.
          </p>
        </div>
      </div>
    </div>
  );
}

export function PricingFlowVisual() {
  return (
    <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-[18px] border border-[#e6e3dd] bg-[#f8f7f4] p-3 text-left shadow-[0_26px_80px_-62px_rgba(0,0,0,0.7)]">
      <div className="grid gap-3 rounded-[14px] border border-[#e6e3dd] bg-white p-4 md:grid-cols-3">
        {[
          ["Conversation credits", "Completed adaptive conversations"],
          ["Context workflows", "Market, product, sales, support"],
          ["Usable outputs", "Briefs, patterns, quotes, next actions"],
        ].map(([title, body], index) => (
          <div key={title} className="rounded-xl bg-[#fbfaf7] p-4">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#245CFF] text-xs font-semibold text-white">
                {index + 1}
              </span>
              <h3 className="text-sm font-semibold text-ink">{title}</h3>
            </div>
            <p className="mt-3 text-xs leading-5 text-muted">{body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

type WorkflowKind = "generic" | "demo" | "feedback";

const workflowConfig: Record<
  WorkflowKind,
  {
    eyebrow: string;
    title: string;
    signal: string;
    followUp: string;
    output: string;
    rows: string[];
  }
> = {
  generic: {
    eyebrow: "Context workflow",
    title: "From first signal to usable intelligence",
    signal: "Customer, buyer, user, or stakeholder signal",
    followUp: "Adaptive voice follow-up",
    output: "Brief, patterns, quotes, next actions",
    rows: ["Need", "Reason", "Objection", "Workflow", "Next step"],
  },
  demo: {
    eyebrow: "Sales context",
    title: "Turn self-serve demand into a buyer brief",
    signal: "Demo request, pricing view, invite spike",
    followUp: "Why now? What changed? What blocks the next step?",
    output: "Intent, urgency, fit, objections, recommended follow-up",
    rows: ["Intent", "Urgency", "Use case", "Stakeholders", "Objection"],
  },
  feedback: {
    eyebrow: "Feedback context",
    title: "Turn a score or comment into the moment behind it",
    signal: "NPS, churn reason, support tag, product comment",
    followUp: "What happened? What did you expect? What should change?",
    output: "Situation, impact, repeated themes, useful quotes",
    rows: ["Moment", "Expectation", "Impact", "Friction", "Fix"],
  },
};

export function WorkflowContextVisual({ kind = "generic" }: { kind?: WorkflowKind }) {
  const config = workflowConfig[kind];

  return (
    <div className="relative overflow-hidden rounded-[18px] border border-[#e6e3dd] bg-[#f8f7f4] p-4 text-left shadow-[0_28px_80px_-58px_rgba(0,0,0,0.65)]">
      <div className="absolute -left-10 top-8 h-32 w-32 rounded-full bg-[#245CFF]/12 blur-3xl" />
      <div className="absolute -bottom-12 right-8 h-36 w-36 rounded-full bg-[#FFB547]/18 blur-3xl" />

      <div className="relative rounded-2xl border border-[#e6e3dd] bg-white/92 p-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-subtle">
          {config.eyebrow}
        </p>
        <h3 className="mt-3 max-w-xl text-2xl font-semibold leading-tight tracking-tight text-ink md:text-3xl">
          {config.title}
        </h3>

        <div className="mt-6 grid gap-3 md:grid-cols-[0.82fr_0.56fr_0.92fr] md:items-stretch">
          <div className="rounded-xl border border-[#eceae4] bg-[#fbfaf7] p-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-subtle">
              Signal
            </p>
            <p className="mt-3 text-sm font-semibold leading-5 text-ink">
              {config.signal}
            </p>
            <div className="mt-5 grid gap-2">
              {config.rows.slice(0, 3).map((row, index) => (
                <div key={row} className="flex items-center gap-2">
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: index === 0 ? "#245CFF" : "#c9c4ba" }}
                  />
                  <span className="text-xs font-medium text-muted">{row}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex min-h-36 items-center justify-center rounded-xl border border-[#d7dcff] bg-[#f7f8ff] p-4">
            <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-[0_18px_45px_-32px_rgba(36,92,255,0.9)]">
              <div className="absolute h-16 w-16 rounded-full bg-[#245CFF]/10" />
              <svg width="58" height="42" viewBox="0 0 58 42" fill="none" aria-hidden>
                <path
                  d="M3 21c8-15 14-15 22 0s14 15 30 0"
                  stroke="#245CFF"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M3 21c8 15 14 15 22 0s14-15 30 0"
                  stroke="#FFB547"
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity="0.8"
                />
              </svg>
            </div>
          </div>

          <div className="rounded-xl border border-[#eceae4] bg-white p-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-subtle">
              Output
            </p>
            <p className="mt-3 text-sm font-semibold leading-5 text-ink">
              {config.output}
            </p>
            <div className="mt-5 rounded-lg bg-[#f8f7f4] p-3">
              <p className="text-xs font-medium leading-5 text-muted">
                {config.followUp}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ContextLayerImageVisual() {
  return (
    <div className="relative overflow-hidden rounded-[18px] border border-[#e6e3dd] bg-[#f8f7f4] p-2 shadow-[0_28px_90px_-58px_rgba(0,0,0,0.68)]">
      <Image
        src="/assets/context-layer-visual.png"
        alt="Human conversations flowing through an adaptive voice layer into structured context for teams and agents."
        width={1672}
        height={941}
        sizes="(min-width: 1024px) 640px, 100vw"
        className="aspect-[16/9] w-full rounded-[12px] object-cover"
        priority
      />
    </div>
  );
}

export function ContextPulseVisual() {
  return (
    <div className="relative overflow-hidden rounded-[18px] border border-[#e6e3dd] bg-[#f8f7f4] p-4 text-left shadow-[0_24px_70px_-58px_rgba(0,0,0,0.7)]">
      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#245CFF]/12 blur-3xl" />
      <div className="relative rounded-2xl border border-[#e6e3dd] bg-white p-4">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-subtle">
          Context path
        </p>
        <div className="mt-4 grid gap-3">
          {[
            ["Question", "what needs to be understood"],
            ["Conversation", "the follow-up that gets to why"],
            ["Context", "the input people and agents can use"],
          ].map(([title, body], index) => (
            <div key={title} className="grid grid-cols-[1.75rem_1fr] gap-3">
              <span
                className={`mt-0.5 flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold ${
                  index === 1 ? "bg-[#245CFF] text-white" : "bg-[#f8f7f4] text-muted"
                }`}
              >
                {index + 1}
              </span>
              <div>
                <p className="text-sm font-semibold leading-5 text-ink">{title}</p>
                <p className="mt-0.5 text-xs leading-5 text-muted">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function BlogContextVisual() {
  return (
    <div className="relative overflow-hidden rounded-[18px] border border-[#e6e3dd] bg-[#f8f7f4] p-4">
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#245CFF]/15 blur-3xl" />
      <div className="relative rounded-2xl border border-[#e6e3dd] bg-white p-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-subtle">
          Thesis system
        </p>
        <div className="mt-5 grid gap-3">
          {[
            ["AI made building cheap", "output is no longer scarce"],
            ["Context is the moat", "what to build, say, sell, fix"],
            ["Adaptive conversation", "the next input for AI-native teams"],
          ].map(([title, body], index) => (
            <div key={title} className="flex gap-3 rounded-xl border border-[#eceae4] bg-[#fbfaf7] p-3">
              <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: index === 1 ? "#245CFF" : "#c9c4ba" }} />
              <div>
                <h3 className="text-sm font-semibold text-ink">{title}</h3>
                <p className="mt-1 text-xs leading-5 text-muted">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
