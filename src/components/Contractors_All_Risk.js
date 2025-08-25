
import react from "react";
const Contractors_All_Risk=()=>{
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
                      <a href="#" className="headerContent disabled" style={{color: '#ce6625'}}>Contractor’s All Risk (CAR)</a>
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
            {/* <h2 class="mb-3" style="color: black; font-weight:bold;">Engineering insurance</h2> */}
            {/*Partial Page calling*/}
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
                <a className="dropdown-item ICICIMenu mb-2 active" href="/Portal/Contractors_All_Risk ">Contractor’s All Risk (CAR)</a>
                <a className="dropdown-item mb-2 ICICIMenu" href="/Portal/Erection_All_Risk ">Erection All Risk (EAR)</a>
                <a className="dropdown-item ICICIMenu mb-2" href="/Portal/Machinery_Breakdown ">Machinery Breakdown</a>
                <a className="dropdown-item ICICIMenu mb-2" href="/Portal/Boiler_and_Pressure_Plant_Machinery ">Boiler and Pressure Plant (BPP) Machinery</a>
                {/* <img src="../assets/images/backdrop-arrow.svg" class="img-fluid backdrop-arrow" alt="back"> */}
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-5 industry-info-img">
                <img src="../assets/images/car.png" className="img-fluid ImgWidth-f" alt="Industry-list" />
              </div>
              <div className="col-lg-7 industry-info-main">
                <div id="pharma" className="industry-info">
                  <div className="industry-info-head">
                    {/*<span class="sub-heading">Product</span>*/}
                    <h2 style={{fontSize: '42px'}} className="standardFire">Contractor’s All Risk (CAR)</h2>
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
                          <div className="industry-accordion-body p-t-20 overview">
                            <p>
                              The Contractor’s All Risk policy offers comprehensive cover by covering risks which may arise during construction period. It offers covers for public liability, own plant, contract works, hired-in plant and employee’s tools and gives financial protection to the civil engineering contracts in the event of any accident.
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
                                  Material Damage:<br />
                                  Under this loss, damage, or destruction of property incurred due
                                  to any cause other than those excluded in policy are covered.
                                  Most of the policies pay for the losses or damage up to a
                                  certain amount that does not exceed the sum mentioned against
                                  every item and does not exceed the total sum insured.
                                </li>
                                <li>
                                  Third-Party Liability coverages:
                                  <ol style={{paddingLeft: '20px', listStyle: 'circle !important'}}>
                                    <li>
                                      Legal liability related to accidental damage or loss
                                      caused to the property of third-person
                                    </li>
                                    <li>
                                      Legal liability for non-fatal and fatal injuries caused
                                      to third-person (other than the own employees or workers
                                      of the insured) due to the construction of the property
                                    </li>
                                  </ol>
                                </li>
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
                        <div className="industry-accordion-body testimonial-wrapper">
                          <div className="row pharma-accordian m-b-20 mt-3 pr-3">
                            <div className="col-md-3">
                              <div className="row justify-content-center">
                                <img src="../assets/images/Fire and allied perils.png" />
                              </div>
                              <div className="row justify-content-center text-center">
                                <h6 className="acc-menu-h1">Fire and allied perils.</h6>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="row justify-content-center">
                                <img src="../assets/images/Collapse.png" />
                              </div>
                              <div className="row justify-content-center text-center">
                                <h6 className="acc-menu-h1">Collapse</h6>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="row justify-content-center">
                                <img src="../assets/images/earthquake 1.png" />
                              </div>
                              <div className="row justify-content-center text-center">
                                <h6 className="acc-menu-h1">Earthquake, shock, and fire</h6>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="row justify-content-center">
                                <img src="../assets/images/Faults in construction.png" />
                              </div>
                              <div className="row justify-content-center text-center">
                                <h6 className="acc-menu-h1">Faults in construction</h6>
                              </div>
                            </div>
                          </div>
                          <div className="row pharma-accordian m-b-20 mt-3 pr-3">
                            <div className="col-md-3">
                              <div className="row justify-content-center">
                                <img src="../assets/images/cyclone 1.png" />
                              </div>
                              <div className="row justify-content-center text-center">
                                <h6 className="acc-menu-h1">Storm, flood, cyclone, and tempest</h6>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="row justify-content-center">
                                <img src="../assets/images/Negligence and human errors.png" />
                              </div>
                              <div className="row justify-content-center text-center">
                                <h6 className="acc-menu-h1">Negligence and human errors</h6>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="row justify-content-center">
                                <img src="../assets/images/Water damage.png" />
                              </div>
                              <div className="row justify-content-center text-center">
                                <h6 className="acc-menu-h1">
                                  Water damage
                                </h6>
                              </div>
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
                        <div className="industry-accordion-body testimonial-wrapper">
                          <div className="row pharma-accordian m-b-20 mt-3 pr-3">
                            <div className="col-md-3">
                              <div className="row justify-content-center">
                                <img src="../assets/images/War and nuclear peril.png" />
                              </div>
                              <div className="row justify-content-center text-center">
                                <h6 className="acc-menu-h1">War and nuclear perils</h6>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="row justify-content-center">
                                <img src="../assets/images/Normal wear and tear,.png" />
                              </div>
                              <div className="row justify-content-center text-center">
                                <h6 className="acc-menu-h1">Wear &amp; tear, gradual deterioration</h6>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="row justify-content-center">
                                <img src="../assets/images/Damage due to faulty design, defective materials,.png" />
                              </div>
                              <div className="row justify-content-center text-center">
                                <h6 className="acc-menu-h1">Damage due to faulty design, defective materials, bad workmanship</h6>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="row justify-content-center">
                                <img src="../assets/images/Consequential.png" />
                              </div>
                              <div className="row justify-content-center text-center">
                                <h6 className="acc-menu-h1">Consequential loss</h6>
                              </div>
                            </div>
                          </div>
                          <div className="row pharma-accordian m-b-20 mt-3 pr-3">
                            <div className="col-md-3">
                              <div className="row justify-content-center">
                                <img src="../assets/images/Inventory losses.png" />
                              </div>
                              <div className="row justify-content-center text-center">
                                <h6 className="acc-menu-h1">Inventory losses</h6>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="row justify-content-center">
                                <img src="../assets/images/Wilful negligence.png" />
                              </div>
                              <div className="row justify-content-center text-center">
                                <h6 className="acc-menu-h1">Wilful negligence</h6>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="row justify-content-center">
                                <img src="../assets/images/loss of or damage to vehicles licensed.png" />
                              </div>
                              <div className="row justify-content-center text-center">
                                <h6 className="acc-menu-h1">
                                  Damage to road/water vehicles
                                </h6>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="row justify-content-center">
                                <img src="../assets/images/loss of or damage to files, drawings.png" />
                              </div>
                              <div className="row justify-content-center text-center">
                                <h6 className="acc-menu-h1">
                                  Damage to documents
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
          </div>
        </section>
        {/* end */}
        {/* end section */}
        {/* end-section */}
      </div>
    );

};

export default Contractors_All_Risk;