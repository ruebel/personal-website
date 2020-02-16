import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import "./styles/global";
import App from "./components/App";
import { RouteProvider } from "./components/RouteContext";
import registerServiceWorker from "./registerServiceWorker";
import routeDefinition from "./components/routeDefinition";
import theme from "./styles/theme";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <RouteProvider routeDefinition={routeDefinition}>
      <App />
    </RouteProvider>
  </ThemeProvider>,
  document.getElementById("root")
);
registerServiceWorker();
