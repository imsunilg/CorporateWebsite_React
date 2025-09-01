
import react from "react";
const Mega_Risk_policy=()=>{
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
                    <li className="breadcrumb-item"> <a href="#" className="headerContent" style={{color: 'black'}}>Products</a></li>
                    <li className="breadcrumb-item"><a href="#" className="headerContent" style={{color: 'black'}}>Property</a></li>
                    <li className="breadcrumb-item">
                      <a href="#" className="headerContent" style={{color: '#ce6625'}}>Mega Risk Policy</a>
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
            <p>
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
                <a className="dropdown-item ICICIMenu mb-2 " href="/Portal/Industrial_All_Risk_policy  ">Industrial All Risk Policy</a>
                <a className="dropdown-item ICICIMenu mb-2 " href="/Portal/Mega_Risk_policy ">Mega Risk Policy</a>
                <a className="dropdown-item ICICIMenu mb-2 " href="/Portal/ICICI_Bharat_Sookshma_Udyam_Surakha_Policy ">ICICI Bharat Sookshma Udyam Surakha Policy</a>
                <a className="dropdown-item ICICIMenu mb-2" href="/Portal/ICICI_Bharat_LaGhu_Udyam_Suraksha_Policy ">ICICI Bharat Laghu Udyam Suraksha Policy</a>
                <a className="dropdown-item ICICIMenu mb-2" href="/Portal/ICICI_Bharat_Griha_Raksha_Policy">ICICI Bharat Griha Raksha Policy</a>
                <img src="../assets/images/backdrop-arrow.svg" className="img-fluid backdrop-arrow" alt="back" />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-5 industry-info-img">
                <img src="../assets/images/Mega-Risk-policy.png" className="img-fluid ImgWidth" alt="Industry-list" />
              </div>
              <div className="col-lg-7 industry-info-main">
                <div id="pharma" className="industry-info">
                  <div className="industry-info-head">
                    {/*<span class="sub-heading">Product</span>*/}
                    <h2 className="standardFire" style={{fontSize: '42px'}}>Mega Risk Policy</h2>
                  </div>
                  <div id="pharma-accordion">
                    <div className="industry-accordion">
                      <div className="industry-accordion-header">
                        <a data-toggle="collapse" href="#collapseOne">
                          OVERVIEW
                          <img src="../assets/images/icons/arrow-up.svg" className="img-fluid plus" alt="Arrow Up" />
                          <img src="../assets/images/icons/arrow-down.svg" className="img-fluid minus" alt="Arrow Down" />
                        </a>
                      </div>
                      <div id="collapseOne" className="collapse show" data-parent="#pharma-accordion">
                        <p className="p-t-10">
                          Mega Risk Insurance/Large Risk Insurance policies are issued to cover risks where the sum insured is more than Rs.2,500 crores at any one location (Property Damage and Business Interruption combined)
                        </p>  <br />
                        <p>
                          The policy is taken to cover fixed assets like Building, Plant &amp; Machineries, Furniture Fixtures, Electrical Equipment and Stocks of all kinds.
                        </p>
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
                                <li>The sum insured for a location should be more than INR 2500 Cr</li>
                                <li>Packaged Policy having cover on All Risk Basis</li>
                                <li>All standard extension available for SFSP, MBD and EEI policy could be incorporated in this policy</li>
                              </ol>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* 3 rd Section */}
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
                              <img src="../assets/images/Product/Property/Work-of-art-fine-arts.png" />
                            </div>
                            <div className="row justify-content-center text-center">
                              <h6 className="acc-menu-h1">
                                <span className="tooltipmsg">
                                  Works of art, Fine Arts
                                  <span className="tooltipmsg-text">Curios, rare books or works  of  art, Fine Arts and other alike items</span>
                                </span>
                              </h6>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="row justify-content-center">
                              <img src="../assets/images/Product/Property/money-cheques-stamps.png" />
                            </div>
                            <div className="row justify-content-center text-center">
                              <h6 className="acc-menu-h1">
                                <span className="tooltipmsg">
                                  Money, cheques, stamps
                                  <span className="tooltipmsg-text">bonds, credit cards, any securities and other alike items</span>
                                </span>
                              </h6>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="row justify-content-center">
                              <img src="../assets/images/Product/Property/jewelry-precious-stones.png" />
                            </div>
                            <div className="row justify-content-center text-center">
                              <h6 className="acc-menu-h1">
                                <span className="tooltipmsg">
                                  Jewellery  precious  stones
                                  <span className="tooltipmsg-text">Jewellery  precious  stones,   precious  metals  bullion and other alike items </span>
                                </span>
                              </h6>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="row justify-content-center">
                              <img src="../assets/images/Product/Property/valuable-papers .png" />
                            </div>
                            <div className="row justify-content-center text-center">
                              <h6 className="acc-menu-h1">
                                <span className="tooltipmsg">
                                  Valuable Papers and Records
                                  <span className="tooltipmsg-text">Explosion and implosion of boiler and pressure plants, </span>
                                </span>
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div className="row pharma-accordian m-b-20 mt-3 pr-3">
                          <div className="col-md-3">
                            <div className="row justify-content-center">
                              <img src="../assets/images/Product/Property/tenants-neighbours.png" />
                            </div>
                            <div className="row justify-content-center text-center">
                              <h6 className="acc-menu-h1">Tenants And Neighbours Liability </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* end 3rd Section */}
                    <div className="industry-accordion">
                      <div className="industry-accordion-header">
                        <a className="collapsed card-link" data-toggle="collapse" href="#collapseFour">
                          EXCLUSIONS
                          <img src="../assets/images/icons/arrow-up.svg" className="img-fluid plus" alt="Arrow Up" />
                          <img src="../assets/images/icons/arrow-down.svg" className="img-fluid minus" alt="Arrow Down" />
                        </a>
                      </div>
                      <div id="collapseFour" className="collapse" data-parent="#pharma-accordion">
                        <p className="p-t-10">
                          Mega risk is a highly customized policy, please refer policy wordings for detailed information
                        </p>
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
        {/* end */}
        {/* end section */}
        {/* end-section */}
      </div>
)

};

export default Mega_Risk_policy;