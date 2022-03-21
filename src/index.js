import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import GlobalStyles from "./components/GlobalStyles";

ReactDOM.render(
  <React.StrictMode>
    <div>
      <GlobalStyles />
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
