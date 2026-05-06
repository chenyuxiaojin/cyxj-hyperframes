#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

input_path="assets"/"reference"/"codex-ref.mp4"
output_path="public/audio/reference-voice.m4a"

mkdir -p "$(dirname "$output_path")"
ffmpeg -y -i "$input_path" -vn -c:a aac -b:a 192k "$output_path"
