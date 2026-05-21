# PLAN — cold-open（0:00-0:38，字幕 1-11 条）

整片切 11 段（cold-open / ch1-人物 / ch2-概念 / ch3-momentum / ch4-wrapper / ch5-merge / ch6-汇流 / ch7-预测×3 / outro），各自独立 hyperframes 子工程，达芬奇拼接。本 PLAN 仅 cold-open 第一段。

## 输出

- 1920×1080 mp4 直出，带 DNA 米色底 `#F7F2EA`
- 38s 整段（字幕 1-11 条）
- 口播 + 字幕 → 用户在达芬奇里加

## 字幕逐句对应（450 条字幕中前 11 条）

| # | 时间 | 字幕 | 所在 SEC |
|---|---|---|---|
| 1 | 0:00.133-5.633 | OpenAI的创始成员卡帕西加入了OpenAI最大的竞争对手Anthropic | SEC A |
| 2 | 0:06.133-7.833 | 这个不是一个跳槽八卦 | SEC B |
| 3 | 0:08.199-10.500 | 背后是过去两年AI行业最大的一次转向 | SEC B |
| 4 | 0:10.500-12.833 | 转向只是大多数人还没有意识到而已 | SEC B |
| 5 | 0:13.500-16.033 | 为什么我觉得这件事不是普通的跳槽 | SEC C |
| 6 | 0:16.133-20.533 | 因为上个月前Anthropic在美国企业市场首次反超了OpenAI | SEC D |
| 7 | 0:20.733-27.033 | 34.44%对32.3%，三年前Anthropic的份额才只有0.03% | SEC D |
| 8 | 0:27.333-30.399 | 一个OpenAI的创始成员在这一个时间 | SEC E |
| 9 | 0:30.399-33.633 | 点去了OpenAI竞争对手的一家模型公司 | SEC E |
| 10 | 0:33.633-35.733 | 为什么是这一个时间点以及 | SEC E |
| 11 | 0:36.366-37.666 | 为什么是Anthropic | SEC E |

## 5 SEC 分镜

### SEC A — 迁徙（0:00-5.6s，5.6s）

**核心比喻**：人物从一家公司 → 对手公司，物理位移。左边 OpenAI 中性灰，右边 Anthropic 橙光偏向——视觉已经在"押注"。

**元素**：
- 上方推文 banner（用户原图 `图片用户收集/加入的推文.png` 缩小到顶部 30% 宽）作为出处佐证
- 左：OpenAI logo（黑 fill）+ chip 标签「创始成员 · 2015」
- 中：Karpathy 圆形头像（`assets/portraits/karpathy-hero.png`），从左侧推到右侧（x: -200 → 0，5s 慢推）
- 右：Anthropic logo（Claude 橙 `#d97757`，box-shadow halo）+ chip 标签「2026.5.19 加入」
- 中间一条细虚线箭头连接两边

**入场**：
- 0.3s 推文 banner 从顶部下落（y: -60 → 0，power3.out）
- 0.8s 左 OpenAI logo + chip stagger（power2.out，间隔 0.15s）
- 1.4s Karpathy 头像 scale 0 → 1（back.out(1.4)）
- 2.0s 右 Anthropic logo + chip + halo（power3.out，halo 用 box-shadow yoyo×1）
- 2.6s 虚线箭头 svg `stroke-dashoffset` 从 length → 0（power2.inOut，1.2s）
- 3.8s Karpathy 头像沿虚线慢推（x: -200 → 0，1.5s power2.inOut）

**hot 色**：Claude 橙 `#d97757`（logo + halo），文字用深橙 `#B5563D`（N17 contrast）

### SEC B — 否定 + 转向（5.6-12.8s，7.2s）

**核心比喻**：先把"跳槽八卦"这个小标签**否定划掉**，再砸下 chrome 大字「行业最大的一次转向」。否定 + 论点，对应字幕 2-4。

**元素**：
- 起手：屏幕中央胶囊 chip「跳槽八卦」（灰字浅底）
- 0:06.1 划掉：从 chip 中央划过一道斜线（SVG line `stroke-dashoffset`，0.4s power2.in），同时 chip scale 0.95
- 0:07.8 chip 缩到 0.3 透明度，移到屏幕右下角小字
- 0:08.2 chrome 大字渐显（chrome 渐变 8-stop 米色暖版）：
  - 主字「AI 行业最大的一次转向」120px Noto Sans SC SemiBold
  - 副字「只是大多数人还没意识到」42px 深棕 `#5A4F46`
- 0:10.5 副字 stagger char 入场（每字 0.04s）

**hot 色**：红色斜杠 `#B5563D` 否定线（不用纯红，沿用品牌色家族）

### SEC C — 自问（12.8-16.1s，3.3s）

**核心比喻**：一句承接性问句，从论点过渡到数据论证。

**元素**：
- 屏幕中央 chrome 大字「为什么这不是普通的跳槽？」（96px Noto Sans SC）
- 问号「？」独立放大（scale 0.5 → 1.2 → 1.0，elastic.out(1, 0.4)）
- 右下角细字 hint「答案在数据里 ↓」（24px JetBrains Mono `#5A4F46`）

### SEC D — 数据反超（16.1-27.0s，10.9s）

**核心比喻**：折线图，3 年 Anthropic 从地表爬到顶峰、和 OpenAI 在 2026.5 交叉反超的趋势线。增长曲线比双柱更能表达"崛起"。对应字幕 6-7。

**元素**：
- SVG 折线图（1600×600 居中放置）
  - X 轴时间刻度：2023.6 / 2024.6 / 2025.4 / 2025.10 / 2026.5
  - Y 轴市占率刻度：0 / 10% / 20% / 30% / 40%
- **OpenAI 线**（深棕 `#2B2622`，3px stroke）：高位平稳 33-35%，2026.5 末端微降到 32.3%
- **Anthropic 线**（Claude 橙 `#d97757`，3px stroke + glow filter）：从 0.03% 起，2025.4 跳到 7.94%，2026.5 陡升到 34.44%。轨迹用 SVG path `stroke-dashoffset` 从 length → 0 渐显（power2.inOut，3.5s）
- **交叉点**（~9.5s 处）：两线在 2026.5 交叉，Anthropic 反超 OpenAI
- 末端两个数据点 dot + label：
  - 34.44% Anthropic（橙圆 + 深橙字 `#B5563D`）
  - 32.3% OpenAI（深棕圆 + 深棕字 `#5A4F46`）
- 左上角小数字 `0.03% → 7.94% → 34.44%` token counter 同步增长（onUpdate）
- 左下角 source 标注「Ramp 企业 AI 采纳指数 · 5 万 + 美国企业」（16px JetBrains Mono `#5A4F46`）
- **反超交叉瞬间撞击（§3 模板）**：T = 9.5s（SEC 内）
  - 橙色 ripple from 交叉点 scale 0.5 → 12（0.6s power2.out）
  - screen shake `±20px / -30 / +25 / -15 / 0`（每段 0.05s × 5）
  - Anthropic 折线 stroke `filter: drop-shadow(0 0 16px rgba(217,119,87,.9))` yoyo×1（0.15s）
  - 「首次反超 ↑」badge 在交叉点上方弹出（scale 0 → 1，back.out(2.4)）

**hot 色**：Anthropic 线品牌橙 `#d97757`（line + glow + dot）；OpenAI 线深棕 `#2B2622`；所有文字深橙 `#B5563D` / 深棕 `#5A4F46`（N17 contrast）

### SEC E — 三连问 + 收尾（27.3-37.7s，10.4s）

**核心比喻**：重申三要点 chip stagger → chrome 大字两连问砸下。**最后一段**，可以 fade out（N18 例外）。

**元素**：
- 0:27.3-33.6（字幕 8-9）三个 chip 横向 stagger 入场（间隔 1.5s）：
  - 「OpenAI 创始成员」（左，灰底深棕字）
  - 「这个时间点」（中，米色加深底）
  - 「对手公司 Anthropic」（右，Claude 橙 halo + 深橙字 `#B5563D`）
- 0:33.6-35.7（字幕 10）chrome 大字砸下「为什么是这个时间点？」（96px）
- 0:36.4-37.7（字幕 11）chrome 大字替换「为什么是 Anthropic？」（"Anthropic" 关键词单独深橙 `#B5563D` 突出）
- 0:37.5 整段 fade out（opacity 0，0.2s）→ 留 0.2s 黑场过渡到 ch1

## 工程拓扑

```
2026-05-20/karpathy-anthropic/
├── meta.json                          (id: "xcyj-karpathy-anthropic-cold-open")
├── hyperframes.json                   (registry config)
├── index.html                         (root, 1920×1080, 38s, 全局四件套 + 5 SEC 挂载)
├── assets/
│   ├── xcyj-tokens.css               (DNA token，已存在)
│   ├── logos/anthropic.svg openai.svg (已存在，anthropic.svg 已 hardcode fill="#d97757")
│   ├── portraits/karpathy-hero.png    (已存在)
│   └── tweets/joining-tweet.png       (已存在，或用 图片用户收集/加入的推文.png)
└── compositions/
    ├── sec-a-migration.html           (data-start=0 data-duration=5.6)
    ├── sec-b-pivot.html               (data-start=5.6 data-duration=7.2)
    ├── sec-c-question.html            (data-start=12.8 data-duration=3.3)
    ├── sec-d-data.html                (data-start=16.1 data-duration=11.2)
    └── sec-e-three-questions.html     (data-start=27.3 data-duration=10.4)
```

总时长 = 5.6 + 7.2 + 3.3 + 11.2 + 10.4 = 37.7s ≈ 38s ✅

## 全局四件套（index.html 顶层）

- 透视网格（CSS `linear-gradient` × 2 + `transform: perspective(600px) rotateX(60deg)`）
- 暗角 vignette（CSS `radial-gradient(ellipse at center, transparent 40%, rgba(43,38,34,0.18) 100%)`）
- 颗粒 grain-overlay（catalog component fork 或自写 turbulence）
- crosshair（屏幕四角 8 个 1px 直线）

## 转场（SEC 之间）

按 N18 + 教程类长视频反例 8 例外：**SEC A→B / B→C / C→D / D→E 用 instant set hard-cut**，每个 SEC 内部有完整 entrance + scene 间字号/构图重置即可感知章节切换。**SEC 末尾禁 exit 动画**（最后 SEC E 例外，可 fade out）。

具体写法：`tl.set('.sec-X', { autoAlpha: 0 }, <下一段 start time>)` instant hide，下一段 entrance 自然展开。

## 翻车经验落地清单（N13-N19）

- [ ] **N13** img 包 SVG fill 不读 CSS：anthropic.svg 已 hardcode fill="#d97757"，直接 `<img>` 引用；其他 logo 需要变色就 inline `<svg>` 或 hardcode
- [ ] **N14** GSAP transform 覆盖 CSS 居中：所有元素用 flex 居中（`.scene-content { display:flex; align-items:center; justify-content:center }`），不用 `position:absolute; top:50%; transform:translate(-50%,-50%)`
- [ ] **N15** font-family 不用 CSS var：硬编码 `font-family: "Noto Sans SC", "Inter", sans-serif`
- [ ] **N16** catalog block 不传 props：本段不装 catalog block（手写更可控）；如需 grain-overlay 则 fork 而非直接 add
- [ ] **N17** 米色底文字色降亮：橙→`#B5563D`，蓝→`#2A6FBD`，棕→`#5A4F46`；品牌橙 `#d97757` 仅用于 halo / box-shadow / SVG logo fill
- [ ] **N18** SEC 末尾禁 exit：每个 SEC 用 `tl.set(autoAlpha:0)` 切，仅 SEC E 末尾允许 fade out
- [ ] **N19** debug 截图存 `2026-05-20/karpathy-anthropic/debug-shots/`，不存仓库根

## 验收标准

- `npx hyperframes lint` 0 errors
- `npx hyperframes validate` 0 contrast warnings
- preview 浏览器看：5 SEC 节奏对得上字幕 1-11 条时间戳（±0.2s 误差可接受）
- 字幕 6 反超瞬间撞击效果"重"
- chrome 大字（SEC B / C / E）质感不平
- DNA 自检 5/5（米色底 / Claude 橙现身 / 四件套 / 字体栈 / chrome 渐变）

## 不在本段做的事

- 口播音频接入（用户在达芬奇加）
- 字幕轨（用户在达芬奇加）
- 转场到 ch1 的 shader transition（达芬奇里做）
- ch1-ch8 的视觉（下一轮）
