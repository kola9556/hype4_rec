import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../../utils/index";

const MainTemplate = ({ children }) => {
  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </div>
  );
};

export default MainTemplate;
