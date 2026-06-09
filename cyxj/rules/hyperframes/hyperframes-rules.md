# HyperFrames Overlay Rules

这是 XCYJ 的 HyperFrames 专属 overlay。官方能力仍以官方 `hyperframes`、`hyperframes-cli`、`gsap`、`hyperframes-registry`、`website-to-hyperframes` 等 skill 为准。

## 必读

```text
../shared/MY_VISUAL_DNA.md
../shared/MY_MOTION_NOTES.md
../shared/MOTION_PHILOSOPHY.md
source/HARD_CONSTRAINTS.md
source/cyxj-new-video.md
```

## 工作规则

1. 写 HTML / GSAP 前先做复用扫描：本工程、`../../templates/`、历史视频、官方 catalog。
2. 先定 beat 和视觉语义，再写 DOM 和 timeline。
3. `data-composition-id`、`window.__timelines[...]`、文件名和引用 id 必须一致。
4. 复制 beat 后全局替换 id、selector、caption key、timeline key。
5. GSAP 的 transform 会覆盖 CSS transform；需要组合运动时统一交给 GSAP 管。
6. 每个 timeline 结束必须锚住完整时长，避免 sub-composition 提前隐藏。
7. catalog block 是 demo 起点，不是稳定参数化组件；装完必须改造成当前视频语义。

## 不做

- 不把 React / Remotion 代码搬进 HyperFrames。
- 不在官方 skill 里写 XCYJ 私有规则。
- 不把 `../../assets/` 整包复制进工程。
