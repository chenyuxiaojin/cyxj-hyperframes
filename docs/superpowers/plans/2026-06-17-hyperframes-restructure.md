# hyperframes 工作台重构(中文桶 / 极致压缩)Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 把 hyperframes 工作台从英文混杂结构重构成一眼看懂的中文桶(制作规范/组件库/参考/资源库/视频项目),删去 cyxj 重复镜像与 legacy,保留全部自有资产。

**Architecture:** 用 `git mv` 搬动(保留历史),gitignored 重内容用普通 `mv`;引用改写走"显式旧→新映射 + 定向 sed(明确文件白名单)+ 双向 grep 验证",严禁全局替换误伤视频工程内部相对路径;入口文档结构描述真改,深层方法论只改路径。

**Tech Stack:** git、bash/zsh(zsh 数组注意分词)、sed、grep、ln、npx hyperframes(验证用)。

**配套 spec:** `cyxj/docs/RESTRUCTURE-2026-06-17-design.md`(执行中会随 cyxj/docs 搬到 制作规范/docs/)。

## Global Constraints

- **禁止全局 sed**:引用改写只作用于显式白名单文件;`视频项目/**`、`docs/hyperframes-official/**`、`.agents/skills/<官方真身>/**`、`参考/hyperframes-launches/**`、`参考/我的作品/**` 一行都不许动。
- **中文路径**:所有命令路径用双引号包裹,防 zsh/bash 分词;`for` 遍历用数组。
- **gitignored 内容删了不可 git 恢复**:`参考/我的作品/2026-05-02-claude-overlays-only/`(1.5G)、`资源库/录屏/`(mv) 属此类。overlays-only 用户已两次确认删除。
- **每个 Task 末尾验证通过才提交**;每个 commit 都是可 `git revert` 的原子改动。
- **官方层不碰**:`.agents/.claude/skills/` 里 16 个官方真身不动(只重指 overlay 软链)。

---

### Task 0: 固化干净基线

**Files:**
- 无新增;提交当前工作区已有的未提交改动(Codex→GitHub skills 迁移、删 official/、删 tutorial-8beat、新增 .codex/ 等)。

**Interfaces:**
- Produces: 一个干净的 baseline commit,后续重构若失败可 `git reset --hard` 回此。

- [ ] **Step 1: 看清当前未提交改动范围**

Run: `cd ~/项目/视频制作台/hyperframes && git status --short | wc -l && git status --short | head -40`
Expected: 列出已有的 M/D/?? 改动(skills-lock.json、official/ 删除、tutorial-8beat 删除、.codex/ 等)。

- [ ] **Step 2: 暂存全部并提交基线**

```bash
cd ~/项目/视频制作台/hyperframes
git add -A
git commit -m "chore: 固化 Codex→GitHub skills 迁移基线（重构前）

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>"
```

- [ ] **Step 3: 记下基线 commit 供回滚**

Run: `git rev-parse --short HEAD`
Expected: 输出一个短 hash;记在执行记录里(回滚锚点)。

---

### Task 1: 建中文桶骨架

**Files:**
- Create: `制作规范/`、`制作规范/skills/`、`组件库/`、`资源库/`、`参考/inspirations/`(`参考/` 已存在)

**Interfaces:**
- Produces: 空目录骨架,供 Task 2-5 的 `git mv` 落点。

- [ ] **Step 1: 建目录**

```bash
cd ~/项目/视频制作台/hyperframes
mkdir -p 制作规范/skills 组件库 资源库 参考/inspirations
```

- [ ] **Step 2: 验证存在**

Run: `ls -d 制作规范 制作规范/skills 组件库 资源库 参考/inspirations`
Expected: 五个目录都在,无报错。

---

### Task 2: 搬「制作规范」层

**Files:**
- Move: `cyxj/docs/` → `制作规范/docs/`;`cyxj/notes/` → `制作规范/notes/`;`cyxj/rules/` → `制作规范/rules/`;`cyxj/skills/cyxj-hyperframes-overlay/` → `制作规范/skills/cyxj-hyperframes-overlay/`;`cyxj/README.md` → `制作规范/README.md`;`cyxj/scripts/lint-dead-css.sh` → `scripts/lint-dead-css.sh`

**Interfaces:**
- Consumes: Task 1 的骨架。
- Produces: `制作规范/` 内容就位;overlay skill 真身到新位置(Task 6 重指软链)。

- [ ] **Step 1: git mv 规范四件套 + README**

```bash
cd ~/项目/视频制作台/hyperframes
git mv cyxj/docs 制作规范/docs
git mv cyxj/notes 制作规范/notes
git mv cyxj/rules 制作规范/rules
git mv cyxj/skills/cyxj-hyperframes-overlay 制作规范/skills/cyxj-hyperframes-overlay
git mv cyxj/README.md 制作规范/README.md
git mv cyxj/scripts/lint-dead-css.sh scripts/lint-dead-css.sh
```

- [ ] **Step 2: 验证搬动结果**

Run: `ls 制作规范/ 制作规范/docs 制作规范/skills && ls scripts/lint-dead-css.sh`
Expected: docs/notes/rules/skills/README.md 都在 制作规范/;lint-dead-css.sh 在 scripts/。

- [ ] **Step 3: 提交**

```bash
git add -A && git commit -m "refactor: 搬动 cyxj 规范层 → 制作规范/

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>"
```

---

### Task 3: 搬「组件库」+「参考」

**Files:**
- Move: `templates/components/*` → `组件库/`;`templates/inspirations/` → `参考/inspirations/`(覆盖空骨架);`templates/catalog.json` → `参考/catalog.json`

**Interfaces:**
- Produces: `组件库/`(7 组件 + COMPONENTS.json + README)、`参考/inspirations/`、`参考/catalog.json`。

- [ ] **Step 1: git mv 组件库**

```bash
cd ~/项目/视频制作台/hyperframes
git mv templates/components/* 组件库/
git mv templates/inspirations 参考/inspirations_tmp && rmdir 参考/inspirations && mv 参考/inspirations_tmp 参考/inspirations && git add -A
git mv templates/catalog.json 参考/catalog.json
```
> 注:`参考/inspirations` 空骨架先让位再搬,避免 `git mv` 报"目标已存在"。

- [ ] **Step 2: 验证**

Run: `ls 组件库/ && ls 参考/inspirations/ && ls 参考/catalog.json && ls templates/ 2>&1`
Expected: 组件库有 cc-window/COMPONENTS.json 等;参考/inspirations 有 5 个;catalog.json 在;templates/ 已空或只剩空目录。

- [ ] **Step 3: 提交**

```bash
git add -A && git commit -m "refactor: templates/components → 组件库/，inspirations+catalog → 参考/

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>"
```

---

### Task 4: 搬「资源库」

**Files:**
- Move: `assets/logos/` → `资源库/logos/`(git mv,SVG 进 git);`素材/录屏/` → `资源库/录屏/`(普通 mv,gitignored)

**Interfaces:**
- Produces: `资源库/logos/`(34 SVG + LOGOS.md)、`资源库/录屏/`(本地素材)。

- [ ] **Step 1: git mv logos + 普通 mv 录屏**

```bash
cd ~/项目/视频制作台/hyperframes
git mv assets/logos 资源库/logos
mkdir -p 资源库/录屏 && mv 素材/录屏/* 资源库/录屏/ 2>/dev/null; rmdir 素材/录屏 素材 2>/dev/null || true
```

- [ ] **Step 2: 验证**

Run: `ls 资源库/logos/*.svg | wc -l && ls 资源库/录屏/ && ls 素材 2>&1`
Expected: 34 个 svg;录屏文件在 资源库/录屏/;素材/ 已不存在。

- [ ] **Step 3: 提交**

```bash
git add -A && git commit -m "refactor: assets/logos → 资源库/logos，素材/录屏 → 资源库/录屏

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>"
```

---

### Task 5: 删重复镜像 + legacy + overlays-only

**Files:**
- Delete: `cyxj/templates/`、`cyxj/assets/`、`cyxj/skills/cyxj-add-block/`、`cyxj/skills/cyxj-new-video/`、`参考/我的作品/2026-05-02-claude-overlays-only/`、空壳 `cyxj/`、空壳 `templates/`、空壳 `assets/`

**Interfaces:**
- Produces: 去重后单一真源;cyxj/ templates/ assets/ 顶层消失。

- [ ] **Step 1: 删前确认 overlays-only 不可恢复(gitignored)**

Run: `du -sh "参考/我的作品/2026-05-02-claude-overlays-only" && git check-ignore "参考/我的作品/2026-05-02-claude-overlays-only" && echo "确认:gitignored,删除不可 git 恢复(用户已确认删)"`
Expected: ~1.5G;check-ignore 命中;打印确认行。**此步若用户临时改主意,停。**

- [ ] **Step 2: 删除**

```bash
cd ~/项目/视频制作台/hyperframes
git rm -r cyxj/templates cyxj/assets cyxj/skills/cyxj-add-block cyxj/skills/cyxj-new-video
rm -rf "参考/我的作品/2026-05-02-claude-overlays-only"
rmdir cyxj/skills cyxj 2>/dev/null || true
rmdir templates assets 2>/dev/null || true
```

- [ ] **Step 3: 验证四个顶层壳已消失、真源仍在**

Run: `ls cyxj templates assets 2>&1; echo "---"; ls 组件库/COMPONENTS.json 资源库/logos/claude.svg 制作规范/skills/cyxj-hyperframes-overlay/SKILL.md`
Expected: cyxj/templates/assets 报 "No such file";三个真源文件都在。

- [ ] **Step 4: 提交**

```bash
git add -A && git commit -m "refactor: 删 cyxj 重复镜像 + 2 个 legacy skill + overlays-only(1.5G)

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>"
```

---

### Task 6: 重指 overlay 软链(功能性,必须)

**Files:**
- Modify: `.agents/skills/cyxj-hyperframes-overlay`(软链)、`.claude/skills/cyxj-hyperframes-overlay`(软链)

**Interfaces:**
- Consumes: Task 2 把 overlay 真身搬到 `制作规范/skills/cyxj-hyperframes-overlay`。
- Produces: 两个软链指向新真身,skill 系统可用。

- [ ] **Step 1: 重指两个软链**

```bash
cd ~/项目/视频制作台/hyperframes
ln -sfn ../../制作规范/skills/cyxj-hyperframes-overlay .agents/skills/cyxj-hyperframes-overlay
ln -sfn ../../制作规范/skills/cyxj-hyperframes-overlay .claude/skills/cyxj-hyperframes-overlay
```

- [ ] **Step 2: 验证软链解析**

Run: `readlink .agents/skills/cyxj-hyperframes-overlay && readlink .claude/skills/cyxj-hyperframes-overlay && ls -L .claude/skills/cyxj-hyperframes-overlay/SKILL.md`
Expected: 两个都指 `../../制作规范/skills/cyxj-hyperframes-overlay`;`ls -L` 能读到 SKILL.md(软链不悬空)。

- [ ] **Step 3: 提交**

```bash
git add -A && git commit -m "fix: overlay skill 软链重指 制作规范/skills/

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>"
```

---

### Task 7: 定向改写「功能性」路径引用(脚本 / 注册表 / hook / agent / .gitignore)

**Files:**
- Modify: `scripts/refresh-catalog.sh`、`scripts/refresh-zero-usage.sh`、`scripts/sync-tokens.sh`、`scripts/hf-lint-hook.sh`、`组件库/COMPONENTS.json`、`.claude/commands/new-video.md`、`.claude/agents/composition-reviewer.md`、`.codex/agents/composition-reviewer.toml`、`.gitignore`

**Interfaces:**
- Produces: 所有"被程序读取"的路径指向新结构,脚本/hook/skill 可运行。

- [ ] **Step 1: 改 4 个脚本里写死的路径**

```bash
cd ~/项目/视频制作台/hyperframes
# catalog 落点
sed -i '' 's#templates/catalog\.json#参考/catalog.json#g' scripts/refresh-catalog.sh scripts/refresh-zero-usage.sh
# REFERENCE_INDEX 位置
sed -i '' 's#cyxj/docs/REFERENCE_INDEX\.md#制作规范/docs/REFERENCE_INDEX.md#g' scripts/refresh-zero-usage.sh
# tokens 单源
sed -i '' 's#templates/components/xcyj-tokens#组件库/xcyj-tokens#g' scripts/sync-tokens.sh
# hf-lint-hook:HARD_CONSTRAINTS 位置 + 跳过模式
sed -i '' 's#cyxj/docs/HARD_CONSTRAINTS\.md#制作规范/docs/HARD_CONSTRAINTS.md#g' scripts/hf-lint-hook.sh
sed -i '' 's#\*/templates/\*#*/组件库/*#g' scripts/hf-lint-hook.sh
```

- [ ] **Step 2: 改 COMPONENTS.json 与 agent/command 里的路径(如有)**

Run（先看命中什么再改）: `grep -nE "cyxj/|templates/|assets/logos|素材/" 组件库/COMPONENTS.json .claude/commands/new-video.md .claude/agents/composition-reviewer.md .codex/agents/composition-reviewer.toml`
然后对每个命中行用 sed 按映射表替换(`cyxj/docs→制作规范/docs`、`templates/components→组件库`、`templates/inspirations→参考/inspirations`、`templates/catalog.json→参考/catalog.json`、`assets/logos→资源库/logos`、`cyxj/skills/cyxj-hyperframes-overlay→制作规范/skills/cyxj-hyperframes-overlay`)。

- [ ] **Step 3: 改 .gitignore 两行**

```bash
sed -i '' 's#^templates/\*\*/\.claude/#组件库/**/.claude/#' .gitignore
sed -i '' 's#^/素材/录屏/#/资源库/录屏/#' .gitignore
```

- [ ] **Step 4: 验证脚本仍能跑(干跑/读路径)**

Run: `bash scripts/refresh-catalog.sh && ls -la 参考/catalog.json`
Expected: 脚本无报错,写出/更新 `参考/catalog.json`。
Run: `grep -nE "templates/|cyxj/docs|素材/" scripts/*.sh .gitignore`
Expected: 无残留(或仅注释性叙述,逐条确认)。

- [ ] **Step 5: 提交**

```bash
git add -A && git commit -m "fix: 脚本/注册表/hook/.gitignore 路径指向新中文桶

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>"
```

---

### Task 8: 定向改写「文档」路径引用(深层方法论文档,只换路径)

**Files:**
- Modify: `制作规范/docs/*.md`、`制作规范/notes/*.md`、`制作规范/rules/**/*.md`、`组件库/**/*.md`、`组件库/COMPONENTS.json`、`参考/inspirations/**/*.md`(全部排除 视频项目/docs官方镜像/上游)

**Interfaces:**
- Produces: 方法论/规则文档里的路径引用全部指向新结构(不动叙述措辞)。

- [ ] **Step 1: 构造白名单文件清单**

```bash
cd ~/项目/视频制作台/hyperframes
FILES=$(grep -rIlE "cyxj/|templates/|assets/logos|素材/" \
  --include='*.md' --include='*.json' \
  制作规范 组件库 参考/inspirations 2>/dev/null)
echo "$FILES"
```
Expected: 列出需改的方法论/规则/组件文档(不含视频项目、官方镜像、上游)。

- [ ] **Step 2: 对白名单按映射表定向替换(顺序:具体在前)**

```bash
for f in $FILES; do
  sed -i '' \
    -e 's#cyxj/templates/components#组件库#g' \
    -e 's#cyxj/templates/inspirations#参考/inspirations#g' \
    -e 's#cyxj/assets/logos#资源库/logos#g' \
    -e 's#cyxj/docs#制作规范/docs#g' \
    -e 's#cyxj/notes#制作规范/notes#g' \
    -e 's#cyxj/rules#制作规范/rules#g' \
    -e 's#cyxj/skills/cyxj-hyperframes-overlay#制作规范/skills/cyxj-hyperframes-overlay#g' \
    -e 's#cyxj/scripts/lint-dead-css\.sh#scripts/lint-dead-css.sh#g' \
    -e 's#templates/components#组件库#g' \
    -e 's#templates/inspirations#参考/inspirations#g' \
    -e 's#templates/catalog\.json#参考/catalog.json#g' \
    -e 's#assets/logos#资源库/logos#g' \
    -e 's#素材/录屏#资源库/录屏#g' \
    "$f"
done
```

- [ ] **Step 3: 残留检查 + 误伤检查**

Run: `grep -rInE "cyxj/|templates/components|templates/inspirations|templates/catalog|assets/logos|素材/" 制作规范 组件库 参考/inspirations`
Expected: 无命中,或仅剩"cyxj 用户层"这类概念性散文(交给 Task 9 入口文档处理;此处方法论文档内若有,逐条人工判断)。
Run: `git diff --name-only | grep -E "视频项目/|docs/hyperframes-official/"`
Expected: **空**(这次没碰视频工程和官方镜像)。

- [ ] **Step 4: 提交**

```bash
git add -A && git commit -m "docs: 方法论/规则/组件文档路径引用迁到中文桶

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>"
```

---

### Task 9: 重写入口文档结构描述(CLAUDE.md / AGENTS.md / README / ops / REFERENCE_INDEX)

**Files:**
- Modify: `CLAUDE.md`、`AGENTS.md`、`README.md`、`README.zh-CN.md`、`制作规范/docs/ops.md`、`制作规范/docs/REFERENCE_INDEX.md`

**Interfaces:**
- Produces: 入口文档的"结构/分层/关键路径"描述与新中文桶一致、语句通顺(路径 + 叙述都改)。

- [ ] **Step 1: 逐文件读现状结构段落**

Run: `grep -nE "三层|cyxj|templates|assets|official|官方层|关键路径|目录" CLAUDE.md AGENTS.md README.md README.zh-CN.md 制作规范/docs/ops.md 制作规范/docs/REFERENCE_INDEX.md | head -60`
Expected: 定位到所有描述旧结构的段落。

- [ ] **Step 2: 改写 CLAUDE.md 结构段**

把"三层结构 / cyxj 用户层 / templates / assets / 关键路径速查 / 软链全表"等改成新中文桶叙述:
- 分层叙述:官方 skill 层(`.agents/.claude/skills`,gitignored)/ `制作规范/`(规范+notes+rules+overlay skill)/ `组件库/`/ `参考/`/ `资源库/`/ `视频项目/`。
- 关键路径速查表逐行换新路径(`制作规范/docs/HARD_CONSTRAINTS.md`、`组件库/COMPONENTS.json`、`资源库/logos/`、`参考/inspirations/`、`参考/catalog.json` 等)。
- 软链全表:overlay 真身 `制作规范/skills/cyxj-hyperframes-overlay`。
- 组件晋升规则:`templates/components/` → `组件库/`。

- [ ] **Step 3: 同法改写 AGENTS.md / README.md / README.zh-CN.md / ops.md / REFERENCE_INDEX.md**

每个文件把结构描述、目录表、路径表对齐新中文桶;ops.md 的"软链全表 / 维护节奏"路径更新;REFERENCE_INDEX.md 的零件/skill 索引路径更新。

- [ ] **Step 4: 全仓终检**

Run: `grep -rInE "(^|[^-])\bcyxj/|templates/components|templates/inspirations|assets/logos\b" CLAUDE.md AGENTS.md README.md README.zh-CN.md 制作规范/docs/ops.md 制作规范/docs/REFERENCE_INDEX.md`
Expected: 无死路径(残留仅限"历史上叫 cyxj"这类有意的沿革叙述)。

- [ ] **Step 5: 提交**

```bash
git add -A && git commit -m "docs: 入口文档(CLAUDE/AGENTS/README/ops/REFERENCE_INDEX)结构描述对齐中文桶

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>"
```

---

### Task 10: 全量验收

**Files:** 无改动,只验证。

**Interfaces:**
- Consumes: 前面所有 Task。
- Produces: spec §9 验收清单全过的确认。

- [ ] **Step 1: 顶层结构核对**

Run: `ls -1 ~/项目/视频制作台/hyperframes | grep -vE '^\.'`
Expected: 含 `制作规范 组件库 参考 资源库 视频项目 docs scripts`;不含 `cyxj templates assets 素材`。

- [ ] **Step 2: 软链 + skill 可用**

Run: `ls -L .agents/skills/cyxj-hyperframes-overlay/SKILL.md .claude/skills/cyxj-hyperframes-overlay/SKILL.md`
Expected: 两个都能读到,无悬空。

- [ ] **Step 3: 视频工程未被误伤 + lint 通过**

Run: `git log --oneline -8 --name-only | grep -E "视频项目/.*(html|css|json)" | head` (应为空) ; `cd 视频项目/已发布/2026-05-04-claude-19-tips && npx hyperframes lint; cd ~/项目/视频制作台/hyperframes`
Expected: 重构提交里不含视频工程内部文件;lint 跑通(工程自包含未坏)。

- [ ] **Step 4: 脚本/hook 路径活着**

Run: `bash scripts/refresh-catalog.sh && bash scripts/refresh-zero-usage.sh 2>&1 | tail -3`
Expected: 两脚本无"找不到路径"类报错。

- [ ] **Step 5: 残留死路径终检(全仓,排除上游/官方镜像/视频工程)**

Run: `grep -rIlE "cyxj/|/templates/|/assets/logos|/素材/" --include='*.md' --include='*.sh' --include='*.json' --include='*.toml' . | grep -vE "视频项目/|docs/hyperframes-official/|参考/hyperframes-launches/|参考/我的作品/|.agents/skills/"`
Expected: 空(或仅有意保留的沿革叙述,逐条确认)。

- [ ] **Step 6: 收尾提交(若验收中有微调)**

```bash
git add -A && git commit -m "chore: 重构验收微调" 2>/dev/null || echo "无需收尾提交"
```

---

## Self-Review(写完核对)

- **Spec 覆盖**:§3 目标结构→Task1-5;§4 映射→Task2-4;§5 删除→Task5;§6 引用策略→Task7-9;§7 软链/脚本/gitignore→Task6-7;§9 验收→Task10。✅ 全覆盖。spec §11"纯路径"被 Task9 有意扩展(入口文档叙述也改)——已在交付说明里向用户标注。
- **Placeholder**:Task7 Step2 / Task9 Step2-3 是"按映射表逐条改",非占位——因入口文档措辞需人工判断,无法预写死代码,但给了明确映射表与命中定位命令。可接受。
- **类型/命名一致**:映射表(组件库/制作规范/资源库/参考/inspirations/参考/catalog.json)在 Task7/8/9 中用词一致。✅
- **风险兜底**:Task0 基线 commit + 每 Task 原子 commit;Task8 Step3 双向 grep(残留 + 误伤)。

## 回滚

任一步出错:`git reset --hard <Task0 基线 hash>`。注意 gitignored 的 overlays-only(已删)与录屏(已 mv)不随 git 回滚——overlays-only 删除前用户已确认;录屏只是改位置,reset 后从 `资源库/录屏/` 手动搬回 `素材/录屏/` 即可(文件未丢)。
