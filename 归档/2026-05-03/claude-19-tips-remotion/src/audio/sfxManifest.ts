/* eslint-disable @remotion/non-pure-animation */
import type { MotionCue, MotionCueKind } from "../data/timeline";

export type SfxName =
  | "soft-whoosh"
  | "keyboard-tick"
  | "ui-click"
  | "notification-ding"
  | "stop-tap"
  | "rewind-tick"
  | "pulse";

export type SfxSpec = {
  name: SfxName;
  file: `sfx/${SfxName}.wav`;
  volume: number;
};

export const SFX_MANIFEST: Record<SfxName, SfxSpec> = {
  "soft-whoosh": { name: "soft-whoosh", file: "sfx/soft-whoosh.wav", volume: 0.1 },
  "keyboard-tick": { name: "keyboard-tick", file: "sfx/keyboard-tick.wav", volume: 0.045 },
  "ui-click": { name: "ui-click", file: "sfx/ui-click.wav", volume: 0.055 },
  "notification-ding": { name: "notification-ding", file: "sfx/notification-ding.wav", volume: 0.14 },
  "stop-tap": { name: "stop-tap", file: "sfx/stop-tap.wav", volume: 0.095 },
  "rewind-tick": { name: "rewind-tick", file: "sfx/rewind-tick.wav", volume: 0.075 },
  pulse: { name: "pulse", file: "sfx/pulse.wav", volume: 0.09 },
};

const CUE_SFX: Record<MotionCueKind, SfxName> = {
  command: "keyboard-tick",
  "terminal-output": "ui-click",
  "panel-enter": "soft-whoosh",
  "metric-change": "pulse",
  "check-item": "ui-click",
  compare: "pulse",
  branch: "pulse",
  notification: "notification-ding",
  transition: "soft-whoosh",
};

export const sfxForCue = (cue: MotionCue): SfxSpec => {
  if (cue.tipSlug === "esc-stop" && cue.kind === "command") {
    return SFX_MANIFEST["stop-tap"];
  }
  if (cue.tipSlug === "double-esc" && cue.kind === "branch") {
    return SFX_MANIFEST["rewind-tick"];
  }
  return SFX_MANIFEST[CUE_SFX[cue.kind]];
};
