import Image from "next/image";
import { TrackedLink } from "./TrackedLink";
import { SolutionVisual, type VisualVariant } from "./ContextVisuals";

type Feature = { title: string; body: string };

export type SolutionPageProps = {
  hero: {
    title: string;
    body: string;
    ctaLabel: string;
    ctaHref: string;
    visual?: VisualVariant;
    cardImage?: string;
    cardImageAlt?: string;
    backgroundClass?: string;
  };
  feature: {
    title: string;
    body: string;
    visual?: VisualVariant;
    image?: string;
    imageAlt?: string;
    backgroundClass?: string;
    items: Feature[];
  };
};

const defaultHeroBg = "bg-[#f8f7f4]";

const defaultFeatureBg = "bg-[#f8f7f4]";

export function SolutionPage({ hero, feature }: SolutionPageProps) {
  return (
    <main>
      <section className="bg-white">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 px-6 py-16 md:grid-cols-2 md:gap-16 md:px-10 md:py-28">
          <div>
            <h1 className="text-balance text-5xl font-semibold leading-[0.98] tracking-tight text-ink md:text-7xl">
              {hero.title}
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-base leading-7 text-muted md:text-lg md:leading-8">
              {hero.body}
            </p>
            <TrackedLink
              href={hero.ctaHref}
              event="cta_click"
              eventProps={{ label: hero.ctaLabel, page: "solution", location: "hero" }}
              className="mt-8 inline-flex items-center justify-center rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white shadow-[0_12px_22px_-14px_rgba(61,80,255,0.9)] transition-colors hover:bg-[#2f3fd6]"
            >
              {hero.ctaLabel}
            </TrackedLink>
          </div>

          <div
            className={`relative aspect-[5/4] w-full overflow-hidden rounded-[18px] border border-[#e6e3dd] md:aspect-[6/5] ${hero.backgroundClass ?? defaultHeroBg}`}
          >
            <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8">
              {hero.visual ? (
                <SolutionVisual variant={hero.visual} />
              ) : hero.cardImage && hero.cardImageAlt ? (
                <Image
                  src={hero.cardImage}
                  alt={hero.cardImageAlt}
                  width={1300}
                  height={780}
                  priority
                  className="h-auto w-full max-w-[640px] rounded-xl border border-[#e6e3dd]"
                />
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 px-6 py-20 md:grid-cols-2 md:gap-16 md:px-10 md:py-28">
          <div
            className={`relative order-2 aspect-square w-full overflow-hidden rounded-[18px] border border-[#e6e3dd] md:order-1 ${feature.backgroundClass ?? defaultFeatureBg}`}
          >
            <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8">
              {feature.visual ? (
                <SolutionVisual variant={feature.visual} />
              ) : feature.image && feature.imageAlt ? (
                <Image
                  src={feature.image}
                  alt={feature.imageAlt}
                  width={1300}
                  height={1300}
                  loading="eager"
                  className="h-auto w-full max-w-[520px] rounded-xl border border-[#e6e3dd]"
                />
              ) : null}
            </div>
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-balance text-4xl font-semibold leading-[1.02] tracking-tight text-ink md:text-6xl">
              {feature.title}
            </h2>
            <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-muted md:text-lg md:leading-8">
              {feature.body}
            </p>
            <div className="mt-10 grid gap-3">
              {feature.items.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[18px] border border-[#e6e3dd] bg-white p-5"
                >
                  <h3 className="text-base font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
