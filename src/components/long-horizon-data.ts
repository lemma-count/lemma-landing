export type JourneyLane = "signal" | "decision" | "task" | "interaction";

export type JourneyChapter =
  | "research"
  | "first-outreach"
  | "content-wait"
  | "content-followup"
  | "reengage-wait"
  | "reengage-signal"
  | "handoff";

export type JourneyEvent = {
  id: string;
  day: number;
  lane: JourneyLane;
  chapter: JourneyChapter;
  title: string;
  summary: string;
  why: string;
  next: string;
  shared?: boolean;
  message?: string;
  outcome?: string;
  holdAfter?: number;
};

export type ChapterContent = {
  shortLabel: string;
  title: string;
  summary: string;
  why: string;
  next: string;
  holdAfter?: number;
  message?: string;
  outcome?: string;
};

export type JourneyScenario = {
  id: "content" | "reengagement";
  label: string;
  trigger: string;
  events: JourneyEvent[];
};

export const leadContext = {
  person: "Maya Chen",
  company: "Northstar",
  goal: "Start a relevant conversation with Maya at Northstar.",
};

export const chapterCopy: Record<JourneyChapter, ChapterContent> = {
  research: {
    shortLabel: "Research",
    title: "Know the person.",
    summary:
      "Lemma checks Maya, Northstar, your goal, and what it may send.",
    why:
      "The first message uses the research instead of a made-up icebreaker.",
    next: "Send one relevant connection request.",
    holdAfter: 2300,
  },
  "first-outreach": {
    shortLabel: "First outreach",
    title: "Start with relevance.",
    summary:
      "When Maya accepts, Lemma uses the same research for one short message.",
    why: "Start a conversation. Do not force a meeting.",
    next: "Keep the conversation and wait for what happens.",
    message:
      "Congrats on the partnerships expansion. Is building a repeatable partner pipeline already part of the plan—or still being shaped?",
    holdAfter: 2600,
  },
  "content-wait": {
    shortLabel: "Wait",
    title: "No reply? Wait.",
    summary:
      "Four days pass. Lemma remembers the conversation and sends nothing.",
    why: "An empty reminder adds noise, not value.",
    next: "Check again when the follow-up window opens.",
    holdAfter: 2500,
  },
  "content-followup": {
    shortLabel: "Useful content",
    title: "Come back with value.",
    summary:
      "The follow-up window opens. A useful article still fits Maya’s priority.",
    why: "Give Maya a reason to care—not another request for attention.",
    next: "Share it once. Then wait.",
    message:
      "This short piece on creating a repeatable partner pipeline may be useful as you shape the motion at Northstar.",
    holdAfter: 3200,
  },
  "reengage-wait": {
    shortLabel: "Respect timing",
    title: "Come back when asked.",
    summary:
      "Maya says, “Not now—try me later this month.” Lemma stops and schedules one return.",
    why: "Her timing matters more than a preset cadence.",
    next: "Wait for the date she gave.",
    holdAfter: 2700,
  },
  "reengage-signal": {
    shortLabel: "Agreed return",
    title: "Continue the same conversation.",
    summary:
      "The agreed window opens. Lemma checks the rules and prepares one short return.",
    why: "It continues the conversation instead of starting over.",
    next: "Send one message tied to Maya’s request.",
    message:
      "You asked me to circle back later this month. Is the partner-pipeline work a better conversation now?",
    holdAfter: 3300,
  },
  handoff: {
    shortLabel: "Ready for you",
    title: "Ready for you.",
    summary:
      "You get the research, messages, latest outcome, and next step.",
    why: "You can step in without rebuilding the story.",
    next: "Review it and take over.",
    outcome: "Ready for you",
  },
};

export const sharedEvents: JourneyEvent[] = [
  {
    id: "shared-d1-signal",
    day: 1,
    lane: "signal",
    chapter: "research",
    shared: true,
    title: "Person added to the outreach plan",
    summary: "Maya Chen at Northstar is added to this outreach plan.",
    why: "Northstar matches the audience and Maya owns partnerships.",
    next: "Check whether there is a credible reason to reach out.",
  },
  {
    id: "shared-d1-decision",
    day: 1,
    lane: "decision",
    chapter: "research",
    shared: true,
    title: "Worth researching",
    summary: "Lemma checks that Maya is worth researching further.",
    why: "The initial match is credible, and outreach remains within your rules.",
    next: "Research Maya, Northstar, and the current business context.",
  },
  {
    id: "shared-d1-task",
    day: 1,
    lane: "task",
    chapter: "research",
    shared: true,
    title: "Research + rules",
    summary:
      "Lemma records the partnerships priority, what it may send, approved sources, and a tailored opening.",
    why: "The research gives every later step a shared source of context.",
    next: "Prepare the connection request.",
  },
  {
    id: "shared-d1-interaction",
    day: 1,
    lane: "interaction",
    chapter: "research",
    shared: true,
    title: "Request sent",
    summary:
      "The approved LinkedIn connection request is sent through your LinkedIn account.",
    why:
      "The note references Northstar’s current priority instead of generic personalization.",
    next: "Wait for a LinkedIn response.",
    message:
      "Saw Northstar is building its partnerships team. Thought it could be useful to connect.",
  },
  {
    id: "shared-d3-signal",
    day: 3,
    lane: "signal",
    chapter: "first-outreach",
    shared: true,
    title: "Connection accepted",
    summary: "Maya accepts the LinkedIn connection request.",
    why: "The acceptance creates a natural moment to continue.",
    next: "Decide whether a useful first message is appropriate.",
  },
  {
    id: "shared-d3-decision",
    day: 3,
    lane: "decision",
    chapter: "first-outreach",
    shared: true,
    title: "Continue with value",
    summary: "Lemma prepares a short first message based on the research.",
    why: "The goal is to open a conversation, not force a meeting.",
    next: "Prepare a message grounded in Northstar’s priority.",
  },
  {
    id: "shared-d3-task",
    day: 3,
    lane: "task",
    chapter: "first-outreach",
    shared: true,
    title: "Prepare first message",
    summary: "Lemma turns the research into a concise opening.",
    why: "The message stays specific while leaving Maya room to respond.",
    next: "Send the message through LinkedIn.",
  },
  {
    id: "shared-d3-interaction",
    day: 3,
    lane: "interaction",
    chapter: "first-outreach",
    shared: true,
    title: "Message sent",
    summary: "The approved first message is sent through your LinkedIn account.",
    why: "It introduces the relevance without front-loading a sales pitch.",
    next: "Keep the context and react to what happens next.",
    message:
      "Is building a repeatable partner pipeline already part of the plan—or still being shaped?",
  },
];

const createHandoffEvents = ({
  day,
  evidence,
}: {
  day: number;
  evidence: string;
}): JourneyEvent[] => [
  {
    id: `handoff-${day}-decision`,
    day,
    lane: "decision",
    chapter: "handoff",
    title: "Bring you in",
    summary:
      "The next step needs human judgment, so Lemma brings you in.",
    why: "The next move may shape trust, scope, or the commercial relationship.",
    next: "Prepare the complete context.",
  },
  {
    id: `handoff-${day}-task`,
    day,
    lane: "task",
    chapter: "handoff",
    title: "Prepare the handoff",
    summary:
      "Research, messages, timing, the latest response, and the recommended next step are attached.",
    why: "You should enter ready, not rebuild the story.",
    next: "Notify you.",
  },
  {
    id: `handoff-${day}-interaction`,
    day,
    lane: "interaction",
    chapter: "handoff",
    title: "You’re notified",
    summary: "Everything you need is ready.",
    why: "You can continue without reconstructing the conversation.",
    next: "Review the context and step in.",
    message: evidence,
    outcome: "Ready for you",
  },
];

const contentBranch: JourneyEvent[] = [
  {
    id: "content-d7-signal",
    day: 7,
    lane: "signal",
    chapter: "content-wait",
    title: "No reply",
    summary: "Four days pass without a reply.",
    why: "Silence is information, but not a reason to send an empty bump.",
    next: "Decide whether waiting is smarter.",
  },
  {
    id: "content-d7-decision",
    day: 7,
    lane: "decision",
    chapter: "content-wait",
    title: "Wait — no empty bump",
    summary: "Lemma deliberately takes no external action.",
    why: "Another generic reminder would add volume without adding relevance.",
    next: "Keep the context until the follow-up window.",
  },
  {
    id: "content-d14-signal",
    day: 14,
    lane: "signal",
    chapter: "content-followup",
    title: "Follow-up window reached",
    summary:
      "The approved article still matches Northstar’s partnerships priority.",
    why: "Enough time has passed, and the prior research still fits.",
    next: "Decide whether the article justifies another message.",
  },
  {
    id: "content-d14-decision",
    day: 14,
    lane: "decision",
    chapter: "content-followup",
    title: "Share the useful article",
    summary: "Lemma prepares the article follow-up rather than a reminder.",
    why:
      "The content answers a real problem instead of merely asking for attention.",
    next: "Prepare a short contextual note.",
  },
  {
    id: "content-d14-task",
    day: 14,
    lane: "task",
    chapter: "content-followup",
    title: "Write article follow-up",
    summary:
      "Lemma selects the useful excerpt and writes the sharing note.",
    why: "The resource is connected directly to Northstar’s situation.",
    next: "Share the article once.",
  },
  {
    id: "content-d14-interaction",
    day: 14,
    lane: "interaction",
    chapter: "content-followup",
    title: "Article sent",
    summary: "The article is shared in a LinkedIn message.",
    why: "This is a useful follow-up, not another bump.",
    next: "Wait for Maya’s response.",
    message:
      "This short piece on creating a repeatable partner pipeline may be useful as you shape the motion at Northstar.",
  },
  {
    id: "content-d21-signal",
    day: 21,
    lane: "signal",
    chapter: "handoff",
    title: "Maya replies",
    summary: "Maya replies with a concrete question about setup time.",
    why:
      "The conversation now contains a substantive reply and a question that needs human judgment.",
    next: "Bring you back with full context.",
  },
  ...createHandoffEvents({
    day: 21,
    evidence:
      "Maya asked how quickly Northstar could get a first motion running.",
  }),
];

const reengagementBranch: JourneyEvent[] = [
  {
    id: "reengage-d7-signal",
    day: 7,
    lane: "signal",
    chapter: "reengage-wait",
    title: "“Try me later this month”",
    summary: "Maya asks Lemma to return later in the month.",
    why: "Maya gave a clear time to return and set a clear boundary.",
    next: "Respect the timing and keep the conversation.",
  },
  {
    id: "reengage-d7-decision",
    day: 7,
    lane: "decision",
    chapter: "reengage-wait",
    title: "Respect the timing",
    summary: "Lemma stops the active follow-up.",
    why: "Another message now would ignore Maya’s explicit request.",
    next: "Schedule one return inside the same 28-day outreach plan.",
  },
  {
    id: "reengage-d7-task",
    day: 7,
    lane: "task",
    chapter: "reengage-wait",
    title: "Schedule one return",
    summary: "Lemma schedules one contextual return for the agreed window.",
    why:
      "The outreach plan can continue without turning into repeated pressure.",
    next: "Wait until the agreed date.",
  },
  {
    id: "reengage-d21-signal",
    day: 21,
    lane: "signal",
    chapter: "reengage-signal",
    title: "Agreed window reached",
    summary: "The requested return window opens.",
    why: "Lemma now has a reason Maya gave to return to the conversation.",
    next: "Check whether re-engagement remains permitted.",
  },
  {
    id: "reengage-d21-decision",
    day: 21,
    lane: "decision",
    chapter: "reengage-signal",
    title: "Continue the existing conversation",
    summary: "Lemma prepares one concise return tied to Maya’s request.",
    why:
      "The outreach continues the relationship instead of restarting it.",
    next: "Prepare the re-entry message.",
  },
  {
    id: "reengage-d22-task",
    day: 22,
    lane: "task",
    chapter: "reengage-signal",
    title: "Write re-entry note",
    summary:
      "Lemma reconnects the prior conversation to the agreed timing.",
    why: "The note is specific without repeating the original pitch.",
    next: "Check the rules one last time.",
  },
  {
    id: "reengage-d23-task",
    day: 23,
    lane: "task",
    chapter: "reengage-signal",
    title: "Check the rules again",
    summary:
      "The LinkedIn account, your rules, and do-not-contact checks still pass.",
    why: "A scheduled return never bypasses your rules or Maya’s request.",
    next: "Send the single agreed re-engagement.",
  },
  {
    id: "reengage-d23-interaction",
    day: 23,
    lane: "interaction",
    chapter: "reengage-signal",
    title: "Re-engagement sent",
    summary: "A contextual LinkedIn message is sent.",
    why: "The message returns at Maya’s requested time without pressure.",
    next: "Wait for Maya’s response.",
    message:
      "You asked me to circle back later this month. Is the partner-pipeline work a better conversation now?",
  },
  {
    id: "reengage-d25-signal",
    day: 25,
    lane: "signal",
    chapter: "handoff",
    title: "Maya continues the conversation",
    summary: "Maya replies and references the earlier conversation.",
    why:
      "The agreed return has reopened a relationship with preserved history.",
    next: "Bring you back with full context.",
  },
  ...createHandoffEvents({
    day: 26,
    evidence:
      "Maya continued the conversation after the agreed delay and asked about fit and timing.",
  }),
];

export const scenarios: JourneyScenario[] = [
  {
    id: "content",
    label: "Wait, then share an article",
    trigger: "No reply",
    events: [...sharedEvents, ...contentBranch],
  },
  {
    id: "reengagement",
    label: "Stop. Return when asked.",
    trigger: "Try me later",
    events: [...sharedEvents, ...reengagementBranch],
  },
];

export const BRANCH_START_INDEX = sharedEvents.length;
