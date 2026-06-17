# Motion Vocabulary — 动画词汇表（中英对照 + 双管线映射）

> 来源：Emil Kowalski《animations.dev》词汇表（<https://animations.dev/vocabulary>，术语真源）。
> 互动演示版：<https://animation-words.vercel.app/>（@Saccc_c 制作，词条与原版一致，每个词可点击看真实效果）。
> 用途：跟 agent 沟通动效时的**共同语言**——直接说术语（"标题 pop in，卡片 stagger 进场"），不说"那种感觉"。
> 本表按**视频管线**场景过滤：原页面是给交互 UI 写的，交互/滚动类概念在视频里只能"借意"或无效，已逐类标注。
>
> 同步约定：本文件在 `hyperframes/制作规范/rules/shared/` 和 `Remotion/制作规范/rules/shared/` 各有一份，内容保持一致，改一份要同步另一份。
> 层级关系：本表是**通用术语层**；具体风格配方（参数值、配色、节奏）见 `MOTION_PHILOSOPHY.md`，实战坑见 `MY_MOTION_NOTES.md`。

**适用性标记**：✅ 视频常用 ｜ 🔶 视频可借意（原为交互/滚动概念，可模拟其视觉效果）｜ ❌ 交互专属（视频无效，仅作知识储备）

---

## 1. 出入场 Entrances & Exits ✅

| 术语 | 中文 | 含义 | HF (GSAP) | Remotion |
|---|---|---|---|---|
| Fade in / Fade out | 淡入 / 淡出 | 透明度变化出现/消失 | `gsap.from(el, {opacity: 0})` | `interpolate(frame, [0,15], [0,1])` → opacity |
| Slide in | 滑入 | 从屏外滑进来（上下左右） | `gsap.from(el, {x: -100, opacity: 0})` | interpolate → `translateX/Y` |
| Scale in | 缩放入场 | 从小放大到原尺寸，常配淡入 | `gsap.from(el, {scale: 0.85, opacity: 0})` | spring/interpolate → `scale` |
| Pop in | 弹入 | 带轻微过冲，像弹进来 | `ease: "back.out(1.7)"` | `spring()` 低 damping 自带过冲 |
| Reveal | 揭示 | 逐渐揭开内容（clip-path / mask） | tween `clipPath: "inset(0 0% 0 0)"` | clipPath + interpolate |
| Enter / Exit | 进场 / 退场 | 元素加入/移除屏幕时播放的动画 | timeline 编排进出两段 | `<Sequence>` 控制挂载区间，首尾各做一段 |

## 2. 时序编排 Sequencing & Timing ✅（视频的核心战场）

| 术语 | 中文 | 含义 | HF (GSAP) | Remotion |
|---|---|---|---|---|
| Keyframes | 关键帧 | 定义几个关键点，中间自动补齐 | `gsap.to(el, {keyframes: [...]})` | `interpolate(frame, [0,10,20], [0,1,0])` 多段 |
| Interpolation / Tween | 插值 / 补间 | 起止值之间自动生成中间帧 | tween 是 GSAP 的基本单位 | `interpolate()` 就是手动补间 |
| Stagger | 错峰 / 交错 | 多个元素依次延迟入场，形成瀑布感 | `stagger: 0.08` 或 `{each, from}` | `delay = index * gapFrames` 逐个偏移 |
| Orchestration | 编排 | 多段动画刻意协调成一个整体动作 | `gsap.timeline()` + position 参数（`"<"` `"-=0.2"`） | `<Sequence from={}>` 排布 + TransitionSeries |
| Delay | 延迟 | 动画开始前的等待时间 | `delay: 0.2` | `Sequence from` / spring 的 `delay` |
| Duration | 时长 | 动画持续多久 | `duration: 0.6` | `durationInFrames` |
| Fill mode | 填充模式 | 动画前后是否保持首/尾帧样式 | GSAP 默认保持终值（类似 CSS `forwards`） | 帧驱动每帧重算，对应物是 `extrapolateRight: "clamp"` |
| Stepped animation | 步进动画 | 离散跳变而非连续，如倒计时 | `ease: "steps(12)"` | `Math.floor(progress * n)` |

## 3. 移动与变换 Movement & Transforms ✅

| 术语 | 中文 | 含义 | HF (GSAP) | Remotion |
|---|---|---|---|---|
| Translate | 位移 | 沿 X/Y 轴移动 | `x:` / `y:`（GSAP 接管 transform，见 MY_MOTION_NOTES §1） | style `transform: translate()` |
| Scale | 缩放 | 放大缩小 | `scale:` | `scale()` |
| Rotate | 旋转 | 绕一点旋转 | `rotation:` | `rotate()` |
| Skew | 斜切 | 沿 X/Y 轴剪切变形 | `skewX:` / `skewY:` | `skew()` |
| 3D tilt / Flip | 3D 倾斜 / 翻转 | rotateX/rotateY 加纵深 | `rotationX:` / `rotationY:` | `rotateX()` / `rotateY()` |
| Perspective | 透视 | 3D 效果强度，值越小越夸张 | 父元素 `perspective` 或 `transformPerspective` | 同 CSS，父容器 `perspective` |
| Transform origin | 变换原点 | 缩放/旋转围绕的锚点 | `transformOrigin: "left center"` | style `transformOrigin` |
| Origin-aware animation | 原点感知动画 | 从触发源长出来（如 popover 从按钮长出），不是从自身中心 | 手动把 transformOrigin 设到"来源"位置 | 同理，按来源位置设 origin |

## 4. 状态过渡 Transitions Between States ✅

| 术语 | 中文 | 含义 | HF (GSAP) | Remotion |
|---|---|---|---|---|
| Crossfade | 交叉淡化 | 同位置一个淡出一个淡入 | 两元素叠放，opacity 交叉 tween | 两层 opacity 反向 interpolate；`@remotion/transitions` 的 fade |
| Continuity transition | 连续性过渡 | 视觉上连接前后状态，观众不迷失 | 同一元素改属性不切断（参考 MOTION_PHILOSOPHY §3.5 recolor 不切镜头） | 同一元素跨 Sequence 连续插值 |
| Morph | 形变 | 一个形状平滑变成另一个（如灵动岛） | SVG 用 MorphSVGPlugin | `@remotion/paths` 的 `interpolatePath()` |
| Shared element transition | 共享元素过渡 | 元素从一处飞到另一处并变形（缩略图展开成卡片） | Flip plugin | 手动对两个布局位置做插值 |
| Layout animation | 布局动画 | 尺寸/位置变化时动画过去而非瞬移 | Flip plugin | 手动插值（视频里布局变化本来就由你编排） |
| Accordion / Collapse | 手风琴 / 折叠 | 高度平滑展开收起 | tween height / scaleY | interpolate → height |
| Direction-aware transition | 方向感知过渡 | 前进往一边滑、后退往反方向滑 | timeline 按语义方向选 x 偏移符号 | 按叙事方向选 slide 方向（`@remotion/transitions` slide 可配方向） |

## 5. 滚动 Scroll 🔶（视频无真滚动，全部借意）

| 术语 | 中文 | 视频里的对应物 |
|---|---|---|
| Scroll reveal | 滚动揭示 | = 元素入场 reveal，把"进入视口"换成"到达时间点" |
| Scroll-driven animation | 滚动驱动动画 | 它的本质"进度驱动"正是视频默认模型——Remotion 的 frame、GSAP timeline 的 progress |
| Parallax | 视差 | ✅ 直接可用：多层以不同速度位移，制造纵深（背景慢、前景快） |
| Page transition | 页面过渡 | = 场景切换（scene transition） |
| View transition | 视图过渡 | = 带共享元素的场景切换 |

> 长画布镜头平移（tall-canvas camera pan，MOTION_PHILOSOPHY §3.11）就是"把滚动感拍进视频"的标准做法。

## 6. 反馈与交互 Feedback & Interaction ❌（视频无用户交互）

Hover effect（悬停）、Press / Tap feedback（按压反馈）、Hold to confirm（长按确认）、Drag（拖拽）、Drag to reorder（拖拽排序）、Swipe to dismiss（滑动关闭）、Rubber-banding（橡皮筋回弹）、Shake / Wiggle（抖动报错）、Ripple（涟漪）。

> 视频里只在**演示 UI 行为**时模拟其视觉效果（比如教程里演示"点击后按钮缩小"就是模拟 press feedback）。Shake/Wiggle 可借作强调动效。

## 7. 缓动 Easing ✅（决定"手感"的核心）

| 术语 | 中文 | 含义 | HF (GSAP) | Remotion |
|---|---|---|---|---|
| Easing | 缓动 | 速度随时间的变化规律 | `ease:` | `interpolate(..., {easing})` |
| Ease-out | 缓出 | 快进慢停。UI 和入场的默认选择 | `"power2.out"` | `Easing.out(Easing.cubic)` |
| Ease-in | 缓入 | 慢起快结束。通常避免，显拖沓 | `"power2.in"` | `Easing.in(Easing.cubic)` |
| Ease-in-out | 缓入缓出 | 慢-快-慢。适合屏内 A→B 移动 | `"power2.inOut"` | `Easing.inOut(Easing.cubic)` |
| Linear | 线性 | 匀速。UI 避免，留给 spinner/marquee | `"none"` | 默认（不传 easing） |
| Cubic-bezier | 贝塞尔曲线 | 自定义缓动曲线 | `CustomEase.create()` | `Easing.bezier(x1, y1, x2, y2)` |
| Asymmetric easing | 非对称缓动 | 加速和减速速率不同，更有生命感 | CustomEase 自画 | `Easing.bezier` 两端不对称 |

## 8. 弹簧动画 Spring Animations ✅（两管线最大差异点）

| 术语 | 中文 | 含义 | HF (GSAP) | Remotion |
|---|---|---|---|---|
| Spring | 弹簧 | 物理驱动（张力/质量/阻尼），无固定时长 | **无原生物理弹簧**：用 `elastic.out` / `back.out` / CustomBounce 近似 | **原生** `spring({frame, fps, config})` |
| Stiffness / Tension | 刚度 / 张力 | 拉向目标的力度，越高越利落 | —（用 ease 强度近似） | `config.stiffness` |
| Damping | 阻尼 | 弹簧多快稳定，越低越弹 | —（elastic 的第二参数近似） | `config.damping` |
| Mass | 质量 | 元素的"重量感"，越大越迟缓 | — | `config.mass` |
| Bounce | 回弹 | 过冲后回落，添俏皮感 | `back.out` / CustomBounce | 低 damping spring |
| Perceptual duration | 感知时长 | 弹簧"看起来结束"的时间（实际还在微震） | — | `measureSpring()` 可算实际帧数 |
| Momentum | 动量 | 运动带着速度延续 | 🔶 借意：衔接动画保持速度连续 | 🔶 同左 |
| Velocity | 速度 | 运动的快慢和方向，打断时被带入下段 | 🔶 拍点接缝处速度匹配（MOTION_PHILOSOPHY §3.9） | 🔶 同左 |
| Interruptible animation | 可打断动画 | 动画中途被平滑改道 | ❌ 交互概念，视频中体现为"硬切改为顺势衔接" | ❌ 同左 |

## 9. 循环与氛围动效 Looping & Ambient Motion ✅

| 术语 | 中文 | 含义 | HF (GSAP) | Remotion |
|---|---|---|---|---|
| Marquee | 跑马灯 | 内容连续循环滚动 | `xPercent` + `repeat: -1` | `(frame * speed) % width` |
| Loop | 循环 | 重复 N 次或无限 | `repeat: -1` | `<Loop durationInFrames={}>` |
| Alternate (yoyo) | 往返循环 | 正放再倒放，不跳回起点 | `yoyo: true` | 进度做三角波 / `Math.abs(Math.sin())` |
| Orbit | 环绕 | 绕另一元素连续转圈 | rotation + 偏移 transformOrigin，或 MotionPath | 角度 = frame 线性映射，算圆周坐标 |
| Pulse | 脉冲 | 轻柔重复的缩放/透明度变化，引导注意 | scale + `repeat: -1, yoyo: true` | `Math.sin(frame / fps * Math.PI)` → scale |
| Float | 漂浮 | 缓慢上下漂移，让静态元素有生命 | y + `sine.inOut` + repeat yoyo | sin 波 → translateY |
| Idle animation | 待机动画 | 元素闲置时的微动 | 小幅度循环 tween | 小振幅 sin 波 |

## 10. 打磨与效果 Polish & Effects ✅（好与伟大的分界）

| 术语 | 中文 | 含义 | HF (GSAP) | Remotion |
|---|---|---|---|---|
| Blur | 模糊 | 柔化元素或遮瑕 | tween `filter: "blur(8px)"` | style filter + interpolate |
| Clip-path | 裁剪路径 | 裁成形状，用于揭示/遮罩/对比滑块 | tween `clipPath` | clipPath + interpolate |
| Mask | 遮罩 | 类似 clip-path 但边缘可羽化（渐变） | CSS `mask-image` 渐变 | 同 CSS |
| Before / after slider | 前后对比滑块 | 分隔线扫过对比两张图 | clip-path inset 扫过 | 同左，分隔线位置 interpolate |
| Line drawing | 线条绘制 | SVG 路径像笔画一样画出来 | DrawSVGPlugin / `stroke-dashoffset` | `@remotion/paths` 的 `evolvePath()` |
| Text morph | 文字变形 | 文字变化时逐字符动画 | SplitText 逐字符 | 逐字符 diff + 各自动画 |
| Skeleton / Shimmer | 骨架屏 / 微光 | 加载占位 + 流动光泽 | 渐变背景位移循环 | 同左（视频里多用于模拟 UI） |
| Number ticker | 数字滚动 | 数字滚动/递增到目标值 | `gsap.to(el, {textContent: 100, snap: {textContent: 1}})` | `Math.round(interpolate(...))` |
| Tabular numbers | 等宽数字 | 固定宽度数字，变化时不跳动。ticker/计时器必备 | CSS `font-variant-numeric: tabular-nums` | 同 CSS（Space Mono 本身等宽） |
| Typewriter | 打字机 | 文字逐字符出现 | TextPlugin / SplitText | `text.slice(0, Math.floor(progress * len))` |

## 11. 性能 Performance 🔶（两管线含义不同）

| 术语 | 中文 | 含义 |
|---|---|---|
| Frame rate (FPS) | 帧率 | 每秒画面数。60fps 是流畅基线 |
| Jank | 卡顿 | 浏览器掉帧造成的可见停顿 |
| Dropped frame | 掉帧 | 某帧没赶上绘制截止时间 |
| Compositing | 合成 | GPU 在独立图层上移动/淡化元素，不重排不重绘 |
| will-change | — | CSS 提示即将动画，提前提升图层 |
| Layout thrashing | 布局抖动 | 动画 width/height/top/left 逼浏览器每帧重排 |

> **HF**：预览和渲染都经浏览器，**坚持只动 transform 和 opacity** 的 GPU 原则仍然适用。
> **Remotion**：逐帧离线渲染，成片不存在 jank；Studio 预览卡顿 ≠ 成片卡顿。但每帧计算量仍影响渲染耗时。

## 12. 原则 Principles to Know ✅（何时动、为何动）

| 术语 | 中文 | 一句话 |
|---|---|---|
| Purposeful animation | 目的性动画 | 动效要有功能——定向、反馈、表达关系，不是装饰 |
| Anticipation | 预备动作 | 动作前先朝反方向小幅蓄力，暗示即将发生什么 |
| Follow-through | 跟随缓冲 | 主体停了，局部还在微动后稳定，增加重量感 |
| Squash & stretch | 挤压拉伸 | 运动中变形以传达重量、速度、弹性 |
| Perceived performance | 感知性能 | 对的动画让界面"感觉"更快 |
| Frequency of use | 使用频率 | 越常出现的动画越要短、越要克制（视频版：重复出现的转场要快） |
| Spatial consistency | 空间一致性 | 元素跨状态保持身份和位置连续，观众不丢失跟踪 |
| Hardware acceleration | 硬件加速 | 只动 transform 和 opacity，GPU 保流畅 |
| Reduced motion | 减弱动效 | 尊重 prefers-reduced-motion（视频不适用，但做网页 demo 时记得） |

---

## 怎么用这张表

1. **下需求时**：直接用术语描述——"logo pop in，三张卡片 stagger 0.1s，背景 parallax 两层"。
2. **agent 实现时**：按所在管线查映射列；HF 不写 Remotion API，Remotion 不写 GSAP（顶层 CLAUDE.md 硬规则）。
3. **审片时**：用「原则」一节的词指出问题——"这里缺 anticipation""转场没有 spatial consistency"。
