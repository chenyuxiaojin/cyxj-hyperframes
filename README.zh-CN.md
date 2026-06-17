[**English**](README.md) | 中文

# cyxj-hyperframes

> cyxj-hyperframes 是建立在 HeyGen HyperFrames 之上的个人视频作品库 + 可复用工具包，用于制作 Claude Code 教程视频，基于 HTML + GSAP 技术栈。

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![YouTube](https://img.shields.io/badge/YouTube-@cyxj__ai-red)](https://www.youtube.com/@cyxj_ai)
[![HyperFrames](https://img.shields.io/badge/渲染器-HeyGen%20HyperFrames-blue)](https://hyperframes.heygen.com)

---

## 成片预览

[![分享19个我自己使用 Claude 的技巧](https://i.ytimg.com/vi/fnKGWHSd0NE/hqdefault.jpg)](https://youtu.be/fnKGWHSd0NE)

代表作：[**分享19个我自己使用 Claude 的技巧**](https://youtu.be/fnKGWHSd0NE) — 7.5 分钟 / 28 个 sub-composition / 源工程见 [`视频项目/已发布/2026-05-04-claude-19-tips/`](视频项目/已发布/2026-05-04-claude-19-tips/)

---

## 为什么做这个

大多数开发者向视频工具要么需要 React 知识（Remotion），要么锁进专有的拖拽编辑器。HyperFrames 让你用已有的 HTML + GSAP 技能写动效，直接渲染成 MP4。

这个仓库是 YouTube 频道 [@cyxj_ai](https://www.youtube.com/@cyxj_ai) 的生产工作台，开源的目的是：

- 你可以**复制模板，一个下午做完一条视频**，不需要学动效设计
- 你可以看到 **Claude Code 和 OpenAI Codex CLI 如何端到端协作**完成真实视频项目
- 方法论（硬约束、视觉借鉴剧本、AI 工作流）被文档化，可直接复用

---

## 目录结构

```
视频项目/已发布/                 10 条已归档视频源工程（每条有 README 讲技术选型）
视频项目/在制/                   当前在做的工程（gitignored）
templates/
  components/                   7 个可复用组件（cc-window 终端 UI / orbit-dots / pulse-bars…）
  inspirations/                 5 大 React 组件库的 vanilla HTML+GSAP 转译版
  catalog.json                  机器可读组件清单（给 skill 用）
cyxj/
  skills/cyxj-hyperframes-overlay/
                                  当前 active overlay：官方规则 → 用户层 → 项目
assets/logos/                   33 个 AI 厂商 / 工具 SVG logo（Claude / OpenAI / GitHub…）
cyxj/docs/
  HARD_CONSTRAINTS.md           从真实踩坑沉淀的 30 条硬约束
  STYLE_BORROW_PLAYBOOK.md      怎么合法借鉴参考视频的视觉风格
  REFERENCE_INDEX.md            上游参考工程索引
docs/
  hyperframes-official/         HyperFrames 官方文档 78 页本地镜像
scripts/                        维护脚本（刷 catalog / lint 各工程…）
```

---

## 5 分钟上手

> 当前**无内置起步模板**——从空白脚手架起步。

```bash
# 1. 确认 HyperFrames CLI 可用（首次运行自动下载）
npx hyperframes --version

# 2. 在 视频项目/在制/ 下起空白工程
DATE=$(date +%Y-%m-%d)
cd 视频项目/在制
npx hyperframes init "$DATE-my-first-video" --example blank
cd "$DATE-my-first-video"

# 3. 改 meta.json 里的 id 字段（全局唯一）
# 4. 按官方 hyperframes skill 的最小骨架逐个写 compositions/*.html

# 5. 验证 + 预览
npx hyperframes lint
npx hyperframes preview   # 浏览器打开 http://localhost:3002

# 6. 渲染
npx hyperframes render --quality standard --format mp4 \
  --output renders/final.mp4

# 7. 满意了归档进 视频项目/已发布/
mv "../$DATE-my-first-video" "../../已发布/$DATE-my-first-video"
```

详细复用 checklist：[`cyxj/notes/TEMPLATE_USAGE.md`](cyxj/notes/TEMPLATE_USAGE.md)

---

## 用法：AI 协作工作流

推荐用法是进入 `hyperframes/` 后开一个 Claude Code 或 Codex 会话，说一句**「做个新视频，主题《XXX》」**。当前 active discovery 通过 `cyxj-hyperframes-overlay` 路由：先读官方 HyperFrames skill（从 `hyperframes` 入口起），再读 `cyxj/` 里的 XCYJ 资产、模板、视觉 DNA 和生产纪律。旧 `cyxj-new-video` / `cyxj-add-block` workflow 仅作流程参考：

1. 问形态 / 主题 / 时长
2. 读 [`cyxj/docs/REFERENCE_INDEX.md`](cyxj/docs/REFERENCE_INDEX.md) 推荐 2-3 个参考工程
3. 复制模板到 `视频项目/在制/<slug>/`，更新 `meta.json` 和 `index.html`
4. 等你提供文案 → 填充 beats → lint → preview
5. 你说「做完了」→ 自动归档进 `视频项目/已发布/<日期>-<slug>/`

**Claude Code 用户**：active skills 在 `.claude/skills/`，指向 `.agents/skills/`（npx 装）的软链 + `cyxj/skills/cyxj-hyperframes-overlay`。  
**OpenAI Codex 用户**：active skills 在 `.agents/skills/`，即 npx 装的官方 skill 真身 + XCYJ overlay。

官方 skill 由 `npx skills add/update heygen-com/hyperframes` 管理（不再有 `official/` 镜像）。XCYJ 生产规则改在 `cyxj/`。

---

## 对比同类工具

| | **cyxj-hyperframes** | **Remotion**（[cyxj-remotion](https://github.com/chenyuxiaojin/cyxj-remotion)） | **Motion Canvas** | **HeyGen 官方 student-kit** |
|---|---|---|---|---|
| 技术语言 | HTML + GSAP | React + TypeScript | TypeScript | HTML + GSAP |
| 上手方式 | `npx hyperframes` | `npm create video` | `npm create motion-canvas` | 同 CLI |
| AI 友好 | 是——纯 HTML，prompt 直写 | 较难——React 组件树 | 中等 | 无 AI 工作流 |
| 可复用零件 | 7 个组件（无完整起步模板） | 无 | 无 | 基础示例 |
| Skill（Claude/Codex） | 有 | 无 | 无 | 无 |
| 中文字体支持 | 有（Noto Sans SC / 本地 woff2） | 有 | 有限 | 无指引 |
| 输出格式 | MP4（无头 Chromium 渲染） | MP4（无头 Chromium 渲染） | MP4 | MP4 |
| 开源协议 | MIT | MIT | MIT | 专有 |

---

## 常见问题

**HyperFrames vs Remotion 选哪个？**  
HyperFrames：HTML + GSAP，上手门槛低，适合口播配动效的教程类视频。Remotion：React + TypeScript，适合数据驱动或程序化生成的视频。本仓库有姊妹仓 [`cyxj-remotion`](https://github.com/chenyuxiaojin/cyxj-remotion) 对应 Remotion 管线。

**不会写代码能用吗？**  
可以。当前无内置起步模板——用 `npx hyperframes init <slug> --example blank` 起个空白工程，然后把脚本粘给 Claude Code，让它替你写 composition 文件。

**中文字幕渲染有坑吗？**  
两个已知坑：(1) 不要用 `npx hyperframes transcribe` 跑中文音频，直接用 `whisper-cli`。(2) 无头 Chromium 渲染时中文字体偶发回退（Google Fonts CDN 超时）——把 woff2 文件本地化可避（参考 `2026-05-20/karpathy-anthropic/` 里的字体包）。完整细节：[`cyxj/docs/HARD_CONSTRAINTS.md`](cyxj/docs/HARD_CONSTRAINTS.md) §4 和 §8。

**OpenAI Codex 用户能用吗？**  
可以。官方 skill 装到 `.agents/skills/`（OpenAI Agents 格式），用 `npx skills` 管理，XCYJ overlay 指向 `cyxj/skills/cyxj-hyperframes-overlay`。换机器用 `npx skills experimental_install` 按 `skills-lock.json` 还原。

---

## 学习路径

| 顺序 | 看哪个 |
|---|---|
| 1. 先看成品 | [YouTube 上看](https://youtu.be/fnKGWHSd0NE)，或读 [`视频项目/已发布/2026-05-04-claude-19-tips/README.md`](视频项目/已发布/2026-05-04-claude-19-tips/README.md) |
| 2. 动效美学纪律 | [`cyxj/docs/STYLE_BORROW_PLAYBOOK.md`](cyxj/docs/STYLE_BORROW_PLAYBOOK.md) |
| 3. 避坑 | [`cyxj/docs/HARD_CONSTRAINTS.md`](cyxj/docs/HARD_CONSTRAINTS.md) |
| 4. 查官方文档 | [`docs/hyperframes-official/`](docs/hyperframes-official)（78 页本地镜像） |
| 5. 看 10 条视频的设计思路 | [`视频项目/已发布/*/README.md`](视频项目/已发布) |

---

## License

[MIT](LICENSE) © 2026 chenyuxiaojin

---

## 致谢

- [HeyGen HyperFrames](https://hyperframes.heygen.com) — HTML + GSAP → MP4 渲染管线
- [Nate Herk 的 hyperframes-student-kit](https://github.com/HeyGen-Official/hyperframes-student-kit) — 上游视觉灵感、参考工程、基础 skill 来源
- [GSAP](https://gsap.com) — 动效引擎
- Claude Code 和 OpenAI Codex CLI — 全程 AI 协作
