
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import portalRoutes from "./portalRoute";
import userRoutes from "./userRoute";
import mUserRoutes from "./mUserRoute";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const appRouter = createBrowserRouter([
  ...portalRoutes,
  ...userRoutes,
  ...mUserRoutes,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
