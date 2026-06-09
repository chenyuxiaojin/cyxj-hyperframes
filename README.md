**English** | [中文文档](README.zh-CN.md)

# cyxj-hyperframes

> cyxj-hyperframes is a collection of open-source HTML+GSAP video projects and a reusable toolkit for making Claude Code tutorial videos, built on HeyGen HyperFrames.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![YouTube](https://img.shields.io/badge/YouTube-@cyxj__ai-red)](https://www.youtube.com/@cyxj_ai)
[![HyperFrames](https://img.shields.io/badge/Renderer-HeyGen%20HyperFrames-blue)](https://hyperframes.heygen.com)

---

## Demo

[![19 Claude Code Tips](https://i.ytimg.com/vi/fnKGWHSd0NE/hqdefault.jpg)](https://youtu.be/fnKGWHSd0NE)

Featured video: [**19 Claude Code Tips**](https://youtu.be/fnKGWHSd0NE) — 7.5 min / 28 compositions / full source at [`videos/2026-05-04-claude-19-tips/`](videos/2026-05-04-claude-19-tips/)

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
videos/                         10 archived video source projects (each with a README)
templates/
  tutorial-8beat/               The canonical 8-beat tutorial template
  components/                   7 reusable components (cc-window, orbit-dots, pulse-bars…)
  inspirations/                 5 React UI libraries ported to vanilla HTML+GSAP
  catalog.json                  Machine-readable component catalog (used by skills)
cyxj/
  skills/cyxj-hyperframes-overlay/
                                  Active XCYJ overlay: official rules → user layer → project
assets/logos/                   33 AI vendor / tool SVG logos (Claude, OpenAI, GitHub…)
cyxj/docs/
  HARD_CONSTRAINTS.md           30 hard constraints distilled from real failures
  STYLE_BORROW_PLAYBOOK.md      How to legally borrow visual style from reference videos
  REFERENCE_INDEX.md            Index of upstream reference projects
docs/
  hyperframes-official/         78-page local mirror of HyperFrames official docs
scripts/                        Maintenance scripts (refresh catalog, lint projects…)
```

---

## Quick Start

```bash
# 1. Verify the HyperFrames CLI is available (downloads on first run)
npx hyperframes --version

# 2. Copy the template into a dated work directory
DATE=$(date +%Y-%m-%d)
mkdir -p "$DATE"
cp -R templates/tutorial-8beat "$DATE/my-first-video"
cd "$DATE/my-first-video"

# 3. Edit meta.json: change the `id` field to something unique
# 4. Edit index.html and compositions/*.html: replace {{PLACEHOLDER}} tokens with your content

# 5. Validate and preview
npx hyperframes lint
npx hyperframes preview   # opens http://localhost:3002

# 6. Render
npx hyperframes render --quality standard --format mp4 \
  --output renders/final.mp4

# 7. When done, archive into videos/
mv ../my-first-video ../../videos/$DATE-my-first-video
```

Full checklist: [`cyxj/notes/TEMPLATE_USAGE.md`](cyxj/notes/TEMPLATE_USAGE.md)

---

## Usage: AI Collaboration Workflow

The intended way to use this repo is to open a Claude Code or Codex session in `hyperframes/` and say **"make a new video about X"**. Active discovery now routes through `cyxj-hyperframes-overlay`: read `official/` first for Codex `@hyperframes` rules, then read `cyxj/` for XCYJ assets, templates, visual DNA, and production discipline. The legacy workflow under `skills/` remains only as a reference for the loop:

1. Ask for format / topic / duration
2. Read [`cyxj/docs/REFERENCE_INDEX.md`](cyxj/docs/REFERENCE_INDEX.md) and recommend 2-3 reference projects
3. Copy the template into `YYYY-MM-DD/<slug>/`, update `meta.json` and `index.html`
4. Wait for your script → populate beats → lint → preview
5. When you say "done" → auto-archive into `videos/<date>-<slug>/`

**Claude Code users:** active skills are under `.claude/skills/`, pointing to `official/skills/` plus `cyxj/skills/cyxj-hyperframes-overlay`.  
**OpenAI Codex users:** active skills are under `.agents/skills/`, pointing to the same official mirror plus XCYJ overlay.

Do not edit `official/` by hand; sync it from Codex plugin cache with `cyxj/scripts/sync-official-from-codex-cache.sh`. Edit XCYJ production rules in `cyxj/`.

---

## Compared to Alternatives

| | **cyxj-hyperframes** | **Remotion** ([cyxj-remotion](https://github.com/chenyuxiaojin/cyxj-remotion)) | **Motion Canvas** | **HeyGen student-kit** |
|---|---|---|---|---|
| Language | HTML + GSAP | React + TypeScript | TypeScript | HTML + GSAP |
| Setup | `npx hyperframes` | `npm create video` | `npm create motion-canvas` | same CLI |
| AI-friendly | Yes — plain HTML, prompt-friendly | Harder — React component tree | Moderate | No AI workflow |
| Templates for tutorials | `tutorial-8beat` + 7 components | None included | None included | Basic examples |
| Skills (Claude/Codex) | Yes | No | No | No |
| Chinese font support | Yes (Noto Sans SC, local woff2) | Yes | Limited | No guidance |
| Output | MP4 via headless Chromium | MP4 via headless Chromium | MP4 | MP4 |
| License | MIT | MIT | MIT | Proprietary |

---

## FAQ

**HyperFrames vs Remotion — which should I choose?**  
HyperFrames: HTML + GSAP, lower barrier, great for narrator-style tutorial videos. Remotion: React + TypeScript, better for data-driven or programmatically generated videos. This repo has a sister project [`cyxj-remotion`](https://github.com/chenyuxiaojin/cyxj-remotion) for the Remotion pipeline.

**I can't write code — can I still use this?**  
Yes. Copy `templates/tutorial-8beat/`, find the `{{PLACEHOLDER}}` tokens in each composition file, and replace them with your text. The template README has a full placeholder table. Claude Code can fill them in for you if you paste the script.

**Chinese subtitle rendering issues?**  
Two known gotchas: (1) Do not use `npx hyperframes transcribe` for Chinese audio — use `whisper-cli` directly. (2) Chinese fonts in headless Chromium occasionally fall back if Google Fonts CDN times out — self-host the woff2 files (the `karpathy-anthropic` project under `2026-05-20/` has a local font bundle you can copy). Full details: [`cyxj/docs/HARD_CONSTRAINTS.md`](cyxj/docs/HARD_CONSTRAINTS.md) §4 and §8.

**Can OpenAI Codex users use this?**  
Yes. Skills are symlinked at `.agents/skills/` which follows the OpenAI Agents format. Active official skills mirror `official/skills/`, and the XCYJ overlay points to `cyxj/skills/cyxj-hyperframes-overlay`. Rebuild `official/` from Codex plugin cache, not `npx skills update`.

---

## License

[MIT](LICENSE) © 2026 chenyuxiaojin

---

## Acknowledgements

- [HeyGen HyperFrames](https://hyperframes.heygen.com) — the HTML+GSAP → MP4 rendering pipeline
- [Nate Herk's hyperframes-student-kit](https://github.com/HeyGen-Official/hyperframes-student-kit) — upstream visual inspiration, reference projects, base skill
- [GSAP](https://gsap.com) — animation engine
- Claude Code and OpenAI Codex CLI — AI collaboration throughout
