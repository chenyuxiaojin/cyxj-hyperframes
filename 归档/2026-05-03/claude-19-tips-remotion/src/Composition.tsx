import React from "react";
import { AbsoluteFill, Audio, Easing, interpolate, Sequence, staticFile, useCurrentFrame } from "remotion";
import { AUDIO_ASSETS } from "./audio/audioAssets";
import { SfxLayer } from "./audio/SfxLayer";
import { TIP_TIMELINE, VIDEO_META } from "./data/timeline.generated";
import { TipScene } from "./scenes/TipScene";
import { WarmBackground } from "./visual/Background";
import { LightStreakTransition, MotionStage } from "./visual/MotionStage";
import { SHADOWS, THEME } from "./visual/visualSystem";

export const Claude19TipsVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const titleIn = interpolate(frame, [0, 32], [18, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  const opacity = interpolate(frame, [0, 26], [0.7, 1], {
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
      <Audio src={staticFile(AUDIO_ASSETS.referenceVoice)} volume={1} showInTimeline={false} />
      <SfxLayer />
      <Sequence durationInFrames={msToFrame(TIP_TIMELINE[0].startMs)}>
        <MotionStage>
          <div
            style={{
              display: "inline-flex",
              alignSelf: "center",
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
            Claude Code 工作流
          </div>
          <h1
            style={{
              margin: "32px 0 0",
              fontSize: 104,
              lineHeight: 1.04,
              letterSpacing: 0,
              maxWidth: 1180,
              textAlign: "center",
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
              width: 680,
              alignSelf: "center",
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
              maxWidth: 960,
              textAlign: "center",
              alignSelf: "center",
              opacity,
              transform: `translateY(${titleIn}px)`,
            }}
          >
            非程序员高频使用技巧，按正式口播节奏编排。
            全画面居中，只渲染 motion graphics 和参考人声。
          </p>
        </MotionStage>
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
      <LightStreakTransition intensity={0.8} />
    </AbsoluteFill>
  );
};

const msToFrame = (ms: number) => Math.round((ms / 1000) * VIDEO_META.fps);
