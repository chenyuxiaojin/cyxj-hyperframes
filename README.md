**English** | [中文文档](README.zh-CN.md)

# cyxj-hyperframes

> cyxj-hyperframes is a collection of open-source HTML+GSAP video projects and a reusable toolkit for making Claude Code tutorial videos, built on HeyGen HyperFrames.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![YouTube](https://img.shields.io/badge/YouTube-@cyxj__ai-red)](https://www.youtube.com/@cyxj_ai)
[![HyperFrames](https://img.shields.io/badge/Renderer-HeyGen%20HyperFrames-blue)](https://hyperframes.heygen.com)

---

## Demo

[![19 Claude Code Tips](https://i.ytimg.com/vi/fnKGWHSd0NE/hqdefault.jpg)](https://youtu.be/fnKGWHSd0NE)

Featured video: [**19 Claude Code Tips**](https://youtu.be/fnKGWHSd0NE) — 7.5 min / 28 compositions / full source at [`视频项目/已发布/2026-05-04-claude-19-tips/`](视频项目/已发布/2026-05-04-claude-19-tips/)

---

## Why

Most video-making tools for developers either require heavyweight React knowledge (Remotion) or lock you into proprietary drag-and-drop editors. HyperFrames lets you write HTML + GSAP and renders it to MP4 — same skills you already have.

This repo is the production workspace behind the YouTube channel [@cyxj_ai](https://www.youtube.com/@cyxj_ai), open-sourced so that:

- You can **copy a template and ship a video in an afternoon** without knowing motion design
- You can see how **Claude Code and OpenAI Codex CLI collaborate** on real video projects end-to-end
- The methodology (hard constraints, style borrowing playbook, AI workflow) is written down and reusable

---

## What's Inside

```
视频项目/已发布/                 10 archived video source projects (each with a README)
视频项目/在制/                   active work-in-progress projects (gitignored)
制作规范/                        XCYJ production rules layer (user-owned)
  docs/
    HARD_CONSTRAINTS.md         30 hard constraints distilled from real failures
    STYLE_BORROW_PLAYBOOK.md    How to legally borrow visual style from reference videos
    REFERENCE_INDEX.md          Index of upstream reference projects
    ops.md                      CLI versions, maintenance scripts, symlink architecture
  notes/
    MY_VISUAL_DNA.md            Personal aesthetic constitution (color / type / rhythm)
    MY_MOTION_NOTES.md          19 battle-tested motion techniques
    TEMPLATE_USAGE.md           Component-reuse checklist
  rules/                        Shared motion vocabulary & hyperframes rules
  skills/cyxj-hyperframes-overlay/
                                Active XCYJ overlay: official rules → user layer → project
组件库/                          Reusable components, single source of truth
  <id>/                         Each component: <id>.html + <id>.css + README.md
  COMPONENTS.json               Machine-readable component registry
参考/                            Reference asset layer (read-only)
  inspirations/                 5 React UI libraries ported to vanilla HTML+GSAP
  catalog.json                  Machine-readable official catalog (used by skills)
  hyperframes-launches/         HeyGen upstream reference repo (SCRIPT/STORYBOARD/compositions)
  我的作品/                       Snapshot pool of past works
资源库/
  logos/                        33 AI vendor / tool SVG logos (Claude, OpenAI, GitHub…)
  录屏/                          Raw screen-recording footage
docs/
  hyperframes-official/         78-page local mirror of HyperFrames official docs (English)
scripts/                        Maintenance scripts (refresh catalog, lint projects, lint-dead-css…)
〔official layer, gitignored〕   .agents/skills/ + .claude/skills/ + .codex/ (npx-managed)
```

---

## Quick Start

> There is **no built-in starter template** anymore — start from a blank scaffold.

```bash
# 1. Verify the HyperFrames CLI is available (downloads on first run)
npx hyperframes --version

# 2. Scaffold a blank project under 视频项目/在制/
DATE=$(date +%Y-%m-%d)
cd 视频项目/在制
npx hyperframes init "$DATE-my-first-video" --example blank
cd "$DATE-my-first-video"

# 3. Edit meta.json: change the `id` field to something unique
# 4. Author compositions/*.html following the hyperframes skill's minimal skeleton

# 5. Validate and preview
npx hyperframes lint
npx hyperframes preview   # opens http://localhost:3002

# 6. Render
npx hyperframes render --quality standard --format mp4 \
  --output renders/final.mp4

# 7. When done, archive into 视频项目/已发布/
mv "../$DATE-my-first-video" "../../已发布/$DATE-my-first-video"
```

Full checklist: [`制作规范/notes/TEMPLATE_USAGE.md`](制作规范/notes/TEMPLATE_USAGE.md)

---

## Usage: AI Collaboration Workflow

The intended way to use this repo is to open a Claude Code or Codex session in `hyperframes/` and say **"make a new video about X"**. Active discovery now routes through `cyxj-hyperframes-overlay`: read the official HyperFrames skills (start at the `hyperframes` entry skill), then read `制作规范/` for XCYJ production rules, visual DNA, and discipline (components live in `组件库/`, reference assets in `参考/`). The workflow loop:

1. Ask for format / topic / duration
2. Read [`制作规范/docs/REFERENCE_INDEX.md`](制作规范/docs/REFERENCE_INDEX.md) and recommend 2-3 reference projects
3. Copy the template into `视频项目/在制/<slug>/`, update `meta.json` and `index.html`
4. Wait for your script → populate beats → lint → preview
5. When you say "done" → auto-archive into `视频项目/已发布/<date>-<slug>/`

**Claude Code users:** active skills are under `.claude/skills/`, pointing to `.agents/skills/` (npx-installed) via symlink, plus `制作规范/skills/cyxj-hyperframes-overlay`.  
**OpenAI Codex users:** active skills are under `.agents/skills/` — the npx-installed official skills (real dirs) plus the XCYJ overlay.

Official skills are managed by `npx skills add/update heygen-com/hyperframes` (no more `official/` mirror). Edit XCYJ production rules in `制作规范/`.

---

## Compared to Alternatives

| | **cyxj-hyperframes** | **Remotion** ([cyxj-remotion](https://github.com/chenyuxiaojin/cyxj-remotion)) | **Motion Canvas** | **HeyGen student-kit** |
|---|---|---|---|---|
| Language | HTML + GSAP | React + TypeScript | TypeScript | HTML + GSAP |
| Setup | `npx hyperframes` | `npm create video` | `npm create motion-canvas` | same CLI |
| AI-friendly | Yes — plain HTML, prompt-friendly | Harder — React component tree | Moderate | No AI workflow |
| Reusable building blocks | 7 components (no full starter template) | None included | None included | Basic examples |
| Skills (Claude/Codex) | Yes | No | No | No |
| Chinese font support | Yes (Noto Sans SC, local woff2) | Yes | Limited | No guidance |
| Output | MP4 via headless Chromium | MP4 via headless Chromium | MP4 | MP4 |
| License | MIT | MIT | MIT | Proprietary |

---

## FAQ

**HyperFrames vs Remotion — which should I choose?**  
HyperFrames: HTML + GSAP, lower barrier, great for narrator-style tutorial videos. Remotion: React + TypeScript, better for data-driven or programmatically generated videos. This repo has a sister project [`cyxj-remotion`](https://github.com/chenyuxiaojin/cyxj-remotion) for the Remotion pipeline.

**I can't write code — can I still use this?**  
Yes. There's no built-in starter template — scaffold a blank project with `npx hyperframes init <slug> --example blank`, then paste your script to Claude Code and let it author the composition files for you.

**Chinese subtitle rendering issues?**  
Two known gotchas: (1) Do not use `npx hyperframes transcribe` for Chinese audio — use `whisper-cli` directly. (2) Chinese fonts in headless Chromium occasionally fall back if Google Fonts CDN times out — self-host the woff2 files (the `karpathy-anthropic` project under `2026-05-20/` has a local font bundle you can copy). Full details: [`制作规范/docs/HARD_CONSTRAINTS.md`](制作规范/docs/HARD_CONSTRAINTS.md) §4 and §8.

**Can OpenAI Codex users use this?**  
Yes. Official skills install to `.agents/skills/` (OpenAI Agents format) via `npx skills`, and the XCYJ overlay points to `制作规范/skills/cyxj-hyperframes-overlay`. Restore them with `npx skills experimental_install` from `skills-lock.json`.

---

## License

[MIT](LICENSE) © 2026 chenyuxiaojin

---

## Acknowledgements

- [HeyGen HyperFrames](https://hyperframes.heygen.com) — the HTML+GSAP → MP4 rendering pipeline
- [Nate Herk's hyperframes-student-kit](https://github.com/HeyGen-Official/hyperframes-student-kit) — upstream visual inspiration, reference projects, base skill
- [GSAP](https://gsap.com) — animation engine
- Claude Code and OpenAI Codex CLI — AI collaboration throughout
