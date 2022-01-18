import React from "react";
import MainApp from "./views/";
import GlobalStyle from "./styles/global";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/themes";
import { useAppSelector } from "./redux/hook";

const App = () => {
  const dark = useAppSelector(({ themes }) => themes.dark);

  return (
    <div>
      <ThemeProvider theme={dark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <MainApp />
      </ThemeProvider>
    </div>
  );
};

export default App;
