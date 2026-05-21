# PLAN-seg01-ch1-renwu — Karpathy 是谁 · 履历列车

> 本段适用 §7（SRT 真源）/ §8（段内时间从 0）/ §10（SEGMENT_DURATION + tl.set 撑满）/ §11（形态 cutaway）/ §12（每段闭环 4 步）/ §13（资料台账）；段间转场依默认（§9 hard cut，跟 seg00 末尾 fade out 衔接）；最终格式延后定（§3.8）

- **段编号**：seg01（章别名 ch1）
- **段长**：112.0s（SEGMENT_DURATION 常量取 112.0）
- **全片位置**：0:38 → 2:30（字幕条 12-46，共 35 条）
- **形态**：cutaway（整屏动画）
- **真源**：`字幕/加入之后.srt` 第 12-46 条
- **事实基线**：`研究/01-karpathy-bio.md`（一手 karpathy.ai + Wikipedia + TechCrunch 三源交叉）
- **DNA 红线**：`STYLE_BRIEF.md` §2 / §2.5 fact audit（前半人物传记真实严肃，不可八卦）

---

## §13 资料台账

### 官方文档（前置 0 已调三个 skill）

- **hyperframes skill**：Scene Transitions Non-Negotiable（除最后段外禁出场动画，"the transition IS the exit"）+ Layout Before Animation（padding flex/grid 非 absolute）+ animation-map QA + WCAG contrast 必须 0 warning
- **gsap skill**：position parameter `"<"` / `"<0.2"` / 相对值；timeline labels；autoAlpha；back.out/expo.out/power3.out 三档 ease
- **hyperframes-registry skill**：catalog blocks 是 demo 模板（fork 改造），不是参数化即插即用

### 参考工程

- ⭐⭐⭐ 本工程 `compositions/ch0-cold-open.html`（黄金范本）：复用 SEC A/B/C/D/E 多段切换写法 + chrome 大字 8-stop + hot-word 3-stop + chip stagger + 虚线箭头 stroke-dashoffset + screen shake + Karpathy 头像沿虚线移动（直接迁移过来作为"沿时间线推进"的核心动作）
- ⭐⭐ `videos/2026-05-04-claude-19-tips/compositions/flowchart.html`：节点 + SVG 连线 + sticky-note nodes（fork 借鉴履历站点的节点视觉，不直接引用）

### 零件复用

- ✅ `templates/components/xcyj-tokens`：DNA token（已在工程，全片共享）
- ❌ `templates/components/cc-window`：终端 UI（ch1 不用，留给 ch2/ch7）
- ❌ `templates/components/pulse-bars`：候选 CS231N 增长但形态选学生头像 cluster 更具体（**不用**）
- 本工程 `compositions/components/` 当前为空（沿用 seg00 全自制路径）

### catalog 候选

- ❌ flowchart：决策树拓扑不适合履历列车（**不用**）
- ❌ data-chart：留给 ch3 momentum（**不用**）
- ❌ x-post：ch0 已用过推文，ch1 不重复（**不用**）
- **结论：履历列车从 0 自制**，参考 seg00 SEC A "迁徙行 + 虚线箭头 + 头像沿线推进" 骨架，扩展到 8 站

---

## §11 形态确认

**cutaway**（整屏动画段，最终输出整片 MP4 的一部分）。本段不需 alpha 输出，不需 talking head overlay。

---

## 1. 字幕条对应表 + SEC 切分

按字幕时间码切 5 SEC（跟 seg00 段内 5 SEC 节奏一致；段长 112.0s = 17+30+34+25+6）：

| SEC | 字幕条 | 段内时间 | 全片时间码 | 主题 | 状态 |
|---|---|---|---|---|---|
| A | 12-17 | 0.0-17.0s | 0:38-0:55 | **人物名片**（先认识一下 · AI 教学 GOAT · 布道者） | ⬜ |
| B | 18-26 | 17.0-47.0s | 0:55-1:25 | **履历列车出场 + CS231N 学生数翻 5x**（OpenAI 创始成员 + Stanford 李飞飞 + CS231N 150→750） | ⬜ |
| C | 27-38 | 47.0-81.0s | 1:25-1:59 | **列车推进 + 中性事实标注**（CS231N 影响 + 2017.6 Tesla 5 年 + 2023.2 回 OpenAI + 2024.2 二次离开 + 动荡期事实框） | ⬜ |
| D | 39-43 | 81.0-106.0s | 1:59-2:24 | **终点站 Anthropic**（2024.7 Eureka Labs + 2026.5.19 加入 A 社 · 新子团队） | ⬜ |
| E | 44-46 | 106.0-112.0s | 2:24-2:30 | **收束过渡**（真正出圈不是履历，是两个词 → 钩到 ch2） | ⬜ |

合计 17+30+34+25+6 = **112.0s** ✓

---

## 2. 履历列车骨架（8 站）

**视觉形态**：水平时间线全程显示在屏幕中下部（SEC B 进入后保持到 SEC D 结束），Karpathy 头像沿时间线推进（类似 seg00 SEC A 头像沿虚线移动），每到一站点亮该站详情。

```
       SEC B 开始铺线 ──────────────────────────────────────── SEC D 终点
[多大]   [UBC]   [Stanford]  [OpenAI v1]  [Tesla]  [OpenAI v2]  [Eureka]  [Anthropic]
 2005    2009     2011        2015         2017     2023         2024      2026.5
 ❓CS    ❓物仿    🎓李飞飞     🤖创始       🚗马斯克  ↻动荡        🏫教育     🟠新子团队
                              +CS231N      汇报      二次离开
                              150→750      5 年
```

### 8 站元数据

| # | 站点 | 年份 | logo / icon | 关键词 | 字幕条 | 视觉强度 |
|---|---|---|---|---|---|---|
| 1 | 多伦多大学 | 2005-2009 | 多大 logo | 本科 CS+物理 | 未提（背景节点）| 灰色淡入（前置铺底） |
| 2 | UBC | 2009-2011 | UBC logo | 硕士·物理仿真 | 未提（背景节点）| 灰色淡入（前置铺底） |
| 3 | Stanford | 2011-2015 | Stanford 红 | 博士·**李飞飞门徒** | 19-20 | 🔥 hot（蓝/红强调） |
| 4 | OpenAI v1 | 2015-2017 | OpenAI logo | **创始成员** + CS231N 150→750 | 18, 21-28 | 🔥🔥 hot（Claude 橙 + 学生头像 stagger） |
| 5 | Tesla | 2017-2022 | Tesla 红 | Director of AI · 向 Musk 汇报 · 5 年 | 18, 29-30 | warm |
| 6 | OpenAI v2 | 2023-2024 | OpenAI logo | 二次回归 → 二次离开 + ⚠️ 灰虚线框（动荡期 + 本人否认） | 31-38 | 中性事实标注（**禁戏剧化**） |
| 7 | Eureka Labs | 2024.7 | Eureka logo / 学校 icon | "让任何人学会任何东西" · 目前暂停（措辞按 fact audit）| 39-41 | warm |
| 8 | Anthropic | 2026.5.19 | Anthropic logo | **新子团队 · pre-training · Nick Joseph 麾下** | 42-43 | 🔥🔥 hot（Claude 橙 halo 终点站，对应 ch0 反超的呼应） |

**注**：站 1-2（多大 + UBC）字幕没讲，作为 SEC B 进入时的**淡灰色背景节点**铺底（用户决策方案：完整 8 站 + 字幕跳过的前 2 站作为视觉历史）。Karpathy 头像从 Stanford 站起跑（**对应字幕 19 "在斯坦福读博的时候"**），不从多大起跑。

### 站间距

水平时间线 1700px 宽，8 站均匀分布间距约 220px（左右各留 110px padding）。但**第 3 站（Stanford）作为头像起点应在视觉中心偏左**，让头像有右移空间。

---

## 3. metaphor 表（每个口播关键词 → 字面 vs 语义扩展）

> 硬约束 §10：视觉 = 语义扩展 ≠ 字幕逐字翻译

| 口播关键词 | 字幕条 | 字面 | 语义扩展（视觉处理） |
|---|---|---|---|
| "先认识一下这个人" | 12 | 文字 | SEC A 人物名片卡淡入：Karpathy 头像 + 名字 chrome 大字 |
| "AI 教学的 GOAT · 布道者" | 16-17 | 标签 | 人物名片下方贴两个 chip："教学 GOAT" + "AI 布道者"，Claude 橙背景 |
| "OpenAI 创始成员" | 18 + 21 | logo | Stanford 站点旁的 OpenAI logo halo 发光 + chip "Founding Member · 2015"（**不是 founder**，§2.5 fact audit） |
| "斯坦福读博 · 导师李飞飞" | 19-20 | 文字 | Stanford 站点 zoom-in：李飞飞 logo / 文字 chip "Vision Lab · Fei-Fei Li"（蓝 hot 色，§2 STYLE_BRIEF "学术蓝") |
| "CS231N · 150 → 750" | 22-28 | 数字 | **学生头像 cluster stagger**：150 灰点 5×30 grid → 0.6s 后扩张到 750 亮橙点 27×28 grid，badge "5x in 2 yrs" | 
| "2017.6 Tesla · 向马斯克汇报 · 5 年" | 29-30 | 时间 + 人 | Tesla 站点亮起 + chip "Director of AI"，5 年用时间线段长度可视化（OpenAI v1 → Tesla 间距视觉拉长 = 时间感）|
| "2023.2 回 OpenAI" | 31 | 箭头 | Karpathy 头像从 Tesla 站回退到 OpenAI v2 站，时间线上"↻"icon 闪现 |
| "2024.2 又走 · 时间点微妙" | 32-38 | 灰虚线框 | OpenAI v2 站点周围**灰色虚线圈**：内含小字 "2023.11-2024.2 OpenAI 动荡期 · Altman 罢免后回归 · 卡帕西本人否认相关"。中性事实标注，**禁 Altman 头像、禁 dramatic glow** |
| "2024.7 Eureka Labs" | 39-40 | 学校 icon | Eureka 站点亮起 + chip "让任何人学会任何东西"（Karpathy 原话） + 备注 "目前暂停"（fact audit 措辞） |
| "5.19 加入 A 社 · 新子团队" | 42-43 | logo | Anthropic 站点 hot：Claude 橙 logo halo（最亮 + glow burst）+ chip "新子团队 · pre-training · Nick Joseph 麾下" → 时间线终点 |
| "真正出圈不是履历，是两个词" | 44-46 | 文字 | SEC E 收束：时间线缩小 + chrome 大字"两个词" + Claude 橙 hot-word（钩到 ch2 vibe coding） |

---

## 4. 视觉骨架（按 SEC 拆）

### SEC A · 人物名片（0.0-17.0s，字幕 12-17）

**布局**（padding flex，禁 absolute）：
- 全屏 padding 200px，flex column center
- Karpathy 头像 240px round（box-shadow 4 层 ring 同 seg00）
- 头像下方 chrome 大字"Andrej Karpathy"（128px，8-stop 渐变）
- 大字下方副字"安德烈·卡帕西"（44px，Noto Sans SC，深棕 #5A4F46）
- 副字下方两个 chip stagger："教学 GOAT" + "AI 布道者"

**timeline**（17.0s 内）：
- 0.0-0.6s：头像 scale 0→1 back.out + chrome 大字 fade in
- 0.6-1.0s：副字 char stagger（按 §2 STYLE_BRIEF "字符 0.06-0.08s"）
- 1.0-1.4s：两个 chip stagger（卡片 0.12-0.15s）
- 1.4-15.5s：hold（字幕 13-17 讲述期）
- 15.5-16.5s：SEC A 整段 fade（autoAlpha 0），切到 SEC B
- 16.5-17.0s：buffer

### SEC B · 履历列车出场 + CS231N 学生数翻 5x（17.0-47.0s，字幕 18-26）

**布局**：
- 上半屏（0-450px）：当前讲到的关键 hot moment zoom-in（Stanford·李飞飞、CS231N 学生 cluster）
- 下半屏（500-1080px）：水平时间线（1700px 宽）+ 8 站点 + Karpathy 头像

**timeline**（30s 内）：
- 17.0-18.0s：时间线骨架画出（dashed line stroke-dashoffset 渐显，同 seg00 .arrow-svg 写法）
- 18.0-19.0s：8 站点 stagger 入场（卡片 0.12s），多大+UBC 为灰色 background nodes（淡入到 0.3 opacity），Stanford / OpenAI v1 / Tesla / OpenAI v2 / Eureka / Anthropic 为亮色 nodes（淡入到 1.0 opacity）
- 19.0-19.5s：Karpathy 头像 scale 0→1 在 Stanford 站位置
- 19.5-22.0s：Stanford 站点 zoom-in（李飞飞 logo + Vision Lab chip 学术蓝）—— 对应字幕 19-20
- 22.0-26.0s：头像从 Stanford → OpenAI v1（沿时间线滑动 1.5s power2.inOut），OpenAI logo halo（drop-shadow Claude 橙）+ "Founding Member · 2015" chip 入场 —— 对应字幕 18, 21
- 26.0-29.0s：CS231N 学生头像 cluster 入场——150 灰点 5×30 grid stagger（按 0.005s/点，1.5s 内全出） —— 对应字幕 22-25
- 29.0-31.5s：cluster 扩展到 750 亮橙点 27×28 grid（scale + 增加 dots, ease power3.out）+ "5x in 2 yrs" badge 弹出（back.out(2.2)）—— 对应字幕 26-28
- 31.5-47.0s：hold + 准备 SEC C（局部 fade，时间线保持显示）

### SEC C · 列车推进 + 中性事实标注（47.0-81.0s，字幕 27-38）

**布局**：时间线继续显示，头像继续沿时间线推进；Tesla / OpenAI v2 站点依次激活；OpenAI v2 站点旁出现灰虚线圈（中性事实标注）。

**timeline**（34s 内）：
- 47.0-50.0s：CS231N cluster 缩小淡出，头像从 OpenAI v1 → Tesla（沿线推进 1.5s）—— 对应字幕 29
- 50.0-53.0s：Tesla 站点亮：Tesla 红 + chip "Director of AI · 向 Musk 汇报 · 5 年"（letter spacing 强调"5 年"）—— 对应字幕 29-30
- 53.0-58.0s：hold + "5 年"数字单独 chrome 大字浮现（左上角 zoom-in）后退场
- 58.0-61.0s：头像从 Tesla → OpenAI v2（沿线推进），OpenAI v2 站点亮 + chip "回归 · 2023.2"，时间线上"↻"icon 旋转闪现 —— 对应字幕 31
- 61.0-64.0s：头像从 OpenAI v2 hold（字幕 32 "又走 · 二次离开"，cluster fade out 节点暗化）
- 64.0-67.0s：**灰虚线圈出现** 在 OpenAI v2 站点周围（stroke-dasharray + dashoffset，慢速 1.5s 渐显），圈内小字标注分行 stagger：
  - line 1: "2023.11-2024.2"（JetBrains Mono 24px）
  - line 2: "OpenAI 动荡期·Altman 罢免后回归"（Inter 22px 深棕）
  - line 3: "卡帕西本人否认相关"（Inter 22px 深棕）—— 对应字幕 33-38
- 67.0-78.0s：hold（字幕 35-38 讲述完）
- 78.0-81.0s：灰虚线圈 + 标注 fade out（autoAlpha 0），准备 SEC D

### SEC D · 终点站 Anthropic（81.0-106.0s，字幕 39-43）

**timeline**（25s 内）：
- 81.0-84.0s：头像从 OpenAI v2 → Eureka（沿线推进），Eureka 站点亮 + 学校 icon + chip "让任何人学会任何东西"+ 备注 "目前暂停"（小字 16px JetBrains Mono 灰）—— 对应字幕 39-41
- 84.0-90.0s：hold（字幕 41 完）
- 90.0-93.0s：头像从 Eureka → Anthropic（沿线推进 1.5s），Anthropic logo Claude 橙 halo 加亮（drop-shadow 渐增）—— 对应字幕 42
- 93.0-96.0s：终点站 hot moment——Claude 橙 glow burst（同 seg00 SEC A 5.3s halo yoyo 写法）+ chip "新子团队 · pre-training · Nick Joseph 麾下" 入场 —— 对应字幕 43
- 96.0-100.0s：8 站时间线全亮一次（每站 0.15s stagger 亮起 + 暗下）—— 全片履历回顾
- 100.0-106.0s：时间线 + 头像 + 站点全部 fade（autoAlpha 0），准备 SEC E

### SEC E · 收束过渡（106.0-112.0s，字幕 44-46）

**布局**：屏幕 center，chrome 大字"真正让他出圈的是 <span class="hot-word">两个词</span>"

**timeline**（6s 内）：
- 106.0-106.6s：chrome 大字 fade in（scale 1.05 → 1.0 + autoAlpha 0 → 1，power3.out 0.6s）
- 106.6-111.5s：hold（字幕 44-46 讲完）
- 111.5-112.0s：chrome 大字 autoAlpha 0 → 0（**SEC E 不写 exit 动画**，因为不是整片最后段。fade 由 root timeline 段间 hard cut 处理）

⚠️ 注：按 hyperframes skill Scene Transitions Non-Negotiable "NEVER use exit animations except final scene"——seg01 不是整片最后段，**末尾不写 exit fade，直接 hard cut 到 seg02**。

---

## 5. 段顶部 + 段末尾固定写法（§8 §10）

段 HTML 顶部统一：
```js
const SEGMENT_DURATION = 112.0;  // §3.5 表段长列
const root = '[data-composition-id="seg01-renwu"]';
```

段 HTML 末尾统一：
```js
tl.set({}, {}, SEGMENT_DURATION);  // 强制 timeline 撑满段长
window.__timelines['seg01-renwu'] = tl;
```

---

## 6. 段间转场（§9）

**默认 hard cut**：seg00 末尾 SEC E 已有"chrome 大字 + 三连问 + scene-content fade out"，seg01 SEC A 开头直接 "人物名片头像 scale 0→1 + chrome 大字 fade in" 入场——hard cut 自然。

不需手写转场 block，不需 catalog 4s shader transition（§3.7 禁直接引用）。

---

## 7. index.html 挂载

在 seg00 挂载后追加：
```html
<div
  class="clip"
  id="seg01-renwu"
  data-composition-id="seg01-renwu"
  data-composition-src="compositions/seg01-renwu.html"
  data-start="38"
  data-duration="112"
  data-track-index="1"
  data-width="1920"
  data-height="1080"
></div>
```

- `data-start="38"`：seg00 段长 38s 后接，对应字幕 12 起点 00:00:38,166
- `data-duration="112"`：本段 112s
- 不写 `data-track-index` 重叠：保持 track 1 顺序播放

---

## 8. 资产盘点

需要的资产清单（动工程前先核对 `assets/` 是否齐）：

| 资产 | 用途 | 当前状态 |
|---|---|---|
| Karpathy 头像 | SEC A 名片 + SEC B/C/D 时间线移动 | ✅ `assets/portraits/karpathy.png` + `karpathy-hero.png` |
| 多大 logo | 站点 1（背景节点） | ⚠️ 待核 `assets/logos/` |
| UBC logo | 站点 2（背景节点） | ⚠️ 待核 |
| Stanford logo | 站点 3 | ⚠️ 待核 |
| OpenAI logo | 站点 4 + 站点 6 | ✅ `assets/logos/openai.svg`（ch0 已用） |
| Tesla logo | 站点 5 | ⚠️ 待核 |
| Eureka Labs logo | 站点 7 | ⚠️ 待核 |
| Anthropic logo | 站点 8 | ✅ `assets/logos/anthropic.svg`（ch0 已用） |
| 李飞飞 / Fei-Fei Li 标识 | Stanford 站点 zoom-in | ⚠️ 暂用文字 chip 代替（不一定要 logo） |

**资产缺口处理策略**：动工程前先 `ls assets/logos/` 核实。缺的 logo（Stanford / Tesla / Eureka / 多大 / UBC）有两种选择：
- A. 派 agent 去 `assets/logos/LOGOS.md` 抓 33 个 AI 厂商 logo（Tesla / Stanford 可能在）
- B. 缺的用文字 chip 代替（"Stanford" / "Tesla" / "Eureka Labs"，灰底圆角 chip，同 seg00 风格）

**默认走 B**——文字 chip 视觉一致性更好，logo 五颜六色容易破 DNA（米色底 + Claude 橙 hot 色）。如果某个 logo 必须放（如 Anthropic 终点站强呼应 ch0 反超），单独 hardcode 进 assets。

---

## 9. 风险与决策点

### 风险

1. **timeline 持续 90s 视觉密度太大**：8 站履历 + 头像沿线推进 + 各种 zoom-in（CS231N cluster / 灰虚线圈）—— SEC B-D 共 89s 都在用同一条时间线，可能视觉疲劳
   - 缓解：SEC B 进入时铺时间线骨架 + 节点 stagger 入场是新鲜感；SEC C 中间灰虚线圈是节奏变化；SEC D 终点 Claude 橙 hot 是反超呼应——3 个节奏锚点足够
   
2. **CS231N 学生头像 cluster 750 个点性能风险**：750 SVG circle 或 div 在 GSAP stagger 下可能 jank
   - 缓解：用 SVG `<g>` 包裹 + `<circle>` 简单几何（不用图片），stagger 0.005s/点；如果 preview 看到掉帧改成 5×30 → 25×30 视觉密度等价（仍然是 5x）

3. **灰虚线圈"中性事实标注"措辞**：字幕里讲了 Altman 罢免，视觉标注怎么平衡——不能过度暗示也不能完全略过
   - 用户决策已选"中性事实标注"，措辞按 fact audit："2023.11-2024.2 OpenAI 动荡期 · Altman 罢免后回归 · 卡帕西本人否认相关"——纯事实陈述

4. **头像沿时间线移动 90s 内 6 次推进**（Stanford→OpenAI v1→Tesla→OpenAI v2→Eureka→Anthropic）：6 次 GSAP transform 不会有性能问题，但**容易显得机械重复**
   - 缓解：每次推进的速度 / 距离不一样——Stanford → OpenAI v1 短距离 1.0s，OpenAI v1 → Tesla 长距离 1.5s（对应 5 年长时段），OpenAI v2 → Eureka 1.5s（对应"二次离开 + 半年沉淀 + 创业"的时间感）

### 决策点（动工程前需对齐）—— ✅ 已对齐 2026-05-21

1. **logo 用法**：✅ **真 logo monochrome 棕色系（fill #5A4F46 / #2B2622）+ 文字 chip 双重标识**。8 个 logo 都强制处理成棕色单色（CSS filter 或 inline svg fill 覆盖），下方挂文字 chip "多伦多大学" / "UBC" / "Stanford" / "OpenAI" / "Tesla" / "OpenAI" / "Eureka Labs" / "Anthropic"。**Anthropic 终点站例外**：原色 + Claude 橙 halo（保持 ch0 反超的视觉呼应）。资产 `assets/logos/` 全齐
2. **CS231N cluster 形态**：✅ **5×30 灰点 (150) → 25×30 亮橙点 (750)**。SVG circle 元素，stagger 0.005s/点。render 不走浏览器 raf，性能不受 preview 卡顿影响
3. **灰虚线圈**：✅ **不放 Karpathy 头像专门 hold**——头像继续按时间线节奏推进，灰虚线圈是空间标注不是叙事中断
4. **SEC B 进入时多大+UBC**：✅ **灰色背景节点 0.3 opacity**（事实完整 + 不抢节奏）。Karpathy 头像从 Stanford 起跑（对应字幕 19 "在斯坦福读博的时候"），不从多大起跑

---

## 10. 自检（动工程前 main agent 自答）

| Q | 答 | 证据 |
|---|---|---|
| 真源是字幕 12-46 不是录前预备稿？ | ✅ | 全 PLAN 引用字幕条号，未引用 `文稿/*.md`（已 git rm） |
| SEC 节奏对齐字幕时间码？ | ✅ | §1 表段内时间 vs 全片时间码 vs 字幕条三栏对应 |
| metaphor 表覆盖每个口播关键词？ | ✅ | §3 表 11 条覆盖字幕主要语义点 |
| 视觉 = 语义扩展不是字幕翻译？ | ✅ | 例：CS231N 学生数 = 头像 cluster 增长，不是字幕"150-750"打字 |
| 段内时间从 0 起算 + SEGMENT_DURATION 撑满？ | ✅ | §5 段顶/段末固定写法 + §4 各 SEC 用段内时间表达 |
| 段末没写 exit 动画（§hyperframes Scene Transitions）？ | ✅ | §4 SEC E "不写 exit fade，直接 hard cut 到 seg02" |
| 中性事实标注禁戏剧化（§2.5 fact audit）？ | ✅ | §3 metaphor 表"禁 Altman 头像、禁 dramatic glow" |
| DNA 红线（chrome 大字 + Claude 橙 + 米色底 + 四件套）覆盖？ | ✅ | §4 SEC A 人物名片 chrome 大字、SEC D 终点 Claude 橙 halo、全程米色底（root 层）+ 四件套（root 层全程） |

---

## 11. 下一步

PLAN 跟用户对齐后才动工程。对齐内容：
- §9 决策点 1-4（logo 用法 / cluster 形态 / 灰虚线圈细节 / 多大+UBC 显示策略）
- 整体 SEC 切分（5 SEC = 17+30+34+25+6 = 112s）是否合理
- 学生头像 cluster 750 点是否要降到 25×30（视觉密度等价、性能更稳）

对齐通过 → 动工程：写 `compositions/seg01-renwu.html` + index.html 挂载 → lint / validate → preview → 用户审 → render seg01 单段 draft → commit → ch0+ch1 串联 draft + 3 条验证 → 切新对话开 seg02。
