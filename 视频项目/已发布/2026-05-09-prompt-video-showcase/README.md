# prompt-video-showcase (40s · 1920x1080 · 30fps)

"一句提示词生成炫酷视频案例合集"。6 个 sub-composition 串联展示不同的提示词输入和对应视觉输出。

## 做了什么

- 总时长 40 秒，6 个 sub-composition
- 主题：展示 prompt → motion 输出的能力
- 有 [`tests/`](tests) 子目录（少见的工程，带自动化测试）

## 用了什么技术

- HyperFrames CLI
- 含 tests/ 的工程结构（如果你要写可测的 composition 可以参考）

## 怎么复用

适合做"案例合集 / showcase" 类型的视频。技术要点：
- 6 case × 6 秒，节奏紧凑
- 每个 case 独立 sub-composition，方便单独迭代
- 不依赖录屏，纯 HyperFrames 输出
