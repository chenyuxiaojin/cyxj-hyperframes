# Claude 19 Tips Motion-only Render Report

## Output

- File: `out/claude-19-tips-motion-only-v2.mp4`
- Rendered at: 2026-05-04
- Size: 85.1 MB

## Verified Media Properties

- Resolution: 1920x1080
- Frame rate: 30 fps
- Frames: 18535
- Video stream duration: 617.833 seconds
- Format duration: 617.877 seconds
- Audio streams: present

## Source Boundaries

- Reference voice is extracted to `public/audio/reference-voice.m4a`.
- Final Remotion source does not import or render the reference video.
- Final Remotion source does not reference the old subtitle file.
- Timeline data was generated from `Subtitle 1_fixed.srt`.
- Status bar recording was transcoded to `public/video/statusbar.mp4` and used only as a muted visual texture in the generated `/statusline` UI.
- Motion SFX are generated into `public/sfx/` and mixed at low volume.

## QA Artifacts

- Layout stills: `out/v2-layout-0000.png`, `out/v2-layout-0039.png`
- Scene stills: `out/v2-plan-0120.png`, `out/v2-selfcheck-0307.png`, `out/v2-api-mcp-0707.png`, `out/v2-skill-0910.png`
- Draft slice: `out/claude-19-tips-motion-only-v2-draft.mp4`

## QA Commands

```bash
npm run extract:audio
npm run prepare:statusbar
npm run generate:sfx
npm run generate:data
npm test
npm run lint
rg -n "Subtitle 1\\.srt|<Video|assets/reference|/Users/chenhuajin/Movies" src scripts package.json remotion.config.ts
ffprobe -v error -select_streams v:0 -show_entries stream=width,height,r_frame_rate,avg_frame_rate,nb_frames,duration -show_entries format=duration,size -of json out/claude-19-tips-motion-only-v2.mp4
ffprobe -v error -select_streams a -show_entries stream=codec_type -of csv=p=0 out/claude-19-tips-motion-only-v2.mp4
```
