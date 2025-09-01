import react from "react";
const Erection_All_Risk=()=>{
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
                      <a href="#" className="headerContent disabled" style={{color: '#ce6625'}}>Erection All Risk (EAR)</a>
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
                <a className="dropdown-item ICICIMenu mb-2" href="/Portal/Contractors_All_Risk">Contractor’s All Risk (CAR)</a>
                <a className="dropdown-item mb-2 ICICIMenu active" href="/Portal/Erection_All_Risk">Erection All Risk (EAR)</a>
                <a className="dropdown-item ICICIMenu mb-2" href="/Portal/Machinery_Breakdown ">Machinery Breakdown</a>
                <a className="dropdown-item ICICIMenu mb-2" href="/Portal/Boiler_and_Pressure_Plant_Machinery">Boiler and Pressure Plant (BPP) Machinery</a>
                <img src="../assets/images/backdrop-arrow.svg" className="img-fluid backdrop-arrow" alt="back" />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-5 industry-info-img">
                <img src="../assets/images/ear.png" className="img-fluid ImgWidth-f" alt=" industry-list" />
              </div>
              <div className="col-lg-7 industry-info-main">
                <div id="pharma" className="industry-info">
                  <div className="industry-info-head">
                    {/*<span class="sub-heading">Product</span>*/}
                    <h2 style={{fontSize: '42px'}} className="standardFire">Erection All Risk (EAR)</h2>
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
                        Large machinery and plant used in manufacturi          <div className="testimonialSlider">
                          <div className="industry-accordion-body p-t-20">
                            <p>
                              Erection All Risk (EAR) insurance provides extensive coverage for projects involving the erection or installation of various components such as plant machinery and equipment. This policy is suitable for a wide spectrum of projects, ranging from the installation of a single machine to the construction of expansive power plants.<br />
                              <br />
                              Designed to offer comprehensive protection, EAR insurance safeguards both contractors and employers against physical loss or damage that may occur during the course of construction.
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
                        <div className="industry-accordion-body m-t-15f">
                          <div className="row">
                            <div className="col-md-12">
                              <p>EAR cover begins from the time of unloading of the first consignment at the project site and terminates on completion of testing or handing over of the project to the principal employer, or the period chosen, whichever is earlier.</p>
                              <ol className="basic-cover-list">
                                <li>Storage</li>
                                <li>Erection</li>
                                <li>
                                  Testing and Commissioning of machinery &amp; plant pertaining to
                                  various Industries
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
                                <h6 className="acc-menu-h1">
                                  Fire, lightning, explosion, aircraft
                                  damage
                                </h6>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="row justify-content-center">
                                <img src="../assets/images/Riot Strike.png" />
                              </div>
                              <div className="row justify-content-center text-center">
                                <h6 className="acc-menu-h1">Riot, strike, malicious act</h6>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="row justify-content-center">
                                <img src="../assets/images/Water damage.png" />
                              </div>
                              <div className="row justify-content-center text-center">
                                <h6 className="acc-menu-h1">
                                  Flood, inundation, storm, cyclone and
                                  allied perils
                                </h6>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="row justify-content-center">
                                <img src="../assets/images/Landslide, subsidence and rockslide.png" />
                              </div>
                              <div className="row justify-content-center text-center">
                                <h6 className="acc-menu-h1">Landslide, subsidence and rockslide</h6>
                              </div>
                            </div>
                          </div>
                          <div className="row pharma-accordian m-b-20 mt-3 pr-3">
                            <div className="col-md-3">
                              <div className="row justify-content-center">
                                <img src="../assets/images/Burglary and theft.png" />
                              </div>
                              <div className="row justify-content-center text-center">
                                <h6 className="acc-menu-h1">Burglary and theft</h6>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="row justify-content-center">
                                <img src="../assets/images/Faults in erection.png" />
                              </div>
                              <div className="row justify-content-center text-center">
                                <h6 className="acc-menu-h1">Faults in erection</h6>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="row justify-content-center">
                                <img src="../assets/images/Human errors.png" />
                              </div>
                              <div className="row justify-content-center text-center">
                                <h6 className="acc-menu-h1">
                                  Human errors, negligence, lack of skill
                                </h6>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="row justify-content-center">
                                <img src="../assets/images/Short circuiting,.png" />
                              </div>
                              <div className="row justify-content-center text-center">
                                <h6 className="acc-menu-h1">
                                  Short circuiting, arcing, excess voltage
                                </h6>
                              </div>
                            </div>
                          </div>
                          <div className="row pharma-accordian m-b-20 mt-3 pr-3">
                            <div className="col-md-3">
                              <div className="row justify-content-center">
                                <img src="../assets/images/Collapse, damage.png" />
                              </div>
                              <div className="row justify-content-center text-center">
                                <h6 className="acc-menu-h1">
                                  Collapse, damage due to foreign objects,
                                  impact damage
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
                                <img src="../assets/images/War invasion.png" />
                              </div>
                              <div className="row justify-content-center text-center">
                                <h6 className="acc-menu-h1">War, Invasion</h6>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="row justify-content-center">
                                <img src="../assets/images/Nuclear Reaction.png" />
                              </div>
                              <div className="row justify-content-center text-center">
                                <h6 className="acc-menu-h1">
                                  Nuclear Reaction Nuclear Radiation or
                                  Radioactive Contamination
                                </h6>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="row justify-content-center">
                                <img src="../assets/images/Product/Engineering/insured-contribution-deductible.png" />
                              </div>
                              <div className="row justify-content-center text-center">
                                <h6 className="acc-menu-h1">Insured’s Contribution – Deductible</h6>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="row justify-content-center">
                                <img src="../assets/images/Wilful Act or Wilful Negligence.png" />
                              </div>
                              <div className="row justify-content-center text-center">
                                <h6 className="acc-menu-h1">
                                  Wilful Act or Wilful Negligence of the
                                  Insured
                                </h6>
                              </div>
                            </div>
                          </div>
                          <div className="row pharma-accordian m-b-20 mt-3 pr-3">
                            <div className="col-md-3">
                              <div className="row justify-content-center">
                                <img src="../assets/images/Defective Material.png" />
                              </div>
                              <div className="row justify-content-center text-center">
                                <h6 className="acc-menu-h1">
                                  Defective Material or Bad workmanship
                                </h6>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="row justify-content-center">
                                <img src="../assets/images/Product/Engineering/wear-tear-corrosion-oxidation.png" />
                              </div>
                              <div className="row justify-content-center text-center">
                                <h6 className="acc-menu-h1">
                                  Wear Tear Corrosion Oxidation Deterioration
                                </h6>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="row justify-content-center">
                                <img src="../assets/images/Product/Engineering/maintenance-making-good.png" />
                              </div>
                              <div className="row justify-content-center text-center">
                                <h6 className="acc-menu-h1">
                                  Normal Maintenance or Making Good
                                </h6>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="row justify-content-center">
                                <img src="../assets/images/Inventory Losses.png" />
                              </div>
                              <div className="row justify-content-center text-center">
                                <h6 className="acc-menu-h1">
                                  Disappearance or Shortage (Inventory
                                  Losses)
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

export default Erection_All_Risk;