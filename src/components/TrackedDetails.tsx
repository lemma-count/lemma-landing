"use client";

import { track } from "@vercel/analytics";
import type { ComponentProps } from "react";

type Props = ComponentProps<"details"> & {
  question: string;
};

export function TrackedDetails({ question, onToggle, ...props }: Props) {
  return (
    <details
      {...props}
      onToggle={(e) => {
        if ((e.target as HTMLDetailsElement).open) {
          track("faq_open", { question });
        }
        onToggle?.(e);
      }}
    />
  );
}
