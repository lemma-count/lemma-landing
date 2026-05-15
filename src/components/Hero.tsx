import Link from "next/link";

export function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-ink md:text-6xl">
            Talk to more of the people your business depends on.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-7 text-muted md:text-lg md:leading-8">
            Lemma runs AI-led voice conversations with customers, users,
            employees, buyers, partners, or stakeholders, then turns what they
            say into fast, transcript-grounded insights your team can act on.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <Link
              href="https://app.heylemma.com"
              className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#2f3fd6]"
            >
              Sign up
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-black px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
            >
              Try a voice interview
            </Link>
          </div>
        </div>

        <div className="mt-14 md:mt-20">
          <div className="mx-auto max-w-[1100px] overflow-hidden rounded-xl bg-neutral-100 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.25)] ring-1 ring-black/5">
            <video
              src="/assets/demo.mp4"
              controls
              playsInline
              preload="metadata"
              className="block aspect-[16/9] w-full bg-neutral-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
