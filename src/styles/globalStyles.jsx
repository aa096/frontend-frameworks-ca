import { createGlobalStyle } from "styled-components";
import garetBookFont from "../assets/fonts/garetbook.ttf";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "Garet";
        src: url(${garetBookFont}) format('truetype');
    }

     html {
        --color-primary: #83ABB3;
        --color-secondary: #766960;
        height: 100%;
        margin: 0;
        font-family: "Garet", sans-serif;
     }
     
     body {
        height: 100%;
        background: #EFECE7;
        font-family: "Garet", sans-serif;
        color: var(--color-secondary);
        margin: 0;
     }

     main {
         display: flex;
         flex-grow: 1;
     }

     footer {
         margin-top: auto; 
      }
`;

export default GlobalStyle;
