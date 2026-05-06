import type { MotionCue, TipNode } from "../data/timeline";

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

export const msToFrame = (ms: number, fps: number) => Math.round((ms / 1000) * fps);

export const cueFrameWindow = (tip: TipNode, cue: MotionCue, fps: number) => {
  const startFrame = msToFrame(cue.startMs - tip.startMs, fps);
  const endFrame = Math.max(startFrame + 1, msToFrame(cue.endMs - tip.startMs, fps));

  return {
    startFrame,
    endFrame,
    durationFrames: endFrame - startFrame,
  };
};

export const visibleCuesAtFrame = (tip: TipNode, frame: number, fps: number) =>
  tip.cues.filter((cue) => frame >= cueFrameWindow(tip, cue, fps).startFrame);

export const activeCueIndexAtFrame = (tip: TipNode, frame: number, fps: number) => {
  const index = tip.cues.findIndex((cue) => {
    const window = cueFrameWindow(tip, cue, fps);
    return frame >= window.startFrame && frame < window.endFrame;
  });

  if (index !== -1) {
    return index;
  }

  return Math.max(0, visibleCuesAtFrame(tip, frame, fps).length - 1);
};

export const cueEnterProgress = (
  tip: TipNode,
  cue: MotionCue,
  frame: number,
  fps: number,
  enterFrames = 16,
) => {
  const { startFrame } = cueFrameWindow(tip, cue, fps);
  return clamp((frame - startFrame) / enterFrames, 0, 1);
};

export const typedCueText = (
  text: string,
  frame: number,
  tip: TipNode,
  cue: MotionCue,
  fps: number,
) => {
  const { startFrame, durationFrames } = cueFrameWindow(tip, cue, fps);
  const revealFrames = clamp(Math.round(durationFrames * 0.82), 26, 112);
  const progress = clamp((frame - startFrame) / revealFrames, 0, 1);
  const visibleChars = clamp(Math.floor(text.length * progress), 0, text.length);

  return text.slice(0, visibleChars);
};
