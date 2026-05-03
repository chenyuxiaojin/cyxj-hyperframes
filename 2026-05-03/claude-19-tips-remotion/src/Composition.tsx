import React from "react";
import { AbsoluteFill, Easing, interpolate, Sequence, useCurrentFrame } from "remotion";
import { TIP_TIMELINE, VIDEO_META } from "./data/timeline.generated";
import { TipScene } from "./scenes/TipScene";
import { WarmBackground } from "./visual/Background";
import { SafeStage } from "./visual/SafeStage";
import { SHADOWS, THEME } from "./visual/visualSystem";

export const Claude19TipsVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const titleIn = interpolate(frame, [0, 32], [18, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  const opacity = interpolate(frame, [0, 26], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        fontFamily: THEME.fontFamily,
        color: THEME.colors.text,
        background: THEME.colors.background,
      }}
    >
      <WarmBackground />
      <Sequence durationInFrames={msToFrame(TIP_TIMELINE[0].startMs)}>
        <SafeStage>
          <div
            style={{
              display: "inline-flex",
              alignSelf: "flex-start",
              padding: "12px 18px",
              border: `1px solid ${THEME.colors.line}`,
              borderRadius: 999,
              color: THEME.colors.mutedText,
              fontSize: 25,
              letterSpacing: 0,
              background: "rgba(255, 251, 245, 0.52)",
              boxShadow: SHADOWS.soft,
              opacity,
              transform: `translateY(${titleIn}px)`,
            }}
          >
            Motion-only / no source video / no rendered subtitles
          </div>
          <h1
            style={{
              margin: "32px 0 0",
              fontSize: 96,
              lineHeight: 1.04,
              letterSpacing: 0,
              maxWidth: 880,
              opacity,
              transform: `translateY(${titleIn}px)`,
            }}
          >
            Claude Code
            <br />
            19 个高频技巧
          </h1>
          <div
            style={{
              marginTop: 30,
              width: 560,
              height: 8,
              borderRadius: 999,
              background: THEME.colors.line,
              overflow: "hidden",
              opacity,
            }}
          >
            <div
              style={{
                width: "38%",
                height: "100%",
                background: THEME.colors.claudeOrange,
                borderRadius: 999,
              }}
            />
          </div>
          <p
            style={{
              margin: "34px 0 0",
              color: THEME.colors.mutedText,
              fontSize: 31,
              lineHeight: 1.42,
              maxWidth: 780,
              opacity,
              transform: `translateY(${titleIn}px)`,
            }}
          >
            {TIP_TIMELINE.length} tips paced from the fixed SRT timeline.
            Visuals stay clear for DaVinci host and subtitle layers.
          </p>
        </SafeStage>
      </Sequence>
      {TIP_TIMELINE.map((tip) => (
        <Sequence
          key={tip.slug}
          from={msToFrame(tip.startMs)}
          durationInFrames={Math.max(1, msToFrame(tip.durationMs))}
        >
          <TipScene tip={tip} />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};

const msToFrame = (ms: number) => Math.round((ms / 1000) * VIDEO_META.fps);
