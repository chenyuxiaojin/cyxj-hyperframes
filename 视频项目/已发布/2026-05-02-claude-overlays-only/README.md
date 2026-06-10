# claude-overlays-only (26s · 1920x1080 · 30fps)

claude-demo-v2 的"只渲染 overlay"变体。把 v2 的 8 个 beat 改成**透明背景**输出，DaVinci 里跟录屏混合。

## 做了什么

- 总时长 26 秒，8 个 sub-composition
- 输出 ProRes 4444 alpha（透明背景）
- 后期在 DaVinci 里跟录屏轨道叠加

## 用了什么技术

- HyperFrames CLI（透明背景渲染）
- DaVinci Resolve 21（alpha 混合）

## 怎么复用

适合"已有录屏 / 真人视频，想加 motion graphics overlay" 的场景。技术要点：
- `hyperframes render --transparent`（输出 ProRes 4444 alpha）
- index.html 不画底色，让 chromium 用透明背景
- DaVinci 里直接拖 mov 到上层轨道

⚠️ 中文文字配 alpha 通道在 DaVinci 21 有兼容性问题，详见 `docs/HARD_CONSTRAINTS.md` 第 3 条。
