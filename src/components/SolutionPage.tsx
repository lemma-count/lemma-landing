import Image from "next/image";
import Link from "next/link";

type Feature = { title: string; body: string };

export type SolutionPageProps = {
  hero: {
    title: string;
    body: string;
    ctaLabel: string;
    ctaHref: string;
    cardImage: string;
    cardImageAlt: string;
    backgroundClass?: string;
  };
  feature: {
    title: string;
    body: string;
    image: string;
    imageAlt: string;
    backgroundClass?: string;
    items: Feature[];
  };
};

const defaultHeroBg =
  "bg-[radial-gradient(120%_90%_at_60%_40%,#f3b9d7_0%,#cf67a5_30%,#5b2a47_65%,#23131c_100%)]";

const defaultFeatureBg =
  "bg-[radial-gradient(120%_90%_at_30%_50%,#a9d6c3_0%,#4a8c7f_35%,#1b443c_70%,#0e2823_100%)]";

export function SolutionPage({ hero, feature }: SolutionPageProps) {
  return (
    <main className="pt-8 md:pt-12">
      <section className="bg-white">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 px-6 py-12 md:grid-cols-2 md:gap-16 md:px-10 md:py-20">
          <div>
            <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-ink md:text-6xl">
              {hero.title}
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-base leading-7 text-muted md:text-lg md:leading-8">
              {hero.body}
            </p>
            <Link
              href={hero.ctaHref}
              className="mt-8 inline-flex items-center justify-center rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#2f3fd6]"
            >
              {hero.ctaLabel}
            </Link>
          </div>

          <div
            className={`relative aspect-[5/4] w-full overflow-hidden rounded-md md:aspect-[6/5] ${hero.backgroundClass ?? defaultHeroBg}`}
          >
            <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8">
              <Image
                src={hero.cardImage}
                alt={hero.cardImageAlt}
                width={1300}
                height={780}
                priority
                className="h-auto w-full max-w-[640px] rounded-xl shadow-[0_24px_60px_-24px_rgba(0,0,0,0.35)] ring-1 ring-black/5"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 px-6 py-16 md:grid-cols-2 md:gap-16 md:px-10 md:py-24">
          <div
            className={`relative order-2 aspect-square w-full overflow-hidden rounded-md md:order-1 ${feature.backgroundClass ?? defaultFeatureBg}`}
          >
            <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8">
              <Image
                src={feature.image}
                alt={feature.imageAlt}
                width={1300}
                height={1300}
                loading="eager"
                className="h-auto w-full max-w-[520px] rounded-xl shadow-[0_24px_60px_-24px_rgba(0,0,0,0.4)] ring-1 ring-black/5"
              />
            </div>
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-ink md:text-5xl">
              {feature.title}
            </h2>
            <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-muted md:text-lg md:leading-8">
              {feature.body}
            </p>
            <div className="mt-8 divide-y divide-border border-t border-border">
              {feature.items.map((item) => (
                <div key={item.title} className="py-6">
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
