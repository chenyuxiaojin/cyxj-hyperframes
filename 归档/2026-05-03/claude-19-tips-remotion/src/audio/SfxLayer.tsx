import React from "react";
import { Audio, Sequence, staticFile } from "remotion";
import { TIP_TIMELINE, VIDEO_META } from "../data/timeline.generated";
import { sfxForCue } from "./sfxManifest";

export const SfxLayer: React.FC = () => {
  const cues = TIP_TIMELINE.flatMap((tip) => tip.cues);

  return (
    <>
      {cues.map((cue) => {
        const sfx = sfxForCue(cue);
        return (
          <Sequence
            key={cue.id}
            from={msToFrame(cue.startMs)}
            durationInFrames={18}
            showInTimeline={false}
          >
            <Audio src={staticFile(sfx.file)} volume={() => sfx.volume} showInTimeline={false} />
          </Sequence>
        );
      })}
    </>
  );
};

const msToFrame = (ms: number) => Math.round((ms / 1000) * VIDEO_META.fps);
