# STYLE_BRIEF — Karpathy 加入 Anthropic 视频

**主题**：Andrej Karpathy 加入 Anthropic（人物传记 + 事件解读混合）
**时长目标**：10-12 分钟
**形态**：横屏、无录屏、纯叙事、字幕轨 + 旁白
**底色形态**：教程/纪录片混合 → 暖米色 `#F7F2EA`（DNA 第 1 条）

---

## DNA 对照表（强制产出物）

> 初版没有用户提供的视觉参考图，只有 Nate Herk 的文字逐字稿。
> 2026-05-21 起，按段补充官方视觉参考；seg04 已抓取 Cursor / Perplexity / Claude Code / MCP 官方页面截图，放在 `参考图/seg04-official-visuals/`。
> 后续每段如涉及具体产品 / 官方概念，优先补官方视觉参考，再写 composition。

### 参考素材里**有**但 DNA **拒绝**的元素

| 元素 | 出现在 | 为什么拒绝 |
|---|---|---|
| Cursor / Claude Code 官方页面偏白底文档风 | `参考图/seg04-official-visuals/` | 可借结构，不借原始白底；本片仍保持暖米色 + 四件套 |
| 官网大面积纯产品截图 | `01-cursor-home.png` / `03-claude-code-overview.png` | 只借“真实 UI 物件关系”，不直接整张贴进画面，避免变成截图堆砌 |

### DNA **必须**有但参考素材**没有**的元素（核心约束源）

| 元素 | DNA 来源 | 怎么补 |
|---|---|---|
| 暖米色底 `#F7F2EA` | DNA §1 | `var(--c-bg)`，全片不准换 |
| Claude 橙 `#d97757` 必现 | DNA §2 | hot 词 + Anthropic logo halo + 关键概念名（如「vibe coding」「context engineering」） |
| 全屏四件套（网格 + 暗角 + 颗粒 + crosshair） | DNA §3 | 每个 composition 顶部画（19-tips 路径） |
| 字体三件套（Noto Sans SC / Inter / JetBrains Mono） | DNA §4 | 已在 `xcyj-tokens.css` |
| Chrome 渐变大字（米色底暖版，8-stop bookends） | DNA §5 | Hero 标题（cold-open hook、ch1-7 章节标题）必用 |
| Stagger 入场（字符 0.06-0.08s / 卡片 0.12-0.15s） | DNA §6 | 所有 reveal 必用，禁全屏一次蹦出 |

### Nate 逐字稿的**叙事结构**（参考但不抄）

| 元素 | Nate 用法 | 本视频借鉴 |
|---|---|---|
| 推文 hook 开场 | 0:00 "今天是 May 19th，几小时前这条推文" | ✅ cold-open 借鉴 |
| 履历闪回 | 1:04-1:38 founding OpenAI → Tesla → OpenAI → Eureka | ✅ ch1-who 借鉴，但用时间线"列车"比喻 |
| Wrapper 主题论点 | 4:12-6:11 "the wrapper is the product" | ✅ ch4 用洋葱图比喻 |
| LLM Wiki / auto-research 例子 | 6:25-10:39 | ✅ ch2/ch5 取材，但视觉用"卡片栈" + "汇流"比喻 |
| 3 个预测结构 | 12:01-15:36 | ✅ ch6 直接借结构，但用 3 张"塔罗占卜卡"视觉 |

---

## 防带跑红线（每个 agent 必读）

1. **Hot 色每 beat 只一个**（Claude 橙是品牌色一直在，不算）。蓝 / 红 / 绿 / 紫只能选其一作章节 hot 色，禁多色并存。
2. **DNA 自检 5/5 通过**才能派 agent。
3. **Nate 稿 ≠ 模板**——借结构和论点，**不直译**，每段口播按中文逻辑重写 + 加入用户对 Claude Code 的实际体验。
4. **视觉 = 语义扩展不是字幕翻译**（HARD_CONSTRAINTS §12）——每章 PLAN 里先填 metaphor 表。

---

## 一、参考来源

1. **Nate Herk 逐字稿**：`~/Library/Mobile Documents/iCloud~md~obsidian/Documents/收藏夹/YouTube/What Karpathy Joining Anthropic Actually Means For Claude.md`（**叙事结构**参考，不是视觉参考）
2. **DNA 基线**：`MY_VISUAL_DNA.md`
3. **动效笔记**：`MY_MOTION_NOTES.md`
4. **硬约束**：`docs/HARD_CONSTRAINTS.md`（写 beat 前必读全文）
5. **风格借鉴方法论**：`docs/STYLE_BORROW_PLAYBOOK.md`
6. **长工程拓扑**：`videos/2026-05-04-claude-19-tips-hf/`（参考拓扑，不 cp）
7. **seg04 官方视觉参考**：`参考图/seg04-official-visuals/`（Cursor / Perplexity / Claude Code / MCP 官方页面截图；具体用法见 `PLAN-seg04-ch4-wrapper.md`）

---

## 二、底层视觉系统（直接抄 DNA）

```css
:root {
  /* 底色 — DNA 教程类默认 */
  --c-bg: #F7F2EA;          /* 暖米色 */
  --c-bg-deep: #2B2622;     /* chrome 大字 bookends 用 */

  /* Claude 橙 — DNA 强制必现 */
  --c-orange: #d97757;
  --c-orange-glow: rgba(217, 119, 87, 0.55);

  /* Hot 色（本视频选）— 学术/科技蓝（Stanford / GitHub repo / 概念卡片） */
  --c-hot: #5BA9FF;
  --c-hot-glow: rgba(91, 169, 255, 0.45);

  /* 米色底网格 — DNA §3 */
  --c-grid: rgba(43, 38, 34, 0.06);

  /* 字体 — DNA §4 强制 */
  --f-zh: "Noto Sans SC", "PingFang SC", "Inter", sans-serif;
  --f-en: "Inter", system-ui, sans-serif;
  --f-mono: "JetBrains Mono", "SF Mono", "Menlo", monospace;
}
```

> 工程已 cp `assets/xcyj-tokens.css`，包含 DNA 4 件套（网格 / 暗角 / 颗粒 / crosshair）的米色底版本。

---

## 三、组件库（按章启用）

按 7 章实际需要圈选：

| 组件 | 来源 | 用在哪 |
|---|---|---|
| Kicker（章节标签）| 内置 | 每章顶部「Ch N / 主题英文 + 中文」 |
| Hero 大字（chrome 渐变）| DNA §5 | cold-open + 每章过渡 |
| 推文模拟卡（X.com 风格）| **新做** | cold-open / ch2 / ch5（Karpathy 关键推文） |
| 时间线"列车"| **新做** | ch1-who（多大→Stanford→OpenAI→Tesla→Eureka→Anthropic） |
| 卡片栈（带翻面 reveal）| 借 19-tips polaroid 思路 | ch2-concepts（5 个概念） |
| 数据双柱（Ramp Index 反超瞬间）| **新做** | ch3-momentum |
| 洋葱同心圆（model + wrappers）| **新做** | ch4-wrapper（核心比喻） |
| 双河汇流（Karpathy 哲学 ↔ Anthropic 战略）| **新做** | ch5-merge |
| 3 张占卜卡（横排）| 借卡片栈 | ch6-predictions |
| cc-window 终端| `templates/components/cc-window/` | 如有 /goal 命令演示 |

---

## 四、动效规范（直接引用 DNA §6）

- 字符 stagger 0.06-0.08s，卡片 0.12-0.15s
- ease 三档：`back.out(1.4)` 卡片 / `expo.out` 光线 / `power3.out` 文字
- blur 焦点：`filter: blur(14px) → blur(0)`
- 入场必分批 stagger，禁全屏一次性蹦出
- **撞击/反超/合流"瞬间"**用 MOTION_NOTES §3 同帧合成模板（白闪 + ripple + screen shake + glow burst 5-7 元素 ±0.05s 内）

---

## 五、每章核心比喻 + 构图（7 章 + cold-open）

### Ch0 - Cold Open（30-45s）

- **核心比喻**：「一条推文砸碎一个 timeline」
- **关键瞬间**：推文从右滑入 → 大字 hook 砸下「为什么是 Anthropic？为什么是现在？」
- **组件**：推文卡 + Hero chrome 大字 + Claude 橙信号
- **hot 词**：「Anthropic」红橙下划线
- **素材源**：2026-05-19 Karpathy 推文截图（待用户提供 / 我去抓）
- **metaphor 表**：
  | 口播关键词 | 字面 | 语义扩展 |
  |---|---|---|
  | "刚刚发了一条推文" | 推文截图 | 推文从无到有"砸下"屏幕，附音效 |
  | "为什么是 Anthropic" | 问号 | 推文文字"散开"飘出，留下问号字符碎裂 |

### Ch1 - 这个人是谁（60-90s）

- **核心比喻**：「时间线列车穿过 6 个站」
- **构图**：水平时间线（约 1700px 宽），左→右 6 个站点：多伦多大学 → Stanford → OpenAI v1(2015-2017) → Tesla(2017-2022) → OpenAI v2(2023-2024) → Eureka Labs(2024) → Anthropic(2026-05)
- **每站含**：年份 + logo + 一句关键词
- **组件**：水平时间线 + 7 个 station card + Karpathy 头像跟随
- **hot 词**：「Stanford」蓝色（hot 色）+「Anthropic」Claude 橙
- **素材源**：6 个 logo + Karpathy 头像（其中 4 个 logo 缺，待阶段 5 补）
- **metaphor 表**：
  | 口播关键词 | 字面 | 语义扩展 |
  |---|---|---|
  | "founding team OpenAI 2015" | 文字"创始成员" | 时间线节点亮起 + OpenAI logo fade in + Karpathy 头像贴到节点 |
  | "Tesla 五年" | 数字 5 | timeline 节点之间画 5 年长度的 segment，时间被"压缩"过 |

### Ch2 - 他提出的火爆概念（90-120s）

- **核心比喻**：「5 张卡片堆叠 → 一张一张抽出」
- **构图**：5 张卡片堆叠在屏幕中心，逐张抽到左侧排开
  1. **Vibe Coding**（封面）/ 例子（背面）：英文描述需求，AI 写码
  2. **Context Engineering**（封面）/ 例子：不只是 prompt，是文件夹结构 + memory
  3. **LLM Wiki**（封面）/ 例子：markdown raw + wiki 文件夹结构图
  4. **Auto-research**（封面）/ 例子：goal → agent loop → metric pass
  5. **/goal Loop**（封面）/ 例子：cc-window 模拟一条 /goal 命令
- **组件**：卡片栈（5 张）+ cc-window 模拟（仅最后一张）
- **hot 词**：每个概念名用 Claude 橙渐变
- **素材源**：每个概念配 1 张推文/代码截图（阶段 2 派 agent B 收集）
- **metaphor 表**：
  | 口播关键词 | 字面 | 语义扩展 |
  |---|---|---|
  | "vibe coding" | 单词 | 卡片翻面，背面显示一句模糊的英文 prompt + AI 自动补全的代码动画 |
  | "context 不是 prompt 是环境" | 文件夹 icon | 卡片翻面，显示树状文件夹结构 + memory.md + skills/ + claude.md |

### Ch3 - Anthropic 的势头（60-90s）

- **核心比喻**：「双柱反超的瞬间」
- **构图**：左侧双柱图（OpenAI 32.3% / Anthropic 34.4%），右侧 3 个 JV logo 横排（Blackstone / H&F / Goldman Sachs）
- **关键瞬间**：Anthropic 柱"长过" OpenAI 柱的 0.5s ripple（MOTION_NOTES §3 同帧合成）
- **组件**：双柱 + Ramp logo 标注 + 3 个 partner logo
- **hot 词**：「34.4%」Claude 橙
- **素材源**：Ramp AI Index 报告原文截图（阶段 2 派 agent C 验证）
- **metaphor 表**：
  | 口播关键词 | 字面 | 语义扩展 |
  |---|---|---|
  | "首次反超" | 折线交叉 | 双柱 + 反超瞬间白闪 ripple，Anthropic 柱加 Claude 橙 glow |
  | "企业服务合资" | 3 个 logo | logo 三角形排列 → 合并成一个新 logo（合作的隐喻） |

### Ch4 - Wrapper 才是产品（90-120s）

- **核心比喻**：「洋葱同心圆——model 是核心，wrapper 是肉」（关键！这是全片核心论点）
- **构图**：同心圆，中心小球「Model」，外圈逐层 reveal：Claude Code → Codex → Skills → Subagents → Hooks → MCP → Memory → CLAUDE.md
- **关键瞬间**：外层圆比中心还亮、还大 → 强化"wrapper 才是产品"
- **组件**：SVG 同心圆 + 标签 + Claude 橙 halo（外层最亮一圈）
- **hot 词**：「wrapper」Claude 橙 + 外圈最亮一层
- **metaphor 表**：
  | 口播关键词 | 字面 | 语义扩展 |
  |---|---|---|
  | "model 不是护城河" | model 字 | 中心小球缩小、变暗，外圈点亮 |
  | "wrapper 才是产品" | wrapper 字 | 外层圆扩大、加 Claude 橙 halo，中心被外层"吞掉" |

### Ch5 - 两个哲学的合并（90-120s）

- **核心比喻**：「两条河汇流」
- **构图**：左河 Karpathy 头像 + 关键作品标签（LLM 101N / vibe coding / /goal / LLM Wiki），右河 Anthropic logo + 产品标签（Claude Code / Skills / Memory / Subagents），中间合流点出现 ♥ 或合并 icon
- **关键瞬间**：两条河"碰撞"的瞬间产生波纹 + 合并标签出现
- **组件**：左右双列 + 合流点 + 标签
- **hot 词**：「合并」Claude 橙
- **metaphor 表**：
  | 口播关键词 | 字面 | 语义扩展 |
  |---|---|---|
  | "两个哲学合并" | 箭头 | 左右两条流水平移动，中间汇合点出现波纹 |
  | "data moat" | 数据库 icon | 左河里的 LLM Wiki 文件"流"成右河里的 Claude memory 文件 |

### Ch6 - 3 个预测（90-120s）

- **核心比喻**：「3 张占卜卡」
- **构图**：3 张大卡片横排
  1. **Context App Store**（卡 1）— skills + workflows + project memories 的市场
  2. **/goal 命令家族**（卡 2）— research / debug / verticals 专用循环
  3. **教育层**（卡 3）— 普通人把自己的领域 know-how 打包成 agent
- **每张卡片含**：标题 + 一句话核心 + 一张示例视觉（如 Context App Store = grid of skills icons）
- **关键瞬间**：3 张卡片翻面 stagger，每张 0.4s
- **组件**：3 张大卡 + 翻面动画 + 示例视觉
- **hot 词**：3 张卡片标题 = Claude 橙
- **metaphor 表**：
  | 口播关键词 | 字面 | 语义扩展 |
  |---|---|---|
  | "App Store for context" | App Store icon | skill 图标网格，每个 skill 是一个 icon tile |
  | "/goal 家族" | 命令行 | cc-window 5 行 /goal: research / debug / verticals... |
  | "教育层" | 学校 icon | 普通人头像 → 把脑袋里的 know-how → 打包成 agent icon |

### Ch7 - 收尾（30-45s）

- **核心比喻**：「sunset hold + 互动钩子」
- **构图**：大字 outro「关注我，下一条聊 vibe coding 实战」+ 订阅/评论引导
- **组件**：Hero 大字 + Claude 橙信号
- **hot 词**：CTA 词 Claude 橙

---

## 六、硬约束（每个 agent 必读，直接复制）

来自 `docs/HARD_CONSTRAINTS.md` 8 条：

1. GSAP querySelector **永远硬编码字符串**，禁 template literal —— 用 `'[data-composition-id="ch1-who"] .child'`
2. 复制 beat html 后**全局换 beat id**（CSS class + GSAP selector 两处）
3. sub-composition 内部用 `[data-composition-id="X"]` **禁用 `#X`**（bundler strip inner wrapper）
4. 中文 transcribe 用 `whisper-cli`，**禁用 `npx hyperframes transcribe`**
5. 所有 `npx hyperframes` 命令在工程目录里跑（`cd 2026-05-20/karpathy-anthropic/`）
6. 大视频/音频不进 git（`.gitignore` 已配）
7. **本工程长度风险**：超过 19-tips 1.6-2 倍，cold-open + ch1 写完立刻 draft render 测内存
8. 渲染前 `pkill -f hyperframes` + 关浏览器 tab
9. `onUpdate` 里**不准每帧** `getElementById` / new closure（长视频内存命门）
10. 视觉 = 语义扩展不是字幕翻译，每章 PLAN 必填 metaphor 表（HARD_CONSTRAINTS §12）

---

## 七、agent 工作流（阶段 7 派 4 个 agent 时填）

**agent 分配建议**：

| Agent | 负责 | 必读 |
|---|---|---|
| A | cold-open + ch1-who（开场 + 履历） | 本 brief + cold-open.html stub + ch1-who.html stub + DNA + Karpathy 履历 fact sheet |
| B | ch2-concepts + ch7-outro（概念卡片 + 收尾） | 本 brief + ch2/ch7 stub + 概念出处 fact sheet |
| C | ch3-momentum + ch4-wrapper（数据柱 + 洋葱图） | 本 brief + ch3/ch4 stub + Anthropic 事件 fact sheet |
| D | ch5-merge + ch6-predictions（汇流图 + 预测卡） | 本 brief + ch5/ch6 stub + Nate 逐字稿后半段 |

每个 agent prompt 范式见 `docs/STYLE_BORROW_PLAYBOOK.md` 步骤 4.2。

---

## DNA 自检 5/5（main agent 自答）

| Q | 答 | 证据 |
|---|---|---|
| Q1 底色符合形态？ | ✅ yes | `--c-bg: #F7F2EA` 暖米色，教程/纪录片混合形态适用 |
| Q2 至少 1 beat 用 Claude 橙？ | ✅ yes | cold-open「Anthropic」hot、ch2 概念名、ch4 wrapper halo、ch3「34.4%」、ch5「合并」、ch6 卡片标题 ≥6 处 |
| Q3 全屏四件套（网格+暗角+颗粒+crosshair）？ | ✅ yes | `xcyj-tokens.css` 已含米色底版本，每个 composition 顶部画 |
| Q4 字体三件套？ | ✅ yes | Noto Sans SC + Inter + JetBrains Mono，已在 tokens |
| Q5 Hero chrome 渐变 + PiP Claude 橙 halo？ | ✅ yes (chrome) / N/A (PiP — 本视频无录屏无 PiP) | Hero 用米色底暖版 8-stop chrome；本视频无 PiP，第 5 条 halo 子条不触发 |

**5/5 通过**（Q5 PiP 子条 N/A 因为无 PiP 元素，不算 fail）。

---

---

## ✏️ 阶段 2 fact sheet 后的修正（2026-05-20）

> 4 个 agent 完成事实双源验证后，以下章节设定需要修正。**正式写文稿（阶段 3）时按本节为准，不按上面老版。**

### ch1-who 履历列车：7 站 → **8 站**

原版漏了 UBC（Nate 视频也漏了）。正确顺序：

```
多伦多大学(2005-09 CS+物理)
  → UBC 硕士(2009-11 导师 van de Panne 物理仿真)
  → Stanford 博士(2011-15 导师 Fei-Fei Li)
  → OpenAI v1 创始成员(2015-17)
  → Tesla "Director of AI and Autopilot Vision"(2017-06 ~ 2022-07)
  → OpenAI v2 midtraining(2023-02-09 ~ 2024-02-13)
  → Eureka Labs(2024-07-16 创立)
  → Anthropic pre-training(2026-05-19，lead Nick Joseph，"用 Claude 加速 pre-training 研究")
```

视觉构图：水平 1700px 时间线，8 站间距 ~200px。每站含年份 + logo + 一句关键词。

### ch2-concepts 概念归属修正（**最容易说错的地方**）

| 概念 | 原版 brief 说 | 实际归属 | 文稿表达建议 |
|---|---|---|---|
| Vibe coding | Karpathy 提出 | ✅ Karpathy 2025-02-02 推文原创 | 「2025 年 2 月，Karpathy 发了一条推文，造了一个词叫 vibe coding」 |
| Context engineering | Karpathy 提出 | ❌ **Tobi Lutke (Shopify CEO) 原创**，Karpathy 2025-06 背书扩散 | 「Shopify CEO 先提的，但是 Karpathy 转发并深度定义之后才真正爆」 |
| LLM Wiki | Karpathy 提出 | ✅ Karpathy 2026-04-04 Gist（5k+ stars） | 「2026 年 4 月，Karpathy 发了个 Gist，叫 LLM Wiki」 |
| Autoresearch | Karpathy 提出 | ✅ Karpathy 2026-03-07 GitHub repo（**66k+ stars，超级火**） | 「3 月份他放了 autoresearch，几乎是他声量最大的一个 repo」 |
| /goal loops | Karpathy 提出 | ❌ **Eric Traut (OpenAI Codex CLI) 原创** | 「/goal 这个命令其实是 Codex 团队 Eric Traut 先做的，但是 Karpathy 的 autoresearch 跟它思路一脉相承」 |

### ch2 新增建议：**加入 nanochat 作为时效性 hook**

agent D 报告 `nanochat`（53.7k stars，2026-05-05 commit）是 Karpathy 加入 Anthropic **前一周**还在 commit 的项目，leaderboard "168 小时 → 1.65 小时"对比强烈。

**建议把 ch2 从「5 个概念卡片栈」改成「概念 + 作品 混合卡片栈」**：
1. nanochat（最新，时效性 hook）
2. vibe coding（概念）
3. context engineering（概念，标 Tobi Lutke 原创）
4. LLM Wiki（概念）
5. autoresearch（GitHub repo + 概念）

nanoGPT 顺带提一句（被 nanochat 取代），llm.c / micrograd 不放卡（避免 ch2 过满，作为背景图轮播）。

### ch3-momentum 数据点更新

Ramp Index 历史曲线（agent C 补的，可以做"反超瞬间"的过渡铺垫）：

```
June 2023: Anthropic 0.03% / OpenAI ~10%
April 2025: Anthropic 7.94% / OpenAI 36.5% 峰值
April 2026: Anthropic 34.44% / OpenAI 32.3% ← 反超
```

可视化建议：双折线图（不是 Nate 视频里的双柱）—— 折线交叉的"反超"瞬间更戏剧。

JV 合作方更全：
- 创始 4 方：Anthropic + Blackstone + Hellman & Friedman + Goldman Sachs（注意拼写：**Hellman**，不是 Helman）
- 投资联盟 5 方：General Atlantic / Leonard Green / Apollo / GIC / Sequoia
- 服务对象：community banks / mid-sized manufacturers / regional health systems
- CFO Krishna Rao 引语可以用作画面字幕

### ch4-wrapper Karpathy 的 Anthropic 角色作为锚点

Karpathy 的角色是 **"用 Claude 加速 pre-training 研究"**（AI-assisted research）——这正好对应 ch4 的"wrapper 才是产品"论点：Karpathy 不是来训练新 model 的，是来用现有 Claude（wrapper）加速 pre-training 工作流的。这是 ch4 → ch5 「两个哲学合并」最强的事实锚点。

### 视频里**不要**说的（避免被网友扒）

1. ❌ "Karpathy 提出了 context engineering"——说"Karpathy 让 context engineering 这个词火了"
2. ❌ "Karpathy 发明了 /goal"——说"Karpathy 的 autoresearch 跟 /goal 思路一脉相承"（/goal 来自 Eric Traut/Codex）
3. ❌ "Karpathy 是 OpenAI founder"——说"Karpathy 是 OpenAI 创始成员/founding member"
4. ❌ "Karpathy 一直在 Stanford"——他本科多大、硕士 UBC、博士才是 Stanford
5. ❌ "Eureka Labs 关闭了"——状态未知，他推文说"plan to resume my work on [education] in time"

### Eureka Labs 状态注意

TechCrunch 明确写"it's not clear if Karpathy will continue with the startup"。文稿里讲到 Eureka 时**用"暂停"或"未明朗"**，不准说"关闭"或"还在运营"。

---

---

## 🔍 阶段 2.5 事实审查后修正（2026-05-20，研究/05-fact-audit.md）

> 用户要求"前半人物传记部分要真实严肃，不可有八卦"，专门派了 fact-audit agent 揪伪装双源 + 核验数字。以下是审查结果，**写文稿时按本节为准**。

### 降级事实（视频里**避开 / 模糊化**）

| 事实 | 降级原因 | 视频里怎么处理 |
|---|---|---|
| 出生日期 1986-10-23 | 单源（Karpathy 本人 2012 推文自报，Wikipedia 是引这条推文） | **不说具体日期**，只说"出生在斯洛伐克"（出生地斯洛伐克有独立媒体源确认）|
| DeepMind 2015 实习 | 单源 karpathy.ai；2015 年的 DataScienceWeekly 采访只证实 Google 两次实习 | 如果讲实习，**只稳妥说 Google 两次**（2011 Google Brain + 2013 Google Research）|
| Nick Joseph "Head of Pretraining" | TechCrunch 原文用词 "team lead"，"Head of Pretraining" 是 letsdatascience 二手解读 | 说"**pre-training 团队负责人**"，不说"Head of Pretraining" |

### 数字更新

- **autoresearch stars**: 66k（verdent.ai 4 月数据）→ **82,067 stars**（今日 GitHub API 实时）。视频里说"**超过 8 万 stars**"，月增 16k 速度可作为热度证据。

### 改说法（3 条关键）

1. **Eureka Labs 状态** = "**目前暂停**"（不是"仍在运营"）
   - 证据：LLM101n repo 已 archived；eurekalabs.ai 9 个月无更新；Karpathy 推文说"plan to resume my work on it in time"
   - 措辞建议：「Eureka Labs 目前是暂停状态，他自己说『等以后会重新做』」

2. **Karpathy 在 Anthropic 不是单纯"加入团队"** = "**加入 Anthropic 并在 pre-training 部门下新建专注 AI-assisted research 的子团队**"
   - 证据：Anthropic spokesperson 原话 "**start a team** focused on using Claude to accelerate pre-training research"
   - 措辞建议：「他不是单纯加入 Anthropic，是要在 pre-training 部门下**组建一个新子团队**——专门研究怎么用 Claude 加速训练下一代 Claude」

3. **Nick Joseph** 称"**pre-training 团队负责人**"，不用 "Head of Pretraining"

### 确认稳的（可以放心说）

✅ **vibe coding Karpathy 原创**（本人博客 + NYT + Wikipedia 三方一致，无反证）—— 可以直接说"2025 年 2 月 Karpathy 造的词"
✅ **OpenAI founding member 而非 founder**（2015 创立公告原文确认）—— 必须说"创始成员/founding member"，不要说"founder"
✅ **出生在斯洛伐克**（斯洛伐克独立媒体独立报道，非 karpathy.ai 单源）—— 可以说

### 视频"前半 vs 后半"真实度门槛

- **ch0-ch2（前半人物传记）**：按本审查结果，严格事实，不准编年份/职位/数字
- **ch3-ch6（后半事件解读）**：保留 Nate 视频的主观角度、3 个预测、个人观点——这是允许的"八卦"，不需要审查门槛拉到一手源

---

## 下一步

阶段 2 + 2.5 完成。等用户审 fact sheet（5 个文件在 `研究/`）+ 本节修正 → gate 通过 → 进阶段 3 文稿（main 先写章节大纲 + 衔接句，再派 4 个 sonnet agent 并行写 7 章中文稿）。
