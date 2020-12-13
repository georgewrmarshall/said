import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family:${props => props.theme.type.fontFamilyBody};
    color: ${props => props.theme.colorsTheme.bodyFontColor};
    background: ${props => props.theme.colorsTheme.bodyBackgroundColor};
    font-weight: 300;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: 400;
  }
  p {
    line-height: 1.7;
  }
  a {
    color: inherit; 
    &:visited {
      color: ${props => props.theme.colorsTheme.white};
    }
  }
`;
