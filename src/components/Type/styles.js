import styled, { css } from 'styled-components';
import { lightTheme } from '../themes';

export const StyledDisplay = styled.h1`
  ${props => css`
    font-weight: 400;
    line-height: 1.3;
    font-family: ${lightTheme.type.fontFamilyHeader};
    font-size: ${lightTheme.type.display.sizeXs};
  `}
`;

StyledDisplay.defaultProps = {
  theme: lightTheme,
};

export const StyledHeadline = styled.h2`
  line-height: 1.7;
  font-weight: normal;

  ${props => css`
    font-family: ${props.theme.type.fontFamilyHeader};
    font-size: ${props.theme.type.headline.sizeXs};
  `}
`;

StyledHeadline.defaultProps = {
  theme: lightTheme,
};

export const StyledBody = styled.p`
  ${props => css`
    line-height: 1.7;
    font-size: ${props.theme.type.body.sizeXs};
    font-family: ${props.theme.type.fontFamilyBody};
  `}
`;

StyledBody.defaultProps = {
  theme: lightTheme,
};

export const StyledInfo = styled.p`
  ${props => css`
    font-size: ${props.theme.type.info.sizeXs};
    font-family: ${props.theme.type.fontFamilyBody};
  `}
`;

StyledInfo.defaultProps = {
  theme: lightTheme,
};
