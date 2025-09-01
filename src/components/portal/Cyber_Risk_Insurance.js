
import react from "react";
const Cyber_Risk_Insurance=()=>{
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
                    <li className="breadcrumb-item"><a href="#" className="headerContent disabled" style={{color: 'black'}}>Liability</a></li>
                    <li className="breadcrumb-item">
                      <a href="#" className="headerContent disabled" style={{color: '#ce6625'}}>Cyber Risk Insurance</a>
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
              Liability insurance is a policy that offers protection to businesses and individuals from risk that they may be held legally or sued for negligence, malpractice or injury. This insurance policy protects the insured from legal payouts and costs for which the policyholder is deemed to be responsible.
            </p>
          </div>
        </div>
        {/* start */}
        <section className="industry-section-main">
          <div className="industry-section-options">
            <div className="dropdown industry-list-dropdown">
              <button type="button" className="btn dropdown-toggle" data-toggle="dropdown">
                Liability Product List
                <img src="../assets/images/icons/white-down-arrow.svg" className="img-fluid" alt="Dropdown arrow" />
              </button>
              <div className="dropdown-menu pl-3" style={{marginLeft: '12%', width: '310px'}}>
                <a className="dropdown-item ICICIMenu mb-2" href="/Portal/Comprehensive_General_Liability">Comprehensive General Liability</a>
                <a className="dropdown-item ICICIMenu mb-2" href="/Portal/Directors_and_Officers_Liability">Directors and Officers Liability</a>
                <a className="dropdown-item ICICIMenu mb-2 active" href="/Portal/Cyber_Risk_Insurance">Cyber Risk Insurance</a>
                <a className="dropdown-item ICICIMenu mb-2" href="/Portal/Professional_Indemnity ">Professional Indemnity</a>
                {/* <img src="../assets/images/backdrop-arrow.svg" class="img-fluid backdrop-arrow" alt="back"> */}
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-5 industry-info-img">
                <img src="../assets/images/cyber-risk-insurance.png" className="img-fluid ImgWidth-f" alt="Industry-list" />
              </div>
              <div className="col-lg-7 industry-info-main">
                <div id="pharma" className="industry-info">
                  <div className="industry-info-head">
                    {/*<span class="sub-heading">Product</span>*/}
                    <h2 style={{fontSize: '42px'}} className="standardFire">Cyber Risk Insurance</h2>
                  </div>
                  <div id="pharma-accordion">
                    <div className="industry-accordion">
                      <div className="industry-accordion-header">
                        <a data-toggle="collapse" href="#collapseOne" className=" card-link">
                          OVERVIEW
                          <img src="../assets/images/icons/arrow-up.svg" className="img-fluid plus" alt="Arrow Up" />
                          <img src="../assets/images/icons/arrow-down.svg" className="img-fluid minus" alt="Arrow Down" />
                        </a>
                      </div>
                      <div id="collapseOne" className="collapse show" data-parent="#pharma-accordion">
                        <p className="m-t-10">With cyber risk steadily increasing, security/ data breaches affect millions of records a year. Cyber Risk insurance coverage is designed to help an organization mitigate its risk exposure by offsetting costs involved with recovery after a cyber-related security breach or similar event.
                        </p></div>
                    </div>
                    {/*BASIC COVERS INCLUDE*/}
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


                                        <div class="row pharma-accordian basicInclude">
                                            <div class="col-md-3">
                                                <div class="row justify-content-center">
                                                    <img src="../assets/images/design-enter-icon.png">
                                                </div>
                                                <div class="row justify-content-center text-center">
                                                    <h6 class="">Additions, alterations or extensions</h6>
                                                    <p style="padding-top: 16px;" class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                </div>

                                            </div>

                                        </div>

                                    </div>
                                </div>
                            */}
                    {/*BASIC COVERS INCLUDE*/}
                    {/* 3 rd Section */}
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
                              <img src="../assets/images/Product/Liability/Data-breach-and-privacy-management.png" />
                            </div>
                            <div className="row justify-content-center text-center">
                              <h6 className="acc-menu-h1">
                                <span className="tooltipmsg">
                                  Data breach and privacy management
                                  {/*<span class="tooltipmsg-text"></span>*/}
                                </span>
                              </h6>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="row justify-content-center">
                              <img src="../assets/images/Product/Liability/Multimedia-and-media-liability-cover.png" />
                            </div>
                            <div className="row justify-content-center text-center">
                              <h6 className="acc-menu-h1">
                                <span className="tooltipmsg">
                                  Multimedia and media liability cover
                                  <span className="tooltipmsg-text">This insurance covers the third-party damages including specific defacement of website and intellectual property rights infringement.</span>
                                </span>
                              </h6>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="row justify-content-center">
                              <img src="../assets/images/Product/Liability/Extortion-liability-cover.png" />
                            </div>
                            <div className="row justify-content-center text-center">
                              <h6 className="acc-menu-h1">
                                <span className="tooltipmsg">
                                  Extortion liability cover
                                  <span className="tooltipmsg-text">The cyber insurance policy also covers the losses due to a threat of extortion and the professional fees related to dealing with the extortion.</span>
                                </span>
                              </h6>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="row justify-content-center">
                              <img src="../assets/images/Product/Liability/Network-Security-liability.png" />
                            </div>
                            <div className="row justify-content-center text-center">
                              <h6 className="acc-menu-h1">
                                <span className="tooltipmsg">
                                  Network Security liability
                                  <span className="tooltipmsg-text">This may include the third-party damages as a result of the denial of access, costs related to the theft of data on third-party systems etc.</span>
                                </span>
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* end 3rd Section */}
                    <div className="industry-accordion">
                      <div className="industry-accordion-header">
                        <a className="collapsed card-link" data-toggle="collapse" href="#collapseThree1">
                          EXCLUSIONS
                          <img src="../assets/images/icons/arrow-up.svg" className="img-fluid plus" alt="Arrow Up" />
                          <img src="../assets/images/icons/arrow-down.svg" className="img-fluid minus" alt="Arrow Down" />
                        </a>
                      </div>
                      <div id="collapseThree1" className="collapse" data-parent="#pharma-accordion">
                        <div className="row pharma-accordian m-b-20 mt-3 pr-3">
                          <div className="col-md-3">
                            <div className="row justify-content-center">
                              <img src="../assets/images/Product/Liability/Dishonest-or-improper-conduct.png" />
                            </div>
                            <div className="row justify-content-center text-center">
                              <h6 className="acc-menu-h1">
                                <span className="tooltipmsg">
                                  Dishonest or improper conduct of the insured
                                  {/*<span class="tooltipmsg-text"></span>*/}
                                </span>
                              </h6>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="row justify-content-center">
                              <img src="../assets/images/Product/Liability/Property-damage-caused.png" />
                            </div>
                            <div className="row justify-content-center text-center">
                              <h6 className="acc-menu-h1">
                                <span className="tooltipmsg">
                                  Property damage caused by cyber attack
                                  {/*<span class="tooltipmsg-text"></span>*/}
                                </span>
                              </h6>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="row justify-content-center">
                              <img src="../assets/images/Product/Liability/Mechanical-failure.png" />
                            </div>
                            <div className="row justify-content-center text-center">
                              <h6 className="acc-menu-h1">
                                <span className="tooltipmsg">
                                  Mechanical failure
                                  <span className="tooltipmsg-text">standard depreciation, electrical disturbance and media failure or malfunction</span>
                                </span>
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="/Portal/Group_Health  /Portal/risk_liability" className="next-industry mt-1">
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

export default Cyber_Risk_Insurance;