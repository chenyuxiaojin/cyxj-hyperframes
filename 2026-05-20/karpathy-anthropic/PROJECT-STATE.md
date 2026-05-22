# PROJECT-STATE — karpathy-anthropic 整片状态

> ⚠️ **SRT 仅作切点 + 时长锚点，不渲染为屏幕字幕；字幕由 DaVinci 加；HF 不做字幕。**（§7 工艺底线）

> **新对话切过来必读这份文档**。先读本文件再动手任何工作。
> 本文件是项目状态单源，任何 PLAN / commit / 工程改动后都要同步更新这里。

---

## 1. 真源声明（不可变）

- **唯一权威真源**：`字幕/加入之后.srt`
  - 21:32 完整视频，450 条字幕，已嵌入时间码
  - 用户录完口播后从达芬奇导出的逐字稿
  - **任何视觉设计 / 文稿拆分 / 节奏规划都必须以这份字幕为锚**

- **已作废、不得引用**：曾经存在过的 `文稿/` 目录下所有 `*.md`（00-outline、ch0-ch7、全片合并稿）
  - 这些是**录前预备稿**，已被实际口播推翻
  - 实际录的口播 vs 录前预备：Ch2 简化、Ch6 拆 3 个预测、加了 Ch5 merge / Ch6 汇流等新结构
  - 2026-05-21 commit 已 git rm，git history 可查但不要复用其设计

- **仍有效的全片纪律**：
  - `STYLE_BRIEF.md` — DNA 红线 + 防带跑（保留）
  - `术语对照表.md` — 英文术语读法纪律（保留，已从 文稿/ 移到工程根）
  - `研究/01-05` — 事实研究（可作引语佐证，**不作视觉骨架来源**）
  - `图片用户收集/` + `assets/` — 用户原图 + logos / portraits / tweets
  - 仓库根 `MY_VISUAL_DNA.md` / `MY_MOTION_NOTES.md` / `docs/HARD_CONSTRAINTS.md`

---

## 2. 整片拓扑（方案 B · 重定义）

**单工程统一管理 + root timeline 串起 11 段。最终交付 = HF 整片一次性 render 出的完整视觉层。**

- `index.html` = 21:32 (1292s) root，1920×1080，30fps
- `compositions/seg{NN}-{slug}.html` = 每段 1 个 sub-composition（seg00 = cold-open，seg10 = outro；保留 ch0-ch8 作为主题别名）
- 全局四件套（grid / vignette / grain / crosshair）+ DNA token 全片共享
- **进 DaVinci 的是「整片视觉层 + 口播音轨」两个文件**（不是 11 个独立段 MP4）
- **改任何一段都要重渲整片**，方案 B 已知 trade-off

**段验证通过 preview 浏览器肉眼完成，不 render 单段 mp4**（详见 §4.5）。

**为什么不是 11 个独立工程**（前期走过的弯路）：
- token / 全局四件套 / 字体 fallback 不共享 → 章间有"重置感"
- 失去 hyperframes 内 shader transition 可能
- 没有"全片贯穿元素"的位置
- 19-tips 9 分钟 / 21 章已实战验证方案 B 拓扑

---

## 3. 11 段拆分表（字幕节奏定的，非旧 outline）

| seg | ch | 起点 | 终点 | 段长 | 字幕条 | 主题 | 形态 | 状态 | Commit |
|---|---|---|---|---|---|---|---|---|---|
| seg00 | ch0 cold-open | 0:00 | 0:38 | 38s | 1-11 | OpenAI 创始成员→对手 + 数据反超 + 三连问 | cutaway | 🟢 v3 审计通过 | `e6e2f21` |
| seg01 | ch1 人物 | 0:38 | 2:30 | 112s | 12-46 | Karpathy 是谁 / 李飞飞 / CS231N / 4 段履历 / Eureka | cutaway | 🟢 v4 字幕对位 + 真人头像 + 新闻档案 | `0fcc9ed` |
| seg02 | ch2 概念 | 2:30 | 3:50 | 80s | 47-71 | vibe coding 短讲 (22s, 字幕 47-53) + LLM Wiki 详讲 (58s, 字幕 54-71) | cutaway | 🟢 v1 真实截图 + 槽位时序修复 + preview 验过 | `6b6917b` |
| seg03 | ch3 momentum | 3:50 | 5:21 | 91s | 72-103 | A 社采纳率 0.003%→7.94%→34.4% + 5.4 联手黑石/高盛 | cutaway | 🟢 v1 真截图 + preview 验过 | `ff66f7f` |
| seg04 | ch4 wrapper | 5:21 | 8:42 | 201s | 104-177 | 套壳从贬义到产品 + 洋葱图 + 主持稿例子 | cutaway | 🟡 v1 重做待 preview 确认 | `compositions/seg04-wrapper.html` |
| seg05 | ch5 merge | 8:42 | 11:14 | 152s | 178-230 | 卡帕西用 Agent 训模型 + Anthropic 创始团队来自 OpenAI | cutaway | ⬜ todo | — |
| seg06 | ch6 汇流 | 11:14 | 14:00 | 166s | 231-309 | 三组对位（Wiki↔Memory / vibe↔CC / Eureka↔Academy）殊途同归 | cutaway | ⬜ todo | — |
| seg07 | ch7-1 预测 1 | 14:00 | 16:00 | 120s | 310-340 | 上下文集市（skill+工作流+评测打包） | cutaway | ⬜ todo | — |
| seg08 | ch7-2 预测 2 | 16:00 | 17:37 | 97s | 341-372 | Goal 风格命令（从"做这一步"到"达成这状态"） | cutaway | ⬜ todo | — |
| seg09 | ch7-3 预测 3 | 17:37 | 19:24 | 107s | 373-417 | 非开发者打包工具（自媒体人脑里的判断打包共享） | cutaway | ⬜ todo | — |
| seg10 | ch8 outro | 19:24 | 21:32 | 128s | 418-450 | 套壳是产品 + Antigravity 2.0 砍 IDE + 北京交流 | cutaway | ⬜ todo | — |

**总时长**：38+112+80+91+201+152+166+120+97+107+128 = **1292s = 21:32** ✓（机械可检；SEGMENT_DURATION 一律取段长列）

**注**：seg04 段长 201s（5:21→8:42 = 201s，旧表写 200s 是约整误差），字幕条修正为 104-177（第 177 条是 seg04 结论“把这一个模型更好的去使用”，第 178 条才进入 seg05）；seg06 段长 166s（11:14→14:00 = 166s，旧表写 167s 是约整误差）；其余 9 段段长跟旧表一致。**起点 / 终点的精度按 SRT 真源校准** —— 写 PLAN-seg{NN} 时打开 `字幕/加入之后.srt` 查该段第一条字幕的开始时间码，作为该段在全片的起点真值。

**状态图例**：⬜ todo / 🟡 进行中或待审计 / 🟢 完成 / 🔴 阻塞

**形态字段**：当前 11 段**全部 `cutaway`**（用户 2026-05-21 确认，全片不出镜 talking head）。

**画中画（PIP）补充**：用户后续如想要画中画效果（人物缩到角落），**在 DaVinci 时间线层面做**（用户口播视频缩放叠到角落），**HF 这边不变**，整片仍按 cutaway 输出整片 MP4。只有当某段真的需要 HF 输出叠层物件（不是用户头像，是其他需要透明背景的视觉元素）才把该段改成 `overlay` 形态。详见 §3.6。

---

## 3.5 段命名 + 时间约定（§8 §10 工艺底线）

### 段文件命名

- `compositions/seg{NN}-{slug}.html`：seg00 = cold-open，seg10 = outro
- 保留 ch0-ch8 作为主题别名（PLAN 文件名 / commit 消息可用）

### 段内时间从 0 起算

- **每段 HTML 内部 GSAP timeline 一律从 0 起算**
- **段 HTML 禁止出现全片时间码**（如不准写 "// 这段在全片 0:38 处"）
- 全片绝对时间码**只在本文件 §3 表一处单源**
- index.html 顶层段间用 `data-start="seg{NN}"` 相对时序衔接（具体语法参考 hyperframes skill）

### timeline 必须撑满段长（官方 common-mistakes 写法）

```js
// 段顶部（每段都写）
const SEGMENT_DURATION = 112.0;  // 等于本段段长（取 §3 表「段长」列，不是「终点」列！）

// ... 段中间所有 timeline 动画 ...

// 段末尾（每段都写）
tl.set({}, {}, SEGMENT_DURATION);  // 零时长 tween 在 SEGMENT_DURATION 位置，强制 timeline 撑到该时长
window.__timelines["seg{NN}-{slug}"] = tl;  // 注册到全局，串联时 root 能拿到
```

- **`SEGMENT_DURATION` 一律取段长，不得取终点**（终点是全片绝对时间码，段内禁出现）
- `tl.set({}, {})` 零时长零目标，无运行时开销
- 不需要 helper 函数；常量名 `SEGMENT_DURATION` 固定就足够 grep 检查 11 段总和 = 1292.0s
- 官方出处：`packages/core/common-mistakes.md` "Composition Duration Shorter Than Video"（在 `hyperframes-student-kit/` 上游仓库内）

---

## 3.6 段形态分类（§11 工艺底线）

**每段必须标注形态**，抽模板按形态各抽一个，不要一个模板套所有：

| 形态 | 描述 | 最终输出 |
|---|---|---|
| `cutaway` | 整屏动画段（如 ch0 cold-open，全屏视觉化讲故事） | MP4 |
| `overlay` | HF 这边输出**透明背景的叠层视觉物件**（不是 talking head，而是要叠在 DaVinci 视频上的动效元素） | alpha MOV |
| `transition` / `chapter-card` | 极简短段（章节卡 / 转场） | 短 MP4 或 alpha MOV |

### 画中画（PIP）说明

**画中画 ≠ overlay 形态**。如果用户想要"人物缩到角落"效果（PIP）：

- ✅ 在 **DaVinci** 时间线上做：HF 输出整片 MP4 作为下层 → DaVinci 加用户的口播视频缩放叠到角落 → 字幕轨
- ❌ 不在 HF 里做 PIP：HF 不知道用户口播视频源，做不出来

所以**有 PIP 不等于要 alpha MOV**。只有当 HF 这边要输出"独立的叠层物件"（比如某段需要一个 HF 渲染的箭头 / 标签 / 注解叠到口播视频上）才需要 alpha MOV。

### 当前状态（2026-05-21 确认）

**11 段全部 `cutaway`**。后续如某段需要 HF 输出叠层物件，把该段改成 `overlay`。

### 形态决定 §3.8 最终交付格式

- 11 段里有任何 `overlay` 段 → 整片最终必须 alpha MOV
- 11 段全部 `cutaway` → 整片可用 MP4（**当前默认路径**）
- 形态归类时机：写 INTEGRAL-RHYTHM-MAP.md 时跟用户确认一次性定下，回填本文件 §3 表

---

## 3.7 段间转场实现选项 + 裁短规则（§9 工艺底线）

### 实现选项（按优先级）

1. **选项 1（优先）—— hard cut**：节奏自然降 / 场景大变。零成本零延长。**默认走这条**
2. **选项 2 —— 段自己呼吸**（非出场转场）：段头 0.3s 淡入、段尾 0.3s 淡出。这是段自己 timeline 内部的事，**计入 SEGMENT_DURATION，不增加全片时长**
3. **选项 3 —— 手写短 overlay 转场**：index.html 顶层手写 0.6-1.2s GSAP 动画（不依赖 catalog block），放更高 track 覆盖交界。需要重转场效果时用
4. **选项 4（少用）—— fork catalog block**：复制 whip-pan / flash-through-white / cinematic-zoom 的 HTML 到本工程 `compositions/transitions/`，改它内部 GSAP timeline 到 0.6-1.2s

### 绝对禁止

- **不准** 在 index.html 顶层 `data-composition-src` 直接引用 catalog 4s 转场 block（whip-pan / flash-through-white / cinematic-zoom）然后期待它变短——**做不到**
- 直接引用 catalog 4s block 会让 10 个交界 × 4s = **加长 40s**，破坏 SRT 锚点导致 DaVinci 漂

### 裁短规则（关键事实）

- **不得只改父级 `data-duration` 就认为裁短成功**——nested composition 的实际 duration 由**它内部 GSAP timeline** 决定，父级 `data-duration` 不能覆盖
- 真正裁短只能：
  - 选项 4：fork 到本工程 `compositions/transitions/`，改它内部 GSAP timeline 到 0.6-1.2s
  - wrapper 裁切：CSS overflow + opacity timeline 强制截断（复杂少用）
  - **直接 hard cut 或手写短转场（推荐默认）**

### 默认策略

默认走选项 1 + 2。选项 3 / 4 只在 INTEGRAL-RHYTHM-MAP.md 段间转场表里明确标注"需要重转场效果"的交界才用。

---

## 3.8 最终交付格式决策（§2 工艺底线）

### 决策标准

- 11 段里有任何 `overlay` 形态段 → **整片最终 alpha MOV**（`renders/final/full_visual.mov`）
- 11 段全部 `cutaway` 形态 → **整片可用 MP4**（`renders/final/full_visual.mp4`）

### 决策时机

**延后到整片 draft 做完之后再定**（用户 2026-05-21 决定）。原因：
- 11 段全部 cutaway 的话默认走 MP4 路径
- 但最终选哪个取决于整片 draft 看下来的实际效果（用户原话："等导出的时候再定，这主要取决于最终导出的效果"）
- 整片 draft 完成 + 用户审过后才在本节回填最终决策

**当前默认**：MP4（基于 11 段全 cutaway 的当前形态分类）

**触发切换 alpha MOV 的条件**：
- 任何一段形态从 cutaway 改成 overlay（HF 需要输出叠层物件）
- 整片 draft 看下来用户想要更灵活的后期合成空间

### 进 DaVinci 的两个文件

1. `renders/final/full_visual.{mov|mp4}` —— HF 整片一次性 render 出的视觉层
2. 用户的口播音轨（用户在 DaVinci 时间线里加，不在 HF 工程里）

DaVinci 字幕轨用户自己加（§7 SRT 不渲染原则）。

---

## 4. 项目级硬约束

### 制作流程（每章必走）

1. **只读字幕该章对应条数**，不读旧文稿
2. 写 `PLAN-ch{N}.md`：字幕条对应表 + 视觉骨架 + 组件复用
3. PLAN 跟用户对齐后才动工程
4. 写 `compositions/ch{N}-*.html`
5. 在 `index.html` 加挂载（`data-composition-src` + `data-start` + `data-duration`）
6. `npx hyperframes lint` 0 errors（73 warnings 误报可忽略，docs/HARD_CONSTRAINTS.md §9）
7. `npx hyperframes validate` 0 contrast warnings
8. preview 浏览器审 / 自审截图（用 `/api/projects/.../thumbnail/index.html?t=N` 端点）
9. 用户审 preview 通过 → **立即 commit**（不等整片完成）
10. 更新 PROJECT-STATE.md 表格状态 + commit hash

### 视觉约束（DNA 红线）

- 米色底 `#F7F2EA`，Claude 橙 `#d97757` 必现
- 米色底文字色降亮：橙→`#B5563D` 或 `#9A4634`、深红→`#8b3d28`、棕→`#5A4F46`（N17）
- chrome 大字 8-stop 渐变（米色暖版，hot 词 Claude 橙渐变）
- 字体硬编码 `"Noto Sans SC", "Inter", ...` 不用 CSS var（N15）
- 全局四件套不准移除
- 章末禁 exit 动画（N18，最后 ch8 outro 例外）
- 字幕轨**不在 hyperframes 里做**，用户在达芬奇加

### 翻车经验（必读）

完整版 `docs/HARD_CONSTRAINTS.md`。重点：
- N9 selector 必须 `[data-composition-id="X"]` 不用 `#X`（bundler strip wrapper）
- N13 `<img src="...svg">` + CSS color 不生效，要 inline svg 或 hardcode fill
- N14 GSAP transform 覆盖 CSS `translate(-50%,-50%)`，用 flex 居中或 `xPercent/yPercent: -50`
- N15 字体 var 编译丢失，硬编码字体名
- N17 米色底文字色 contrast 不够，用深色 variant
- N18 SEC/章末禁 exit 动画，最后一段例外
- N19 commit 节奏：一段 preview 通过 → 立即 commit

---

## 4.5 单段 → 串联 → 整片 render 工艺（§1-§6 工艺底线）

### 产物 2 类目录约定

| 用途 | 输出 | 进 DaVinci？ |
|---|---|---|
| （可选）整片节奏自审 | `renders/draft/full_visual_draft.mp4` | 否 |
| 方案 B 最终交付 | `renders/final/full_visual.mov` 或 `.mp4` | 是 |

> 注：`renders/draft/` 目录在常规流程下不产生文件。preview 浏览器即验证。

### 段验证：preview 浏览器即够

**V1/V2/V3 验证通过 preview 浏览器肉眼完成，不需要 render mp4**。

- **V1（段间过渡）**：preview 拖时间轴到段交界处看，过渡顺不顺
- **V2（总时长无增加）**：preview 时间轴顶部显示总时长，目测对得上 SRT 总长
- **V3（SRT 锚点对齐）**：preview 拖到下一段第一句字幕时间码（如 ch1 第一句 38.5s），看是不是该段第一帧

**整片 render 全项目只做 1-2 次**：

1. （可选）所有段写完后做一次整片 draft 检查整体节奏
2. 用户最终批准后做一次整片 high → `renders/final/full_visual.{mov|mp4}` 进 DaVinci

**不需要**：单段 render mp4 / ffmpeg concat / ffmpeg 抓帧 / ffprobe 查时长。preview 已经够。

### 整片 render 前

- **必须 stop preview tab**（§5；HARD §11；10+ sub-composition 远超内存阈值）
- 第一次 render 用 draft（§6；38760 帧 high 太长）
- 整片 draft 通过 + 用户验过后才考虑 high quality

### 最终交付

整片一次性 render：

```bash
npx hyperframes render --quality high -o renders/final/full_visual.{mov|mp4}
# 格式按 §3.8 决策（有 overlay 段用 mov alpha；全 cutaway 可用 mp4）
```

进 DaVinci 加口播音轨 + 字幕轨。

---

## 4.6 每段闭环节奏（§12 工艺底线）

### 4 步硬规则（缺一步不准开下一段）

1. **preview 验过**：用户在 preview 浏览器里看过本段，认可。**不要求产出 `renders/draft/seg{NN}.mp4`。preview 即验证。**
2. **commit**：
   ```bash
   git add -A
   git commit -m "seg{NN} {主题} 完成 + preview 验过"
   ```
   **commit body 必须包含**：
   - 段长（SEGMENT_DURATION 值）
   - 形态（cutaway / overlay / transition / chapter-card）
   - 用户审过的关键反馈（如适用）
3. **串联 draft + 3 条验证项**：**仅 ch0+ch1 这次必做**（见 §4.5），其他段视用户决定
4. **切换新对话开下一段**：用户开新对话，agent 从本文件 + `git log` + 上一段 `PLAN-seg{NN}.md` 重建上下文

### 为什么强制切对话

context window 会累积——agent 写完 ch2 时已经带着 ch0+ch1+ch2 的全部对话历史，写 ch3 时早期指令（"用 SEGMENT_DURATION 常量"、"段间默认 hard cut"、"全片时间码只在 PROJECT-STATE"）的权重被稀释，agent 容易跑偏。

新对话从文物重建 = 强制 agent 每次 ch{N} 都从本文件第一行读起，工艺底线每次都新鲜。

这就是为什么 §7-§10 强调"全片绝对时间码只在 PROJECT-STATE.md 一处单源"——**文物跨 session，对话历史不跨**。

---

## 4.7 写 PLAN-seg{NN} 前的资料搜集 SOP（§13 工艺底线）

写 `PLAN-seg{NN}-{slug}.md` 之前，agent 必须按本段形态 + 主题做 4 类检索，并在 PLAN 顶部写一节「§13 资料台账」记录用到了什么。**不写台账不准动 PLAN 正文**。

### 4 类检索

1. **官方文档**：
   - grep `docs/OFFICIAL_DOCS_VALUE_INDEX.md`，按本段涉及的 catalog block / 视觉技法挑 ⭐⭐⭐ 必读 + 相关 ⭐⭐
   - 读 `docs/hyperframes-official/` 对应文件
   - 列出读了哪些页 + 每页提取了什么写法

2. **参考工程**：
   - grep `docs/REFERENCE_INDEX.md` 第 1 节「完整工程」，按本段形态找 2-3 个相关工程
   - 打开它们的 `compositions/*.html` 看**真实写法**（不是看文档怎么说，是看真实工程怎么写）
   - 重点参考：本工程 `compositions/seg00-*.html`（cold-open 已完成，是黄金范本）
   - 列出参考了哪些工程的哪些 composition + 复用了什么写法

3. **零件复用**：
   - `ls templates/components/`：仓库根已抽零件（如 cc-window 终端 UI），能用就用不要重写
   - `ls` 本工程 `compositions/components/`（如有）：本工程已用过的零件
   - 列出本段会复用哪些零件

4. **catalog**：
   - grep `templates/catalog.json`，按本段需要的视觉效果（数据图 / 叠层 / 装饰 / 转场）找候选 block
   - 列出候选 block 名 + 是否在本段使用 + 使用方式（直接引用 / fork / 不用）

### 资料台账格式（写在 PLAN-seg{NN}.md 顶部）

```markdown
## §13 资料台账

### 官方文档
- 读了：[页面 1]，提取：[用得上的写法]
- 读了：[页面 2]，提取：[用得上的写法]

### 参考工程
- 参考 `compositions/seg00-*.html`：复用 chrome 大字 + 反超撞击模板
- 参考 `videos/2026-05-04-claude-19-tips/compositions/XX.html`：借鉴履历列车节奏

### 零件复用
- 用 `templates/components/cc-window/`：终端 UI
- 用本工程已有 `compositions/components/XX`：[零件名]

### catalog 候选
- flowchart：用于履历列车（fork 不直接引用）
- data-chart：候选未使用
```

### 为什么强制这一步

- 前置 0（cyxj-new-video skill `[BLOCKING]`）只触发读官方 skill。**skill 是规则，不是范例**
- 范例在 `videos/` 真实工程里、零件在 `templates/components/`、文档在 `docs/hyperframes-official/`
- agent 凭训练数据 + skill 写出来的是「通用 HF 写法」；加上参考工程 + 零件 + 文档才是「小陈频道的具体写法」
- cold-open 7 个翻车（N13-N19）发生在前置 0 加入之前 —— 前置 0 解决规则层，没解决"agent 不知道你之前怎么写过类似的"（范例层）。§4.7 就是补范例层
- **不查 = 重新发明轮子 = 跟 cold-open 不一致 = 11 段做出 11 种风格**

---

## 4.8 执行简化原则（13 条工艺是上限不是下限）

13 条工艺底线**不是每段必填的检查表**。实际执行分层：

| 层级 | 适用工艺 | 触发时机 |
|---|---|---|
| 每段必做（最小集合） | §7（SRT 真源）/ §8（段内时间从 0）/ §10（SEGMENT_DURATION + tl.set）/ §12.a-b（draft 验过 + commit） | 每段都做 |
| 关键节点必做 | §4（ch0+ch1 串联）/ §5（render 前关 preview）/ §12.c（串联 3 条验证） | 触发条件成立时 |
| 每段建议做 | §13 资料台账 | 每段建议；若本段明显是已做过形态的复刻，可简化为"复用 seg00 + 复用 cc-window"一行 |
| 首段对齐时定一次即可 | §9（段间默认 hard cut）/ §11（形态归类）/ §3.8（最终格式） | 写 INTEGRAL-RHYTHM-MAP.md / seg01 PLAN 时定一次 |
| 每段切对话 | §12.d | 每段闭环最后一步，强制 |

### 每段 PLAN 顶部声明

每段开工时 agent 自己判断本段实际需要哪些条款，**在 `PLAN-seg{NN}.md` 顶部用一行写明**：

```
本段适用 §X / §Y / §Z，其余依默认
```

例如 seg01：

```
本段适用 §7 / §8 / §10 / §11 / §12 / §13；段间转场依默认（§9 hard cut）；最终格式延后定（§3.8）
```

### ch3 做完后回看清理

13 条里哪几条从来没救过事？哪几条每段都触发但都是空跑？哪几条真的防住翻车？删前两类，保留第三类。3 个段做完是合理的样本量做这次清理。回看后更新本文件 §4.8 表。

---

## 5. 工程目录速查

```
2026-05-20/karpathy-anthropic/
├── PROJECT-STATE.md            ← 本文件，新对话必读
├── 字幕/加入之后.srt           ← 真源，所有视觉的锚
├── STYLE_BRIEF.md              ← DNA 红线（全片有效）
├── 术语对照表.md               ← 英文术语读法（全片有效）
├── PLAN-cold-open.md           ← ch0 的 PLAN（已审计待补完）
├── meta.json + hyperframes.json
├── index.html                  ← 1292s root，挂载所有章
├── compositions/
│   ├── ch0-cold-open.html      ← 已做（含 5 SEC 内层 wrapper）
│   └── （ch1-ch8 待做）
├── assets/                     ← logos / portraits / tweets / xcyj-tokens.css
├── 图片用户收集/               ← 用户原图（hero + tweet）
├── 研究/                       ← 事实研究（不作视觉骨架来源）
├── debug-shots/                ← gitignore，preview 截图存这
└── renders/                    ← gitignore，渲染 mp4 存这
```

---

## 6. 新对话切过来操作清单

1. `Read PROJECT-STATE.md`（本文件）
2. `Read 字幕/加入之后.srt`（真源）
3. `Read STYLE_BRIEF.md` + `MY_VISUAL_DNA.md`（DNA）
4. `git log --oneline -15` 看 commit 历史
5. 看本文件第 3 节"状态"列，找最近一个 ⬜ todo 章节
6. **不要**读 git history 里 git rm 的 `文稿/*.md`（已作废）
7. 写 `PLAN-ch{N}.md` 基于字幕该章条数
8. 跟用户对齐 PLAN 后才动工程
9. 用 hyperframes thumbnail API 自审（`http://localhost:3002/api/projects/karpathy-anthropic/thumbnail/index.html?t=N`）
10. 用户审过 → commit → 更新本文件状态

---

## 7. 风险点 / 注意

- **ch7 一段太长拆 3**：原 14:00-19:24 是单个"3 个预测"段（5:24），按字幕自然停顿拆 ch7-1/2/3，每段 1.5-2 分钟
- **ch4 wrapper 最长**（200s）：洋葱图 + 主持稿例子 + 4 层结构，可能需要内部拆 scene
- **ch6 汇流是叙事高潮**（167s）：三组对位 + 殊途同归，视觉一致性要求最高
- **ch1 人物履历**（112s）：4 段履历 + Eureka，时间线列车 / 站点比喻是合理切入
- 全片有 11 个 sub-composition，HARD §9 提到 13 个会让 Chrome renderer 涨到 12GB —— preview 时注意，render 不会有这个问题

---

## 8. 修订日志

- **2026-05-21**：建立本文件。字幕作为真源拷入工程目录。旧 `文稿/` 全部 git rm（保留 git history 可查）。术语对照表从 文稿/ 移到工程根。
- ch0 已完成 v1（commit `fc45a93`，方案 A 拓扑）+ v2（commit `e6e2f21`，方案 B 拓扑，5 SEC 合并）。**v2 仍待审计**（字幕对位）。
- **2026-05-21**：seg01 ch1 人物履历完成（commit `0fcc9ed`，v4 字幕对位 + 真人头像 + 新闻档案）。
  - SEC 切分 5 段 = 17+30+34+25+6 = 112s，对齐 SRT 字幕 12-46
  - 履历列车 8 站（多大→UBC→Stanford→OpenAI v1→Tesla→OpenAI v2→Eureka→Anthropic）
  - 视觉升级响应用户"缺少和现实的链接"反馈：feifei.jpg / musk.jpg / TC+Verge 新闻档案
  - 字幕对位审计：所有 GSAP timestamp 按 SRT 真源逐条校准（v3）
- **2026-05-21**：seg02 ch2 概念段 v1 完成 + preview 验过（commit `6b6917b`，vibe coding + LLM Wiki 双概念）。
  - 5 SEC 切分 = 22.07+14.47+13.70+12.17+17.60 = 80s，对齐 SRT 字幕 47-71（按 SRT 真源 2 次校准）
  - 真实素材：推文 / Gist / B 站 3 组视觉从 HTML mock 全部改成**真实截图**（X.com / gist.github.com / search.bilibili.com 抓取，可信度拉满）
  - 修 SEC A 17s 终端 + outro 重叠 bug：cc-window 14.30s autoAlpha:0 退场 → outro 14.95s 入场，槽位时序不再叠加（CSS grid place-items:center 共用 a-stage 槽位）
  - 删 SEC E 4 条杂乱 merge-lines：源头 pin 高亮 + B 站卡片 yoyo 替代连线汇聚
  - 前置 0.5 修订（轻量纪律）：PLAN-seg02 §1 字幕 59 起点 00:03:07,366 → SEC B 14.47s / SEC C 13.70s 回填，视觉影响 SEC C 改 2 轮 RAG 循环（不是 3 轮）+ Wiki 累积更快
  - 验证：HF Studio preview（http://localhost:3002）scrubber 全段过，用户审过通过
- **2026-05-21**：seg03 ch3 momentum v1 接入，用户确认后提交。
  - 新增 `PLAN-seg03-ch3-momentum.md` + `compositions/seg03-momentum.html`，root `index.html` 挂载 `data-start="230"` / `data-duration="91"`
  - 5 SEC 切分 = 7.6+29.9+19.2+15.3+19.0 = 91s，对齐 SRT 字幕 72-103
  - 视觉差异化：cold-open 是折线反超瞬间；seg03 改成 Ramp 三连阶跃 + 样本边界 + 5.4 企业服务公司 + 方法/服务层/合作网络系统图
  - A 社 logo：三处均复用本地 `assets/logos/anthropic.svg`，保留 `duplicate_media_discovery_risk` warning 作为本地资产一致性的取舍
  - 事实复核：Ramp 官方确认 34.4% / 32.3%；Anthropic 官方确认 2026-05-04 Blackstone / Hellman & Friedman / Goldman Sachs 企业 AI 服务公司
  - 验证：`npx hyperframes lint` 0 errors（371 warnings，主要为既有 selector 误报 + composition_file_too_large）；`npx hyperframes validate` 0 console errors，115 text elements pass WCAG AA；thumbnail 自审 `t=231/260/278/296/319` 通过基础构图检查
- **2026-05-22**：seg03 真截图升级（commit `ff66f7f`）—— 修复前置 0.3 硬约束违规（HTML mock 替代真截图）
  - SEC B 末 `.overtake-badge` 单 chip 升级为 **Ramp 真截图出处卡**（`assets/screenshots/ramp-ai-index-may-2026.png`，含黄底 RAMP AI INDEX banner + 标题 + hero chart）
  - SEC D d-title 后新插 **Anthropic JV 公告真截图卡**（`assets/screenshots/anthropic-jv-announcement.png`，横向 archive：左图 + 右 tag/title/URL），partner-card 推后到 62.5s 给截图 ~2.4s 静审
  - 截图来源：playwright 抓自 ramp.com/leading-indicators/ai-index-may-2026 + anthropic.com/news/enterprise-ai-services-company
  - 验证：lint 0 errors / validate 0 contrast warnings on seg03 elements / preview 用户审过通过
