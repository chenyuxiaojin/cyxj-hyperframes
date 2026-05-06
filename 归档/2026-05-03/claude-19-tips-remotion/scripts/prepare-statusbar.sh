#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

input_path="${HOME}/Movies/录屏软件/hyperframes/状态栏.mp4"
output_path="public/video/statusbar.mp4"

if [[ ! -f "$input_path" ]]; then
  echo "Missing status bar recording: $input_path" >&2
  exit 1
fi

mkdir -p "$(dirname "$output_path")"
ffmpeg -y -i "$input_path" -an -vf "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2" -c:v libx264 -pix_fmt yuv420p -r 30 "$output_path"
