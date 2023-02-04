import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import { HashRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <App />
      <ToastContainer />
    </HashRouter>
  </React.StrictMode>
);
