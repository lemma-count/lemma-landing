import type { Metadata } from "next";
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
                Your best first AI test is the weekly operations update.
              </h2>
              <p>
                Based on this fictional interview, the main bottleneck is not
                one hard task. It is the repeated effort of collecting scattered
                updates, finding what changed, and turning it into a clear
                message for the team.
              </p>
              <ul className="mt-5 grid gap-3">
                <Li>The problem: updates are spread across Slack, meetings, spreadsheets, and memory.</Li>
                <Li>The opportunity: AI can prepare a first draft from structured notes.</Li>
                <Li>The first step: test one weekly update before using AI for anything more sensitive.</Li>
              </ul>
            </Section>

            <Section id="what-you-said" label="02 — What you told me">
              <h2>Work profile</h2>
              <p>
                You manage day-to-day operations for a 45-person services
                company. You work across client delivery, finance, support, and
                leadership. Most of your week is coordination: finding the
                latest status, checking blockers, reminding owners, and writing
                updates people can act on.
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
              <h3>Pull quote</h3>
              <p>
                &ldquo;I spend too much time figuring out what actually changed
                before I can write the update.&rdquo;
              </p>
            </Section>

            <Section id="where-ai-fits" label="03 — Where AI fits your work">
              <h2>
                The useful work is preparation, not automatic sending.
              </h2>
              <table className="mt-6 w-full border-collapse text-sm">
                <thead>
                  <tr className="border-t border-border">
                    <Th>Tool category</Th>
                    <Th>Task</Th>
                    <Th>Benefit</Th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border">
                    <Td>Writing assistant</Td>
                    <Td>Draft weekly operations update</Td>
                    <Td>Turns structured notes into a first draft you can edit.</Td>
                  </tr>
                  <tr className="border-t border-border">
                    <Td>Meeting notes tool</Td>
                    <Td>Capture decisions and follow-ups</Td>
                    <Td>Reduces the amount you have to reconstruct after calls.</Td>
                  </tr>
                  <tr className="border-t border-border">
                    <Td>Research assistant</Td>
                    <Td>Prepare short context briefs</Td>
                    <Td>Summarizes background before recurring review meetings.</Td>
                  </tr>
                  <tr className="border-t border-border">
                    <Td>Workflow assistant</Td>
                    <Td>Turn tasks into checklist format</Td>
                    <Td>Makes handoffs clearer without changing the underlying system.</Td>
                  </tr>
                </tbody>
              </table>
            </Section>

            <Section id="watch-first" label="04 — What to watch first">
              <h2>
                The risk is not the draft. The risk is an unchecked commitment.
              </h2>
              <h3>Condition: use AI only before your review step.</h3>
              <p>
                The weekly update may include promises, deadlines,
                client-sensitive context, and internal issues. AI can help
                prepare the update, but it should not decide what gets escalated
                or promised to leadership.
              </p>
              <h3>Condition: remove sensitive details before using outside tools.</h3>
              <p>
                Do not paste client names, private financial details, employee
                issues, or confidential project information into an outside tool
                unless your company allows it.
              </p>
            </Section>

            <Section id="first-test" label="05 — Your first test">
              <h2>
                Draft one weekly operations update from a prepared note pack.
              </h2>
              <p>
                This is the right first test because it is frequent, structured,
                low enough risk with review, and painful enough that improvement
                will be noticeable.
              </p>
              <ol className="mt-5 grid gap-3 counter-reset-[report-step]">
                <Ol>Create one note with this week's projects, blockers, decisions, owners, and dates.</Ol>
                <Ol>Remove client names or sensitive internal details that do not need to be included.</Ol>
                <Ol>Paste the note into a writing assistant with the prompt below.</Ol>
                <Ol>Ask for a concise update with sections for wins, blockers, decisions, and next actions.</Ol>
                <Ol>Review every deadline, owner, metric, and promise before sending.</Ol>
                <Ol>Track whether the draft saved at least 45 minutes.</Ol>
              </ol>
            </Section>

            <Section id="tool-needs" label="06 — What the tool needs">
              <h2>The output improves when the input is specific.</h2>
              <h3>Context</h3>
              <p>
                Give the tool your audience, update purpose, time period, active
                projects, known blockers, decisions made, open questions, and
                the action you want readers to take.
              </p>
              <h3>Tone</h3>
              <p>
                Ask for a calm, direct update. Avoid dramatic language, vague
                praise, and long introductions. The message should be easy to
                scan.
              </p>
              <h3>Examples</h3>
              <p>
                Include one past update you were happy with. One example is
                enough for the first test. Add a second example only if the tone
                is still off.
              </p>
              <h3>Leave out</h3>
              <p>
                Leave out client names, employee issues, private financial
                details, confidential escalations, and anything your company
                would not allow in an outside tool.
              </p>
            </Section>

            <Section id="keep-yourself" label="07 — What to keep deciding yourself">
              <h2>AI can prepare the update. You still own the signal.</h2>
              <h3>What gets escalated</h3>
              <p>
                AI can list blockers. You still decide what deserves leadership
                attention, because escalation changes priorities and
                expectations.
              </p>
              <h3>What gets promised</h3>
              <p>
                AI can phrase commitments. You still approve dates, owners, and
                promises, because those details affect trust across the team.
              </p>
              <h3>What gets left out</h3>
              <p>
                AI can shorten the update. You still decide what to omit,
                because missing context can create confusion or hide risk.
              </p>
            </Section>

            <Section id="prompt" label="08 — Your prompt">
              <h2>Copy this into a writing assistant.</h2>
              <pre className="mt-6 whitespace-pre-wrap border border-border bg-neutral-50 p-6 text-sm leading-[1.62] text-ink">
{`The person using this prompt is an Operations Manager preparing a weekly update for [AUDIENCE]. The update covers [TIME PERIOD] and should help readers understand progress, blockers, decisions, and next actions.

Draft a weekly operations update from the notes below.

Input:
[PASTE PROJECT NOTES]
[PASTE BLOCKERS]
[PASTE DECISIONS MADE]
[PASTE OPEN QUESTIONS]
[PASTE OWNER NAMES OR SAFE ROLE LABELS]
[PASTE DEADLINES]
[PASTE ONE PAST UPDATE EXAMPLE, IF AVAILABLE]

Constraints:
Use four sections: Wins, Blockers, Decisions, Next actions.
Keep the update under [TARGET LENGTH].
Use calm, direct language.
Do not invent metrics, owners, dates, or commitments.
Do not include any client-sensitive or confidential detail unless it appears in the notes.

Before the final draft, list anything you are unsure about or any place where the notes are missing detail.`}
              </pre>
            </Section>

            <Section id="next" label="09 — What comes next">
              <h2>Keep the test small for one week.</h2>
              <p>
                If the update saves time and still sounds like your normal work,
                repeat it next Friday. Then test the same structure on meeting
                follow-ups.
              </p>
              <p className="mt-4">
                If it does not work, the likely problem is weak input. Add one
                good past example and make the project notes more structured
                before changing tools.
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
