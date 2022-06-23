import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bulma/css/bulma.min.css";
import "./globals.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
