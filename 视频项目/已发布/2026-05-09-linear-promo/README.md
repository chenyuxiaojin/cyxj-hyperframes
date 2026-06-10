# linear-promo (30s · 1920x1080 · 30fps)

XCYJ 分享会的第 3 条视频 —— Linear 流程演示。30 秒整片，展示 Linear 的核心工作流。

## 做了什么

- 总时长 30 秒，8 个 sub-composition
- 笔记见 [`NOTES.md`](NOTES.md)
- 有 [`scripts/`](scripts) 辅助构建脚本

## 用了什么技术

- HyperFrames CLI
- 自定义 scripts/（数据预处理、生成 composition 等）

## 怎么复用

适合做"工具工作流演示" 类型的 30 秒视频。技术要点：
- 8 beat × ~4 秒，节奏适中
- scripts/ 可以放数据预处理脚本（比如把 Linear API 数据转成 motion 输入）
- NOTES.md 记录设计/制作过程的踩坑
