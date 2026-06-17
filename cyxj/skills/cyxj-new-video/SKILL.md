---
name: cyxj-new-video
description: 陈与小金（XCYJ）频道 HyperFrames（HF）中文视频全生命周期助手——建工程、推参考、风格借鉴、QA、渲染、归档、抽模板。当用户说「新视频」「做视频」「做个视频」「做新视频」「做 HF 视频」「做 HyperFrames 视频」「做 HF 教程」「片头」「new video」，或输入含 URL 且意图做视频，或说「做完了」「归档」「这条做好了」「渲染完成了归档吧」，或说「抽成模板」「这个结构挺好抽个模板吧」时触发。覆盖从「想法 / URL / 参考素材」到「成片归档进 videos/」+「可选抽模板」的全流程。本仓库做 HyperFrames 中文视频一律用此 skill，不要直接用上游 make-a-video（缺归档 / 抽模板 / 参考推荐 / DNA gate）。这是仓库级 wrapper：叠加在官方 HF skills 和本仓库 DNA / 硬约束之上，不替代官方 skill。
---

# cyxj-new-video — XCYJ × HyperFrames 视频全生命周期 SOP

> ⚠️ **LEGACY / 仅历史流程参考**（2026-06-17）。active 入口是 `cyxj-hyperframes-overlay`，官方 skill 走 GitHub 直连（`npx skills`，16 个）。本文坐标多已过时：`videos/` → `视频项目/已发布/`、根 `2026-MM-DD/` → `视频项目/在制/`、裸 `docs/` → `cyxj/docs/`、基线 0.6.33 → 0.6.109、`/website-to-video` 已改名（原 `/website-to-hyperframes`）、`/gsap` → `/hyperframes-animation`。以 `CLAUDE.md` + `cyxj-hyperframes-overlay` + `cyxj/docs/HARD_CONSTRAINTS.md` 为准。

这是陈与小金（XCYJ）频道的视频生产 wrapper。它把「建工程 + 推参考 + 借风格 + QA + 渲染 + 归档 + 抽模板」这一串琐事收成一句话触发。

**这个文件只放触发、路由、gate、delegate。技术真源在官方 skill，纪律真源在仓库 docs。** 动手前按任务读对应的源文件，不要把规则复制进来——复制就是制造第二真源，会漂移。

> 环境基线（2026-05 实测）：本机 `hyperframes 0.6.33`。命令面以此版为准；新 session 先 `npx hyperframes upgrade --check` 看有没有大版本漂移，有就重新核对本文命令。

---

## 0. 三条铁律（每次进 skill 先记住）

1. **`npx hyperframes` 必须在工程目录里跑**（仓库根没 package.json）。见 HARD_CONSTRAINTS §5。
2. **mp4 / mov / 大音频不进 git**（§7）；debug 截图只放 `<工程>/debug-shots/` 或 `/tmp/`，不准丢仓库根（§19）。
3. **单源原则**：规则改动一律改源头文件再 commit，本 skill 和 CLAUDE.md 都不写死「N 条约束」这种数字——只链回 `../../docs/HARD_CONSTRAINTS.md` 全文。

仓库默认根：`~/项目/视频制作台/hyperframes/`。新工程 `2026-MM-DD/<slug>/`，归档 `videos/<日期>-<slug>/`，模板 `templates/<name>/`，参考索引 `../../docs/REFERENCE_INDEX.md`。

---

## [BLOCKING-REUSE] 写 composition / 动画效果前必跑复用扫描

反复纠正点（karpathy-anthropic 复盘）：AI 倾向"凭直觉手写动画"而不查已有零件 → 重复造轮子 + 风格漂移。仓库已有 10 个已发布视频 + 7 个抽好的 components + 38 个 HF catalog blocks，不查 = 浪费 + 视觉不一致。

**触发**（这些时刻必跑扫描）：写任何 `compositions/*.html` / 新动画效果 / 新 sub-composition 之前 —— 含用户说"加个 X 效果 / 做个 Y 动画"、写 PLAN-segNN.md、给 codex / sub-agent 发 prompt 时。

**4 处扫描顺序**（找到能用就 fork 改造，全没有才手写）：

1. **本工程已写段**：`ls <工程>/compositions/` —— 同工程内 seg 通常能直接 fork（如 seg08 callback "02"卡 复用 seg07 a-card-01 layout）
2. **仓库抽零件**：`ls templates/components/` —— 7 个：`cc-window`（终端 UI）/ `orbit-dots` / `pulse-bars` / `shake-error` / `spec-fill` / `text-effects` / `xcyj-tokens`
3. **历史视频实现**：`find videos/*/compositions -name "*.html"` 或按关键词 grep —— 10 个已发布视频是活字典（如 seg07 cube morph 复用 19-tips/14-worktree.html line 463-467 elastic.out 落地微弹）
4. **HF 官方 catalog**：`Read templates/catalog.json` —— 38 blocks + 3 components，匹配就装（`/cyxj-add-block`）

**输出格式**：扫描结果填进 PLAN-segNN.md 顶部 `§13 资料台账` 段，格式见工程级 `PROJECT-STATE.md §4.7`。**没填不动 PLAN 正文、不写 HTML、不开 v1**。

**派 subagent / codex 时**：prompt 必带「先跑 [BLOCKING-REUSE] 4 处扫描，列结果给我看，再写 HTML」。karpathy-anthropic `seg04 codex v1` 被 revert 的教训：codex 凭直觉用了抽象色块 mock，因为 prompt 没强制让它先看 `videos/2026-05-04-claude-19-tips/compositions/` 的"两终端对比"实现。

**漏扫的自检信号**（这两条命中就回头扫一遍）：
- 手写代码 > 80 行 → 大概率有零件没查到
- 实现的是通用 UI（终端窗口 / iframe 截图卡 / chrome 大字 / motionPath / 标签 chip / motion 落地微弹） → 99% 仓库已经有过

**为什么是 [BLOCKING] 不是建议**：本仓库 `§13 资料台账`（HARD_CONSTRAINTS / PROJECT-STATE）早就规定了 4 类检索，但 AI 反复跳过 —— 不是规则不存在，是规则不显眼。这一段顶到 §0 后面就是为了让 AI 进 skill 时第一眼看见。

关联：仓库 memory `feedback-reuse-before-handwrite`，工程级 `PROJECT-STATE.md §4.7` 资料台账格式定义。

---

## 1. 分流决策图（进 skill 第一步走这里）

```
用户输入
 │
 ├─ 含 URL 且要做视频 ─────────→ A0：delegate /website-to-video，拿到 capture/+DESIGN+SCRIPT+STORYBOARD 再回 A1
 ├─「做完了 / 归档 / 这条做好了」→ 阶段 B（归档）
 ├─「抽成模板」───────────────→ 阶段 C（抽模板）
 └─ 其他（文字主题 / 参考图 / 口播）→ 阶段 A
         │
         ├─ 9:16 竖屏 ──────────→ delegate /short-form-video，本 skill 退出
         └─ 横屏 ── 一律从空白起步（当前无内置模板）：
                └─ npx hyperframes init --example blank 起步，
                   参考 videos/ 拓扑但不直接 cp 已发布工程（id / 文案绑死旧内容）
```

不确定时只问一句：**「你是要建新工程、继续现有工程、归档，还是抽模板？」**

拓扑参考（按形态从 `videos/` 回查，仅看结构不 cp）：直出 host-overlay → `claude-demo-v2`；ProRes alpha 精修 → `claude-overlays-only`；无录屏 demo 串联 → `codex-claude-intro`；长教程 → `claude-19-tips`。完整 10 条见 `../../docs/REFERENCE_INDEX.md`。

---

## 2. 动手前必读（写 composition 前 [BLOCKING]）

写任何 `index.html` / `compositions/*.html` 之前，必须先加载官方能力 + 读仓库纪律。**跳过这步＝重蹈 2026-05-20 cold-open 的覆辙**（漏了官方硬规则，写了禁用的 exit 动画、用了 absolute 定位、用绝对秒数）。

| 任务 | 加载 / 参考 |
|---|---|
| composition / sub-composition / caption / timeline | `/hyperframes`（含 Scene Transitions 硬规则、Layout Before Animation、Visual Identity Gate、WCAG）+ **先跑顶部 [BLOCKING-REUSE] 4 处扫描** |
| CLI dev loop（init/lint/validate/inspect/preview/render/doctor） | `/hyperframes-cli` |
| GSAP 时间线 / position parameter（`"<"` `">"` `"<0.2"`）/ paused timeline / autoAlpha | `/hyperframes-animation`（或更细的 `gsap-skills:*`） |
| 用 catalog block/component | `/hyperframes-registry`（**但记住：add 是 fork demo 起点，不是参数化零件，见 §3 catalog**） |
| URL → 视频 | `/website-to-video` |
| TTS / 转写 / 抠像 | `/hyperframes-media` |

仓库纪律真源（写前读，不要凭记忆）：
- `../../docs/HARD_CONSTRAINTS.md`（**全文必读**，不看条数看内容）——核心是 GSAP querySelector 硬编码（§1）、复制 beat 全局换 id（§2）、sub-comp 用 `[data-composition-id="X"]` 不用 `#X`（§9）、GSAP transform 覆盖 CSS translate（§14）、catalog 是 demo（§16）、转场即退场仅 final scene 例外（§18）。
- `../../notes/MY_VISUAL_DNA.md`（个人美学宪法）+ `../../notes/MY_MOTION_NOTES.md`（19 招实战沉淀）。

> **PROJECT-STATE / RHYTHM-MAP 是工程级文档，不是 wrapper 级。** 只有当前工程目录里**确实存在** `PROJECT-STATE.md` 时，才按「真源优先」校对（读 SRT 发现跟描述对不上 → 改源头文件再 commit）。wrapper 层不依赖它存在——仓库根没有这个文件。

---

## 阶段 A：建工程

### A1. 一次性问清四件事

1. **视频形态**（决定走哪条模板路径，见 §1 决策图）：9:16 竖屏 / 横屏有录屏直出 / 横屏有录屏 ProRes 精修 / 横屏无录屏结构化教程 / 横屏无录屏单段演示。
2. **主题** → 转 kebab-case 当 slug（去中文，保留拼音 / 英文 / 数字 / `-`）。
3. **大致时长** → 5-30s / 30-60s / 60-120s / 自定义。
4. **有没有参考素材** → 有 → **走阶段 D**（先让用户把图存 `参考图/<slug>/`）；没有 → 按 DNA 默认风格，跳过 D。

### A2. 推荐参考工程

`Read ../../docs/REFERENCE_INDEX.md`，按形态挑 2-3 个工程列给用户，问「先 `npx hyperframes preview` 看一眼，还是直接开干？」

### A3. 建工作区

```bash
DATE=$(date +%Y-%m-%d); mkdir -p "$DATE"
```

- **一律从空白起步**（当前无内置模板）：`cd "$DATE" && npx hyperframes init <slug> --example blank --skip-skills`，照 `/hyperframes` 最小骨架补 `compositions/*.html`。参考 `videos/` 旧工程拓扑但不 cp。
- **DNA token 接入**：真源是 `templates/components/xcyj-tokens/xcyj-tokens.css`。`cp templates/components/xcyj-tokens/xcyj-tokens.css <工程>/assets/`，`index.html` 顶部 `<link rel="stylesheet" href="assets/xcyj-tokens.css" />`，beat 里直接 `var(--c-bg)` / `var(--c-hot)`。**改 token 改真源，不要改镜像。**

可复用零件在 `templates/components/`（7 个）：`cc-window`（终端 UI）、`orbit-dots`、`pulse-bars`、`shake-error`、`spec-fill`、`text-effects`、`xcyj-tokens`。用前 `Read templates/catalog.json` 看清楚每个干什么。**写 composition 时完整 4 处扫描流程见顶部 [BLOCKING-REUSE]**，含 `videos/` 历史工程和本工程已写段，不只是这 7 个抽零件。

### A4. 改 meta / index

```bash
cd "$DATE/<slug>/"
```

- `meta.json`：`id = xcyj-<slug>`，`name = 可读中文名`（从空白脚手架起步，直接填正确值）。
- `index.html`：`<title>`、root `data-composition-id`、文件末尾 `window.__timelines["..."]` key 三处 id 同步（§2 / §9）。
- 总时长用 timeline 结尾 `tl.set({}, {}, TOTAL_SECONDS)` 表达，不要靠 root `data-duration`。

### A5. 接收文案后改 beat

先过 `../../notes/MY_VISUAL_DNA.md` 末尾的自检清单（全部 yes 才继续，任何一条 no 先修 brief 或 theme）。再扫 `../../notes/MY_MOTION_NOTES.md` 看本视频会触发哪几条（撞击/爆炸 → 同帧合成；改主色/加效果 → sample→broadcast；2025-Q4 后新功能 → 联网双源审核；SVG filter → 命名空间）。然后改各 `compositions/*.html` 的 headline / caption / list / terminal / card 文案，全程守 `../../docs/HARD_CONSTRAINTS.md`。

---

## 阶段 D：风格借鉴（A1 第 4 题答「有参考素材」时）

时机：A4 改完 meta 之后、A5 改 beat 之前。目的：让参考影响视觉，但**强制保留 XCYJ 视觉 DNA**，不被参考带跑。

1. **必读 4 个文件**：`../../notes/MY_VISUAL_DNA.md`、`../../notes/MY_MOTION_NOTES.md`、`../../docs/STYLE_BORROW_PLAYBOOK.md`、`参考图/<slug>/` 下所有图（≤10 张全 Read，≥10 张挑 8-12 张代表性的）。
2. **写本工程 `STYLE_BRIEF.md`**：强制做 DNA 对照表（参考有但 DNA 拒绝 / DNA 必须但参考没有 / 参考有且 DNA 允许）→ 套 PLAYBOOK brief 骨架（≤200 行）→ 每 beat 写「核心比喻 + 用什么组件 + 引第几张参考图 + hot 词」→ 过 DNA 自检全 yes 才进下一步。
3. **改 beat**：8 beat 默认分组 hook+pain / verdict+promise / concept+flow / punchline+outro。可用 subagent 并行（同一条消息里启动）；每个 agent 必读本工程 STYLE_BRIEF.md + index.html + 现状 composition + ../../notes/MY_VISUAL_DNA.md + 1-2 张相关参考图。
4. 完成后回到 A5 收尾，进 QA。

---

## QA → commit → render 流水线

所有命令在工程目录跑。出错就停下问用户，不要硬跑下一步。

```bash
npx hyperframes doctor      # 环境：Node≥22 / FFmpeg / Chrome / Docker（新机器/新 session 先跑）
npx hyperframes lint        # 结构 lint，必须 0 errors（§1/§2 高频触发）
npx hyperframes validate    # WCAG contrast 审核（默认开；命令不在主 help 列表但可用）。§17：米色底用深橙 #B5563D
npx hyperframes inspect --samples 15   # 文本/容器溢出审计（lint 抓不到，肉眼也常漏）
npx hyperframes preview     # localhost:3002，浏览器拖 scrubber 全段人眼审 motion
```

每一步解决的问题不同：`lint` = 结构合法性，`validate` = 对比度，`inspect` = 布局溢出（19 招里 polaroid 溢出、cc-window 居中失效本该这步抓），`preview` = 真实 motion 人眼判断。

**motion 验证只认 preview 人眼 scrub**，禁 playwright 单帧截图、禁 render mp4 验证（preview 即所见即所得）。需要把单帧给 AI 看时用 `npx hyperframes snapshot --at 3.0,10.5`（不开常驻浏览器 tab，契合 §10/§11 内存教训）。

```bash
# ── preview 人眼通过 → 立即 commit（不等整片完成）──
git add <工程>/
git commit -m "feat(videos): <slug> v1 - 完整可 render"
# ── commit 后才 render ──
npx hyperframes render --quality draft --output renders/draft.mp4    # 草稿速验
```

**commit 节奏（§19）**：一段 preview 通过即 commit；改完一轮 → `iterate(videos): <slug> v2 - <主要变化>`；通用 bug fix / 新硬约束各自独立 commit。理由：cold-open 做一天没 commit 差点丢工作。

### render 形态速查（0.6.33 实测）

| 场景 | 命令 |
|---|---|
| 横屏直出成片 | `render --quality standard --output renders/final.mp4`（standard 在 1080p 视觉无损） |
| 终交付最高档 | `render --quality high --output renders/final.mp4` |
| **ProRes 4444 alpha（达芬奇/PR/FCP 精修）** | `render --format mov --output renders/overlay.mov` ← **NLE 叠加层走这个，不是 webm（§3）** |
| WebM alpha（**仅浏览器**播放） | `render --format webm --output renders/overlay.webm`（VP9 alpha 进 NLE 是黑底，别用） |
| PNG 序列（AE/Nuke/Fusion） | `render --format png-sequence --output renders/frames/` |
| 竖屏成片 | `render --resolution portrait --output renders/final.mp4`（4K 加 `-4k`） |
| 4K | `render --resolution 4k --output renders/final-4k.mp4`（DPR 超采，HDR 暂不支持 4K） |
| 渲单 sub-comp | `render -c <composition-id> --output renders/<id>.mp4` |
| 变量驱动模板 | `render --variables-file vars.json --output renders/out.mp4`（见阶段 C） |

> 别默认 4K/60fps：1920×1080 / 30fps 渲得快也够好，需要才上。

---

## 阶段 B：归档

1. 查 `renders/final.mp4`；没有就问「现在渲 standard/high，还是别处已有成片？」
2. 取日期前缀：① `git log --reverse --format=%cs -- 2026-MM-DD/<slug>/ | head -1` ② 工作区文件夹日期 ③ 今天。
3. `mv 2026-MM-DD/<slug> videos/<日期>-<slug>`（含 `renders/` 一并移，mp4 本地留、gitignored）。
4. `../../docs/REFERENCE_INDEX.md` 加一行：`| videos/<日期>-<slug>/ | 16:9 | XXs | 主题/亮点 |`。
5. 用了 catalog block 的话，在「真实工程用过哪些零件」板块补一行。
6. **必问**（永不跳过）：「这条的结构（XX beat / XX 拓扑 / XX 时长）以后会反复用吗？要 → 进阶段 C 抽模板；不要 → 留作参考即可。」

---

## 阶段 C：抽模板

1. 问模板名（kebab-case，如 `tutorial-7beat-product` / `host-overlay-alpha`）。
2. `cp -R videos/<日期>-<slug> templates/<新模板名> && cd templates/<新模板名>`。
3. 抽空：`meta.json` 的 id→`xcyj-NEW-TOPIC`、`<title>`、各 beat 的 headline/caption/terminal/list、`assets/` 具体素材、`renders/`。
4. **参数化优先用官方 variables，不要只靠 `{{PLACEHOLDER}}`**：root 加 `data-composition-variables`，beat 里 `window.__hyperframes.getVariables()` 读值，渲染时 `--variables-file vars.json`（可加 `--strict-variables`）。这才是官方「参数化」姿势，跟 catalog block 的 fork 困境正相反。
5. 写 `../../notes/TEMPLATE_USAGE.md`：拓扑 / 输出格式 / 适用场景 / 改什么 / 时长公式。
6. **必问**：「这次有没有视觉决策要沉淀进 `../../notes/MY_VISUAL_DNA.md`？只有连续 2-3 条都验证有效的偏好才升级——DNA 频繁改 = 没 DNA。」

---

## §3 catalog 是 fork 起点，不是参数化零件（重要认知，实测坐实）

`npx hyperframes add <name>`（如 `yt-lower-third`）实测行为：✅ 写 `compositions/<name>.html`（200+ 行完整 demo，含 GSAP timeline）+ 落地 demo 资产 + 给一行 include snippet 复制到剪贴板；❌ 不改 `index.html`、❌ 无参数化接口（姓名/标题/配色全硬编码在那 200 行里）。

关键认知：**装进来的是完整源码 demo（文案/配色硬编码），fork 改就能用**——改颜色就是进文件改那几处 `color: #xxx`，改文案就是改写死的字符串，完全能用。「fork demo」指的是「**没有参数化接口、每次复用都得手动进文件改**」，不是「不能改」。

所以引导用户用 catalog 时说清两点：① add 之后能直接 fork 改（改色/改字即用），② 但**每次复用都要手动改源码**，没有一键换皮。预期工作量 = 进那 200+ 行改，不是「插一个零件填参数」。建议先 `Read docs/hyperframes-official/catalog/blocks/<name>.md` 看 dimensions/duration/风格再决定 add。**想零成本反复换皮**（同一结构换不同主题反复用），走阶段 C 的 variables 路径自己抽模板，不走 catalog。

---

## 贯穿纪律（链回真源，不复制规则）

- **视觉跟语义走**：先把 SRT 切「段·语义·秒数」，每段口播对应一个视觉 cue，空窗用过程视觉填、不 spoiler 下句（MOTION_NOTES §4）。
- **真实素材禁 HTML mock**：真人/推文/Gist/文章页/视频列表一律抓真截图（grok-search 或 tavily 找 URL → firecrawl screenshot），放 `assets/screenshots/`。HTML mock 可信度归零（seg02 v1 教训）。
- **全局风格改动先 sample**：改主色/字体/加 filter，先选一个代表 beat 做 sample → preview 给用户看 → 确认 → 才 broadcast（MOTION_NOTES §7，19-tips 9 分钟 3 commit + 1 revert 教训）。
- **最新功能联网双源审核**：涉及 2025-Q4 后产品功能，跑 grok-search + Tavily 2 源交叉，commit body 标注（MOTION_NOTES §8）。
- **中文转写**：HARD_CONSTRAINTS §4 仍规定绕开 hyperframes 走 `whisper-cli`（历史 DTW preset 写死 `large-v3` vs whisper.cpp 期望 `large.v3` 的 bug，0.6.33 是否修未实测，保守仍绕开）。

---

## 输出口径

- 建好工程：给路径 + 下一步要的材料（文案/录屏/配音）+ 即将跑的 QA 顺序。
- preview gate：给 lint/validate/inspect 状态 + Studio URL（可带 `?comp=<beat-id>` 单 beat 调试）。
- render 后：给 `renders/final.mp4` 路径。
- 归档后：给 `videos/<日期>-<slug>/` 路径，并问是否抽模板。
