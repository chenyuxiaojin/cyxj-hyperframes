# WORKLOG · 2026-06-17 · 绕开 Codex、官方 skill 改 GitHub 直连

> 交接 log。新对话从这里接着做「后面的适配」。已完成部分**别重做**；要做的是末尾「待办」两项。

## 一句话背景

hyperframes 工作台原来官方 skill 走「Codex 插件 cache → `official/` 本地镜像」。Codex 分发严重滞后 GitHub（停在 5 skill / GSAP-only），GitHub 上游已是 16 skill + Tailwind v4 + 多动画适配器。本次**复刻 Remotion 2026-06-14 的做法**：删 `official/`，改 `npx skills add heygen-com/hyperframes` 直连 GitHub。

## 已完成（DONE，工作树已改但**未 commit**）

1. **官方 skill GitHub 直连**：`npx skills add heygen-com/hyperframes --all` 装了 16 个 → 真身 `.agents/skills/<name>/`，`.claude/skills/<name>` 软链过去，`skills-lock.json`（16 条，进 git）是版本真源。升级 `npx skills update -p -y`，换机 `npx skills experimental_install`。
2. **删干净**：`official/` 整目录、`cyxj/scripts/sync-official-from-codex-cache.sh`、`skills-disabled-*`、lock 里 10 个废弃旧 skill、4 条悬空软链。
3. **接线文档重写**（official→GitHub）：CLAUDE.md / AGENTS.md / README.md / README.zh-CN.md / cyxj/README.md / cyxj/docs/ops.md / cyxj/docs/REFERENCE_INDEX.md / cyxj/rules/hyperframes/hyperframes-rules.md / cyxj/skills/cyxj-hyperframes-overlay/SKILL.md / cyxj/skills/cyxj-new-video/SKILL.md（已标 LEGACY 横幅）/ 视频项目/README.md / .gitignore。
4. **HARD_CONSTRAINTS.md 重核到 0.6.109**（40 条，证据全引本地 `.agents/skills/` 正文）：§28 推翻重写（media 必须 host root 直接子元素、禁 wrapper）、§20 ceil→floor、§21 补 performance.now、§23 改 transform scale、新增 §38（sub-comp style/script 进 template）/§39（Tailwind v4 运行时硬规则）/§40（确定性扩展+GSAP白名单）、11 处旧来源锚点改指新文件。**诚实标注**：lock 用 hash 无 semver；"21 条 lint 升 error" 仅 release note、正文未坐实，未写成 non-negotiable；§31/§33 标实战推断非官方。
5. **组件库=镜头库**：建 `templates/components/COMPONENTS.json`（7 零件注册表，对标 Remotion `scenes/sceneMap.ts`）+ `templates/components/README.md`（人读索引+登记仪式），CLAUDE.md 组件晋升规则改为单一真源 `templates/`、登记进注册表、停止 dual-write。
6. **与 Remotion 对比**：`cyxj/docs/ARCH_PARITY_REMOTION.md`（同构项 + 有意差异）。
7. **自审**：对抗式子代理审查 + P1 三项已修（§41 编号笔误改§40、rules 断链路径、ops 旧坐标）。终检：软链 17/17、lock 16、零悬空、真残留清零。

## 关键决策（新对话别再推翻/重议）

- `templates/` 是组件/模板的**单一真源**（`/new-video` 取源于此）；`cyxj/templates/` 是 99.9% 镜像、**待废弃**。
- `cyxj/` 用户层**不改名**（不像 Remotion 改 cyxj-remotion，因无新旧脑裂）。
- **不加 MCP**（官方文档已镜像在 `docs/hyperframes-official/`）。
- HF 动效验证**只走 preview 人眼**，禁 playwright 截图 / 禁 render mp4 当验证；**用户明确说 render 才 render**。

## ⬜ 待办（新对话要做的「后面的适配」）

### 待办 A — tutorial-8beat 适配 0.6.109 lint（优先）
> 后续更新：tutorial-8beat 模板已于 2026-06-17 删除（两份镜像皆删，无替代模板），不再适配，本待办作废。

0.6.109 lint 收紧后，冷启动模板报 **11 error + 157 warning**。在工程目录跑 `npx hyperframes lint` 复现。error 分布：
- **8× `font_family_without_font_face`**（`var(--f-zh)` 用了但无 `@font-face`）—— 01~08 各 beat composition
- **1× `google_fonts_import`**（index.html 从 fonts.googleapis.com 引字体；sandbox/offline render 会失败）
- **1× `root_composition_missing_data_start`**（index.html root `face-wrapper-stub` 缺 `data-start="0"`）
- **1× `requestanimationframe_in_composition`**（`08-outro.html` 用了 rAF，走 wall-clock 破坏帧捕获 —— 真确定性违规，对应 HARD_CONSTRAINTS §21）
- 157× `composition_self_attribute_selector`（warning，选择器匹配 block 自身 id，嵌两次会泄漏；可选修）

修法（**先 invoke gsap-skills + hyperframes-cli skill，按调试纪律先定位根因再改；改完 preview 人眼验证，别 render**）：
1. 字体：把 Google Fonts CDN 换成本地 `@font-face` + 捕获的 `.woff2`（含中文 `--f-zh` 字体），消掉 8+1 个字体 error。参考 HARD_CONSTRAINTS §8/§15。
2. `data-start`：给 index.html root 加 `data-start="0"`。
3. rAF：`08-outro.html` 里的 `requestAnimationFrame` 改成 GSAP tween / `onUpdate`（先看清那段动画逻辑在干嘛）。
- **目标树**：改**canonical `templates/tutorial-8beat/`**（若先做待办 B 合并，则只剩这一棵）。注意当前 `cyxj/templates/tutorial-8beat/` 还有一份镜像。

### 待办 B — 双模板树合并到单一真源（需先确认）
`templates/`（真源）vs `cyxj/templates/`（镜像，仅 3 处注释路径差异）。`/new-video` 取源 `templates/`，但 overlay skill 旧引用曾指 `cyxj/templates/`（已在 SKILL.md 改为 `templates/...` 仓库根路径）。Remotion 是单源。**合并 = 删 `cyxj/templates/` 镜像**（committed 文件，删前确认）。删前 grep 全仓对 `cyxj/templates/` 的引用并改指 `templates/`。

## 验收基线（改完后应保持）
```bash
cd ~/项目/视频制作台/hyperframes
npx hyperframes --version                 # 0.6.109
ls .claude/skills .agents/skills          # 各 17（16 官方 + cyxj-hyperframes-overlay），无悬空
python3 -c "import json;print(len(json.load(open('skills-lock.json'))['skills']))"  # 16
git status --short                         # 见下「未 commit 改动集」
```

## 未 commit 改动集（截至 2026-06-17）
M: .gitignore AGENTS.md CLAUDE.md README.md README.zh-CN.md cyxj/README.md cyxj/docs/{HARD_CONSTRAINTS,REFERENCE_INDEX,ops}.md cyxj/rules/hyperframes/hyperframes-rules.md cyxj/skills/cyxj-hyperframes-overlay/SKILL.md cyxj/skills/cyxj-new-video/SKILL.md skills-lock.json 视频项目/README.md
D: cyxj/scripts/sync-official-from-codex-cache.sh official/REUSE.md（official/ 整目录已删，本就 gitignore）
新增: cyxj/docs/ARCH_PARITY_REMOTION.md cyxj/docs/WORKLOG-2026-06-17-skills-github-migration.md templates/components/COMPONENTS.json templates/components/README.md
（gitignore 不显示：.agents/skills/ 16 真身 + .claude/skills/ 16 软链）

> 是否 commit 由用户定。规划文件在 `~/.claude/plans/remotion-codex-shiny-toast.md`。
