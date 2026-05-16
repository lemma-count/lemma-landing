import type { Metadata } from "next";
import { ReportSubNav } from "@/components/ReportSubNav";

export const metadata: Metadata = {
  title: {
    template: "%s | Lemma Report",
    default: "Where AI Fits Your Work | Lemma",
  },
};

export default function ReportLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ReportSubNav />
      {children}
    </>
  );
}
