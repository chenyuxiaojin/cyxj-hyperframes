# PLAN-seg02-ch2-gainian — vibe coding + LLM Wiki 双概念

> 本段适用 §7（SRT 真源）/ §8（段内时间从 0）/ §10（SEGMENT_DURATION + tl.set 撑满）/ §11（形态 cutaway）/ §12（每段闭环 4 步 · §12.a 已修订为 preview 验过）/ §13（资料台账）；段间转场依默认（§9 hard cut，seg01 末尾 chrome 大字"两个词"自然钩到 seg02 SEC A "vibe coding"）；最终格式延后定（§3.8）

- **段编号**：seg02（章别名 ch2）
- **段长**：80.0s（SEGMENT_DURATION 常量取 80.0）
- **全片位置**：2:30 → 3:50（字幕条 47-71，共 25 条）
- **形态**：cutaway（整屏动画）
- **真源**：`字幕/加入之后.srt` 第 47-71 条
- **事实基线**：`研究/02-concepts.md` §1（vibe coding）+ §3（LLM Wiki）
- **DNA 红线**：`STYLE_BRIEF.md`（米色底 + Claude 橙必现 + chrome 大字 + 全屏四件套 + chip stagger）
- **节奏定位**（来自 `INTEGRAL-RHYTHM-MAP.md` seg02 卡片）：**COOL** —— 在 seg01 高密度履历 + seg03 数据冲击之间的"缓冲带"。Hot 色面积小，GSAP 速度放缓 30%，每个 SEC 内部留 1-2s hold 给观众消化

> ⚠️ 本 PLAN **重大修正**（2026-05-21）：上一稿基于 `INTEGRAL-RHYTHM-MAP.md` 写过"vibe coding 40s + LLM Wiki 30s + context engineering 10s"分配。**按 SRT 真源（字幕 47-71）实测**，本段实际口播 = vibe coding 22s（字幕 47-53）+ LLM Wiki 58s（字幕 54-71），**context engineering 没有在本段口播出现**（留给 ch4/ch5/ch6）。已回填 PROJECT-STATE.md §3 表 + RHYTHM-MAP seg02 卡片。

---

## §13 资料台账

> 强制：**不写台账不准动 PLAN 正文**（PROJECT-STATE §4.7）。4 类检索 = 仓库级文档 + 参考工程 + 零件 + catalog。

### 1. 官方文档（grep `docs/OFFICIAL_DOCS_VALUE_INDEX.md`）

**⭐⭐⭐ 必读 2 页**：

| 页面 | 一句话价值 | 本段怎么用 |
|---|---|---|
| `docs/hyperframes-official/concepts/data-attributes.md` | 相对时序 `data-start="prev + 0.2"` 让 beat 自动跟随上游变化 | seg02 嵌套在 root 里，挂载用 `data-start="150"` 绝对时序（150s = seg00 38s + seg01 112s）；SEC 内部段内时间从 0 起算（§8） |
| `docs/hyperframes-official/reference/html-schema.md` | 7 条 Timeline Contract + `data-variable-values` 权威表 | 段顶 `SEGMENT_DURATION = 80.0` + 段末 `tl.set({}, {}, SEGMENT_DURATION)` 撑满 + `window.__timelines['seg02-gainian'] = tl` 注册（§10） |

**⭐⭐ 值得读 3 页**：

| 页面 | 一句话价值 | 本段怎么用 |
|---|---|---|
| `docs/hyperframes-official/guides/gsap-animation.md` | timeline 长度=视频长度的非直觉陷阱 + `<video>` 包裹规则 | 防 timeline 撑不满 80s 段长导致末尾黑屏 |
| `docs/hyperframes-official/concepts/compositions.md` | composition 嵌套 + Variables 传参，模块化复用骨架 | 如果 SEC A 用 fork 的 x-post 卡，嵌入 `data-composition-src="compositions/components/x-post-vibe-coding.html"` |
| `docs/hyperframes-official/catalog/blocks/x-post.md` | X/Twitter 帖子卡 default 5s，含 engagement metrics | **SEC A vibe coding 推文卡 fork 参考**（不直接引用 5s block，fork 改成本段 ~12s 用） |

### 2. 参考工程（grep `docs/REFERENCE_INDEX.md`）

| 工程 | 形态 | 复用什么 |
|---|---|---|
| ⭐⭐⭐ 本工程 `compositions/seg00-cold-open.html` | 黄金范本 | 5 SEC 切分写法 + chrome 大字 8-stop 渐变 + chip stagger + 推文 banner 顶部布局（SEC A vibe coding 推文卡借鉴）+ screen shake / ripple 模板（备用，本段 COOL 节奏少用） |
| ⭐⭐⭐ 本工程 `compositions/seg01-renwu.html` | 最近成功 | Karpathy 头像复用（SEC A "出处佐证" + SEC B Wiki 引入）+ 圆形头像 box-shadow 4 层 ring 写法 + GSAP 头像 scale 入场 back.out(1.4) |
| ⭐⭐ `hyperframes-student-kit/video-projects/aisoc-app-release/` | 30s 9 comp | 节奏紧凑 + 用过 `x-post` 真实案例（看它怎么把 5s default 改成更长） |
| ⭐⭐ `hyperframes-student-kit/video-projects/hyperframes-sizzle/` | 40s 30 comp | 30 comp 技法集大成 + 用过 `x-post` —— 看 x-post 在快节奏视频里的位置时机 |
| ⭐ `videos/2026-05-04-claude-19-tips-hf/` | 7 分钟 21 章 | cc-window 终端 UI 体系（SEC A "代码自动冒出" 直接参考终端样式）+ 长教程节奏（80s 段密度参考） |

### 3. 零件复用（`ls templates/components/`）

**仓库根已有 7 个零件**：

| 零件 | 本段是否用 | 用法 |
|---|---|---|
| ✅ `cc-window` | **用** | SEC A "完全相信 AI 写的代码" → 终端窗口里模糊 prompt 输入 → 代码自动冒出（行号 + 抽象逻辑代码占位）。`<link rel="stylesheet" href="../../../templates/components/cc-window/cc-window.css">` 或 cp 到 `assets/components/` |
| ✅ `xcyj-tokens` | **用**（已在工程） | DNA token CSS var（`--c-bg` 米色 / `--c-orange` Claude 橙 / 字体三件套） |
| 候选 `text-effects` | 可能用 | SEC A 推文原文打字动画（vibe coding 英文原文逐字打出）—— 跟自写 GSAP `text.split('').forEach` 比，性能 / 实现成本待评估，**默认不用**，PLAN 正文 SEC A 标注 fallback 写法 |
| 候选 `orbit-dots` | 可能用 | SEC D Agent 在 Wiki 三层间穿梭——Agent 移动轨迹用 orbit-dots 圆周轨迹替代直线穿梭？**默认不用**（Agent 穿梭语义是"垂直流转"不是"圆周"），直接 GSAP y position 动画即可 |
| ❌ `pulse-bars` | 不用 | 数据柱状跟 Wiki 概念不匹配（留给 seg03） |
| ❌ `shake-error` | 不用 | seg02 是 COOL 段，禁 shake / error 戏剧化 |
| ❌ `spec-fill` | 不用 | 不需要 spec 进度条 |

**本工程已有零件** `compositions/components/`：当前为空（seg00 / seg01 都没建）。seg02 如果 fork x-post block，会在这里新建第一个：`compositions/components/x-post-vibe-coding.html`

### 4. catalog 候选（grep `templates/catalog.json`）

**SEC A 候选 block**：

| block | 评估 | 决策 |
|---|---|---|
| 🎯 `x-post` (5s, social/overlay/twitter) | "X/Twitter post card overlay with engagement metrics" —— X.com 风格白底圆角推文卡 UI。**SEC A vibe coding 推文卡完美匹配** | **fork**：`npx hyperframes add x-post`，cp 一份到 `compositions/components/x-post-vibe-coding.html`，改成 12s（覆盖整个 SEC A），改文案 = Karpathy 头像 + @karpathy + 2025-02-02 + 原文 "There's a new kind of coding I call 'vibe coding'..."。**禁直接 `data-composition-src` 引用 catalog 5s block**（按 §3.7 catalog block 时长改不动） |

**SEC B 候选 block**：

| block | 评估 | 决策 |
|---|---|---|
| ❌ `macos-notification` (5s) | macOS 风通知卡，跟 GitHub Gist 风格不符 | 不用，HF 内**自写** Gist 卡片（白底圆角 + Octocat 文字标识 + 文件名 `llm-wiki.md` + 元数据 chip） |
| ❌ `flowchart` (decision tree) | 决策树拓扑，跟 Wiki 三层堆叠不匹配 | 不用 |

**SEC C/D 候选 block**：

| block | 评估 | 决策 |
|---|---|---|
| ❌ `data-chart` (15s) | NYT 风数据图 | 不用（数据段留给 seg03） |
| ❌ `flowchart` | 同上 | 不用 |

**chrome 大字 hot 化候选 component**：

| component | 评估 | 决策 |
|---|---|---|
| `shimmer-sweep` (CSS gradient mask 文字 shimmer 效果) | 跟 chrome 8-stop 大字配合可强化 hot word 视觉 | **暂不用**：seg00 / seg01 chrome 大字 hot word 都是 `<span class="hot-word">` 加渐变 fill，没用 shimmer。保持一致性。如 SEC B "大模型 Wiki" 入场想要更强 hot 化，**用户对齐时可加** |

**绝对不用（§3.7）**：
- 任何 shader transition（whip-pan / flash-through-white / cinematic-zoom / sdf-iris 等）—— seg01→seg02 / seg02→seg03 都默认 hard cut

### 5. 联网验证结果（2026-05-21 grok-search + Tavily 2 源交叉验证）

按用户最新指令"每一段都要搜索真实的资料"，本段已联网验证关键事实点：

| SEC | 待验证事实 | 验证结果 | 置信度 |
|---|---|---|---|
| SEC A | vibe coding 推文 URL + 原文 + 2025-02-02 日期 | **研究/02 §1 已多源交叉验证**（Karpathy 本人博客 + Substack + LinkedIn）。本次不重复验 | 高 |
| SEC B | LLM Wiki Gist URL + 5,000+ stars + 2026-04-04 日期 + 三层架构 raw/wiki/schema | **研究/02 §3 已直接抓取 Gist 页面**确认 + 本次联网验证 grok 答复印证三层架构 "Raw Sources / Wiki / Schema (= CLAUDE.md)" | 高 |
| SEC E | "B站 / Obsidian 教学视频基本都从这一个笔记概念延伸"（字幕 67-69） | **✅ 多源印证 B站确实有大量 Karpathy LLM Wiki 教程视频**。grok-search 直接给 5 个 bilibili URL（含真实 BV 号），覆盖小白教程 / 进阶图谱 / Obsidian 整合 / Claude Code 实战。Obsidian + Karpathy LLM Wiki 组合在 Karpathy Gist 本身推荐，属于真实生态 | 高（grok + Tavily + 5 独立 bilibili URL + reddit + 53ai 博客） |

**SEC E 视觉真源**（B站视频标题占位用，**不直接照搬，仿造**）：

- 「硅谷顶尖AI大佬如何搭建个人AI知识库 — 用 Claude Code + Obsidian 搭建 Karpathy LLM Wiki」（杰森的效率工坊）
- 「【新手教程】这绝对是B站最好的llm-wiki搭建知识库教程」
- 「Karpathy 知识库工作流终极进化：graphify 知识图谱保姆级教程」

**SEC E 视觉设计原则**：
- 仿造 B站卡片样式（粉色/蓝色 chip 标签 + 缩略图占位区 + 中文标题 + 小字 UP 主名）
- 标题文案做**仿造改写**（不直接照搬真实视频标题，避免侵权风险）：例如改成 "LLM-Wiki 实战搭建"、"Karpathy 知识库工作流"、"Obsidian + Claude 笔记法"
- **不放真实播放数 / 弹幕数**（避免事实编造，按 CLAUDE.md "不许编人名/数字/引用/日期"）
- Obsidian logo 可点名出现（**已联网验证**：Karpathy Gist 本身推荐 Obsidian 配合使用，属真实事实点）

**额外发现**（写正文时用）：研究/02 §3 写"Schema 文件"，**grok 答复明确把 Schema 等价为 `CLAUDE.md`** —— 视觉上 SEC D 三层架构第 1 层（顶层）可以标注 "schema = CLAUDE.md"，让观众联想到 Anthropic 生态钩子

---

## §11 形态确认

**cutaway**（整屏动画段，最终输出整片 MP4 的一部分）。本段不需 alpha 输出，不需 talking head overlay。

---

## 1. 字幕条对应表 + SEC 切分

按字幕真源时间码切 5 SEC（cold-open + seg01 的 5 SEC 风格延续；段长 80.0s = 22+10+18.2+12.2+17.6）：

| SEC | 字幕条 | 段内时间 | 全片时间码 | 主题 | 状态 |
|---|---|---|---|---|---|
| A | 47-53 | 0.0-22.0s | 2:30-2:52 | **vibe coding 推文 + 定义 + 出圈** | ⬜ |
| B | 54-58 | 22.0-32.0s | 2:52-3:02 | **LLM Wiki 引入 + Gist 卡片** | ⬜ |
| C | 59-62 | 32.0-50.2s | 3:02-3:21 | **RAG vs Wiki 范式对比** | ⬜ |
| D | 63-65 | 50.2-62.4s | 3:21-3:33 | **Wiki 三层架构 + Agent 持续维护 + 知识复利** | ⬜ |
| E | 66-71 | 62.4-80.0s | 3:33-3:50 | **延伸现实（B站 / Obsidian）+ 收束钩到 ch3** | ⬜ |

合计 22.0+10.0+18.2+12.2+17.6 = **80.0s** ✓

> 注：精确字幕时间码起点
> - 字幕 47 起点 00:02:30,833 → seg02 内 0.0s（SEC A 起）
> - 字幕 54 起点 00:02:52,900 → seg02 内 22.07s（SEC B 起）
> - 字幕 59 起点 00:03:03,333 → seg02 内 32.50s（SEC C 起）
> - 字幕 63 起点 00:03:21,066 → seg02 内 50.23s（SEC D 起）
> - 字幕 66 起点 00:03:33,233 → seg02 内 62.40s（SEC E 起）
> - 字幕 71 终点 00:03:50,366 → seg02 内 79.53s（与 80.0s 段长误差 < 0.5s）

---

## 2. metaphor 表（每个口播关键词 → 字面 vs 语义扩展）

> 硬约束 HARD §12：视觉 = 语义扩展 ≠ 字幕逐字翻译

### SEC A · vibe coding 推文 + 定义（0.0-22.0s, 字幕 47-53）

| 口播关键词 | 字幕条 | 字面 | 语义扩展（视觉处理） |
|---|---|---|---|
| "vibe coding 这个词大家应该都听过" | 47 | 文字 | chrome 大字 "vibe coding" fade in（hot word Claude 橙渐变） |
| "这个词就是他提出来的 / 2025-02-02 推文" | 48-49 | 推文 | **SEC A 主视觉**：fork 的 x-post 推文卡（白底圆角 X.com 风格 + Karpathy 头像 + @karpathy + 2025-02-02 日期 chip + 原文 "There's a new kind of coding I call 'vibe coding', where you fully give in to the vibes, embrace exponentials, and forget that the code even exists." + 简体译文一行 "完全交给 vibe / 拥抱指数级 / 忘记代码存在") |
| "完全相信 AI 写的代码" | 50 | 文字 | **SEC A 副视觉**（推文卡下方）：cc-window 终端窗口入场。模糊英文 prompt 打字 → 代码自动逐行冒出（行号 + 抽象逻辑占位 `const result = await llm.gen(prompt)` 类） |
| "人们不再去看代码本身只看效果" | 51 | 文字 | 终端代码逐行被淡灰半透明 mask（视觉表示"不看代码"），代码右侧浮现 "✓ Output ok" 绿色 chip（视觉表示"只看效果"） |
| "仅仅一年多就出圈了" | 52 | 文字 | cc-window 缩小到角落，主屏 chip "出圈" + 时间线缩略图（2025.2 → 2026.5 节点） |
| "vibe coding 已变成工作形式范式" | 53 | 文字 | chrome 大字 "工作范式" 入场（chip 形态 + 副字 "a new paradigm"），SEC A 收束 |

### SEC B · LLM Wiki 引入（22.0-32.0s, 字幕 54-58）

| 口播关键词 | 字幕条 | 字面 | 语义扩展（视觉处理） |
|---|---|---|---|
| "第二个就是大模型 Wiki" | 54 | 文字 | SEC A 整段 fade（autoAlpha 0），chrome 大字 "大模型 Wiki" / "LLM Wiki" 双语入场（hot word Claude 橙），Karpathy 头像缩到角落作"出处佐证" |
| "前一个月之前吧" | 55 | 时间 | 时间 chip "≈ 1 个月前"（小字 JetBrains Mono 灰），过渡用 |
| "2026年4月4号 GitHub 发布" | 56 | 日期 | **SEC B 主视觉**：GitHub Gist 卡片 UI（HF 自写）—— 白底圆角 + GitHub Octocat 文字标识 + URL `gist.github.com/karpathy/...` + 创建日期 chip "Created April 4, 2026" + Stars chip "5,000+ ★"（按研究/02 §3 真实数据）|
| "公开的笔记叫大模型Wiki" | 57-58 | 文字 | Gist 卡片中央显示文件名 `llm-wiki.md`（JetBrains Mono 36px）+ 文件类型 icon |

### SEC C · RAG vs Wiki 范式对比（32.0-50.2s, 字幕 59-62）

| 口播关键词 | 字幕条 | 字面 | 语义扩展（视觉处理） |
|---|---|---|---|
| "核心想法是这样的" | 59 | 文字 | SEC B 卡片缩小到右上角作"出处 pin"，主屏一分为二 —— 左 "RAG" / 右 "LLM Wiki" 标题 chip |
| "现在大家都在用 RAG / 每次问完问题外部捞一遍" | 60 | 比喻 | **左半 RAG 动画**：问题 chip → 箭头指向外部 docs 堆（杂乱文件 icon）→ 答案 chip → **箭头循环回到起点**（每次问都重新捞，SVG path stroke-dashoffset 循环 + 灰色调） |
| "他觉得这有点浪费" | 61 | 评价 | 左半 RAG 整体 overlay 一层淡红半透明 + 小字 chip "重复检索 · 浪费" |
| "不如建一个由 AI 来持续维护的知识库" | 61-62 | 提案 | **右半 LLM Wiki 动画**：累积建筑（不是循环箭头，是垂直堆叠）—— 第 1 个问题进入 → 知识库长一层；第 2 个问题进入 → 长第二层；持续生长（颜色暖米色 + Claude 橙累积，对比左半灰冷调） |

### SEC D · 三层架构 + Agent 持续维护 + 知识复利（50.2-62.4s, 字幕 63-65）

| 口播关键词 | 字幕条 | 字面 | 语义扩展（视觉处理） |
|---|---|---|---|
| "把笔记文档SOP分成三个层级" | 63 | 数字 + 文字 | **SEC D 主视觉**：左半 RAG 区淡出，右半 LLM Wiki 区 zoom 到全屏，展开**三层架构图**（垂直堆叠卡片）：<br>第 3 层（底）：`raw/` 原始资料（杂乱标签 chip：会议笔记 / 文档草稿 / 微信对话）<br>第 2 层（中）：`wiki/` 合成知识库（结构化页面：标题 + 段落 + 链接 icon）<br>第 1 层（顶）：`schema` 文件（JetBrains Mono 代码片段，**标注 "= CLAUDE.md"** —— 联网验证发现的钩子，让观众联想 Anthropic 生态） |
| "让 Agent 帮你持续整理" | 64 | 工具 | 三层之间一个小 Agent icon（用 Claude 头像 SVG 缩小版 24px）在三层间**垂直穿梭**（GSAP yoyo + power2.inOut），同时画**流动箭头**（raw → wiki 上升 / wiki ↔ schema 双向） |
| "知识可以越攒越多 不用每次从零开始" | 65 | 复利 | chrome 大字 **"复利"** 浮现在三层架构右侧（hot word Claude 橙），同时三层卡片厚度 stagger 增加（每层 scale y +20%，模拟"层在变厚"）|

### SEC E · 延伸现实 + 收束钩到 ch3（62.4-80.0s, 字幕 66-71）

| 口播关键词 | 字幕条 | 字面 | 语义扩展（视觉处理） |
|---|---|---|---|
| "一直延伸到现在" | 66 | 时间 | 三层架构 zoom out 缩到左上角作"源头 pin"，主屏开出空间给 B站延伸 |
| "B站或者其他平台 / 教学的视频" | 67-68 | 平台 | **SEC E 主视觉**：3 张仿造 B站视频卡片 stagger 入场（按 §13.5 联网验证设计）—— 每张含：缩略图占位区（米色变体 + Karpathy 像素头像 / Obsidian logo / chrome 大字 mock）+ 中文标题占位（仿造改写："LLM-Wiki 实战搭建" / "Karpathy 知识库工作流" / "Obsidian + Claude 笔记法"）+ 小字 chip "教学视频"（**不放 UP 主真名 + 不放播放数 / 弹幕数**） |
| "Obsidian 的一些教学的视频" | 68 | 工具 | 第 3 张卡片下方 Obsidian logo 入场（**已联网验证**：Karpathy Gist 推荐 Obsidian 配合，事实点合法。logo 用 monochrome 棕处理保 DNA） |
| "都是从这一个笔记概念里面延伸出来的" | 69 | 因果 | B站 3 张卡片下方画连线**汇聚**到 SEC D 左上角的"源头 pin"（LLM Wiki 三层架构缩略）—— 视觉表示"延伸源头" |
| "可以看出其中一些门道" | 70 | 文字 | chrome 大字 **"门道"** 浮现（hot word Claude 橙，节奏放缓） |
| "就是他这两年做的事情" | 71 | 时间 | "门道"大字保持 hold，右下角小 chip **"两年沉淀"** 入场（用户决策方案 = chrome 大字 + chip 缩到角落，hard cut 到 seg03，**禁 exit fade** —— hyperframes skill "NEVER use exit animations except final scene"） |

---

## 3. 视觉骨架（按 SEC 拆 GSAP timeline）

> 段顶常量：`SEGMENT_DURATION = 80.0` / `root = '[data-composition-id="seg02-gainian"]'`

### SEC A · vibe coding 推文 + 定义（0.0-22.0s）

**布局**（padding flex 禁 absolute，按 hyperframes skill "Layout Before Animation"）：
- 全屏 padding 160px，flex column center
- 上 50% 区域：fork 的 x-post 推文卡（宽 880px，居中）
- 下 35% 区域：cc-window 终端窗口（宽 1200px，居中）
- 顶部 chrome 大字 "vibe coding"（128px）

**timeline**（22.0s 内）：
- 0.0-0.6s：chrome 大字 "vibe coding" fade in（scale 1.05 → 1.0 + autoAlpha 0 → 1，power3.out 0.6s）
- 0.6-1.2s：x-post 推文卡 fade + scale 0.95 → 1.0（back.out(1.4) 0.6s）
- 1.2-2.0s：推文文字 char stagger（字符 0.06s/个，按 DNA §6）
- 2.0-3.5s：hold（字幕 47-49 讲述期）
- 3.5-4.5s：cc-window 终端 fade in + scale 入场（power3.out 1.0s）
- 4.5-7.0s：终端模糊 prompt 打字（用 GSAP `text.split('').forEach` 或 SplitText）→ 代码自动逐行冒出（每行 0.3s stagger）
- 7.0-9.0s：代码淡灰 mask 覆盖 + "✓ Output ok" 绿色 chip 浮现（对应字幕 50-51）
- 9.0-14.0s：hold（字幕 51-52 讲述）
- 14.0-15.0s：cc-window 缩小到角落（scale 1.0 → 0.4 + x 偏移），主屏腾空间
- 15.0-16.5s：时间线缩略图入场（2025.2 → 2026.5 节点）+ chip "出圈"
- 16.5-20.0s：hold（字幕 52 完）
- 20.0-21.0s：chrome 大字 "工作范式" 入场 + chip "a new paradigm"
- 21.0-22.0s：hold（字幕 53 完，SEC A 收，**禁 exit fade**，自然 cut 到 SEC B）

### SEC B · LLM Wiki 引入（22.0-32.0s）

**布局**：
- 全屏 padding 200px，flex column
- 上方 chrome 大字 "大模型 Wiki / LLM Wiki" 双语
- 中央 GitHub Gist 卡片（HF 自写，宽 1080px）
- 左上角 Karpathy 头像（120px 圆形，作"出处佐证"）

**timeline**（10.0s 内）：
- 22.0-22.6s：SEC A 所有元素 autoAlpha 0（**SEC 间用 GSAP `tl.set()` 切换，不写 cross-fade，hard cut**）
- 22.6-23.4s：chrome 大字 "大模型 Wiki" fade in + char stagger（按 DNA §6）
- 23.4-23.9s：副字 "LLM Wiki" 入场（44px 深棕 #5A4F46）
- 23.9-24.4s：Karpathy 头像 scale 0 → 1（back.out(1.4)）
- 24.4-25.4s：Gist 卡片 fade + scale 0.95 → 1.0（power3.out 1.0s）
- 25.4-26.4s：Gist 卡片内部元数据 stagger（Octocat 标识 + 日期 chip "April 4, 2026" + Stars chip "5,000+ ★"，间隔 0.2s）
- 26.4-27.6s：文件名 `llm-wiki.md` 单独 zoom 入场（JetBrains Mono 36px）
- 27.6-31.5s：hold（字幕 56-58 讲述）
- 31.5-32.0s：buffer

### SEC C · RAG vs Wiki 范式对比（32.0-50.2s）

**布局**：
- 屏幕一分为二（左 RAG / 右 Wiki，每半宽 880px）
- SEC B Gist 卡片缩小到右上角（200px 宽，作"出处 pin"）
- 顶部各自 chip 标题 "RAG" / "LLM Wiki"

**timeline**（18.2s 内）：
- 32.0-32.5s：SEC B 主元素 autoAlpha 0 + Gist 卡片缩小到右上角（scale 1.0 → 0.2 + x/y 偏移，power3.inOut 0.5s）
- 32.5-33.5s：屏幕中线分割线入场（垂直 dashed line stroke-dashoffset）+ 左右标题 chip stagger
- 33.5-36.0s：**左半 RAG 动画**第一轮：问题 chip → 箭头去外部 docs 堆 → 答案 chip 浮现（2.5s 一轮）
- 36.0-38.5s：左半 RAG 第二轮（重复但箭头加快，强调"重复检索"）
- 38.5-41.0s：左半 RAG 第三轮 + 整体 overlay 淡红 + chip "重复检索 · 浪费"（对应字幕 60-61）
- 41.0-43.0s：hold（字幕 61 讲述）
- 43.0-44.0s：**右半 LLM Wiki 动画**起手：第 1 个问题进入 → 知识库长第 1 层（cyan-warm 颜色 stagger）
- 44.0-46.0s：第 2 / 3 / 4 个问题进入 → 累积层 stagger（每 0.5s 一层，总 4 层）
- 46.0-48.0s：右半累积层最终态显示（4 层暖色，对比左半 3 轮灰冷）
- 48.0-50.0s：hold（字幕 62 完）
- 50.0-50.2s：buffer

### SEC D · 三层架构 + Agent 持续维护 + 知识复利（50.2-62.4s）

**布局**：
- 左半 RAG 区淡出（autoAlpha 0），右半 Wiki 区 zoom 到全屏中央
- 三层架构图（垂直堆叠，宽 720px / 总高 540px）
- chrome 大字 "复利" 放在三层右侧

**timeline**（12.2s 内）：
- 50.2-51.0s：左半 RAG 区 autoAlpha 0 + 右半 Wiki 累积层 morph 到三层架构图（power3.inOut 0.8s）
- 51.0-52.0s：三层架构图各层 stagger 显现（间隔 0.3s）：
  - 底层 `raw/` 卡片入场（杂乱标签 chip：会议笔记 / 文档草稿 / 微信对话）
  - 中层 `wiki/` 卡片入场（结构化页面 mock）
  - 顶层 `schema` 卡片入场（JetBrains Mono 代码片段 + 标注 "= CLAUDE.md"）
- 52.0-54.0s：hold + 各层标签 stagger（每层右侧文字标注，0.4s 间隔）
- 54.0-57.0s：Agent icon（Claude 头像 24px）在三层间**垂直穿梭** —— GSAP yoyo + power2.inOut，2 个完整往返（共 3s）+ 流动箭头同步（raw → wiki / wiki ↔ schema）
- 57.0-59.0s：chrome 大字 **"复利"** 入场（scale 1.05 → 1.0 + hot word Claude 橙渐变 fill，power3.out 0.6s）+ 副字 "compounding" 小字
- 59.0-61.0s：三层卡片厚度 stagger 增加（每层 scaleY 1.0 → 1.2，间隔 0.3s，按 DNA §6）
- 61.0-62.4s：hold（字幕 65 完）

### SEC E · 延伸现实 + 收束钩到 ch3（62.4-80.0s）

**布局**：
- 左上角：SEC D 三层架构缩到 240px 宽，作"源头 pin"
- 主屏中央：3 张仿造 B站视频卡片横排 stagger（每张 480px 宽 × 320px 高）
- 卡片下方：Obsidian logo + 连线汇聚到左上角"源头 pin"
- 终末：chrome 大字 "门道" + chip "两年沉淀"

**timeline**（17.6s 内）：
- 62.4-63.2s：三层架构整体 scale 1.0 → 0.3 + 移到左上角（power3.inOut 0.8s）
- 63.2-65.0s：B站卡片 1 fade + slide-in（从左 x: -200 → 0，power2.out 0.5s）
- 65.0-66.5s：B站卡片 2 入场（同上）
- 66.5-68.0s：B站卡片 3 入场（同上）
- 68.0-70.0s：每张卡片标题 + UP 主 chip stagger（按 DNA §6 字符 0.06s/个 + 卡片 0.12s 间隔）
- 70.0-71.0s：Obsidian logo 入场在第 3 张卡片下方（fade + scale 0.8 → 1.0）
- 71.0-73.0s：连线 stagger 入场（SVG path stroke-dashoffset），从 3 张卡片底部 + Obsidian logo 汇聚到左上角"源头 pin"（每条线 0.5s power2.inOut）
- 73.0-75.0s：hold（字幕 69 完）
- 75.0-76.5s：chrome 大字 **"门道"** 入场（hot word Claude 橙 + 大字 fade + scale 1.05 → 1.0，节奏放缓 power3.out 1.0s）
- 76.5-78.5s：hold（字幕 70 讲述）
- 78.5-79.5s：右下角 chip **"两年沉淀"** 入场（fade + slide-up，back.out(1.4) 0.6s）
- 79.5-80.0s：**保持画面 hold 到 80.0s**（**禁 exit fade**，hard cut 到 seg03）

---

## 4. 段顶部 + 段末尾固定写法（§8 §10）

段 HTML 顶部统一：
```js
const SEGMENT_DURATION = 80.0;  // PROJECT-STATE §3 表「段长」列
const root = '[data-composition-id="seg02-gainian"]';
```

段 HTML 末尾统一：
```js
tl.set({}, {}, SEGMENT_DURATION);  // 强制 timeline 撑满段长
window.__timelines['seg02-gainian'] = tl;
```

---

## 5. 段间转场（§9）

**默认 hard cut**：seg01 末尾 SEC E "chrome 大字'两个词'" 自然钩到 seg02 SEC A "chrome 大字 'vibe coding'"——hard cut 自然且语义无缝（"两个词"就是 vibe coding + LLM Wiki）。

seg02 末尾 SEC E "chrome 大字'门道' + chip '两年沉淀'" hard cut 到 seg03 数据冲击（"过去两年 0.003% → 7.94% → 34.4%"）——语义钩子是"两年"（seg02 末尾"两年沉淀" + seg03 开篇"过去两年" = 时间维度衔接）。

不需手写转场 block，不需 catalog 4s shader transition（§3.7 禁直接引用）。

---

## 6. index.html 挂载

在 seg01 挂载后追加：
```html
<div
  class="clip"
  id="seg02-gainian"
  data-composition-id="seg02-gainian"
  data-composition-src="compositions/seg02-gainian.html"
  data-start="150"
  data-duration="80"
  data-track-index="1"
  data-width="1920"
  data-height="1080"
></div>
```

- `data-start="150"`：seg00 段长 38s + seg01 段长 112s = 150s，对应字幕 47 起点 00:02:30,833（≈ 150.83s，误差 < 1s 内 hyperframes 接受）
- `data-duration="80"`：本段 80s
- 不写 `data-track-index` 重叠：保持 track 1 顺序播放

---

## 7. 资产盘点

需要的资产清单（动工程前先核对 `assets/` 是否齐）：

| 资产 | 用途 | 当前状态 |
|---|---|---|
| Karpathy 头像 | SEC A 推文卡 author + SEC B Wiki "出处佐证" | ✅ `assets/portraits/karpathy-hero.png`（seg00/seg01 已用） |
| vibe coding 推文卡 UI | SEC A 主视觉 | ⚠️ **fork x-post block**：`npx hyperframes add x-post` → `cp compositions/components/x-post.html → x-post-vibe-coding.html` → 改文案 + 时长 12s |
| cc-window 终端 | SEC A "代码自动冒出" | ✅ `templates/components/cc-window/`（仓库根复用，link CSS） |
| GitHub Gist 卡片 UI | SEC B 主视觉 | ⚠️ HF 内**自写**：白底圆角 + 文字 "GitHub Gist" + URL + 文件名 + 日期 chip + Stars chip |
| RAG vs Wiki 对比动画 | SEC C 主视觉 | ⚠️ 从 0 写：SVG 箭头 + chip + stroke-dashoffset 循环动画 |
| 三层架构图 | SEC D 主视觉 | ⚠️ 从 0 写：3 个垂直堆叠卡片 + Agent icon 穿梭 |
| Claude 头像 SVG（Agent icon 用） | SEC D Agent 穿梭 | ✅ `assets/logos/claude.svg`（已有） |
| Obsidian logo | SEC E 工具点名 | ⚠️ **缺**，需添加：`assets/logos/obsidian.svg`（按仓库 `assets/logos/LOGOS.md` 命名规则 = 全小写无分隔符）。如果仓库根 `assets/logos/` 没有，下载真 logo 处理成 monochrome 棕色 |
| B站视频卡片占位 UI | SEC E 主视觉 | ⚠️ HF 内**自写**：仿造 B站卡片（粉/蓝 chip 标签 + 缩略图占位 + 仿造改写的中文标题，不放真实视频标题/UP 主/播放数） |

**资产缺口处理**（动工程前）：
1. `ls assets/logos/obsidian.svg` 核实 → 缺则补
2. `ls templates/components/cc-window/cc-window.css` 核实 → 已确认存在

---

## 8. 风险与决策点

### 风险

1. **80s 装 5 SEC + 2 个概念 + 反 RAG + 三层架构 + B站延伸 = 信息密度其实不低**
   - 缓解：每个 SEC 内部留 1-2s hold（已在 §3 timeline 标注 hold 段）；Hot 色面积小（Claude 橙仅在 vibe coding / LLM Wiki / 复利 / 门道 4 个关键词 hot 化，不全屏铺）

2. **SEC A x-post fork 后时长 12s 是否够装"推文 + 终端 + 出圈过渡"**
   - 缓解：推文卡入场 + char stagger ≈ 3s，终端 ≈ 8s，转场 ≈ 1s。如果 preview 看下来太赶，砍掉终端"绿色 ✓ Output ok" chip 节省 2s
   - **审视点**：preview 后用户决定是否拆 SEC A 长度（增加 2-3s 给终端展示）—— 因为加长会破坏 22+10+18.2+12.2+17.6 = 80 公式，**需在 SEC B/C/D/E 内部砍 hold 补偿**

3. **三层架构图 Agent 穿梭 + 流动箭头 + 复利大字三个同时在 SEC D 12.2s 内**
   - 缓解：Agent 穿梭 3s（2 个往返）+ 复利大字 2s + hold 5s，节奏不赶
   - 性能：Agent icon 是 SVG path 动画，GSAP transform 没问题

4. **SEC E B站卡片 3 张 + Obsidian logo + 连线汇聚 + chrome 大字"门道" + chip = 17.6s 装 5 个视觉点**
   - 缓解：B站卡片 stagger 1.8s + 标题 stagger 2s + Obsidian 1s + 连线 2s + chrome 大字 1.5s + chip 1s + hold 8.3s
   - **审视点**：B站卡片标题"仿造改写"不照搬真实视频—— preview 时用户审是否文案够"真实感"

5. **SEC C RAG vs Wiki 对比时间分配（18.2s）**
   - RAG 三轮重复 + Wiki 4 层累积 + 标题 chip + 颜色对比 + 出处 pin = 视觉密度高
   - 缓解：左半 RAG 用单色灰冷（避免视觉吵），右半 Wiki 用米色 + Claude 橙暖色，**色温对比成为节奏锚**

### 决策点（动工程前需用户对齐 → ✅ 已对齐 2026-05-21）

1. **SEC E B站延伸 → ✅ 联网验证后走 B站卡片 stagger**（用户决策 + grok-search 多源印证 + 仿造改写避免侵权）
2. **SEC A 推文卡 → ✅ fork x-post block** 到 `compositions/components/x-post-vibe-coding.html`
3. **SEC A "完全相信 AI" 视觉 → ✅ 用 cc-window 终端**（模糊 prompt → 代码自动冒出 → just vibing）
4. **SEC E 收束 → ✅ chrome 大字"两年沉淀" + chip 缩到角落，hard cut**（不做强钩）

### 决策点（preview 后再定）

1. **shimmer-sweep component 是否启用**：当前默认不用（保持 seg00 / seg01 chrome 大字一致性）。如果 preview 看下来 SEC B "大模型 Wiki" / SEC D "复利" / SEC E "门道" 三个 hot word 缺乏区分度，**preview 后加 shimmer-sweep 强化某一个**（不是三个都加，避免视觉吵）
2. **三层架构图 schema 层"= CLAUDE.md"标注**：联网验证发现的钩子，preview 后看观众反馈是否需要——如果钩太重影响 ch2 主线，**preview 后弱化为 schema 层右下角小字 hint**

---

## 9. 自检（动工程前 main agent 自答）

| Q | 答 | 证据 |
|---|---|---|
| 真源是字幕 47-71 不是中观 PLAN 误预设？ | ✅ | §1 表字幕条号 + §13.5 已修订 PROJECT-STATE / RHYTHM-MAP 的 context engineering 误描述 |
| SEC 节奏对齐字幕时间码？ | ✅ | §1 表段内时间 vs 全片时间码 vs 字幕条三栏对应，误差 < 0.5s |
| metaphor 表覆盖每个口播关键词？ | ✅ | §2 表 5 个 SEC × 5-6 个口播条 = 27 条覆盖 |
| 视觉 = 语义扩展不是字幕翻译？ | ✅ | 例：vibe coding "不看代码只看效果" = 终端代码淡灰 mask + 绿色 ✓ chip，不是字幕"不看代码"打字 |
| 段内时间从 0 起算 + SEGMENT_DURATION 撑满？ | ✅ | §4 段顶/段末固定写法 + §3 各 SEC 用段内时间表达 |
| 段末没写 exit 动画（§hyperframes Scene Transitions Non-Negotiable）？ | ✅ | §3 SEC E 79.5-80.0s "保持画面 hold 到 80.0s（禁 exit fade）" |
| DNA 红线（chrome 大字 + Claude 橙 + 米色底 + 四件套）覆盖？ | ✅ | §3 SEC A/B/D/E chrome 大字 + Claude 橙 hot word 4 处（vibe coding / LLM Wiki / 复利 / 门道）+ 全程米色底（root 层）+ 四件套（root 层） |
| §13 资料台账 4 类齐？ | ✅ | §13 1-4 类 + §13.5 联网验证 |
| 联网验证 SEC E B站延伸事实点？ | ✅ | grok-search + Tavily 2 源 + 5 个独立 bilibili URL 印证 |
| 节奏 COOL 不抢 seg01 高密度 / 不抢 seg03 HOT？ | ✅ | Hot 色仅 4 处 hot word（非全屏），GSAP 速度放缓 30%，每 SEC 内部留 hold |

---

## 10. 下一步

PLAN §1-§10 + §13 已全部完成，跟用户对齐通过后动工程：

1. 写 `compositions/seg02-gainian.html` —— 5 SEC HTML + GSAP timeline
2. `npx hyperframes add x-post` → `cp` fork 到 `compositions/components/x-post-vibe-coding.html`
3. 检查 / 补 `assets/logos/obsidian.svg`
4. `link` 或 cp `templates/components/cc-window/cc-window.css` 到工程
5. 在 `index.html` 加挂载（§6）
6. `npx hyperframes lint`（必须 0 errors）+ `npx hyperframes validate`（0 contrast warnings）
7. `npx hyperframes preview` 浏览器审 + 用户审过
8. 按修订后的 §12.a：**preview 验过即算"段验过"，不 render 单段 mp4**
9. commit + 更新 PROJECT-STATE.md §3 表 ch2 行（⬜ → 🟢 + commit hash）
10. 切新对话开 seg03（按 §4.6 §12.d 强制切对话规则）

---

## 修订日志

- **2026-05-21 早**：建立本文件。仅 §13 资料台账 + 字幕条对应表完成。正文 §2-§10 待跟用户对齐 §13 后再写。
- **2026-05-21 晚**：用户对齐 §13 4 个决策点（SEC E 联网验证 / SEC A fork x-post / SEC A 用 cc-window / SEC E 收束 chrome 大字 + chip）。完成联网验证（B站 5 个独立 bilibili URL + Schema = CLAUDE.md 钩子发现）。回填 §13.5 + 写完 §2-§10。**PLAN 正文完成，待用户对齐后动工程。**
