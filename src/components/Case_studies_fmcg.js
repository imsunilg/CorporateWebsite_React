import react from "react";
const Case_studies_fmcg=()=>{
  return (

      <div>
        <div className="container-fluid header-container">
          <div className="container">
            <div className="row pt-3">
              <div className="col-sm-12">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"> <img src="../assets/images/home-icon.jpg" className="Homeicon mr-2" alt="home-icon" /></li>
                    <li className="breadcrumb-item">
                      <a href="#" className="headerContent disabled" style={{color: '#ce6625'}}>Case Studies</a>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <img src="../assets/images/case-studies-banner.jpg" alt="case-studies-banner" className="NewProject mainbanner d-none d-sm-block" />
                <img src="../assets/images/case-studies-mobile.png" alt="case-studies-banner" className="mainbanner d-block d-sm-none img-fluid" />
              </div>
            </div>
            <h1 style={{fontWeight: 'bold'}}>Case Studies</h1>
            {/* <h2 class="mb-3" style="color: black; font-weight:bold;">Why do you need Liability Insurance?</h2> */}
            <p className="pb-4">
              ICICI Lombard General Insurance is one of India’s leading private sector general insurance companies. The Company provides an array of comprehensive and well-diversified non-life insurance products and risk management solutions to secure customers and their family against unexpected and untoward events. It has a strong, diversified and seamless distribution channel both online and offline to serve the needs of its individual, corporate, MSMEs and government customers.
            </p>
          </div>
        </div>
        {/* start */}
        <section className="industry-section-main p-t-30f case-study-mob">
          <div className="industry-section-options top-40f">
            <div className="dropdown industry-list-dropdown">
              <h1 style={{color: '#EC6625', fontSize: '23px', fontWeight: 600, marginLeft: '5%', width: '100%'}}>Industry List</h1>
              <div className="dropdown-menu pl-3 m-t-20f case-studies-menu">
                <a className="dropdown-item mb-2 ICICIMenu" href="/Portal/case_studies_pharma">PHARMACEUTICALS</a>
                <a className="dropdown-item ICICIMenu mb-2" href="/Portal/case_studies_infra">CONSTRUCTION &amp; INFRASTRUCTURE</a>
                <a className="dropdown-item ICICIMenu mb-2" href="/Portal/case_ites_casestudy">ITES</a>
                <a className="dropdown-item ICICIMenu mb-2" href="/Portal/case_studies_banking ">BANKING &amp; FINANCIAL SERVICES</a>
                <a className="dropdown-item ICICIMenu mb-2 active" href="/Portal/case_studies_fmcg">FMCG</a>
                {/*<a class="dropdown-item ICICIMenu mb-2" href="#data4">OTHER</a>*/}
                {/* <img src="../assets/images/backdrop-arrow.svg" class="img-fluid backdrop-arrow" alt="back"> */}
              </div>
            </div>
          </div>
          <div className="container-fluid case-studies p-t-0f">
            <div className="row">
              <div className="col-lg-4 industry-info-img">
              </div>
              <div className="col-lg-8 industry-info-main text-black">
                <div id="pharma" className="industry-info p-l-0">
                  <div className="industry-info-head text-black" id="data1">
                    {/*<span class="sub-heading" style="font-weight:bold; ">Risk Management services</span>*/}
                    <h2 style={{fontSize: '30px'}}>About the Company</h2>
                    <img src="../assets/images/banners/fmcg case study.jpg" className="img-fluid m-b-20" />
                    <p>An Edible oil manufacturing company located near a port in Andhra Pradesh, that is involved in the distribution, and branding of edible oils and specialty fats. </p>
                    <p>The company wanted to prevent property loss due to fire breakout. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid  case-studies" style={{backgroundColor: '#f4f4f4'}}>
            <div className="row">
              <div className="col-lg-4 industry-info-img case-studies-img">
                <img src="../assets/images/case-recommendation.png" className="img-fluid ImgWidth m-t-0f p-t-0f" alt="Industry-list" />
              </div>
              <div className="col-lg-8 industry-info-main text-black">
                <div id="pharma" className="industry-info p-l-0">
                  <div className="industry-info-head text-black m-t-20" id="data1">
                    {/*<span class="sub-heading" style="font-weight:bold; ">Risk Management services</span>*/}
                    <h2 style={{fontSize: '30px'}}>Recommendations from our team</h2>
                    <p>Based on the physical site vist, the company was advised to:</p>
                    <ul className="case-studies-list">
                      <li>
                        Divide the industrial storage yard into hazard areas
                      </li>
                      <li>
                        Install sprinkler system in coal and husk storage area
                      </li>
                      <li>
                        Make a second gate available for emergency operations.
                      </li>
                      <li>
                        Install fire protection in server room.
                      </li>
                      <li>
                        Install smoke detectors in general stores.
                      </li>
                      <li>
                        Make a study on Lightning Arrestor
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid case-studies">
            <div className="row">
              <div className="col-lg-4 industry-info-img case-studies-img">
                <img src="../assets/images/case-activities.png" className="img-fluid ImgWidth m-t-0f p-t-0f" alt="Industry-list" />
              </div>
              <div className="col-lg-8 industry-info-main text-black">
                <div id="pharma" className="industry-info p-l-0">
                  <div className="industry-info-head text-black m-t-20" id="data1">
                    {/*<span class="sub-heading" style="font-weight:bold; ">Risk Management services</span>*/}
                    <h2 style={{fontSize: '25px', lineHeight: '35px'}}>Activities performed by the insured after the recommendations</h2>
                    <p>The company implemented the following actions based on our recommendations:</p>
                    <ul className="case-studies-list">
                      <li>
                        Hazard Area Classification was introduced to the property.
                      </li>
                      <li>
                        A 2nd gate was opened for security reasons.
                      </li>
                      <li>
                        Basic fire protection system was introduced in the server room and non-industrial electrical fittings were installed in some of the stores.
                      </li>
                      <li>
                        A safety procedure document was drafted for the critical processes.
                      </li>
                    </ul>
                    <h2 style={{fontSize: '30px'}}>Outcome</h2>
                    <p>There have been no losses reported due to fire over the last 2 years. </p>
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

export default Case_studies_fmcg;