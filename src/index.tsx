import React from "react";
import ReactDOMClient from "react-dom/client";
import "./index.css";
import App from "./App";

let root = ReactDOMClient.createRoot(document.querySelector("#root")!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
