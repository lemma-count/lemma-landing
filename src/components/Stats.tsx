const stats = [
  { value: "100+", body: "voice interviews in parallel, with no scheduling." },
  { value: "10x", body: "richer answers through AI-led follow-ups." },
  { value: "Minutes", body: "to first insights, not weeks of manual analysis." },
];

export function Stats() {
  return (
    <section className="border-t border-border bg-white">
      <div className="mx-auto max-w-[1280px] px-6 py-16 md:px-10 md:py-24">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-subtle">
            Why it pays off
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-10 text-center md:grid-cols-3">
          {stats.map((s) => (
            <div key={s.value} className="flex flex-col items-center">
              <div className="text-5xl font-medium tracking-tight text-ink md:text-6xl">
                {s.value}
              </div>
              <p className="mt-3 max-w-[18rem] text-sm leading-6 text-muted">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
