import React from "react";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

const BG_COLOR = "#1A1814";

const easeInOut = Easing.bezier(0.45, 0, 0.55, 1);

type SpotlightProps = {
  cx: number;
  cy: number;
  r: number;
  color: string;
  opacity: number;
};

const Spotlight: React.FC<SpotlightProps> = ({ cx, cy, r, color, opacity }) => (
  <div
    style={{
      position: "absolute",
      left: cx - r,
      top: cy - r,
      width: r * 2,
      height: r * 2,
      borderRadius: "50%",
      background: `radial-gradient(circle, ${color}, transparent 70%)`,
      filter: "blur(40px)",
      opacity,
      pointerEvents: "none",
    }}
  />
);

export const ComparisonBackground: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const cycleFrames = 35 * fps;
  const phase = (frame % cycleFrames) / cycleFrames;

  const breath = interpolate(phase, [0, 0.5, 1], [0, 1, 0], { easing: easeInOut });
  const driftX = interpolate(phase, [0, 0.5, 1], [-15, 15, -15], { easing: easeInOut });
  const driftY = interpolate(phase, [0, 0.5, 1], [8, -8, 8], { easing: easeInOut });

  const grainCycleFrames = 9 * fps;
  const grainPhase = (frame % grainCycleFrames) / grainCycleFrames;
  const grainOpacity = 0.04 + Math.abs(Math.sin(grainPhase * Math.PI * 2)) * 0.02;

  return (
    <AbsoluteFill style={{ backgroundColor: BG_COLOR, overflow: "hidden" }}>
      <Spotlight
        cx={480 + driftX}
        cy={270 + driftY}
        r={700}
        color="rgba(247, 242, 234, 0.5)"
        opacity={0.08 + breath * 0.04}
      />
      <Spotlight
        cx={1440 - driftX}
        cy={270 + driftY}
        r={700}
        color="rgba(91, 169, 255, 0.4)"
        opacity={0.06 + breath * 0.03}
      />
      <Spotlight
        cx={960}
        cy={800 - driftY}
        r={520}
        color="rgba(217, 119, 87, 0.45)"
        opacity={0.07 + breath * 0.04}
      />

      <AbsoluteFill
        style={{
          background:
            "radial-gradient(ellipse 75% 75% at 50% 50%, transparent 30%, rgba(0, 0, 0, 0.4) 100%)",
          pointerEvents: "none",
        }}
      />

      <AbsoluteFill
        style={{
          opacity: grainOpacity,
          backgroundImage:
            "radial-gradient(circle at 12px 18px, rgba(255, 255, 255, 0.5) 0.8px, transparent 1.1px)",
          backgroundSize: "34px 34px",
          mixBlendMode: "overlay",
          pointerEvents: "none",
        }}
      />
    </AbsoluteFill>
  );
};
