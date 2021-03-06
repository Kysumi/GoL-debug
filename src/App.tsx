import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Button } from "./components/buttons";
import { theme } from "./config/theme";

const Container = styled.div`
  background-color: ${(p) => p.theme.colors.main};
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container className="App">
        <Button>I'm a button</Button>
      </Container>
    </ThemeProvider>
  );
};

export default App;
