# 参考工程索引 (REFERENCE_INDEX)

> **入口文件**。做新视频前先扫这里：找参考工程、找零件。
>
> 📅 最后更新：2026-06-17（重构清理，删废弃引用）· 当前可参考工程见下 + catalog 零件索引（完整清单以 `参考/catalog.json` 为准）+ 官方文档镜像

---

## 一、可参考的工程

> ⚠️ 2026-06-17 重构后大幅瘦身:原 `hyperframes-student-kit/` 子模块已废弃移除,`videos/` 目录已并入 `视频项目/`。下面是**当前仓库里真实存在**的可参考工程。

### 可直接 cd preview 跑的完整工程（有源码）

| 工程 | 比例 | 时长 | 看点 |
|---|---|---|---|
| `视频项目/已发布/2026-05-04-claude-19-tips/` | 16:9 | ~7.5 分钟 | 28 comp，一招一节，cc-window 终端 UI 体系，**你的长教程基线 + DNA/运镜沉淀源** |
| `参考/hyperframes-launches/hyperframes-launch/` | 16:9 | 49.77s | 玻璃态 UI + 多技术堆栈，**HeyGen 官方标杆** |
| `参考/hyperframes-launches/timeline-launch/` | 16:9 | 33.53s | 互动 UI + 反转点笑点，故事弧 |
| `参考/hyperframes-launches/website-to-hyperframes/` | 16:9 | ~61s | 网站截图变身视频，多色彩面板 |

### 历史作品快照（`参考/我的作品/`，仅成片/截图，无源码，只作视觉参考）

> 这些目录是过往作品的 assets / renders / captures / final.mp4 快照,**没有 index.html、不能 preview**,只能翻成片看效果:
>
> `2026-05-04-claude-19-tips-hf/`、`2026-05-02-claude-demo-v2/`、`2026-05-02-codex-claude-intro/`、`2026-05-09-N1-1-mywebsite/`、`2026-05-09-prompt-video-showcase/`、`2026-05-09-分享会-{01-clickup,02-claude-edit,03-linear-promo}/`

---

## 二、Catalog 零件（官方 catalog；完整清单与数量以 `参考/catalog.json` 为准，下表只列常用）

> 用 `npx hyperframes add <name>` 装到工程的 `compositions/components/`。
> 完整 metadata 看 `参考/catalog.json`。月度刷新跑 `bash scripts/refresh-catalog.sh`。

### 🌟 转场效果（最高频，27 个）

**单效果转场（shader 类，14 个）**——独立装一个用一种效果：

- `whip-pan` — 运动模糊摇移（最适合教程节奏切换）
- `flash-through-white` — 闪白炸场
- `cinematic-zoom` — 推近过渡
- `sdf-iris` — 光圈收缩
- `glitch` — 故障特效
- `light-leak` — 漏光
- `chromatic-radial-split` — 色差径向分裂
- `swirl-vortex` — 漩涡
- `ripple-waves` — 涟漪
- `domain-warp-dissolve` — 域扭曲溶解
- `ridged-burn` — 灼烧边缘
- `gravitational-lens` — 引力透镜
- `thermal-distortion` — 热扭曲
- `cross-warp-morph` — 交叉变形

**整套转场包（13 个）**——一次装一整个风格的多种转场：

- `transitions-3d` — 3D 转场套装
- `transitions-blur` — 模糊系列
- `transitions-cover` — 遮盖系列
- `transitions-destruction` — 破坏系列
- `transitions-dissolve` — 溶解系列
- `transitions-distortion` — 扭曲系列
- `transitions-grid` — 网格系列
- `transitions-light` — 光效系列
- `transitions-mechanical` — 机械系列
- `transitions-other` — 杂项系列
- `transitions-push` — 推移系列
- `transitions-radial` — 径向系列
- `transitions-scale` — 缩放系列

### 📱 社交媒体 UI 卡片（7 个）

教程视频里出现"在 Instagram 关注我"或者"看下这条评论"时直接装：

- `instagram-follow` — Instagram 关注卡
- `tiktok-follow` — TikTok 关注卡
- `yt-lower-third` — YouTube 下三分之一字条
- `x-post` — X (Twitter) 帖子卡
- `reddit-post` — Reddit 帖子卡
- `spotify-card` — Spotify 正在播放
- `macos-notification` — macOS 通知

### 🎬 落版 / 品牌（1 个）

- `logo-outro` — Logo 落版（任何片尾必备）

### 📊 数据可视化（2 个）

- `data-chart` — 动画柱状 + 折线图（NYT 风格 + 数值标签）
- `flowchart` — 流程图（SVG 连线 + 决策树）

### 📦 应用 / 产品展示（6 个）

- `app-showcase` — App 3D 展示
- `ui-3d-reveal` — UI 3D 揭示
- `goonvpn-youtube-spot` — VPN 产品 YouTube 广告样式
- `north-korea-locked-down` — 地图标注秀场（YouTube 风）
- `apple-money-count` — 数字滚动金钱秀（YouTube 风）
- `nyc-paris-flight` — 旅行/航线地图秀场（YouTube 风）

### 🎨 视觉装饰 components（3 个）

components 跟 blocks 不同：components 是"叠加层"，全局生效；blocks 是"场景片段"。

- `grain-overlay` — 颗粒覆盖（**MOTION_PHILOSOPHY 必备**，每个工程都该加）
- `shimmer-sweep` — 闪烁扫光（强调文字时用）
- `grid-pixelate-wipe` — 像素网格擦除转场

### 真实工程里用过哪些零件（自动扫描）

<!-- AUTO:zero-usage:start -->
> 由 `scripts/refresh-zero-usage.sh` 自动扫描 `视频项目/已发布/` 下所有工程的 `compositions/*.html` 和 `compositions/components/*.html` 文件名 vs catalog.json 反查得出。重跑：`bash scripts/refresh-zero-usage.sh --write`。手动编辑会被下次重跑覆盖。

**视频项目/已发布/**

- `视频项目/已发布/2026-05-04-claude-19-tips/` 用了：`cinematic-zoom`、`flash-through-white`、`flowchart`、`logo-outro`、`macos-notification`、`whip-pan`、`grain-overlay`、`shimmer-sweep`

<!-- AUTO:zero-usage:end -->

---

## 三、Skill 索引（Claude / Codex 分入口）

Claude Code 读 `CLAUDE.md` + `.claude/skills/`；Codex 读 `AGENTS.md` + `.agents/skills/`。两边的自写 wrapper skill 应保持同一套视频生产语义，但内部引用分别指向自己的指令文件。

### 上游官方 skill（GitHub 直连，npx skills 管理，16 个）

| Skill | 用途 |
|---|---|
| `hyperframes` | 入口 / 路由 skill（READ FIRST，把"做视频"意图分发到具体 workflow） |
| `hyperframes-core` | HTML 合成契约（结构 / data 属性 / clips / tracks / sub-composition / variables / 确定性渲染 / 校验） |
| `hyperframes-animation` | 全部动画知识（原子动效规则 + 多阶段镜头蓝图 + 转场 + 七套运行时适配器：GSAP 默认 / Lottie / Three.js / Anime.js / CSS / WAAPI / TypeGPU） |
| `hyperframes-creative` | 非动画创意方向（design.md / frame.md、配色、排版、旁白、节拍规划、audio-reactive、品牌风格） |
| `hyperframes-cli` | CLI dev loop（init / add / catalog / capture / lint / validate / inspect / preview / render / publish / lambda / doctor / tts / transcribe / remove-background） |
| `hyperframes-registry` | 装 / 接 catalog blocks & components，hyperframes.json，贡献新零件上游 |
| `hyperframes-media` | 资产预处理（多源 TTS / BGM / Whisper 转写 / 抠像 / 字幕） |
| `embedded-captions` | 给真人口播视频做内嵌特效字幕（32 视觉身份，matte 抠图合成） |
| `graphic-overlays` | 给现有视频叠加定时图形卡（标题 / 下三分之一 / 数据 callout / 引用 / 画中画） |
| `motion-graphics` | 短 design-led 动态图形（kinetic type / 数字跳动 / 图表 / logo sting / lower-third），≤10s~30s 无旁白 |
| `faceless-explainer` | 任意文本 → 自带 TTS 旁白的无人讲解视频（~30-90s） |
| `general-video` | 兜底：长 / 多镜头 / 无专门 workflow 适配时的自由合成 |
| `product-launch-video` | 产品发布 / SaaS promo / 功能揭示视频 |
| `pr-to-video` | GitHub PR → 代码变更讲解视频 |
| `website-to-video` | 抓网站 → 视频（站点导览 / showcase / 社媒片段） |
| `remotion-to-hyperframes` | 把 Remotion(React) 合成移植成 HyperFrames HTML |

### 自写 wrapper skill（active 入口是 `cyxj-hyperframes-overlay`）

> 当前唯一 active 入口是 `cyxj-hyperframes-overlay`（先读官方规则，再叠 XCYJ 用户层）。legacy skill `cyxj-new-video` / `cyxj-add-block` 已于 2026-06-17 重构删除，不再保留。

| Skill | 触发词 | 干啥 |
|---|---|---|
| `cyxj-hyperframes-overlay`（**唯一 active 入口**） | 「新视频」「做视频」「片头」「加个零件」「加个转场」「做完了」「归档」 | 叠加官方 HyperFrames skills 的 XCYJ overlay：复用扫描 → 视觉 DNA → 硬约束 → 全生命周期 |

### 边界规则

- Claude 专属措辞留在 `.claude/skills/`，Codex 专属措辞留在 `.agents/skills/`
- 共享层是 `组件库/`、`参考/`、`资源库/`、`docs/`、`制作规范/`、`.gitignore`
- 另一个 AI 做审查或修共享层时，先排除正在制作的 `视频项目/在制/<工程>/` 施工目录

---

## 四、官方文档本地镜像（`docs/hyperframes-official/`）

> 78 页全量镜像 mintlify `.md` 原文，每 1-2 月跑 `bash scripts/refresh-docs.sh` 刷新。
> 优先 grep 这里而不是开浏览器查官网。

| 子目录 | 内容 |
|---|---|
| `getting-started/` | introduction、quickstart |
| `concepts/` | compositions、data-attributes、determinism、frame-adapters |
| `guides/` | gsap-animation、rendering、common-mistakes（**必读**）、performance、prompting…（13 篇） |
| `packages/` | cli、core、engine、producer、studio、player（API 速查） |
| `reference/html-schema.md` | HTML schema 完整参考 |
| `catalog/blocks/` | 43 个 block 的官方说明（社交叠层、shader 转场、案例展示…） |
| `catalog/components/` | grain-overlay、shimmer-sweep、grid-pixelate-wipe |
| `community/adopters.md` | 谁在用 hyperframes |

完整索引看 `docs/hyperframes-official/README.md`。

---

## 五、模板（仓库根 `templates/`）

**当前无内置起步模板**（原 tutorial-8beat 已删，无替代模板）。起新片一律从空白起步：`npx hyperframes init <slug> --example blank`，按官方 `hyperframes` skill 的最小骨架补 `compositions/*.html`。通用复用方法论见 `../notes/TEMPLATE_USAGE.md`。

### 旧形态拓扑回查（从 0 写，不要 cp）

> 这些形态没有现成模板，想做请**从 0 写**。原 `videos/` 源工程已不在仓内，`参考/我的作品/` 只剩成片快照（无源码）；唯一有完整源码可研究拓扑的长教程是 `视频项目/已发布/2026-05-04-claude-19-tips/`。

**配套资产（做新视频时接入）**：
- 风格借鉴方法论：`STYLE_BORROW_PLAYBOOK.md`
- 用户视觉 DNA 基线：`../notes/MY_VISUAL_DNA.md`（即 `制作规范/notes/MY_VISUAL_DNA.md`）

---

## 持续积累循环

```
做新视频  (视频项目/在制/<日期>-<slug>/)
   ↓ cyxj-hyperframes-overlay：建工程 + 推参考
   ↓ 提供文案 + 迭代 + 渲染
   ↓ 说「做完了」
   ↓ overlay：归档
归档到  视频项目/已发布/<日期>-<slug>/  （含 final.mp4）
   ↓ overlay 主动问：要把可复用零件抽进 组件库/ 吗？
   ├─ 不要 → 完成
   └─ 要 → 抽掉具体内容 → 组件库/<id>/ + 登记 COMPONENTS.json
         ../notes/TEMPLATE_USAGE.md 加一节
   ↓
本 INDEX 加一行
   ↓
未来 Claude 在做新视频时会推荐这个工程作参考
```

---

## 维护节奏

| 周期 | 动作 |
|---|---|
| 每月 | `bash scripts/refresh-catalog.sh` 刷新 catalog 索引（看是否有新增 block） |
| 每 1-2 月 | `bash scripts/refresh-docs.sh` 刷新 `docs/hyperframes-official/` 官方文档镜像（78 页，动态读 llms.txt） |
| 每 1-2 月 | `cd 参考/hyperframes-launches && git pull` 更新上游参考仓 |
| 每条新视频做完 | 归档到 `视频项目/已发布/`，本 INDEX 加一行 |
| 每 3-6 月 | 盘点 INDEX，把高频可复用零件抽进 `组件库/` |
