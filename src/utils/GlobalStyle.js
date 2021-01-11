import { createGlobalStyle } from "styled-components";
import { theme, media } from "./index";

const GlobalStyle = createGlobalStyle`

  html {
    margin: 1rem;
    font-size: 12px;
    background: ${theme.violetBackground};
    height:100%;

    ${media.tablet`
      font-size: 16px;
    `}
  }

  body {
    margin: 3rem 0;
    font-family: 'Karla', sans-serif;
    color: ${theme.font};
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

  }

`;

export default GlobalStyle;
