#!/usr/bin/env bash
set -euo pipefail

THEME="${1:-assets/theme.css}"
COMPS="${2:-compositions/*.html}"

if [ ! -f "$THEME" ]; then
  echo "missing theme file: $THEME" >&2
  exit 1
fi

classes=$(grep -oE '^\.[a-zA-Z][a-zA-Z0-9_-]*' "$THEME" | sort -u | sed 's/^\.//')
dead=()

for cls in $classes; do
  if ! grep -q "class=\"[^\"]*\\b${cls}\\b" $COMPS 2>/dev/null; then
    dead+=("$cls")
  fi
done

echo "Dead CSS classes (defined but 0 reference):"
printf '  - %s\n' "${dead[@]:-}"
echo ""
echo "Total: ${#dead[@]}"
