import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    background-color: #fafafa;
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
    color: #02060c;
    font-family: 'Work Sans', sans-serif;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: -0.43px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  main {
    max-width: 1180px;
    width: 90%;
    margin: 0 auto;
  }

  picture {
    display: block;
  }
`;

export { GlobalStyle };
