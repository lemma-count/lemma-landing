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
      <Nav />
    </div>
  );
}
