# PLAN-seg04-ch4-wrapper — Wrapper 从贬义到产品 + 洋葱剖面 + 主持稿例子

> 本段适用 §7（SRT 真源）/ §8（段内时间从 0）/ §10（SEGMENT_DURATION + tl.set 撑满）/ §11（cutaway）/ §12.a-b（preview 验过 + commit）/ §13（资料台账）。seg03→seg04 默认 hard cut，HOT 数据冲击之后立刻进 COOL 命名段。

- **段编号**：seg04（章别名 ch4）
- **段长**：201.0s
- **全片位置**：5:21 → 8:42（字幕 104-177，74 条）
- **形态**：cutaway
- **真源**：`字幕/加入之后.srt` 第 104-177 条

---

## 0. 重做红线（基于 codex v1 翻车）

旧 v1（commit 608661f）被否决两点 → 本 PLAN 必须解决：

1. **视觉太 mock 太 PPT**：评论区/产品卡/CLAUDE.md 都靠 HTML 仿样式 → 本段**凡是真实存在的物**（Cursor / Perplexity / Claude Code / CLAUDE.md / Subagents / Hooks / MCP），一律用 `参考图/seg04-official-visuals/` 7 张官方截图**真贴**或局部裁切，禁 div 仿样式。**抽象比喻**（洋葱剖面、跑分迷雾、增益条）允许手画，但要贴真实物件作锚（每层洋葱配 1 张真文档截图局部）。
2. **节奏太静 / 太均匀**：5 SEC 一个节奏走完整段 → 每 SEC **必须有节奏标签**（COOL / COLD→HOT / WARM / STILL→GLOW / CHAOS→RESOLVE），整段密度差异要肉眼可分。SEC 之间 hard cut，不要淡入淡出柔接。每 SEC 只允许 1 个 hot moment，其余靠 WARM/STILL 衬托。

---

## §13 资料台账

### 官方文档 / skill

- `hyperframes`：visual identity → end-state layout → GSAP timeline 顺序；scene-content 用 flex/grid 不靠 absolute。
- `gsap`：position parameter `"<"` `"<0.5"` `">"`、label、`autoAlpha` 替代 opacity+visibility、stagger 入场。
- `docs/HARD_CONSTRAINTS.md`：N9 selector / N15 字体硬编码 / N17 米色底 contrast / N18 段末禁 exit / N19 commit 节奏。

### 事实复核（2026-05-22 grok-search 双源 + Tavily extra_sources=2）

- **Anthropic 产品发布时间**（anthropic.com 官方公告）：
  - Claude Code — 2025.02.24（与 Claude 3.7 Sonnet 同期）
  - Subagents + Hooks — 2025.09.29（`enabling-claude-code-to-work-more-autonomously` 公告同包）
  - Skills（Agent Skills）— 2025.10.16
  - CLAUDE.md memory — **不是新功能**，2025.02 跟 Claude Code 同期诞生（不放进 SEC A 时间线，留到 SEC D 洋葱外层 + SEC E 主戏）
- **lmarena.ai 2026-05 真实 top + DeepSeek**（openlm.ai mirror + benchlm.ai 双源）：
  - GPT-5.5-high — 1506 ↗
  - Claude Opus 4.7 Thinking — 1505 ↗
  - Gemini-3.1-Pro — 1505 →
  - DeepSeek-V4-Pro — 1467 ↘（实际约 #10，但 SRT 字幕 139 Karpathy 自己列了它，所以视觉保留）
  - **elo 实时变化**——加 `lmarena.ai · 2026-05 snapshot` source badge 标明快照

### 真实素材清单（**全部已就位，禁再画 mock**）

| 文件 | 用在哪 |
|---|---|
| `参考图/seg04-official-visuals/01-cursor-home.png` | SEC B 反转幕：产品反转的第 1 张 |
| `02-perplexity-home.png` | SEC B 反转幕：第 2 张 |
| `03-claude-code-overview.png` | SEC B 反转幕：第 3 张；SEC C 工作台 3 局部；SEC D 层 1 局部 |
| `04-claude-code-memory.png` | SEC D 层 4；SEC E CLAUDE.md 注入 |
| `05-claude-code-subagents.png` | SEC D 层 2 |
| `06-claude-code-hooks.png` | SEC D 层 3 |
| `07-mcp-intro.png` | SEC D 层 3（与 06 拼） |

### Logo（从仓库根 `assets/logos/` 拷到本工程 `assets/logos/`）

`claude.svg` `claudecode.svg` `cursor.svg` `gemini.svg` `geminicli.svg` `deepseek.svg` `openai.svg` `perplexity.svg`。已有：`anthropic.svg`。

### 参考工程

- `compositions/seg02-gainian.html`：5 SEC + 真截图 + cc-window 组件复用。
- `compositions/seg03-momentum.html`：HOT 数据冲击的节奏（本段 SEC B 反转幕沿用其 ripple+screen shake 模板）。
- 不参考 `compositions/seg00-ch0-cold-open.html` 的"撞击"节奏——cold-open 太 HOT，本段要 WARM 化。

### 官方零件清单（templates/components/ 已抽）

| 零件 | 用途 | 用在哪 |
|---|---|---|
| `cc-window` | Claude Code 终端 UI（5 种场景 + statusline） | SEC C 工作台 1-3 / SEC E 主持稿聊天框 |
| `shake-error` | csshake 中等强度 820ms 抖动 + danger 染色 | SEC E v1-v4 稿件卡被红笔打回的抖动 |
| `spec-fill` | 拆解卡逐行填充（key 先出 + val 蹦入） | SEC E CLAUDE.md 三条规则 |
| `text-effects.char-scramble` | Matrix 风字符解码 | SEC E CLAUDE.md 三条规则入场（解锁感）|
| `text-effects.token-chunks` | LLM 流式 chunks 入场 | SEC E v1-v4 稿件出现（ChatGPT 在写的感觉） |
| `shimmer-sweep`（catalog component） | 光扫过 mask | SEC D GLOW 段 5 层全亮的横扫 |

### 不用的 catalog

- `flowchart` / `data-chart` / `card-stack` / `vfx-text-cursor` / `apple-money-count`：都是 demo block，本段 201s 长段时序自己控更稳。`apple-money-count` 风格跟 XCYJ DNA 冲突；`vfx-text-cursor` shader 渲染太慢。

---

## 1. 字幕条对应 + SEC 切分 + 节奏标签

> 切分按 SRT 句号 / 语义自然停顿走，**不强行 5 段平均**。

| SEC | 字幕条 | 段内时间 | 段长 | 节奏 | 主题 |
|---|---|---|---:|---|---|
| A | 104-111 | 1.2-20.6s | 19.4 | **COOL** | 两条平行线被命名为 Wrapper |
| B | 112-124 | 20.6-53.4s | 32.8 | **COLD → HOT** | 2023 嘲讽 → 2025 反转 |
| C | 125-136 | 53.4-85.1s | 31.7 | **WARM** | 跑分迷雾 → 工作台真相 |
| D | 137-153 | 85.1-134.0s | 48.9 | **STILL → GLOW** | 洋葱剖面 5 层逐层揭示 |
| E | 154-177 | 134.0-201.0s | 67.0 | **CHAOS → RESOLVE** | 主持稿 v1-v5 → CLAUDE.md 注入 → 一轮可用 |

合计：19.4 + 32.8 + 31.7 + 48.9 + 67.0 + 1.2（起始留白）= **201.0s** ✓

每 SEC 之间用 hard cut（§9）；只在 SEC E 内部允许 RESOLVE 段的小幅淡入收束（不算 exit），段末禁 exit fade（§18）。

---

## 2. metaphor 表（语义扩展，禁字幕直译）

| 口播 | SEC | 视觉语义扩展 |
|---|---|---|
| "卡帕西和 Anthropic 上演的一个关键 / 同一个理念" | A | 两条独立时间线（左 Karpathy 概念产出 / 右 Anthropic 产品发布）从 2025.02 推到 2026.05，节点 stagger 亮起，两条线**没有相交**——只是平行 |
| "理念有一个名字叫 Wrapper / 套壳" | A | 两条线末端各伸出一条引导线，**汇聚到屏幕中央**一个空白方框 → 方框被命名 `Wrapper` / 中文小字 `套壳`。这是 SEC A 的唯一 hot moment |
| "2023 套壳是贬义" | B 幕 1 | 时间刻度回拉到 2023，模型核心被一个透明塑料外壳套住，外壳上**用红笔贴**三条嘲讽标签（每条 0.4s 入场）：`没技术含量` / `就是接 API` / `谁都能做`。COLD 阶段密度低 |
| "2025 风向变了 / Cursor Perplexity Claude Code" | B 幕 2 | 时间快进 2023→2025，塑料外壳"破裂"，里面长出三张**真截图**（不是 logo 卡）：Cursor / Perplexity / Claude Code 官方页面截图横排，每张配一个小标签 `workflow` / `answer engine` / `agentic terminal`。HOT 起势 |
| "Wrapper 才是产品" | B 末 | chrome 大字砸入屏幕中央，三张产品截图作背景虚化。**全段唯一最重的 hot moment** |
| "大多数人谈论 AI 从模型出发 / 跑分" | C 前 | 跑分迷雾：GPT / Claude / Gemini / DeepSeek 4 个 logo 在背景上下浮动像股票 tick，前景叠"跑分 leaderboard"风格的柱形条。**故意做密集 + 嘈杂**，让观众感觉信息过载 |
| "模型虽然重要 / 但深度使用过会发现" | C 中 | 跑分迷雾后撤、虚化（不消失），右侧切入一个干净工作台 |
| "同一个模型不同的人 不同客户端 效果天差地别" | C 后 | 同一颗模型核心**串到三个工作台**：① 朴素网页聊天（输出泛泛建议）② 普通客户端（半成品）③ Claude Code 真截图局部 + 项目文件夹（精确命中）。三张输出卡质量递增可视化 |
| "差距在 Wrapper" | C 末 | 小 chip 收束，不抢 SEC B 的 chrome 大字。WARM 段不要爆发 |
| "把模型放在中心 一层层套" | D 起 | 屏幕从 SEC C 工作台**横向滑入**洋葱剖面。剖面是**水平展开**，不是同心圆：模型核心在最左（小球，Claude 橙），向右逐层展开 |
| "Claude Code / CLI" | D 层 1 | 解锁第 1 层，贴 `03-claude-code-overview.png` 局部（终端窗口部分），标签 `Client / CLI` |
| "Skills / Agent Teams / 子智能体" | D 层 2 | 解锁第 2 层，贴 `05-claude-code-subagents.png` 局部，标签 `Capabilities` |
| "Hooks / MCP / 事件和协议" | D 层 3 | 解锁第 3 层，贴 `06-claude-code-hooks.png` + `07-mcp-intro.png` 局部拼，标签 `Protocol` |
| "记忆 / CLAUDE.md / 上下文环境" | D 层 4 | 解锁第 4 层，贴 `04-claude-code-memory.png` 局部，标签 `Context` |
| "整体的才会构成真正用的产品" | D 末 | 5 层全亮（模型核心 + 4 层 wrapper）→ 镜头拉远 → 一道光从左扫到右 → 整个剖面被一圈 Claude 橙 halo 包住。chrome 小字 `整体才是产品`（**比 SEC B 收束小一档**，避免抢戏） |
| "我自己使用 Claude Code 几个月" | E 进 | 镜头切到一台抽象工作台（用 cc-window 组件 + 项目文件夹缩影）。**不再用真截图**——这是个人体感，要"我的"工作台感，不是官方文档 |
| "模型每次升级强的并不多 100→105" | E 进 | 小条形 chip `Model upgrade 100 → 105`，长度故意短 |
| "我想让它写一段主持稿 / 反复 4 5 轮" | E CHAOS | 左侧聊天窗连续吐 v1 v2 v3 v4，每张稿件卡被**红笔划掉**：`腔调不对` `表达被改` `不能直接用` `又要解释一遍`。节奏密集、快、有挫败感（CHAOS）|
| "后来把 CLAUDE.md 写好" | E TURN | CLAUDE.md 文件从屏幕外**滑入**展开（参考 `04-claude-code-memory.png` 的真文件结构感，但内容是小陈的：`我是谁` / `我在做什么` / `我要什么语气`）。这是 SEC E 的 turn point |
| "同一个模型 一轮就能产生可以直接使用的" | E RESOLVE | CLAUDE.md 关闭 → 右侧弹出 v_final 稿件卡，**盖章 `一轮可用`**。左 v1-v5 红笔堆 vs 右 v_final 干净，强对比 |
| "差距就在套壳上 / 不需要等更好的模型" | E 末 | 两个增益条对比：① `模型升级` 100→105（短）② `Wrapper 增益` 空白环境→项目化环境（长，Claude 橙 glow）。收束 chrome 大字：**模型没换，环境变了** |

---

## 3. 视觉骨架（每 SEC 一段，重点说节奏）

### SEC A · 命名（1.2-20.6s，COOL）

- 0-1.2s 起始留白：承接 seg03 hard cut，整片降密度
- 1.2-8s：左时间线（Karpathy 4 节点，**全部双源已核**）：
  - vibe coding 2025.02 / context engineering 2025.06 / autoresearch 2026.03 / LLM Wiki 2026.04
  - stagger 入场，每节点 0.6s
- 8-15s：右时间线（Anthropic 4 节点，**2026-05-22 已核 anthropic.com 双源**）：
  - Claude Code 2025.02 / Subagents 2025.09 / Hooks 2025.09 / Skills 2025.10
  - stagger 入场，每节点 0.6s
  - Memory / CLAUDE.md **不放进时间线**（它跟 Claude Code 同期 2025.02 诞生，不是新功能；留到 SEC D 外层 + SEC E 主戏）
- 15-19s：**两条线末端引导线**指向中央空白方框 → 方框被命名 `Wrapper` 大字（不要 chrome，普通深棕大字即可，留 chrome 给 SEC B/E 高潮）+ 小字 `套壳`
- 19-20.6s：两条线变淡作背景，名字 hold

**密度控制**：节点逐个亮起，文字小、不抢戏。这段是"舞台搭建"。

### SEC B · 反转弧（20.6-53.4s，COLD → HOT）

- 20.6-22s：hard cut。中央出现 2023 年份大字（小一档）。模型核心从中央生长出来，外面套一层灰色塑料壳
- 22-30s（COLD）：三条嘲讽标签 stagger 贴到塑料壳上（每条 ~0.4s + ~2s 间隔）。每贴一条，塑料壳变模糊一档。**整段密度低、安静**
- 30-32s：时间刻度从 2023 **快速推到 2025**（数字 ticker 滚动），塑料壳爆开
- 32-50s（HOT）：三张真截图横排入场：
  - 32-37s：`01-cursor-home.png` 从塑料壳碎片中长出，配标签 `workflow`
  - 37-42s：`02-perplexity-home.png` 长出，配标签 `answer engine`
  - 42-47s：`03-claude-code-overview.png` 长出，配标签 `agentic terminal`
  - 47-50s：三张截图后退作背景虚化
- 50-53.4s：**chrome 大字砸入屏幕中央**：`Wrapper 才是产品` + 小字 `from joke to product`。这是全段最强 hot moment

**hot moment 设计**：chrome 大字入场用 MOTION_NOTES §3 同帧合成（白闪 + ripple + screen shake + glow burst 5 元素 ±0.05s 内）

### SEC C · 跑分迷雾 → 工作台（53.4-85.1s，WARM）

- 53.4-55s：hard cut。背景变成"AI Leaderboard"——4 行 stagger 入场（**真模型名**，elo 是 2026-05 lmarena snapshot 真实值）：
  - `#1 gpt-5.5-high           1506  ↗`
  - `#2 claude-opus-4.7-thinking 1505  ↗`
  - `#3 gemini-3.1-pro         1505  →`
  - `#4 deepseek-v4-pro        1467  ↘`
  - 右上 source badge：`lmarena.ai · 2026.05 snapshot`
- 55-65s：排名数字**上下跳动**（每行 elo 在真值 ±5 之间随机 tick，1.5s 周期），表达"实时变化"。前景叠 3 条小字 benchmark 名：`MMLU` / `Math` / `Coding`（不写具体分数，避免编造）
- 65-70s：leaderboard 整体收到左上角，变 30% 大小、虚化。右侧出现安静的字：`但是真的用过的人会发现……`
- 70-82s：右侧展开三个工作台（每个 4s），用 **cc-window 组件**真做：
  - 70-74s：① 朴素聊天（cc-window 简化变体，输出 `这里有几种方法可以试试……`）
  - 74-78s：② 普通客户端（cc-window 标准变体，输出 `1. 步骤一 2. 步骤二`）
  - 78-82s：③ `03-claude-code-overview.png` 局部 + cc-window 项目化变体（输出 `针对当前项目的 v_final.md`）
- 82-85.1s：三个工作台底部出现质量条 stagger（松散 / 半成品 / 项目化），chip 收束 `差距在 Wrapper`（小字）

**密度控制**：前 12s 密集嘈杂 → 后 20s 安静对比。WARM 不爆发。

### SEC D · 洋葱剖面（85.1-134.0s，STILL → GLOW）

- 85.1-87s：hard cut。从 SEC C 工作台横向滑入水平剖面：模型核心（小球，Claude 橙 glow）出现在屏幕最左
- 87-93s（STILL）：标签 `Model: Claude / GPT / Gemini / DeepSeek` 在核心球周围逐个亮起（**只显示名字，不显示比较**——这里不是 SEC C 的跑分榜）
- 93-100s：解锁层 1。从核心球向右**生长出**一圈半透明壳层，贴 `03-claude-code-overview.png` 终端窗口部分（裁切 30% 大小），标签 `Client / CLI`
- 100-110s：解锁层 2。再向右生长，贴 `05-claude-code-subagents.png` 局部，标签 `Capabilities · Skills + Agent Teams`
- 110-120s：解锁层 3。生长，贴 `06-claude-code-hooks.png` + `07-mcp-intro.png` 上下拼合，标签 `Protocol · Hooks + MCP`
- 120-128s：解锁层 4。生长到最右，贴 `04-claude-code-memory.png` 局部，标签 `Context · Memory + CLAUDE.md`
- 128-132s（GLOW）：5 层全亮 → 镜头拉远 + 一道光从左扫到右（**shimmer-sweep 组件**作 mask 横扫）+ 整个剖面被 Claude 橙 halo 圈住
- 132-134s：chrome **小字**（不大字）`整体才是产品`，hold

**密度控制**：每层解锁 ~7-10s，stagger 节奏稳定，**像 X 光扫描**。GLOW 短暂 4s，比 SEC B chrome 大字一档。

### SEC E · 主持稿例子（134.0-201.0s，CHAOS → RESOLVE）

- 134-138s：hard cut。镜头切到抽象工作台：**cc-window 组件**框 + 一个项目文件夹缩影。标签 `小陈的工作台 · Claude Code 几个月`
- 138-148s（进入 + 100→105）：
  - 短 chip：`Model upgrade: 100 → 105`（条形条短）
  - 旁白叙述同步：`每一次模型升级 强的并不多`
- 148-178s（CHAOS · 30s）：
  - 148-150s：左侧聊天窗框打开（cc-window），标签 `写一段主持稿`
  - 150-155s：v1 稿件卡用 **text-effects.token-chunks** 流式入场，停顿 0.4s 后用 **shake-error** 抖动 + 红笔批注 `不是我会说的话`
  - 155-160s：v2 同上，红笔 `不是我要的感觉`
  - 160-165s：v3 同上，红笔 `还是得重写`
  - 165-170s：v4 同上，红笔 `不在点上`
  - 170-178s：4 张红稿堆在左侧，stagger 微抖表达挫败感
  - **节奏密集、快、有失败感**
- 178-188s（TURN · 10s）：CLAUDE.md 文件从屏幕外**滑入**展开，用 **spec-fill 组件**做拆解卡：
  - 文件名小字：`./CLAUDE.md`（mono 字体，参考 04-claude-code-memory.png 的真文件感，**禁黄色便签纸**）
  - 顶部 H2：`## 主持稿风格`
  - 三条规则 stagger 入场（key 字先出，val 用 **text-effects.char-scramble** 解码填入）：
    - `- 谜语开场 + 金句`
    - `- "哦" 不动 / 表达不能被改`
    - `- 结尾报门下期预告`
- 188-195s（RESOLVE）：CLAUDE.md 关闭。右侧弹出 `v_final` 稿件卡（**token-chunks** 流式生成，一次成型），盖章 `一轮可用`（Claude 橙圆章）。左 v1-v4 红笔堆 vs 右 v_final 干净版**并排对比**
- 195-201s（收束）：
  - 两个增益条 stagger 对比：
    - 上：`模型升级 100 → 105`（短，灰色）
    - 下：`Wrapper 增益 空白 → 项目化`（长，Claude 橙 glow）
  - 末 4s：chrome 大字收束 `模型没换，环境变了`（chrome 大字第 2 次，全段第 2 次也是最后一次）
  - 201s 末：hold，禁 exit fade（§18）

**密度控制**：CHAOS 30s 故意密集失败感（高密度对挫败感的支撑）→ TURN 10s 安静干预（CLAUDE.md 严肃专业）→ RESOLVE 13s 强对比 + 收束。这是全段第二个 hot moment（chrome 大字 195-201s）。

---

## 4. index.html 挂载

在 seg03 后追加：

```html
<!-- seg04 ch4 wrapper：从贬义到产品 + 洋葱剖面 + 主持稿例子 (5:21-8:42, 字幕 104-177) -->
<div
  class="clip"
  id="seg04-wrapper"
  data-composition-id="seg04-wrapper"
  data-composition-src="compositions/seg04-wrapper.html"
  data-start="321"
  data-duration="201"
  data-track-index="1"
  data-width="1920"
  data-height="1080"
></div>
```

- `data-start="321"`：38 + 112 + 80 + 91 = 321s
- `data-duration="201"`

---

## 5. 实现红线

- `SEGMENT_DURATION = 201.0`；段末 `tl.set({}, {}, SEGMENT_DURATION)` 撑满
- CSS selector 全部 `[data-composition-id="seg04-wrapper"] ...`，禁用 `#seg04-wrapper`（§9 bundler strip）
- GSAP selector 硬编码字符串，禁 template literal（§1）
- 字体硬编码 `"Noto Sans SC", "Inter", sans-serif` / `"JetBrains Mono", monospace`，禁 CSS var（§15）
- 米色底正文色：`#5A4F46` / `#8b3d28` / `#B5563D`，禁低对比 Claude 橙正文（§17）
- 真截图用 `<img>` 标签，不要 `background-image`（方便 lint 检查 + render dom 友好）
- SEC 切换用 `tl.set('.sec-x', { autoAlpha: 0 }, T)` + 下一 SEC 入场，**禁 SEC 退场动画**
- chrome 大字全段只允许 2 次：SEC B 末（50-53s `Wrapper 才是产品`）+ SEC E 末（197-201s `模型没换，环境变了`）。其余用普通深棕大字
- 整个 composition 禁出现"Karpathy 头像"特写——这是观点段，不是人物段（人物段是 seg01）

---

## 6. preview 验证点

- `npx hyperframes lint` 0 errors
- `npx hyperframes validate` 0 contrast warnings
- preview scrub 验证：
  - `t=322`：SEC A 起，两条平行时间线
  - `t=340`：SEC A 末 `Wrapper / 套壳` 名字 hold
  - `t=343`：SEC B 起，2023 塑料壳
  - `t=371`：SEC B 末 chrome 大字 `Wrapper 才是产品`
  - `t=375`：SEC C 起，跑分迷雾
  - `t=407`：SEC C 末 `差距在 Wrapper`
  - `t=410`：SEC D 起，洋葱核心 + Model 标签
  - `t=455`：SEC D 末 5 层全亮 + halo
  - `t=458`：SEC E 起，工作台
  - `t=490`：SEC E CHAOS 中，v1-v4 红笔堆
  - `t=506`：SEC E TURN，CLAUDE.md 展开
  - `t=518`：SEC E RESOLVE，`v_final 一轮可用` 盖章
  - `t=521`：SEC E 末 chrome 大字 `模型没换，环境变了`
  - `t=522`：seg05 第一帧应接上，seg04 末尾无 exit fade

---

## 7. 不做的事（防漂移清单）

- ❌ 不画静态同心圆洋葱图（横向剖面 + 真截图局部贴层）
- ❌ 不画 logo 卡片来表达 Cursor / Perplexity / Claude Code（用真截图）
- ❌ 不画 v1-v5 完整段落（红笔批注 + 卡片震动表达挫败感即可，避免信息密度爆炸）
- ❌ 不画 CLAUDE.md 黄色便签（真文件感，参考 `04-claude-code-memory.png`）
- ❌ chrome 大字不超过 2 次（防止 SEC B/E hot moment 互相抢戏）
- ❌ SEC 之间不淡入淡出（hard cut 才能凸显节奏对比）
- ❌ 不重做"Karpathy 头像跟随"——这段是观点段
