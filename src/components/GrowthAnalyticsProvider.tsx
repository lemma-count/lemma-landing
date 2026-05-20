"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  initGrowthAnalytics,
  refreshGrowthAnalyticsProperties,
} from "@/lib/growth-analytics";

export function GrowthAnalyticsProvider() {
  const pathname = usePathname();

  useEffect(() => {
    if (initGrowthAnalytics()) {
      refreshGrowthAnalyticsProperties();
    }
  }, [pathname]);

  return null;
}
