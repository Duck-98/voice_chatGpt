// global-styles.ts

import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
    	margin: 0;
        padding: 0;
    }
    h1 {
    display: block;
    font-size: 2.5em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    color: white;
    }
    h2 {
    display: block;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    color: white;
    }
    body {
        background: #282c34;
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        /* height: 100vh; */
        margin: 0;
        padding: 0;
        transition: all 0.25s linear;
    }
    button { 
        cursor: pointer;
        border: none;
        outline: none;
        background: none;
    }
    a{
         text-decoration: none;
            text-decoration-line: none;
         &:visited{
            text-decoration: none;
            text-decoration-line: none;
         }
    }
   
`;
