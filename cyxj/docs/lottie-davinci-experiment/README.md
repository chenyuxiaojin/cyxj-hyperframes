# DaVinci Resolve 21 Lottie 兼容性实验

> 2026-05-02 · 验证 DaVinci Resolve 21 能不能渲染 Claude 直接写的 Lottie JSON。
> **结论：含中文文字的手写 Lottie 不行；纯图形装饰可以。**

---

## 实验背景

DaVinci Resolve 21 (2026 年 Q1) 新增 Lottie 原生支持（[Blackmagic 官方公告](https://www.blackmagicdesign.com/products/davinciresolve/whatsnew)）。如果可行，未来可以让 Claude 直接写 Lottie JSON → 拖进达芬奇媒体池 → 当作视频素材使用，跳过 hyperframes 渲染管线。

实验做了两个最简 Lottie 文件验证。

---

## 文件

| 文件 | 内容 | lottiefiles.com 渲染 | DaVinci 21 渲染 |
|---|---|---|---|
| [`01-hook-min.json`](01-hook-min.json) | 含 text 层 (ty:5) + fonts 字段（PingFang SC）+ shape 层 + solid 层 | ✅ 完美 | ❌ 黑屏 + clip 时长压成 1.13s（JSON 整体解析失败 fallback） |
| [`02-shape-only.json`](02-shape-only.json) | Bodymovin 标准纯 shape 格式（ty:4 only），含 AE match name (`mn` 字段) | ✅ 完美 | ✅ 完美（圆从小变大，clip 时长 3s 正确） |

## 结论

**DaVinci 21 的 Lottie 引擎只支持 Bodymovin 标准的"纯图形" Lottie 子集**——不支持手写的 text 层（ty:5），也不识别 fonts 字段声明的字体。

**适用场景**：
- ✅ 直接 Claude 写 Lottie：橙色光圈、装饰线、几何 icon、状态点动画、纯 shape 装饰
- ❌ 不能这么做：含中文/英文标题的片头、字幕动画、含文字的卡片

**含文字的内容必须走视频路径**：用 hyperframes（或 Remotion 等同类）输出 MP4 / ProRes 4444 alpha 给达芬奇。

## 相关资料

- DaVinci Resolve 21 New Features Guide: <https://documents.blackmagicdesign.com/SupportNotes/DaVinci_Resolve_21_New_Features_Guide.pdf>
- EBU OGraf 规范（DaVinci 把 Lottie 归类到 Fusion Title 标签下，但实际渲染引擎是独立的 Lottie player，不是 OGraf）: <https://github.com/ebu/ograf>
- LottieFiles 官方 Lottie 规范: <https://lottiefiles.com/>

---

## 后续如果要做"中文字体 Lottie"

理论上可行的两条路（**没实测**）：

1. **AE + Bodymovin 导出，开启 Glyphs 选项** —— 把每个汉字预转成 SVG path 数据塞进 Lottie 的 `chars` 字段。Bodymovin 自动做这件事（用户字体文件作输入）。需要装 AE，违背"避免 AE"的初衷。
2. **手写 chars 数据** —— 把中文字符的 SVG path 数据手动塞进 JSON。工程量爆炸（11 个汉字 × 每字几百锚点 = 几万行）。**不现实**。
