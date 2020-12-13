import styled, { css } from 'styled-components';

import { lightTheme } from '..';

export const StyledPageHome = styled.div`
  ${props => css`
    padding: 3rem 1rem;

    img {
      margin-bottom: 3rem;
    }

    h1,
    h2 {
      margin: 0 0 3rem;
    }

    form {
      margin-bottom: 4rem;
    }

    p {
      margin-bottom: 3rem;
    }

    .video-desktop {
      display: none;
    }

    @media ${props.theme.minWidth.lg} {
      display: flex;
      padding: 4rem;
      height: calc(100vh - 8rem);
      min-height: 600px;

      > div {
        flex: 0 0 50%;
        max-width: 50%;
      }

      .content {
        display: flex;
        flex-direction: column;
        padding-right: 4rem;
        height: 100%;
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
    }

    @media ${props.theme.minWidth.xxl} {
      padding: 5rem;
      height: calc(100vh - 10rem);

      .content {
        padding-right: 10rem;
      }
    }
  `}
`;

StyledPageHome.defaultProps = {
  theme: lightTheme,
};
