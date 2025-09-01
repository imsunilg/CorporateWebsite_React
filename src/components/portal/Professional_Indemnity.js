import react from "react";
const Professional_Indemnity=()=>{
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
                      <a href="#" className="headerContent disabled" style={{color: '#ce6625'}}>Professional Indemnity</a>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-10">
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
                <a className="dropdown-item ICICIMenu mb-2" href="/Portal/Directors_and_Officers_Liability ">Directors and Officers Liability</a>
                <a className="dropdown-item ICICIMenu mb-2" href="/Portal/Cyber_Risk_Insurance">Cyber Risk Insurance</a>
                <a className="dropdown-item ICICIMenu mb-2 active" href="/Portal/Professional_Indemnity">Professional Indemnity</a>
                <img src="../assets/images/backdrop-arrow.svg" className="img-fluid backdrop-arrow" alt="back" />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-5 industry-info-img">
                <img src="../assets/images/professional-indemnity.png" className="img-fluid ImgWidth-f" alt="Industry-list" />
              </div>
              <div className="col-lg-7 industry-info-main">
                <div id="pharma" className="industry-info">
                  <div className="industry-info-head">
                    {/*<span class="sub-heading">Product</span>*/}
                    <h2 style={{fontSize: '42px'}} className="standardFire">Professional Indemnity</h2>
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
                            <p className="m-b-0f">The insurance that covers an organization if a client holds you responsible for a service you provided, or failed to provide, that did not have the expected or promised results. E&amp;O provides crucial protection when an error or omission on your part has caused a financial loss for your client</p>
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
                              <ol className="basic-cover-list">
                                <li>Defence cost</li>
                                <li>Settlements</li>
                                <li>Judgements</li>
                                <li>Administrative &amp; Court cost</li>
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
                        <div className="industry-accordion-body p-t-20">
                          <p className="m-b-0f">The scope and nature of cover varies with the profession, exact inclusions will appear in the wordings of the policy you purchase</p>
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
                        <div className="industry-accordion-body recommend-wrapper">
                          <div className="row m-b-20">
                            <div className="col-lg-3 col-6 industry-accordion-content text-center">
                              <img src="../assets/images/Product/Liability/Intentional-Damage.png" alt="Clinical" />
                              <h3>Intentional Damage</h3>
                            </div>
                            <div className="col-lg-3 col-6 industry-accordion-content  text-center">
                              <img src="../assets/images/Product/Liability/Illegal-Acts.png" alt="Product" />
                              <h3>Illegal Acts</h3>
                            </div>
                            <div className="col-lg-3 col-6 industry-accordion-content  text-center">
                              <img src="../assets/images/Product/Liability/General-Liabilities.png" alt="General" />
                              <h3>General Liabilities</h3>
                            </div>
                            <div className="col-lg-3 col-6 industry-accordion-content  text-center">
                              <img src="../assets/images/Product/Liability/Terrorism.png" alt="E&O" />
                              <h3>Terrorism </h3>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-3 col-6 industry-accordion-content text-center">
                              <img src="../assets/images/Product/Liability/Contractual-Liability.png" alt="Clinical" />
                              <h3>Contractual Liability</h3>
                            </div>
                            <div className="col-lg-3 col-6 industry-accordion-content  text-center">
                              <img src="../assets/images/Product/Liability/Employment-Dispute.png" alt="Product" />
                              <h3>Employment Dispute</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="/Portal/risk_liability" className="next-industry mt-1">
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

export default Professional_Indemnity;