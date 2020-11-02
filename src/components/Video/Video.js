import React from 'react';

// Styles
import { StyledVideo } from './styles';

export const Video = ({ videoSrc, ...props }) => {
  return (
    <StyledVideo {...props}>
      <video muted autoPlay playsInline loop>
        <source src={videoSrc} type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
    </StyledVideo>
  );
};
