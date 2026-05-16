"use client";

import { useState } from "react";
import { BillingToggle } from "./BillingToggle";
import { PricingPlans } from "./PricingPlans";

export function PricingSection() {
  const [annual, setAnnual] = useState(true);
  return (
    <>
      <div className="mt-8 mb-10 flex justify-center">
        <BillingToggle annual={annual} onChange={setAnnual} />
      </div>
      <div className="mx-auto max-w-[1280px] px-6 pb-20 md:px-10 md:pb-28">
        <PricingPlans annual={annual} />
      </div>
    </>
  );
}
