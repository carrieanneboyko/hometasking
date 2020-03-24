import React from "react";
import styled from "styled-components";

interface VideoHolderProps {
  width?: number;
  height?: number;
  src: string;
  isTaskmaster?: boolean;
}

const DEFAULTS = {
  width: 560,
  height: 310
};
const StyledVideoFlexbox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;
const StyledVideoContainer = styled.div<{
  isTaskmaster: boolean;
  width: number;
  height: number;
}>`
  padding: 10px;
  border: ${({ isTaskmaster }) =>
    isTaskmaster ? `3px solid #D4AF37` : `3px solid tranparent`};
  max-width: ${({ width }) => width}px;
  max-height: ${({ height }) => height}px;
`;

const VideoHolder: React.FC<VideoHolderProps> = ({
  width,
  height,
  src,
  isTaskmaster
}) => {
  const w = width || DEFAULTS.width;
  const h = height || DEFAULTS.height;
  return (
    <StyledVideoFlexbox>
      <StyledVideoContainer isTaskmaster={isTaskmaster} width={w} height={h}>
        <iframe
          width={w}
          height={h}
          src={src}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </StyledVideoContainer>
    </StyledVideoFlexbox>
  );
};

export default VideoHolder;
