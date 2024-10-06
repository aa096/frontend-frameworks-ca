import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "Garet";
        src: url("src/fonts/Garet-Book.ttf") format('truetype');
    }

     html {
        --color-primary: #83ABB3;
        --color-secondary: #213547;
        height: 100%;
        font-family: "Garet", sans-serif;
     }
     body {
        height: 100%;
        background: #EFECE7;
        font-family: "Garet", sans-serif;
     }
`;


export default GlobalStyle;