import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ModernArts from "./pages/modernArts";
import RenaissanceArt from "./pages/renaissanceArt";
import ErrorPage from "./pages/components/errorElement";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/Home",
    element: <App />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/modernArt",
    element: <ModernArts />,
  },

  {
    path: "/renaissanceArt",
    element: <RenaissanceArt />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
