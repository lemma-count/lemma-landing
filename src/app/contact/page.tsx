import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Lemma",
  description:
    "Talk to the Lemma team. Start from a real decision, not shallow answers.",
};

export default function ContactPage() {
  return (
    <main className="pt-24 md:pt-28">
      <section className="bg-white">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 px-6 py-12 md:grid-cols-2 md:gap-16 md:px-10 md:py-20">
          <div>
            <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-ink md:text-6xl">
              Let&apos;s talk!
            </h1>
            <p className="mt-4 max-w-md text-pretty text-base leading-7 text-muted md:text-lg md:leading-8">
              Start from a real decision, not shallow answers.
            </p>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-6 pb-24 text-center md:px-10 md:pb-32">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-ink md:text-5xl">
            Let us be your guide
          </h2>
          <p className="mt-4 text-base text-muted md:text-lg">
            Start from how your teams work, not assumptions.
          </p>
        </div>
      </section>
    </main>
  );
}
