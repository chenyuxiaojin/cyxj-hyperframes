# 下次对话无缝衔接指南

> **给 Claude 的话**：用户上一轮对话快用完额度了，让你接着干活。**不要重新探索，直接读 PROGRESS.md + 这个文件，按"立即可做的下一步"开干。**

---

## 0. 30 秒上下文（必读）

陈与小金（XCYJ）做内容，用 Claude Code + HyperFrames 自动制作视频效果。**录屏 24.4 秒，主题"用 Claude Code 自动做动效"**。

经过两轮对话已经完成：
1. ✅ HyperFrames 工程跑通（Beat 1 + Beat 2 + Beat 3 + Beat 5 全部基于录屏语义重新设计，**用户已确认大方向对了**）
2. ✅ 工程位置：`hyperframes-student-kit/video-projects/xcyj-claude-demo-v2/`
3. ✅ Lint 通过 0 errors，preview 跑过用户验收过

**用户的态度**："整体感觉对了，就是这种感觉。"

---

## 1. 当前状态

### 已完成的工程文件
```
xcyj-claude-demo-v2/
├── index.html                           ✅ 26s 主合成，PIP 切换 11.24s
├── meta.json                            ✅ 1920x1080 30fps
├── hyperframes.json                     ✅ 标配
├── DESIGN.md（如果有）                    
├── assets/
│   ├── recording.mp4                    ✅ 用户的 1080p 录屏（git ignore）
│   ├── recording.transcript.json        ✅ Whisper 中文转写
│   ├── claude-logo.png                  ✅ Logo
│   ├── brand-tokens.css                 ✅ Claude 品牌色
│   └── music-bed.mp3                    （未使用，原 Nate 工程的）
└── compositions/
    ├── 01-hook.html                     ✅ Beat 1 钩子（中文化完成）
    ├── 02-claude-terminal.html          ✅ Beat 2 终端演示（agent B 写）
    ├── 03-motion-grid.html              ✅ Beat 3 动效合集（agent C 设计 + 我落盘）
    ├── 05-pip.html                      ✅ Beat 5 PiP 主舞台（agent D 设计 + 我落盘）
    ├── 02-text-on-screen.html           🗑️ 旧占位，未引用，可删
    ├── 03-karaoke-captions.html         🗑️ 旧占位，未引用，可删
    ├── 04-mg-and-charts.html            🗑️ 旧占位，未引用，可删
    └── components/                      （Nate 原工程带的）
```

### Beat 时间表（基于录屏内容语义）
```
0.00─3.95s   Beat 1 · Hook       中文卡片"用 Claude Code 自动做动效"，FULL 模式
3.95─5.46s   [无 overlay]        钩子淡出，录屏全屏播"OK 这是一条测试视频"
5.46─11.24s  Beat 2 · Terminal   mac 风格终端，typewriter 命令，AI 思考，工具 log，进度条，FULL
11.24─15.12s Beat 3 · Motion Grid 4 卡片网格（粒子/卡拉OK/数字+柱状/光效横扫），PIP 切换在 11.24s
15.12─26.00s Beat 5 · PiP        终端 → mini 片头 → mini 片尾 → outro CTA "陈与小金/XCYJ"
```

### 关键词时间戳（录屏内部时间）
- "Claude Code" 第一次：7.50s（Beat 2 内）
- "动效"：14.36s（Beat 3 内）
- "Claude Code" 第二次：19.10s（Beat 5 内 local 3.98s）
- "片头片尾"：21.50s（Beat 5 内 local 6.38s）

---

## 2. 上一轮对话结束时的最后讨论

### 用户的方向决定
用户**不准备渲染当前 demo 成 MP4**。理由：他理解了"hyperframes 是流程验证不是发布成片"。

用户**想试 Lottie 路线**：
- 看到达芬奇 21 原生支持 Lottie JSON
- 想把当前 hyperframes 工程的效果做成 Lottie 导入达芬奇
- **选择路径 A**：让 Claude 直接写最简版 Lottie JSON 验证达芬奇兼容性

我已经诚实告知用户：
- ❌ "把 hyperframes 工程整体导出成 Lottie" 不可行（CSS filter / backdrop-filter / shader / video / 复杂 GSAP timeline 大部分 Lottie 不支持）
- ✅ 但**可以基于 hyperframes 的视觉风格做"扁平化简化版"Lottie**——保留风格，技术从头来

### Agent 报告：GSAP → Lottie 转换工具调研（已完成）

**核心结论（高置信度，多源交叉）**：
- ❌ **不存在能自动把 GSAP timeline 转 Lottie 的成熟工具**
  - GitHub 搜索零相关；Lottie 生态原产地是 AE + Bodymovin
  - `@lottiefiles/lottie-js` 是 JSON manipulation 库，不能从 GSAP 生成
  - LottieLab、Rive、Jitter 都不吃代码（吃 Figma/AE/手画）
- ❌ **数据模型对不上**：GSAP 操作浏览器 DOM/CSS/Canvas 运行时状态；Lottie 是预烘焙的 AE 图层时间轴。GSAP 的滤镜、3D 变换、自定义 ease、SVG morph 在 Lottie 规范里没有对应

**Agent 强烈推荐的替代路线（重要）**：
> **HyperFrames → 渲染 ProRes 4444 含 alpha → 拖入 DaVinci**
> - ProRes 4444 编码原生支持 alpha，DaVinci 拖入即识别透明通道
> - PNG 序列是终极兜底，零损耗、零兼容问题
> - **保留 GSAP 全部表达力**（滤镜、3D 变换、custom ease、SVG morph）
> - 与 Lottie 路线对比：文件大一点，但 DaVinci 处理时一样无缝

**对当前项目的影响**：
"想把 hyperframes 工程转成 Lottie"这条路**实际上死了**——除非用户愿意在 AE 里重做。但用户原本的 Lottie 路径 A（**手写一个最简 Lottie 验证 DaVinci 21 真的能用**）**仍有价值**，因为：
1. DaVinci 21 Lottie 支持仅 Blackmagic 单源验证，需要小样本测试
2. 未来用户做"独立的小动画"（图标、单独片头标题）时可能直接 Claude 写 Lottie 走捷径——前提是 DaVinci 这一环验证过

---

## 3. 立即可做的下一步（按优先级，**经 agent 报告后已重新排序**）

### ⭐ 推荐：先做 A 验证 DaVinci，再做 B 走 ProRes 路线

简而言之：**两条路并行做**——A 验证可行性、B 是真正主路线。下次对话开场可以先问用户是否同意这个调整。

---

### A. 写一个最简版 Lottie JSON（验证 DaVinci 21 兼容性）

**目标**：把 Beat 1 钩子的核心元素做成 Lottie，让用户拖进达芬奇 21 验证可行性。

**最简版规格**：
- 1920×1080，30fps，4 秒（120 帧）
- 黑底 #050810
- 文字层 1（eyebrow）："CLAUDE CODE · 陈与小金 · XCYJ"，小字，淡入 frame 60-70
- 文字层 2（title 1）："用 Claude Code"，大字白色，淡入 + Y 偏移 frame 15-30
- 文字层 3（title 2）："自动做动效"，大字 Claude 橙 #d97757，淡入 + Y 偏移 frame 30-45
- Shape 层（装饰线）：橙色矩形从 width 0 → 200px，frame 70-90

**输出位置**：`/Users/chenhuajin/项目/参考仓库/hyperframes/lottie-tests/01-hook-min.json`（目录已建）

**关键技术注意**：
- Lottie 5.x 规范（`v: "5.7.4"` 或 `5.9.x`）
- 中文字体：用 `PingFang SC` 或 `Source Han Sans CN`，让达芬奇用系统字体替换
- 颜色用 `[r, g, b, 1]` 0-1 范围
- 关键帧：用 `i` / `o` cubic bezier tangent
- Shape layer 的矩形 width 动画用 trim path 或 transform.scale.x

**验证流程**：
1. Claude 写完 JSON，用 `python3 -m json.tool` 验证语法
2. 用户拖进 [lottiefiles.com 在线 player](https://lottiefiles.com)（**给链接但 URL 必须 user 提供**）验证 JSON 正确
3. 用户拖进达芬奇 21 Media Pool，看：
   - 能不能导入
   - 中文字体怎么显示（最大风险点）
   - 动画时间是否正确
   - 大小、alpha 通道

**这次对话开场你应该做什么**：
1. 简短打招呼（一两句话），告诉用户你已经读了 PROGRESS.md + NEXT_STEPS.md 知道全部状态
2. 检查后台 agent 结果：`ls -la /private/tmp/claude-501/.../tasks/a5147c98015af55d1.output`（路径见上面）
3. 直接写 `lottie-tests/01-hook-min.json`
4. 跑 `python3 -m json.tool` 验证语法
5. 告诉用户：拖进 [lottiefiles.com](https://lottiefiles.com) 在线 player 验证，再拖进达芬奇 21 Media Pool

### B. ⭐ HyperFrames → ProRes 4444 alpha → DaVinci（**真正的生产路线**）

Agent 报告强烈推荐这条。当前 v2 工程**不需要重做任何东西**就能输出，达芬奇里当 footage 拖进时间线。

**但有个重要问题**：当前 v2 工程是"录屏 + 多 overlay 合成"，不是"纯 overlay"。要让 alpha 通道有意义，需要**只保留 overlay 层**——也就是不渲染录屏，只渲染 4 个 sub-composition 叠加。

**做法**：
1. 复制 v2 工程为 `xcyj-claude-overlays-only/`
2. 删除 `index.html` 里的 `face-wrapper` + `face-video` + `face-audio`
3. 主合成背景设为透明（去掉 body 的 `background: #05080f`）
4. 渲染：
```bash
cd ~/项目/参考仓库/hyperframes/hyperframes-student-kit/video-projects/xcyj-claude-overlays-only
npx hyperframes render --quality draft --format mov --output renders/overlays.mov
```
- ProRes 4444 带 alpha 通道（hyperframes 默认行为）
- ~5-10 分钟出片
- 拖进达芬奇，下面铺录屏，效果同当前 hyperframes 整片合成

**或者更简单**：直接渲染当前 v2（含录屏），输出标准 MP4：
```bash
npx hyperframes render --quality standard --format mp4 --output renders/final.mp4
```
- 整片成品，~10-20 分钟
- 直接发布或导入达芬奇当一段视频

### C. 模板化（用户提到过的"另一个"可能是这个）

把当前 v2 工程整理成可复用模板：
- 抽取参数：录屏路径、transcript 路径、关键词时间戳、文字内容
- 写一个 `template/` 目录或 `RECIPE.md`
- 下次做新视频只换参数

**用户没明确决定要做这个**——询问后再做。

---

## 4. 上下文相关的环境状态

### Preview Server
**已经被 kill**（用户结束对话前可能也手动停了）。下次需要看 preview 时重新启动：
```bash
cd ~/项目/参考仓库/hyperframes/hyperframes-student-kit/video-projects/xcyj-claude-demo-v2
npx hyperframes preview  # background
# 等到 "Studio running" → http://localhost:3002
```

### Git
- 仓库根：`/Users/chenhuajin/项目/参考仓库/hyperframes/.git`
- 已 commit：进度快照 + PROGRESS.md + NEXT_STEPS.md
- 注意：`.gitignore` 排除了 `hyperframes-student-kit/`、`hyperframes-launches/`、大 mp4/mp3 文件
- v2 工程的代码在两处：
  1. **真实位置**（hyperframes CLI 跑的）：`hyperframes-student-kit/video-projects/xcyj-claude-demo-v2/`（git ignore，**不被跟踪**）
  2. **快照副本**（git 跟踪）：`xcyj-progress/v2-snapshot/`
  - 改了真实位置的代码后，记得拷贝到快照位置再 commit

### 系统环境
- macOS Apple Silicon (M4 Max)
- ffmpeg + ffprobe 已装（brew）
- Whisper large-v3 中文模型已下载到 `~/.cache/hyperframes/whisper/models/ggml-large-v3.bin`（3.1GB）
- Hyperframes CLI v0.4.42
- **Hyperframes 一个已知 bug**：`transcribe` 命令传给 whisper-cli 的 DTW preset 是 `large-v3`（破折号），但 whisper-cpp 期望 `large.v3`（点号）—— 中文转写要绕开 hyperframes CLI 直接用 whisper-cli

---

## 5. 关键决策日志（按时间倒序）

- **2026-05-02 ~17:00**（这是上一轮对话快结束时）用户确认走 Lottie 路径 A，让 Claude 写最简 Lottie。同时派 agent 搜 GSAP→Lottie 工具
- **2026-05-02 ~16:30** 整合 3 个 agent 设计稿到 v2 工程，重做 Beat 2/3/5。用户验收"整体感觉对了"
- **2026-05-02 ~16:00** 用户反馈："你只是套模板，没基于语义"。派 3 个 agent 重新设计 Beat 2/3/5
- **2026-05-02 ~15:30** fork claude-edit-intro，第一版 v2 把英文文字换中文。用户反馈"太套壳"
- **2026-05-02 ~14:48** 第一版 demo（xcyj-claude-demo）做差，用户说"标签太小，没演示"
- **2026-05-02 ~14:22** 选择 hyperframes 路线（vs Lottie）做实战 demo
- **2026-05-02 ~14:00** 完成中文录屏转写（Whisper large-v3）

---

## 6. 关键链接

- 达芬奇 21 Lottie 支持官方说明：https://www.blackmagicdesign.com/products/davinciresolve/whatsnew
- HyperFrames 文档：https://hyperframes.heygen.com/llms.txt（agent 索引）
- HeyGen 官方工程参考：`hyperframes-launches/`（已 clone 在 hyperframes 目录下）
- Nate Herk 学习工程：`hyperframes-student-kit/`

---

## 7. 用户喜好（根据这次对话观察）

- **不喜欢套模板** — 内容必须基于真实语义反推设计
- **喜欢清晰的对齐目标** — "对齐"这个词他用得很在意，要先达成共识再动手
- **不依赖渲染** — 他理解流程验证 ≠ 成品；preview 看到效果就够了
- **想要可持续工作流** — 试 Lottie 路线就是为了减少"每次改都要渲染"的重负
- **额度敏感** — 这次对话最后是因为额度告急才停的，**下次对话直接动手少寒暄**

---

**就这些。下次见 👋**
