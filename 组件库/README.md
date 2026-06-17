# XCYJ 组件库（= 镜头库）

这是 XCYJ HyperFrames 的**可复用零件层**，对标 Remotion `cyxj-remotion/scenes/`（镜头库 + `sceneMap.ts` 注册表）。
机器可读注册表是 [`COMPONENTS.json`](COMPONENTS.json)；本文件是人读索引 + 登记规则。

- **单一真源**：`组件库/`。`组件库/` 是**待废弃镜像**，新组件只进这里，不要在镜像里加。
- **官方 catalog 是另一套**：`参考/catalog.json` 是上游 HeyGen 官方零件（data-chart / 转场 / 特效…），与本自有组件库分离、互不混淆。
- **复用方式**：copy-paste snippet —— 复制变体 HTML 粘进 composition + `link` 同名 `.css`。若改成 `data-composition-src` 子合成被引用，必须用 `<template id="<name>-template">` 包裹（裸片段会让 compile 崩，见 HARD_CONSTRAINTS §38 / grain-overlay 2026-06-11）。

## 索引（7 个）

| id | 用途 | 成熟度 | 依赖 |
|---|---|---|---|
| **cc-window** | Claude Code 终端 UI 体系（5 变体 + statusline） | 🟢 production | xcyj-tokens |
| **xcyj-tokens** | 视觉 DNA Token 单源（颜色/字体/字号 CSS 变量） | 🟢 production | — |
| **shake-error** | 错误/拒绝抖动 + 红闪 | 🟡 used | — |
| **spec-fill** | 拆解卡逐行填充（含飞块） | 🟡 used | xcyj-tokens |
| **text-effects** | 流式文本动效 4 种（blur/skeleton/scramble/tokens） | ⚪ prototype | — |
| **orbit-dots** | 8 点圆环 spinner | ⚪ prototype | — |
| **pulse-bars** | 脉冲条指示器（agent thinking） | ⚪ prototype | — |

成熟度：🟢 已发布视频反复实战 / 🟡 用过未反复 / ⚪ 原型或单次演示。每个组件细节看各自 `README.md`。

## 写 composition 前的复用扫描（[BLOCKING-REUSE]）

按顺序查 4 处，找到能复用的就别手写（见 memory `feedback-reuse-before-handwrite`）：
1. 本工程已写段
2. **本注册表 `COMPONENTS.json`**（这 7 个零件）
3. 历史已发布工程 `视频项目/已发布/`
4. 官方 `参考/catalog.json`

## 登记新组件（晋升仪式）

做完一条视频后，零件若满足晋升条件（被 ≥2 作品复用 / 体现品牌 DNA，判定见仓库根 `CLAUDE.md`「组件晋升规则」），按此登记：

1. 在 `组件库/<id>/` 放 `<id>.html` + `<id>.css` + `README.md`（README 含：用途、最小用法、变体、依赖、来源工程）。
2. 在 [`COMPONENTS.json`](COMPONENTS.json) `components[]` 加一条（字段照现有条目：id / title / category / purpose / tags / files / variants / dependsOn / maturity / sourceProjects / notes）。
3. 在上面「索引」表加一行。
4. 若该组件要走 `data-composition-src` 子合成引用，HTML 必须 `<template id="<id>-template">` 包裹（§38）。
5. 不要再往 `组件库/` 镜像里复制（单一真源 = 本目录）。

> 这一步 = Remotion「加新镜头：写组件 → 在 sceneMap 登记一行」的同款仪式。出片层据此查零件，不必翻代码。
