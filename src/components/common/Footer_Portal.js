// src/components/Footer.js
import React from "react"; 
import { Link } from "react-router-dom";

const Footerportal = () => {
  return (
    
    <div id="footer">
        <div className="clearfix" style={{marginTop: '36px'}}>
              <div id="content" />
            </div>
            
      <section className="property-footer-wrapper">
        <div className="container property-img-wrapper">
          <img
            src="/assets/images/property-footer.jpg"
            className="img-fluid mobile-view"
            alt="property-footer"
          />
          <img
            src="/assets/images/property-footer-mobile.png"
            className="w-100 desktop-view"
            alt="property-footer"
          />
          <div className="property-content-wrapper text-center">
            <h2>Leading the way to a secured future</h2>
          </div>
        </div>
      </section>

      {/* footer starts */}
      <footer>
        <div className="footer-main">
          <div className="container footer-content">
            <div className="d-flex flex-row footer-content-wrapper">
              {/* Left Block */}
              <div className="footer-wrapper">
                <div className="footer-left-block">
                  <h5>ICICI Lombard General Insurance Company Limited,</h5>
                  <p>
                    ICICI Lombard House, 414, Veer Savarkar Marg, Near Siddhi
                    Vinayak Temple, Prabhadevi, Mumbai - 400025.
                  </p>
                  <p>Reg. No.115</p>
                  <p className="email-para">
                    Email: <span>cpcontactus@icicilombard.com</span>
                  </p>
                  <ul className="social-links">
                    <li style={{ marginRight: "6px" }}>
                      <a
                        title="icicilombard facebook"
                        className="fb-ico"
                        href="https://www.facebook.com/ICICILombard"
                        target="_blank"
                        rel="noreferrer"
                      ></a>
                    </li>
                    <li>
                      <a
                        title="icicilombard linkedin"
                        className="link-ico"
                        href="https://www.linkedin.com/company/icici-lombard?trk=tyah"
                        target="_blank"
                        rel="noreferrer"
                      ></a>
                    </li>
                    <li>
                      <a
                        title="icicilombard twitter"
                        className="twt-ico"
                        href="https://twitter.com/ICICILombard"
                        target="_blank"
                        rel="noreferrer"
                      ></a>
                    </li>
                    <li>
                      <a
                        title="icicilombard youtube"
                        className="yt-ico"
                        href="https://www.youtube.com/user/ICICILombardLtd"
                        target="_blank"
                        rel="noreferrer"
                      ></a>
                    </li>
                    <li>
                      <a
                        title="icicilombard insta"
                        className="inst-ico"
                        href="https://www.instagram.com/icicilombardofficial"
                        target="_blank"
                        rel="noreferrer"
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Products */}
              <div className="footer-links product-solution">
                <h5>Products</h5>
                <ul>
                  <li>
                    <Link to="/standard-fire">
                      Property
                    </Link>
                  </li>
                  <li>
                    <Link to="/marine-inland">
                      Marine
                    </Link>
                  </li>
                  <li>
                    <Link to="/general-liability">
                      Liability
                    </Link>
                  </li>
                  <li>
                    <Link to="/contractors-risk">Engineering</Link>
                  </li>
                  <li>
                    <Link to="/group-health">Group Health</Link>
                  </li>
                  <li>
                    <a
                      href="https://www.icicilombard.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Retail Products
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://sme.icicilombard.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      SME Products
                    </a>
                  </li>
                  <li>
                    <a
                      href="/assets/pdf/BASEPRODUCTS.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Base Products
                    </a>
                  </li>
                </ul>
              </div>

              {/* Explore */}
              <div className="footer-links explore">
                <h5>Explore</h5>
                <ul>
                  <li>
                    <Link to="/home">Website Home</Link>
                  </li>
                  <li>
                    <Link to="/property-loss-prevention">
                      Property services
                    </Link>
                  </li>
                  <li>
                    <Link to="/vas-solution">Marine Services</Link>
                  </li>
                  <li>
                    <Link to="/risk-health">Group Health Services</Link>
                  </li>
                  <li>
                    <Link to="/risk-engineering">Engineering services</Link>
                  </li>
                  <li>
                    <Link to="/risk-health">Liability Services</Link>
                  </li>
                </ul>
              </div>

              {/* Others */}
              <div className="footer-links">
                <h5>Others</h5>
                <ul>
                  <li>
                    <a
                      href="https://www.icicilombard.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Company Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.icicilombard.com/about-us"
                      target="_blank"
                      rel="noreferrer"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.icicilombard.com/docs/default-source/default-document-library/1010586_26102022170853_hospital_empanelment_criteria.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Hospital Empanelment Criteria
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.icicilombard.com/legal/privacy-policy"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="/assets/pdf/TAT.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Retail Products TAT
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <hr />

            <div className="footer-dis-content">
              <p>
                ICICI Lombard General Insurance Company Ltd. is one of the
                leading private sector general insurance company in India
                offering insurance coverage for motor, health, travel, home,
                student travel and more. Policies can be purchased and renewed
                online as well. Immediate issuance of policy copy online.
              </p>
              <p>
                ICICI trade logo displayed above belongs to ICICI Bank and is
                used by ICICI Lombard GIC Ltd. under license and Lombard logo
                belongs to ICICI Lombard GIC Ltd. Insurance is the subject
                matter of the solicitation. The advertisement contains only an
                indication of cover offered. For more details on risk factors,
                terms, conditions and exclusions, please read the sales brochure
                carefully before concluding a sale. CIN: L67200MH2000PLC129408
              </p>
            </div>
          </div>
        </div>
      </footer>
      {/* footer ends */}
    </div>
  );
};

export default Footerportal;
