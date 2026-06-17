---
description: 从空白脚手架起一条新 HyperFrames 视频（建在 视频项目/在制/ 下）
---

从空白脚手架起新视频。用户输入（可能含主题/slug/时长）：$ARGUMENTS

> 当前**无内置起步模板**（原 tutorial-8beat 已删，无替代模板）。新工程一律从空白 `npx hyperframes init --example blank` 起步，按官方 `hyperframes` skill 的最小骨架补 `compositions/*.html`。

按顺序执行：

1. **先 invoke `cyxj-hyperframes-overlay` skill**（官方规则 + XCYJ 用户层），再读 `制作规范/notes/TEMPLATE_USAGE.md`（通用复用方法论）。
2. 缺主题或形态信息就先问用户；slug 用 kebab-case 英文。
3. 在 `视频项目/在制/` 下起空白工程（用 CLI 起脚手架，不要手搓文件；init 会自己建项目目录，不用先 mkdir）：
   ```bash
   NAME="$(date +%Y-%m-%d)-<slug>"
   cd "视频项目/在制"
   npx hyperframes init "$NAME" --example blank
   cd "$NAME"
   ```
4. 改 `meta.json`：`id` 填成 `<slug>`，`name` 填成视频标题。
5. 等用户给文案后，按官方 `hyperframes` 最小骨架逐个写 `compositions/*.html`；改任何 GSAP 代码前按 CLAUDE.md 的表 invoke 对应 gsap skill。
6. `npx hyperframes lint` 通过后 `npx hyperframes preview` 给用户打磨。
7. **不主动 render**（硬约束 §10）——用户明确说「渲一版」才跑 `npx hyperframes render --quality draft`。

硬规则：新工程**只许**建在 `视频项目/在制/` 下（顶层 CLAUDE.md 第 9 条）；组件文件必须保留 `<template>` 包裹。
