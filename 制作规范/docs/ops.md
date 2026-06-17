# Ops —— CLI 位置 / 维护节奏 / 仓库速查

从 CLAUDE.md 外移过来的低频信息。AI 不需要每次会话加载，需要时来这里查。

## hyperframes CLI 本体在哪

不在本仓库，在 npx 全局缓存里：

```
~/.npm/_npx/<hash>/node_modules/hyperframes/   (~109M，含 Playwright/ffmpeg-static)
```

- 看版本：`npx hyperframes --version`
- 强制升级：`npx hyperframes@latest --version`
- 完全清掉重来：`rm -rf ~/.npm/_npx`

## 软链全表

| 软链 | 指向 | 是否进 git |
|---|---|---|
| `.agents/skills/<16 官方 skill>` | npx 装的真身（GitHub `heygen-com/hyperframes`） | gitignored |
| `.claude/skills/<16 官方 skill>` | 软链 → `../../.agents/skills/<name>` | gitignored |
| `.claude/skills/cyxj-hyperframes-overlay` | `../../制作规范/skills/cyxj-hyperframes-overlay` | ✅ 进 git |
| `.agents/skills/cyxj-hyperframes-overlay` | `../../制作规范/skills/cyxj-hyperframes-overlay` | ✅ 进 git |

> 官方 skill 不再走 Codex `official/` 镜像（2026-06-17 弃用）。版本真源是仓库根 `skills-lock.json`（进 git）；换机器跑 `npx skills experimental_install` 按 lock 还原，升级跑 `npx skills update -p -y`。

## 维护节奏

| 周期 | 命令 |
|---|---|
| 每月 | `bash scripts/refresh-catalog.sh` 刷新 `参考/catalog.json` |
| 每 1-2 月 | `bash scripts/refresh-docs.sh` 刷新 `docs/hyperframes-official/` 官方文档镜像 |
| 每 1-2 月 | `npx skills update -p -y` 升级 16 个官方 skill（GitHub `heygen-com/hyperframes`），同步更新 `skills-lock.json` |
| 每 1-2 月 | `cd 参考/hyperframes-launches && git pull`（上游参考仓更新） |
| 每条新视频做完 | 按 `cyxj-hyperframes-overlay` 的项目层规则归档 |

## 仓库速查（CLAUDE.md 外移）

| 路径 | 内容 |
|---|---|
| `REFERENCE_INDEX.md` | ⭐ 参考入口：可参考工程 + catalog 零件索引 + 16 官方 skill 索引 |
| `资源库/logos/` | ⭐ 34 个 AI 厂商 / 工具 SVG logo |
| `组件库/COMPONENTS.json` | ⭐ 组件注册表（7 零件，写 composition 前必查） |
| `组件库/cc-window/` | Claude Code 终端 UI 零件（19-tips 沉淀） |
| `参考/inspirations/` | 5 大 React 组件库的 vanilla 转译版 |
| `视频项目/已发布/2026-05-04-claude-19-tips/` | 最大工程参考（唯一有完整源码）：28 composition / 7.5 分钟 |
| `参考/我的作品/` | 历史成片快照池（仅截图 / renders，无源码，视觉参考用） |
| `../notes/TEMPLATE_USAGE.md` | 模板复用 checklist |

## 标准工作流详细

短描述：
- **做新视频** → 在 `hyperframes/` 开 Claude Code / Codex，说「做个新视频，主题《XXX》」，active entry `cyxj-hyperframes-overlay` 先读官方 skill（入口 `hyperframes`），再读 `制作规范/`
- **装零件** → 工程目录里说「加个转场 / 加 macos 通知 / Logo 落版」，active entry 仍是 `cyxj-hyperframes-overlay`

Active overlay 源在 [`../skills/cyxj-hyperframes-overlay/SKILL.md`](../skills/cyxj-hyperframes-overlay/SKILL.md)。legacy 源 `cyxj-new-video` / `cyxj-add-block` 已删除（2026-06-17 重构），不再保留为参考。
