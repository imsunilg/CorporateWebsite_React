import react from "react";
const Group_Health=()=>{
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
                    <li className="breadcrumb-item"><a href="#" className="headerContent disabled" style={{color: 'black'}}>Health</a></li>
                    <li className="breadcrumb-item">
                      <a href="#" className="headerContent disabled" style={{color: '#ce6625'}}>Group Health</a>
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
                <a className="dropdown-item ICICIMenu mb-2 active" href="/Portal/Group_Health">Group Health</a>
                <a className="dropdown-item ICICIMenu mb-2 " href="/Portal/Group_Personal_Accident ">Group Personal Accident</a>
                <img src="../assets/images/backdrop-arrow.svg" className="img-fluid backdrop-arrow" alt="back" />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-5 industry-info-img">
                <img src="../assets/images/group-health.png" className="img-fluid ImgWidth-f" alt="Industry-list" />
              </div>
              <div className="col-lg-7 industry-info-main">
                <div id="pharma" className="industry-info">
                  <div className="industry-info-head">
                    {/*<span class="sub-heading">Product</span>*/}
                    <h2 style={{fontSize: '42px'}} className="standardFire">Group Health</h2>
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
                        <div className="testimonialSlider">
                          <div className="industry-accordion-body p-t-20">
                            <p>
                              Group health insurance cover is offered to the employees of an
                              organization, which can also be extended to cover their family. The
                              policy covers indemnification of medical expenses incurred by the
                              insured during hospitalization &amp; any illness or injury suffered in
                              India. Pre &amp; Post hospitalization medical expenses can be covered
                              upto 30 days and 60 days and covers age from 91 days to 80 year
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="industry-accordion">
                      <div className="industry-accordion-header">
                        <a className="collapsed card-link" data-toggle="collapse" href="#collapseTwo">
                          INCLUSIONS
                          <img src="../assets/images/icons/arrow-up.svg" className="img-fluid plus" alt="Arrow Up" />
                          <img src="../assets/images/icons/arrow-down.svg" className="img-fluid minus" alt="Arrow Down" />
                        </a>
                      </div>
                      <div id="collapseTwo" className="collapse" data-parent="#pharma-accordion">
                        <div className="industry-accordion-body recommend-wrapper m-t-15f">
                          <div className="row pharma-accordian m-b-20 mt-3 pr-3">
                            <div className="col-md-3">
                              <div className="row justify-content-center">
                                <img src="../assets/images/medical-expences.png" />
                              </div>
                              <div className="row justify-content-center text-center">
                                <h6 className="acc-menu-h1">
                                  <span className="tooltipmsg">
                                    Hospital expenses
                                    <span className="tooltipmsg-text">
                                      Expenses incurred due to hospitalization like medicines, oxygen, blood, OT charges, medical tests and diagnosis, chemotherapy, radiotherapy, organ transplantation, etc.
                                    </span>
                                  </span>
                                </h6>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="row justify-content-center">
                                <img src="../assets/images/Hospital-accommodation-expenses.png" />
                              </div>
                              <div className="row justify-content-center text-center">
                                <h6 className="acc-menu-h1">
                                  <span className="tooltipmsg">
                                    Hospital accommodation expenses
                                    <span className="tooltipmsg-text">
                                      Expenditures towards ICUs are either addressed through cashless hospitalisation feature or are reimbursed by the company.
                                    </span>
                                  </span>
                                </h6>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="row justify-content-center">
                                <img src="../assets/images/Day-care-hospitalization.png" />
                              </div>
                              <div className="row justify-content-center text-center">
                                <h6 className="acc-menu-h1">
                                  <span className="tooltipmsg">
                                    Day-care hospitalization
                                    <span className="tooltipmsg-text">
                                      Expenditures towards tech-driven medical treatments that do not involve 24-hour hospitalization.
                                    </span>
                                  </span>
                                </h6>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="row justify-content-center">
                                <img src="../assets/images/Charges-for-medical-experts.png" />
                              </div>
                              <div className="row justify-content-center text-center">
                                <h6 className="acc-menu-h1">
                                  <span className="tooltipmsg">
                                    Charges for medical experts
                                    <span className="tooltipmsg-text">
                                      The fees for medical professionals involved during hospitalization like doctor, nurse, etc. are also provided by mediclaim policies.
                                    </span>
                                  </span>
                                </h6>
                              </div>
                            </div>
                          </div>
                          <div className="row pharma-accordian m-b-20 mt-3 pr-3">
                            <div className="col-md-3">
                              <div className="row justify-content-center">
                                <img src="../assets/images/Hospital-lodging-expenses.png" />
                              </div>
                              <div className="row justify-content-center text-center">
                                <h6 className="acc-menu-h1">
                                  <span className="tooltipmsg">
                                    Hospital lodging expenses
                                    <span className="tooltipmsg-text">
                                      Expenditures towards ICUs are both addressed via cashless hospitalisation feature or are reimbursed via the insurer
                                    </span>
                                  </span>
                                </h6>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="row justify-content-center">
                                <img src="../assets/images/Pre and post-hospitalization expenses.png" />
                              </div>
                              <div className="row justify-content-center text-center">
                                <h6 className="acc-menu-h1">
                                  <span className="tooltipmsg">
                                    Pre and post-hospitalization expenses
                                    <span className="tooltipmsg-text">
                                      Expenses incurred for up to 30-60 days before and till 60-120 days after hospitalization. It may also include medical assistance for emergency services like ambulance, etc.
                                    </span>
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
                        <div className="row pharma-accordian m-b-20 mt-3 pr-3">
                          <div className="col-md-3">
                            <div className="row justify-content-center">
                              <img src="../assets/images/Product/Health/first-year-exclusion.png" />
                            </div>
                            <div className="row justify-content-center text-center">
                              <h6 className="acc-menu-h1">
                                <span className="tooltipmsg">
                                  First Year Exclusion
                                  <span className="tooltipmsg-text">The expenses on treatment of following diseases, or illness and related disorders during the first year of operation of this policy. </span>
                                </span>
                              </h6>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="row justify-content-center">
                              <img src="../assets/images/Product/Health/30-days-waiting-period.png" />
                            </div>
                            <div className="row justify-content-center text-center">
                              <h6 className="acc-menu-h1">
                                <span className="tooltipmsg">
                                  30 days waiting period
                                  <span className="tooltipmsg-text">Expenses related to the treatment of any illness within 30 days from the first policy commencement date shall be excluded except claims arising due to an accident</span>
                                </span>
                              </h6>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="row justify-content-center">
                              <img src="../assets/images/Product/Health/plastic-surgery.png" />
                            </div>
                            <div className="row justify-content-center text-center">
                              <h6 className="acc-menu-h1">
                                <span className="tooltipmsg">
                                  Plastic Surgery
                                </span>
                              </h6>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="row justify-content-center">
                              <img src="../assets/images/Product/Health/dental-treatment.png" />
                            </div>
                            <div className="row justify-content-center text-center">
                              <h6 className="acc-menu-h1">
                                <span className="tooltipmsg">
                                  Dental Treatment
                                  <span className="tooltipmsg-text">Dental Treatment Ÿ Convalescence/ General Debility </span>
                                </span>
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div className="row pharma-accordian m-b-20 mt-3 pr-3">
                          <div className="col-md-3">
                            <div className="row justify-content-center">
                              <img src="../assets/images/Product/Health/intentional-self-injury.png" />
                            </div>
                            <div className="row justify-content-center text-center">
                              <h6 className="acc-menu-h1">
                                <span className="tooltipmsg">
                                  Intentional self-injury
                                </span>
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="/Portal/risk_Health " className="next-industry mt-1">
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
        {/* end section */}
        {/* end-section */}
      </div>
)

};

export default Group_Health;