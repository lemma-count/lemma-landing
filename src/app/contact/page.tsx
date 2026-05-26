import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Contact — Lemma",
  description:
    "Talk to the Lemma team. Start from the decision that needs better human context.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main>
      <section className="bg-white">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 px-6 py-16 md:grid-cols-[0.9fr_1.1fr] md:gap-16 md:px-10 md:py-28">
          <div className="md:sticky md:top-24">
            <h1 className="text-balance text-5xl font-semibold leading-[0.98] tracking-tight text-ink md:text-7xl">
              Start with the decision that needs better context.
            </h1>
            <p className="mt-6 max-w-md text-pretty text-base leading-7 text-muted md:text-lg md:leading-8">
              Tell us what you need to understand, who you need to hear from,
              and what decision the first conversation should support.
            </p>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-white">
        <div className="mx-auto max-w-[1280px] px-6 py-20 text-center md:px-10 md:py-28">
          <h2 className="mx-auto max-w-3xl text-balance text-4xl font-semibold leading-[1.02] tracking-tight text-ink md:text-6xl">
            Better context starts with a sharper decision.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-muted md:text-lg md:leading-8">
            We will help you decide whether Lemma fits your use case and what a
            first adaptive conversation should look like.
          </p>
        </div>
      </section>
    </main>
  );
}
