export type JourneyLane = "signal" | "decision" | "task" | "interaction";

export type JourneyChapter =
  | "research"
  | "first-outreach"
  | "content-wait"
  | "content-followup"
  | "voice-request"
  | "voice-call"
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
  id: "content" | "voice" | "reengagement";
  label: string;
  trigger: string;
  preview: boolean;
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
    title: "Research before reaching out.",
    summary:
      "Lemma checks Maya, Northstar, the current partnerships priority, what it may send, and the sources approved for this Mission.",
    why:
      "The relationship starts from real context instead of a generated icebreaker.",
    next: "Send one contextual connection request.",
    holdAfter: 2300,
  },
  "first-outreach": {
    shortLabel: "First outreach",
    title: "Open the conversation without forcing it.",
    summary:
      "After Maya accepts, Lemma turns the same research into a concise first message.",
    why:
      "The goal is a relevant conversation—not an immediate meeting at any cost.",
    next: "Preserve the context and react to what happens next.",
    message:
      "Congrats on the partnerships expansion. Is building a repeatable partner pipeline already part of the plan—or still being shaped?",
    holdAfter: 2600,
  },
  "content-wait": {
    shortLabel: "Wait",
    title: "Silence is not a reason to send an empty bump.",
    summary:
      "Four days pass without a reply. Lemma keeps the full thread but deliberately takes no external action.",
    why:
      "Waiting protects relevance and leaves room for a genuinely useful next move.",
    next: "Reassess when the configured follow-up window opens.",
    holdAfter: 2500,
  },
  "content-followup": {
    shortLabel: "Useful content",
    title: "Return with something useful.",
    summary:
      "The follow-up window opens and an article approved for this Mission still matches Northstar’s priority.",
    why:
      "The resource answers a real problem instead of merely asking Maya for attention again.",
    next: "Share the article once, then wait.",
    message:
      "This short piece on creating a repeatable partner pipeline may be useful as you shape the motion at Northstar.",
    holdAfter: 3200,
  },
  "voice-request": {
    shortLabel: "Call requested",
    title: "Maya agrees to a voice-agent call.",
    summary:
      "Maya agrees to a disclosed call from Lemma’s voice agent to get direct answers about setup, channels, and fit.",
    why:
      "The call begins with Maya’s consent and the Operator’s permission, with the full conversation already in context.",
    next: "Prepare the call brief, approved answers, and qualification criteria.",
    holdAfter: 2700,
  },
  "voice-call": {
    shortLabel: "Answer + qualify",
    title: "Answer first. Then qualify.",
    summary:
      "The voice agent answers from Operator-approved information, then learns the use case, current process, pain, urgency, scope, constraints, and overall fit.",
    why:
      "Maya’s answers and the reason for the recommendation remain reviewable by the Operator.",
    next: "Recommend the right next step, and book a meeting only when permitted.",
    message:
      "Maya: Can this fit our partner motion, and how quickly can we start?\nVoice: I’ll answer both. Then I’ll ask a few focused questions so I can recommend the right next step.",
    holdAfter: 3600,
  },
  "reengage-wait": {
    shortLabel: "Respect timing",
    title: "Respect the timing without losing context.",
    summary:
      "Maya says, “Not now—try me later this month.” Lemma stops the active follow-up and schedules one return inside the same 28-day Sequence.",
    why:
      "The next touch follows Maya’s timing rather than an arbitrary re-engagement cadence.",
    next: "Return only when the agreed window opens.",
    holdAfter: 2700,
  },
  "reengage-signal": {
    shortLabel: "Agreed return",
    title: "The agreed window creates a credible re-entry.",
    summary:
      "The agreed window opens. Lemma reuses the existing thread, refreshes permission checks, and prepares one concise return.",
    why:
      "The message acknowledges Maya’s request instead of pretending this is a new introduction.",
    next: "Send one contextual re-engagement message.",
    message:
      "You asked me to circle back later this month. Is the partner-pipeline work a better conversation now?",
    holdAfter: 3300,
  },
  handoff: {
    shortLabel: "Ready for you",
    title: "The full context is ready.",
    summary:
      "Lemma brings you the research, conversation history, latest outcome, and recommended next step.",
    why:
      "You step in when judgment adds value—without rebuilding the story.",
    next: "Review the context and continue the conversation.",
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
    title: "Lead added to Mission",
    summary: "Maya Chen at Northstar is added to this Mission.",
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
    summary: "Lemma decides this Lead merits deeper research.",
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
      "The approved LinkedIn connection request is sent through the selected Sender.",
    why:
      "The note references Northstar’s current priority instead of generic personalization.",
    next: "Wait for a channel signal.",
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
    summary: "Lemma chooses a short, useful first message.",
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
    summary: "The approved first message is sent through the same Sender.",
    why: "It introduces the relevance without front-loading a sales pitch.",
    next: "Keep the context and react to the next signal.",
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
    summary: "Lemma decides the next step needs human judgment.",
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
    why: "Time is the signal, but prior research keeps the follow-up relevant.",
    next: "Decide whether the article justifies another message.",
  },
  {
    id: "content-d14-decision",
    day: 14,
    lane: "decision",
    chapter: "content-followup",
    title: "Share the useful article",
    summary: "Lemma chooses the article rather than a reminder.",
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

const voiceBranch: JourneyEvent[] = [
  {
    id: "voice-d5-signal",
    day: 5,
    lane: "signal",
    chapter: "voice-request",
    title: "Maya agrees to a voice-agent call",
    summary:
      "Maya is told she will speak with Lemma’s voice agent and agrees to continue by phone.",
    why:
      "The preview begins with disclosure and consent, not an unsolicited call.",
    next: "Confirm that this Mission permits voice.",
  },
  {
    id: "voice-d5-decision",
    day: 5,
    lane: "decision",
    chapter: "voice-request",
    title: "Voice is permitted",
    summary:
      "The Mission permits disclosed voice calls, and Maya has agreed to one.",
    why:
      "Both Operator permission and Lead consent are checked before the call.",
    next: "Prepare a call brief and qualification frame.",
  },
  {
    id: "voice-d5-task",
    day: 5,
    lane: "task",
    chapter: "voice-request",
    title: "Prepare call brief",
    summary:
      "Questions, history, approved answers, use-case prompts, and fit criteria are assembled.",
    why: "The agent should never begin without the prior context.",
    next: "Place the consented call.",
  },
  {
    id: "voice-d6-interaction",
    day: 6,
    lane: "interaction",
    chapter: "voice-call",
    title: "Voice call",
    summary:
      "The voice agent answers from approved information, then asks only what is still needed.",
    why:
      "A live conversation resolves detail efficiently without repeating known context.",
    next:
      "Capture the use case, process, pain, urgency, scope, constraints, and fit.",
    message:
      "Maya: Can this fit our partner motion, and how quickly can we start?\nVoice: I’ll answer both. Then I’ll ask a few focused questions so I can recommend the right next step.",
    holdAfter: 1800,
  },
  {
    id: "voice-d7-signal",
    day: 7,
    lane: "signal",
    chapter: "voice-call",
    title: "Qualification answers captured",
    summary:
      "The call captures Maya’s use case, current process, pain, urgency, scope, constraints, and fit against the Operator’s criteria.",
    why: "The result is explainable and reviewable by the Operator.",
    next: "Choose the best next step.",
  },
  {
    id: "voice-d7-decision",
    day: 7,
    lane: "decision",
    chapter: "voice-call",
    title: "Recommend a working session",
    summary: "Maya’s answers meet the Operator’s configured criteria.",
    why:
      "This is a reviewable recommendation—not a final commercial judgment.",
    next: "Offer approved meeting times when booking is permitted.",
  },
  {
    id: "voice-d7-task",
    day: 7,
    lane: "task",
    chapter: "voice-call",
    title: "Offer approved times",
    summary:
      "When calendar access and booking are enabled, Lemma proposes Operator-approved times.",
    why: "A permitted next step becomes an immediate, practical action.",
    next: "Book the meeting Maya selects.",
  },
  {
    id: "voice-d7-interaction",
    day: 7,
    lane: "interaction",
    chapter: "voice-call",
    title: "Meeting booked",
    summary:
      "Maya selects an approved time, and the working session is booked.",
    why:
      "The voice agent moves the conversation forward within the Operator’s rules.",
    next: "Return the call evidence and booking to the Operator.",
    message: "30-minute working session booked for Thursday at 10:00.",
  },
  ...createHandoffEvents({
    day: 9,
    evidence:
      "Questions answered, fit evidence captured, and a working session booked for Thursday at 10:00.",
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
    why: "The Lead has supplied a real timing signal and an explicit boundary.",
    next: "Respect the timing and keep the thread.",
  },
  {
    id: "reengage-d7-decision",
    day: 7,
    lane: "decision",
    chapter: "reengage-wait",
    title: "Respect the timing",
    summary: "Lemma stops the active follow-up.",
    why: "Another message now would ignore Maya’s explicit request.",
    next: "Schedule one return inside the same 28-day Sequence.",
  },
  {
    id: "reengage-d7-task",
    day: 7,
    lane: "task",
    chapter: "reengage-wait",
    title: "Schedule one return",
    summary: "Lemma schedules one contextual return for the agreed window.",
    why:
      "The Sequence can persist without turning into repeated pressure.",
    next: "Wait until the agreed date.",
  },
  {
    id: "reengage-d21-signal",
    day: 21,
    lane: "signal",
    chapter: "reengage-signal",
    title: "Agreed window reached",
    summary: "The requested return window opens.",
    why: "Lemma now has a Lead-defined reason to re-enter the thread.",
    next: "Check whether re-engagement remains permitted.",
  },
  {
    id: "reengage-d21-decision",
    day: 21,
    lane: "decision",
    chapter: "reengage-signal",
    title: "Re-open the existing thread",
    summary: "Lemma chooses one concise return tied to Maya’s request.",
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
    next: "Run the final permission checks.",
  },
  {
    id: "reengage-d23-task",
    day: 23,
    lane: "task",
    chapter: "reengage-signal",
    title: "Recheck permission",
    summary: "Sender, permission, and do-not-contact checks still pass.",
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
    title: "Maya reopens the thread",
    summary: "Maya replies and references the earlier conversation.",
    why:
      "The agreed return has reopened a relationship with preserved history.",
    next: "Bring you back with full context.",
  },
  ...createHandoffEvents({
    day: 26,
    evidence:
      "Maya reopened the thread after the agreed delay and asked about fit and timing.",
  }),
];

export const scenarios: JourneyScenario[] = [
  {
    id: "content",
    label: "Content follow-up",
    trigger: "No reply",
    preview: false,
    events: [...sharedEvents, ...contentBranch],
  },
  {
    id: "voice",
    label: "Voice qualification",
    trigger: "Call requested",
    preview: true,
    events: [...sharedEvents, ...voiceBranch],
  },
  {
    id: "reengagement",
    label: "Re-engagement",
    trigger: "Try me later",
    preview: false,
    events: [...sharedEvents, ...reengagementBranch],
  },
];

export const BRANCH_START_INDEX = sharedEvents.length;
