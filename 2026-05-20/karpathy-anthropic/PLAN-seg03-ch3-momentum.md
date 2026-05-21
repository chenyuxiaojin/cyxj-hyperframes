# PLAN-seg03-ch3-momentum — A 社采纳率三连阶跃 + 企业服务网络

> 本段适用 §7（SRT 真源）/ §8（段内时间从 0）/ §10（SEGMENT_DURATION + tl.set 撑满）/ §11（形态 cutaway）/ §12.a-b（preview 验过 + commit）/ §13（资料台账）；段间转场依默认（seg02→seg03 hard cut，COOL → HOT 数据冲击）；最终格式延后定（§3.8）。

- **段编号**：seg03（章别名 ch3）
- **段长**：91.0s（SEGMENT_DURATION 常量取 91.0）
- **全片位置**：3:50 → 5:21（字幕条 72-103，共 32 条）
- **形态**：cutaway
- **真源**：`字幕/加入之后.srt` 第 72-103 条
- **事实基线**：`研究/03-anthropic-events.md` §2 Ramp AI Index + §3 Anthropic Enterprise AI Services 公司
- **节奏定位**：HOT 第二波。seg02 讲“怎么让模型用得更好”，seg03 接“Anthropic 已经把这件事做成市场 momentum”。

## §13 资料台账

### 官方文档

- 读了 `docs/hyperframes-official/reference/html-schema.md`：确认 composition 根节点、`data-composition-id`、`data-width/height`、timeline 注册规则。
- 读了 `docs/hyperframes-official/concepts/data-attributes.md`：确认 root 挂载时用 `data-start="230"` / `data-duration="91"`，段内 GSAP 从 0 起算。
- 读了 `docs/hyperframes-official/catalog/blocks/data-chart.md`：data-chart 是 15s demo block，不直接引用；本段只借鉴“柱状 + 折线 + value labels”的数据呈现方向，直接手写以适配 91s SRT。

### 参考工程

- 参考 `compositions/ch0-cold-open.html` SEC D：复用 Ramp 数据来源标注、34.44/32.3 label、ripple / screen shake / chrome 数字语言。
- 参考 `compositions/seg02-gainian.html`：复用 5 SEC 分段、SEC 间 `tl.set()` hard cut、真实截图/真源优先的纪律。
- 参考 `PLAN-cold-open.md`：冷开场已经用“连续折线反超”，本段必须改成“阶跃 staircase + 数字砸下”，避免重复。

### 零件复用

- 用工程已有 `assets/logos/ramp.svg`：Ramp source badge。
- 用工程已有 `assets/logos/anthropic.svg`、`blackstone.svg`、`hellmanfriedman.png`、`goldmansachs.svg`：JV 创始方卡片。
- 不用 `templates/components/pulse-bars`：本段是数据冲击，不是等待/处理中状态。

### catalog 候选

- `data-chart`：候选但不用。原因：catalog block 是 demo 模板，15s 时长和视觉文案都不适合直接挂载；本段手写 91s 的阶跃图。
- `flowchart`：不用。企业服务落地网络只需要 3 层链路（方法 / 工程师服务层 / 合作网络），手写更清楚。

### 外部事实复核

- Ramp 官方 `Ramp AI Index May 2026 Update`：确认 Anthropic 34.4%、OpenAI 32.3%、Ramp 平台企业卡 + invoice spend 方法论。
- Anthropic 官方 `Building a new enterprise AI services company with Blackstone, Hellman & Friedman, and Goldman Sachs`：确认 2026-05-04 公告、新企业服务公司、mid-sized companies、Anthropic applied AI engineers、Blackstone / H&F / Goldman Sachs。

## 1. 字幕条对应表 + SEC 切分

| SEC | 字幕条 | 段内时间 | 全片时间码 | 主题 |
|---|---|---:|---|---|
| A | 72-74 | 0.00-7.60s | 3:50.47-3:58.07 | 从“模型怎么用得更好”接到 Anthropic 正在做 |
| B | 75-83 | 7.60-37.50s | 3:58.10-4:27.97 | Ramp 三连阶跃 + 首次反超 OpenAI |
| C | 84-90 | 37.50-56.70s | 4:28.17-4:46.37 | Ramp 样本边界 + 但市场信号很难忽视 |
| D | 91-96 | 56.70-72.00s | 4:47.20-5:02.30 | 5 月 4 日联手黑石 / H&F / 高盛，创办企业 AI 服务公司 |
| E | 97-103 | 72.00-91.00s | 5:02.47-5:21.50 | 工程师驻场，把 Claude 落进关键业务流程；方法 / 服务层 / 合作网络同向 |

合计：7.6 + 29.9 + 19.2 + 15.3 + 19.0 = **91.0s**。

> SRT 里字幕 79 把 “2026 年 4 月” 识别成了 “2025 年 4 月”，但字幕 80 紧接着说“上一个月已经到了 34.4%”。本段视觉按事实源和 PROJECT-STATE 的三点处理：2023.6 = 0.003%、2025.4 = 7.94%、2026.4/5 = 34.4%。

## 2. metaphor 表

| 口播关键词 | 字幕条 | 字面 | 语义扩展（要做的） |
|---|---|---|---|
| “怎么让模型用得更好” | 72-73 | 使用方法 | 三枚方法 chip 汇入 Anthropic 橙色核心，接到数据看板 |
| “我们先看一个数据” | 74 | 数据 | Ramp source badge + 数据看板打开，给后面三连阶跃做舞台 |
| “0.003% / 7.94% / 34.4%” | 75-80 | 三个数字 | 不是平滑折线，而是三层 staircase，数字逐级砸下，每一级都有轻微 screen shake |
| “OpenAI 32.3 / 首次反超” | 81-83 | 对比 | 34.4 与 32.3 并列 duel card，Anthropic 橙线压过 OpenAI 深棕线 |
| “不是全样本 / 但信号难忽视” | 84-90 | 限定条件 | 数据看板收成“信号雷达”：左侧 sample boundary，右侧 SIGNAL STILL LOUD 指针 |
| “5 月 4 号联手黑石 / H&F / 高盛” | 91-96 | 合作方 | 四张 partner tile 从四角汇入，新公司卡片被组装出来 |
| “工程师驻场 / 业务流程 / 方法服务层合作网络” | 97-103 | 落地方式 | 三层堆叠系统图：方法层 → 工程师服务层 → 合作网络，橙色脉冲沿链路流动 |

## 3. 视觉骨架

### SEC A · 语义接力（0.0-7.6s）

- 左侧保留 seg02 末尾语义的三个小 chip：`vibe coding` / `LLM Wiki` / `知识复利`。
- 三个 chip 汇入中央 chrome 大字：`怎么让模型用得更好`。
- 右下角出现 Anthropic logo + 小字：`这正是 A 社过去一年在做的事`。

### SEC B · 三连阶跃（7.6-37.5s）

- 主视觉：纵向 staircase chart。
- 三个关键数字：
  - `2023.6 / 0.003%`
  - `2025.4 / 7.94%`
  - `2026.4 / 34.4%`
- 每个数字砸下：scale 1.16 → 1.0，短 screen shake，橙色 glow。
- 末尾 duel card：`Anthropic 34.4%` vs `OpenAI 32.3%`，badge `首次反超`。
- Source：`Ramp AI Index · 50,000+ U.S. businesses on Ramp`。

### SEC C · 样本边界，但信号强（37.5-56.7s）

- 数据图收缩到左侧。
- 右侧出现两层说明：
  - `不是全美企业全样本`
  - `OpenAI 仍有大客户 + 消费端盘子`
- 然后 radar needle / signal badge 入场：`但作为市场信号，很难忽视`。

### SEC D · 5.4 企业服务公司（56.7-72.0s）

- 顶部日期 chip：`2026.05.04`。
- 四张创始方卡：Anthropic / Blackstone / Hellman & Friedman / Goldman Sachs。
- 中央组装出新公司卡：`Enterprise AI Services Company`。
- 小字：`mid-sized companies · core operations`。

### SEC E · 方法 → 服务层 → 合作网络（72.0-91.0s）

- 三层堆叠：
  1. `方法层`：how to use models
  2. `工程师服务层`：applied AI engineers on-site
  3. `合作网络`：capital + delivery ecosystem
- 橙色 pulse 从 Anthropic 流向企业流程节点（banks / manufacturers / health systems）。
- 收束 chrome 大字：`一套方法正在长成一套网络`。
- 末尾保持画面，不写 exit fade，hard cut 到 seg04。

## 4. index.html 挂载

在 seg02 后追加：

```html
<div
  class="clip"
  id="seg03-momentum"
  data-composition-id="seg03-momentum"
  data-composition-src="compositions/seg03-momentum.html"
  data-start="230"
  data-duration="91"
  data-track-index="1"
  data-width="1920"
  data-height="1080"
></div>
```

- `data-start="230"`：seg00 38s + seg01 112s + seg02 80s = 230s。
- `data-duration="91"`：本段 91s。

## 5. 验证点

- `npx hyperframes lint` 0 errors。
- `npx hyperframes validate` 0 contrast warnings。
- preview 拖到 230s：seg03 第一帧出现。
- preview 拖到 321s：seg03 最后一帧仍保持，不 exit fade。
