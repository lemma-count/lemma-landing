"use client";

type Props = {
  annual: boolean;
  onChange: (annual: boolean) => void;
};

export function BillingToggle({ annual, onChange }: Props) {
  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-border bg-white p-1 text-sm">
      <button
        type="button"
        onClick={() => onChange(false)}
        className={`rounded-full px-4 py-1.5 transition-colors ${
          !annual ? "bg-neutral-100 text-ink" : "text-muted hover:text-ink"
        }`}
        aria-pressed={!annual}
      >
        Monthly
      </button>
      <button
        type="button"
        onClick={() => onChange(true)}
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
