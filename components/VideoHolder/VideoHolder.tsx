import React from "react";

interface VideoHolderProps {
  width?: number;
  height?: number;
  src: string;
}

const DEFAULTS = {
  width: 560,
  height: 310
};

const VideoHolder: React.FC<VideoHolderProps> = ({ width, height, src }) => {
  return (
    <iframe
      width={width || DEFAULTS.width}
      height={height || DEFAULTS.height}
      src={src}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

export default VideoHolder;