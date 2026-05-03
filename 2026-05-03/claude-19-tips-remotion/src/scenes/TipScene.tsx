import React from "react";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import type { TipNode } from "../data/timeline";
import {
  AgentTeamsPanel,
  ApiVsMcpCompare,
  CommandResult,
  ContextBreakdown,
  ContextGauge,
  EscStopCard,
  HooksNotification,
  MiniCards,
  PlanModePanel,
  RemoteControlQR,
  ScreenshotDropzone,
  SelfCheckTodo,
  SkillCreatorCard,
  StatusLineDemo,
  TerminalWindow,
  ThinkingBudgetCard,
  TypingPrompt,
  WorktreeParallel,
} from "../components/TerminalComponents";
import { SHADOWS, THEME } from "../visual/visualSystem";
import { getSceneSpec } from "./sceneRegistry";

export const TipScene: React.FC<{ tip: TipNode }> = ({ tip }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const spec = getSceneSpec(tip);
  const enter = interpolate(frame, [0, 0.9 * fps], [36, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  const opacity = interpolate(frame, [0, 0.65 * fps], [0.72, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ padding: "84px 0 0 104px" }}>
      <div style={{ opacity, transform: `translateY(${enter}px)` }}>
        <SceneHeader tip={tip} />
        <div style={{ marginTop: 30 }}>{renderMainVisual(tip, spec)}</div>
        <MiniCards items={tip.keywords} />
      </div>
    </AbsoluteFill>
  );
};

const SceneHeader: React.FC<{ tip: TipNode }> = ({ tip }) => (
  <div
    style={{
      width: 1010,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
    }}
  >
    <div>
      <div
        style={{
          color: THEME.colors.claudeOrange,
          fontFamily: THEME.monoFamily,
          fontSize: 24,
          fontWeight: 800,
        }}
      >
        TIP {String(tip.number).padStart(2, "0")}
      </div>
      <div style={{ marginTop: 8, fontSize: 58, fontWeight: 900, letterSpacing: 0 }}>
        {tip.title}
      </div>
    </div>
    <div
      style={{
        width: 180,
        height: 10,
        borderRadius: 999,
        background: THEME.colors.line,
        overflow: "hidden",
        boxShadow: SHADOWS.soft,
      }}
    >
      <div
        style={{
          width: `${(tip.number / 19) * 100}%`,
          height: "100%",
          background: tip.number >= 15 ? THEME.colors.teal : THEME.colors.claudeOrange,
        }}
      />
    </div>
  </div>
);

const renderMainVisual = (
  tip: TipNode,
  spec: ReturnType<typeof getSceneSpec>,
): React.ReactNode => {
  if (tip.slug === "statusline") {
    return (
      <TerminalWindow>
        <TypingPrompt command={spec.prompt} />
        <CommandResult lines={spec.resultLines} />
        <StatusLineDemo />
      </TerminalWindow>
    );
  }

  if (tip.slug === "clear" || tip.slug === "claude-md" || spec.gauge) {
    return (
      <div style={{ display: "flex", gap: 26, alignItems: "center" }}>
        <TerminalWindow width={740}>
          <TypingPrompt command={spec.prompt} />
          <CommandResult lines={spec.resultLines} />
        </TerminalWindow>
        <ContextGauge value={spec.gauge ?? 54} label={tip.slug === "clear" ? "after clear" : "context"} />
      </div>
    );
  }

  switch (tip.slug) {
    case "plan-mode":
    case "ask-questions":
      return <PlanModePanel />;
    case "specific-requests":
      return (
        <TerminalWindow>
          <TypingPrompt command={spec.prompt} />
          <CommandResult lines={spec.resultLines} />
        </TerminalWindow>
      );
    case "plan-reviewer":
      return <ContextBreakdown />;
    case "self-check":
      return <SelfCheckTodo />;
    case "esc-stop":
      return <EscStopCard />;
    case "double-esc":
      return <EscStopCard double />;
    case "hooks":
      return <HooksNotification />;
    case "screenshots":
      return <ScreenshotDropzone />;
    case "worktree":
      return <WorktreeParallel />;
    case "api-vs-mcp":
      return <ApiVsMcpCompare />;
    case "remote-control":
      return <RemoteControlQR />;
    case "thinking-budget":
      return <ThinkingBudgetCard />;
    case "agent-teams":
      return <AgentTeamsPanel />;
    case "skill-creator":
      return <SkillCreatorCard />;
    default:
      return (
        <TerminalWindow>
          <TypingPrompt command={spec.prompt} />
          <CommandResult lines={spec.resultLines} />
        </TerminalWindow>
      );
  }
};
