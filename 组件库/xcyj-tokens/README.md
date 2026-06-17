# xcyj-tokens — XCYJ 视觉 DNA Token 单源

> Level 1 DNA 抽离（2026-05-07）。

---

## 这是什么

把仓库根 `制作规范/notes/MY_VISUAL_DNA.md` 里描述的颜色 / 字体 / 字号 / halo token，抽成可执行 CSS 单源。

- **DNA 文档** `制作规范/notes/MY_VISUAL_DNA.md` —— 人读版，讲设计意图（"为什么这个颜色"）
- **本文件** `xcyj-tokens.css` —— 机器读版，给 hyperframes 加载用

两边内容须保持一致。DNA 修订时**先改 `xcyj-tokens.css`**，再回填 `制作规范/notes/MY_VISUAL_DNA.md` 的对应章节。

---

## 工作机制（mirror + sync）

```
组件库/xcyj-tokens/xcyj-tokens.css       ← 单源宪法
                  │
                  │ bash scripts/sync-tokens.sh apply
                  ▼
视频项目/在制/<slug>/assets/xcyj-tokens.css            ← mirror（起工程时 cp 进去）
...
```

每个 hyperframes 工程在自己的 `assets/xcyj-tokens.css` 持一份副本，`index.html` 用相对路径引用：

```html
<link rel="stylesheet" href="assets/xcyj-tokens.css" />
```

DNA 修订时跑 sync 脚本把单源覆盖到所有 mirror。

### 为什么 mirror 不直接 link？

理论上让所有工程 `<link>` 指向单源（`../../组件库/xcyj-tokens/xcyj-tokens.css`）能省 sync 步骤。但 hyperframes 渲染时 chromium 解析跨工程目录路径有风险（preview 默认 serve 工程目录、render 复制 assets 进 build 目录）。mirror 策略避开这个风险，代价仅是 DNA 修订后跑一次 sync。

未来如果 hyperframes 官方支持 shared assets，可升级为真 link 引用。

---

## 用法

> **当前无内置起步模板**（原 tutorial-8beat 已删，无替代模板）。起新工程一律从空白脚手架起步，按下文手动接入 token。

### 起新工程时（从空白脚手架）

```bash
mkdir -p 视频项目/在制/<slug>/assets
cp 组件库/xcyj-tokens/xcyj-tokens.css 视频项目/在制/<slug>/assets/xcyj-tokens.css
```

`index.html` 顶部加：

```html
<link rel="stylesheet" href="assets/xcyj-tokens.css" />
```

各 composition 直接用 `var(--c-bg)` / `var(--c-hot)` 等变量。若单源在你接入后又被改，跑 `bash scripts/sync-tokens.sh apply` 把单源覆盖到所有 mirror。

---

## DNA 修订流程

1. 改 `组件库/xcyj-tokens/xcyj-tokens.css`（颜色/字号/halo 等）
2. 跑 `bash scripts/sync-tokens.sh` 看 dry-run 报告
3. 跑 `bash scripts/sync-tokens.sh apply` 把单源覆盖到所有 mirror
4. 回填 `制作规范/notes/MY_VISUAL_DNA.md` 的对应章节，让人读版跟上
5. 在每个用 mirror 的工程跑 `npx hyperframes lint` + `preview` 视检确认

历史 DNA 改动（如 2026-05-06 底色 #0a1124 深蓝 → #F7F2EA 暖米）以前要手挨个改 :root 块——现在改单源 + sync 就完事。

---

## 当前已加入的工程清单

跑 `bash scripts/sync-tokens.sh`（dry-run）看实时清单。

后续做新视频时（从空白脚手架起步），按上文步骤把单源 cp 进工程 `assets/`，工程的 mirror 即纳入 sync 范围。

---

## 历史 / 相关

- 2026-05-06 装备库诊断 04 第 3 节"Level 1 Token CSS 抽离"提出
- 2026-05-07 commit P1 后续完成本次抽离
- 单源宪法理论见 `docs/装备库诊断/04-2026-05-07-recap.md` §3 §4.1
