import styled, { css } from 'styled-components';

import { lightTheme } from '..';

export const StyledPageHome = styled.div`
  ${props => css`
    padding: 3rem 1rem;

    img {
      margin-bottom: 2rem;
      width: 107px;
    }

    h1 {
      margin: 0 0 2rem;
    }

    form {
      margin-bottom: 2rem;
    }

    p {
      margin-bottom: 2rem;
    }

    .video-desktop {
      display: none;
    }

    @media ${props.theme.minWidth.lg} {
      display: flex;
      padding: 10vw;
      height: calc(100vh - 20vw);

      img {
        width: 180px;
      }

      > div {
        flex: 0 0 50%;
        max-width: 50%;
      }

      .content {
        display: flex;
        flex-direction: column;
        padding-right: 10vw;
        height: 100%;
        justify-content: space-between;
      }

      p {
        margin-top: auto;
        margin-bottom: 2rem;
      }

      .video-mobile {
        display: none;
      }

      .video-desktop {
        display: block;
      }

      .footer {
        margin-top: auto;
        margin-bottom: 0;
      }
    }

    @media ${props.theme.minWidth.xxl} {
      .content {
        padding-right: 10rem;
      }
    }
  `}
`;

StyledPageHome.defaultProps = {
  theme: lightTheme,
};
