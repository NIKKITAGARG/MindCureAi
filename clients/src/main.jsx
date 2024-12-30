import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import MainPage from "./page/MainPage";
import SPlayground from "./page/SPlayground";
import PGround from "./page/PGround";
import DashBoard from "./page/DashBoard";
import "./index.css"; // Import global styles

// Define routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Root component
  },
  {
    path: "/mainpage/:id",
    element: <MainPage />, // Main page route
  },
  {
    path: "/SPlayground",
    element: <SPlayground />, // SPlayground route
  },
  {
    path: "/PGround",
    element: <PGround />, // PGround route
  },
  {
    path: "/Doctor",
    element: <DashBoard />, // Doctor dashboard route
  },
  {
    path: "/DashBoard",
    element: <DashBoard />, // Alternative Doctor dashboard route
  },
]);

// Render application
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
