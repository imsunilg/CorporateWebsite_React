import React, { lazy, Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Navbarportal from "./components/common/Navbar_Portal";
import NeedHelp from "./components/common/NeedHelp";
import Footerportal from "./components/common/Footer_Portal"; 
import Home from "./components/Home";  // Home stays eager

import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// ✅ Lazy imports (all except Home)
const Vas_Solution = lazy(() => import("./components/Vas_Solution"));
const Standard_Fire_and_Special_perils_policy = lazy(() => import("./components/Standard_Fire_and_Special_perils_policy"));
const Risk_Health = lazy(() => import("./components/Risk_liability"));
const Risk_Engineering = lazy(() => import("./components/Risk_Engineering"));
const Professional_Indemnity = lazy(() => import("./components/Professional_Indemnity"));
const Mega_Risk_policy = lazy(() => import("./components/Mega_Risk_policy"));
const Marine_Inland_Open_Declaration_Policy = lazy(() => import("./components/Marine_Inland_Open_Declaration_Policy"));
const Machinery_Breakdown = lazy(() => import("./components/Machinery_Breakdown"));
const Industrial_All_Risk_policy = lazy(() => import("./components/Industrial_All_Risk_policy"));
const India_risk_report = lazy(() => import("./components/India_risk_report"));
const IFSC_Insurance_Office = lazy(() => import("./components/IFSC_Insurance_Office"));
const ICICI_Bharat_Sookshma_Udyam_Surakha_Policy = lazy(() => import("./components/ICICI_Bharat_Sookshma_Udyam_Surakha_Policy"));
const ICICI_Bharat_LaGhu_Udyam_Suraksha_Policy = lazy(() => import("./components/ICICI_Bharat_LaGhu_Udyam_Suraksha_Policy"));
const ICICI_Bharat_Griha_Raksha_Policy = lazy(() => import("./components/ICICI_Bharat_Griha_Raksha_Policy"));
const Group_Personal_Accident = lazy(() => import("./components/Group_Personal_Accident"));
const Group_Health = lazy(() => import("./components/Group_Health"));

const Explore4 = lazy(() => import("./components/Explore4"));
const Explore3 = lazy(() => import("./components/Explore3"));
const Explore2 = lazy(() => import("./components/Explore2"));
const Explore1 = lazy(() => import("./components/Explore1"));
const Erection_All_Risk = lazy(() => import("./components/Erection_All_Risk"));
const Employee_Speak = lazy(() => import("./components/Employee_Speak"));

const Directors_and_Officers_Liability = lazy(() => import("./components/Directors_and_Officers_Liability"));
const Digital_solutions = lazy(() => import("./components/Digital_solutions"));
const Cyber_Risk_Insurance = lazy(() => import("./components/Cyber_Risk_Insurance"));
const CPTLoginMFA = lazy(() => import("./components/CPTLoginMFA"));
const Contractors_All_Risk = lazy(() => import("./components/Contractors_All_Risk"));
const ContactUs = lazy(() => import("./components/ContactUs"));

const Comprehensive_General_Liability = lazy(() => import("./components/Comprehensive_General_Liability"));
const Case_studies_pharma = lazy(() => import("./components/Case_studies_pharma"));
const Case_studies_infra = lazy(() => import("./components/Case_studies_infra"));
const Case_studies_fmcg = lazy(() => import("./components/Case_studies_fmcg"));
const Case_studies_banking = lazy(() => import("./components/Case_studies_banking"));
const Case_ites_casestudy = lazy(() => import("./components/Case_ites_casestudy"));
const Boiler_and_Pressure_Plant_Machinery = lazy(() => import("./components/Boiler_and_Pressure_Plant_Machinery"));
const Award = lazy(() => import("./components/Award"));
const Anywhere_Cashless = lazy(() => import("./components/Anywhere_Cashless"));

const Ourcasestudiesmain = lazy(() => import("./components/common/Ourcasestudiesmain"));
const Milestoneswereached = lazy(() => import("./components/common/Milestoneswereached"));


// ✅ Layout wrapper
const AppLayout = () => {
  return (
    <div className="app">
      <Navbarportal />
      <br />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet /> {/* child route renders here */}
      </Suspense>
      <NeedHelp />
      <Footerportal />
    </div>
  );
};

// ✅ Router config
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },      // eager load Home
      { path: "/home", element: <Home /> },  // alias route

      { path: "/vas-solution", element: <Vas_Solution /> },
      { path: "/standard-fire", element: <Standard_Fire_and_Special_perils_policy /> },
      { path: "/risk-health", element: <Risk_Health /> },
      { path: "/risk-engineering", element: <Risk_Engineering /> },
      { path: "/professional-indemnity", element: <Professional_Indemnity /> },
      { path: "/mega-risk", element: <Mega_Risk_policy /> },
      { path: "/marine-inland", element: <Marine_Inland_Open_Declaration_Policy /> },
      { path: "/machinery-breakdown", element: <Machinery_Breakdown /> },
      { path: "/industrial-risk", element: <Industrial_All_Risk_policy /> },
      { path: "/india-risk-report", element: <India_risk_report /> },
      { path: "/ifsc-office", element: <IFSC_Insurance_Office /> },
      { path: "/sookshma-udyam", element: <ICICI_Bharat_Sookshma_Udyam_Surakha_Policy /> },
      { path: "/laghu-udyam", element: <ICICI_Bharat_LaGhu_Udyam_Suraksha_Policy /> },
      { path: "/griha-raksha", element: <ICICI_Bharat_Griha_Raksha_Policy /> },
      { path: "/group-accident", element: <Group_Personal_Accident /> },
      { path: "/group-health", element: <Group_Health /> },

      { path: "/explore1", element: <Explore1 /> },
      { path: "/explore2", element: <Explore2 /> },
      { path: "/explore3", element: <Explore3 /> },
      { path: "/explore4", element: <Explore4 /> },

      { path: "/erection-risk", element: <Erection_All_Risk /> },
      { path: "/employee-speak", element: <Employee_Speak /> },
      { path: "/directors-liability", element: <Directors_and_Officers_Liability /> },
      { path: "/digital-solutions", element: <Digital_solutions /> },
      { path: "/cyber-risk", element: <Cyber_Risk_Insurance /> },
      { path: "/CPTLogin", element: <CPTLoginMFA /> },
      { path: "/contractors-risk", element: <Contractors_All_Risk /> },
      { path: "/ContactUs", element: <ContactUs /> },

      { path: "/general-liability", element: <Comprehensive_General_Liability /> },
      { path: "/case-pharma", element: <Case_studies_pharma /> },
      { path: "/case-infra", element: <Case_studies_infra /> },
      { path: "/case-fmcg", element: <Case_studies_fmcg /> },
      { path: "/case-banking", element: <Case_studies_banking /> },
      { path: "/case-ites", element: <Case_ites_casestudy /> },

      { path: "/boiler", element: <Boiler_and_Pressure_Plant_Machinery /> },
      { path: "/award", element: <Award /> },
      { path: "/cashless", element: <Anywhere_Cashless /> },

      { path: "/our-case-studies", element: <Ourcasestudiesmain /> },
      { path: "/milestones", element: <Milestoneswereached /> },
    ],
  },
]);

// ✅ Render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
