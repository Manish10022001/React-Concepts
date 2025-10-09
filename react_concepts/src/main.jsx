import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import LoginComponent from "./components/login/login.component.jsx";
import DataBindingWithArrays from "./components/data-binding/data-binding-5.jsx";
import AjaxWithjQuery from "./components/ajax/ajax-3.jsx";
import AxiosOne from "./components/axios/axios-1.jsx";
import Courses from "./components/axios/courses.jsx";
import NestedDemo from "./components/nested-demo/nested-demo.jsx";

import MouseEventTwo from "./components/event/event-demo-3.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <LoginComponent /> */}
    {/* <DataBindingWithArrays /> */}
    {/* <AjaxWithjQuery /> */}
    {/* <AxiosOne /> */}
    {/* <Courses /> */}
    {/* <NestedDemo /> */}
    <MouseEventTwo />
  </StrictMode>
);
