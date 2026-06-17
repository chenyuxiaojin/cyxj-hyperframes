#!/bin/bash
# hf-lint-hook.sh — Claude Code PostToolUse 钩子
#
# 在 Edit/Write 一个 HyperFrames composition / index HTML 后，对该文件做
# 制作规范/docs/HARD_CONSTRAINTS.md 里「机械可检测」那批硬约束的 grep 自检。
# 命中就通过 hookSpecificOutput.additionalContext 把警告注入回模型，让它自纠。
#
# 设计：
#   - 非阻塞：永远 exit 0。编辑已经发生，这里只是提醒，不撤销。
#   - 零噪音：没命中就什么都不输出。
#   - 只管自己写的工程文件，自动跳过只读上游（student-kit / launches / templates / 归档 / 参考库）。
#
# 输入：Claude Code 钩子 JSON（stdin），取 .tool_input.file_path。
# 依赖：jq、grep（macOS 自带）。

input=$(cat)
file=$(printf '%s' "$input" | jq -r '.tool_input.file_path // empty')

# 只 lint .html
case "$file" in
  *.html) ;;
  *) exit 0 ;;
esac
[ -f "$file" ] || exit 0

# 跳过只读上游 / 参考目录（不是我们手写的 composition）
case "$file" in
  *hyperframes-student-kit/*|*hyperframes-launches/*|*/组件库/*|*/归档/*|*/参考/*|*remotion-text-effects/*) exit 0 ;;
esac

warnings=""
add() { warnings="${warnings}- ${1}"$'\n'; }

# §1 GSAP selector 禁 template literal（反引号）—— 必须硬编码 '[data-composition-id="X"] .child'
if grep -nE "\.(to|from|fromTo|set)\(\s*\`" "$file" >/dev/null 2>&1; then
  add "§1 GSAP selector 用了反引号模板字符串 —— 必须硬编码 '[data-composition-id=\"X\"] .child'"
fi

# §3/§9 sub-composition 禁用 '#X .child' selector —— bundler 会 strip 内层 wrapper，必须用 [data-composition-id]
if grep -nE "\.(to|from|fromTo|set)\(\s*['\"]#[A-Za-z]" "$file" >/dev/null 2>&1; then
  add "§3/§9 GSAP selector 以 '#id' 开头 —— sub-composition 内层 wrapper 会被 strip，请改用 '[data-composition-id=\"X\"]'"
fi

# §11 onUpdate 里禁逐帧 getElementById（8+ sub-composition 工程会内存爆）
if grep -nE "onUpdate.*getElementById" "$file" >/dev/null 2>&1; then
  add "§11 onUpdate 同行出现 getElementById —— 应在 timeline 外 cache 引用，别每帧 lookup"
fi

# §20 禁 repeat: -1（任何 timeline / tween）
if grep -nE "repeat:\s*-1" "$file" >/dev/null 2>&1; then
  add "§20 出现 repeat: -1 —— 无限循环在任何 timeline/tween 上都禁止"
fi

# §21 禁 wall-clock 依赖
if grep -nE "Math\.random\(|Date\.now\(|new Date\(" "$file" >/dev/null 2>&1; then
  add "§21 出现 Math.random / Date.now / new Date —— 禁任何 wall-clock 依赖（render 不确定）"
fi

# §22 禁 async / await / setTimeout / setInterval / Promise（必须同步构建 timeline）
if grep -nE "setTimeout\(|setInterval\(|\bawait\b|new Promise\(|async\s+(function|\()" "$file" >/dev/null 2>&1; then
  add "§22 出现 async/await/setTimeout/setInterval/Promise —— timeline 必须同步构建"
fi

# §24 禁手动调媒体 play()/pause()/currentTime（framework owns playback）
if grep -nE "\.(play|pause)\(\)|\.currentTime" "$file" >/dev/null 2>&1; then
  add "§24 出现 .play()/.pause()/.currentTime —— 媒体播放由 framework 接管，不准手动调"
fi

# §25 内容文本禁 <br>，用 max-width 自动换行
if grep -nE "<br\s*/?>" "$file" >/dev/null 2>&1; then
  add "§25 出现 <br> —— 内容文本禁手动换行，用 max-width 自动换行"
fi

# §29 禁用废弃属性 data-layer / data-end
if grep -nE "data-(layer|end)=" "$file" >/dev/null 2>&1; then
  add "§29 出现废弃属性 data-layer / data-end —— 改用 data-track-index / data-duration"
fi

# 有命中才输出（注入回模型）；没命中静默
if [ -n "$warnings" ]; then
  msg="⚠️ HARD_CONSTRAINTS 机械自检命中 — ${file}
${warnings}请对照 制作规范/docs/HARD_CONSTRAINTS.md 确认。极少数是合法例外，不是每条都得改。"
  jq -nc --arg ctx "$msg" '{hookSpecificOutput:{hookEventName:"PostToolUse",additionalContext:$ctx}}'
fi
exit 0
