#!/bin/bash
# hf-guard-upstream.sh — Claude Code PreToolUse 钩子
#
# Edit/Write 命中「只读上游镜像」目录时，返回 permissionDecision=ask 弹确认，
# 防止手滑改了 hyperframes-student-kit/ 或 hyperframes-launches/（HARD_CONSTRAINTS §6：
# 这俩是上游，不改、不 commit；跨工程复用应复制到活工程，不是改上游镜像）。
#
# 非阻塞：匹配则弹确认（用户可放行），不匹配则静默走正常权限流程。
# 输入：Claude Code 钩子 JSON（stdin），取 .tool_input.file_path。

input=$(cat)
file=$(printf '%s' "$input" | jq -r '.tool_input.file_path // empty')

case "$file" in
  *hyperframes-student-kit/*|*hyperframes-launches/*)
    reason="⚠️ 这是上游只读镜像目录（HARD_CONSTRAINTS §6：不改、不 commit hyperframes-student-kit/ 与 hyperframes-launches/）。跨工程复用应把零件复制进活工程，而不是改上游。确认真要改这里？"
    jq -nc --arg r "$reason" '{hookSpecificOutput:{hookEventName:"PreToolUse",permissionDecision:"ask",permissionDecisionReason:$r}}'
    ;;
esac
exit 0
