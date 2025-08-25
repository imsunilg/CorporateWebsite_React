
import react from "react";
const Risk_Engineering=()=>{
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
                    <li className="breadcrumb-item"><i className="fa-solid fa-house mr-2" style={{color: 'rgb(212, 197, 197)', display: 'none'}} /><a href="#" className="headerContent disabled" style={{color: 'black'}}>Risk Management Services</a></li>
                    <li className="breadcrumb-item"><a href="#" className="headerContent disabled" style={{color: 'black'}}>Engineering</a></li>
                    <li className="breadcrumb-item">
                      <a href="#" className="headerContent disabled" style={{color: '#ce6625'}}>Engineering Insurance</a>
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
            {/* <h2 class="mb-3" style="color: black; font-weight:bold;">
                What is Engineering Insurance and wht is it important?
            </h2> */}
            <p className="pb-4">
              We take a comprehensive approach in engineering risk management services, looking beyond present needs to proactively address potential risks and uncertainties. <br /><br />
              Leveraging extensive experience in claims management and risk assessment, we ensure a robust and tailored protection strategy. <br /><br />
              Construction projects are exposed to various risk like Flood, Impact Damage, Fire, Cyclone, Theft, Collapse etc., which can’t be eliminated but it probability can be minimised with the help of extensive loss prevention practices specially tailored for engineering projects.
            </p>
          </div>
        </div>
        {/* start */}
        <section className="industry-section-main">
          <div className="industry-section-options">
            <div className="dropdown industry-list-dropdown">
              <button type="button" className="btn dropdown-toggle" data-toggle="dropdown">
                Engineering Risk Management Services
                <img src="../assets/images/icons/white-down-arrow.svg" className="img-fluid" alt="Dropdown arrow" />
              </button>
              <div className="dropdown-menu pl-3" style={{marginLeft: '12%', width: '310px'}}>
                <a className="dropdown-item mb-2 active ICICIMenu" href="#data1">Engineering Loss Prevention Exercise</a>
                <a className="dropdown-item ICICIMenu mb-2" href="#data2">Comprehensive Risk Assessment</a>
                <a className="dropdown-item ICICIMenu mb-2" href="#data3">CPM – Fleet &amp; Fuel Management</a>
                <a className="dropdown-item ICICIMenu mb-2" href="#data4">Risk management through satellite</a>
                {/* <img src="../assets/images/backdrop-arrow.svg" class="img-fluid backdrop-arrow" alt="back"> */}
              </div>
            </div>
          </div>
          <div className="container risk-engineering">
            <div className="row">
              <div className="col-lg-5 industry-info-img">
                <img src="../assets/images/engineering-loss-prevention-exercise.png" className="img-fluid ImgWidth-f" alt="Industry-list" />
              </div>
              <div className="col-lg-7 industry-info-main">
                <div id="pharma" className="industry-info">
                  <div className="industry-info-head" id="data1">
                    {/*<span class="sub-heading" style="font-weight:bold; ">Risk Management services</span>*/}
                    <h2>Engineering Loss Prevention Exercise</h2>
                    {/*<h5 class="mt-4" style="font-size: 16px; font-weight:bold; color: #ec6625;">OVERVIEW</h5>*/}
                    It is well known that every construction project is unique and containing specific challenges pertaining to its geography, geology, occupancy, methodology of construction through which its associated risk also become unique. To cater to this challenge, a specific risk management framework, which deals with the unique requirement of each project could be created for loss minimization with reference to some parameters of distinctive research and industries’ best practices. By adopting such framework clients will not only be able to save money and time but also market reputation. This exercise will be followed by recommendations for the improved risk management on the basis of construction standards and SOP’s being followed by industry leaders.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid risk-engineering" style={{backgroundColor: '#f4f4f4'}}>
            <div className="row">
              <div className="col-lg-5 industry-info-img">
                <img src="../assets/images/illustartion/Drone.png" className="img-fluid ImgWidth" alt="Industry-list" />
              </div>
              <div className="col-lg-7 industry-info-main">
                <div id="pharma" className="industry-info">
                  <div className="industry-info-head mt-xs-0" style={{marginTop: '100px'}} id="data2">
                    {/*<span class="sub-heading" style="font-weight:bold; ">Risk Management services</span>*/}
                    <h2>Drone Services</h2>
                    {/*<h5 class="mt-4" style="font-size: 16px; font-weight:bold; color: #ec6625;">OVERVIEW</h5>*/}
                    <p className="mt-3" style={{color: 'black'}}>
                      In recent years, the construction industry has witnessed a remarkable transformation with the advent of drone-based construction solutions. These innovative technologies are revolutionizing the way we plan, design, and execute construction projects, offering a multitude of benefits that improve efficiency, safety, and accuracy on construction sites. One of the key advantages of drone technology in construction is its ability to provide comprehensive aerial surveys and site inspections. Drones equipped with high-resolution cameras and sensors can swiftly capture detailed images and data, enabling project managers to gain an in-depth understanding of the site's overall conditions and aid in project planning, cost estimation, and design optimization.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-5 industry-info-img">
                <img src="../assets/images/fule-management.png" className="img-fluid ImgWidth" alt="Industry-list" />
              </div>
              <div className="col-lg-7 industry-info-main">
                <div id="pharma" className="industry-info">
                  <div className="industry-info-head mt-xs-0" style={{marginTop: '100px'}} id="data3">
                    {/*<span class="sub-heading" style="font-weight:bold; ">Risk Management services</span>*/}
                    <h2>CPM – Fleet &amp; Fuel Management</h2>
                    <p className="mt-3" style={{color: 'black'}}>Advanced GPS-equipped sensors are designed to precisely measure direct fuel consumption, assess engine efficiency, and identify potential tampering of diesel engines in both moving vehicles and stationary machinery. With the help of this solution one may have real-time alerts for service reminders and critical health issues, enabling swift resolutions and improved utilization. This solution also provides valuable insights into the performance of machinery and equipment through comprehensive analyses, leading to optimized usage of inventory and increased efficiency. A specially customized user-friendly mobile application dashboard empowers to track all the machineries effortlessly, minimizing the risk of unauthorized use or theft.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end-section */}
      </div>
)

};

export default Risk_Engineering;