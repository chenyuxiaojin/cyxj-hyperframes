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
});
