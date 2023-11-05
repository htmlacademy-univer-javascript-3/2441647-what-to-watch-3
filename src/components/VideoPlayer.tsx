/* eslint-disable @typescript-eslint/no-unsafe-call */
import React, { useEffect, useRef } from 'react';
interface VideoPlayerProps {
  poster: string;
  videoSrc: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  poster,
  videoSrc,
}) => {
  let videoTimer = setTimeout(() => 0, 0);
  const vidRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (vidRef !== null && vidRef.current !== null) {
      vidRef.current.pause();
    }
  }, []);

  const handlePlayVideo = () => {
    if (vidRef !== null && vidRef.current !== null) {
      videoTimer = setTimeout(() => {
        if (vidRef !== null && vidRef.current !== null) {
          vidRef.current.load();
        }
      }, 1000);
    }
  };
  const handleStopVideo = () => {
    if (vidRef !== null && vidRef.current !== null) {
      clearTimeout(videoTimer);
      vidRef.current.load();
      vidRef.current.pause();
    }
  };
  return (
    <video
      ref={vidRef}
      muted
      onMouseEnter={() => handlePlayVideo()}
      onMouseLeave={() => handleStopVideo()}
      autoPlay
      poster={poster}
      width="260"
      height="190"
    >
      <source src={videoSrc} type="video/webm" />
    </video>
  );
};
