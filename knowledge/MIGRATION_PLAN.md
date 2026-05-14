# MIGRATION_PLAN.md — 仓库重构迁移路径

> 状态：阶段 1（影子模式）部分完成
> 上次更新：2026-05-14

## 决策来源

2026-05-13 与 Claude 的设计讨论。关键约束：
1. 人只看成品 mp4 → 顶层 `renders/` 软链汇总
2. 别人复制能用 → 顶层禁用 self-centric 命名（不要 `mine/` `我的作品/` `MY_*`）
3. AI 主要读者 → 物理路径稳定，状态/分类用 metadata 表达
4. 文档不再是真相单源 → 从 metadata 渲染
5. 接受双胞胎、命名漂移、归档大文件夹是事实存在的

## 顶层结构（目标态）

```
hyperframes/
├── renders/      ⭐ 成品软链汇总（人入口）
├── projects/     视频工程平铺（不按状态切分）
├── library/      物料（templates / components / logos / inspirations）
├── knowledge/    跨工程沉淀（文档 / schema / philosophy）
├── upstream/     上游软链汇总
├── scripts/      维护脚本
└── .ops/         工具自身（claude-skills / codex-skills / 缓存）
```

## 三阶段迁移

### 阶段 1：影子模式（不破坏现状）

**当前进度**：

- [x] 新建顶层 `renders/`
- [x] 新建顶层 `knowledge/`
- [x] 写 `scripts/refresh-renders-index.sh`（**默认 dry-run，--apply 才真改**）
- [x] 写 `scripts/lint-projects.sh`（只检查不改）
- [x] 写 meta.json schema 草案（`knowledge/schemas/project-meta.md`）
- [x] 写 `MIGRATION_PLAN.md`（本文件）
- [ ] mv 根目录散文档到 `knowledge/` —— ⚠️ **等当前视频做完再做**
- [ ] 首次跑 `refresh-renders-index.sh --apply` 建软链

### 阶段 2：元数据补全

- [ ] 每条新视频做完顺手填 meta.json
- [ ] 升级 `cyxj-new-video` skill：优先按 metadata 查找，回退到目录扫描
- [ ] 旧工程在被引用到时才补 meta.json，不一次性批量补

### 阶段 3：新建即新规

- [ ] 选一个时间点，新视频按新规范命名（`yyyy-mm-dd-slug` 全小写英文）
- [ ] 直接生在 `projects/` 下
- [ ] 旧 22+ 工程**永远不迁移**，靠 meta.json 接入新体系
- [ ] CLAUDE.md / AGENTS.md 重写，从 metadata 渲染数字

## 当前已知风险

1. 跑 `refresh-renders-index.sh --apply` 时旧软链先清后建，期间几秒内 `renders/` 是空的
2. mv 散文档会断 `cyxj-new-video` skill 的引用 → 必须同步改 SKILL.md
3. 新规范命名 `yyyy-mm-dd-slug` 与现有 `分享会-01-clickup` 风格冲突 → 旧工程保留原名，只在 meta.json 里规范化

## 触发下一阶段的条件

- 阶段 1 → 阶段 2：当前 `2026-05-13/claude-design-codex-image/` 视频做完渲染掉
- 阶段 2 → 阶段 3：至少 3 条新视频按新 meta.json 跑过，schema 稳定

## 现有"目录式分类"如何过渡

不动它们。映射表：

| 旧目录 | 在新体系里的角色 | 工程 meta.json state |
|---|---|---|
| `2026-05-XX/<slug>/` | 活跃工作区 | in-progress |
| `参考库/我的作品/<日期>-<slug>/` | 完工存档 | done / archived |
| `归档/2026-05-03/<slug>/` | 旧成品 | archived |
| `归档/2026-05-09-探索/<slug>/` | 探索废稿 | draft（未完）或 archived（已结） |
| `归档/2026-05-10-探索/<slug>/` | 同上 | 同上 |

阶段 3 之后，AI 不再依赖目录位置区分状态，全部走 meta.json。
