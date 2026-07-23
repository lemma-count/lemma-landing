
export const brandIdea = {
  name: "The Guided Horizon",
  statement: "Calm field. Visible direction. Operational proof.",
  description:
    "Lemma makes professional outbound feel navigable: a spacious field, a clear horizon, and one reliable signal showing what happens next.",
};

export const brandLogoVariants = {
  markBlack: "/brand/lemma/v1.2.1/logo/lemma-mark-ink.svg",
  markWhite: "/brand/lemma/v1.2.1/logo/lemma-mark-paper.svg",
  lockupLight: "/brand/lemma/v1.2.1/logo/lemma-lockup-horizontal-ink.svg",
  lockupDark: "/brand/lemma/v1.2.1/logo/lemma-lockup-horizontal-paper.svg",
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
      "Every landscape contains one cue—a path, beacon, river, pass, star, or clearing—so guidance is felt before it is explained.",
  },
  {
    index: "03",
    title: "Human control",
    description:
      "Atmosphere creates emotion; authentic product screens prove that the operator can see, choose, and stay in control.",
  },
] as const;

export const brandColors = [
  { name: "Night", token: "brand-night", value: "#04102A", use: "Immersive fields, dark panels, image veils, and footer" },
  { name: "Cobalt", token: "brand-cobalt", value: "#2B57D5", use: "Primary action and active state" },
  { name: "Sky", token: "brand-sky", value: "#85A9FF", use: "Orientation and information cues" },
  { name: "Signal", token: "brand-signal", value: "#FF9A62", use: "Destination cues only" },
  { name: "Paper", token: "paper", value: "#FFFFFF", use: "Primary light field" },
  { name: "Paper deep", token: "paper-deep", value: "#EEE8DD", use: "Secondary light field" },
  { name: "Ink", token: "ink", value: "#171714", use: "Primary text on light" },
] as const;

export const brandColorRules = [
  {
    name: "Light fields",
    guidance: "Use Ink for text and Cobalt for actions. Sky and Signal do not carry small text on Paper.",
    evidence: "Ink / Paper 17.96:1 · Cobalt / Paper 6.13:1",
  },
  {
    name: "Dark fields",
    guidance: "Use white for reading, Sky for orientation, and Signal only for the destination cue.",
    evidence: "Sky / Night 8.19:1 · Signal / Night 9.03:1",
  },
  {
    name: "Signal discipline",
    guidance: "Functional Signal is unique. Incidental print warmth may appear in artwork but never becomes a second UI signal.",
    evidence: "Never use Signal as body text or a button fill on Paper.",
  },
] as const;

export const landscapeSystem = {
  inks: ["Night", "Cobalt", "Sky", "Signal"],
  technique: "Screenprint-inspired halftone grain, hard-edged planes, low terrain, and a large text-safe sky.",
  categoryAnchor:
    "A primary landscape never stands alone: pair it in the same viewport or the next with one concrete outbound job and authentic product proof.",
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
  description: string;
  alt: string;
};

export const brandLandscapes: BrandLandscape[] = [
  {
    id: "beacon-coast",
    name: "Beacon Coast",
    fileName: "01-beacon-coast-screenprint.webp",
    publicPath: "/brand/landscapes/screenprint/01-beacon-coast-screenprint.webp",
    image: "/brand/landscapes/screenprint/01-beacon-coast-screenprint.webp",
    cue: "A distant light",
    role: "Campaign hero · closing CTA",
    safeZone: "Upper-left 52%",
    focalPoint: "Desktop 56% 60% · Mobile 60% 62%",
    description: "A single coastal signal turns an open horizon into a clear destination.",
    alt: "Blue-hour coast with a distant lighthouse and a wide dark sky.",
  },
  {
    id: "mountain-pass",
    name: "Mountain Pass",
    fileName: "02-mountain-pass-screenprint.webp",
    publicPath: "/brand/landscapes/screenprint/02-mountain-pass-screenprint.webp",
    image: "/brand/landscapes/screenprint/02-mountain-pass-screenprint.webp",
    cue: "A trail toward the opening",
    role: "Primary brand cover · product story",
    safeZone: "Upper-left 58%",
    focalPoint: "Desktop 57% 66% · Mobile 63% 68%",
    description: "The path makes progress visible without making the landscape feel busy.",
    alt: "Quiet blue-hour mountain pass with a trail leading toward a warm horizon.",
  },
  {
    id: "river-horizon",
    name: "River Horizon",
    fileName: "03-river-horizon-screenprint.webp",
    publicPath: "/brand/landscapes/screenprint/03-river-horizon-screenprint.webp",
    image: "/brand/landscapes/screenprint/03-river-horizon-screenprint.webp",
    cue: "Water moving forward",
    role: "Editorial transition · section backdrop",
    safeZone: "Upper-right 54%",
    focalPoint: "Desktop 50% 68% · Mobile 50% 69%",
    description: "A calm waterway naturally carries the eye from the foreground to open water.",
    alt: "Calm blue-hour river winding between low hills toward a luminous horizon.",
  },
  {
    id: "desert-waypoint",
    name: "Desert Waypoint",
    fileName: "04-desert-waypoint-screenprint.webp",
    publicPath: "/brand/landscapes/screenprint/04-desert-waypoint-screenprint.webp",
    image: "/brand/landscapes/screenprint/04-desert-waypoint-screenprint.webp",
    cue: "An illuminated dune ridge",
    role: "Campaign alternate · social background",
    safeZone: "Upper-left 60%",
    focalPoint: "Desktop 55% 67% · Mobile 57% 69%",
    description: "A restrained ridge line gives the most spacious scene a precise direction.",
    alt: "Serene navy desert basin with a softly illuminated ridge leading to the horizon.",
  },
  {
    id: "north-star-lake",
    name: "North Star Lake",
    fileName: "05-north-star-lake-screenprint.webp",
    publicPath: "/brand/landscapes/screenprint/05-north-star-lake-screenprint.webp",
    image: "/brand/landscapes/screenprint/05-north-star-lake-screenprint.webp",
    cue: "One star above the valley",
    role: "Dark CTA · presentation cover",
    safeZone: "Upper-left 48%",
    focalPoint: "Desktop 50% 61% · Mobile 50% 63%",
    description: "A modest star aligns with the valley opening to create a quiet point of orientation.",
    alt: "Still alpine lake at blue hour with one star above a warm valley opening.",
  },
  {
    id: "dawn-meadow",
    name: "Dawn Meadow",
    fileName: "06-dawn-meadow-screenprint.webp",
    publicPath: "/brand/landscapes/screenprint/06-dawn-meadow-screenprint.webp",
    image: "/brand/landscapes/screenprint/06-dawn-meadow-screenprint.webp",
    cue: "A path to the clearing",
    role: "Editorial story · lighter campaign moment",
    safeZone: "Upper-left 55%",
    focalPoint: "Desktop 53% 69% · Mobile 55% 70%",
    description: "A soft trail and clearing bring warmth to the system without leaving blue hour.",
    alt: "Blue-hour meadow with a pale path leading through wildflowers to a warm clearing.",
  },
];
