export function ProblemStatement() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 px-6 py-20 md:grid-cols-[1.05fr_0.95fr] md:px-10 md:py-32">
        <h2 className="max-w-3xl text-balance text-4xl font-semibold leading-[1.02] tracking-tight md:text-6xl">
          Important decisions are still being made from shallow answers.
        </h2>
        <div className="max-w-xl self-end space-y-4 text-base leading-7 text-white/68 md:text-lg md:leading-8">
          <p>
            Teams have more dashboards, forms, reviews, tickets, CRM fields, and
            transcripts than ever. But when the decision matters, they still
            struggle to understand what people really meant, needed, felt, or
            decided.
          </p>
          <p>
            Manual interviews create that depth, but they are too slow to run
            for every important moment.
          </p>
        </div>
      </div>
    </section>
  );
}
