import React, { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";
import UserNavbar from "./components/common/userNavbar";
import UserFooter from "./components/common/userFooter";
import ShimmerPage from "./components/common/ShimmerPage";

const Dashboard = lazy(() => import("./components/user/Dashboard"));

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
];

export default userRoutes;
