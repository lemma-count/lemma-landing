import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowDownRightIcon,
  ArrowUpRightIcon,
  CheckIcon,
  DownloadSimpleIcon,
  XIcon,
} from "@phosphor-icons/react/dist/ssr";
import {
  brandColorRules,
  brandColors,
  brandIdea,
  brandLandscapes,
  brandLogoVariants,
  brandPrinciples,
  landscapeSystem,
  signalUseCases,
  type BrandLandscape,
} from "@/lib/brand";
import { createMetadata } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata: Metadata = createMetadata({
  title: "Lemma Brand System — Open Passage",
  description:
    "The internal Lemma identity system: calm capability, visible direction, and operational proof.",
  path: "/brand",
  noIndex: true,
  image: {
    url: "/brand/lemma/v2.1.0/visuals/lemma-alignment-arcs.webp",
    width: 1500,
    height: 1452,
    alt: "Broad Klein Blue arcs aligning around one open passage and a tiny orange horizon signal.",
  },
});

function Eyebrow({ children, signal = false }: { children: React.ReactNode; signal?: boolean }) {
  return (
    <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-subtle">
      <span className={`h-px w-8 ${signal ? "bg-brand-signal" : "bg-brand-klein"}`} aria-hidden />
      {children}
    </p>
  );
}

function SectionIntro({
  index,
  eyebrow,
  title,
  body,
}: {
  index: string;
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <div className="grid gap-8 border-t border-border pt-6 lg:grid-cols-[120px_minmax(0,1fr)_minmax(280px,420px)] lg:gap-10">
      <p className="text-xs font-semibold tracking-[0.14em] text-subtle">{index}</p>
      <div className="min-w-0">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-7 max-w-[760px] break-words text-balance text-5xl font-medium leading-[0.96] tracking-[-0.025em] text-ink max-[360px]:text-[2.65rem] sm:text-6xl lg:text-[4.5rem]">
          {title}
        </h2>
      </div>
      <p className="max-w-[420px] text-pretty text-base leading-7 text-muted lg:pt-10">{body}</p>
    </div>
  );
}

function LandscapeCard({ landscape, index }: { landscape: BrandLandscape; index: number }) {
  return (
    <figure className="overflow-hidden rounded-[1.5rem] border border-white/12 bg-surface-mid text-white shadow-[0_30px_80px_-48px_rgba(0,8,28,0.9)]">
      <div className="relative aspect-[3/2] overflow-hidden">
        <Image
          src={landscape.image}
          alt={landscape.alt}
          fill
          sizes="(min-width: 1024px) 46vw, 100vw"
          className={`${styles.landscapeMedia} h-full w-full object-cover`}
        />
        <div className="absolute inset-0 bg-brand-night/38" aria-hidden />
        <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-6 sm:inset-x-6 sm:bottom-6">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/76">
              {String(index + 1).padStart(2, "0")} · {landscape.cue}
            </p>
            <h3 className="mt-2 text-3xl font-medium leading-none tracking-[-0.02em] sm:text-4xl">{landscape.name}</h3>
          </div>
          <a
            href={landscape.publicPath}
            download={landscape.fileName}
            aria-label={`Download ${landscape.name}`}
            className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-white/40 bg-brand-night/52 text-white transition hover:border-white/64 hover:bg-brand-night/78 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <DownloadSimpleIcon size={18} weight="bold" aria-hidden />
          </a>
        </div>
      </div>
      <figcaption className="grid gap-5 border-t border-white/12 p-5 sm:grid-cols-[1fr_auto] sm:p-6">
        <div>
          <p className="max-w-[560px] text-sm leading-6 text-white/72">{landscape.description}</p>
          <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.13em] text-white/64">{landscape.role}</p>
        </div>
        <dl className="grid gap-2 text-xs text-white/68 sm:text-right">
          <div><dt className="sr-only">Safe zone</dt><dd>{landscape.safeZone}</dd></div>
          <div><dt className="sr-only">Focal point</dt><dd>{landscape.focalPoint}</dd></div>
          <div><dt className="sr-only">Dimensions</dt><dd>{landscape.dimensions}</dd></div>
        </dl>
      </figcaption>
    </figure>
  );
}

export default function BrandPage() {
  const cover = brandLandscapes.find((asset) => asset.id === "alignment-arcs") ?? brandLandscapes[0];
  const composition = brandLandscapes[0];

  return (
    <main className={`${styles.brandBook} bg-paper text-ink`}>
      <section className="relative isolate min-h-[760px] overflow-hidden bg-brand-night text-white sm:min-h-[840px] lg:min-h-[900px]">
        <Image
          src={cover.image}
          alt=""
          fill
          preload
          sizes="100vw"
          className={`${styles.coverMedia} -z-20 object-cover`}
        />
        <div className="absolute inset-0 -z-10 bg-brand-night/52" aria-hidden />
        <div className="mx-auto flex min-h-[760px] max-w-[1400px] flex-col justify-between px-5 py-10 sm:min-h-[840px] sm:px-8 sm:py-14 lg:min-h-[900px] lg:px-10 lg:py-16">
          <div className="flex items-center justify-between gap-6 border-b border-white/18 pb-5">
            <Image
              src="/brand/lemma/v2.1.0/logo/lemma-lockup-horizontal-paper.svg"
              alt="Lemma"
              width={125}
              height={25}
              className="h-6 w-auto"
            />
            <p className="text-right text-[11px] font-semibold uppercase tracking-[0.16em] text-white/76">Brand system · 2026</p>
          </div>

          <div className="max-w-[940px] pb-6">
            <p className="mb-7 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/72">
              <span className="h-px w-8 bg-brand-signal" aria-hidden />
              Identity north star
            </p>
            <h1 className={`${styles.signatureSerif} text-balance text-[3.55rem] leading-[0.92] tracking-[-0.03em] sm:text-7xl lg:text-[6.5rem] xl:text-[7.5rem]`}>
              {brandIdea.name}
            </h1>
            <p className="mt-7 max-w-[720px] text-pretty text-lg leading-8 text-white/78 sm:text-xl sm:leading-9">
              {brandIdea.statement}
            </p>
          </div>

          <div className="grid gap-4 border-t border-white/18 pt-5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/72 sm:grid-cols-3">
            <p>Architectural Horizon</p>
            <p className="sm:border-l sm:border-white/16 sm:pl-5">One open passage</p>
            <p className="sm:border-l sm:border-white/16 sm:pl-5">One visible Signal</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-36">
        <SectionIntro
          index="01"
          eyebrow="Brand idea"
          title="Professional outbound should feel navigable."
          body={brandIdea.description}
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-border bg-border lg:grid-cols-3">
          {brandPrinciples.map((principle) => (
            <article key={principle.index} className="min-h-[300px] bg-paper p-7 sm:p-9">
              <p className="text-xs font-semibold tracking-[0.14em] text-brand-klein">{principle.index}</p>
              <h3 className="mt-16 text-[2rem] font-medium leading-[1.02] tracking-[-0.018em]">{principle.title}</h3>
              <p className="mt-5 text-sm leading-6 text-muted">{principle.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-paper-deep">
        <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-36">
          <SectionIntro
            index="02"
            eyebrow="Foundations"
            title="Operational clarity. Editorial restraint."
            body="Inter Tight carries the system, product, and brand communication. Sometype Mono records metadata and state. Paper creates space; Ink creates authority; Klein Blue directs; Signal interrupts only when consequence deserves attention."
          />

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            <div className="flex min-h-[320px] flex-col justify-between rounded-3xl border border-border bg-paper p-7 sm:p-9">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-subtle">Canonical mark · black master</p>
              <div className="flex items-end gap-5">
                <Image
                  src={brandLogoVariants.markBlack}
                  alt=""
                  width={177}
                  height={179}
                  className="h-20 w-20 shrink-0"
                />
                <Image
                  src={brandLogoVariants.lockupLight}
                  alt="Lemma"
                  width={251}
                  height={50}
                  className="h-10 w-auto"
                />
              </div>
              <p className="max-w-md text-sm leading-6 text-muted">Keep clear space equal to the visible wordmark height. Minimum digital height: 16px. Standard navigation height: 20px.</p>
            </div>
            <div className="flex min-h-[320px] flex-col justify-between rounded-3xl bg-brand-night p-7 text-white sm:p-9">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/72">Canonical mark · white master</p>
              <div className="flex items-end gap-5">
                <Image
                  src={brandLogoVariants.markWhite}
                  alt=""
                  width={177}
                  height={179}
                  className="h-20 w-20 shrink-0"
                />
                <Image
                  src={brandLogoVariants.lockupDark}
                  alt="Lemma"
                  width={251}
                  height={50}
                  className="h-10 w-auto"
                />
              </div>
              <p className="max-w-md text-sm leading-6 text-white/64">Use only the supplied Ink and Paper Sunrise Threshold masters. Never stretch, recolor, outline, move the half-sun, or place the wordmark over detailed structure.</p>
            </div>
          </div>
          <p className="mt-5 text-xs leading-5 text-subtle">The doorway and sunrise are deterministic SVG paths. The favicon swaps Ink and Paper with the browser color scheme while preserving the Signal-orange half-sun.</p>

          <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-3xl border border-border bg-paper p-7 sm:p-9">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-subtle">Display · Inter Tight Variable</p>
              <p className={`${styles.signatureSerif} mt-12 max-w-[760px] text-balance text-5xl leading-[0.96] tracking-[-0.025em] sm:text-6xl`}>Reach the right people—without running a sales operation.</p>
              <p className="mt-10 text-sm leading-6 text-muted">North-star statements · 700 weight · tight leading · decisive rhythm</p>
            </div>
            <div className="rounded-3xl border border-border bg-paper p-7 sm:p-9">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-subtle">Metadata · Sometype Mono Variable</p>
              <p className="mt-12 text-2xl font-medium tracking-[-0.02em]">Tell Lemma what you sell.</p>
              <p className="mt-5 max-w-md text-base leading-7 text-muted">Add the people you want to reach from a CSV or LinkedIn. Review the work before it runs.</p>
              <p className="mt-10 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-brand-klein">Labels, metadata, state, evidence</p>
            </div>
          </div>
          <p className="mt-5 text-xs leading-5 text-subtle">Usage rule: Inter Tight carries all brand, product, and interface communication. Sometype Mono is reserved for compact metadata, state, and evidence.</p>

          <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-4 lg:grid-cols-8">
            {brandColors.map((color) => (
              <article key={color.token} className="bg-paper">
                <div className="aspect-square border-b border-border" style={{ backgroundColor: color.value }} />
                <div className="p-4">
                  <h3 className="text-sm font-semibold">{color.name}</h3>
                  <p className="mt-1 font-mono text-[11px] text-subtle">{color.value}</p>
                  <p className="mt-4 text-xs leading-5 text-muted">{color.use}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-5 text-xs leading-5 text-subtle">Recommended balance: Paper 55–65% · Ink 20–30% · Klein Blue 5–10% · Signal 1–3% in interface and editorial surfaces. Architectural images keep Signal below 1%.</p>

          <div className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-border bg-border lg:grid-cols-3">
            {brandColorRules.map((rule) => (
              <article key={rule.name} className="bg-paper p-7 sm:p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-klein">{rule.name}</p>
                <p className="mt-5 text-sm leading-6 text-muted">{rule.guidance}</p>
                <p className="mt-5 border-t border-border pt-5 text-xs leading-5 text-subtle">{rule.evidence}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-border">
            <div className="grid gap-8 bg-brand-night p-7 text-white sm:p-9 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div>
                <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/72"><span className="h-px w-8 bg-brand-signal" aria-hidden />Signal attention system</p>
                <h3 className="mt-7 max-w-[660px] text-4xl font-medium leading-[0.94] tracking-[-0.025em] sm:text-5xl">Four jobs. One interruption.</h3>
              </div>
              <p className="max-w-[420px] text-sm leading-6 text-white/72">Use more orange by giving every appearance a job. One cue may dominate an attention zone; every other orange occurrence stays smaller, semantic, and subordinate.</p>
            </div>
            <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
              {signalUseCases.map((useCase) => (
                <article key={useCase.id} className="flex min-h-[360px] flex-col bg-paper p-6 sm:p-7">
                  <div className="flex items-center justify-between gap-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-subtle">
                    <span>{String(signalUseCases.indexOf(useCase) + 1).padStart(2, "0")}</span>
                    <span>{useCase.role}</span>
                  </div>
                  <div className={`mt-7 flex min-h-32 items-center justify-center ${useCase.id === "commit" ? "rounded-xl bg-brand-night" : "rounded-xl bg-paper-deep"}`} aria-hidden>
                    {useCase.id === "commit" ? (
                      <span className="inline-flex min-h-12 items-center gap-5 bg-brand-signal px-4 text-sm font-semibold text-brand-night">{useCase.example}<ArrowUpRightIcon size={16} weight="bold" /></span>
                    ) : null}
                    {useCase.id === "handoff" ? (
                      <span className="flex items-center gap-3"><b className="bg-brand-signal px-3 py-2 font-mono text-[9px] uppercase tracking-[0.1em] text-brand-night">Needs you</b><span className="flex flex-col gap-1"><strong className="text-sm">{useCase.example}</strong><small className="font-mono text-[9px] text-subtle">Human judgment required</small></span></span>
                    ) : null}
                    {useCase.id === "marker" ? (
                      <span className="flex w-[80%] items-stretch gap-3"><i className="w-1.5 shrink-0 bg-brand-signal" /><span className="flex flex-col justify-center gap-1"><small className="font-mono text-[9px] uppercase tracking-[0.1em] text-subtle">Next decision</small><strong className="text-sm">{useCase.example}</strong></span></span>
                    ) : null}
                    {useCase.id === "proof" ? (
                      <span className="relative flex w-[80%] items-end gap-3 border-b-[6px] border-brand-signal pb-3"><strong className="text-6xl font-semibold leading-[0.72] tracking-[-0.07em]">10</strong><span className="flex flex-col gap-1"><strong className="text-sm">Lemma credits</strong><small className="font-mono text-[9px] text-subtle">included in trial</small></span></span>
                    ) : null}
                  </div>
                  <h4 className="mt-7 text-2xl font-medium tracking-[-0.02em]">{useCase.name}</h4>
                  <p className="mt-3 text-sm leading-6 text-muted">{useCase.guidance}</p>
                  <code className="mt-auto pt-7 font-mono text-[9px] text-subtle">{useCase.token}</code>
                </article>
              ))}
            </div>
            <p className="border-t border-border bg-brand-night px-7 py-5 text-xs leading-5 text-white/72 sm:px-9">Never spend Signal on routine navigation, generic decoration, every CTA, popularity badges, success, warning, or failure.</p>
          </div>
        </div>
      </section>

      <section className="bg-brand-night text-white">
        <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-36">
          <div className="grid gap-8 border-t border-white/18 pt-6 lg:grid-cols-[120px_minmax(0,1fr)_minmax(280px,420px)] lg:gap-10">
            <p className="text-xs font-semibold tracking-[0.14em] text-white/64">03</p>
            <div>
              <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/72"><span className="h-px w-8 bg-brand-signal" aria-hidden />Architectural library</p>
              <h2 className="mt-7 max-w-[820px] text-balance text-5xl font-medium leading-[0.96] tracking-[-0.025em] sm:text-6xl lg:text-[4.5rem]">One pigment. One feeling of direction.</h2>
            </div>
            <p className="max-w-[420px] text-pretty text-base leading-7 text-white/72 lg:pt-10">Each scene uses the same four inks—{landscapeSystem.inks.join(", ")}—with {landscapeSystem.technique.toLowerCase()} Recognition comes from the pigment system; range comes from rectilinear and rounded structure.</p>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            {brandLandscapes.map((landscape, index) => (
              <LandscapeCard key={landscape.id} landscape={landscape} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-36">
        <SectionIntro
          index="04"
          eyebrow="Composition"
          title="The passage directs. The quiet field communicates."
          body="Structure occupies 35–65% of the frame. One dominant passage remains open, the horizon stays stable, and exactly one tiny orange Signal sits away from the copy-safe field. This image rule leaves room for one separate dominant layout cue when the image point stays subordinate."
        />

        <div className="mt-16 overflow-hidden rounded-3xl bg-brand-night text-white">
          <div className="relative aspect-[3/2] lg:aspect-[16/8]">
            <Image src={composition.image} alt={composition.alt} fill sizes="100vw" className="object-cover object-[56%_60%]" />
            <div className="absolute inset-0 bg-brand-night/30" aria-hidden />
            <div className={`${styles.safeZoneGrid} absolute inset-0`} aria-hidden />
            <div className="absolute left-[6%] top-[10%] flex h-[44%] w-[46%] items-center justify-center rounded-xl border border-dashed border-white/55 bg-brand-night/18">
              <p className="text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-white/78">Primary copy-safe field</p>
            </div>
            <div className="absolute bottom-[35%] left-[54%] h-3 w-3 rounded-full border-2 border-white bg-brand-signal" aria-hidden />
          </div>
          <div className="grid gap-px border-t border-white/14 bg-white/14 sm:grid-cols-3">
            <div className="bg-brand-night p-6"><p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/64">01 · Field</p><p className="mt-4 text-sm leading-6 text-white/72">Reserve a declared field for copy, product proof, or deliberate silence.</p></div>
            <div className="bg-brand-night p-6"><p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/64">02 · Passage</p><p className="mt-4 text-sm leading-6 text-white/72">Use one dominant opening through rectilinear planes or broad structural curves.</p></div>
            <div className="bg-brand-night p-6"><p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-signal">03 · Signal</p><p className="mt-4 text-sm leading-6 text-white/72">Place exactly one tiny orange Signal at the horizon or vanishing point inside each image. It remains subordinate to any separate decisive layout action.</p></div>
          </div>
        </div>

        <div className="mt-20 grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-border bg-paper p-7 sm:p-9">
            <Eyebrow>Interface language</Eyebrow>
            <h3 className="mt-8 text-4xl font-medium leading-[0.98] tracking-[-0.02em]">Quiet structure around decisive actions.</h3>
            <div className="mt-12 flex flex-col gap-3 sm:flex-row">
              <span className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-brand-signal px-6 py-3 text-sm font-semibold text-brand-night">Start free trial <ArrowUpRightIcon size={16} weight="bold" aria-hidden /></span>
              <span className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-ink/50 px-6 py-3 text-sm font-semibold text-ink">See how it works <ArrowDownRightIcon size={16} weight="bold" aria-hidden /></span>
            </div>
            <div className="mt-12 grid gap-4 border-t border-border pt-6 text-sm leading-6 text-muted sm:grid-cols-2">
              <p>8px controls · 48px minimum height</p>
              <p>12–16px product frames · 24px editorial frames</p>
              <p>1px low-contrast rules</p>
              <p>Phosphor icons · 16px bold for controls</p>
            </div>
          </article>

          <article className="overflow-hidden rounded-3xl bg-brand-night p-4 text-white sm:p-6">
            <div className="overflow-hidden rounded-2xl border border-white/14 bg-white">
              <Image src="/landing/outbox-needs-you.png" alt="Lemma Outbox showing work that needs review" width={1280} height={720} sizes="(min-width: 1024px) 48vw, 100vw" className="h-auto w-full" />
            </div>
            <div className="p-3 pb-1 pt-6 sm:p-4 sm:pb-1 sm:pt-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/64">Category anchor · operational proof</p>
              <p className="mt-4 max-w-lg text-sm leading-6 text-white/72">{landscapeSystem.categoryAnchor} Name the job—Mission, Leads, research, LinkedIn, email, review, or Outbox. Product screens stay crisp and authentic; pigment texture never touches the interface.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-paper-deep">
        <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-36">
          <SectionIntro
            index="05"
            eyebrow="Behavior"
            title="Slow enough to preserve the monument."
            body="Architectural motion is nearly imperceptible: 20–30 seconds, scale 1.035 to 1.06, translation below 0.5%. Only one conspicuous motion behavior is allowed per viewport."
          />

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            <article className="rounded-3xl border border-border bg-paper p-7 sm:p-9"><p className="text-xs font-semibold text-brand-klein">20–30s</p><h3 className="mt-12 text-3xl font-medium tracking-[-0.02em]">Field drift</h3><p className="mt-4 text-sm leading-6 text-muted">Alternate ease-in-out, scale 1.035 → 1.06–1.07, movement below 0.5%.</p></article>
            <article className="rounded-3xl border border-border bg-paper p-7 sm:p-9"><p className="text-xs font-semibold text-brand-klein">≤ 6px</p><h3 className="mt-12 text-3xl font-medium tracking-[-0.02em]">Product movement</h3><p className="mt-4 text-sm leading-6 text-muted">Use a restrained 10-second float or one-time entrance—never both at once.</p></article>
            <article className="rounded-3xl border border-border bg-paper p-7 sm:p-9"><p className="text-xs font-semibold text-brand-klein">0 motion</p><h3 className="mt-12 text-3xl font-medium tracking-[-0.02em]">Reduced motion</h3><p className="mt-4 text-sm leading-6 text-muted">Remove animation and transforms completely when reduced motion is requested.</p></article>
          </div>

          <div className="mt-20 grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl border border-[#b9d8c0] bg-[#f2f8f1] p-7 sm:p-9">
              <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#225b32]"><CheckIcon size={15} weight="bold" aria-hidden />Do</p>
              <ul className="mt-10 grid gap-4 text-sm leading-6 text-[#264d30]">
                <li>Use one immersive monument per major page plus the closing scene.</li>
                <li>Keep one passage, one Signal, and a declared copy-safe zone.</li>
                <li>Use broad structural curves when the composition needs more invitation or movement.</li>
                <li>Pair atmosphere with a concrete outbound job, real product evidence, and explicit control.</li>
                <li>Use Klein Blue for routine direction and Signal for one consequential action, handoff, marker, proof point, or image destination.</li>
              </ul>
            </article>
            <article className="rounded-3xl border border-[#e2bbb2] bg-[#fff4ef] p-7 sm:p-9">
              <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8a352a]"><XIcon size={15} weight="bold" aria-hidden />Don’t</p>
              <ul className="mt-10 grid gap-4 text-sm leading-6 text-[#6f3731]">
                <li>Stack multiple unrelated monuments or competing dominant Signals into one attention zone.</li>
                <li>Turn rounded forms into pills, bubbles, blobs, or decorative softness.</li>
                <li>Use glossy HDR, fantasy planets, neon networks, or generic AI symbols.</li>
                <li>Place small copy across the Signal, passage, or detailed foreground structure.</li>
                <li>Use imagery that implies a different product category inside the live outbound identity.</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-36">
        <SectionIntro
          index="06"
          eyebrow="Asset index"
          title="Built to be used, not just admired."
          body="Every production background is available as an optimized WebP, with its full prompt, original PNG, provenance, safe-zone guidance, and review board preserved in the durable asset package."
        />
        <div className="mt-16 overflow-hidden rounded-3xl border border-border">
          <table className="hidden w-full table-fixed border-collapse md:table">
            <caption className="sr-only">Production Architectural Horizon assets, directional cues, recommended roles, and download links.</caption>
            <thead className="bg-paper-deep text-left text-[11px] font-semibold uppercase tracking-[0.14em] text-subtle">
              <tr>
                <th scope="col" className="w-[30%] px-6 py-4">Asset</th>
                <th scope="col" className="w-[24%] px-6 py-4">Cue</th>
                <th scope="col" className="w-[34%] px-6 py-4">Recommended role</th>
                <th scope="col" className="w-[12%] px-6 py-4 text-right">File</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {brandLandscapes.map((landscape) => (
                <tr key={landscape.id}>
                  <th scope="row" className="px-6 py-5 text-left font-semibold">
                    {landscape.name}
                    <span className="mt-1 block text-xs font-normal text-subtle">{landscape.dimensions}</span>
                  </th>
                  <td className="px-6 py-5 text-sm text-muted">{landscape.cue}</td>
                  <td className="px-6 py-5 text-sm text-muted">{landscape.role}</td>
                  <td className="px-6 py-5 text-right">
                    <a href={landscape.publicPath} download={landscape.fileName} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-ink/50 px-4 text-xs font-semibold text-ink transition hover:bg-paper-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-klein">
                      WebP <DownloadSimpleIcon size={15} weight="bold" aria-hidden />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="divide-y divide-border md:hidden">
            {brandLandscapes.map((landscape) => (
              <article key={landscape.id} className="p-5">
                <h3 className="font-semibold">{landscape.name}</h3>
                <p className="mt-1 text-xs text-subtle">{landscape.dimensions}</p>
                <dl className="mt-5 grid gap-4">
                  <div>
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-subtle">Cue</dt>
                    <dd className="mt-1 text-sm text-muted">{landscape.cue}</dd>
                  </div>
                  <div>
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-subtle">Recommended role</dt>
                    <dd className="mt-1 text-sm text-muted">{landscape.role}</dd>
                  </div>
                </dl>
                <a href={landscape.publicPath} download={landscape.fileName} className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg border border-ink/50 px-4 text-xs font-semibold text-ink transition hover:bg-paper-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-klein">
                  Download WebP <DownloadSimpleIcon size={15} weight="bold" aria-hidden />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
