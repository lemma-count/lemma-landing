"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";
import {
  Handle,
  Position,
  ReactFlow,
  type Edge,
  type Node,
  type NodeProps,
  type NodeTypes,
} from "@xyflow/react";
import {
  Circle,
  Diamond,
  GitFork,
  Pause,
  Play,
  Square,
  Triangle,
  type Icon,
} from "@phosphor-icons/react";
import { track } from "@vercel/analytics";
import {
  BRANCH_START_INDEX,
  chapterCopy,
  leadContext,
  scenarios,
  type JourneyEvent,
  type JourneyLane,
  type JourneyScenario,
} from "@/components/long-horizon-data";
import "@xyflow/react/dist/style.css";
import "./LongHorizonSection.css";

const DAY_COUNT = 28;
const MIN_DAY_WIDTH = 34;
const EVENT_NODE_SIZE = 34;
const TIMELINE_EDGE_INSET = 8;
const MIN_TRACK_WIDTH = DAY_COUNT * MIN_DAY_WIDTH;
const SHARED_DAYS = 3;
const INTRA_CHAPTER_DELAY = 1500;
const FALLBACK_CHAPTER_HOLD = 3000;
const BRANCH_START_HOLD = 1800;

const LANE_Y: Record<JourneyLane, number> = {
  signal: 45,
  decision: 103,
  task: 161,
  interaction: 219,
};

const laneMeta: Record<JourneyLane, { label: string; icon: Icon }> = {
  signal: { label: "WHAT CHANGED", icon: Diamond },
  decision: { label: "CHOICE", icon: Square },
  task: { label: "WORK", icon: Circle },
  interaction: { label: "CONTACT", icon: Triangle },
};

type EventNodeData = Record<string, unknown> & {
  event: JourneyEvent;
  index: number;
  playheadIndex: number;
  inspected: boolean;
  reducedMotion: boolean;
  onInspect: (index: number) => void;
  onKeyDown: (
    event: ReactKeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => void;
};

type EventGraphNode = Node<EventNodeData, "event">;

function EventNode({ data }: NodeProps<EventGraphNode>) {
  const IconComponent = laneMeta[data.event.lane].icon;
  const status = data.reducedMotion
    ? data.index === data.playheadIndex
      ? "current"
      : "static"
    : data.index === data.playheadIndex
      ? "current"
      : data.index < data.playheadIndex
        ? "complete"
        : "future";

  return (
    <div
      className={[
        "event-node",
        `event-node--${status}`,
        data.event.shared ? "event-node--shared" : "event-node--branch",
        data.inspected ? "event-node--inspected" : "",
      ].join(" ")}
    >
      <Handle id="top" type="target" position={Position.Top} />
      <Handle id="left" type="target" position={Position.Left} />
      <button
        type="button"
        className="event-node__button"
        data-event-index={data.index}
        aria-label={`Day ${data.event.day}, ${laneMeta[
          data.event.lane
        ].label.toLowerCase()}: ${data.event.title}`}
        aria-current={status === "current" ? "step" : undefined}
        aria-pressed={data.inspected}
        tabIndex={data.inspected || status === "current" ? 0 : -1}
        onClick={() => data.onInspect(data.index)}
        onKeyDown={(event) => data.onKeyDown(event, data.index)}
      >
        <IconComponent
          size={18}
          weight={status === "current" ? "fill" : "regular"}
          aria-hidden="true"
        />
      </button>
      <Handle id="right" type="source" position={Position.Right} />
      <Handle id="bottom" type="source" position={Position.Bottom} />
    </div>
  );
}

const nodeTypes: NodeTypes = { event: EventNode };

function getTimelineGeometry(viewportWidth: number) {
  const safeViewportWidth = Math.max(0, viewportWidth || 0);
  const trackWidth = Math.max(
    MIN_TRACK_WIDTH,
    safeViewportWidth - TIMELINE_EDGE_INSET * 2,
  );

  return {
    dayWidth: trackWidth / DAY_COUNT,
    trackWidth,
    canvasWidth: trackWidth + TIMELINE_EDGE_INSET * 2,
  };
}

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (!window.matchMedia) return undefined;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return reduced;
}

function DayGrid({
  activeDay,
  dayWidth,
  trackWidth,
}: {
  activeDay: number;
  dayWidth: number;
  trackWidth: number;
}) {
  return (
    <div
      className="day-grid"
      aria-hidden="true"
      style={{
        left: TIMELINE_EDGE_INSET,
        width: trackWidth,
        gridTemplateColumns: `repeat(${DAY_COUNT}, ${dayWidth}px)`,
      }}
    >
      {Array.from({ length: DAY_COUNT }, (_, index) => {
        const day = index + 1;
        return (
          <div
            className={[
              "day-grid__day",
              day <= SHARED_DAYS ? "is-shared" : "",
              day === activeDay ? "is-active" : "",
            ].join(" ")}
            key={day}
          >
            <span>{day}</span>
          </div>
        );
      })}
    </div>
  );
}

function LaneLabels() {
  return (
    <div className="lane-labels" aria-hidden="true">
      <div className="lane-labels__spacer" />
      {Object.entries(laneMeta).map(([key, lane]) => {
        const IconComponent = lane.icon;
        return (
          <div className="lane-label" key={key}>
            <IconComponent size={15} weight="fill" />
            <span>{lane.label}</span>
          </div>
        );
      })}
    </div>
  );
}

function MobileTimeline({
  scenario,
  playheadIndex,
  inspectionIndex,
  onInspect,
  onKeyDown,
  reducedMotion,
}: {
  scenario: JourneyScenario;
  playheadIndex: number;
  inspectionIndex: number | null;
  onInspect: (index: number) => void;
  onKeyDown: (
    event: ReactKeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => void;
  reducedMotion: boolean;
}) {
  const activeEvent = scenario.events[playheadIndex];
  const stripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const visibleIndex =
      inspectionIndex === null ? playheadIndex : inspectionIndex;
    const strip = stripRef.current;
    const target = strip?.querySelector<HTMLElement>(
      `[data-mobile-event-index="${visibleIndex}"]`,
    );
    if (!strip || !target) return;

    const stripRect = strip.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    const visibleWidth =
      Math.min(targetRect.right, stripRect.right) -
      Math.max(targetRect.left, stripRect.left);

    if (visibleWidth >= targetRect.width * 0.72) return;

    strip.scrollTo({
      left: target.offsetLeft - (strip.clientWidth - target.offsetWidth) / 2,
      behavior: reducedMotion ? "auto" : "smooth",
    });
  }, [inspectionIndex, playheadIndex, reducedMotion, scenario.events]);

  return (
    <div className="mobile-timeline">
      <div className="mobile-day-rail" aria-hidden="true">
        {Array.from({ length: DAY_COUNT }, (_, index) => {
          const day = index + 1;
          const hasEvent = scenario.events.some((event) => event.day === day);
          return (
            <span
              className={[
                hasEvent ? "has-event" : "",
                day <= SHARED_DAYS ? "is-shared" : "",
                day === activeEvent.day ? "is-active" : "",
              ].join(" ")}
              key={day}
            />
          );
        })}
      </div>

      <div
        className="mobile-event-strip"
        aria-label="Journey events"
        ref={stripRef}
      >
        {scenario.events.map((event, index) => {
          const IconComponent = laneMeta[event.lane].icon;
          const inspected = index === inspectionIndex;
          const current = index === playheadIndex;
          return (
            <button
              type="button"
              className={[
                "mobile-event",
                event.shared ? "mobile-event--shared" : "mobile-event--branch",
                current ? "is-active" : "",
                inspected ? "is-inspected" : "",
              ].join(" ")}
              data-mobile-event-index={index}
              aria-current={current ? "step" : undefined}
              aria-pressed={inspected}
              tabIndex={inspected || current ? 0 : -1}
              key={event.id}
              onClick={() => onInspect(index)}
              onKeyDown={(keyboardEvent) => onKeyDown(keyboardEvent, index)}
            >
              <IconComponent
                size={15}
                weight={current ? "fill" : "regular"}
                aria-hidden="true"
              />
              <span>
                {event.shared ? "FIRST 3 DAYS" : "NEXT"} ·{" "}
                {laneMeta[event.lane].label} · DAY {event.day}
              </span>
              <strong>{event.title}</strong>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function LongHorizonSection() {
  const [scenarioId, setScenarioId] =
    useState<JourneyScenario["id"]>("content");
  const [playheadIndex, setPlayheadIndex] = useState(0);
  const [inspectionIndex, setInspectionIndex] = useState<number | null>(null);
  const [playIntent, setPlayIntent] = useState(false);
  const [inView, setInView] = useState(false);
  const [documentVisible, setDocumentVisible] = useState(true);
  const [announcement, setAnnouncement] = useState("");
  const [timelineViewportWidth, setTimelineViewportWidth] = useState(0);
  const rootRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const timelineScrollRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const autoPlayedRef = useRef(false);
  const autoStartTimerRef = useRef<number | null>(null);
  const branchStartTimerRef = useRef<number | null>(null);
  const reducedMotion = useReducedMotion();

  const scenario =
    scenarios.find((item) => item.id === scenarioId) ?? scenarios[0];
  const boundedPlayheadIndex = Math.max(
    0,
    Math.min(playheadIndex, scenario.events.length - 1),
  );
  const activeEvent = scenario.events[boundedPlayheadIndex];
  const inspectedEvent =
    inspectionIndex === null ? null : scenario.events[inspectionIndex];
  const chapterSequence = useMemo(
    () => [...new Set(scenario.events.map((event) => event.chapter))],
    [scenario.events],
  );
  const activeChapter = chapterCopy[activeEvent.chapter];
  const activeChapterIndex = chapterSequence.indexOf(activeEvent.chapter);
  const isPlaying =
    playIntent && inView && documentVisible && !reducedMotion;
  const atEnd = playheadIndex >= scenario.events.length - 1;
  const timelineGeometry = useMemo(
    () => getTimelineGeometry(timelineViewportWidth),
    [timelineViewportWidth],
  );

  useEffect(() => {
    const element = timelineScrollRef.current;
    if (!element) return undefined;

    const updateWidth = () => {
      const nextWidth = element.clientWidth;
      if (nextWidth <= 0) return;
      setTimelineViewportWidth((currentWidth) =>
        Math.abs(currentWidth - nextWidth) > 0.1
          ? nextWidth
          : currentWidth,
      );
    };

    updateWidth();
    if (!window.ResizeObserver) return undefined;
    const observer = new ResizeObserver(updateWidth);
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const cancelPendingStarts = useCallback(() => {
    if (autoStartTimerRef.current) {
      window.clearTimeout(autoStartTimerRef.current);
    }
    if (branchStartTimerRef.current) {
      window.clearTimeout(branchStartTimerRef.current);
    }
  }, []);

  const inspectEvent = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(index, scenario.events.length - 1));
      autoPlayedRef.current = true;
      cancelPendingStarts();
      setPlayIntent(false);
      setInspectionIndex(clamped);
      const event = scenario.events[clamped];
      setAnnouncement(
        `Day ${event.day}. ${laneMeta[event.lane].label}. ${event.title}. Journey paused for inspection.`,
      );
      track("long_horizon_event_inspect", {
        scenario: scenario.id,
        day: event.day,
        lane: event.lane,
        title: event.title,
      });
    },
    [cancelPendingStarts, scenario.events, scenario.id],
  );

  const handleNodeKeyDown = useCallback(
    (event: ReactKeyboardEvent<HTMLButtonElement>, index: number) => {
      let nextIndex: number | null = null;
      if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        nextIndex = Math.min(index + 1, scenario.events.length - 1);
      } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        nextIndex = Math.max(index - 1, 0);
      } else if (event.key === "Home") {
        nextIndex = 0;
      } else if (event.key === "End") {
        nextIndex = scenario.events.length - 1;
      }

      if (nextIndex === null) return;
      event.preventDefault();
      inspectEvent(nextIndex);
      window.setTimeout(() => {
        const candidates = rootRef.current?.querySelectorAll<HTMLElement>(
          `[data-event-index="${nextIndex}"], [data-mobile-event-index="${nextIndex}"]`,
        );
        Array.from(candidates ?? [])
          .find((element) => element.offsetParent !== null)
          ?.focus({ preventScroll: true });
      }, 30);
    },
    [inspectEvent, scenario.events.length],
  );

  const changeScenario = useCallback(
    (nextScenarioId: JourneyScenario["id"]) => {
      if (nextScenarioId === scenarioId) return;
      const nextScenario =
        scenarios.find((item) => item.id === nextScenarioId) ?? scenarios[0];
      autoPlayedRef.current = true;
      cancelPendingStarts();
      setScenarioId(nextScenarioId);
      setPlayheadIndex(BRANCH_START_INDEX);
      setInspectionIndex(null);
      setPlayIntent(false);
      setAnnouncement(
        `${nextScenario.label}. Same person and history. Showing what Lemma does next.`,
      );
      track("long_horizon_scenario_change", {
        scenario: nextScenario.id,
      });
      branchStartTimerRef.current = window.setTimeout(() => {
        setPlayIntent(true);
      }, BRANCH_START_HOLD);
    },
    [cancelPendingStarts, scenarioId],
  );

  const handleScenarioKeyDown = useCallback(
    (event: ReactKeyboardEvent<HTMLButtonElement>, index: number) => {
      const keyDirection: Record<string, number> = {
        ArrowRight: 1,
        ArrowDown: 1,
        ArrowLeft: -1,
        ArrowUp: -1,
      };

      let nextIndex: number | null = null;
      if (keyDirection[event.key]) {
        nextIndex =
          (index + keyDirection[event.key] + scenarios.length) %
          scenarios.length;
      } else if (event.key === "Home") {
        nextIndex = 0;
      } else if (event.key === "End") {
        nextIndex = scenarios.length - 1;
      }

      if (nextIndex === null) return;
      event.preventDefault();
      changeScenario(scenarios[nextIndex].id);
      tabRefs.current[nextIndex]?.focus();
    },
    [changeScenario],
  );

  useEffect(() => {
    if (!isPlaying) return undefined;
    if (atEnd) {
      setPlayIntent(false);
      return undefined;
    }

    const current = scenario.events[playheadIndex];
    const next = scenario.events[playheadIndex + 1];
    const changesChapter = current.chapter !== next.chapter;
    const delay =
      current.holdAfter ??
      (changesChapter
        ? chapterCopy[current.chapter].holdAfter ?? FALLBACK_CHAPTER_HOLD
        : INTRA_CHAPTER_DELAY);

    const timeout = window.setTimeout(() => {
      setPlayheadIndex((index) =>
        Math.min(index + 1, scenario.events.length - 1),
      );
    }, delay);
    return () => window.clearTimeout(timeout);
  }, [atEnd, isPlaying, playheadIndex, scenario.events]);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return undefined;

    if (!window.IntersectionObserver) {
      setInView(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        if (
          entry.isIntersecting &&
          !autoPlayedRef.current &&
          !reducedMotion &&
          !window.matchMedia("(max-width: 1180px)").matches
        ) {
          autoPlayedRef.current = true;
          autoStartTimerRef.current = window.setTimeout(() => {
            setPlayIntent(true);
          }, 800);
        } else if (!entry.isIntersecting && autoStartTimerRef.current) {
          window.clearTimeout(autoStartTimerRef.current);
        }
      },
      {
        threshold: window.matchMedia("(max-width: 1180px)").matches
          ? 0.2
          : 0.45,
      },
    );
    observer.observe(stage);
    return () => {
      observer.disconnect();
      if (autoStartTimerRef.current) {
        window.clearTimeout(autoStartTimerRef.current);
      }
    };
  }, [reducedMotion]);

  useEffect(() => {
    const handleVisibility = () => setDocumentVisible(!document.hidden);
    handleVisibility();
    document.addEventListener("visibilitychange", handleVisibility);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  useEffect(
    () => () => {
      cancelPendingStarts();
    },
    [cancelPendingStarts],
  );

  const nodes = useMemo<EventGraphNode[]>(
    () =>
      scenario.events.map((event, index) => ({
        id: event.id,
        type: "event",
        position: {
          x:
            TIMELINE_EDGE_INSET +
            (event.day - 1) * timelineGeometry.dayWidth +
            (timelineGeometry.dayWidth - EVENT_NODE_SIZE) / 2,
          y: LANE_Y[event.lane],
        },
        data: {
          event,
          index,
          playheadIndex,
          inspected: index === inspectionIndex,
          reducedMotion,
          onInspect: inspectEvent,
          onKeyDown: handleNodeKeyDown,
        },
        draggable: false,
        selectable: false,
        focusable: false,
        zIndex:
          index === inspectionIndex
            ? 5
            : index === playheadIndex
              ? 4
              : 1,
      })),
    [
      handleNodeKeyDown,
      inspectEvent,
      inspectionIndex,
      playheadIndex,
      reducedMotion,
      scenario.events,
      timelineGeometry.dayWidth,
    ],
  );

  const edges = useMemo<Edge[]>(
    () =>
      scenario.events.slice(0, -1).map((event, index) => {
        const next = scenario.events[index + 1];
        const sameDay = event.day === next.day;
        const waiting = next.day - event.day > 1;
        const complete = !reducedMotion && index < playheadIndex;
        const current = !reducedMotion && index === playheadIndex - 1;
        const branchEdge = !event.shared || !next.shared;

        return {
          id: `${event.id}-${next.id}`,
          source: event.id,
          target: next.id,
          sourceHandle: sameDay ? "bottom" : "right",
          targetHandle: sameDay ? "top" : "left",
          type: "smoothstep",
          pathOptions: { borderRadius: 10, offset: 14 },
          className: [
            "journey-edge",
            complete ? "is-complete" : "is-future",
            current ? "is-current" : "",
            waiting ? "is-waiting" : "",
            branchEdge ? "is-branch-edge" : "is-shared-edge",
            reducedMotion ? "is-static" : "",
          ].join(" "),
          style: {
            strokeWidth: current ? 2.2 : 1.6,
            strokeDasharray: waiting ? "6 7" : undefined,
          },
        };
      }),
    [playheadIndex, reducedMotion, scenario.events],
  );

  const advanceReducedMotion = () => {
    setInspectionIndex(null);
    if (atEnd) {
      setPlayheadIndex(0);
      return;
    }
    const nextChapter = chapterSequence[activeChapterIndex + 1];
    if (!nextChapter) {
      setPlayheadIndex(scenario.events.length - 1);
      return;
    }
    const nextIndex = scenario.events.findIndex(
      (event) => event.chapter === nextChapter,
    );
    setPlayheadIndex(nextIndex);
  };

  const togglePlayback = () => {
    autoPlayedRef.current = true;
    cancelPendingStarts();
    track("long_horizon_playback", {
      action: reducedMotion
        ? "next_chapter"
        : atEnd
          ? "replay"
          : inspectionIndex !== null
            ? "continue"
            : isPlaying
              ? "pause"
              : "play",
      scenario: scenario.id,
    });

    if (reducedMotion) {
      advanceReducedMotion();
      return;
    }
    if (atEnd) {
      setInspectionIndex(null);
      setPlayheadIndex(0);
      setPlayIntent(true);
      return;
    }
    if (inspectionIndex !== null) {
      setInspectionIndex(null);
      setPlayIntent(true);
      return;
    }
    setPlayIntent((value) => !value);
  };

  const detailEvent = inspectedEvent;
  const detail = detailEvent ?? activeChapter;
  const detailKey = detailEvent
    ? `event-${detailEvent.id}`
    : `chapter-${activeEvent.chapter}`;
  const playbackLabel = reducedMotion
    ? atEnd
      ? "Replay journey"
      : "Next chapter"
    : atEnd
      ? "Replay journey"
      : inspectionIndex !== null
        ? "Continue journey"
        : isPlaying
          ? "Pause journey"
          : "Play journey";
  const chapterEyebrow = `CHAPTER ${activeChapterIndex + 1} OF ${chapterSequence.length} · ${activeChapter.shortLabel}`;
  const detailEyebrow = detailEvent
    ? `DAY ${detailEvent.day} · ${laneMeta[detailEvent.lane].label}`
    : chapterEyebrow;

  return (
    <section
      id="difference"
      className="long-horizon scroll-mt-20"
      aria-labelledby="long-horizon-title"
      ref={rootRef}
    >
      <div id="long-horizon" className="journey">
        <header className="journey-header">
          <div className="journey-heading landing-reveal">
            <p className="eyebrow">Why Lemma is different · Example</p>
            <h2 id="long-horizon-title">
              One person. <span>28 days.</span>{" "}
              <b className="keep-together">
                One conversation<i>.</i>
              </b>
            </h2>
            <p className="journey-intro">
              A message schedule can run for weeks. But when someone replies,
              something fails, or the next step changes, a schedule is not
              enough. Lemma keeps the messages it sent, recorded replies,
              decisions, and next action together, so the same conversation can
              continue for days or weeks without starting over.
            </p>
          </div>

          <div className="journey-controls">
            <p className="scenario-kicker">
              Same history · New situation · New plan
            </p>
            <div
              className="scenario-tabs"
              role="tablist"
              aria-label="What Lemma does next"
            >
              {scenarios.map((item, index) => (
                <button
                  type="button"
                  role="tab"
                  id={`scenario-tab-${item.id}`}
                  aria-controls="long-horizon-journey-panel"
                  aria-selected={item.id === scenarioId}
                  aria-label={`${item.label}, after ${item.trigger.toLowerCase()}`}
                  tabIndex={item.id === scenarioId ? 0 : -1}
                  className={item.id === scenarioId ? "is-active" : ""}
                  key={item.id}
                  ref={(element) => {
                    tabRefs.current[index] = element;
                  }}
                  onClick={() => changeScenario(item.id)}
                  onKeyDown={(event) => handleScenarioKeyDown(event, index)}
                >
                  <span className="scenario-tab__trigger">{item.trigger}</span>
                  <span className="scenario-tab__label">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </header>

        <div
          className="journey-stage"
          id="long-horizon-journey-panel"
          role="tabpanel"
          aria-labelledby={`scenario-tab-${scenario.id}`}
          ref={stageRef}
        >
          <div className="journey-meta">
            <div>
              <span>EXAMPLE PERSON</span>
              <strong>
                {leadContext.person} · {leadContext.company}
              </strong>
            </div>
            <p>
              <span>Goal:</span> {leadContext.goal}
            </p>
          </div>

          <div className="timeline-toolbar">
            <div className="timeline-phase" aria-label="Journey structure">
              <span className="timeline-phase__shared">First 3 days</span>
              <GitFork size={16} weight="bold" aria-hidden="true" />
              <span className="timeline-phase__branch">
                Then · <strong>{scenario.label}</strong>
              </span>
            </div>

            <div className="playback">
              <p>
                <strong>{activeChapter.shortLabel}</strong>
                <span aria-hidden="true"> · </span>
                Day {activeEvent.day} of {DAY_COUNT}
              </p>
              <button
                type="button"
                className={[
                  "playback__button",
                  isPlaying ? "is-playing" : "",
                ].join(" ")}
                onClick={togglePlayback}
                aria-label={playbackLabel}
                aria-pressed={isPlaying}
              >
                {isPlaying ? (
                  <Pause size={16} weight="fill" aria-hidden="true" />
                ) : (
                  <Play size={16} weight="fill" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>

          <div className="desktop-timeline">
            <LaneLabels />
            <div className="timeline-scroll" ref={timelineScrollRef}>
              <div
                className="timeline-canvas"
                style={{ width: timelineGeometry.canvasWidth }}
                aria-label="Interactive 28-day LinkedIn example"
              >
                <DayGrid
                  activeDay={activeEvent.day}
                  dayWidth={timelineGeometry.dayWidth}
                  trackWidth={timelineGeometry.trackWidth}
                />
                <div
                  className="branch-divider"
                  style={{
                    left:
                      TIMELINE_EDGE_INSET +
                      SHARED_DAYS * timelineGeometry.dayWidth,
                  }}
                  aria-hidden="true"
                />
                <ReactFlow
                  nodes={nodes}
                  edges={edges}
                  nodeTypes={nodeTypes}
                  defaultViewport={{ x: 0, y: 0, zoom: 1 }}
                  minZoom={1}
                  maxZoom={1}
                  zoomOnScroll={false}
                  zoomOnPinch={false}
                  zoomOnDoubleClick={false}
                  panOnDrag={false}
                  panOnScroll={false}
                  preventScrolling={false}
                  nodesDraggable={false}
                  nodesConnectable={false}
                  elementsSelectable={false}
                  proOptions={{ hideAttribution: true }}
                  aria-label="Journey event graph"
                />
              </div>
            </div>
          </div>

          <MobileTimeline
            scenario={scenario}
            playheadIndex={boundedPlayheadIndex}
            inspectionIndex={inspectionIndex}
            onInspect={inspectEvent}
            onKeyDown={handleNodeKeyDown}
            reducedMotion={reducedMotion}
          />

          <article
            className="event-detail"
            aria-labelledby="active-event-title"
            key={detailKey}
          >
            <div className="event-detail__identity">
              <p>{detailEyebrow}</p>
              <h3 id="active-event-title">{detail.title}</h3>
              {detail.outcome && (
                <span className="outcome-pill">{detail.outcome}</span>
              )}
            </div>

            <div className="event-detail__block">
              <span>{detailEvent ? "WHAT HAPPENED" : "WHAT LEMMA DOES"}</span>
              <p>{detail.summary}</p>
              {detail.message && <blockquote>{detail.message}</blockquote>}
            </div>

            <div className="event-detail__block">
              <span>WHY</span>
              <p>{detail.why}</p>
              <strong>Next</strong>
              <p>{detail.next}</p>
            </div>
          </article>
        </div>

        <ol className="sr-only">
          {scenario.events.map((event) => (
            <li key={`accessible-${event.id}`}>
              {event.shared
                ? "Shared path. "
                : "Selected path. "}
              Day {event.day}, {laneMeta[event.lane].label}: {event.title}.{" "}
              {event.summary}
            </li>
          ))}
        </ol>
        <div className="sr-only" aria-live="polite">
          {announcement}
        </div>
      </div>
    </section>
  );
}
