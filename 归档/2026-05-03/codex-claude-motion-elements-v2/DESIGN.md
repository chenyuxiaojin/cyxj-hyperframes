# Codex Claude Motion Elements Design

## Style Prompt

A restrained technical documentary wrapper over a warm talking-head video. The visual system should feel like a precise production console: soft dark glass, thin geometry, warm Claude-orange emphasis, cool code-blue secondary signals, and motion that makes the viewer understand the production pipeline without hiding the speaker.

## Colors

- Background wash: `#07090d`
- Tinted surface: `rgba(12, 16, 24, 0.72)`
- Primary text: `#f5efe8`
- Muted text: `#a9b2bd`
- Claude accent: `#d97757`
- Code accent: `#5bb4ff`
- Success accent: `#8fd8a8`

## Typography

- Interface/headline: `"Inter", "Noto Sans SC", sans-serif`
- Code/labels: `"JetBrains Mono", ui-monospace, monospace`

## Motion Rules

- 0.35s to 0.65s entrances with `power3.out` or `back.out(1.3)`.
- Use line draws, small x/y shifts, soft glows, and staggered label reveals.
- Never block the speaker's face; main graphics live in the left, lower, and right safe zones.
- No infinite animation loops. Ambient motion must use finite repeat counts.

## What NOT To Do

- Do not cover the mouth, eyes, or microphone with dense text.
- Do not turn the whole video into a full-screen slide deck.
- Do not use purple-blue gradient text or generic neon cards.
- Do not use dense subtitles for every spoken word; highlight ideas, not transcription.
