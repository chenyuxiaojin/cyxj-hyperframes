import { describe, expect, test } from "vitest";
import { TIP_TIMELINE } from "../data/timeline.generated";
import { REQUIRED_COMPONENTS, getSceneSpec } from "./sceneRegistry";

describe("scene registry", () => {
  test("maps every SRT-derived tip to a motion scene", () => {
    for (const tip of TIP_TIMELINE) {
      expect(getSceneSpec(tip).componentName).toBeTruthy();
      expect(getSceneSpec(tip).placeholder).toBe(false);
    }
  });

  test("covers the required terminal and graphic components", () => {
    expect(REQUIRED_COMPONENTS).toEqual(
      expect.arrayContaining([
        "TerminalWindow",
        "TypingPrompt",
        "CommandResult",
        "StatusLineDemo",
        "ContextGauge",
        "ContextBreakdown",
        "PlanModePanel",
        "SelfCheckTodo",
        "EscStopCard",
        "HooksNotification",
        "ScreenshotDropzone",
        "WorktreeParallel",
        "ApiVsMcpCompare",
        "RemoteControlQR",
        "ThinkingBudgetCard",
        "AgentTeamsPanel",
        "SkillCreatorCard",
      ]),
    );
  });
});
