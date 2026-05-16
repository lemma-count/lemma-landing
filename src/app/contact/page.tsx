import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Lemma",
  description:
    "Talk to the Lemma team. Start from a real decision, not shallow answers.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="bg-white">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 px-6 py-16 md:grid-cols-[0.9fr_1.1fr] md:gap-16 md:px-10 md:py-28">
          <div className="md:sticky md:top-24">
            <h1 className="text-balance text-5xl font-semibold leading-[0.98] tracking-tight text-ink md:text-7xl">
              Start with the decision you need evidence for.
            </h1>
            <p className="mt-6 max-w-md text-pretty text-base leading-7 text-muted md:text-lg md:leading-8">
              Tell us what you need to understand, who you need to hear from,
              and what decision the research should support.
            </p>
            <ul className="mt-10 space-y-5">
              {[
                {
                  title: "Response within 24h",
                  body: "A real person reads every message. Expect a reply the next business day.",
                },
                {
                  title: "No demo scripts",
                  body: "We listen first. The first call is about your situation, not our slide deck.",
                },
                {
                  title: "Honest fit assessment",
                  body: "If Lemma isn't the right solution for you, we'll tell you — and point you in the right direction.",
                },
              ].map((item) => (
                <li key={item.title} className="flex gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
                      <path d="M2 5.5l2 2 4-4" stroke="#3d50ff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm font-medium text-ink">{item.title}</p>
                    <p className="mt-0.5 text-sm text-muted">{item.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-white">
        <div className="mx-auto max-w-[1280px] px-6 py-20 text-center md:px-10 md:py-28">
          <h2 className="mx-auto max-w-3xl text-balance text-4xl font-semibold leading-[1.02] tracking-tight text-ink md:text-6xl">
            Better interviews start with a sharper question.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-muted md:text-lg md:leading-8">
            We will help you decide whether Lemma fits your use case and what a
            first interview project should look like.
          </p>
        </div>
      </section>
    </main>
  );
}
