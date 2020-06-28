import styled, { css } from 'styled-components';
import { lightTheme } from '../themes';

export const StyledContainer = styled.div`
  ${props => css`
    max-width: ${props.fluid ? undefined : '50rem'};
    flex: 0 0 ${props.fluid ? undefined : '50rem'};
    margin: 0 auto;
    padding: 0 1rem;
    @media ${props.theme.minWidth.md} {
      padding: 0 3rem;
    }
    @media ${props.theme.minWidth.xxl} {
      padding: 0 10rem;
    }
  `}
`;

StyledContainer.defaultProps = {
  theme: lightTheme,
};
