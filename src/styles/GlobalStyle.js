import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`



*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  margin: 0;
  font-family: sans-serif;
  color: #212121;
  background-color: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

`;
