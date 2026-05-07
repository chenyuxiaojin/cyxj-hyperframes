---
status: archived
moved_at: 2026-05-07
moved_in_commit: P1.1（cyxj-new-video 冷启动止血后续）
reason: 这 3 个目录是早期工作目录（xcyj-progress）直接 rename 而成的伪模板——id 未抽净、内容是上一条视频的具体产物、底色用 DNA 已废弃的深蓝。当作"模板" cp 起步会污染新工程。
---

# 参考库/历史模板/

> ⚠️ **不要用这里的目录作为新工程起点**。这里只是档案保留，便于回查"当年那条视频是怎么搭的"。

## 目录身份对照

| 目录 | 真身（从哪个工程 rename 来的） | 现在该怎么做这种形态 |
|---|---|---|
| `demo-fullscreen/` | `xcyj-codex-claude-intro`（参考库/我的作品/2026-05-02-codex-claude-intro/）的工作快照 | **从 0 写**（手抄 meta.json + index.html + compositions/*.html，参考 docs/hyperframes-official/getting-started/quickstart.md 的最小骨架） |
| `host-overlay/` | `xcyj-claude-demo-v2`（参考库/我的作品/2026-05-02-claude-demo-v2/）的工作快照 | 同上，从 0 写 |
| `host-overlay-alpha/` | `xcyj-claude-overlays-only`（参考库/我的作品/2026-05-02-claude-overlays-only/）的工作快照 | 同上，从 0 写 |

## 为什么不删掉

- 删掉会让 cc-window 等组件的引用断裂、`.claude/skills/cyxj-new-video/SKILL.md` 决策树里的注释失去对照锚点
- 当作"档案"留着比删掉风险低（用户元反馈："标 ⚠️ 已废弃 比删除/重写更安全"）
- 等同形态做到 3-5 次重复后，从最近的几条工程里抽真模板，**不是从这些 5 月初的快照里抽**

## 真正的模板在哪

- `templates/tutorial-8beat/` —— 当前**唯一**从 0 设计的真模板（8 beat 教程结构）
- `templates/components/cc-window/` —— Level 2 组件库范例

## 触发"从这里抽真模板"的条件

按 memory `feedback_no_mixed_fix_and_feature.md` 的"等同形态做到 3-5 次再从重复中抽"原则——

- 当 demo-fullscreen / host-overlay / host-overlay-alpha 形态各自再做 2-3 条新视频后
- 从**最新的几条**工程里抽，**不是这里 5 月初的快照**
- 这里的 3 个目录到那时基本就该删了
