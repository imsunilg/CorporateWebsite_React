import react from "react";
const Case_studies_infra=()=>{
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
              <div className="col-sm-10">
                <img src="../assets/images/case-studies-banner.jpg" alt="vas-solution-banner" className="NewProject mainbanner" />
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
                <a className="dropdown-item ICICIMenu mb-2 active" href="/Portal/case_studies_infra">CONSTRUCTION &amp; INFRASTRUCTURE</a>
                <a className="dropdown-item ICICIMenu mb-2 " href="/Portal/case_ites_casestudy  ">ITES</a>
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
                    <img src="../assets/images/banners/construction-case-study.jpg" className="img-fluid m-b-20" />
                    <p>The insured company is a prominent and well-established paper and board manufacturing company based in India. With a rich history spanning several decades, the company has earned a reputation for excellence in producing high-quality paper and board products. </p>
                    <h3 className="ites-h3">Background</h3>
                    <p>The insured company operates from two expansive manufacturing facilities characterized by highly automated processes. Given their substantial reliance on operational technology, it became imperative to undertake a Vulnerability Assessment and Penetration Testing (VAPT) initiative. This undertaking aimed to pinpoint vulnerabilities within their technology infrastructure and promptly deploy measures to preclude potential cyber disruptions</p>
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
                    <h2 style={{fontSize: '30px'}}>Mitigating Measures by the Insurer</h2>
                    <p>In response to these concerns, the insurer instigated a comprehensive VAPT drive designed to unearth vulnerabilities and assess their potential impact if exploited by malicious actors. This activity unfolded in three key stages. Firstly, an initial assessment was conducted to identify existing vulnerabilities. Subsequently, a remediation phase was undertaken to rectify these vulnerabilities. Lastly, a confirmatory scan was performed to validate the effectiveness of the remediation measures on the identified vulnerabilities. </p>
                    {/* <p>Based on the valuable data, the following recommendations were given:</p>
                            <ul class="case-studies-list">

                                <li>
                                    <span>Storage Efficiency</span>
                                    Steel material to be stored in closed container to avoid rusting.
                                </li>

                                <li>
                                    <span>Enclosure</span>
                                    Fencing should be done properly near river to avoid unusual accidents at project
                                    site.
                                </li>

                                <li>
                                    <span>Caution Signage</span>
                                    Affix safety sign boards in local language to avoid accidents.
                                </li>

                                <li>
                                    <span>Employee Preparedness</span>
                                    Safety trainings to be carried out for all the employees.
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
                    {/* <h2 style="font-size: 25px; line-height: 35px;">Activities performed by the insured
                                after the recommendations</h2>
                            <p>The company implemented the following actions based on our recommendations:</p>
                            <ul class="case-studies-list">
                                <li>
                                    <span>Awareness Sessions</span>
                                    Awareness sessions on Risk Management & Value-Added Services were organised.
                                </li>
                                <li>
                                    <span>Customised Training Exercises</span>
                                    Carried out 1 man day Engineering Loss Prevention Exercise (ELPE) at the
                                    location of project.
                                </li>
                                <li>
                                    <span>Finding suitable solutions</span>
                                    Post PLPE Solution provided along with benchmarking through Industry Risk
                                    Profiling (PR).
                                </li>
                                <li>
                                    <span>Implementation</span>
                                    Solution implementation synergized by client and ILGIC partners or vendors.
                                </li>

                            </ul> */}
                    <h2 style={{fontSize: '30px'}}>Outcome</h2>
                    <p>The initial VAPT scan unveiled the presence of 40 vulnerabilities, which collectively posed a staggering Value at Risk of approximately INR 14.40 Crores concerning potential cyberattacks. Swift action was taken to prioritize and remediate these vulnerabilities, ultimately reducing the Value at Risk to approximately INR 4.3 Crores. This marked a remarkable 70% reduction in the overall Value at Risk, effectively fortifying the organization against potential threats.</p>
                    <h2 style={{fontSize: '25px', lineHeight: '35px'}}>Insurer's Recommendations for Future Safety</h2>
                    <p>The insurer recommended the frequency of vulnerability assessment and penetration test activity to be increased to identify all emerging cyber threats. Implementation of Insurer’s remediation suggestions would reduce the probability of occurrence of cyber-attack significantly.</p>
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

export default Case_studies_infra;