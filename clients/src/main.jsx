import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import MainPage from "./page/MainPage";
import SPlayground from "./page/SPlayground";
import PGround from "./page/PGround";
import DashBoard from "./page/DashBoard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/mainpage",
    element: <MainPage />,
  },
  {
    path: "/SPlayground",
    element: <SPlayground />,
  },
  {
    path: "/PGround",
    element: <PGround/>,
  },
  {
    path: "/Doctor",
    element: <DashBoard/>,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
