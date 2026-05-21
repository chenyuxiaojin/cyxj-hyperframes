# PLAN-seg04-ch4-wrapper — Wrapper 从贬义到产品 + 洋葱图 + 主持稿例子

> 本段适用 §7（SRT 真源）/ §8（段内时间从 0）/ §10（SEGMENT_DURATION + tl.set 撑满）/ §11（形态 cutaway）/ §12.a-b（preview 验过 + commit）/ §13（资料台账）。seg03→seg04 依默认 hard cut，HOT 数据冲击后降到 WARM 观点慢推。

- **段编号**：seg04（章别名 ch4）
- **段长**：201.0s（SEGMENT_DURATION 常量取 201.0）
- **全片位置**：5:21 → 8:42（字幕条 104-177，共 74 条）
- **形态**：cutaway
- **真源**：`字幕/加入之后.srt` 第 104-177 条
- **事实基线**：`研究/02-concepts.md` §2 Context Engineering + 本段 SRT 的 Claude Code 使用体感
- **节奏定位**：WARM 观点段。seg03 用数据证明 Anthropic momentum，seg04 解释为什么“套壳”不是低技术，而是 AI 产品真正的差异层。

## §13 资料台账

### 官方文档 / skill 约束

- 读了 `hyperframes` skill：本段先定 visual identity、end-state layout，再写 GSAP；scene-content 用 flex/grid padding，不用大面积 absolute 定位。
- 读了 `hyperframes-registry` skill：catalog block 是 demo 模板，不把 data-chart / flowchart 当参数化零件直接挂载。
- 读了 `gsap` skill：动画用 timeline labels / position parameter，入场 stagger 用相对位置；后续 fromTo 非 0 起点需要 `immediateRender:false`。
- 读了 `docs/HARD_CONSTRAINTS.md`：遵守 N9 selector、N15 字体硬编码、N17 米色底 contrast、N18 SEC 末尾禁 exit 动画、N19 commit 节奏。

### 参考工程

- 参考 `compositions/seg02-gainian.html`：概念段用 5 SEC 分段、每段都有明确 metaphor，不把字幕逐字做成卡片。
- 参考 `compositions/seg03-momentum.html`：沿用米色底、chrome 大字、chip stagger、source badge 的视觉语言，但把节奏从 HOT 降为 WARM。
- 参考 `PLAN-cold-open.md`：保持每个 SEC 一个 hot visual moment，避免 201s 长段变成静态 PPT。

### 官方视觉参考（本次补充）

> 用户反馈后补：本段涉及 Cursor / Perplexity / Claude Code / MCP 等真实产品与官方概念，不能只靠抽象联想。已用本机 Chrome headless 抓官方页面截图，落地到 `参考图/seg04-official-visuals/`。这些是**结构和视觉语言参考**，不是直接整张贴图。

| 文件 | 官方来源 | 可借的视觉表现 | 用在哪 |
|---|---|---|---|
| `01-cursor-home.png` | `https://cursor.com/` | 官方首页有 Cursor Desktop / CLI 的互动 demo、任务状态如 `In Progress` / `Reading docs`；借“真实产品工作台 + 任务流” | SEC B 的 Cursor 产品卡；SEC C 的项目化 wrapper 输出 |
| `02-perplexity-home.png` | `https://www.perplexity.ai/` | 首页截图较弱，仅作弱参考；概念以官方 Help Center 的 public answer engine / retrieval infrastructure 为准 | SEC B 的 Perplexity answer engine 产品卡 |
| `03-claude-code-overview.png` | `https://code.claude.com/docs/en/overview` | 官方文档明确把 Claude Code 表述为 terminal 中的 agentic coding tool，并列 MCP、CLAUDE.md、skills、hooks、agent teams | SEC B 的 Claude Code 产品卡；SEC D 的层级总参考 |
| `04-claude-code-memory.png` | `https://code.claude.com/docs/en/memory` | CLAUDE.md 的 scope / load order / auto memory 是官方结构，不是随便写的“记忆卡” | SEC D 外层 Context；SEC E 的 CLAUDE.md 注入 |
| `05-claude-code-subagents.png` | `https://code.claude.com/docs/en/sub-agents` | subagents 是独立 context window + specific tools 的 worker；视觉应像分离小工作间，不是普通 chip | SEC D 的 Agent Teams / subagents 层 |
| `06-claude-code-hooks.png` | `https://code.claude.com/docs/en/hooks` | hooks 是生命周期事件表：PreToolUse / PostToolUse / Stop / SubagentStart 等；视觉应像事件总线 | SEC D 的 Hooks 层 |
| `07-mcp-intro.png` | `https://modelcontextprotocol.io/docs/getting-started/intro` | MCP 官方用 USB-C 类比连接 AI apps 和外部 systems；视觉应像标准接口/端口 | SEC D 的 MCP 层 |

### 官方事实锚点

- Cursor 官方首页：定位是 AI code editor，页面自带 Desktop / CLI 多界面 demo 和任务流状态。
- Claude Code 官方 overview：Claude Code 在终端中工作；MCP 连接外部数据源；CLAUDE.md、skills、hooks、agent teams 都是官方产品层。
- Claude Code memory 官方页：CLAUDE.md 有不同作用域，auto memory 会跨 session 保存学习到的项目知识。
- Claude Code subagents 官方页：subagents 有独立上下文、专门工具和任务分工。
- Claude Code hooks 官方页：hooks 是固定 lifecycle events，不是泛泛“自动化”。
- MCP 官方 intro：MCP 是把 AI 应用连接到外部系统的开放标准，可借 USB-C / 标准端口隐喻。
- Perplexity 官方 Help Center：public answer engine 背后是 retrieval infrastructure，适合用“检索层 + 答案卡”表现。

### 零件复用

- 复用工程已有全局四件套：grid / vignette / grain / crosshair。
- 从仓库根 `assets/logos/` 补拷贝到本工程：`cursor.svg`、`perplexity.svg`、`claudecode.svg`、`gemini.svg`、`deepseek.svg`（如实现时确实使用）。
- 复用 `assets/logos/claude.svg`、`openai.svg`、`anthropic.svg`，并注意 SVG `currentColor` 不继承 `<img>` 的坑。
- 不使用真实截图 mock 用户稿件；主持稿例子是用户个人体感，不需要外部页面截图，视觉以“稿件版本卡 + CLAUDE.md 记忆层”表达。

### catalog 候选

- `flowchart`：候选但不用。原因：本段 onion / wrapper 层级要贴合本片专有术语，直接手写更可控。
- `card-stack` 类 block：不用。catalog 是 demo 模板，手写 201s 长段时序更少风险。

## 0. Mismatch 记录

`PROJECT-STATE.md` 与 `INTEGRAL-RHYTHM-MAP.md` 原写 seg04 字幕条 104-176，但 SRT 第 177 条：

> 00:08:39,899 --> 00:08:41,899  把这一个模型更好的去使用

它是 seg04 “不需要等更好的模型，而是学会更好使用模型”这句话的完整收束；第 178 条已经进入 seg05 “这也是为什么卡帕西加入 A 社之后”。所以本 PLAN 将 seg04 边界修正为 **104-177**，并同步回改状态文档。

## 1. 字幕条对应表 + SEC 切分

> 2026-05-21 复核：本段不能只按“概念块”平均分。SRT 的真实重心是 **前 85s 建立 Wrapper 反转，49s 解释洋葱结构，最后 66s 用用户自己的 Claude Code 主持稿例子落地**。所以视觉节奏必须把最后的个人例子做成主戏之一，而不是短结尾。

| SEC | 字幕条 | 段内时间 | 全片时间码 | 主题 |
|---|---|---:|---|---|
| A | 104-111 | 1.20-20.60s | 5:22.16-5:41.60 | Karpathy 与 Anthropic 的共同理念：让人更好使用 AI，这个理念叫 Wrapper |
| B | 112-124 | 20.90-53.40s | 5:41.96-6:14.40 | 2023 “套壳”是贬义，到 2025 Cursor / Perplexity / Claude Code 证明 wrapper 才是产品 |
| C | 125-136 | 53.90-85.10s | 6:14.93-6:46.10 | 大众还盯模型跑分，但同一模型在不同客户端、不同人手里效果天差地别 |
| D | 137-153 | 85.10-134.00s | 6:46.10-7:35.00 | 洋葱图：模型内核 → Claude Code → Skills / Agent Teams → Hooks / MCP → Memory / CLAUDE.md |
| E | 154-177 | 134.60-201.00s | 7:35.63-8:41.90 | 个人体感：模型升级 100→105，但 CLAUDE.md + Skills + 项目上下文让主持稿一轮可用 |

节奏留白：0.0-1.2s 承接 seg03 hard cut 后的视觉降噪；各 SEC 之间的 0.3-0.6s 空隙用当前画面 hold + grid pulse，不提前露下一句关键词。

合计：约 20s + 32.5s + 31.2s + 48.9s + 66.4s + 起始留白 = **201.0s**。

## 2. metaphor 表

| 口播关键词 | 字幕条 | 字面 | 语义扩展（要做的） |
|---|---|---|---|
| “上演的一个关键” | 104 | 关键关系 | 两个已经分开的阵营被拉回同一个坐标系：Karpathy 线 / Anthropic 线同时亮起，观众先看到“它们不是偶然相遇” |
| “同一个理念 / 平行走了一年” | 105-109 | 理念相同 | 两条平行轨道不是简单连线，而是两套工作台并行推进：左边 Karpathy 的概念文件，右边 Anthropic 的产品/服务栈，时间刻度从 2025 推到 2026 |
| “Wrapper / 套壳” | 110-111 | 术语解释 | 一个透明外壳先扣在模型核心上，字幕说“套壳”时壳体被命名；不要直接只打大字，要让“壳”这个物体出现 |
| “2023 贬义词” | 112-118 | 被嘲讽没技术含量 | 画面变成评论区/评审台：外壳被贴上 `只是接 API`、`没技术含量`、`谁都能做`，模型核心被轻视地丢在廉价包装盒里 |
| “2025 风向变了” | 119-124 | 产品反转 | 包装盒翻开变成真实产品货架：Cursor / Perplexity / Claude Code 三张 logo 产品卡从“壳”里长出 workflow / distribution / context 三个能力模块 |
| “大多数人从模型出发” | 125-129 | 跑分视角 | 大模型竞技场：GPT / Claude / Gemini / DeepSeek 在跑分榜上争第一，画面故意像排行榜，表达“大家被模型分数吸走注意力” |
| “深度使用后发现” | 130-136 | 真实使用差异 | 同一颗模型核心被插入三台机器：裸聊天、普通客户端、项目化 Claude Code；输出物从“泛泛建议”变成“能直接进项目的结果” |
| “把模型放在中心 / 一层层套” | 137-140 | 开始剖面 | 从模型核心切成剖面，不是静态洋葱海报；镜头像 CT 扫描一样向外推，每说一层才长出一层 |
| “Claude Code / Skills / Agent Teams / Hooks / MCP / Memory / CLAUDE.md” | 141-151 | 功能层级 | 每层都对应动作：CLI 接住任务，Skills 装工具，Agent Teams 分工，Hooks/MCP 连外部事件和协议，Memory/CLAUDE.md 写入用户身份和项目约束 |
| “整体构成真正产品” | 152-153 | 系统成品 | 五层合成一个可运行的产品剖面，模型核心仍在中心，但光从外层上下文/工具链发出来 |
| “我自己使用 Claude Code” | 154-161 | 个人体验 | 场景切到小陈的工作台：同一个项目文件夹、CLAUDE.md、skills chips 逐个插上，体现“不是抽象理论，是我每天这么用” |
| “写一段主持稿 / 四五轮探讨” | 162-168 | 写稿低效 | 左侧聊天窗口连续吐出 v1-v5，红笔划掉“腔调不对 / 表达被改 / 不能直接用”，节奏要有来回消耗感 |
| “后来写好 CLAUDE.md” | 169-171 | 上下文注入 | CLAUDE.md 像说明书一样展开，三条规则写入模型：我是谁 / 我在做什么 / 我要什么语气 |
| “同一个模型一轮可用” | 172-174 | 效果反转 | 右侧只出一张稿件卡，盖章 `一轮可用`，和左侧 v1-v5 形成强对比 |
| “不需要等更好的模型” | 175-177 | 结论 | 100→105 的模型升级条很短，wrapper 层增益条更长；最后不是喊口号，而是画面显示“模型没换，环境变了，结果变了” |

## 3. 视觉骨架

### SEC A · 平行一年，落到 Wrapper（1.2-20.6s）

- 0.0-1.2s：承接 seg03，企业服务网络余光收成两条细线，节奏降下来。
- 左边不是单纯 Karpathy 头像，而是“概念工作台”：`vibe coding` / `LLM Wiki` / `context engineering` 三个文件夹轮廓。
- 右边是 Anthropic 产品工作台：`Claude Code` / `Enterprise Services` / `Academy` 三个模块轮廓；其中 Claude Code 的工作台形态参考 `03-claude-code-overview.png` 的官方文档/终端语言。
- 两条线在同一时间轴上平行推进，字幕说“平行走了一年”时，时间刻度 `2025 → 2026` 被点亮。
- 字幕说 `Wrapper` 时，一个透明外壳扣住模型核心；说“套壳”时，中文小字贴到外壳上。重点是先让观众“看见壳”，不是只看见词。

### SEC B · 从贬义到产品（20.6-53.4s）

- 2023 部分做成“评论区审判台”：一个 AI 应用盒子背后接着模型 API，旁边弹出三条嘲讽评论：
  - `不就是套了个壳？`
  - `没有技术含量`
  - `谁都能做`
- 字幕说“赚到钱了”不要只放钱符号，而是让盒子翻面：从廉价包装变成产品货架。
- 2025 三张产品卡依次翻入：
  - `Cursor`：coding workflow；参考 `01-cursor-home.png` 的 Desktop / CLI / task status 语言，不做普通 logo 卡
  - `Perplexity`：answer engine；参考官方 Help Center 的 retrieval infrastructure 概念，画成“检索结果 → 答案卡”
  - `Claude Code`：agentic CLI；参考 `03-claude-code-overview.png` 的 terminal / MCP / instructions / skills / hooks 组合
- 负面标签翻面成真正的产品能力：`workflow` / `distribution` / `context`。
- 热词 chrome：`Wrapper 才是产品`。这一句是本 SEC 的 hot moment。

### SEC C · 模型跑分视角被拉开（53.4-85.1s）

- 前 12s 故意让模型跑分榜占满画面：`GPT / Claude / Gemini / DeepSeek` 像体育排行榜一样上下浮动，表达“大家还在盯模型”。
- 字幕说“模型虽然重要”时，跑分榜不要消失，只缩到左侧，承认它重要。
- 字幕说“真的深度使用”后，右侧出现同一个模型核心插进三台机器：
  1. `裸聊天`：输出泛泛建议
  2. `普通客户端`：输出能执行的步骤，视觉接近普通问答 UI
  3. `项目化 Wrapper`：输出贴合当前项目的可用稿件/代码，视觉参考 Cursor / Claude Code 官方工作台：文件、任务状态、终端命令、项目上下文同时在场
- 字幕说“天差地别”时，三张输出卡的质量差距要被视觉化：第一张松散、第二张半成品、第三张带项目名和约束命中。
- 结论 chip：`差距在 Wrapper`。

### SEC D · 洋葱剖面逐层长出来（85.1-134.0s）

- 主视觉不是静态同心圆，而是“剖面扫描”：模型核心在中心，镜头像向外扫描，每句口播才解锁一层。
- 从内到外 5 层：
  1. `Model`：Claude / GPT / Gemini / DeepSeek
  2. `Client`：Claude Code / CLI
  3. `Capabilities`：Skills / Agent Teams
  4. `Protocol`：Hooks / MCP
  5. `Context`：Memory / CLAUDE.md
- 动作规则：
  - 137-140：只显示模型核心和第一圈空壳。
  - 141-142：Claude Code / CLI 层亮起，像命令行外壳接住模型；参考 `03-claude-code-overview.png`。
  - 143-145：Skills / Agent Teams 像插件插槽和多个独立工作间接入；subagents / agent teams 视觉参考 `05-claude-code-subagents.png`。
  - 145-146：Hooks / MCP 画成事件线和标准接口：Hooks 用 lifecycle event bus（参考 `06-claude-code-hooks.png`），MCP 用 USB-C/端口连接外部系统（参考 `07-mcp-intro.png`）。
  - 147-151：Memory / CLAUDE.md 最后出现，像用户说明书写入外层环境；参考 `04-claude-code-memory.png` 的 scope/load-order 结构。
- 152-153：五层合成一个产品剖面，文字是 `你真正用的是整个系统`。

### SEC E · 小陈主持稿例子作为主戏（134.6-201.0s）

- 这是 66s，不是短结尾，要当成“个人证据段”来做。
- 154-161：场景从抽象洋葱切到一个真实工作台隐喻：项目文件夹、CLAUDE.md、skills chips、当前视频工程卡。观众要感到“这是小陈自己的使用现场”。
- 162-168：左侧聊天窗口快速堆出 v1-v5 主持稿卡，每轮都被红笔打回：
  - `腔调不对`
  - `表达被改`
  - `不能直接用`
  - `还要再解释一遍`
- 169-171：CLAUDE.md 展开成三条硬约束写入系统：
  - `我是谁`
  - `我在做什么`
  - `我要什么语气 / 哪些表达不能动`
- CLAUDE.md 不能画成普通便签。参考 `04-claude-code-memory.png`：做成有 scope / load order 感的“项目说明书”，从项目根目录被读入外层 context。
- 172-174：右侧只出一张稿件卡，盖章 `一轮可用`；它要比左边 v1-v5 更干净、更完整。
- 175-177：不要喊空话。画面做成两个增益条：
  - `模型升级：100 → 105`
  - `Wrapper 增益：空白环境 → 项目化环境`
  最后 chrome 大字收束：`模型没换，环境变了，结果变了` / 小字 `学会更好使用模型`。

## 4. index.html 挂载

在 seg03 后追加：

```html
<!-- seg04 ch4 wrapper：套壳从贬义到产品 + 洋葱图 + 主持稿例子 (5:21-8:42, 字幕 104-177) -->
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

- `data-start="321"`：seg00 38s + seg01 112s + seg02 80s + seg03 91s = 321s。
- `data-duration="201"`：本段 201s。

## 5. 实现注意

- `SEGMENT_DURATION = 201.0`，段末必须 `tl.set({}, {}, SEGMENT_DURATION)`。
- CSS selector 全部用 `[data-composition-id="seg04-wrapper"] ...`。
- 字体必须硬编码 `"Noto Sans SC", "Inter", sans-serif` / `"JetBrains Mono", monospace`，不写 `var(--f-zh)`。
- 米色底正文色用 `#5A4F46` / `#8b3d28` / `#B5563D`，不要用低对比 Claude 橙正文。
- SEC 切换用 instant `tl.set('.sec-x', { autoAlpha: 0 }, T)` + 下一 SEC 入场，不写 SEC 退场动画。
- 洋葱图不直接做成静态 PPT：每层必须跟口播逐层亮起，并有线条/脉冲体现“上下文环境正在包住模型”。

## 6. 验证点

- `npx hyperframes lint` 0 errors。
- `npx hyperframes validate` 0 contrast warnings。
- preview 拖到 321s：seg04 第一帧出现，不黑屏。
- preview 拖到 341.6s：`Wrapper / 套壳` 已出现。
- preview 拖到 406s：洋葱图开始逐层亮起。
- preview 拖到 468s：`Memory / CLAUDE.md` 已作为最后一层出现，不提前 spoiler。
- preview 拖到 490s：主持稿 v1-v5 来回修改段正在进行。
- preview 拖到 522s：seg05 第一帧应接上，seg04 末尾没有 exit fade。
