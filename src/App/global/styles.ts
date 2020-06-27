import { DefaultTheme, createGlobalStyle } from "styled-components";

export const theme: DefaultTheme = {
  font: "#404040",
  primary: "#fff",
  secondary: "#FFF5F8",
};

export const GlobalStyle = createGlobalStyle`

  * 
  {
    margin: 0;
    padding: 0;
    box-sizing: content-box;
    outline: 0;
  }

  button 
  {
    cursor: pointer;
  }

  body 
  {
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    color: ${({ theme }) => theme.font};
    background: ${({ theme }) => theme.primary};
  }
`;
