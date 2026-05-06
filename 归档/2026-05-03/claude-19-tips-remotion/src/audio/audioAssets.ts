export const AUDIO_ASSETS = {
  referenceVoice: "audio/reference-voice.m4a",
  statusbarTexture: "video/statusbar.mp4",
} as const;

export const FORBIDDEN_RENDERED_VIDEO_SOURCES = [
  "codex-ref.mp4",
  ["assets", "reference", "codex-ref.mp4"].join("/"),
] as const;
