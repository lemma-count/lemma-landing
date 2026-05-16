import type { Metadata } from "next";
import Link from "next/link";
import { TrackedLink } from "@/components/TrackedLink";

export const metadata: Metadata = {
  title: "Operations Manager Sample Report",
  description:
    "A fictional sample report showing how Lemma turns an operations interview into a practical AI work plan.",
};

const navItems = [
  { id: "read-first", label: "Read first", num: "I" },
  { id: "what-you-said", label: "What you said", num: "II" },
  { id: "where-ai-fits", label: "Where AI fits", num: "III" },
  { id: "watch-first", label: "What to watch", num: "IV" },
  { id: "first-test", label: "First test", num: "V" },
  { id: "tool-needs", label: "Tool needs", num: "VI" },
  { id: "keep-yourself", label: "Keep deciding", num: "VII" },
  { id: "prompt", label: "Your prompt", num: "VIII" },
  { id: "next", label: "What comes next", num: "IX" },
];

export default function OperationsManagerSample() {
  return (
    <>
      <main className="pb-28">
        {/* Breadcrumb */}
        <div className="border-b border-border px-6 py-3 md:px-10">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-muted">
            <Link href="/report" className="transition-colors hover:text-ink">Report</Link>
            <span aria-hidden>/</span>
            <Link href="/report/samples" className="transition-colors hover:text-ink">Samples</Link>
            <span aria-hidden>/</span>
            <span className="text-ink">Operations Manager</span>
          </nav>
        </div>

        {/* Page hero */}
        <section className="border-b border-border px-6 py-16 text-center md:px-10 md:py-20">
          <div className="mx-auto max-w-[1280px]">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
              Fictional sample report
            </p>
            <h1 className="mx-auto mt-4 max-w-[900px] text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-ink md:text-6xl">
              Where AI Fits Your Work: Operations Manager
            </h1>
            <p className="mx-auto mt-6 max-w-[640px] text-lg leading-relaxed text-muted">
              A sample report for someone who coordinates projects, writes
              weekly updates, and turns scattered work context into clear next
              steps.
            </p>
          </div>
        </section>

        {/* Doc layout */}
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-0 px-6 py-12 md:grid-cols-[230px_1fr] md:gap-16 md:px-10 md:py-16">
          {/* Sticky sidebar nav */}
          <aside className="hidden md:block">
            <nav
              className="sticky py-4"
              style={{ top: "calc(var(--header-h, 126px) + 12px)" }}
              aria-label="Report contents"
            >
              <span className="block text-[11px] font-bold uppercase tracking-[0.14em] text-subtle">
                Contents
              </span>
              {navItems.map(({ id, label, num }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="group mt-4 grid grid-cols-[28px_1fr] gap-3 py-2 text-sm text-muted transition-colors hover:text-ink first-of-type:mt-4"
                >
                  <span className="text-subtle">{num}</span>
                  {label}
                </a>
              ))}
            </nav>
          </aside>

          {/* Main content */}
          <article className="border-t border-border md:border-l md:border-t-0 md:pl-16">
            <Section id="read-first" label="01 — Read this first">
              <h2>
                Your time is lost before you start writing, not while you write.
              </h2>
              <p>
                Every Friday, before you write a word, you spend 30 to 45
                minutes doing archaeology: scanning Slack for the final project
                status, re-reading meeting notes for the one decision that
                actually changed, checking who is still blocked. By the time
                the inputs are assembled, the writing is almost obvious. That
                reconstruction step is where the time goes — and it is the
                step AI can help with most.
              </p>
              <p>
                AI cannot fix scattered sources. It cannot pull from three
                tools at once or know which Slack message was the real decision
                versus the one that got overruled. But once you have assembled
                the inputs into one structured note, it can compress the
                writing step from two hours to twenty minutes. That is the test.
              </p>
              <ul className="mt-5 grid gap-3">
                <Li>The problem: you hold the context across four tools and three departments — no single source reflects what actually happened.</Li>
                <Li>The opportunity: a writing assistant can turn structured notes into a first draft you edit, not a blank page you fill.</Li>
                <Li>The constraint: AI will write confidently even when the input is incomplete — you are the only check on what gets promised.</Li>
              </ul>
            </Section>

            <Section id="what-you-said" label="02 — What you told me">
              <h2>Work profile</h2>
              <p>
                You manage day-to-day operations for a 45-person services
                company. Your week runs across client delivery, finance,
                support, and leadership. Most of it is coordination: tracking
                the latest status, surfacing blockers before they become
                problems, reminding owners, and turning distributed context
                into updates people can act on.
              </p>
              <table className="mt-6 w-full border-collapse text-sm">
                <thead>
                  <tr className="border-t border-border">
                    <Th>Task</Th>
                    <Th>Frequency</Th>
                    <Th>Current effort</Th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border">
                    <Td>Weekly operations update</Td>
                    <Td>Every Friday</Td>
                    <Td>2 to 3 hours</Td>
                  </tr>
                  <tr className="border-t border-border">
                    <Td>Meeting follow-ups</Td>
                    <Td>4 to 6 times per week</Td>
                    <Td>20 to 30 minutes each</Td>
                  </tr>
                  <tr className="border-t border-border">
                    <Td>Project status checks</Td>
                    <Td>Daily</Td>
                    <Td>30 to 45 minutes</Td>
                  </tr>
                  <tr className="border-t border-border">
                    <Td>Leadership summary</Td>
                    <Td>Weekly</Td>
                    <Td>60 to 90 minutes</Td>
                  </tr>
                </tbody>
              </table>
              <h3>From the interview</h3>
              <p>
                &ldquo;I spend too much time figuring out what actually changed
                before I can write the update.&rdquo;
              </p>
              <h3>What this means</h3>
              <p>
                The update itself is not the hard part. The hard part is the
                30 minutes before: the scroll through Slack, the re-read of
                three meeting notes, the mental reconstruction of which version
                of the project status is current. Once you know what happened,
                you already know most of what the update should say. AI
                addresses that second half — the drafting — not the first half.
                But the first half is where most of the time goes.
              </p>
              <p>
                This is important because it sets the right expectation for
                what the first test will and will not fix.
              </p>
            </Section>

            <Section id="where-ai-fits" label="03 — Where AI fits your work">
              <h2>
                One tool, one task. Add the second only if the first works.
              </h2>
              <p>
                The biggest mistake at this stage is starting with three tools
                at once. The Friday update is the right first test — it is
                frequent enough to measure, structured enough to prompt, and
                low-stakes enough to send with a review step.
              </p>
              <table className="mt-6 w-full border-collapse text-sm">
                <thead>
                  <tr className="border-t border-border">
                    <Th>When</Th>
                    <Th>Tool type</Th>
                    <Th>Task</Th>
                    <Th>Why it fits</Th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border">
                    <Td>Start now</Td>
                    <Td>Writing assistant</Td>
                    <Td>Draft the Friday operations update</Td>
                    <Td>Structured format, predictable audience, you review before sending.</Td>
                  </tr>
                  <tr className="border-t border-border">
                    <Td>After 2 weeks</Td>
                    <Td>Meeting notes tool</Td>
                    <Td>Capture decisions and follow-ups during calls</Td>
                    <Td>Reduces reconstruction time. Test on internal meetings first, not client calls.</Td>
                  </tr>
                  <tr className="border-t border-border">
                    <Td>After 4 weeks</Td>
                    <Td>Research assistant</Td>
                    <Td>Pre-brief before recurring reviews</Td>
                    <Td>Worth trying only if meetings still feel underprepared after the first two phases.</Td>
                  </tr>
                  <tr className="border-t border-border">
                    <Td>Skip for now</Td>
                    <Td>Workflow automation</Td>
                    <Td>Auto-routing tasks across teams</Td>
                    <Td>Your work requires too much contextual judgment for automation to be reliable yet.</Td>
                  </tr>
                </tbody>
              </table>
            </Section>

            <Section id="watch-first" label="04 — What to watch first">
              <h2>
                AI writes confident drafts. Confident drafts get reviewed less carefully.
              </h2>
              <p>
                The weekly update reaches leadership. It may contain deadlines
                your team is expected to hit, owner names who will be held
                accountable, and status language that becomes the official
                record. AI will write all of this confidently, whether or not
                the underlying notes support it.
              </p>
              <h3>Three things to verify before every send</h3>
              <p>
                Deadlines: did you set that date, or did AI infer it from
                context? Check every number against what you actually know to
                be true.
              </p>
              <p>
                Owners: are those the real decision-makers, or just the names
                that appeared most often in the notes? A name in the update
                implies accountability. Make sure that is intentional.
              </p>
              <p>
                Escalations: is what the draft flagged as a blocker what you
                actually want leadership to focus on? AI will surface what
                looks biggest in the text. You know what is actually urgent.
              </p>
              <h3>Keep sensitive information out of outside tools</h3>
              <p>
                Do not paste client names, private financial details, employee
                issues, or confidential project information into a tool your
                company has not approved. When in doubt, use role labels
                and project codes instead of real names.
              </p>
            </Section>

            <Section id="first-test" label="05 — Your first test">
              <h2>
                Draft one Friday update from a structured note. Measure the time.
              </h2>
              <p>
                This is the right first test because the failure mode is
                visible and recoverable. If the draft is wrong, you catch it
                in review. If it saves time, you will know immediately. Do not
                start with meeting follow-ups or leadership summaries — those
                carry more relationship risk.
              </p>
              <ol className="mt-5 grid gap-3 counter-reset-[report-step]">
                <Ol>Before Friday, write one note covering: each active project (one status sentence each), current blockers with owner names, decisions made this week, and open questions that need answers next week.</Ol>
                <Ol>Remove anything that would identify clients by name or expose internal conflict. Replace client names with role labels if needed.</Ol>
                <Ol>Open a writing assistant in a separate browser tab — not in a tool connected to your company files unless it is approved for that use.</Ol>
                <Ol>Paste the note and the prompt from section VIII. Ask for a draft with four sections: Wins, Blockers, Decisions, Next actions.</Ol>
                <Ol>Read every deadline, owner, and commitment in the draft. Change anything that does not match what you know to be accurate.</Ol>
                <Ol>Measure: did the full process — note, prompt, review, edit — take less than 60 minutes? If the update normally takes 2 hours, that is a pass. If it took longer than writing from scratch, the input was probably too sparse.</Ol>
              </ol>
            </Section>

            <Section id="tool-needs" label="06 — What the tool needs">
              <h2>The draft quality is determined entirely by the input quality.</h2>
              <p>
                A writing assistant does not know what changed this week. It
                only knows what you tell it. Vague input produces vague output.
                Specific input — with real statuses, actual decisions, and
                named blockers — produces a draft you can edit in 10 minutes
                instead of 45.
              </p>
              <h3>What good input looks like</h3>
              <p>
                Here is one project entry from a well-structured note:
              </p>
              <pre className="mt-4 whitespace-pre-wrap border border-border bg-neutral-50 p-5 text-sm leading-[1.62] text-ink">
{`Project: Client onboarding workflow overhaul
Status: 80% done. Design handoff complete. Dev is waiting on legal sign-off for data retention language.
Blocker: Legal review delayed by 2 weeks. No hard date yet.
Owner: [Ops lead]
Decision made this week: If legal takes more than 3 more weeks, we launch without the data retention update.
Open question: Does [CEO] know we may launch without full compliance on this feature?
Risk level: Medium — this is client-facing.`}
              </pre>
              <p>
                Four to six entries at this level of specificity is enough for
                a strong first draft. The tool cannot infer risk levels,
                decision rationale, or open questions — you have to provide
                those explicitly or they will be missing from the output.
              </p>
              <h3>Tone</h3>
              <p>
                Ask for calm and direct. No dramatic language, no vague
                praise, no long introductions. The update should be easy to
                scan in 90 seconds. If leadership has to read twice, it is
                too long or too dense.
              </p>
              <h3>One example is enough</h3>
              <p>
                Include one past update you were satisfied with. The tool will
                calibrate to your format. Add a second example only if the
                tone of the first draft is noticeably off.
              </p>
            </Section>

            <Section id="keep-yourself" label="07 — What to keep deciding yourself">
              <h2>AI prepares the update. You still own the signal.</h2>
              <h3>What gets escalated</h3>
              <p>
                AI will surface what looks biggest in the notes. You decide
                what deserves leadership attention — because escalating
                something changes priorities, shifts focus, and creates
                expectations that did not exist before. That judgment belongs
                to you. No draft should escalate something you have not
                consciously decided to escalate.
              </p>
              <h3>What gets promised</h3>
              <p>
                AI will phrase things as commitments if the notes contain
                dates and owner names. You approve every deadline, owner, and
                promise before the update goes out. Those details affect trust
                across the team in ways that outlast any single update.
              </p>
              <h3>What gets left out</h3>
              <p>
                AI will shorten by removing what looks least important in the
                text. You decide what is actually safe to omit — because the
                detail that seems minor in a note is sometimes the thing
                someone in leadership is specifically watching for. Omissions
                have consequences that additions do not.
              </p>
              <h3>What tone gets used</h3>
              <p>
                The draft will sound professional but neutral. If a situation
                requires careful framing — a delayed project, a difficult
                client, a team conflict — that framing has to come from you.
                AI does not know what is politically sensitive in your
                organization.
              </p>
            </Section>

            <Section id="prompt" label="08 — Your prompt">
              <h2>Copy this into a writing assistant.</h2>
              <p>
                Fill in every bracketed section before submitting. The quality
                of the output depends entirely on how specific the input is.
                Leave a section blank only if it genuinely does not apply this
                week — not because it takes a minute to fill in.
              </p>
              <pre className="mt-6 whitespace-pre-wrap border border-border bg-neutral-50 p-6 text-sm leading-[1.62] text-ink">
{`Context: I am an Operations Manager preparing the weekly update for [AUDIENCE — e.g. leadership team, all-hands, direct manager]. The update covers [TIME PERIOD — e.g. Mon–Fri this week] and should help readers understand what progressed, what is blocked, what was decided, and what needs to happen next.

Draft a weekly operations update from the notes below.

Project notes:
[FOR EACH ACTIVE PROJECT: one paragraph with status, blocker if any, owner, any decision made, any open question, risk level]

Other context:
[PASTE ANY RELEVANT SLACK MESSAGES, MEETING DECISIONS, OR FOLLOW-UPS]

Tone and format:
- Four sections: Wins, Blockers, Decisions, Next actions
- Keep the update under [TARGET LENGTH — e.g. 300 words, one page]
- Calm and direct. No dramatic language. Easy to scan.
- Do not invent metrics, deadlines, owner names, or commitments not in the notes.
- Do not include client names or confidential detail unless it appears in the notes.

Reference:
[PASTE ONE PAST UPDATE YOU WERE HAPPY WITH — so the tool can match your format]

Before writing the draft: list any place where the notes are missing information that would normally appear in this type of update. I will fill in the gaps before you draft.`}
              </pre>
            </Section>

            <Section id="next" label="09 — What comes next">
              <h2>Three weeks, not three tools.</h2>
              <p>
                Week one: run the test on one Friday update. Keep the note
                short and structured. Measure whether the review-and-send step
                took less than half your usual time. If it did, and the draft
                still sounded like you, the test passed.
              </p>
              <p>
                Week two: if the update worked, apply the same structure to
                meeting follow-ups. Use the same approach — one structured
                note per meeting, decisions and action items only, no raw
                transcript. Keep the risk level the same: internal meetings
                before client-facing ones.
              </p>
              <p>
                Week three: decide whether this is now part of the permanent
                workflow or still an experiment. The threshold is simple —
                does the output still sound like you, does it save at least
                45 minutes per week, and have you caught any errors in review
                that would have been embarrassing if sent? If yes to the first
                two and no to the third, keep going.
              </p>
              <p>
                If the test did not work, the most likely cause is sparse
                input. Go back to the note format in section VI and add more
                specificity before trying a different tool. The tool is rarely
                the problem at this stage.
              </p>
            </Section>
          </article>
        </div>
      </main>

      {/* Sticky bottom CTA */}
      <div className="border-t border-border bg-white/95 px-6 py-4 backdrop-blur-sm md:sticky md:bottom-0 md:z-20 md:flex md:items-center md:justify-between md:gap-4 md:px-10">
        <p className="text-sm font-semibold text-ink">
          Want one for your work?
          <span className="block font-normal text-subtle md:ml-2 md:inline">
            $9.99 — about 10 minutes — report link sent by email
          </span>
        </p>
        <TrackedLink
          href="https://app.heylemma.com"
          event="cta_click"
          eventProps={{ label: "Get my report", page: "sample_ops_manager", location: "sticky_bottom" }}
          className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#2f3fd6] md:mt-0 md:w-auto"
        >
          Get my report — $9.99
        </TrackedLink>
      </div>
    </>
  );
}

function Section({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="border-t border-border py-14 first:border-t-0 first:pt-0 [&>h2]:mt-5 [&>h2]:text-3xl md:[&>h2]:text-4xl [&>h2]:font-semibold [&>h2]:leading-[1.06] [&>h2]:tracking-tight [&>h2]:text-ink [&>h3]:mt-7 [&>h3]:text-lg [&>h3]:font-semibold [&>h3]:text-ink [&>p]:mt-4 [&>p]:text-base [&>p]:leading-[1.62] [&>p]:text-muted"
    >
      <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted">
        {label}
      </p>
      {children}
    </section>
  );
}

function Li({ children }: { children: React.ReactNode }) {
  return (
    <li className="relative pl-5 text-base leading-[1.62] text-muted before:absolute before:left-0 before:font-bold before:text-accent before:content-['+']">
      {children}
    </li>
  );
}

function Ol({ children }: { children: React.ReactNode }) {
  return (
    <li className="relative pl-7 text-base leading-[1.62] text-muted [counter-increment:report-step] before:absolute before:left-0 before:font-bold before:text-accent before:content-[counter(report-step)_'.']">
      {children}
    </li>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th className="px-3 py-3 text-left text-[11px] font-bold uppercase tracking-[0.12em] text-ink first:pl-0">
      {children}
    </th>
  );
}

function Td({ children }: { children: React.ReactNode }) {
  return (
    <td className="px-3 py-4 align-top text-sm leading-[1.45] text-muted first:pl-0">
      {children}
    </td>
  );
}
