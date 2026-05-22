# PLAN-seg06-ch6-merge — 双河汇流 · 三组对位 · 殊途同归

> 本段适用 §7（SRT 真源）/ §8（段内时间从 0）/ §10（SEGMENT_DURATION + tl.set 撑满）/ §11（cutaway）/ §12.a-b（preview 验过 + commit）/ §13（资料台账）。seg05→seg06 默认 hard cut（§9），SEC E "ex-OpenAI 4 头像 hold" 直接对接 seg06 SEC A 高潮入场。

- **段编号**：seg06（章别名 ch6）
- **段长**：**206.6s**（**采用切法 B**，含 306-309 桥接 seg07 的过渡前奏，2026-05-22 用户决议）
- **全片位置**：11:14.166 → 14:40.766（字幕 231-309，79 条）
- **形态**：cutaway
- **真源**：`字幕/加入之后.srt` 第 231-309 条

---

## ✅ PLAN gate 决议（2026-05-22 用户确认）

### G1 段长 — 切法 B 采纳

seg06 = 字幕条 231-**309**，段长 **206.6s**。SEC E "殊途同归"扩展到含 306（"区别只是合作 / 分开"是同主题延续），307-309（"那么变化 / 三个预测"）单独成新 **SEC F** 作桥接。**§3 表段长 166s → 206.6s**（差 +40.6s，超出"约整误差"），PROJECT-STATE.md §3 表 v1 验过后回填校准。

### G2 真截图 — 用户手动下载，我给目标 URL 清单

| 文件 | URL | 用途 | 备注 |
|---|---|---|---|
| `assets/screenshots/anthropic-dreams.png` | https://platform.claude.com/docs/en/managed-agents/dreams | B 右：Claude "睡眠记忆" 官方文档页 | 拍页面顶部 hero 区（标题 "Dreams" + 简介段落），约 1280×800 |
| `assets/screenshots/claude-code-product.png` | https://www.claude.com/claude-code | C 右：Claude Code 官方产品页 | 拍首屏 hero 区（"Built for developers" 标题 + Claude Code 终端动图），约 1280×800 |
| `assets/screenshots/eureka-labs.png` | https://eurekalabs.ai/ | D 左：Eureka 实验室主页 | 拍主页全幅（页面较短，单屏 1280×900 应可覆盖核心内容） |
| `assets/screenshots/anthropic-academy.png` | https://anthropic.skilljar.com/ | D 右：Anthropic Academy 课程列表 | 拍课程网格列表区（看得见多个课程 tile），约 1280×900 |

### G3 双河汇流视觉 — 用 GSAP MorphSVGPlugin（已免费）

✅ 重要确认：**MorphSVGPlugin 2025-04 起完全免费**（Webflow 2024-10 收购 GreenSock，所有付费 plugin 解锁，包括 MorphSVG / DrawSVG / SplitText）。可以直接 `gsap.registerPlugin(MorphSVGPlugin)` 用 `morphSVG: "#targetPath"` 做 SVG path d 属性 morph。

**官方动画能力对位**：
- **MotionPathPlugin**（免费已久）= 元素沿 SVG path 运动
- **MorphSVGPlugin**（2025-04 起免费）= path d 属性 morph（一个 path 变形成另一个 path）—— **正是双河汇流融合所需**
- **DrawSVG**（2025-04 起免费）= SVG path strokeDashoffset 入场动画 —— 双河"被点亮"用这个
- **catalog 无现成"双河"零件**：`vfx-liquid-background` 是 WebGL 液体背景（重，不切题），`flowchart` 是决策树（不切题）。**走 SVG path + GSAP 3 plugin 自建**

**采用方案 X**（SVG curve 双河 + MorphSVG 融合），SEC A 用 DrawSVG 入场，SEC E 用 MorphSVG 双 path 融为一条。**实现风险大幅降低**（不需要 fallback），按 v1 直接做。

### G4 SRT 237 "睡眠记忆" 事实复核 — 双标 + 引官方 Dreams docs

✅ 双源验证（grok-search + Tavily 6 源一致）：**SRT "睡眠记忆" = Anthropic 官方 "Dreaming / Dreams" 功能**，2026-05-06 Code with Claude 大会发布（Karpathy 加入前 13 天，时效完美对位）。

- **官方功能定义**：异步后台任务，agent 在不工作时自整理 session transcripts → 合并去重 / 沉淀洞察 / 剪枝低价值条目，生成更整洁的 memory store。**类比人脑 REM 睡眠的记忆固化**。
- **早期测试**：企业 agent 任务完成率 ~6× 提升
- **状态**：Research Preview，部分开发者通过 Anthropic 表单申请访问

**视频处理**：
- B 右标题双标：`Claude Memory · 睡眠记忆 / Dreaming`（中文俗称 + 官方英文名并列）
- 右卡截图用 docs.claude.com Dreams 页（G2 已落实）
- spec-fill 三条措辞更精准：`· 后台自整理 session transcripts` `· 合并去重 / 沉淀洞察` `· memory store 越用越懂你`（呼应官方机制，不是泛泛"自动复盘"）
- **不在视频里讲"Dreaming"机制细节**（那是 seg07 / 另一支视频的事），seg06 只对位"两者都在做'让模型懂你'这件事"

---

## 0. 本段的核心叙事

seg06 是**全片高潮**：把 seg05 末尾的钩子（"Anthropic 核心团队 ex-OpenAI"）扩展成完整的"为什么两个团队会汇流到一起" → 用**三组具体的产品对位**做证据 → 收束到"普通人驾驭模型 = 共同终点 / 殊途同归"。

- **主比喻**：双河汇流。左河 = Karpathy 这两年所有的工作；右河 = Anthropic 这一年所有的产品。
- **三组对位**：
  - **第一组（B / WARM）**：LLM Wiki ↔ Claude Memory（睡眠记忆）→ "把工作方式写死在上下文里，让模型越来越懂你"
  - **第二组（C / WARM）**：vibe coding ↔ Claude Code → "自然语言描述需求，AI 写代码，人把方向"
  - **第三组（D / GLOW，三幕）**：Eureka 实验室 ↔ Anthropic Academy（17 门课）→ "教育层 / Karpathy 是布道者带触达和风格"
- **收束（E / HOT）**：Karpathy 这两年实验 = A 社这一年产品 = **同一件事 / 让普通人驾驭模型**。两条河"真正流到一起"，**殊途同归**。
- **下一段连接**：SEC E 末"殊途同归"hold 1s → hard cut 到 seg07（三个预测开场白 306-309）。**seg06 不做 outro fade**（§18），不抢 seg07 hot moment。

---

## §13 资料台账

### 官方文档 / skill

- `hyperframes`：visual identity → end-state layout → GSAP timeline；scene-content 用 flex / grid 不靠 absolute（§14）；Scene Transitions 硬规则；Layout Before Animation。
- `gsap`：position parameter `"<"` `"<0.5"` `">"`、`autoAlpha` 替代 opacity+visibility、stagger 入场、SVG path strokeDashoffset 动画（双河 SVG path 用）、`MotionPathPlugin` 沿路径运动（汇流点处节点沿河走，**仅 SEC E 用**）。
- `docs/HARD_CONSTRAINTS.md`：N9 selector / N15 字体硬编码 / N17 米色底 contrast / N18 段末禁 exit / N19 commit 节奏。

### 事实复核（写 v1 前必跑）

- **Claude Memory / 睡眠记忆** —— SRT 237 "Claude 前段时间推出了一个睡眠记忆的功能"。**事实台账缺**：是 Anthropic 官方公告的"sleep mode"？还是社区俗称？需要 grok-search 双源核对：① anthropic.com/news 找 memory / sleep memory 相关公告；② Karpathy 的 LLM Wiki Gist 里是否引用了 Claude Memory 做参照。**核对完后写入 `研究/06-merge-evidence.md`**。
- **Anthropic Academy 17 门课** —— SRT 283 "现在总共是有 17 门课的"，285 提到 "Claude 101 和 Claude Code 101"。需要：① grok-search 验证 anthropic.com/learn 或 academy 当前确实是 17 门课（数字可能漂移），② 截图 anthropic.com/learn 课程列表页。如真实数字非 17，**视频里口播数字交给用户决定是否后期改**（HF 这边按截图实际数字标）。
- **Eureka Labs 状态** —— 已在 STYLE_BRIEF "阶段 2.5 事实审查后修正" 确认"目前暂停"，措辞规则："Eureka Labs 目前是暂停状态，他自己说『等以后会重新做』"。**直接复用，无需再核对**。

### 真实素材清单（**双层视觉规则**）

> 2026-05-22 用户校准：之前 PLAN 偏堆截图。改用「卡顶 logo / 图标做品牌识别 + 卡中截图做实物证据」**双层视觉**。
> - 第 1 层（卡顶 80-120px 高）= 单一品牌识别符号（logo / 图标 / 头像），干净不杂乱
> - 第 2 层（卡中 280×180 或更大）= 真截图，证明"真实存在 / 实际状态"
> - 优先级：官方 logo > 品牌图标 > 推文/Gist 截图（仅无 logo 时用）

#### 对位卡素材矩阵（B/C/D 三组）

| 卡 | 卡顶品牌识别（第 1 层） | 标题 chip | 实物证据截图（第 2 层） |
|---|---|---|---|
| **B 左** LLM Wiki | `assets/portraits/karpathy.png` 圆 60px + chip mono `gist.github.com`（**无独立 logo**） | `LLM Wiki` | `assets/screenshots/llm-wiki-gist.png` 280×180 |
| **B 右** Claude Memory | `assets/logos/claude.svg` 120×60 | `Memory · 睡眠记忆 / Dreaming` | `assets/screenshots/anthropic-dreams.png` 280×180 |
| **C 左** vibe coding | `assets/portraits/karpathy.png` 圆 60px + chip mono `x.com` | `vibe coding` | `assets/tweets/vibe-coding-tweet.png` 280×180 |
| **C 右** Claude Code | **`assets/icons/claude-code-icon.png` 120×80**（用户提供像素拟人图标，强品牌识别） | `Claude Code` | `assets/screenshots/claude-code-product.png` 280×180（次要证据，缩略） |
| **D 左** Eureka 实验室 | `assets/logos/eureka.png` 100×100 | `Eureka 实验室` | `assets/screenshots/eureka-labs.png` 220×150 + chip `· 暂停中 · pause` |
| **D 右** Anthropic Academy | `assets/logos/anthropic.svg` 120×60 | `Anthropic 学院` | `assets/screenshots/anthropic-academy.png` **460×260** 大图（D-2 主峰升级尺寸） |

#### SEC A 双河上方品牌锚点

| 位置 | 品牌识别 | chip |
|---|---|---|
| 左河上方 | `assets/portraits/karpathy.png` 圆 80px | `Karpathy · 卡帕西` |
| 右河上方 | `assets/logos/anthropic.svg` 1.2× scale | `Anthropic · A 社` |

#### SEC E 收束 callback

| 位置 | 品牌识别 | chip |
|---|---|---|
| 左河 callback | `karpathy.png` 80px | `卡帕西 · 这两年` |
| 右河 callback | `anthropic.svg` 1.2× | `A 社 · 这一年` |

#### SEC D-1 Eureka 暂停的"推文承诺"证据

`assets/tweets/joining-tweet.png` 局部 crop（CSS clip-path 裁切推文中"对教育依然保持热情，打算重启"那一行）+ marker sweep Claude 橙划过该句 1.4s。

#### 全段 logo 索引

已就位 logo：`anthropic.svg` / `claude.svg` / `openai.svg`（仅 SEC C 提及 Codex 时灰 chip 中可用）/ `eureka.png` / `obsidian.svg`（**不用**——本段不出现）/ 学校 logo（**不用**）/ 投资方 logo（**不用**）。

#### **资产命名纪律**

写 composition 引用必须用规范文件名（用户已重命名）：
- ✅ `assets/screenshots/anthropic-dreams.png`
- ✅ `assets/screenshots/claude-code-product.png`
- ✅ `assets/screenshots/eureka-labs.png`
- ✅ `assets/screenshots/anthropic-academy.png`
- ✅ `assets/icons/claude-code-icon.png`（新建 `icons/` 子目录）

### 参考工程

- `compositions/seg05-merge.html`：双层 / 上下结构 + 4 cc-window 并行 + chrome 大字唯一位 + 米色暖底 + 深米色暖底配色——**SEC A 双河 layout 框架**直接借鉴（左右双区 = 双河上下半）。
- `compositions/seg03-momentum.html`：Ramp 真截图卡 + Anthropic JV 真截图卡 + partner-card——**三组对位的"真截图卡 + 标签 + 文字描述"组合**直接复用此 layout。
- `compositions/seg02-gainian.html`：vibe coding tweet 真截图 + LLM Wiki Gist 真截图 + B 站搜索真截图 = 5 SEC 节奏——**三组对位每组左右两张截图的并排呈现**直接复用此节奏。
- `compositions/seg04-wrapper.html`：太阳系（自转 + 同心轨道）——**不复用**。seg06 是叙事汇流，不是结构剖面。
- `videos/2026-05-04-claude-19-tips-hf/`：长教程多 SEC 节奏管理——**仅看 SEC 切换 hard cut 节奏，不复用单个 composition**。

### 官方零件清单（templates/components/ 已抽）

| 零件 | 用途 | 用在哪 |
|---|---|---|
| `cc-window` | Claude Code 终端 UI | C 右辅助呈现 Claude Code（次要，主要还是产品截图） |
| `xcyj-tokens` | DNA 颜色 / 字体 token | 全段 |
| `text-effects.char-scramble` | Matrix 字符解码 | B / C / D 各组对位卡入场时（"产品名 / 概念名"用 char-scramble 入场） |
| `text-effects.marker-sweep` | 高亮 marker | SEC A "已经汇流"四字 + B/C/D 关键概念名 + SEC E "殊途同归" 终极高亮 |
| `spec-fill` | 逐行填充 | B/C/D 三组对位卡片内的"功能描述"逐行入场（每组 2-3 条） |

不用：`orbit-dots`（不切题）/ `pulse-bars`（不切题）/ `shake-error`（无错误瞬间）/ `text-effects.token-chunks`（seg04 已用，避免重复）。

### 不用的 catalog

- `flowchart` / `data-chart`：seg06 是叙事汇流，不是流程图 / 数据图
- `whip-pan` / `flash-through-white` / `cinematic-zoom`：seg05→seg06 / seg06→seg07 均默认 hard cut（§9）
- `macos-notification` / `yt-lower-third`：本段无社交 UI 触发（D 末"YT 主页"如走轻路径直接 HTML 模拟数字 chip，不用 yt-lower-third）

---

## 1. 字幕条对应 + SEC 切分 + 节奏标签

> SRT 时间码已精确到毫秒。

| SEC | 字幕条 | 段内时间 | 段长 | 节奏 | 主题 |
|---|---|---|---:|---|---|
| A | 231-235 | 0.0-14.3s | 14.3 | **COOL → WARM** | 建立双河比喻：两条已汇流的河 |
| B | 236-251 | 14.3-59.1s | 44.8 | **WARM** | 第一组：LLM Wiki ↔ Claude Memory · Dreaming |
| C | 252-271 | 59.1-101.7s | 42.6 | **WARM** | 第二组：vibe coding ↔ Claude Code |
| D | 272-298 | 101.7-176.7s | 75.0 | **GLOW（三幕）** | 第三组：Eureka ↔ Anthropic Academy + 触达/布道者 |
| E | 299-306 | 176.7-199.0s | 22.3 | **HOT 收束** | 殊途同归 + "区别只是合作 / 分开"延续 |
| F | 307-309 | 199.0-206.6s | 7.6 | **CLIFFHANGER** | 桥接 seg07：会有哪些变化？三个预测纯主观 |

合计：14.3 + 44.8 + 42.6 + 75.0 + 22.3 + 7.6 = **206.6s** ✓

SEC 之间 hard cut（§9）。SEC D 段长 75s **内部分三幕**（D-1 Eureka 暂停 ~16s + D-2 Anthropic Academy 17 门课 ~33s + D-3 触达和风格"布道者"小结 ~26s）以避免静态过长。SEC E 含 306 是 "殊途同归" 的同主题延续（"哪怕分开做，方向也一样"），不另起 SEC。SEC F 是单独的 cliffhanger 段，预告 seg07。

**SEC F 末禁 exit fade**（§18）：seg06 不是 outro，三个预测占位卡 hold 后 hard cut 到 seg07。

---

## 2. metaphor 表（语义扩展，禁字幕直译）

| 口播 | SEC | 视觉语义扩展 |
|---|---|---|
| "卡帕西这两年做的事 / 和 A 社近一年做的事并排平行去放" | A | 屏幕从 seg05 末"4 ex-OpenAI 头像 + Anthropic logo hold"hard cut 入场。**屏幕中央先出现一束水平 Claude 橙光**（左→右扫过 1.2s），光走完后**两条河的轮廓被点亮**：左河 = 左半屏暖米色 SVG curve（流向右），右河 = 右半屏暖米色 SVG curve（流向左）。两条河在屏幕中央上方"汇流点"汇成一条。**比喻立刻成立**，不靠字幕翻译 |
| "你会发现 他们是两条已经汇流的河" | A | "**已经汇流**"四字浮在两河汇流点上方（chrome 小字，**非大字**——大字留给 SEC E）。**marker sweep** Claude 橙划过这四字，1.4s |
| "左边这一条河是卡帕西 / 他们是同一个方向的" | A | 左河上方浮出 Karpathy 头像圆形 mask（karpathy.png）+ chip `Karpathy · 卡帕西`；右河上方浮出 Anthropic logo（缩 1.2× scale）+ chip `Anthropic · A 社`。两个 chip 同时由 `→ ←` 反向小箭头闪现指向汇流点（0.6s）—— 视觉立"同方向"概念 |
| "首先第一个就是大模型 Wiki 和 Claude 记忆" | B 入 | 全屏 hard cut layout 切换：双河 hold 但缩到屏幕底 1/4 当背景脉络；屏幕**上 3/4 切到对位卡 layout**。左右两卡框架入场（左米色暖底 + 1px 灰边框 / 右米色暖底 + 1px 灰边框）。**卡顶第 1 层品牌识别入场**：左卡顶 `karpathy.png` 圆 60px + mono chip `gist.github.com`；右卡顶 `claude.svg` 120×60（autoAlpha 0→1 + y: 16→0 in 0.6s）。**卡顶 chip 标题 stagger** 0.3s 后：左卡 `LLM Wiki`（Claude 橙渐变 token-stagger 0.06s），右卡 `Memory · 睡眠记忆 / Dreaming`（同样）。中间对位 chip `第一组对位 · 01 / 03`（灰色，浅米色边框） |
| "Claude 前段时间推出了一个睡眠记忆的功能 / 我不知道大家有没有听过" | B 中-1 | 右卡内部填充（第 2 层实物证据）：贴 **`anthropic-dreams.png` 280×180px** 真截图入场（autoAlpha 0→1 + scale 0.95→1 in 0.8s spring back.out 1.4）。**截图本身就证明 Dreams 是官方功能**，不再需要"sleep memory"措辞证据 |
| "就是它会在你没有工作的时候 / 自动的去复盘你的一些上下文 / 自动的去帮你把一些工作经验 你的一些个性 / 自动沉淀记忆 然后到后面你就会发现 它越来越好用" | B 中-2 | 右卡截图下方 spec-fill 三条精校到官方机制：`· 后台自整理 session transcripts` `· 合并去重 / 沉淀洞察` `· memory store 越用越懂你`（每条 0.6s 间隔）。最后浮出一个微型"记忆增长曲线"——SVG 折线从 0→ 上扬到顶角，1.2s，**Claude 橙渐变**。视觉上 = "越用越好用" |
| "然后卡帕西提出的大模型 Wiki / 其实也是一个同样的概念" | B 中-3 | 左卡 spec-fill 三条入场：`· AI 整理笔记` `· SOP / 文档结构` `· 生长的知识库`（与右卡同节奏）。然后左卡顶贴 **`llm-wiki-gist.png` 280×180px** 截图（**只保留 Gist 顶部 hero 区域 crop**） |
| "也是让 AI 帮你把笔记文档 SOP / 整理成一个会生长的知识库" | B 末-1 | 左卡截图下方浮出一个微型"文件夹生长"——3 个文件夹 SVG 图标从小到大 stagger 入场，1.0s。**米色暖深色 #5A4F46（不是 Claude 橙）** —— 区分左右两边的温度差（左卡冷一档） |
| "他们都是在做同一件事情 / 就是把你的工作方式写死在上下文里面 / 让模型越来越懂你这个人" | B 末-2 | **关键 SEC B hot moment**：左卡 + 右卡之间的对位 chip `第一组对位 · 01 / 03` 放大 1.4×。左右两卡向中间靠近 80px（CSS transform），中间出现 **`=` 等号**（chrome 小字，Claude 橙）。下方 chrome 小字 `把你的工作方式 · 写死在上下文`（**比 SEC E 终极大字小一档**，本段 4 个 hot moment 之一） |
| "然后第二个就是 vibe coding / 和 Claude Code" | C 入 | 全屏 hard cut：B 的卡内容（截图 + spec-fill + 文件夹/曲线/`=` 等号/chrome 标语）全部 autoAlpha → 0（1.4s）。**对位卡框架保留**，只清空内容。**卡顶第 1 层品牌识别**：左卡顶 `karpathy.png` 圆 60px + mono chip `x.com`；右卡顶 **`claude-code-icon.png` 120×80**（用户提供像素拟人图标——强品牌识别，比产品页截图干净）。卡顶 chip 标题 stagger 后：左卡 `vibe coding`（char-scramble），右卡 `Claude Code`（char-scramble）。中间对位 chip `第二组对位 · 02 / 03` |
| "这一个其实是不能够混在一起的 / 但他们是一个方向" | C 入末 | 左右两卡顶部 stagger 出现一组反向小箭头 `→ ←`（**不靠近，距离保持 800px**——视觉表达"不能混"但同方向） |
| "比如说 vibe coding 是什么 / 就是用自然语言描述 你要去做什么 / AI 去写代码 然后你坐在那边看改方向 / 就是你来把管对不对" | C 中-1 | 左卡内部填充（第 2 层实物证据 + 描述）：贴 **`vibe-coding-tweet.png` 280×180px** Karpathy 推文 crop。下方 spec-fill 三条 `· 自然语言描述需求` `· AI 写代码` `· 人坐在旁边把方向` |
| "然后 Claude Code 就是 vibe coding / 最成熟的那个实现" | C 中-2 | 右卡内部填充：spec-fill 三条 `· vibe coding 最成熟实现` `· 自然语言 → 代码` `· 终端原生 UI`。下方贴 **`claude-code-product.png` 280×180px** 产品页缩略（**作为"现在每天用"的次要证据**——卡顶图标已经是主品牌识别，这张是辅助） |
| "我们知道 Codex 现在来说 它是很好用的 / 但是最开始的这一个东西 / 是不是就是由 Claude Code 来去实现的 对吧" | C 中-3 | 右卡 hold 状态下，下方浮出**Codex 灰 chip**（`openai.svg` 灰色 16px + 文字 `Codex 也很好用` 灰小字，autoAlpha 0→0.6 in 0.6s）。然后 chip 淡出（autoAlpha 0，0.8s）—— **用 OpenAI logo 表达"承认 Codex 但保持焦点在 Claude Code"** |
| "包括最近你使用过 Claude Code 的话 / 就知道这就是我们现在 / 最日常的一个工作流 / 就是你用自然语言去说话 / 然后他帮你去实现而已" | C 末 | **SEC C hot moment**：左右两卡之间出现 `=` 等号（chrome 小字，Claude 橙），底部 chrome 小字 `自然语言 → 代码 · 你在改方向`（本段 4 hot moment 之二）。**右卡 claude-code-product 截图旁浮出迷你 cc-window**（300×80px，复用 `templates/components/cc-window`，**只显示一行**）：`> 帮我改一下这个 bug ...`（char-scramble 0.6s 解码）+ 光标闪烁。**这是 cc-window 零件在本段唯一登场** —— 凸显"日常工作流"现场感 |
| "然后第三个就是它的 Eureka 实验室 / 和 A 社的官方课程" | D 入 | 全屏 hard cut：C 卡内容淡出（框架保留）。**左右卡边框升级为 1px Claude 橙**（color tween 0.8s）—— **强调第三组对位的份量**。**卡顶第 1 层品牌识别**：左卡顶 `eureka.png` 100×100；右卡顶 `anthropic.svg` 120×60。卡顶 chip 标题 char-scramble 入场：左卡 `Eureka 实验室`（Claude 橙），右卡 `Anthropic 学院`（Claude 橙）。中间对位 chip `第三组对位 · 03 / 03`（**Claude 橙背景 + 白字**，比 B/C 灰色 chip 强） |
| "这一个其实我是觉得特别有意思的 / 就是卡帕西发的那一条推文里面 / 是专门写了一句话 / 就是它对教育依然保持热情 / 打算在合适的时机重启 / 也就是说它的实验室只是暂停了" | D-1（Eureka 暂停，101.7-118s · 16.3s） | **左卡内部第 2 层证据**：贴 **`eureka-labs.png` 220×150px**（用户提供主页截图——"Introducing Eureka Labs · July 16, 2024"）作为"项目存在但停滞"的视觉证据。下方贴 **`joining-tweet.png` 局部 crop**（CSS clip-path 裁切推文中"对教育依然保持热情，打算重启"那一句，280×60px 横条），**marker sweep Claude 橙划过这句话 1.4s** —— Karpathy 本人承诺。最底部 chip `· 暂停中 · pause`（灰色暖底，1px 灰边框，**不写"关闭"**遵守 STYLE_BRIEF） |
| "然后这里要先说清楚一件事 / 就是 A 社的非开发教育内容 其实是不少的 / 我们可以从 Anthropic 学院里面 / 看到现在总共是有 17 门课的" | D-2（Anthropic Academy，118-151s · 33s · 主峰） | **右卡内部第 2 层证据 · D 段主峰**：贴 **`anthropic-academy.png` 460×260px 大图**（用户提供 — 看得见 "Anthropic courses" 标题 + Claude 101 / Claude Code 101 / Cowork / Code in Action 等课程 tile），autoAlpha 0→1 + scale 0.95→1 in 1.2s spring back.out 1.4。**这是 D 段唯一的大尺寸截图**，凸显"17 门课"的份量。下方 chip `17 门课程`（Claude 橙背景 + 白字 28px，醒目）+ marker sweep 0.8s。**注**：用户截图实际看到 4 门课 tile 顶部+滚动可能更多——口播说 17 门按 SRT 字面，HF chip 标 `17 门课程`，视觉以截图实际为准（**§7 不擅自改 SRT 一致性**） |
| "里面是有一完整的一条 AI 学习的路径 / 比如说 Claude 101 和 Claude Code 101 之类的 / 它是涵盖了从非技术岗到技术岗的 / 所有的课程内容" | D-2 中 | 课程 chip 阵列入场完毕，stagger hold。**右卡下方再浮出一条横线连接**：左端 `非技术岗` → 右端 `技术岗`（米色暖深色，1.2s 入场） |
| "所以卡帕西也不是说来填补这一块空缺的 / A 社它其实自己已经在做了" | D-2 末 | 左卡（Eureka 暂停）上方浮出一个**反向小箭头**指向右卡课程 chip 阵列，提示"不是填补，A 社自己在做"。**`不是填补 / A 社自己在做` chip** 浮在两卡之间（灰色暖底） |
| "那么它带来的是什么呢 是触达和风格" | D-3 入（151-167s · 16s · 触达/风格收尾） | 左右两卡缩小到屏幕下 1/3（autoAlpha 0.6 / scale 0.7），**屏幕上 2/3 浮出两个新 chip**：① `触达 · reach` ② `风格 · style`（chrome 小字，Claude 橙）。两个 chip 居中横排，**这两个词是 D-3 的核心**，单独立出 |
| "这里有个点就是很多人其实都不知道 / A 社官方是出了课程的 / 然后虽然它的课程内容讲的挺好的 / 但是说实话真的没有多少人去认真的去学习过" | D-3 中-1 | "触达"chip 下方浮出**一个数字字幕卡**：`A 社 17 门课 · 不知道的人很多`（米色暖底，chip 内 spec-fill 一行小字） |
| "但是卡帕西的视频 / 它的一条油管视频就有几百万的播放" | D-3 中-2 | "风格"chip 下方浮出**一个数字 chip**：`Karpathy YouTube · 几百万播放/条`（Claude 橙背景 + 白字大数字）。如 G2 决议抓 YT 主页，**右侧贴 YT 主页截图 200×120px**；如走轻路径，仅 chip。|
| "它的一条推特就是带领了整个 AI 圈的一个风向 / 不能说风向，就是布道者" | D-3 中-3 | "风格"chip 再下浮出 **`布道者 · evangelist` chip**（chrome 小字 + Claude 橙渐变下划线）。**这是 SEC D hot moment**——`布道者` 三字用 marker sweep + token-stagger 入场 |
| "就是那种意思 / 所以我的感受是这样子的" | D-3 末 | 触达 / 风格 / 布道者 三个 chip hold + 左右两卡（Eureka / Academy）hold。**全屏 hold 1.0s**——D 段终止前的呼吸 |
| "就是卡帕西这两年所有的实验和教学 / 其实都是在做一件事情" | E 入（176.7-181s · 4.3s）| 全屏 hard cut：D 段所有 chip + 对位卡同步淡出（autoAlpha 0，0.6s）。屏幕**回到 SEC A 的双河 layout**——左右两条 SVG curve 河重新被点亮（**强势 callback**）。左河上方再次浮出 Karpathy 头像 + chip `卡帕西 · 这两年` |
| "让普通人能够驾驭模型" | E 中-1（181-184s · 3s） | 屏幕中央**慢推 chrome 大字**：`让普通人 · 驾驭模型`（**米色底暖版 8-stop chrome 大字 · 本段唯一大字** —— 这是终极 hot moment，整段 206.6s 蓄势在此爆发）。stagger 0.08s 字符级入场，1.5s 完成 |
| "A 社这一年所有的产品也在做这一件事情" | E 中-2（184-187s · 3s）| chrome 大字 hold。右河上方浮出 Anthropic logo + chip `A 社 · 这一年`。**两河之间的汇流点 Claude 橙光柱从汇流点向上射出**（1.2s）—— 视觉上"两条河流到同一目的地" |
| "所以我觉得他们两个的终点是殊途同归的" | E 中-3（187-195.7s · 8.7s） | chrome 大字`让普通人 · 驾驭模型` 上方再叠一行 **chrome 中字**：`殊途同归 · same destination`（米色暖深，**Claude 橙描边**）。两河 SVG curve **真正流到一起**——MorphSVGPlugin tween 左右两条 path 的 `d` 属性向汇流点 morph，4s 内融为一条 thick stroke 河 |
| "区别只是他们是在一起做还是分开做而已" | E 末（195.7-199.0s · 3.3s）| 融为一条的河 hold。**屏幕底部**浮出 chip 注脚 `区别只是 · 合作 vs 分开`（米色暖底 16px 小字，灰色低亮，不抢上方 chrome 大字焦点）—— 强调"哪怕分开做，方向也一样"。chrome 大字 + 中字 + 注脚 hold 1.5s 进 SEC F hard cut |
| "那么最终 卡帕西加入 A 社之后" | F 入（199.0-201.5s · 2.5s）| **全屏 hard cut** 到米色暖底（深一档 #F0E5D2，与 SEC E 米色 #F7F2EA 区分），双河 + chrome 大字 + 中字 + 注脚全部消失。中央浮出 chip `卡帕西 加入 A 社 ↓`（暖深米色，spec-fill 入场） |
| "会有哪些变化呢" | F 中（201.5-203.0s · 1.5s）| chip 下方浮出 **chrome 小字 36px**（**非大字**——本段唯一大字给 SEC E）：`会有哪些变化呢？`（米色暖底暖版渐变，token-stagger 0.06s 入场）|
| "下面是我的三个预测 完全纯主观" | F 末（203.0-206.6s · 3.6s）| chrome 小字下方浮出 **3 个空白卡片占位**横排（每卡 280×180px，米色暖底 1px 灰边框 + 卡片号 `01 / 02 / 03` 大字 chrome），stagger 0.4s 入场。3 卡上方浮出 chip `三个预测 · 纯主观`（Claude 橙背景 + 白字 18px）。**hold 1.5s 进 seg07 hard cut**（**禁 exit fade · §18**） |

---

## 3. 视觉骨架（每 SEC 一段，重点说节奏）

### SEC A · 双河立比喻（0.0-14.3s · COOL → WARM）

**目的**：在 14 秒内把"双河汇流"主比喻立死。**继承 seg05 末暗场**——seg05 SEC E 结束时是 4 ex-OpenAI 头像 + Anthropic logo 在深灰底（#1F1B17）hold。seg06 SEC A 不需要重新打底，**直接从深灰底过渡到双河 layout**。

**节奏曲线**：暗起（继承 seg05 末）→ 一束 Claude 橙光横扫 → 双河被点亮 → Karpathy + Anthropic chip 入场 → "已经汇流"marker sweep。

**实现**：
- 0-1.2s（暗场承接）：屏幕继承 seg05 末深灰底 #1F1B17（hard cut from seg05），中央保留 Anthropic logo（autoAlpha 1，static）+ 4 头像（autoAlpha 0.6 hold）
- 1.2-2.4s（橙光扫过）：一束水平 Claude 橙光（CSS linear-gradient + background-position animate from -100% to 100%）从屏幕左侧扫到右侧，**经过 logo 时**触发 logo `box-shadow 0→40px Claude 橙`（0.4s）
- 2.4-4s（双河点亮）：屏幕底色从深灰 morph 到米色暖底 #F7F2EA（**colors transition 1.6s 用 backgroundColor tween**）。同时**两条 SVG path 河道入场**：左河 path 是从屏幕左下角→中央上方汇流点的 cubic Bezier curve；右河 path 是从屏幕右下角→中央上方汇流点的镜像 cubic Bezier curve。strokeDashoffset 从 path length → 0（1.6s），**stroke 用 Claude 橙渐变**（fill 米色暖深 #5A4F46 透明度 0.6）
- 4-5.5s（4 头像淡出）：seg05 末的 4 ex-OpenAI 头像 + chip 全部 autoAlpha → 0（1.5s），**为 seg06 主比喻让位**
- 5.5-7.5s（Karpathy + Anthropic 上河 chip）：左河上方浮出 karpathy.png 圆形 mask 头像（直径 80px）+ chip `Karpathy · 卡帕西`（chrome 小字）；右河上方浮出 Anthropic logo（scale 1.2×）+ chip `Anthropic · A 社`。**stagger 0.4s 入场**
- 7.5-10s（"同方向"小箭头）：两个 chip 中间出现一组反向小箭头 `→ ←`（每个 0.4s + 0.2s 间隔），指向汇流点。**hold 2.5s**
- 10-12.5s（"已经汇流"chrome 小字 + marker sweep）：汇流点上方浮出文字 `已经汇流`（chrome 小字 32px，米色暖底暖版渐变）→ marker sweep Claude 橙划过四字（1.4s）
- 12.5-14.3s（hold 进 SEC B）：所有元素 hold，**禁淡出**（hard cut 到 SEC B）

**关键纪律**：
- SEC A 不出现 chrome 大字（本段 chrome 大字只给 SEC E `让普通人 · 驾驭模型` 一次）
- 双河 SVG path 是**本段视觉脊梁**，B / C / D / E 各 SEC 都基于此 layout 之上添加对位卡；**双河 path 在 B-D 段缩到屏幕底 1/4 当背景脉络**，E 段重新放大
- seg05 末 "Anthropic logo + 4 头像" hold → seg06 SEC A 0-4s 是承接性过渡，**不是 seg05 的延长**：在 4s 内必须完成视觉主比喻立起

---

### SEC B · 第一组对位 / LLM Wiki ↔ Claude Memory · Dreaming（14.3-59.1s · WARM · 44.8s）

**目的**：把"把工作方式写死在上下文 / 让模型懂你"这条第一对位钉死。**双层视觉规则**：卡顶 logo / 头像 = 品牌识别层；卡中截图 + spec-fill = 实物证据 + 描述层。

**节奏曲线**：layout 切换 → 卡顶 logo/头像入场 → 标题 chip → 卡中截图 + spec-fill → `=` 等号 hot moment。

**实现**：
- 14.3-16s（layout 切换）：SEC A 的"`Karpathy · Anthropic` chip + 反向箭头"淡出（autoAlpha 0，1s）；双河 SVG path 缩小到屏幕底 1/4（scale 0.4 + translateY 280px in 1.2s，origin 中央上方汇流点）。**屏幕上 3/4 空出**留对位卡 layout
- 16-19s（对位卡框架入场）：左右两卡 layout 入场（左卡居屏幕左 1/3，右卡居屏幕右 1/3，中间 200px gap）。两卡都是米色暖底 + 1px 灰边框。stagger 0.3s 左→右入场
- 19-21s（**第 1 层 · 卡顶品牌识别**）：
  - 左卡顶居中：**`karpathy.png` 圆 60px**（autoAlpha 0→1 + scale 0.85→1 in 0.6s）+ 头像右侧 mono chip `gist.github.com`（JetBrains Mono 14px 灰）
  - 右卡顶居中：**`claude.svg` 120×60**（autoAlpha 0→1 + scale 0.85→1 in 0.6s）
- 21-23s（**chip 标题层**）：左卡 `LLM Wiki`（token-stagger 0.06s，米色暖底 Claude 橙渐变，36px），右卡 `Memory · 睡眠记忆 / Dreaming`（同样）。中间对位 chip `第一组对位 · 01 / 03`（灰色暖底，浅米色边框）
- 23-30s（**第 2 层 · 右卡 Dreams 实物证据**）：
  - 右卡贴 `anthropic-dreams.png` 280×180px 截图（autoAlpha 0→1 + scale 0.95→1 + y: 16→0 in 0.8s spring back.out 1.4）—— **官方 docs 页本身就是"功能真实存在"证据**
  - 截图下方 spec-fill 三条精校到官方机制（每条 0.6s 间隔）：`· 后台自整理 session transcripts` `· 合并去重 / 沉淀洞察` `· memory store 越用越懂你`
  - 最后浮出微型"记忆增长曲线"——SVG polyline 5 个数据点 Claude 橙渐变 stroke，strokeDashoffset 1.2s
- 30-37s（**第 2 层 · 左卡 LLM Wiki 实物证据**）：
  - 左卡贴 `llm-wiki-gist.png` 280×180px crop（只保留 Gist 顶部 hero 区域）
  - 截图下方 spec-fill 三条：`· AI 整理笔记` `· SOP / 文档结构` `· 生长的知识库`
- 37-42s（左卡底部文件夹生长）：左卡底部 stagger 浮出 3 个文件夹 SVG icon（小→中→大，米色暖深色 #5A4F46，stagger 0.4s）—— **温度差**：左冷右暖
- 42-50s（hold 两卡静审）：双层（logo+chip+截图+spec-fill+小动效）全部 hold
- 50-55s（**hot moment**：对位 chip 放大 + 两卡靠近 + `=` 等号）：
  - 对位 chip `第一组对位 · 01 / 03` 放大 scale 1.4×（1s ease）+ Claude 橙背景填充
  - 左卡 translateX +80px，右卡 translateX -80px（同时 1.2s 向中间靠拢）
  - 两卡中间出现 chrome 小字 `=` 等号（Claude 橙渐变，scale 0→1 in 0.6s）
- 55-57.5s（chrome 小字标语）：屏幕底部 chrome 小字 `把你的工作方式 · 写死在上下文`（米色底暖版渐变 chrome 32px）—— 本段 4 hot moment 之一
- 57.5-59.1s（hold 进 SEC C）：全部 hold，**禁淡出**

**关键纪律**：
- SEC B 不出现 chrome 大字（本段 chrome 大字只给 SEC E 一次）
- **双层视觉**：第 1 层 logo / 头像在卡顶，第 2 层截图在卡中——**不要把截图放到卡顶**（截图当品牌识别 = 之前 PLAN 错的姿势）
- LLM Wiki 无独立 logo，所以用 Karpathy 头像 + GitHub mono chip 当品牌识别——**这是无 logo 时的合规做法**
- 左卡 / 右卡的温度差用米色暖深 vs Claude 橙体现，**不要用蓝色 / 紫色**（DNA 红线：hot 色每 beat 只一个）
- 对位 chip 放大 + 两卡靠近 + `=` 等号是本 SEC 视觉锚

---

### SEC C · 第二组对位 / vibe coding ↔ Claude Code（59.1-101.7s · WARM · 42.6s）

**目的**：把"自然语言描述需求 / AI 写码 / 人把方向"第二组对位钉死。**复用 SEC B 对位卡 layout 框架**，但**卡顶第 1 层换内容**：左卡 = Karpathy 头像 + X chip，右卡 = **claude-code-icon.png 像素拟人图标**。

**节奏曲线**：layout 复用切换 → 卡顶 logo/图标入场 → 标题 char-scramble → 反向箭头 → 卡中 spec-fill + 截图 → Codex chip 一闪而过 → cc-window + `=` 等号 hot moment。

**实现**：
- 59.1-60.5s（layout 复用切换）：SEC B 卡内容（logo / 头像 + chip 标题 + 截图 + spec-fill + 文件夹/曲线 + `=` 等号 + chrome 标语）**全部 autoAlpha → 0**（1.4s 整体淡出）。**框架（左卡 + 右卡 box）保留**
- 60.5-62.5s（**第 1 层 · 卡顶品牌识别**）：
  - 左卡顶居中：`karpathy.png` 圆 60px（autoAlpha 0→1 + scale 0.85→1 in 0.6s）+ 头像右侧 mono chip `x.com`（JetBrains Mono 14px 灰）
  - 右卡顶居中：**`claude-code-icon.png` 120×80**（autoAlpha 0→1 + scale 0.85→1 in 0.6s）—— 像素拟人图标比产品页 hero 截图更聚焦更品牌
- 62.5-64s（chip 标题层）：左卡标题 `vibe coding` **char-scramble 入场**（text-effects.char-scramble 0.6s 解码，Claude 橙渐变 36px）；右卡 `Claude Code` 同样。对位 chip 更新 `第二组对位 · 02 / 03`
- 64-66.5s（反向小箭头 "不能混但同方向"）：左右两卡顶部各自浮出一个反向小箭头（左卡顶部 `→`，右卡顶部 `←`），**距离保持远**（800px）
- 66.5-73s（**第 2 层 · 左卡 vibe coding 证据**）：
  - 左卡贴 `vibe-coding-tweet.png` 280×180px Karpathy 推文 crop（spring 入场）
  - 截图下方 spec-fill 三条：`· 自然语言描述需求` `· AI 写代码` `· 人坐在旁边把方向`
- 73-80s（**第 2 层 · 右卡 Claude Code 证据**）：
  - 右卡 spec-fill 三条入场：`· vibe coding 最成熟实现` `· 自然语言 → 代码` `· 终端原生 UI`
  - 然后下方贴 `claude-code-product.png` 280×180px 产品页缩略（spring 入场，作为"现在每天用"次要证据）
- 80-83s（Codex chip 一闪而过）：右卡 claude-code-product 截图旁浮出 Codex 灰 chip（`openai.svg` 灰色 16px + 文字 `Codex 也很好用` 灰小字，autoAlpha 0→0.6 in 0.6s + hold 1.5s → autoAlpha 0 in 0.6s）—— **OpenAI logo 体现"承认竞争对手但保持焦点"**
- 83-88s（cc-window 现场感）：右卡下半 claude-code-product 截图旁浮出**迷你 cc-window**（300×80px，复用 `templates/components/cc-window`，**只显示一行**）：`> 帮我改一下这个 bug ...`（char-scramble 0.6s 解码）+ 光标闪烁。**cc-window 零件本段唯一登场**
- 88-95s（hold 两卡静审）：所有内容 hold
- 95-99s（**hot moment**：对位 chip 放大 + 两卡靠近 + `=` 等号）：
  - 对位 chip `第二组对位 · 02 / 03` 放大 + 填色（同 SEC B 节奏，1s）
  - 左卡 / 右卡 translateX 向中间靠拢（1.2s）
  - 中间 chrome 小字 `=` 等号 入场
  - 屏幕底部 chrome 小字 `自然语言 → 代码 · 你在改方向`（米色底暖版渐变 chrome 32px）—— 本段 4 hot moment 之二
- 99-101.7s（hold 进 SEC D）：全部 hold

**关键纪律**：
- **claude-code-icon.png 是本 SEC C 视觉核心** —— 像素拟人图标是 Claude Code 品牌的强符号，比产品页 hero 截图更聚焦。**卡顶用图标，卡中才贴产品页截图作为"用法佐证"**
- char-scramble 字符级解码是本 SEC 的入场签名（与 B 段 token-stagger 区分入场差异感）
- cc-window 只用一次（右卡一行命令），不展开整个终端 UI
- Codex chip 用 `openai.svg` 表达"承认 Codex 但保持焦点"——视觉上比纯文字 chip 更有公信力

---

### SEC D · 第三组对位 + 触达/风格（101.7-176.7s · GLOW 三幕 · 75.0s）

**目的**：把"Eureka 暂停 / Anthropic Academy 17 门课 / Karpathy 是布道者带触达和风格"第三组对位钉死。**这是 SEC D 三幕子结构** —— D 段是 seg06 最长 SEC，节奏密度要够。

**节奏曲线**：D-1 Eureka 暂停 → D-2 Academy 主峰 → D-3 触达/风格收尾。每幕之间不 hard cut（D 段内部是一个连续叙事），用整体淡入淡出节奏切。

#### D-1 · Eureka 暂停（101.7-118s · 16.3s）

- 101.7-103s（layout 切换 + 升级 Claude 橙边框）：SEC C 卡内容淡出（同 SEC B→C），框架保留。**左右两卡边框升级为 1px Claude 橙**（color tween 0.8s）——**强调第三组对位的份量**。中间对位 chip `第三组对位 · 03 / 03`（Claude 橙背景 + 白字，比 B/C 灰色 chip 强）
- 103-105s（**第 1 层 · 卡顶品牌识别**）：
  - 左卡顶：**`eureka.png` 100×100**（autoAlpha 0→1 + scale 0.85→1 in 0.6s）—— Eureka Labs 已有官方 logo
  - 右卡顶：**`anthropic.svg` 120×60**（同节奏）
- 105-107s（chip 标题）：左卡标题 char-scramble `Eureka 实验室`（Claude 橙渐变 36px），右卡 `Anthropic 学院`（同样）
- 107-112s（**第 2 层 · 左卡 Eureka 实物证据**）：
  - 左卡中位贴 **`eureka-labs.png` 220×150px**（用户提供主页截图——"Introducing Eureka Labs · July 16, 2024"+ LLM101n 介绍），spring 入场（1.2s）。**截图本身的"2024-07-16"日期+无新内容暗示项目停滞**
  - 截图下方贴 **`joining-tweet.png` 局部 crop**（CSS clip-path 裁切推文中"对教育依然保持热情，打算重启"那一行，280×60px 横条），marker sweep Claude 橙划过该句 1.4s —— Karpathy 本人承诺
- 112-115s（左卡底 chip + 框架）：最底部 chip `· 暂停中 · pause`（灰色暖底，1px 灰边框，**不写"关闭"**严守 STYLE_BRIEF）
- 115-118s（hold 等右卡入场）：左卡 hold，**右卡保持空白**（等 D-2 主峰填充）

#### D-2 · Anthropic Academy 17 门课（118-151s · 33s · 主峰）

- 118-121s（**第 2 层 · 右卡 Academy 主截图入场**）：右卡中位贴 **`anthropic-academy.png` 460×260px 大图**（用户提供 — 看得见 "Anthropic courses" 标题 + Claude 101 / Claude Code 101 / Cowork / Code in Action 等课程 tile，自带 logo emoji 风格 icon），autoAlpha 0→1 + scale 0.95→1（1.2s，spring back.out 1.4）。**D 段唯一大尺寸截图**，凸显"17 门课"份量
- 121-124s（17 门课 chip 入场）：右卡下方浮出 `17 门课程` chip（Claude 橙背景 + 白字 28px，醒目）+ marker sweep 0.8s。**注**：用户截图实际可见 4 门课 tile，HF chip 仍标 17 严守 SRT 口播一致性
- 124-135s（课程 chip 阵列 stagger）：右卡截图下方 stagger 浮出 6 个小课程 chip 横排 2 行（**精校到截图实际可见 + 常见课程**）：`Claude 101` `Claude Code 101` `Cowork` `Code in Action` `Prompt Engineering` `MCP / Tool Use`（每个 chip 0.4s 间隔入场，米色暖底 1px 灰边框）。chip 间距统一 16px
- 135-141s（"非技术岗→技术岗"横轴）：右卡下方再浮出一条横线（米色暖深 1.2s 入场），两端文字 `非技术岗` ← → `技术岗`（**米色暖深色 #5A4F46**）
- 141-146s（左卡反向箭头 + "不是填补"chip）：左卡上方浮出一个反向小箭头指向右卡（**视觉关系**：左卡 Eureka 暂停 → 右卡 A 社自己在做）。两卡中间浮出 chip `不是填补 / A 社自己在做`（灰色暖底，spec-fill 一行）
- 146-151s（hold 进 D-3）：D-1 + D-2 内容全部 hold

#### D-3 · 触达 / 风格 / 布道者（151-176.7s · 25.7s · GLOW 收尾）

- 151-154s（双卡缩小 + "触达 / 风格" chip 浮出）：左右两卡 scale → 0.7 + autoAlpha → 0.6（1.5s 整体压缩），**屏幕上 2/3 空出**。空区浮出两个 chip 横排居中：① `触达 · reach` ② `风格 · style`（chrome 小字 36px，Claude 橙渐变，stagger 0.6s 入场）
- 154-160s（触达 chip 下方数字证据）：`触达 · reach` chip 下方浮出 `A 社 17 门课 · 不知道的人很多` chip（米色暖底，spec-fill 一行 18px）—— **视觉冷反差**：A 社有课但没人知道
- 160-167s（风格 chip 下方数字证据）：`风格 · style` chip 下方浮出 `Karpathy YouTube · 几百万播放/条` chip（**Claude 橙背景 + 白字大数字 32px**）。如 G2 决议抓 YT 主页，**右侧贴 YT 主页截图 200×120px**；如走轻路径，仅 chip + 数字
- 167-172s（**hot moment**：布道者 chip + marker sweep）：风格 chip 再下浮出 **`布道者 · evangelist` chip**（chrome 小字 40px + Claude 橙渐变下划线 + token-stagger 字符级入场 1s + marker sweep Claude 橙划过 1.4s）—— 本段 4 个 hot moment 之三
- 172-176.7s（全屏 hold 呼吸）：触达 / 风格 / 布道者 三个 chip + 数字证据 + 左右双卡（Eureka / Academy）全部 hold **4.7s 长 hold**，让观众消化 D 段 75s 的密度

**关键纪律**：
- D 段 75s 节奏密度最高 —— 三幕一定要清楚切，每幕之间不 hard cut 但要有"层次差"（D-1 左卡主 / D-2 右卡主 / D-3 两卡都退到背景）
- "触达 · 风格 · 布道者"是 D 段的口播金句 —— 每个词都用 chrome 小字 + Claude 橙单独立出，**不能埋在内文里**
- 布道者 chip 是 SEC D 视觉锚 —— **不可以省**

---

### SEC E · 殊途同归（176.7-199.0s · HOT · 22.3s）

**目的**：把 206.6 秒的所有积累爆发在这一个 SEC —— "让普通人 · 驾驭模型" chrome 大字 + 双河 MorphSVG 真正融为一条河。**本段唯一的 chrome 大字位**。含 306 "区别只是合作 / 分开" 同主题延续。

**节奏曲线**：D 段所有元素淡出 → 双河 SVG 重新放大 → chrome 大字慢推 → 双河 MorphSVG 融合 → "区别只是合作"小注脚 → hard cut 出。

**实现**：
- 176.7-177.5s（缓冲）：SEC D 所有 chip + 双卡 + 截图全部 autoAlpha → 0（0.8s 整体淡出），**背景米色暖底保留**
- 177.5-180s（双河 SVG 重新放大）：SEC A 末缩到底 1/4 的双河 SVG path **scale → 1 + translateY → 0**（2.5s，origin 中央汇流点），重新占满屏幕。**stroke 加粗 +30%**（stroke-width tween） —— 强势 callback
- 180-181s（Karpathy + Anthropic chip 回归）：左河上方再次浮出 karpathy.png 头像 + chip `卡帕西 · 这两年`，右河上方 Anthropic logo + chip `A 社 · 这一年`（同 SEC A 节奏，但 chip 副标变成 "这两年" / "这一年"——精确数字呼应 SRT 字幕 301 "卡帕西这两年所有的实验"）
- 181-184.5s（**chrome 大字 · 本段唯一**）：屏幕中央慢推 chrome 大字 `让普通人 · 驾驭模型`（**米色底暖版 8-stop chrome 96px** —— 全段 206.6s 的终极 hot moment）。token-stagger 0.08s 字符级入场 + filter blur 14px→0（1.5s）。**视觉爆发位**
- 184.5-188s（汇流点光柱）：两河之间的汇流点 **Claude 橙光柱从汇流点向上射出**（CSS conic-gradient + scaleY 0→1 from bottom，1.2s + box-shadow 0→40px Claude 橙）—— 视觉表达"两条河流到同一目的地"
- 188-191.5s（**双河 path MorphSVG 融合**）：双河 SVG path 的 `d` 属性通过 GSAP **MorphSVGPlugin**（2025-04 起免费）tween 到一个合并 path：
  ```js
  gsap.registerPlugin(MorphSVGPlugin);
  gsap.to('[data-composition-id="seg06-merge"] #leftRiver', {
    morphSVG: '[data-composition-id="seg06-merge"] #mergedRiver',
    duration: 3.5, ease: 'power2.inOut'
  });
  gsap.to('[data-composition-id="seg06-merge"] #rightRiver', {
    morphSVG: '[data-composition-id="seg06-merge"] #mergedRiver',
    duration: 3.5, ease: 'power2.inOut'
  });
  ```
  3.5s 内两条 curve 真正"流到一起"形成一条 thick stroke 河。**实现风险低**（MorphSVGPlugin 自动处理 point mapping）
- 191.5-194s（chrome 中字 + Claude 橙描边）：chrome 大字 `让普通人 · 驾驭模型` 上方再叠一行 **chrome 中字** `殊途同归 · same destination`（米色暖深，Claude 橙描边 1px，48px）—— stagger 入场 1s
- 194-195.7s（hold 静止 · "殊途同归"满帧）：双河融合 + chrome 大字 + 中字 全部 hold 1.7s
- 195.7-199.0s（**306 延续 · "区别只是合作 / 分开"**）：屏幕底部浮出 chip 注脚 `区别只是 · 合作 vs 分开`（米色暖底 16px 小字 + 1px 灰边框，**低亮**位于 chrome 大字下方 100px 处，不抢焦点）。spec-fill 一行入场（1s）+ hold 2.3s 进 SEC F **hard cut**

**关键纪律**：
- chrome 大字 `让普通人 · 驾驭模型` 是**全段 206.6s 唯一一次大字** —— 不能在 B/C/D/F 任何位置出大字
- MorphSVGPlugin 用前必须 `gsap.registerPlugin(MorphSVGPlugin)`，**且 `index.html` 顶部 script tag 引 plugin CDN**（hyperframes 默认只引 gsap core）。具体：
  ```html
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.15.0/MorphSVGPlugin.min.js"></script>
  ```
  在 `index.html` `<head>` 内，gsap core 之后
- "区别只是合作 / 分开"注脚是 SEC E 末的小延续 —— **位置低 / 字小 / 灰亮**，是 chrome 大字的脚注而不是另起一段
- SEC E 末 hard cut 到 SEC F，**禁 fade** —— SEC E 米色暖底 → SEC F 米色暖深底 #F0E5D2 直接切

---

### SEC F · 桥接 seg07 · 三个预测占位（199.0-206.6s · CLIFFHANGER · 7.6s）

**目的**：把 SRT 307-309 "卡帕西加入 A 社之后 / 会有哪些变化 / 三个预测，完全纯主观" 视觉化成 seg07 的钩子。**禁出 chrome 大字 / 禁展开预测内容**（那是 seg07 的事）。**3 个空白卡片占位** 是这个段的视觉锚 —— 暗示 seg07 三个预测，但**不填充内容**。

**节奏曲线**：暗色切换 → 桥接 chip → 提问 chrome 小字 → 3 空白卡片占位 stagger → hold 进 hard cut。

**实现**：
- 199.0-201.5s（暗色切换 + 桥接 chip · F 入）：全屏 hard cut，背景从米色暖底 #F7F2EA → 米色暖深底 #F0E5D2（**深一档但仍米色系**，不是黑底——保持 DNA 底色统一）。SEC E 所有元素（双河 / chrome 大字 / 中字 / 306 注脚）全部消失。中央浮出 chip `卡帕西 加入 A 社 ↓`（暖深米色背景 + 米色暖深字 #5A4F46 + 1px Claude 橙边框，spec-fill 一行入场 + 向下小箭头 ↓ 引导视线）
- 201.5-203.0s（提问 chrome 小字 · F 中）：chip 下方浮出 chrome 小字（36px，非大字！）`会有哪些变化呢？`（米色底暖版渐变 8-stop chrome）—— token-stagger 0.06s 字符级入场（1s 完成）。问号 ？**单独一字** 用 Claude 橙
- 203.0-205.0s（3 空白卡片 stagger · F 中-后）：chrome 小字下方浮出 **3 个空白卡片** 横排（每卡 280×180px，米色暖底 1px 灰边框 + 卡片号 `01` `02` `03` 大字 chrome 36px 居中），stagger 0.4s 入场（autoAlpha 0→1 + y: 20→0 in 0.6s/卡）。卡片内容**全部留白**（不填三个预测的具体内容，那是 seg07 的事）
- 205.0-206.6s（"三个预测 · 纯主观" chip + hold · F 末）：3 卡上方浮出 chip `三个预测 · 纯主观`（**Claude 橙背景 + 白字 18px**），spec-fill 一行入场 0.4s。**全部 hold 1.2s** → hard cut 到 seg07

**关键纪律**：
- SEC F **禁 chrome 大字**（本段唯一大字在 SEC E `让普通人 · 驾驭模型`）
- 3 个空白卡片 **不填内容** —— 这是钩子的灵魂，填了就抢 seg07 的 hot moment（参考 seg05 SEC E 4 头像 hold 但不展开 OpenAI/Anthropic 因果链）
- SEC F 末禁 exit fade（§18，seg06 不是 outro）—— **hard cut 到 seg07 第一帧**
- 米色暖深底 #F0E5D2 是 seg06 SEC F 与 seg07 起点的视觉过渡——**seg07 PLAN 写时承接这个底色继续，避免突兀**

---

## 4. index.html 挂载

在 seg05 后追加：

```html
<!-- seg06 ch6 merge：双河汇流 · 三组对位 · 殊途同归 + 桥接 seg07 (11:14-14:40, 字幕 231-309) -->
<div
  class="clip"
  id="seg06-merge"
  data-composition-id="seg06-merge"
  data-composition-src="compositions/seg06-merge.html"
  data-start="674"
  data-duration="206.6"
  data-track-index="1"
  data-width="1920"
  data-height="1080"
></div>
```

- `data-start="674"`：38 + 112 + 80 + 91 + 201 + 152 = **674s** ✓
- `data-duration="206.6"`：SRT 真源校准段长（含 306-309 桥接段）
- **下一段 seg07 的 data-start 应为 674 + 206.6 = 880.6s（≈ 14:40.6）**，等 PLAN-seg07 时取整精校（SRT 第 310 条 "然后先说第一个" 起 14:42.666，跟 880.6 差 2s ≈ 自然停顿，可在 seg07 SEC A 开头加 2s 暗场缓冲，或微调本段 data-duration）

### MorphSVGPlugin 引入

`index.html` `<head>` gsap core 后追加（**首次在本项目用此 plugin**）：

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.15.0/MorphSVGPlugin.min.js"></script>
```

composition 顶部 GSAP 注册：

```js
gsap.registerPlugin(MorphSVGPlugin);
```

---

## 5. 实现红线

- `SEGMENT_DURATION = 206.6`；段末 `tl.set({}, {}, SEGMENT_DURATION)` 撑满
- CSS selector 全部 `[data-composition-id="seg06-merge"] ...`，禁用 `#seg06-merge`（§9 bundler strip）
- GSAP selector 硬编码字符串，禁 template literal（§1）
- 字体硬编码 `"Noto Sans SC", "Inter", sans-serif` / `"JetBrains Mono", monospace`（§15）
- 米色底正文色：`#5A4F46` / `#8b3d28` / `#B5563D`（§17）
- SEC F 米色暖深底正文色：用 `#5A4F46`（与米色暖底同色，对比度差只 +5%，validate 通过没问题）
- 真截图 `<img>` 标签，不要 `background-image`
- SEC 切换用 `tl.set('.sec-x', { autoAlpha: 0 }, T)` + 下一 SEC 入场，**禁 SEC 退场动画**
- **chrome 大字全段只允许 1 次**：SEC E 中`让普通人 · 驾驭模型`。其余 chrome 用小字（B/C/D/F 的 hot moment 标语 32-36px 级）
- **段末 SEC F 禁 exit fade**（§18，seg06 不是 outro）。3 空白卡片 hold 静止 hard cut 到 seg07
- MorphSVGPlugin 使用：`gsap.registerPlugin(MorphSVGPlugin)` + CDN 引入 + `morphSVG: '#mergedRiver'` —— 见 §4 详细
- 三组对位卡 layout 复用 SEC B 框架 —— C / D 段切换内容时**框架保留**，只清空内容（避免每 SEC 都重建框架的节奏抖动）

---

## 6. preview 验证点

- `npx hyperframes lint` 0 errors
- `npx hyperframes validate` 0 contrast warnings
- preview scrub 验证（绝对全片时间码 = 674 + 段内时间）：
  - `t=675`：SEC A 起，深灰底承接 seg05
  - `t=678`：SEC A 中，双河被点亮 + chrome 橙光横扫完毕
  - `t=685`：SEC A 末，"已经汇流"marker sweep + 反向小箭头 hold
  - `t=689`：SEC B 起，对位卡 layout 切换 + 第一组标题 token-stagger
  - `t=710`：SEC B 中，左卡 LLM Wiki + 右卡 Claude Memory 双截图 + spec-fill
  - `t=730`：SEC B 末 hot moment，对位 chip 放大 + `=` 等号 + chrome 小字`把你的工作方式 · 写死在上下文`
  - `t=734`：SEC C 起，layout 复用 + 第二组标题 char-scramble
  - `t=755`：SEC C 中，左卡 vibe coding tweet + 右卡 Claude Code + cc-window 一行命令
  - `t=773`：SEC C 末 hot moment，`=` 等号 + chrome 小字`自然语言 → 代码 · 你在改方向`
  - `t=776`：SEC D-1 起，Claude 橙边框升级 + 第三组对位 chip
  - `t=790`：D-1 末，Eureka 暂停 chip
  - `t=796`：D-2 主峰，Anthropic Academy 大截图 + 17 门课 chip
  - `t=810`：D-2 中，课程 chip 阵列 + "非技术→技术"横轴
  - `t=830`：D-3 起，触达 / 风格 chip
  - `t=843`：D-3 hot moment，`布道者 · evangelist` chrome 小字 + marker sweep
  - `t=850`：D-3 末，全屏 hold 4.7s 长呼吸
  - `t=854`：SEC E 起，D 元素全淡出 + 双河 SVG 重放大
  - `t=858`：SEC E 中，chrome 大字 `让普通人 · 驾驭模型` 慢推
  - `t=865`：SEC E 中-3，双河 MorphSVG 融合 + `殊途同归 · same destination` 中字 hold
  - `t=872`：SEC E 末（306 延续），`区别只是 · 合作 vs 分开` chip 注脚浮出
  - `t=874`：SEC F 起（307），米色暖深底 + `卡帕西 加入 A 社 ↓` chip 入场
  - `t=876`：SEC F 中（308），chrome 小字 `会有哪些变化呢？`
  - `t=878`：SEC F 末（309），3 空白卡片占位 + `三个预测 · 纯主观` chip
  - `t=881`：seg07 第一帧应接上，seg06 无 exit fade

---

## 7. 不做的事（防漂移清单）

- ❌ chrome 大字不超过 1 次（SEC E 中 `让普通人 · 驾驭模型`），避免抢全段终极 hot moment
- ❌ SEC F 不做 exit 动画 / 不淡出 / 不切到 seg07 的"过场"（hard cut）
- ❌ SEC F 3 个空白卡片**不填内容**——填了就抢 seg07 三个预测的 hot moment
- ❌ **不要把截图当卡顶品牌识别**（之前 PLAN 错的姿势）—— 卡顶必须是 logo / 图标 / 头像（强品牌符号），截图退到卡中做实物证据。**双层视觉规则**强制
- ❌ Claude Code 右卡顶**只用 `claude-code-icon.png` 像素拟人图标**，不用 `claude-code-product.png` 产品页 hero（hero 截图太杂——databricks/figma/spotify 等其他 logo 抢焦点，做品牌识别不合格）
- ❌ 不在 D-3 之前出"触达 · 风格 · 布道者"三词 —— 这是 D 段口播金句，要等到 SRT 290 "触达和风格" 那条才能出现
- ❌ 不混用蓝色 / 紫色 / 绿色 hot 色 —— DNA 红线 hot 色每 beat 只一个，全段 Claude 橙 + 米色暖底，**唯一例外**：B / C 段左卡用米色暖深色 #5A4F46（区分左右温度差），不算 hot 色
- ❌ Eureka 不准写"关闭" —— STYLE_BRIEF 阶段 2.5 措辞规则
- ❌ Anthropic Academy 17 门课数字不准编 —— HF chip 严守 SRT 口播 17 门，视觉以 anthropic-academy.png 实际为准（不擅自改）
- ❌ cc-window 只在 SEC C 用一次（一行命令），不要展开整个终端 UI
- ❌ Codex chip 只在 SEC C 出现一次（autoAlpha 1.5s 一闪而过），不展开
- ❌ B 右标题 / spec-fill 不深讲 Dreams 机制（异步任务 / 后台整理 transcripts）—— 只对位"两者都在做'让模型懂你'这件事"，机制留给其他视频
- ❌ Codex chip 用 OpenAI logo 灰处理，**不用 openai 全彩 logo**——会抢 Anthropic 橙焦点

---

## 8. 待办（写 v1 前必须做）

1. **G2 用户提供 4 张真截图**（用户决议手动下载）—— URL 清单见上方 G2 决议表，文件按 `assets/screenshots/{anthropic-dreams,claude-code-product,eureka-labs,anthropic-academy}.png` 命名存放
2. **D 末 "Karpathy YouTube 几百万播放" 视觉路径** —— 走"数字字幕卡 + Claude 橙背景 chip"轻路径（不抓 YT 主页截图），SEC D-3 段已按此路径写
3. **关于 SRT 283 "17 门课"事实台账** —— v1 写完后，用户用 G2 anthropic-academy.png 截图实际课程数核对一遍，如非 17，HF 视觉按截图实际数字标（口播保留 SRT "17 门"，视觉若实际是 19 / 16 也只写 chip "17 门"严守 SRT，不擅自改 —— **HF 严守口播一致性**）
4. **joining-tweet "教育依然保持热情" 局部 crop** —— 优先在 composition 内 CSS clip-path 处理 `joining-tweet.png` 的相关区域，避免新文件
5. **新事实研究文件**：写 `研究/06-merge-evidence.md` 沉淀 Dreams 功能 + Anthropic Academy + Eureka 暂停 + Claude Code 官方 URL 4 项事实，供后续 PLAN 复用

---

## 9. PROJECT-STATE 回填 todo（PLAN 通过 + v1 验过后）

- §3 表 seg06 行段长更新：166s → **206.6s**（SRT 真源校准，切法 B）
- §3 表 seg06 字幕条 231-309 **保持不变**（切法 B 与 §3 原标注一致）
- §3 注更新：seg06 段长校准 +40.6s 的说明 + 11 段总和 ≠ 1292 的临时状态说明（待 seg07-10 PLAN 时同步校准，最终回填全表平衡）
- §3 表 seg07 起点更新：14:00 → 14:40.766（310 条起点 14:42.666 上取 14:40.766 = seg06 末），字幕条 310- 起
- §8 修订日志加一条：`2026-05-22 seg06 PLAN 完成，采用切法 B，段长 206.6s；新增 SEC F 桥接段；G3 决议用 MorphSVGPlugin；G4 Dreams 功能双标`
