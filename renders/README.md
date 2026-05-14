# renders/ — 成品视频大厅（人的入口）

> 这个目录里所有 .mp4/.mov 都是**软链**，指向 `projects/<工程>/renders/final.mp4` 或 `参考库/我的作品/<工程>/renders/*.mp4` 的真文件。
> 删这里的软链不会删原文件；改原文件软链会自动跟上。

## 这是给谁看的

- **人（小陈）**：打开这里看所有做完的视频，按日期/主题排序
- **AI / skill**：**不要从这里读**，从工程目录的 `renders/` 直接读真文件

## 怎么刷新

```bash
bash scripts/refresh-renders-index.sh           # 干跑（默认）
bash scripts/refresh-renders-index.sh --apply   # 真改
```

脚本会清掉所有旧软链，重新扫所有视频工程的 `renders/final*.mp4|mov`，建新软链。

## 命名规则

`<工程目录名>__<原文件名>`

例：`2026-05-13-claude-design-codex__final.mp4`

## 已知边界

- 软链是相对路径，工程目录搬位置后要重跑刷新脚本
- macOS / Linux 软链原生支持；Windows 看版本

## 当前状态

阶段 1（影子模式）已建空目录 + 脚本。**首次刷新需要手动跑** `bash scripts/refresh-renders-index.sh --apply`。
正在做中的视频（2026-05-13/claude-design-codex-image/）做完前可以不跑。
