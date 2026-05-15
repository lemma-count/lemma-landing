import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-black text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_80%_at_60%_30%,rgba(180,80,30,0.45),rgba(40,15,5,0.6)_45%,#000_75%)]"
      />
      <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-10 md:py-28">
        <div className="max-w-2xl">
          <Image
            src="/assets/logo-white.png"
            alt="Lemma"
            width={180}
            height={44}
            className="h-8 w-auto"
          />
          <p className="mt-5 text-base leading-7 text-white/75 md:text-lg md:leading-8">
            Tell Lemma what to keep learning. It interviews the right people and
            turns answers into evidence your team can act on.
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-neutral-200"
          >
            Contact us
            <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="mt-24 flex items-center justify-end border-t border-white/10 pt-6 text-xs text-white/60">
          <span>2026 · Lemma</span>
        </div>
      </div>
    </footer>
  );
}
