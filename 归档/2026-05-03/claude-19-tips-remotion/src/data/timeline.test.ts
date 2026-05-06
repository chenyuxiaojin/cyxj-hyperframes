import { describe, expect, test } from "vitest";
import {
  FIXED_SRT_PATH,
  buildTipTimeline,
  loadFixedCaptions,
  scanSourceForForbiddenSubtitle,
} from "./timeline";

describe("Claude 19 tips subtitle timeline", () => {
  test("loads only the fixed subtitle file", () => {
    expect(FIXED_SRT_PATH).toContain("Subtitle 1_fixed.srt");

    const result = scanSourceForForbiddenSubtitle();
    expect(result.matches).toEqual([]);
  });

  test("parses the fixed SRT into captions with the expected duration", () => {
    const captions = loadFixedCaptions();
    expect(captions).toHaveLength(195);
    expect(captions[0]?.text).toContain("不会写代码的人");
    expect(captions[captions.length - 1]?.endMs).toBe(617_833);
  });

  test("builds 19 sequential tip nodes from the fixed SRT", () => {
    const tips = buildTipTimeline(loadFixedCaptions());
    expect(tips).toHaveLength(19);
    expect(tips.map((tip) => tip.number)).toEqual(
      Array.from({ length: 19 }, (_, index) => index + 1),
    );
    expect(tips[0]).toMatchObject({
      number: 1,
      slug: "statusline",
      startMs: 5233,
    });
    expect(tips[3]).toMatchObject({
      number: 4,
      slug: "plan-mode",
      startMs: 80566,
    });
    expect(tips[7]).toMatchObject({
      number: 8,
      slug: "self-check",
      startMs: 185133,
    });
    expect(tips[14]).toMatchObject({
      number: 15,
      slug: "api-vs-mcp",
      startMs: 427633,
    });
    expect(tips[18]).toMatchObject({
      number: 19,
      slug: "skill-creator",
      startMs: 550833,
    });
    expect(tips[tips.length - 1]?.endMs).toBe(617_833);
  });

  test("generates sorted positive cue-level motion for all tips", () => {
    const tips = buildTipTimeline(loadFixedCaptions());
    const cues = tips.flatMap((tip) => tip.cues);

    expect(tips.every((tip) => tip.cues.length >= 3 && tip.cues.length <= 7)).toBe(true);
    expect(tips.every((tip) => tip.cues.every((cue) => cue.tipSlug === tip.slug))).toBe(true);

    for (const tip of tips) {
      const sorted = [...tip.cues].sort((a, b) => a.startMs - b.startMs);
      expect(tip.cues).toEqual(sorted);
      expect(tip.cues.every((cue) => cue.endMs > cue.startMs)).toBe(true);
      const oldSubtitleName = ["Subtitle 1", "srt"].join(".");
      expect(tip.cues.every((cue) => cue.text.includes(oldSubtitleName) === false)).toBe(true);
    }

    expect(cues.map((cue) => cue.kind)).toEqual(
      expect.arrayContaining([
        "command",
        "terminal-output",
        "panel-enter",
        "metric-change",
        "check-item",
        "compare",
        "branch",
        "notification",
        "transition",
      ]),
    );
  });

  test("key scenes expose required cue kinds", () => {
    const tips = buildTipTimeline(loadFixedCaptions());
    const bySlug = Object.fromEntries(tips.map((tip) => [tip.slug, tip]));
    const kinds = (slug: string) => bySlug[slug]?.cues.map((cue) => cue.kind) ?? [];

    expect(kinds("statusline")).toEqual(expect.arrayContaining(["command", "metric-change"]));
    expect(kinds("commit")).toEqual(expect.arrayContaining(["command", "branch"]));
    expect(kinds("plan-mode")).toEqual(expect.arrayContaining(["panel-enter", "check-item"]));
    expect(kinds("self-check")).toEqual(expect.arrayContaining(["check-item"]));
    expect(kinds("hooks")).toEqual(expect.arrayContaining(["command", "notification"]));
    expect(kinds("api-vs-mcp")).toEqual(expect.arrayContaining(["compare", "metric-change"]));
    expect(kinds("skill-creator")).toEqual(expect.arrayContaining(["panel-enter", "branch"]));
  });
});
