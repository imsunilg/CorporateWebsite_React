
import react from "react";
const Vas_Solution=()=>{
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
                  <a href="/Portal/risk_Engineering"  className="menu-link">
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
        <button onclick="topFunction()" id="myBtn" title="Go to top" />
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
                          <a onclick="StrengthsClick()">
                            <img src="../assets/images/our-strengths.svg" className="mr-2" />Our Strengths
                          </a>
                        </li>
                        <li>
                          <a onclick="HealthClick()">
                            <img src="../assets/images/healthcare.svg" className="mr-2" /> Health
                          </a>
                        </li>
                        <li onclick="MarineClick()">
                          <a className href="#marine">
                            <img src="../assets/images/marine.svg" className="mr-2" /> Marine
                          </a>
                        </li>
                        <li>
                          <a onclick="PropertyClick()">
                            <img src="../assets/images/assets.svg" className="mr-2" /> Property
                          </a>
                        </li>
                        <li>
                          <a onclick="LiabilityClick()">
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
          <style dangerouslySetInnerHTML={{__html: "\n        dropdown-item.active {\n            background: coral;\n        }\n    " }} />
          <div className="container-fluid header-container">
            <div className="container">
              <div className="row pt-3">
                <div className="col-sm-12">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"> <img src="../assets/images/home-icon.jpg" className="Homeicon mr-2" alt="home-icon" /></li>
                      <li className="breadcrumb-item">
                        <i className="fe fe-home" data-toggle="tooltip" title data-original-title="fe fe-home" /><a href="#" className="headerContent disabled">Risk Management</a>
                      </li>
                      <li className="breadcrumb-item"><a href="#" className="headerContent disabled">Marine</a></li>
                      <li className="breadcrumb-item">
                        <a href="#" className="headerContent disabled" style={{color: '#ce6625'}}>Vas Solution</a>
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <img src="../assets/images/Vas-banner.png" alt="property-banner" className="NewProject mainbanner d-none d-sm-block" />
                  <img src="../assets/images/marine-vas-mobile.png" alt="property-banner" className="mainbanner d-block d-sm-none w-100" />
                </div>
              </div>
              <h1>Marine</h1>
              <p>
                The foundation of our global economy rests on intricate supply chains and transportation networks that drive commerce, consumption, and economic growth. The evolving landscape of supply chains, shaped by agile manufacturing practices and concentrated production, has brought about increased complexity and transformed client risk profiles. This has amplified the vulnerability of carriers and cargo due to expanded intermodal linkages. To protect your products, operations, and employees, a dedicated maritime risk consulting team can provide valuable advice, training, and risk management programs. They help you understand and manage the risks associated with your supply chains and transportation networks, ensuring the safety and security of your business.
              </p>
            </div>
          </div>
          <div className="container min-w-100p p-l-0 p-t-40 bg-white">
            <div className="row pb-4">
              <div className="col-md-4">
                <div className="blnk-c">
                  <div className="industry-section-options">
                    <div className="dropdown industry-list-dropdown">
                      <button type="button" className="btn dropdown-toggle" data-toggle="dropdown">
                        Marine Risk Management Services
                        <img src="../assets/images/icons/white-down-arrow.svg" className="img-fluid" alt="Dropdown arrow" />
                      </button>
                      <div className="dropdown-menu pl-3" style={{marginLeft: '19%', width: '353px'}}>
                        <a className="dropdown-item dropdownConc active" style={{textTransform: 'capitalize'}} href="#sim1" id="SimTracking">Marine loss control engineering (MLCE)</a>
                        <a className="dropdown-item mt-2 dropdownConc" style={{textTransform: 'capitalize'}} href="#sim2">Marine warranty surveys</a>
                        <a className="dropdown-item mt-2 dropdownConc" style={{textTransform: 'capitalize'}} href="#sim3">
                          Technical engagements: For loss prevention, <br /> and risk
                          assessments
                        </a>
                        <a className="dropdown-item mt-2 dropdownConc" style={{textTransform: 'capitalize'}} href="#sim4">Transit Telematics</a>
                      </div>
                    </div>
                  </div>
                  <div><img className="pharma-img" src="../assets/images/mlce-marine.png" /></div>
                </div>
              </div>
              <div className="col-md-8 mt-5 mt-xs-0" style={{paddingLeft: '46px'}} id="sim1">
                {/*<h5 class="small-org-txt" style="font-weight:bold; ">Risk Management Services</h5>*/}
                <h2 className="black-txt mb-3 pt-xs-0">Marine loss control engineering (MLCE)</h2>
                <p>
                  Addressing recurrent losses resulting from perils such as wet damage, theft, non-delivery,
                  pilferage, and consignment hijacking requires thorough ground inspections, root cause analyses,
                  and MIS-supported claim assessment reports. A detailed MLCE report shall be issued containing
                  actionable recommendations for implementation by the Insured/Client. To reduce post-inspection
                  claim counts, ILGIC's marine team actively supports on-ground implementation and monitors the
                  resolution of identified deficiencies over time.
                </p>
              </div>
            </div>
          </div>
          <div className="container min-w-100p p-l-0 p-t-20 bg-light-gray top-bdr-radius" id="sim2">
            <div className="row p-b-4p">
              <div className="col-md-4">
                <div className="blnk-c">
                  <div><img className="pharma-img" src="../assets/images/warranty-surveys.png" /></div>
                </div>
              </div>
              <div className="col-md-8 mt-4" style={{paddingLeft: '31px'}}>
                {/*<h5 class="small-org-txt" style="font-weight:bold; ">Risk Management Services</h5>*/}
                <h2 className="black-txt pt-xs-0">Marine warranty surveys</h2>
                <h6 className="bdr-bottom-orange m-b-20 p-b-5 orange-txt m-t-10">
                </h6>
                <p>
                  For high-value consignments, critical cargo, and oversized shipments requiring comprehensive
                  tail-end transit coverage, pre-survey assessments are crucial. Marine risk management team can
                  bring worldwide expertise facilitated by a risk control station-managed team. This includes both
                  local partnerships and a custom virtual monitoring assessment app, complete with standardized
                  operating procedures. This ensures a secure dispatch post-inspection, enhancing convenience for
                  the Insured.
                </p>
              </div>
            </div>
          </div>
          {/* pending check class */}
          <div className="container min-w-100p p-l-0 bg-white top-bdr-radius" id="sim3">
            <div className="row p-b-4p">
              <div className="col-md-4">
                <div className="blnk-c">
                  <div><img className="pharma-img" src="../assets/images/tech-engagements.png" /></div>
                </div>
              </div>
              <div className="col-md-8" style={{paddingLeft: '39px'}}>
                {/*<h5 class="small-org-txt" style="font-weight:bold; ">Risk Management Services</h5>*/}
                <h2 className="black-txt pt-xs-0">Technical engagements: For loss prevention, and risk assessments</h2>
                <h6 className="bdr-bottom-orange m-b-20 p-b-5 orange-txt m-t-10">
                </h6>
                <p>
                  Uncertainty of the risk associated with the transit can be concluded with our marine experts.
                  <br />
                  Risk assessment of cargo including packing, handling, lifting, securing, transit and final
                  delivery methodology shall be discussed with the logistics team. Vessel selection, stowage and
                  securing methods can be jointly discussed with the Client’s logistics team for a safe transit,
                  dispatch and delivery coverage after assessing the risk on desktop with a virtual or F2F
                  engagement and / or a ground visit. <br />
                  The risk assessors shall audit the logistics pattern, cost assigned for a transit to the Insured
                  and if feasible, certain cost effective methods can be suggested for a cost efficiency module
                  considering safety of the cargo and the benefit of the insured.
                </p>
              </div>
            </div>
          </div>
          <div className="container min-w-100p p-l-0 p-t-20 bg-light-gray top-bdr-radius" id="sim4">
            <div className="row p-b-4p">
              <div className="col-md-4">
                <div className="blnk-c">
                  <div><img className="pharma-img" src="../assets/images/transit-telematics.png" /></div>
                </div>
              </div>
              <div className="col-md-8 mt-4" style={{paddingLeft: '31px'}}>
                {/*<h5 class="small-org-txt" style="font-weight:bold; ">Risk Management Services</h5>*/}
                <h2 className="black-txt pt-xs-0">
                  Transit Telematics
                </h2>
                <h6 className="bdr-bottom-orange m-b-20 p-b-5 orange-txt m-t-10">
                </h6>
                <p>
                  A few solutions such as IOT and SAAS based products are there – which can enhance delivery with
                  safe operations and work on cost efficient and a loss preventing method. <br /><br />
                  With 24x7 risk control station – monitoring and mitigation of theft, pilferage prone dispatches,
                  a safe transit delivery, temperature controlled cargo, expensive cargo in transit or liquid bulk
                  cargo in lorry tankers, losses that occurs due to accidents caused by fatigue or unexplained
                  conditions, theft etc. can be ensured.
                </p>
              </div>
            </div>
          </div>
          {/* end section */}
          {/* end section */}
          <div className="need-help-wrapper">
            <div className="need-help-content">
              <img src="../assets/images/help-lady-img.svg" className="img-fluid" alt="assist-graphics" />
              <div className="d-flex flex-column para-content">
                <p>
                  Need Help?
                </p>
                <p>
                  Want to know more about our Products &amp; Risk Management Services?
                </p>
              </div>
              <a href="/Portal/ContactUs" className="contact-us">Contact Us</a>
            </div>
          </div>
          {/* end-section */}
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

export default Vas_Solution;