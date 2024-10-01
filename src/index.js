import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ContextShop from "./Context/ContextShop";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextShop>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextShop>
  </React.StrictMode>
);
