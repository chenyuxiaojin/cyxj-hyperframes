# claude-demo-v2 (26s · 1920x1080 · 30fps)

第一个完整的 HyperFrames 整片实验。"用 Claude Code 自动做动效"主题，主播口播 + 4 个 beat overlay 的拓扑。

## 做了什么

- 总时长 26 秒，8 个 sub-composition
- 拓扑：录屏铺底 + 浮动 overlay 讲解
- DaVinci 端二次合成（HyperFrames 出片段，达芬奇串联）

## 用了什么技术

- HyperFrames CLI（vanilla HTML + GSAP）
- DaVinci Resolve 21（二次合成、配音、字幕）

## 怎么复用

这一版后来催生了"主播口播 + overlay" 形态。**不要从这里 cp 起步**——id / 文案是绑死的 5/2 内容。复用思路：
- 看拓扑：8 个 composition 怎么分 beat
- 看节奏：26 秒按 beat 切的时间分配
- 从 0 写新工程，参考 `docs/hyperframes-official/getting-started/quickstart.md` 的最小骨架
