import React from "react"; 

const Case_ites_casestudy = () => {
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
                <a className="dropdown-item mb-2 ICICIMenu" href="/Portal/case_studies_pharma ">PHARMACEUTICALS</a>
                <a className="dropdown-item ICICIMenu mb-2" href="/Portal/case_studies_infra ">CONSTRUCTION &amp; INFRASTRUCTURE</a>
                <a className="dropdown-item ICICIMenu mb-2 active" href="/Portal/case_ites_casestudy">ITES</a>
                <a className="dropdown-item ICICIMenu mb-2 " href="/Portal/case_studies_banking  ">BANKING &amp; FINANCIAL SERVICES</a>
                <a className="dropdown-item ICICIMenu mb-2" href="/Portal/case_studies_fmcg ">FMCG</a>
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
                    <img src="../assets/images/banners/ITES.jpg" className="img-fluid m-b-20" />
                    <p>
                      A leading IT company in India, with a workforce of approximately 5,000 employees,
                      predominantly male (70%) with an average age of 34 years. The demographic trends
                      suggested a higher propensity for certain health conditions including diabetes,
                      pre-diabetes, obesity and pregnancy.
                    </p>
                    <h3 className="ites-h3">Assessment</h3>
                    <p>
                      Our team undertook a detailed assessment of the company's health profile. We found
                      that 11% of the employees were diabetic, around 36% were either diabetic or
                      pre-diabetic, and more than 50% had obesity issues.
                    </p>
                    <h3 className="ites-h3">Aim</h3>
                    <p>
                      To provide a well-structured, personalized health coverage catered to the employee’s
                      specific health risks that is tech-based and user-friendly for the employees.
                    </p>
                    <br />
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
                    <h2 style={{fontSize: '30px'}}>Recommendations from our team</h2>
                    <p>Recognizing the substantial prevalence of lifestyle diseases within the workforce, we provided the company with a customized wellness planner. This included:</p>
                    <ul className="case-studies-list">
                      <li>
                        <span>Health risk assessments</span>
                      </li>
                      <li>
                        <span>Diet and exercise trackers</span>
                      </li>
                      <li>
                        <span>Health webinars</span>
                      </li>
                      <li>
                        <span>Disease management programs</span>
                      </li>
                      <li>
                        <span>Weight management support.</span>
                      </li>
                    </ul>
                    <p>With a strong focus on lifestyle modification, the wellness planner aimed to reduce the health risks within the company and lower their claims outgo over a period of two years.</p>
                    <br />
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
                    <h2 style={{fontSize: '25px', lineHeight: '35px'}}>Activities performed by the insured after the recommendations</h2>
                    <ul className="list-circle" style={{paddingLeft: '13px'}}>
                      <li type={1} start={1} style={{listStyleType: 'decimal'}}>
                        ICICI Lombard provided a tiered health product with differentiated coverage across different bands. The cover was designed with a special focus on chronic diseases such as:
                        <ul style={{paddingLeft: '15px', marginTop: '10px'}}>
                          <li>Diabetes, pre-diabetes, and obesity</li>
                          <li>Comprehensive maternity coverage.</li>
                        </ul>
                      </li>
                    </ul>
                    <ul className="list-circle" style={{paddingLeft: '13px'}}>
                      <li type={1} start={2} style={{listStyleType: 'decimal'}}>
                        Innovative Digital Solutions (ILTakeCare): Employees were provided with cashless Out-Patient (OPD) solutions. The digital platform ensured easy access to healthcare services, facilitating timely health interventions and preventative healthcare. These included:
                        <ul style={{paddingLeft: '15px', marginTop: '10px'}}>
                          <li>Teleconsultations</li>
                          <li>Mental wellness experts</li>
                          <li>Self-health assessment features such as facial scans for blood pressure, heart rate, cardiac variance, and SpO2 levels. </li>
                        </ul>
                      </li>
                    </ul>
                    <h2 style={{fontSize: '30px'}}>Outcome</h2>
                    <ul className="list-circle" style={{paddingLeft: '15px', marginTop: '10px'}}>
                      <li>The customized health solution provided by ICICI Lombard, powered by the innovative ILTK digital platform, offered the IT company a comprehensive and accessible healthcare package tailored to their specific needs. </li>
                      <li>By focusing on proactive and preventative healthcare, we helped the company manage the prevalent health risks within their workforce and optimize their health insurance claims.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end */}
        {/* end section */}
        {/* end-section */}
        {/* end-section */}
      </div>
    );
};

export default Case_ites_casestudy;