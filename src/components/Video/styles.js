import styled, { css } from 'styled-components';
import { lightTheme } from '../themes';

export const StyledVideo = styled.div`
  ${props => css`
    position: relative;
    width: 100%;
    overflow: hidden;

    @media ${props.theme.maxWidth.lg} {
      padding-top: 100%;
    }

    @media ${props.theme.minWidth.lg} {
      height: 100%;
    }

    video {
      pointer-events: none;
      min-width: 100%;
      min-height: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);

      &::-webkit-media-controls-start-playback-button {
        display: none;
      }
    }
  `}
`;

StyledVideo.defaultProps = {
  theme: lightTheme,
};
