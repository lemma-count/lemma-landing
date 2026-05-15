const stats = [
  { value: "100+", body: "voice interviews in parallel, with no scheduling." },
  { value: "10x", body: "richer answers through AI-led follow-ups." },
  { value: "Minutes", body: "to first insights, not weeks of manual analysis." },
];

export function Stats() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1280px] px-6 py-16 md:px-10 md:py-20">
        <div className="grid grid-cols-1 gap-10 text-center md:grid-cols-3">
          {stats.map((s) => (
            <div key={s.value} className="flex flex-col items-center">
              <div className="text-4xl font-medium text-ink md:text-5xl">
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
