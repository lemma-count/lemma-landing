
export const brandIdea = {
  name: "Open Passage",
  statement: "Make progress legible.",
  description:
    "Lemma turns professional outbound into one calm field, one deliberate structure, and one open passage toward the next result.",
};

export const brandLogoVariants = {
  markBlack: "/brand/lemma/v2.0.0/logo/lemma-mark-ink.svg",
  markWhite: "/brand/lemma/v2.0.0/logo/lemma-mark-paper.svg",
  lockupLight: "/brand/lemma/v2.0.0/logo/lemma-lockup-horizontal-ink.svg",
  lockupDark: "/brand/lemma/v2.0.0/logo/lemma-lockup-horizontal-paper.svg",
} as const;

export const brandPrinciples = [
  {
    index: "01",
    title: "Calm capability",
    description:
      "Generous space, stable compositions, and restrained motion make researched outreach and permitted automation feel composed rather than chaotic.",
  },
  {
    index: "02",
    title: "Visible direction",
    description:
      "Every monument contains one field, one structure, one open passage, and one Signal—so direction is felt before it is explained.",
  },
  {
    index: "03",
    title: "Human control",
    description:
      "Atmosphere creates emotion; authentic product screens prove that the operator can see, choose, and stay in control.",
  },
] as const;

export const brandColors = [
  { name: "Paper", token: "lemma-paper", value: "#FCFCFC", use: "Primary field" },
  { name: "Ink", token: "lemma-ink", value: "#121212", use: "Text and dark field" },
  { name: "Klein Blue", token: "lemma-klein", value: "#002FA7", use: "Action, direction, and structural pigment" },
  { name: "Klein Lift", token: "lemma-klein-soft", value: "#1B46C7", use: "Hover and supporting plane" },
  { name: "Signal", token: "lemma-signal", value: "#FF7A45", use: "Consequential attention" },
  { name: "Body", token: "lemma-body", value: "#3D3D3D", use: "Long-form text" },
  { name: "Muted", token: "lemma-muted", value: "#707070", use: "Supporting information" },
  { name: "Grid", token: "lemma-grid", value: "#E9E9E7", use: "Rules and boundaries" },
] as const;

export const brandColorRules = [
  {
    name: "Light fields",
    guidance: "Use Ink for text and Klein Blue for routine direction. Reserve Signal for one decisive action, handoff, marker, or proof point.",
    evidence: "Ink / Paper 17.96:1 · Klein Blue / Paper 10.42:1",
  },
  {
    name: "Dark fields",
    guidance: "Use Paper for reading. Klein Blue becomes a material field; Signal can carry one high-attention action with Ink text.",
    evidence: "Paper / Ink 17.96:1 · Signal / Ink 7.25:1",
  },
  {
    name: "Signal hierarchy",
    guidance: "One dominant Signal per attention zone. Smaller orange cues must have a distinct job and remain subordinate.",
    evidence: "Interface/editorial target 1–3% · Architectural image below 1%",
  },
  {
    name: "Accessible attention",
    guidance: "Orange-filled controls and labels use Ink text. Pair orange on light fields with an explicit label, shape, or position.",
    evidence: "Ink / Signal 7.25:1 · Signal / Paper 2.52:1",
  },
] as const;

export const signalUseCases = [
  {
    id: "commit",
    name: "Commit",
    role: "Decisive action",
    example: "Start free trial",
    guidance: "One orange-filled control for starting a trial, approving work, upgrading capacity, or resuming a Mission.",
    token: "--lemma-attention-action",
  },
  {
    id: "handoff",
    name: "Needs you",
    role: "Human intervention",
    example: "Review reply",
    guidance: "A compact orange label or rail for a reply, permission request, blocker, or handoff that needs judgment.",
    token: "--lemma-attention-handoff",
  },
  {
    id: "marker",
    name: "Move here",
    role: "Consequential marker",
    example: "Approve Mission",
    guidance: "The one place attention should move now. Klein Blue remains the default for routine active and selected states.",
    token: "--lemma-attention-marker",
  },
  {
    id: "proof",
    name: "Proof point",
    role: "Evidence emphasis",
    example: "10 managed leads",
    guidance: "One orange rule, pin, or numeral connecting a claim to evidence. Never a repeated eyebrow or generic highlight.",
    token: "--lemma-attention-proof",
  },
] as const;

export const landscapeSystem = {
  inks: ["Paper", "Ink", "Klein Blue", "Signal"],
  technique: "Austere architectural planes, dense ultramarine pigment, structural curves, and exceptional negative space.",
  categoryAnchor:
    "A primary monument never stands alone: pair it in the same viewport or the next with one concrete outbound job and authentic product proof.",
} as const;

export type BrandLandscape = {
  id: string;
  name: string;
  fileName: string;
  publicPath: string;
  image: string;
  cue: string;
  role: string;
  safeZone: string;
  focalPoint: string;
  dimensions: string;
  description: string;
  alt: string;
};

export const brandLandscapes: BrandLandscape[] = [
  {
    id: "horizon-court",
    name: "Horizon Court",
    fileName: "lemma-horizon-court.webp",
    publicPath: "/brand/lemma/v2.0.0/visuals/lemma-horizon-court.webp",
    image: "/brand/lemma/v2.0.0/visuals/lemma-horizon-court.webp",
    cue: "Master passage",
    role: "Homepage hero · launch campaign",
    safeZone: "Lower-left copy or full-bleed display",
    focalPoint: "62% 61%",
    dimensions: "1500 × 1452 · WebP",
    description: "The rendering master: one low court opens toward one deliberate result.",
    alt: "Abstract white architectural court opening toward a Klein Blue horizon and one tiny orange signal.",
  },
  {
    id: "horizon-threshold",
    name: "Horizon Threshold",
    fileName: "lemma-horizon-threshold.webp",
    publicPath: "/brand/lemma/v2.0.0/visuals/lemma-horizon-threshold.webp",
    image: "/brand/lemma/v2.0.0/visuals/lemma-horizon-threshold.webp",
    cue: "Framed destination",
    role: "Closing field · editorial cover",
    safeZone: "Upper-left 42%",
    focalPoint: "68% 58%",
    dimensions: "1500 × 1452 · WebP",
    description: "One monumental threshold frames the horizon without closing the route.",
    alt: "Monumental white threshold framing a distant Klein Blue horizon and small orange signal.",
  },
  {
    id: "interval-temple",
    name: "Temple of the Interval",
    fileName: "lemma-interval-temple.webp",
    publicPath: "/brand/lemma/v2.0.0/visuals/lemma-interval-temple.webp",
    image: "/brand/lemma/v2.0.0/visuals/lemma-interval-temple.webp",
    cue: "Precise interval",
    role: "Systems story · presentation cover",
    safeZone: "Upper-right 36%",
    focalPoint: "58% 54%",
    dimensions: "1500 × 1452 · WebP",
    description: "Rhythmic planes leave one exact interval through which progress remains visible.",
    alt: "Rhythmic architectural planes forming a precise passage toward a Klein Blue void.",
  },
  {
    id: "open-passage-atrium",
    name: "Open Passage Atrium",
    fileName: "lemma-open-passage-atrium.webp",
    publicPath: "/brand/lemma/v2.0.0/visuals/lemma-open-passage-atrium.webp",
    image: "/brand/lemma/v2.0.0/visuals/lemma-open-passage-atrium.webp",
    cue: "Chosen opening",
    role: "Campaign hero · keynote opener",
    safeZone: "Upper-left 48%",
    focalPoint: "62% 62%",
    dimensions: "1500 × 1452 · WebP",
    description: "A quiet atrium turns a large field into one legible opening.",
    alt: "A quiet architectural atrium leading toward one Klein Blue passage and a warm signal.",
  },
  {
    id: "signal-colonnade",
    name: "Signal Colonnade",
    fileName: "lemma-signal-colonnade.webp",
    publicPath: "/brand/lemma/v2.0.0/visuals/lemma-signal-colonnade.webp",
    image: "/brand/lemma/v2.0.0/visuals/lemma-signal-colonnade.webp",
    cue: "Repeated cadence",
    role: "Social series · report cover",
    safeZone: "Left 38%",
    focalPoint: "64% 65%",
    dimensions: "1254 × 1254 · WebP",
    description: "A measured cadence of planes leads toward one distant Signal.",
    alt: "Abstract vertical planes repeating toward a distant orange signal.",
  },
  {
    id: "quiet-observatory",
    name: "Quiet Observatory",
    fileName: "lemma-quiet-observatory.webp",
    publicPath: "/brand/lemma/v2.0.0/visuals/lemma-quiet-observatory.webp",
    image: "/brand/lemma/v2.0.0/visuals/lemma-quiet-observatory.webp",
    cue: "Immense field",
    role: "Research report · event field",
    safeZone: "Upper-right 50%",
    focalPoint: "52% 62%",
    dimensions: "1254 × 1254 · WebP",
    description: "A low court keeps the structure calm while the Klein Blue field carries authority.",
    alt: "A low abstract architectural court opening beneath an immense Klein Blue sky.",
  },
  {
    id: "alignment-court",
    name: "Alignment Court",
    fileName: "lemma-alignment-court.webp",
    publicPath: "/brand/lemma/v2.0.0/visuals/lemma-alignment-court.webp",
    image: "/brand/lemma/v2.0.0/visuals/lemma-alignment-court.webp",
    cue: "Alignment · rectilinear",
    role: "Relevance story · website variation",
    safeZone: "Upper-left 40%",
    focalPoint: "80% 70%",
    dimensions: "1500 × 1452 · WebP",
    description: "Many possibilities resolve into one precise, relevant path.",
    alt: "Airy Klein Blue architectural planes converging toward one precise passage and a tiny orange horizon signal.",
  },
  {
    id: "permission-gate",
    name: "Permission Gate",
    fileName: "lemma-permission-gate.webp",
    publicPath: "/brand/lemma/v2.0.0/visuals/lemma-permission-gate.webp",
    image: "/brand/lemma/v2.0.0/visuals/lemma-permission-gate.webp",
    cue: "Permission · rectilinear",
    role: "Control story · presentation divider",
    safeZone: "Upper-right 42%",
    focalPoint: "49% 85%",
    dimensions: "1500 × 1452 · WebP",
    description: "A clear boundary contains exactly one permitted opening.",
    alt: "Two monumental walls defining one permitted threshold toward a tiny orange Signal.",
  },
  {
    id: "return-signal",
    name: "Return Signal",
    fileName: "lemma-return-signal.webp",
    publicPath: "/brand/lemma/v2.0.0/visuals/lemma-return-signal.webp",
    image: "/brand/lemma/v2.0.0/visuals/lemma-return-signal.webp",
    cue: "Return · rectilinear",
    role: "Judgment story · closing field",
    safeZone: "Upper 45%",
    focalPoint: "54% 56%",
    dimensions: "1500 × 1452 · WebP",
    description: "Work advances while the consequential decision returns to the operator.",
    alt: "An airy axial court with one plane returning toward the foreground and a tiny orange signal.",
  },
  {
    id: "alignment-arcs",
    name: "Alignment Arcs",
    fileName: "lemma-alignment-arcs.webp",
    publicPath: "/brand/lemma/v2.0.0/visuals/lemma-alignment-arcs.webp",
    image: "/brand/lemma/v2.0.0/visuals/lemma-alignment-arcs.webp",
    cue: "Alignment · rounded",
    role: "Relevance story · editorial campaign",
    safeZone: "Upper-left 34%",
    focalPoint: "84% 43%",
    dimensions: "1500 × 1452 · WebP",
    description: "Broad structural arcs align around one relevant passage.",
    alt: "Broad Klein Blue arcs align around one open passage and a tiny orange horizon signal.",
  },
  {
    id: "permission-aperture",
    name: "Permission Aperture",
    fileName: "lemma-permission-aperture.webp",
    publicPath: "/brand/lemma/v2.0.0/visuals/lemma-permission-aperture.webp",
    image: "/brand/lemma/v2.0.0/visuals/lemma-permission-aperture.webp",
    cue: "Permission · rounded",
    role: "Control story · presentation divider",
    safeZone: "Upper-right 30%",
    focalPoint: "62% 60%",
    dimensions: "1500 × 1452 · WebP",
    description: "A protected curved field contains one chosen opening.",
    alt: "Two rounded Klein Blue walls protect a field with one narrow opening and a tiny orange signal.",
  },
  {
    id: "return-curve",
    name: "Return Curve",
    fileName: "lemma-return-curve.webp",
    publicPath: "/brand/lemma/v2.0.0/visuals/lemma-return-curve.webp",
    image: "/brand/lemma/v2.0.0/visuals/lemma-return-curve.webp",
    cue: "Return · rounded",
    role: "Judgment story · closing field",
    safeZone: "Upper 32%",
    focalPoint: "68% 31%",
    dimensions: "1500 × 1452 · WebP",
    description: "One continuous plane advances, bends back, and keeps judgment visible.",
    alt: "A continuous Klein Blue plane curves back through an open court toward a tiny orange horizon signal.",
  },
];
