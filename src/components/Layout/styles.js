import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family:${props => props.theme.type.fontFamilyBody};
    color: ${props => props.theme.colorsTheme.bodyFontColor};
    background: ${props => props.theme.colorsTheme.bodyBackgroundColor};
    font-weight: normal;
  }
  a {
    color: inherit; 
    &:visited {
      color: ${props => props.theme.colorsTheme.white};
    }
  }
  p {
    line-height: 1.7;
  }
`;
