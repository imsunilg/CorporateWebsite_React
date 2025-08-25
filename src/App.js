import React, { lazy, Suspense } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

 import Home from "./components/Home1"; 
 
 import Navbarportal from "./components/common/Navbar_Portal";
 
 import  NeedHelp from "./components/common/NeedHelp";
 import  Footerportal  from "./components/common/Footer_Portal";
 import Risk_Health from "./components/Risk_liability";
 
 
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


const AppLayout = () => {
  return (
    <div className="app">
      <Navbarportal/>
      <br/>
      {/* <h1>Hello Sir Aarya...</h1> */}
      
      {/* Common layout like Header, Sidebar, Footer */}
      <Outlet />  {/* ✅ this is where child routes render */}
        <NeedHelp/>
     <Footerportal/>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },      // renders inside Outlet
      { path: "/home", element: <Home /> },  // same
      { path: "/contact", element: <AppLayout /> },
      { path: "/restaurants/:resId", element: <AppLayout /> },

      // { path: "/grocery", element: (
      //     <Suspense fallback={<h1>Loading Hello...</h1>}>
      //       <Grocery />
      //     </Suspense>
      //   )
      // },
    ],
    // errorElement: <Error />   // define your Error component before using
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

//Commented
//  import Case_studies_infra from "./components/Case_studies_infra";
//  import Case_studies_fmcg from "./components/Case_studies_fmcg";
// import Case_studies_banking from "./components/Case_studies_banking";
//  import Case_ites_casestudy from "./components/Case_ites_casestudy";
//  import Boiler_and_Pressure_Plant_Machinery from "./components/Boiler_and_Pressure_Plant_Machinery";
// import Award from "./components/Award";
// import Anywhere_Cashless from "./components/Anywhere_Cashless";
// import Navbarportal from "./components/Navbar_Portal";
//  import Footerportal from "./components/Footer_Portal";
 
// import NeedHelp from "./components/common/Needhelp";
// import Ourcasestudiesmain from "./components/common/Ourcasestudiesmain";
// import Milestoneswereached from "./components/common/Milestoneswereached";

// const Grocery = lazy(() => import("./components/Grocery"));
// import Faq from "./components/common/Faq";
