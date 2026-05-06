import React from "react";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { THEME } from "./visualSystem";

export const WarmBackground: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const cycle = 34 * fps;
  const phase = (frame % cycle) / cycle;
  const driftX = interpolate(phase, [0, 0.5, 1], [-120, 90, -120], {
    easing: Easing.bezier(0.45, 0, 0.55, 1),
  });
  const driftY = interpolate(phase, [0, 0.5, 1], [30, -48, 30], {
    easing: Easing.bezier(0.45, 0, 0.55, 1),
  });
  const glowScale = interpolate(phase, [0, 0.5, 1], [1, 1.08, 1], {
    easing: Easing.bezier(0.45, 0, 0.55, 1),
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: THEME.colors.background,
        color: THEME.colors.text,
        fontFamily: THEME.fontFamily,
        overflow: "hidden",
      }}
    >
      <AbsoluteFill
        style={{
          background:
            "linear-gradient(120deg, rgba(239, 231, 220, 0.62), rgba(247, 242, 234, 0) 54%), radial-gradient(circle at 78% 24%, rgba(47, 125, 115, 0.08), rgba(47, 125, 115, 0) 26%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 760,
          height: 760,
          left: 1040 + driftX,
          top: 128 + driftY,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(217, 119, 87, 0.24), rgba(217, 119, 87, 0.08) 42%, rgba(217, 119, 87, 0) 70%)",
          filter: "blur(8px)",
          transform: `scale(${glowScale})`,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(43, 38, 34, 0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(43, 38, 34, 0.038) 1px, transparent 1px)",
          backgroundSize: "82px 82px",
          opacity: 0.32,
          transform: `translate(${driftX * 0.05}px, ${driftY * 0.05}px)`,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.13,
          backgroundImage:
            "radial-gradient(circle at 12px 18px, rgba(43, 38, 34, 0.22) 0.8px, transparent 1.1px)",
          backgroundSize: "34px 34px",
          mixBlendMode: "multiply",
        }}
      />
    </AbsoluteFill>
  );
};
