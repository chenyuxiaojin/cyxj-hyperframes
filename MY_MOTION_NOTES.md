# MY_MOTION_NOTES.md — 19 招实战沉淀的动效与工程笔记

> 本仓库**自有的**动效与工程笔记。每条来自 19 招视频踩过的真实坑，目的是**下次不再踩**。
>
> **与其他文档的边界**：
> - `MOTION_PHILOSOPHY.md`（软链上游 student-kit）= Nate 的 Infinite Payments 美学普适纪律。**不能改**，所以本仓库自己的扩展写在这里。
> - `MY_VISUAL_DNA.md` = 颜色 / 字体 / 入场 stagger 粒度 / chrome-text 互斥等**视觉风格层**约束。
> - `MY_MOTION_NOTES.md`（本文件）= **实操技术陷阱 + 工程方法论层**笔记，每条配代码示例和触发场景。
>
> **谁要读**：cyxj-new-video skill 阶段 D 必读 → 派 agent 前确认本文件相关条目已在 brief 里覆盖。

---

## 总览（10 节）

| # | 主题 | 触发场景 | 出处 |
|---|---|---|---|
| 1 | GSAP transform 接管 + 居中规范 | 任何 GSAP 动 x/y/scale 的元素 | P10 + P11 |
| 2 | `immediateRender: false` 何时必须加 | `tl.fromTo` 起始位置 ≠ 0 时 | P9 |
| 3 | 撞击同帧合成模板（impact moment）| 任何"动作戏"片段 | P15 |
| 4 | teaser 不能 spoiler 下一句 | 视觉 brief 时定每段提前量 | P8 |
| 5 | SVG filter id 全局命名空间冲突 | 用 feTurbulence / feDisplacementMap | P18 |
| 6 | CSS dead code 检测 | theme.css 长期堆积后 | P17 |
| 7 | sample → broadcast → cleanup 推全方法论 | 视觉风格全局变更 | P14 |
| 8 | 教程内容真实性 grok-search + Tavily 双源审核 | 教程涉及最新产品功能时 | P16 |
| 9 | 渲染参数决策树 draft / standard / docker | 每次 render 前 | P12 |
| 10 | 项目自创范式索引 | 知道哪些视觉资产已经抽出可复用 | P19 |

---

## 一、GSAP 实操陷阱

### 1. GSAP transform 接管 + 居中规范

**坑**：CSS `transform: translate(-50%, -50%)` 居中后，GSAP `tl.to(el, {x:100, scale:0.92})` 跑过元素就跑偏 —— 因为 GSAP 直接覆盖整个 `transform` 属性，原 CSS 的 `translate(-50%)` 失效。

**双重叠加问题**（P11）：用 `top:50%; left:50%; transform:translate(-50%,-50%)` 居中时，translate 算的中心点依赖元素自身高度。如果元素是 grid layout（如 `cc-window`），实际渲染高度比 CSS 预期高 ~50px，中心点就偏 5%。

**项目规则（必守）**：
- **任何会被 GSAP 动到 x/y/scale/rotate 的元素**，居中一律用 GSAP 的 `xPercent: -50, yPercent: -50` 不用 CSS transform
- 或者父容器用 flexbox 居中（与元素自身高度无关）：

```css
.stage { position: absolute; inset: 0; display: flex;
         align-items: center; justify-content: center; }
```

```js
// GSAP 居中的标准写法（替代 CSS translate(-50%, -50%)）
gsap.set(el, { xPercent: -50, yPercent: -50, top: '50%', left: '50%' });
// 之后随便动 x / scale / rotate，居中保持
tl.to(el, { x: 100, scale: 0.92, duration: 0.6 }, start);
```

**出处**：P10 / P11 / commit `cc599ad` Tip 10 esc-stop / commit `f36f96e` Tip 1 V5

---

### 2. `immediateRender: false` 何时必须加

**坑**：`tl.fromTo(el, {opacity:0, y:20}, {opacity:1, y:0}, 5)` 即使 5s 才触发，**第 0 帧 GSAP 就把 from 状态写到元素上**。如果元素初始 CSS 是 `opacity:1`（自然显示），fromTo 在 0s 把它强行改成 `opacity:0` —— 看到的就是"元素先消失，5s 后才入场"。

**修法**：

```js
tl.fromTo(el,
  { opacity: 0, y: 20, scale: 0.5 },
  { opacity: 1, y: 0, scale: 1, duration: 0.5, immediateRender: false },  // ← 关键
  5);
```

**项目规则**：只要 fromTo 起始位置 **≠ 0** 且元素初始视觉应该用 CSS 控制，就必须 `immediateRender: false`。

**出处**：P9 / commit `a021199` Tip 11 ripple

---

## 二、多元素时序

### 3. 撞击同帧合成模板（impact moment 5-7 元素 ±0.05s 内）

**触发场景**：任何"动作戏"片段——撞击 / 爆炸 / 闪现 / 暴力交互。

**问题**：单个元素的爆炸效果不够"重"。真正的撞击感需要 **5-7 个元素在同一帧（±0.05s 内）做不同动画**。

**19-tips Tip 10 ESC 撞击三件套**（commit `cc599ad`）的 7 元素同帧合成：

```js
const T = 4.0;  // 撞击时刻

// 1. 白闪（覆盖全屏 0.45s 衰减）
tl.fromTo('#white-flash', {opacity:0}, {opacity:1, duration:0.05}, T);
tl.to('#white-flash', {opacity:0, duration:0.45, ease:'power2.in'}, T+0.05);

// 2. 冲击波 ripple（scale 0.5 → 12，0.6s）
tl.fromTo('#impact-ripple',
  {scale:0.5, opacity:1}, {scale:12, opacity:0, duration:0.6, ease:'power2.out', immediateRender:false}, T);

// 3. screen shake（5 段抖动，±20px）
['+=20', '-=30', '+=25', '-=15', '+=0'].forEach((x, i) => {
  tl.to('#stage', {x, duration:0.05, ease:'power1.inOut'}, T + i*0.05);
});

// 4. 终端红光爆闪（box-shadow）
tl.fromTo('#cc-window',
  {boxShadow:'0 0 0 transparent'},
  {boxShadow:'0 0 80px rgba(184,81,56,.9)', duration:0.1, yoyo:true, repeat:1}, T);

// 5. 7 行碎裂（每行随机 y/x/rotation/opacity 飞散）
tl.to('.cc-line', {
  y:'random(-200,200)', x:'random(-100,100)', rotation:'random(-30,30)',
  opacity:0, duration:0.5, stagger:{each:0.02, from:'random'}, ease:'power3.out'
}, T+0.05);

// 6. STOPPED badge 弹出 + 脉动
tl.fromTo('#stopped-badge',
  {scale:0, rotation:-15}, {scale:1, rotation:0, duration:0.4, ease:'back.out(2.4)'}, T+0.15);

// 7. token-counter 数字归零（计数动画）
tl.to({n:1240}, {n:0, duration:0.3, ease:'power3.out',
  onUpdate:function(){ document.querySelector('#tok-val').textContent = Math.round(this.targets()[0].n); }
}, T+0.1);
```

**关键纪律**：
- T 是"撞击瞬间"的绝对秒数，所有 cue 都基于 T 偏移
- 视觉 + 音频应该**同帧命中**（Tip 10 没接 stop-tap.wav 是遗憾，下次必接）
- screen shake 用很短的 0.05s × 5 段，不要一段长 0.25s（短段更"重"）
- ripple 必须 `immediateRender:false`（见第 2 节），否则第 0 帧就显示

**出处**：P15 / commit `cc599ad` Tip 10 / 自创 7 cue 28 tween 模板

---

### 4. teaser 不能 spoiler 下一句

**坑**：上一段 hold 末段空窗时，本能地把下一段视觉提前露 → 削弱内容节奏感。

**判定标准**：
- ✅ **合法 teaser**：用极简提示（如 1 个箭头、1 个 chip 文字）暗示"下一段会讲什么类型"，不透具体内容
- ❌ **spoiler**：在口播说出关键词之前，视觉上已经显示了那个关键词或具体画面

**项目规则**：
- 写视觉 brief 时每段标"哪些信息可以提前 hint，哪些必须等到口播说出再露"
- 空窗段不准用下一段视觉填，宁可让全程层（grid pulse / particles drift）扛过去
- teaser 出现时间应该被刻意推后，等到上一句口播完全结束再出

**19-tips Tip 1 修法**（commit `f2f0de1`）：
- 原 V3：teaser「↓ 在终端输入 /statusline」在 cue B 中段 1.8s 就出现 → spoiler 了 cue C 的命令
- 修后：teaser 推到 3.6s（cue B 末段口播说"输入 /statusline"的同一帧才出）

**出处**：P8 / memory feedback "视觉时间码必须精确对齐 SRT 逐字稿"

---

## 三、项目级技术陷阱

### 5. SVG filter id 全局命名空间冲突

**坑**：SVG `<filter id="wavy-distort">` 是全局唯一的 DOM id。多个 chapter 都用 wavy filter 时如果 id 撞名，第一个 filter 会被第二个覆盖 → 网格扭曲效果消失。

**19-tips wavy filter 命名空间链事故**（推全→撤销链 4 个 commit）：
- `8475dc5` Tip 14 prototype：用 `wavy-distort-14`
- `9cf40e3` 推全：改 `wavy-distort-global` 同时删 Tip 14 命名空间
- `2c5a82b` Revert（4 分钟后）
- `2d69585` 改回 chapter 局部：用 `wavy-distort-1`（Tip 1 sample）
- `96a0ecd` Hook：再加一个 `wavy-distort-hook`

**最终全片 4 个独立 SVG filter id 共存**：`wavy-distort-1` / `wavy-distort-14` / `wavy-distort-hook` 等。

**项目规则**：SVG filter id 一律按 chapter 命名空间：

```svg
<!-- ❌ 错：全局共享 id，多 chapter 撞名 -->
<filter id="wavy-distort">...</filter>

<!-- ✅ 对：chapter 局部命名 -->
<filter id="wavy-distort-tip-NN">...</filter>
<!-- 或者 chapter slug -->
<filter id="wavy-distort-hook">...</filter>
```

CSS 引用时也跟着改：

```css
.perspective-grid.wavy-tip-14 { filter: url(#wavy-distort-tip-14); }
```

**出处**：P18 / commit 链 `8475dc5 → 9cf40e3 → 2c5a82b → 2d69585 → 96a0ecd`

---

### 6. CSS dead code 检测

**坑**：`theme.css` 只增不删（19-tips 7588 行，5 个类 0 引用 = compare-grid / compare-label / compare-value / mac-terminal / token-stream / token-line）。HF lint 不查 CSS dead code。

**临时检测脚本草案**（写到 `scripts/lint-dead-css.sh`）：

```bash
#!/usr/bin/env bash
# 扫 theme.css 所有 .xxx 类名，检查是否在 compositions/*.html 出现
set -euo pipefail
THEME="${1:-assets/theme.css}"
COMPS="${2:-compositions/*.html}"

# 提取所有 CSS class 名（粗略：单纯 .xxx，不含 modifier 链）
classes=$(grep -oE '^\.[a-zA-Z][a-zA-Z0-9_-]*' "$THEME" | sort -u | sed 's/^\.//')

dead=()
for cls in $classes; do
  # 在所有 composition html 里 grep class="...$cls..."
  if ! grep -q "class=\"[^\"]*\b${cls}\b" $COMPS 2>/dev/null; then
    dead+=("$cls")
  fi
done

echo "Dead CSS classes (defined but 0 reference):"
printf '  - %s\n' "${dead[@]}"
echo ""
echo "Total: ${#dead[@]}"
```

**用法**：

```bash
cd 2026-05-04/claude-19-tips-hf
bash ../../scripts/lint-dead-css.sh assets/theme.css "compositions/*.html"
```

**项目规则**：
- 每做完一条新视频，跑一次 dead CSS 检测
- 视频归档到 `参考库/我的作品/` 前**先清 dead code**

**出处**：P17 / 19-tips theme.css 5 类 dead

---

## 四、工程方法论

### 7. sample → broadcast → cleanup 视觉风格推全

**坑**：单点验证 OK 后乐观推全 → 推全后视觉不达预期 → 4 分钟内紧急 Revert → 9 分钟内 3 个 commit + 1 个 Revert。

**19-tips wavy 推全→撤销链事故**（也是第 5 节同源）：
- `9cf40e3` 15:36 推全 18 招（改 index.html + theme.css + 删 Tip 14 命名空间）
- `2c5a82b` 15:40 Revert（4 分钟后）
- `2d69585` 15:45 改成 Tip 1 sample 重做（commit body 自述"推全 18 招前的模板"）

**项目规则（推全前必跑）**：
1. **单点 sample**：选一个代表性 chapter（如 Tip 1）做完整 cue 验证
2. **截图回看**：preview 跑完 sample chapter，截图 → 与原 brief 比对 → 用户/agent 确认
3. **改造模板**：把 sample 沉淀成 `templates/<新模板>/` 的某个 beat 或 component
4. **派 sonnet broadcast**：用 sample 作为 reference，并行派 N 个 sonnet agent 对剩余 chapter 做相同改造
5. **Cleanup**：lint + preview + 抽检 3 个非 sample chapter，确认无回归

**反模式**：
- ❌ 一次性改 `index.html` + `theme.css` 全局 token 推全所有 chapter
- ❌ 推全前没 sample 截图给用户看
- ❌ broadcast 阶段 main agent 自己改（应该派 sonnet 并行）

**出处**：P14 / commit 链 `9cf40e3 → 2c5a82b → 2d69585`

---

### 8. 教程内容真实性 grok-search + Tavily 双源审核

**坑**：教程视频涉及最新产品功能时，agent 凭训练数据出稿可能错配（训练数据滞后）。

**19-tips Tip 18 事故**：V1 把 Agent Teams 画成 claude/claude/codex worker → 联网 2 源验证发现 Agent Teams 是 Anthropic 内部多 Claude 实例协作，**Codex 不可能在 Agent Teams 里**。

**项目规则（涉及 2025-Q4 之后产品功能时必跑）**：

```
1. 写完 chapter brief 后，列出该 chapter 涉及的"最新产品功能"清单
2. 每条用 grok-search web_search 查（带 extra_sources=2 让 Tavily 补 2 条独立信源）
3. 关键事实用 web_fetch 钉死原文（不仅看 Grok 摘要）
4. 多源冲突时**并列呈现**，不许单边下结论
5. 同名项目 disambiguation 用 GitHub stars + 最近 commit 时间作真伪判官
6. commit body 写"联网核实（Tavily 2 源交叉验证 X.com / Y.com）"
```

**适用范围**：
- ✅ Agent Teams / Claude Skills / Plan Mode 等 2026 新功能
- ✅ 第三方工具集成（如 Codex / GitHub Actions / 各种 MCP server）
- ✅ 指标性能数据（"context window 200K" "thinking budget 64K" 等）
- ❌ 通用编程概念（git / shell / JavaScript 基础）— 不需要联网

**出处**：P16 / commit `6f81556` Tip 18 / 与全局 CLAUDE.md "证据协议" 对齐

---

### 9. 渲染参数决策树 draft / standard / docker

**坑**：`package.json` 的 `render` 脚本无 `--quality` 参数 → 默认值未明示，迭代时不知道用 draft 还是 standard。

**项目规则**：在每个工程的 `package.json` 加 3 个 npm script：

```json
{
  "scripts": {
    "preview": "npx hyperframes preview",
    "check": "npx hyperframes lint && npx hyperframes validate && npx hyperframes inspect",
    "render:draft":  "npx hyperframes render --quality draft",
    "render:standard": "npx hyperframes render --quality standard",
    "render:final":  "npx hyperframes render --quality standard --docker"
  }
}
```

**决策树**：

| 场景 | 命令 | 说明 |
|---|---|---|
| 调动画时段（每分钟跑一次）| `npm run render:draft` | CRF 28，文件小，速度快 3-5x |
| 整片节奏 review（半天跑一次）| `npm run render:standard` | CRF 18，1080p 视觉无损 |
| 最终交付（1 次）| `npm run render:final` | + Docker 锁 Chrome 字体 + 跨机器一致性 |

**额外纪律**：
- `npm run check` 必须在 render 前跑（含 lint + validate + inspect 三步）
- inspect 输出的 finding 列表（文字溢出 / 容器裁切等）必须扫一眼
- final render 前先把 `compositions/` 下未引用的 catalog snippet 删掉（19-tips 8 个 dead snippet 残留是教训）

**出处**：P12 / 19-tips 周期内未渲染过最终 mp4（renders/ 仅有 work 目录）

---

## 五、项目自创范式索引

### 10. 已抽出的可复用范式

| 范式 | 位置 | 状态 | 出处 |
|---|---|---|---|
| **cc-window 完整体系** | [`templates/components/cc-window/`](./templates/components/cc-window/) | ✅ 已抽（2026-05-06）| P19 / 19-tips 12 章复用 |
| 撞击同帧合成模板 | 本文件 § 3 | 📝 已写笔记，未抽成 helper 函数 | P15 / Tip 10 |
| wavy SVG filter（feTurbulence + feDisplacementMap）| MY_VISUAL_DNA 候选 #5 | 📝 待 2 次验证升级 | Tip 1/14/Hook |
| 章号 kicker chip（中文教程版）| MY_VISUAL_DNA 候选 #4 | 📝 待 2 次验证升级 | 19-tips 20/21 章 |
| camera pan 多 scene 舞台 | MY_VISUAL_DNA 候选 #3 | 📝 待 2 次验证升级 | Tip 14/18 |

**未抽出但可考虑**：
- blur enter/exit helper 函数（21/21 章用，已是 DNA 第 6 条覆盖，不抽）
- mode-toggle-bar callback 历史 chapter 视觉（Tip 4/6/7，3 章用，叙事手法）
- 对话气泡 claude-bubble / user-bubble（Tip 6/9/11，3 章用）

**抽取标准**（什么时候值得抽）：
- ✅ 跨 ≥3 章用过且视觉/接口已稳定
- ✅ catalog 里没有同类
- ✅ 下次新视频大概率会再用
- ❌ 只用过 1-2 次（先列入候选，等第 3 次再抽）
- ❌ 与 catalog 重叠且 catalog 版本质量更高（直接用 catalog）

**出处**：P19 / cyxj-add-block skill 推荐零件时应该读本节

---

## 维护节奏

- **每做完一条新视频**：跑一次 retrospective（如 19-tips `retrospective/` 5 文件），找新坑或新范式
- **新坑**：补到本文件对应主题节
- **新范式**：先列入 MY_VISUAL_DNA "候选 DNA 观察" 节，等第 2 次视频验证后升级到本文件第 10 节

---

## 修订日志

- **2026-05-06**：首次创建。10 节内容全部来自 19-tips retrospective `02-pitfalls.md` 末尾 12 高价值候选清单（除 P13 chrome-text 互斥已并入 MY_VISUAL_DNA 第 5 条）。第 10 节"项目自创范式索引"是新加的——给 cyxj-add-block skill 推荐零件时作为本地查询入口。
