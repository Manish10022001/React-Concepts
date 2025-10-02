import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import LoginComponent from "./components/login/login.component.jsx";
import DataBindingWithString from "./components/data-binding/data-binding-3.jsx";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <LoginComponent /> */}
    <DataBindingWithString />
  </StrictMode>
);
