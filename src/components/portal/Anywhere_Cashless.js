import React from "react";
 
 import Navbarportal from "../common/Navbar_Portal";
 import Footerportal from "../common/Footer_Portal";

const Anywhere_Cashless = () => {
  return (
       
      <div>
        {/* <Navbarportal/> */}
        <style dangerouslySetInnerHTML={{__html: "\n    dropdown-item.active {\n        background: coral;\n    }\n" }} />
        <div className="container-fluid header-container">
          <div className="container claim-content">
            <div className="row pt-3">
              <div className="col-sm-12">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <img src="../assets/images/home-icon.jpg" className="Homeicon mr-2" alt="home-icon" />\<a href="#" className="headerContent ml-2 disabled" style={{color: '#ec6625'}}>Anywhere Cashless</a>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
            <div className="banner-slider" id="bannerSlider">
              <div className="banner-slide">
                <img src="../assets/images/anywhere-cashless-banner.jpg" className="d-none d-md-block img-fluid" alt="Slide 1" />
                <img src="../assets/images/banner-anywhere-cashless-mobile.png" className="d-block d-md-none img-fluid" alt="Slide 1" />
                <div className="banner-caption third-slide bannerContent">
                  <h5>Handpick your hospital.</h5>
                  <p>Choose Anywhere Cashless on the IL Take Care App</p>
                  {/* <a href='/cprtp/Portal/Anywhere_Cashless' class="btn know-more-btn">Know More</a> */}
                </div>
              </div>
            </div>
            {/* start Claim Counter */}
            <h1 style={{fontWeight: 'bold'}}>Anywhere Cashless</h1>
            <p>
              At ICICI Lombard, we’re committed to providing you with the best possible insurance solutions to
              meet your needs. With <b>Anywhere Cashless</b> offering, you can enjoy peace of mind knowing that
              you receive quality medical care without any financial stress! Customer can avail cashless facility
              with out any payment* in any hospital, which is not a part of current network of ICICI Lombard.
            </p>
            <p>*Subject to policy T &amp; C &amp; hospital acceptance for cashless facility policy.</p>
          </div>
        </div>
        <section className="section-we-offer orange-g-bg orange-bar cashless-orange-bar m-t-20m">
          <div className="container">
            <h2 className="orange-h2" style={{fontWeight: 'bold'}}>Why Anywhere Cashless?</h2>
            <div className="section-wrapper">
              <div className="section-we-offer-content">
                <h2 className="font-25 float-l">#1</h2>
                <p>Zero waiting for Reimbursement</p>
              </div>
              <div className="section-we-offer-content">
                <h2 className="font-25 float-l">#2</h2>
                <p>Hassle-free and quick claims</p>
              </div>
              <div className="section-we-offer-content">
                <h2 className="font-25 float-l">#3</h2>
                <p>Superior convenience of cashless treatment at any hospital</p>
              </div>
              <div className="section-we-offer-content w-315">
                <h2 className="font-25 float-l">#4</h2>
                <p>Enhanced freedom to not pay out of pocket</p>
              </div>
            </div>
          </div>
        </section>
        <section className="industry-section-main">
          <div className="container">
            <div className="row p-b-30">
              <div className="col-lg-5 industry-info-img">
                <img src="../assets/images/anywhere-cashless-qr-code.png" className="img-fluid ImgWidth m-t-0f p-t-0" alt="Industry-list" />
                <div className="row anywhr-cashless-left m-t-20">
                  <div className="col-md-5 app-line">Download the IL Take Care app </div>
                  <div className="col-md-6 app-icons p-l-0">
                    <div className="store-main">
                      <img src="../assets/images/icons/google-pay.svg" className="img-fluid" alt="Google Pay" />
                      <img src="../assets/images/icons/apple-store.svg" className="img-fluid" alt="Apple Store" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 industry-info-main">
                <div id="pharma" className="industry-info p-l-0">
                  <div className="industry-info-head">
                    <span className="sub-heading">Anywhere Cashless</span>
                    <h2 style={{fontSize: '42px'}}>How to Access</h2>
                  </div>
                </div>
                <div className="row anywhr-cashless-right">
                  <div className="col-md-1 p-l-0"><img src="../assets/images/il-take-care-logo.png" className="img-fluid il-take-care-logo" /></div>
                  <div className="col-md-9 il-take-care-txt">
                    <span>IL Take Care App Path</span>
                    <span className="font-13">Home page &gt; Services &gt; Health Assistance &gt; Anywhere Cashless</span>
                  </div>
                </div>
                <ol className="basic-cover-list">
                  <li>Helpline - 040-66274205 (8am to 8pm from Mon to Sat except public holidays)</li>
                  <li>Toll-free - 1800 2 666 - <span>Ask For Doctor's Team</span></li>
                  <li>healthassistance@icicilombard.com</li>
                  <li><a href="https://ilhc.icicilombard.com/Home/healthassistance" target="_blank">https://ilhc.icicilombard.com/Home/healthassistance</a></li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        <section className="claim-section-gray p-t-35f bg-light-gray">
          <div className="row faq">
            <h2>Frequently asked questions on Anywhere Cashless</h2>
            <div className="container max-w-1000">
              <div id="accordion">
                <div className="card">
                  <div className="card-header" id="headingOne">
                    <a className="card-link" data-toggle="collapse" data-target="#g1" aria-expanded="false" aria-controls="g1">
                      What is Anywhere cashless facility?
                    </a>
                  </div>
                  <div id="g1" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                    <div className="card-body">
                      <p>Customer can avail cashless facility in any hospital, which is not in current network hospital list of IL, subject to hospital acceptance for cashless facility. No out of pocket expenses for customer subject to policy T &amp; C. </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingTwo">
                    <a className="card-link" data-toggle="collapse" data-target="#g2" aria-expanded="false" aria-controls="g2">
                      Is Anywhere cashless facility available PAN India?
                    </a>
                  </div>
                  <div id="g2" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                    <div className="card-body">
                      <p>Yes, We launched this facility entire country from dated 22 Mar 23.</p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingThree">
                    <a className="card-link" data-toggle="collapse" data-target="#g3" aria-expanded="false" aria-controls="g3">
                      Can I avail Anywhere cashless facility post admission in non-network hospital?
                    </a>
                  </div>
                  <div id="g3" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                    <div className="card-body">
                      <p>No, Customer needs to inform at least 24 hours before Date of Admission (DOA) to facilitate Anywhere Cashless</p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingFour">
                    <a className="card-link" data-toggle="collapse" data-target="#g4" aria-expanded="false" aria-controls="g4">
                      Whom to contact to avail Anywhere cashless facility?
                    </a>
                  </div>
                  <div id="g4" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                    <div className="card-body">
                      <p>Customer can reach IL through ILTC App Path : ILTC app -&gt; Service we offer -&gt; Health Assistance-&gt; Anywhere cashless Helpline - 040 6627 4205 (8am to 8pm from Mon to Sat except public holidays) Tollfree - 1800 2 666 – Ask for Doctor Team Email- <a href="mailto:healthassistance@icicilombard.com">healthassistance@icicilombard.com</a></p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingFive">
                    <a className="card-link" data-toggle="collapse" data-target="#g5" aria-expanded="false" aria-controls="g5">
                      What information should customer provide to avail Anywhere cashless facility?
                    </a>
                  </div>
                  <div id="g5" className="collapse" aria-labelledby="headingFive" data-parent="#accordion">
                    <div className="card-body">
                      <p>Customer needs to provide basic information like patient name, UHID, policy details, customer mobile number and email id, Planned Hospital Name, Diagnosis, Date of admission, Treating doctor name, Hospital address with pincode, Hospital contact person name &amp; number.</p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingSix">
                    <a className="card-link" data-toggle="collapse" data-target="#g6" aria-expanded="false" aria-controls="g6">
                      Is this Anywhere Cashless facility available for Emergency admission?
                    </a>
                  </div>
                  <div id="g6" className="collapse" aria-labelledby="headingSix" data-parent="#accordion">
                    <div className="card-body">
                      <p>No, As we need 24 prior intimation to serve patients under this feature. Request patients to admit in the nearest hospital for emergency cases ASAP.</p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingSeven">
                    <a className="card-link" data-toggle="collapse" data-target="#g7" aria-expanded="false" aria-controls="g7">
                      Is this Anywhere Cashless is applicable for Retail &amp; Corporate customer?
                    </a>
                  </div>
                  <div id="g7" className="collapse" aria-labelledby="headingSeven" data-parent="#accordion">
                    <div className="card-body">
                      <p>Yes, this facility of AWC is applicable for all Lombard customers, subject to policy T &amp; C &amp; Hospital acceptance.</p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingEight">
                    <a className="card-link" data-toggle="collapse" data-target="#g8" aria-expanded="false" aria-controls="g8">
                      Do Day care procedures covered under this Anywhere cashless facility? Like Cataract?
                    </a>
                  </div>
                  <div id="g8" className="collapse" aria-labelledby="headingEight" data-parent="#accordion">
                    <div className="card-body">
                      <p>Yes, day care procedures covered under AWC, subject to policy T &amp; C &amp; Hospital acceptance.</p>
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

export default Anywhere_Cashless;