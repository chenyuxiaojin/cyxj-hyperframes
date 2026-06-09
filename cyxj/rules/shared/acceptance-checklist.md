# Acceptance Checklist

每条 XCYJ 视频完成前，按这份清单验收。

## 共享验收

- [ ] 使用了正确管线：HyperFrames 或 Remotion，没有混用实现 API。
- [ ] 至少读取了 `shared/MY_VISUAL_DNA.md` 和对应管线 overlay。
- [ ] Claude 橙或当前项目强调色有明确语义，不是随手装饰。
- [ ] 字体、底色、卡片、纹理符合当前视频形态。
- [ ] 文本没有遮挡关键主体、人脸、UI 焦点。
- [ ] 画面里没有无意义的空转；静止段有轻微呼吸、粒子、视差或镜头变化。
- [ ] 渲染前检查文字溢出、对比度、字幕可读性。
- [ ] 资产来源可追踪，临时文件和大产物没有污染仓库。

## HyperFrames 额外验收

- [ ] 写 composition 前做了复用扫描：当前工程、模板组件、历史视频、官方 catalog。
- [ ] 每个 sub-composition timeline 填满 `data-duration`，没有黑帧闪烁。
- [ ] GSAP selector、composition id、复制 beat 后的全局替换都检查过。
- [ ] 命令在 `hyperframes/` 下的具体工程目录执行。

## Remotion 额外验收

- [ ] 使用 Remotion 的 `Sequence`、`spring`、`interpolate`、React component；没有引入 GSAP。
- [ ] 遵守 `design.md` 的主题、构图形式和人脸禁区。
- [ ] 组件边界清楚，可复用逻辑放组件，具体内容放工程数据。
- [ ] 命令在具体 Remotion 工程目录执行。
