
import react from "react";
const Risk_liability=()=>{
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
          <div>
            <div className="container-fluid header-container">
              <div className="container">
                <div className="row pt-3">
                  <div className="col-sm-12">
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item"> <img src="../assets/images/home-icon.jpg" className="Homeicon mr-2" alt="home-icon" /></li>
                        <li className="breadcrumb-item"><i className="fa-solid fa-house mr-2" style={{color: 'rgb(212, 197, 197)', display: 'none'}} /><a href="#" className="headerContent disabled" style={{color: 'black'}}>Risk Management Services</a></li>
                        <li className="breadcrumb-item"><a href="#" className="headerContent disabled" style={{color: 'black'}}>Liability</a></li>
                        <li className="breadcrumb-item">
                          <a href="#" className="headerContent disabled" style={{color: '#ce6625'}}>Liability Insurance</a>
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <img src="../assets/images/liability.jpg" alt="liability-banner" className="NewProject mainbanner d-none d-sm-block" />
                    <img src="../assets/images/liability-mobile.png" alt="liability-banner" className="mainbanner d-block d-sm-none w-100" />
                  </div>
                </div>
                <h1 style={{fontWeight: 'bold'}}>Liability</h1>
                {/* <h2 class="mb-3" style="color: black; font-weight:bold;">Why do you need Liability Insurance?</h2> */}
                <p className="pb-4">
                  In the Liability insurance landscape, recognizing the unique complexities of cyber risks in an increasingly digitalized business environment, ICICI Lombard GIC Ltd focuses on specialised Cyber Insurance risk management services. This strategic approach addresses the evolving nature of cyber threats, ensuring our clients receive targeted expertise and support where it's most needed. The growing adoption of technology in organizations has not only led to crucial data being stored and processed on digital platforms but also facilitated the automation of operations, thereby enhancing business efficiency. However, this shift also amplifies cyber risk, exposing sensitive information to potential threats and rendering organizations vulnerable to financial losses, reputational damage, and legal liabilities. As organizations delve deeper into the digital realm, fortifying cybersecurity measures becomes imperative to safeguard operational integrity and protect critical data from unauthorized access or breaches. <br /><br />
                  In light of these challenges, ICICI Lombard GIC Ltd recommends the following cyber services through a collaborative partner network of cybersecurity professionals to strengthen our clients' cyber risk posture and decrease the breach probability and associated costs.
                </p>
              </div>
            </div>
            {/* start */}
            <section className="industry-section-main">
              <div className="industry-section-options">
                <div className="dropdown industry-list-dropdown">
                  <button type="button" className="btn dropdown-toggle" data-toggle="dropdown">
                    Liability Risk Management Services
                    <img src="../assets/images/icons/white-down-arrow.svg" className="img-fluid" alt="Dropdown arrow" />
                  </button>
                  <div className="dropdown-menu pl-3" style={{marginLeft: '12%', width: '310px'}}>
                    <a className="dropdown-item mt-4 mb-2 active ICICIMenu" href="#data1">Consulting Session</a>
                    <a className="dropdown-item ICICIMenu mb-2" href="#data2">Penetration Testing (Pen Test)</a>
                    <a className="dropdown-item ICICIMenu mb-2" href="#data3">External Attack Surface Assessment</a>
                    <a className="dropdown-item ICICIMenu mb-2" href="#data4">Gap Assessment (ISO 27001:2013/2022)</a>
                    <a className="dropdown-item ICICIMenu mb-2" href="#data5">Cloud Configuration Review</a>
                    <a className="dropdown-item ICICIMenu mb-2" href="#data6">Breach Attack Simulation</a>
                    <a className="dropdown-item ICICIMenu mb-2" href="#data7">Red Teaming</a>
                    <a className="dropdown-item ICICIMenu mb-2" href="#data8">Framework Implementation</a>
                    <a className="dropdown-item ICICIMenu mb-2" href="#data9">Phishing Simulation</a>
                    <a className="dropdown-item ICICIMenu mb-2" href="#data10">Awareness Campaigns</a>
                    <a className="dropdown-item ICICIMenu mb-2" href="#data11">CXO's Session</a>
                    <a className="dropdown-item ICICIMenu mb-2" href="#data12">Monthly Threat Intelligence Bulletin</a>
                    <a className="dropdown-item ICICIMenu mb-2" href="#data13">Security Score Card</a>
                    <a className="dropdown-item mt-4 mb-2 active ICICIMenu" href="#data14">Vulnerability Assessment and <br />Penetration Testing (VAPT)</a>
                    <img src="../assets/images/backdrop-arrow.svg" className="img-fluid backdrop-arrow" alt="back" />
                  </div>
                </div>
              </div>
              {/* Start Section 1*/}
              <div className="container">
                <div className="row">
                  <div className="col-lg-5 industry-info-img">
                    <img src="../assets/images/illustartion/consulting-session.png" className="img-fluid ImgWidth" alt="Industry-list" />
                  </div>
                  <div className="col-lg-7 industry-info-main">
                    <div id="pharma" className="industry-info">
                      <div className="industry-info-head" id="data1">
                        <h2 className="mt-5 mt-xs-0">Consulting Session</h2>
                        <p className="mt-3" style={{color: 'black'}}>
                          Businesses face specific risks with the implementation of the Digital Personal Data Protection Act, 2023. It is recommended to develop a roadmap for DPDP compliance and consider adjusting processes where necessary to ensure compliance with these new mandates.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Section 1*/}
              {/* Start Section 2*/}
              <div className="container-fluid" style={{backgroundColor: '#f4f4f4'}}>
                <div className="row">
                  <div className="col-lg-5">
                    <img src="../assets/images/illustartion/Agent Less Patching.png" className="img-fluid ImgWidth" alt="Industry-list" />
                  </div>
                  <div className="col-lg-7 industry-info-main">
                    <div id="pharma" className="industry-info">
                      <div className="industry-info-head" id="data2">
                        {/*<span class="sub-heading" style="font-weight:bold; ">Risk Management services</span>*/}
                        <h2>Penetration Testing (Pen Test)</h2>
                        {/*<h5 class="mt-4" style="font-size: 16px; font-weight:bold; color: #ec6625;">OVERVIEW</h5>*/}
                        <p className="mt-3" style={{color: 'black'}}>
                          Penetration testing is a simulated, ethical hacking attempt to identify weaknesses in your systems, networks, or applications. Security experts attempt to break into your infrastructure just like real attackers would-without causing any harm. The aim is to uncover vulnerabilities before they can be exploited by malicious actors, allowing you to address security flaws proactively.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Section 2*/}
              {/* Start Section 3*/}
              <div className="container">
                <div className="row">
                  <div className="col-lg-5 industry-info-img">
                    <img src="../assets/images/illustartion/attack-simulation.png" className="img-fluid ImgWidth" alt="Industry-list" />
                  </div>
                  <div className="col-lg-7 industry-info-main">
                    <div id="pharma" className="industry-info">
                      <div className="industry-info-head" id="data3">
                        <h2 className="mt-5 mt-xs-0">External Attack Surface Assessment</h2>
                        <p className="mt-3" style={{color: 'black'}}>
                          It involves a comprehensive assessment of all external-facing assets-such as websites, servers, and email systems-that could be exposed to the internet. By identifying potential entry points for attackers, an external attack surface assessment helps organizations better understand where they may be vulnerable and provides insights into how they can strengthen their external defences.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Section 3*/}
              {/* Start Section 4*/}
              <div className="container-fluid" style={{backgroundColor: '#f4f4f4'}}>
                <div className="row">
                  <div className="col-lg-5">
                    <img src="../assets/images/illustartion/gap-assessment.png" className="img-fluid ImgWidth" alt="Industry-list" />
                  </div>
                  <div className="col-lg-7 industry-info-main">
                    <div id="pharma" className="industry-info">
                      <div className="industry-info-head" id="data4">
                        {/*<span class="sub-heading" style="font-weight:bold; ">Risk Management services</span>*/}
                        <h2>Gap Assessment (ISO 27001:2013/2022)</h2>
                        {/*<h5 class="mt-4" style="font-size: 16px; font-weight:bold; color: #ec6625;">OVERVIEW</h5>*/}
                        <p className="mt-3" style={{color: 'black'}}>
                          A gap assessment helps evaluate the maturity of your organization’s information security management system (ISMS) in line with ISO 27001 standards (2013/2022). This typically involves a questionnaire-based evaluation that helps identify gaps between your current practices and ISO 27001 requirements. By conducting a gap assessment, organizations can take the necessary steps toward achieving certification or improving their security posture.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Section 4*/}
              {/* Start Section 5*/}
              <div className="container">
                <div className="row">
                  <div className="col-lg-5 industry-info-img">
                    <img src="../assets/images/illustartion/cloud-configuration-review.png" className="img-fluid ImgWidth" alt="Industry-list" />
                  </div>
                  <div className="col-lg-7 industry-info-main">
                    <div id="pharma" className="industry-info">
                      <div className="industry-info-head" id="data5">
                        <h2 className="mt-5 mt-xs-0">Cloud Configuration Review</h2>
                        <p className="mt-3" style={{color: 'black'}}>
                          Cloud environments offer flexibility and scalability but also introduce unique security challenges. A cloud configuration review helps ensure that your cloud infrastructure is securely configured and compliant with relevant policies and regulations. By identifying misconfigurations or security weaknesses, this review can reduce the risk of unauthorized access or data breaches.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Section 5*/}
              {/* Start Section 6*/}
              <div className="container-fluid" style={{backgroundColor: '#f4f4f4'}}>
                <div className="row">
                  <div className="col-lg-5">
                    <img src="../assets/images/illustartion/breach-attack-simulation.png" className="img-fluid ImgWidth" alt="Industry-list" />
                  </div>
                  <div className="col-lg-7 industry-info-main">
                    <div id="pharma" className="industry-info">
                      <div className="industry-info-head" id="data6">
                        {/*<span class="sub-heading" style="font-weight:bold; ">Risk Management services</span>*/}
                        <h2>Breach Attack Simulation</h2>
                        {/*<h5 class="mt-4" style="font-size: 16px; font-weight:bold; color: #ec6625;">OVERVIEW</h5>*/}
                        <p className="mt-3" style={{color: 'black'}}>
                          A breach attack simulation tests your organization's ability to defend against cyberattacks by running automated simulations of real-world threats. These safe simulations allow security teams to assess how well your security controls perform under attack, highlighting areas for improvement and ensuring a robust defense against evolving cyber threats.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Section 6*/}
              {/* Start Section 7*/}
              <div className="container">
                <div className="row">
                  <div className="col-lg-5 industry-info-img">
                    <img src="../assets/images/illustartion/EDRMDR.png" className="img-fluid ImgWidth" alt="Industry-list" />
                  </div>
                  <div className="col-lg-7 industry-info-main">
                    <div id="pharma" className="industry-info">
                      <div className="industry-info-head" id="data7">
                        <h2 className="mt-5 mt-xs-0">Red Teaming</h2>
                        <p className="mt-3" style={{color: 'black'}}>
                          Red teaming involves a group of security professionals, known as the "red team," acting as adversaries to simulate real-world attacks. Their goal is to test the effectiveness of your organization’s defenses, uncover vulnerabilities, and provide actionable insights into strengthening your security. This approach goes beyond traditional testing by evaluating your organization’s ability to detect, respond, and recover from sophisticated threats.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Section 7*/}
              {/* Start Section 8*/}
              <div className="container-fluid" style={{backgroundColor: '#f4f4f4'}}>
                <div className="row">
                  <div className="col-lg-5">
                    <img src="../assets/images/illustartion/framework-implementation.png" className="img-fluid ImgWidth" alt="Industry-list" />
                  </div>
                  <div className="col-lg-7 industry-info-main">
                    <div id="pharma" className="industry-info">
                      <div className="industry-info-head" id="data8">
                        {/*<span class="sub-heading" style="font-weight:bold; ">Risk Management services</span>*/}
                        <h2>Framework Implementation</h2>
                        {/*<h5 class="mt-4" style="font-size: 16px; font-weight:bold; color: #ec6625;">OVERVIEW</h5>*/}
                        <p className="mt-3" style={{color: 'black'}}>
                          Implementing a recognized cybersecurity framework is a systematic approach to improving your organization’s information security. Frameworks such as NIST, ISO 27001, or CIS offer proven guidelines for managing risk, ensuring compliance, and fortifying defenses against cyber threats. Adopting these frameworks helps establish a robust security posture and demonstrates commitment to industry standards and regulatory requirements.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Section 8*/}
              <div className="container">
                <div className="row">
                  <div className="col-lg-5 industry-info-img">
                    <img src="../assets/images/illustartion/Phishing.png" className="img-fluid ImgWidth" alt="Industry-list" />
                  </div>
                  <div className="col-lg-7 industry-info-main">
                    <div id="pharma" className="industry-info">
                      <div className="industry-info-head" id="data9">
                        <h2 className="mt-5 mt-xs-0">Phishing Simulation</h2>
                        <p className="mt-3" style={{color: 'black'}}>
                          Experience cutting-edge phishing simulation tests to fortify your organization's defences against cyber threats. You can enable replication of real-world phishing attacks, educating your employees on identifying and handling potential risks. Through engaging and interactive scenarios, you can raise awareness and equip your team with the necessary skills to detect and thwart phishing attempts. By proactively assessing phishing vulnerabilities, you can enhance your company's security posture and minimize the risk of falling victim to malicious actors.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-fluid" style={{backgroundColor: '#f4f4f4'}}>
                <div className="row">
                  <div className="col-lg-5">
                    <img src="../assets/images/illustartion/Awareness Campaigns.png" className="img-fluid ImgWidth" alt="Industry-list" />
                  </div>
                  <div className="col-lg-7 industry-info-main">
                    <div id="pharma" className="industry-info">
                      <div className="industry-info-head" id="data10">
                        {/*<span class="sub-heading" style="font-weight:bold; ">Risk Management services</span>*/}
                        <h2>Awareness Campaigns</h2>
                        {/*<h5 class="mt-4" style="font-size: 16px; font-weight:bold; color: #ec6625;">OVERVIEW</h5>*/}
                        <p className="mt-3" style={{color: 'black'}}>
                          With Cyber Awareness Campaigns, go beyond just educating organizations about cybersecurity. The campaigns are meticulously designed to empower your team with essential best practices, insights into global incident trends, and a comprehensive understanding of potential risks. Interactive designs help you captivate and engage your employees, fostering a cyber-aware culture within your organization.  Customized campaigns that perfectly align with your unique needs and requirements can be delivered with the right partner.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div class="container">
        <div class="row">
            <div class="col-lg-5 industry-info-img">
                <img src="../assets/images/illustartion/Gamification.png" class="img-fluid ImgWidth" alt="Industry-list">
            </div>
            <div class="col-lg-7 industry-info-main">
                <div id="pharma" class="industry-info">
                    <div class="industry-info-head mt-xs-0" style="margin-top: 100px;" id="data3">

                        <h2>Gamification of Emailers</h2>

                        <p class="mt-3 mb-5" style="color: black;">
                            Revolutionize cybersecurity training with the Gamification of Emailers service. The mundane security messages are transformed into interactive and engaging experiences for the employees, which is more like a fun challenge. Through gamified emailers, your employees will learn to spot potential threats while enjoying the process. This unique approach nurtures a security-conscious culture, fostering a proactive attitude towards cyber resilience. Equip your team with the skills they need in a more dynamic and enjoyable manner, while ensuring your organization safety from cyber threats.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
              <div className="container">
                <div className="row">
                  <div className="col-lg-5">
                    <img src="../assets/images/illustartion/CXO Session.png" className="img-fluid ImgWidth" alt="Industry-list" />
                  </div>
                  <div className="col-lg-7 industry-info-main">
                    <div id="pharma" className="industry-info">
                      <div className="industry-info-head" id="data11">
                        {/*<span class="sub-heading" style="font-weight:bold; ">Risk Management services</span>*/}
                        <h2>CXO's Session</h2>
                        {/*<h5 class="mt-4" style="font-size: 16px;  font-weight:bold; color: #ec6625;">OVERVIEW</h5>*/}
                        <p className="mt-3" style={{color: 'black'}}>
                          CXO’s Session service provides immersive training sessions, personalized coaching, and interactive discussions to empower your CXOs with cybersecurity knowledge that aligns with your business objectives. The subject matter experts offer strategic guidance and in-depth insights into the ever-evolving threat landscape, translating technical jargon into practical language. Regular cybersecurity forums facilitate peer-to-peer learning and benchmarking against industry standards. With CXO-focused approach, we ensure a cyber-aware leadership team that drives your organization’s success securely into the future.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-fluid" style={{backgroundColor: '#f4f4f4'}}>
                <div className="row">
                  <div className="col-lg-5">
                    <img src="../assets/images/illustartion/Weekly Threat Bulletin.png" className="img-fluid ImgWidth" alt="Industry-list" />
                  </div>
                  <div className="col-lg-7 industry-info-main">
                    <div id="pharma" className="industry-info">
                      <div className="industry-info-head" id="data12">
                        {/*<span class="sub-heading" style="font-weight:bold; ">Risk Management services</span>*/}
                        <h2 className="pt-5 pt-xs-0">Monthly Threat Intelligence Bulletin</h2>
                        {/*<h5 class="mt-4" style="font-size: 16px; font-weight:bold; color: #ec6625;">OVERVIEW</h5>*/}
                        <p className="mt-3" style={{color: 'black'}}>
                          Stay ahead of cyber threats with our Monthly Threat Intelligence Bulletin. We meticulously curate this comprehensive bulletin, providing timely insights on emerging threats, vulnerabilities, and attack trends. Delivered directly to your inbox, it offers proactive advantage by promptly identifying potential risks. With continuous updates and ongoing support, you can confidently adapt your defence strategies to combat the most sophisticated threats. We enable you to make informed decisions and protect your organization from emerging threats with our Monthly Threat Intelligence Bulletin.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div class="container-fluid" style="background-color: #f4f4f4;">
        <div class="row">
            <div class="col-lg-5 industry-info-img">
                <img src="../assets/images/illustartion/Email Security.png" class="img-fluid ImgWidth" alt="Industry-list">
            </div>
            <div class="col-lg-7 industry-info-main">
                <div id="pharma" class="industry-info">
                    <div class="industry-info-head mt-xs-0" style="margin-top: 50px;" id="data6">

                        <h2>Email Security</h2>

                        <p class="mt-3" style="color: black;">
                            Safeguard your organization's communication channels with the Email Security solution which is a robust measure to protect users against phishing, malware, and other email-borne threats. The advanced email filtering and authentication technologies will prevent malicious emails from reaching your users' inboxes. Additionally, encryption protocols can be implemented to ensure the confidentiality of sensitive data in transit. With real-time monitoring and threat intelligence, email security solutions provide proactive defence, detecting and blocking suspicious activities promptly. You can protect your organization's reputation and sensitive information with the comprehensive Email Security measures, ensuring a secure and reliable email environment.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
              {/* <div class="container">
        <div class="row">
            <div class="col-lg-5 industry-info-img">
                <img src="../assets/images/illustartion/Agent Less Patching.png" class="img-fluid ImgWidth" alt="Industry-list">
            </div>
            <div class="col-lg-7 industry-info-main">
                <div id="pharma" class="industry-info">
                    <div class="industry-info-head mt-xs-0" style="margin-top: 100px;" id="data7">

                        <h2>Agent-less Patching</h2>

                        <p class="mt-3" style="color: black;">
                            Agent-less patching platform for companies and MSMEs who want a rapid solution to distribute critical security updates and vulnerability fixes without causing system downtime. The patching platform not only assists with patch deployment, but it also enables your system administrator in understanding the patches, adjustments, and impact of patches on the system. Before applying the patch, the software generates a warning if the system requires downtime or a reboot. You can experience a hassle-free patching process with the platform offering enhanced security for you organization.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
              {/* <div class="container-fluid" style="background-color: #f4f4f4;">
        <div class="row">
            <div class="col-lg-5 industry-info-img">
                <img src="../assets/images/illustartion/EDRMDR.png" class="img-fluid ImgWidth" alt="Industry-list">
            </div>
            <div class="col-lg-7 industry-info-main">
                <div id="pharma" class="industry-info">
                    <div class="industry-info-head mt-xs-0" style="margin-top: 100px;" id="data8">

                        <h2>EDR/MDR Services</h2>

                        <p class="mt-3" style="color: black;">
                            Elevate your organization's cybersecurity capabilities with the Endpoint Detection and Response (EDR) and Managed Detection and Response (MDR) services. These advanced solutions provide continuous monitoring, rapid threat detection, and effective incident response, safeguarding your digital assets in real-time. With EDR, proactively detect and respond to threats at the endpoint level, while the MDR service offers 24/7 monitoring and expert support. These shall enable you to strengthen defences against even the most sophisticated cyber-attacks with our EDR/MDR Services, ensuring a resilient and secure digital environment.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
              {/* <div class="container">
        <div class="row">
            <div class="col-lg-5 industry-info-img">
                <img src="../assets/images/illustartion/All-in-one Operating System.png" class="img-fluid ImgWidth" alt="Industry-list">
            </div>
            <div class="col-lg-7 industry-info-main">
                <div id="pharma" class="industry-info">
                    <div class="industry-info-head mt-xs-0" style="margin-top: 100px;" id="data9">

                        <h2>All-in-one Operating System</h2>

                        <p class="mt-3" style="color: black;">
                            All-in-One Operating System is a true game-changing platform that provides a fortified desktop environment to foster secure collaboration and centrally managed cybersecurity resilience. Inbuilt endpoint security serves as a vigilant guard, blocking potential dangers. Effortless IT management provides with a user-friendly interface, leading to significant cost savings in IT infrastructure. It provides in-built end-point security, automated updates and patches along with extensive device reports. Organizations can unlock a secure and prosperous future by embracing the All-in-One Operating System in their IT infrastructure.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
              {/* <div class="container-fluid" style="background-color: #f4f4f4;">
        <div class="row">
            <div class="col-lg-5 industry-info-img">
                <img src="../assets/images/illustartion/Cyber Risk Quantification.png" class="img-fluid ImgWidth" alt="Industry-list">
            </div>
            <div class="col-lg-7 industry-info-main">
                <div id="pharma" class="industry-info">
                    <div class="industry-info-head mt-xs-0" style="margin-top: 100px;" id="data10">

                        <h2>Cyber Risk Quantification & Compliance Dashboard</h2>

                        <p class="mt-3" style="color: black;">
                            Gain a clear understanding of your organization's cyber risk exposure with our Cyber Risk Quantification & Compliance Dashboard. This powerful tool assesses your risk posture, quantifies potential financial impact, and evaluates compliance with industry standards and regulations. Armed with this information, you can make informed decisions to prioritize cybersecurity investments and ensure compliance with relevant laws and regulations. The intuitive dashboard provides a comprehensive view of your cybersecurity performance, and enables data-driven decision-making for the client. This solution enables organizations to stay ahead of threats and ensure a resilient cybersecurity posture.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
              <div className="container">
                <div className="row">
                  <div className="col-lg-5 industry-info-img">
                    <img src="../assets/images/security-score-card-and-vapt.png" className="img-fluid ImgWidth" alt="Industry-list" />
                  </div>
                  <div className="col-lg-7 industry-info-main">
                    <div id="pharma" className="industry-info">
                      <div className="industry-info-head mt-xs-0" style={{marginTop: '100px'}} id="data13">
                        {/*<span class="sub-heading" style="font-weight:bold; ">Risk Management services</span>*/}
                        <h2>Security Score Card</h2>
                        {/*<h5 class="mt-4" style="font-size: 16px; font-weight:bold; color: #ec6625;">OVERVIEW</h5>*/}
                        <p className="mt-3" style={{color: 'black'}}>
                          Track your organization's cybersecurity performance with a dynamic Security Score Card solution. This comprehensive rating provides a clear overview of your security posture, highlighting areas that require attention and improvement. It empowers data-driven decisions, allowing you to focus on strengthening key areas. Identify potential risks and compliance gaps with industry standards and regulations. With actionable insights, you can prioritize cybersecurity investments effectively, ensuring a robust and resilient defence against cyber threats. This Security Score Card solution can be your strategic tool to proactively elevate your cybersecurity posture.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-fluid" style={{backgroundColor: '#f4f4f4'}}>
                <div className="row">
                  <div className="col-lg-5 industry-info-img">
                    <img src="../assets/images/illustartion/VAPT.png" className="img-fluid ImgWidth" alt="Industry-list" />
                  </div>
                  <div className="col-lg-7 industry-info-main">
                    <div id="pharma" className="industry-info">
                      <div className="industry-info-head mt-xs-0" style={{marginTop: '100px'}} id="data14">
                        {/*<span class="sub-heading" style="font-weight:bold; ">Risk Management services</span>*/}
                        <h2>Vulnerability Assessment and Penetration Testing (VAPT)</h2>
                        {/*<h5 class="mt-4" style="font-size: 16px;  font-weight:bold; color: #ec6625;">OVERVIEW</h5>*/}
                        <p className="mt-3" style={{color: 'black'}}>
                          Enhance your organization's cybersecurity defences with the VAPT service. Skilled professionals conduct rigorous assessments, simulating real-world attacks to identify potential vulnerabilities in your digital infrastructure. With detailed insights, we help you fortify your defences and proactively address weak points before malicious actors exploit them. This service goes beyond identifying vulnerabilities; you also get actionable recommendations to mitigate risks effectively. Organizations can be one step ahead of cyber threats, ensuring the security and resilience of your critical assets with our comprehensive VAPT service.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div class="container">
        <div class="row">
            <div class="col-lg-5 industry-info-img">
                <img src="../assets/images/attack-simulation.png" class="img-fluid ImgWidth" alt="Industry-list">
            </div>
            <div class="col-lg-7 industry-info-main">
                <div id="pharma" class="industry-info">
                    <div class="industry-info-head mt-xs-0" style="margin-top: 100px;" id="data13">

                        <h2>Attack Simulation</h2>

                        <p class="mt-3" style="color: black;">
                            This is a SaaS-based Breach and Attack Simulation (BAS) platform that makes it simple to know and optimize your security posture. Simulation challenges your security controls against the full attack kill chain with thousands of simulated cyber-attacks, both common and novel. It shortens test cycles and offers a counter-breach assessment technology that empowers security leaders to validate the effectiveness of their current security controls by taking a proactive approach to their cyber stance, so they can stay one step ahead of attackers.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
            </section>
            {/* end */}
            {/* end section */}
            {/* end-section */}
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
        </div></div>
)

};

export default Risk_liability;