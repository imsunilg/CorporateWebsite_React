import React from "react";
import { Link } from "react-router-dom";
const Navbarportal = () => {
  return (
      <div>
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
            <a href="javascript:void(0);" className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
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
              <a href="javascript:void(0);" className="menu-link menu-toggle">
                <div className="text-truncate" data-i18n="Users">Products</div>
              </a>
              <ul className="menu-sub">
                <li className="menu-item" style={{}}>
                  <a href="javascript:void(0);" className="menu-link menu-toggle">
                    <div className="text-truncate" data-i18n="View">Property</div>
                  </a>
                  <ul className="menu-sub">
                    <li className="menu-item">
                      <a href="/Portal/Standard_Fire_and_Special_perils_policy" className="menu-link">
                        <div className="text-truncate" data-i18n="Account">
                          Standard Fire &amp; Special perils
                          policy
                        </div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="/Portal/Industrial_All_Risk_policy" className="menu-link">
                        <div className="text-truncate" data-i18n="Security">Industrial All Risk policy</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="/Portal/Mega_Risk_policy" className="menu-link">
                        <div className="text-truncate" data-i18n="Billing & Plans">Mega Risk policy</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="/Portal/ICICI_Bharat_Sookshma_Udyam_Surakha_Policy" className="menu-link">
                        <div className="text-truncate" data-i18n="Notifications">
                          ICICI Bharat Sookshma Udyam
                          Suraksha Policy
                        </div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="/Portal/ICICI_Bharat_LaGhu_Udyam_Suraksha_Policy" className="menu-link">
                        <div className="text-truncate" data-i18n="Connections">
                          ICICI Bharat Laghu Udyam
                          Suraksha Policy
                        </div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="/Portal/ICICI_Bharat_Griha_Raksha_Policy" className="menu-link">
                        <div className="text-truncate" data-i18n="Connections">ICICI Bharat Griha Raksha Policy</div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item" style={{}}>
                  <a href="javascript:void(0);" className="menu-link menu-toggle">
                    <div className="text-truncate" data-i18n="View">Marine</div>
                  </a>
                  <ul className="menu-sub">
                    <li className="menu-item">
                      <a href="/Portal/Marine_Inland_Open_Declaration_Policy" className="menu-link">
                        <div className="text-truncate" data-i18n="Account">
                          Marine Open Declaration Policy
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item" style={{}}>
                  <a href="javascript:void(0);" className="menu-link menu-toggle">
                    <div className="text-truncate" data-i18n="View">Liability</div>
                  </a>
                  <ul className="menu-sub">
                    <li className="menu-item">
                      <a href="/Portal/Comprehensive_General_Liability" className="menu-link">
                        <div className="text-truncate" data-i18n="Account">
                          Comprehensive General Liability
                        </div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="/Portal/Directors_and_Officers_Liability" className="menu-link">
                        <div className="text-truncate" data-i18n="Account">
                          Directors and Officers Liability
                        </div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="/Portal/Cyber_Risk_Insurance" className="menu-link">
                        <div className="text-truncate" data-i18n="Account">
                          Cyber Risk Insurance
                        </div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="/Portal/Professional_Indemnity" className="menu-link">
                        <div className="text-truncate" data-i18n="Account">
                          Professional Indemnity
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item" style={{}}>
                  <a href="javascript:void(0);" className="menu-link menu-toggle">
                    <div className="text-truncate" data-i18n="View">Health</div>
                  </a>
                  <ul className="menu-sub">
                    <li className="menu-item">
                      <a href="/Portal/Group_Health" className="menu-link">
                        <div className="text-truncate" data-i18n="Account">
                          Group Health
                        </div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="/Portal/Group_Personal_Accident" className="menu-link">
                        <div className="text-truncate" data-i18n="Account">
                          Group Personal Accident
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item" style={{}}>
                  <a href="javascript:void(0);" className="menu-link menu-toggle">
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
              <a href="javascript:void(0);" className="menu-link menu-toggle">
                <div className="text-truncate" data-i18n="Users">Risk Management</div>
              </a>
              <ul className="menu-sub">
                <li className="menu-item">
                  <a href="/Portal/Property_Loss_Prevention_exercise" className="menu-link">
                    <div className="text-truncate" data-i18n="List">Property</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="/Portal/Vas_Solution" className="menu-link">
                    <div className="text-truncate" data-i18n="List">Marine</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="/Portal/risk_liability" className="menu-link">
                    <div className="text-truncate" data-i18n="List">Liability</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="/Portal/risk_Health" className="menu-link">
                    <div className="text-truncate" data-i18n="List">Health</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="/Portal/risk_Engineering" className="menu-link">
                    <div className="text-truncate" data-i18n="List">Engineering</div>
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-item" style={{}}>
              <a href="javascript:void(0);" className="menu-link menu-toggle">
                <div className="text-truncate" data-i18n="Users">Claims</div>
              </a>
              <ul className="menu-sub">
                <li className="menu-item">
                  <a onclick="StrengthsClick()" className="menu-link">
                    <div className="text-truncate" data-i18n="List">Our Strengths</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a onclick="HealthClick()" className="menu-link">
                    <div className="text-truncate" data-i18n="List">Health</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a onclick="MarineClick()" className="menu-link">
                    <div className="text-truncate" data-i18n="List">Marine</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a onclick="PropertyClick()" className="menu-link">
                    <div className="text-truncate" data-i18n="List">Property</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a onclick="LiabilityClick()" className=" menu-link">
                    <div className="text-truncate" data-i18n="List">Liability</div>
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <a href="/Portal/digital_solutions" className="menu-link">
                <div data-i18n="Email">Digital Solutions</div>
              </a>
            </li>
            <li className="menu-item other-menu">
              <Link to="ContactUs" className="menu-link"> 
                <div data-i18n="Email">Contact Us</div>
             </Link> 
            </li>
            <li className="menu-item other-menu"> 
              <a href="/Portal/CPTLogin" className="menu-link"> <div data-i18n="Email">Login</div></a> 
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
        <button onclick="topFunction()" id="myBtn" title="Go to top" />
        <header style={{position: 'absolute'}}>
          <nav className="navbar navbar-expand-lg nav-parent" style={{position: 'fixed'}}>
            <div className="container">
              <a className="navbar-brand" href="/">
                <img src="/assets/images/logo.svg" className="img-fluid mobile-view" alt="logo" />
              </a>
              <div className="navbar-collapse" id="navbarNav">
                <div className="mobMenuWrapper" id="mobMenu">
                  <ul className="navBar">
                    <li>
                      <a id="becomeAgent" className="sliding-link" href="/">Home</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        Products
                        <span className="dwnArrow" />
                      </a>
                      <ul className="innerlinks menuBox otherdrMenu products-submenu">
                        <li>
                          <a href="javascript:void(0)"><img src="/assets/images/assets.svg" className="mr-2" /> Property <span className="subarrow" /></a>
                          <ul className="menuBox products-innermenu">
                            <li>
                              <a href="/Portal/Standard_Fire_and_Special_perils_policy">Standard Fire &amp; Special perils policy</a>
                            </li>
                            <li>
                              <a href="/Portal/Industrial_All_Risk_policy">Industrial All Risk policy</a>
                            </li>
                            <li>
                              <a href="/Portal/Mega_Risk_policy">Mega Risk policy</a>
                            </li>
                            <li>
                              <a href="/Portal/ICICI_Bharat_Sookshma_Udyam_Surakha_Policy">ICICI Bharat Sookshma Udyam Suraksha Policy</a>
                            </li>
                            <li>
                              <a href="/Portal/ICICI_Bharat_LaGhu_Udyam_Suraksha_Policy">ICICI Bharat Laghu Udyam Suraksha Policy</a>
                            </li>
                            <li>
                              <a href="/Portal/ICICI_Bharat_Griha_Raksha_Policy">ICICI Bharat Griha Raksha Policy</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="javascript:void(0)"><img src="/assets/images/marine.svg" className="mr-2" /> Marine<span className="subarrow" /></a>
                          <ul className="menuBox">
                            <li>
                              <a href="/Portal/Marine_Inland_Open_Declaration_Policy">Marine Open Declaration Policy</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="javascript:void(0)"><img src="/assets/images/professional.svg" className="mr-2" /> Liability<span className="subarrow" /></a>
                          <ul className="menuBox">
                            <li>
                              <a href="/Portal/Comprehensive_General_Liability">Comprehensive General Liability</a>
                            </li>
                            <li>
                              <a href="/Portal/Directors_and_Officers_Liability">Directors and Officers Liability</a>
                            </li>
                            <li>
                              <a href="/Portal/Cyber_Risk_Insurance">Cyber Risk Insurance</a>
                            </li>
                            <li>
                              <a href="/Portal/Professional_Indemnity">Professional Indemnity</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="javascript:void(0)"><img src="/assets/images/healthcare.svg" className="mr-2" /> Health<span className="subarrow" /></a>
                          <ul className="menuBox">
                            <li>
                              <a href="/Portal/Group_Health">Group Health</a>
                            </li>
                            <li>
                              <a href="/Portal/Group_Personal_Accident">Group Personal Accident</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="javascript:void(0)"><img src="/assets/images/engineering.svg" className="mr-2" /> Engineering<span className="subarrow" /></a>
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
                      <a href="javascript:void(0)">
                        Risk Management
                        <span className="dwnArrow" />
                      </a>
                      <ul className="innerlinks menuBox otherdrMenu riskmanage-submenu">
                        <li>
                          <a href="/Portal/Property_Loss_Prevention_exercise"><img src="/assets/images/assets.svg" className="mr-2" />Property</a>
                        </li>
                        <li>
                          <a href="/Portal/Vas_Solution"><img src="/assets/images/marine.svg" className="mr-2" /> Marine</a>
                        </li>
                        <li>
                          <a href="/Portal/risk_liability"><img src="/assets/images/professional.svg" className="mr-2" /> Liability</a>
                        </li>
                        <li>
                          <a href="/Portal/risk_Health"><img src="/assets/images/healthcare.svg" className="mr-2" /> Health</a>
                        </li>
                        <li>
                          <a href="/Portal/risk_Engineering"><img src="/assets/images/engineering.svg" className="mr-2" /> Engineering</a>
                        </li>
                      </ul>
                    </li>
                    <li className="risk-manage">
                      <a href="javascript:void(0)">
                        Claims
                        <span className="dwnArrow" />
                      </a>
                      <ul className="innerlinks menuBox otherdrMenu riskmanage-submenu">
                        <li>
                          <a onclick="StrengthsClick()">
                            <img src="/assets/images/our-strengths.svg" className="mr-2" />Our Strengths
                          </a>
                        </li>
                        <li>
                          <a onclick="HealthClick()">
                            <img src="/assets/images/healthcare.svg" className="mr-2" /> Health
                          </a>
                        </li>
                        <li onclick="MarineClick()">
                          <a className href="#marine">
                            <img src="/assets/images/marine.svg" className="mr-2" /> Marine
                          </a>
                        </li>
                        <li>
                          <a onclick="PropertyClick()">
                            <img src="/assets/images/assets.svg" className="mr-2" /> Property
                          </a>
                        </li>
                        <li>
                          <a onclick="LiabilityClick()">
                            <img src="/assets/images/professional.svg" className="mr-2" /> Liability
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a id="becomeAgent" className="sliding-link" href="/Portal/digital_solutions">Digital Solutions</a>
                    </li>
                  </ul>
                </div>
              <Link to="ContactUs" className="btn contact-us-btn">Contact Us</Link>
<Link to="ContactUs" className="btn ml-2 login-btn" style={{ textTransform: "capitalize" }}>Login</Link>

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
                    <li><a href="/Portal/Explore1">Blogs</a></li>
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
                                <a href="JavaScript:;" className="dropdown-item" data-child-dropdown-item="Property">
                                  <div className="d-flex property-wrapper-head">
                                    <img src="/assets/images/assets-mob.svg" className="mr-2" /> Property
                                    <img src="/assets/images/arrow-right.svg" alt="More arrow" className="more-arrow" />
                                    <img src="/assets/images/arrow-right-colored.svg" alt="More arrow" className="more-arrow active" />
                                  </div>
                                  {/* <p>Manage financial losses arising out of unforeseen damage to your business property</p> */}
                                </a>
                              </div>
                              <div className="dropdown-nav-option claim-content-child">
                                <a href="JavaScript:;" className="dropdown-item" data-child-dropdown-item="Marine">
                                  <div className="d-flex property-wrapper-head">
                                    <img src="/assets/images/marine-mob.svg" className="mr-2" /> Marine
                                    <img src="/assets/images/arrow-right.svg" alt="More arrow" className="more-arrow" />
                                    <img src="/assets/images/arrow-right-colored.svg" alt="More arrow" className="more-arrow active" />
                                  </div>
                                  {/* <p>Mitigate financial risk caused due to goods and asset damages in transit.</p> */}
                                </a>
                              </div>
                              <div className="dropdown-nav-option claim-content-child">
                                <a href="JavaScript:;" className="dropdown-item" data-child-dropdown-item="Liability">
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
                                <a href="JavaScript:;" className="dropdown-item" data-child-dropdown-item="Engineering">
                                  <div className="d-flex property-wrapper-head">
                                    <img src="/assets/images/engineering-mob.svg" className="mr-2" /> Engineering
                                    <img src="/assets/images/arrow-right.svg" alt="More arrow" className="more-arrow" />
                                    <img src="/assets/images/arrow-right-colored.svg" alt="More arrow" className="more-arrow active" />
                                  </div>
                                  {/* <p>Financial Protection for your business against engineering and construction risks.</p> */}
                                </a>
                              </div>
                              <div className="dropdown-nav-option claim-content-child">
                                <a href="JavaScript:;" className="dropdown-item" data-child-dropdown-item="Health">
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
                                <a href="JavaScript:;" className="dropdown-item" data-child-dropdown-item="Property">
                                  <div className="d-flex property-wrapper-head">
                                    <img src="/assets/images/assets-mob.svg" className="mr-2" /> Property
                                    <img src="/assets/images/arrow-right.svg" alt="More arrow" className="more-arrow" />
                                    <img src="/assets/images/arrow-right-colored.svg" alt="More arrow" className="more-arrow active" />
                                  </div>
                                  {/* <p>Manage financial losses arising out of unforeseen damage to your business property</p> */}
                                </a>
                              </div>
                              <div className="dropdown-nav-option claim-content-child">
                                <a href="JavaScript:;" className="dropdown-item" data-child-dropdown-item="Marine">
                                  <div className="d-flex property-wrapper-head">
                                    <img src="/assets/images/marine-mob.svg" className="mr-2" /> Marine
                                    <img src="/assets/images/arrow-right.svg" alt="More arrow" className="more-arrow" />
                                    <img src="/assets/images/arrow-right-colored.svg" alt="More arrow" className="more-arrow active" />
                                  </div>
                                  {/* <p>Mitigate financial risk caused due to goods and asset damages in transit.</p> */}
                                </a>
                              </div>
                              <div className="dropdown-nav-option claim-content-child">
                                <a href="JavaScript:;" className="dropdown-item" data-child-dropdown-item="Liability">
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
                                <a href="JavaScript:;" className="dropdown-item" data-child-dropdown-item="Engineering">
                                  <div className="d-flex property-wrapper-head">
                                    <img src="/assets/images/engineering-mob.svg" className="mr-2" /> Engineering
                                    <img src="/assets/images/arrow-right.svg" alt="More arrow" className="more-arrow" />
                                    <img src="/assets/images/arrow-right-colored.svg" alt="More arrow" className="more-arrow active" />
                                  </div>
                                  {/* <p>Financial Protection for your business against engineering and construction risks.</p> */}
                                </a>
                              </div>
                              <div className="dropdown-nav-option claim-content-child">
                                <a href="JavaScript:;" className="dropdown-item" data-child-dropdown-item="Health">
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
                                <a href="JavaScript:;" className="dropdown-item" data-child-dropdown-item="Property">
                                  <div className="d-flex property-wrapper-head">
                                    <img src="/assets/images/health-mob.svg" className="mr-2" /> Health
                                  </div>
                                  {/* <p>For corporate employees to Initiate health claims processing</p> */}
                                </a>
                              </div>
                              <div className="dropdown-nav-option claim-content-child">
                                <a href="JavaScript:;" className="dropdown-item" data-child-dropdown-item="Marine">
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
                 <Link to="ContactUs" className="btn contact-btn-mob">
  Contact Us
</Link>
                  <a href="/Portal/CPTLogin" className="btn login-btn-mob ml-3">Login</a>
                </div>
                <div className="category-list">
                  <ul>
                    <li><a href="/Portal/Employee_Speak">Blogs</a></li>
                    <li><a href="#">Announcements</a></li>
                    <li><a href="https://www.icicilombard.com/about-us" target="_blank">About Us</a></li>
                    <li><a href="/Portal/Home%2523Awards">Awards and Accolades</a></li>
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