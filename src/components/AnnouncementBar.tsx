"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { track } from "@vercel/analytics";

const STORAGE_KEY = "report-bar-dismissed";

export function AnnouncementBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
  }, []);

  if (!visible) return null;

  return (
    <div className="relative bg-ink text-white text-sm py-2.5 px-6 text-center">
      <Link
        href="/report"
        className="hover:underline underline-offset-2"
        onClick={() => track("announcement_click")}
      >
        New: Get a personal AI work report — 10-minute voice interview, actionable plan. →
      </Link>
      <button
        onClick={() => {
          track("announcement_dismiss");
          localStorage.setItem(STORAGE_KEY, "1");
          setVisible(false);
        }}
        className="absolute right-5 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors"
        aria-label="Dismiss announcement"
      >
        ✕
      </button>
    </div>
  );
}
