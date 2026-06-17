# text-effects — 4 个流式文本动效（GSAP 版）

> 来源：基于一份 "ten approaches to streaming text" 的 HTML demo 翻译（rAF 自管 progress → GSAP timeline + stagger）。
> 选了其中 4 个最对 hy 教程视频胃口的：blur-sharpen / skeleton-fill / char-scramble / token-chunks。
> 另外 6 个（typewriter / word-fade / word-lift / letter-drop / word-wipe / ink-wash）hy 用 GSAP 一两行就能写，没必要做成零件。

---

## 来源 / 许可

- **原文件**：用户提供的 `Text streaming/index.html`（300×300 cell 网格 demo，10 个 effect 并排循环）
- **作者归属**：原作者未知，与本仓库 `remotion-text-effects/` 同源
- **改动**：HTML/CSS 保留；移除 rAF 主循环；改由调用方 GSAP timeline 驱动
- **抓取日期**：2026-05-13

---

## 选型 1 句话

| Effect | 何时用 | 别用 |
|---|---|---|
| **blur-sharpen** | 教程标题 / 引语 / 强 hook 一行 | 小号字体（模糊看不清） |
| **skeleton-fill** | "AI 正在生成中 → 答案出现" | 很短的标题 |
| **char-scramble** | AI 解码 / Matrix 风 / "key 正在解锁" | 正式书面字幕（人会读不进） |
| **token-chunks** | LLM 流式输出味道（最像 ChatGPT） | 衬线大标题（chunk 闪光不好看） |

---

## 最小用法

### 0. 共同准备

```html
<!-- composition <head> -->
<link rel="stylesheet" href="../components/text-effects/text-effects.css" />

<!-- composition body 末尾粘 text-effects.html 里你要的变体 + 公共 init script -->
<!-- 然后 -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script>
  /* 你的 GSAP timeline ↓ */
</script>
```

selector 全部写硬编码字符串，外层 scope 用 `[data-composition-id="beat-x-name"]`。

---

### A. blur-sharpen

```js
const root = '[data-composition-id="beat-1-hook"]';
const tl = gsap.timeline();

tl.fromTo(root + ' #te-blur-1 .te-word',
  { opacity: 0.18, y: 10, filter: 'blur(5px)' },
  {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    duration: 0.9,
    ease: 'power3.out',
    stagger: 0.12
  }, 0);
```

**节奏参考**

| 节奏 | duration / stagger | 适用 |
|---|---|---|
| 编辑级慢 | 0.9 / 0.18 | 引语、长 hero 标题 |
| 标准 | 0.7 / 0.12 | 普通标题 |
| 紧凑 | 0.5 / 0.08 | 短标签 / CTA |

CJK 直接手 span 短语（"我自己" / "都不读"），别按字拆——blur 5px 单字会糊成一团。

---

### B. skeleton-fill

```js
const root = '[data-composition-id="beat-3-thinking"]';
const tl = gsap.timeline();

/* shimmer：背景位置无限循环，让灰条像在跑 */
tl.to(root + ' #te-skel-1 .te-skel-bar', {
  backgroundPosition: '-200% 0',
  duration: 1.4,
  ease: 'none',
  repeat: -1
}, 0);

/* 行 by 行交接：灰条褪 + 文字亮，stagger 0.28 */
tl.to(root + ' #te-skel-1 .te-skel-bar', {
  opacity: 0,
  duration: 0.45,
  ease: 'power2.in',
  stagger: 0.28
}, 0.6);

tl.to(root + ' #te-skel-1 .te-skel-text', {
  opacity: 1,
  duration: 0.45,
  ease: 'power2.out',
  stagger: 0.28
}, 0.72);
```

**data-lines** 控制行数（HTML 里改 `data-lines="3"` / `"5"`），默认 4。
**stagger 0.28** 是源 demo 的换算值（reveal 4.8s × W 0.28 ÷ 4 行）。

---

### C. char-scramble

GSAP 不天然干"逐 tick 改 textContent"，所以用 `gsap.to({p:0→1}, {onUpdate})` 拿到归一化进度自己写：

```js
const root = '[data-composition-id="beat-5-decode"]';
const chars = document.querySelectorAll(root + ' #te-scr-1 .te-char');
const pool = 'abcdefghijklmnopqrstuvwxyz0123456789';
const state = { p: 0 };

gsap.to(state, {
  p: 1,
  duration: 1.6,
  ease: 'power1.inOut',
  onUpdate: function () {
    const t = performance.now();
    chars.forEach(function (el, i) {
      const real = el.getAttribute('data-real');
      const lockAt = i / chars.length;
      if (state.p >= lockAt) {
        if (el.textContent !== real) {
          el.textContent = real;
          el.classList.add('te-locked');
        }
      } else if (/[a-zA-Z0-9]/.test(real)) {
        /* 伪随机：每 ~55ms 换一次 */
        const seed = ((Math.floor(t / 55) + 1) * 2654435761 + i * 374761393) >>> 0;
        const ch = pool[seed % pool.length];
        el.textContent = real === real.toUpperCase() && /[a-z]/i.test(real)
          ? ch.toUpperCase()
          : ch;
      }
    });
  }
});
```

**CJK 注意**：data-text 含中文时，源 demo 的随机池 `a-z0-9` 不会替换中文字符（正则只匹配 `[a-zA-Z0-9]`），CJK 会原样显示。
要中文 scramble 感觉就把 pool 换成方块字池，例如：

```js
const pool = '黑墨白灰隐密码刃刻字符流';
/* 同时把 /[a-zA-Z0-9]/ 改成 /一-鿿/ */
```

---

### D. token-chunks

```js
const root = '[data-composition-id="beat-7-stream"]';
const tl = gsap.timeline();

/* 出现：opacity 0→1，stagger 0.08 模拟 token 速率 */
tl.to(root + ' #te-tok-1 .te-token', {
  opacity: 1,
  duration: 0.05,
  ease: 'none',
  stagger: 0.08
}, 0);

/* 闪光：刚出现时背景亮一下，0.18s 内褪掉 */
tl.fromTo(root + ' #te-tok-1 .te-token',
  { backgroundColor: 'rgba(11, 11, 8, 0.16)' },
  {
    backgroundColor: 'rgba(11, 11, 8, 0)',
    duration: 0.22,
    ease: 'power2.out',
    stagger: 0.08
  }, 0.02);
```

**stagger 改慢**模拟 GPT-3.5 抖速率；**改快**到 0.04 像 Groq / Llama-3-70b 极速流。
要更"AI 味"可以把 `--te-token-flash` 调成蓝/绿（Anthropic 橙也行）。

---

## 可调 CSS 变量

| Token | 默认 | 说明 |
|---|---|---|
| `--te-ink` | `rgba(11, 11, 8, 0.92)` | 正文颜色（深底色覆盖时改成 `rgba(247,246,242,…)`）|
| `--te-ink-soft` | `rgba(11, 11, 8, 0.14)` | blur-sharpen 初始 opacity 基色 |
| `--te-skel-bar` | `#e2e1dc` | 灰条主色 |
| `--te-skel-shimmer` | `#f5f2ea` | shimmer 高光色 |
| `--te-token-flash` | `rgba(11, 11, 8, 0.16)` | token-chunks 闪光色 |

inline 覆盖：

```html
<div class="te-tok" id="te-tok-claude"
     style="--te-token-flash: rgba(217, 119, 87, 0.18);"
     data-text="...">
</div>
```

---

## 已知约束

1. **selector 硬编码**（HARD_CONSTRAINTS #1）：所有 GSAP selector 必须是字符串字面量，永远不要写 `` `[data-composition-id="${id}"]` ``。
2. **复制变体要换 id**（HARD_CONSTRAINTS #2）：把 `te-blur-1` 复制到第二个 beat 要换成 `te-blur-2` 之类——HTML id + CSS class + GSAP selector 三处都要换。
3. **bundler 吃 wrapper**（feedback memory）：hy bundler 会 strip 内层 `<div id="X">`。如果你的 selector 失效，先确认 GSAP 用的是 `[data-composition-id="..."]` 不是 `#beat-x-y`。
4. **scramble pool 默认是 ASCII**：CJK 数据要换池（见 C 节）。
5. **skeleton-fill 行宽是 deterministic**：源 demo 的 `70 + (i * 13) % 22` 写死了，行数确定后宽度也确定——好处是无头渲染稳定，坏处是不"自然"。要更随机就把 `data-lines` 改一下。
6. **char-scramble onUpdate 是逐帧 DOM 写入**：长文本（>50 字符）配合 8+ sub-composition 工程会涨内存（参考 memory `feedback_hf_composition_count_memory`）。
   - 不要超过 30 字符
   - 或者只在某个 beat 里用一次

---

## 与其他组件关系

| 关联 | 关系 |
|---|---|
| `cc-window` | 把 char-scramble / token-chunks 当 cc-window 的"输出区"内容很对味（AI 在 Claude Code 里 streaming）|
| `pulse-bars` | skeleton-fill 期间可以叠 pulse-bars 做"系统在算"的双重指示 |
| `xcyj-tokens` | 颜色/字体 token 来自 xcyj-tokens；`--te-ink` 可换成 `--c-ink-primary` |

---

## 不做的 6 个 effect 自己怎么写

| 原 effect | hy 一两行 GSAP |
|---|---|
| typewriter | `gsap.to('[…] .typed', { duration:1.6, ease:'none', text:{ value:'Hello world' }})`（要 TextPlugin） |
| word-fade | `gsap.from('[…] .word', { opacity:0, stagger:0.05 })` |
| word-lift | `gsap.from('[…] .word', { opacity:0, y:12, stagger:0.05, ease:'power3.out' })` |
| letter-drop | `gsap.from('[…] .char', { opacity:0, y:-12, stagger:0.02, ease:'back.out(2)' })` |
| word-wipe | `gsap.from('[…] .word', { clipPath:'inset(0 100% 0 0)', stagger:0.08, ease:'power2.out' })` |
| ink-wash | `gsap.fromTo('[…] .char', { color:'rgba(11,11,8,0.14)' }, { color:'rgba(11,11,8,0.92)', stagger:0.03 })` |
