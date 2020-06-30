import styled, { css } from 'styled-components';
import { lightTheme } from '../themes';

export const StyledForm = styled.form`
  ${props => css`
    position: relative;

    label {
      position: relative;
      display: flex;

      span {
        position: absolute !important;
        height: 1px;
        width: 1px;
        overflow: hidden;
        clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
        clip: rect(1px, 1px, 1px, 1px);
        white-space: nowrap; /* added line */
      }
    }

    input[type='email'] {
      min-width: 0;
      max-width: 100%;
      width: 300px;
    }

    > span {
      display: block;
      margin-top: 0.5rem;
      line-height: 1.5;
      font-size: 0.75rem;
      letter-spacing: 0.025rem;
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;

      > span {
        text-transform: capitalize;
      }
    }
  `}
`;

StyledForm.defaultProps = {
  theme: lightTheme,
};
