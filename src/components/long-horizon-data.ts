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
  id: "adaptive";
  label: string;
  events: JourneyEvent[];
};

export const leadContext = {
  person: "Maya Chen",
  company: "Northstar",
  goal: "Learn whether Northstar needs help finding and following up with potential customers.",
};

export const chapterCopy: Record<JourneyChapter, ChapterContent> = {
  research: {
    shortLabel: "Research",
    title: "Know the person.",
    summary: "Research Maya, Northstar, and the rules.",
    why: "Make the opening specific.",
    next: "Send one relevant connection request.",
    holdAfter: 2300,
  },
  "first-outreach": {
    shortLabel: "First message",
    title: "Start with a reason.",
    summary: "Use what Lemma learned for one short message.",
    why: "Open a conversation—not a meeting.",
    next: "Wait to see what happens.",
    message:
      "Congrats on growing the sales team. Is the priority reaching more potential customers, or improving follow-up with the people you already contact?",
    holdAfter: 2600,
  },
  "content-wait": {
    shortLabel: "Wait",
    title: "No reply? Wait.",
    summary: "No reply. Lemma sends nothing.",
    why: "A reminder would only add noise.",
    next: "Look for a useful reason to follow up.",
    holdAfter: 2500,
  },
  "content-followup": {
    shortLabel: "New reason",
    title: "Restart with a reason.",
    summary:
      "Northstar enters a new market. Lemma uses that change to ask a sharper question.",
    why: "A meaningful change earns a new message.",
    next: "Send one relevant question.",
    message:
      "Saw Northstar launched in the UK. Is the bigger challenge finding enough potential customers, or following up consistently with the ones you already contact?",
    holdAfter: 3200,
  },
  "reengage-wait": {
    shortLabel: "Learn the need",
    title: "Use the reply to understand the need.",
    summary:
      "Maya says the team finds potential customers, but follow-up is inconsistent. Lemma asks one useful question.",
    why: "Good selling understands the need before asking for a meeting.",
    next: "Ask how many people the team needs to reach and who can do the work.",
    message:
      "How many potential customers does the team need to contact each month?",
    holdAfter: 2700,
  },
  "reengage-signal": {
    shortLabel: "Voice details",
    title: "Go deeper without booking a call.",
    summary:
      "Maya shares the target and team size. Lemma sends an async voice conversation.",
    why: "She can explain the process in her own time.",
    next: "Check whether the opportunity is real and prepare it for you.",
    message:
      "You can talk this through whenever it suits you—no calendar needed.",
    holdAfter: 3300,
  },
  handoff: {
    shortLabel: "Ready for you",
    title: "A real opportunity, ready for you.",
    summary: "The need, size, limits, messages, and next step are ready.",
    why: "You enter with the full history and a real reason to talk.",
    next: "Review and take over.",
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
    why: "Northstar matches the audience and Maya leads sales.",
    next: "Check whether there is a good reason to contact her.",
  },
  {
    id: "shared-d1-decision",
    day: 1,
    lane: "decision",
    chapter: "research",
    shared: true,
    title: "Relevant person to contact",
    summary: "Lemma checks whether contacting Maya makes sense.",
    why: "The match looks right, and the work stays within your rules.",
    next: "Check Maya, Northstar, and what the company is doing now.",
  },
  {
    id: "shared-d1-task",
    day: 1,
    lane: "task",
    chapter: "research",
    shared: true,
    title: "Research + rules",
    summary:
      "Lemma records what Maya is working on, what it may send, the sources you allowed, and an opening written for her.",
    why: "What Lemma learns can guide every later step.",
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
      "Saw Northstar is growing its sales team. Thought it could be useful to connect.",
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
    next: "Keep the history and react to what happens next.",
    message:
      "Is the priority reaching more potential customers, or improving follow-up with the people you already contact?",
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
    summary: "The opportunity is real and the next step needs you.",
    why: "Your judgment now adds more value than another step from Lemma.",
    next: "Prepare the conversation for you.",
  },
  {
    id: `handoff-${day}-task`,
    day,
    lane: "task",
    chapter: "handoff",
    title: "Prepare the conversation for you",
    summary:
      "The need, number of people to reach, team limits, messages, and recommended next step are attached.",
    why: "You should enter ready to advise—not ask the same questions again.",
    next: "Notify you.",
  },
  {
    id: `handoff-${day}-interaction`,
    day,
    lane: "interaction",
    chapter: "handoff",
    title: "Real opportunity ready",
    summary: "You receive the full history and recommended next move.",
    why: "You can continue the sale from where Lemma stopped.",
    next: "Review the history and step in.",
    message: evidence,
    outcome: "Ready for you",
  },
];

const adaptiveJourney: JourneyEvent[] = [
  {
    id: "sales-d7-signal",
    day: 7,
    lane: "signal",
    chapter: "content-wait",
    title: "No reply",
    summary: "Four days pass without a reply.",
    why: "No reply is not a reason to send an empty reminder.",
    next: "Wait instead of sending noise.",
  },
  {
    id: "sales-d7-decision",
    day: 7,
    lane: "decision",
    chapter: "content-wait",
    title: "Wait — no empty reminder",
    summary: "Lemma sends nothing.",
    why: "Another copy-paste reminder would only add noise.",
    next: "Keep the history and look for a useful reason to follow up.",
  },
  {
    id: "sales-d12-signal",
    day: 12,
    lane: "signal",
    chapter: "content-followup",
    title: "Northstar enters a new market",
    summary:
      "A public update shows Northstar has launched in the UK.",
    why: "The change creates a fresh, relevant reason to contact Maya.",
    next: "Decide whether the change earns another message.",
  },
  {
    id: "sales-d12-decision",
    day: 12,
    lane: "decision",
    chapter: "content-followup",
    title: "Restart with a new reason",
    summary:
      "Lemma chooses one question tied to Northstar’s new market.",
    why: "The message is based on what changed—not the calendar.",
    next: "Write one short, specific question.",
  },
  {
    id: "sales-d12-task",
    day: 12,
    lane: "task",
    chapter: "content-followup",
    title: "Write a question based on what changed",
    summary:
      "Lemma connects the UK launch to the need for consistent follow-up.",
    why: "It makes the question timely and easy to answer.",
    next: "Send it once.",
  },
  {
    id: "sales-d12-interaction",
    day: 12,
    lane: "interaction",
    chapter: "content-followup",
    title: "Sharper message sent",
    summary: "The new question is sent in the same LinkedIn conversation.",
    why: "It gives Maya a relevant reason to respond.",
    next: "Wait for Maya’s response.",
    message:
      "Saw Northstar launched in the UK. Is the bigger challenge finding enough potential customers, or following up consistently with the ones you already contact?",
  },
  {
    id: "sales-d16-signal",
    day: 16,
    lane: "signal",
    chapter: "reengage-wait",
    title: "Maya names the real problem",
    summary:
      "Maya replies: “We find potential customers. Following up consistently is the hard part.”",
    why: "The reply reveals a concrete need instead of generic interest.",
    next: "Ask one question that checks whether the opportunity is real.",
  },
  {
    id: "sales-d16-decision",
    day: 16,
    lane: "decision",
    chapter: "reengage-wait",
    title: "Understand the need before asking for a meeting",
    summary: "Lemma decides to clarify how many people the team must reach and who can do the work.",
    why: "One useful question can show whether Lemma can help without calendar pressure.",
    next: "Prepare one question about the need.",
  },
  {
    id: "sales-d16-task",
    day: 16,
    lane: "task",
    chapter: "reengage-wait",
    title: "Choose one useful question",
    summary:
      "Lemma asks for the monthly outreach target instead of launching into a pitch.",
    why: "The answer will show whether the problem is material.",
    next: "Send the question.",
  },
  {
    id: "sales-d16-interaction",
    day: 16,
    lane: "interaction",
    chapter: "reengage-wait",
    title: "Useful question sent",
    summary: "Lemma keeps learning inside the same conversation.",
    why: "Maya can answer without booking a call.",
    next: "Wait for the detail that shows whether Lemma can help.",
    message:
      "How many potential customers does the team need to contact each month?",
  },
  {
    id: "sales-d20-signal",
    day: 20,
    lane: "signal",
    chapter: "reengage-signal",
    title: "Maya shares the target and constraint",
    summary:
      "Northstar wants to contact 200 potential customers each month with two sellers.",
    why: "The need is specific, important, and difficult for a two-person team.",
    next: "Go deeper on the current process.",
  },
  {
    id: "sales-d20-decision",
    day: 20,
    lane: "decision",
    chapter: "reengage-signal",
    title: "The need is real—go deeper",
    summary:
      "Lemma decides that a short voice conversation can clarify how the team works.",
    why: "Voice captures nuance without forcing Maya into a sales call.",
    next: "Prepare an asynchronous voice conversation.",
  },
  {
    id: "sales-d20-task",
    day: 20,
    lane: "task",
    chapter: "reengage-signal",
    title: "Prepare the voice conversation",
    summary:
      "Lemma carries the target, team size, and earlier messages into the questions.",
    why: "Maya does not have to repeat what Lemma already knows.",
    next: "Send the link.",
  },
  {
    id: "sales-d20-interaction",
    day: 20,
    lane: "interaction",
    chapter: "reengage-signal",
    title: "Voice conversation link sent",
    summary: "Maya receives a link she can open whenever it suits her.",
    why: "She can explain the process and ask questions in her own time.",
    next: "Wait for Maya to complete it.",
    message:
      "You can talk this through whenever it suits you—no calendar needed.",
  },
  {
    id: "sales-d27-signal",
    day: 27,
    lane: "signal",
    chapter: "handoff",
    title: "Maya completes the conversation",
    summary:
      "Maya explains how the team works today and asks how Lemma would run the follow-up.",
    why: "The opportunity now has a clear need, scope, and next question.",
    next: "Prepare the full history for you.",
  },
  {
    id: "sales-d28-signal",
    day: 28,
    lane: "signal",
    chapter: "handoff",
    title: "Real opportunity",
    summary:
      "Maya wants to see how Lemma would run consistent follow-up for Northstar.",
    why: "There is a real problem, quantified need, and explicit interest.",
    next: "Bring you in with the full history.",
  },
  ...createHandoffEvents({
    day: 28,
    evidence:
      "Northstar wants to contact 200 potential customers each month with two sellers. Maya wants to see how Lemma would run the follow-up.",
  }),
];

export const scenarios: JourneyScenario[] = [
  {
    id: "adaptive",
    label: "Wait, restart, understand, bring you in.",
    events: [...sharedEvents, ...adaptiveJourney],
  },
];
