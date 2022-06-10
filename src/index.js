import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "./index.css";
import { ContextProvider } from "./contexts/ContextProcider";

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById("root")
);
