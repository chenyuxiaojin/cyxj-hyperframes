import React from "react";
import {
  Easing,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { SHADOWS, THEME } from "../visual/visualSystem";

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

export const typeText = (text: string, frame: number, start = 10, speed = 1.5) =>
  text.slice(0, clamp(Math.floor((frame - start) / speed), 0, text.length));

export const TerminalWindow: React.FC<{
  title?: string;
  children: React.ReactNode;
  width?: number;
}> = ({ title = "claude-code", children, width = 1010 }) => {
  return (
    <div
      style={{
        width,
        borderRadius: 8,
        overflow: "hidden",
        background: THEME.colors.terminal,
        boxShadow: SHADOWS.terminal,
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        style={{
          height: 54,
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "0 20px",
          background: THEME.colors.terminalSoft,
          color: "rgba(248, 241, 231, 0.72)",
          fontFamily: THEME.monoFamily,
          fontSize: 18,
        }}
      >
        <span style={{ width: 13, height: 13, borderRadius: 99, background: "#E86F58" }} />
        <span style={{ width: 13, height: 13, borderRadius: 99, background: "#D7A541" }} />
        <span style={{ width: 13, height: 13, borderRadius: 99, background: "#55A66A" }} />
        <span style={{ marginLeft: 12 }}>{title}</span>
      </div>
      <div
        style={{
          minHeight: 500,
          padding: "28px 30px 24px",
          fontFamily: THEME.monoFamily,
          color: THEME.colors.terminalText,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export const TypingPrompt: React.FC<{ command: string; start?: number }> = ({
  command,
  start = 12,
}) => {
  const frame = useCurrentFrame();
  const typed = typeText(command, frame, start);
  const cursorOpacity = frame % 28 < 16 ? 1 : 0;

  return (
    <div style={{ display: "flex", gap: 14, alignItems: "center", fontSize: 31 }}>
      <span style={{ color: THEME.colors.claudeOrange }}>chen@mac</span>
      <span style={{ color: "rgba(248,241,231,0.45)" }}>~/project</span>
      <span style={{ color: THEME.colors.teal }}>$</span>
      <span>{typed}</span>
      <span style={{ opacity: cursorOpacity }}>_</span>
    </div>
  );
};

export const CommandResult: React.FC<{ lines: string[]; start?: number }> = ({
  lines,
  start = 54,
}) => {
  const frame = useCurrentFrame();
  return (
    <div style={{ marginTop: 30, display: "grid", gap: 13, fontSize: 23 }}>
      {lines.map((line, index) => {
        const opacity = interpolate(frame, [start + index * 9, start + index * 9 + 14], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });
        return (
          <div
            key={line}
            style={{
              opacity,
              color: line.startsWith("✓")
                ? "#A8D8BD"
                : line.startsWith("!")
                  ? "#F2C178"
                  : "rgba(248,241,231,0.78)",
            }}
          >
            {line}
          </div>
        );
      })}
    </div>
  );
};

export const StatusLineDemo: React.FC = () => {
  const frame = useCurrentFrame();
  const context = Math.round(interpolate(frame, [18, 88], [18, 54], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  }));
  return (
    <div
      style={{
        marginTop: 98,
        height: 58,
        borderRadius: 6,
        background: "rgba(248,241,231,0.08)",
        border: "1px solid rgba(248,241,231,0.14)",
        display: "grid",
        gridTemplateColumns: "1.1fr 1fr 0.9fr 0.9fr",
        alignItems: "center",
        padding: "0 22px",
        fontSize: 18,
        color: "rgba(248,241,231,0.8)",
      }}
    >
      <span>model opus</span>
      <span>context {context}%</span>
      <span>cost $1.42</span>
      <span>tokens 38k</span>
    </div>
  );
};

export const ContextGauge: React.FC<{ value: number; label?: string }> = ({
  value,
  label = "context",
}) => {
  const frame = useCurrentFrame();
  const current = interpolate(frame, [12, 78], [0, value], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  const angle = current * 3.6;
  return (
    <div
      style={{
        width: 210,
        height: 210,
        borderRadius: "50%",
        background: `conic-gradient(${THEME.colors.claudeOrange} ${angle}deg, ${THEME.colors.line} ${angle}deg)`,
        display: "grid",
        placeItems: "center",
        boxShadow: SHADOWS.soft,
      }}
    >
      <div
        style={{
          width: 154,
          height: 154,
          borderRadius: "50%",
          background: "rgba(255,251,245,0.92)",
          display: "grid",
          placeItems: "center",
          color: THEME.colors.text,
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 48, fontWeight: 800 }}>{Math.round(current)}%</div>
          <div style={{ fontSize: 19, color: THEME.colors.mutedText }}>{label}</div>
        </div>
      </div>
    </div>
  );
};

export const ContextBreakdown: React.FC = () => {
  const rows = [
    ["system prompt", 18],
    ["CLAUDE.md", 12],
    ["file contents", 31],
    ["MCP servers", 20],
    ["conversation", 19],
  ];
  const frame = useCurrentFrame();
  return (
    <Panel title="context breakdown">
      <div style={{ display: "grid", gap: 16 }}>
        {rows.map(([name, amount], index) => {
          const width = interpolate(frame, [12 + index * 7, 52 + index * 7], [0, Number(amount)], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          return (
            <div key={name}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: 18,
                  color: THEME.colors.mutedText,
                  marginBottom: 8,
                }}
              >
                <span>{name}</span>
                <span>{amount}%</span>
              </div>
              <div style={{ height: 10, borderRadius: 99, background: THEME.colors.line }}>
                <div
                  style={{
                    height: "100%",
                    width: `${width}%`,
                    borderRadius: 99,
                    background: index === 3 ? THEME.colors.teal : THEME.colors.claudeOrange,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </Panel>
  );
};

export const PlanModePanel: React.FC = () => (
  <Panel title="Plan Mode">
    <StepList
      steps={[
        "clarify constraints",
        "inspect files",
        "write plan",
        "wait for approval",
        "execute with checkpoints",
      ]}
    />
  </Panel>
);

export const SelfCheckTodo: React.FC = () => (
  <Panel title="Self-check Todo">
    <StepList
      steps={[
        "parse requirements",
        "implement change",
        "run local checks",
        "inspect final output",
        "report risks",
      ]}
      checked
    />
  </Panel>
);

export const EscStopCard: React.FC<{ double?: boolean }> = ({ double = false }) => {
  const frame = useCurrentFrame();
  const pulse = interpolate(frame % 42, [0, 16, 42], [1, 1.08, 1], {
    extrapolateRight: "clamp",
  });
  return (
    <Panel title={double ? "Double ESC rollback" : "ESC stop"}>
      <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
        {(double ? ["ESC", "ESC"] : ["ESC"]).map((key, index) => (
          <div
            key={`${key}-${index}`}
            style={{
              width: 150,
              height: 92,
              borderRadius: 8,
              border: `2px solid ${THEME.colors.claudeOrange}`,
              display: "grid",
              placeItems: "center",
              fontSize: 34,
              fontFamily: THEME.monoFamily,
              fontWeight: 800,
              transform: `scale(${pulse})`,
              background: "rgba(217,119,87,0.08)",
            }}
          >
            {key}
          </div>
        ))}
        <div style={{ fontSize: 28, fontWeight: 800 }}>
          {double ? "回退到上一节点" : "立即停下，修正方向"}
        </div>
      </div>
    </Panel>
  );
};

export const HooksNotification: React.FC = () => {
  const frame = useCurrentFrame();
  const slide = interpolate(frame, [8, 42], [46, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  return (
    <Panel title="Hooks notification">
      <div
        style={{
          transform: `translateY(${slide}px)`,
          background: "#FFF8EF",
          border: `1px solid ${THEME.colors.line}`,
          borderRadius: 8,
          padding: 26,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: SHADOWS.soft,
        }}
      >
        <div>
          <div style={{ fontSize: 30, fontWeight: 800 }}>Claude task completed</div>
          <div style={{ marginTop: 8, fontSize: 22, color: THEME.colors.mutedText }}>
            play sound + desktop alert
          </div>
        </div>
        <div style={{ fontSize: 48, color: THEME.colors.claudeOrange }}>✓</div>
      </div>
    </Panel>
  );
};

export const ScreenshotDropzone: React.FC = () => (
  <Panel title="Screenshot dropzone">
    <div
      style={{
        height: 260,
        border: `2px dashed ${THEME.colors.claudeOrange}`,
        borderRadius: 8,
        display: "grid",
        placeItems: "center",
        color: THEME.colors.mutedText,
        background: "rgba(255,248,239,0.62)",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: 56 }}>⌖</div>
        <div style={{ fontSize: 30, fontWeight: 800, color: THEME.colors.text }}>
          drop error screenshot
        </div>
        <div style={{ marginTop: 10, fontSize: 21 }}>Claude sees the UI state directly</div>
      </div>
    </div>
  </Panel>
);

export const WorktreeParallel: React.FC = () => (
  <Panel title="worktree parallel flow">
    <div style={{ display: "grid", gridTemplateColumns: "1fr 120px 1fr", alignItems: "center" }}>
      <Branch label="Claude Code" detail="feature/claude" color={THEME.colors.claudeOrange} />
      <div style={{ textAlign: "center", color: THEME.colors.mutedText, fontSize: 28 }}>merge</div>
      <Branch label="Codex" detail="codex/parallel" color={THEME.colors.teal} />
    </div>
  </Panel>
);

export const ApiVsMcpCompare: React.FC = () => (
  <Panel title="API endpoint vs MCP server">
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22 }}>
      <CompareColumn title="API" rows={["small context", "one endpoint", "good for search"]} accent={THEME.colors.teal} />
      <CompareColumn title="MCP" rows={["more tools", "more context", "install only when needed"]} accent={THEME.colors.claudeOrange} />
    </div>
  </Panel>
);

export const RemoteControlQR: React.FC = () => {
  const cells = Array.from({ length: 49 }, (_, index) => {
    const x = index % 7;
    const y = Math.floor(index / 7);
    return x < 2 || y < 2 || (x + y) % 3 === 0 || (x === 5 && y > 3);
  });
  return (
    <Panel title="remote control">
      <div style={{ display: "flex", gap: 34, alignItems: "center" }}>
        <div
          style={{
            width: 228,
            height: 228,
            background: "#FFF8EF",
            border: `1px solid ${THEME.colors.line}`,
            padding: 18,
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            gap: 7,
          }}
        >
          {cells.map((on, index) => (
            <div key={index} style={{ background: on ? THEME.colors.text : "transparent" }} />
          ))}
        </div>
        <div>
          <div style={{ fontSize: 34, fontWeight: 800 }}>scan and leave the desk</div>
          <div style={{ marginTop: 12, fontSize: 23, color: THEME.colors.mutedText }}>
            phone or browser keeps the session reachable
          </div>
        </div>
      </div>
    </Panel>
  );
};

export const ThinkingBudgetCard: React.FC = () => (
  <Panel title="thinking budget">
    <div style={{ display: "grid", gap: 18 }}>
      <BudgetRow label="normal" value={34} />
      <BudgetRow label="plan mode" value={62} />
      <BudgetRow label="ultrathink" value={92} />
    </div>
  </Panel>
);

export const AgentTeamsPanel: React.FC = () => (
  <Panel title="Agent teams">
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 18 }}>
      {["advisor", "worker", "reviewer"].map((role, index) => (
        <div
          key={role}
          style={{
            padding: 22,
            borderRadius: 8,
            border: `1px solid ${THEME.colors.line}`,
            background: index === 0 ? "rgba(217,119,87,0.1)" : "rgba(255,248,239,0.65)",
          }}
        >
          <div style={{ fontSize: 28, fontWeight: 800 }}>{role}</div>
          <div style={{ marginTop: 18, height: 4, background: index === 2 ? THEME.colors.teal : THEME.colors.claudeOrange }} />
          <div style={{ marginTop: 16, fontSize: 19, color: THEME.colors.mutedText }}>
            shared task list
          </div>
        </div>
      ))}
    </div>
  </Panel>
);

export const SkillCreatorCard: React.FC = () => (
  <Panel title="Skill Creator">
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
      {["SKILL.md", "workflow", "scripts/", "examples/"].map((item) => (
        <div
          key={item}
          style={{
            padding: 20,
            borderRadius: 8,
            background: "rgba(255,248,239,0.72)",
            border: `1px solid ${THEME.colors.line}`,
            fontFamily: THEME.monoFamily,
            fontSize: 26,
            color: item === "SKILL.md" ? THEME.colors.claudeOrange : THEME.colors.text,
          }}
        >
          {item}
        </div>
      ))}
    </div>
  </Panel>
);

export const Panel: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <div
    style={{
      width: 1010,
      padding: 28,
      borderRadius: 8,
      background: "rgba(255,251,245,0.76)",
      border: `1px solid ${THEME.colors.line}`,
      boxShadow: SHADOWS.panel,
    }}
  >
    <div
      style={{
        marginBottom: 24,
        fontSize: 21,
        fontWeight: 800,
        letterSpacing: 0,
        color: THEME.colors.claudeOrange,
        textTransform: "uppercase",
      }}
    >
      {title}
    </div>
    {children}
  </div>
);

const StepList: React.FC<{ steps: string[]; checked?: boolean }> = ({
  steps,
  checked = false,
}) => {
  const frame = useCurrentFrame();
  return (
    <div style={{ display: "grid", gap: 16 }}>
      {steps.map((step, index) => {
        const active = frame > 18 + index * 18;
        return (
          <div
            key={step}
            style={{
              display: "grid",
              gridTemplateColumns: "34px 1fr",
              gap: 16,
              alignItems: "center",
              fontSize: 26,
              color: active ? THEME.colors.text : THEME.colors.mutedText,
              opacity: active ? 1 : 0.42,
            }}
          >
            <span
              style={{
                width: 28,
                height: 28,
                borderRadius: 6,
                display: "grid",
                placeItems: "center",
                background: active ? THEME.colors.claudeOrange : "transparent",
                border: `1px solid ${active ? THEME.colors.claudeOrange : THEME.colors.line}`,
                color: "#FFF8EF",
                fontSize: 18,
              }}
            >
              {active && checked ? "✓" : active ? index + 1 : ""}
            </span>
            <span>{step}</span>
          </div>
        );
      })}
    </div>
  );
};

const Branch: React.FC<{ label: string; detail: string; color: string }> = ({
  label,
  detail,
  color,
}) => (
  <div
    style={{
      borderRadius: 8,
      border: `2px solid ${color}`,
      padding: 28,
      background: "rgba(255,248,239,0.62)",
    }}
  >
    <div style={{ fontSize: 32, fontWeight: 800 }}>{label}</div>
    <div style={{ marginTop: 12, fontFamily: THEME.monoFamily, fontSize: 21, color }}>
      {detail}
    </div>
  </div>
);

const CompareColumn: React.FC<{ title: string; rows: string[]; accent: string }> = ({
  title,
  rows,
  accent,
}) => (
  <div
    style={{
      padding: 24,
      borderRadius: 8,
      border: `2px solid ${accent}`,
      background: "rgba(255,248,239,0.66)",
    }}
  >
    <div style={{ fontSize: 36, fontWeight: 900, color: accent }}>{title}</div>
    <div style={{ marginTop: 22, display: "grid", gap: 14 }}>
      {rows.map((row) => (
        <div key={row} style={{ fontSize: 23, color: THEME.colors.text }}>
          ✓ {row}
        </div>
      ))}
    </div>
  </div>
);

const BudgetRow: React.FC<{ label: string; value: number }> = ({ label, value }) => {
  const frame = useCurrentFrame();
  const width = interpolate(frame, [10, 72], [0, value], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24 }}>
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div style={{ marginTop: 10, height: 18, borderRadius: 999, background: THEME.colors.line }}>
        <div
          style={{
            width: `${width}%`,
            height: "100%",
            borderRadius: 999,
            background: value > 80 ? THEME.colors.claudeOrange : THEME.colors.teal,
          }}
        />
      </div>
    </div>
  );
};

export const MiniCards: React.FC<{ items: string[] }> = ({ items }) => {
  const { fps } = useVideoConfig();
  const frame = useCurrentFrame();
  return (
    <div style={{ display: "flex", gap: 14, marginTop: 22, flexWrap: "wrap" }}>
      {items.map((item, index) => {
        const opacity = interpolate(frame, [0.4 * fps + index * 8, 0.8 * fps + index * 8], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });
        return (
          <div
            key={item}
            style={{
              opacity,
              padding: "10px 14px",
              borderRadius: 7,
              background: "rgba(255,248,239,0.74)",
              border: `1px solid ${THEME.colors.line}`,
              color: THEME.colors.mutedText,
              fontSize: 18,
            }}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};
