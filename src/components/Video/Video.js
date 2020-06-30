import React from 'react';

// Video
import curtainsVideo from '../../videos/curtains.mp4';

// Styles
import { StyledVideo } from './styles';

export const Video = () => {
  return (
    <StyledVideo>
      <video muted autoPlay playsInline loop>
        <source src={curtainsVideo} type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
    </StyledVideo>
  );
};
