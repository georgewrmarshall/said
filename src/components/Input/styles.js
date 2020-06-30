import styled, { css } from 'styled-components';
import { lightTheme } from '../themes';

export const StyledInput = styled.input`
  ${props => css`
    height: ${props.theme.input.height};
    border: none;
    border-radius: 0;
    font-size: ${props.theme.input.fontSize};
    padding: 0 1rem;
    outline-color: ${props.theme.input.outlineColor};
    color: ${props.theme.input.color};
    background-color: ${props.theme.input.backgroundColor};

    &::placeholder {
      color: ${props.theme.input.placeholderColor};
    }
  `}
`;

StyledInput.defaultProps = {
  theme: lightTheme,
};
