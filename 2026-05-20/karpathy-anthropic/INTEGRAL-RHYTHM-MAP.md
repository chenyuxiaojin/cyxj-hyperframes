# INTEGRAL-RHYTHM-MAP — karpathy-anthropic 整片中观 PLAN

> 用途：让用户能在脑里"听一遍整片节奏"，钉死 11 段 hot moment + emotional beat + 形态 + 复用计划 + 段间转场策略。每段 PLAN-seg{NN}.md 起手前先回看本文件的该段卡片。
> 真源：`字幕/加入之后.srt` + `PROJECT-STATE.md` §3 11 段拓扑表 + `PLAN-cold-open.md` 黄金范本

---

## 第 1 部分：整片节奏曲线

```
seg    ch       起点    终点    段长     情绪      形态                       hot moment
─────────────────────────────────────────────────────────────────────────────────────────
seg00  ch0      0:00    0:38    38s      HOT       cutaway                    反超撞击 (Anthropic vs OpenAI 34.44 vs 32.3)
seg01  ch1      0:38    2:30    112s     WARM      cutaway    履历列车 (UBC→Stanford 李飞飞→OpenAI 创始)
seg02  ch2      2:30    3:50    80s      COOL      cutaway    vibe coding 推文 (22s) + LLM Wiki 三层架构 (58s)
seg03  ch3      3:50    5:21    91s      HOT       cutaway    0.003→7.94→34.4 三连阶跃 + 5.4 黑石高盛
seg04  ch4      5:21    8:42    201s     WARM      cutaway    套壳从贬义到产品 · 洋葱图慢推
seg05  ch5      8:42    11:14   152s     COOL      cutaway    两条暗线交汇：Karpathy 用 Claude 训 Claude
seg06  ch6      11:14   14:00   166s     ★高潮★   cutaway    三组对位殊途同归 (Wiki↔Memory / vibe↔CC / Eureka↔Academy)
seg07  ch7-1    14:00   16:00   120s     WARM      cutaway    上下文集市预测 1
seg08  ch7-2    16:00   17:37   97s      WARM      cutaway    Goal 风格命令预测 2
seg09  ch7-3    17:37   19:24   107s     WARM      cutaway    非开发者打包工具预测 3
seg10  ch8      19:24   21:32   128s     WARM收    cutaway    Antigravity 2.0 砍 IDE + 北京交流余韵

段长加总: 38+112+80+91+201+152+166+120+97+107+128 = 1292.0s = 21:32 ✓
```

### 节奏结构

- **3 个 HOT**：seg00（cold-open 反超撞击）/ seg03（数据三连阶跃，二次崛起）/ seg06（汇流三组对位，整片高潮）
- **HOT 间隔**：seg00→seg03 中间夹 seg01 WARM + seg02 COOL（休 + 冷）→ seg03→seg06 中间夹 seg04 WARM + seg05 COOL（休 + 冷）。**两次 HOT 周期对称**，符合波形节奏
- **高潮位置**：seg06 在全片 11:14-14:00（占全片约 52-65%），**黄金分割点偏后**，符合"前期铺垫 → 中后 climax"的长片惯例
- **收尾节奏**：seg07-seg10 4 段 WARM 渐降 → outro WARM收（128s 较长，可让"北京交流"成为余韵）
- **形态分布**：默认全 cutaway（待用户改）。**如果有 talking head overlay 段**，最合理出现位置是 seg06（高潮观点段）或 seg10（outro 余韵），需用户确认

### 节奏 bug 自查

- ✅ 没有相邻两个 HOT
- ✅ 没有连续 4 段 WARM（seg07-seg10 是 WARM/WARM/WARM/WARM收，最后一段语义不同算"收"）—— 但仍要小心 seg07-seg09 三连预测节奏可能太密
- ⚠️ **seg07-seg08-seg09 三连预测节奏密度需警惕**：3 段 WARM 连排，每段 1.5-2 分钟，可能让观众疲劳。**建议 seg06 高潮后给 seg07 开头一个明显的"分段节拍"**（chip stagger 或 chapter-card overlay），让观众感受到"高潮已过，进入预测篇章"

---

## 第 2 部分：11 段中观卡片

> 每段开工前先回看本卡片。形态字段默认 `cutaway`，写 PLAN-seg{NN} 前跟用户最终确认。

---

### seg00 ch0 cold-open (段长 38.0s · 字幕 1-11)

- **形态**: cutaway ✅ 已确定
- **Hot moment**: 反超撞击（SEC D 数据折线交叉 + screen shake + ripple）
- **Emotional beat**: HOT
- **Metaphor**: 头像迁徙 + 折线交叉
- **复用 from seg00**: N/A（是黄金范本本体）
- **与前段对比**: N/A（首段）
- **风险**: 已完成，N13-N19 翻车清单全 ✅
- **出处**: 研究/03（Ramp AI Index）+ 字幕 1-11 + `图片用户收集/加入的推文.png`

---

### seg01 ch1 人物 (段长 112.0s · 字幕 12-46)

- **形态**: cutaway —— 履历讲述适合整屏动画；如果用户想出镜介绍 Karpathy，改 overlay
- **Hot moment**: Stanford 博士导师 = 李飞飞（CS 视觉教母）+ OpenAI 创始团队（2015 与 Greg Brockman / Sam Altman 同期）
- **Emotional beat**: WARM
- **Metaphor**: 履历列车 / 时间线站点（UBC 2009 → Stanford 2011→2015 → OpenAI 创始 2015 → Tesla 2017-2022 → 回 OpenAI 2023 → Eureka Labs 2024 → Anthropic 2026.5）
- **复用 from seg00**: chip stagger（每个履历站点是一个 chip）+ chrome 大字（"Stanford · 李飞飞门徒"等关键节点突出）
- **与前段对比**: seg00 是"反超撞击"高能，seg01 转入"是谁"低能铺垫。节奏从 HOT → WARM，视觉从信息密集 → 时间线舒缓
- **风险**: 履历有 7 个站点（含 internship），1:52 装下密度大。**建议拆 4 个主站点 + 3 个内嵌点**（多伦多本科 + Stanford 博士 + Tesla AI 主管 + OpenAI 联合创始人 + 跳过 Eureka 直接到 Anthropic）。形态待定（cutaway 默认 / overlay 如果用户出镜）
- **出处**: 研究/01 全文（基本信息 / 教育 / Stanford 导师李飞飞 / internships / 职业轨迹）+ 字幕 12-46

---

### seg02 ch2 概念 (段长 80.0s · 字幕 47-71)

- **形态**: cutaway
- **Hot moment**: 两个 hot 锚点 —— (A) vibe coding 推文 (2025-02-02) "There's a new kind of coding I call 'vibe coding'..." + (B) LLM Wiki Gist 卡片 (2026-04-04, 5,000+ stars) + 三层架构图 (raw/wiki/schema)
- **Emotional beat**: COOL（概念定义段，冷静节奏）
- **Metaphor**: **双概念双 metaphor** —— vibe coding：推文 → 代码自动冒出（cc-window 终端）→ "just vibing" 文字；LLM Wiki：反 RAG 对比（RAG 每次外部捞 vs Wiki 三层架构持续积累）+ Agent 在三层间穿梭 + chrome 大字"复利"
- **复用 from seg00**: chrome 大字（"vibe coding" / "LLM Wiki" 关键词 hot 化）+ chip（推文 metadata: 日期 / Karpathy 头像）+ Karpathy 头像作"出处佐证"
- **与前段对比**: seg01 是履历高密度，seg02 转概念冷却。**节奏明显降速** —— 这段是观众消化 seg01 + 准备 seg03 数据冲击的"缓冲带"
- **风险**: **按 SRT 真源**，本段实际口播 = vibe coding 短讲 22s（字幕 47-53）+ LLM Wiki 详讲 58s（字幕 54-71）。**context engineering 没有在本段口播出现**，留给 ch4/ch5/ch6 讲。Wiki 58s 装 4 个视觉点（引入 + RAG 对比 + 三层架构+Agent + 现实延伸 B站/Obsidian），密度其实不低，每个 SEC 内部留 1-2s hold 给观众消化
- **出处**: 研究/02 §1（vibe coding 2025-02-02 推文 URL + 原文）+ §3（LLM Wiki Gist 2026-04-04 + 5,000+ stars + raw/wiki/schema 三层架构 + 反 RAG 复利哲学）+ 字幕 47-71

---

### seg03 ch3 momentum (段长 91.0s · 字幕 72-103)

- **形态**: cutaway
- **Hot moment**: 0.003% → 7.94% → 34.4% 三连阶跃（每个数字独立 chrome 巨字砸下 + screen shake；和 cold-open 反超撞击呼应但更密集） + 2026.5.4 联手 BlackRock / Goldman Sachs 战略
- **Emotional beat**: HOT
- **Metaphor**: 阶跃式柱状/折线（不是渐升曲线，是阶跃 staircase）+ chrome 巨字数字 token counter 增长
- **复用 from seg00**: chrome 大字（数字突出）+ ripple + screen shake + glow（每个阶跃点）+ Anthropic 橙 `#d97757`（数字 hot 色）
- **与前段对比**: seg02 冷却完，seg03 数据冲击。HOT 第二波。**和 seg00 cold-open 的反超撞击形成"双 HOT 呼应"** —— seg00 是 1 个反超点（折线交叉），seg03 是 3 个阶跃点（更密集，更长，更"momentum"）
- **风险**: 容易和 cold-open 视觉重复。**关键差异化**：seg00 是折线连续 + 1 个交叉点；seg03 是阶跃柱状/折线 + 3 个数字砸下，**强调"二次崛起的连续性"而不是"反超的瞬间"**。配色保持一致（深棕 OpenAI + Claude 橙 Anthropic），但构图换（seg00 横向轴线，seg03 纵向阶跃）
- **出处**: 研究/03 §2（Ramp AI Index 2026.5 详细数据 + 历史对比）+ §3（BlackRock / Goldman Sachs 战略合作 2026.5.4）+ 字幕 72-103

---

### seg04 ch4 wrapper (段长 201.0s · 字幕 104-177)

- **形态**: cutaway
- **Hot moment**: 洋葱图慢推 —— "套壳"从贬义包装层 → 中间是产品定义层 → 内核是真正的模型能力。3 层洋葱被剥开
- **Emotional beat**: WARM
- **Metaphor**: 洋葱图（同心圆 3 层）+ 主持稿例子（具体场景：你给 Claude 写 prompt → Claude 编排工具调用 → 工具调用 LLM → "套壳"被定义出来）
- **复用 from seg00**: chip stagger（3 层洋葱用 3 个 chip 横排，从外到内 stagger 入场）+ chrome 大字关键词（"套壳" / "产品" / "能力"）
- **与前段对比**: seg03 数据 HOT 冲击完，seg04 转入观点段慢推。**整片最长段（201s = 3:21）**，需要内部分 scene 拆解（建议：洋葱图 80s + 主持稿例子 80s + 总结 40s）
- **风险**: **最长段（201s）+ 概念抽象**双重风险。已写 `PLAN-seg04-ch4-wrapper.md`，按 SRT 真源拆成 5 SEC：A 共同理念落到 Wrapper / B 从贬义到产品 / C 模型跑分视角被拉开 / D 洋葱图慢推 / E 主持稿例子 + 结论。第 177 条归入 seg04 收束，第 178 条才进入 seg05。
- **出处**: 研究/02 §2（context engineering 定义"the delicate art and science of filling the context window..."）+ 字幕 104-177

---

### seg05 ch5 merge (段长 152.0s · 字幕 178-230)

- **形态**: cutaway
- **Hot moment**: 卡帕西用 Agent 训模型 + Anthropic 创始团队来自 OpenAI —— 两条暗线交汇成 "Karpathy 加入 Anthropic 不是偶然，是 OpenAI 出身的人在 Anthropic 用 Claude 训 Claude"
- **Emotional beat**: COOL（叙事段，冷静推进）
- **Metaphor**: 两条暗线汇合（左线 = Karpathy 路径，右线 = Anthropic 创始团队 = OpenAI 出身的 Dario / Daniela Amodei 等。两线在中间汇成一束 → "Karpathy 加入 Anthropic")
- **复用 from seg00**: 折线 + glow（两条线汇合用 SVG path + stroke-dashoffset 动画）+ chip（Anthropic 创始团队 OpenAI 出身的人物名字）+ chrome 大字（"OpenAI 派系 · Anthropic 复刻"）
- **与前段对比**: seg04 是观点慢推（套壳论），seg05 是叙事推进（揭示因果）。节奏从"讲道理"切回"讲故事"。**为 seg06 高潮做准备**
- **风险**: 152s 中等长，但需要把"Anthropic 创始团队 ex-OpenAI"这个事实讲清楚，得有人物时间线。**建议 sub-scene 分 2**：A Karpathy 角色（Nick Joseph 团队，用 Claude 加速 pre-training，60s）+ B Anthropic 创始团队溯源（Dario / Daniela Amodei 2021 离开 OpenAI 创办 Anthropic，60s）+ C 两线汇合（30s）
- **出处**: 研究/03 §1（Karpathy 加入细节 + Nick Joseph + pre-training 角色）+ Anthropic 创始历史（需补 research 或常识）+ 字幕 178-230

---

### seg06 ch6 汇流 (段长 166.0s · 字幕 231-309) ★ 整片高潮

- **形态**: cutaway —— **如果用户想出镜表达观点，这是最合理的 overlay 段**
- **Hot moment**: 三组对位 —— **(A) LLM Wiki ↔ Memory** / **(B) vibe coding ↔ Claude Code** / **(C) Eureka Labs ↔ Anthropic Academy** —— 殊途同归 = "Karpathy 在 Eureka 想做的事 + Anthropic 已经在做的事 = 同一个未来"
- **Emotional beat**: ★ 高潮 ★
- **Metaphor**: 三对左右镜像并排（每对左 Karpathy / 右 Anthropic）→ 中间三条线汇成一束爆发光 → chrome 巨字"殊途同归"
- **复用 from seg00**: 全套 §3 反超撞击模板（ripple + screen shake + glow + chrome 巨字砸下）应用在"殊途同归"瞬间 + chip stagger（三对镜像入场）+ Claude 橙 `#d97757` 全段贯穿
- **与前段对比**: seg05 是因果揭示（冷推进），seg06 是观点爆发（情绪 climax）。**整片节奏曲线最高点**
- **风险**: 三组对位 + 视觉一致性是最难的（166s 装下 3 个 sub-scene 节奏紧）。**建议 sub-scene 分 3**：A 第一组对位（Wiki ↔ Memory，45s）+ B 第二组对位（vibe ↔ CC，45s）+ C 第三组对位（Eureka ↔ Academy）+ 殊途同归爆发（50s + 26s 收）。每个对位用同一套构图模板（左右镜像 chip → 中线汇合 → chrome 巨字总结）保证一致性
- **出处**: 研究/02 §1-2（vibe coding / context engineering / LLM Wiki 概念）+ Karpathy Eureka Labs 教育路径 + Anthropic Academy（需补 research）+ 字幕 231-309

---

### seg07 ch7-1 预测 1 (段长 120.0s · 字幕 310-340)

- **形态**: cutaway
- **Hot moment**: 上下文集市 —— skill + 工作流 + 评测打包，把"私人能用的 prompt 工艺"变成可交易的市场
- **Emotional beat**: WARM
- **Metaphor**: 集市摊位（每个摊位 = 一个 skill / 工作流 / 评测包，可买卖）+ 货架 + chip 标签
- **复用 from seg00**: chip stagger（集市摊位）+ chrome 大字（"上下文集市"）
- **与前段对比**: seg06 是观点高潮，seg07 转入预测段。**这是预测三连第一段，节奏要稳，定下预测篇章的"思辨型"基调**（不是 HOT 冲击，是 WARM 思辨）
- **段头章节卡**（用户 2026-05-21 确认 Q2 = B 方案）：seg07 时间 0-0.8s 显示章节卡（米色底 + chrome 大字"预测篇 · 三个未来" + 数字角标 1/3）→ 0.8s fade 进主内容 chip stagger。SEGMENT_DURATION = 120.0s 包含这 0.8s
- **风险**: 预测三连（seg07/08/09）节奏密度 —— 章节卡 cue 已经解决 seg06→seg07 的"高潮已过 进入预测"标识；seg08 / seg09 段头可以延续小角标 2/3 / 3/3（不需要再全屏章节卡，只在右上角小角标）保证三连节奏统一
- **出处**: 字幕 310-340 + 研究/02 §2（context engineering 概念延伸）

---

### seg08 ch7-2 预测 2 (段长 97.0s · 字幕 341-372)

- **形态**: cutaway
- **Hot moment**: Goal 风格命令 —— 从"做这一步"（指令式）到"达成这状态"（目标式）。命令范式革命
- **Emotional beat**: WARM
- **Metaphor**: 命令切换演示（左边老式命令"cd && npm install && npm start"逐步骤 → 右边 goal 风格命令"启动开发环境，状态：本地可访问 localhost:3000" → 后者更紧凑）
- **复用 from seg00**: chrome 大字（"Goal 风格命令"）+ chip 对比（左右两种命令风格）+ 折线（用复杂度曲线对比）
- **与前段对比**: seg07 是"集市"宽视角，seg08 是"命令"窄视角。**节奏统一在 WARM 思辨，但叙事尺度从宏观转微观**
- **风险**: 97s 中等短，单一概念。**建议 sub-scene 分 2**：A 老式命令演示（30s）+ B Goal 风格命令演示（40s）+ C 总结 = "范式革命"（27s）
- **出处**: 字幕 341-372

---

### seg09 ch7-3 预测 3 (段长 107.0s · 字幕 373-417)

- **形态**: cutaway
- **Hot moment**: 非开发者打包工具 —— 自媒体人脑里的判断 / 教师脑里的 SOP / 律师脑里的合规清单 都能打包共享。**民主化 LLM 能力封装**
- **Emotional beat**: WARM
- **Metaphor**: 人物剪影 + 脑内思考过程 → 输出一个工具卡（"自媒体选题判断器" / "教师课件 SOP" / "律师合规检查"）→ 工具卡可分享
- **复用 from seg00**: chip stagger（三个职业人物剪影 + 工具卡）+ chrome 大字（"民主化 LLM 能力"）
- **与前段对比**: seg08 是工程师视角（命令风格），seg09 转入非工程师视角（自媒体 / 教师 / 律师）。**预测三连里最贴近用户体感的一段** —— 用户本人就是非开发者，这段是"为什么这跟你有关"
- **风险**: 三个职业例子 + 一个总结，107s 节奏稳。**建议 sub-scene 分 4**：A 自媒体例子（25s）+ B 教师例子（25s）+ C 律师例子（25s）+ D 总结民主化（32s）
- **出处**: 字幕 373-417 + 用户本人内容（"自媒体人脑里的判断打包"是用户的视角）

---

### seg10 ch8 outro (段长 128.0s · 字幕 418-450)

- **形态**: cutaway —— **outro 余韵段也可以是 overlay**（用户出镜收尾感谢观众 / 引导关注）
- **Hot moment**: 套壳是产品（呼应 seg04 + 升华）+ Antigravity 2.0 砍 IDE（最新动作佐证 Anthropic 在做"套壳级别的产品"）+ 北京交流余韵
- **Emotional beat**: WARM 收
- **Metaphor**: 三件事并列收口（套壳论 + Antigravity 2.0 + 北京交流）→ chrome 巨字"未来"或类似终结词 → 米色底 fade out → 北京余韵（建议用低饱和度的城市剪影或 hint 文字"下期见"）
- **复用 from seg00**: chrome 大字（终结词）+ chip（三件事并列）+ §3 §3.6 选项 2 段尾呼吸（计入 SEGMENT_DURATION 的 fade out 0.5-1s）
- **与前段对比**: seg09 是预测三连最后一段，seg10 是整片收尾。节奏从"思辨预测" → "收口余韵"。**唯一允许真正 fade out 的段**（HARD §10 N18 例外）
- **风险**: 128s 是 outro 常规长度，但要装 3 个并列点 + 余韵，节奏可能赶。**建议 sub-scene 分 4**：A 套壳论升华（30s）+ B Antigravity 2.0 佐证（30s）+ C 北京交流（30s）+ D 余韵收口（38s）
- **出处**: 字幕 418-450 + 研究/04（Antigravity 2.0 / 北京活动需补 research，可能在 04-key-works.md 或额外信息）

---

## 第 3 部分：跨段一致性 + 段间转场表

### 全片复用元素台账

| 元素 | seg00 ✅ | seg01 | seg02 | seg03 | seg04 | seg05 | seg06 | seg07 | seg08 | seg09 | seg10 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| chrome 大字 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| 反超撞击 §3 模板 | ✅ | | | ✅ 变种 | | | ✅ 高潮 | | | | |
| chip stagger | ✅ | ✅ | ✅ | | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| 折线 + glow | ✅ | | | ✅ 变种 | | ✅ 两线汇合 | | | ✅ 对比 | | |
| 头像 / portrait | ✅ Karpathy | ✅ 历史照 | | | | ✅ Amodei | | | | ✅ 三职业剪影 | |
| OpenAI 标识 | ✅ | ✅ | | | | ✅ | | | | | |
| Anthropic 标识 | ✅ | ✅ | | ✅ | | ✅ | ✅ | | | | ✅ |
| Anthropic 橙 #d97757 | ✅ halo | 限定 | 限定 | ✅ hot | 限定 | ✅ 汇合 | ✅ 全段 | 限定 | 限定 | 限定 | ✅ 收 |

**Anthropic 橙 #d97757 使用纪律**：
- 全段贯穿仅 seg06（高潮汇流）
- seg00 / seg03 / seg10 用于关键 hot 词或 halo 强化
- 其他段保持深棕 / 深橙 / 米色为主，避免每段都出现品牌橙 → 丧失辨识度

### Karpathy 头像 / OpenAI / Anthropic 标识复用计划

| 标识 | 出现段 | 用法 |
|---|---|---|
| Karpathy 头像（`assets/portraits/karpathy-hero.png`） | seg00（迁徙）/ seg01（人物头像，可能用多张历史照）/ seg06（高潮可能出现）/ seg10（可能 outro） | 圆形头像，不滥用避免 portrait 疲劳 |
| OpenAI logo | seg00 / seg01（履历站点）/ seg05（创始团队溯源） | 黑色或深棕，不变体 |
| Anthropic logo | seg00 / seg01（履历末端）/ seg03（数据段）/ seg05（汇合）/ seg06（高潮）/ seg10（outro） | Claude 橙 fill 或深橙文字 |
| Tesla logo | seg01（履历）| 仅 1 处出现 |
| 推文截图（`图片用户收集/加入的推文.png`） | seg00 | 仅 cold-open 用一次，后续不再出现 |
| Karpathy vibe coding 推文卡（HF 内仿造，含 @karpathy + 2025-02-02 日期 + 原文 1-2 行） | seg02 SEC A | 仅概念段用一次 |
| LLM Wiki Gist 卡片（HF 内仿造 GitHub Gist UI，文件名 `llm-wiki.md` + 2026-04-04 + 5,000+ stars） | seg02 SEC B | 仅概念段用一次 |
| LLM Wiki 三层架构图（raw / wiki / schema 三层堆叠卡片 + Agent 穿梭） | seg02 SEC D | seg06 高潮三组对位 (A) LLM Wiki ↔ Memory 可能复用 |

### 段间转场表（10 个交界，默认全 hard cut）

| 交界 | 默认 | 备注 / 升级理由 |
|---|---|---|
| seg00→seg01 | hard cut | cold-open 末已有 fade out 自带呼吸（§3.7 选项 2）。HOT → WARM 切，节奏自然降，无需升级 |
| seg01→seg02 | hard cut | WARM → COOL 切，节奏自然降。无需升级 |
| seg02→seg03 | hard cut | COOL → HOT 切。**待 ch0+ch1 串联 draft 验过判断是否升级到选项 3**（手写 0.6-1.2s 短 overlay 转场强化"进入数据冲击"）。如果直接 hard cut 节奏感够就不升 |
| seg03→seg04 | hard cut | HOT → WARM 切，节奏自然降。无需升级 |
| seg04→seg05 | hard cut | WARM → COOL 切（观点段 → 叙事段）。无需升级 |
| seg05→seg06 | hard cut | COOL → ★高潮★ 切。**待判断是否升级到选项 3**（强化"进入高潮汇流"）。建议保留 hard cut，让 seg06 开头的 chip stagger 自然成为节奏拍 |
| seg06→seg07 | hard cut + **seg07 段头加 0.5-1s chapter card overlay**（在 seg07 自己 timeline 内部，计入 SEGMENT_DURATION） | ★高潮★ → WARM 切。用户 2026-05-21 确认走 B 方案。**具体做法**：seg07 段头 0-0.8s 之间显示一个章节卡（建议：米色底 + chrome 大字"预测篇 · 三个未来"+ 数字 1/3 角标），0.8s 后 fade 进 seg07 主内容 chip stagger。SEGMENT_DURATION = 120.0s 包含这 0.8s |
| seg07→seg08 | hard cut | 预测三连内，节奏统一。无需升级 |
| seg08→seg09 | hard cut | 预测三连内，节奏统一。无需升级 |
| seg09→seg10 | hard cut | 预测收 → outro 余韵。无需升级 |

**绝对不写**：catalog block（whip-pan / flash-through-white / cinematic-zoom）直接 `data-composition-src` 引用。需要重转场升级到 §3.7 选项 3（手写 0.6-1.2s GSAP overlay）或选项 4（fork catalog 到本工程改 duration）。详见 PROJECT-STATE.md §3.7。

---

## 第 4 部分：用户答案回填（2026-05-21 已确认）

### Q1：形态归类 ✅

**用户决定**：先按全部不出镜（**11 段全部 cutaway**）。

**画中画补充**：用户后续可能用画中画形式（人物缩到角落）。**画中画在 DaVinci 里做**（HF 输出整片 cutaway + DaVinci 加口播视频缩到角落 + 字幕轨），HF 这边不变。

**后续切换条件**：只有当某段 HF 这边需要输出独立的叠层物件（不是用户头像，是其他透明背景的视觉元素）才把该段改成 `overlay` 形态，详见 PROJECT-STATE.md §3.6。

### Q2：seg06→seg07 章节卡 ✅

**用户决定**：选 B —— seg07 段头加 0.5-1s chapter card overlay。

**具体做法**：seg07 时间 0-0.8s 显示章节卡（米色底 + chrome 大字"预测篇 · 三个未来" + 数字角标 1/3）→ 0.8s 后 fade 进 seg07 主内容 chip stagger。

**SEGMENT_DURATION = 120.0s 包含这 0.8s**（按 §3.6 选项 2 段自己呼吸，不增加全片时长）。

**延伸建议**（seg08 / seg09 一致性）：seg08 段头可加右上角小角标"2/3"（不需要全屏章节卡），seg09 加"3/3"，保持预测三连节奏统一标识。具体在 seg08 / seg09 PLAN 写时跟用户对齐。

### Q3：最终交付格式 ✅

**用户决定**：选 C —— **等整片做完再定，主要取决于最终导出的效果**。

**当前默认路径**：MP4（基于 11 段全 cutaway）。

**触发切换 alpha MOV 的条件**（来自 PROJECT-STATE.md §3.8）：
- 任何一段形态从 cutaway 改成 overlay（HF 需要输出叠层物件）
- 整片 draft 看下来用户想要更灵活的后期合成空间

**回填触发时机**：整片 draft 做完 + 用户审过 → 在 PROJECT-STATE.md §3.8 + 本节同步记录最终决策。

---

## 附：写 PLAN-seg{NN}.md 时回看本文件的 4 个动作

1. 回看第 1 部分整片节奏曲线，确认本段在整体波形里的位置（避免改了细节破坏节奏）
2. 回看第 2 部分本段卡片，按 hot moment + metaphor + 复用 + sub-scene 拆解作 PLAN 骨架
3. 回看第 3 部分复用元素台账，确认本段会用到 / 不会用到的元素一致性
4. 回看本段转场表的"默认"和"升级理由"，PLAN 里写明本段开头 / 结尾的转场策略

---

**真源**：本文件 + `PROJECT-STATE.md` + `字幕/加入之后.srt` + `PLAN-cold-open.md` 黄金范本 + `研究/01-05/*.md`
