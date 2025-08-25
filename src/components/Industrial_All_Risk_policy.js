
import react from "react";
const Industrial_All_Risk_policy=()=>{
return(
  <div>
        <style dangerouslySetInnerHTML={{__html: "\n        dropdown-item.active {\n            background: coral;\n        }\n    " }} />
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
                      <a href="#" className="headerContent disabled" style={{color: '#ce6625'}}>Industrial All Risk Policy</a>
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
                <a className="dropdown-item ICICIMenu mb-2 " href="/Portal/Standard_Fire_and_Special_perils_policy ">Standard Fire &amp; Special perils Policy</a>
                <a className="dropdown-item ICICIMenu mb-2 active" href="/Portal/Industrial_All_Risk_policy ">Industrial All Risk Policy</a>
                <a className="dropdown-item ICICIMenu mb-2" href="/Portal/Mega_Risk_policy ">Mega Risk Policy</a>
                <a className="dropdown-item ICICIMenu mb-2 " href="/Portal/ICICI_Bharat_Sookshma_Udyam_Surakha_Policy ">ICICI Bharat Sookshma Udyam Surakha Policy</a>
                <a className="dropdown-item ICICIMenu mb-2" href="/Portal/ICICI_Bharat_LaGhu_Udyam_Suraksha_Policy ">ICICI Bharat Laghu Udyam Suraksha Policy</a>
                <a className="dropdown-item ICICIMenu mb-2" href="/Portal/ICICI_Bharat_Griha_Raksha_Policy ">ICICI Bharat Griha Raksha Policy</a>
                <img src="../assets/images/backdrop-arrow.svg" className="img-fluid backdrop-arrow" alt="back" />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-5 industry-info-img">
                <img src="../assets/images/Industrial-All Risk-policy.png" className="img-fluid ImgWidth" alt="Industry-list" />
              </div>
              <div className="col-lg-7 industry-info-main">
                <div id="pharma" className="industry-info">
                  <div className="industry-info-head">
                    {/*<span class="sub-heading">Product</span>*/}
                    <h2 className="standardFire" style={{fontSize: '42px'}}>Industrial All Risk Policy</h2>
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
                      <div id="collapseOne" className="collapse show" data-parent="#pharma-accordion">
                        <div className="testimonialSlider">
                          <div className="industry-accordion-body p-t-20">
                            <p>
                              Industrial All Risk Policy is an exclusion based package policy
                              without any named perils. In this policy specific exclusions are
                              incorporated with reference to the operating perils and properties.
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
                        <div className="industry-accordion-body  m-t-15f">
                          <p className="p-b-0f">All industrial risks having overall Sum Insured of Rs.50 crores and above in one or more locations in India shall be eligible for Industrial All Risks Policy
                          </p></div>
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
                        <div className="row pharma-accordian m-b-20 mt-3 pr-3">
                          <div className="col-md-3">
                            <div className="row justify-content-center">
                              <img src="../assets/images/Material-Damage.png" />
                            </div>
                            <div className="row justify-content-center text-center">
                              <h6 className="acc-menu-h1">
                                <span className="tooltipmsg">
                                  Material Damage
                                  <span className="tooltipmsg-text">
                                    All Risk cover including
                                    Standard Fire &amp; special perils
                                  </span>
                                </span>
                              </h6>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="row justify-content-center">
                              <img src="../assets/images/theft-burglary.png" />
                            </div>
                            <div className="row justify-content-center text-center">
                              <h6 className="acc-menu-h1">
                                <span className="tooltipmsg">Theft &amp; Burglary</span>
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
                                  Machinery Breakdown
                                  <span className="tooltipmsg-text">
                                    Mechanical and Electrical
                                    Breakdown
                                  </span>
                                </span>
                              </h6>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="row justify-content-center">
                              <img src="../assets/images/boiler-explosion-icon.png" />
                            </div>
                            <div className="row justify-content-center text-center">
                              <h6 className="acc-menu-h1">
                                <span className="tooltipmsg">
                                  Boiler explosion
                                  <span className="tooltipmsg-text">
                                    Explosion and implosion of
                                    boiler and pressure plants,
                                  </span>
                                </span>
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div className="row pharma-accordian m-b-20 mt-3 pr-3">
                          <div className="col-md-3">
                            <div className="row justify-content-center">
                              <img src="../assets/images/Business-Interruption.png" />
                            </div>
                            <div className="row justify-content-center text-center">
                              <h6 className="acc-menu-h1">
                                <span className="tooltipmsg">
                                  Business Interruption
                                  <span className="tooltipmsg-text">
                                    Loss of Profit due to Fire and
                                    Allied Perils
                                  </span>
                                </span>
                              </h6>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="row justify-content-center">
                              <img src="../assets/images/electronic-equipment-insurance.png" />
                            </div>
                            <div className="row justify-content-center text-center">
                              <h6 className="acc-menu-h1">
                                <span className="tooltipmsg">
                                  Electronic equipment insurance
                                  <span className="tooltipmsg-text">
                                    Breakdown and all risk
                                    coverage of electronic equipments.
                                  </span>
                                </span>
                              </h6>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="row justify-content-center">
                              <img src="../assets/images/Machinery-Loss-of-Profit.png" />
                            </div>
                            <div className="row justify-content-center text-center">
                              <h6 className="acc-menu-h1">
                                <span className="tooltipmsg">
                                  Machinery Loss of Profit
                                  <span className="tooltipmsg-text">
                                    Loss of Profit or business
                                    interruption due to machinery breakdown
                                  </span>
                                </span>
                              </h6>
                            </div>
                          </div>
                          {/* <div class="col-md-3">
                                            <div class="row justify-content-center">
                                                <img src="../assets/images/15-is-waived.png">
                                            </div>
                                            <div class="row justify-content-center text-center">
                                                <h6 class="acc-menu-h1">
                                                    <span class="tooltipmsg">
                                                        Underinsurance up to 15%
                                                        <span class="tooltipmsg-text">Underinsurance up to 15% is
                                                            waived </span>
                                                    </span>
                                                </h6>
                                            </div>
                                        </div> */}
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
                        <div className="row pharma-accordian m-b-20 mt-3 pr-3">
                          <div className="col-md-3">
                            <div className="row justify-content-center">
                              <img src="../assets/images/Faulty.png" />
                            </div>
                            <div className="row justify-content-center text-center">
                              <h6 className="acc-menu-h1">
                                <span className="tooltipmsg">
                                  Faulty or defective design materials
                                </span>
                              </h6>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="row justify-content-center">
                              <img src="../assets/images/Larceny.png" />
                            </div>
                            <div className="row justify-content-center text-center">
                              <h6 className="acc-menu-h1">
                                <span className="tooltipmsg">Larceny</span>
                              </h6>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="row justify-content-center">
                              <img src="../assets/images/Acts-of-fraud.png" />
                            </div>
                            <div className="row justify-content-center text-center">
                              <h6 className="acc-menu-h1">
                                <span className="tooltipmsg">
                                  Acts of fraud
                                  <span className="tooltipmsg-text">
                                    Acts of fraud or dishonesty
                                  </span>
                                </span>
                              </h6>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="row justify-content-center">
                              <img src="../assets/images/Disappearance-unexplained.png" />
                            </div>
                            <div className="row justify-content-center text-center">
                              <h6 className="acc-menu-h1">
                                <span className="tooltipmsg">
                                  inventory shortage
                                  <span className="tooltipmsg-text">
                                    Disappearance unexplained or
                                    inventory shortage misfiling or misplacing of
                                    information shortage in supply or delivery of materials
                                    or shortage due to clerical or accounting error.
                                  </span>
                                </span>
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div className="row pharma-accordian m-b-20 mt-3 pr-3">
                          <div className="col-md-3">
                            <div className="row justify-content-center">
                              <img src="../assets/images/river-erosion.png" />
                            </div>
                            <div className="row justify-content-center text-center">
                              <h6 className="acc-menu-h1">
                                <span className="tooltipmsg">Coastal or river erosion
                                </span></h6>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="row justify-content-center">
                              <img src="../assets/images/wilful-act.png" />
                            </div>
                            <div className="row justify-content-center text-center">
                              <h6 className="acc-menu-h1">
                                <span className="tooltipmsg">
                                  wilful negligence
                                  <span className="tooltipmsg-text">
                                    Any wilful act or wilful
                                    negligence on the part of the Insured or any person
                                    acting on his behalf
                                  </span>
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
                                  War invasion
                                  <span className="tooltipmsg-text">
                                    act of foreign enemy
                                    hostilities or warlike operations
                                  </span>
                                </span>
                              </h6>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="row justify-content-center">
                              <img src="../assets/images/Nuclear Reaction.png" />
                            </div>
                            <div className="row justify-content-center text-center">
                              <h6 className="acc-menu-h1">
                                <span className="tooltipmsg">
                                  Nuclear weapons material
                                </span></h6>
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
        {/* end-section */}
      </div>
)

};

export default Industrial_All_Risk_policy;