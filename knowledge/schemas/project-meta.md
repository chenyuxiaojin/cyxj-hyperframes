# project-meta.md — 工程 meta.json schema 草案

> **状态：草案，未启用。** 所有现有工程暂时不需要按这个填。
> 新视频做完后顺手填一份，用真实数据验证 schema 是否够用、字段是否漏掉。

## 字段定义

| 字段 | 类型 | 必填 | 取值/示例 |
|---|---|:---:|---|
| `title` | string | ✅ | 视频标题（中文），如 "Claude 设计 Codex 视图" |
| `date` | string | ✅ | `YYYY-MM-DD` 起始日期 |
| `slug` | string | ✅ | 文件夹名，全小写英文短横线，如 `claude-design-codex-image` |
| `state` | enum | ✅ | `draft` / `in-progress` / `done` / `archived` / `superseded` |
| `supersedes` | string[] | | 这个工程取代了哪些旧工程的 slug |
| `superseded_by` | string | | 这个工程被哪个新工程的 slug 取代了 |
| `tags` | string[] | | 主题标签，给 `cyxj-new-video` 找参考用 |
| `render_path` | string | | 相对工程目录的成品路径，默认 `renders/final.mp4` |
| `duration_sec` | number | | 视频时长（秒） |
| `format` | enum | | `16x9` / `9x16` / `1x1` |
| `voiceover_lang` | enum | | `zh` / `en` |
| `tools_used` | string[] | | 用到的工具，如 `["hyperframes", "gsap"]` |
| `script_path` | string | | 文案位置，相对工程目录 |

## 示例

```json
{
  "title": "Claude 设计 Codex 视图",
  "date": "2026-05-13",
  "slug": "claude-design-codex-image",
  "state": "in-progress",
  "supersedes": [],
  "superseded_by": null,
  "tags": ["claude", "codex", "tutorial", "8beat", "ai-image-workflow"],
  "render_path": "renders/final.mp4",
  "format": "16x9",
  "voiceover_lang": "zh",
  "tools_used": ["hyperframes", "gsap"]
}
```

## 状态机

| state | 含义 | 触发条件 |
|---|---|---|
| `draft` | 起了工程，还没动 beats | meta.json 刚生成 |
| `in-progress` | 在改 beats / preview | 用户开始动 compositions/ |
| `done` | 渲染完成 + 通过质检 | `renders/final*.mp4` 存在 + 用户说"做完了" |
| `archived` | 完成且不再回头改 | done + 30 天无 modified |
| `superseded` | 被新版本取代 | 另一个工程的 `supersedes` 字段指向自己 |

## 双胞胎处理

19-tips 案例：
- `2026-05-03-claude-19-tips-remotion/meta.json` → `state: superseded`, `superseded_by: "2026-05-04-claude-19-tips-hf"`
- `2026-05-04-claude-19-tips-hf/meta.json` → `state: done`, `supersedes: ["2026-05-03-claude-19-tips-remotion"]`

`cyxj-new-video` 推荐参考时**自动排除 state=superseded 的工程**。
