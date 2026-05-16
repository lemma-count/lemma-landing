import type { Metadata } from "next";
import Link from "next/link";
import { TrackedLink } from "@/components/TrackedLink";

export const metadata: Metadata = {
  title: "Where AI Fits Your Work",
  description:
    "Talk for 10 minutes. Get a personal report showing where AI fits your real work, which tools to try, what to give them, and what to keep deciding yourself.",
};

const checkItems = [
  "Where AI fits your repeated work",
  "The first workflow to test this week",
  "Simple tools to try, matched to your context",
  "What to put into each tool",
  "What to leave out for privacy or quality",
  "Copy-paste prompts you can run yourself",
  "What you should still decide and review",
];

const proofQuotes = [
  {
    quote:
      "I know AI could help, but I do not know which part of my week to start with.",
    label: "Common interview moment",
  },
  {
    quote:
      "The task is not hard. It is just scattered across messages, notes, and follow-ups.",
    label: "Common interview moment",
  },
  {
    quote:
      "I need it to save time without sending something that sounds generic.",
    label: "Common interview moment",
  },
];

const steps = [
  {
    num: "01",
    title: "Talk about your work",
    body: "Answer questions about your role, repeated tasks, tools, examples, risks, and where time gets lost.",
  },
  {
    num: "02",
    title: "Lemma builds the report",
    body: "The interview becomes a transcript-grounded plan for where AI fits and what to test first.",
  },
  {
    num: "03",
    title: "Receive the link",
    body: "Your personal report link is sent by email within a few minutes after the interview.",
  },
];

const moreRoles = [
  {
    role: "Sales Representative",
    work: "Follow-ups, CRM notes, prospect research, meeting prep",
    test: "Draft post-call follow-up from notes",
  },
  {
    role: "Marketing Coordinator",
    work: "Campaign notes, content drafts, stakeholder updates",
    test: "Turn a campaign note into a weekly draft pack",
  },
  {
    role: "Customer Support Lead",
    work: "Ticket themes, issue summaries, internal updates",
    test: "Summarize recurring issues for the team",
  },
  {
    role: "Recruiter",
    work: "Candidate outreach, screening notes, interview packets",
    test: "Prepare candidate summaries from screen notes",
  },
  {
    role: "HR Manager",
    work: "Policy updates, onboarding notes, employee communication",
    test: "Turn a policy change into an employee note",
  },
  {
    role: "Finance Manager",
    work: "Budget explanations, variance comments, monthly updates",
    test: "Explain a spreadsheet change in plain English",
  },
];

const pricingItems = [
  "10-minute Lemma voice interview",
  "Personal report link sent by email",
  "First workflow to test this week",
  "Simple tool recommendations",
  "What the tools need from you",
  "Copy-paste prompts",
  "Privacy and review cautions",
];

const faqItems = [
  {
    q: "Do I need to know anything about AI?",
    a: "No. The interview is about your work. The report explains where AI fits in plain language.",
  },
  {
    q: "What kind of work is this for?",
    a: "It works best for people who write, summarize, research, review, prepare, coordinate, or turn messy notes into useful work.",
  },
  {
    q: "What do I get?",
    a: "A personal report with your first AI workflow, tools to try, what the tools need, risks to watch, and copy-paste prompts.",
  },
  {
    q: "How long does it take?",
    a: "The voice interview takes about 10 minutes. Your report link is sent by email within a few minutes.",
  },
  {
    q: "What tools might you recommend?",
    a: "Common recommendations include writing assistants, meeting tools, research tools, and workflow tools that fit your existing stack.",
  },
  {
    q: "What if my work is sensitive?",
    a: "The report flags what not to paste into outside tools. You should still follow your company, client, and legal rules.",
  },
  {
    q: "Do I need an account?",
    a: "No account is needed for the paid test. Pay, take the interview, and receive the report link by email.",
  },
  {
    q: "What if the report is not useful?",
    a: "If we cannot generate a useful report from your interview, the report is refunded.",
  },
];

export default function ReportPage() {
  return (
    <main>
      {/* Hero */}
      <section className="px-6 pt-16 pb-12 text-center md:px-10 md:pt-24 md:pb-16">
        <div className="mx-auto max-w-[920px]">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
            A personal AI work report
          </p>
          <h1 className="mt-5 text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-ink md:text-7xl">
            What should AI help you with at work?
          </h1>
          <p className="mx-auto mt-7 max-w-[610px] text-base leading-7 text-muted md:text-lg md:leading-8">
            Talk for 10 minutes. Get a personal report showing where AI fits
            your real work, which tools to try, what to give them, and what to
            keep deciding yourself.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <TrackedLink
              href="https://app.heylemma.com"
              event="cta_click"
              eventProps={{ label: "Get my report", page: "report", location: "hero" }}
              className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#2f3fd6]"
            >
              Get my report — $9.99
            </TrackedLink>
            <TrackedLink
              href="/report/samples/operations-manager"
              event="sample_click"
              eventProps={{ role: "operations-manager", location: "report_hero" }}
              className="inline-flex items-center justify-center rounded-md border border-border bg-white px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-neutral-50"
            >
              See sample report
            </TrackedLink>
          </div>
          <p className="mt-4 text-sm text-subtle">
            Report link sent by email within a few minutes. Refunds available.
          </p>
        </div>
      </section>

      {/* Product preview mockup */}
      <section className="mx-auto max-w-[1420px] px-6 pb-8 md:px-10" aria-label="Report product preview">
        <div className="grid grid-cols-[48px_1fr] overflow-hidden border border-border bg-white shadow-[0_18px_60px_rgba(0,0,0,0.08)]">
          {/* Rail */}
          <aside className="grid content-start justify-items-center gap-[22px] border-r border-border bg-white pt-[22px]" aria-hidden>
            <span className="h-4 w-4 rounded-full bg-accent" />
            <span className="h-4 w-4 rounded-sm border border-subtle" />
            <span className="h-4 w-4 rounded-sm border border-subtle" />
            <span className="h-4 w-4 rounded-sm border border-subtle" />
          </aside>
          {/* Window */}
          <div className="min-w-0">
            {/* Topbar */}
            <div className="flex min-h-[54px] items-center justify-between gap-5 border-b border-border px-5 text-xs text-muted">
              <div className="inline-flex items-center gap-2.5 text-ink font-medium text-sm">
                Where AI Fits Your Work
                <span className="inline-flex min-h-[20px] items-center rounded-full bg-[#ddf8eb] px-2 text-[10px] font-bold uppercase tracking-[0.05em] text-[#13734a]">
                  Sample
                </span>
              </div>
              <nav className="hidden items-center gap-1 md:flex" aria-label="Preview tabs">
                {["Review", "Responses", "Report", "Analysis", "Chat"].map((tab) => (
                  <Link
                    key={tab}
                    href="/report/samples/operations-manager"
                    className={`inline-flex min-h-[28px] items-center rounded-full px-2.5 text-xs ${
                      tab === "Report"
                        ? "bg-ink text-white"
                        : "text-muted hover:text-ink transition-colors"
                    }`}
                  >
                    {tab}
                  </Link>
                ))}
              </nav>
              <Link
                href="/report/samples/operations-manager"
                className="text-xs text-muted hover:text-ink transition-colors"
              >
                View sample
              </Link>
            </div>
            {/* Content grid */}
            <div className="grid min-h-[510px] grid-cols-1 md:grid-cols-[240px_1fr_290px]">
              {/* Left outline */}
              <aside className="hidden border-r border-border bg-white px-7 py-10 md:block">
                <span className="block mb-4 text-[11px] font-bold uppercase tracking-[0.12em] text-muted">
                  Contents
                </span>
                {["Read this first", "What you told me", "Where AI fits", "Your first test", "What the tool needs", "Your prompt"].map(
                  (item, i) => (
                    <Link
                      key={item}
                      href="/report/samples/operations-manager"
                      className={`block py-2.5 text-sm ${i === 0 ? "font-semibold text-ink" : "text-muted hover:text-ink transition-colors"}`}
                    >
                      {item}
                    </Link>
                  )
                )}
              </aside>
              {/* Center report */}
              <article className="px-8 py-14 md:px-16">
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-subtle">
                  Personal report
                </p>
                <h2 className="mt-5 w-full max-w-[540px] text-3xl font-semibold leading-[1.04] text-ink md:text-4xl">
                  Operations updates are your first AI test.
                </h2>
                <p className="mt-4 max-w-[610px] text-sm leading-relaxed text-muted">
                  The report turns a short voice interview into a practical work
                  plan: the repeated task to start with, the tools to try, the
                  inputs they need, and the checks that should stay with you.
                </p>
                <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-7 md:grid-cols-4">
                  {[
                    { dt: "Interview", dd: "10 minutes" },
                    { dt: "Output", dd: "Shareable report" },
                    { dt: "First test", dd: "One workflow" },
                    { dt: "Delivery", dd: "Email link" },
                  ].map(({ dt, dd }) => (
                    <div key={dt}>
                      <dt className="text-[10px] font-bold uppercase tracking-[0.12em] text-subtle">
                        {dt}
                      </dt>
                      <dd className="mt-2 text-sm text-ink">{dd}</dd>
                    </div>
                  ))}
                </dl>
              </article>
              {/* Right interview panel */}
              <aside className="hidden border-l border-border bg-neutral-50 px-6 py-10 md:block">
                <span className="block mb-4 text-[11px] font-bold uppercase tracking-[0.12em] text-muted">
                  Interview signals
                </span>
                {[
                  '"The source material is scattered."',
                  '"I still need to check promises and owners."',
                  '"If this saved one hour each Friday, I would keep using it."',
                ].map((q) => (
                  <p
                    key={q}
                    className="border-t border-border py-4 text-sm leading-[1.42] text-ink"
                  >
                    {q}
                  </p>
                ))}
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* Proof quotes */}
      <section className="border-t border-border px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
            {proofQuotes.map(({ quote, label }) => (
              <figure key={quote} className="border-t border-border pt-5">
                <blockquote className="text-base leading-[1.52] text-ink md:text-lg">
                  &ldquo;{quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 text-xs text-subtle">
                  {label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="border-t border-border px-6 py-20 md:px-10 md:py-28" id="what-you-get">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-[70px] md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                What you get
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-5xl">
                Not AI tips. A report from your actual work.
              </h2>
            </div>
            <ul className="border-t border-border">
              {checkItems.map((item) => (
                <li
                  key={item}
                  className="flex gap-4 border-b border-border py-5 text-base text-ink"
                >
                  <span className="font-bold text-accent">+</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Featured sample */}
      <section className="border-t border-border px-6 py-20 md:px-10 md:py-28" id="samples">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
              Sample report
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-5xl">
              Built around operational work everyone recognizes.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-stretch">
            <article className="flex min-h-[470px] flex-col border border-border bg-neutral-50 p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                Featured sample
              </p>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight text-ink">
                Operations Manager
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted">
                A report for someone who spends too much time turning Slack
                threads, meeting notes, and project updates into weekly summaries
                and follow-ups.
              </p>
              <Link
                href="/report/samples/operations-manager"
                className="mt-auto inline-flex w-fit items-center rounded-md border border-ink bg-ink px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
              >
                Read sample report
              </Link>
            </article>
            <div className="border border-border bg-white">
              {[
                { label: "Problem", value: "Status updates are slow because the source material is scattered." },
                { label: "First test", value: "Use AI to draft one weekly operations update from prepared notes." },
                { label: "Tool needs", value: "Project list, blockers, owner names, decisions, tone example, and deadline." },
                { label: "Keep deciding", value: "Priority, commitments, escalations, and anything sent to leadership." },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="grid min-h-[92px] grid-cols-[130px_1fr] gap-5 border-b border-border p-5 last:border-b-0 md:grid-cols-[150px_1fr]"
                >
                  <span className="text-[11px] font-bold uppercase tracking-[0.11em] text-subtle">
                    {label}
                  </span>
                  <strong className="text-base font-semibold leading-[1.32] text-ink">
                    {value}
                  </strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* More roles */}
      <section className="border-t border-border px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-14 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                More sample roles
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-5xl">
                For practical knowledge work, not only tech teams.
              </h2>
            </div>
            <p className="self-end text-base leading-relaxed text-muted">
              These roles keep the report relatable to people who use tools
              every day but do not see themselves as technical.
            </p>
          </div>
          <div className="border-t border-border">
            <div className="hidden grid-cols-[0.85fr_1.35fr_1.25fr] gap-6 border-b border-border py-3 text-[11px] font-bold uppercase tracking-[0.13em] text-subtle md:grid">
              <span>Role</span>
              <span>Repeated work</span>
              <span>First AI test</span>
            </div>
            {moreRoles.map(({ role, work, test }) => (
              <div
                key={role}
                className="grid grid-cols-1 gap-2 border-b border-border py-5 md:grid-cols-[0.85fr_1.35fr_1.25fr] md:gap-6"
              >
                <strong className="text-base font-semibold text-ink">
                  {role}
                </strong>
                <span className="text-sm text-muted">{work}</span>
                <span className="text-sm text-muted">{test}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="border-t border-border px-6 py-20 md:px-10 md:py-28" id="pricing">
        <div className="mx-auto max-w-[1280px]">
          <div className="mx-auto w-full max-w-[560px] border-2 border-ink bg-white p-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
              Pricing
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink">
              One report, one price.
            </h2>
            <div className="mt-7 text-8xl font-light leading-[0.98] text-ink">
              <sup className="align-super text-[0.32em]">$</sup>9.99
            </div>
            <p className="mt-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-subtle">
              per report
            </p>
            <ul className="my-8 border-t border-border text-left">
              {pricingItems.map((item) => (
                <li
                  key={item}
                  className="flex gap-4 border-b border-border py-3 text-sm text-ink"
                >
                  <span className="font-bold text-accent">+</span>
                  {item}
                </li>
              ))}
            </ul>
            <TrackedLink
              href="https://app.heylemma.com"
              event="cta_click"
              eventProps={{ label: "Get my report", page: "report", location: "pricing" }}
              className="inline-flex w-full items-center justify-center rounded-md bg-accent py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#2f3fd6]"
            >
              Get my report — $9.99
            </TrackedLink>
            <p className="mt-4 text-xs text-subtle">
              Refunded if we cannot generate a useful report from your
              interview.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-border px-6 py-20 md:px-10 md:py-28" id="how-it-works">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-14 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                How it works
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-5xl">
                From voice interview to work plan.
              </h2>
            </div>
            <p className="self-end text-base leading-relaxed text-muted">
              The process is built for people who want a practical answer
              quickly, not a long AI course or a complex setup.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {steps.map(({ num, title, body }) => (
              <article key={num} className="border-t border-border pt-6">
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-accent">
                  {num}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-ink">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why voice */}
      <section className="border-t border-border px-6 py-20 md:px-10 md:py-28" id="why-voice">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="border border-border bg-white p-7">
              <h3 className="text-xl font-semibold text-ink">
                A static form asks for the first answer.
              </h3>
              <ul className="mt-4 grid gap-3">
                {[
                  "What is your role?",
                  "What tools do you use?",
                  "What do you want AI to help with?",
                ].map((q) => (
                  <li key={q} className="text-sm text-muted">
                    {q}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-accent/40 bg-[#f6f7ff] p-7">
              <h3 className="text-xl font-semibold text-ink">
                A voice interview gets the useful part.
              </h3>
              <ul className="mt-4 grid gap-3">
                {[
                  "What happened the last time you did the task?",
                  "Where did the work slow down?",
                  "What does the tool need before it can help?",
                  "What would be risky to send without review?",
                ].map((q) => (
                  <li key={q} className="text-sm text-muted">
                    {q}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border px-6 py-20 md:px-10 md:py-28" id="faq">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
              Questions
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-5xl">
              Before you start.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-x-10 md:grid-cols-2">
            {faqItems.map(({ q, a }) => (
              <details key={q} className="group border-t border-border">
                <summary className="flex cursor-pointer list-none items-center justify-between py-5 text-base font-semibold text-ink">
                  {q}
                  <span className="text-subtle transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="pb-5 text-sm leading-relaxed text-muted">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-border px-6 py-24 text-center md:px-10 md:py-32">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="mx-auto max-w-[760px] text-4xl font-semibold tracking-tight text-ink md:text-6xl">
            Find your first useful AI workflow.
          </h2>
          <p className="mx-auto mt-5 max-w-[560px] text-base leading-relaxed text-muted">
            Talk through your real work. Get a simple plan for what to test
            first and how to start.
          </p>
          <TrackedLink
            href="https://app.heylemma.com"
            event="cta_click"
            eventProps={{ label: "Get my report", page: "report", location: "footer_cta" }}
            className="mt-7 inline-flex items-center rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#2f3fd6]"
          >
            Get my report — $9.99
          </TrackedLink>
        </div>
      </section>
    </main>
  );
}
