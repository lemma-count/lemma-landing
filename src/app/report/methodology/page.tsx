import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Methodology",
  description: "How Lemma turns a short voice interview into a practical AI work report.",
};

const sections = [
  {
    h: "1. The interview starts with your real work",
    paras: [
      "Lemma asks about your role, recurring tasks, current tools, examples, review steps, sensitive information, and where time gets lost.",
      "The goal is to capture enough concrete detail to recommend a specific first AI test, not to collect broad opinions about AI.",
    ],
  },
  {
    h: "2. The transcript is analyzed for work patterns",
    paras: [
      "The report looks for repeated tasks, structured inputs, frequent outputs, quality standards, risk points, and work that would noticeably improve if it became faster.",
    ],
    items: [
      "Repeated work gets priority over one-off tasks.",
      "Tasks with a clear input and output are easier to test.",
      "Tasks with serious consequences need a stronger review step.",
    ],
  },
  {
    h: "3. Tool recommendations start with category fit",
    paras: [
      "The report recommends categories first: writing assistant, meeting notes tool, research assistant, workflow tool, or role-specific tool.",
      "Specific tools are included only when they fit the person's workflow, existing tools, and privacy constraints.",
    ],
  },
  {
    h: "4. Benchmarks are used only when they change the advice",
    paras: [
      "Benchmarks should explain the person's position, not decorate the report. A statistic appears only when it helps answer what to do next.",
      "If a benchmark does not clarify the diagnosis or first test, it should be left out.",
    ],
  },
  {
    h: "5. The first test is deliberately narrow",
    paras: [
      "The report chooses one first workflow. The best first test is frequent, structured, low enough risk with review, and connected to a real frustration.",
      "The purpose is to help someone start this week, then decide from evidence whether it is worth continuing.",
    ],
  },
  {
    h: "6. The report separates preparation from decisions",
    paras: [
      "AI can draft, summarize, organize, compare, and turn notes into a starting point. The report also names what the person should still decide and review.",
      "This matters when work involves customers, money, deadlines, reputation, private company information, or messages sent externally.",
    ],
  },
  {
    h: "7. What the report does not claim",
    items: [
      "It does not guarantee time savings.",
      "It does not replace company policy or legal guidance.",
      "It does not say every task should be automated.",
      "It does not recommend tools that could not be connected to the transcript.",
    ],
  },
];

export default function MethodologyPage() {
  return (
    <main className="pb-28">
      <section className="border-b border-border px-6 py-16 text-center md:px-10 md:py-20">
        <div className="mx-auto max-w-[1280px]">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
            Methodology
          </p>
          <h1 className="mx-auto mt-4 max-w-[900px] text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-ink md:text-7xl">
            How the report is made.
          </h1>
          <p className="mx-auto mt-6 max-w-[640px] text-lg leading-relaxed text-muted">
            The report is designed to be practical, transcript-grounded, and
            specific to your work. It is not a generic AI advice sheet.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[820px] px-6 md:px-10">
        {sections.map(({ h, paras, items }) => (
          <section key={h} className="border-t border-border py-10">
            <h2 className="text-2xl font-semibold text-ink">{h}</h2>
            {paras?.map((p) => (
              <p key={p} className="mt-4 text-base leading-[1.64] text-muted">
                {p}
              </p>
            ))}
            {items && (
              <ul className="mt-4 grid gap-2.5">
                {items.map((item) => (
                  <li
                    key={item}
                    className="relative pl-5 text-base leading-[1.64] text-muted before:absolute before:left-0 before:font-bold before:text-accent before:content-['+']"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>

      <section className="border-t border-border px-6 py-24 text-center md:px-10 md:py-32">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="mx-auto max-w-[760px] text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            Get a plan from your own work.
          </h2>
          <p className="mx-auto mt-5 max-w-[560px] text-base leading-relaxed text-muted">
            Take the 10-minute interview and receive your report link by email.
          </p>
          <Link
            href="#"
            className="mt-7 inline-flex items-center rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#2f3fd6]"
          >
            Get my report — $9.99
          </Link>
        </div>
      </section>
    </main>
  );
}
