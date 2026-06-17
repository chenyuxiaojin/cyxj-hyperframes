# hyperframes 工作台重构设计(中文桶 / 极致压缩)

- 日期:2026-06-17
- 作者:小陈 + Claude(brainstorming 产出)
- 状态:**待用户复核** → 复核通过后转 writing-plans 出执行计划
- 本文件位置:`制作规范/docs/`(重构时随 `制作规范/docs → 制作规范/docs` 一起搬走)

## 1. 背景与目标

工作台经过多轮迭代后"混入太多东西",顶层目录英文化、且 `cyxj/` 把 `templates/`、`assets/` 整份镜像了一遍(同样的组件/inspirations/logo 存了两份),用户打开后"无从下手"。

**目标**:极致压缩成一眼看懂的中文桶,服务对象=**自己用为主、同时开源**。原则:

- 结构按"自己一眼能找到"设计,顶层用中文桶名(用户心智词)。
- 因为开源,**重的私人媒体不污染仓库**(本来 `*.mp4/mov` 已 gitignore,录屏/成片不进 git)。
- **去重**:同一份东西只留一处真源。

## 2. 现状(实测,2026-06-17)

物理大小:`参考/` 1.7G + `视频项目/` 1.4G ≈ 占全部;其余(规范/组件/logo/脚本)合计 < 100M。

混乱根源:
- `cyxj/templates/`(components + inspirations)= 顶层 `templates/` 的**重复镜像**。
- `资源库/logos/` = 顶层 `资源库/logos/` 的**重复镜像**。
- `cyxj/` 里"制作规范(docs/notes/rules)"与"重复素材镜像"混在一起。
- `参考/我的作品/` 含一条 1.5G 的 `2026-05-02-claude-overlays-only`(导出成片大文件)。
- legacy skill `cyxj-add-block`、`cyxj-new-video` 已被 overlay 取代,仅历史参考。

引用成本(实测):规则层约 40 个文件需改写;`cyxj/` 被引用 146 次、`templates/` 176 次、`组件库` 87 次、`资源库/logos` 14 次。
⚠️ 注意:`assets/`、`templates/` 的引用里**混着视频工程内部的相对路径**(如某工程 `index.html` 里的 `assets/xcyj-tokens.css`),那是工程自包含的,**绝不能改**。所以禁止全局 sed。

## 3. 目标顶层结构

```
hyperframes/
├─ CLAUDE.md / AGENTS.md / README.md / README.zh-CN.md / LICENSE / llms.txt / skills-lock.json / .gitignore
│
├─ 制作规范/      你的生产大脑
│  ├─ docs/        ← 制作规范/docs/*(HARD_CONSTRAINTS / REFERENCE_INDEX / ops / STYLE_BORROW_PLAYBOOK /
│  │                  ARCH_PARITY_REMOTION / OFFICIAL_DOCS_VALUE_INDEX / WORKLOG-* / lottie-davinci-experiment/ / 本 spec)
│  ├─ notes/       ← 制作规范/notes/*(MY_VISUAL_DNA / MY_MOTION_NOTES / TEMPLATE_USAGE)
│  ├─ rules/       ← 制作规范/rules/*(hyperframes/ + shared/)
│  └─ skills/
│     └─ cyxj-hyperframes-overlay/   ← 制作规范/skills/cyxj-hyperframes-overlay
├─ 组件库/        可复用镜头组
│  └─ (cc-window / orbit-dots / pulse-bars / shake-error / spec-fill / text-effects / xcyj-tokens / COMPONENTS.json / README.md)
│                  ← 组件库/*
├─ 参考/
│  ├─ inspirations/      ← 参考/inspirations/*(5 个转译参考)
│  ├─ catalog.json       ← 参考/catalog.json(官方 catalog 索引)
│  ├─ hyperframes-launches/   原样不动(上游范例,自带 .git)
│  └─ 我的作品/          原样保留(删 overlays-only 一条,见 §5)
├─ 资源库/
│  ├─ logos/       ← 资源库/logos/*(34 个 SVG + LOGOS.md)
│  └─ 录屏/        ← 资源库/录屏/*(gitignored,本地)
├─ 视频项目/      原样不动(在制 / 已发布)
├─ docs/          官方文档镜像(refresh-docs.sh 生成,保留英文,不改名)
├─ scripts/       维护脚本(基础设施,保留英文)
└─〔官方层·半隐藏,固定位置不能改名〕
   .agents/skills/  .claude/skills/  .codex/
```

`cyxj/`、`templates/`、`assets/`、`素材/` 四个顶层目录搬空后删除。

## 4. 搬家映射表

| # | 现路径 | 新路径 | 方式 |
|---|---|---|---|
| 1 | `制作规范/docs/` | `制作规范/docs/` | `git mv` |
| 2 | `制作规范/notes/` | `制作规范/notes/` | `git mv` |
| 3 | `制作规范/rules/` | `制作规范/rules/` | `git mv` |
| 4 | `制作规范/skills/cyxj-hyperframes-overlay/` | `制作规范/skills/cyxj-hyperframes-overlay/` | `git mv` |
| 5 | `scripts/lint-dead-css.sh` | `scripts/lint-dead-css.sh`(并入顶层 scripts) | `git mv` |
| 6 | `cyxj/README.md` | `制作规范/README.md` | `git mv` |
| 7 | `组件库/` 全部 | `组件库/` | `git mv` |
| 8 | `参考/inspirations/` | `参考/inspirations/` | `git mv` |
| 9 | `参考/catalog.json` | `参考/catalog.json` | `git mv` |
| 10 | `资源库/logos/` | `资源库/logos/` | `git mv` |
| 11 | `资源库/录屏/` | `资源库/录屏/` | 普通 `mv`(gitignored) |
| 12 | 空壳 `cyxj/` `templates/` `assets/` `素材/` | 删除 | `rmdir` |

## 5. 删除清单(破坏性,已获用户确认)

- `cyxj/templates/`(components + inspirations 重复镜像)—— 真源在 §4 #7/#8。
- `资源库/logos/`(logo 重复镜像)—— 真源在 §4 #10。
- `cyxj/skills/cyxj-add-block/`、`cyxj/skills/cyxj-new-video/`(legacy,已被 overlay 取代)。
- `参考/我的作品/2026-05-02-claude-overlays-only/`(1.5G 整条删,用户已在视频项目删过同名源工程)。

## 6. 引用改写策略(核心:不许全局 sed)

1. 建**显式旧→新映射表**(即 §4),逐条处理。
2. 改写**只作用于规则层文件**:`CLAUDE.md`、`AGENTS.md`、`README*.md`、`scripts/*.sh`、`.claude/`(settings/agents/commands)、`.codex/`、`制作规范/` 下全部 `.md`、`组件库/` 下 `.md` 与 `COMPONENTS.json`、`参考/inspirations/` 下 `.md`。
3. **排除**:`视频项目/**`(工程内部相对路径)、`docs/hyperframes-official/**`(官方镜像)、`.agents/skills/<官方真身>/**`、`参考/hyperframes-launches/**`。
4. 替换后**双向 grep 验证**:
   - 残留检查:规则层文件里不应再出现 `cyxj/`、`templates/`、`资源库/logos`、`素材/`(除非是历史叙述,逐条人工确认)。
   - 误伤检查:`视频项目/**` 与 `docs/hyperframes-official/**` 的 diff 必须为空(这次重构一行都不该动它们)。

## 7. 具体改动点清单

**软链(进 git,必须重指)**:
- `.agents/skills/cyxj-hyperframes-overlay` → `../../制作规范/skills/cyxj-hyperframes-overlay`
- `.claude/skills/cyxj-hyperframes-overlay` → `../../制作规范/skills/cyxj-hyperframes-overlay`

**脚本路径写死处**:
- `scripts/refresh-catalog.sh`:`参考/catalog.json` → `参考/catalog.json`(3 处)
- `scripts/refresh-zero-usage.sh`:`参考/catalog.json` → `参考/catalog.json`;`制作规范/docs/REFERENCE_INDEX.md` → `制作规范/docs/REFERENCE_INDEX.md`
- `scripts/sync-tokens.sh`:`组件库/xcyj-tokens/...` → `组件库/xcyj-tokens/...`
- `scripts/hf-lint-hook.sh`:跳过模式 `*/templates/*` → `*/组件库/*`、`*/参考/*`(参考已在);`制作规范/docs/HARD_CONSTRAINTS.md` → `制作规范/docs/HARD_CONSTRAINTS.md`
- `scripts/refresh-docs.sh`:目标 `docs/hyperframes-official` **不变**。

**.gitignore**:
- 第 68 行 `templates/**/.claude/` → `组件库/**/.claude/`(及 `参考/inspirations/**/.claude/` 如有)
- 第 98 行 `/资源库/录屏/` → `/资源库/录屏/`
- `!**/assets/...` 白名单是工程相对 glob,**不动**(视频工程内部 assets 不受影响)。

**hook 配置**:`.claude/settings.json`、`.codex/hooks.json` 里若引用 `scripts/hf-*.sh`(相对路径)不受影响;若有写死 `cyxj/`/`templates/` 路径需同步改。

## 8. 分步执行顺序(每步可回滚)

0. **先把当前未提交的迁移(Codex→GitHub skills、删 official/、删 tutorial-8beat 等)单独 commit 成干净基线**,让本次重构成为独立、可整体回滚的一次改动。
1. 建 `制作规范/`、`组件库/`、`资源库/`、`参考/inspirations/` 目录骨架。
2. 按 §4 用 `git mv` 搬动(录屏用普通 mv)。
3. 执行 §5 删除。
4. 重指软链(§7)。
5. 改写引用(§6 策略)。
6. 更新脚本 / .gitignore / hook(§7)。
7. 删空壳目录。
8. 跑 §9 验证。
9. 一次性 commit 重构。

## 9. 验证清单(全过才算完成)

- [ ] `readlink` 两个 overlay 软链 → 指向 `制作规范/skills/...` 且能解析(`ls -L` 不报错)。
- [ ] 残留 grep:规则层无遗留旧路径(`cyxj/` `templates/` `资源库/logos` `素材/`)。
- [ ] 误伤 grep:`git diff` 不含 `视频项目/` 内部文件、不含 `docs/hyperframes-official/`。
- [ ] `cd 视频项目/已发布/2026-05-04-claude-19-tips && npx hyperframes lint` 仍跑通(工程自包含未被破坏)。
- [ ] `bash scripts/refresh-catalog.sh` 能写到 `参考/catalog.json`(路径已更新)。
- [ ] hf-lint-hook 在改 `视频项目/**/compositions/*.html` 时仍触发、在 `参考/**` 仍跳过。
- [ ] Claude/Codex 重新进入仓库能识别 overlay skill(软链 + 名字 `cyxj-*` 仍在 .gitignore 白名单)。

## 10. 回滚

- 重构前先 commit 基线(§8.0)。本次重构若出问题:`git reset --hard <基线>` + 恢复 gitignored 的普通 mv(录屏可从原位置 git? 否,gitignored → 需手动备份;执行前对 `资源库/录屏/` 与待删的 `overlays-only` 先确认用户不需要再删)。

## 11. 不在本次范围

- 不碰视频工程内部任何文件(在制 / 已发布原样)。
- 不重写 CLAUDE.md / 文档的**内容**,只改其中的**路径引用**(内容刷新另起任务)。
- `docs/hyperframes-official/` 官方镜像不动。
- `参考/我的作品/` 除 overlays-only 外其余快照保留(瘦身另议)。

## 风险

- 改名波及面大(~40 文件、数百处引用),最大风险是误伤工程内部相对路径 → 用 §6 双向验证兜底。
- 中文目录名 + UTF-8:脚本里路径需确保引号包裹,避免分词。
