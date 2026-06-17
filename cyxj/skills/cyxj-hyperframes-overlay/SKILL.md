---
name: cyxj-hyperframes-overlay
description: XCYJ HyperFrames 专属 overlay。用户用 HyperFrames、HF、HTML+GSAP、website-to-video、catalog block、npx hyperframes、XCYJ 教程视频时使用。必须叠加官方 HyperFrames skills，不替代官方 skill。
---

# cyxj-hyperframes-overlay

这是 XCYJ 的 HyperFrames 私有规则层。先按官方 HyperFrames skill（入口 `hyperframes`，按路由到 core / animation / creative / cli / registry / media）做正确实现，再套 XCYJ 视觉和生产纪律。

## 必读顺序

1. 官方 HyperFrames skill（GitHub 直连，16 个，`npx skills` 管理）：入口 `hyperframes`（READ FIRST，会路由到具体 workflow）→ 按任务加载 `hyperframes-core`（HTML 结构契约）、`hyperframes-animation`（动画 / GSAP / 七适配器 / 镜头蓝图）、`hyperframes-creative`（设计 / 排版 / 节奏 / 旁白）、`hyperframes-cli`（dev loop）、`hyperframes-registry`（catalog 零件）、`hyperframes-media`（TTS / 转写 / 抠像）；成片配方按需用 `website-to-video` / `motion-graphics` / `embedded-captions` / `graphic-overlays` 等。
2. `../../notes/MY_VISUAL_DNA.md`
3. `../../notes/MY_MOTION_NOTES.md`
4. `../../rules/hyperframes/hyperframes-rules.md`
5. `../../rules/hyperframes/effects-catalog.md`

## 资产和模板（路径从仓库根 `hyperframes/` 起）

```text
assets/logos/                         # 33 个 AI 厂商 / 工具 SVG（产品引用用真 logo）
templates/components/COMPONENTS.json  # ⭐ 组件注册表（可复用零件单源 = Remotion 镜头库，写前必查）
templates/components/README.md        # 组件库人读索引 + 登记仪式
templates/catalog.json                # 官方 HeyGen catalog 零件（另一套，勿混）
# 当前无内置起步模板：起新片从空白起步（npx hyperframes init --example blank）
```

复用零件先查 `templates/components/COMPONENTS.json`，写前按 [BLOCKING-REUSE] 4 处扫描（本工程 / 注册表 / 历史 `视频项目/已发布/` / 官方 catalog）。组件**单一真源在 `templates/components/`**（`cyxj/templates/` 为待废弃镜像，勿在那边加）。使用模板后，把需要长期渲染的素材复制到具体工程自己的 `assets/`。

## 关键纪律

- 不在顶层 `视频制作台/` 跑 CLI。
- 不手改官方 skill。
- 写 composition 前做复用扫描。
- Remotion 代码不进入 HyperFrames 工程。
