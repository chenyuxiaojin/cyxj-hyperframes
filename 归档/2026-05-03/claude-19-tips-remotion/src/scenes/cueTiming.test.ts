import { describe, expect, test } from "vitest";
import { TIP_TIMELINE, VIDEO_META } from "../data/timeline.generated";
import { activeCueIndexAtFrame, cueFrameWindow, typedCueText, visibleCuesAtFrame } from "./cueTiming";

describe("cue-driven scene timing", () => {
  const tip = TIP_TIMELINE[0];
  const firstCue = tip.cues[0];
  const secondCue = tip.cues[1];

  test("converts global cue time to local scene frames", () => {
    const window = cueFrameWindow(tip, firstCue, VIDEO_META.fps);

    expect(window.startFrame).toBe(0);
    expect(window.endFrame).toBeGreaterThan(window.startFrame);
  });

  test("keeps future cue content hidden until the narration reaches it", () => {
    const beforeSecondCue = cueFrameWindow(tip, secondCue, VIDEO_META.fps).startFrame - 1;
    const visible = visibleCuesAtFrame(tip, beforeSecondCue, VIDEO_META.fps);

    expect(visible.map((cue) => cue.id)).toContain(firstCue.id);
    expect(visible.map((cue) => cue.id)).not.toContain(secondCue.id);
  });

  test("reveals typed cue text gradually rather than all at once", () => {
    const window = cueFrameWindow(tip, firstCue, VIDEO_META.fps);
    const midpoint = Math.round((window.startFrame + window.endFrame) / 2);
    const text = typedCueText(firstCue.text, midpoint, tip, firstCue, VIDEO_META.fps);

    expect(text.length).toBeGreaterThan(0);
    expect(text.length).toBeLessThan(firstCue.text.length);
  });

  test("identifies the current active cue for focus styling", () => {
    const frame = cueFrameWindow(tip, secondCue, VIDEO_META.fps).startFrame + 3;

    expect(activeCueIndexAtFrame(tip, frame, VIDEO_META.fps)).toBe(1);
  });
});
