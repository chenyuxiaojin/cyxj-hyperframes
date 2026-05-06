import { describe, expect, test } from "vitest";
import { TIP_TIMELINE } from "../data/timeline.generated";
import { SFX_MANIFEST, sfxForCue } from "./sfxManifest";

describe("motion SFX manifest", () => {
  test("defines all required SFX with conservative volumes", () => {
    expect(Object.keys(SFX_MANIFEST).sort()).toEqual([
      "keyboard-tick",
      "notification-ding",
      "pulse",
      "rewind-tick",
      "soft-whoosh",
      "stop-tap",
      "ui-click",
    ]);
    expect(Object.values(SFX_MANIFEST).every((spec) => spec.volume > 0 && spec.volume <= 0.2)).toBe(true);
  });

  test("maps every motion cue to a concrete SFX file", () => {
    const cues = TIP_TIMELINE.flatMap((tip) => tip.cues);
    expect(cues.length).toBeGreaterThanOrEqual(19 * 3);
    for (const cue of cues) {
      const sfx = sfxForCue(cue);
      expect(sfx.file).toMatch(new RegExp("^sfx/.+\\.wav$"));
    }
  });
});
