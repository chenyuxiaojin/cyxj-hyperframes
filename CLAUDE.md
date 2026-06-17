# CLAUDE.md

XCYJ（陈与小金）的 YouTube 教程视频生产工作台 —— 基于 HeyGen [HyperFrames](https://hyperframes.heygen.com)（HTML + GSAP → MP4）。

仓库整体说明、5 分钟上手、目录树、学习路径见 [`README.md`](README.md)。这份文件只放 AI 每次都要知道的硬规则。
进入的第一步是读本文件，然后读官方 HyperFrames skill（从 `hyperframes` 入口 skill 起）和 `制作规范/` 生产规则层。官方 skill 由 `npx skills` 从 GitHub 管理（见下）。

## 2026-06-17 三层结构（GitHub 直连官方 skill）

当前管线入口（2026-06-17 弃用 Codex `official/` 镜像，改 GitHub 直连，对齐 Remotion 做法；同期把原 `cyxj/` 包裹层拆散到顶层中文桶，`cyxj/` 已不存在）：

1. **官方 skill 层** —— 16 个官方 HyperFrames skill，由 `npx skills add/update heygen-com/hyperframes` 从 GitHub 装：真身落 `.agents/skills/<name>/`，`.claude/skills/<name>` 软链过去，**均不进 git**（`skills-lock.json` 是版本真源，进 git）。不手改、不 vendoring。
2. **自有资产分桶**（XCYJ user-owned，提交到用户仓库 `cyxj-hyperframes`）：`制作规范/`（生产规则——docs / notes / rules / overlay skill / README）+ `组件库/`（可复用组件单一真源）+ `参考/`（inspirations / catalog / 上游范例 / 历史作品）+ `资源库/`（logos / 录屏素材）。
3. `视频项目/` —— HyperFrames 出片项目层；移动项目时必须整体移动目录并保留嵌套 `.git`。

在 `hyperframes/` 工作时只使用 HyperFrames / HTML / GSAP（及官方支持的其他动画适配器），不写 React/Remotion 实现代码。官方 skill 用 `npx skills update` 升级，**不要手改 `.agents/skills/` 里的真身**。

## 关键路径速查

```
视频项目/已发布/<日期>-<slug>/   已发布视频源工程（10 条，原 videos/）
视频项目/在制/<工程>/            当前在做的工作区（原根目录 2026-MM-DD/ 日期目录）
组件库/                      可复用组件【单一真源】（cc-window / orbit-dots / pulse-bars / shake-error / spec-fill / text-effects / xcyj-tokens + COMPONENTS.json + README.md）
                             当前无内置起步模板，起新片从空白起步（/new-video → npx hyperframes init --example blank）
参考/inspirations/           5 个转译参考（原 templates/inspirations）
参考/catalog.json            官方 catalog 索引（原 templates/catalog.json）
参考/hyperframes-launches/   HeyGen 上游参考仓（含 SCRIPT.md / STORYBOARD.md / 完整 compositions/，只读，不推送）
参考/我的作品/                历史作品快照参考池（原 参考库/）
资源库/录屏/                  原始录屏素材（gitignored 本地素材）
资源库/logos/                34 个 AI 厂商 / 工具 SVG（产品引用用真 logo，不准 emoji / 字母）

制作规范/skills/cyxj-hyperframes-overlay/   active overlay skill 真身（.agents/.claude/skills 同名软链指向这里）
制作规范/docs/HARD_CONSTRAINTS.md     硬约束单源（30 主条目 + 子条目，§1–§19 实战坑 / §20–§30 官方底线）
制作规范/docs/REFERENCE_INDEX.md      上游参考工程 + catalog 零件 + skill 索引
制作规范/docs/ops.md                  CLI 版本 / 维护脚本 / 软链架构

制作规范/rules/shared/motion-vocabulary.md  动画词汇表（80 术语中英对照 + GSAP/Remotion 映射 + 视频适用性，沟通动效的共同语言）
制作规范/notes/TEMPLATE_USAGE.md            模板复用 checklist（README 5 分钟上手的详细版）
```

`参考/` 是参考资产层：`inspirations/`（转译参考）+ `catalog.json`（官方 catalog 索引）+ `hyperframes-launches/`（HeyGen 上游仓）+ `我的作品/`（历史作品快照），跟 `资源库/`（logos / 录屏素材）并列分工。Remotion 专属参考已迁至 `../Remotion/参考/`，本仓不再混放。

## skill 触发词

active 入口是 `cyxj-hyperframes-overlay`（真身在 `制作规范/skills/cyxj-hyperframes-overlay/`）：先读官方 HyperFrames skill（入口 `hyperframes` → 按路由到 `hyperframes-core` / `hyperframes-animation` / `hyperframes-cli` / `hyperframes-registry` 等），再读 `制作规范/` 生产规则层。（原 legacy skill `cyxj-new-video` / `cyxj-add-block` 已删除。）

- 「新视频 / 做视频 / 片头 / 做完了 / 归档 / 抽成模板」→ active entry: `cyxj-hyperframes-overlay`
- 「加个零件 / 加个转场 / 加 macos 通知 / Logo 落版」→ active entry: `cyxj-hyperframes-overlay`
- 插 AI 厂商 / 工具 logo：先查 `资源库/logos/`，命名规则全小写无分隔符（`claudecode.svg`），文档见 [`资源库/logos/LOGOS.md`](资源库/logos/LOGOS.md)。`claude-code-logo.png` 像素拟人头像不在本库，由各视频工程自存

## GSAP skill 强制约定（写动画前必读）

工程里 `index.html` 通过 CDN 引入 `gsap@3.14.2`。**改 `compositions/*.html` 里任何 GSAP 代码前，先 invoke 对应 `gsap-skills`，不要凭记忆写 API**：

| 任务 | 必 invoke 的 skill |
|---|---|
| 基础 tween / easing / stagger / matchMedia | `gsap-skills:gsap-core` |
| 多段时序串联（镜头切换、阶段过渡、beat 内时间轴） | `gsap-skills:gsap-timeline` |
| 文字逐字（SplitText）/ SVG 描边（DrawSVG）/ Flip 转场 / MorphSVG | `gsap-skills:gsap-plugins` |
| ScrollTrigger / pin / scrub | `gsap-skills:gsap-scrolltrigger` |
| 动画卡 / preview 掉帧 / render 慢 | `gsap-skills:gsap-performance` |

GSAP 3.13+ 全部插件免费（SplitText / DrawSVG / MorphSVG / ScrollSmoother 可放心用），不必担心付费授权。

> 遇到动画任务自动 invoke，不需用户每次提醒。

> HyperFrames 原生动画总入口是官方 `hyperframes-animation` skill（GSAP 默认 + Lottie / Three.js / Anime.js / CSS / WAAPI / TypeGPU 七套适配器、原子动效规则、镜头蓝图、seek-safe 时序）。`gsap-skills:*` 是更细的 GSAP-only API 参考，二者并存：查 GSAP 具体 API → `gsap-skills`；查 HyperFrames 时序 / seek-safe / 适配器选型 → `hyperframes-animation`。

## 硬约束精选 10 条（完整 30 主条目见 [`制作规范/docs/HARD_CONSTRAINTS.md`](制作规范/docs/HARD_CONSTRAINTS.md)）

> 完整 30 主条目分两层：**§1–§19 本仓库实战坑** + **§20–§30 官方非可商量底线**（2026-06-17 同步 hyperframes@0.6.109），另含 §15.补 / §26.b 等子条目。
> 下面 10 条是命中频率最高的速查，**改 compositions/*.html 前必读完整版全文**。

1. **不准** 在 GSAP selector 里用 template literal —— 永远硬编码 `'[data-composition-id="X"] .child'`
2. **不准** 复制 beat html 后忘记全局换 beat id（CSS class + GSAP selector 两处）
3. **不准** 在 sub-composition CSS/JS 里用 `#X .child` —— bundler 会 strip 内层 wrapper，必须用 `[data-composition-id="X"]`
4. **不准** 在 DaVinci 21 里渲含中文文字的手写 Lottie —— 含文字走 hyperframes ProRes 4444 alpha
5. **不准** 用 `npx hyperframes transcribe` 跑中文音频 —— 直接用 `whisper-cli`
6. **不准** 在仓库根跑 `npx hyperframes` —— 必须先 `cd` 进工程目录
7. **不准** 把视觉做成字幕逐字翻译 —— 写 beat 前 PLAN 里先填 metaphor 表
8. **不准** 只 kill preview server 不关浏览器 tab —— renderer 进程能涨到 12 GB
9. **不准** 在 `onUpdate` 里每帧 `document.getElementById` 或 new closure —— 8+ sub-composition 工程会内存爆
10. **不准**（协作）主动 render —— preview 反复打磨完，用户明确说「render 吧」才跑（memory `feedback_workflow_polish_in_browser`）

## Claude Code 自动化（仅 Claude 侧，Codex 不读）

仓库装了两个 hook + 一个 subagent，把上面部分硬约束从「靠自觉」变成「写代码当场拦」。**配置在 `.claude/settings.json`，脚本在 `scripts/hf-{lint,guard-upstream}.sh`。**

- **写完 `compositions/*.html` 收到 `⚠️ HARD_CONSTRAINTS 机械自检命中` 是预期行为，不是报错** —— PostToolUse 钩子 grep 了 §1/§3/§11/§20/§21/§22/§24/§25/§29 九类机械可检测违规，命中即注入提醒。对照原文确认即可，极少数是合法例外。clean 时静默。
- 改 `参考/hyperframes-launches/` 会弹确认（PreToolUse，§6 上游只读；guard 按目录名匹配，搬动后仍生效）。
- render 前要查 grep 咬不住的判断题（§7/§12 语义、§17 对比度、§18 禁 exit）→ 用 `composition-reviewer` subagent（只读审查，不改文件）。

> 改 `scripts/hf-*.sh` 或 `.claude/settings.json` 即改这套自检；个人权限在 gitignored 的 `settings.local.json`。

## 常用命令（工程目录里跑）

```bash
npx hyperframes lint                                # 验证 meta.json + html 结构
npx hyperframes preview                             # http://localhost:3002 浏览器打磨
npx hyperframes render --quality standard \
  --format mp4 --output renders/final.mp4           # 满意了才跑；中文字体回退见 制作规范/docs/HARD_CONSTRAINTS.md §8
```

仓库根维护脚本（refresh-catalog / refresh-docs / lint-projects）+ CLI 版本管理 / 软链架构 / 维护节奏见 [`制作规范/docs/ops.md`](制作规范/docs/ops.md)。

## Claude / Codex 边界

| AI | 读 | skill 入口 |
|---|---|---|
| Claude Code | `CLAUDE.md` | `.claude/skills/` |
| Codex | `AGENTS.md` | `.agents/skills/` |

官方 skill 真身在 `.agents/skills/`（npx 装，Codex / 通用 agent 直接读），`.claude/skills/` 软链过去给 Claude Code；XCYJ overlay 软链到 `制作规范/skills/cyxj-hyperframes-overlay/`（进 git）。版本真源 `skills-lock.json`，换机器跑 `npx skills experimental_install` 还原。正在做的视频工程在 `视频项目/在制/<工程>/`，做基础设施修复时先排除。

## 组件晋升规则（作品私有 → 公共层）

做完一条视频后，判断工程里的零件要不要提升进公共层 **`组件库/`（单一真源）**，并登记进 [`组件库/COMPONENTS.json`](组件库/COMPONENTS.json) 注册表（= Remotion 镜头库 `sceneMap.ts` 的 HyperFrames 版）：

1. **被 ≥2 个作品复制或引用** → 晋升候选
2. **体现品牌 DNA**（logo 用法 / 字体 / 配色 / 字幕样式 / 运镜模式）→ 晋升候选
3. **仅单作品使用、耦合具体文案或素材** → 留在作品内，不晋升
4. 拿不准 → 问用户，不擅自晋升

晋升时的硬要求（完整仪式见 [`组件库/README.md`](组件库/README.md)）：
- 放 `组件库/<id>/`（`<id>.html` + `<id>.css` + `README.md`），并在 `COMPONENTS.json` 加一条 + README 索引表加一行（= Remotion「在 sceneMap 登记一行」同款仪式）。
- **单一真源**：只进 `组件库/`，不要 dual-write。
- 若该零件要走 `data-composition-src` 子合成引用，HTML 必须用 `<template id="<id>-template">` 包裹（裸片段会 compile 崩，见 HARD_CONSTRAINTS §38 / grain-overlay 2026-06-11）；纯 copy-paste 片段不强制。
- 官方 catalog 零件登记在 `参考/catalog.json`（另一套，勿混）。

## 中文环境

- 仓库本身在 `~/项目/视频制作台/hyperframes/`，命令注意 UTF-8
- 模板默认字体栈：`"Noto Sans SC", "Inter", sans-serif`，代码用 `JetBrains Mono`

## 方法论笔记（已入公开仓，供训练营学员 clone 复用）

> 注：这两份原标注为「gitignored 私有」，2026-06-09 起改为有意公开——核心目的是让学员能查看、复用小陈的方法论。AI 可正常引用其内容。

- `制作规范/notes/MY_VISUAL_DNA.md` —— 个人美学宪法（颜色 / 字体 / 节奏）
- `制作规范/notes/MY_MOTION_NOTES.md` —— 19 招实战沉淀
