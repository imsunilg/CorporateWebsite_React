
import react from "react";
const Directors_and_Officers_Liability=()=>{
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
                    <li className="breadcrumb-item"><a href="#" className="headerContent disabled" style={{color: 'black'}}>Liability</a></li>
                    <li className="breadcrumb-item">
                      <a href="#" className="headerContent disabled" style={{color: '#ce6625'}}>Directors and Officers Liability</a>
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
                <a className="dropdown-item ICICIMenu mb-2" href="/Portal/Comprehensive_General_Liability ">Comprehensive General Liability</a>
                <a className="dropdown-item ICICIMenu mb-2 active " href="/Portal/Directors_and_Officers_Liability">Directors and Officers Liability</a>
                <a className="dropdown-item ICICIMenu mb-2" href="/Portal/Cyber_Risk_Insurance ">Cyber Risk Insurance</a>
                <a className="dropdown-item ICICIMenu mb-2" href="/Portal/Professional_Indemnity ">Professional Indemnity</a>
                <img src="../assets/images/backdrop-arrow.svg" className="img-fluid backdrop-arrow" alt="back" />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-5 industry-info-img">
                <img src="../assets/images/d-n-o.png" className="img-fluid ImgWidth-f" alt="Industry-list" />
              </div>
              <div className="col-lg-7 industry-info-main">
                <div id="pharma" className="industry-info">
                  <div className="industry-info-head">
                    {/*<span class="sub-heading">Product</span>*/}
                    <h2 style={{fontSize: '42px'}} className="standardFire">Directors and Officers Liability</h2>
                  </div>
                  <div id="pharma-accordion">
                    <div className="industry-accordion">
                      <div className="industry-accordion-header">
                        <a data-toggle="collapse" href="#collapseOne" className=" card-link">
                          OVERVIEW
                          <img src="../assets/images/icons/arrow-up.svg" className="img-fluid plus" alt="Arrow Up" />
                          <img src="../assets/images/icons/arrow-down.svg" className="img-fluid minus" alt="Arrow Down" />
                        </a></div><a data-toggle="collapse" href="#collapseOne" className=" card-link">
                        <div id="collapseOne" className="collapse show" data-parent="#pharma-accordion">
                          <div className="testimonialSlider">
                            <div className="industry-accordion-body p-t-20">
                              <p>
                                The D&amp;O policy provides cover for the personal liability of directors and officers arising due to wrongful acts in their managerial capacity. Defence costs are also covered and are payable in advance of final judgment. This policy provides protection for claims brought against directors, officers and employees for actual or alleged breach of duty, neglect, misstatements or errors in their managerial capacity
                              </p>
                            </div>
                          </div>
                        </div>
                      </a></div><a data-toggle="collapse" href="#collapseOne" className=" card-link">
                    </a><div className="industry-accordion"><a data-toggle="collapse" href="#collapseOne" className=" card-link">
                      </a><div className="industry-accordion-header"><a data-toggle="collapse" href="#collapseOne" className=" card-link">
                        </a><a className="card-link collapsed m-l-0f" data-toggle="collapse" href="#collapseTwo">
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
                                <li>In case an organization incurs any losses due to erroneous actions or decisions taken by the directors and officers in fulfilling their duties according to the memorandum and articles of association.</li>
                                <li>In case of losses resulting from claims filed against them by any wrongful act in their capacity.</li>
                                <li>With the written consent of the insurance provider, any legal expenses resulting from the prosecution of any director or officer for any examination, inquiry, investigation, or proceedings by the concerned authority.</li>
                                <li>Any expenses incurred by the shareholder of a corporation for pursuing a claim accusing any director or officer, and organization is lawfully obliged to pay as per the ruling of a court.</li>
                                <li>It provides indemnity to the legal heirs/legal representatives of the director or officer in case the director or officer becomes insolvent.</li>
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
                              <img src="../assets/images/Product/Liability/Advancement-of-Defence-costs.png" />
                            </div>
                            <div className="row justify-content-center text-center">
                              <h6 className="acc-menu-h1">
                                <span className="tooltipmsg">
                                  Advancement of Defence costs
                                  {/*<span class="tooltipmsg-text"></span>*/}
                                </span>
                              </h6>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="row justify-content-center">
                              <img src="../assets/images/Product/Liability/Right-to-defend-cover.png" />
                            </div>
                            <div className="row justify-content-center text-center">
                              <h6 className="acc-menu-h1">
                                <span className="tooltipmsg">
                                  Right to defend cover
                                  {/*<span class="tooltipmsg-text"></span>*/}
                                </span>
                              </h6>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="row justify-content-center">
                              <img src="../assets/images/Product/Liability/Cover-for-Subsidiaries.png" />
                            </div>
                            <div className="row justify-content-center text-center">
                              <h6 className="acc-menu-h1">
                                <span className="tooltipmsg">
                                  Cover for Subsidiaries
                                  {/*<span class="tooltipmsg-text"></span>*/}
                                </span>
                              </h6>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="row justify-content-center">
                              <img src="../assets/images/Product/Liability/Outside-Directorship-coverage.png" />
                            </div>
                            <div className="row justify-content-center text-center">
                              <h6 className="acc-menu-h1">
                                <span className="tooltipmsg">
                                  Outside Directorship coverage
                                  {/*<span class="tooltipmsg-text"></span>*/}
                                </span>
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div className="row pharma-accordian m-b-20 mt-3 pr-3">
                          <div className="col-md-3">
                            <div className="row justify-content-center">
                              <img src="../assets/images/Product/Liability/Cover-for-Retired-Directors.png" />
                            </div>
                            <div className="row justify-content-center text-center">
                              <h6 className="acc-menu-h1">
                                <span className="tooltipmsg">
                                  Cover for Retired Directors
                                  {/*<span class="tooltipmsg-text"></span>*/}
                                </span>
                              </h6>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="row justify-content-center">
                              <img src="../assets/images/Product/Liability/Cover-for-Regulatory-Crisis-Response.png" />
                            </div>
                            <div className="row justify-content-center text-center">
                              <h6 className="acc-menu-h1">
                                <span className="tooltipmsg">
                                  Cover for Regulatory Crisis Response
                                  {/*<span class="tooltipmsg-text"></span>*/}
                                </span>
                              </h6>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="row justify-content-center">
                              <img src="../assets/images/Product/Liability/Cover-for-damage-to-reputation.png" />
                            </div>
                            <div className="row justify-content-center text-center">
                              <h6 className="acc-menu-h1">
                                <span className="tooltipmsg">
                                  Cover for damage to reputation
                                  {/*<span class="tooltipmsg-text"></span>*/}
                                </span>
                              </h6>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="row justify-content-center">
                              <img src="../assets/images/Product/Liability/Emergency-Costs-cover.png" />
                            </div>
                            <div className="row justify-content-center text-center">
                              <h6 className="acc-menu-h1">
                                <span className="tooltipmsg">
                                  Emergency Costs cover
                                  {/*<span class="tooltipmsg-text"></span>*/}
                                </span>
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div className="row pharma-accordian m-b-20 mt-3 pr-3">
                          <div className="col-md-3">
                            <div className="row justify-content-center">
                              <img src="../assets/images/Product/Liability/Kidnapresponse-cover.png" />
                            </div>
                            <div className="row justify-content-center text-center">
                              <h6 className="acc-menu-h1">
                                <span className="tooltipmsg">
                                  Kidnap response cover
                                  {/*<span class="tooltipmsg-text"></span>*/}
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
                              <img src="../assets/images/Product/Liability/Fines-and-penalties.png" />
                            </div>
                            <div className="row justify-content-center text-center">
                              <h6 className="acc-menu-h1">
                                <span className="tooltipmsg">
                                  Fines and penalties and claims for seepage or pollution.
                                  {/*<span class="tooltipmsg-text"></span>*/}
                                </span>
                              </h6>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="row justify-content-center">
                              <img src="../assets/images/Product/Liability/jurisdiction.png" />
                            </div>
                            <div className="row justify-content-center text-center">
                              <h6 className="acc-menu-h1">
                                <span className="tooltipmsg">
                                  Excluded territories/jurisdiction.
                                  {/*<span class="tooltipmsg-text"></span>*/}
                                </span>
                              </h6>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="row justify-content-center">
                              <img src="../assets/images/Product/Liability/Claims-for-bodily.png" />
                            </div>
                            <div className="row justify-content-center text-center">
                              <h6 className="acc-menu-h1">
                                <span className="tooltipmsg">
                                  Claims for bodily injury, property damage.
                                  {/*<span class="tooltipmsg-text"></span>*/}
                                </span>
                              </h6>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="row justify-content-center">
                              <img src="../assets/images/Product/Liability/War-nuclear-risks.png" />
                            </div>
                            <div className="row justify-content-center text-center">
                              <h6 className="acc-menu-h1">
                                <span className="tooltipmsg">
                                  War &amp; nuclear risks.
                                  {/*<span class="tooltipmsg-text"></span>*/}
                                </span>
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div className="row pharma-accordian m-b-20 mt-3 pr-3">
                          <div className="col-md-3">
                            <div className="row justify-content-center">
                              <img src="../assets/images/Product/Liability/Waiver-of-subrogation.png" />
                            </div>
                            <div className="row justify-content-center text-center">
                              <h6 className="acc-menu-h1">
                                <span className="tooltipmsg">
                                  Waiver of subrogation.
                                  {/*<span class="tooltipmsg-text"></span>*/}
                                </span>
                              </h6>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="row justify-content-center">
                              <img src="../assets/images/Product/Liability/Environmental-liability.png" />
                            </div>
                            <div className="row justify-content-center text-center">
                              <h6 className="acc-menu-h1">
                                <span className="tooltipmsg">
                                  Environmental liability &amp; ADR claims originating from US/Canada.
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
                <a href="/Portal/risk_liability " className="next-industry mt-1">
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

export default Directors_and_Officers_Liability;