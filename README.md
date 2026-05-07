# XCYJ HyperFrames Templates

陈与小金（XCYJ）的 YouTube 教程视频模板库 —— 用 [HyperFrames](https://hyperframes.heygen.com)（HTML + GSAP 渲染管线）做技术教程的片头、转场、整片演示。

> **状态**：私有仓库，整理中。计划在后续视频发布时切换为公开仓库，让观众可以直接复用。

---

## 模板

当前**只有一个**从 0 设计的真模板。其他形态请从 0 写工程（手抄 meta.json + index.html + compositions/*.html，参考 `docs/hyperframes-official/getting-started/quickstart.md` 的最小骨架）。

| 模板 | 适合的视频类型 | 拓扑 | 输出 |
|---|---|---|---|
| [`templates/tutorial-8beat`](templates/tutorial-8beat) | 5-10min 教程的片头 / 中段过渡 / 结构化讲解 | 8 beat 串联（hook→pain→punchline→concept→flow→outro）| 整片 MP4 |

**选哪个**：
- 教程类、需要"hook + 痛点 + 解决方案 + 流程"完整结构 → `tutorial-8beat`
- 主播口播 + overlay / 单段演示 / 概念片 / 品牌片 → 从 0 写（参考 `参考库/历史模板/` 里的旧形态档案对照拓扑，但**不要**直接 cp 起步——那 3 个目录是早期工程 rename 而成的伪模板）
- 一个视频里多种段落 → 每段单独建工作区分别 render，达芬奇里串联

详细复用指南见 [`TEMPLATE_USAGE.md`](TEMPLATE_USAGE.md)。

> ⚠️ **2026-05-07 模板状态**：原 `templates/host-overlay/`、`templates/host-overlay-alpha/`、`templates/demo-fullscreen/` 已移到 `参考库/历史模板/`（伪模板，不要 cp 起步）。详见 [`参考库/历史模板/README.md`](参考库/历史模板/README.md)。

---

## 目录结构

```
.
├── README.md                  ← 你在看的这个
├── TEMPLATE_USAGE.md          ← 复用 checklist（下次做新视频翻这个）
├── AGENTS.md                  ← Codex 工作边界
├── CLAUDE.md                  ← Claude Code 工作边界
├── .agents/skills/            ← Codex wrapper skills
├── .claude/skills/            ← Claude Code skills
├── templates/                 ← 真模板 + 组件零件（git 跟踪）
│   ├── tutorial-8beat/        ← 唯一真模板：教程结构化片头/过渡（8 beat）
│   └── components/            ← 可复用零件（cc-window 等）
├── examples/                  ← 已经做过的视频的脚本/文案
│   └── codex-intro/
│       └── script.md          ← Codex × Claude Code 教程片头文案
├── docs/                      ← 文档与实验记录
│   ├── lottie-davinci-experiment/  ← DaVinci 21 Lottie 兼容性实验
│   ├── round-1-next-steps.md  ← 第一轮工作历史归档
│   └── round-1-progress.md
├── 参考库/                     ← 参考工程、catalog、我的作品
├── 2026-MM-DD/                ← 当前视频工作区
├── hyperframes-launches/      ← HeyGen 官方参考工程（git ignored）
├── hyperframes-student-kit/   ← Nate Herk 学习套件（git ignored）
└── 录屏/                       ← 个人录屏素材（git ignored，不会推 GitHub）
```

`hyperframes-launches/` 和 `hyperframes-student-kit/` 是上游 git 仓库，本仓库**不重复跟踪**。它们只作为参考库/上游 skill 的来源；新视频工程不要放回这两个目录。

Claude Code 看 `CLAUDE.md` 和 `.claude/skills/`；Codex 看 `AGENTS.md` 和 `.agents/skills/`。两个 AI 共用 `templates/`、`参考库/`、`2026-MM-DD/`，但正在制作的 `2026-MM-DD/<slug>/` 视为施工区，另一个 AI 做审查/修基础设施时应先排除它。

---

## 快速开始

### 用模板做新视频（30 秒了解）

```bash
# 1. 在仓库根复制 tutorial-8beat 模板成日期工作区
DATE=$(date +%Y-%m-%d)
mkdir -p "$DATE"
cp -R templates/tutorial-8beat "$DATE/my-new-intro"

# 2. 改 meta.json 的 id（xcyj-tutorial-8beat-PLACEHOLDER → xcyj-<slug>）
#    改文案 / 时间码 / beat 内容（看 TEMPLATE_USAGE.md 的 checklist）

# 3. 渲染
cd "$DATE/my-new-intro"
npx hyperframes lint
npx hyperframes preview              # http://localhost:3002 验收
npx hyperframes render --quality standard --format mp4 \
  --output renders/my-new-intro.mp4
```

非教程形态（主播 + overlay / 单段演示 / 概念片）请从 0 写——详见 [`TEMPLATE_USAGE.md`](TEMPLATE_USAGE.md) 和 [`参考库/历史模板/README.md`](参考库/历史模板/README.md)。

---

## 已知坑（吃过的亏）

详见 [`docs/HARD_CONSTRAINTS.md`](docs/HARD_CONSTRAINTS.md)（仓库单源）。简表：

1. GSAP querySelector 不能用 template literal（lint 报 `template_literal_selector` error）
2. 复制 beat html 时全局换 beat id（不换 → 动画静默失效）
3. DaVinci 21 不能渲染含中文文字的手写 Lottie（含文字走 ProRes 4444 alpha）
4. 中文 Whisper transcribe 要绕开 hyperframes CLI（用 `whisper-cli`，DTW preset 名不一致）
5. `npx hyperframes` 必须在工程目录里跑（仓库根无 package.json）
6. 不要 commit `hyperframes-student-kit/` 或 `hyperframes-launches/`（上游 git 仓库）
7. 大视频/音频不进 git（`.gitignore` 已排除 `*.mp4 *.mov *.mp3 *.wav *.m4a` 和 `录屏/`）
8. 中文字体在无头 Chromium 渲染时偶发回退（Google Fonts CDN 超时，本地化字体可避）

---

## 致谢

- [HyperFrames](https://hyperframes.heygen.com) by HeyGen — HTML + GSAP 视频渲染框架
- Nate Herk 的 hyperframes-student-kit — 学习参考
- Anthropic Claude — AI pair programmer

---

## License

暂未定。计划公开仓库时采用 MIT 或 CC BY 4.0。
