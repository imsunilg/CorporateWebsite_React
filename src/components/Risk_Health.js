import react from "react";
import { Link } from "react-router-dom";
const Risk_Health=()=>{
return(

      <div>
        {/* header starts */}
        {/* Navbar */}
        <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme menu-none d-sm-block d-md-none">
          <div className="app-brand demo " style={{marginTop: '20px'}}>
            <a href="/" className="app-brand-link">
              <span className="app-brand-logo demo">
                <img src="../assets/images/small-logo-icon.svg" className="img-fluid desktop-view" alt="" />
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
                  <a href="javascript:void(0);" className="menu-link menu-toggle">
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
                  <a href="javascript:void(0);" className="menu-link menu-toggle">
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
                  <a href="/Portal/risk_Engineering"   className="menu-link">
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
              <a href="/Portal/digital_solutions" className="menu-link">
                <div data-i18n="Email">Digital Solutions</div>
              </a>
            </li>
            <li className="menu-item other-menu">
              <a href="/Portal/ContactUs" className="menu-link">
                <div data-i18n="Email">Contact Us</div>
              </a>
            </li>
            <li className="menu-item other-menu"> 
              <a href="/Portal/CPTLogin" className="menu-link"> <div data-i18n="Email">Login</div></a> 
            </li>
          </ul>
        </aside>
        <div style={{boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)'}}>
          <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
            <img src="../assets/images/icons/toggle-icon.svg" className="res-menu-icon img-fluid" alt="toggle" />
          </div>
          <div className="dInline">
            <img src="../assets/images/small-logo-icon.svg" alt="" className="logoMobile" />
          </div>
        </div>
        <div className="layout-overlay layout-menu-toggle">
        </div>
        {/* / Navbar */}
        <button onClick={() => window.topFunction && window.topFunction()} id="myBtn" title="Go to top" />
        <header style={{position: 'absolute'}}>
          <nav className="navbar navbar-expand-lg nav-parent" style={{position: 'fixed'}}>
            <div className="container">
              <a className="navbar-brand" href="/">
                <img src="../assets/images/logo.svg" className="img-fluid mobile-view" alt="logo" />
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
                          <a href="javascript:void(0)"><img src="../assets/images/assets.svg" className="mr-2" /> Property <span className="subarrow" /></a>
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
                          <a href="javascript:void(0)"><img src="../assets/images/marine.svg" className="mr-2" /> Marine<span className="subarrow" /></a>
                          <ul className="menuBox">
                            <li>
                              <a href="/Portal/Marine_Inland_Open_Declaration_Policy">Marine Open Declaration Policy</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="javascript:void(0)"><img src="../assets/images/professional.svg" className="mr-2" /> Liability<span className="subarrow" /></a>
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
                          <a href="javascript:void(0)"><img src="../assets/images/healthcare.svg" className="mr-2" /> Health<span className="subarrow" /></a>
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
                          <a href="javascript:void(0)"><img src="../assets/images/engineering.svg" className="mr-2" /> Engineering<span className="subarrow" /></a>
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
                          <a href="/Portal/Property_Loss_Prevention_exercise"><img src="../assets/images/assets.svg" className="mr-2" />Property</a>
                        </li>
                        <li>
                          <a href="/Portal/Vas_Solution"><img src="../assets/images/marine.svg" className="mr-2" /> Marine</a>
                        </li>
                        <li>
                          <a href="/Portal/risk_liability"><img src="../assets/images/professional.svg" className="mr-2" /> Liability</a>
                        </li>
                        <li>
                          <a href="/Portal/risk_Health"><img src="../assets/images/healthcare.svg" className="mr-2" /> Health</a>
                        </li>
                        <li>
                          <a href="/Portal/risk_Engineering"><img src="../assets/images/engineering.svg" className="mr-2" /> Engineering</a>
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
                          <a onClick={() => window.StrengthsClick && window.StrengthsClick()}>
                            <img src="../assets/images/our-strengths.svg" className="mr-2" />Our Strengths
                          </a>
                        </li>
                        <li>
                          <a onClick={() => window.HealthClick && window.HealthClick()}>
                            <img src="../assets/images/healthcare.svg" className="mr-2" /> Health
                          </a>
                        </li>
                        <li onClick={() => window.MarineClick && window.MarineClick()}>
                          <a href="#marine">
                            <img src="../assets/images/marine.svg" className="mr-2" /> Marine
                          </a>
                        </li>
                        <li>
                          <a onClick={() => window.PropertyClick && window.PropertyClick()}>
                            <img src="../assets/images/assets.svg" className="mr-2" /> Property
                          </a>
                        </li>
                        <li>
                          <a onClick={() => window.LiabilityClick && window.LiabilityClick()}>
                            <img src="../assets/images/professional.svg" className="mr-2" /> Liability
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a id="becomeAgent" className="sliding-link" href="/Portal/digital_solutions">Digital Solutions</a>
                    </li>
                  </ul>
                </div>
                {/* <ul>
                      <li class="nav-item dropdown search-button">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown-5" role="button" data-toggle="dropdown"
                          aria-haspopup="true" aria-expanded="false">
                          <img src="../assets/images/search-icon.svg" alt="search-icon">
                        </a>
                        <div class="dropdown-menu search-dropdown" aria-labelledby="navbarDropdown-5">
                          <img src="../assets/images/search-black.svg" alt="search-icon">
                          <input type="text" id="search-input" class="input-search ml-3" placeholder="Search...">
                        </div>
                      </li>
                      </ul> */}
                <a href="/Portal/ContactUs" className="btn contact-us-btn">Contact Us</a>
                <a href="/Portal/CPTLogin" className="btn  ml-2 login-btn" style={{textTransform: 'capitalize'}}>Login</a>
              </div>
              <button className="navbar-toggler toggler-desktop" hidden id="toggle-button">
                <img src="../assets/images/icons/toggle-icon.svg" alt="toggle" />
              </button>
              <div className="toggle-content">
                <div className="d-flex justify-content-between">
                  <img src="../assets/images/small-logo-icon.svg" alt="" />
                  <img src="../assets/images/cross-icon-drop-down.svg" alt="" id="close-button" />
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
                  <img src="../assets/images/small-logo-icon.svg" alt="" />
                  <img src="../assets/images/cross-icon-drop-down.svg" alt="" id="close-button-mob" />
                </div>
                <div className="home-info-main">
                  <div id="home" className="industry-info">
                    <div id="homemenu-accordion">
                      <div className="home-accordion">
                        <div className="home-accordion-header">
                          <a data-toggle="collapse" href="#collapseFive">
                            Products
                            <img src="../assets/images/icons/arrow-down.svg" className="img-fluid plus" alt="Arrow Down" />
                            <img src="../assets/images/icons/arrow-up.svg" className="img-fluid minus" alt="Arrow Up" />
                          </a>
                        </div>
                        <div id="collapseFive" className="collapse" data-parent="#homemenu-accordion">
                          <div className="home-accordion-body">
                            <div className="dropdown-nav main-dropdown">
                              <div className="dropdown-nav-option claim-content-child">
                                <a href="JavaScript:;" className="dropdown-item" data-child-dropdown-item="Property">
                                  <div className="d-flex property-wrapper-head">
                                    <img src="../assets/images/assets-mob.svg" className="mr-2" /> Property
                                    <img src="../assets/images/arrow-right.svg" alt="More arrow" className="more-arrow" />
                                    <img src="../assets/images/arrow-right-colored.svg" alt="More arrow" className="more-arrow active" />
                                  </div>
                                  {/* <p>Manage financial losses arising out of unforeseen damage to your business property</p> */}
                                </a>
                              </div>
                              <div className="dropdown-nav-option claim-content-child">
                                <a href="JavaScript:;" className="dropdown-item" data-child-dropdown-item="Marine">
                                  <div className="d-flex property-wrapper-head">
                                    <img src="../assets/images/marine-mob.svg" className="mr-2" /> Marine
                                    <img src="../assets/images/arrow-right.svg" alt="More arrow" className="more-arrow" />
                                    <img src="../assets/images/arrow-right-colored.svg" alt="More arrow" className="more-arrow active" />
                                  </div>
                                  {/* <p>Mitigate financial risk caused due to goods and asset damages in transit.</p> */}
                                </a>
                              </div>
                              <div className="dropdown-nav-option claim-content-child">
                                <a href="JavaScript:;" className="dropdown-item" data-child-dropdown-item="Liability">
                                  <div className="d-flex property-wrapper-head">
                                    <img src="../assets/images/liability-mob.svg" className="mr-2" /> Liability
                                    <img src="../assets/images/arrow-right.svg" alt="More arrow" className="more-arrow" />
                                    <img src="../assets/images/arrow-right-colored.svg" alt="More arrow" className="more-arrow active" />
                                  </div>
                                  {/* <p>Manage financial liabilities arising out of injury or damage caused by the business
                                                          operations
                                                          </p> */}
                                </a>
                              </div>
                              <div className="dropdown-nav-option claim-content-child">
                                <a href="JavaScript:;" className="dropdown-item" data-child-dropdown-item="Engineering">
                                  <div className="d-flex property-wrapper-head">
                                    <img src="../assets/images/engineering-mob.svg" className="mr-2" /> Engineering
                                    <img src="../assets/images/arrow-right.svg" alt="More arrow" className="more-arrow" />
                                    <img src="../assets/images/arrow-right-colored.svg" alt="More arrow" className="more-arrow active" />
                                  </div>
                                  {/* <p>Financial Protection for your business against engineering and construction risks.</p> */}
                                </a>
                              </div>
                              <div className="dropdown-nav-option claim-content-child">
                                <a href="JavaScript:;" className="dropdown-item" data-child-dropdown-item="Health">
                                  <div className="d-flex property-wrapper-head">
                                    <img src="../assets/images/health-mob.svg" className="mr-2" /> Health
                                    <img src="../assets/images/arrow-right.svg" alt="More arrow" className="more-arrow" />
                                    <img src="../assets/images/arrow-right-colored.svg" alt="More arrow" className="more-arrow active" />
                                  </div>
                                  {/* <p>Built for optimum protection of your employee's well-being.</p> */}
                                </a>
                              </div>
                            </div>
                            <div className="dropdown-nav child-dropdown" data-child-dropdown="Property">
                              <div className="dropdown-nav-option claim-content-child">
                                <a href="#" className="dropdown-item" data-child-dropdown-item="Property">
                                  <div className="d-flex property-wrapper-head">
                                    <img src="../assets/images/sub-menu-mob-1.svg" className="mr-2" /> ICICI Bharat Sookshma Udyam
                                    Suraksha
                                    Policy
                                  </div>
                                  {/* <p>Manage financial losses arising out of unforeseen damage to your business property</p> */}
                                </a>
                              </div>
                              <div className="dropdown-nav-option claim-content-child">
                                <a href="#" className="dropdown-item" data-child-dropdown-item="Marine">
                                  <div className="d-flex property-wrapper-head">
                                    <img src="../assets/images/sub-menu-mob-2.svg" className="mr-2" /> ICICI Bharat Laghu Udyam
                                    Suraksha
                                    Policy
                                  </div>
                                  {/* <p>Manage financial losses arising out of unforeseen damage to your business property</p> */}
                                </a>
                              </div>
                              <div className="dropdown-nav-option claim-content-child">
                                <a href="#" className="dropdown-item" data-child-dropdown-item="Liability">
                                  <div className="d-flex property-wrapper-head">
                                    <img src="../assets/images/sub-menu-mob-3.svg" className="mr-2" /> ICICI Bharat Griha Raksha Policy
                                  </div>
                                  {/* <p>Manage financial losses arising out of unforeseen damage to your business property</p> */}
                                </a>
                              </div>
                              <div className="dropdown-nav-option claim-content-child">
                                <a href="#" className="dropdown-item" data-child-dropdown-item="Health">
                                  <div className="d-flex property-wrapper-head">
                                    <img src="../assets/images/sub-menu-mob-4.svg" className="mr-2" /> Standard Fire &amp; Special perils
                                    policy
                                  </div>
                                  {/* <p>Manage financial losses arising out of unforeseen damage to your business property</p> */}
                                </a>
                              </div>
                              <div className="dropdown-nav-option claim-content-child">
                                <a href="#" className="dropdown-item" data-child-dropdown-item="Engineering">
                                  <div className="d-flex property-wrapper-head">
                                    <img src="../assets/images/sub-menu-mob-5.svg" className="mr-2" /> Industrial All Risk policy
                                  </div>
                                  {/* <p>Manage financial losses arising out of unforeseen damage to your business property</p> */}
                                </a>
                              </div>
                              <div className="dropdown-nav-option claim-content-child">
                                <a href="#" className="dropdown-item" data-child-dropdown-item="Engineering">
                                  <div className="d-flex property-wrapper-head">
                                    <img src="../assets/images/sub-menu-mob-6.svg" className="mr-2" /> Mega Risk policy
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
                            <img src="../assets/images/icons/arrow-up.svg" className="img-fluid plus" alt="Arrow Up" />
                            <img src="../assets/images/icons/arrow-down.svg" className="img-fluid minus" alt="Arrow Down" />
                          </a>
                        </div>
                        <div id="collapseSix" className="collapse" data-parent="#homemenu-accordion">
                          <div className="home-accordion-body">
                            <div className="dropdown-nav main-dropdown">
                              <div className="dropdown-nav-option claim-content-child">
                                <a href="JavaScript:;" className="dropdown-item" data-child-dropdown-item="Property">
                                  <div className="d-flex property-wrapper-head">
                                    <img src="../assets/images/assets-mob.svg" className="mr-2" /> Property
                                    <img src="../assets/images/arrow-right.svg" alt="More arrow" className="more-arrow" />
                                    <img src="../assets/images/arrow-right-colored.svg" alt="More arrow" className="more-arrow active" />
                                  </div>
                                  {/* <p>Manage financial losses arising out of unforeseen damage to your business property</p> */}
                                </a>
                              </div>
                              <div className="dropdown-nav-option claim-content-child">
                                <a href="JavaScript:;" className="dropdown-item" data-child-dropdown-item="Marine">
                                  <div className="d-flex property-wrapper-head">
                                    <img src="../assets/images/marine-mob.svg" className="mr-2" /> Marine
                                    <img src="../assets/images/arrow-right.svg" alt="More arrow" className="more-arrow" />
                                    <img src="../assets/images/arrow-right-colored.svg" alt="More arrow" className="more-arrow active" />
                                  </div>
                                  {/* <p>Mitigate financial risk caused due to goods and asset damages in transit.</p> */}
                                </a>
                              </div>
                              <div className="dropdown-nav-option claim-content-child">
                                <a href="JavaScript:;" className="dropdown-item" data-child-dropdown-item="Liability">
                                  <div className="d-flex property-wrapper-head">
                                    <img src="../assets/images/liability-mob.svg" className="mr-2" /> Liability
                                    <img src="../assets/images/arrow-right.svg" alt="More arrow" className="more-arrow" />
                                    <img src="../assets/images/arrow-right-colored.svg" alt="More arrow" className="more-arrow active" />
                                  </div>
                                  {/* <p>Manage financial liabilities arising out of injury or damage caused by the business
                                                          operations
                                                          </p> */}
                                </a>
                              </div>
                              <div className="dropdown-nav-option claim-content-child">
                                <a href="JavaScript:;" className="dropdown-item" data-child-dropdown-item="Engineering">
                                  <div className="d-flex property-wrapper-head">
                                    <img src="../assets/images/engineering-mob.svg" className="mr-2" /> Engineering
                                    <img src="../assets/images/arrow-right.svg" alt="More arrow" className="more-arrow" />
                                    <img src="../assets/images/arrow-right-colored.svg" alt="More arrow" className="more-arrow active" />
                                  </div>
                                  {/* <p>Financial Protection for your business against engineering and construction risks.</p> */}
                                </a>
                              </div>
                              <div className="dropdown-nav-option claim-content-child">
                                <a href="JavaScript:;" className="dropdown-item" data-child-dropdown-item="Health">
                                  <div className="d-flex property-wrapper-head">
                                    <img src="../assets/images/health-mob.svg" className="mr-2" /> Health
                                    <img src="../assets/images/arrow-right.svg" alt="More arrow" className="more-arrow" />
                                    <img src="../assets/images/arrow-right-colored.svg" alt="More arrow" className="more-arrow active" />
                                  </div>
                                  {/* <p>Built for optimum protection of your employee's well-being.</p> */}
                                </a>
                              </div>
                            </div>
                            <div className="dropdown-nav child-dropdown" data-child-dropdown="Property">
                              <div className="dropdown-nav-option claim-content-child">
                                <a href="#" className="dropdown-item" data-child-dropdown-item="Property">
                                  <div className="d-flex property-wrapper-head">
                                    <img src="../assets/images/loss-prevention.svg" className="mr-2" />Loss Prevention Exercise
                                  </div>
                                  {/* <p>Manage financial losses arising out of unforeseen damage to your business property</p> */}
                                </a>
                              </div>
                              <div className="dropdown-nav-option claim-content-child">
                                <a href="#" className="dropdown-item" data-child-dropdown-item="Marine">
                                  <div className="d-flex property-wrapper-head">
                                    <img src="../assets/images/compliance.svg" className="mr-2" /> Comprehensive Risk Assessment
                                  </div>
                                  {/* <p>Manage financial losses arising out of unforeseen damage to your business property</p> */}
                                </a>
                              </div>
                              <div className="dropdown-nav-option claim-content-child">
                                <a href="#" className="dropdown-item" data-child-dropdown-item="Liability">
                                  <div className="d-flex property-wrapper-head">
                                    <img src="../assets/images/flash.svg" className="mr-2" />Electrical Risk Assessment
                                  </div>
                                  {/* <p>Manage financial losses arising out of unforeseen damage to your business property</p> */}
                                </a>
                              </div>
                              <div className="dropdown-nav-option claim-content-child">
                                <a href="#" className="dropdown-item" data-child-dropdown-item="Health">
                                  <div className="d-flex property-wrapper-head">
                                    <img src="../assets/images/hydrant.svg" className="mr-2" /> FIRE HYDRANT IoT
                                  </div>
                                  {/* <p>Manage financial losses arising out of unforeseen damage to your business property</p> */}
                                </a>
                              </div>
                              <div className="dropdown-nav-option claim-content-child">
                                <a href="#" className="dropdown-item" data-child-dropdown-item="Engineering">
                                  <div className="d-flex property-wrapper-head">
                                    <img src="../assets/images/humidity.svg" className="mr-2" /> Temperature &amp; Humidity IoT
                                  </div>
                                  {/* <p>Manage financial losses arising out of unforeseen damage to your business property</p> */}
                                </a>
                              </div>
                              <div className="dropdown-nav-option claim-content-child">
                                <a href="#" className="dropdown-item" data-child-dropdown-item="Engineering">
                                  <div className="d-flex property-wrapper-head">
                                    <img src="../assets/images/renewable-energy.svg" className="mr-2" /> Solutions in renewable energy
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
                            <img src="../assets/images/icons/arrow-up.svg" className="img-fluid plus" alt="Arrow Up" />
                            <img src="../assets/images/icons/arrow-down.svg" className="img-fluid minus" alt="Arrow Down" />
                          </a>
                        </div>
                        <div id="collapseSeven" className="collapse" data-parent="#homemenu-accordion">
                          <div className="home-accordion-body">
                            <div className="dropdown-nav main-dropdown">
                              <div className="dropdown-nav-option claim-content-child">
                                <a href="JavaScript:;" className="dropdown-item" data-child-dropdown-item="Property">
                                  <div className="d-flex property-wrapper-head">
                                    <img src="../assets/images/health-mob.svg" className="mr-2" /> Health
                                  </div>
                                  {/* <p>For corporate employees to Initiate health claims processing</p> */}
                                </a>
                              </div>
                              <div className="dropdown-nav-option claim-content-child">
                                <a href="JavaScript:;" className="dropdown-item" data-child-dropdown-item="Marine">
                                  <div className="d-flex property-wrapper-head">
                                    <img src="../assets/images/non-health-mob.svg" className="mr-2" /> Non-health
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
                            <img src="../assets/images/icons/arrow-up.svg" className="img-fluid plus" alt="Arrow Up" />
                            <img src="../assets/images/icons/arrow-down.svg" className="img-fluid minus" alt="Arrow Down" />
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
                  <a href="/Portal/ContactUs" className="btn contact-btn-mob">Contact Us</a>
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
        <div>
          <div className="container-fluid header-container">
            <div className="container">
              <div className="row pt-3">
                <div className="col-sm-12">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"> <img src="../assets/images/home-icon.jpg" className="Homeicon mr-2" alt="home-icon" /></li>
                      <li className="breadcrumb-item"><i className="fa-solid fa-house mr-2" style={{color: 'rgb(212, 197, 197)', display: 'none'}} /><a href="#" className="headerContent disabled" style={{color: 'black'}}>Risk Management Services</a></li>
                      <li className="breadcrumb-item"><a href="#" className="headerContent disabled" style={{color: 'black'}}>Health</a></li>
                      <li className="breadcrumb-item">
                        <a href="#" className="headerContent disabled" style={{color: '#ce6625'}}>Health Insurance</a>
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <img src="../assets/images/Health-VAS.jpg" alt="Health-banner" className="NewProject mainbanner  d-none d-sm-block" />
                  <img src="../assets/images/Heath-VAS-mobile.png" alt="Health-banner" className="mainbanner d-block d-sm-none w-100" />
                </div>
              </div>
              <h1 style={{fontWeight: 'bold'}}>Health</h1>
              <p className="pb-4">
                At ICICI Lombard, we are at the forefront of implementing proactive and preventive healthcare solutions. Recognizing that nearly 60% of in-patient department (IPD) admissions could be prevented with timely interventions and regular healthcare, we are committed to partnering with you in health, not just during illness. Our approach to health extends beyond the traditional, with a comprehensive health solution that shall caters to preventive, proactive, and primary healthcare.
              </p>
            </div>
          </div>
          {/* start */}
          <section id="page-wrap" className="industry-section-main">
            <div className="industry-section-options">
              <div className="dropdown industry-list-dropdown">
                <button type="button" className="btn dropdown-toggle" data-toggle="dropdown">
                  HEALTH RISK SOLUTIONS
                  <img src="../assets/images/icons/white-down-arrow.svg" className="img-fluid" alt="Dropdown arrow" />
                </button>
                <div id="top" className="dropdown-menu pl-3 static-link-menu property-dropdown">
                  <a className="dropdown-item mb-2 active ICICIMenu" href="#one">Pioneering Digital Platform</a>
                  <a className="dropdown-item ICICIMenu mb-2" href="#two">Outpatient Cover</a>
                  <a className="dropdown-item ICICIMenu mb-2" href="#three">Wellness Services</a>
                  <a className="dropdown-item ICICIMenu mb-2" href="#four">Health Advisory Services</a>
                  <a className="dropdown-item ICICIMenu mb-2" href="#five">Unique Features of ILTakeCare</a>
                  <img src="../assets/images/backdrop-arrow.svg" className="img-fluid backdrop-arrow" alt="back" />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-5 industry-info-img">
                  <img src="../assets/images/illustartion/Digital Platform.png" className="pharma-img" alt="Industry-list" />
                </div>
                <div className="col-lg-7 industry-info-main">
                  <div id="pharma" className="industry-info">
                    <div className="industry-info-head" id="data1">
                      {/*<span class="sub-heading" style="font-weight:bold; ">Risk Management services</span>*/}
                      <h2 id="one">Pioneering Digital Platform</h2>
                      {/*<h5 class="mt-4" style="font-size: 16px; font-weight:bold; color: #ec6625;">OVERVIEW</h5>*/}
                      <p className="mt-3" style={{color: 'black'}}>
                        ICICI Lombard is an industry leader in digital health innovations, offering cutting-edge health solutions through the ILTakeCare (ILTC) app. Our platform has transformed the way health services are delivered, making us the first to introduce a fully digital and cashless Outpatient Department (OPD) and Wellness Program.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid p-t-0f" style={{backgroundColor: '#f4f4f4'}}>
              <div className="row">
                <div className="col-lg-5 industry-info-img text-center">
                  <img src="../assets/images/illustartion/Outpatient Cover.png" className="pharma-img m-t-0f" alt="Industry-list" />
                </div>
                <div className="col-lg-7 industry-info-main">
                  <div id="pharma" className="industry-info">
                    <div className="industry-info-head m-t-0f p-t-0f" id="data2">
                      {/*<span class="sub-heading" style="font-weight:bold; ">Risk Management services</span>*/}
                      <h2 className="p-t-20 m-t-10 mt-xs-0 pt-xs-0" id="two">Outpatient Cover</h2>
                      {/*<h5 class="mt-4" style="font-size: 16px; font-weight:bold; color: #ec6625;">OVERVIEW</h5>*/}
                      <p className="mt-3" style={{color: 'black'}}>
                        We provide an all-encompassing cashless OPD solution available on our ILTC platform. The solution covers a range of services, from consultations—virtual, telephonic, or in-person—to pharmacy, diagnostics, minor procedures, mental wellness, and emergency ambulance services. This complete primary healthcare solution is designed with the needs of corporates in mind, making healthcare accessible and convenient.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-5 industry-info-img">
                  <img src="../assets/images/illustartion/Wellness Services.png" className="img-fluid ImgWidth m-t-0f" alt="Industry-list" />
                </div>
                <div className="col-lg-7 industry-info-main">
                  <div id="pharma" className="industry-info">
                    <div className="industry-info-head p-t-20 mt-xs-0 pt-xs-0" style={{marginTop: '20px'}} id="data3">
                      {/*<span class="sub-heading" style="font-weight:bold; ">Risk Management services</span>*/}
                      <h2 id="three">Wellness Services</h2>
                      {/*<h5 class="mt-4" style="font-size: 16px; font-weight:bold; color: #ec6625;">OVERVIEW</h5>*/}
                      <p className="mt-3" style={{color: 'black'}}>
                        Our platform offers comprehensive wellness services, including health check-ups, health webinars, health camps, wellness calendars, disease management programs, maternity and elderly care programs, and health audits. Designed to improve lifestyle and enhance employee engagement, these services are available digitally and offline for your convenience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid p-t-20f" style={{backgroundColor: '#f4f4f4'}}>
              <div className="row">
                <div className="col-lg-5 industry-info-img">
                  <img src="../assets/images/illustartion/Advisory Services.png" className="img-fluid ImgWidth m-t-0f " alt="Industry-list" />
                </div>
                <div className="col-lg-7 industry-info-main">
                  <div id="pharma" className="industry-info">
                    <div className="industry-info-head" style={{marginTop: '20px'}} id="data4">
                      {/*<span class="sub-heading" style="font-weight:bold; ">Risk Management services</span>*/}
                      <h2 id="four">Health Advisory Services</h2>
                      {/*<h5 class="mt-4" style="font-size: 16px; font-weight:bold; color: #ec6625;">OVERVIEW</h5>*/}
                      <p className="mt-3" style={{color: 'black'}}>
                        We offer a suite of health advisory services on the ILTakeCare app. Users can access health risk assessments, diet and exercise trackers, health parameter tracking and trends, and sleep, meditation, and hydration reminders. In addition, the platform offers a feature to upload health records up to 1GB, and provides informative health blogs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-5 industry-info-img">
                  <img src="../assets/images/illustartion/Features ILTC.png" className="img-fluid ImgWidth p-t-0f" alt="Industry-list" />
                </div>
                <div className="col-lg-7 industry-info-main">
                  <div id="pharma" className="industry-info">
                    <div className="industry-info-head" style={{marginTop: '20px'}} id="data5">
                      {/*<span class="sub-heading" style="font-weight:bold; ">Risk Management services</span>*/}
                      <h2 id="five" className="p-t-20f">Unique Features of ILTakeCare</h2>
                      {/*<h5 class="mt-4" style="font-size: 16px; font-weight:bold; color: #ec6625;">OVERVIEW</h5>*/}
                      <p className="mt-3" style={{color: 'black'}}>
                        The ILTakeCare app has gained significant popularity, boasting over 5 million downloads and approximately 50,000 active users per month. This robust user engagement is a testament to the high-value features that the app provides. <br /><br />
                        Unique to the app is the innovative self-health assessment feature, which includes facial scan technology that can measure blood pressure, heart rate, cardiac variance, and SpO2 levels. The platform provides seamless teleconsultations with medical practitioners and specialists, and even offers access to mental wellness experts. <br /><br />
                        The facility for cashless OPD services and the efficient claim settlement process further enhance user experience. By encapsulating a wide range of state-of-the-art health services and solutions, the ILTakeCare platform revolutionizes corporate health management and serves as a comprehensive digital health solution.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="container-fluid pt-xs-0">
            <div className="row orange-g-bg top-bdr-radius need-help-section" style={{marginRight: '-16px', marginLeft: '-16px', paddingBottom: '46px'}}>
              <div className="col-md-2 col-3 text-right"><img src="../assets/images/news-img.png" /></div>
              <div className="col-md-7 col-9 text-white help-text pt-3 pt-xs-0">
                Want to know more about our
                Products &amp; Risk Management Services?
              </div>
              <div className="col-md-2 col-12 text-white">
                <a href="/cprtp/Portal/ContactUs">
                  <input type="button" className="btn btn-primary  btn-contact m-l-10 font-18" style={{marginTop: '9px'}} defaultValue="Contact Us" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix" style={{marginTop: '36px'}}>
          <div id="content" />
        </div>
        <div id="footer">
          <section className="property-footer-wrapper">
            <div className="container property-img-wrapper">
              <img src="../assets/images/property-footer.jpg" className="img-fluid mobile-view" alt="property-footer" />
              <img src="../assets/images/property-footer-mobile.png" className="w-100 desktop-view" alt="property-footer" />
              <div className="property-content-wrapper text-center">
                <h2>Leading the way to a secured future</h2>
              </div>
            </div>
          </section>
          {/* footer starts */}
          <footer>
            <div className="footer-main">
              <div className="container footer-content">
                <div className="d-flex flex-row footer-content-wrapper">
                  <div className="footer-wrapper">
                    <div className="footer-left-block">
                      <h5>ICICI Lombard General Insurance Company Limited,</h5>
                      <p>ICICI Lombard House, 414, Veer Savarkar Marg, Near Siddhi Vinayak Temple, Prabhadevi, Mumbai - 400025.</p>
                      <p>Reg. No.115</p>
                      <p className="email-para">
                        Email: <span>cpcontactus@icicilombard.com</span>
                      </p>
                      <ul className="social-links">
                        <li style={{marginRight: '6px'}}><a title="icicilombard facebook" className="fb-ico" href="https://www.facebook.com/ICICILombard" target="_blank" /></li>
                        <li><a title="icicilombard linkedin" className="link-ico" href="https://www.linkedin.com/company/icici-lombard?trk=tyah" target="_blank" /></li>
                        <li><a title="icicilombard twitter" className="twt-ico" href="https://twitter.com/ICICILombard" target="_blank" /></li>
                        <li><a title="icicilombard youtube" className="yt-ico" href="https://www.youtube.com/user/ICICILombardLtd" target="_blank" /></li>
                        <li><a title="icicilombard insta" className="inst-ico" href="https://www.instagram.com/icicilombardofficial" target="_blank" /></li>
                      </ul>
                    </div>
                  </div>
                  <div className="footer-links product-solution">
                    <h5>Products</h5>
                    <ul>
                      <li><a href="/Portal/Standard_Fire_and_Special_perils_policy">Property</a></li>
                      <li><a href="/Portal/Marine_Inland_Open_Declaration_Policy">Marine</a></li>
                      <li><a href="/Portal/Comprehensive_General_Liability">Liability</a></li>
                      <li><a href="/Portal/Contractors_All_Risk">Engineering</a></li>
                      <li><a href="/Portal/Group_Health">Group Health </a></li>
                      <li><a href="https://www.icicilombard.com/" target="_blank">Retail Products</a></li>
                      <li><a href="https://sme.icicilombard.com/" target="_blank">SME Products</a></li>
                      <li><a href="../assets/pdf/BASEPRODUCTS.pdf" target="_blank">Base Products</a></li>
                    </ul>
                  </div>
                  <div className="footer-links explore">
                    <h5>Explore</h5>
                    <ul>
                      <li><a href="/Portal/Home">Website Home</a></li>
                      <li><a href="/Portal/Property_Loss_Prevention_exercise">Property services</a></li>
                      <li><a href="/Portal/Vas_Solution">Marine Services</a></li>
                      <li><a href="/Portal/risk_Health">Group Health Services</a></li>
                      <li><a href="/Portal/risk_Engineering">Engineering services</a></li>
                      <li><a href="/Portal/risk_liability">Liability Services</a></li>
                    </ul>
                  </div>
                  <div className=" footer-links">
                    <h5>Others</h5>
                    <ul>
                      <li><a href="https://www.icicilombard.com" target="_blank">Company Home</a></li>
                      <li><a href="https://www.icicilombard.com/about-us" target="_blank">About </a></li>
                      <li><a href="https://www.icicilombard.com/docs/default-source/default-document-library/1010586_26102022170853_hospital_empanelment_criteria.pdf" target="_blank">Hospital Empanelment Criteria</a></li>
                      <li><a href="https://www.icicilombard.com/legal/privacy-policy" target="_blank">Privacy Policy</a></li>
                      <li><a href="../assets/pdf/TAT.pdf" target="_blank">Retail Products TAT</a></li>
                    </ul>
                  </div>
                </div>
                <hr />
                <div className="footer-dis-content">
                  <p>
                    ICICI Lombard General Insurance Company Ltd. is one of the leading private sector general insurance company in India offering insurance coverage for motor, health, travel, home, student travel and more. Policies can be purchased and renewed online as well. Immediate issuance of policy copy online.
                  </p>
                  <p>
                    ICICI trade logo displayed above belongs to ICICI Bank and is used by ICICI Lombard GIC Ltd. under license and Lombard logo belongs to ICICI Lombard GIC Ltd. Insurance is the subject matter of the solicitation. The advertisement contains only an indication of cover offered. For more details on risk factors, terms, conditions and exclusions, please read the sales brochure carefully before concluding a sale. CIN: L67200MH2000PLC129408
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </div>
        {/* footer ends */}
        {/* Script End  */}
        {/* Gaurav Script Start */}
        {/* Gaurav Script END */}
      </div>
)

};

export default Risk_Health;
