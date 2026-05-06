#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."
mkdir -p public/sfx

ffmpeg -y -f lavfi -i "sine=frequency=260:duration=0.42" -af "afade=t=in:st=0:d=0.03,afade=t=out:st=0.30:d=0.12,volume=0.35" -c:a pcm_s16le public/sfx/soft-whoosh.wav
ffmpeg -y -f lavfi -i "sine=frequency=1150:duration=0.055" -af "afade=t=out:st=0.025:d=0.03,volume=0.28" -c:a pcm_s16le public/sfx/keyboard-tick.wav
ffmpeg -y -f lavfi -i "sine=frequency=760:duration=0.08" -af "afade=t=out:st=0.04:d=0.04,volume=0.25" -c:a pcm_s16le public/sfx/ui-click.wav
ffmpeg -y -f lavfi -i "sine=frequency=880:duration=0.22" -af "afade=t=in:st=0:d=0.02,afade=t=out:st=0.14:d=0.08,volume=0.32" -c:a pcm_s16le public/sfx/notification-ding.wav
ffmpeg -y -f lavfi -i "sine=frequency=140:duration=0.12" -af "afade=t=out:st=0.06:d=0.06,volume=0.34" -c:a pcm_s16le public/sfx/stop-tap.wav
ffmpeg -y -f lavfi -i "sine=frequency=420:duration=0.09" -af "areverse,afade=t=out:st=0.04:d=0.05,volume=0.25" -c:a pcm_s16le public/sfx/rewind-tick.wav
ffmpeg -y -f lavfi -i "sine=frequency=520:duration=0.16" -af "afade=t=in:st=0:d=0.02,afade=t=out:st=0.08:d=0.08,volume=0.22" -c:a pcm_s16le public/sfx/pulse.wav
