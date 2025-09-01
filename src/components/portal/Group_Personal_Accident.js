
import react from "react";
const Group_Personal_Accident=()=>{
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
                    <li className="breadcrumb-item"><a href="#" className="headerContent disabled" style={{color: 'black'}}>Health</a></li>
                    <li className="breadcrumb-item">
                      <a href="#" className="headerContent disabled" style={{color: '#ce6625'}}>Group Personal Accident</a>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <img src="../assets/images/ghi.png" alt="vas-solution-banner" className="NewProject mainbanner d-none d-sm-block" />
                <img src="../assets/images/GHI-mobile.png" alt="vas-solution-banner" className="mainbanner d-block d-sm-none w-100" />
              </div>
            </div>
            <h1 style={{fontWeight: 'bold'}}>Health</h1>
            {/* <h2 class="mb-3" style="color: black; font-weight:bold;">Why do you need health insurance?</h2> */}
            <p className="pb-4">
              Customised Health Plans for your employees when they need us the most.
            </p><p>Unlock the full potential of your workforce with group health insurance. We understand that your employees are your greatest asset, our tailored health plans promote a healthier and more productive lifestyle. Experience seamless tech enabled benefits &amp; claims services with us. </p>
            <p />
          </div>
        </div>
        {/* start */}
        <section className="industry-section-main">
          <div className="industry-section-options">
            <div className="dropdown industry-list-dropdown">
              <button type="button" className="btn dropdown-toggle" data-toggle="dropdown">
                Health Product List
                <img src="../assets/images/icons/white-down-arrow.svg" className="img-fluid" alt="Dropdown arrow" />
              </button>
              <div className="dropdown-menu pl-3" style={{marginLeft: '20%', width: '256px'}}>
                <a className="dropdown-item ICICIMenu mb-2" href="/Portal/Group_Health">Group Health</a>
                <a className="dropdown-item ICICIMenu mb-2 active" href="/Portal/Group_Personal_Accident ">Group Personal Accident</a>
                <img src="../assets/images/backdrop-arrow.svg" className="img-fluid backdrop-arrow" alt="back" />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-5 industry-info-img">
                <img src="../assets/images/personal-accident.png" className="img-fluid ImgWidth-f" alt="Industry-list" />
              </div>
              <div className="col-lg-7 industry-info-main">
                <div id="pharma" className="industry-info">
                  <div className="industry-info-head">
                    {/*<span class="sub-heading">Product</span>*/}
                    <h2 style={{fontSize: '42px'}} className="standardFire">Group Personal Accident</h2>
                  </div>
                  <div id="pharma-accordion">
                    <div className="industry-accordion">
                      <div className="industry-accordion-header">
                        <a className="card-link" data-toggle="collapse" href="#collapseOne">
                          OVERVIEW
                          <img src="../assets/images/icons/arrow-up.svg" className="img-fluid plus" alt="Arrow Up" />
                          <img src="../assets/images/icons/arrow-down.svg" className="img-fluid minus" alt="Arrow Down" />
                        </a>
                      </div>
                      <div id="collapseOne" className="collapse show" data-parent="#pharma-accordion">
                        <div className="testimonialSlider">
                          <div className="industry-accordion-body p-t-20">
                            <p>
                              Personal Accident Insurance policy provides monetary compensation to
                              the policyholder in the event of bodily injuries, disability and
                              even death arising from an accident, violent, visible and external
                              event.
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
                                  <span style={{fontWeight: 700}}>Accidental death</span> - Coverage includes a fixed sum of money
                                  provided to their nominee in the unfortunate event of an
                                  accident-related death.
                                </li>
                                <li>
                                  <span style={{fontWeight: 700}}>Permanent Total disablement (PTD)</span> - Coverage includes a
                                  fixed sum of money provided in the unfortunate event of an
                                  accident, resulting in the total and irrecoverable loss of
                                  limbs or eyes.
                                </li>
                                <li>
                                  <span style={{fontWeight: 700}}>Permanent Partial Disablement (PPD)</span> - Coverage includes a
                                  Partial Sum of money provided in the unfortunate event of an
                                  accident, resulting in partial loss of limbs, sight,
                                  hearing, etc. The Sum of money will be disbursed based on
                                  the percentages defined in the Policy Document. Please refer
                                  to the policy for more details.
                                </li>
                                <li>
                                  <span style={{fontWeight: 700}}>Temporary Total Disablement (TTD)</span> - Coverage includes
                                  compensation provided due to an accident-related injury,
                                  which is temporary and recoverable, resulting in the loss of
                                  earning. For example, fracture of bone. A fixed sum of money
                                  is provided on a weekly basis during this time.
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
                        <div className="row pharma-accordian m-b-20 mt-3 pr-3">
                          <div className="col-md-3">
                            <div className="row justify-content-center">
                              <img src="../assets/images/Product/Health/education-benefit.png" />
                            </div>
                            <div className="row justify-content-center text-center">
                              <h6 className="acc-menu-h1">
                                <span className="tooltipmsg">
                                  Children’s Education Grant
                                  <span className="tooltipmsg-text">If the Insured person dies or becomes permanently and totally disabled due to an accident, this add-on allows the Insured's dependent children to receive an education grant.</span>
                                </span>
                              </h6>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="row justify-content-center">
                              <img src="../assets/images/Product/Health/ambulance-benefit.png" />
                            </div>
                            <div className="row justify-content-center text-center">
                              <h6 className="acc-menu-h1">
                                <span className="tooltipmsg">
                                  Ambulance Charges
                                  <span className="tooltipmsg-text">This add-on covers the cost of reasonable ambulance charges when the Insured person needs to be taken to the nearest hospital due to a life-threatening emergency.</span>
                                </span>
                              </h6>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="row justify-content-center">
                              <img src="../assets/images/Product/Health/expenses-carriage-dead-body.png" />
                            </div>
                            <div className="row justify-content-center text-center">
                              <h6 className="acc-menu-h1">
                                <span className="tooltipmsg">
                                  Repatriation of Mortal Remains
                                  <span className="tooltipmsg-text">This add-on covers the expenses incurred towards the repatriation of the mortal remains of the Insured from their place of death to their place of residence.</span>
                                </span>
                              </h6>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="row justify-content-center">
                              <img src="../assets/images/Product/Health/medical-expences.png" />
                            </div>
                            <div className="row justify-content-center text-center">
                              <h6 className="acc-menu-h1">
                                <span className="tooltipmsg">
                                  Medical Expenses
                                  <span className="tooltipmsg-text">This add-on will cover the medical expenses incurred by the Insured person for treatment related to an Accident</span>
                                </span>
                              </h6>
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
                        <div className="row pharma-accordian m-b-20 mt-3 pr-3">
                          <div className="col-md-3">
                            <div className="row justify-content-center">
                              <img src="../assets/images/Product/Health/self-injury.png" />
                            </div>
                            <div className="row justify-content-center text-center">
                              <h6 className="acc-menu-h1">
                                <span className="tooltipmsg">
                                  Self-injury
                                  {/*<span class="tooltipmsg-text"></span>*/}
                                </span>
                              </h6>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="row justify-content-center">
                              <img src="../assets/images/Product/Health/suicide.png" />
                            </div>
                            <div className="row justify-content-center text-center">
                              <h6 className="acc-menu-h1">
                                <span className="tooltipmsg">
                                  Suicide
                                  {/*<span class="tooltipmsg-text"></span>*/}
                                </span>
                              </h6>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="row justify-content-center">
                              <img src="../assets/images/Product/Health/venereal-disease.png" />
                            </div>
                            <div className="row justify-content-center text-center">
                              <h6 className="acc-menu-h1">
                                <span className="tooltipmsg">
                                  Venereal disease
                                  {/*<span class="tooltipmsg-text"></span>*/}
                                </span>
                              </h6>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="row justify-content-center">
                              <img src="../assets/images/Product/Health/insanity.png" />
                            </div>
                            <div className="row justify-content-center text-center">
                              <h6 className="acc-menu-h1">
                                <span className="tooltipmsg">
                                  Insanity
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
                <a href="/cprtp/Portal/risk_Health" className="next-industry mt-1">
                  Take a Look at Risk Management Services
                  <img src="../assets/images/icons/next-arrow.svg" className="img-fluid" alt="Arrow" />
                </a>
                <div className="row mt-3 DisclaimerSec py-2">
                  <div className="col-sm-12">
                    <h5>Disclaimer</h5>
                    <p>
                      This is just an indicative list, kindly refer policy wordings for detailed
                      information.
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

export default Group_Personal_Accident;