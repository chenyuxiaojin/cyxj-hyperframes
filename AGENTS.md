# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## 这是什么仓库

XCYJ（陈与小金）的 YouTube 教程视频**生产工作台**——基于 HeyGen 的 [HyperFrames](https://hyperframes.heygen.com)（HTML + GSAP 渲染管线）做技术教程的片头、转场、整片演示。进入的第一步是读本文件，然后先读官方 HyperFrames skill（从 `hyperframes` 入口 skill 起，按路由到 hyperframes-core / hyperframes-animation / hyperframes-cli / hyperframes-registry 等），再读 `cyxj/`；官方 skill 由 `npx skills` 管理（GitHub 直连），不手改。

**仓库结构按开源项目规范整理（2026-05-14 重构后）**——顶层扁平，对 GitHub 上想复用方法的人友好。AI 自动读取是次要目标。

## 2026-06-17 三层结构（GitHub 直连官方 skill）

当前迁移后的管线入口：

1. **官方 skill 层** —— 用 `npx skills add heygen-com/hyperframes` 从 GitHub 直装的 16 个官方 skill：真身落 `.agents/skills/<name>/`（gitignore，不进 git），`skills-lock.json` 是版本真源（进 git）；不手改。
2. `cyxj/` —— XCYJ user-owned layer，包含资产、模板、视觉 DNA、生产经验、overlay skills 和脚本；这层应该提交到用户仓库。
3. `视频项目/` —— HyperFrames 出片项目层；移动项目时必须整体移动目录并保留嵌套 `.git`。

在 `hyperframes/` 工作时只使用 HyperFrames / HTML / GSAP，不写 React/Remotion 实现代码。官方 skill 真身在 `.agents/skills/`（`npx skills` 装），`.claude/skills/` 软链过去；两边都 gitignore，由 `npx skills` 管理（升级用 `npx skills update`，换机用 `npx skills experimental_install` 按 `skills-lock.json` 还原）。

## 顶层架构（2026-06-10 重组后）

```
.
├── README.md / CLAUDE.md / AGENTS.md     # 入口
├── LICENSE
├── .agents/skills/                        # 官方 HyperFrames skill 真身（npx skills 从 GitHub 装，gitignore）
├── cyxj/                                  # XCYJ user-owned layer（资产/规则/模板/skill/脚本）
├── 视频项目/
│   ├── 已发布/                            # 10 条已发布视频源工程，每条带 README（原 videos/）
│   └── 在制/                              # 当前视频工作区（gitignored；原根目录 2026-MM-DD/）
├── templates/                            # 当前无内置起步模板，起新片从空白起步（npx hyperframes init --example blank）
│   ├── components/                        # 可复用组件（cc-window 等）
│   ├── inspirations/                      # 5 大 React 库的 vanilla 转译版
│   └── catalog.json                       # 模板零件清单（机器可读）
├── docs/
│   └── hyperframes-official/              # 78 页官方文档本地镜像
├── assets/
│   └── logos/                             # 33 个常用 AI 厂商 / 工具 SVG logo
├── 素材/
│   └── 录屏/                              # 原始录屏素材（gitignored）
├── 参考/                                  # 参考资产层（gitignored）
│   ├── 我的作品/                          # 历史作品快照（原 参考库/）
│   └── hyperframes-launches/              # HeyGen 上游参考仓（嵌套 git，只读）
└── scripts/                               # 维护脚本（refresh-catalog 等）
```

**关键架构区分**：
- `.agents/skills/` —— 官方 HyperFrames skill 真身（`npx skills` 装，gitignore）+ XCYJ overlay；`.claude/skills/` 软链过去
- `cyxj/skills/` —— XCYJ overlay skill 真源
- `cyxj/skills/cyxj-new-video`、`cyxj-add-block` —— 仅作历史流程参考
- `视频项目/已发布/` —— 10 条已发布视频的源工程（git 跟踪源码，mp4 gitignored）
- `templates/` —— 模板 + 组件（**只读参考**，不在这里编辑活工程）
- `视频项目/在制/<工程>/` —— 当前在做的工作区（gitignored）

## 标准工作流（一句话开始）

active 入口是 `cyxj-hyperframes-overlay`：先读官方 HyperFrames skill（从 `hyperframes` 入口 skill 起，按路由展开），再读 `cyxj/` 用户层；`cyxj/skills/cyxj-new-video`、`cyxj-add-block` 仅作历史流程参考。

**做新视频**：在仓库根开 Codex，说一句：

> "做个新视频，主题《XXX》，纯演示无录屏"

Legacy workflow 曾经会自动执行下列流程；2026-06-06 之后仅作为流程参考，active entry 以 `cyxj-hyperframes-overlay` 为准：
1. 问形态/主题/时长
2. 读 `cyxj/docs/REFERENCE_INDEX.md` 推荐参考工程
3. 复制模板到 `视频项目/在制/<slug>/`
4. 改 `meta.json` 和 `index.html`
5. 等你提供文案 → 改 beats → lint → preview → render
6. 你说"做完了" → 自动归档到 `视频项目/已发布/<日期>-<slug>/`
7. 主动问"要抽成模板吗？" → 抽 / 不抽

**装零件**：在某个工程目录下说 "加个转场" / "加 macos 通知" / "Logo 落版"，active entry 仍是 `cyxj-hyperframes-overlay`；legacy workflow 只作为历史参考。

## Claude / Codex 边界

| 使用方 | 读哪个指令 | skill 入口 | 软链关系 |
|---|---|---|---|
| Claude Code | `CLAUDE.md` | `.claude/skills/` | `.claude/skills` 软链 → `.agents/skills`（npx 装的官方 skill）；XCYJ overlay → `cyxj/skills/` |
| Codex | `AGENTS.md` | `.agents/skills/` | 官方 skill 真身在 `.agents/skills`（npx 装）；XCYJ overlay → `cyxj/skills/` |

**单一源**：active XCYJ overlay skill 源文件在 `cyxj/skills/cyxj-hyperframes-overlay/`。`cyxj/skills/cyxj-new-video`、`cyxj-add-block` 仅作历史流程参考。

**协作规则**：
- 正在制作的视频工程放在 `视频项目/在制/<工程>/`，另一个 AI 做审查或基础设施修复时必须先排除这个施工目录
- 公共层（`templates/` / `skills/` / `docs/` / `assets/` / `.gitignore`）改动前先跑 `npx hyperframes lint`

## 必须遵守的硬约束

详见 [`cyxj/docs/HARD_CONSTRAINTS.md`](cyxj/docs/HARD_CONSTRAINTS.md)。简表：

1. GSAP querySelector 不能用 template literal
2. 复制 beat html 时全局换 beat id（CSS class + GSAP selector 两处）
3. DaVinci 21 不能渲染含中文文字的手写 Lottie（含文字走 ProRes 4444 alpha）
4. 中文 Whisper transcribe 要绕开 hyperframes CLI（用 `whisper-cli`）
5. `npx hyperframes` 必须在工程目录里跑（不在仓库根）
6. 不要 commit `参考/hyperframes-launches/`（上游只读，整目录 gitignored）
7. 大视频/音频不进 git（`.mp4 .mov .mp3 .wav .m4a` + `录屏/`）
8. 中文字体在无头 Chromium 渲染时偶发回退（Google Fonts CDN 超时）

## hyperframes CLI 本体在哪

**不在本仓库，在 npx 全局缓存里**：

```
~/.npm/_npx/<hash>/node_modules/hyperframes/   (~109M，含 Playwright/ffmpeg-static)
```

- 看版本：`npx hyperframes --version`
- 强制升级：`npx hyperframes@latest --version`
- 完全清掉重来：`rm -rf ~/.npm/_npx`

## 软链架构说明

| 软链 | 指向 | 是否进 git |
|---|---|---|
| `.agents/skills/<16 官方 skill>` | npx 装的真身（GitHub `heygen-com/hyperframes`） | gitignored |
| `.claude/skills/<16 官方 skill>` | 软链 → `../../.agents/skills/<name>` | gitignored |
| `.claude/skills/cyxj-hyperframes-overlay` | `cyxj/skills/cyxj-hyperframes-overlay` | ✅ 进 git |
| `.agents/skills/cyxj-hyperframes-overlay` | `cyxj/skills/cyxj-hyperframes-overlay` | ✅ 进 git |

跨机器 clone 仓库后，官方 skill 用 `npx skills add heygen-com/hyperframes`（或 `npx skills experimental_install` 按 `skills-lock.json` 还原）装到 `.agents/skills/`；`参考/hyperframes-launches/` 作为独立上游参考仓保留（gitignored，换机需单独 clone）。

## 中文环境注意

- 路径含中文（仓库本身在 `~/项目/视频制作台/hyperframes/`），所有命令注意 UTF-8
- 模板默认字体栈：`"Noto Sans SC", "Inter", sans-serif`（中文 hero 字偏 Noto）；`JetBrains Mono` 用于终端/代码片段
- headless Chromium 渲染时 Google Fonts CDN 偶尔超时会回退系统字体——重渲一次或本地化字体

## 维护节奏

| 周期 | 命令 |
|---|---|
| 每月 | `bash scripts/refresh-catalog.sh` 刷新 `templates/catalog.json` |
| 每 1-2 月 | `bash scripts/refresh-docs.sh` 刷新 `docs/hyperframes-official/` 官方文档镜像 |
| 每 1-2 月 | `git -C 参考/hyperframes-launches pull` |
| 每条新视频做完 | 按 `cyxj-hyperframes-overlay` 的项目层规则归档；legacy workflow 只作为历史参考 |

## 仓库速查

| 路径 | 内容 |
|---|---|
| `cyxj/docs/REFERENCE_INDEX.md` | ⭐ 上游参考工程入口：18 工程 + 46 catalog 零件 + 16 官方 skill 索引 |
| `assets/logos/` | ⭐ 33 个 AI 厂商 / 工具 SVG logo |
| `templates/` | 当前无内置起步模板，起新片从空白起步（`npx hyperframes init --example blank`） |
| `templates/components/cc-window/` | Claude Code 终端 UI 零件（19-tips 沉淀） |
| `templates/inspirations/` | 5 大 React 组件库的 vanilla 转译版（晋级前的灵感区） |
| `视频项目/已发布/2026-05-04-claude-19-tips/` | 最大工程参考：28 composition / 7.5 分钟 |
| `视频项目/已发布/2026-05-02-codex-claude-intro/` | 含 SCRIPT.md 范本 |
| `视频项目/已发布/2026-05-09-mywebsite-teaser/` | DESIGN-first 工作流范本 |
| `cyxj/notes/TEMPLATE_USAGE.md` | 模板复用 checklist |
