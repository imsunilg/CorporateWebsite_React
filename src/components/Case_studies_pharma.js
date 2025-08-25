
import react from "react";
const case_studies_pharma=()=>{
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
              ICICI Lombard General Insurance is one of India’s leading private sector general insurance
              companies. The Company provides an array of comprehensive and well-diversified non-life insurance
              products and risk management solutions to secure customers and their family against unexpected and
              untoward events. It has a strong, diversified and seamless distribution channel both online and
              offline to serve the needs of its individual, corporate, MSMEs and government customers.
            </p>
          </div>
        </div>
        {/* start */}
        <section className="industry-section-main p-t-30f case-study-mob">
          <div className="industry-section-options top-40f">
            <div className="dropdown industry-list-dropdown">
              <h1 style={{color: '#EC6625', fontSize: '23px', fontWeight: 600, marginLeft: '5%', width: '100%'}}>Industry List</h1>
              <div className="dropdown-menu pl-3 m-t-20f case-studies-menu">
                <a className="dropdown-item mb-2 ICICIMenu active" href="/Portal/case_studies_pharma ">PHARMACEUTICALS</a>
                <a className="dropdown-item ICICIMenu mb-2" href="/Portal/case_studies_infra  ">CONSTRUCTION &amp; INFRASTRUCTURE</a>
                <a className="dropdown-item ICICIMenu mb-2" href="/Portal/case_ites_casestudy ">ITES</a>
                <a className="dropdown-item ICICIMenu mb-2" href="/Portal/case_studies_banking ">BANKING &amp; FINANCIAL SERVICES</a>
                <a className="dropdown-item ICICIMenu mb-2" href="/Portal/case_studies_fmcg  ">FMCG</a>
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
                    <h2 style={{fontSize: '30px'}}>Introduction</h2>
                    <img src="../assets/images/banners/Pharma Case Study.jpg" className="img-fluid m-b-20" />
                    <p>
                      The insured company is a global pharmaceutical conglomerate. Operating in multiple
                      countries with a workforce of ~ 15,000 individuals from diverse nationalities, this
                      case study highlights insurer’s efforts to combat insured company’s phishing threats
                      with the aid of a dedicated yearlong simulation exercise.
                    </p>
                    <h3 className="ites-h3">Background</h3>
                    <p>The insured company’s employees fell victim to a recent phishing attack, during which threat actors gained access to several emails, particularly those associated with invoices. Exploiting this access, the threat actors orchestrated a series of payment frauds that resulted in financial losses amounting to approximately INR 1 Crore.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid" style={{backgroundColor: '#f4f4f4'}}>
            <div className="row">
              <div className="col-lg-4 industry-info-img case-studies-img">
                <img src="../assets/images/case-recommendation.png" className="img-fluid ImgWidth m-t-0f p-t-0f" alt="Industry-list" />
              </div>
              <div className="col-lg-8 industry-info-main text-black">
                <div id="pharma" className="industry-info p-l-0">
                  <div className="industry-info-head text-black m-t-20" id="data1">
                    {/*<span class="sub-heading" style="font-weight:bold; ">Risk Management services</span>*/}
                    <h2 style={{fontSize: '30px'}}>Mitigating measures implemented by the insurer</h2>
                    <p>The insurer initiated a comprehensive approach to tackle phishing threats within the organization. The initial assessment revealed a high phishing rate of approximately 25%, indicating a lack of employee awareness regarding these threats. To address this, a year-long phishing simulation exercise was devised, comprising two key components: assessing employee awareness through monthly simulations and enhancing their knowledge about phishing threats and vigilance.</p>
                    {/*
                                                            <p>Based on the valuable data, the following recommendations were given:</p>
                                                            <ul class="case-studies-list">
                                                                <li>
                                                                    <span>Limit Contact</span>
                                                                    Company should conduct monthly phishing simulations based on a specific
                                                                    department, location, business unit, etc.
                                                                </li>
                                                                <li>
                                                                    <span>Employee Preparedness</span>
                                                                    Employees should receive brief training on a quarterly basis.
                                                                </li>
                                                                <li>
                                                                    <span>Cyber Security measures</span>
                                                                    HTTPS enforcement should be made.
                                                                </li>
                                                            </ul> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4 industry-info-img case-studies-img">
                <img src="../assets/images/case-activities.png" className="img-fluid ImgWidth m-t-0f p-t-0f" alt="Industry-list" />
              </div>
              <div className="col-lg-8 industry-info-main text-black">
                <div id="pharma" className="industry-info p-l-0">
                  <div className="industry-info-head text-black m-t-20" id="data1">
                    {/*<span class="sub-heading" style="font-weight:bold; ">Risk Management services</span>*/}
                    <h2 style={{fontSize: '25px', lineHeight: '35px'}}>Insurer's Recommendations for future safety</h2>
                    <p>In light of the exercise's success, the insurer proposed a forward-looking strategy to ensure the organization's ongoing safety. This included the deployment of an end-to-end email security solution to establish a trust enforcement platform for email recipients and implement measures for identifying look-alike domains. The insurer also recommended conducting periodic phishing simulations to maintain and further enhance cybersecurity resilience.</p>
                    <h2 style={{fontSize: '30px'}}>Outcome</h2>
                    <p>After a rigorous 12-month exercise, the organization's phishing rate saw a substantial reduction to approximately 6%. The workforce became considerably more adept at identifying and mitigating phishing threats, significantly decreasing the risk of successful phishing attacks.</p>
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

export default case_studies_pharma;