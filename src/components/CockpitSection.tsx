import { ControlVisual } from "./ProductVisuals";

export function CockpitSection() {
  return (
    <section
      id="control"
      className="overflow-hidden border-t border-border bg-landing-surface text-ink"
    >
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-20 sm:px-8 md:py-24 lg:grid-cols-[minmax(320px,0.82fr)_minmax(0,1.18fr)] lg:items-center lg:gap-20 lg:px-10 lg:py-28">
        <div className="landing-reveal max-w-[600px]">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.14em] text-subtle">
            Your rules, your account
          </p>
          <h2 className="text-balance text-[2.85rem] font-medium leading-[0.98] tracking-[-0.024em] sm:text-[3.55rem] lg:text-[4rem]">
            Autonomous by default. Under your control.
          </h2>
          <p className="mt-7 max-w-[560px] text-pretty text-base leading-7 text-muted sm:text-lg sm:leading-8">
            Let Lemma run independently, or require approval where you want it. See every decision, step into any conversation, change the strategy, or pause the work at any time.
          </p>
        </div>

        <div className="landing-reveal min-w-0">
          <div className="overflow-hidden rounded-[16px] border border-border bg-white p-2.5 shadow-[0_26px_64px_-48px_rgba(4,16,42,0.4)] sm:p-3">
            <div className="aspect-[4/3] overflow-hidden rounded-[10px] sm:aspect-video">
              <ControlVisual />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
