import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing:border-box;
    }



    body{
    background-color: #eee;
    color: black;
    font-family: sans-serif;
    margin-top: 5rem;
    margin-left:0;

    }
`;

export default GlobalStyle;
