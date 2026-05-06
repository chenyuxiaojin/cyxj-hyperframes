import fs from "node:fs";
import path from "node:path";
import { parseSrt } from "@remotion/captions";
import type { Caption } from "@remotion/captions";

export const PROJECT_ROOT = path.resolve(__dirname, "../..");
export const FIXED_SRT_PATH =
  "/Users/chenhuajin/Documents/达芬奇字幕文件/字幕/19个 Claude 技巧/Subtitle 1_fixed.srt";

export type TipKind =
  | "statusline"
  | "terminal-command"
  | "plan-mode"
  | "prompt-quality"
  | "review"
  | "self-check"
  | "context-files"
  | "esc-stop"
  | "hooks"
  | "screenshot"
  | "worktree"
  | "compare"
  | "remote"
  | "thinking"
  | "agents"
  | "skill";

export type TipNode = {
  number: number;
  slug: string;
  title: string;
  command?: string;
  kind: TipKind;
  startMs: number;
  endMs: number;
  durationMs: number;
  keywords: string[];
  narration: string;
  cues: MotionCue[];
};

export type MotionCueKind =
  | "command"
  | "terminal-output"
  | "panel-enter"
  | "metric-change"
  | "check-item"
  | "compare"
  | "branch"
  | "notification"
  | "transition";

export type MotionCue = {
  id: string;
  tipSlug: string;
  startMs: number;
  endMs: number;
  kind: MotionCueKind;
  text: string;
  emphasis: "low" | "medium" | "high";
};

type TipSeed = Omit<TipNode, "endMs" | "durationMs" | "narration" | "cues">;

const TIP_SEEDS: TipSeed[] = [
  {
    number: 1,
    slug: "statusline",
    title: "自定义状态栏",
    command: "/statusline",
    kind: "statusline",
    startMs: 5233,
    keywords: ["model", "context", "cost", "tokens"],
  },
  {
    number: 2,
    slug: "commit",
    title: "把改动做成快照",
    command: "git commit",
    kind: "terminal-command",
    startMs: 39366,
    keywords: ["snapshot", "rollback", "git"],
  },
  {
    number: 3,
    slug: "clear",
    title: "清理对话上下文",
    command: "/clear",
    kind: "terminal-command",
    startMs: 53466,
    keywords: ["fresh chat", "clean context"],
  },
  {
    number: 4,
    slug: "plan-mode",
    title: "计划模式先规划",
    command: "/plan",
    kind: "plan-mode",
    startMs: 80566,
    keywords: ["Shift+Tab", "plan", "execute"],
  },
  {
    number: 5,
    slug: "specific-requests",
    title: "不要下模糊需求",
    kind: "prompt-quality",
    startMs: 125500,
    keywords: ["ask", "reason", "quality"],
  },
  {
    number: 6,
    slug: "ask-questions",
    title: "让 Claude 主动追问",
    kind: "plan-mode",
    startMs: 154233,
    keywords: ["95%", "requirements", "questions"],
  },
  {
    number: 7,
    slug: "plan-reviewer",
    title: "换顾问身份审计划",
    kind: "review",
    startMs: 167366,
    keywords: ["advisor", "holes", "over-design"],
  },
  {
    number: 8,
    slug: "self-check",
    title: "把质检写进 Todo",
    kind: "self-check",
    startMs: 185133,
    keywords: ["todo", "QA", "acceptance"],
  },
  {
    number: 9,
    slug: "claude-md",
    title: "项目里生成 CLAUDE.md",
    command: "/init",
    kind: "context-files",
    startMs: 209666,
    keywords: ["CLAUDE.md", "files", "project"],
  },
  {
    number: 10,
    slug: "esc-stop",
    title: "跑偏就按 ESC 停止",
    command: "ESC",
    kind: "esc-stop",
    startMs: 256566,
    keywords: ["stop", "redirect", "tokens"],
  },
  {
    number: 11,
    slug: "double-esc",
    title: "双 ESC 回退节点",
    command: "ESC x2",
    kind: "esc-stop",
    startMs: 278566,
    keywords: ["rewind", "checkpoint", "undo"],
  },
  {
    number: 12,
    slug: "hooks",
    title: "Hooks 完成通知",
    command: "/hooks",
    kind: "hooks",
    startMs: 304466,
    keywords: ["notification", "sound", "parallel"],
  },
  {
    number: 13,
    slug: "screenshots",
    title: "截图直接喂给 Claude",
    kind: "screenshot",
    startMs: 335166,
    keywords: ["vision", "screenshot", "bug"],
  },
  {
    number: 14,
    slug: "worktree",
    title: "用 Worktree 平行工作",
    command: "git worktree",
    kind: "worktree",
    startMs: 359333,
    keywords: ["Claude", "Codex", "parallel"],
  },
  {
    number: 15,
    slug: "api-vs-mcp",
    title: "优先 API，少装 MCP",
    kind: "compare",
    startMs: 427633,
    keywords: ["API", "MCP", "context"],
  },
  {
    number: 16,
    slug: "remote-control",
    title: "手机远程控制",
    kind: "remote",
    startMs: 449266,
    keywords: ["phone", "browser", "QR"],
  },
  {
    number: 17,
    slug: "thinking-budget",
    title: "超强思考模式",
    kind: "thinking",
    startMs: 480033,
    keywords: ["budget", "architecture", "bug"],
  },
  {
    number: 18,
    slug: "agent-teams",
    title: "智能体团队分工",
    kind: "agents",
    startMs: 503866,
    keywords: ["Agent teams", "sub-agent", "handoff"],
  },
  {
    number: 19,
    slug: "skill-creator",
    title: "Skill Creator",
    kind: "skill",
    startMs: 550833,
    keywords: ["skill", "repeatable", "workflow"],
  },
];

export const VIDEO_END_MS = 617833;
export const FPS = 30;
export const WIDTH = 1920;
export const HEIGHT = 1080;

export const loadFixedCaptions = (): Caption[] => {
  const input = fs.readFileSync(FIXED_SRT_PATH, "utf8");
  return parseSrt({ input }).captions;
};

export const buildTipTimeline = (captions: Caption[]): TipNode[] => {
  return TIP_SEEDS.map((seed, index) => {
    const endMs = TIP_SEEDS[index + 1]?.startMs ?? VIDEO_END_MS;
    const tipCaptions = captions.filter(
      (caption) => caption.startMs >= seed.startMs && caption.startMs < endMs,
    );
    const narration = captions
      .filter((caption) => caption.startMs >= seed.startMs && caption.startMs < endMs)
      .map((caption) => caption.text.trim())
      .filter(Boolean)
      .join(" ");

    return {
      ...seed,
      endMs,
      durationMs: endMs - seed.startMs,
      narration,
      cues: buildMotionCues(seed, endMs, tipCaptions),
    };
  });
};

const cueKindsForTip = (seed: TipSeed): MotionCueKind[] => {
  switch (seed.slug) {
    case "statusline":
      return ["command", "metric-change", "terminal-output", "metric-change", "transition"];
    case "commit":
      return ["command", "terminal-output", "branch", "terminal-output", "transition"];
    case "clear":
      return ["command", "metric-change", "panel-enter", "transition"];
    case "plan-mode":
      return ["command", "panel-enter", "check-item", "check-item", "transition"];
    case "ask-questions":
      return ["panel-enter", "check-item", "check-item", "transition"];
    case "self-check":
      return ["panel-enter", "check-item", "check-item", "check-item", "transition"];
    case "hooks":
      return ["command", "panel-enter", "notification", "transition"];
    case "worktree":
      return ["command", "branch", "branch", "terminal-output", "transition"];
    case "api-vs-mcp":
      return ["compare", "metric-change", "compare", "transition"];
    case "esc-stop":
      return ["command", "notification", "transition"];
    case "double-esc":
      return ["command", "branch", "transition"];
    case "agent-teams":
      return ["panel-enter", "branch", "check-item", "transition"];
    case "skill-creator":
      return ["panel-enter", "check-item", "branch", "check-item", "transition"];
    case "remote-control":
      return ["panel-enter", "notification", "transition"];
    default:
      return ["panel-enter", "terminal-output", "metric-change", "transition"];
  }
};

const buildMotionCues = (
  seed: TipSeed,
  endMs: number,
  captions: Caption[],
): MotionCue[] => {
  const kinds = cueKindsForTip(seed);
  const span = Math.max(1, endMs - seed.startMs);
  const cueCount = Math.min(7, Math.max(3, kinds.length));
  const step = span / cueCount;

  return Array.from({ length: cueCount }, (_, index) => {
    const caption = captions[index % Math.max(1, captions.length)];
    const cueStart = Math.round(seed.startMs + step * index);
    const nextStart = Math.round(seed.startMs + step * (index + 1));
    const cueEnd = Math.min(endMs, Math.max(cueStart + 360, nextStart));
    const captionText = caption?.text.trim();
    const fallbackText =
      index === 0 && seed.command ? seed.command : seed.keywords[index % seed.keywords.length];

    return {
      id: `${seed.slug}-${String(index + 1).padStart(2, "0")}`,
      tipSlug: seed.slug,
      startMs: cueStart,
      endMs: cueEnd,
      kind: kinds[index % kinds.length],
      text: captionText || fallbackText,
      emphasis: index === 0 ? "high" : index === cueCount - 1 ? "medium" : "low",
    };
  });
};

export const scanSourceForForbiddenSubtitle = (): { matches: string[] } => {
  const matches: string[] = [];
  const forbidden = ["Subtitle 1", "srt"].join(".");
  const ignoredDirs = new Set(["node_modules", ".git", "out"]);

  const walk = (dir: string) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (ignoredDirs.has(entry.name)) {
        continue;
      }
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
        continue;
      }
      if (
        !/\.(ts|tsx|js|jsx|json|md)$/.test(entry.name) ||
        entry.name.endsWith(".test.ts") ||
        fullPath === __filename
      ) {
        continue;
      }
      const content = fs.readFileSync(fullPath, "utf8");
      if (content.includes(forbidden)) {
        matches.push(path.relative(PROJECT_ROOT, fullPath));
      }
    }
  };

  walk(PROJECT_ROOT);
  return { matches };
};
