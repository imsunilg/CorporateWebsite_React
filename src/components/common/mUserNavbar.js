import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

export default function MUserNavbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => { setOpen(false); }, [location.pathname]);

  const logout = () => {
    // TODO: clear auth/session, tokens, etc.
    navigate("/CPTLogin", { replace: true });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top border-bottom user-nav">
      <div className="container">
        <NavLink to="/user/mdashboard" className="navbar-brand">
          <img src="/assets/images/logo.svg" alt="ICICI Lombard" style={{ maxHeight: 36 }} />
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          aria-controls="mUserNavbarNav"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className={`collapse navbar-collapse ${open ? "show" : ""}`} id="mUserNavbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/user/mdashboard" className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/user/mdashboard?tab=policies" className={({ isActive }) => `nav-link`}>Policies</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/user/mdashboard?tab=claims" className={({ isActive }) => `nav-link`}>Claims</NavLink>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item"><NavLink to="/user/mdashboard?tab=profile" className={({ isActive }) => `nav-link`}>Profile</NavLink></li>
            <li className="nav-item"><button className="btn btn-sm btn-outline-primary ms-lg-2" type="button" onClick={logout}>Logout</button></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

