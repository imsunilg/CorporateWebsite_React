import React, { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";
import UserNavbar from "./components/common/userNavbar";
import UserFooter from "./components/common/userFooter";
import ShimmerPage from "./components/common/ShimmerPage";

const Dashboard = lazy(() => import("./components/user/Dashboard"));
const MDashboard = lazy(() => import("./components/user/MDashboard"));

export const UserLayout = () => (
  <div className="app app-user">
    <UserNavbar />
    <Suspense fallback={<ShimmerPage />}>
      <Outlet />
    </Suspense>
    <UserFooter />
  </div>
);

const userRoutes = [
  {
    path: "/user",
    element: <UserLayout />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
    ],
  },
  {
    path: "/user",
    element: (
      <div className="app app-user">
        {/* Mobile navbar is inside MDashboard for simplicity */}
        <React.Suspense fallback={<ShimmerPage />}>
          <Outlet />
        </React.Suspense>
        {/* Footer lives inside MDashboard as well to avoid double footers */}
      </div>
    ),
    children: [
      { path: "mdashboard", element: <MDashboard /> },
    ],
  },
];

export default userRoutes;
