import React from "react";
import {
  Easing,
  Loop,
  OffthreadVideo,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import type { MotionCue, TipNode } from "../data/timeline";
import { MotionStage } from "../visual/MotionStage";
import { SHADOWS, THEME } from "../visual/visualSystem";
import { getSceneSpec } from "./sceneRegistry";
import {
  activeCueIndexAtFrame,
  cueEnterProgress,
  typedCueText,
  visibleCuesAtFrame,
} from "./cueTiming";

const moduleNames: Record<string, string> = {
  statusline: "statusline.sh",
  commit: "git snapshot",
  clear: "context reset",
  "plan-mode": "plan mode",
  "specific-requests": "prompt rewrite",
  "ask-questions": "requirements",
  "plan-reviewer": "plan review",
  "self-check": "qa todo",
  "claude-md": "project memory",
  "esc-stop": "interrupt",
  "double-esc": "checkpoint",
  hooks: "hooks",
  screenshots: "vision input",
  worktree: "parallel worktree",
  "api-vs-mcp": "api first",
  "remote-control": "remote session",
  "thinking-budget": "thinking budget",
  "agent-teams": "agent lanes",
  "skill-creator": "skill builder",
};

export const TipScene: React.FC<{ tip: TipNode }> = ({ tip }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const spec = getSceneSpec(tip);
  const visibleCues = visibleCuesAtFrame(tip, frame, fps);
  const activeIndex = activeCueIndexAtFrame(tip, frame, fps);
  const activeCue = tip.cues[activeIndex] ?? tip.cues[0];
  const shellIn = interpolate(frame, [0, 0.7 * fps], [18, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  const shellOpacity = interpolate(frame, [0, 0.45 * fps], [0.54, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <MotionStage compact>
      <div
        style={{
          width: 1420,
          maxWidth: "100%",
          height: 812,
          alignSelf: "center",
          opacity: shellOpacity,
          transform: `translateY(${shellIn}px)`,
        }}
      >
        <ClaudeShell
          tip={tip}
          prompt={spec.prompt}
          visibleCues={visibleCues}
          activeCue={activeCue}
          activeIndex={activeIndex}
          frame={frame}
          fps={fps}
        />
      </div>
    </MotionStage>
  );
};

const ClaudeShell: React.FC<{
  tip: TipNode;
  prompt: string;
  visibleCues: MotionCue[];
  activeCue: MotionCue;
  activeIndex: number;
  frame: number;
  fps: number;
}> = ({ tip, prompt, visibleCues, activeCue, activeIndex, frame, fps }) => {
  const context = Math.round(
    interpolate(frame, [0, Math.max(96, tip.durationMs / 1000 * fps)], [18, contextTarget(tip)], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }),
  );

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        borderRadius: 8,
        overflow: "hidden",
        background: THEME.colors.terminal,
        border: "1px solid rgba(255,255,255,0.09)",
        boxShadow: SHADOWS.terminal,
        display: "grid",
        gridTemplateRows: "62px 1fr 56px",
      }}
    >
      <ShellTopbar tip={tip} activeCue={activeCue} />
      <div
        style={{
          position: "relative",
          display: "grid",
          gridTemplateColumns: "1fr 420px",
          gap: 26,
          padding: "34px 38px 28px",
          overflow: "hidden",
        }}
      >
        <TerminalTranscript
          tip={tip}
          prompt={prompt}
          visibleCues={visibleCues}
          activeIndex={activeIndex}
          frame={frame}
          fps={fps}
        />
        <CueDrivenPanel
          tip={tip}
          visibleCues={visibleCues}
          activeCue={activeCue}
          activeIndex={activeIndex}
          frame={frame}
          fps={fps}
        />
      </div>
      <ShellStatusLine tip={tip} activeCue={activeCue} context={context} visibleCount={visibleCues.length} />
    </div>
  );
};

const ShellTopbar: React.FC<{ tip: TipNode; activeCue: MotionCue }> = ({ tip, activeCue }) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "180px 1fr 180px",
      alignItems: "center",
      padding: "0 22px",
      background: THEME.colors.terminalSoft,
      color: "rgba(248,241,231,0.72)",
      fontFamily: THEME.monoFamily,
      fontSize: 18,
    }}
  >
    <div style={{ display: "flex", gap: 10 }}>
      <span style={{ width: 13, height: 13, borderRadius: 99, background: "#E86F58" }} />
      <span style={{ width: 13, height: 13, borderRadius: 99, background: "#D7A541" }} />
      <span style={{ width: 13, height: 13, borderRadius: 99, background: "#55A66A" }} />
    </div>
    <div style={{ textAlign: "center", fontWeight: 800, letterSpacing: 0 }}>
      Claude Code · TIP {String(tip.number).padStart(2, "0")} · {tip.title}
    </div>
    <div style={{ textAlign: "right", color: THEME.colors.claudeOrange }}>{activeCue.kind}</div>
  </div>
);

const TerminalTranscript: React.FC<{
  tip: TipNode;
  prompt: string;
  visibleCues: MotionCue[];
  activeIndex: number;
  frame: number;
  fps: number;
}> = ({ tip, prompt, visibleCues, activeIndex, frame, fps }) => (
  <div
    style={{
      minWidth: 0,
      height: "100%",
      display: "grid",
      gridTemplateRows: "auto 1fr",
      color: THEME.colors.terminalText,
      fontFamily: THEME.monoFamily,
    }}
  >
    <PromptLine tip={tip} prompt={prompt} frame={frame} fps={fps} />
    <div
      style={{
        marginTop: 28,
        display: "grid",
        alignContent: "start",
        gap: 14,
        overflow: "hidden",
      }}
    >
      {visibleCues.map((cue, index) => (
        <CueLogLine
          key={cue.id}
          tip={tip}
          cue={cue}
          index={index}
          active={index === activeIndex}
          frame={frame}
          fps={fps}
        />
      ))}
    </div>
  </div>
);

const PromptLine: React.FC<{
  tip: TipNode;
  prompt: string;
  frame: number;
  fps: number;
}> = ({ tip, prompt, frame, fps }) => {
  const cue = tip.cues.find((item) => item.kind === "command") ?? tip.cues[0];
  const typed = typedCueText(prompt, frame, tip, cue, fps);
  const cursorOpacity = frame % 28 < 16 ? 1 : 0;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 13,
        minHeight: 44,
        fontSize: 30,
        whiteSpace: "nowrap",
        minWidth: 0,
      }}
    >
      <span style={{ color: THEME.colors.claudeOrange }}>chen@mac</span>
      <span style={{ color: "rgba(248,241,231,0.45)" }}>~/hyperframes</span>
      <span style={{ color: THEME.colors.teal }}>$</span>
      <span style={{ flex: 1, minWidth: 0, overflow: "hidden", textOverflow: "clip" }}>
        {typed}
        <span style={{ opacity: cursorOpacity }}>_</span>
      </span>
    </div>
  );
};

const CueLogLine: React.FC<{
  tip: TipNode;
  cue: MotionCue;
  index: number;
  active: boolean;
  frame: number;
  fps: number;
}> = ({ tip, cue, index, active, frame, fps }) => {
  const progress = cueEnterProgress(tip, cue, frame, fps);
  const text = active ? typedCueText(cue.text, frame, tip, cue, fps) : cue.text;
  const marker = markerForCue(cue);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "92px 1fr",
        gap: 16,
        alignItems: "start",
        minHeight: 50,
        padding: "11px 14px",
        borderRadius: 7,
        opacity: progress,
        transform: `translateY(${(1 - progress) * 12}px)`,
        background: active ? "rgba(248,241,231,0.075)" : "transparent",
        border: `1px solid ${active ? "rgba(217,119,87,0.38)" : "rgba(248,241,231,0.035)"}`,
      }}
    >
      <div
        style={{
          color: active ? THEME.colors.claudeOrange : "rgba(248,241,231,0.42)",
          fontSize: 17,
        }}
      >
        {String(index + 1).padStart(2, "0")} {marker}
      </div>
      <div
        style={{
          color: colorForCue(cue, active),
          fontSize: active ? 25 : 23,
          lineHeight: 1.45,
          letterSpacing: 0,
        }}
      >
        {text}
        {active ? <span style={{ opacity: frame % 26 < 14 ? 1 : 0 }}>_</span> : null}
      </div>
    </div>
  );
};

const CueDrivenPanel: React.FC<{
  tip: TipNode;
  visibleCues: MotionCue[];
  activeCue: MotionCue;
  activeIndex: number;
  frame: number;
  fps: number;
}> = ({ tip, visibleCues, activeCue, activeIndex, frame, fps }) => {
  if (tip.slug === "statusline") {
    return <StatuslineModule visibleCues={visibleCues} activeIndex={activeIndex} frame={frame} />;
  }

  if (tip.slug === "worktree" || tip.slug === "agent-teams") {
    return <LaneModule tip={tip} visibleCues={visibleCues} activeIndex={activeIndex} frame={frame} fps={fps} />;
  }

  if (tip.slug === "api-vs-mcp") {
    return <CompareModule visibleCues={visibleCues} activeIndex={activeIndex} frame={frame} fps={fps} />;
  }

  return (
    <PanelFrame title={moduleNames[tip.slug] ?? "claude code"} activeCue={activeCue}>
      <StepModule tip={tip} visibleCues={visibleCues} activeIndex={activeIndex} frame={frame} fps={fps} />
    </PanelFrame>
  );
};

const PanelFrame: React.FC<{
  title: string;
  activeCue: MotionCue;
  children: React.ReactNode;
}> = ({ title, activeCue, children }) => (
  <div
    style={{
      height: "100%",
      borderRadius: 8,
      border: "1px solid rgba(248,241,231,0.12)",
      background: "rgba(248,241,231,0.055)",
      padding: 22,
      boxSizing: "border-box",
      display: "grid",
      gridTemplateRows: "auto 1fr",
      color: THEME.colors.terminalText,
      fontFamily: THEME.monoFamily,
    }}
  >
    <div style={{ display: "flex", justifyContent: "space-between", gap: 14, alignItems: "center" }}>
      <span style={{ color: "rgba(248,241,231,0.58)", fontSize: 17 }}>{title}</span>
      <span style={{ color: THEME.colors.claudeOrange, fontSize: 15 }}>{activeCue.emphasis}</span>
    </div>
    {children}
  </div>
);

const StepModule: React.FC<{
  tip: TipNode;
  visibleCues: MotionCue[];
  activeIndex: number;
  frame: number;
  fps: number;
}> = ({ tip, visibleCues, activeIndex, frame, fps }) => (
  <div style={{ marginTop: 24, display: "grid", alignContent: "center", gap: 15 }}>
    {tip.cues.map((cue, index) => {
      const visible = visibleCues.some((item) => item.id === cue.id);
      const progress = visible ? cueEnterProgress(tip, cue, frame, fps) : 0;
      const checked = visible && index < activeIndex;
      return (
        <div
          key={cue.id}
          style={{
            height: 54,
            borderRadius: 7,
            border: `1px solid ${index === activeIndex ? "rgba(217,119,87,0.5)" : "rgba(248,241,231,0.1)"}`,
            background: checked ? "rgba(47,125,115,0.14)" : "rgba(248,241,231,0.055)",
            display: "grid",
            gridTemplateColumns: "34px 1fr",
            alignItems: "center",
            gap: 13,
            padding: "0 15px",
            opacity: progress,
            transform: `translateY(${(1 - progress) * 10}px)`,
          }}
        >
          <span style={{ color: checked ? "#A8D8BD" : THEME.colors.claudeOrange, fontSize: 21 }}>
            {checked ? "✓" : "•"}
          </span>
          <span style={{ fontSize: 18, color: "rgba(248,241,231,0.82)" }}>
            {moduleText(cue)}
          </span>
        </div>
      );
    })}
  </div>
);

const StatuslineModule: React.FC<{
  visibleCues: MotionCue[];
  activeIndex: number;
  frame: number;
}> = ({ visibleCues, activeIndex, frame }) => {
  const context = Math.round(interpolate(activeIndex, [0, 4], [18, 54], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  }));
  const cost = (0.38 + activeIndex * 0.26).toFixed(2);
  const tokens = `${18 + activeIndex * 5}k`;

  return (
    <PanelFrame
      title="live statusline"
      activeCue={visibleCues[visibleCues.length - 1] ?? {
        id: "statusline-empty",
        tipSlug: "statusline",
        startMs: 0,
        endMs: 1,
        kind: "metric-change",
        text: "",
        emphasis: "low",
      }}
    >
      <div style={{ marginTop: 22, display: "grid", gap: 18, alignContent: "center" }}>
        <div style={{ height: 132, borderRadius: 7, overflow: "hidden", position: "relative" }}>
          <Loop durationInFrames={571}>
            <OffthreadVideo
              src={staticFile("video/statusbar.mp4")}
              muted
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: 0.28,
                filter: "saturate(0.75) contrast(1.05)",
              }}
            />
          </Loop>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(90deg, rgba(34,31,28,0.94), rgba(34,31,28,0.18), rgba(34,31,28,0.94))",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 28,
              right: 28,
              bottom: 30,
              height: 12,
              borderRadius: 999,
              background: "rgba(248,241,231,0.15)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${context}%`,
                height: "100%",
                background: THEME.colors.claudeOrange,
                borderRadius: 999,
              }}
            />
          </div>
        </div>
        <MetricRow label="model" value={activeIndex > 1 ? "opus" : "sonnet"} />
        <MetricRow label="context" value={`${context}%`} />
        <MetricRow label="cost" value={`$${cost}`} />
        <MetricRow label="tokens" value={tokens} />
        <div style={{ color: "rgba(248,241,231,0.44)", fontSize: 15 }}>
          updated at frame {frame}
        </div>
      </div>
    </PanelFrame>
  );
};

const LaneModule: React.FC<{
  tip: TipNode;
  visibleCues: MotionCue[];
  activeIndex: number;
  frame: number;
  fps: number;
}> = ({ tip, visibleCues, activeIndex, frame, fps }) => {
  const lanes = tip.slug === "agent-teams"
    ? ["advisor", "worker-a", "worker-b", "reviewer"]
    : ["main", "claude", "codex", "merge"];

  return (
    <PanelFrame title={moduleNames[tip.slug] ?? "lanes"} activeCue={visibleCues[visibleCues.length - 1] ?? tip.cues[0]}>
      <div style={{ marginTop: 34, display: "grid", gap: 22, alignContent: "center" }}>
        {lanes.map((lane, index) => {
          const cue = tip.cues[Math.min(index, tip.cues.length - 1)];
          const visible = visibleCues.length > index;
          const progress = visible ? cueEnterProgress(tip, cue, frame, fps) : 0;
          return (
            <div key={lane} style={{ display: "grid", gridTemplateColumns: "88px 1fr", alignItems: "center", gap: 14 }}>
              <span style={{ color: "rgba(248,241,231,0.55)", fontSize: 16 }}>{lane}</span>
              <div style={{ height: 22, borderRadius: 999, background: "rgba(248,241,231,0.09)", overflow: "hidden" }}>
                <div
                  style={{
                    width: `${Math.max(8, progress * (activeIndex >= index ? 92 : 54))}%`,
                    height: "100%",
                    borderRadius: 999,
                    background: index % 2 === 0 ? THEME.colors.claudeOrange : THEME.colors.teal,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </PanelFrame>
  );
};

const CompareModule: React.FC<{
  visibleCues: MotionCue[];
  activeIndex: number;
  frame: number;
  fps: number;
}> = ({ visibleCues, activeIndex, frame, fps }) => (
  <PanelFrame title="API vs MCP" activeCue={visibleCues[visibleCues.length - 1] ?? visibleCues[0]}>
    <div style={{ marginTop: 34, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, alignContent: "center" }}>
      {["API", "MCP"].map((label, index) => {
        const cue = visibleCues[Math.min(index, Math.max(0, visibleCues.length - 1))];
        const progress = cue ? cueEnterProgress({ ...fakeTip(visibleCues), startMs: cue.startMs }, cue, frame, fps) : 0;
        const selected = activeIndex <= 1 ? index === 0 : index === 1;
        return (
          <div
            key={label}
            style={{
              height: 220,
              borderRadius: 8,
              border: `1px solid ${selected ? THEME.colors.claudeOrange : "rgba(248,241,231,0.12)"}`,
              background: selected ? "rgba(217,119,87,0.12)" : "rgba(248,241,231,0.055)",
              display: "grid",
              placeItems: "center",
              opacity: Math.max(0.45, progress),
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 44, fontWeight: 900 }}>{label}</div>
              <div style={{ marginTop: 16, color: "rgba(248,241,231,0.55)", fontSize: 17 }}>
                {label === "API" ? "small context" : "heavy setup"}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </PanelFrame>
);

const ShellStatusLine: React.FC<{
  tip: TipNode;
  activeCue: MotionCue;
  context: number;
  visibleCount: number;
}> = ({ tip, activeCue, context, visibleCount }) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "1.1fr 1fr 0.9fr 0.9fr",
      alignItems: "center",
      padding: "0 34px",
      borderTop: "1px solid rgba(248,241,231,0.09)",
      color: "rgba(248,241,231,0.75)",
      fontFamily: THEME.monoFamily,
      fontSize: 16,
      background: "rgba(248,241,231,0.05)",
    }}
  >
    <span>{moduleNames[tip.slug] ?? "claude-code"}</span>
    <span>context {context}%</span>
    <span>cue {visibleCount}/{tip.cues.length}</span>
    <span>{activeCue.emphasis}</span>
  </div>
);

const MetricRow: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div
    style={{
      height: 44,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderRadius: 6,
      background: "rgba(248,241,231,0.065)",
      padding: "0 16px",
      fontSize: 18,
    }}
  >
    <span style={{ color: "rgba(248,241,231,0.52)" }}>{label}</span>
    <span style={{ color: THEME.colors.terminalText }}>{value}</span>
  </div>
);

const markerForCue = (cue: MotionCue) => {
  switch (cue.kind) {
    case "command":
      return "$";
    case "terminal-output":
      return "out";
    case "panel-enter":
      return "ui";
    case "metric-change":
      return "met";
    case "check-item":
      return "chk";
    case "compare":
      return "cmp";
    case "branch":
      return "git";
    case "notification":
      return "ntf";
    case "transition":
      return "→";
  }
};

const colorForCue = (cue: MotionCue, active: boolean) => {
  if (cue.emphasis === "high" || active) {
    return THEME.colors.terminalText;
  }
  if (cue.kind === "check-item" || cue.kind === "branch") {
    return "#A8D8BD";
  }
  if (cue.kind === "notification") {
    return "#F2C178";
  }
  return "rgba(248,241,231,0.72)";
};

const moduleText = (cue: MotionCue) => {
  if (cue.kind === "check-item") {
    return cue.text.length > 22 ? cue.text.slice(0, 22) : cue.text;
  }
  return cue.kind.replace("-", " ");
};

const contextTarget = (tip: TipNode) => {
  if (tip.slug === "clear") {
    return 18;
  }
  if (tip.slug === "statusline" || tip.slug === "claude-md") {
    return 54;
  }
  if (tip.slug === "api-vs-mcp") {
    return 32;
  }
  return 42;
};

const fakeTip = (cues: MotionCue[]): TipNode => ({
  number: 0,
  slug: "compare",
  title: "compare",
  kind: "compare",
  startMs: cues[0]?.startMs ?? 0,
  endMs: cues[cues.length - 1]?.endMs ?? 1,
  durationMs: 1,
  keywords: [],
  narration: "",
  cues,
});
