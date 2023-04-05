import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialised;
  text-rendering: optimizeLegibility;
  font-family: 'Hanken Grotesk', sans-serif;
  font-size: 18px;
}

@media screen and (min-width: 768px) {
  body {
    margin: 0 auto;
  }
}
`;
