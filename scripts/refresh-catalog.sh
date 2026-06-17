#!/bin/bash
# 月度刷新 hyperframes catalog 索引
# 用法：bash scripts/refresh-catalog.sh

set -e
cd "$(dirname "$0")/.."

echo "🔄 拉取最新 catalog..."
npx hyperframes catalog --json > 参考/catalog.json

TOTAL=$(jq 'length' 参考/catalog.json)
BLOCKS=$(jq '[.[] | select(.type=="block")] | length' 参考/catalog.json)
COMPONENTS=$(jq '[.[] | select(.type=="component")] | length' 参考/catalog.json)

echo ""
echo "✅ catalog.json 已刷新（$(date +%F)）"
echo "   总条目：$TOTAL"
echo "   blocks：$BLOCKS"
echo "   components：$COMPONENTS"
echo ""
echo "💡 下一步：手动盘点 制作规范/docs/REFERENCE_INDEX.md 的「Catalog 零件」板块，看是否有新增的需要补进索引"
