# Province GDP Table Animation — Visual Identity

财经/政策解读视频风格。3D 倾斜表格 + 列扫光 + 行抽屉 + 绿色圈注。

## Style Prompt

A wide top-down view of a printed financial spreadsheet, tilted in 3D space at a slight angle as if photographed on a wood desk. Crisp Chinese typography on warm off-white paper, with one column lit by a buttery yellow highlight band. A single row lifts out of the table as a clean white banner with soft drop shadow. A specific data cell is circled in mint-green hand-drawn marker. Studio lighting with shallow depth-of-field warmth.

## Colors

- `--bg`: `#2a1410` — deep burgundy/wood (canvas)
- `--bg-grain`: `#3a1f18` — wood grain mid-tone (subtle radial gradient)
- `--paper`: `#fafafa` — off-white table body
- `--paper-warm`: `#fff8eb` — warm cream tint for second-row stripe
- `--header-bg`: `#dde8f3` — soft dusty-blue header bar
- `--header-fg`: `#1a3550` — header text (deep navy)
- `--ink`: `#202020` — body text
- `--ink-muted`: `#6a7480` — italic dates, secondary
- `--rule`: `#d8dde3` — table grid lines
- `--accent-yellow`: `#fde68a` — column highlight band (alpha ~0.55)
- `--accent-yellow-edge`: `#f5b800` — column highlight border tint
- `--arrow-down`: `#dc3a3a` — red down arrow (decline)
- `--arrow-up`: `#2eb56a` — green up arrow (rise)
- `--arrow-flat`: `#e8a82d` — amber sideways arrow (flat)
- `--circle-mark`: `#3dd8a4` — mint-green hand-drawn circle annotation
- `--banner-shadow`: `rgba(0,0,0,0.35)` — pop-out row drop shadow
- `--caption-fg`: `#fafafa` — bottom subtitle text
- `--caption-shadow`: `rgba(0,0,0,0.7)` — subtitle drop shadow

## Typography

- Headers / body / numbers: `"Noto Sans SC"` — weights 400/500/700
- Italic dates (1月25日 etc.): `"Noto Sans SC"` 400 + `font-style: italic` (CSS skew acceptable)
- Bottom subtitle: `"Noto Sans SC"` 900 — bold display
- Tabular numbers: `font-variant-numeric: tabular-nums`

## Motion (per beat)

| Beat | Time   | What happens                                                                 |
| ---- | ------ | ---------------------------------------------------------------------------- |
| 1    | 0–2s   | Table slides up + tilts into 3D resting pose (perspective rotateX/Y/Z)       |
| 2    | 2–5s   | Yellow highlight band sweeps top→bottom over GDP-change column + caption #1  |
| 3    | 5–9.5s | 江西 row lifts out of table as white banner; mint circle draws around 新疆/7.5 cell; caption #2 |

## What NOT to Do

1. No gradient text or neon accents — this is a real-spreadsheet aesthetic, not a tech HUD
2. No pure `#000` or `#fff` — every neutral is tinted toward warm wood or cool paper
3. No identical-row entrance staggers — the table arrives as one printed object
4. No exit animations on body content before final beat — banner stays up
5. Don't animate `display`/`visibility` — only opacity/transform
