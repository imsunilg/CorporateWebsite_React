
import react from "react";
import { Link } from "react-router-dom";
const ICICI_Bharat_Griha_Raksha_Policy=()=>{
return(

      <div>
        <div className="container-fluid header-container">
          <div className="container">
            <div className="row pt-3">
              <div className="col-sm-12">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <img src="../assets/images/home-icon.jpg" className="Homeicon mr-2" alt="home-icon" />
                    </li>
                    <li className="breadcrumb-item">
                      <i className="fa-solid fa-house mr-2" style={{color: 'rgb(212, 197, 197)', display: 'none'}} />
                      <span className="headerContent disabled" style={{color: 'black'}}>Products</span>
                    </li>
                    <li className="breadcrumb-item">
                      <span className="headerContent disabled" style={{color: 'black'}}>Property</span>
                    </li>
                    <li className="breadcrumb-item">
                      <span className="headerContent disabled" style={{color: '#ce6625'}}>
                        ICICI Bharat
                        Griha Raksha Policy
                      </span>
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
                <Link className="dropdown-item ICICIMenu mb-2 " to="/standard-fire">Standard Fire &amp; Special perils Policy</Link>
                <Link className="dropdown-item ICICIMenu mb-2 " to="/industrial-risk">industrial all risk policy</Link>
                <Link className="dropdown-item ICICIMenu mb-2" to="/mega-risk">Mega Risk Policy</Link>
                <Link className="dropdown-item ICICIMenu mb-2" to="/sookshma-udyam">ICICI Bharat Sookshma Udyam Surakha Policy</Link>
                <Link className="dropdown-item ICICIMenu mb-2 " to="/laghu-udyam">ICICI Bharat Laghu Udyam Suraksha Policy</Link>
                <Link className="dropdown-item ICICIMenu mb-2 active" to="/griha-raksha">ICICI Bharat Griha Raksha Policy</Link>
                <img src="../assets/images/backdrop-arrow.svg" className="img-fluid backdrop-arrow" alt="back" />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-5 industry-info-img">
                <img src="../assets/images/ICICI-Bharat-Griha-Raksha-Policy.png" className="img-fluid ImgWidth" alt="Industry-list" />
              </div>
              <div className="col-lg-7 industry-info-main">
                <div id="pharma" className="industry-info">
                  <div className="industry-info-head">
                    {/*<span class="sub-heading">Product</span>*/}
                    <h2 style={{fontSize: '42px'}} className="standardFire pt-4">ICICI Bharat Griha Raksha Policy</h2>
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
                            <p className="m-b-0f">
                              ICICI Bharat Griha Raksha Policy coves for your
                              dwelling (housing societies), against fire and natural calamities
                              like storm, floods, earthquake, etc.
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
                        <div className="industry-accordion-header recommend-wrapper m-t-15f">
                          <div className="row">
                            <div className="col-md-12">
                              <ol className="basic-cover-list">
                                <li>
                                  Griha Raksha Policy also covers contents, articles or things which
                                  belong to your home. Contents like television, refrigerator,
                                  furniture and other household articles are covered
                                </li>
                                <li>Optional covers which are available include – cover for valuable contents and personal accident cover for insured and spouse</li>
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
                        <div className="industry-accordion-body recommend-wrapper">
                          <div className="row m-b-20">
                            <div className="col-lg-3 col-6 industry-accordion-content text-center">
                              <img src="../assets/images/Product/Property/fire-inclusion.png" alt="Clinical" />
                              <h3>Fire</h3>
                            </div>
                            <div className="col-lg-3 col-6 industry-accordion-content  text-center">
                              <img src="../assets/images/Product/Property/Lightning.png" alt="Product" />
                              <h3>Lightning</h3>
                            </div>
                            <div className="col-lg-3 col-6 industry-accordion-content  text-center">
                              <img src="../assets/images/Product/Property/storm-cyclone.png" alt="General" />
                              <h3>storm, cyclone, typhoon</h3>
                            </div>
                            <div className="col-lg-3 col-6 industry-accordion-content  text-center">
                              <img src="../assets/images/Product/Property/Forest-fire-bush-fire-jungle-fire.png" alt="E&O" />
                              <h3>Forest fire, bush fire, jungle fire</h3>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-3 col-6 industry-accordion-content text-center">
                              <img src="../assets/images/Product/Property/Missile-testing-operations.png" alt="Clinical" />
                              <h3>Missile testing operations</h3>
                            </div>
                            <div className="col-lg-3 col-6 industry-accordion-content  text-center">
                              <img src="../assets/images/Product/Property/Acts-of-terrorism.png" alt="Product" />
                              <h3>Acts of terrorism</h3>
                            </div>
                            <div className="col-lg-3 col-6 industry-accordion-content  text-center">
                              <img src="../assets/images/Product/Property/Bursting-or-overflowing-of-water-tanks.png" alt="General" />
                              <h3>Bursting or overflowing of water tanks</h3>
                            </div>
                            <div className="col-lg-3 col-6 industry-accordion-content text-center">
                              <img src="../assets/images/Product/Property/Explosion-or-Implosion.png" alt="Clinical" />
                              <h3>Explosion or Implosion</h3>
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
                        <div className="industry-accordion-body recommend-wrapper">
                          <div className="row m-b-20">
                            <div className="col-lg-3 col-6 industry-accordion-content text-center">
                              <img src="../assets/images/Product/Property/Burning-of-insured-property.png" alt="Clinical" />
                              <h3>
                                Burning of Insured Property by any order of Public authority
                              </h3>
                            </div>
                            <div className="col-lg-3 col-6 industry-accordion-content  text-center">
                              <img src="../assets/images/Product/Property/Loss-destruction-or-damage-to-stocks.png" alt="Product" />
                              <h3>Loss, destruction or damage to stocks in cold storage</h3>
                            </div>
                            <div className="col-lg-3 col-6 industry-accordion-content  text-center">
                              <img src="../assets/images/Product/Property/War-invasion-war-like-operations.png" alt="General" />
                              <h3>War, invasion, war-like operations</h3>
                            </div>
                            <div className="col-lg-3 col-6 industry-accordion-content  text-center">
                              <img src="../assets/images/Product/Property/Pollution-or-contamination.png" alt="E&O" />
                              <h3>Pollution or contamination</h3>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-3 col-6 industry-accordion-content text-center">
                              <img src="../assets/images/Product/Property/Consequential-or-indirect-loss-or-damage.png" alt="Clinical" />
                              <h3>Consequential or indirect loss or damage</h3>
                            </div>
                            <div className="col-lg-3 col-6 industry-accordion-content  text-center">
                              <img src="../assets/images/Product/Property/Insured-premised-or-building-remains.png" alt="Product" />
                              <h3>
                                Insured premised or building remains unoccupied for more than 30
                                days
                              </h3>
                            </div>
                            <div className="col-lg-3 col-6 industry-accordion-content  text-center">
                              <img src="../assets/images/Product/Property/Deliberate-willful-or-intentional-act-or-mission.png" alt="General" />
                              <h3>Deliberate, wilful or intentional act or omission</h3>
                            </div>
                            <div className="col-lg-3 col-6 industry-accordion-content  text-center">
                              <img src="../assets/images/Product/Property/Loss-destruction-or-damage.png" alt="General" />
                              <h3>
                                Loss, destruction or damage to insured property by undergoing
                                any heating
                              </h3>
                            </div>
                          </div>
                          {/* <div class="row m-b-20">
                                            <div class="col-lg-3 col-6 industry-accordion-content text-center">
                                                <img src="../assets/images/Product/Property/Ionizing-radiations.png"
                                                    alt="Clinical">
                                                <h3>Ionising radiation</h3>

                                            </div>
                                            <div class="col-lg-3 col-6 industry-accordion-content  text-center">
                                                <img src="../assets/images/Product/Property/property-is-missing-or-has-been-mislaid.png"
                                                    alt="Product">
                                                <h3>Property is missing or has been mislaid</h3>

                                            </div>
                                            <div class="col-lg-3 col-6 industry-accordion-content  text-center">
                                                <img src="../assets/images/Product/Property/Costs-fees-expenses-for-preparing-any-claim.png"
                                                    alt="General">
                                                <h3>Costs, fees, expenses for preparing any claim</h3>

                                            </div>

                                        </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Link to="/property-loss-prevention" className="next-industry mt-1">
                  Take a Look at Risk Management Services
                  <img src="../assets/images/icons/next-arrow.svg" className="img-fluid" alt="Arrow" />
                </Link>
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

export default ICICI_Bharat_Griha_Raksha_Policy;
