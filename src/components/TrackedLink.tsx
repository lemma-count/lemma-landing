"use client";

import Link from "next/link";
import { track } from "@vercel/analytics";
import type { ComponentProps } from "react";

type Props = ComponentProps<typeof Link> & {
  event: string;
  eventProps?: Record<string, string>;
};

export function TrackedLink({ event, eventProps, onClick, ...props }: Props) {
  return (
    <Link
      {...props}
      onClick={(e) => {
        track(event, eventProps);
        onClick?.(e);
      }}
    />
  );
}
