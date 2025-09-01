import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

export default function UserNavbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // close menu on route change
    setOpen(false);
  }, [location.pathname]);

  const logout = () => {
    // TODO: clear auth/session
    navigate("/CPTLogin", { replace: true });
  };

  return (
    <nav className="navbar navbar-expand-lg user-nav navbar-light bg-white fixed-top border-bottom">
      <div className="container">
        <NavLink to="/user/dashboard" className="navbar-brand" onClick={() => setOpen(false)}>
          <img src="/assets/images/logo.svg" alt="ICICI Lombard" style={{ maxHeight: 40 }} />
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          aria-controls="userNavbarNav"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className={`collapse navbar-collapse ${open ? "show" : ""}`} id="userNavbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/user/dashboard" className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}>Dashboard</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/user/dashboard?tab=policies" className={({ isActive }) => `nav-link`}>Policies</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/user/dashboard?tab=claims" className={({ isActive }) => `nav-link`}>Claims</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/user/dashboard?tab=reports" className={({ isActive }) => `nav-link`}>Reports</NavLink>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
            <li className="nav-item">
              <NavLink to="/user/dashboard?tab=profile" className={({ isActive }) => `nav-link`}>Profile</NavLink>
            </li>
            <li className="nav-item">
              <button className="btn btn-sm btn-outline-primary ms-lg-2" type="button" onClick={logout}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
