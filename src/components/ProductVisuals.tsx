import {
  ArrowRightIcon,
  CalendarCheckIcon,
  ChatCircleDotsIcon,
  CheckCircleIcon,
  ClockIcon,
  EyeIcon,
  LightningIcon,
  LinkedinLogoIcon,
  PaperPlaneTiltIcon,
  PauseCircleIcon,
  ShieldCheckIcon,
  SlidersHorizontalIcon,
  SparkleIcon,
  TargetIcon,
  UserCircleCheckIcon,
} from "@phosphor-icons/react/dist/ssr";

const prospects = [
  { initials: "AM", name: "Alex Morgan", company: "Northstar", score: "92" },
  { initials: "SK", name: "Sam Kim", company: "Orbit Labs", score: "87" },
  { initials: "JR", name: "Jordan Reed", company: "Fieldwork", score: "81" },
] as const;

export function HeroJourneyVisual() {
  return (
    <div
      role="img"
      aria-label="Illustration of Lemma adapting an outbound conversation from prospect research to a booked meeting."
      className="grid h-full grid-cols-1 bg-[#F6F8FC] sm:min-h-[300px] sm:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)]"
    >
      <div className="hidden border-r border-[#E1E7F0] bg-white p-3 sm:block lg:p-4">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#6B778A]">Prospects</span>
          <span className="rounded-full bg-[#EEF3FF] px-2 py-1 text-[9px] font-semibold text-brand-klein">Prioritized</span>
        </div>
        <div className="mt-3 space-y-2">
          {prospects.map((prospect, index) => (
            <div
              key={prospect.name}
              className={`rounded-[9px] border p-2.5 ${index === 0 ? "border-brand-klein/28 bg-[#F7F9FF] shadow-[0_10px_24px_-20px_rgba(0,47,167,0.8)]" : "border-[#E7EAF0] bg-white"}`}
            >
              <div className="flex items-center gap-2.5">
                <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[9px] font-semibold ${index === 0 ? "bg-brand-klein text-white" : "bg-[#EEF1F5] text-[#546175]"}`}>
                  {prospect.initials}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[10px] font-semibold text-ink lg:text-[11px]">{prospect.name}</p>
                  <p className="truncate text-[9px] text-[#748094]">{prospect.company}</p>
                </div>
                <span className="text-[9px] font-semibold text-brand-klein">{prospect.score}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden p-3 sm:p-4 lg:p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.13em] text-brand-klein">Alex Morgan · Northstar</p>
            <p className="mt-1 text-xs font-semibold text-ink sm:text-sm">A path built around this prospect</p>
          </div>
          <span className="flex shrink-0 items-center gap-1 rounded-full bg-[#EAF7EE] px-2 py-1 text-[9px] font-semibold text-[#347A4A]">
            <SparkleIcon size={10} weight="fill" aria-hidden /> Active
          </span>
        </div>

        <div className="relative mt-4 pl-5 sm:mt-5 sm:pl-6">
          <span className="absolute bottom-3 left-[7px] top-3 w-px bg-gradient-to-b from-brand-klein via-brand-klein/45 to-[#63A878] sm:left-[9px]" aria-hidden />
          <JourneyRow icon={<TargetIcon size={12} weight="bold" />} label="Researched role and company" detail="Expansion is the likely trigger" />
          <JourneyRow icon={<PaperPlaneTiltIcon size={12} weight="bold" />} label="Opened with relevant context" detail="No generic template" />
          <JourneyRow icon={<ChatCircleDotsIcon size={12} weight="bold" />} label="Reply showed interest" detail="Answered the question, then qualified" />
          <JourneyRow icon={<CalendarCheckIcon size={12} weight="bold" />} label="Meeting booked" detail="Tue, 10:30 · context ready" complete />
        </div>
      </div>
    </div>
  );
}

function JourneyRow({
  icon,
  label,
  detail,
  complete = false,
}: {
  icon: React.ReactNode;
  label: string;
  detail: string;
  complete?: boolean;
}) {
  return (
    <div className="relative mb-3 last:mb-0 sm:mb-4">
      <span className={`absolute -left-5 top-0.5 flex h-4 w-4 items-center justify-center rounded-full sm:-left-6 sm:h-5 sm:w-5 ${complete ? "bg-[#58A96F] text-white" : "bg-brand-klein text-white"}`} aria-hidden>
        {icon}
      </span>
      <p className="text-[10px] font-semibold leading-4 text-ink sm:text-[11px]">{label}</p>
      <p className="text-[9px] leading-4 text-[#748094] sm:text-[10px]">{detail}</p>
    </div>
  );
}

export function PrioritizationVisual() {
  return (
    <VisualFrame label="Audience strategy" icon={<TargetIcon size={13} weight="bold" />}>
      <div className="flex items-center justify-between border-b border-[#E7EAF0] pb-2.5">
        <span className="flex items-center gap-1.5 text-[10px] font-semibold text-ink">
          <LinkedinLogoIcon size={13} weight="fill" className="text-[#0A66C2]" aria-hidden /> LinkedIn search
        </span>
        <span className="text-[9px] font-medium text-[#6E7A8E]">128 imported</span>
      </div>
      <div className="mt-3 space-y-2">
        {["Strong match · active trigger", "Strong match · shared context", "Good match · research next"].map((label, index) => (
          <div key={label} className="flex items-center gap-2 rounded-lg border border-[#E7EAF0] bg-white p-2">
            <span className={`h-6 w-6 rounded-full ${["bg-[#DDE7FF]", "bg-[#E8EDF4]", "bg-[#F2E9E2]"][index]}`} />
            <span className="min-w-0 flex-1 truncate text-[9px] font-medium text-[#536075]">{label}</span>
            <span className="rounded bg-[#EEF3FF] px-1.5 py-0.5 text-[8px] font-semibold text-brand-klein">{["92", "87", "81"][index]}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-1.5 rounded-lg bg-brand-night px-2.5 py-2 text-[9px] font-medium text-white">
        <SparkleIcon size={11} weight="fill" className="text-brand-signal" aria-hidden /> Start with the 34 strongest opportunities
      </div>
    </VisualFrame>
  );
}

export function AdaptiveConversationVisual() {
  return (
    <VisualFrame label="Live prospect reasoning" icon={<LightningIcon size={13} weight="fill" />}>
      <div className="rounded-lg border border-[#E3E8F1] bg-[#F8FAFD] p-2.5">
        <p className="text-[8px] font-semibold uppercase tracking-[0.12em] text-[#718096]">Signal detected</p>
        <p className="mt-1 text-[10px] font-semibold leading-4 text-ink">Asked whether the service supports a distributed team</p>
      </div>
      <div className="my-2 flex items-center gap-2 pl-2 text-[8px] font-semibold uppercase tracking-[0.12em] text-brand-klein">
        <span className="h-px flex-1 bg-brand-klein/24" /> Lemma decides <ArrowRightIcon size={10} weight="bold" />
      </div>
      <div className="rounded-lg border border-brand-klein/22 bg-[#F3F6FF] p-2.5">
        <p className="text-[8px] font-semibold uppercase tracking-[0.12em] text-brand-klein">Next action</p>
        <p className="mt-1 text-[10px] font-semibold leading-4 text-ink">Answer directly, reference their hiring model, then ask one qualifying question</p>
      </div>
      <div className="mt-2 flex items-center justify-between text-[8px] font-medium text-[#6E7A8E]">
        <span className="flex items-center gap-1"><ClockIcon size={10} /> Timing: now</span>
        <span>Path updated automatically</span>
      </div>
    </VisualFrame>
  );
}

export function HandoverVisual() {
  return (
    <VisualFrame label="Qualified handover" icon={<UserCircleCheckIcon size={13} weight="fill" />}>
      <div className="flex items-center gap-2.5 rounded-lg border border-[#DCEFE2] bg-[#F2FAF4] p-2.5">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#58A96F] text-white"><CheckCircleIcon size={16} weight="fill" /></span>
        <div>
          <p className="text-[10px] font-semibold text-ink">Meeting booked</p>
          <p className="text-[9px] text-[#587064]">Tuesday · 10:30 AM</p>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        <ContextItem label="Why now" value="Expanding into Europe" />
        <ContextItem label="Need" value="Consistent pipeline" />
        <ContextItem label="Concern" value="Small internal team" />
        <ContextItem label="Intent" value="Actively evaluating" />
      </div>
      <p className="mt-3 flex items-center gap-1.5 text-[9px] font-semibold text-brand-klein">
        Full conversation and context ready <ArrowRightIcon size={10} weight="bold" />
      </p>
    </VisualFrame>
  );
}

function ContextItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-[#E7EAF0] bg-white p-2">
      <p className="text-[7px] font-semibold uppercase tracking-[0.1em] text-[#7A8698]">{label}</p>
      <p className="mt-1 text-[9px] font-medium leading-3.5 text-ink">{value}</p>
    </div>
  );
}

function VisualFrame({ label, icon, children }: { label: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div role="img" aria-label={`Illustrative Lemma product view: ${label}.`} className="h-full rounded-[8px] bg-[#F6F8FC] p-3 sm:p-4">
      <div className="flex items-center gap-2 border-b border-[#E1E7F0] pb-2.5 text-[10px] font-semibold text-ink">
        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#EAF0FF] text-brand-klein" aria-hidden>{icon}</span>
        {label}
      </div>
      <div className="mt-3">{children}</div>
    </div>
  );
}

const controls = [
  { icon: <LightningIcon size={14} weight="fill" />, label: "Run autonomously", value: "On", accent: true },
  { icon: <ShieldCheckIcon size={14} weight="fill" />, label: "Approve before sending", value: "Off", accent: false },
  { icon: <EyeIcon size={14} weight="fill" />, label: "Show every decision", value: "On", accent: true },
] as const;

export function ControlVisual() {
  return (
    <div role="img" aria-label="Illustration of Lemma autonomy settings, approval rules, activity history, and pause control." className="overflow-hidden rounded-[10px] border border-[#E2E7EF] bg-[#F6F8FC]">
      <div className="flex items-center justify-between border-b border-[#E1E7F0] bg-white px-4 py-3">
        <span className="flex items-center gap-2 text-[11px] font-semibold text-ink"><SlidersHorizontalIcon size={14} weight="bold" className="text-brand-klein" /> Operating rules</span>
        <span className="rounded-full bg-[#EAF7EE] px-2 py-1 text-[9px] font-semibold text-[#347A4A]">Mission active</span>
      </div>
      <div className="grid gap-3 p-3 sm:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] sm:p-4">
        <div className="space-y-2">
          {controls.map((control) => (
            <div key={control.label} className="flex items-center gap-2.5 rounded-lg border border-[#E2E7EF] bg-white p-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#EEF3FF] text-brand-klein">{control.icon}</span>
              <span className="min-w-0 flex-1 text-[10px] font-semibold text-ink">{control.label}</span>
              <span className={`relative h-4 w-7 rounded-full ${control.accent ? "bg-brand-klein" : "bg-[#CDD4DF]"}`}>
                <span className={`absolute top-0.5 h-3 w-3 rounded-full bg-white shadow ${control.accent ? "right-0.5" : "left-0.5"}`} />
                <span className="sr-only">{control.value}</span>
              </span>
            </div>
          ))}
          <div className="flex items-center justify-between rounded-lg border border-[#E2E7EF] bg-white p-2.5 text-[10px] font-semibold text-ink">
            <span className="flex items-center gap-2"><PauseCircleIcon size={14} className="text-[#6B778A]" /> Pause anytime</span>
            <span className="text-[9px] text-[#7A8698]">Available</span>
          </div>
        </div>
        <div className="hidden rounded-lg border border-[#E2E7EF] bg-white p-3 sm:block">
          <p className="text-[8px] font-semibold uppercase tracking-[0.12em] text-[#718096]">Recent decisions</p>
          <div className="mt-3 space-y-3">
            <ActivityLine title="Replied to pricing question" time="2m" />
            <ActivityLine title="Prioritized 8 prospects" time="18m" />
            <ActivityLine title="Booked a meeting" time="1h" complete />
          </div>
        </div>
      </div>
    </div>
  );
}

function ActivityLine({ title, time, complete = false }: { title: string; time: string; complete?: boolean }) {
  return (
    <div className="flex gap-2">
      <span className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${complete ? "bg-[#EAF7EE] text-[#347A4A]" : "bg-[#EEF3FF] text-brand-klein"}`}>
        {complete ? <CheckCircleIcon size={10} weight="fill" /> : <SparkleIcon size={9} weight="fill" />}
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-[9px] font-semibold leading-4 text-ink">{title}</p>
        <p className="text-[8px] text-[#7A8698]">{time} ago</p>
      </div>
    </div>
  );
}
