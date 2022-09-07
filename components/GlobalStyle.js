import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing:border-box;
    }
        
    html{
        position:relative;
        min-height: 100%;
    }

    body{
    background-color: #eee;
    color: black;
    font-family: sans-serif;
    margin-top: 5rem;
    margin-bottom: 5rem;
    margin-left:0;
    }
`;

export default GlobalStyle;
