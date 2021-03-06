import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #e5e5e5;
}
html {
  @media (max-width: 1080px){
    font-size: 93.75%;
  }

  @media (max-width: 720px){
    font-size: 87.5%;
  }
}

body, input, textarea, button {
  font: 500 1rem Inter, sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 600;
  font-family: Lexend, sans-serif;
}

h1 {
  font-size: 2rem;
}

h2 {
  font-size: 1.5rem;
}

button {
  cursor: pointer;
}
`