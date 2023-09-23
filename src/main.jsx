import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../i18n";

import { BrowserRouter } from "react-router-dom";

import "./assets/styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
