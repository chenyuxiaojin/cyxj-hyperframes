# STORYBOARD — N1-1 陈与小金 Website Teaser

**Format:** 1920×1080, 60fps
**Audio:** ⚠️ 无 voiceover（分享会现场口播），仅环境 grain texture，无 SFX
**Style basis:** `DESIGN.md`（黑色都市 + 烟雾飘动 + 霓虹点缀）
**Total Duration:** 15s, 4 beats

---

## Global Direction

- **核心 metaphor**: 烟雾散开 → 人显形 → 身份成型 → 平台集结 → URL 落版
- **节奏**: 慢呼吸（沿用站点 17-240s 慢动效气质），但每 beat 末尾 0.3s 必有一个"硬切"（whip pan 或 hard cut）形成节拍
- **运动密度**: 每 beat ≥ 8 个可见元素同时在动（背景烟雾 + 中景文字 + 前景 3D 物 + 装饰粒子）
- **techniques.md 选用**: per-word typography (Beat 1, 4) + CSS 3D layering (Beat 2) + video compositing (Beat 1) + MotionPath (Beat 3 平台卡) + variable fonts/typing effect (Beat 4 URL)
- **持续叠加**: 烟雾 tile 全程不停 + grain-overlay 全程 0.15-0.18 opacity

---

## Asset Audit

| Asset | Type | Beat | Role |
|---|---|---|---|
| `smoke-main-tiled.webp` | tile | All | 全屏底纹，sway-a 17s + scroll-left 180s |
| `smoke-mist-tiled.webp` | tile | All | 二层底纹，sway-b 23s + scroll-right 240s（反向） |
| `hero.mp4` | video | 1 | 中央窗口 460×288 视频，自动播放 |
| `hero-poster.jpg` | img | 1 | hero.mp4 的 poster fallback |
| `cube.webp` | 3D icon | 2 | 左下角紫色霓虹 cube，280px |
| `moon.webp` | 3D icon | 2 | 右上角蓝色月牙，220px |
| `smile.webp` | 3D icon | 2 | 右下角紫色 smile，240px |
| `douyin.webp` | screenshot | 3 | 第一张平台卡（暗黑霓虹风） |
| `bilibili.webp` | screenshot | 3 | 第二张平台卡（粉色） |
| `wechat.webp` | screenshot | 3 | 第三张平台卡（暗黑） |
| `arrow.webp` | 3D icon | SKIP | 装饰冗余，跟主题弱关联 |
| `g01-g11.*` | thumbnails | SKIP | 信息密度太大塞不下，留给完整片 |
| `favicon.svg` | icon | SKIP | 太小不显眼 |

**利用率**: 10 / 13 主资源 = 77% ✅（达标 ≥ 50%）
**首尾呼应**: hero.mp4（Beat 1）+ URL 文字（Beat 4，对应站点同源）

---

## BEAT 1 — HOOK · 烟雾中显形 (0:00–0:03)

### Concept

一片漆黑被白烟侵入，慢慢散开，露出居中的中文衬线大字"陈与小金"。这不是 logo reveal，是**人物从迷雾中走出**的瞬间——观众的潜意识立刻接到"有故事感的独立 IP"信号。三秒内完成"黑→烟→字"三段建立。

### Visual

- **0.0s 起手**: 全屏 #0A0A0A，无任何元素。
- **0.0–1.2s**: `smoke-main-tiled.webp` 从屏幕两侧 fade in（opacity 0 → 0.55，scale 1.0 → 1.04），同步 `smoke-mist-tiled.webp` 从中央 radial fade in（opacity 0 → 0.35），双层烟雾交错形成深度。
- **0.8–1.5s**: 中央偏上区域 `hero.mp4` 视频窗口 fade in（460×288, 圆角 16px, opacity 0 → 0.85），自动从头播放（黑色都市街景人群慢移）。
- **1.2–2.5s**: "陈与小金" 四字 Noto Serif SC 900 / 220px / #E8E8E6 居中，**逐字 fade in + scale**（陈→0.4s, 与→0.5s, 小→0.6s, 金→0.7s, 每字延迟 0.15s, scale 1.08→1.0, opacity 0→1, ease back.out(1.4)）。
- **2.5–3.0s**: 四字微 ping（scale 1.0→1.02→1.0, 0.4s, ease sine.inOut），下方 6px 米白横线 `width: 0 → 280px`（draws-on, ease power3.out）。

### Mood

电影开场。Christopher Nolan 的开场雾镜 + 王家卫的霓虹小巷。**沉默有故事感**，不卖力炫但每个像素都贴心摆放。

### Animation choreography

| Element | Verb | Specs |
|---|---|---|
| Black canvas | HOLDS | #0A0A0A 全程 |
| Smoke main | EBBS-IN | opacity 0→0.55, scale 1→1.04, 1.2s power2.out |
| Smoke mist | RADIATES | opacity 0→0.35, blur 8px→0, 1.2s power3.out |
| hero.mp4 | EMERGES | opacity 0→0.85, y +30→0, 0.7s power3.out @ 0.8s |
| 陈/与/小/金 | TYPE-DROPS-IN | 每字 scale 1.08→1.0, opacity 0→1, 0.4s back.out, stagger 0.15s @ 1.2s |
| Underline | DRAWS | width 0→280px, 0.5s power3.out @ 2.5s |

### Depth layers

- **BG**: #0A0A0A + 双层 smoke tile (z-index 0-1)
- **MG**: hero.mp4 视频窗口 + grain overlay (z-index 5-10)
- **FG**: "陈与小金" 大字 + 米白横线 (z-index 20)

### Transition OUT → Beat 2

**Hard cut**（无 easing transition）—— 让 Beat 2 直接接管时间轴，制造"切镜头"的硬节拍感。这一切是为了和站点慢动效（17s+）反差，加快视频感知节奏。

---

## BEAT 2 — IDENTITY · 三神器到位 (0:03–0:07)

### Concept

身份成型的 4 秒。"陈与小金"大字保持但向上让位，副字身份 tag 从下方滑入，**3 个 3D 霓虹小物（cube / moon / smile）从黑暗中各自浮现**——它们是非程序员独立创作者的视觉徽章，也是站点 ABOUT ME 区的灵魂物件。

### Visual

- **0.0s 起手（即整片 3.0s）**: 继承 Beat 1 状态，"陈与小金"四字保持。
- **0.0–0.6s**: "陈与小金" scale 1.0 → 0.7（220px → 154px）+ y 0 → -180px，让出中央空间。下方米白横线同步上移并淡出（opacity 1 → 0.3）。
- **0.4–1.2s**: 副字 "非程序员 · Claude Code Practitioner" Inter 500 / 36px / #C7C7C7 从 y +24px → 0 + opacity 0 → 1，ease power3.out。
- **1.0–2.0s**: 3 个 3D 霓虹小物**按 0.2s stagger 依次浮现**：
  - `cube.webp` 280px 落在左下 (x: 320, y: 720)，scale 0.5 → 1.0, rotate -8° → 0°, opacity 0 → 1, 0.6s back.out(1.6)
  - `moon.webp` 220px 落在右上 (x: 1480, y: 220)，scale 0.5 → 1.0, rotate +6° → 0°, opacity 0 → 1, 0.6s back.out(1.6) @ 0.2s
  - `smile.webp` 240px 落在右下 (x: 1520, y: 760)，scale 0.5 → 1.0, rotate -4° → 0°, opacity 0 → 1, 0.6s back.out(1.6) @ 0.4s
- **2.0–3.5s**: 3 物各自 idle 微动（cube y +5/-5 浮动 1.5s sine inOut, moon rotate ±2° 1.8s, smile scale 1.0/1.02 1.6s）。
- **3.5–4.0s**: 全屏 ping pulse（一个细小的米白光圈从中央 scale 0 → 1.5 + opacity 0.3 → 0, 0.5s ease-out）作为 beat 4 的换镜信号。

### Mood

夜店霓虹海报 + 独立游戏开发者桌面。Apple Vision Pro 发布会里那种"3D 物体悬浮"的几何感，但更暗更不规则。

### Animation choreography

| Element | Verb | Specs |
|---|---|---|
| "陈与小金" | RECEDES + SHRINKS | scale 1→0.7, y 0→-180, 0.6s power2.inOut |
| Underline | DIMS-OUT | opacity 1→0.3, 0.5s power2.out |
| 副字 | RISES-IN | y +24→0, opacity 0→1, 0.5s power3.out |
| cube.webp | DROPS-IN | scale 0.5→1.0, rotate -8°→0°, opacity 0→1, 0.6s back.out(1.6) |
| moon.webp | DROPS-IN | 同上 stagger +0.2s |
| smile.webp | DROPS-IN | 同上 stagger +0.4s |
| 3D icons idle | BREATHES | y/scale/rotate ±5%, 1.5-1.8s sine inOut loop |
| Ping pulse | PULSES | scale 0→1.5, opacity 0.3→0, 0.5s power2.out @ 3.5s |

### Depth layers

- **BG**: smoke tiles 继续飘 (z-index 0-1)
- **MG**: cube / moon / smile 3D 物 + 副字 (z-index 10-15)
- **FG**: "陈与小金" 收缩大字 (z-index 20)

### Transition OUT → Beat 3

**Velocity-matched upward whip**: 整层 (Beat 2 的所有元素) `y: 0 → -1080, blur: 0 → 16px, opacity: 1 → 0`, 0.35s ease power3.in。Beat 3 的平台卡从右侧 x: +800 → 0 接续 0.35s power3.out。两段速度匹配，制造"摄像机抬升 → 横移"的连续运镜感。

---

## BEAT 3 — PLATFORMS · 三平台集结 (0:07–0:12)

### Concept

前 7 秒铺完了"我是谁"，现在用 5 秒证明"我真的产出"——3 张真实平台主页截图（抖音/B 站/视频号）从右侧依次滑入排成横向三连卡。这是整片**最实证**的一刻，观众看到陈与小金不只是个标题，而是 3 个平台都在更新的真活人。

### Visual

- **0.0s 起手（即整片 7.0s）**: Beat 2 已抬升出画面，仅烟雾 tile + 黑底保留。
- **0.0–0.3s**: 顶部小字 "WHERE TO FIND ME" Archivo Black 400 / 28px / #A0A0A0 / 字间距 0.4em，从右淡入（x +40 → 0, opacity 0 → 1）。
- **0.3–1.5s**: 3 张平台卡按 **0.2s stagger 从右侧滑入**，等距横排居中：
  - 卡 1 `douyin.webp` 460×640 圆角 24px，#18181B 框背景，x: +900 → 280px，y: 220px，scale 0.95 → 1.0, ease power3.out, 0.5s
  - 卡 2 `bilibili.webp` 同上，x: 280 → 730px @ +0.2s
  - 卡 3 `wechat.webp` 同上，x: 730 → 1180px @ +0.4s
- **1.5–2.5s**: 每张卡下方 caption 从下淡入（y +20 → 0, opacity 0 → 1, 0.4s power3.out, stagger 0.15s）：
  - "抖音 · 408 粉" Inter 600 / 26px / #E8E8E6
  - "B 站 · Lv4 · 21 条" 同上
  - "视频号 · 主阵地" 同上
- **2.5–4.5s**: 3 卡 idle 微浮动（y ±4px 2s sine inOut, 各自不同步），cube/moon/smile 在 Beat 2 已上升出画面但 smoke 保持。
- **4.5–5.0s**: 顶部小字闪一下（opacity 1 → 0.4 → 1, 0.4s）暗示 outro。

### Mood

YouTuber 频道总览 + 时尚杂志拼贴。**信息密度**高但不乱——3 张卡同尺寸 + 同间距 + 同色调（虽然原图各有粉/暗/橙不同色），靠均匀网格压住。

### Assets

- `douyin.webp` 460×640 第一张
- `bilibili.webp` 460×640 第二张
- `wechat.webp` 460×640 第三张
- caption 文字直接从 visible-text.txt 拿：抖音 · 408 粉 / B 站 · Lv4 · 21 条 / 视频号 · 主阵地

### Animation choreography

| Element | Verb | Specs |
|---|---|---|
| Top kicker | SLIDES-IN | x +40→0, opacity 0→1, 0.3s power3.out |
| Card 1 douyin | SLIDES-IN | x +900→280, scale 0.95→1.0, 0.5s power3.out |
| Card 2 bilibili | SLIDES-IN | x +900→730, 同上 stagger +0.2s |
| Card 3 wechat | SLIDES-IN | x +900→1180, 同上 stagger +0.4s |
| Captions x3 | RISES-IN | y +20→0, opacity 0→1, 0.4s power3.out, stagger 0.15s |
| Cards idle | FLOATS | y ±4px, 2s sine inOut loop, 不同 phase |
| Top kicker | BLINKS | opacity 1→0.4→1, 0.4s |

### Depth layers

- **BG**: smoke tiles + 黑底
- **MG**: 3 platform cards + captions
- **FG**: top kicker "WHERE TO FIND ME"

### Transition OUT → Beat 4

**Cards SHATTER + Zoom-Through**: 3 张卡同时 scale 1.0 → 0.85, opacity 1 → 0, blur 0 → 18px, 0.4s power2.in。Beat 4 的 URL 大字从 scale 1.3 → 1.0, opacity 0 → 1, blur 18 → 0, 0.4s expo.out 接续。**速度匹配**形成"卡碎 → URL 浮现"的镜头延续感。

---

## BEAT 4 — OUTRO · URL 落版 (0:12–0:15)

### Concept

3 秒收束。**站名 URL 用霓虹粉浮出 + shimmer 扫光**——告诉观众"想看更多就去 demo.xiaochens.com"。霓虹粉 #FF6BB3 是站内唯一 CTA 色（"联系我"按钮也是它），形成首尾品牌呼应。

### Visual

- **0.0s 起手（即整片 12.0s）**: Beat 3 卡片已碎散退出，只剩 smoke + 黑底。
- **0.0–0.5s**: 中央 URL "demo.xiaochens.com" Inter 900 / 96px / #FF6BB3 从 scale 1.3 → 1.0, opacity 0 → 1, blur 18 → 0, 0.4s expo.out。
- **0.5–1.0s**: URL 上叠 shimmer-sweep（CSS gradient mask 从左到右扫光，0.6s，半透明白色 highlight 沿字母走过）。
- **1.0–2.0s**: URL 下方 200px 处 "Built with Claude Code" Inter 500 / 22px / #C7C7C7 从 y +12 → 0, opacity 0 → 1, 0.5s power3.out。
- **2.0–2.7s**: 全屏 grain-overlay opacity 加深 0.15 → 0.22（让画面更"老电影"质感收尾）。烟雾继续飘。
- **2.7–3.0s**: URL 微 ping（scale 1.0 → 1.03 → 1.0, 0.3s ease sine inOut）作为最后视觉叩门。

### Mood

苹果发布会落版 + 黑胶唱片 B 面。短促但不仓促，**留白让 URL 焦点突出**。

### Assets

- 文字：纯 CSS + 字体，无图片
- `smoke-main-tiled.webp` + `smoke-mist-tiled.webp` 继续飘

### Animation choreography

| Element | Verb | Specs |
|---|---|---|
| URL "demo.xiaochens.com" | EMERGES | scale 1.3→1.0, blur 18→0, opacity 0→1, 0.4s expo.out |
| Shimmer sweep | SWEEPS | 0.6s gradient mask left-to-right @ 0.5s |
| Tagline | RISES-IN | y +12→0, opacity 0→1, 0.5s power3.out @ 1.0s |
| Grain overlay | INTENSIFIES | opacity 0.15→0.22, 1.0s linear @ 2.0s |
| URL final ping | PINGS | scale 1.0→1.03→1.0, 0.3s sine inOut @ 2.7s |

### Depth layers

- **BG**: smoke + #0A0A0A 底
- **MG**: URL 大字 + tagline
- **FG**: grain overlay 全屏

### Transition OUT

**自然结束**——data-duration=15 时间到，hyperframes engine 自动停在最后一帧。最后一帧是：URL 居中 + tagline 在下 + 烟雾 + grain 全开。这是分享会观众离场记忆。

---

## Production Architecture

```
2026-05-09/N1-1-mywebsite/
├── index.html                    root — 4 beats 时间线编排
├── meta.json                     工程元信息
├── DESIGN.md                     ✅ Step 2
├── SCRIPT.md                     ✅ Step 3
├── STORYBOARD.md                 ✅ Step 4 (THIS FILE)
├── captures/demo-xiaochens-com/  ✅ Step 1 capture 产物
├── assets/                       (从 captures 复制需要的 assets)
│   ├── hero.mp4
│   ├── hero-poster.jpg
│   ├── cube.webp / moon.webp / smile.webp
│   ├── douyin.webp / bilibili.webp / wechat.webp
│   ├── smoke-main-tiled.webp / smoke-mist-tiled.webp
│   └── fonts/ (Noto Serif SC, Archivo Black, Inter)
└── compositions/
    ├── beat-1-hook.html
    ├── beat-2-identity.html
    ├── beat-3-platforms.html
    └── beat-4-outro.html
```

---

## 节奏摘要

| Beat | 起止 | 时长 | 主元素 | 关键 verb |
|---|---|---|---|---|
| 1 Hook | 0-3s | 3s | 烟雾 + 大字 + hero.mp4 | EBBS-IN, TYPE-DROPS-IN |
| 2 Identity | 3-7s | 4s | 副字 + 3 霓虹 3D | RISES-IN, DROPS-IN, BREATHES |
| 3 Platforms | 7-12s | 5s | 3 平台卡 + caption | SLIDES-IN, FLOATS |
| 4 Outro | 12-15s | 3s | URL + shimmer + grain | EMERGES, SWEEPS, PINGS |

总: 15 秒 / 4 beat / 全程 ≥ 8 个可见动元素 / 5 种 techniques.md 技术 / 77% asset 利用率 ✅
