
import react from "react";
const Machinery_Breakdown=()=>{
return(
    
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
                      <a href="#" className="headerContent disabled" style={{color: '#ce6625'}}>Machinery Breakdown</a>
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
                <a className="dropdown-item ICICIMenu mb-2" href="/Portal/Contractors_All_Risk ">Contractor’s All Risk (CAR)</a>
                <a className="dropdown-item ICICIMenu mb-2" href="/Portal/Erection_All_Risk ">Erection All Risk (EAR)</a>
                <a className="dropdown-item ICICIMenu mb-2 active" href="/Portal/Machinery_Breakdown ">Machinery Breakdown</a>
                <a className="dropdown-item ICICIMenu mb-2" href="/Portal/Boiler_and_Pressure_Plant_Machinery">Boiler and Pressure Plant (BPP) Machinery</a>
                {/* <img src="../assets/images/backdrop-arrow.svg" class="img-fluid backdrop-arrow" alt="back"> */}
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-5 industry-info-img">
                <img src="../assets/images/machinery-breakdown-product.png" className="img-fluid ImgWidth-f" alt="Industry-list" />
              </div>
              <div className="col-lg-7 industry-info-main">
                <div id="pharma" className="industry-info">
                  <div className="industry-info-head">
                    {/*<span class="sub-heading">Product</span>*/}
                    <h2 style={{fontSize: '42px'}} className="standardFire">Machinery Breakdown</h2>
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
                              Machinery breakdown insurance provides a protection cover to the
                              machines used by factories and industries. This insurance covers
                              accidental breakdown and physical damage of the machinery and the
                              cost of repairs or replacement of the damaged machine parts
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="industry-accordion">
                    <div className="industry-accordion-header">
                      <a className="card-link collapsed" data-toggle="collapse" href="#collapseTwo" aria-expanded="false">
                        BASIC COVERS INCLUDE
                        <img src="../assets/images/icons/arrow-up.svg" className="img-fluid plus" alt="Arrow Up" />
                        <img src="../assets/images/icons/arrow-down.svg" className="img-fluid minus" alt="Arrow Down" />
                      </a>
                    </div>
                    <div id="collapseTwo" className="collapse" data-parent="#pharma-accordion">
                      <div className="industry-accordion-body recommend-wrapper m-t-15f">
                        <div className="row">
                          <div className="col-md-12">
                            <p>The protection is offered for machines both in working and in rest condition. Some other conditions are when dismantled or moved or re-assembled for cleaning, inspection or repair.</p>
                            <ol className="basic-cover-list">
                              <li>
                                Mechanical: All types of Mechanical industrial plant like
                                compressors, pumps, turbine engines, turbines (steam, water
                                &amp; gas), blowers, machine tools, presses and refrigerators
                                etc.
                              </li>
                              <li>
                                Electrical: All types of electrical machines like a
                                transformer, electrical motor, alternators &amp; generators,
                                motors, rectifiers and switchgear etc.
                              </li>
                              <li>
                                Process machines: All types of Process machines like cold
                                storage, engineering and metallurgical, paper/ pulp making,
                                printing, rubber/ plastics and textiles – cold storage,
                                engineering and various manufacturing
                              </li>
                              <li>
                                Stationary: All Stationary equipment can be covered
                              </li>
                            </ol>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="industry-accordion">
                    <div className="industry-accordion-header">
                      <a className="card-link collapsed" data-toggle="collapse" href="#collapseThree" aria-expanded="false">
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
                              <img src="../assets/images/Product/Property/Machinery-breakdown.png" />
                            </div>
                            <div className="row justify-content-center text-center">
                              <h6 className="acc-menu-h1">
                                <span className="tooltipmsg">
                                  Machinery breakdown due to electrical reasons
                                  {/*<span class="tooltipmsg-text"></span>*/}
                                </span>
                              </h6>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="row justify-content-center">
                              <img src="../assets/images/Product/Property/Abnormal-operating.png" />
                            </div>
                            <div className="row justify-content-center text-center">
                              <h6 className="acc-menu-h1">
                                <span className="tooltipmsg">
                                  Abnormal operating conditions of the machine
                                  {/*<span class="tooltipmsg-text"></span>*/}
                                </span>
                              </h6>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="row justify-content-center">
                              <img src="../assets/images/Product/Property/Falling-impact.png" />
                            </div>
                            <div className="row justify-content-center text-center">
                              <h6 className="acc-menu-h1">
                                <span className="tooltipmsg">
                                  Falling, impact and collision resulting in breakdowns
                                  {/*<span class="tooltipmsg-text"></span>*/}
                                </span>
                              </h6>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="row justify-content-center">
                              <img src="../assets/images/Product/Property/Carelessness.png" />
                            </div>
                            <div className="row justify-content-center text-center">
                              <h6 className="acc-menu-h1">
                                <span className="tooltipmsg">
                                  Carelessness and lack of operating skills
                                  {/*<span class="tooltipmsg-text"></span>*/}
                                </span>
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div className="row pharma-accordian m-b-20 mt-3 pr-3">
                          <div className="col-md-3">
                            <div className="row justify-content-center">
                              <img src="../assets/images/Product/Property/damage-to-turbines-compressors.png" />
                            </div>
                            <div className="row justify-content-center text-center">
                              <h6 className="acc-menu-h1">
                                <span className="tooltipmsg">
                                  Damage to turbines, compressors, etc
                                  {/*<span class="tooltipmsg-text"></span>*/}
                                </span>
                              </h6>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="row justify-content-center">
                              <img src="../assets/images/Product/Property/Damage-or-loss-due.png" />
                            </div>
                            <div className="row justify-content-center text-center">
                              <h6 className="acc-menu-h1">
                                <span className="tooltipmsg">
                                  Damage or loss due to fire from within the machinery
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
                              <img src="../assets/images/Product/Property/civil-war.png" />
                            </div>
                            <div className="row justify-content-center text-center">
                              <h6 className="acc-menu-h1">
                                <span className="tooltipmsg">
                                  War, civil war, riot, strike
                                  {/*<span class="tooltipmsg-text"></span>*/}
                                </span>
                              </h6>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="row justify-content-center">
                              <img src="../assets/images/Product/Property/Burning-of-insured-property.png" />
                            </div>
                            <div className="row justify-content-center text-center">
                              <h6 className="acc-menu-h1">
                                <span className="tooltipmsg">
                                  Fire and allied perils, theft, etc.
                                  {/*<span class="tooltipmsg-text"></span>*/}
                                </span>
                              </h6>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="row justify-content-center">
                              <img src="../assets/images/Product/Property/Abnormal-operating.png" />
                            </div>
                            <div className="row justify-content-center text-center">
                              <h6 className="acc-menu-h1">
                                <span className="tooltipmsg">
                                  Damage due to overloading experiments
                                  {/*<span class="tooltipmsg-text"></span>*/}
                                </span>
                              </h6>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="row justify-content-center">
                              <img src="../assets/images/Product/Property/Gradual-development.png" />
                            </div>
                            <div className="row justify-content-center text-center">
                              <h6 className="acc-menu-h1">
                                <span className="tooltipmsg">
                                  Ignored gradual defects developed
                                  {/*<span class="tooltipmsg-text"></span>*/}
                                </span>
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div className="row pharma-accordian m-b-20 mt-3 pr-3">
                          <div className="col-md-3">
                            <div className="row justify-content-center">
                              <img src="../assets/images/Product/Property/Regular-wear-and-tear.png" />
                            </div>
                            <div className="row justify-content-center text-center">
                              <h6 className="acc-menu-h1">
                                <span className="tooltipmsg">
                                  Regular wear and tear of the machinery
                                  {/*<span class="tooltipmsg-text"></span>*/}
                                </span>
                              </h6>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="row justify-content-center">
                              <img src="../assets/images/Product/Property/Pre-existing-defects.png" />
                            </div>
                            <div className="row justify-content-center text-center">
                              <h6 className="acc-menu-h1">
                                <span className="tooltipmsg">
                                  Pre-existing defects
                                  {/*<span class="tooltipmsg-text"></span>*/}
                                </span>
                              </h6>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="row justify-content-center">
                              <img src="../assets/images/machinery-breakdown.png" />
                            </div>
                            <div className="row justify-content-center text-center">
                              <h6 className="acc-menu-h1">
                                <span className="tooltipmsg">
                                  Loss of use of machinery
                                  {/*<span class="tooltipmsg-text"></span>*/}
                                </span>
                              </h6>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="row justify-content-center">
                              <img src="../assets/images/Product/Property/boiler-explosion-icon.png" />
                            </div>
                            <div className="row justify-content-center text-center">
                              <h6 className="acc-menu-h1">
                                <span className="tooltipmsg">
                                  Damage due to boiler explosion
                                  {/*<span class="tooltipmsg-text"></span>*/}
                                </span>
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div className="row pharma-accordian m-b-20 mt-3 pr-3">
                          <div className="col-md-3">
                            <div className="row justify-content-center">
                              <img src="../assets/images/Product/Property/loss-of-use.png" />
                            </div>
                            <div className="row justify-content-center text-center">
                              <h6 className="acc-menu-h1">
                                <span className="tooltipmsg">
                                  Damage to belts, chains, etc
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
              <a href="/Portal/risk_Engineering " className="next-industry mt-1">
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
          {/* end */}
          {/* end section */}
          {/* end-section */}
        </section></div>
)

};

export default Machinery_Breakdown;