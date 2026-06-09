# CLAUDE.md

XCYJ（陈与小金）的 YouTube 教程视频生产工作台 —— 基于 HeyGen [HyperFrames](https://hyperframes.heygen.com)（HTML + GSAP → MP4）。

仓库整体说明、5 分钟上手、目录树、学习路径见 [`README.md`](README.md)。这份文件只放 AI 每次都要知道的硬规则。
进入的第一步是读本文件，然后读 `official/` 和 `cyxj/`；不要用 `npx skills update` 管理 `official/`。

## 2026-06-06 三层结构

当前迁移后的管线入口：

1. `official/` —— Codex `@hyperframes` plugin cache 镜像，只同步、不手改、不提交。
2. `cyxj/` —— XCYJ user-owned layer，包含资产、模板、视觉 DNA、生产经验、overlay skills 和同步脚本；这层应该提交到用户仓库。
3. `视频项目/` —— HyperFrames 出片项目层；移动项目时必须整体移动目录并保留嵌套 `.git`。

在 `hyperframes/` 工作时只使用 HyperFrames / HTML / GSAP，不写 React/Remotion 实现代码。`.agents/skills` 和 `.claude/skills` 的 active official skills 应镜像 `official/skills`；旧非 Codex plugin 的 active skills 必须保持 disabled，除非明确重新启用。

## 关键路径速查

```
videos/<日期>-<slug>/        已发布视频源工程（10 条）
2026-MM-DD/<slug>/           当前在做的工作区（可并存多个日期）
templates/                   tutorial-8beat 真模板 + components + inspirations + catalog.json（只读参考，活工程在 2026-MM-DD/）
hyperframes-launches/        发布类视频参考模板（含 SCRIPT.md / STORYBOARD.md / 完整 compositions/，可复用）
hyperframes-student-kit/     Nate Herk 上游 student kit（视觉灵感、参考工程、基础 skill 来源）
assets/logos/                33 个 AI 厂商 / 工具 SVG（产品引用用真 logo，不准 emoji / 字母）
归档/                         早期废弃探索（保留参考，不在这里做活）

cyxj/skills/cyxj-{new-video,add-block}/   skill 真源（legacy active links 已停用到 skills-disabled-*，active 入口是 cyxj-hyperframes-overlay）
cyxj/docs/HARD_CONSTRAINTS.md     硬约束单源（30 主条目 + 子条目，§1–§19 实战坑 / §20–§30 官方底线）
cyxj/docs/REFERENCE_INDEX.md      上游参考工程 + catalog 零件 + skill 索引
cyxj/docs/ops.md                  CLI 版本 / 维护脚本 / 软链架构

MOTION_PHILOSOPHY.md         10 大动效法则（软链到 hyperframes-student-kit/，每个新工程必读）
cyxj/notes/TEMPLATE_USAGE.md            模板复用 checklist（README 5 分钟上手的详细版）
```

`参考库/` 是作品快照参考池：`heygen-launches/`（HeyGen 官方作品）、`nate-demos/`（Nate Herk 作品）、`我的作品/`（自己历史作品快照），跟 `assets/`（工程引用的最终素材）并列分工。
`remotion-text-effects/` 是 Remotion（非 HyperFrames）管线，不要混做。

## skill 触发词

2026-06-06 之后，active 入口是 `cyxj-hyperframes-overlay`：先读 `official/` 官方规则，再读 `cyxj/` 用户层；legacy workflow active links 已停用，历史源文件暂保留。

- 「新视频 / 做视频 / 片头 / 做完了 / 归档 / 抽成模板」→ active entry: `cyxj-hyperframes-overlay`（legacy workflow 仅作历史流程参考）
- 「加个零件 / 加个转场 / 加 macos 通知 / Logo 落版」→ active entry: `cyxj-hyperframes-overlay`（legacy workflow 仅作历史流程参考）
- 插 AI 厂商 / 工具 logo：先查 `assets/logos/`，命名规则全小写无分隔符（`claudecode.svg`），文档见 [`assets/logos/LOGOS.md`](assets/logos/LOGOS.md)。`claude-code-logo.png` 像素拟人头像不在本库，由各视频工程自存

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

## 硬约束精选 10 条（完整 30 主条目见 [`cyxj/docs/HARD_CONSTRAINTS.md`](cyxj/docs/HARD_CONSTRAINTS.md)）

> 完整 30 主条目分两层：**§1–§19 本仓库实战坑** + **§20–§30 官方非可商量底线**（2026-05-22 同步 hyperframes@0.6.33），另含 §15.补 / §26.b 等子条目。
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
- 改 `hyperframes-student-kit/` 或 `hyperframes-launches/` 会弹确认（PreToolUse，§6 上游只读）。
- render 前要查 grep 咬不住的判断题（§7/§12 语义、§17 对比度、§18 禁 exit）→ 用 `composition-reviewer` subagent（只读审查，不改文件）。

> 改 `scripts/hf-*.sh` 或 `.claude/settings.json` 即改这套自检；个人权限在 gitignored 的 `settings.local.json`。

## 常用命令（工程目录里跑）

```bash
npx hyperframes lint                                # 验证 meta.json + html 结构
npx hyperframes preview                             # http://localhost:3002 浏览器打磨
npx hyperframes render --quality standard \
  --format mp4 --output renders/final.mp4           # 满意了才跑；中文字体回退见 cyxj/docs/HARD_CONSTRAINTS.md §8
```

仓库根维护脚本（refresh-catalog / refresh-docs / lint-projects）+ CLI 版本管理 / 软链架构 / 维护节奏见 [`cyxj/docs/ops.md`](cyxj/docs/ops.md)。

## Claude / Codex 边界

| AI | 读 | skill 入口 |
|---|---|---|
| Claude Code | `CLAUDE.md` | `.claude/skills/` |
| Codex | `AGENTS.md` | `.agents/skills/` |

两边 active official skills 都软链到 `official/skills/`，XCYJ overlay 软链到 `cyxj/skills/cyxj-hyperframes-overlay/`。Legacy workflow sources under `skills/` 暂保留，但 active links 已停用到 `skills-disabled-*`。正在做的视频工程在 `2026-MM-DD/<slug>/`，做基础设施修复时先排除。

## 中文环境

- 仓库本身在 `~/项目/视频制作台/hyperframes/`，命令注意 UTF-8
- 模板默认字体栈：`"Noto Sans SC", "Inter", sans-serif`，代码用 `JetBrains Mono`

## 个人笔记（gitignored，AI 可读，不要在公开输出引用具体内容）

- `cyxj/notes/MY_VISUAL_DNA.md` —— 个人美学宪法（颜色 / 字体 / 节奏）
- `cyxj/notes/MY_MOTION_NOTES.md` —— 19 招实战沉淀
