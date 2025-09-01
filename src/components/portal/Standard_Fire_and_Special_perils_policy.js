import react from "react";
const Standard_Fire_and_Special_perils_policy=()=>{
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
                  <a href="#" onClick={(e) => e.preventDefault()} className="menu-link menu-toggle">
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
                  <a href="#" onClick={(e) => e.preventDefault()} className="menu-link menu-toggle">
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
                  <a href="#" onClick={(e) => e.preventDefault()} className="menu-link menu-toggle">
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
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        Products
                        <span className="dwnArrow" />
                      </a>
                      <ul className="innerlinks menuBox otherdrMenu products-submenu">
                        <li>
                          <a href="#" onClick={(e) => e.preventDefault()}><img src="../assets/images/assets.svg" className="mr-2" /> Property <span className="subarrow" /></a>
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
                          <a href="#" onClick={(e) => e.preventDefault()}><img src="../assets/images/marine.svg" className="mr-2" /> Marine<span className="subarrow" /></a>
                          <ul className="menuBox">
                            <li>
                              <a href="/Portal/Marine_Inland_Open_Declaration_Policy">Marine Open Declaration Policy</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#" onClick={(e) => e.preventDefault()}><img src="../assets/images/professional.svg" className="mr-2" /> Liability<span className="subarrow" /></a>
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
                          <a href="#" onClick={(e) => e.preventDefault()}><img src="../assets/images/healthcare.svg" className="mr-2" /> Health<span className="subarrow" /></a>
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
                          <a href="#" onClick={(e) => e.preventDefault()}><img src="../assets/images/engineering.svg" className="mr-2" /> Engineering<span className="subarrow" /></a>
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
                      <a href="#" onClick={(e) => e.preventDefault()}>
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
                                <a href="#" onClick={(e) => e.preventDefault()} className="dropdown-item" data-child-dropdown-item="Property">
                                  <div className="d-flex property-wrapper-head">
                                    <img src="../assets/images/assets-mob.svg" className="mr-2" /> Property
                                    <img src="../assets/images/arrow-right.svg" alt="More arrow" className="more-arrow" />
                                    <img src="../assets/images/arrow-right-colored.svg" alt="More arrow" className="more-arrow active" />
                                  </div>
                                  {/* <p>Manage financial losses arising out of unforeseen damage to your business property</p> */}
                                </a>
                              </div>
                              <div className="dropdown-nav-option claim-content-child">
                                <a href="#" onClick={(e) => e.preventDefault()} className="dropdown-item" data-child-dropdown-item="Marine">
                                  <div className="d-flex property-wrapper-head">
                                    <img src="../assets/images/marine-mob.svg" className="mr-2" /> Marine
                                    <img src="../assets/images/arrow-right.svg" alt="More arrow" className="more-arrow" />
                                    <img src="../assets/images/arrow-right-colored.svg" alt="More arrow" className="more-arrow active" />
                                  </div>
                                  {/* <p>Mitigate financial risk caused due to goods and asset damages in transit.</p> */}
                                </a>
                              </div>
                              <div className="dropdown-nav-option claim-content-child">
                                <a href="#" onClick={(e) => e.preventDefault()} className="dropdown-item" data-child-dropdown-item="Liability">
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
                                <a href="#" onClick={(e) => e.preventDefault()} className="dropdown-item" data-child-dropdown-item="Engineering">
                                  <div className="d-flex property-wrapper-head">
                                    <img src="../assets/images/engineering-mob.svg" className="mr-2" /> Engineering
                                    <img src="../assets/images/arrow-right.svg" alt="More arrow" className="more-arrow" />
                                    <img src="../assets/images/arrow-right-colored.svg" alt="More arrow" className="more-arrow active" />
                                  </div>
                                  {/* <p>Financial Protection for your business against engineering and construction risks.</p> */}
                                </a>
                              </div>
                              <div className="dropdown-nav-option claim-content-child">
                                <a href="#" onClick={(e) => e.preventDefault()} className="dropdown-item" data-child-dropdown-item="Health">
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
                                <a href="#" onClick={(e) => e.preventDefault()} className="dropdown-item" data-child-dropdown-item="Property">
                                  <div className="d-flex property-wrapper-head">
                                    <img src="../assets/images/assets-mob.svg" className="mr-2" /> Property
                                    <img src="../assets/images/arrow-right.svg" alt="More arrow" className="more-arrow" />
                                    <img src="../assets/images/arrow-right-colored.svg" alt="More arrow" className="more-arrow active" />
                                  </div>
                                  {/* <p>Manage financial losses arising out of unforeseen damage to your business property</p> */}
                                </a>
                              </div>
                              <div className="dropdown-nav-option claim-content-child">
                                <a href="#" onClick={(e) => e.preventDefault()} className="dropdown-item" data-child-dropdown-item="Marine">
                                  <div className="d-flex property-wrapper-head">
                                    <img src="../assets/images/marine-mob.svg" className="mr-2" /> Marine
                                    <img src="../assets/images/arrow-right.svg" alt="More arrow" className="more-arrow" />
                                    <img src="../assets/images/arrow-right-colored.svg" alt="More arrow" className="more-arrow active" />
                                  </div>
                                  {/* <p>Mitigate financial risk caused due to goods and asset damages in transit.</p> */}
                                </a>
                              </div>
                              <div className="dropdown-nav-option claim-content-child">
                                <a href="#" onClick={(e) => e.preventDefault()} className="dropdown-item" data-child-dropdown-item="Liability">
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
                                <a href="#" onClick={(e) => e.preventDefault()} className="dropdown-item" data-child-dropdown-item="Engineering">
                                  <div className="d-flex property-wrapper-head">
                                    <img src="../assets/images/engineering-mob.svg" className="mr-2" /> Engineering
                                    <img src="../assets/images/arrow-right.svg" alt="More arrow" className="more-arrow" />
                                    <img src="../assets/images/arrow-right-colored.svg" alt="More arrow" className="more-arrow active" />
                                  </div>
                                  {/* <p>Financial Protection for your business against engineering and construction risks.</p> */}
                                </a>
                              </div>
                              <div className="dropdown-nav-option claim-content-child">
                                <a href="#" onClick={(e) => e.preventDefault()} className="dropdown-item" data-child-dropdown-item="Health">
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
                                <a href="#" onClick={(e) => e.preventDefault()} className="dropdown-item" data-child-dropdown-item="Property">
                                  <div className="d-flex property-wrapper-head">
                                    <img src="../assets/images/health-mob.svg" className="mr-2" /> Health
                                  </div>
                                  {/* <p>For corporate employees to Initiate health claims processing</p> */}
                                </a>
                              </div>
                              <div className="dropdown-nav-option claim-content-child">
                                <a href="#" onClick={(e) => e.preventDefault()} className="dropdown-item" data-child-dropdown-item="Marine">
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
                      <li className="breadcrumb-item"><i className="fa-solid fa-house mr-2" style={{color: 'rgb(212, 197, 197)', display: 'none'}} /><a href="#" className="headerContent disabled" style={{color: 'black'}}>Products</a></li>
                      <li className="breadcrumb-item"><a href="#" className="headerContent disabled" style={{color: 'black'}}>Property</a></li>
                      <li className="breadcrumb-item">
                        <a href="#" className="headerContent disabled" style={{color: '#ce6625'}}>Standard Fire &amp; Special perils Policy</a>
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <img src="../assets/images/New Project.png" alt="vas-solution-banner" className="NewProject mainbanner d-none d-sm-block" />
                  <img src="../assets/images/New-Project-mobile.png" alt="vas-solution-banner" className="mainbanner d-block d-sm-none w-100" />
                </div>
              </div>
              <h1 style={{fontWeight: 'bold'}}>Property</h1>
              {/* <h2 class="mb-3" style="color: black; font-weight:bold;">Why do you need fire insurance?</h2> */}
              <p className="pb-4">
                Fire and its consequent losses pose a constant threat to businesses, and their unpredictable nature makes prevention challenging. While predicting fires may be impossible, taking proactive steps to prevent them is crucial. Businesses of all sizes are vulnerable to dramatic and unexpected circumstances that can severely disrupt or even ruin operations. <br /><br />
                In light of these potential challenges, obtaining property insurance for your business is not just prudent – it's compelling. Fire insurance provides a safety net that covers a wide range of risks, including the possibility of a complete shutdown. By safeguarding your business against the financial repercussions of fire-related incidents, you can ensure continuity and peace of mind in the face of the unexpected.
              </p>
            </div>
          </div>
          {/* start */}
          <section className="industry-section-main">
            <div className="industry-section-options">
              <div className="dropdown industry-list-dropdown">
                <button type="button" className="btn dropdown-toggle" data-toggle="dropdown">
                  Property Product List
                  <img src="../assets/images/icons/white-down-arrow.svg" className="img-fluid" alt="Dropdown arrow" />
                </button>
                <div className="dropdown-menu pl-3" style={{marginLeft: '19%', width: '353px'}}>
                  <a className="dropdown-item ICICIMenu mb-2 active" href="/Portal/Standard_Fire_and_Special_perils_policy">Standard Fire &amp; Special perils Policy</a>
                  <a className="dropdown-item ICICIMenu mb-2" href="/Portal/Industrial_All_Risk_policy">Industrial All Risk Policy</a>
                  <a className="dropdown-item ICICIMenu mb-2" href="/Portal/Mega_Risk_policy">Mega Risk Policy</a>
                  <a className="dropdown-item ICICIMenu mb-2 " href="/Portal/ICICI_Bharat_Sookshma_Udyam_Surakha_Policy">ICICI Bharat Sookshma Udyam Surakha Policy</a>
                  <a className="dropdown-item ICICIMenu mb-2" href="/Portal/ICICI_Bharat_LaGhu_Udyam_Suraksha_Policy">ICICI Bharat Laghu Udyam Suraksha Policy</a>
                  <a className="dropdown-item ICICIMenu mb-2" href="/Portal/ICICI_Bharat_Griha_Raksha_Policy">ICICI Bharat Griha Raksha Policy</a>
                  <img src="../assets/images/backdrop-arrow.svg" className="img-fluid backdrop-arrow" alt="back" />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-5 industry-info-img">
                  <img src="../assets/images/Standard-Fire-and-Special-perils-policy.png" className="img-fluid ImgWidth" alt="Industry-list" />
                </div>
                <div className="col-lg-7 industry-info-main">
                  <div id="pharma" className="industry-info">
                    <div className="industry-info-head">
                      {/*<span class="sub-heading">Product</span>*/}
                      <h2 style={{fontSize: '42px'}} className="standardFire">Standard Fire &amp; Special perils Policy</h2>
                    </div>
                    <div id="pharma-accordion">
                      <div className="industry-accordion">
                        <div className="industry-accordion-header">
                          <a className=" card-link" data-toggle="collapse" href="#collapseOne">
                            OVERVIEW
                            <img src="../assets/images/icons/arrow-up.svg" className="img-fluid plus" alt="Arrow Up" />
                            <img src="../assets/images/icons/arrow-down.svg" className="img-fluid minus" alt="Arrow Down" />
                          </a>
                        </div>
                        <div id="collapseOne" className="collapse show" data-parent="#pharma-accordion" style={{}}>
                          <div className="testimonialSlider">
                            <div className="industry-accordion-body p-t-20">
                              <p className="m-b-0f">
                                The policy covers the insured property related to the
                                business against insured peril at one location with the total value
                                at risk above ₹ 50 Crores. This include Buildings, Plant &amp;
                                Fixtures, Machinery, Stocks RM, and Finished Goods &amp; Stock in
                                process.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="industry-accordion">
                        <div className="industry-accordion-header">
                          <a className="collapsed card-link" data-toggle="collapse" href="#collapseTwo">
                            BASIC COVERS INCLUDE
                            <img src="../assets/images/icons/arrow-up.svg" className="img-fluid plus" alt="Arrow Up" />
                            <img src="../assets/images/icons/arrow-down.svg" className="img-fluid minus" alt="Arrow Down" />
                          </a>
                        </div>
                        <div id="collapseTwo" className="collapse" data-parent="#pharma-accordion">
                          <div className="industry-accordion-body recommend-wrapper m-t-15f">
                            <div className="row">
                              <div className="col-md-12">
                                <ol className="basic-cover-list">
                                  <li>
                                    Additions, alterations or extensions - Property that you erect, acquire or add during the Policy Period is covered upto 15% of the Sum Insured for that item (excluding stocks).
                                  </li>
                                  <li>Stocks on floater basis: Loss to stocks located at more than one named location.</li>
                                  <li>Temporary removal of stocks - Loss to stocks temporarily removed to other premises for fabrication, processing or finishing upto 10% of value.</li>
                                </ol>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="industry-accordion">
                        <div className="industry-accordion-header">
                          <a className="collapsed card-link" data-toggle="collapse" href="#collapseThree">
                            INCLUSIONS
                            <img src="../assets/images/icons/arrow-up.svg" className="img-fluid plus" alt="Arrow Up" />
                            <img src="../assets/images/icons/arrow-down.svg" className="img-fluid minus" alt="Arrow Down" />
                          </a>
                        </div>
                        <div id="collapseThree" className="collapse" data-parent="#pharma-accordion">
                          <div className="industry-accordion-body recommend-wrapper">
                            <div className="row m-b-20">
                              <div className="col-lg-3 col-6 industry-accordion-content text-center">
                                <img src="../assets/images/Product/Property/fire-inclusion.png" alt="Clinical" />
                                <div className="row justify-content-center text-center">
                                  <h6 className="acc-menu-h1">
                                    <span className="tooltipmsg" style={{width: '100px !important', display: 'block'}}>
                                      Fire
                                      <span className="tooltipmsg-text">
                                        All Risk cover including Standard Fire &amp; special perils
                                      </span>
                                    </span>
                                  </h6>
                                </div>
                              </div>
                              <div className="col-lg-3 col-6 industry-accordion-content  text-center">
                                <img src="../assets/images/Product/Property/Explosion-or-Implosion.png" alt="Product" />
                                <h3>Explosion or Implosion </h3>
                              </div>
                              <div className="col-lg-3 col-6 industry-accordion-content  text-center">
                                <img src="../assets/images/Product/Property/Lightning.png" alt="General" />
                                <h3>
                                  Lightning - Fire or any other damage caused to the property due
                                  to a peril like lightning
                                </h3>
                              </div>
                              <div className="col-lg-3 col-6 industry-accordion-content  text-center">
                                <img src="../assets/images/Product/Property/Earthquake.png" alt="E&O" />
                                <h3>
                                  Earthquake, volcanic eruption, or other convulsions of nature
                                </h3>
                              </div>
                            </div>
                            <div className="row m-b-20">
                              <div className="col-lg-3 col-6 industry-accordion-content text-center">
                                <img src="../assets/images/Product/Property/storm-cyclone.png" alt="Clinical" />
                                <h3>
                                  Storm, Cyclone, Typhoon, Tempest, Hurricane, Tornado, Tsunami,
                                  Flood and Inundation
                                </h3>
                              </div>
                              <div className="col-lg-3 col-6 industry-accordion-content  text-center">
                                <img src="../assets/images/Product/Property/Acts-of-terrorism.png" alt="Product" />
                                <h3>
                                  Acts of terrorism - An act or series of acts, including but not
                                  limited to the use of force or violence and/or the threat there
                                  of
                                </h3>
                              </div>
                              <div className="col-lg-3 col-6 industry-accordion-content  text-center">
                                <img src="../assets/images/Product/Property/Bursting-or-overflowing-of-water-tanks.png" alt="General" />
                                <h3>Bursting or overflowing of water tanks, apparatus and pipes</h3>
                              </div>
                              <div className="col-lg-3 col-6 industry-accordion-content  text-center">
                                <img src="../assets/images/Product/Property/Leakage-from-automatic-sprinkler-installations.png" alt="General" />
                                <h3>Leakage from automatic sprinkler installations</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="industry-accordion">
                        <div className="industry-accordion-header">
                          <a className="collapsed card-link" data-toggle="collapse" href="#collapseFour">
                            EXCLUSIONS
                            <img src="../assets/images/icons/arrow-up.svg" className="img-fluid plus" alt="Arrow Up" />
                            <img src="../assets/images/icons/arrow-down.svg" className="img-fluid minus" alt="Arrow Down" />
                          </a>
                        </div>
                        <div id="collapseFour" className="collapse" data-parent="#pharma-accordion">
                          <div className="industry-accordion-body recommend-wrapper">
                            <div className="row m-b-20">
                              <div className="col-lg-3 col-6 industry-accordion-content text-center">
                                <img src="../assets/images/Product/Property/Burning-of-insured-property.png" alt="Clinical" />
                                <h3>
                                  Burning of Insured Property by any order of Public authority
                                </h3>
                              </div>
                              <div className="col-lg-3 col-6 industry-accordion-content  text-center">
                                <img src="../assets/images/Product/Property/Deliberate-willful-or-intentional-act-or-mission.png" alt="Product" />
                                <h3>Deliberate, wilful or intentional act or omission</h3>
                              </div>
                              <div className="col-lg-3 col-6 industry-accordion-content  text-center">
                                <img src="../assets/images/Product/Property/Loss-destruction-or-damage-to-stocks.png" alt="General" />
                                <h3>
                                  Loss, destruction or damage to stocks in cold storage due to
                                  change in temperature
                                </h3>
                              </div>
                              <div className="col-lg-3 col-6 industry-accordion-content  text-center">
                                <img src="../assets/images/Product/Property/Loss-destruction-or-damage.png" alt="E&O" />
                                <h3>
                                  Loss, destruction or damage to insured property by undergoing
                                  any heating, drying process or centrifugal Forces
                                </h3>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-3 col-6 industry-accordion-content text-center">
                                <img src="../assets/images/Product/Property/War-invasion-war-like-operations.png" alt="Clinical" />
                                <h3>War, invasion, war-like operations</h3>
                              </div>
                              <div className="col-lg-3 col-6 industry-accordion-content  text-center">
                                <img src="../assets/images/Product/Property/Ionizing-radiations.png" alt="Product" />
                                <h3>Ionising radiation</h3>
                              </div>
                              <div className="col-lg-3 col-6 industry-accordion-content  text-center">
                                <img src="../assets/images/Product/Property/Pollution-or-contamination.png" alt="General" />
                                <h3>Pollution or contamination</h3>
                              </div>
                              <div className="col-lg-3 col-6 industry-accordion-content  text-center">
                                <img src="../assets/images/Product/Property/property-is-missing-or-has-been-mislaid.png" alt="General" />
                                <h3>Property is missing or has been mislaid</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a href="/Portal/Property_Loss_Prevention_exercise" className="next-industry mt-1">
                    Take a Look at Risk Management Services
                    <img src="../assets/images/icons/next-arrow.svg" className="img-fluid" alt="Arrow" />
                  </a>
                  <div className="row mt-3 DisclaimerSec py-2">
                    <div className="col-sm-12">
                      <h5>Disclaimer</h5>
                      <p>
                        This is just an indicative list, kindly refer policy wordings for detailed information.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* end */}
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

export default Standard_Fire_and_Special_perils_policy;
