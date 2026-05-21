# 必须遵守的硬约束（单源）

> **这是仓库的单源真相**。CLAUDE.md / AGENTS.md / README.md / TEMPLATE_USAGE.md / 各模板 README / cyxj-new-video skill 都不再重复完整规则，全部指向本文件。
> 修改任何一条，**只改这一处**。

每条都来自实战翻车记录，不是理论建议。

---

## 1. GSAP querySelector 不能用 template literal

```js
// ❌ 会让 npx hyperframes lint 报 template_literal_selector error
gsap.from(`${root} .b1-card`, { ... });

// ✅ 永远硬编码 selector 字符串
gsap.from('[data-composition-id="beat-1-hook"] .b1-card', { ... });
```

**为什么**：lint 静态扫描，模板字符串里的变量它解析不出来，宁错杀也不放过。

---

## 2. 复制 beat html 时全局换 beat id

CSS class 和 GSAP selector 两处都引用了 beat id（如 `beat-3-terminal`）。复制了不换 id，新 beat 静默失效——动画不跑、不报错、preview 看上去就少一段。

```bash
# 进新 beat 文件，全局替换
sed -i '' 's/beat-3-terminal/beat-NEW-id/g' compositions/03-terminal.html
```

**为什么**：HyperFrames 用 `data-composition-id` 隔离命名空间，但你忘了改时 selector 拿不到节点，GSAP 静默 noop。

---

## 3. DaVinci 21 不能渲染含中文文字的手写 Lottie

含中文文字的手写 Lottie 在 DaVinci 21 渲染会乱码或丢字。**含文字必须走 hyperframes → ProRes 4444 alpha 路径**，由 hyperframes 的无头 Chromium 渲文字。

详见 [`lottie-davinci-experiment/`](lottie-davinci-experiment/)。手写 Lottie 仅适合纯图形装饰（光圈、icon、装饰线）。

---

## 4. 中文 Whisper transcribe 要绕开 hyperframes CLI

`npx hyperframes transcribe` 给 whisper-cli 传的 DTW preset 写死成 `large-v3`（破折号），但 whisper-cpp 期望 `large.v3`（点号）。中文长视频会直接 abort。

**正确做法**：直接用 `whisper-cli`，绕开 hyperframes CLI。

```bash
whisper-cli -m models/ggml-large-v3.bin -l zh -osrt -of out audio.wav
```

---

## 5. `npx hyperframes` 必须在工程目录里跑

仓库根**没有** `package.json`。CLI 读当前 cwd 的 `hyperframes.json` / `meta.json`，在仓库根跑会找不到。

```bash
cd 2026-MM-DD/<slug>/   # 必须先 cd 进工程
npx hyperframes lint
```

`/cyxj-new-video` skill 会自动 cd 到正确位置。

---

## 6. 不要 commit `hyperframes-student-kit/` 或 `hyperframes-launches/`

这两个目录是上游 git 仓库（Nate Herk / HeyGen 各自维护），整目录被 `.gitignore` 排除。

跨机器 clone 仓库后需要重新 `git clone` 拉这两个上游，让 `MOTION_PHILOSOPHY.md` 和 `.claude/skills/{gsap,hyperframes,...}` 等软链生效。

---

## 7. 大视频/音频不进 git

`.gitignore` 已排除：

```
*.mp4 *.mov *.mp3 *.wav *.m4a
录屏/
```

最终成片 `final.mp4` 要保留时，不进 git 仓库——放本地或上传 OSS / R2，commit 里只放链接。

---

## 8. 中文字体在无头 Chromium 渲染时偶发回退

Google Fonts CDN 偶尔超时，`Noto Sans SC` 加载失败会回退系统默认字体（视觉廉价）。

**修法**（任选其一）：
- 重渲一次（CDN 命中后正常）
- 把字体本地化到 `assets/fonts/`，CSS 里 `@font-face` 指本地 path
- 在 GSAP 动画起点前加 `await document.fonts.ready` 门

---

## 9. hyperframes bundler 会吃掉 sub-composition 的内层 wrapper

`<template>` 里 `<div id="X" data-composition-id="X">` 这个内层 wrapper 在 bundle 时**会被 strip**，content 直接 inline 进父级 `.scene-layer`。

**结果**：CSS / JS 里写 `#X .child` 永远 match 不到（那个元素不存在）。

```css
/* ❌ bundler strip 后没有 #beat-1-hook 元素 */
#beat-1-hook .b1-kicker { ... }

/* ✅ 父级 scene-layer 自己带 data-composition-id 属性 */
[data-composition-id="beat-1-hook"] .b1-kicker { ... }
```

```js
// ❌ 字符串选择器同理
tl.fromTo("#beat-1-hook .b1-kicker", ...)

// ✅ 注意外层切单引号避免和内层属性双引号冲突
tl.fromTo('[data-composition-id="beat-1-hook"] .b1-kicker', ...)
```

**为什么**：bundler 给 CSS 自动加 `[data-composition-id="..."]` scope 前缀；inline 时认这个属性，不认 `id`。
**lint 警告**：`composition_self_attribute_selector` 推荐用 `#X` 是误报（在多 beat 主合成里），480 个 warning 可忽略。
**首次踩坑**：2026-05-13 AI 生图工作流复盘视频 13 beat，新加 beat 2-13 后全部不渲染，逐个 inspect bundle 才看出 wrapper 被 strip。

---

## 10. 关闭 hyperframes preview ≠ 只 kill server，必须同时关浏览器 tab

`npx hyperframes preview` 开了两个独立东西：
- **node server**（监听 3002 端口，处理 API 和 bundle）
- **浏览器 tab**（localhost:3002，跑 React studio + 加载 bundle + 渲缩略图 + 抓帧 scrub cache）

只 `kill <node pid>` 把 server 关掉了，**浏览器 tab 还在内存里跑**：
- 13 个 GSAP timeline 仍 paused 持有所有 DOM/tween 引用
- Studio 的渲染管线仍在跑（scrub cache、frame thumbnail）
- 没有 server 它也会持续重试、不会自动释放

**实测翻车**：2026-05-13 一个 193.5s × 13 sub-composition 的工程，server 关了之后 Chrome renderer 进程一度涨到 **12.64 GB**（单进程！PID 77521）。

**正确关闭顺序**：
1. 浏览器 tab `Cmd+W` 先关（释放抓帧缓存 + JS 引用，几秒后内存归还）
2. 再 `kill <node pid>` 关 server
3. 顺序反过来也行，但**两步都要做**

**Claude / Codex 关闭 preview 的指令模板**：
> "kill 了 PID X 的 preview server。**请同时在浏览器里关掉 localhost:3002 那个 tab**——不然 renderer 进程会继续吃几 GB 内存。"

---

## 11. 8+ sub-composition 的大工程要预防 preview 内存膨胀

hyperframes preview studio 给**每个 sub-composition** 注入了 3 个 Proxy（window / document / gsap）+ 一套 `__hf*` 运行时 helper（约 25 个局部变量）+ tween method shim。**13 个 beat 就是 39 个 Proxy + ~325 个 `__hf` 变量**。

叠加 studio 的逐帧 thumbnail / scrub cache（193.5s × 30fps × 1920×1080 ≈ 5800 帧），renderer 进程能轻松吃几 GB。**composition 越多放大越狠**，比单大 composition + 长时长更费内存。

**预防**：
- 长时间挂着 preview tab（>30 min）时偶尔 `Cmd+R` 刷新一次清缓存
- 看完一段就 `Cmd+W` 关 tab，不要常驻
- 不要用 `onUpdate` 在每帧里搞重活：
  - ❌ `onUpdate() { document.getElementById("x").textContent = ... }`（30fps × 几秒 = 几十次 lookup）
  - ✅ `const el = document.getElementById("x"); tl.to({...}, { onUpdate() { el.textContent = ... } });`（外面 cache 引用）
- 不要在 `onUpdate` 里每帧 new closure：
  - ❌ `onUpdate() { const rng = mulberry32(seed); ... }`
  - ✅ 外面 `const rng = mulberry32(seed)`，`onUpdate` 里复用
- **超过 8 个 sub-composition 时**：渲染前先 stop preview，render 完再 preview 看（render 走另一条路，不走 studio scrub cache）

**首次踩坑**：2026-05-13 13 beat × 193.5s 工程触发 12.64 GB renderer 进程。

---

## 12. 视觉 = 语义扩展联想，不是字幕翻译

口播里的关键词不能**直接逐字翻成 HTML 元素**——要做**物体 / 动作 / 场景的 metaphor**，让视觉成为口播的"意象延伸"，而不是把字幕拆成名词卡片。

字幕已经把字面说了一遍，视觉再重复一次就是"PPT 化"——观众看完只记得字，记不住画面。语义扩展让画面承担"字幕没说出来的"那部分，记忆点才落在视觉上。

**坏例**（字幕翻译）：
- 口播"这些是我跑出来的" → 3 张占位卡 + 抽象色块"假装作品"
- 口播"工作流" → 3 个工具 logo 横排
- 口播"零容忍" → 红字 + 叉号

**好例**（语义扩展）：
- 口播"跑出来的" → 真实成品图按"越来越好看"梯度排列（视觉本身承载下一句"一个比一个好看"的递进）
- 口播"工作流" → 工具拟人化"接力""拆解"动作
- 口播"零容忍" → 字本身被 scramble 撕碎 + lime 横划

**操作规程**：

1. 写 beat html 前，PLAN 里先填一张 **metaphor 表**：

   | 口播关键词 | 字面理解 | 语义扩展（要做的） |
   |---|---|---|
   | "跑出来的" | 产物 | 真实成品图，从粗糙→精致排列 |
   | "拆解" | 分开 | 工具图标拟人化分裂动作 |
   | "工作流" | 流程 | 工具间接力 / 配合的动作语言 |

2. 每个口播**关键瞬间**对应**一个视觉变化**（不是字幕静止 + 画面静止）
3. 空窗段（无口播）填**过程视觉**（粒子流动、组件聚合等），不留死帧

**无真实素材时的 fallback**：色块占位本身不违反此规则，但必须在 PLAN.md 标 TODO「最终发布前替换真图 / 真隐喻」，避免遗忘后发布。色块只是临时态，不是终态。

**为什么**：观众的记忆带宽有限，听到 + 看到同一个名词 = 只记住一遍；听到 A + 看到 A 的隐喻 = 记住整个场景。"反 PPT 化"的本质就是要画面比字幕多说一层。

**首次踩坑**：2026-05-13 AI 生图工作流复盘视频 b1 hook 句 3 "而这些是我通过工作流跑出来的"——3 张抽象 mock 卡（网格 / 黑白条 / 黑底亮角），口播说"作品"但视觉是几何线框，语义错位。当时无真实图源，权衡保留色块占位。

**关联 memory**：`feedback_visual_not_subtitle_translation`、`feedback_visual_sync_to_srt`、`feedback_products_need_real_logo`

---

## 13. `<img src="x.svg">` 标签里 SVG `fill="currentColor"` 不继承父元素 CSS color

```html
<!-- SVG 文件 anthropic.svg -->
<svg fill="currentColor" viewBox="0 0 24 24"><path .../></svg>
```

```css
/* ❌ 想让 logo 变橙：写 color: #d97757 没用 */
.my-logo { color: #d97757; }
```

**为什么**：`<img>` 把 SVG 当**图片资源**加载，不进入页面 DOM 上下文 → SVG 里的 `currentColor` 解析为 SVG 根的 default color（通常 black），不读父元素 CSS color。

**修法**（任选）：
- **A**（最简单）直接编辑 SVG 文件硬编码 `fill="#d97757"`
- **B** 改用 inline `<svg>` 标签内嵌（不用 `<img>`）→ currentColor 才生效
- **C** 用 CSS `mask-image: url(x.svg); background-color: #d97757`（保 SVG 中性）

**首次踩坑**：2026-05-21 karpathy-anthropic cold-open SEC A，Anthropic logo 用 `<img src="assets/logos/anthropic.svg">` + CSS `color: #d97757` 想让 logo 变橙，实际渲染深棕。最后 hardcode `fill="#d97757"` 修复。

---

## 14. GSAP `y/scale/rotation` 完全覆盖 CSS `transform: translate(-50%, -50%)`

```css
/* ❌ 标准居中写法 */
.centered { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); }
```

```js
// ❌ GSAP 入场 y: 0 把 CSS 的 translate 整个覆盖 → 元素不再居中
tl.fromTo('.centered', { y: 30, opacity: 0 }, { y: 0, opacity: 1 }, 2.0);
```

**为什么**：GSAP `y/x/scale/rotation` 写 inline style `transform: matrix(...)` → 完全替换 CSS 的 transform 属性（不是叠加）。

**修法**：每个动画 transform 的 GSAP tween 加 `xPercent: -50, yPercent: -50` 接管 CSS 的 `translate(-50%, -50%)`：

```js
tl.fromTo('.centered',
  { xPercent: -50, yPercent: -50, y: 30, opacity: 0 },
  { xPercent: -50, yPercent: -50, y: 0, opacity: 1 },
  2.0);
```

或更彻底（hyperframes skill "Layout Before Animation" 推荐）：CSS 不用 `transform: translate(-50%, -50%)`，改用 flex 容器居中（父级 `display: flex; align-items: center; justify-content: center`），子元素就不需要 transform 居中。

**首次踩坑**：2026-05-21 karpathy-anthropic cold-open 5 处元素（gossip / pivot / qbig / bars / ripple）入场后整体下沉超出 canvas，DOM rect 显示 `matrix(1,0,0,1,-550,0)` —— Y 偏移被覆盖。

---

## 15. CSS `font-family: var(--f-zh)` 让 hyperframes compiler 无法解析字体

```css
/* ❌ compiler 警告：No deterministic font mapping for var(--f-zh) */
.title { font-family: var(--f-zh); }
```

**为什么**：hyperframes compiler 静态扫描 CSS 字体名做 deterministic mapping（embed 字体保证 render 一致），看到 `var(...)` 解析不出来 → fallback 系统默认字体 → render 时视觉变廉价。

**修法**：直接写字体字符串，不用 CSS 变量：

```css
/* ✅ */
.title { font-family: "Noto Sans SC", "Inter", sans-serif; }
.body  { font-family: "Inter", system-ui, sans-serif; }
.mono  { font-family: "JetBrains Mono", "SF Mono", monospace; }
```

DNA token CSS 文件里定义 `--f-zh` 等变量**只供人读不供 compiler 读**——实际 CSS rule 必须硬编码字体字符串。

**首次踩坑**：2026-05-21 karpathy-anthropic cold-open 13 处用了 `var(--f-zh/en/mono)`，lint 显示一堆 "No deterministic font mapping" 警告，preview OK（浏览器认 var）但 render 会 fallback。

---

## 16. catalog blocks 是「demo 模板」（fork 改造用），不是参数化即插即用零件

```bash
npx hyperframes add data-chart           # 装下来是 458 行完整 demo
npx hyperframes add flash-through-white  # 装下来是 367 行黑底蓝字 demo
```

**误解**：以为装 `data-chart` 就能传参得到 "OpenAI vs Anthropic 双柱"。

**真相**：catalog 每个 block 都是**独立 sub-composition demo**（自带 demo 内容：标题/数字/布局/字体/配色）。要用它必须：
1. 装下来看 .html 实际实现
2. **Fork 改造**：改 selector / 数据 / 字体 / 配色 / 入场时序适配自己叙事
3. 不要 expect "传 props 就能用"

**纯 shader transitions**（whip-pan / flash 等）在 `@hyperframes/shader-transitions` npm package 里，不是 catalog blocks。catalog 的 flash-through-white 是**带蓝字 demo 的 4 秒视觉卡**，不是纯 shader。

**先看 .md 再决定 add**：`docs/hyperframes-official/catalog/blocks/<name>.md` 看 dimensions / duration / 风格描述，预判是否值得 fork。

**首次踩坑**：2026-05-21 我误以为 catalog blocks 是参数化零件，盲推荐"装 4 个 block 替换手撸 SEC C"，装完才发现都是 demo，全部要 fork，工作量 = 重写。

---

## 17. 米色底 `#F7F2EA` 上 Claude 橙 `#d97757` 文字色 WCAG contrast 不够

实测 hyperframes validate：
- `#d97757` 橙 on `#F7F2EA` 米 → contrast **2.4-2.7:1**（WCAG AA 大字需 3:1，正文需 4.5:1）
- `#5BA9FF` 学术蓝 on `#F7F2EA` 米 → contrast **1.58:1**（远低）

**修法**：米色底专用深色 variant（**只用于文字色**，halo / box-shadow / drop-shadow / SVG logo fill 仍用原品牌色）：
- `#d97757` 橙 → 文字色 `#B5563D` 深橙
- `#5BA9FF` 蓝 → 文字色 `#2A6FBD` 深蓝
- `rgba(43,38,34, 0.3-0.45)` 淡棕 → `#5A4F46` 深棕

**关键**：保留品牌色家族（不"发明新色"）—— `#B5563D` 是 `#d97757` 调暗 saturation 后的同系。

**为什么品牌橙在米色底 contrast 不够**：Claude 橙 luminance 跟米色 luminance 太接近（都偏暖中亮）。深底 `#0a1124` 上 `#d97757` contrast **8.2:1** 完全没问题。米色底是 DNA 2026-05-06 改的，token 设计未同步深色 variant。

**首次踩坑**：2026-05-21 karpathy-anthropic cold-open `hyperframes validate` 报 30 contrast warnings，全是米色底上的 Claude 橙 + 学术蓝文字。

---

## 18. Scene Transitions Non-Negotiable：SEC 末尾**禁止** exit 动画

来自 hyperframes skill：

> "**NEVER use exit animations** except on the final scene. ... NO `gsap.to()` that animates opacity to 0, y offscreen, scale to 0, or any other 'out' animation before a transition fires. **The transition IS the exit.** The outgoing scene's content MUST be fully visible at the moment the transition starts."

```js
// ❌ BANNED
tl.to('.sec-a', { opacity: 0, filter: 'blur(10px)', duration: 0.55 }, 5.0);  // SEC A 退场
// ... SEC B 入场

// ✅ 用 instant set hard cut（duration 0 不算 animated exit）
tl.set('.sec-a', { autoAlpha: 0 }, 6.0);  // SEC B 入场时点 instant hide SEC A
tl.to('.sec-b', { opacity: 1, duration: 0.3 }, 6.0);

// ✅ 更好：装 shader transition 接管退场
//   <div data-composition-src="compositions/flash-through-white-fork.html" data-start="5.5" data-duration="0.6" />
```

**唯一例外**：final scene（最后一段）可以 fade to black / fade out（结束帧）。

**首次踩坑**：2026-05-21 karpathy-anthropic cold-open 5 SEC 每段末尾都写了 `tl.to({opacity:0, filter:'blur(10px)'})` 退场，直接违反硬规则。

---

## 19. Commit / 不 commit 边界（单源）

**总原则**：每段 preview 通过即 commit；不 commit 等于明天的自己 / 新对话看不见。

### ✅ 必 commit

| 类别 | 路径 |
|---|---|
| 工程结构 | `<工程>/index.html` `meta.json` `hyperframes.json` `compositions/*.html` |
| 工程 brief | `<工程>/STYLE_BRIEF.md` `研究/` `文稿/` `PLAN.md` |
| 工程素材 | `<工程>/assets/**` 下 svg / png / jpg（< 2MB 单文件） |
| 用户提供原图 | `<工程>/图片用户收集/` `<工程>/参考图/` |
| skill 改动 | `skills/cyxj-*/SKILL.md` 及子文件 |
| 仓库级单源 | `docs/HARD_CONSTRAINTS.md` `docs/REFERENCE_INDEX.md` `docs/STYLE_BORROW_PLAYBOOK.md` |
| 配置 | `.gitignore` `CLAUDE.md` `AGENTS.md` `README.md`（各级） |

### ❌ 绝不 commit（已被 `.gitignore` 拦截）

| 类别 | 模式 |
|---|---|
| Debug 截图 | 仓库根 `/*.png /*.jpg` + `**/debug-shots/` |
| 渲染输出 | `**/renders/` `*.mp4 *.mov *.webm` |
| 音频源 | `*.wav *.mp3 *.m4a` |
| 上游子模块 | `hyperframes-student-kit/` `hyperframes-launches/` |
| 系统/缓存 | `.DS_Store` `node_modules/` `.hyperframes/` `.playwright-mcp/` |

### Commit 节奏（cyxj-new-video skill A7 引用本节）

- **一段 preview 通过 → 立即 commit**：`feat(videos): <slug> <段> v1 - 完整可 render`
- **收到反馈改完 → commit**：`iterate(videos): <slug> <段> v2 - <主要变化>`
- **遇到通用 bug fix → 单独 commit**：`fix(<scope>): <bug> - <修法>`（如 anthropic.svg fill 修 currentColor 不继承）
- **沉淀新硬约束 → 单独 commit**：`docs(constraints): N<n> <约束名> - <来源工程>`
- **不要等"整片做完"才 commit**——单段满意就提，方便回滚 + 新对话切换不丢工作

### Debug 截图禁止仓库根

- `preview` 后用 playwright 截图：**必须存** `<工程>/debug-shots/` 或 `/tmp/`
- 仓库根 `.gitignore` 已拦截 `/*.png /*.jpg /*.jpeg`，但路径写错的话仍可能落到根 → 截图前 `cd` 进工程目录或显式给 `filename: '<工程>/debug-shots/...'`

**首次踩坑**：2026-05-21 karpathy-anthropic cold-open 调试，playwright 截图默认存到 hyperframes 仓库根，留下 24 张 v1-v6 PNG 散落 → 整理工作区时才发现。

---

## 维护

新增/修改硬约束时：
1. 改本文件
2. 不需要同步任何其他文件——它们都指向本文件
3. 如果是给 cyxj-new-video skill 用，确认 SKILL.md 末尾还指向本文件

新增的判定标准：**至少有 1 次实战翻车记录**。理论上的"最佳实践"不算硬约束。
