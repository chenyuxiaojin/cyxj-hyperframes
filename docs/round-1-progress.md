# XCYJ HyperFrames Demo — 进度与需求

> **当前状态（2026-05-02）**：v2 整合版完成，**用户已确认"整体感觉对了"**。下一步走 Lottie 路线（路径 A）写最简版 Lottie JSON 验证达芬奇 21 兼容性。
> **新对话直接读 [NEXT_STEPS.md](NEXT_STEPS.md) 即可无缝接续。**

---

## 1. 项目目标

基于一段 24.4 秒中文录屏，用 HyperFrames 制作 26 秒演示视频，展示**"用 Claude Code 自动做动效"**这件事。视频要让观众**真的看到**演示内容（不是只贴标签）。

## 2. 用户

- 陈与小金（XCYJ）
- 内容创作者，非程序员
- 用 Claude Code + HyperFrames 自动制作视频片头片尾 / 字幕动效 / IP 包装
- 剪辑流程在达芬奇手动完成；HyperFrames 只用来生成动画素材

## 3. 录屏内容（路径 `录屏/录屏_1080p.mp4`，1080p 横版）

| 时间 | 内容 | 关键词时间戳 |
|---|---|---|
| 0.00–5.46s | OK 这是一条测试视频 | — |
| 5.46–11.24s | 是演示如何让 Claude Code 帮我添加这些和这些 | "Claude Code" @ 7.50s |
| 11.24–15.12s | 帮我添加旁边的这些动效 | "动效" @ 14.36s |
| 15.12–19.84s | 那么今天这个视频就是讲如何使用 Claude Code | "Claude Code" @ 19.10s |
| 19.84–22.60s | 让它帮你自动制作片头片尾 | "片头片尾" @ 21.50s |

完整词级时间戳：`录屏/transcript.json`（Whisper large-v3 中文转写）

## 4. 关键认知（之前犯的错）

**❌ 错误做法**：fork Nate 的 `claude-edit-intro` 工程，把英文文字换成中文，时间戳粗对齐。
**✅ 正确做法**：每个 Beat 的内容**从录屏语义反推设计**——他说什么，画面就展示什么具体演示。

## 5. 设计原则

1. **画面跟语义走** — 用户说什么，画面就显示什么具体内容
2. **展示而非标注** — 说 "Claude Code" 要真的展示一个 Claude Code 终端在跑命令；说"动效"要真的展示几种动效样式同时弹出；说"片头片尾"要真的展示一段 mini 片头/片尾示意
3. **节奏跟真实关键词** — 重要切换对齐到 Whisper 转写的精确时间戳
4. **录屏是次要素材** — 大部分时间录屏在 PiP（画中画），左侧主舞台展示"演示内容"

## 6. 视觉风格（已对齐）

- 主背景：`#05080f` 深空蓝
- 强调色：`#d97757` Claude 橙
- 字体：英文 Inter / 等宽 JetBrains Mono / 中文 Noto Sans SC
- 风格：玻璃磨砂卡片 + 大标题（76–240px）+ 字体光晕 + 星空网格背景

## 7. 当前进度（v2 整合版完成）

工程：`hyperframes-student-kit/video-projects/xcyj-claude-demo-v2/`
快照副本（git 跟踪）：`xcyj-progress/v2-snapshot/`

### Beat 时间表（基于录屏内容语义）

| 时间段 | Beat | 内容 | 设计来源 |
|---|---|---|---|
| 0.00─3.95s | **B1 · Hook** | 中文卡片"用 Claude Code 自动做动效"，FULL | 我（中文化 Nate 原版）|
| 3.95─5.46s | — | 钩子淡出，录屏全屏 | — |
| 5.46─11.24s | **B2 · Terminal** | mac 终端 + typewriter + AI 思考 + 工具 log + 进度条，FULL | Agent B（577 行）|
| 11.24─15.12s | **B3 · Motion Grid** | 4 卡片网格（粒子/卡拉OK/数字+柱状/光效横扫），**PIP 切换在 11.24s** | Agent C（460 行）|
| 15.12─26.00s | **B5 · PiP** | 终端 → mini 片头 → mini 片尾 → outro CTA "陈与小金/XCYJ" | Agent D（740 行）|

**已确认**：
- ✅ Lint 通过 0 errors（197 warnings 都是 CSS 选择器作用域和文件长度，不阻塞渲染）
- ✅ Preview 跑过，用户验收"整体感觉对了"
- ❌ **未渲染 MP4**——用户决定流程验证够了不渲染

### 已废弃但留在 compositions/ 的占位文件
- `02-text-on-screen.html` — Nate 原版"TEXT ON SCREEN"砸字
- `03-karaoke-captions.html` — Nate 原版英文卡拉 OK
- `04-mg-and-charts.html` — Nate 原版 AI agent log + 假数据图

未引用，可清理但留着不影响（lint warnings 来自这些）。

## 8. 下一步：Lottie 路径 A

用户决定试 Lottie 路线（不再用 hyperframes 渲染 MP4）：
- 达芬奇 21 原生支持 Lottie JSON 拖进 Media Pool
- 写最简 Lottie 测达芬奇兼容性
- 再决定是否把更多 Beat 也转 Lottie

**详细做法**：见 [NEXT_STEPS.md](NEXT_STEPS.md) 第 3 节 A。

## 9. 决策日志

| 时间 | 决策 |
|---|---|
| 2026-05-02 14:22 | 选择 hyperframes 路线（vs Lottie）做实战 demo |
| 2026-05-02 14:48 | 第一版 demo（xcyj-claude-demo）做差，标签太小、没演示 |
| 2026-05-02 15:30 | fork `claude-edit-intro` 重新做（v2），Beat 1 + Beat 5 已对齐中文 |
| 2026-05-02 ~16:00 | 用户反馈：Beat 内容必须基于语义而非套模板，派 3 agents 重新设计 |
| 2026-05-02 ~16:30 | 整合 3 agents 设计稿到 v2 工程，重做 Beat 2/3/5。**用户确认"整体感觉对了"** |
| 2026-05-02 ~17:00 | 用户决定走 Lottie 路径 A，跳过渲染 MP4，对话因额度告急保存进度 |

## 10. 路径速查

```
~/项目/参考仓库/hyperframes/
├── PROGRESS.md                                 ← 本文档
├── NEXT_STEPS.md                               ← 下次对话直接读这个
├── .gitignore
├── 录屏/
│   ├── 录屏_1080p.mp4                          1080p 录屏（git ignore）
│   ├── 2026-05-02 13-35-38.mov                 4K 原片（git ignore）
│   └── transcript.json                         Whisper large-v3 转写
├── lottie-tests/                               ← Lottie 路径 A 输出位置
├── xcyj-progress/v2-snapshot/                  ← v2 工程快照（git 跟踪）
├── hyperframes-student-kit/                    [git ignore — Nate 工程]
│   └── video-projects/xcyj-claude-demo-v2/     ← 实际工程在这
└── hyperframes-launches/                       [git ignore — HeyGen 官方]
```
