import "./App.css";
import React from "react";
import FirstPage from "./pages/firstPage";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import ModernArts from "./pages/modernArts";
import RenaissanceArt from "./pages/renaissanceArt";
import ErrorPage from "./pages/components/errorElement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FirstPage />,
    errorElement: <ErrorPage />
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

function App() {
  return (
    <React.Fragment>
      <RouterProvider router={router} />
    </React.Fragment>
  );
}

export default App;
