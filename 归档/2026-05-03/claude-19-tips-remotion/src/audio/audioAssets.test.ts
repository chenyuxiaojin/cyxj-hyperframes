import { describe, expect, test } from "vitest";
import { AUDIO_ASSETS, FORBIDDEN_RENDERED_VIDEO_SOURCES } from "./audioAssets";

describe("audio asset configuration", () => {
  test("uses extracted reference voice from public audio", () => {
    expect(AUDIO_ASSETS.referenceVoice).toBe("audio/reference-voice.m4a");
    expect(AUDIO_ASSETS.referenceVoice).not.toContain("codex-ref.mp4");
  });

  test("keeps reference video out of renderable assets", () => {
    expect(Object.values(AUDIO_ASSETS)).not.toEqual(
      expect.arrayContaining([...FORBIDDEN_RENDERED_VIDEO_SOURCES]),
    );
  });
});
