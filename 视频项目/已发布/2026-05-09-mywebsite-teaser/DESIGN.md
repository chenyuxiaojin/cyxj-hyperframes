# Design System — 陈与小金 · Feyyaz

## Overview

陈与小金 (https://demo.xiaochens.com/) 是一个非程序员 IP 主页，定位 "Claude Code Practitioner"。视觉调性是**黑色都市 + 烟雾飘动 + 霓虹 3D 小物点缀**——纯黑全屏背景上叠白色 smoke tile 慢飘，米白色英文衬线大字标题居中，3 个 3D 发光小物（紫 cube / 蓝 moon / 紫 smile）作为视觉锚点。布局是单列垂直 narrative：Hero → ABOUT ME → WHAT I'M UP TO（5 项）→ PROJECTS（3 平台）→ Footer。整体氛围沉默有故事感，不卖力炫技但每个细节都"硬"。

## Colors

- **Primary Surface**: `#0A0A0A` — 全场景背景纯黑
- **Surface Alt**: `#18181B` — 卡片/section 副背景（PROJECTS 平台卡）
- **Primary Content**: `#E8E8E6` — 主标题米白（不刺眼）
- **High Content**: `#FFFFFF` — 强调内容、CTA 文字
- **Pure Black**: `#000000` — Hero 大字"陈与小金"（160px 极黑）
- **Subtle**: `#C7C7C7` / `#A0A0A0` — 副标题/说明文字
- **Accent Purple**: `#B070FF` — cube 3D 图标主色，霓虹紫
- **Accent Pink**: `#FF6BB3` — smile 图标 + CTA 按钮"联系我"霓虹粉
- **Accent Green**: `#00D493` — bilibili pink/green 平衡色
- **Mute Mid**: `#7A7A7A` / `#2A2A2A` — 边线、低亮文字

## Typography

- **Display Bold (英文)**: `Archivo Black` 400 — section 大写英标 ("ABOUT ME" / "WHAT I'M UP TO" / "PROJECTS")，160px
- **Display Serif (中文)**: `Noto Serif SC` 900 — Hero 大字 "陈与小金" 160px，**中文衬线高对比，气质来源**
- **Body (混排)**: `Inter` 400 / 500 / 600 / 900 — 副标题 (30-36px)、说明文字、平台卡 ("抖音主页" / "B 站主页" / "视频号")
- 整体字号跨度大（30 / 36 / 160px），靠跨度建立层级，不靠粗细变化

## Elevation

无传统 box-shadow / drop-shadow。深度靠三层叠加：
1. **底层烟雾 tile**：`smoke-main-tiled.webp` + `smoke-mist-tiled.webp` 在 #0A0A0A 黑底上慢飘（sway-a 17s + sway-b 23s + scroll-left 180s + scroll-right 240s）—— 给静止画面持续呼吸感。
2. **中层 3D 发光小物**：cube / moon / smile / arrow 几个 webp 都是 3D rendered 透明 PNG 自带 ambient glow，不需要额外阴影。
3. **顶层文字浮于一切之上**：高对比米白 / 纯黑 / 霓虹色，不需要描边或背景框。

## Components

- **Smoke Backdrop**: 全屏黑底叠白色 smoke tile 双层（sway 慢飘 + scroll 横向滚），是整站视觉底纹。
- **Hero Wordmark**: "陈与小金" Noto Serif SC 900 居中 160px，下叠 `hero.mp4` 街景视频（黑色都市人群慢移）。
- **3D Neon Icon**: cube (紫) / moon (蓝) / smile (紫) / arrow (彩虹光标)，每个独立浮于一处当 anchor。
- **Stat Marquee**: 双向横向滚动文字带（marquee-left 40s + marquee-right 50s），交错节奏给静态页面节拍。
- **Platform Card**: 3 个平台主页截图（`douyin.webp` / `bilibili.webp` / `wechat.webp`），#18181B 背景，每张都是真实的"陈与小金"对应平台首屏。
- **Pulse Dot**: 1s ping 脉冲点，作为 PROJECTS 区"live"状态指示。
- **CTA Pill**: "联系我" 圆角胶囊按钮，#FF6BB3 霓虹粉填充（站内唯一彩色按钮）。

## Do's and Don'ts

### Do's

- 全场景**保持纯黑深背景**（#0A0A0A），任何亮色都是 accent 不是底
- **烟雾 tile 必须常驻**——它是这个站的"心跳"，没烟雾就 dead
- **3D 霓虹小物**作为 scene anchor，但**每个 scene 不超过 1-2 个**（多了乱）
- 中英混排时**中文用 Noto Serif SC 900**，**英文用 Archivo Black 400**——互不替换
- 字号跨度做大（30 ↔ 160px），靠跨度撑层级
- 动效**全程 ease-in-out 慢呼吸**（17s / 23s / 180s / 240s 这种"慢"才是站的气质）

### Don'ts

- 不用亮背景（白底 / 渐变 / 任何浅色背板）
- 不用 traditional drop-shadow（用 3D 物自带 glow + 烟雾 tile 制造深度）
- 不用 sharp / 快速 / 跳跃动效（站的灵魂是"慢"和"沉")
- 中文**不用粗黑体 / 思源黑体**（破坏衬线气质，必须 Noto Serif SC）
- 3D 图标**不堆叠**（cube + moon + smile 不要同时在同一帧）
- 任何文字**不用描边 / 文字阴影**（高对比米白本身够清晰）
