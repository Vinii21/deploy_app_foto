import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  
  body{
    overflow-x: hidden;
    cursor: default;
  }

  .leaflet-container {
    width: 100%;
    height: 100%;
  }
`
