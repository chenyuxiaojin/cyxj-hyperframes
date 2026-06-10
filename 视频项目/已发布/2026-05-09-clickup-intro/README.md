# clickup-intro (60s)

XCYJ 分享会的第 1 条视频 —— ClickUp 频道介绍片头。60 秒整片，纯演示无录屏。

## 做了什么

- 总时长 60 秒
- 全部 composition 内嵌在 index.html（无 sub-composition 文件夹）
- 设计文档：[`DESIGN.md`](DESIGN.md)
- workspace context：[`workspace-context.json`](workspace-context.json)

## 用了什么技术

- HyperFrames CLI
- 单文件 composition（全部 beat 在 index.html）

## 怎么复用

适合做"产品 / 频道介绍" 类的 60 秒推介。技术要点：
- 不分拆 sub-composition 的小工程，所有 beat 在 index.html 里
- 适合中等复杂度的视频（>30s 但 <90s）
- DESIGN.md 先定 6-8 个 beat，每个 ~10 秒
