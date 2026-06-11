---
description: 从 tutorial-8beat 模板冷启动一条新 HyperFrames 视频（建在 视频项目/在制/ 下）
---

从模板冷启动新视频。用户输入（可能含主题/slug/时长）：$ARGUMENTS

按顺序执行：

1. **先 invoke `cyxj-hyperframes-overlay` skill**（官方规则 + XCYJ 用户层），再读 `cyxj/notes/TEMPLATE_USAGE.md`（模板复用 checklist）。
2. 缺主题或形态信息就先问用户；slug 用 kebab-case 英文。
3. 复制模板（整目录，不要手搓文件）：
   ```bash
   cp -R templates/tutorial-8beat "视频项目/在制/$(date +%Y-%m-%d)-<slug>"
   cd "视频项目/在制/$(date +%Y-%m-%d)-<slug>"
   ```
4. 改 `meta.json`：`id` 从 `xcyj-tutorial-8beat-PLACEHOLDER` 换成 `<slug>`，`name` 换成视频标题。
5. 等用户给文案后再替换 beat 里的 `{{占位符}}`（每个 beat 文件头部注释列了需替换项）；改任何 GSAP 代码前按 CLAUDE.md 的表 invoke 对应 gsap skill。
6. `npx hyperframes lint` 通过后 `npx hyperframes preview` 给用户打磨。
7. **不主动 render**（硬约束 §10）——用户明确说「渲一版」才跑 `npx hyperframes render --quality draft`。

硬规则：新工程**只许**建在 `视频项目/在制/` 下（顶层 CLAUDE.md 第 9 条）；组件文件必须保留 `<template>` 包裹。
