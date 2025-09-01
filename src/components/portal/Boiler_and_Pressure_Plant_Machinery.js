import React from "react";

 import Navbarportal from "../common/Navbar_Portal";
 import Footerportal from "../common/Footer_Portal";
const Boiler_and_Pressure_Plant_Machinery = () => {
    return (

      <div>
        <div className="container-fluid header-container">
          <div className="container">
            <div className="row pt-3">
              <div className="col-sm-12">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"> <img src="../assets/images/home-icon.jpg" className="Homeicon mr-2" alt="home-icon" /></li>
                    <li className="breadcrumb-item"><i className="fa-solid fa-house mr-2" style={{color: 'rgb(212, 197, 197)', display: 'none'}} /><a href="#" className="headerContent disabled" style={{color: 'black'}}>Products</a></li>
                    <li className="breadcrumb-item"><a href="#" className="headerContent disabled" style={{color: 'black'}}>Engineering</a></li>
                    <li className="breadcrumb-item">
                      <a href="#" className="headerContent disabled" style={{color: '#ce6625'}}>Boiler and Pressure Plant (BPP) Machinery</a>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <img src="../assets/images/engineering.jpg" alt="engineering-banner" className="NewProject mainbanner d-none d-sm-block" />
                <img src="../assets/images/Engineering -mobile.png" alt="engineering-banner" className="mainbanner d-block d-sm-none w-100" />
              </div>
            </div>
            <h1 style={{fontWeight: 'bold'}}>Engineering</h1>
            {/*Partial Page calling*/}
            <style dangerouslySetInnerHTML={{__html: "\n                p {\n                    line-height: 20px !important;\n                }\n            " }} />
            <p className="pb-05">
              Engineering insurance refers to the insurance that provides economic safeguard to the risks faced by the ongoing construction project, installation project, and machines and equipment in project operation. <br /><br />
              Currently, engineering insurance provides comprehensive coverage that provides protection against risk associated with construction / erection of project, plant machinery during operation. It is classified into two broad groups- Construction Phase and Operational phase. <br /><br />
              Construction Phase policies are issued for the period of project - Contractor’s All Risk (CAR) Insurance / Erection All Risk (EAR) Insurance
              Operational Insurance are annual policies renewable at expiry – Machinery Breakdown Insurance, Boiler and Pressure Plant Insurance, Contractor’s Plant and Machinery (CPM) Insurance etc.
            </p>
          </div>
        </div>
        {/* start */}
        <section className="industry-section-main">
          <div className="industry-section-options">
            <div className="dropdown industry-list-dropdown">
              <button type="button" className="btn dropdown-toggle" data-toggle="dropdown">
                Engineering Product List
                <img src="../assets/images/icons/white-down-arrow.svg" className="img-fluid" alt="Dropdown arrow" />
              </button>
              <div className="dropdown-menu pl-3" style={{marginLeft: '16%', width: '320px'}}>
                <a className="dropdown-item ICICIMenu mb-2" href="/Portal/Contractors_All_Risk  ">Contractor’s All Risk (CAR)</a>
                <a className="dropdown-item ICICIMenu mb-2" href="/Portal/Erection_All_Risk  ">Erection All Risk (EAR)</a>
                <a className="dropdown-item ICICIMenu mb-2" href="/Portal/Machinery_Breakdown ">Machinery Breakdown</a>
                <a className="dropdown-item ICICIMenu mb-2 active" href="/Portal/Boiler_and_Pressure_Plant_Machinery">Boiler and Pressure Plant (BPP) Machinery</a>
                {/* <img src="../assets/images/backdrop-arrow.svg" class="img-fluid backdrop-arrow" alt="back"> */}
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-5 industry-info-img">
                <img src="../assets/images/boiler-and-pressure-plant.png" className="img-fluid ImgWidth-f" alt="Industry-list" />
              </div>
              <div className="col-lg-7 industry-info-main">
                <div id="pharma" className="industry-info">
                  <div className="industry-info-head">
                    {/*<span class="sub-heading">Product</span>*/}
                    <h2 className="standardFire" style={{fontSize: '42px'}}>Boiler and Pressure Plant (BPP) Machinery</h2>
                  </div>
                  <div id="pharma-accordion">
                    <div className="industry-accordion">
                      <div className="industry-accordion-header">
                        <a data-toggle="collapse" href="#collapseOne" className="card-link">
                          OVERVIEW
                          <img src="../assets/images/icons/arrow-up.svg" className="img-fluid plus" alt="Arrow Up" />
                          <img src="../assets/images/icons/arrow-down.svg" className="img-fluid minus" alt="Arrow Down" />
                        </a>
                      </div>
                      <div id="collapseOne" className="collapse show" data-parent="#pharma-accordion">
                        <div className="testimonialSlider">
                          <div className="industry-accordion-body p-t-20">
                            <p>
                              Boilers and Pressure vessels are critical to the manufacturing process. Even a minor damage to these components can lead to potentially catastrophic outcomes such as explosions or collapses. These incidents have the potential to not only impact lives but also result in significant financial losses. Our specialized policy offers comprehensive coverage for the physical loss or damage to boilers and other pressure plants that generate steam. By providing this coverage, we ensure that your critical equipment is protected, minimizing the risk of devastating events and their associated consequences. Your operations can continue with confidence, knowing that you have the necessary support to address unforeseen challenges related to your vital assets.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*BASIC COVER INCLUDE*/}
                    {/*
                                    <div class="industry-accordion">
                                    <div class="industry-accordion-header">
                                        <a class="collapsed card-link" data-toggle="collapse" href="#collapseTwo">
                                            BASIC COVERS INCLUDE
                                            <img src="../assets/images/icons/arrow-up.svg" class="img-fluid plus" alt="Arrow Up">
                                            <img src="../assets/images/icons/arrow-down.svg" class="img-fluid minus" alt="Arrow Down">
                                        </a>
                                    </div>
                                    <div id="collapseTwo" class="collapse" data-parent="#pharma-accordion">
                                        <div class="industry-accordion-body testimonial-wrapper">


                                            <div class="row pharma-accordian m-b-20 mt-3 pr-3">
                                                <div class="col-md-3">
                                                    <div class="row justify-content-center">
                                                        <img src="../assets/images/Fire and allied perils.png">
                                                    </div>
                                                    <div class="row justify-content-center text-center">
                                                        <h6 class="acc-menu-h1">Storage</h6>
                                                    </div>

                                                </div>

                                            </div>


                                        </div>
                                    </div>
                                </div>
                            */}
                    {/*BASIC COVER INCLUDE*/}
                    <div className="industry-accordion">
                      <div className="industry-accordion-header">
                        <a className="collapsed card-link" data-toggle="collapse" href="#collapseThree">
                          INCLUSIONS
                          <img src="../assets/images/icons/arrow-up.svg" className="img-fluid plus" alt="Arrow Up" />
                          <img src="../assets/images/icons/arrow-down.svg" className="img-fluid minus" alt="Arrow Down" />
                        </a>
                      </div>
                      <div id="collapseThree" className="collapse" data-parent="#pharma-accordion">
                        <div className="industry-accordion-body testimonial-wrapper">
                          <div className="row pharma-accordian m-b-20 mt-3 pr-3">
                            <div className="col-md-3">
                              <div className="row justify-content-center">
                                <img src="../assets/images/Product/Property/Damage-to-the-boilers.png" />
                              </div>
                              <div className="row justify-content-center text-center">
                                <h6 className="acc-menu-h1">
                                  <span className="tooltipmsg">
                                    Damage to the boilers &amp; pressure vessels
                                    {/*<span class="tooltipmsg-text"></span>*/}
                                  </span>
                                </h6>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="row justify-content-center">
                                <img src="../assets/images/Product/Property/Damage-to-surrounding.png" />
                              </div>
                              <div className="row justify-content-center text-center">
                                <h6 className="acc-menu-h1">
                                  <span className="tooltipmsg">
                                    Damage to surroundings due to collapse/explosion
                                    {/*<span class="tooltipmsg-text"></span>*/}
                                  </span>
                                </h6>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="row justify-content-center">
                                <img src="../assets/images/Product/Property/Third-Party-Liability-coverages.png" />
                              </div>
                              <div className="row justify-content-center text-center">
                                <h6 className="acc-menu-h1">
                                  <span className="tooltipmsg">
                                    Third-party legal liability,
                                    {/*<span class="tooltipmsg-text"></span>*/}
                                  </span>
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="industry-accordion">
                      <div className="industry-accordion-header">
                        <a className="card-link collapsed" data-toggle="collapse" href="#collapseFour" aria-expanded="false">
                          EXCLUSIONS
                          <img src="../assets/images/icons/arrow-up.svg" className="img-fluid plus" alt="Arrow Up" />
                          <img src="../assets/images/icons/arrow-down.svg" className="img-fluid minus" alt="Arrow Down" />
                        </a>
                      </div>
                      <div id="collapseFour" className="collapse" data-parent="#pharma-accordion">
                        <div className="industry-accordion-body testimonial-wrapper">
                          <div className="row pharma-accordian m-b-20 mt-3 pr-3">
                            <div className="col-md-3">
                              <div className="row justify-content-center">
                                <img src="../assets/images/Product/Property/Fire-and-allied-perils.png" />
                              </div>
                              <div className="row justify-content-center text-center">
                                <h6 className="acc-menu-h1">
                                  <span className="tooltipmsg">
                                    Fire and related perils
                                    {/*<span class="tooltipmsg-text"></span>*/}
                                  </span>
                                </h6>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="row justify-content-center">
                                <img src="../assets/images/War invasion.png" />
                              </div>
                              <div className="row justify-content-center text-center">
                                <h6 className="acc-menu-h1">
                                  <span className="tooltipmsg">
                                    War and Nuclear perils
                                    {/*<span class="tooltipmsg-text"></span>*/}
                                  </span>
                                </h6>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="row justify-content-center">
                                <img src="../assets/images/Product/Property/Overload-experiments.png" />
                              </div>
                              <div className="row justify-content-center text-center">
                                <h6 className="acc-menu-h1">
                                  <span className="tooltipmsg">
                                    Overload experiments / tests imposing abnormal
                                    conditions
                                    {/*<span class="tooltipmsg-text"></span>*/}
                                  </span>
                                </h6>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="row justify-content-center">
                                <img src="../assets/images/Product/Property/Gradually-developing.png" />
                              </div>
                              <div className="row justify-content-center text-center">
                                <h6 className="acc-menu-h1">
                                  <span className="tooltipmsg">
                                    Gradually developing defects not requiring stoppage
                                    {/*<span class="tooltipmsg-text"></span>*/}
                                  </span>
                                </h6>
                              </div>
                            </div>
                          </div>
                          <div className="row pharma-accordian m-b-20 mt-3 pr-3">
                            <div className="col-md-3">
                              <div className="row justify-content-center">
                                <img src="../assets/images/Product/Property/Pre-existing-defects.png" />
                              </div>
                              <div className="row justify-content-center text-center">
                                <h6 className="acc-menu-h1">
                                  <span className="tooltipmsg">
                                    Pre-existing defects &amp; faults
                                    {/*<span class="tooltipmsg-text"></span>*/}
                                  </span>
                                </h6>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="row justify-content-center">
                                <img src="../assets/images/Product/Property/Regular-wear-and-tear.png" />
                              </div>
                              <div className="row justify-content-center text-center">
                                <h6 className="acc-menu-h1">
                                  <span className="tooltipmsg">
                                    Normal wear and tear, corrosion not leading to explosion / collapse
                                    {/*<span class="tooltipmsg-text"></span>*/}
                                  </span>
                                </h6>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="row justify-content-center">
                                <img src="../assets/images/Wilful Act or Wilful Negligence.png" />
                              </div>
                              <div className="row justify-content-center text-center">
                                <h6 className="acc-menu-h1">
                                  <span className="tooltipmsg">
                                    Wilful Act or Wilful Negligence of the
                                    Insured
                                    {/*<span class="tooltipmsg-text"></span>*/}
                                  </span>
                                </h6>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="row justify-content-center">
                                <img src="../assets/images/Product/Engineering/consequential-loss.png" />
                              </div>
                              <div className="row justify-content-center text-center">
                                <h6 className="acc-menu-h1">
                                  <span className="tooltipmsg">
                                    Consequential loss
                                    {/*<span class="tooltipmsg-text"></span>*/}
                                  </span>
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="/Portal/risk_Engineering  " className="next-industry mt-1">
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
        {/* end-section */}
      </div>
    );
};

export default Boiler_and_Pressure_Plant_Machinery;