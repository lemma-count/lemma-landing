"use client";

import { useRef, useEffect } from "react";
import { Nav } from "./Nav";

export function SiteHeader() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    function update() {
      document.documentElement.style.setProperty(
        "--header-h",
        `${el!.offsetHeight}px`
      );
    }

    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={ref} className="sticky top-0 z-30">
      <div className="border-b border-[#e6e3dd] bg-[#f3f1eb]">
        <div className="mx-auto flex min-h-11 max-w-[1280px] items-center justify-center gap-2.5 px-6 py-2 text-center text-[13px] font-medium leading-5 text-ink md:px-10">
          <span className="shrink-0 rounded-full border border-[#e6e3dd] bg-white px-2.5 py-1 text-[11px] leading-none text-ink">
            BS Detector
          </span>
          <span>
            Before you pitch, launch, or bet on an idea, run it through the{" "}
            <span className="text-accent">BS Detector →</span>
          </span>
        </div>
      </div>
      <Nav />
    </div>
  );
}
