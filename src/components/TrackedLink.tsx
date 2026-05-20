"use client";

import Link from "next/link";
import { track } from "@vercel/analytics";
import type { ComponentProps } from "react";
import { trackGrowthCta } from "@/lib/growth-analytics";

type Props = ComponentProps<typeof Link> & {
  event: string;
  eventProps?: Record<string, string | number | boolean>;
};

export function TrackedLink({ event, eventProps, onClick, ...props }: Props) {
  const href =
    typeof props.href === "string"
      ? props.href
      : props.href.pathname ?? props.href.toString();

  return (
    <Link
      {...props}
      onClick={(e) => {
        track(event, eventProps);
        trackGrowthCta(event, {
          ...eventProps,
          cta_href: href,
        });
        onClick?.(e);
      }}
    />
  );
}
