import "./index.css";
import { Composition } from "remotion";
import { Claude19TipsVideo } from "./Composition";
import { VIDEO_META } from "./data/timeline.generated";
import { ComparisonBackground } from "./visual/ComparisonBackground";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Claude19Tips"
        component={Claude19TipsVideo}
        durationInFrames={VIDEO_META.durationInFrames}
        fps={VIDEO_META.fps}
        width={VIDEO_META.width}
        height={VIDEO_META.height}
      />
      <Composition
        id="ComparisonBackground"
        component={ComparisonBackground}
        durationInFrames={35 * 30}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
