# mywebsite-teaser (15s · 1920x1080 · 60fps)

陈与小金个人 website 的 15 秒 teaser。**首次用 60fps 渲染**，对原网站 demo-xiaochens-com 做了截图捕获 + motion 重构。

## 做了什么

- 总时长 15 秒，4 个 sub-composition
- 60fps（前 8 条视频都是 30fps）
- 设计文档：[`DESIGN.md`](DESIGN.md) / [`SCRIPT.md`](SCRIPT.md) / [`STORYBOARD.md`](STORYBOARD.md)
- 网站原貌存档：[`captures/demo-xiaochens-com/`](captures/demo-xiaochens-com)

## 用了什么技术

- HyperFrames CLI（60fps）
- 浏览器截图捕获（playwright）
- DESIGN → SCRIPT → STORYBOARD → compositions 的完整设计流程

## 怎么复用

适合做"个人 / 产品网站 teaser" 的 15 秒短片。技术要点：
- 60fps 比 30fps 渲染慢 ~2x，但运动更丝滑
- 用 captures/ 存网站截图当 motion 素材
- DESIGN.md 先把 beat 表 + 镜头语言写清楚，再写代码

这是首次跑通"DESIGN-first" 工作流的工程，可以当流程范本看。
