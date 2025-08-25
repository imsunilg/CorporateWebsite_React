import react from "react";
const Digital_solutions=()=>{
     return (

      <div>
        <div className="container-fluid header-container">
          <div className="container">
            <div className="row pt-3">
              <div className="col-sm-12">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <img src="../assets/images/home-icon.jpg" className="Homeicon mr-2" alt="home-icon" />\<a href="#" className="headerContent ml-2 disabled" style={{color: '#ec6625'}}>Digital Solution</a>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <img src="../assets/images/digital-solutions-banner.jpg" alt="digital-solutions-banner" className="NewProject mainbanner d-none d-sm-block" />
                <img src="../assets/images/Digital-Solutions-mobile.png" alt="digital-solutions-banner" className="mainbanner d-block d-sm-none img-fluid" />
              </div>
            </div>
            <h1 style={{fontWeight: 'bold'}}>Digital Solutions</h1>
            <p>
              The insurance industry has witnessed a profound transformation in today’s rapidly evolving digital landscape. This evolution is particularly beneficial for corporate customers.
              At ICICI Lombard we have developed a host of digital solutions that can provide you with a range of advantages that extend well beyond the traditional insurance model.
              These digital innovations offer a new level of efficiency, customization and customization, revolutionizing the way customers interact with us.
            </p>
          </div>
        </div>
        {/* start */}
        <section id="page-wrap" className="industry-section-main">
          <div className="industry-section-options">
            <div className="dropdown industry-list-dropdown">
              <button type="button" className="btn dropdown-toggle" data-toggle="dropdown">
                Digital Solutions List
                <img src="../assets/images/icons/white-down-arrow.svg" className="img-fluid" alt="Dropdown arrow" />
              </button>
              <div id="top" className="dropdown-menu pl-3 static-link-menu property-dropdown digital-list">
                <a className="dropdown-item mb-2 active ICICIMenu" href="#one">APIs (Application Programming Interface)</a>
                <a className="dropdown-item ICICIMenu mb-2" href="#two">Health Enrolment Portal</a>
                <a className="dropdown-item ICICIMenu mb-2" href="#three">IL Take Care App </a>
                {/* <img src="../assets/images/backdrop-arrow.svg" class="img-fluid backdrop-arrow" alt="back"> */}
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-5 industry-info-img">
                <img src="../assets/images/engineering-loss-prevention-exercise.png" className="pharma-img" alt="Industry-list" />
              </div>
              <div className="col-lg-7 industry-info-main">
                <div id="pharma" className="industry-info">
                  <div className="industry-info-head pt-4" id="one">
                    <h2 id="one">APIs (Application Programming Interface)</h2>
                    <p className="mt-3" style={{color: 'black'}}>
                      APIs are a robust solution designed to facilitate seamless connectivity between customers and IL systems for efficient policy management. If you are an orgnaisation, by leveraging this technology, you can automate and streamline your policy related processes, eliminating the need for any manual intervention.
                    </p>
                    <p>The API’s ensure enhanced data security by eliminating the exchanges of a company’s personally identifiable information over emails and minimizing the risk of data breaches. By automating the policy related processes, we have been able to reduce the turnaround time to a few hours for faster policy management with great operational efficiency.</p>
                    <p>We offer a wide range of functionalities over APIs to our clients. It includes APIs for quote issuance, policy booking, claims processing and policy servicing. Detailed documentation of the APIs is available for clients upon request. The documentation provides a step by step instruction of how to integrate the API into client systems and effectively utilize its functionalities. Our dedicated support team is available to assist the clients throughout the integration journey.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid p-t-0f" style={{backgroundColor: '#f4f4f4'}}>
            <div className="row">
              <div className="col-lg-5 industry-info-img health-enrol-portal">
                <img src="../assets/images/health-enrolment-portal.png" className="img-fluid ImgWidth" alt="Industry-list" />
              </div>
              <div className="col-lg-7 industry-info-main">
                <div id="pharma" className="industry-info p-5 p-xs-0">
                  <div className="industry-info-head" id="two">
                    <h2 style={{fontSize: '39px'}} className="healthPortal">Health Enrolment Portal</h2>
                    <p className="mt-3">
                      The Enrolment Portal offers a transformative solution for organizations seeking to simplify health insurance enrolment process for their employees.
                    </p>
                    <p>It serves as a DIY tool for corporate employees to directly enter their Health Policy related information for policy processing. With the portal’s intuitive interface and automated data collection, the HR personnel is significantly relieved from the burden of manual data collection.</p>
                    <p>It is highly flexible and customizable to align with a specific corporate health policy to provide a smooth and personalized experience for their employees. It has all comprehensive validations incorporated to ensure all the necessary data is provided correctly reducing the need for manual intervention and data manipulation before policy placement.</p>
                    <p>The features made available on the portal are:</p>
                    <ul className="p-l-16 bullet-dark-circle">
                      <li>Base policy existing data validation</li>
                      <li>Fresh enrolments in base policy</li>
                      <li>Voluntary Top up policy enrolment</li>
                      <li>Voluntary Parental policy enrolment</li>
                      <li>Voluntary Cashless OPD policy enrolment</li>
                      <li>Customized wellness benefits</li>
                      <li>All direct payment modes available</li>
                      <li>Auto welcome mailers &amp; reminder mailers for enrolment</li>
                      <li>Digital wallet feature</li>
                    </ul>
                    <br />
                    <p>If you would like to explore this tool further, please reach out to us.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-5 industry-info-img il-take-care">
                <img src="../assets/images/il-take-care-app.png" className="img-fluid ImgWidth" alt="Industry-list" />
              </div>
              <div className="col-lg-7 industry-info-main">
                <div id="pharma" className="industry-info pt-5 p-xs-0">
                  <div className="industry-info-head" id="three">
                    <h2 style={{fontSize: '39px'}} className="healthPortal">IL Take Care App: Revolutionizing Your Insurance Experience</h2>
                    <p className="mt-3">IL TakeCare app is a One-Stop-Solution for all users with insurance needs. The app providers a wide range of services from the basics of an insurance requirement to Wellness Services and other Insurance products to explore and purchase. Below are key features of the app</p>
                    <ul className="p-l-16 bullet-dark-circle">
                      <li>View policy information</li>
                      <li>Download &amp; Verify E-card</li>
                      <li>Intimate &amp; track claims real-time</li>
                      <li>Check Network Hospitals</li>
                      <li>Request for planned hospitalisation</li>
                      <li>Avail complimentary Doctor Tele-consultation (Audio &amp; Video)</li>
                      <li>Avail Anywhere Cashless through Health Assistance</li>
                      <li>Chat with Experts (Dieticians, Fitness Experts, Psychologist, etc.)</li>
                      <li>Face Scan to get important health vitals</li>
                      <li>Other wellness services (Health risk assessment, Mental wellness consultation, etc.)</li>
                      <li>Use InstaSpect for mobile self-inspection</li>
                    </ul>
                    <br />
                    <p>Scan the QR code to download.</p>
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

export default Digital_solutions;