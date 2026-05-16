import { TrackedDetails } from "./TrackedDetails";

type Item = { q: string; a: string };

export function FAQ({ items, title = "F.A.Q." }: { items: Item[]; title?: string }) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-6 py-20 md:px-10 md:py-28">
        <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-5xl">
          {title}
        </h2>
        <ul className="mt-10 divide-y divide-border border-t border-border">
          {items.map((it) => (
            <li key={it.q}>
              <TrackedDetails question={it.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-medium text-ink">
                  <span>{it.q}</span>
                  <span
                    aria-hidden
                    className="relative h-4 w-4 shrink-0 text-muted"
                  >
                    <span className="absolute inset-x-0 top-1/2 h-[1.5px] -translate-y-1/2 bg-current" />
                    <span className="absolute inset-y-0 left-1/2 w-[1.5px] -translate-x-1/2 bg-current transition-transform group-open:rotate-90" />
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
                  {it.a}
                </p>
              </TrackedDetails>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
