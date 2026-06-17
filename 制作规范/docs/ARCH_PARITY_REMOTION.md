# 架构对齐：hyperframes ↔ Remotion（两条管线同构核对）

2026-06-17 hyperframes 完成「绕开 Codex、GitHub 直连官方 skill」迁移后，与姊妹管线 `../Remotion/` 的架构逐项对照。
目标：两条管线**接线方式同构**（换管线零认知成本），差异只保留**有意为之**的部分。

## 同构项（已对齐 ✅）

| 维度 | Remotion (`cyxj-remotion`) | hyperframes（迁移后） |
|---|---|---|
| 官方 skill 装法 | `npx skills add remotion-dev/skills` | `npx skills add heygen-com/hyperframes` |
| 官方 skill 真身 | `.agents/skills/<name>/`（真目录） | `.agents/skills/<name>/`（真目录） |
| Claude 入口 | `.claude/skills/<name>` 软链 → `.agents/skills` | 同 |
| 版本真源 | `skills-lock.json`（github 源 + computedHash） | `skills-lock.json`（同格式） |
| 升级 / 还原 | `npx skills update` / `experimental_install` | `npx skills update -p -y` / `experimental_install` |
| overlay skill | `cyxj-remotion-overlay`（薄壳叠官方，不重抄） | `cyxj-hyperframes-overlay`（同模式） |
| 旧 Codex `official/` 镜像 | 已删 | 已删 |
| 硬规则单源 | `cyxj-remotion/docs/HARD_RULES.md` | `制作规范/docs/HARD_CONSTRAINTS.md` |
| 设计系统单源 | `design.md` + `theme.ts` | `制作规范/notes/MY_VISUAL_DNA.md` + `组件库/xcyj-tokens` |
| **镜头/组件库 + 注册表** | `scenes/` + `sceneMap.ts` + `index.ts` | `组件库/` + `COMPONENTS.json` + `README.md`（**本次新建对齐**） |

## 有意保留的差异（justified）

| 差异 | Remotion | hyperframes | 为什么不强行对齐 |
|---|---|---|---|
| 官方 skill 数 | 1（remotion-best-practices） | 16 | 上游仓库本身不同：hyperframes 官方就发 16 个分工 skill，remotion 发 1 个。 |
| 用户层命名 | `cyxj/` → 改名 `cyxj-remotion/` + 归档旧层 | `cyxj/` → 2026-06-17 重构拆成中文桶（`制作规范/`+`组件库/`+`参考/`+`资源库/`） | 两边最终都重构：Remotion 为新旧两层消歧改名；hyperframes 为「一眼看懂 / 极致压缩」把单一 `cyxj/` 用户层按用途拆成顶层中文桶。 |
| 旧 sync 脚本处理 | 加 `exit 1` fail-fast 保留 | 直接删除 | hyperframes 的 sync 脚本是纯 Codex-cache rsync，迁移后完全无意义 → 删；Remotion 旧脚本另有上下文 → 中和保留。 |
| 文档 MCP | `.mcp.json` 挂 `@remotion/mcp`（官方文档实时查） | **不加 MCP** | hyperframes 官方文档已本地镜像在 `docs/hyperframes-official/`（78 页，`refresh-docs.sh` 维护）；HeyGen 托管 MCP 对 CLI 端禁用 compose/render，无本地文档 MCP 等价物。 |

## 尚存差距（建议后续，未在本次动）

1. ~~**双模板树**~~：原 `templates/` 真源 + `cyxj/templates/` 镜像两棵，已于 2026-06-17 重构合并——单源迁为 `组件库/`、`cyxj/templates` 镜像删除、引用全部更新。此差距消解。
2. ~~**tutorial-8beat lint 债**~~：模板已于 2026-06-17 删除（两份镜像皆删，无替代模板），此 lint 债作废。

> 维护提醒：两条管线的 skill 升级都走 `npx skills update`；升级后各自重核硬规则单源（HARD_RULES.md / HARD_CONSTRAINTS.md）。
