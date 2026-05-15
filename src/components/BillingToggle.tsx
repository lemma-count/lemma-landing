"use client";

import { useState } from "react";

export function BillingToggle() {
  const [annual, setAnnual] = useState(true);
  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-border bg-white p-1 text-sm">
      <button
        type="button"
        onClick={() => setAnnual(false)}
        className={`rounded-full px-4 py-1.5 transition-colors ${
          !annual
            ? "bg-neutral-100 text-ink"
            : "text-muted hover:text-ink"
        }`}
        aria-pressed={!annual}
      >
        Monthly
      </button>
      <button
        type="button"
        onClick={() => setAnnual(true)}
        className={`rounded-full px-4 py-1.5 transition-colors ${
          annual ? "bg-neutral-100 text-ink" : "text-muted hover:text-ink"
        }`}
        aria-pressed={annual}
      >
        Annually (save 20%)
      </button>
    </div>
  );
}
