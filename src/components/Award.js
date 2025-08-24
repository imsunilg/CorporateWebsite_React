import React from "react";

 import Navbarportal from "./common/Navbar_Portal";
 import Footerportal from "./common/Footer_Portal";
const Award = () => {
    return (

      <div>
        
        {/* <Navbarportal/> */}
        <div className="container-fluid header-container">
          <div className="container">
            <div className="row pt-3">
              <div className="col-sm-12">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <img src="../assets/images/home-icon.jpg" className="Homeicon mr-2" alt="home-icon" />\<a href="#" className="headerContent ml-2 disabled" style={{color: '#ec6625'}}>Awards</a>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-10">
                <img src="../assets/images/awards-banner.jpg" alt="vas-solution-banner" className="NewProject mainbanner" />
              </div>
            </div>
            <h1 style={{fontWeight: 'bold'}}>India Risk Management Awards</h1>
            <p>
              ICICI Lombard General Insurance Company Ltd., India's largest private sector general insurance company and CNBC TV-18, India's leading business channel announced the winners of the 10th edition of 'ICICI Lombard-CNBC TV18 India Risk Management Awards 2024'.  These awards recognize companies that have developed best in class risk management practices and capabilities across business categories. The selection process consists of analysis of company data, systems and frameworks of the organization.
            </p>
          </div>
        </div>
        <section className="claim-section-main p-t-35f p-b-0f">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h5 className="small-org-txt">Recognizing Excellence Across the Spectrum</h5>
                <h2 className="black-txt m-b-20 awards-heading">Our Award Categories</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12" id="sim1">
                <p>To recognize and promote excellence in this field of risk management, we proudly present our prestigious Risk Management Awards across various domains. These awards aim to celebrate organizations  demonstrating exemplary practices, innovative strategies, and exceptional outcomes in managing and mitigating risks.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="container-fluid tabsec">
          <div className="row position-relative">
            <div className="col-md-12 bottom-bdr" />
            <div className="container">
              <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist" style={{width: '60%'}}>
                <li className="nav-item">
                  <a className="nav-link active" id="general-tab" data-toggle="tab" href="#general" role="tab" aria-controls="general" aria-selected="true">Large-CAP</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="cover-tab" data-toggle="tab" href="#cover" role="tab" aria-controls="cover" aria-selected="false">Mid-CAP</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="cover-tab" data-toggle="tab" href="#cover1" role="tab" aria-controls="cover" aria-selected="false">Small-CAP &amp; Start-UP</a>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="general" role="tabpanel" aria-labelledby="general-tab">
                  <div className="row">
                    <div className="col-md-12 p-t-25">
                      <div className="row text-center position-relative">
                        <div className="col-md-12">
                          <h3 className="font-28 font-bold text-left">Below are the awards presented in the Large CAP category</h3>
                        </div>
                      </div>
                      <div className="awards-container m-t-20 awards-mob">
                        <div className="column awards-bg-10">
                          <span><img className="m-b-18" src="../assets/images/Web-logos/Hindalco.png" /></span>
                          <div className="box-gray-bg">
                            <h3>Masters of Risk Private Company</h3>
                          </div>
                        </div>
                        <div className="column awards-bg-22">
                          <span><img className="m-b-18" src="../assets/images/Web-logos/BPCL.png" /></span>
                          <div className="box-gray-bg">
                            <h3>Masters of Risk PSU</h3>
                          </div>
                        </div>
                        <div className="column awards-bg-11">
                          <span><img className="m-b-18" src="../assets/images/Web-logos/mahindra.png" /></span>
                          <div className="box-gray-bg">
                            <h3>Masters of Risk Automotive – OEM</h3>
                          </div>
                        </div>
                      </div>
                      <div className="awards-container m-t-20 awards-mob">
                        <div className="column awards-bg-12">
                          <span><img className="m-b-18" src="../assets/images/Web-logos/apollo-tyres.png" /></span>
                          <div className="box-gray-bg">
                            <h3>Masters of Risk Auto – Ancillary</h3>
                          </div>
                        </div>
                        <div className="column awards-bg-13">
                          <span><img className="m-b-18" src="../assets/images/Web-logos/waaree.png" /></span>
                          <div className="box-gray-bg">
                            <h3>Masters of Risk Capital projects &amp; infrastructure</h3>
                          </div>
                        </div>
                        <div className="column awards-bg-14">
                          <span><img className="m-b-18" src="../assets/images/Web-logos/jio.png" /></span>
                          <div className="box-gray-bg">
                            <h3>Masters of Risk Telecom</h3>
                          </div>
                        </div>
                      </div>
                      <div className="awards-container m-t-20 awards-mob">
                        <div className="column awards-bg-15">
                          <span><img className="m-b-18" src="../assets/images/Web-logos/axis-bank.png" /></span>
                          <div className="box-gray-bg">
                            <h3>Masters of Risk Banking</h3>
                          </div>
                        </div>
                        <div className="column awards-bg-23">
                          <span><img className="m-b-18" src="../assets/images/Web-logos/tata-capital.png" /></span>
                          <div className="box-gray-bg">
                            <h3>Masters of Risk NBFC</h3>
                          </div>
                        </div>
                        <div className="column awards-bg-16">
                          <span><img className="m-b-18" src="../assets/images/Web-logos/adani.png" /></span>
                          <div className="box-gray-bg">
                            <h3>Masters of Risk Logistics</h3>
                          </div>
                        </div>
                      </div>
                      <div className="awards-container m-t-20 awards-mob">
                        <div className="column awards-bg-17">
                          <span><img className="m-b-18" src="../assets/images/Web-logos/eicher.png" /></span>
                          <div className="box-gray-bg">
                            <h3>Fraud prevention and Ethics Management</h3>
                          </div>
                        </div>
                        <div className="column awards-bg-18">
                          <span><img className="m-b-18" src="../assets/images/Web-logos/titan.png" /></span>
                          <div className="box-gray-bg">
                            <h3>Regulatory Compliance Management</h3>
                          </div>
                        </div>
                        <div className="column awards-bg-19">
                          <span><img className="m-b-18" src="../assets/images/Web-logos/persistent.png" /></span>
                          <div className="box-gray-bg">
                            <h3>Risk Governance</h3>
                          </div>
                        </div>
                      </div>
                      <div className="awards-container m-t-20 awards-mob">
                        <div className="column awards-bg-20">
                          <span><img className="m-b-18" src="../assets/images/Web-logos/nestle.png" /></span>
                          <div className="box-gray-bg">
                            <h3>Supply Chain Risk Management</h3>
                          </div>
                        </div>
                        <div className="column">
                          <span />
                        </div>
                        <div className="column">
                          <span />
                        </div>
                        {/* <div class="column awards-bg-1">
                                  <span><img class="m-b-18" src="../assets/images/tcs-logo.png"></span>
                                  <div class="box-gray-bg">

                                    <h3>Private Sector</h3>
                                  </div>
                                </div>
                                <div class="column awards-bg-2">
                                  <span><img class="m-b-18" src="../assets/images/ONGC-logo.png"></span>
                                  <div class="box-gray-bg">

                                    <h3>PSU Sector</h3>
                                  </div>
                                </div> */}
                      </div>
                      {/* <div class="awards-container m-t-20 awards-mob">

                              <div class="column awards-bg-3">
                                <span><img class="m-b-18" src="../assets/images/godreg-logo.png"></span>
                                <div class="box-gray-bg">

                                  <h3>Agriculture Sector</h3>
                                </div>
                              </div>
                              <div class="column awards-bg-4">
                                <span><img class="m-b-18" src="../assets/images/CEAT-logo.png"></span>
                                <div class="box-gray-bg">

                                  <h3>Auto-Ancillary Sector</h3>
                                </div>
                              </div>
                              <div class="column awards-bg-9">
                                <span><img class="m-b-18" src="../assets/images/Web-logos/VE Commercial vehicles.png"></span>
                                <div class="box-gray-bg">

                                  <h3>Auto-OEM Sector</h3>
                                </div>
                              </div>
                            </div>
                            <div class="awards-container m-t-20 awards-mob">

                              <div class="column awards-bg-6">
                                <span><img class="m-b-18" src="../assets/images/yes-bank-logo.png"></span>
                                <div class="box-gray-bg">

                                  <h3>Banking Sector</h3>
                                </div>
                              </div>
                              <div class="column awards-bg-7">
                                <span><img class="m-b-18" src="../assets/images/prism-logo.png"></span>
                                <div class="box-gray-bg">

                                  <h3>Capital Projects & Infrastructure Sector</h3>
                                </div>
                              </div>
                              <div class="column awards-bg-8">
                                <span><img class="m-b-18" src="../assets/images/mondelez.png"></span>
                                <div class="box-gray-bg">

                                  <h3>FMCG Sector</h3>
                                </div>
                              </div>
                            </div>
                            <div class="awards-container m-t-20 awards-mob">

                              <div class="column awards-bg-9">
                                <span><img class="m-b-18" src="../assets/images/dr-reddy-logo.png"></span>
                                <div class="box-gray-bg">

                                  <h3>Healthcare & Pharma Sector</h3>
                                </div>
                              </div>
                              <div class="column awards-bg-9">
                                <span><img class="m-b-18" src="../assets/images/Web-logos/LTI Mindtree.png"></span>
                                <div class="box-gray-bg">

                                  <h3>IT-ITeS Sector</h3>
                                </div>
                              </div>
                              <div class="column awards-bg-9">
                                <span><img class="m-b-18" src="../assets/images/Web-logos/tata steel.png"></span>
                                <div class="box-gray-bg">

                                  <h3>Metals & Mining Sector</h3>
                                </div>
                              </div>
                            </div>
                            <div class="awards-container m-t-20 awards-mob">

                              <div class="column awards-bg-9">
                                <span><img class="m-b-18" src="../assets/images/Web-logos/HZL.png"></span>
                                <div class="box-gray-bg">

                                  <h3>Special Jury Citation <br>Metals & Mining Sector</h3>
                                </div>
                              </div>
                              <div class="column awards-bg-9">
                                <span><img class="m-b-18" src="../assets/images/Web-logos/tata power.png"></span>
                                <div class="box-gray-bg">

                                  <h3>Power Sector</h3>
                                </div>
                              </div>
                              <div class="column awards-bg-9">
                                <span><img class="m-b-18" src="../assets/images/Web-logos/Indus towers.png"></span>
                                <div class="box-gray-bg">

                                  <h3>Telecom Sector</h3>
                                </div>
                              </div>
                            </div>
                            <div class="awards-container m-t-20 awards-mob">

                              <div class="column awards-bg-1  ">
                                <span><img class="m-b-18" src="../assets/images/tcs-logo.png"></span>
                                <div class="box-gray-bg">

                                  <h3>Business Continuity Management</h3>
                                </div>
                              </div>
                              <div class="column awards-bg-9">
                                <span><img class="m-b-18" src="../assets/images/Web-logos/Marico.png"></span>
                                <div class="box-gray-bg">

                                  <h3>Regulatory Compliance</h3>
                                </div>
                              </div>
                              <div class="column awards-bg-9">
                                <span><img class="m-b-18" src="../assets/images/Web-logos/VE Commercial vehicles.png"></span>
                                <div class="box-gray-bg">

                                  <h3>Fraud prevention & ethics management</h3>
                                </div>
                              </div>
                            </div>
                            <div class="awards-container m-t-20 awards-mob">

                              <div class="column awards-bg-9">
                                <span><img class="m-b-18" src="../assets/images/Web-logos/VE Commercial vehicles.png"></span>
                                <div class="box-gray-bg">

                                  <h3>Risk Governance</h3>
                                </div>
                              </div>
                              <div class="column awards-bg-9">
                                <span><img class="m-b-18" src="../assets/images/Web-logos/HUL.png"></span>
                                <div class="box-gray-bg">

                                  <h3>Supply chain risk management</h3>
                                </div>
                              </div>
                              <div class="column awards-bg-9">
                                <span><img class="m-b-18" src="../assets/images/Web-logos/Marico.png"></span>
                                <div class="box-gray-bg">

                                  <h3>Brand & social media risk management</h3>
                                </div>
                              </div>
                            </div>
                            <div class="awards-container m-t-20 awards-mob">

                              <div class="column awards-bg-9">
                                <span><img class="m-b-18" src="../assets/images/Web-logos/HZL.png"></span>
                                <div class="box-gray-bg">

                                  <h3>Environmental Social Governance</h3>
                                </div>
                              </div>
                              <div class="column awards-bg-9">
                                <span><img class="m-b-18" src="../assets/images/Web-logos/IHCL.png"></span>
                                <div class="box-gray-bg">

                                  <h3>Business Model Adaptability</h3>
                                </div>
                              </div>
                              <div class="column awards-bg-9">
                                <span><img class="m-b-18" src="../assets/images/Web-logos/AU Bank.png"></span>
                                <div class="box-gray-bg">

                                  <h3>Risk Technology</h3>
                                </div>
                              </div>
                            </div> */}
                      {/* <div class="awards-container m-t-20 awards-mob">

                              <div class="column awards-bg-1">
                                <span><img class="m-b-18" src="../assets/images/tcs-logo.png"></span>
                                <div class="box-gray-bg">
                                  <h3>Cyber Security</h3>
                                </div>
                              </div>
                            </div> */}
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade show" id="cover" role="tabpanel" aria-labelledby="cover-tab">
                  <div className="row">
                    <div className="col-md-12 p-t-25">
                      <div className="row text-center position-relative">
                        <div className="col-md-12">
                          <h3 className="font-28 font-bold text-left">Below are the awards presented in the Mid CAP category</h3>
                        </div>
                      </div>
                      <div className="awards-container m-t-20 awards-mob">
                        <div className="column awards-bg-24">
                          <span><img className="m-b-18" src="../assets/images/Web-logos/Tega.png" /></span>
                          <div className="box-gray-bg">
                            <h3>Masters of Risk Private Company</h3>
                          </div>
                        </div>
                        <div className="column awards-bg-25">
                          <span><img className="m-b-18" src="../assets/images/Web-logos/Victoria-Auto.png" /></span>
                          <div className="box-gray-bg">
                            <h3>Masters of Risk Auto – Ancillary</h3>
                          </div>
                        </div>
                        <div className="column awards-bg-26">
                          <span><img className="m-b-18" src="../assets/images/Web-logos/Indinfravit.png" /></span>
                          <div className="box-gray-bg">
                            <h3>Masters of Risk Capital Projects &amp; Infrastructure</h3>
                          </div>
                        </div>
                      </div>
                      <div className="awards-container m-t-20 awards-mob">
                        <div className="column awards-bg-27">
                          <span><img className="m-b-18" src="../assets/images/Web-logos/Happiest-Minds.png" /></span>
                          <div className="box-gray-bg">
                            <h3>Masters of Risk IT – ITeS</h3>
                          </div>
                        </div>
                        <div className="column awards-bg-28">
                          <span><img className="m-b-18" src="../assets/images/Web-logos/Balaji-Amines.png" /></span>
                          <div className="box-gray-bg">
                            <h3>Masters of Risk Industrial Chemical Manufacturing</h3>
                          </div>
                        </div>
                        <div className="column awards-bg-29">
                          <span><img className="m-b-18" src="../assets/images/Web-logos/Mindspace.png" /></span>
                          <div className="box-gray-bg">
                            <h3>Masters of Risk Real Estate</h3>
                          </div>
                        </div>
                      </div>
                      <div className="awards-container m-t-20 awards-mob">
                        <div className="column awards-bg-30">
                          <span><img className="m-b-18" src="../assets/images/Web-logos/Allcargo-Gati.png" /></span>
                          <div className="box-gray-bg">
                            <h3>Masters of Risk Logistics</h3>
                          </div>
                        </div>
                        <div className="column awards-bg-31">
                          <span><img className="m-b-18" src="../assets/images/Web-logos/Thomas-Cook.png" /></span>
                          <div className="box-gray-bg">
                            <h3>Masters of Risk Travel &amp; Hospitality</h3>
                          </div>
                        </div>
                        <div className="column awards-bg-32">
                          <span><img className="m-b-18" src="../assets/images/Web-logos/NSE-Clearing.png" /></span>
                          <div className="box-gray-bg">
                            <h3>Best Risk Practice</h3>
                          </div>
                        </div>
                      </div>
                      <div className="awards-container m-t-20 awards-mob">
                        <div className="column awards-bg-33">
                          <span><img className="m-b-18" src="../assets/images/Web-logos/FCL-1.png" /></span>
                          <div className="box-gray-bg">
                            <h3>Business Continuity Management</h3>
                          </div>
                        </div>
                        <div className="column awards-bg-34">
                          <span><img className="m-b-18" src="../assets/images/Web-logos/airtel.png" /></span>
                          <div className="box-gray-bg">
                            <h3>Fraud prevention and Ethics Management</h3>
                          </div>
                        </div>
                        <div className="column awards-bg-35">
                          <span><img className="m-b-18" src="../assets/images/Web-logos/nocil.png" /></span>
                          <div className="box-gray-bg">
                            <h3>Regulatory Compliance Management</h3>
                          </div>
                        </div>
                      </div>
                      <div className="awards-container m-t-20 awards-mob">
                        <div className="column awards-bg-33">
                          <span><img className="m-b-18" src="../assets/images/Web-logos/gati-1.png" /></span>
                          <div className="box-gray-bg">
                            <h3>Environmental, Social, and Governance (ESG)</h3>
                          </div>
                        </div>
                        <div className="column">
                          <span />
                        </div>
                        <div className="column">
                          <span />
                        </div>
                      </div>
                      {/* <div class="awards-container m-t-20 awards-mob">
                              <div class="column awards-bg-36">
                                <span><img class="m-b-18" src="../assets/images/Web-logos/Avendus.png"></span>
                                <div class="box-gray-bg">

                                  <h3>Risk Governance</h3>
                                </div>
                              </div>
                              <div class="column awards-bg-4">
                                <span><img class="m-b-18" src="../assets/images/Web-logos/Agrotech.png"></span>
                                <div class="box-gray-bg">

                                  <h3>FMCG Sector</h3>
                                </div>
                              </div>
                              <div class="column awards-bg-3">
                                <span><img class="m-b-18" src="../assets/images/Web-logos/tata consultant engihesrs.png"></span>
                                <div class="box-gray-bg">

                                  <h3>Real estate & Infrastructure sector</h3>
                                </div>
                              </div>
                            </div>
                            <div class="awards-container m-t-20 awards-mob">
                              <div class="column awards-bg-4">
                                <span><img class="m-b-18" src="../assets/images/Web-logos/Gati.png"></span>
                                <div class="box-gray-bg">

                                  <h3>Environmental Social Governance</h3>
                                </div>
                              </div>
                              <div class="column awards-bg-5">
                                <span><img class="m-b-18" src="../assets/images/Web-logos/NSE.png"></span>
                                <div class="box-gray-bg">

                                  <h3>Risk governance</h3>
                                </div>
                              </div>
                              <div class="column awards-bg-6">
                                <span><img class="m-b-18" src="../assets/images/Web-logos/BSE.png"></span>
                                <div class="box-gray-bg">

                                  <h3>Cyber Security</h3>
                                </div>
                              </div>
                            </div>
                            <div class="awards-container m-t-20 awards-mob">
                              <div class="column awards-bg-7">
                                <span><img class="m-b-18" src="../assets/images/Web-logos/tata reality.png"></span>
                                <div class="box-gray-bg">

                                  <h3>Regulatory Compliance</h3>
                                </div>
                              </div>
                              <div class="column awards-bg-4">
                                <span><img class="m-b-18" src="../assets/images/Web-logos/Shriram.png"></span>
                                <div class="box-gray-bg">

                                  <h3>Fraud prevention & Ethics Management </h3>
                                </div>
                              </div>
                              <div class="column awards-bg-9">
                                <span><img class="m-b-18" src="../assets/images/Web-logos/Gati.png"></span>
                                <div class="box-gray-bg">

                                  <h3>Business continuity management</h3>
                                </div>
                              </div>
                            </div>
                            <div class="awards-container m-t-20 awards-mob0">
                              <div class="column awards-bg-7">
                                <span><img class="m-b-18" src="../assets/images/Web-logos/NSE.png"></span>
                                <div class="box-gray-bg">

                                  <h3>Risk Technology</h3>
                                </div>
                              </div>
                              <div class="column awards-bg-7">
                                <span><img class="m-b-18" src="../assets/images/Web-logos/Avendus.png"></span>
                                <div class="box-gray-bg">

                                  <h3>Risk Governance</h3>
                                </div>
                              </div>
                              <div class="column awards-bg-7">
                                <span><img class="m-b-18" src="../assets/images/Web-logos/gati.png"></span>
                                <div class="box-gray-bg">

                                  <h3>Environmental, Social, and Governance (ESG)</h3>
                                </div>
                              </div>
                            </div> */}
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade show" id="cover1" role="tabpanel" aria-labelledby="cover-tab">
                  <div className="row">
                    <div className="col-md-12 p-t-25">
                      <div className="row text-center position-relative">
                        <div className="col-md-12">
                          <h3 className="font-28 font-bold text-left">Below are the awards presented in the Small CAP &amp; Start UP category</h3>
                        </div>
                      </div>
                      <div className="awards-container m-t-20 awards-mob">
                        <div className="column awards-bg-37">
                          <span><img className="m-b-18" src="../assets/images/Web-logos/NBHC.png" /></span>
                          <div className="box-gray-bg">
                            <h3>Agriculture</h3>
                          </div>
                        </div>
                        <div className="column awards-bg-38">
                          <span><img className="m-b-18" src="../assets/images/Web-logos/Sirca.png" /></span>
                          <div className="box-gray-bg">
                            <h3>Manufacturing</h3>
                          </div>
                        </div>
                        <div className="column awards-bg-39">
                          <span><img className="m-b-18" src="../assets/images/Web-logos/Lumina-Datamatics.png" /></span>
                          <div className="box-gray-bg">
                            <h3>Services</h3>
                          </div>
                        </div>
                      </div>
                      {/* <div class="awards-container m-t-20 awards-mob">
                              <div class="column awards-bg-1">
                                <span><img class="m-b-18" src="../assets/images/Web-logos/Seth and Sons.png"></span>
                                <div class="box-gray-bg">

                                  <h3>Private Sector</h3>
                                </div>
                              </div>
                              <div class="column awards-bg-2">
                                <span><img class="m-b-18" src="../assets/images/Web-logos/Matrimony.png"></span>
                                <div class="box-gray-bg">

                                  <h3>Service Sector</h3>
                                </div>
                              </div>
                              <div class="column awards-bg-3">
                                <span><img class="m-b-18" src="../assets/images/Web-logos/vaibhav global.png"></span>
                                <div class="box-gray-bg">

                                  <h3>Manufacturing Sector</h3>
                                </div>
                              </div>
                            </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end */}
        {/* end section */}
        {/* end-section */}
        
        {/* <Footerportal/> */}
      </div>
   );
};

export default Award;