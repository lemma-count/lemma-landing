export function ProblemStatement() {
  return (
    <section className="border-t border-border bg-white text-ink">
      <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-10 md:py-28">
        <div className="max-w-5xl">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.16em] text-subtle">
            The problem
          </p>
          <h2 className="max-w-4xl text-balance text-4xl font-semibold leading-[1.02] tracking-tight md:text-6xl">
            Teams can build faster than they can understand the market.
          </h2>
          <div className="mt-8 grid max-w-4xl grid-cols-1 gap-5 text-base leading-7 text-muted md:grid-cols-2 md:gap-10 md:text-lg md:leading-8">
            <p>
              AI can generate products, pages, campaigns, docs, and workflows.
              It cannot fix shallow inputs.
            </p>
            <p>
              If your customer context is weak, every output gets faster
              without getting more true.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
