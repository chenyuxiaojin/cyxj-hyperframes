# PLAN-seg07-ch7-1-shichang — 预测 1 · 上下文集市 · SOP 接入

> 本段适用 §7（SRT 真源）/ §8（段内时间从 0）/ §10（SEGMENT_DURATION + tl.set 撑满）/ §11（cutaway）/ §12.a-b（preview 验过 + commit）/ §13（资料台账）。seg06→seg07 默认 hard cut（§9），SEC A 承接 seg06 SEC F 米色暖深底 #F0E5D2 + 3 空白卡片 cliffhanger，前 0.5s 暗场缓冲。

- **段编号**：seg07（章别名 ch7-1）
- **段长**：**85.5s**（用户 2026-05-22 PLAN gate G1 决议）
- **全片位置**：14:40.766 → 16:06.266（≈ 字幕 310-339；340 不含）
- **形态**：cutaway
- **真源**：`字幕/加入之后.srt` 第 310-339 条

---

## ✅ PLAN gate 决议（2026-05-22 用户确认）

### G1 段长 — **85.5s**（不含 340 桥接）

seg07 = 字幕条 310-**339**，段长 **85.5s**。字幕 340「就是然后第二个的话」交给 seg08 SEC A 作为入场首条字幕。

- §3 表 seg07 估算 120s → 实际 **85.5s**，差 −34.5s
- §3 表段长 + 段起点 + 11 段总和（1292s）平衡**延后到 seg08 PLAN 时同步校准**（用户决议，避免每段都改全表）
- 本段不留前置暗场（seg06 SEC F 末 hard cut 直接接 seg07 SEC A）

### G2 主比喻 — **SOP 接入（具体例子驱动）**

整段叙事框架 = "**一个会计师把 SOP 打包 → 上架 → 另一家小公司财务下载即用**" 这条具体情景。**SEC C 字幕 321-329（29.2s 段最长）是视觉锚 / 整段 hot moment**。SEC A 立反面（GPTs prompt 模板 = 不值钱）→ SEC B 立正面定义（skill + 工作流 + 项目记忆 + 评测打包）→ SEC C 情景演绎 → SEC D Codex 已经在做佐证趋势。

主视觉物件：
- **上下文包立方体**（SEC B 拼装 → SEC C 上架→下载 → SEC D callback）—— skill + 工作流 + 项目记忆 + 评测 4 块拼合的方形容器图标，**全段贯穿**
- **货架 / 集市图标**（SEC B 末 + SEC C-3）—— 装上下文包的位置
- **会计师 + 小公司财务两个抽象角色**（SEC C 演绎）—— SVG icons 不用真人头像
- **cc-window 一行命令**（SEC C-4 复用）—— Claude 按 SOP 跑的现场感

### G3 Codex 真截图 — **用户已提供** ✅

`assets/screenshots/codex-plugins.png`（840KB，**2026-05-22 用户提供 + 重命名 ASCII**）。截图内容 = OpenAI Codex 插件市场页面：
- 标题：「**让 Codex 按你的方式工作**」（强烈呼应字幕"按打包的方式跑"）
- 顶部 tab：**「插件 / 技能」双 tab**（直接对应字幕"skill"+"工作流"）
- 搜索栏：「搜索插件 / Built by OpenAI / 全部」(集市分类)
- 横幅卡片：Gmail 插件演示 + "在对话中试用"按钮
- Featured 分类：Computer Use / Chrome / Spreadsheets / Presentations
- Coding 分类：Hugging Face / Vercel / Superpowers / CircleCI / Sentry / GitHub / Cloudflare / Netlify / Game Studio / Build iOS Apps（10+ tile）

**双源验证强度满分**：截图是 OpenAI 官方页面（一手源）+ 内容 = 应用商店式插件市场（与字幕 332-337 完美对应）。SEC D-2 marker sweep 位置已具体化（见 §2 metaphor 表）。

---

## 0. 本段的核心叙事

seg07 是**三个预测的第一个** —— 把 seg06 SEC F 留下的 3 个空白卡片中的「01」填上内容：**上下文集市**。

- **主比喻**：会计师把 SOP 打包成"上下文包" → 上架到集市 → 小公司财务下载即用 → Claude 按这条 SOP 跑
- **关键论点（卡帕西原话方向）**：
  - ❌ 不是 GPTs 那种 prompt 模板 / 营销文案模板（不值钱）
  - ✅ 是 **skill + 工作流 + 项目记忆 + 评测循环** 打包成"上下文包"（值钱）
  - ✅ Codex 已经走在前面（"加了插件功能"），A 社不跟也得跟
- **callback seg06**：开头 0.5s callback seg06 SEC F 三空白卡片的「01」亮起；末尾不 callback（让 seg08 自己开门 / 不抢 seg08 hot moment）
- **下一段连接**：SEC D 末 chrome 小字 "A 社不跟也得跟 / 可能做得更好" hold 1.5s → hard cut 到 seg08（字幕 340 起 "就是然后第二个的话"由 seg08 SEC A 入场）。**seg07 不做 outro fade**（§18）

---

## §13 资料台账

### 官方文档 / skill

- `hyperframes`：visual identity → end-state layout → GSAP timeline；scene-content 用 flex / grid 不靠 absolute（§14）；Layout Before Animation。
- `gsap`：position parameter `"<"` `">"`；`autoAlpha`；stagger；SVG path strokeDashoffset（上下文包立方体 4 边描线入场用）；`MotionPathPlugin` 沿路径运动（**上下文包"上架→下载"运动轨迹**用 SEC C）。
- `docs/HARD_CONSTRAINTS.md`：N9 selector / N15 字体硬编码 / N17 米色底 contrast / N18 段末禁 exit / N19 commit 节奏。

### 事实复核（写 v1 前必跑）

- **Codex 插件功能** —— SRT 332-337「Codex 走在前面 / 加入了一个插件的功能 / 基本上就是把很多内容都给打包了」。**需双源 grok-search 核对**：① OpenAI 官方是否发布过 Codex CLI 的 "plugin / extension / addon" 功能（2026-Q1-Q2 时间窗）；② 社区/媒体报道（TechCrunch / Verge / Twitter 等）有没有解读 Codex 这个功能。结果写入 `研究/07-codex-plugins-evidence.md`。
- **A 社"上下文集市"是否已有公开线索** —— 字幕 311「我猜测 A 社可能会做」表明是预测不是已有事实。视频里口播保持"预测"语气（**不准在 HF 视觉里暗示这是 A 社已发布的产品**）。如果 grok-search 发现 A 社近期发布过相关产品（skill marketplace / context store 之类），HF 视觉仍按"预测"立场处理（**§7 SRT 真源不擅自改**）。

### 真实素材清单（**双层视觉规则继承 seg06**）

> 卡顶 logo / 图标 = 第 1 层品牌识别 / 卡中截图 = 第 2 层实物证据。本段大部分是抽象情景演绎（会计 / 财务 / SOP 打包 / 货架）—— **抽象情景用自建 SVG icons，不用真截图**（视觉清晰度更高，DNA 一致性更强）。**只有 SEC D 真实产品功能（Codex 插件）走真截图**。

#### SEC A 反面卡（GPTs / Gem prompt 模板 = 不值钱）

| 元素 | 资产 | 处理 |
|---|---|---|
| GPTs logo | `assets/logos/openai.svg` | 灰化（filter: grayscale + opacity 0.5），chip "OpenAI GPTs" |
| Gemini logo | `assets/logos/gemini.svg` | 灰化同上，chip "Google Gem" |
| "prompt 模板"小卡片 | 自建 HTML 卡（米色暖底 + 1px 灰边框 + 文字 "营销文案模板"） | **不抓真截图**（属性是反面例证，灰处理 + 灰打叉即可） |
| 灰打叉 | 自建 SVG ❌ | Claude 橙 → 灰 transition |

#### SEC B 上下文包立方体（**全段主视觉物件 · 首次拼装**）

| 子图标 | 资产 | 处理 |
|---|---|---|
| skill | 自建 SVG（齿轮 + 拼图块结合） | Claude 橙渐变描边 |
| 工作流 | 自建 SVG（3 节点流程图） | 米色暖深 #5A4F46 |
| 项目记忆 | 自建 SVG（文件夹 + brain） | 米色暖深 |
| 评测 | 自建 SVG（勾选 ✓ + 循环箭头） | 米色暖深 |
| 立方体容器 | 自建 SVG（3D 方块或正方形包装盒） | 米色暖底 + Claude 橙 1px 边框，**贴标签 "上下文包"** |
| 货架 / 集市图标 | 自建 SVG（3 层货架 + "市场"chip） | 米色暖深 line drawing |

#### SEC C 会计 → 小公司财务情景（**hot moment · 主峰**）

| 元素 | 资产 | 处理 |
|---|---|---|
| 会计师角色 | 自建 SVG（人物 silhouette + 算盘 / 计算器 icon） | 米色暖深 |
| 会计电脑 | 自建 SVG（笔记本电脑 outline） | 米色暖深 |
| 4 个 SOP 文档 | 自建 SVG 文档堆叠 | 4 张：月结 / 审计 / 常见错误 / 发票报销，米色暖底 + 1px 灰边框，**chrome 小字标题** |
| 打包动画 | 4 文档 → 上下文包立方体（callback SEC B） | 4 文档 morph 进立方体（**MorphSVGPlugin** 同 seg06） |
| 货架上架 | 立方体沿 motionPath 飞到货架（**MotionPathPlugin**） | 米色暖深轨迹线 |
| 小公司财务角色 | 自建 SVG（人物 silhouette + 电脑） | 与会计师对称 |
| 下载动画 | 立方体从货架沿 motionPath 飞到财务电脑 | 米色暖深轨迹线 |
| cc-window 命令 | 复用 `templates/components/cc-window`，**只一行**：`> /skill use accounting-month-end` | char-scramble 0.6s 解码 + 光标闪烁 |
| "不需要重新解释流程" | chrome 小字 | 米色底暖版渐变 |

#### SEC D Codex 真截图（**G3 决议：用户提供 ✅**）

| 元素 | 资产 | 处理 |
|---|---|---|
| Codex 真截图 | `assets/screenshots/codex-plugins.png` ✅ **已就位** | 840KB，OpenAI 官方插件市场页 |
| OpenAI logo | `assets/logos/openai.svg` | **不灰化**（截图卡需识别，与 SEC A 灰化区分） |
| chip "Codex 已经走在前面" | chrome 小字 + Claude 橙渐变下划线 | hot moment |
| chip "A 社不跟也得跟" | chrome 小字 + Claude 橙背景 | 段末 hot moment |
| 「01 / 03」chip callback | spec-fill 一行 | 浮在 SEC D 开头，呼应 seg06 SEC F 三空白卡的"01" |

**截图关键元素 marker sweep 位置（v1 实现按此精确定位）：**

| 位置 | 截图坐标（视觉相对） | marker sweep 目的 |
|---|---|---|
| 顶部「插件 / 技能」双 tab | 左上角 | 呼应字幕"skill 加工作流"——直接证据 |
| 标题"让 Codex 按你的方式工作" | 上方居中 | 呼应"按打包方式跑"——hot moment |
| Coding 分类下多个插件 tile | 中下区域 | 呼应"把很多内容都给打包了"——量感证据 |
| 横幅"在对话中试用"按钮 | 中部横幅内 | 呼应"接入"动作（如果时间够） |

#### 全段 logo 索引

已就位：`anthropic.svg` / `claude.svg` / `openai.svg` / `gemini.svg`（如缺要 ls 确认）。**不用**：Karpathy 头像（本段无 Karpathy 引用）/ eureka logo / 课程 logo / 其他 33 厂商 logo。

#### **资产命名纪律**

- ✅ `assets/screenshots/codex-plugins.png`（新建）
- ✅ `assets/logos/openai.svg`、`assets/logos/gemini.svg`、`assets/logos/anthropic.svg`、`assets/logos/claude.svg`（已就位 ls 确认）

### 参考工程

- `compositions/seg06-merge.html`：对位卡 layout + 双层视觉规则 + chrome 大字 1 次唯一位 + Claude 橙 hot 词节奏——**全段 layout / 节奏框架直接借鉴**；SEC C 上下文包 SEC B 立方体拼装借鉴 seg06 SEC E 双河 MorphSVG。
- `compositions/seg05-merge.html`：双层 / 上下结构——**SEC C 会计 / 财务左右双区**借鉴。
- `compositions/seg04-wrapper.html`：太阳系（同心轨道）——**不复用**。seg07 是流程演绎不是结构剖面。
- `compositions/seg03-momentum.html`：Ramp / Anthropic JV 真截图卡——**SEC D Codex 真截图卡 layout** 复用此节奏。
- `videos/2026-05-04-claude-19-tips-hf/`：cc-window 实战节奏——**仅复用 cc-window 用法**。

### 官方零件清单（templates/components/ 已抽）

| 零件 | 用途 | 用在哪 |
|---|---|---|
| `cc-window` | Claude Code 终端 UI | SEC C-4 一行命令 `/skill use accounting-month-end` |
| `xcyj-tokens` | DNA 颜色 / 字体 token | 全段 |
| `text-effects.char-scramble` | Matrix 字符解码 | SEC B 子图标标题 + SEC C cc-window 命令 + SEC D-2 Codex 截图卡标题 |
| **marker-sweep（工程内自建）** | 高亮 marker | SEC A "不值钱" 划过 + SEC C "开箱即用" + SEC D "A 社不跟也得跟"。**不是 templates/components/ 零件** —— 复制 `compositions/seg06-merge.html` 的 `.a-marker-sweep` CSS class（line 217-231，linear-gradient + mix-blend-mode: multiply）+ GSAP `tl.fromTo({left: '-100%'}, {left: '100%', duration: 1.4, ease: 'power2.inOut'})` 用法 |
| `spec-fill` | 逐行填充 | SEC B 4 子图标定义 + SEC D-2 Codex 功能描述 |

不用：`orbit-dots`（不切题）/ `pulse-bars`（不切题）/ `shake-error`（无错误瞬间）/ `text-effects.token-chunks`（避免与 seg04 / 06 重复用法）。

### 不用的 catalog

- `flowchart` / `data-chart`：seg07 是情景演绎不是流程图 / 数据图
- `whip-pan` / `flash-through-white` / `cinematic-zoom`：seg06→seg07 / seg07→seg08 均默认 hard cut（§9）
- `macos-notification` / `yt-lower-third`：本段无社交 UI 触发

---

## 1. 字幕条对应 + SEC 切分 + 节奏标签

> SRT 时间码已精确到毫秒。

| SEC | 字幕条 | 段内时间 | 段长 | 节奏 | 主题 |
|---|---|---|---:|---|---|
| A | 310-315 | 0.0-23.5s | 23.5 | **COOL → WARM** | 排除式立论：不是 GPTs prompt 模板，不值钱 |
| B | 316-320 | 23.5-33.6s | 10.1 | **WARM** | 真正集市定义：skill + 工作流 + 项目记忆 + 评测 → 上下文包 → 集市 |
| C | 321-329 | 33.6-62.8s | 29.2 | **GLOW（4 幕） · 主峰** | 会计 SOP → 上下文包 → 货架 → 小公司财务下载 → Claude 按 SOP 跑 |
| D | 330-339 | 62.8-85.5s | 22.7 | **HOT 收束** | Codex 已经走在前面 + A 社不跟也得跟（可能做得更好） |

合计：23.5 + 10.1 + 29.2 + 22.7 = **85.5s** ✓

SEC 之间 hard cut（§9）。SEC C 段长 29.2s **内部分四幕**（C-1 会计 SOP 立 ~8s + C-2 4 文档打包 ~2s + C-3 上架→下载 ~6s + C-4 Claude 按 SOP 跑 ~13s）以保持高密度节奏感。

**SEC D 末禁 exit fade**（§18）：seg07 不是 outro，三个预测之一占位卡 hold 后 hard cut 到 seg08。

---

## 2. metaphor 表（语义扩展，禁字幕直译）

| 口播 | SEC | 视觉语义扩展 |
|---|---|---|
| "然后先说第一个" | A 入 | 屏幕从 seg06 SEC F 米色暖深底 #F0E5D2 + 3 空白卡片 hard cut。屏幕底色保持 #F0E5D2 0.5s → 中央 3 空白卡片中的「01」**亮起 + scale 1.4×**（autoAlpha 0.4→1 + Claude 橙边框，1.2s），其他两卡 autoAlpha 0.4 缩到屏幕底退到背景。**callback seg06 SEC F cliffhanger 强势接续** |
| "我猜测 A 社可能会做一个上下文集市" | A 中-1 | 「01」卡内浮出 chrome 小字 `上下文集市`（米色底暖版渐变 36px，token-stagger 0.06s 1s 入场）+ 卡顶贴 `assets/logos/anthropic.svg` 1.2× scale（Claude 橙 halo glow）。chip "预测 1 · prediction 1"（Claude 橙背景 + 白字 18px）浮在卡上方 |
| "就是不是那种写一个营销文案的提示模板 / 或者说写一个提示词的那种固定的 agent" | A 中-2 | 屏幕左侧浮出**反面卡片** 2 张横排：左卡 "营销文案模板"（米色暖底 1px 灰边框 + 灰文字），右卡 "客服 prompt agent"（同样）。两卡灰化（filter: grayscale + opacity 0.6） |
| "那种东西其实是不值钱的" | A 中-3 | 两张灰卡上方各浮出**灰打叉 ❌**（Claude 橙 → 灰 transition 0.6s）+ chip "不值钱 · not valuable"（灰色暖底 18px）。**marker sweep 灰色划过"不值钱"3 字** 1.4s |
| "现在的 Gemini 和 GPT 的 GPTs，他们很早就在做了" | A 末 | 两张灰卡下方贴 logo 横排：左 `gemini.svg` 灰化 + chip "Google Gem"；右 `openai.svg` 灰化 + chip "GPTs"（**灰化是关键 · DNA 红线 hot 色每 beat 只一个，灰处理 = 不抢 Anthropic 橙焦点**）。chip "他们很早就在做" 米色暖底 16px 小字浮在下方 |
| "我觉得更可能的东西是那种技能 / 就是 skill 加工作流 / 然后加项目记忆加评测循环" | B 入 | 全屏 hard cut：A 段所有反面卡 + GPTs / Gem logo 全部 autoAlpha → 0（1s）。屏幕中央 hard cut 切到米色暖底 #F7F2EA（**从米色暖深 #F0E5D2 升到米色暖底**——视觉从"反面冷"切到"正面暖"）。屏幕中央**4 个子图标 stagger 从四个方向飞入**：上左 `skill` icon（齿轮+拼图）、上右 `工作流` icon（3 节点流程）、下左 `项目记忆` icon（文件夹+brain）、下右 `评测` icon（勾选+循环箭头）。每个图标 char-scramble 标题入场（Claude 橙渐变） |
| "打包成一个上下文包" | B 中 | **4 个子图标向中央聚合**（MotionPathPlugin 4 路径汇到中心，1.2s ease-in-out）→ 中心**morph 成一个"上下文包"立方体**（MorphSVGPlugin 4 path → 1 cube，1.5s）。立方体米色暖底 + Claude 橙 1px 边框 + 标签贴 "上下文包"（chrome 小字 28px）。**stagger + morph 是 SEC B 的视觉锚** |
| "放到一个市场里面 / 让人按需求接入" | B 末 | 立方体下方 stagger 浮出**货架 / 集市图标**（3 层米色暖深 line drawing，每层 0.4s 间隔出现）+ chip "市场 · marketplace"（米色暖深 chip 1px 灰边框）。立方体**沿 motionPath 飞到货架上层**（1s，ease-in-out）。**SEC B hot moment：上下文包 + 货架 + 市场 chip 三者同框** |
| "比如说举个例子，一个会计" | C-1 入（33.6-35.5s · 1.9s）| 全屏 hard cut：SEC B 上下文包 + 货架缩到屏幕底 1/4（scale 0.4 + translateY 320px），变成 SEC C 的背景脉络。屏幕上 3/4 切到**左右双区 layout**：左区入场**会计师角色** SVG（人物 silhouette + 算盘 icon + 笔记本电脑 outline，米色暖深 #5A4F46，stagger 0.4s 三件 component 入场） |
| "把他的月结流程，把他的审计的 SOP / 遇到的一些常见错误 发票报销" | C-1 中（35.5-43s · 7.5s）| 会计电脑上方浮出 **4 张 SOP 文档** stagger 入场（autoAlpha 0→1 + y: 16→0 + 0.4s 间隔/张）：① `月结流程` ② `审计 SOP` ③ `常见错误` ④ `发票报销`。每张文档米色暖底 + 1px 灰边框 + 文档头标题（chrome 小字 18px）。文档之间用米色暖深 1px 连接线表示"同一会计的 4 件资产"|
| "这些流程全部给打包上架" | C-2（43-45s · 2s）| **SEC C 第一个 hot moment**：4 张 SOP 文档**同时向中央聚合 + morph 进上下文包立方体**（MorphSVGPlugin 4 path → 1 cube，1.5s）。立方体出现在屏幕中央（callback SEC B 视觉 + chip 贴 "会计 · 上下文包"）。**4 文档→立方体的打包瞬间**是 SEC C 的视觉锚 |
| "那么另外一家小型公司的财务 / 就直接下来下来直接接入" | C-3 入（45-51s · 6s）| 屏幕右区浮出**小公司财务角色** SVG（人物 silhouette + 笔记本电脑 outline，与左侧会计师对称，米色暖深）+ chip "小公司财务"。**屏幕中央立方体沿 motionPath 飞到货架**（callback SEC B 货架，1.2s）→ **再从货架沿 motionPath 飞到财务电脑**（1.4s）。**两段连续 motionPath** = "上架→下载"完整流程视觉化 |
| "然后 Claude 就能根据这一家厉害的公司 / 的一个流程去跑" | C-4 入（51-56s · 5s）| 财务电脑屏幕**亮起 Claude 橙 halo**（box-shadow 0→40px Claude 橙，0.8s）→ 电脑屏幕内**展开 cc-window 一行**（**复用 `templates/components/cc-window`**，300×60px，char-scramble 0.6s 解码）：<br>`> /skill use accounting-month-end`<br>光标闪烁。**cc-window 是 SEC C-4 的现场感锚** |
| "他就不需要重新去解释流程" | C-4 中（56-61s · 5s）| **SEC C 第二个 hot moment / 全段 chrome 大字唯一位**：屏幕中央上方慢推 chrome 大字 `开箱即用 · plug & play`（**米色底暖版 8-stop chrome 80px**，token-stagger 0.08s 字符级入场 + filter blur 14px→0，1.5s）。**全段 85.5s 蓄势在此爆发**。chrome 大字下方浮出 spec-fill 一行 `· 不需要重新解释流程`（米色暖深 18px） |
| "然后往这一个方向的延伸 / 是我觉得是顺理成章的" | C-4 末 / D 入（61-66s · 5s）| 全屏 hard cut：SEC C 所有元素 autoAlpha → 0（0.8s）。屏幕背景保持米色暖底 #F7F2EA。屏幕中央浮出 chrome 小字 `顺理成章的延伸 · natural extension`（米色底暖版渐变 36px，**非大字**）。屏幕底部浮出 callback chip：seg06 SEC F 三空白卡的「01」缩略图 hold（米色暖底 80×60px + 卡片号 chrome 36px） |
| "而且这一块的话 / Codex 已经走在前面了" | D-1（66-71s · 5s）| 屏幕中央**对位卡 layout** 入场（复用 seg06 layout 框架但只一卡）：单卡居中 600×360px，米色暖底 + 1px Claude 橙边框（**这是 SEC D 的主信号 · Claude 橙边框强调份量**）。卡顶 `openai.svg` 1.0× scale（**这次不灰化** — 真截图卡需要识别），chip 标题 char-scramble `Codex · 走在前面` （Claude 橙渐变 36px）|
| "就是为什么最近 Codex / 大家会觉得越来越好用了" | D-2 入（71-75s · 4s）| 卡内贴 `codex-plugins.png` 真截图 460×260px（spring back.out 1.4，1.2s 入场）。截图下方 chip "越来越好用 · increasingly useful"（米色暖底 18px）|
| "其实就是因为 Codex 在他的一个 / 加入了一个插件的功能" | D-2 中（75-79s · 4s）| **marker sweep 划过截图左上角"插件 / 技能"双 tab 区域**（Claude 橙渐变，1.4s power2.inOut）—— **直接呼应"加了插件的功能"+ 暗合卡帕西字幕 skill**。spec-fill 一行 `· 加了插件功能` 浮在截图下方 |
| "就是基本上就是把很多内容都给打包了" | D-2 末（79-81s · 2s）| **第二道 marker sweep 划过截图中下 Coding 分类的插件 tile 阵列**（Hugging Face / Vercel / GitHub / Cloudflare / Sentry / Netlify ... ≥10 tile，Claude 橙 1.4s）—— 视觉"量感证据"。截图下方 spec-fill 第二行 `· 把很多内容打包`（米色暖深 18px）|
| "这是我觉得 A 社不跟也得跟的 / 只不过可能会做得更好" | D-3（81-85.5s · 4.5s）| **SEC D hot moment**：屏幕底部浮出 chrome 小字 `A 社不跟也得跟 · A must follow`（**米色底暖版渐变 chrome 40px**，token-stagger 0.06s 字符级入场 1s + marker sweep Claude 橙划过 1.4s）。chrome 小字下方再叠 chip "可能做得更好"（Claude 橙背景 + 白字 18px）。**hold 1.5s 进 seg08 hard cut**（**禁 exit fade · §18**） |

---

## 3. 视觉骨架（每 SEC 一段，重点说节奏）

### SEC A · 排除立论（0.0-23.5s · COOL → WARM）

**目的**：在 23.5 秒内把"上下文集市是什么 / 不是什么"区分清楚。**继承 seg06 SEC F**——seg06 末是米色暖深底 #F0E5D2 + 3 空白卡片 hold（"01 / 02 / 03"+ chip "三个预测 · 纯主观"）。seg07 SEC A 直接接续："01"卡亮起、扩展、变成 chrome 小字 `上下文集市`。

**节奏曲线**：「01」卡亮起 → chrome 小字标题 → 反面卡片 2 张 → 灰打叉 → GPTs / Gem 灰 logo 收束。

**实现**：
- 0-1.2s（callback seg06 SEC F · 「01」卡亮起）：屏幕承接 seg06 末米色暖深底 #F0E5D2 + 3 空白卡片 hold 状态。**「01」卡 autoAlpha 0.4→1 + scale 1.0→1.4** Claude 橙边框 1px→2px tween（1.2s ease-out）。「02」「03」两卡 autoAlpha 0.4 缩到屏幕底（translateY +280px + scale 0.6 in 1s）退到背景脉络
- 1.2-3.5s（chrome 小字 + anthropic logo）：「01」卡内浮出 chrome 小字 `上下文集市`（米色底暖版渐变 36px，token-stagger 0.06s 字符级入场 1s）。卡顶左上贴 `anthropic.svg` 1.2× scale + Claude 橙 halo glow（box-shadow 0→30px Claude 橙）。卡上方浮出 chip "预测 1 · prediction 1"（Claude 橙背景 + 白字 18px，spec-fill 一行 0.6s）
- 3.5-9s（反面卡片 2 张入场）：屏幕左侧（「01」卡左移到屏幕右半）浮出**反面卡片 2 张横排**：左卡 "营销文案模板"（米色暖底 1px 灰边框 + 灰文字 24px），右卡 "客服 prompt agent"（同样）。两卡灰化（filter: grayscale + opacity 0.6）。stagger 0.4s 左→右入场
- 9-13s（灰打叉 + "不值钱"chip）：两张灰卡上方各浮出**灰打叉 ❌**（**Claude 橙→灰 transition 0.6s/叉**）+ chip "不值钱 · not valuable"（灰色暖底 18px 浮在中央）。**marker sweep 灰色划过"不值钱"3 字** 1.4s
- 13-19s（GPTs / Gem 灰 logo）：两张灰卡下方贴 logo 横排（每个 logo 100×50px）：左 `gemini.svg` 灰化 + chip "Google Gem"；右 `openai.svg` 灰化 + chip "GPTs"。stagger 0.4s 左→右入场。chip "他们很早就在做" 浮在 logo 下方（米色暖底 16px 小字）
- 19-23.5s（hold 进 SEC B）：所有元素 hold 4.5s 长 hold —— 给观众消化"反面定义"的时间，**禁淡出**（hard cut 到 SEC B）

**关键纪律**：
- SEC A 不出现 chrome 大字（本段 chrome 大字只给 SEC C-4 `开箱即用 · plug & play` 一次）
- 灰打叉是 SEC A 视觉锚——不可省（卡帕西原话"不值钱"必须视觉化打叉，不能只靠口播）
- GPTs / Gem logo 必须灰化—— DNA 红线 hot 色每 beat 只一个，灰处理 = 视觉冷反差强调"那种不值钱"
- 「01」卡缩到右半屏 hold 整个 SEC A —— 视觉锚保持 seg06 callback 连续性

---

### SEC B · 真正集市定义 / 上下文包拼装（23.5-33.6s · WARM · 10.1s）

**目的**：把"skill + 工作流 + 项目记忆 + 评测 → 上下文包 → 市场"四步定义视觉化。**SEC B 短而密**——10.1s 内完成 4 子图标入场 + morph 成立方体 + 飞到货架，节奏紧凑。

**节奏曲线**：底色升温 + 4 子图标 stagger 飞入 → MorphSVG 聚合成立方体 → 飞到货架。

**实现**：
- 23.5-24.5s（底色升温 + SEC A 元素淡出）：屏幕底色 hard cut 从米色暖深 #F0E5D2 → 米色暖底 #F7F2EA（视觉"反面冷 → 正面暖"）。SEC A 所有元素（「01」卡 + 反面卡 + 灰 logo + chip）全部 autoAlpha → 0（1s）
- 24.5-26.5s（**4 子图标 stagger 飞入**）：屏幕中央**4 个子图标 stagger 从四个方向飞入**（MotionPathPlugin 4 路径，stagger 0.3s 间隔）：
  - 上左：`skill` SVG icon（齿轮 + 拼图块，Claude 橙渐变描边 60×60px）+ char-scramble 标题 `skill`
  - 上右：`工作流` SVG icon（3 节点流程图，米色暖深 60×60px）+ 标题 `工作流`
  - 下左：`项目记忆` SVG icon（文件夹 + brain，米色暖深 60×60px）+ 标题 `项目记忆`
  - 下右：`评测` SVG icon（勾选 ✓ + 循环箭头，米色暖深 60×60px）+ 标题 `评测`
  - 每个图标从屏幕边缘飞入到屏幕中央 4 个象限位（飞入时间 0.6s + 0.3s stagger 间隔）
- 26.5-28.5s（**4 图标→立方体 morph**）：4 个子图标**向中央聚合**（4 路径汇到中心，1.2s ease-in-out）→ 中心**morph 成上下文包立方体**（MorphSVGPlugin 4 path → 1 cube，1.5s）。立方体 100×100px 米色暖底 + Claude 橙 1px 边框 + 标签 "上下文包"（chrome 小字 28px 浮在立方体下方）
- 28.5-30s（货架入场）：立方体下方 stagger 浮出**3 层货架**（米色暖深 line drawing，每层 200×40px，stagger 0.4s 间隔）+ chip "市场 · marketplace"（米色暖深 chip 1px 灰边框，浮在货架左下方）
- 30-31s（**立方体飞到货架**）：上下文包立方体**沿 motionPath 飞到货架上层**（1s，ease-in-out + scale 1→0.6 缩小到货架格子大小）
- 31-33.6s（hold 进 SEC C）：上下文包在货架上 + chip "市场" + 4 子图标残留标签 hold 2.6s **禁淡出**

**关键纪律**：
- SEC B 是 SEC C 主峰前的"概念铺垫"——节奏紧凑不拖
- 4 子图标必须 stagger 入场不是同时蹦出（**DNA 红线**：禁全屏一次蹦出）
- 上下文包立方体是**全段贯穿主物件**——SEC C 还要复用、SEC D 还要 callback；**SEC B 是它第一次出现**，立面要清楚
- 货架视觉**不要花哨**——3 层 line drawing 即可，重点是"上架"动作不是"货架本身的视觉"

---

### SEC C · 会计 SOP → 小公司财务下载（33.6-62.8s · GLOW 主峰 · 29.2s）

**目的**：把"主比喻 SOP 接入"演绎到位 —— 这是 seg07 视觉锚 + chrome 大字位 + 全段 hot moment。**4 幕子结构**清晰切分。

**节奏曲线**：C-1 会计立场景 → C-2 4 文档打包 → C-3 上架→下载流程 → C-4 Claude 跑 + chrome 大字爆发。

#### C-1 · 会计 SOP 立场景（33.6-43s · 9.4s）

- 33.6-35.5s（layout 切换）：SEC B 上下文包 + 货架缩到屏幕底 1/4 当背景脉络（scale 0.4 + translateY +320px in 1.2s，origin 中央）。**屏幕上 3/4 空出**给 SEC C 左右双区 layout
- 35.5-37s（**会计师角色入场**）：屏幕左半浮出会计师角色 SVG（人物 silhouette 100×120px）+ 算盘 icon 60×40px + 笔记本电脑 outline 120×80px，米色暖深 #5A4F46，stagger 0.4s 三件 component 入场。chip "会计 · accountant"（米色暖底 18px）浮在角色上方
- 37-43s（**4 张 SOP 文档 stagger 入场**）：会计电脑上方浮出 **4 张 SOP 文档**横排（每张 100×120px，米色暖底 + 1px 灰边框 + 文档头标题 chrome 小字 18px），stagger 0.4s 间隔入场：
  - ① `月结流程`
  - ② `审计 SOP`
  - ③ `常见错误`
  - ④ `发票报销`
  - 4 张文档之间用米色暖深 1px 连接线连接（表示"同一会计的 4 件资产"）

#### C-2 · 4 文档打包成上下文包（43-45s · 2s）

- 43-44.5s（**4 文档→立方体 morph**）：4 张 SOP 文档**同时向中央聚合 + morph 进上下文包立方体**（MorphSVGPlugin 4 path → 1 cube，1.5s）。立方体出现在屏幕中央（**callback SEC B 立方体视觉** + chip 贴 "会计 · 上下文包"，米色暖底 18px）。**4 文档→立方体的打包瞬间**是 SEC C 的视觉锚之一
- 44.5-45s（短 hold）：立方体居中 hold 0.5s

#### C-3 · 上架→下载流程（45-51s · 6s）

- 45-46.5s（**小公司财务角色入场**）：屏幕右半浮出小公司财务角色 SVG（人物 silhouette + 笔记本电脑 outline，与左侧会计师对称，米色暖深 100×120px + 120×80px）+ chip "小公司财务"（米色暖底 18px）。stagger 0.4s 双 component
- 46.5-48s（**立方体→货架 motionPath**）：屏幕中央立方体**沿 motionPath 飞到货架**（callback SEC B 货架，1.2s，ease-in-out + scale 1→0.6 缩到货架格子大小）。motionPath 是米色暖深 dashed 1px 轨迹线
- 48-49.5s（**立方体→财务电脑 motionPath**）：立方体**从货架沿 motionPath 飞到财务电脑**（1.4s，ease-in-out + scale 0.6→1 放大回原大小）。motionPath 同样米色暖深 dashed 1px 轨迹线。**两段连续 motionPath = "上架→下载"完整流程视觉化**
- 49.5-51s（hold 进 C-4）：财务电脑前立方体 hold 1.5s

#### C-4 · Claude 按 SOP 跑 + chrome 大字爆发（51-62.8s · 11.8s）

- 51-51.8s（财务电脑亮起 Claude halo）：财务电脑屏幕**亮起 Claude 橙 halo**（box-shadow 0→40px Claude 橙，0.8s）—— 信号"Claude 接管"
- 51.8-54s（**cc-window 一行命令现场**）：电脑屏幕内**展开 cc-window 一行**（复用 `templates/components/cc-window`，300×60px，char-scramble 0.6s 解码）：<br>```> /skill use accounting-month-end```<br>光标闪烁（每 0.5s 一次）。**cc-window 是 SEC C-4 的现场感锚**
- 54-56s（hold cc-window 静审）：cc-window 一行命令 hold 2s 让观众读完
- 56-58s（**chrome 大字 · 全段唯一**）：屏幕中央上方慢推 **chrome 大字 `开箱即用 · plug & play`**（**米色底暖版 8-stop chrome 80px**——全段 85.5s 终极 hot moment）。token-stagger 0.08s 字符级入场 + filter blur 14px→0（1.5s）
- 58-60s（chrome 大字 hold + spec-fill 注脚）：chrome 大字下方浮出 spec-fill 一行 `· 不需要重新解释流程`（米色暖深 18px，1s spec-fill 入场 + hold 1s）
- 60-62.8s（hold 进 SEC D）：cc-window + chrome 大字 + spec-fill + 立方体 + 财务电脑 全部 hold 2.8s **禁淡出**

**关键纪律**：
- SEC C-4 是**全段 chrome 大字唯一位**——不能在 SEC A/B/D 任何位置出大字
- 4 文档→立方体的 MorphSVG 是 SEC C 视觉锚之一，立方体上架→下载的 motionPath 是另一个锚 —— **两者一起构成"打包 + 接入"完整视觉**
- cc-window 只用一次（一行命令），不展开整个终端 UI（避免抢 chrome 大字焦点）
- 会计师 / 财务两个角色用**抽象 SVG silhouette**——不要换成真人头像（违反 DNA 一致性）

---

### SEC D · Codex 已经在做 + A 社不跟也得跟（62.8-85.5s · HOT 收束 · 22.7s）

**目的**：用 Codex 真截图佐证"上下文集市"已经有先例（Codex 加了插件功能），收束到"A 社不跟也得跟，只不过可能做得更好"。**SEC D 是预测的信号支撑层**。

**节奏曲线**：D-1 顺理成章 + callback 「01」chip → D-2 Codex 真截图卡 → D-3 chrome 小字"A 社不跟也得跟" hot moment + hard cut。

#### D-1 · 顺理成章 + callback 「01」chip（62.8-67.8s · 5s）

- 62.8-63.5s（layout 切换）：SEC C 所有元素（会计 / 财务 / 文档 / 立方体 / cc-window / chrome 大字）全部 autoAlpha → 0（0.7s）。屏幕背景保持米色暖底 #F7F2EA
- 63.5-66s（chrome 小字 + callback chip）：屏幕中央浮出 chrome 小字 `顺理成章的延伸 · natural extension`（米色底暖版渐变 36px，**非大字**，token-stagger 0.06s 1s 入场）。屏幕底部浮出 callback chip：seg06 SEC F 三空白卡的「01」缩略图 hold（米色暖底 80×60px + 卡片号 `01` chrome 36px 居中）+ chip "对应 seg06「01」"（米色暖深 16px）
- 66-67.8s（hold 进 D-2）：chrome 小字 + callback chip hold 1.8s

#### D-2 · Codex 真截图卡（67.8-81s · 13.2s）

- 67.8-69.5s（**对位卡 layout 入场**）：屏幕中央单卡居中 600×360px，米色暖底 + 1px Claude 橙边框（**Claude 橙边框 = SEC D 主信号 · 强调 Codex 是认真的先例**）。卡顶左上贴 `openai.svg` 1.0× scale + chip "OpenAI"（**这次不灰化** —— 真截图卡需要识别）
- 69.5-71s（chip 标题 char-scramble）：卡顶 chip 标题 char-scramble `Codex · 走在前面` （Claude 橙渐变 36px，0.6s 解码 + 1s hold）
- 71-75s（**Codex 真截图入场**）：卡内贴 `codex-plugins.png` 真截图 460×260px（**spring back.out 1.4，1.2s 入场**：autoAlpha 0→1 + scale 0.95→1 + y: 16→0）。截图下方 chip "越来越好用 · increasingly useful"（米色暖底 18px）
- 75-79s（spec-fill 描述 + marker sweep）：截图旁浮出 marker sweep Claude 橙划过**截图中插件功能相关区域**（**v1 实现时根据抓回来的截图实际内容定位置**——PLAN 阶段标 `[待定具体位置]`）。截图下方 spec-fill 第一行入场 `· 加了插件功能`（米色暖深 18px，1s spec-fill）
- 79-81s（spec-fill 第二行 + "包" chip）：截图下方 spec-fill 第二行 `· 把很多内容打包`（米色暖深 18px，1s spec-fill）+ chip "包"（chrome 小字 + Claude 橙渐变下划线，浮在第二行下方 + 1.4s marker sweep）

#### D-3 · A 社不跟也得跟 hot moment + hard cut（81-85.5s · 4.5s）

- 81-83s（**chrome 小字 hot moment**）：屏幕底部浮出 chrome 小字 `A 社不跟也得跟 · A must follow`（**米色底暖版渐变 chrome 40px**——本段 4 个 hot moment 之四，**与 SEC C-4 chrome 大字 80px 区分**：D-3 是 chrome 中字 40px，不抢主峰）。token-stagger 0.06s 字符级入场 1s + marker sweep Claude 橙划过 1.4s
- 83-84s（chip "可能做得更好"）：chrome 小字下方再叠 chip "可能做得更好"（**Claude 橙背景 + 白字 18px**，spec-fill 一行 0.4s 入场）
- 84-85.5s（**hold 1.5s 进 seg08 hard cut**）：Codex 真截图卡 + chrome 小字 + chip 全部 hold 1.5s → **hard cut 到 seg08**（**禁 exit fade · §18**）

**关键纪律**：
- SEC D-2 Codex 真截图**必须真截图**——不允许 HTML mock（feedback-real-screenshots-not-mocks 纪律）
- Codex 卡顶 `openai.svg` **不灰化**（与 SEC A GPTs / Gem 灰化区分）—— SEC A 是反面例证灰处理，SEC D 是先例佐证不灰化
- SEC D-3 用 **chrome 中字 40px** 不是大字 80px —— 全段 chrome 大字唯一位在 SEC C-4，不能抢
- SEC D 末禁 exit fade —— seg07 不是 outro，hard cut 到 seg08

---

## 4. index.html 挂载

在 seg06 后追加：

```html
<!-- seg07 ch7-1 预测 1 · 上下文集市 · SOP 接入 (14:40.766-16:06.266, 字幕 310-339) -->
<div
  class="clip"
  id="seg07-shichang"
  data-composition-id="seg07-shichang"
  data-composition-src="compositions/seg07-shichang.html"
  data-start="880.6"
  data-duration="85.5"
  data-track-index="1"
  data-width="1920"
  data-height="1080"
></div>
```

- `data-start="880.6"`：38 + 112 + 80 + 91 + 201 + 152 + 206.6 = **880.6s** ✓（承接 seg06 SEC F 末）
- `data-duration="85.5"`：SRT 真源校准段长（不含字幕 340 桥接）
- **下一段 seg08 的 data-start 应为 880.6 + 85.5 = 966.1s（≈ 16:06.1）**，等 PLAN-seg08 时取整精校（SRT 第 340 条 "就是然后第二个的话" 起 16:07.666，跟 966.1 差 1.5s ≈ 自然停顿，可在 seg08 SEC A 开头加 1.5s 暗场缓冲，或微调本段 data-duration）

---

## 5. 实现红线

- `SEGMENT_DURATION = 85.5`；段末 `tl.set({}, {}, SEGMENT_DURATION)` 撑满
- CSS selector 全部 `[data-composition-id="seg07-shichang"] ...`，禁用 `#seg07-shichang`（§9 bundler strip）
- GSAP selector 硬编码字符串，禁 template literal（§1）
- 字体硬编码 `"Noto Sans SC", "Inter", sans-serif` / `"JetBrains Mono", monospace`（§15）
- 米色底正文色：`#5A4F46` / `#8b3d28` / `#B5563D`（§17）
- 米色暖深底 #F0E5D2 仅 SEC A 前 1.2s 用（承接 seg06），1.2s 后升到米色暖底 #F7F2EA
- 真截图 `<img>` 标签，不要 `background-image`
- SEC 切换用 `tl.set('.sec-x', { autoAlpha: 0 }, T)` + 下一 SEC 入场，**禁 SEC 退场动画**
- **chrome 大字全段只允许 1 次**：SEC C-4 中 `开箱即用 · plug & play`。其余 chrome 用小字（SEC A 标题 36px / SEC B 标签 28px / SEC D-3 hot 40px 中字）
- **段末 SEC D 禁 exit fade**（§18，seg07 不是 outro）。chrome 小字 + chip hold 静止 hard cut 到 seg08
- MorphSVGPlugin **复用 seg06 引入**：`index.html` line 9 已含 CDN script tag（seg06 PLAN §4 引入），composition 顶部 `gsap.registerPlugin(MorphSVGPlugin)` 即可
- **MotionPathPlugin 引入**（GSAP 官方 plugin，2025-04 起跟 MorphSVG 同批免费）：`index.html` line 9 后追加 CDN script tag：
  ```html
  <script src="https://cdn.jsdelivr.net/npm/gsap@3.14.2/dist/MotionPathPlugin.min.js"></script>
  ```
  composition 顶部 `gsap.registerPlugin(MorphSVGPlugin, MotionPathPlugin)`
- SEC B 4 子图标飞入、SEC C-3 立方体"上架→下载"用 **MotionPathPlugin Bezier 曲线**实现——比 transform tween 两段直线视觉自然得多（曲线 = "飞过去"的重量感，直线 = "瞬移"）
- 上下文包立方体是**全段贯穿主物件**——SEC B 第一次拼装、SEC C-2 4 文档 morph 进、SEC C-3 上架→下载、SEC D 隐含 callback。**视觉一致性纪律**：立方体在不同 SEC 出现时的样式（大小、边框、标签）保持一致
- 4 子图标 SVG（skill / 工作流 / 项目记忆 / 评测）**首次出现** —— 需要 v1 写 composition 时自建 SVG path（不用外部 icon 库）

---

## 6. preview 验证点

- `npx hyperframes lint` 0 errors
- `npx hyperframes validate` 0 contrast warnings
- preview scrub 验证（绝对全片时间码 = 880.6 + 段内时间）：
  - `t=881`：SEC A 起，米色暖深底承接 seg06 SEC F + 「01」卡亮起
  - `t=883`：SEC A 中-1，chrome 小字 `上下文集市` + anthropic logo halo
  - `t=890`：SEC A 中-2，反面卡片 2 张灰化 + 灰打叉
  - `t=897`：SEC A 末，GPTs / Gem 灰 logo 横排
  - `t=905`：SEC B 起，米色暖底升温 + 4 子图标 stagger 飞入
  - `t=909`：SEC B 中，4 子图标 morph 成上下文包立方体
  - `t=912`：SEC B 末，立方体飞到货架 + chip "市场"
  - `t=915`：SEC C-1 起，会计师角色入场 + 4 SOP 文档 stagger
  - `t=920`：SEC C-1 中，4 SOP 文档完整入场
  - `t=924`：SEC C-2，4 文档 morph 进上下文包立方体
  - `t=927`：SEC C-3 起，财务角色入场 + 立方体上架
  - `t=930`：SEC C-3 中，立方体下载到财务电脑
  - `t=933`：SEC C-4 起，cc-window 一行命令 char-scramble
  - `t=938`：**SEC C-4 chrome 大字 `开箱即用 · plug & play` 慢推**
  - `t=940`：SEC C-4 末 hold
  - `t=945`：SEC D-1，chrome 小字 `顺理成章的延伸` + callback「01」chip
  - `t=950`：SEC D-2 起，Codex 真截图卡 layout 入场
  - `t=954`：SEC D-2 中，Codex 截图 spring 入场 + spec-fill `加了插件功能`
  - `t=961`：SEC D-2 末，spec-fill `把很多内容打包` + chip "包"
  - `t=963`：SEC D-3 起，chrome 小字 `A 社不跟也得跟` + marker sweep
  - `t=965`：SEC D-3 末，chip "可能做得更好" hold
  - `t=966.1`：seg08 第一帧应接上，seg07 无 exit fade

---

## 7. 不做的事（防漂移清单）

- ❌ chrome 大字不超过 1 次（SEC C-4 中 `开箱即用 · plug & play`），避免抢全段终极 hot moment
- ❌ SEC D 不做 exit 动画 / 不淡出 / 不切到 seg08 的"过场"（hard cut）
- ❌ 不在 SEC A/B/D 任何位置出 chrome 大字（80px 级）
- ❌ **不要给 GPTs / Gem 真截图** —— 反面例证用灰 logo + 灰文字 chip 即可，真截图浪费视觉份量
- ❌ 不混用蓝色 / 紫色 / 绿色 hot 色 —— DNA 红线 hot 色每 beat 只一个，全段 Claude 橙 + 米色暖底
- ❌ 会计师 / 财务角色用抽象 SVG silhouette —— **不要换真人头像**（违反 DNA 一致性）
- ❌ Codex 卡顶 `openai.svg` **不灰化**（与 SEC A 灰化区分）—— SEC D 是先例佐证不是反面
- ❌ cc-window 只在 SEC C-4 用一次（一行命令），不展开整个终端 UI
- ❌ 上下文包立方体的设计 **不要花哨**（米色暖底 + Claude 橙 1px 边框 + 标签）—— 抢眼会拖累整段节奏密度
- ❌ 不预告 seg08 / seg09 / seg10 的内容 —— SEC D 末禁 exit、禁桥接到下一段（与 seg06 SEC F 桥接 cliffhanger 不同：seg07 SEC D 是收束不是桥接）
- ❌ 不在 SEC A 「01」卡上方出现 Anthropic 全名 chrome 大字 —— 卡上方只用 chip "预测 1 · prediction 1"（spec-fill 18px）

---

## 8. 待办（写 v1 前必须做）

1. ✅ **Codex 真截图就位** —— `assets/screenshots/codex-plugins.png`（用户提供 + 重命名 ASCII）。截图内容超出预期：自带"插件 / 技能"双 tab + Coding 分类多 tile 阵列，直接呼应字幕"skill+工作流+打包"
2. ✅ **assets/logos/{anthropic,claude,gemini,openai}.svg 4 个都在** —— SEC A 灰化用 CSS `filter: grayscale(100%) opacity(0.5)` 即可（svg 支持 filter 控制）
3. ✅ **MorphSVGPlugin 已引入**（index.html line 9）—— composition 顶部 `gsap.registerPlugin(MorphSVGPlugin)`
4. ✅ **marker-sweep 工程内自建** —— 复制 seg06 .a-marker-sweep CSS（line 217-231）+ GSAP 用法
5. ⚠️ **MotionPathPlugin 需要在 index.html 加引入**（在 line 9 MorphSVG 后追加一行 CDN script tag） —— GSAP 官方 plugin，与 MorphSVG 同批免费；composition 顶部 `gsap.registerPlugin(MorphSVGPlugin, MotionPathPlugin)`
6. **不需要新事实研究文件** —— Codex 截图本身就是双源核心证据（OpenAI 官方页 + 内容自带 skill tab），不另开 `研究/07-codex-evidence.md`

---

## 9. PROJECT-STATE 回填 todo（PLAN 通过 + v1 验过后）

- §3 表 seg07 行段长更新：120s → **85.5s**（SRT 真源校准）
- §3 表 seg07 起点更新：14:00 → **14:40.766**（承接 seg06 末），字幕条 310-**339** 起
- §3 表 seg07 状态：⬜ todo → 🟢 完成 + commit hash
- §3 表 seg06 行（同步回填）：⬜ todo → 🟢 v1 验过 + 段长 166→206.6s + commit `22be7bb`
- §3 注更新：seg06 +40.6s + seg07 −34.5s 偏差说明 + 11 段总和（待 seg08-10 PLAN 时同步校准）
- §8 修订日志加一条：`2026-05-22 seg07 PLAN 完成，段长 85.5s，G2 主比喻 SOP 接入，G3 Codex 真截图我抓；seg06 状态同步回填`
