# codex-claude-intro (52s · 1920x1080 · 30fps)

Codex × Claude Code 教程的片头 / 整片演示。**纯 HyperFrames 画面**（无录屏），7 个 beat 串联讲两个工具的对比。

## 做了什么

- 总时长 52 秒，7 个 sub-composition
- 配音文案见 [`SCRIPT.md`](SCRIPT.md)
- 输出 H.264 mp4

## 用了什么技术

- HyperFrames CLI
- TTS 配音（hyperframes tts）
- DaVinci 21 后期串联 + 字幕

## 怎么复用

适合做"两个工具 / 概念对比讲解" 的整片。技术要点：
- 7 beat 结构：intro → 工具 A → 工具 B → 对比 → 共用场景 → 总结 → outro
- 每个 beat 6-8 秒
- 文案先定（`SCRIPT.md`），再按文案切 beat 时长

⚠️ 中文 Whisper transcribe 要绕开 hyperframes CLI（用 `whisper-cli`），详见 `docs/HARD_CONSTRAINTS.md` 第 4 条。
