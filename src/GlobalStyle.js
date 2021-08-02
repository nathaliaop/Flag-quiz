import { createGlobalStyle } from 'styled-components'
import img from './images/flags.png';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Raleway', cursive;
    color: #2C0E37;
    background-image: url(${img});
  }
`