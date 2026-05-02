# XCYJ HyperFrames Demo — 进度与需求

> **状态**：Beat 1 + Beat 5 已对齐中文，Beat 2/3/4 待**基于语义重新设计**（不能套 Nate 原版模板）。
> **下一步**：派 agent teams 为段 A/B/C/D 设计具体内容，主 agent 整合实现。

---

## 1. 项目目标

基于一段 24.4 秒的中文录屏，用 HyperFrames 制作一个 ~26 秒的演示视频，展示**"用 Claude Code 自动做动效"**这件事。视频要让观众**看到** Claude Code 真的能做出动效（不是只在画面里贴几个标签）。

## 2. 用户

- 陈与小金（XCYJ）
- 内容创作者，非程序员
- 用 Claude Code + HyperFrames 自动制作视频片头片尾 / 字幕动效 / IP 包装
- 剪辑流程在达芬奇手动完成；HyperFrames 只用来生成动画素材

## 3. 录屏内容（1080p 横版，路径 `录屏/录屏_1080p.mp4`）

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
**✅ 正确做法**：每个 Beat 的内容**从录屏语义反推设计**——他说什么，画面就展示什么具体演示，而不是套用 Nate 原视频的结构。

**反例**：Nate Beat 2 是 "TEXT ON SCREEN" 砸字（因为他在那一刻说 "text on screen, like up here"）。我们的 Beat 2 时间点（3.95s）用户在说"测试视频"——直接砸 "TEXT ON SCREEN" 毫无语义关联，等于复读机式套壳。

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

## 7. 当前进度

### 7.1 已完成
- 工程：`hyperframes-student-kit/video-projects/xcyj-claude-demo-v2/`（基于 Nate `claude-edit-intro` fork）
- 总时长：26 秒（录屏 0–24.4s + outro 持续到 26s）
- 录屏 / 音频替换：`recording.mp4`
- **Beat 1 钩子（0–3.95s）✅** — 中文卡片"用 Claude Code 自动做动效" + "陈与小金 · XCYJ"
- **Beat 5 PiP（12.84–26s）✅** — 中文 hits 对齐关键词：
  - `1.52s` 弹"自动做动效"（说"动效"那一刻，但其实更精确应该 14.36s 主时间 = 1.52s 本地）
  - `6.26s` 弹"Claude Code"
  - `8.66s` 弹"片头片尾"
  - `10.55s` outro "陈与小金 / XCYJ" 大字

### 7.2 待重新设计（占位状态）
- **Beat 2** (3.95–5.94s) — 当前 "TEXT ON SCREEN" 英文砸字 → 不匹配语义
- **Beat 3** (5.94–8.64s) — 当前英文 karaoke 字幕 → 不匹配语义
- **Beat 4** (8.64–12.84s) — 当前英文 AI agent log + 假数据图表 → 不匹配语义

---

## 8. 待重新对齐：每段语义对应什么内容

### 段 A：0–5.46s "OK 这是一条测试视频"
- Beat 1 钩子已 OK（0–3.95s）
- **3.95–5.46s（钩子之后到段 A 结束）需要设计**：他说"测试视频"时画面展示什么？
- 不要复用 "TEXT ON SCREEN" 砸字（语义错位）

### 段 B：5.46–11.24s "演示如何让 Claude Code 帮我添加这些和这些"
- 关键词 "Claude Code" @ 7.50s
- **核心要求**：他说 "Claude Code" 时，画面要真的展示**一个 Claude Code 终端在跑**（黑底 + typewriter 命令 + AI 思考状态），而不是只贴个 logo 标签

### 段 C：11.24–15.12s "帮我添加旁边的这些动效"
- 关键词 "动效" @ 14.36s
- **核心要求**：他说"动效"时，画面要真的展示**几种动效样例**（粒子爆发 / 字幕飞入 / 卡片翻转 / 光效 / 数据图等），让观众看到"动效"是什么

### 段 D：15.12–22.60s "今天讲如何使用 Claude Code 让它帮你自动制作片头片尾"
- 关键词 "Claude Code" @ 19.10s, "片头片尾" @ 21.50s
- 当前 Beat 5 PiP 已经对齐到中文 hits ✅
- **可以更具体**：说"片头片尾"时，左侧不只是大字，要展示**一段实际的 mini 片头动画 + mini 片尾动画**（各 1.5–2 秒）

### 段 E：22.60–26s "录屏结束 + Outro"
- 用户已停止说话
- Outro CTA "XCYJ" 大字 + Powered by 标识 ✅

---

## 9. Agent Teams 分工

每个 agent 负责一段语义片段，输出**视觉设计稿 + HTML/CSS/GSAP 代码草稿**：

| Agent | 段 | 时间 | 任务 |
|---|---|---|---|
| Agent A | 段 A | 0–5.46s | 设计钩子之后的过渡（3.95–5.46s）|
| Agent B | 段 B | 5.46–11.24s | 设计模拟 Claude Code 终端（核心，必须有真实演示感）|
| Agent C | 段 C | 11.24–15.12s | 设计动效样例展示（4–6 种动效同框）|
| Agent D | 段 D | 15.12–22.60s | 优化 PiP 主舞台：mini 片头 + mini 片尾 实际示意 |

**主 agent**（我）：整合 4 个 agent 输出，写最终的 sub-composition HTML 文件，跑 lint + preview，迭代。

每个 agent 的输入：
- 本段时间区间 + transcript（这段在说什么）
- 视觉风格（Claude 橙 + 深空蓝 + 字体）
- 录屏画面尺寸 1920×1080，FULL（前 12.84s）/ PIP（之后）模式
- 与前后段的衔接

每个 agent 的输出：
1. 视觉描述（500 字内，画面具体展示什么、节奏怎么走）
2. HTML 元素列表 + CSS 样式（关键 class）
3. GSAP 动画时间表（local seconds，对齐到关键词）
4. 与前后段的衔接点

---

## 10. 决策日志

- `2026-05-02 14:22` 选择 hyperframes 路线（vs Lottie）做实战 demo 看效果
- `2026-05-02 14:48` 第一版 demo（xcyj-claude-demo）做差，标签太小、没演示
- `2026-05-02 15:30` fork `claude-edit-intro` 重新做（v2），Beat 1 + Beat 5 已对齐中文
- `2026-05-02 ~16:00` **用户反馈：Beat 内容必须基于语义而非套模板** → 当前 commit + 派 agent teams 重新设计 Beat 2/3/4

---

## 11. 路径速查

```
~/项目/参考仓库/hyperframes/
├── PROGRESS.md                                          ← 本文档
├── .gitignore
├── 录屏/
│   ├── 录屏_1080p.mp4                                   1080p H.264 录屏（git ignore）
│   ├── 2026-05-02 13-35-38.mov                          4K 原片（git ignore）
│   └── transcript.json                                  Whisper large-v3 转写
├── hyperframes-student-kit/                             [git ignore — Nate 工程，已在 GitHub]
│   └── video-projects/xcyj-claude-demo-v2/              ← 实际工程在这
└── hyperframes-launches/                                [git ignore — HeyGen 官方工程]
```

工程实际位置：`hyperframes-student-kit/video-projects/xcyj-claude-demo-v2/`
