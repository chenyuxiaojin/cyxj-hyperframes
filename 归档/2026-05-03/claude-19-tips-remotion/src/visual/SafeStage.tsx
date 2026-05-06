import React from "react";
import { AbsoluteFill } from "remotion";
import { SAFE_AREAS, THEME } from "./visualSystem";

export const SafeStage: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <AbsoluteFill>
      <div
        style={{
          position: "absolute",
          left: SAFE_AREAS.content.left,
          right: SAFE_AREAS.content.right,
          top: SAFE_AREAS.content.top,
          bottom: SAFE_AREAS.content.bottom,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {children}
      </div>
      <div
        style={{
          position: "absolute",
          right: SAFE_AREAS.host.right,
          top: SAFE_AREAS.host.top,
          width: SAFE_AREAS.host.width,
          bottom: SAFE_AREAS.host.bottom,
          borderLeft: `1px solid ${THEME.colors.line}`,
          opacity: 0.18,
        }}
      />
    </AbsoluteFill>
  );
};
