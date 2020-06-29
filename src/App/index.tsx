import React from "react";
import { GlobalStyle, theme } from "./global/styles";
import { ThemeProvider } from "styled-components";
import Router from "./router";
import { Provider } from "react-redux";
import { store } from "../redux";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
