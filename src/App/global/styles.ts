import { DefaultTheme, createGlobalStyle } from "styled-components";

export const theme: DefaultTheme = {
  font: "#404040",
  primary: "#fff",
  secondary: "#F9386A",
};

export const GlobalStyle = createGlobalStyle`

  * 
  {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  button, a 
  {
    cursor:pointer;

    :disabled{
      cursor: auto;
    }

  }

  body 
  {
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    color: ${({ theme }) => theme.font};
    background: ${({ theme }) => theme.primary};
  }
`;
