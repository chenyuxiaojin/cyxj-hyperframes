# HyperFrames Effects Catalog

本目录记录 XCYJ 常用 HyperFrames 效果类型，具体实现优先从模板、历史视频和官方 catalog 里找。

| 效果 | 适用 | 优先来源 |
|---|---|---|
| Chrome 渐变大字 | hook、hero、章节标题 | `shared/MY_VISUAL_DNA.md`、`shared/MOTION_PHILOSOPHY.md` |
| 字符 / 单词 stagger | 标题入场、重点词 | `source/cyxj-new-video.md`、`../../templates/` |
| 透视网格 + vignette + grain + crosshair | 全片底层质感 | `shared/MY_VISUAL_DNA.md` |
| Claude 橙 halo | PiP、人脸、logo、hot word | `shared/MY_VISUAL_DNA.md` |
| light streak / whip | 转场、切 beat | 官方 catalog + `shared/MOTION_PHILOSOPHY.md` |
| terminal / code window | 教程、命令行演示 | `../../templates/` |
| UI card / liquid glass | 操作讲解、对比卡 | `../../templates/` |
| Lottie / Three.js / WAAPI | 专项视觉段 | 官方 HyperFrames registry skills |

## 使用顺序

1. 查当前工程是否已有同类 segment。
2. 查 `../../templates/`。
3. 查已发布历史视频。
4. 查官方 catalog / registry。
5. 都没有再手写。
