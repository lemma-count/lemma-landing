export function ProblemStatement() {
  return (
    <section className="border-t border-border bg-white text-ink">
      <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-10 md:py-28">
        <div className="max-w-5xl">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.16em] text-subtle">
            The problem
          </p>
          <h2 className="max-w-4xl text-balance text-4xl font-semibold leading-[1.02] tracking-tight md:text-6xl">
            Teams are making expensive decisions from answers they never really
            understood.
          </h2>
          <div className="mt-8 grid max-w-4xl grid-cols-1 gap-5 text-base leading-7 text-muted md:grid-cols-2 md:gap-10 md:text-lg md:leading-8">
            <p>
              Human interviews reveal what people actually mean, but they are
              too slow to run at scale.
            </p>
            <p>
              Forms and surveys reach everyone, but they stop exactly when the
              insight starts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
