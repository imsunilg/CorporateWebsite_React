import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
const Navbarportal = () => {
  const navigate = useNavigate();

  // Intercept legacy /Portal/... links and route via React Router
  const handleNavClick = (e) => {
    const anchor = e.target.closest && e.target.closest('a');
    if (!anchor) return;
    const href = anchor.getAttribute('href');
    if (!href || href === '#' || href.toLowerCase().startsWith('javascript')) return;

    try {
      const url = new URL(href, window.location.origin);
      const path = url.pathname;
      if (!path.startsWith('/Portal/')) return; // only handle legacy paths

      const key = path.replace('/Portal/', '');
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
        'Home%2523Awards': '/home#Awards',
        'IFSC_Insurance_Office': '/ifsc-office',
        'India_risk_report': '/india-risk-report',
        'Vas_Solution': '/vas-solution',
        'risk_liability': '/risk-health',
        'risk_Engineering': '/risk-engineering',
        'risk_Health': '/risk-health',
      };

      const to = map[key];
      if (to) {
        e.preventDefault();
        // Support hash navigation if present in mapped route
        const [pathname, hash] = to.split('#');
        navigate(pathname);
        if (hash) {
          // allow DOM to render, then scroll to hash
          setTimeout(() => {
            const el = document.getElementById(hash) || document.querySelector(`[name="${hash}"]`);
            if (el && typeof el.scrollIntoView === 'function') {
              el.scrollIntoView({ behavior: 'smooth' });
            }
          }, 0);
        }
      }
    } catch (_) {
      // ignore malformed URLs
    }
  };

  // Provide no-op globals for legacy inline onclick usage to avoid runtime errors
  useEffect(() => {
    window.topFunction = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    window.StrengthsClick = () => {};
    window.HealthClick = () => {};
    window.MarineClick = () => {};
    window.PropertyClick = () => {};
    window.LiabilityClick = () => {};
    // Desktop hover submenu behavior without jQuery
    const isDesktop = () => window.innerWidth > 1199;
    const navItems = document.querySelectorAll('#navbar-portal-root .navBar > li');
    const onEnter = (e) => {
      if (!isDesktop()) return;
      const li = e.currentTarget;
      li.classList.add('active');
      const inner = li.querySelector('ul.innerlinks');
      if (inner) inner.classList.add('active');
    };
    const onLeave = (e) => {
      const li = e.currentTarget;
      li.classList.remove('active');
      const inner = li.querySelector('ul.innerlinks');
      if (inner) inner.classList.remove('active');
    };
    navItems.forEach((li) => {
      li.addEventListener('mouseenter', onEnter);
      li.addEventListener('mouseleave', onLeave);
    });
    const onScroll = () => {
      const btns = document.querySelectorAll('#myBtn');
      const scrolled = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0);
      const show = scrolled > 200;
      btns.forEach((b) => { if (b) b.style.display = show ? 'block' : 'none'; });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      navItems.forEach((li) => {
        li.removeEventListener('mouseenter', onEnter);
        li.removeEventListener('mouseleave', onLeave);
      });
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  return (
      <div id="navbar-portal-root" onClick={handleNavClick}>
        {/* header starts */}
        {/* Navbar */}
        <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme menu-none d-sm-block d-md-none">
          <div className="app-brand demo " style={{marginTop: '20px'}}>
            <a href="/" className="app-brand-link">
              <span className="app-brand-logo demo">
                <img src="/assets/images/small-logo-icon.svg" className="img-fluid desktop-view" alt="" />
              </span>
              {/* <span class="app-brand-text demo menu-text fw-bold ms-2">Sneat</span> */}
            </a>
            <a href="#" onClick={(e) => e.preventDefault()} className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
              <div style={{height: '30px', width: '30px'}} />
            </a>
          </div>
          <div className="menu-inner-shadow" />
          <ul className="menu-inner py-1">
            {/* Dashboards */}
            <li className="menu-item">
              <a href="/" className="menu-link">
                <div data-i18n="Email">Home</div>
              </a>
            </li>
            <li className="menu-item" style={{}}>
              <a href="#" onClick={(e) => e.preventDefault()} className="menu-link menu-toggle">
                <div className="text-truncate" data-i18n="Users">Products</div>
              </a>
              <ul className="menu-sub">
                <li className="menu-item" style={{}}>
                  <a href="#" onClick={(e) => e.preventDefault()} className="menu-link menu-toggle">
                    <div className="text-truncate" data-i18n="View">Property</div>
                  </a>
                  <ul className="menu-sub">
                    <li className="menu-item">
                      <Link to="/standard-fire" className="menu-link">
                        <div className="text-truncate" data-i18n="Account">
                          Standard Fire &amp; Special perils
                          policy
                        </div>
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link to="/industrial-risk" className="menu-link">
                        <div className="text-truncate" data-i18n="Security">Industrial All Risk policy</div>
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link to="/mega-risk" className="menu-link">
                        <div className="text-truncate" data-i18n="Billing & Plans">Mega Risk policy</div>
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link to="/sookshma-udyam" className="menu-link">
                        <div className="text-truncate" data-i18n="Notifications">
                          ICICI Bharat Sookshma Udyam
                          Suraksha Policy
                        </div>
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link to="/laghu-udyam" className="menu-link">
                        <div className="text-truncate" data-i18n="Connections">
                          ICICI Bharat Laghu Udyam
                          Suraksha Policy
                        </div>
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link to="/griha-raksha" className="menu-link">
                        <div className="text-truncate" data-i18n="Connections">ICICI Bharat Griha Raksha Policy</div>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item" style={{}}>
                  <a href="#" onClick={(e) => e.preventDefault()} className="menu-link menu-toggle">
                    <div className="text-truncate" data-i18n="View">Marine</div>
                  </a>
                  <ul className="menu-sub">
                    <li className="menu-item">
                      <Link to="/marine-inland" className="menu-link">
                        <div className="text-truncate" data-i18n="Account">
                          Marine Open Declaration Policy
                        </div>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item" style={{}}>
                  <a href="#" onClick={(e) => e.preventDefault()} className="menu-link menu-toggle">
                    <div className="text-truncate" data-i18n="View">Liability</div>
                  </a>
                  <ul className="menu-sub">
                    <li className="menu-item">
                      <Link to="/general-liability" className="menu-link">
                        <div className="text-truncate" data-i18n="Account">
                          Comprehensive General Liability
                        </div>
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link to="/directors-liability" className="menu-link">
                        <div className="text-truncate" data-i18n="Account">
                          Directors and Officers Liability
                        </div>
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link to="/cyber-risk" className="menu-link">
                        <div className="text-truncate" data-i18n="Account">
                          Cyber Risk Insurance
                        </div>
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link to="/professional-indemnity" className="menu-link">
                        <div className="text-truncate" data-i18n="Account">
                          Professional Indemnity
                        </div>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item" style={{}}>
                  <a href="#" onClick={(e) => e.preventDefault()} className="menu-link menu-toggle">
                    <div className="text-truncate" data-i18n="View">Health</div>
                  </a>
                  <ul className="menu-sub">
                    <li className="menu-item">
                      <Link to="/group-health" className="menu-link">
                        <div className="text-truncate" data-i18n="Account">
                          Group Health
                        </div>
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link to="/group-accident" className="menu-link">
                        <div className="text-truncate" data-i18n="Account">
                          Group Personal Accident
                        </div>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item" style={{}}>
                  <a href="#" onClick={(e) => e.preventDefault()} className="menu-link menu-toggle">
                    <div className="text-truncate" data-i18n="View"> Engineering</div>
                  </a>
                  <ul className="menu-sub">
                    <li className="menu-item">
                      <a href="/Portal/Contractors_All_Risk" className="menu-link">
                        <div className="text-truncate" data-i18n="Account">
                          Contractor’s All Risk (CAR)
                        </div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="/Portal/Erection_All_Risk" className="menu-link">
                        <div className="text-truncate" data-i18n="Account">
                          Erection All Risk (EAR)
                        </div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="/Portal/Machinery_Breakdown" className="menu-link">
                        <div className="text-truncate" data-i18n="Account">
                          Machinery Breakdown
                        </div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="/Portal/Boiler_and_Pressure_Plant_Machinery" className="menu-link">
                        <div className="text-truncate" data-i18n="Account">
                          Boiler and Pressure Plant (BPP) Machinery
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="menu-item" style={{}}>
              <a href="#" onClick={(e) => e.preventDefault()} className="menu-link menu-toggle">
                <div className="text-truncate" data-i18n="Users">Risk Management</div>
              </a>
              <ul className="menu-sub">
                <li className="menu-item">
                  <Link to="/property-loss-prevention" className="menu-link">
                    <div className="text-truncate" data-i18n="List">Property</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/vas-solution" className="menu-link">
                    <div className="text-truncate" data-i18n="List">Marine</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/risk-health" className="menu-link">
                    <div className="text-truncate" data-i18n="List">Liability</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/risk-health" className="menu-link">
                    <div className="text-truncate" data-i18n="List">Health</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/risk-engineering" className="menu-link">
                    <div className="text-truncate" data-i18n="List">Engineering</div>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item" style={{}}>
              <a href="#" onClick={(e) => e.preventDefault()} className="menu-link menu-toggle">
                <div className="text-truncate" data-i18n="Users">Claims</div>
              </a>
              <ul className="menu-sub">
                <li className="menu-item">
                  <a onClick={() => window.StrengthsClick && window.StrengthsClick()} className="menu-link">
                    <div className="text-truncate" data-i18n="List">Our Strengths</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a onClick={() => window.HealthClick && window.HealthClick()} className="menu-link">
                    <div className="text-truncate" data-i18n="List">Health</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a onClick={() => window.MarineClick && window.MarineClick()} className="menu-link">
                    <div className="text-truncate" data-i18n="List">Marine</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a onClick={() => window.PropertyClick && window.PropertyClick()} className="menu-link">
                    <div className="text-truncate" data-i18n="List">Property</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a onClick={() => window.LiabilityClick && window.LiabilityClick()} className=" menu-link">
                    <div className="text-truncate" data-i18n="List">Liability</div>
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <Link to="/digital-solutions" className="menu-link">
                <div data-i18n="Email">Digital Solutions</div>
              </Link>
            </li>
            <li className="menu-item other-menu">
              <Link to="ContactUs" className="menu-link"> 
                <div data-i18n="Email">Contact Us</div>
             </Link> 
            </li>
            <li className="menu-item other-menu"> 
              <Link to="/CPTLogin" className="menu-link"> <div data-i18n="Email">Login</div></Link> 
            </li>
          </ul>
        </aside>
        <div style={{boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)'}}>
          <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
            <img src="/assets/images/icons/toggle-icon.svg" className="res-menu-icon img-fluid" alt="toggle" />
          </div>
          <div className="dInline">
            <img src="/assets/images/small-logo-icon.svg" alt="" className="logoMobile" />
          </div>
        </div>
        <div className="layout-overlay layout-menu-toggle">
        </div>
        {/* / Navbar */}
        <button id="myBtn" title="Go to top" onClick={() => window.topFunction && window.topFunction()} />
        <header style={{position: 'absolute'}}>
          <nav id="mainNav" className="navbar navbar-expand-lg nav-parent" style={{position: 'fixed'}}>
            <div className="container">
              <a className="navbar-brand" href="/">
                <img src="/assets/images/logo.svg" className="img-fluid mobile-view" alt="logo" />
              </a>
              <div className="navbar-collapse" id="navbarNav">
                <div className="mobMenuWrapper" id="mobMenu">
                  <ul className="navBar">
                    <li className="noSub">
                     <Link id="becomeAgent" className="sliding-link" to="/">  Home</Link>
                    </li>
                    <li>
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        Products
                        <span className="dwnArrow" />
                      </a>
                      <ul className="innerlinks menuBox otherdrMenu products-submenu">
                        <li>
                          <a href="#" onClick={(e) => e.preventDefault()}><img src="/assets/images/assets.svg" className="mr-2" /> Property <span className="subarrow" /></a>
                          <ul className="menuBox products-innermenu">
                            <li>
                              <Link to="/standard-fire">Standard Fire &amp; Special perils policy</Link>
                            </li>
                            <li>
                              <Link to="/industrial-risk">Industrial All Risk policy</Link>
                            </li>
                            <li>
                              <Link to="/mega-risk">Mega Risk policy</Link>
                            </li>
                            <li>
                              <Link to="/sookshma-udyam">ICICI Bharat Sookshma Udyam Suraksha Policy</Link>
                            </li>
                            <li>
                              <Link to="/laghu-udyam">ICICI Bharat Laghu Udyam Suraksha Policy</Link>
                            </li>
                            <li>
                              <Link to="/griha-raksha">ICICI Bharat Griha Raksha Policy</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#" onClick={(e) => e.preventDefault()}><img src="/assets/images/marine.svg" className="mr-2" /> Marine<span className="subarrow" /></a>
                          <ul className="menuBox">
                            <li>
                              <Link to="/marine-inland">Marine Open Declaration Policy</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#" onClick={(e) => e.preventDefault()}><img src="/assets/images/professional.svg" className="mr-2" /> Liability<span className="subarrow" /></a>
                          <ul className="menuBox">
                            <li>
                              <Link to="/general-liability">Comprehensive General Liability</Link>
                            </li>
                            <li>
                              <Link to="/directors-liability">Directors and Officers Liability</Link>
                            </li>
                            <li>
                              <Link to="/cyber-risk">Cyber Risk Insurance</Link>
                            </li>
                            <li>
                              <Link to="/professional-indemnity">Professional Indemnity</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#" onClick={(e) => e.preventDefault()}><img src="/assets/images/healthcare.svg" className="mr-2" /> Health<span className="subarrow" /></a>
                          <ul className="menuBox">
                            <li>
                              <Link to="/group-health">Group Health</Link>
                            </li>
                            <li>
                              <Link to="/group-accident">Group Personal Accident</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#" onClick={(e) => e.preventDefault()}><img src="/assets/images/engineering.svg" className="mr-2" /> Engineering<span className="subarrow" /></a>
                          <ul className="menuBox">
                            <li>
                              <a href="/Portal/Contractors_All_Risk">Contractor’s All Risk (CAR)</a>
                            </li>
                            <li>
                              <a href="/Portal/Erection_All_Risk">Erection All Risk (EAR)</a>
                            </li>
                            <li>
                              <a href="/Portal/Machinery_Breakdown">Machinery Breakdown</a>
                            </li>
                            <li>
                              <a href="/Portal/Boiler_and_Pressure_Plant_Machinery">Boiler and Pressure Plant (BPP) Machinery</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="risk-manage">
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        Risk Management
                        <span className="dwnArrow" />
                      </a>
                      <ul className="innerlinks menuBox otherdrMenu riskmanage-submenu">
                        <li>
                          <Link to="/property-loss-prevention"><img src="/assets/images/assets.svg" className="mr-2" />Property</Link>
                        </li>
                        <li>
                          <Link to="/vas-solution"><img src="/assets/images/marine.svg" className="mr-2" /> Marine</Link>
                        </li>
                        <li>
                          <Link to="/risk-health"><img src="/assets/images/professional.svg" className="mr-2" /> Liability</Link>
                        </li>
                        <li>
                          <Link to="/risk-health"><img src="/assets/images/healthcare.svg" className="mr-2" /> Health</Link>
                        </li>
                        <li>
                          <Link to="/risk-engineering"><img src="/assets/images/engineering.svg" className="mr-2" /> Engineering</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="risk-manage">
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        Claims
                        <span className="dwnArrow" />
                      </a>
                      <ul className="innerlinks menuBox otherdrMenu riskmanage-submenu">
                        <li>
                          <a onClick={() => window.StrengthsClick && window.StrengthsClick()}>
                            <img src="/assets/images/our-strengths.svg" className="mr-2" />Our Strengths
                          </a>
                        </li>
                        <li>
                          <a onClick={() => window.HealthClick && window.HealthClick()}>
                            <img src="/assets/images/healthcare.svg" className="mr-2" /> Health
                          </a>
                        </li>
                        <li onClick={() => window.MarineClick && window.MarineClick()}>
                          <a href="#marine">
                            <img src="/assets/images/marine.svg" className="mr-2" /> Marine
                          </a>
                        </li>
                        <li>
                          <a onClick={() => window.PropertyClick && window.PropertyClick()}>
                            <img src="/assets/images/assets.svg" className="mr-2" /> Property
                          </a>
                        </li>
                        <li>
                          <a onClick={() => window.LiabilityClick && window.LiabilityClick()}>
                            <img src="/assets/images/professional.svg" className="mr-2" /> Liability
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="noSub">
                      <Link id="becomeAgent" className="sliding-link" to="/digital-solutions">Digital Solutions</Link>
                    </li>
                  </ul>
                </div>
              <Link to="/ContactUs" className="btn contact-us-btn">Contact Us</Link>
              <Link to="/CPTLogin" className="btn ml-2 login-btn" style={{ textTransform: "capitalize" }}>Login</Link>

              </div>
              <button className="navbar-toggler toggler-desktop" hidden id="toggle-button">
                <img src="/assets/images/icons/toggle-icon.svg" alt="toggle" />
              </button>
              <div className="toggle-content">
                <div className="d-flex justify-content-between">
                  <img src="/assets/images/small-logo-icon.svg" alt="" />
                  <img src="/assets/images/cross-icon-drop-down.svg" alt="" id="close-button" />
                </div>
                <div className="category-list">
                  <ul>
                    <li><Link to="/explore1">Blogs</Link></li>
                    <li><a href="#">Announcements</a></li>
                    <li><a href="https://www.icicilombard.com/about-us" target="_blank">About Us</a></li>
                    <li><a href="#">Awards and Accolades</a></li>
                  </ul>
                </div>
              </div>
              <button className="navbar-toggler toggler-mobile" id="toggle-button-mob">
              </button>
              <div className="toggle-content toggle-content-mob">
                <div className="d-flex justify-content-between">
                  <img src="/assets/images/small-logo-icon.svg" alt="" />
                  <img src="/assets/images/cross-icon-drop-down.svg" alt="" id="close-button-mob" />
                </div>
                <div className="home-info-main">
                  <div id="home" className="industry-info">
                    <div id="homemenu-accordion">
                      <div className="home-accordion">
                        <div className="home-accordion-header">
                          <a data-toggle="collapse" href="#collapseFive">
                            Products
                            <img src="/assets/images/icons/arrow-down.svg" className="img-fluid plus" alt="Arrow Down" />
                            <img src="/assets/images/icons/arrow-up.svg" className="img-fluid minus" alt="Arrow Up" />
                          </a>
                        </div>
                        <div id="collapseFive" className="collapse" data-parent="#homemenu-accordion">
                          <div className="home-accordion-body">
                            <div className="dropdown-nav main-dropdown">
                              <div className="dropdown-nav-option claim-content-child">
                                <a href="#" onClick={(e) => e.preventDefault()} className="dropdown-item" data-child-dropdown-item="Property">
                                  <div className="d-flex property-wrapper-head">
                                    <img src="/assets/images/assets-mob.svg" className="mr-2" /> Property
                                    <img src="/assets/images/arrow-right.svg" alt="More arrow" className="more-arrow" />
                                    <img src="/assets/images/arrow-right-colored.svg" alt="More arrow" className="more-arrow active" />
                                  </div>
                                  {/* <p>Manage financial losses arising out of unforeseen damage to your business property</p> */}
                                </a>
                              </div>
                              <div className="dropdown-nav-option claim-content-child">
                                <a href="#" onClick={(e) => e.preventDefault()} className="dropdown-item" data-child-dropdown-item="Marine">
                                  <div className="d-flex property-wrapper-head">
                                    <img src="/assets/images/marine-mob.svg" className="mr-2" /> Marine
                                    <img src="/assets/images/arrow-right.svg" alt="More arrow" className="more-arrow" />
                                    <img src="/assets/images/arrow-right-colored.svg" alt="More arrow" className="more-arrow active" />
                                  </div>
                                  {/* <p>Mitigate financial risk caused due to goods and asset damages in transit.</p> */}
                                </a>
                              </div>
                              <div className="dropdown-nav-option claim-content-child">
                                <a href="#" onClick={(e) => e.preventDefault()} className="dropdown-item" data-child-dropdown-item="Liability">
                                  <div className="d-flex property-wrapper-head">
                                    <img src="/assets/images/liability-mob.svg" className="mr-2" /> Liability
                                    <img src="/assets/images/arrow-right.svg" alt="More arrow" className="more-arrow" />
                                    <img src="/assets/images/arrow-right-colored.svg" alt="More arrow" className="more-arrow active" />
                                  </div>
                                  {/* <p>Manage financial liabilities arising out of injury or damage caused by the business
                                                          operations
                                                          </p> */}
                                </a>
                              </div>
                              <div className="dropdown-nav-option claim-content-child">
                                <a href="#" onClick={(e) => e.preventDefault()} className="dropdown-item" data-child-dropdown-item="Engineering">
                                  <div className="d-flex property-wrapper-head">
                                    <img src="/assets/images/engineering-mob.svg" className="mr-2" /> Engineering
                                    <img src="/assets/images/arrow-right.svg" alt="More arrow" className="more-arrow" />
                                    <img src="/assets/images/arrow-right-colored.svg" alt="More arrow" className="more-arrow active" />
                                  </div>
                                  {/* <p>Financial Protection for your business against engineering and construction risks.</p> */}
                                </a>
                              </div>
                              <div className="dropdown-nav-option claim-content-child">
                                <a href="#" onClick={(e) => e.preventDefault()} className="dropdown-item" data-child-dropdown-item="Health">
                                  <div className="d-flex property-wrapper-head">
                                    <img src="/assets/images/health-mob.svg" className="mr-2" /> Health
                                    <img src="/assets/images/arrow-right.svg" alt="More arrow" className="more-arrow" />
                                    <img src="/assets/images/arrow-right-colored.svg" alt="More arrow" className="more-arrow active" />
                                  </div>
                                  {/* <p>Built for optimum protection of your employee's well-being.</p> */}
                                </a>
                              </div>
                            </div>
                            <div className="dropdown-nav child-dropdown" data-child-dropdown="Property">
                              <div className="dropdown-nav-option claim-content-child">
                                <a href="#" className="dropdown-item" data-child-dropdown-item="Property">
                                  <div className="d-flex property-wrapper-head">
                                    <img src="/assets/images/sub-menu-mob-1.svg" className="mr-2" /> ICICI Bharat Sookshma Udyam
                                    Suraksha
                                    Policy
                                  </div>
                                  {/* <p>Manage financial losses arising out of unforeseen damage to your business property</p> */}
                                </a>
                              </div>
                              <div className="dropdown-nav-option claim-content-child">
                                <a href="#" className="dropdown-item" data-child-dropdown-item="Marine">
                                  <div className="d-flex property-wrapper-head">
                                    <img src="/assets/images/sub-menu-mob-2.svg" className="mr-2" /> ICICI Bharat Laghu Udyam
                                    Suraksha
                                    Policy
                                  </div>
                                  {/* <p>Manage financial losses arising out of unforeseen damage to your business property</p> */}
                                </a>
                              </div>
                              <div className="dropdown-nav-option claim-content-child">
                                <a href="#" className="dropdown-item" data-child-dropdown-item="Liability">
                                  <div className="d-flex property-wrapper-head">
                                    <img src="/assets/images/sub-menu-mob-3.svg" className="mr-2" /> ICICI Bharat Griha Raksha Policy
                                  </div>
                                  {/* <p>Manage financial losses arising out of unforeseen damage to your business property</p> */}
                                </a>
                              </div>
                              <div className="dropdown-nav-option claim-content-child">
                                <a href="#" className="dropdown-item" data-child-dropdown-item="Health">
                                  <div className="d-flex property-wrapper-head">
                                    <img src="/assets/images/sub-menu-mob-4.svg" className="mr-2" /> Standard Fire &amp; Special perils
                                    policy
                                  </div>
                                  {/* <p>Manage financial losses arising out of unforeseen damage to your business property</p> */}
                                </a>
                              </div>
                              <div className="dropdown-nav-option claim-content-child">
                                <a href="#" className="dropdown-item" data-child-dropdown-item="Engineering">
                                  <div className="d-flex property-wrapper-head">
                                    <img src="/assets/images/sub-menu-mob-5.svg" className="mr-2" /> Industrial All Risk policy
                                  </div>
                                  {/* <p>Manage financial losses arising out of unforeseen damage to your business property</p> */}
                                </a>
                              </div>
                              <div className="dropdown-nav-option claim-content-child">
                                <a href="#" className="dropdown-item" data-child-dropdown-item="Engineering">
                                  <div className="d-flex property-wrapper-head">
                                    <img src="/assets/images/sub-menu-mob-6.svg" className="mr-2" /> Mega Risk policy
                                  </div>
                                  {/* <p>Manage financial losses arising out of unforeseen damage to your business property</p> */}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="home-accordion">
                        <div className="home-accordion-header">
                          <a data-toggle="collapse" href="#collapseSix">
                            Risk management services
                            <img src="/assets/images/icons/arrow-up.svg" className="img-fluid plus" alt="Arrow Up" />
                            <img src="/assets/images/icons/arrow-down.svg" className="img-fluid minus" alt="Arrow Down" />
                          </a>
                        </div>
                        <div id="collapseSix" className="collapse" data-parent="#homemenu-accordion">
                          <div className="home-accordion-body">
                            <div className="dropdown-nav main-dropdown">
                              <div className="dropdown-nav-option claim-content-child">
                                <a href="#" onClick={(e) => e.preventDefault()} className="dropdown-item" data-child-dropdown-item="Property">
                                  <div className="d-flex property-wrapper-head">
                                    <img src="/assets/images/assets-mob.svg" className="mr-2" /> Property
                                    <img src="/assets/images/arrow-right.svg" alt="More arrow" className="more-arrow" />
                                    <img src="/assets/images/arrow-right-colored.svg" alt="More arrow" className="more-arrow active" />
                                  </div>
                                  {/* <p>Manage financial losses arising out of unforeseen damage to your business property</p> */}
                                </a>
                              </div>
                              <div className="dropdown-nav-option claim-content-child">
                                <a href="#" onClick={(e) => e.preventDefault()} className="dropdown-item" data-child-dropdown-item="Marine">
                                  <div className="d-flex property-wrapper-head">
                                    <img src="/assets/images/marine-mob.svg" className="mr-2" /> Marine
                                    <img src="/assets/images/arrow-right.svg" alt="More arrow" className="more-arrow" />
                                    <img src="/assets/images/arrow-right-colored.svg" alt="More arrow" className="more-arrow active" />
                                  </div>
                                  {/* <p>Mitigate financial risk caused due to goods and asset damages in transit.</p> */}
                                </a>
                              </div>
                              <div className="dropdown-nav-option claim-content-child">
                                <a href="#" onClick={(e) => e.preventDefault()} className="dropdown-item" data-child-dropdown-item="Liability">
                                  <div className="d-flex property-wrapper-head">
                                    <img src="/assets/images/liability-mob.svg" className="mr-2" /> Liability
                                    <img src="/assets/images/arrow-right.svg" alt="More arrow" className="more-arrow" />
                                    <img src="/assets/images/arrow-right-colored.svg" alt="More arrow" className="more-arrow active" />
                                  </div>
                                  {/* <p>Manage financial liabilities arising out of injury or damage caused by the business
                                                          operations
                                                          </p> */}
                                </a>
                              </div>
                              <div className="dropdown-nav-option claim-content-child">
                                <a href="#" onClick={(e) => e.preventDefault()} className="dropdown-item" data-child-dropdown-item="Engineering">
                                  <div className="d-flex property-wrapper-head">
                                    <img src="/assets/images/engineering-mob.svg" className="mr-2" /> Engineering
                                    <img src="/assets/images/arrow-right.svg" alt="More arrow" className="more-arrow" />
                                    <img src="/assets/images/arrow-right-colored.svg" alt="More arrow" className="more-arrow active" />
                                  </div>
                                  {/* <p>Financial Protection for your business against engineering and construction risks.</p> */}
                                </a>
                              </div>
                              <div className="dropdown-nav-option claim-content-child">
                                <a href="#" onClick={(e) => e.preventDefault()} className="dropdown-item" data-child-dropdown-item="Health">
                                  <div className="d-flex property-wrapper-head">
                                    <img src="/assets/images/health-mob.svg" className="mr-2" /> Health
                                    <img src="/assets/images/arrow-right.svg" alt="More arrow" className="more-arrow" />
                                    <img src="/assets/images/arrow-right-colored.svg" alt="More arrow" className="more-arrow active" />
                                  </div>
                                  {/* <p>Built for optimum protection of your employee's well-being.</p> */}
                                </a>
                              </div>
                            </div>
                            <div className="dropdown-nav child-dropdown" data-child-dropdown="Property">
                              <div className="dropdown-nav-option claim-content-child">
                                <a href="#" className="dropdown-item" data-child-dropdown-item="Property">
                                  <div className="d-flex property-wrapper-head">
                                    <img src="/assets/images/loss-prevention.svg" className="mr-2" />Loss Prevention Exercise
                                  </div>
                                  {/* <p>Manage financial losses arising out of unforeseen damage to your business property</p> */}
                                </a>
                              </div>
                              <div className="dropdown-nav-option claim-content-child">
                                <a href="#" className="dropdown-item" data-child-dropdown-item="Marine">
                                  <div className="d-flex property-wrapper-head">
                                    <img src="/assets/images/compliance.svg" className="mr-2" /> Comprehensive Risk Assessment
                                  </div>
                                  {/* <p>Manage financial losses arising out of unforeseen damage to your business property</p> */}
                                </a>
                              </div>
                              <div className="dropdown-nav-option claim-content-child">
                                <a href="#" className="dropdown-item" data-child-dropdown-item="Liability">
                                  <div className="d-flex property-wrapper-head">
                                    <img src="/assets/images/flash.svg" className="mr-2" />Electrical Risk Assessment
                                  </div>
                                  {/* <p>Manage financial losses arising out of unforeseen damage to your business property</p> */}
                                </a>
                              </div>
                              <div className="dropdown-nav-option claim-content-child">
                                <a href="#" className="dropdown-item" data-child-dropdown-item="Health">
                                  <div className="d-flex property-wrapper-head">
                                    <img src="/assets/images/hydrant.svg" className="mr-2" /> FIRE HYDRANT IoT
                                  </div>
                                  {/* <p>Manage financial losses arising out of unforeseen damage to your business property</p> */}
                                </a>
                              </div>
                              <div className="dropdown-nav-option claim-content-child">
                                <a href="#" className="dropdown-item" data-child-dropdown-item="Engineering">
                                  <div className="d-flex property-wrapper-head">
                                    <img src="/assets/images/humidity.svg" className="mr-2" /> Temperature &amp; Humidity IoT
                                  </div>
                                  {/* <p>Manage financial losses arising out of unforeseen damage to your business property</p> */}
                                </a>
                              </div>
                              <div className="dropdown-nav-option claim-content-child">
                                <a href="#" className="dropdown-item" data-child-dropdown-item="Engineering">
                                  <div className="d-flex property-wrapper-head">
                                    <img src="/assets/images/renewable-energy.svg" className="mr-2" /> Solutions in renewable energy
                                  </div>
                                  {/* <p>Manage financial losses arising out of unforeseen damage to your business property</p> */}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="home-accordion">
                        <div className="home-accordion-header">
                          <a data-toggle="collapse" href="#collapseSeven">
                            Claims
                            <img src="/assets/images/icons/arrow-up.svg" className="img-fluid plus" alt="Arrow Up" />
                            <img src="/assets/images/icons/arrow-down.svg" className="img-fluid minus" alt="Arrow Down" />
                          </a>
                        </div>
                        <div id="collapseSeven" className="collapse" data-parent="#homemenu-accordion">
                          <div className="home-accordion-body">
                            <div className="dropdown-nav main-dropdown">
                              <div className="dropdown-nav-option claim-content-child">
                                <a href="#" onClick={(e) => e.preventDefault()} className="dropdown-item" data-child-dropdown-item="Property">
                                  <div className="d-flex property-wrapper-head">
                                    <img src="/assets/images/health-mob.svg" className="mr-2" /> Health
                                  </div>
                                  {/* <p>For corporate employees to Initiate health claims processing</p> */}
                                </a>
                              </div>
                              <div className="dropdown-nav-option claim-content-child">
                                <a href="#" onClick={(e) => e.preventDefault()} className="dropdown-item" data-child-dropdown-item="Marine">
                                  <div className="d-flex property-wrapper-head">
                                    <img src="/assets/images/non-health-mob.svg" className="mr-2" /> Non-health
                                  </div>
                                  {/* <p>For businesses to reimburse financial loss during operations</p> */}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="home-accordion">
                        <div className="home-accordion-header">
                          <a data-toggle="collapse" href="#collapseEight">
                            About Us
                            <img src="/assets/images/icons/arrow-up.svg" className="img-fluid plus" alt="Arrow Up" />
                            <img src="/assets/images/icons/arrow-down.svg" className="img-fluid minus" alt="Arrow Down" />
                          </a>
                        </div>
                        <div id="collapseEight" className="collapse" data-parent="#homemenu-accordion">
                          <div className="home-accordion-body">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-row align-content-center">
                 <Link to="/ContactUs" className="btn contact-btn-mob">
  Contact Us
</Link>
                  <Link to="/CPTLogin" className="btn login-btn-mob ml-3">Login</Link>
                </div>
                <div className="category-list">
                  <ul>
                    <li><Link to="/employee-speak">Blogs</Link></li>
                    <li><a href="#">Announcements</a></li>
                    <li><a href="https://www.icicilombard.com/about-us" target="_blank">About Us</a></li>
                    <li><Link to="/home#Awards">Awards and Accolades</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </header>
        {/* header ends */}
      </div>
    );
};

export default Navbarportal;
