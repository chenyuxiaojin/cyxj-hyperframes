# official/ — 官方层引子（committed pointer；目录内容本身不进 git）

这个目录是 **Codex `@hyperframes` 官方插件**（HeyGen HyperFrames 的官方规则 + skills + assets）的本地镜像。

## 为什么 clone 之后这里是空的

`official/` 的**内容不进 git**（只有这份 `REUSE.md` 进）—— 它是从上游同步的镜像，不是本仓库原创，所以不 vendoring。clone 本仓库后这里只剩这份说明。

## 怎么填回来 / 复用

上游真源：`github.com/heygen-com/hyperframes`（同一个仓库同时支持 Codex / Claude Code / Cursor）。

1. **装官方插件**（任选其一）
   - Codex：安装 `@hyperframes` 官方插件，plugin cache 会落在 `~/.codex/plugins/cache/openai-curated/hyperframes/<hash>/`。
   - 或 `npx skills add heygen-com/hyperframes`（vercel-labs/skills CLI，会同时写 `.agents/skills` 和 `.claude/skills`）。
2. **同步进本目录**：在 `hyperframes/` 下跑
   ```bash
   bash cyxj/scripts/sync-official-from-codex-cache.sh
   ```
   脚本从本机 Codex plugin cache 取最新 hash，用 `rsync` 镜像到这里（会保留这份 `REUSE.md`）。**换机器请先改脚本顶部的 `ROOT` / `CACHE` 路径。**

## 规则

- **只同步、不手改、不提交**官方内容；唯二的例外是这份 `REUSE.md` 和同步脚本生成的 `SYNCED_FROM.md`。
- 不要用 `npx skills update` 管理本目录。

## 三层结构（给 clone 本仓库的 AI 智能体）

```
hyperframes/
  official/   官方层 —— 同步自上游，内容不进 git（看本文件还原）
  cyxj/       XCYJ 个人资产层 —— 进 git，可直接复用（规则/笔记/模板/skills/脚本）
  视频项目/    出片产物层
```

完整路由与硬规则见仓库根 `CLAUDE.md` / `AGENTS.md`。
