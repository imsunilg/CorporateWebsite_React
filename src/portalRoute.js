import React, { lazy } from "react";
import { Outlet } from "react-router-dom";
import Navbarportal from "./components/common/Navbar_Portal";
import NeedHelp from "./components/common/NeedHelp";
import Footerportal from "./components/common/Footer_Portal";
import ShimmerPage from "./components/common/ShimmerPage";

// Eager portal home (if exists under portal/ or at components/Home)
const Home = lazy(() => import("./components/portal/Home.js").catch(() => import("./components/Home")));

// Note: keep existing lazy imports inside App.js if needed; this file can be incrementally adopted.
export const PortalLayout = ({ hideNeedHelp = false }) => (
  <div className="app">
    <Navbarportal />
    <React.Suspense fallback={<ShimmerPage />}>
      <Outlet />
    </React.Suspense>
    {!hideNeedHelp && <NeedHelp />}
    <Footerportal />
  </div>
);

const portalRoutes = [
  {
    path: "/",
    element: <PortalLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
    ],
  },
];

export default portalRoutes;

