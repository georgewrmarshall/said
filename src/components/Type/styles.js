import styled, { css } from "styled-components";
import { lightTheme } from "../themes";

export const StyledDisplay = styled.h1`
  font-weight: normal;

  ${(props) => css`
    line-height: 1.3;
    font-family: ${props.theme.type.fontFamilyHeader};
    font-size: ${props.theme.type.displaySize};
  `}
`;

StyledDisplay.defaultProps = {
  theme: lightTheme,
};

export const StyledHeadline = styled.h2`
  line-height: 1.5;
  font-weight: normal;

  ${(props) => css`
    font-family: ${props.theme.type.fontFamilyHeader};
    font-size: ${props.theme.type.headlineSize};
  `}
`;

StyledHeadline.defaultProps = {
  theme: lightTheme,
};

export const StyledBody = styled.p`
  line-height: 1.5;
  ${(props) => css`
    font-size: ${props.theme.type.bodySize};
    font-family: ${props.theme.type.fontFamilyBody};
  `}
`;

StyledBody.defaultProps = {
  theme: lightTheme,
};

export const StyledInfo = styled.p`
  ${(props) => css`
    font-size: ${props.theme.type.infoSize};
    font-family: ${props.theme.type.fontFamilyBody};
  `}
`;

StyledInfo.defaultProps = {
  theme: lightTheme,
};
