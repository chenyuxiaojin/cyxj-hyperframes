import type { TipNode } from "../data/timeline";

export const REQUIRED_COMPONENTS = [
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
] as const;

export type SceneSpec = {
  componentName: (typeof REQUIRED_COMPONENTS)[number];
  prompt: string;
  resultLines: string[];
  gauge?: number;
  placeholder: false;
};

export const getSceneSpec = (tip: TipNode): SceneSpec => {
  switch (tip.slug) {
    case "statusline":
      return {
        componentName: "StatusLineDemo",
        prompt: "/statusline",
        resultLines: ["✓ generated statusline.sh", "model / context / cost / tokens"],
        gauge: 54,
        placeholder: false,
      };
    case "commit":
      return {
        componentName: "TerminalWindow",
        prompt: "git add . && git commit -m \"save checkpoint\"",
        resultLines: ["✓ 8 files changed", "✓ checkpoint saved", "! rollback stays available"],
        placeholder: false,
      };
    case "clear":
      return {
        componentName: "TypingPrompt",
        prompt: "/clear",
        resultLines: ["✓ conversation cleared", "new context window ready"],
        gauge: 18,
        placeholder: false,
      };
    case "plan-mode":
    case "ask-questions":
      return {
        componentName: "PlanModePanel",
        prompt: tip.command ?? "ask follow-up questions",
        resultLines: ["clarify before execution", "reduce rework"],
        placeholder: false,
      };
    case "specific-requests":
      return {
        componentName: "CommandResult",
        prompt: "rewrite vague request into acceptance criteria",
        resultLines: ["before: make this better", "after: define target, constraints, examples"],
        placeholder: false,
      };
    case "plan-reviewer":
      return {
        componentName: "ContextBreakdown",
        prompt: "review this plan as a second advisor",
        resultLines: ["✓ found risk", "✓ removed over-design"],
        placeholder: false,
      };
    case "self-check":
      return {
        componentName: "SelfCheckTodo",
        prompt: "add final QA to todos",
        resultLines: ["implementation", "verification", "acceptance"],
        placeholder: false,
      };
    case "claude-md":
      return {
        componentName: "ContextBreakdown",
        prompt: "/init",
        resultLines: ["✓ scanned project", "✓ wrote CLAUDE.md"],
        gauge: 67,
        placeholder: false,
      };
    case "esc-stop":
      return {
        componentName: "EscStopCard",
        prompt: "ESC",
        resultLines: ["stop generation", "correct course"],
        placeholder: false,
      };
    case "double-esc":
      return {
        componentName: "EscStopCard",
        prompt: "ESC ESC",
        resultLines: ["rollback node", "discard wrong branch"],
        placeholder: false,
      };
    case "hooks":
      return {
        componentName: "HooksNotification",
        prompt: "/hooks",
        resultLines: ["sound when done", "check only when needed"],
        placeholder: false,
      };
    case "screenshots":
      return {
        componentName: "ScreenshotDropzone",
        prompt: "attach screenshot",
        resultLines: ["visual state", "error details"],
        placeholder: false,
      };
    case "worktree":
      return {
        componentName: "WorktreeParallel",
        prompt: "git worktree add ../parallel codex/parallel",
        resultLines: ["Claude and Codex work separately", "merge selectively"],
        placeholder: false,
      };
    case "api-vs-mcp":
      return {
        componentName: "ApiVsMcpCompare",
        prompt: "use API endpoint before installing MCP",
        resultLines: ["smaller context", "less setup"],
        placeholder: false,
      };
    case "remote-control":
      return {
        componentName: "RemoteControlQR",
        prompt: "open remote session",
        resultLines: ["scan QR", "control from phone"],
        placeholder: false,
      };
    case "thinking-budget":
      return {
        componentName: "ThinkingBudgetCard",
        prompt: "ultrathink this architecture problem",
        resultLines: ["larger reasoning budget", "use for hard decisions"],
        placeholder: false,
      };
    case "agent-teams":
      return {
        componentName: "AgentTeamsPanel",
        prompt: "split task across agent team",
        resultLines: ["advisor", "workers", "reviewer"],
        placeholder: false,
      };
    case "skill-creator":
      return {
        componentName: "SkillCreatorCard",
        prompt: "create a repeatable skill",
        resultLines: ["SKILL.md", "scripts", "examples"],
        placeholder: false,
      };
    default:
      return {
        componentName: "TerminalWindow",
        prompt: tip.command ?? tip.title,
        resultLines: tip.keywords,
        placeholder: false,
      };
  }
};
