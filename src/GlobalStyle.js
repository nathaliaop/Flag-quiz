import { createGlobalStyle } from 'styled-components'
import img from './images/flags.jpg';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Raleway", cursive;
    color: #2C0E37;
    background-image: url(${img});
  }
`
/*
warm black: #004643
violet blue crayota: #8377D1
dark purple: #2C0E37
pastel pink: #CF9893
ocean green: #43C59E

wine: "#8b2e3b",
darkpink: "#fd5862",
mediumpink: "#f99b9b",
lightpink: "#fec1c4",
*/