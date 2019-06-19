import React from 'react';
import { ComponentsProvider } from "@reactioncommerce/components-context";
import appComponents from "./appComponents";
import SaveButton from "./SaveButton";
import { ThemeProvider } from "styled-components";
import './App.css';

const theme = {};

function App() {
  return (
    <ComponentsProvider value={appComponents}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <header className="App-header">
            <SaveButton />
          </header>
        </div>
      </ThemeProvider>
    </ComponentsProvider>
  );
}

export default App;
