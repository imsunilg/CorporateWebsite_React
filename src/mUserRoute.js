import React, { lazy } from "react";
import { Outlet } from "react-router-dom";
import ShimmerPage from "./components/common/ShimmerPage";

// Mobile user pages
const MDashboard = lazy(() => import("./components/mUser/MDashboard"));

const MUserLayout = () => (
  <div className="app app-user">
    <React.Suspense fallback={<ShimmerPage />}>
      <Outlet />
    </React.Suspense>
  </div>
);

const mUserRoutes = [
  {
    path: "/muser",
    element: <MUserLayout />,
    children: [
      { path: "dashboard", element: <MDashboard /> },
    ],
  },
];

export default mUserRoutes;

