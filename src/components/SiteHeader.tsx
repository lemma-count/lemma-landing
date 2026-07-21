"use client";

import { useRef, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Nav } from "./Nav";

export function SiteHeader() {
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);

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

  useEffect(() => {
    if (!isHome) return;

    function updateScrollState() {
      setScrolled(window.scrollY > 24);
    }

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, [isHome]);

  return (
    <div
      ref={ref}
      className={isHome ? "fixed inset-x-0 top-0 z-30" : "sticky top-0 z-30"}
    >
      <Nav inverse={isHome && !scrolled} compact={isHome && scrolled} />
    </div>
  );
}
