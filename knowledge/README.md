# knowledge/ — 跨工程沉淀的知识与 schema

> 不绑定具体某条视频的"原则、约束、风格、流程、schema"。
> 单条视频的 PLAN.md / NEXT_SESSION.md 仍留在工程目录内。

## 这是给谁看的

- **AI**：起新视频时读这里查约束（HARD_CONSTRAINTS）、查风格（visual-dna）、查 motion 准则
- **人**：偶尔回顾视觉/动效原则；不需要每天看

## 当前内容

- `schemas/project-meta.md` — 工程 `meta.json` schema 草案（未启用）
- `MIGRATION_PLAN.md` — 仓库重构迁移路径记录

## 计划纳入（阶段 1 暂未 mv，等当前视频做完再做）

| 源文件 | 目标位置 |
|---|---|
| 根目录 `MY_VISUAL_DNA.md` | `knowledge/visual-dna.md` |
| 根目录 `MY_MOTION_NOTES.md` | `knowledge/motion-notes.md` |
| 根目录 `TEMPLATE_USAGE.md` | `knowledge/template-usage.md` |
| 根目录 `MOTION_PHILOSOPHY.md`（软链）| `knowledge/motion-philosophy.md`（保持软链）|
| `docs/HARD_CONSTRAINTS.md` | `knowledge/HARD_CONSTRAINTS.md` |
| `docs/STYLE_BORROW_PLAYBOOK.md` | `knowledge/style-playbook.md` |
| `docs/hyperframes-official/` | `knowledge/hyperframes-official/` |

**这一步会破坏现有 skill 的硬编码路径引用**，必须配合 CLAUDE.md / AGENTS.md / SKILL.md 同步改。当前视频做完前不要做。
