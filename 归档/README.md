# 归档

> 跟当前装备库使命无关、或已废弃但保留以备查的内容。
> 这里的工程**不再活跃维护**，cyxj-new-video skill 不会推荐它们当参考。

---

## 当前归档

### `2026-05-03/` — 早期失败的视频实验（4 个工程）

5月3日的 4 个尝试，跟 5月4日重做的 19-tips（已发布，进 `参考库/我的作品/`）属于同一波探索。

| 子目录 | 框架 | 主题 | 为什么放弃 |
|---|---|---|---|
| `claude-19-tips-remotion/` | Remotion（不是 HyperFrames）| 19 招 Claude Code 教程 V0 | 选错框架，转 HyperFrames 重做 |
| `claude-code-tutorial-overlays/` | HyperFrames | Claude Code 教程 overlay 实验 | 风格不满意 |
| `codex-claude-motion-elements/` | HyperFrames | Codex × Claude motion elements V1 | 视觉效果不达预期 |
| `codex-claude-motion-elements-v2/` | HyperFrames | 同上 V2 迭代 | 同上 |

**只跟踪源码**：每个工程的 `renders/` / `assets/*.mp4` / `*.mov` / `.thumbnails/` / `.waveform-cache/` 都在 `.gitignore` 里被排除，git 只跟踪 ~5–10 MB 的 HTML/CSS/JS/MD 源码（共 ~30 MB）。本地硬盘上仍有 1.6 GB 的渲染产物——你想清就 `rm -rf 归档/2026-05-03/*/renders` 即可。

---

### `2026-05-03-参考截图/` — 散乱的风格参考图（无标签）

5月3日 19:39-19:43 五分钟内连续截的 20 张 PNG（~6.6 MB）。原本放在仓库根 `参考图/`，本来想用作 cyxj-new-video skill 阶段 D"风格借鉴"的素材库，但**全部没有标签 / 没有主题分组**——文件名都是 `截屏2026-05-03 下午X.XX.XX.png`，实际无法用。

未来要重新建有结构的风格库时，**不在这里建**——另建 `参考图/<主题>/` 目录并加 README 说明每张图的来源和风格特征，再 commit。

如果半年后仍未用到，整目录可以删。

---

### `2026-05-04-开发问题截图/` — 跟 AI 沟通时报问题截的图

5月4日下午 4-5 点 截的开发问题图（"第一招"分组下 8 张），跟视频生产工作流无关，仅作为当时跟 AI 客服或助手沟通的存档。

如果未来用不到，可以整目录删除。

---

## 归档判定标准（什么样的内容应该进这里）

进 `归档/`：
- 已废弃 / 不再迭代的视频工程
- 跟项目使命无关、但暂时不想完全删除的材料

**不进**`归档/`：
- 已发布的成品视频 → `参考库/我的作品/<日期>-<slug>/`
- 仍在做的工作 → `2026-MM-DD/<slug>/`
- 模板 / catalog 零件 → `templates/` / `参考库/`
- 系统垃圾（`.DS_Store` / `node_modules` 等）→ `.gitignore` + 直接删

---

## 维护

- 归档不做日常维护，只在做"年终清理"时回头翻
- 半年没动过且确认不需要的整目录可以从 git 删除（`git rm -r 归档/<某项>` + commit）
