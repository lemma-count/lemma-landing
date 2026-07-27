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
    shortLabel: "Context",
    title: "Know the person.",
    summary:
      "Lemma checks Maya, Northstar, your goal, and what it may send.",
    why:
      "The first message uses what Lemma knows instead of a generic opening.",
    next: "Send one relevant connection request.",
    holdAfter: 2300,
  },
  "first-outreach": {
    shortLabel: "First message",
    title: "Start with a reason.",
    summary:
      "When Maya accepts, Lemma uses the same context for one short message.",
    why: "Start a conversation. Do not force a meeting.",
    next: "Keep the conversation and wait for what happens.",
    message:
      "Congrats on growing the partnerships team. Do you already have a steady way to find new partners, or are you still working that out?",
    holdAfter: 2600,
  },
  "content-wait": {
    shortLabel: "Wait",
    title: "No reply? Wait.",
    summary:
      "Four days pass. Lemma remembers the conversation and sends nothing.",
    why: "An empty reminder adds noise without helping Maya.",
    next: "Check again on the planned date.",
    holdAfter: 2500,
  },
  "content-followup": {
    shortLabel: "Article follow-up",
    title: "Share something useful.",
    summary:
      "The planned date arrives. An article still fits what Maya is working on.",
    why: "Give Maya something helpful—not another request for attention.",
    next: "Share it once. Then wait.",
    message:
      "This short article on building a steady way to find new partners may help as you work out the plan at Northstar.",
    holdAfter: 3200,
  },
  "reengage-wait": {
    shortLabel: "Respect timing",
    title: "Come back when asked.",
    summary:
      "Maya says, “Not now—try me later this month.” Lemma stops and schedules one return.",
    why: "Her timing matters more than a fixed message schedule.",
    next: "Wait for the date she gave.",
    holdAfter: 2700,
  },
  "reengage-signal": {
    shortLabel: "Return when asked",
    title: "Continue the same conversation.",
    summary:
      "The date Maya gave arrives. Lemma checks the rules and prepares one short return.",
    why: "It continues the conversation instead of starting over.",
    next: "Send one message tied to Maya’s request.",
    message:
      "You asked me to come back later this month. Is finding new partners a better conversation now?",
    holdAfter: 3300,
  },
  handoff: {
    shortLabel: "Ready for you",
    title: "Ready for you.",
    summary:
      "You get the context, messages, latest result, and next step.",
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
    title: "Person added to the contact plan",
    summary: "Maya Chen at Northstar is added to this contact plan.",
    why: "Northstar matches the audience and Maya leads partnerships.",
    next: "Check whether there is a good reason to contact her.",
  },
  {
    id: "shared-d1-decision",
    day: 1,
    lane: "decision",
    chapter: "research",
    shared: true,
    title: "Good fit to contact",
    summary: "Lemma checks whether Maya is a good fit to contact.",
    why: "The match looks right, and the work stays within your rules.",
    next: "Check Maya, Northstar, and what the company is doing now.",
  },
  {
    id: "shared-d1-task",
    day: 1,
    lane: "task",
    chapter: "research",
    shared: true,
    title: "Context + rules",
    summary:
      "Lemma records what Maya is working on, what it may send, the sources you allowed, and an opening written for her.",
    why: "The same context can guide every later step.",
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
      "The LinkedIn connection request follows your rules and is sent through your account.",
    why:
      "The note refers to what Northstar is doing instead of using copy-paste wording.",
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
    next: "Check whether a first message makes sense.",
  },
  {
    id: "shared-d3-decision",
    day: 3,
    lane: "decision",
    chapter: "first-outreach",
    shared: true,
    title: "Continue with value",
    summary: "Lemma prepares a short first message based on what it knows.",
    why: "The goal is to open a conversation, not force a meeting.",
    next: "Prepare a message based on what Northstar is working on.",
  },
  {
    id: "shared-d3-task",
    day: 3,
    lane: "task",
    chapter: "first-outreach",
    shared: true,
    title: "Prepare first message",
    summary: "Lemma turns what it learned into a short opening.",
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
    summary:
      "The first message follows your rules and is sent through your LinkedIn account.",
    why: "It explains why the message fits without turning it into a sales pitch.",
    next: "Keep the context and react to what happens next.",
    message:
      "Do you already have a steady way to find new partners, or are you still working that out?",
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
      "The next step needs you to decide, so Lemma brings you in.",
    why: "The next move may affect trust or the chance of working together.",
    next: "Prepare everything you need.",
  },
  {
    id: `handoff-${day}-task`,
    day,
    lane: "task",
    chapter: "handoff",
    title: "Get it ready for you",
    summary:
      "Context, messages, timing, the latest response, and the recommended next step are attached.",
    why: "You should be ready to answer, not piece the story together.",
    next: "Notify you.",
  },
  {
    id: `handoff-${day}-interaction`,
    day,
    lane: "interaction",
    chapter: "handoff",
    title: "You’re notified",
    summary: "Everything you need is ready.",
    why: "You can continue without piecing the conversation together.",
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
    why: "No reply is not a reason to send an empty reminder.",
    next: "Decide whether waiting is smarter.",
  },
  {
    id: "content-d7-decision",
    day: 7,
    lane: "decision",
    chapter: "content-wait",
    title: "Wait — no empty reminder",
    summary: "Lemma sends nothing.",
    why: "Another copy-paste reminder would only add noise.",
    next: "Keep the history until the planned date.",
  },
  {
    id: "content-d14-signal",
    day: 14,
    lane: "signal",
    chapter: "content-followup",
    title: "Planned date reached",
    summary:
      "The article still matches what Northstar is working on.",
    why: "Enough time has passed, and the earlier context still fits.",
    next: "Check whether the article gives a good reason to send another message.",
  },
  {
    id: "content-d14-decision",
    day: 14,
    lane: "decision",
    chapter: "content-followup",
    title: "Share the useful article",
    summary: "Lemma prepares the article follow-up rather than a reminder.",
    why:
      "The article helps with a real problem instead of merely asking for attention.",
    next: "Prepare a short note explaining why the article fits.",
  },
  {
    id: "content-d14-task",
    day: 14,
    lane: "task",
    chapter: "content-followup",
    title: "Write article follow-up",
    summary:
      "Lemma selects a helpful part and writes the sharing note.",
    why: "The article connects directly to Northstar’s situation.",
    next: "Share the article once.",
  },
  {
    id: "content-d14-interaction",
    day: 14,
    lane: "interaction",
    chapter: "content-followup",
    title: "Article sent",
    summary: "The article is shared in a LinkedIn message.",
    why: "This follow-up shares something helpful instead of another reminder.",
    next: "Wait for Maya’s response.",
    message:
      "This short article on building a steady way to find new partners may help as you work out the plan at Northstar.",
  },
  {
    id: "content-d21-signal",
    day: 21,
    lane: "signal",
    chapter: "handoff",
    title: "Maya replies",
    summary: "Maya replies with a concrete question about setup time.",
    why:
      "Maya asked a clear question that needs your judgment.",
    next: "Bring you back with the full history.",
  },
  ...createHandoffEvents({
    day: 21,
    evidence: "Maya asked how quickly Northstar could start finding new partners.",
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
    why: "Another message now would ignore Maya’s clear request.",
    next: "Schedule one return inside the same 28-day contact plan.",
  },
  {
    id: "reengage-d7-task",
    day: 7,
    lane: "task",
    chapter: "reengage-wait",
    title: "Schedule one return",
    summary: "Lemma schedules one follow-up tied to the date Maya gave.",
    why:
      "The contact plan can continue without turning into repeated pressure.",
    next: "Wait until the agreed date.",
  },
  {
    id: "reengage-d21-signal",
    day: 21,
    lane: "signal",
    chapter: "reengage-signal",
    title: "Date Maya gave reached",
    summary: "It is time to return as Maya asked.",
    why: "Lemma now has a reason Maya gave to return to the conversation.",
    next: "Check whether your rules still allow the return message.",
  },
  {
    id: "reengage-d21-decision",
    day: 21,
    lane: "decision",
    chapter: "reengage-signal",
    title: "Continue the existing conversation",
    summary: "Lemma prepares one short return tied to Maya’s request.",
    why:
      "The message continues the conversation instead of restarting it.",
    next: "Prepare the return message.",
  },
  {
    id: "reengage-d22-task",
    day: 22,
    lane: "task",
    chapter: "reengage-signal",
    title: "Write return note",
    summary:
      "Lemma reconnects the prior conversation to the agreed timing.",
    why: "The note is specific without repeating the original sales message.",
    next: "Check the rules one last time.",
  },
  {
    id: "reengage-d23-task",
    day: 23,
    lane: "task",
    chapter: "reengage-signal",
    title: "Check the rules again",
    summary:
      "Your LinkedIn account is ready, the message follows your rules, and Maya has not asked to be removed.",
    why:
      "Before sending, Lemma checks that the return still follows your rules and Maya’s request.",
    next: "Send the one return message Maya agreed to.",
  },
  {
    id: "reengage-d23-interaction",
    day: 23,
    lane: "interaction",
    chapter: "reengage-signal",
    title: "Return message sent",
    summary: "A LinkedIn message tied to Maya’s request is sent.",
    why: "The message returns at Maya’s requested time without pressure.",
    next: "Wait for Maya’s response.",
    message:
      "You asked me to come back later this month. Is finding new partners a better conversation now?",
  },
  {
    id: "reengage-d25-signal",
    day: 25,
    lane: "signal",
    chapter: "handoff",
    title: "Maya continues the conversation",
    summary: "Maya replies and references the earlier conversation.",
    why:
      "The return continued the conversation with the same history.",
    next: "Bring you back with the full history.",
  },
  ...createHandoffEvents({
    day: 26,
    evidence:
      "Maya continued the conversation after the agreed delay and asked whether it fits and when to start.",
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
