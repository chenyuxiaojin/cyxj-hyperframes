# Pipeline Routing

`视频制作台/` 有两条并行管线。先选管线，再加载对应 overlay。

| 用户意图 | 管线 | 必读规则 |
|---|---|---|
| HTML、GSAP、HyperFrames、HF、官网转视频、catalog block、逐帧检查 | `hyperframes/` | `../../skills/cyxj-hyperframes-overlay/SKILL.md` |
| React、Remotion、口播叠加图形、React component、Sequence、spring/interpolate | `Remotion/` | `Remotion/cyxj/skills/cyxj-remotion-overlay/SKILL.md` |
| 只问素材、模板、品牌色、字体、视觉 DNA | 先不进子工程 | `../../../../.agents/skills/cyxj-video/SKILL.md` |

## 不混做

- HyperFrames 不使用 React / Remotion API。
- Remotion 不使用 GSAP / HyperFrames HTML composition 约定。
- 跨管线复用的是品牌 DNA、素材、模板索引和验收标准，不是实现代码。

## 路径解析

如果当前工作目录是 `hyperframes/cyxj/rules/shared/`，优先使用管线内相对路径。

如果任务要切到 Remotion，进入 `Remotion/` 后再读 Remotion 自己的 `cyxj/` 规则。

```text
../../rules/shared/...
../../rules/hyperframes/...
../../assets/...
../../templates/...
Remotion/cyxj/rules/remotion/...
```
