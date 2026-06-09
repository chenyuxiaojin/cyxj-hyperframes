#!/usr/bin/env bash
set -euo pipefail

ROOT="/Users/chenhuajin/项目/视频制作台"
CACHE="$HOME/.codex/plugins/cache/openai-curated/hyperframes"
DEST="$ROOT/hyperframes/official"

SRC="$(ls -td "$CACHE"/*/ 2>/dev/null | head -1)"
test -n "$SRC"

rsync -a --delete --exclude='.DS_Store' --exclude='REUSE.md' "$SRC"/ "$DEST"/
{
  echo "# Synced From"
  echo
  echo "- Source: $SRC"
  echo "- Destination: $DEST"
  echo "- Synced at: $(date -u +%Y-%m-%dT%H:%M:%SZ)"
  echo "- Rule: official mirror only; do not edit by hand."
} > "$DEST/SYNCED_FROM.md"
