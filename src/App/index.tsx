import React from "react";
import { GlobalStyle, theme } from "./global/styles";
import { ThemeProvider } from "styled-components";
import Router from "./router";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
