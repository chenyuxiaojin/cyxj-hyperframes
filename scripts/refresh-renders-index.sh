#!/bin/bash
# refresh-renders-index.sh
#
# 扫描所有视频工程的 renders/ 目录，把 final*.mp4|mov 软链到顶层 renders/ 大厅。
# 跨 macOS / Linux。Windows 未测。
#
# 用法：
#   bash scripts/refresh-renders-index.sh           # 干跑（默认，只看不改）
#   bash scripts/refresh-renders-index.sh --apply   # 真改
#
# 安全：
#   - 只建软链不动原文件
#   - 旧软链先 -type l 判断后删，不会误删真文件
#   - 默认 dry-run，加 --apply 才动手
#
# 排除：hyperframes-student-kit/、hyperframes-launches/、node_modules/、.thumbnails/、.claude/、.playwright-mcp/

set -e

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
RENDERS_DIR="$ROOT/renders"
APPLY="false"

if [ "$1" = "--apply" ]; then
  APPLY="true"
fi

if [ "$APPLY" = "false" ]; then
  echo "🟡 干跑模式（dry-run）。加 --apply 才真改。"
  echo ""
fi

mkdir -p "$RENDERS_DIR"

# 清掉旧软链（只删 symlink，不删真文件）
if [ "$APPLY" = "true" ]; then
  find "$RENDERS_DIR" -maxdepth 1 -type l -delete 2>/dev/null || true
fi

# 扫描所有 final*.mp4|mov，排除上游/缓存/node_modules
find "$ROOT" \
  \( \
    -type d -name '.git' -o \
    -type d -name 'node_modules' -o \
    -type d -name 'hyperframes-student-kit' -o \
    -type d -name 'hyperframes-launches' -o \
    -type d -name '.thumbnails' -o \
    -type d -name '.claude' -o \
    -type d -name '.playwright-mcp' \
  \) -prune -o \
  -type f \( -name 'final*.mp4' -o -name 'final*.mov' \) -print 2>/dev/null | while read -r mp4; do
    project_dir=$(dirname "$(dirname "$mp4")")
    slug=$(basename "$project_dir")
    filename=$(basename "$mp4")
    out="$RENDERS_DIR/${slug}__${filename}"

    rel=$(python3 -c "import os.path,sys; print(os.path.relpath(sys.argv[1], sys.argv[2]))" "$mp4" "$RENDERS_DIR")

    if [ "$APPLY" = "true" ]; then
      ln -sf "$rel" "$out"
      echo "✅ $out"
    else
      echo "→ 会建: $out"
      echo "     ↳ $rel"
    fi
done

echo ""
if [ "$APPLY" = "true" ]; then
  TOTAL=$(find "$RENDERS_DIR" -maxdepth 1 -type l | wc -l | tr -d ' ')
  echo "完成。renders/ 现有 $TOTAL 个软链。"
else
  echo "干跑完毕。要真建软链跑：bash scripts/refresh-renders-index.sh --apply"
fi
