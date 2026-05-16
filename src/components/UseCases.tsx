"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { track } from "@vercel/analytics";

const useCases = [
  {
    title: "Consultants & researchers",
    body: "to run more client, expert, customer, or employee interviews without adding calendar time.",
    image: "/assets/use-case-consultants.png",
  },
  {
    title: "Product",
    body: "to understand what customers need, what they struggle with, and which product changes matter most.",
    image: "/assets/use-case-product.png",
  },
  {
    title: "Customer success & CX",
    body: "to uncover why customers complain, downgrade, renew, churn, or stop engaging.",
    image: "/assets/use-case-cx.png",
  },
  {
    title: "Marketing & growth",
    body: "to learn how buyers describe the problem, evaluate options, and decide between you and the alternatives.",
    image: "/assets/use-case-marketing.png",
  },
  {
    title: "HR & people",
    body: "to hear what employees actually think before decisions on culture, performance, or retention are made.",
    image: "/assets/use-case-hr.png",
  },
];

export function UseCases() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  function updateButtons() {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  }

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateButtons();
    el.addEventListener("scroll", updateButtons, { passive: true });
    return () => el.removeEventListener("scroll", updateButtons);
  }, []);

  function scroll(dir: "prev" | "next") {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("ul > li");
    if (!card) return;
    const amount = card.getBoundingClientRect().width + 16;
    el.scrollBy({ left: dir === "next" ? amount : -amount, behavior: "smooth" });
    track("carousel_nav", { direction: dir });
  }

  return (
    <section className="overflow-x-clip bg-white">
      <div className="mx-auto max-w-[1280px] px-6 pt-16 pb-24 md:px-10 md:pt-20 md:pb-32">
        <div className="flex items-end justify-between gap-4">
          <h2 className="max-w-4xl text-balance text-4xl font-semibold leading-[1.02] tracking-tight text-ink md:text-6xl">
            For people who need better answers before making decisions.
          </h2>
          <div className="hidden shrink-0 items-center gap-2 md:flex">
            <button
              onClick={() => scroll("prev")}
              disabled={!canPrev}
              aria-label="Previous"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink transition-colors hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-30"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={() => scroll("next")}
              disabled={!canNext}
              aria-label="Next"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink transition-colors hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-30"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <div ref={trackRef} className="mt-8 -mx-6 overflow-x-auto px-6 md:-mx-10 md:px-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <ul className="flex snap-x snap-mandatory gap-4 pb-2">
            {useCases.map((u) => (
              <li
                key={u.title}
                className="relative aspect-[3/4] w-[78vw] flex-none snap-start overflow-hidden rounded-md bg-neutral-200 md:w-[28%]"
              >
                <Image
                  src={u.image}
                  alt={u.title}
                  fill
                  sizes="(min-width: 768px) 28vw, 78vw"
                  loading="eager"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/88 via-black/54 to-transparent p-5 pt-24 text-white">
                  <h3 className="text-base font-semibold">{u.title}</h3>
                  <p className="mt-1 text-sm leading-5 text-white/85">{u.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile scroll hint dots */}
        <div className="mt-4 flex justify-center gap-1.5 md:hidden" aria-hidden>
          {useCases.map((u) => (
            <span key={u.title} className="h-1 w-1 rounded-full bg-border" />
          ))}
        </div>
      </div>
    </section>
  );
}
