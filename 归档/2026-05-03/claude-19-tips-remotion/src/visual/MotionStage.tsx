import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { STAGE, THEME } from "./visualSystem";

export const MotionStage: React.FC<{
  children: React.ReactNode;
  compact?: boolean;
}> = ({ children, compact = false }) => {
  const frame = useCurrentFrame();
  const cycle = frame % (36 * 30);
  const cameraScale = interpolate(cycle, [0, 18 * 30, 36 * 30], [1, 1.018, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.ease),
  });
  const driftX = interpolate(cycle, [0, 18 * 30, 36 * 30], [-18, 16, -18], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const driftY = interpolate(cycle, [0, 18 * 30, 36 * 30], [12, -14, 12], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ overflow: "hidden" }}>
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(circle at 20% 18%, rgba(217,119,87,0.18), transparent 31%), radial-gradient(circle at 78% 72%, rgba(47,125,115,0.13), transparent 30%)",
          transform: `translate(${driftX}px, ${driftY}px) scale(${cameraScale})`,
        }}
      />
      <AbsoluteFill
        style={{
          display: "grid",
          placeItems: "center",
          padding: compact ? "54px 78px" : "70px 92px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: STAGE.maxWidth,
            minHeight: compact ? STAGE.compactMinHeight : STAGE.minHeight,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "stretch",
            position: "relative",
          }}
        >
          {children}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export const LightStreakTransition: React.FC<{ intensity?: number }> = ({
  intensity = 1,
}) => {
  const frame = useCurrentFrame();
  const sweep = interpolate(frame % 180, [0, 48, 96], [-42, 120, 162], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  const opacity = interpolate(frame % 180, [0, 30, 84, 120], [0, 0.22, 0.1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        pointerEvents: "none",
        opacity: opacity * intensity,
        mixBlendMode: "screen",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: `${sweep}%`,
          top: -120,
          width: 220,
          height: 1320,
          transform: "rotate(18deg)",
          background: `linear-gradient(90deg, transparent, ${THEME.colors.claudeOrange}, rgba(255,255,255,0.9), transparent)`,
          filter: "blur(14px)",
        }}
      />
    </AbsoluteFill>
  );
};
