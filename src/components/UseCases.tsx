"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { track } from "@vercel/analytics";

const useCases = [
  {
    title: "Founders",
    body: "to find where the market is pulling before betting more runway.",
    href: "/founders",
    image: "/assets/solution-founders-context.png",
    imageAlt: "Founder and cofounder reviewing customer interview notes in a startup workspace.",
  },
  {
    title: "Product",
    body: "to know what to build, fix, kill, or prioritize next.",
    href: "/product-growth",
    image: "/assets/solution-product-context.png",
    imageAlt: "Product team observing a user research session and reviewing notes together.",
  },
  {
    title: "Marketing",
    body: "to capture buyer language, proof, objections, and category framing.",
    href: "/marketing",
    image: "/assets/solution-marketing-context.png",
    imageAlt: "Product marketing team sorting customer notes and campaign concepts in a creative studio.",
  },
  {
    title: "Sales",
    body: "to turn PLG and self-serve signals into buyer context.",
    href: "/sales",
    image: "/assets/solution-sales-context.png",
    imageAlt: "Sales teammates preparing for a buyer call with notes and an account plan.",
  },
  {
    title: "Customer success",
    body: "to surface churn risk, activation friction, and expansion signals.",
    href: "/customer-success",
    image: "/assets/use-case-cx.png",
    imageAlt: "Customer success manager on a headset reviewing customer notes during a support conversation.",
  },
  {
    title: "Consultants",
    body: "to turn stakeholder conversations into structured evidence.",
    href: "/consultants",
    image: "/assets/solution-consultants-context.png",
    imageAlt: "Consultant facilitating a stakeholder workshop with client decision makers.",
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
    <section className="overflow-x-clip border-t border-border bg-white">
      <div className="mx-auto max-w-[1280px] px-6 pt-16 pb-24 md:px-10 md:pt-20 md:pb-32">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.16em] text-subtle">
              Use cases
            </p>
            <h2 className="max-w-4xl text-balance text-4xl font-semibold leading-[1.02] tracking-tight text-ink md:text-6xl">
              AI makes everyone faster. Context tells you what is worth doing.
            </h2>
          </div>
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
                className="relative aspect-[3/4] w-[78vw] flex-none snap-start overflow-hidden rounded-[18px] border border-[#e6e3dd] bg-white md:w-[28%]"
              >
                <Link
                  href={u.href}
                  onClick={() => track("use_case_click", { title: u.title, href: u.href })}
                  className="group relative block h-full"
                >
                  <Image
                    src={u.image}
                    alt={u.imageAlt}
                    fill
                    sizes="(min-width: 768px) 28vw, 78vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/88 via-black/54 to-transparent p-5 pt-24 text-white">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-base font-semibold">{u.title}</h3>
                      <span
                        aria-hidden
                        className="shrink-0 text-lg leading-none transition-transform group-hover:translate-x-0.5"
                      >
                        →
                      </span>
                    </div>
                    <p className="mt-1 text-sm leading-5 text-white/85">{u.body}</p>
                  </div>
                </Link>
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
