import React, { lazy, Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbarportal from "./components/common/Navbar_Portal";
import NeedHelp from "./components/common/NeedHelp";
import Footerportal from "./components/common/Footer_Portal";
import ShimmerPage from "./components/common/ShimmerPage";

// Portal pages (lazy)
const Home = lazy(() => import("./components/portal/Home"));
const Vas_Solution = lazy(() => import("./components/portal/Vas_Solution"));
const Standard_Fire_and_Special_perils_policy = lazy(() => import("./components/portal/Standard_Fire_and_Special_perils_policy"));
const Risk_Health = lazy(() => import("./components/portal/Risk_liability"));
const Risk_Engineering = lazy(() => import("./components/portal/Risk_Engineering"));
const Professional_Indemnity = lazy(() => import("./components/portal/Professional_Indemnity"));
const Mega_Risk_policy = lazy(() => import("./components/portal/Mega_Risk_policy"));
const Marine_Inland_Open_Declaration_Policy = lazy(() => import("./components/portal/Marine_Inland_Open_Declaration_Policy"));
const Machinery_Breakdown = lazy(() => import("./components/portal/Machinery_Breakdown"));
const Industrial_All_Risk_policy = lazy(() => import("./components/portal/Industrial_All_Risk_policy"));
const India_risk_report = lazy(() => import("./components/portal/India_risk_report"));
const IFSC_Insurance_Office = lazy(() => import("./components/portal/IFSC_Insurance_Office"));
const ICICI_Bharat_Sookshma_Udyam_Surakha_Policy = lazy(() => import("./components/portal/ICICI_Bharat_Sookshma_Udyam_Surakha_Policy"));
const ICICI_Bharat_LaGhu_Udyam_Suraksha_Policy = lazy(() => import("./components/portal/ICICI_Bharat_LaGhu_Udyam_Suraksha_Policy"));
const ICICI_Bharat_Griha_Raksha_Policy = lazy(() => import("./components/portal/ICICI_Bharat_Griha_Raksha_Policy"));
const Group_Personal_Accident = lazy(() => import("./components/portal/Group_Personal_Accident"));
const Group_Health = lazy(() => import("./components/portal/Group_Health"));
const Property_Loss_Prevention_exercise = lazy(() => import("./components/portal/Property_Loss_Prevention_exercise"));
const Explore4 = lazy(() => import("./components/portal/Explore4"));
const Explore3 = lazy(() => import("./components/portal/Explore3"));
const Explore2 = lazy(() => import("./components/portal/Explore2"));
const Explore1 = lazy(() => import("./components/portal/Explore1"));
const Erection_All_Risk = lazy(() => import("./components/portal/Erection_All_Risk"));
const Employee_Speak = lazy(() => import("./components/portal/Employee_Speak"));
const Directors_and_Officers_Liability = lazy(() => import("./components/portal/Directors_and_Officers_Liability"));
const Digital_solutions = lazy(() => import("./components/portal/Digital_solutions"));
const Cyber_Risk_Insurance = lazy(() => import("./components/portal/Cyber_Risk_Insurance"));
const CPTLoginMFA = lazy(() => import("./components/portal/CPTLoginMFA"));
const Contractors_All_Risk = lazy(() => import("./components/portal/Contractors_All_Risk"));
const ContactUs = lazy(() => import("./components/portal/ContactUs"));
const Comprehensive_General_Liability = lazy(() => import("./components/portal/Comprehensive_General_Liability"));
const Case_studies_pharma = lazy(() => import("./components/portal/Case_studies_pharma"));
const Case_studies_infra = lazy(() => import("./components/portal/Case_studies_infra"));
const Case_studies_fmcg = lazy(() => import("./components/portal/Case_studies_fmcg"));
const Case_studies_banking = lazy(() => import("./components/portal/Case_studies_banking"));
const Case_ites_casestudy = lazy(() => import("./components/portal/Case_ites_casestudy"));
const Boiler_and_Pressure_Plant_Machinery = lazy(() => import("./components/portal/Boiler_and_Pressure_Plant_Machinery"));
const Award = lazy(() => import("./components/portal/Award"));
const Anywhere_Cashless = lazy(() => import("./components/portal/Anywhere_Cashless"));
const Ourcasestudiesmain = lazy(() => import("./components/common/Ourcasestudiesmain"));
const Milestoneswereached = lazy(() => import("./components/common/Milestoneswereached"));

const PortalLayout = () => {
  const location = useLocation();

  const handleAppClick = (e) => {
    const anchor = e.target.closest && e.target.closest('a');
    if (!anchor) return;
    const href = anchor.getAttribute('href');
    if (!href || href.startsWith('#') || href.toLowerCase().startsWith('javascript')) return;
    try {
      const url = new URL(href, window.location.origin);
      let path = url.pathname;
      const portalIdx = path.indexOf('/Portal/');
      if (portalIdx === -1) return;
      e.preventDefault();
      const key = path.slice(portalIdx + '/Portal/'.length);
      const map = {
        'Standard_Fire_and_Special_perils_policy': '/standard-fire',
        'Industrial_All_Risk_policy': '/industrial-risk',
        'Mega_Risk_policy': '/mega-risk',
        'ICICI_Bharat_Sookshma_Udyam_Surakha_Policy': '/sookshma-udyam',
        'ICICI_Bharat_LaGhu_Udyam_Suraksha_Policy': '/laghu-udyam',
        'ICICI_Bharat_Griha_Raksha_Policy': '/griha-raksha',
        'Marine_Inland_Open_Declaration_Policy': '/marine-inland',
        'Comprehensive_General_Liability': '/general-liability',
        'Directors_and_Officers_Liability': '/directors-liability',
        'Cyber_Risk_Insurance': '/cyber-risk',
        'Professional_Indemnity': '/professional-indemnity',
        'Group_Health': '/group-health',
        'Group_Personal_Accident': '/group-accident',
        'Contractors_All_Risk': '/contractors-risk',
        'Erection_All_Risk': '/erection-risk',
        'Machinery_Breakdown': '/machinery-breakdown',
        'Boiler_and_Pressure_Plant_Machinery': '/boiler',
        'digital_solutions': '/digital-solutions',
        'CPTLogin': '/CPTLogin',
        'Explore1': '/explore1',
        'Employee_Speak': '/employee-speak',
        'IFSC_Insurance_Office': '/ifsc-office',
        'India_risk_report': '/india-risk-report',
        'Vas_Solution': '/vas-solution',
        'risk_liability': '/risk-health',
        'risk_Engineering': '/risk-engineering',
        'risk_Health': '/risk-health',
      };
      const to = map[key];
      if (to) window.location.assign(to);
    } catch (_) {
      /* ignore */
    }
  };

  const hideNeedHelp = location.pathname.toLowerCase() === '/contactus';

  return (
    <div className="app" onClick={handleAppClick}>
      <Navbarportal />
      <Suspense fallback={<ShimmerPage />}>
        <Outlet />
      </Suspense>
      {!hideNeedHelp && <NeedHelp />}
      <Footerportal />
    </div>
  );
};

const portalRoutes = [
  {
    path: "/",
    element: <PortalLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
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
      { path: "/property-loss-prevention", element: <Property_Loss_Prevention_exercise /> },
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
];

export default portalRoutes;
