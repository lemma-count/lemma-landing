import { TrackedDetails } from "./TrackedDetails";

export const landingFaqItems = [
  {
    q: "Is Lemma another LinkedIn automation tool?",
    a: "No. Traditional tools automate campaigns and sequences. Lemma decides what to do next for each prospect individually, adapting the message, timing, and next action as the conversation develops.",
  },
  {
    q: "Does Lemma send messages without my approval?",
    a: "By default, Lemma runs autonomously within the strategy and limits you define. You can require approval for specific actions, step into any conversation, or pause the work at any time.",
  },
  {
    q: "Does Lemma find prospects for me?",
    a: "You import prospects from LinkedIn or another trusted source. Lemma then helps you prioritize who to reach and shape the right strategy for each opportunity.",
  },
  {
    q: "Which channels does Lemma support?",
    a: "Lemma currently runs outbound through your LinkedIn account.",
  },
  {
    q: "What happens when a prospect is interested?",
    a: "Lemma continues the conversation, shares your booking link or coordinates a time, then gives you the full context before the meeting.",
  },
  {
    q: "Can I try Lemma for free?",
    a: "Yes. You can start without a credit card and use Lemma within the free usage limit before choosing a plan.",
  },
] as const;

export function LandingFaq() {
  return (
    <section id="faq" className="scroll-mt-20 border-t border-border bg-white text-ink">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-20 sm:px-8 md:py-24 lg:grid-cols-[minmax(280px,0.52fr)_minmax(0,0.88fr)] lg:gap-24 lg:px-10 lg:py-28">
        <div className="landing-reveal max-w-[520px]">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.14em] text-subtle">
            F.A.Q.
          </p>
          <h2 className="text-balance text-[2.85rem] font-medium leading-[0.98] tracking-[-0.024em] sm:text-[3.55rem] lg:text-[4rem]">
            The practical details.
          </h2>
        </div>

        <ul className="landing-reveal divide-y divide-border border-y border-border">
          {landingFaqItems.map((item) => (
            <li key={item.q}>
              <TrackedDetails question={item.q} className="group py-5 sm:py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-semibold text-ink sm:text-lg">
                  <span>{item.q}</span>
                  <span
                    aria-hidden
                    className="relative h-4 w-4 shrink-0 text-muted"
                  >
                    <span className="absolute inset-x-0 top-1/2 h-[1.5px] -translate-y-1/2 bg-current" />
                    <span className="absolute inset-y-0 left-1/2 w-[1.5px] -translate-x-1/2 bg-current transition-transform group-open:rotate-90" />
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-muted sm:text-base sm:leading-7">
                  {item.a}
                </p>
              </TrackedDetails>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
