# STYLE_BRIEF —— XCYJ Claude Code 教程视频视觉规格

> 任何 agent 改 beat 之前必读。所有 beat 必须严格遵守此 brief 的色彩 / 字体 / 网格 / 组件规范。

## 一、参考来源（已分析）

1. **Nate Herk "32 Tricks to Level Up Claude Code in 16 Mins"** —— 本工程的**视觉风格基准**。21 张截图存在 `参考图/`。
2. **`hyperframes-student-kit/video-projects/claude-edit-intro/`** —— face FULL → PiP 的镜头语言基准。
3. **`hyperframes-student-kit/video-projects/aisoc-lesson-5-1/`** —— 长教学片的 entrance 节奏 + 单段一个 hot 词的纪律。
4. **`hyperframes-student-kit/video-projects/hyperframes-sizzle/`** —— logo-outro hero hold 4-6s 的范本。
5. **`MOTION_PHILOSOPHY.md`** —— 10 大法则的精神（≤5 符号色、whip 转场、不硬切、三段式）。

**与 MOTION_PHILOSOPHY 的差异**：Infinite Payments 是商业 promo 暗黑美学；Nate 教程是教程语言——更明亮、更多色、信息密度更高。**本工程走 Nate 教程语言**，但保留 MOTION_PHILOSOPHY 的纪律。

---

## 二、底层视觉系统

### 2.1 色彩
```css
:root {
  /* 底色 —— 注意是午夜深蓝，不是纯黑 */
  --c-bg:        #0a1124;        /* 主底色，全程不变 */
  --c-bg-2:      #0d172e;        /* 卡片填充 */
  --c-bg-3:      #142042;        /* 卡片高亮态 */
  --c-grid:      rgba(91,180,255,0.08);  /* 网格线，全程显形 */

  /* 教程语义色 —— 5 个 ≤ 但每段只主用一个 hot */
  --c-blue:      #5BA9FF;        /* 章节标题、强调、技术名词 */
  --c-blue-glow: rgba(91,169,255,0.55);
  --c-green:     #8DD891;        /* 正向、确认、✓、good */
  --c-red:       #F05F6E;        /* 负向、删除线、✗、bad */
  --c-purple:    #B891E4;        /* 第二组数据、次要强调 */
  --c-yellow:    #F0C75E;        /* 标注、warning、数字 */
  --c-orange:    #d97757;        /* Claude 品牌色 —— 仅 Claude logo / 真人 PiP halo */

  /* 字色 */
  --c-text:      #ffffff;
  --c-text-dim:  #96a2b6;
  --c-text-mute: rgba(255,255,255,0.5);

  /* 字体 */
  --f-zh:   "Noto Sans SC", "Inter", sans-serif;
  --f-en:   "Inter", system-ui, sans-serif;
  --f-mono: "JetBrains Mono", ui-monospace, monospace;

  /* 字号 */
  --fs-headline-hero: 120px;     /* 全屏 hero 大字 */
  --fs-headline:      88px;      /* 标准标题 */
  --fs-card-title:    56px;      /* 卡片内大标题 */
  --fs-body:          32px;      /* 正文 */
  --fs-kicker:        22px;      /* 顶部章节卡 */
  --fs-mono:          26px;      /* 终端 / 等宽 */

  /* 阴影/halo */
  --halo-blue:   0 0 60px rgba(91,169,255,0.5), 0 0 0 2px var(--c-blue);
  --halo-orange: 0 0 60px rgba(217,119,87,0.55), 0 0 0 2px var(--c-orange);
  --halo-card:   0 24px 60px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.08);
}
```

**单段 hot 词纪律**：每个 beat 只允许有一个色作为 hot（最饱和最亮的），其余素材统一为 dim/text/grid。

### 2.2 全程网格（必须）
全屏画一层细网格作为底层纹理，**所有 beat 都要看得见**：

```css
.global-grid {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(var(--c-grid) 1px, transparent 1px),
    linear-gradient(90deg, var(--c-grid) 1px, transparent 1px);
  background-size: 80px 80px;
  pointer-events: none;
  z-index: 1;
}
```

不在每个 beat 里画——**在 index.html 顶层画一次**贯穿全程。Beat 内部不要再画自己的 grid。

### 2.3 暗角（vignette）
全程挂一层径向渐变暗角，让画面边缘更暗、中心更亮：
```css
.global-vignette {
  position: absolute; inset: 0;
  background: radial-gradient(ellipse 70% 70% at 50% 50%, transparent 30%, rgba(5,8,20,0.55) 100%);
  pointer-events: none;
  z-index: 2;
}
```

### 2.4 颗粒（grain）
保留现有 `compositions/components/grain-overlay.html`，opacity 0.10-0.12，mix-blend-mode: overlay，全程挂 z-index 8。

### 2.5 face PiP 规范
- **FULL**: 0-18.4s + 60-64.6s（全屏）
- **PIP**: 18.4-60s，位置 `x: 1380, y: 60, width: 480, height: 320`（比之前 540×360 更紧凑）
- PiP halo 用 Claude 橙 `--halo-orange`，圆角 36px，1px 内描边

---

## 三、组件库（重做时直接复用）

### 3.1 章节 kicker（顶部固定）
```html
<div class="kicker">
  <span class="kicker-num">EP·01</span>
  <span class="kicker-sep">/</span>
  <span class="kicker-label">CLAUDE CODE 教程</span>
</div>
```
- `kicker-num` 用 mono 字体 + Claude 橙
- `kicker-label` 用 Inter 黑体 + 白色
- letter-spacing 0.32em
- 位置：top: 56px, left: 56px

### 3.2 大字 hero（底部置底 / 中央）
- 字号 `--fs-headline` 88px 起，hero 帧 120px
- Chrome 渐变填充：`linear-gradient(180deg, #ffffff 0%, #c8d3e0 62%, #e8ecf2 100%)`
- 单个 hot 词用对应语义色 + drop-shadow halo
- 中文用 Noto Sans SC，英文用 Inter

### 3.3 卡片栈（参考 Nate 7.40.32）
```html
<div class="card">
  <div class="card-icon">⚡</div>
  <div class="card-title">React</div>
</div>
```
- 圆角 24px
- 描边 1.5px 半透明白
- 填充 `--c-bg-2` 渐变到 `--c-bg-3`
- inset shadow + outset halo
- 入场：从 y:60 + opacity:0 + blur:14px → 到 0/1/0，stagger 0.12s，ease back.out(1.4)

### 3.4 终端模拟（参考 Nate 7.40.24, 7.41.39, 7.42.18, 7.42.24）
```html
<div class="terminal">
  <div class="terminal-bar">
    <span class="dot dot-r"></span>
    <span class="dot dot-y"></span>
    <span class="dot dot-g"></span>
    <span class="terminal-title">claude</span>
  </div>
  <div class="terminal-body">
    <div class="line"><span class="prompt">$</span> claude</div>
    <div class="line"><span class="prompt">&gt;</span> /init</div>
    <div class="line dim">Scanning project<span class="cursor">▎</span></div>
  </div>
</div>
```
- macOS 三色点（#FF5F56 / #FFBD2E / #27C93F）
- 标题居中等宽
- ANSI 配色：prompt 用绿/紫，关键字用蓝，注释用 dim
- 圆角 16px，描边 1px 半透明

### 3.5 对话气泡（参考 Nate 7.40.04）
```html
<div class="bubble"><span class="strikethrough">I'm building...</span></div>
<div class="bubble">The project uses...</div>
```
- 胶囊圆角 ~50px
- 描边浅蓝半透明，填充 `--c-bg-2`
- 删除线用 `--c-red` 1.5px 斜画

### 3.6 流程图（参考 Nate 7.43.16, 7.42.32）
- 元素用三联卡或竖向列表
- 箭头：直线 + 三角箭头，颜色 `--c-text-dim`
- 步骤激活时变 `--c-blue` + halo

### 3.7 执行计划列表（参考 Nate 7.43.04）
```html
<div class="plan">
  <div class="plan-title">📋 完整流程</div>
  <div class="plan-item">
    <span class="check">☑</span>
    <span class="step-text">写文案</span>
    <span class="qa-tag">已完成</span>
  </div>
</div>
```
- 蓝色 ☑ checkbox 用 `--c-blue`
- 绿色 已完成 标签用 `--c-green` + 浅绿底
- 等宽字体 + 圆角条

### 3.8 进度条 / 章节进度（参考 Nate 7.39.28）
- 顶部细横条 + 圆点节点
- 已完成节点：实心 `--c-blue` + halo
- 未完成节点：空心半透明
- 渐变填充：`linear-gradient(90deg, var(--c-blue), var(--c-purple))`

### 3.9 章节切换卡（参考 Nate 7.40.36）
背景虚化 + 居中黑卡：
```html
<div class="chapter-card">
  <div class="chapter-num">2</div>
  <div class="chapter-tag">BEGINNER</div>
  <div class="chapter-title">Set Up a Status Line</div>
</div>
```
- 大圆数字徽章
- 章节标签 letter-spacing 0.36em
- 大标题 64-88px

---

## 四、动效规范

### 4.1 入场（GSAP）
- 字符 stagger：0.06-0.08s
- 卡片 stagger：0.12-0.15s
- ease：`back.out(1.4)`（卡片）、`expo.out`（光线/线条）、`power3.out`（一般）
- 入场带 `filter: blur(14px) → 0` 营造焦点感

### 4.2 转场（beat 之间）
- 不用硬切。用以下三种之一：
  - `flash-through-white.html` —— 闪白 0.4s（已有）
  - 模糊+缩放：`scale 1 → 1.05 + blur 0 → 8px`，0.6s power2.in
  - whip-pan：横向位移 + 模糊
- 配 SFX whoosh

### 4.3 持续动效（ambient）
- face PiP 上 3-6% 音频反应 pulse
- grain layer 周期 0.6 透明度浮动
- 网格保持静态（不动）

### 4.4 退场
- 单个元素 fade + blur out 0.5s ease-in
- 整个 beat：opacity 1 → 0 + blur 0 → 8px，0.6s

---

## 五、每个 beat 的"核心比喻 + 构图"指令

> Beat agent 拿到具体 beat 后必须按此构图。

### Beat 1 HOOK [0–6.5s] —— "真正耗费时间的不是录制"
- **核心比喻**：录制 ≠ 耗时大头，剪辑/动效才是
- **构图**：
  - 顶部 kicker `EP·01 / 时间陷阱`
  - 中央对话气泡：`录制 30 分钟` 被红色斜划掉
  - 下方大字 hero：`真正耗费时间的` (chrome 白)，下一行 `从来不是录制` 末尾 `录制` 用 red 红色 hot
  - 全程网格 + 暗角 + grain
- **关键招**：参考 Nate 7.40.04 删除线对话气泡

### Beat 2 PAIN LIST [6.5–13s] —— 三痛点
- **核心比喻**：剪辑工作量爆炸的三个具体来源
- **构图**：
  - kicker `META / 真相对刻`
  - 三个卡片栈水平排列（参考 Nate 7.40.32）：
    1. ⚙️ 调动效（红色 hot）
    2. 📝 字幕同步（红色）
    3. 🎬 转场切换（红色）
  - 每张卡 stagger 入场 0.15s
- **关键招**：参考 Nate 7.40.32 React/TypeScript 卡片栈

### Beat 3 PAIN VERDICT [13–19s] —— 会剪辑 vs 普通创作者
- **核心比喻**：左右双栏对比
- **构图**：
  - 左栏：✓ 绿框 "会剪辑的人 = 时间富裕"
  - 右栏：✗ 红框 "普通创作者 = 被剪辑吞噬"
  - 中央细分割线
  - 底部大字：`差距，就在这里` (red hot 在 "这里")
- **关键招**：参考 Nate 7.42.18（红 X）+ 7.42.24（绿 ✓）

### Beat 4 PUNCHLINE [19–25s] —— "都是 Claude 帮我做的" ⭐ HERO
- **现状最接近目标，微调即可**
- **构图保留**：face 缩 PiP（右上）+ 大字 chrome `都是 Claude 帮我做的` + 终端窗口 + 弧形箭头
- **微调**：
  - 终端内容用 ANSI 多色高亮（参考 Nate 7.41.39）
  - 橙球加 ripple 波纹效果
  - 箭头加描边发光

### Beat 5 PROMISE [25–31.5s] —— "教你做这种效果"
- **核心比喻**：章节切换卡，告诉观众接下来学什么
- **构图**（参考 Nate 7.40.36）：
  - 背景虚化 face 视频
  - 居中黑卡：数字 `02` + 标签 `教程承诺` + 大标题 `不需要写代码`
  - 卡片有蓝色描边 + halo
- **关键招**：用蓝色 halo + 章节卡居中

### Beat 6 CONCEPT [31.5–42.5s] —— 自然语言 → Claude → HyperFrames
- **核心比喻**：三步流程
- **构图**：
  - kicker `原理 / HOW IT WORKS`
  - 三个大圆角卡片水平排列：
    1. 💬 你说 (蓝色)
    2. 🤖 Claude Code (Claude 橙)
    3. ⚡ HyperFrames (紫色)
  - 卡片间箭头连接（橙色发光）
  - 每步 stagger 入场 + 当前激活步骤 halo
- **关键招**：保留现有 t=38 的卡片设计，但放大到 60% 画面宽度，加 hot 切换动效

### Beat 7 FLOW [42.5–56.5s] —— 完整 5 步执行计划
- **核心比喻**：可勾选的执行计划
- **构图**（参考 Nate 7.43.04）：
  - kicker `完整流程`
  - 5 步竖向列表带 checkbox：
    1. ☑ 写文案 → 已完成
    2. ☑ 喂给 Claude → 已完成
    3. ☑ Claude 生成 HTML → 已完成
    4. ☑ HyperFrames 渲染 → 已完成
    5. ☑ 导出成片 → 已完成
  - 每步逐个亮起带打勾动画 stagger 0.5s
  - 右下保留真人 PiP
- **关键招**：list-item 入场 + checkbox 打勾动画

### Beat 8 OUTRO [56.5–64.6s] —— XCYJ 落版
- **核心比喻**：品牌 hero hold 4-6s 呼吸
- **构图**（参考 hyperframes-sizzle logo-outro）：
  - face 在 60s 回归全屏（已有时序）
  - 居中：XCYJ logo + 副标题 `Claude Code × HyperFrames` + CTA `youtube.com/@XCYJ`
  - hero hold 4 秒
  - 收尾粒子爆发或 grid pixelate wipe
- **关键招**：呼吸 hold + Chrome 渐变 logo

---

## 六、硬约束（不可违反）

1. **GSAP querySelector 不能用 template literal** —— 用硬编码字符串。`querySelector('[data-composition-id="beat-1-hook"] .b1-grid')` 而非 `` ` `` `${root} .x` `` ` ``。
2. **复制 beat html 时全局换 beat id** —— CSS class 前缀 b1/b2/... 都要换；GSAP selector 也要换。
3. **每个 composition 必须 register 一个 timeline 到 `window.__timelines["<id>"]`**，且 key 等于 `data-composition-id`。
4. **timeline 必须 pad 到 ≥ data-duration**：末尾加 `tl.to({}, { duration: <data-duration> }, 0);`。
5. **不要直接动 `<video>` 的 width/height**——动 wrapper。
6. **每个 beat 内部不要再画自己的 grid**——index.html 顶层已经画了。
7. **face PiP 时序由 index.html 控制**——beat 不要碰 face-wrapper。
8. **每段一个 hot 词纪律**——视觉吸引力集中在最重要那个词。
9. **中英文混排时**：中文 Noto Sans SC，英文 Inter，等宽 JetBrains Mono。

---

## 七、改造时的工作流（每个 agent 必读）

1. 先 Read `index.html` 看 timing
2. 再 Read 自己负责的 `compositions/<n>-<name>.html` 看现状
3. 必要时 Read 1-2 张相关参考图（参考图路径在 `参考图/` 目录）
4. 重写 composition 文件（用 Write 整文件覆盖或 Edit 大段替换）
5. 完成后 TaskUpdate 标 completed

不要：
- ❌ 跑 hyperframes lint / preview / render —— 主 agent 统一跑
- ❌ 改 index.html —— 那是 Task #6 的范畴
- ❌ 加新 catalog 零件 —— 不需要 npx hyperframes add
- ❌ 改 CSS 变量名 —— 必须沿用 STYLE_BRIEF 的命名

---

完成此 brief 即视为 Task #1 完成。
