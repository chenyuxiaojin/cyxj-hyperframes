---
name: cyxj-hyperframes-overlay
description: XCYJ HyperFrames 专属 overlay。用户用 HyperFrames、HF、HTML+GSAP、website-to-video、catalog block、npx hyperframes、XCYJ 教程视频时使用。必须叠加官方 HyperFrames skills，不替代官方 skill。
---

# cyxj-hyperframes-overlay

这是 XCYJ 的 HyperFrames 私有规则层。先按官方 HyperFrames / GSAP / CLI / registry skill 做正确实现，再套 XCYJ 视觉和生产纪律。

## 必读顺序

1. 官方 HyperFrames 相关 skill：`hyperframes`、`hyperframes-cli`、`gsap`、`hyperframes-registry`，按任务需要加载。
2. `../../notes/MY_VISUAL_DNA.md`
3. `../../notes/MY_MOTION_NOTES.md`
4. `../../rules/hyperframes/hyperframes-rules.md`
5. `../../rules/hyperframes/effects-catalog.md`

## 资产和模板

```text
../../assets/
../../templates/
```

使用模板后，把需要长期渲染的素材复制到具体工程自己的 `assets/`。

## 关键纪律

- 不在顶层 `视频制作台/` 跑 CLI。
- 不手改官方 skill。
- 写 composition 前做复用扫描。
- Remotion 代码不进入 HyperFrames 工程。
