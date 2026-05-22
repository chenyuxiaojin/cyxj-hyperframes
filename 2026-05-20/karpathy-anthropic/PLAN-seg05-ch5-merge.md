# PLAN-seg05-ch5-merge — Karpathy 用 Agent 训模型 + Anthropic 创始团队埋钩

> 本段适用 §7（SRT 真源）/ §8（段内时间从 0）/ §10（SEGMENT_DURATION + tl.set 撑满）/ §11（cutaway）/ §12.a-b（preview 验过 + commit）/ §13（资料台账）。seg04→seg05 默认 hard cut，WARM 观点收束之后直接进 COOL 叙事段。

- **段编号**：seg05（章别名 ch5）
- **段长**：152.0s
- **全片位置**：8:42 → 11:14（字幕 178-230，53 条）
- **形态**：cutaway
- **真源**：`字幕/加入之后.srt` 第 178-230 条

---

## 0. 本段的核心叙事

seg05 是**两条暗线的"线 A 主讲 + 线 B 埋钩"**：

- **线 A（前 134.6s · 4 个 SEC）**：Karpathy 加入 Anthropic 做的不是训新模型，**反过来**——用 Agent（Claude）训下一代 Claude。卡帕西当品味把关人，Claude 干苦力。这条线是本段主戏，要把"方向 1（agent 装进模型 = 所有人）vs 方向 2（agent 训模型 = 少数人）"说清楚，并回扣 vibe coding / LLM Wiki 是伏笔。
- **线 B（末尾 17.4s · SEC E）**：转折"还有一个细节大家没注意"——Anthropic 的 CEO / 总裁 / GPT-3 主作者**全是 OpenAI 离职团队**。这是**钩子，不是答案**。Anthropic 创始团队的完整溯源 + 三组对位（Wiki↔Memory / vibe↔CC / Eureka↔Academy）的"殊途同归"在 seg06 汇流完成。

⚠ INTEGRAL-RHYTHM-MAP §5（5-21 起草）原建议「B Anthropic 创始团队溯源 60s」实际不属于 seg05 范围——SRT 真源只用 17s 转折提一句钩子，不展开。本 PLAN 按 SRT 真源校准。

---

## §13 资料台账

### 官方文档 / skill

- `hyperframes`：visual identity → end-state layout → GSAP timeline；scene-content 用 flex / grid 不靠 absolute（§14）。
- `gsap`：position parameter `"<"` `"<0.5"` `">"`、`autoAlpha` 替代 opacity+visibility、stagger 入场。
- `docs/HARD_CONSTRAINTS.md`：N9 selector / N15 字体硬编码 / N17 米色底 contrast / N18 段末禁 exit / N19 commit 节奏。

### 事实复核（待跑：seg05 写 v1 前补真截图 + 双源核对）

- **Nick Joseph 推文（关键素材）**：原文"Karpathy will lead a new team using Claude to accelerate pre-training research itself"——需要 grok-search 找 URL + playwright 抓真截图存 `assets/tweets/joseph-team.png`。**未抓不准动 SEC A 写 mock**（参考 seg02 教训 [[feedback-real-screenshots-not-mocks]]）。
- **Anthropic 创始团队来自 OpenAI（线 B 钩子事实）**——已在 `研究/03-anthropic-events.md` §1 写过 Nick Joseph + pre-training 角色。但 Dario Amodei (CEO) / Daniela Amodei (President) / GPT-3 主作者出走 OpenAI 创办 Anthropic 这条线**未做事实台账**，写 SEC E 前补一次双源校对（Anthropic 官方 about 页 + Wikipedia / TechCrunch 报道）。
- **2026-05-19 Karpathy 加入推文**：已有 `assets/tweets/joining-tweet.png`，SEC A 复用。

### 真实素材清单（盘点 + 缺口）

| 文件 | 用途 | 状态 |
|---|---|---|
| `assets/tweets/joining-tweet.png` | SEC A 引子 - Karpathy 加入 | ✅ 已就位 |
| `assets/tweets/joseph-team.png` | SEC A hot moment - Joseph 揭示"用 Claude 加速 pre-training" | ❌ 待抓 |
| `assets/tweets/vibe-coding-tweet.png` | SEC D 时间回望 - vibe coding 伏笔 | ✅ 已就位 |
| `assets/portraits/karpathy.png` / `karpathy-hero.png` | SEC A / SEC C 品味把关人 | ✅ 已就位 |
| `assets/portraits/dario.jpg` | SEC E ex-OpenAI 头像之一（CEO） | ✅ 已就位 |
| `assets/portraits/daniela_candidate.png` | SEC E ex-OpenAI 头像之一（President）| ⚠ 候选 - 写 SEC E 前确认本人 |
| `assets/portraits/jaredkaplan.jpg` | SEC E ex-OpenAI 头像之一（GPT-3 主作者）| ✅ 已就位 |
| `assets/portraits/tombrown_candidate.png` | SEC E ex-OpenAI 头像之一（GPT-3 lead）| ⚠ 候选 - 同上 |
| `assets/portraits/nickjoseph_yt_candidate.jpg` | SEC A Joseph 头像（可选，推文截图已含头像）| ⚠ 候选 |
| `assets/logos/anthropic.svg` `openai.svg` `claude.svg` | 全段 | ✅ 已就位 |

### 参考工程

- `compositions/seg01-renwu.html`：履历列车 + 真人头像 + 新闻档案——**SEC E ex-OpenAI 头像列阵**的直接范本（头像贴 ex-OpenAI 标签的写法）。
- `compositions/seg02-gainian.html`：cc-window + 真截图 + 5 SEC 节奏——**SEC C "Claude 干苦力工作台"**的直接范本（多个 cc-window 排列展示并行任务）。
- `compositions/seg03-momentum.html`：Ramp 真截图卡 + Anthropic JV 真截图卡——**SEC A Joseph 推文真截图卡**的直接范本（推文卡布局 + source badge 标注）。
- `compositions/seg04-wrapper.html`：太阳系 layout（自转 + 同心轨道）——**不复用**。seg05 是叙事段不是结构剖面。
- `compositions/ch0-cold-open.html`：撞击 / 三连问节奏——**不复用**。seg05 COOL，不要 HOT 冲击。

### 官方零件清单（templates/components/ 已抽）

| 零件 | 用途 | 用在哪 |
|---|---|---|
| `cc-window` | Claude Code 终端 UI | SEC C 上下两层结构的"Claude 苦力"4 个窗口（提代码 / 跑消融 / 生成数据 / 评估筛选） |
| `xcyj-tokens` | DNA 颜色 / 字体 token | 全段 |
| `text-effects.char-scramble` | Matrix 风字符解码 | SEC C 4 件事 chip 流入场（"agent 在下面解锁"感）|
| `shake-error` | 抖动 + danger 染色 | SEC B 大红叉打掉"伪命题"瞬间（可选） |
| `spec-fill` | 逐行填充 | SEC D 方向 1 / 方向 2 对比卡 |

不用：`orbit-dots`（太杂）/ `pulse-bars`（节奏不对）/ `text-effects.token-chunks`（seg04 已用，避免重复）。

### 不用的 catalog

- `flowchart` / `data-chart`：seg05 是叙事 + 对比段，不是数据可视化段
- `whip-pan` / `flash-through-white` / `cinematic-zoom`：seg04→seg05 / seg05→seg06 默认 hard cut（§9）
- `macos-notification` / `yt-lower-third`：本段无社交 UI 触发

---

## 1. 字幕条对应 + SEC 切分 + 节奏标签

> 切分按 SRT 句号 / 语义自然停顿走，**不强行 5 段平均**。SRT 时间码已精确到毫秒。

| SEC | 字幕条 | 段内时间 | 段长 | 节奏 | 主题 |
|---|---|---|---:|---|---|
| A | 178-187 | 0.0-29.5s | 29.5 | **COOL** | 不是来训新模型 + Joseph 推文揭示真相 |
| B | 188-198 | 29.5-57.7s | 28.2 | **COLD** | 你以为方向 = Agent 装进模型（伪命题，所有人都在做） |
| C | 199-209 | 57.7-89.0s | 31.3 | **WARM → GLOW** | 反过来：Agent 干苦力 + Karpathy 当品味把关人 |
| D | 210-226 | 89.0-134.6s | 45.6 | **COOL（双幕）** | 方向 1 vs 方向 2 对比 + 这两年实验都是伏笔 |
| E | 227-230 | 134.6-152.0s | 17.4 | **CLIFFHANGER** | 转折钩：Anthropic 核心团队 ex-OpenAI |

合计：29.5 + 28.2 + 31.3 + 45.6 + 17.4 = **152.0s** ✓

SEC 之间 hard cut（§9）。SEC D 段长 45.6s，**内部分双幕**（D-1 方向对比 ~22s + D-2 时间回望 ~24s）以避免静态过长。

**SEC E 末禁 exit fade**（§18）：seg05 不是 outro，画面在 hold 状态 hard cut 到 seg06 的高潮入场。

---

## 2. metaphor 表（语义扩展，禁字幕直译）

| 口播 | SEC | 视觉语义扩展 |
|---|---|---|
| "卡帕西加入 A 社值得真看 / 不是来训新模型的" | A | 屏幕中心 Karpathy 半身肖像缓推入场（karpathy-hero.png），背景米色底浅 grid。**"训新模型"四个字浮在头像旁，被一道横线划掉**——视觉上立刻否定通行解读。COOL 起势 |
| "A 社预训练负责人 Joseph 推特的原话是" | A | Karpathy 头像滑到左侧 1/3，右侧 2/3 弹入**Joseph 推文真截图卡**（待抓素材）。卡片右下 source badge：`x.com · @nickjoseph · 2026-05-19` |
| "用 Claude 加速预训练研究本身 / 用 Claude 去训练 Claude" | A | 推文卡中"using Claude to accelerate pre-training research"那一行用 Claude 橙 marker sweep 高亮 → 推文卡淡出 → 屏幕中央出现一个**循环箭头**：左 `Claude` 节点 → 右 `Claude.next` 节点 → 回环。这是 SEC A 的 hot moment（小幅，非 chrome 大字） |
| "你可能会觉得是把 Agent 能力做到模型里" | B 入 | 屏幕切到一个**模型核心**居中（小球，Claude 橙），周围浮 4 个 chip：`多步推理` `调用工具` `制作修正` `不靠套壳`，chip 一个接一个被吸进模型核心内部 |
| "但这是所有人都在走的 / GPT Claude 最新一代都在做" | B 中 | 镜头拉远，原来的模型核心**变成 N 个并列副本**——左 GPT logo / 中 Claude logo / 右 Gemini logo，每个副本都在做同样的"吸进 Agent 能力"动作。**集体动作 = 平庸 = 这不是 Karpathy 要做的** |
| "但这并不是卡帕西要去做的事 / 不会专门为他建一个新团队" | B 末 | 三个并列副本被一道横线划过（不是大红叉，**用极简的灰色横线**——COLD 段不要爆发），淡入文字 `这条路 ≠ 卡帕西要做的`。chip 全部停在原地变灰 |
| "卡帕西要做的觉得是反过来的方向" | C 入 | 全屏切换：屏幕**横向一刀劈开**（hard cut），分为上下两层。上层米色底带浅 Karpathy 头像 + 标签 `品味把关人 · Karpathy`；下层深灰底（不是纯黑，参考 seg00 米色暖深）带 4 个 cc-window 终端窗口（关闭状态 / 黑底）+ 标签 `Claude · agent` |
| "不是把 Agent 装进模型 / 而是让 Agent 去训练模型" | C 中 | 上层 Karpathy 静止，下层 4 个 cc-window **同时亮起**，每个窗口里 char-scramble 解码出一行：① `propose code` ② `pretrain code` ③ `run ablation` ④ `generate data`。**4 个并行**——这是"agent 大军"感 |
| "Claude 自己去评估筛选这些数据 / Karpathy 当品味把关人" | C 后 | 第 5 个 cc-window 在下层中央**变大**：`evaluate · filter`。然后**一道光从下层升起**穿到上层 Karpathy 头像旁的"品味"标签——视觉上是"下层产出 → 上层把关"循环。这是 SEC C 的 GLOW 瞬间 |
| "agent 去干苦力 / Karpathy 做研究 / 做一个 Claude Code 级别的框架" | C 末 | 上层 Karpathy 旁出现一个抽象框架卡（`framework / spec`），下层 4 个 cc-window 全在跑，**镜头微推一档稳定结构**。chrome 小字（**不上大字**）`agent 干活 · 人在把关` |
| "第一个方向 / 把 agent 能力收进模型" | D-1 起 | 全屏切到对比布局：屏幕**左右各一卡**。左卡背景灰底，标题 `方向 ①`，正文 `Agent 能力 → 模型内部`，spec-fill 逐行填充：`多模态` `多步推理` `工具调用`，底部小标签 `所有人都在做` |
| "这个是所有人都在做的 / 多模态模型" | D-1 中 | 左卡底部出现密集小 chip 阵列（每个 chip 是一个公司 logo + 名字）：GPT / Claude / Gemini / DeepSeek / Llama 等 6-8 个 logo——**视觉上是"红海"**（chip 密集挤在小格子里） |
| "方向二 / 用 agent 去造下一个模型" | D-1 末 | 右卡入场（左→右 stagger），背景米色暖底，标题 `方向 ②`，正文 `Agent → 训练下一个模型`，底部小标签 `少数人在做`。下方 chip 区**只有 Anthropic 一个 logo**——单独站立（**红海 vs 蓝海**的对比） |
| "卡帕西这两年所有实验 / vibe coding 也好" | D-2 入 | 双卡 hold 0.5s 后**整体淡出 → 屏幕中央**纵向时间轴出现：底为 2024 → 顶为 2026。轴上 stagger 浮出 3 个节点：① `vibe coding tweet · 2025` ② `LLM Wiki · 2026` ③ `加入 Anthropic · 2026-05` |
| "大部分的 LLM Wiki 也好 / 本质就是在为第二个方向做准备" | D-2 中 | vibe-coding-tweet.png 局部缩略图浮在节点 ① 旁；LLM Wiki 概念图（复用 seg02 的 wiki-cards 局部）浮在节点 ② 旁；karpathy.png 头像浮在节点 ③ 旁。**三个节点同时被一束 Claude 橙光从下往上扫过**——视觉上是"伏笔回收" |
| "先想明白怎么用模型 / 人在上面把关 / agent 在下面干活" | D-2 后 | 时间轴淡出，回到 SEC C 的上下两层结构**一瞬间闪现**（call back），然后立刻收束 |
| "再把这套思维套进训练循环本身 / 这就是这次跳槽最有重量的事" | D-2 末 | 屏幕中央留**一句深棕大字**（**不是 chrome 大字**——本段 chrome 大字留给 SEC C 唯一）：`这是这次跳槽 · 最有重量的事`。hold 1s |
| "这里有一个细节其实很多人没有注意到" | E 入 | 全屏 hard cut 切到深灰底（更深一档，制造"夜场"感）。**屏幕中心一盏聚光灯**（径向 gradient）打到一个空白的 Anthropic logo 上 |
| "Anthropic 不是一家普通的对手公司" | E 中 | Anthropic logo 慢推（scale 1 → 1.1）+ glow 起。聚光灯背景外的暗处**浮起 4 个剪影头像**（still 黑剪影，未亮起） |
| "CEO 总裁 GPT-3 主要作者 / 核心团队全部从 OpenAI 离职" | E 末 | 4 个剪影**逐一被聚光灯扫到亮起**：dario.jpg → daniela_candidate.png → jaredkaplan.jpg → tombrown_candidate.png。每张头像下出现 chip：`Dario Amodei · CEO · ex-OpenAI` / `Daniela Amodei · President · ex-OpenAI` / `Jared Kaplan · GPT-3 author · ex-OpenAI` / `Tom Brown · GPT-3 lead · ex-OpenAI`。OpenAI logo 在每个 chip 旁灰色小字 |
| （口播结束，进 seg06 高潮）| E 末 | 4 个头像 hold + Anthropic logo 居中 + 4 个 OpenAI 灰 logo 一圈包围。**全部 hold 静止 0.5-1s**（不淡出，不动效），直接 hard cut 到 seg06 |

---

## 3. 视觉骨架（每 SEC 一段，重点说节奏）

### SEC A · 钥匙转身（0.0-29.5s，COOL）

**目的**：把"Karpathy 不是来训新模型"这个反预期翻出来 + 用 Joseph 推文锁定真相。

**节奏曲线**：低 - 平 - 微峰（推文高亮）- 收

**实现**：
- 0-3.5s：Karpathy 半身肖像 fade-in（autoAlpha 0→1 in 1s），背景米色底 + 浅 grid（复用 seg01 grid 模板）
- 3.5-8s：标题字 `不是来训新模型的` 入场（token-stagger 0.05s），右侧浮 `Karpathy · 加入 Anthropic · 2026-05` source chip
- 8-12s：标题"训新模型"四个字被一道横线划掉（SVG line strokeDashoffset 1.2s），淡入小字 `❌ 训新模型`
- 12-22s：Karpathy 头像滑到左侧 1/3（x: from 0 to -300px in 1s），右侧 2/3 弹入 Joseph 推文真截图卡（spring ease back.out(1.5)，scale 0.95→1）
- 22-26s：推文中关键句 marker sweep 高亮（Claude 橙 background-position animate from -100% to 0%）—— **本段 hot moment**
- 26-29.5s：推文卡淡出，屏幕中央出现**循环箭头**：`Claude → Claude.next → loop back`。hold 1s 后 SEC 末

**关键素材**：karpathy-hero.png + joining-tweet.png + **joseph-team.png（待抓）**

---

### SEC B · 伪命题（29.5-57.7s，COLD）

**目的**：把观众预设的解读"agent 装进模型"立起来 → 揭穿"所有人都在做"→ 否定它。

**节奏曲线**：建立（chip 吸进模型）→ 复制扩散（3 副本）→ 灰色否定（横线 + chip 变灰）

**实现**：
- 29.5-37s（建立）：屏幕居中弹入 Claude 橙模型核心（小球 + 1s pulse），周围 4 个 chip stagger 入场（0.2s 间隔），逐个被吸进核心（x/y → 0, scale → 0.2, autoAlpha 1→0，每个 0.4s）：`多步推理` / `调用工具` / `制作修正` / `不靠套壳`
- 37-47s（扩散）：模型核心 hold 0.5s → 屏幕缩放回拉（scale 1.2 → 0.8 in 1.5s）→ 中央核心**变 3 副本**（同一动作复用 stagger，左 GPT logo / 中 Claude logo / 右 Gemini logo 各居一格，间距 240px）。每个副本下方小字 `多模态升级中`
- 47-55s（否定）：3 副本上方拉一道横线（灰色 #8a7d70，stroke 1.5s），同步淡入文字 `这条路 ≠ 卡帕西要做的`。3 副本的 chip 全部 hold 后变灰（color → #a09489，1s）
- 55-57.7s（收）：所有元素 hold（**不淡出**——SEC 之间硬切）

**关键纪律**：本 SEC 不能爆发，全段最 COLD 一节，节奏低密度。chip 入场用 staggered 但**不快**（0.2s 间隔）。

---

### SEC C · 反过来（57.7-89.0s，WARM → GLOW）

**目的**：把"反过来 = agent 训模型"立起来 + 用上下两层结构可视化（人/把关 vs agent/苦力）。

**节奏曲线**：劈开（hard 切换 layout）→ 4 窗并行（agent 干苦力 stagger）→ 第 5 窗变大（GLOW）→ 收束。

**实现**：
- 57.7-60s（劈开）：屏幕**横向一刀劈开**——上下两层 div 从中线向外 expand（scaleY 0 → 1 in 0.6s，origin 中线）。上层米色底 #F7F2EA，下层深米色 #2A2520（暖深，不纯黑）
- 60-65s（上层立人）：上层左侧 Karpathy 头像 fade-in（karpathy.png，circular mask），右侧标签 stagger 入场：`品味把关人 · taste keeper` + chip `Karpathy`
- 65-78s（下层 agent 大军）：下层 4 个 cc-window（复用 templates/components/cc-window）2×2 排列，**同时入场**（autoAlpha 0→1 in 0.4s）但**内容 stagger 0.3s** char-scramble 解码出来：① `> propose code` ② `> pretrain` ③ `> run ablation` ④ `> generate data`。每窗下方小标签 `Claude · agent`
- 78-83s（GLOW 瞬间）：下层中央**第 5 个 cc-window 浮出并放大**（z-index 高一档 + scale 1 → 1.15 + box-shadow Claude 橙 glow），里面 char-scramble `> evaluate · filter`。一道 Claude 橙光柱从这第 5 窗**升起穿过中线**（CSS gradient + scaleY 0→1 from bottom），到达上层 Karpathy 头像旁的"品味"标签上方。**这是本段唯一 GLOW** —— 视觉上下双层闭环
- 83-89s（chrome 小字 + 稳）：上下两层 hold，屏幕底部居中浮出 chrome 字（**比 SEC B/E 的 chrome 大字小一档**，仅次于 hot moment 级别）：`agent 干活 · 人在把关`。hold 3s 进 SEC D

**关键纪律**：
- SEC C 是本段唯一含 chrome 字的 SEC——`agent 干活 · 人在把关`。其余 SEC 用普通深棕大字
- cc-window 用本仓库 `templates/components/cc-window`，**不要重写**（[[feedback-real-screenshots-not-mocks]] 不适用——cc-window 本身是 Claude Code UI 还原，不是真实截图代用）

---

### SEC D · 方向对比 + 时间回望（89.0-134.6s，COOL 双幕）

**目的**：把方向 ①（agent 进模型）vs 方向 ②（agent 训模型）拉成对比 + 回望 vibe coding / LLM Wiki 实验都是伏笔。

**节奏曲线**：双幕——D-1 对比（22s）+ D-2 回望（23.6s）。中间 hard 切。

#### D-1 · 方向对比（89.0-111s · 22s · COOL）

- 89-91s（layout 切换）：SEC C 上下结构整体淡出（autoAlpha 0，0.8s）→ 屏幕黑底 0.2s 缓冲 → 切到左右双卡布局（每卡 width 800px 居中分开 80px gap）
- 91-101s（方向 ① 左卡）：左卡米色暖底浅 + 灰色边框 1px。标题 stagger 入场 `方向 ①`，正文 spec-fill 逐行 `Agent 能力 → 模型内部` `多模态 · 多步推理 · 工具调用`。底部 chip 阵列**密集**：GPT / Claude / Gemini / DeepSeek / Llama / Qwen / Mistral / Yi（6-8 个 logo + 名字 chip 拥挤排列）。底部标签 `所有人都在做`
- 101-111s（方向 ② 右卡 + 对比 hold）：右卡 stagger 入场（delay 0.5s 比左卡晚），背景米色暖底**稍亮一档**。标题 `方向 ②`，spec-fill `Agent → 训练下一个模型`。底部 chip 区**只有 Anthropic logo 一个**（居中 + 1px 边框 + small Claude 橙 glow）。底部标签 `少数人在做`。双卡 hold 2s

#### D-2 · 时间回望（111s-134.6s · 23.6s · COOL）

- 111-113s（layout 切换）：双卡淡出（autoAlpha 0，1s）+ 屏幕中央纵向时间轴**从下往上**画出（SVG line strokeDashoffset 1.5s），底 `2024` 顶 `2026-05`
- 113-126s（3 节点 stagger）：时间轴上 3 节点 stagger 入场（每节点 1.5s 间隔）：
  - ① `vibe coding tweet · 2025-02`（左侧浮 vibe-coding-tweet.png 缩略图 240px）
  - ② `LLM Wiki · 2026-04`（右侧浮 LLM Wiki 概念图复用 seg02 wiki-cards 局部 220px）
  - ③ `加入 Anthropic · 2026-05-19`（右侧浮 karpathy.png 圆形 mask 头像 + Anthropic logo 灰小字）
- 126-130s（伏笔回收）：一束 Claude 橙光从底部**从下往上扫过**整条轴（CSS conic / linear gradient maskPosition animate），3 个节点同时被照亮（box-shadow Claude 橙 0→20px in 0.5s）
- 130-134.6s（call back + 深棕大字）：时间轴淡出（autoAlpha → 0.3，不全消失），屏幕中央浮出**深棕大字**（不是 chrome——本段唯一 chrome 在 SEC C）：`这是这次跳槽 · 最有重量的事`。hold 1s 进 SEC E

**关键纪律**：
- D-1 / D-2 之间 hard 切，2s 黑底缓冲是允许的
- 时间轴 3 节点的素材要复用——不要新画 vibe coding 仿样式

---

### SEC E · ex-OpenAI 钩子（134.6-152.0s · 17.4s · CLIFFHANGER）

**目的**：埋下 seg06 高潮的钩——Anthropic 核心团队全是 OpenAI 离职。**钩子不是答案**，不要在 seg05 展开 OpenAI/Anthropic 对位（那是 seg06 的事）。

**节奏曲线**：暗场 → 聚光灯 → 4 个剪影逐一亮起 → 全部 hold 进 hard cut。

**实现**：
- 134.6-137s（暗场入）：屏幕 hard cut 到深灰底 #1F1B17（比 SEC C 下层更深一档，制造"夜场"感）。中央 Anthropic logo（白色 1.4× scale 居中）fade-in（autoAlpha 0→1 in 1.2s）
- 137-141s（聚光灯）：径向 gradient 聚光灯（radial-gradient 中央亮）开启 + Anthropic logo glow（Claude 橙 box-shadow 0→40px in 1s）。聚光灯外暗处浮起 4 个**黑剪影头像**（autoAlpha 0→0.3 in 0.8s，still 不亮起，位置：Anthropic logo 上 / 下 / 左 / 右各一）
- 141-150s（4 头像逐一亮起，stagger 2.2s）：
  - 141-143s：top 位 `dario.jpg` 被聚光灯扫到（autoAlpha 0.3→1 in 0.4s + filter brightness 0.5→1）→ chip `Dario Amodei · CEO · ex-OpenAI`（spec-fill 0.6s）+ 旁边 OpenAI logo 灰色小字 16px
  - 143-145s：right 位 `daniela_candidate.png` 同步亮起 → chip `Daniela Amodei · President · ex-OpenAI`
  - 145-147s：bottom 位 `jaredkaplan.jpg` 亮起 → chip `Jared Kaplan · GPT-3 author · ex-OpenAI`
  - 147-149s：left 位 `tombrown_candidate.png` 亮起 → chip `Tom Brown · GPT-3 lead · ex-OpenAI`
- 149-152s（hold cliffhanger）：4 头像 + 4 chip + 4 个 OpenAI logo + 中央 Anthropic logo **全部 hold 静止**。**禁 exit fade / 禁动效**（§18：段末禁 exit，segment 不是 outro）。3s hold 进 seg06 hard cut

**关键纪律**：
- 4 个候选头像（daniela_candidate / tombrown_candidate）**写 v1 前先核对本人**（grok-search "Daniela Amodei Anthropic President photo" + "Tom Brown GPT-3 OpenAI Anthropic"）。如候选确认错本人，**优先用 SVG 占位符灰头像 + 真名 chip** 而不是错图
- SEC E 不出现 `OpenAI → Anthropic` 箭头 / `离职` 动画——这是 seg06 才展开的因果汇流，seg05 只做"亮相 + 揭示身份"

---

## 4. index.html 挂载

在 seg04 后追加：

```html
<!-- seg05 ch5 merge：Karpathy 用 Agent 训模型 + Anthropic 创始团队埋钩 (8:42-11:14, 字幕 178-230) -->
<div
  class="clip"
  id="seg05-merge"
  data-composition-id="seg05-merge"
  data-composition-src="compositions/seg05-merge.html"
  data-start="522"
  data-duration="152"
  data-track-index="1"
  data-width="1920"
  data-height="1080"
></div>
```

- `data-start="522"`：38 + 112 + 80 + 91 + 201 = **522s** ✓
- `data-duration="152"`

---

## 5. 实现红线

- `SEGMENT_DURATION = 152.0`；段末 `tl.set({}, {}, SEGMENT_DURATION)` 撑满
- CSS selector 全部 `[data-composition-id="seg05-merge"] ...`，禁用 `#seg05-merge`（§9 bundler strip）
- GSAP selector 硬编码字符串，禁 template literal（§1）
- 字体硬编码 `"Noto Sans SC", "Inter", sans-serif` / `"JetBrains Mono", monospace`（§15）
- 米色底正文色：`#5A4F46` / `#8b3d28` / `#B5563D`（§17）
- 深米色底（SEC C 下层 / SEC E）正文：`#F0E5D2` / `#D9C9AC`（米色暖反相，已在 DNA token 内）
- 真截图 `<img>` 标签，不要 `background-image`
- SEC 切换用 `tl.set('.sec-x', { autoAlpha: 0 }, T)` + 下一 SEC 入场，**禁 SEC 退场动画**
- **chrome 大字全段只允许 1 次**：SEC C 末 83-89s `agent 干活 · 人在把关`。其余用深棕大字（包括 SEC D-2 末 `这是这次跳槽 · 最有重量的事`、SEC E 各 chip）
- **段末 SEC E 禁 exit fade**（§18，seg05 不是 outro）。4 头像 + Anthropic logo hold 静止 hard cut 到 seg06
- 头像素材：daniela_candidate / tombrown_candidate 在写 v1 前先核对本人，候选错图用灰头像占位

---

## 6. preview 验证点

- `npx hyperframes lint` 0 errors
- `npx hyperframes validate` 0 contrast warnings
- preview scrub 验证（绝对全片时间码 = 522 + 段内时间）：
  - `t=523`：SEC A 起，Karpathy 肖像 fade-in
  - `t=540`：SEC A 中，Joseph 推文卡入场
  - `t=549`：SEC A 末，循环箭头 hold
  - `t=553`：SEC B 起，模型核心 + chip 吸入
  - `t=574`：SEC B 末，3 副本被横线划过变灰
  - `t=581`：SEC C 起，上下两层劈开
  - `t=599`：SEC C GLOW，第 5 窗光柱升起
  - `t=608`：SEC C 末，chrome 字 `agent 干活 · 人在把关`
  - `t=611`：SEC D-1 起，方向 ① 左卡
  - `t=622`：SEC D-1 末，方向 ② 右卡 + 双卡对比
  - `t=633`：SEC D-2 起，时间轴入场
  - `t=648`：SEC D-2 末，深棕大字 `这是这次跳槽 · 最有重量的事`
  - `t=657`：SEC E 起，暗场 + Anthropic logo
  - `t=663-671`：4 头像 stagger 亮起
  - `t=674`：SEC E 末，4 头像 + Anthropic logo hold（最后一帧）
  - `t=675`：seg06 第一帧应接上，seg05 无 exit fade

---

## 7. 不做的事（防漂移清单）

- ❌ 不展开 OpenAI → Anthropic 创始团队的完整因果（那是 seg06 汇流的事，seg05 只埋钩）
- ❌ 不画三组对位（Wiki↔Memory / vibe↔CC / Eureka↔Academy）——seg06 高潮的事
- ❌ chrome 大字不超过 1 次（SEC C 末唯一），避免抢 seg06 高潮位
- ❌ SEC E 不做 exit 动画 / 不淡出 / 不切到 seg06 的"过场"（hard cut）
- ❌ 不用真实"OpenAI 离职"剪辑或新闻头条卡——本段是"亮相 + 揭示身份"，不是新闻溯源
- ❌ daniela_candidate / tombrown_candidate 候选错本人时**不要硬贴**——用灰头像占位 + 真名 chip
- ❌ cc-window 用零件不重写（templates/components/cc-window）
- ❌ vibe-coding-tweet / LLM Wiki 缩略图复用 seg02 已有素材，不重画 mock

---

## 8. 待办 (写 v1 前必须做)

1. **抓 Nick Joseph 推文真截图**（关键素材）：grok-search 找 Joseph 推文 URL（关于 Karpathy 用 Claude 加速 pre-training）→ playwright screenshot → 存 `assets/tweets/joseph-team.png`
2. **核对头像候选**：grok-search 双源确认 daniela_candidate.png 是否为 Daniela Amodei 本人 / tombrown_candidate.png 是否为 Tom Brown 本人；如错本人，用灰头像 SVG 占位
3. **Anthropic 创始团队事实台账**：写入 `研究/03-anthropic-events.md` §5 新增段（Dario / Daniela 2021 离开 OpenAI 创办 Anthropic 历史 + GPT-3 主作者团队加入路径 + 双源核对）
