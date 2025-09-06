import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Home = () => {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const nextSlide = () => setActive((prev) => (prev + 1) % 4);
  const onSliderClick = (e) => {
    const anchor = e.target.closest && e.target.closest('a');
    if (anchor) return; // don't interfere with link clicks
    nextSlide();
  };
  const onDotClick = (idx, e) => {
    if (e && typeof e.stopPropagation === 'function') e.stopPropagation();
    setActive(idx);
  };
  return(
 
      <div>
    
        <div>
          <div className="content-container" style={{marginTop: '0px'}}>
            {/* banner starts */}
            <div className="container banner">
              <div className="banner-heading">
                <h1>
                  Your business deserves a partner in risk management, stay a step ahead with us
                </h1>
                {/* slider controls moved under know-more button */}
              </div>
              <div className="banner-slider" id="bannerSlider" onClick={onSliderClick}>
                <div id="banner-slide-1" className={`banner-slide ${active === 0 ? 'is-active' : ''}`}>
                  <img src="../assets/images/Indian-Risk-Report-mob.jpg" className="d-none d-md-block img-fluid" alt="Slide 3" />
                  <img src="../assets/images/Indian-Risk-Report-web.jpg" className="d-block d-md-none w-100" alt="Slide 3" />
                  <div className="banner-caption thirdBtnSize">
                    <Link className="btn know-more-btn" to="/india-risk-report">Know More</Link>
                  </div>
                  <div>
                    <a href="https://www.icicilombard.com/docs/default-source/default-document-library/icici-lombard-irm-india-risk-report-2024-edition-2-0.pdf" className="btn cash-mobile">Click Here</a>
                  </div>
                </div>
                <div id="banner-slide-2" className={`banner-slide ${active === 1 ? 'is-active' : ''}`}>
                  <img src="../assets/images/silder-img-1.jpg" className="d-none d-md-block img-fluid" alt="Slide 1" />
                  <img src="../assets/images/silder-img-mob-1.png" className="d-block d-md-none w-100" alt="Slide 1" />
                  <div className="banner-caption">
                    <h5>India Risk Management Awards 2023-2024</h5>
                    <p>Each year, we honor exceptional risk takers in the field of risk management</p>
                    <Link to="/award" className="btn know-more-btn irma-know-mob">Know More</Link>
                  </div>
                </div>
                <div id="banner-slide-3" className={`banner-slide ${active === 2 ? 'is-active' : ''}`}>
                  <img style={{filter: 'brightness(95%)'}} src="../assets/images/silder-img-3.jpg" className="d-none d-md-block img-fluid" alt="Slide 1" height="400px;" />
                  <img src="../assets/images/silder-img-mob-3.png" className="d-block d-md-none w-100" alt="Slide 1" />
                  <div className="banner-caption">
                    <h5>Unlocking new opportunities – ICICI Lombard IIO</h5>
                    <p>India’s first Financial Services SEZ dedicated to development and export of financial services in and from India</p>
                    <Link to="/ifsc-office" className="btn know-more-btn lastBtn">Know More</Link>
                  </div>
                </div>
                <div id="banner-slide-4" className={`banner-slide ${active === 3 ? 'is-active' : ''}`}>
                  <img src="../assets/images/cashless-banner.jpg" className="d-none d-md-block img-fluid" alt="Slide 3" />
                  <img src="../assets/images/anywhere-cashless-mobile.png" className="d-block d-md-none w-100" alt="Slide 3" />
                  <div className="banner-caption thirdBtnSize">
                    <Link to="/cashless" className="btn know-more-btn cash-mob">Know More</Link>
                  </div>
                </div>
                {/* bottom slider controls (desktop) */}
                <div className="slider-dots" role="tablist" aria-label="Hero banners">
                  <button id="slick-slide-control00" type="button" role="tab" aria-controls="banner-slide-1" aria-selected={active===0}
                    className={`slider-dot ${active===0 ? 'active' : ''}`}
                    onClick={(e)=>onDotClick(0,e)}
                    title="Slide 1" />
                  <button id="slick-slide-control01" type="button" role="tab" aria-controls="banner-slide-2" aria-selected={active===1}
                    className={`slider-dot ${active===1 ? 'active' : ''}`}
                    onClick={(e)=>onDotClick(1,e)}
                    title="Slide 2" />
                  <button id="slick-slide-control02" type="button" role="tab" aria-controls="banner-slide-3" aria-selected={active===2}
                    className={`slider-dot ${active===2 ? 'active' : ''}`}
                    onClick={(e)=>onDotClick(2,e)}
                    title="Slide 3" />
                  <button id="slick-slide-control03" type="button" role="tab" aria-controls="banner-slide-4" aria-selected={active===3}
                    className={`slider-dot ${active===3 ? 'active' : ''}`}
                    onClick={(e)=>onDotClick(3,e)}
                    title="Slide 4" />
                </div>
              </div>
            </div>
            <section className="section section-counter-figure">
              <div className="container">
                <div className="row" style={{paddingTop: '20px', paddingBottom: '15px'}}>
                  <div className="col-12">
                    <div className="counter-figure-wrapper">
                      <div className="counter-content-wrapper">
                        <h2 className="counter-numbers" data-number={2000}>₹121.8B</h2>
                        <p>Gross written Premium</p>
                        <img src="../assets/images/icons/lines.svg" className="img-fluid lines-graphics" alt="lines" />
                      </div>
                      <div className="counter-content-wrapper">
                        <h2 className="counter-numbers" data-number={6000}>86%</h2>
                        <p>Claim Settlement</p>
                        <img src="../assets/images/icons/lines.svg" className="img-fluid lines-graphics" alt="lines" />
                      </div>
                      <div className="counter-content-wrapper">
                        <h2 className="counter-numbers" data-number={3000}>11.1%</h2>
                        <p>Market Share</p>
                        <img src="../assets/images/icons/lines.svg" className="img-fluid lines-graphics" alt="lines" />
                      </div>
                      <div className="counter-content-wrapper">
                        <h2 className="counter-numbers" data-number={3000}>25K+</h2>
                        <p>Customers</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="figure-year">
                  <p>Numbers are for FY 2024-25 for Commercial lines business</p>
                </div>
             
              </div>
            </section>
            {/* banner end */}
            {/* section we offer starts */}
            <section id="section-we-offer" className="section-we-offer">
              <div className="container">
                <div className="section-wrapper">
                  <div className="section-we-offer-content text-center">
                    <img src="../assets/images/icons/we-offer-1.svg" className="img-fluid" alt="lines" />
                    <p>We provide customized solutions and services for your business.</p>
                  </div>
                  <div className="section-we-offer-content text-center">
                    <img src="../assets/images/icons/we-offer-2.svg" className="img-fluid" alt="lines" />
                    <p>We offer instant claims processing and support whenever you need.</p>
                  </div>
                  <div className="section-we-offer-content text-center">
                    <img src="../assets/images/icons/we-offer-3.svg" className="img-fluid" alt="lines" />
                    <p>We offer you the flexibility to easily manage your policies.</p>
                  </div>
                </div>
              </div>
            </section>
            <section id="section-leader" className="section-leader orange-g-bg orange-bar">
              <div className="container">
                <div className="section-wrapper">
                  <div className="section-leader-content text-center">
                    <h2 className="font-25">#1</h2>
                    <p>Market leader in Marine Cargo and Liability </p>
                  </div>
                  <div className="section-leader-content text-center">
                    <h2 className="font-25">2nd</h2>
                    <p>Largest player in Fire<br />&amp; Engineering line of business</p>
                  </div>
                  <div className="section-leader-content text-center">
                    <h2 className="font-25">3500+</h2>
                    <p>Corporate Customers</p>
                  </div>
                </div>
              </div>
            </section>
            <section className="industry-section-main">
              <div className="container" style={{maxWidth: '100%'}}>
                <div className="bg-white flex-row nav-border">
                  <div className="align-items-start">
                    <div className="industry-section-options select-tab" style={{display: 'contents'}}>
                      <div className="dropdown industry-list-dropdown" style={{top: '-20px'}}>
                        <button type="button" className="btn dropdown-toggle" data-toggle="dropdown">
                          Industry List
                          <img src="../assets/images/icons/white-down-arrow.svg" className="img-fluid" alt="Dropdown arrow" />
                        </button>
                        <div className="nav flex-column nav-pills me-3 nav-shadow m-l-m29 p-l-30 bg-white" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                          <div className="dropdown-menu pl-3 text-left" style={{marginLeft: '3% !important'}}>
                            <a className="dropdown-item ICICIMenu mb-2 nav-link" id="v-link-tab1" data-bs-toggle="pill" data-bs-target="#v-link-tab01" href="#v-link-tab1" type="button" role="tab" aria-controls="v-link-tab01" aria-selected="true" onClick={() => window.toggleActive && window.toggleActive(0)}>Pharmaceuticals</a>
                            <a className="dropdown-item ICICIMenu mb-2 nav-link" id="v-link-tab2" data-bs-toggle="pill" data-bs-target="#v-link-tab02" type="button" role="tab" aria-controls="v-link-tab02" aria-selected="false" onClick={() => window.toggleActive && window.toggleActive(1)}>Construction &amp; Infrastructure</a>
                            <a className="dropdown-item ICICIMenu mb-2 nav-link" id="v-link-tab3" data-bs-toggle="pill" data-bs-target="#v-link-tab03" href="#v-link-tab03" type="button" role="tab" aria-controls="v-link-tab03" aria-selected="false" onClick={() => window.toggleActive && window.toggleActive(2)}>IT/ITES</a>
                            <a className="dropdown-item ICICIMenu mb-2 nav-link" id="v-link-tab4" data-bs-toggle="pill" data-bs-target="#v-link-tab04" href="#v-link-tab04" type="button" role="tab" aria-controls="v-link-tab04" aria-selected="false" onClick={() => window.toggleActive && window.toggleActive(3)}>Banking &amp; Financial Services</a>
                            <a className="dropdown-item ICICIMenu mb-2 nav-link" id="v-link-tab5" data-bs-toggle="pill" data-bs-target="#v-link-tab05" href="#v-link-tab05" type="button" role="tab" aria-controls="v-link-tab05" aria-selected="false" onClick={() => window.toggleActive && window.toggleActive(4)}>FMCG &amp; Consumer Goods</a>
                          </div>
                          <div className="tab-content" id="v-pills-tabContent">
                            <div className="tab-pane fade show active me-4" id="v-link-tab01" role="tabpanel" aria-labelledby="v-link-tab1">
                              <div className="row">
                                <div className="col-lg-5 col-12 industry-info-img">
                                  <img src="../assets/images/industry-list-img.svg" className="img-fluid m-t-0f" alt="Industry-list" style={{marginLeft: '-50px'}} />
                                </div>
                                <div className="col-lg-7 col-12 industry-info-main">
                                  <div id="pharma" className="industry-info p-l-0 pharmaSEC">
                                    <div className="industry-info-head">
                                      {/*<span class="sub-heading">Industry</span>*/}
                                      <h2>Pharmaceuticals</h2>
                                      <a className="next-industry" style={{float: 'right'}} id="v-link-tab2" data-bs-toggle="pill" data-bs-target="#v-link-tab02" href="#v-link-tab02" type="button" role="tab" aria-controls="v-link-tab02" aria-selected="false" onClick={() => window.toggleActive && window.toggleActive(1)}>
                                        <img src="../assets/images/icons/next-arrow.svg" className="img-fluid" alt="Arrow" />
                                      </a>
                                      <p>
                                        Empowering the future of healthcare, proudly serving
                                        150+ customers in the industry
                                      </p>
                                    </div>
                                    <div id="pharma-accordion1">
                                      <div className="industry-accordion">
                                        <div className="industry-accordion-header">
                                          <a className="card-link" data-toggle="collapse" href="#pharma-collapseOne">
                                            Overview
                                            <img src="../assets/images/icons/arrow-up.svg" className="img-fluid plus" alt="Arrow Up" />
                                            <img src="../assets/images/icons/arrow-down.svg" className="img-fluid minus" alt="Arrow Down" />
                                          </a>
                                        </div>
                                        <div id="pharma-collapseOne" className="Home-slider-mob collapse show" data-parent="#pharma-accordion1" style={{width: '640px'}}>
                                          <section className="container p-l-0">
                                            <div className="testimonial mySwiper">
                                              <div className="testi-content swiper-wrapper">
                                                <div className="slide swiper-slide">
                                                  <h3 className="text-left w-100">
                                                    Growth
                                                    Landscape and Industry Scope
                                                  </h3>
                                                  <p className="m-t-0f">
                                                    The pharmaceutical
                                                    landscape in India boasts
                                                    diverse segments, including
                                                    Generic drugs, OTC Medicines,
                                                    APIs, Bulk Drugs, Vaccines, and
                                                    more. Forecasts predict that the
                                                    Indian pharmaceutical industry
                                                    will scale to $65 billion by
                                                    2024 and further surge to $130
                                                    billion by 2030.
                                                  </p>
                                                  <p>
                                                    India's pivotal role as the
                                                    leading global exporter of
                                                    generic medicines is
                                                    complemented by strategic
                                                    investments in diverse
                                                    pharmaceutical realms.
                                                    Initiatives span Contract
                                                    Research Organizations (CROs),
                                                    test drugs, and Clinical Trials.
                                                    This multifaceted strategy
                                                    targets reduced healthcare costs
                                                    and enhanced well-being.
                                                    Notably, India stands apart as
                                                    the sole country boasting the
                                                    highest number of US-FDA
                                                    compliant pharmaceutical plants
                                                    beyond the USA.
                                                  </p>
                                                  <br /><br />
                                                </div>
                                                <div className="slide swiper-slide">
                                                  <h3 className="text-left w-100">
                                                    Way
                                                    forward for the industry
                                                  </h3>
                                                  <p className="m-t-0f">
                                                    The Indian
                                                    pharmaceutical domain emerges as
                                                    a promising investment avenue
                                                    for global and local
                                                    stakeholders, assuring an upward
                                                    growth trajectory. Expanding
                                                    this sector not only promises
                                                    worldwide access to affordable
                                                    generic medications but also
                                                    demands proactive measures from
                                                    pharmaceutical companies.
                                                    Upholding quality, securing
                                                    data, enhancing supply chains,
                                                    consumer redressal, compliance
                                                    adherence, safeguarding
                                                    intellectual property, and
                                                    curbing counterfeits are
                                                    essential to uphold trust and
                                                    bolster confidence in this
                                                    evolving landscape.
                                                  </p>
                                                  <br /><br />
                                                </div>
                                              </div>
                                              <div className="swiper-pagination" />
                                            </div>
                                          </section>
                                          <div id="testimonial-slider" className="testimonialSlider" style={{display: 'none'}}>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="industry-accordion">
                                        <div className="industry-accordion-header">
                                          <a className="collapsed card-link" data-toggle="collapse" href="#pharma-collapseTwo">
                                            ASSOCIATED RISKS
                                            <img src="../assets/images/icons/arrow-up.svg" className="img-fluid plus" alt="Arrow Up" />
                                            <img src="../assets/images/icons/arrow-down.svg" className="img-fluid minus" alt="Arrow Down" />
                                          </a>
                                        </div>
                                        <div id="pharma-collapseTwo" className="Home-slider-mob collapse" data-parent="#pharma-accordion1">
                                          <div id="testimonial-slider" className="testimonialSlider">
                                            <div className="industry-accordion-body">
                                              <p>
                                                The pharmaceutical domain has long
                                                championed research and development
                                                across its domains. However, substantial
                                                investments come with their set of
                                                challenges:
                                              </p>
                                              <div className="row p-t-10">
                                                <div className="col-md-6">
                                                  <ol className="industry-list" type={1} start={1}>
                                                    <li>
                                                      <span className="tooltipmsg">
                                                        Clinical Trials
                                                        <span className="tooltipmsg-text industry-list-tooltip">
                                                          Potential
                                                          litigations stemming
                                                          from harm, both
                                                          negligent and
                                                          non-negligent,
                                                          sustained by trial
                                                          subjects.
                                                        </span>
                                                      </span>
                                                    </li>
                                                    <li>
                                                      <span className="tooltipmsg">
                                                        Logistic Disruptions
                                                        <span className="tooltipmsg-text industry-list-tooltip">
                                                          Real-time
                                                          visibility gaps in
                                                          transportation,
                                                          delivery, cargo
                                                          handling,
                                                          distribution, and
                                                          inventory
                                                          management.
                                                        </span>
                                                      </span>
                                                    </li>
                                                    <li>
                                                      <span className="tooltipmsg">
                                                        Cybersecurity Concerns
                                                        <span className="tooltipmsg-text industry-list-tooltip">
                                                          Unauthorized
                                                          access to sensitive
                                                          information
                                                          jeopardizing trust,
                                                          causing downtime,
                                                          and triggering
                                                          significant revenue
                                                          losses.
                                                        </span>
                                                      </span>
                                                    </li>
                                                  </ol>
                                                </div>
                                                <div className="col-md-6">
                                                  <ol className="industry-list gray-txt" type={1} start={4}>
                                                    <li>
                                                      <span className="tooltipmsg">
                                                        Product recall and
                                                        liability
                                                        <span className="tooltipmsg-text industry-list-tooltip w-300">
                                                          Damages
                                                          stemming from
                                                          product recalls or
                                                          disposals, impacting
                                                          the manufacturing
                                                          landscape.
                                                        </span>
                                                      </span>
                                                    </li>
                                                    <li>
                                                      <span className="tooltipmsg">
                                                        Counterfeit Medicinal
                                                        Products
                                                        <span className="tooltipmsg-text industry-list-tooltip">
                                                          The
                                                          lurking risk of
                                                          substandard products
                                                          tarnishing brand
                                                          reputation within
                                                          the market.
                                                        </span>
                                                      </span>
                                                    </li>
                                                    <li>
                                                      <span className="tooltipmsg">
                                                        Patent Cliffs
                                                        <span className="tooltipmsg-text industry-list-tooltip w-300">
                                                          The
                                                          steep decline in
                                                          revenue post-patent
                                                          expiry of key
                                                          products.
                                                        </span>
                                                      </span>
                                                    </li>
                                                  </ol>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="industry-accordion">
                                        <div className="industry-accordion-header">
                                          <a className="collapsed card-link" data-toggle="collapse" href="#pharma-collapseThree">
                                            RECOMMENDED SOLUTIONS
                                            <img src="../assets/images/icons/arrow-up.svg" className="img-fluid plus" alt="Arrow Up" />
                                            <img src="../assets/images/icons/arrow-down.svg" className="img-fluid minus" alt="Arrow Down" />
                                          </a>
                                        </div>
                                        <div id="pharma-collapseThree" className="Home-slider-mob collapse" data-parent="#pharma-accordion1">
                                          <div className="industry-accordion-body recommend-wrapper">
                                            {/* start */}
                                            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                              <ol className="carousel-indicators">
                                                <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active">
                                                </li>
                                                <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                                                <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                                              </ol>
                                              <div className="carousel-inner">
                                                <div className="carousel-item active">
                                                  <div className="row">
                                                    <div className="col-lg-3 col-6 industry-accordion-content text-center">
                                                      <img src="../assets/images/clinical-img.svg" alt="Clinical" className="w-100" />
                                                      <h3>
                                                        Clinical Trials/BE Studies Liability
                                                      </h3>
                                                      <p>
                                                        Cover for injury/death of the trial participants
                                                      </p>
                                                    </div>
                                                    <div className="col-lg-3 col-6 industry-accordion-content  text-center">
                                                      <img src="../assets/images/cyber-coverage.png" alt="Product" className="w-100" />
                                                      <h3>
                                                        Cyber Insurance
                                                      </h3>
                                                      <p>
                                                        Insures the corporate for their cyber risks
                                                      </p>
                                                    </div>
                                                    <div className="col-lg-3 col-6 industry-accordion-content  text-center">
                                                      <img src="../assets/images/CGL.png" alt="General" className="w-100" />
                                                      <h3>
                                                        Comprehensive General Liability Insurance (CGL)
                                                      </h3>
                                                      <p>
                                                        Cover against customer lawsuits over defective product
                                                      </p>
                                                    </div>
                                                    <div className="col-lg-3 col-6 industry-accordion-content  text-center">
                                                      <img src="../assets/images/marine-open-cover.png" alt="E&O" />
                                                      <h3>
                                                        Marine Sales Turnover Policy
                                                      </h3>
                                                      <p>
                                                        All legs of transit are collectively covered (Export/Import/Domestic Sales/Stock transfer)
                                                      </p>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <button className="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
                                                <span className="carousel-control-next-icon" aria-hidden="true" />
                                                <span className="sr-only">Next</span>
                                              </button>
                                            </div>
                                            {/* end */}
                                            <div className="rightarrow">
                                              <i className="fa-solid fa-arrow-right-long" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="industry-accordion">
                                        <div className="industry-accordion-header">
                                          <a className="collapsed card-link" data-toggle="collapse" href="#pharma-collapseFour">
                                            INDUSTRY CASE STUDY
                                            <img src="../assets/images/icons/arrow-up.svg" className="img-fluid plus" alt="Arrow Up" />
                                            <img src="../assets/images/icons/arrow-down.svg" className="img-fluid minus" alt="Arrow Down" />
                                          </a>
                                        </div>
                                        <div id="pharma-collapseFour" className="Home-slider-mob collapse" data-parent="#pharma-accordion1">
                                          <div id="Pharma-slider">
                                            <div className="industry-accordion-body p-t-20">
                                              {/* <h3 class="p-t-10">Case Study 1</h3> */}
                                              <p>
                                                The insured company is a global pharmaceutical conglomerate. Operating in multiple countries with a workforce of ~ 15,000 individuals from diverse nationalities, this case study highlights insurer’s efforts to combat insured company’s phishing threats with the aid of a dedicated yearlong simulation exercise.
                                              </p>
                                            </div>
                                          </div>
                                          <Link to="/case-pharma" className="case-studies-gaurav case-studies-know-more">
                                            Read More
                                            <img src="../assets/images/icons/next-arrow.svg" className="img-fluid" alt="Arrow" style={{marginLeft: '10px'}} />
                                          </Link>
                                        </div>
                                      </div>
                                      <div className="industry-accordion">
                                        <div className="industry-accordion-header">
                                          <a className="collapsed card-link" data-toggle="collapse" href="#pharma-collapseFive">
                                            TESTIMONIALS
                                            <img src="../assets/images/icons/arrow-up.svg" className="img-fluid plus" alt="Arrow Up" />
                                            <img src="../assets/images/icons/arrow-down.svg" className="img-fluid minus" alt="Arrow Down" />
                                          </a>
                                        </div>
                                        <div id="pharma-collapseFive" className="Home-slider-mob collapse mt-2" data-parent="#pharma-accordion1">
                                          <div id="Pharma-slider" className="testimonialSlider">
                                            <div className="industry-accordion-body">
                                              <h3>ACG Group</h3>
                                              <p className="text-italic text-black">
                                                “ICICI Lombard has been our insurance
                                                partner for more than a decade. The
                                                company has a diverse portfolio of
                                                non-health services, and have
                                                successfully helped us sail through the
                                                risk hurdles with outstanding solutions
                                                in Property and Marine segment.”
                                              </p>
                                              <div className="testimonial-bio-wrapper m-t-20m">
                                                <div className="testimonial-name">
                                                  <p className="name-chief mb-0 mt-3" style={{fontSize: '17px', fontStyle: 'italic', color: '#0b406e'}}>
                                                    Mr. Neeraj Bhavsar
                                                  </p>
                                                  <p className="title-chief mt-0">
                                                    Head – Finance Insurance
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="tab-pane fade me-4" id="v-link-tab02" role="tabpanel" aria-labelledby="v-link-tab2">
                              <div className="row">
                                <div className="col-lg-5 industry-info-img">
                                  <img src="../assets/images/Construction.png" className="img-fluid" alt="Industry-list" style={{marginLeft: '-50px'}} />
                                </div>
                                <div className="col-lg-7 industry-info-main p-l-0">
                                  <div id="pharma" className="industry-info p-l-0 pharmaSEC">
                                    <div className="industry-info-head">
                                      {/*<span class="sub-heading">Industry</span>*/}
                                      <h2>Construction &amp; Infrastructure</h2>
                                      <a id="v-link-tab1" data-bs-toggle="pill" data-bs-target="#v-link-tab01" href="#v-link-tab01" type="button" role="tab" aria-controls="v-link-tab01" aria-selected="true" onClick={() => window.toggleActive && window.toggleActive(0)} className="next-industry" style={{float: 'left', position: 'absolute', WebkitTransform: 'scaleX(-1)', transform: 'scaleX(-1)', display: 'block', right: '50px'}}>
                                        <img src="../assets/images/icons/next-arrow.svg" className="img-fluid" alt="Arrow" />
                                      </a>
                                      <a id="v-link-tab3" data-bs-toggle="pill" data-bs-target="#v-link-tab03" href="#v-link-tab03" type="button" role="tab" aria-controls="v-link-tab03" aria-selected="false" onClick={() => window.toggleActive && window.toggleActive(2)} className="next-industry" style={{float: 'right'}}>
                                        <img src="../assets/images/icons/next-arrow.svg" className="img-fluid" alt="Arrow" />
                                      </a>
                                    </div>
                                    <div id="pharma-accordion3">
                                      <div className="industry-accordion">
                                        <div className="industry-accordion-header">
                                          <a className="card-link" data-toggle="collapse" href="#constructionOne">
                                            Overview
                                            <img src="../assets/images/icons/arrow-up.svg" className="img-fluid plus" alt="Arrow Up" />
                                            <img src="../assets/images/icons/arrow-down.svg" className="img-fluid minus" alt="Arrow Down" />
                                          </a>
                                        </div>
                                        <div id="constructionOne" className="Home-slider-mob collapse show" data-parent="#pharma-accordion3" style={{width: '640px'}}>
                                          <section className="container p-l-0">
                                            <div className="testimonial mySwiper">
                                              <div className="testi-content swiper-wrapper">
                                                <div className="slide swiper-slide">
                                                  <h3 className="text-left w-100">
                                                    Landscape
                                                  </h3>
                                                  <p className="m-t-0f">
                                                    Development of infrastructure has a multiplier effect on demand and efficiency of transport and increases commercial and entrepreneurship opportunities. This vital sector propels India's comprehensive progress, receiving keen governmental attention to institute policies ensuring prompt establishment of world-class infrastructure. Encompassing power, bridges, dams, roads, and urban development, it lays the foundation for the nation's holistic growth.
                                                  </p>
                                                  <br /><br />
                                                </div>
                                                <div className="slide swiper-slide">
                                                  <h3 className="text-left w-100">
                                                    Way
                                                    forward
                                                  </h3>
                                                  <p className="m-t-0f">
                                                    In this dynamic environment, the construction sector embraces intricate possibilities, requiring not only cost efficiency but also technological prowess. With a surge in infrastructure capital investment in Budget 2023-24, marked at Rs.10 lakh crore (US$ 122 billion), equivalent to 3.3% of GDP, construction companies are poised to compete effectively in the realm of sophisticated projects. This new era demands a synergy of competence in both efficiency and technology, shaping a future where innovation leads the way to sustainable achievement
                                                  </p>
                                                  <br /><br />
                                                </div>
                                              </div>
                                              <div className="swiper-pagination" />
                                            </div>
                                          </section>
                                          <div id="testimonial-slider" className="testimonialSlider" style={{display: 'none'}}>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="industry-accordion">
                                        <div className="industry-accordion-header">
                                          <a className="collapsed card-link" data-toggle="collapse" href="#construction-collapseTwo">
                                            ASSOCIATED RISKS
                                            <img src="../assets/images/icons/arrow-up.svg" className="img-fluid plus" alt="Arrow Up" />
                                            <img src="../assets/images/icons/arrow-down.svg" className="img-fluid minus" alt="Arrow Down" />
                                          </a>
                                        </div>
                                        <div id="construction-collapseTwo" className="Home-slider-mob collapse" data-parent="#pharma-accordion3">
                                          <div id="Construction-industry-header" className="testimonialSlider">
                                            <div className="row p-t-10">
                                              <div className="col-md-6">
                                                <ol className="industry-list gray-txt" type={1} start={1}>
                                                  <li>
                                                    <span className="tooltipmsg">
                                                      Climate change
                                                      <span className="tooltipmsg-text industry-list-tooltip  w-300">Extreme weather events pose threats, damaging infrastructure, escalating project costs, and disrupting schedules.</span>
                                                    </span>
                                                  </li>
                                                  <li>
                                                    <span className="tooltipmsg">
                                                      Supply Chain Challenges
                                                      <span className="tooltipmsg-text industry-list-tooltip w-300">Vulnerabilities arise as products traverse the supply chain, encompassing shortages and threats to services.</span>
                                                    </span>
                                                  </li>
                                                  <li>
                                                    <span className="tooltipmsg">
                                                      Worker Safety Concerns
                                                      <span className="tooltipmsg-text industry-list-tooltip  w-300">Hazardous conditions expose workers, necessitating robust safety measures to avert accidents and costly litigations.</span>
                                                    </span>
                                                  </li>
                                                </ol>
                                              </div>
                                              <div className="col-md-6">
                                                <ol className="industry-list" type={1} start={4}>
                                                  <li>
                                                    <span className="tooltipmsg">
                                                      Cost Overruns and Delays
                                                      <span className="tooltipmsg-text industry-list-tooltip w-300">Common occurrences, often caused by factors like labor and material shortages, altering project scope.</span>
                                                    </span>
                                                  </li>
                                                  <li>
                                                    <span className="tooltipmsg">
                                                      Environmental Pressures
                                                      <span className="tooltipmsg-text industry-list-tooltip  w-300">Health risks mount due to pollution, radiation, noise, land use patterns, and the changing climate.</span>
                                                    </span>
                                                  </li>
                                                  <li>
                                                    <span className="tooltipmsg">
                                                      Political and Regulatory Instabilities
                                                      <span className="tooltipmsg-text industry-list-tooltip w-300">Uncertainty in the political realm can lead to delays, cancellations, heightened costs, and increased risks for stakeholders.</span>
                                                    </span>
                                                  </li>
                                                </ol>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="industry-accordion">
                                        <div className="industry-accordion-header">
                                          <a className="collapsed card-link" data-toggle="collapse" href="#construction-collapseThree">
                                            RECOMMENDED SOLUTIONS
                                            <img src="../assets/images/icons/arrow-up.svg" className="img-fluid plus" alt="Arrow Up" />
                                            <img src="../assets/images/icons/arrow-down.svg" className="img-fluid minus" alt="Arrow Down" />
                                          </a>
                                        </div>
                                        <div id="construction-collapseThree" className=" Home-slider-mob collapse" data-parent="#pharma-accordion3">
                                          <div className="industry-accordion-body recommend-wrapper">
                                            {/* start */}
                                            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                              <ol className="carousel-indicators">
                                                <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active">
                                                </li>
                                                <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                                                <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                                              </ol>
                                              <div className="carousel-inner">
                                                <div className="carousel-item active">
                                                  <div className="row">
                                                    <div className="col-lg-3 col-6 industry-accordion-content text-center">
                                                      <img src="../assets/images/erection-all-risk.png" alt="Clinical" className="w-100" />
                                                      <h3>
                                                        Erection all risk
                                                      </h3>
                                                      <p>
                                                        Covers erection and installation of plant machinery and equipmnt
                                                      </p>
                                                    </div>
                                                    <div className="col-lg-3 col-6 industry-accordion-content  text-center">
                                                      <img src="../assets/images/car-icon.png" alt="Product" className="w-100" />
                                                      <h3>
                                                        Contractor's all risk
                                                      </h3>
                                                      <p>
                                                        Covers risk arising during construction period
                                                      </p>
                                                    </div>
                                                    <div className="col-lg-3 col-6 industry-accordion-content  text-center">
                                                      <img src="../assets/images/professional-indemnity-icon.png" alt="General" className="w-100" />
                                                      <h3>
                                                        Professional Indemnity Insurance (PI)
                                                      </h3>
                                                      <p>
                                                        Cover against customer lawsuits over negligent services
                                                      </p>
                                                    </div>
                                                    <div className="col-lg-3 col-6 industry-accordion-content text-center">
                                                      <img src="../assets/images/CGL.png" alt="Clinical" className="w-100" />
                                                      <h3>
                                                        Comprehensive General Liability Insurance (CGL)
                                                      </h3>
                                                      <p>
                                                        Cover against lawsuits for Injury/death/property damage
                                                      </p>
                                                    </div>
                                                  </div>
                                                  <div className="row">
                                                    <div className="col-lg-3 col-6 industry-accordion-content  text-center">
                                                      <img src="../assets/images/SFSP.png" alt="Product" className="w-100" />
                                                      <h3>
                                                        SFSP
                                                      </h3>
                                                      <p>
                                                        Standard Fire and special peril Policy
                                                      </p>
                                                    </div>
                                                    <div className="col-lg-3 col-6 industry-accordion-content  text-center">
                                                      <img src="../assets/images/marine-open-cover.png" alt="General" className="w-100" />
                                                      <h3>
                                                        Marine Open policies -Inland, Export/Import
                                                      </h3>
                                                      <p>
                                                        Covers specified legs of transit
                                                      </p>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <button className="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
                                                <span className="carousel-control-prev-icon" aria-hidden="true" />
                                                <span className="sr-only">Previous</span>
                                              </button>
                                              <button className="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
                                                <span className="carousel-control-next-icon" aria-hidden="true" />
                                                <span className="sr-only">Next</span>
                                              </button>
                                            </div>
                                            {/* end */}
                                            <div className="rightarrow">
                                              <i className="fa-solid fa-arrow-right-long" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="industry-accordion">
                                        <div className="industry-accordion-header">
                                          <a className="collapsed card-link" data-toggle="collapse" href="#construction-collapseFour">
                                            INDUSTRY CASE STUDY
                                            <img src="../assets/images/icons/arrow-up.svg" className="img-fluid plus" alt="Arrow Up" />
                                            <img src="../assets/images/icons/arrow-down.svg" className="img-fluid minus" alt="Arrow Down" />
                                          </a>
                                        </div>
                                        <div id="construction-collapseFour" className="Home-slider-mob  collapse" data-parent="#pharma-accordion3">
                                          <div id="Construction-slider">
                                            <div className="industry-accordion-body p-t-20">
                                              {/* <h3 class="p-t-10">Case Study 1</h3> */}
                                              <p>The insured company is a prominent and well-established paper and board manufacturing company based in India. With a rich history spanning several decades, the company has earned a reputation for excellence in producing high-quality paper and board products. </p>
                                            </div>
                                          </div>
                                          <Link to="/case-infra" className="case-studies-gaurav  case-studies-know-more m-t-20" style={{marginTop: '-30px'}}>
                                            Read More
                                            <img src="../assets/images/icons/next-arrow.svg" className="img-fluid" alt="Arrow" style={{marginLeft: '10px'}} />
                                          </Link>
                                        </div>
                                      </div>
                                      <div className="industry-accordion">
                                        <div className="industry-accordion-header">
                                          <a className="collapsed card-link" data-toggle="collapse" href="#construction-collapseFive">
                                            TESTIMONIALS
                                            <img src="../assets/images/icons/arrow-up.svg" className="img-fluid plus" alt="Arrow Up" />
                                            <img src="../assets/images/icons/arrow-down.svg" className="img-fluid minus" alt="Arrow Down" />
                                          </a>
                                        </div>
                                        <div id="construction-collapseFive" className="Home-slider-mob collapse mt-2" data-parent="#pharma-accordion3">
                                          <section className="container p-l-0">
                                            <div className="testimonial mySwiper">
                                              <div className="testi-content swiper-wrapper">
                                                <div className="slide swiper-slide">
                                                  <h3 className="text-left w-100">
                                                    Panchshil realty
                                                  </h3>
                                                  <p className="m-t-0f text-left w-100 text-black text-italic">
                                                    "We have got ICICI Lombard in
                                                    mnay of our projects and find
                                                    them as one of the players in
                                                    the market that take prompt
                                                    commercial calls at the time of
                                                    any claim. <br />We prefer ICICI
                                                    Lombard for our CAR policies. "
                                                  </p>
                                                  <div className="testimonial-bio-wrapper m-t-20m text-left w-100">
                                                    <div className="testimonial-name p-t-20">
                                                      <p className="name-chief mb-0 mt-3" style={{fontSize: '17px', fontStyle: 'italic', color: '#0b406e'}}>
                                                        Neeraj Thakur
                                                      </p>
                                                      <p className="title-chief mt-0">
                                                        Senior Manager
                                                      </p>
                                                    </div>
                                                  </div>
                                                  <br />
                                                </div>
                                                <div className="slide swiper-slide">
                                                  <h3 className="text-left w-100">
                                                    Punj
                                                    Lloyd
                                                  </h3>
                                                  <p className="m-t-0f">
                                                    "I appreciate the kind of
                                                    support ICICI lombard provides
                                                    us in insuring pur projects &amp;
                                                    employees. They are transparent
                                                    in educating us with our
                                                    requirements."
                                                  </p>
                                                  <div className="testimonial-bio-wrapper m-t-20m text-left w-100">
                                                    <div className="testimonial-name p-t-20">
                                                      <p className="name-chief mb-0 mt-3 text-left w-100" style={{fontSize: '17px', fontStyle: 'italic', color: '#0b406e'}}>
                                                        Girish Vazirani
                                                      </p>
                                                      <p className="title-chief mt-0 text-left w-100">
                                                        General Manager
                                                      </p>
                                                    </div>
                                                  </div>
                                                  <br />
                                                </div>
                                                <div className="slide swiper-slide">
                                                  <h3 className="text-left w-100">
                                                    Larsen &amp; Toubro
                                                  </h3>
                                                  <p className="m-t-0f">
                                                    "Customer friendly insurer. Goes
                                                    the extra mile to meet
                                                    deliverables. Happy to work with
                                                    ICICI Lombard."
                                                  </p>
                                                  <div className="testimonial-bio-wrapper m-t-20m text-left w-100">
                                                    <div className="testimonial-name p-t-20">
                                                      <p className="name-chief mb-0 mt-3 text-left w-100" style={{fontSize: '17px', fontStyle: 'italic', color: '#0b406e'}}>
                                                        A M Balaji
                                                      </p>
                                                      <p className="title-chief mt-0 text-left w-100">
                                                        DGM - Insurance
                                                      </p>
                                                    </div>
                                                  </div>
                                                  <br />
                                                </div>
                                              </div>
                                              <div className="swiper-pagination" />
                                            </div>
                                          </section>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="tab-pane fade me-4" id="v-link-tab03" role="tabpanel" aria-labelledby="v-link-tab3">
                              <div className="row">
                                <div className="col-lg-5 industry-info-img">
                                  <img src="../assets/images/ITES.png" className="img-fluid" alt="Industry-list" style={{marginLeft: '-50px'}} />
                                </div>
                                <div className="col-lg-7 industry-info-main">
                                  <div id="pharma" className="industry-info p-l-0 pharmaSEC">
                                    <div className="industry-info-head">
                                      {/*<span class="sub-heading">Industry</span>*/}
                                      <h2>IT/ITES</h2>
                                      <a id="v-link-tab2" data-bs-toggle="pill" data-bs-target="#v-link-tab02" href="#v-link-tab02" type="button" role="tab" aria-controls="v-link-tab02" aria-selected="false" onClick={() => window.toggleActive && window.toggleActive(1)} className="next-industry" style={{float: 'left', position: 'absolute', WebkitTransform: 'scaleX(-1)', transform: 'scaleX(-1)', display: 'block', right: '50px'}}>
                                        <img src="../assets/images/icons/next-arrow.svg" className="img-fluid" alt="Arrow" />
                                      </a>
                                      <a id="v-link-tab4" data-bs-toggle="pill" data-bs-target="#v-link-tab04" href="#v-link-tab04" type="button" role="tab" aria-controls="v-link-tab04" aria-selected="false" onClick={() => window.toggleActive && window.toggleActive(3)} className="next-industry" style={{float: 'right'}}>
                                        <img src="../assets/images/icons/next-arrow.svg" className="img-fluid" alt="Arrow" />
                                      </a>
                                      <p>
                                        900+ satisfied customers &amp; counting: Your IT Safety Assurance
                                      </p>
                                    </div>
                                    <div id="pharma-accordion4">
                                      <div className="industry-accordion">
                                        <div className="industry-accordion-header">
                                          <a className=" card-link" data-toggle="collapse" href="#ITES-collapseOne">
                                            OVERVIEW
                                            <img src="../assets/images/icons/arrow-up.svg" className="img-fluid plus" alt="Arrow Up" />
                                            <img src="../assets/images/icons/arrow-down.svg" className="img-fluid minus" alt="Arrow Down" />
                                          </a>
                                        </div>
                                        <div id="ITES-collapseOne" className="Home-slider-mob collapse show" data-parent="#pharma-accordion4" style={{width: '640px'}}>
                                          <section className="container p-l-0">
                                            <div className="testimonial mySwiper">
                                              <div className="testi-content swiper-wrapper">
                                                <div className="slide swiper-slide">
                                                  <h3 className="text-left w-100">
                                                    Industry
                                                    Size
                                                  </h3>
                                                  <p>
                                                    In this intricate tapestry of ITES, one finds a plethora of sub-sectors like business process outsourcing (BPO), knowledge process outsourcing (KPO), legal process outsourcing (LPO), and IT outsourcing (ITO). These diverse components converge to form the expansive ITES industry. Projections underline that this industry is poised to leap forward, with the global ITES market projected to witness an impressive 8.5% Compound Annual Growth Rate (CAGR), propelling it to a substantial value of $1,120 billion by the year 2028.
                                                  </p>
                                                  <br /><br />
                                                </div>
                                                <div className="slide swiper-slide">
                                                  <h3 className="text-left w-100">
                                                    Way Forward
                                                  </h3>
                                                  <p>
                                                    The dynamic landscape of Information Technology Enabled Services (ITES) has undergone remarkable expansion in recent years, and this upward trajectory is poised to persist. This growth is attributed to a synergy of globalization, amplified outsourcing practices, and technological advancements. The heartbeat of this sector lies in addressing the operational efficiency and cost-saving pursuits of businesses through digital solutions. These solutions encompass a spectrum of services ranging from customer care and technical assistance to data processing and software development.In the backdrop of these challenges, the ITES industry continues to evolve, adapting to the demands of a digital era while striving for excellence.
                                                  </p>
                                                  <br /><br />
                                                </div>
                                              </div>
                                              <div className="swiper-pagination" />
                                            </div>
                                          </section>
                                        </div>
                                      </div>
                                      <div className="industry-accordion">
                                        <div className="industry-accordion-header">
                                          <a className="collapsed card-link" data-toggle="collapse" href="#ITES-collapseTwo">
                                            ASSOCIATED RISKS
                                            <img src="../assets/images/icons/arrow-up.svg" className="img-fluid plus" alt="Arrow Up" />
                                            <img src="../assets/images/icons/arrow-down.svg" className="img-fluid minus" alt="Arrow Down" />
                                          </a>
                                        </div>
                                        <div id="ITES-collapseTwo" className=" Home-slider-mob collapse" data-parent="#pharma-accordion4">
                                          <div className="testimonialSlider">
                                            <div className="industry-accordion-body gray-txt">
                                              <p className="mb-0">While opportunities abound, the ITES industry doesn't come without its set of challenges. These challenges resonate with the heartbeat of business environments and demand thoughtful navigation:</p>
                                              <div className="row p-t-10">
                                                <div className="col-md-6">
                                                  <ol className="industry-list" type={1} start={1}>
                                                    <li>
                                                      <span className="tooltipmsg">
                                                        Data Security Vigilance
                                                        <span className="tooltipmsg-text industry-list-tooltip">The digital realm introduces the challenge of safeguarding sensitive client information against breaches and unauthorized access. Such lapses could precipitate financial loss, tarnish reputation, and even lead to legal ramifications.</span>
                                                      </span>
                                                    </li>
                                                    <li>
                                                      <span className="tooltipmsg">
                                                        Tech-Driven Disruptions
                                                        <span className="tooltipmsg-text industry-list-tooltip">
                                                          The ever-evolving technological landscape mandates a continuous commitment to innovation and infrastructure enhancement. Stagnation in this realm could result in obsolescence and diminished competitiveness.
                                                        </span>
                                                      </span>
                                                    </li>
                                                    <li>
                                                      <span className="tooltipmsg">
                                                        Talent Dynamics
                                                        <span className="tooltipmsg-text industry-list-tooltip">Fierce competition, skill shortage and high employee turnover make it challenging to attract and retain top talent, impacting service quality and customer satisfaction.</span>
                                                      </span>
                                                    </li>
                                                    <li>
                                                      <span className="tooltipmsg">
                                                        Navigating Regulations
                                                        <span className="tooltipmsg-text industry-list-tooltip">The intricacies of data protection laws and intellectual property rights are pivotal considerations for ITES firms. Adhering to these regulatory frameworks is paramount to avoid legal entanglements and reputational harm.</span>
                                                      </span>
                                                    </li>
                                                  </ol>
                                                </div>
                                                <div className="col-md-6">
                                                  <ol className="industry-list" type={1} start={5}>
                                                    <li>
                                                      <span className="tooltipmsg">
                                                        Global Dynamics
                                                        <span className="tooltipmsg-text industry-list-tooltip" style={{width: '400px'}}>Economic shifts, geopolitical events, and currency fluctuations in client countries introduce operational and financial risks that necessitate strategic preparedness.</span>
                                                      </span>
                                                    </li>
                                                    <li>
                                                      <span className="tooltipmsg">
                                                        Client Dependency
                                                        <span className="tooltipmsg-text industry-list-tooltip" style={{width: '400px'}}>While strong client relationships are invaluable, excessive reliance on a few major clients heightens vulnerability, warranting diversification strategies.</span>
                                                      </span>
                                                    </li>
                                                    <li>
                                                      <span className="tooltipmsg">
                                                        Fierce Global Competition
                                                        <span className="tooltipmsg-text industry-list-tooltip">The industry's vibrancy is mirrored by intense competition, both domestically and internationally. This pushes companies to innovate ceaselessly and maintain competitive pricing structures.</span>
                                                      </span>
                                                    </li>
                                                    <li>
                                                      <span className="tooltipmsg">
                                                        Ethics and Integrity
                                                        <span className="tooltipmsg-text industry-list-tooltip">Upholding ethical standards in data privacy and processing is non-negotiable to prevent potential reputational damage and legal complexities.</span>
                                                      </span>
                                                    </li>
                                                  </ol>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="industry-accordion">
                                        <div className="industry-accordion-header">
                                          <a className="collapsed card-link" data-toggle="collapse" href="#ITES-collapseThree">
                                            RECOMMENDED SOLUTIONS
                                            <img src="../assets/images/icons/arrow-up.svg" className="img-fluid plus" alt="Arrow Up" />
                                            <img src="../assets/images/icons/arrow-down.svg" className="img-fluid minus" alt="Arrow Down" />
                                          </a>
                                        </div>
                                        <div id="ITES-collapseThree" className=" Home-slider-mob collapse" data-parent="#pharma-accordion4">
                                          <div className="industry-accordion-body recommend-wrapper">
                                            <div className="row m-b-20">
                                              <div className="col-lg-3 col-6 industry-accordion-content text-center">
                                                <img src="../assets/images/cyber-coverage.png" alt="Clinical" />
                                                <h3>
                                                  Cyber Insurance
                                                </h3>
                                                <p>
                                                  Insures the corporate for their cyber risks
                                                </p>
                                              </div>
                                              <div className="col-lg-3 col-6 industry-accordion-content  text-center">
                                                <img src="../assets/images/professional-indemnity-icon.png" alt="Product" />
                                                <h3>Professional indemnity </h3>
                                                <p>
                                                  Cover against customer lawsuits over negligent services
                                                </p>
                                              </div>
                                              <div className="col-lg-3 col-6 industry-accordion-content  text-center">
                                                <img src="../assets/images/SFSP.png" alt="Product" />
                                                <h3>
                                                  SFSP
                                                </h3>
                                                <p>
                                                  Standard Fire and special peril Policy
                                                </p>
                                              </div>
                                              <div className="col-lg-3 col-6 industry-accordion-content  text-center">
                                                <img src="../assets/images/Property-All-Risk.png" alt="Product" />
                                                <h3>
                                                  Property All Risk
                                                </h3>
                                                <p>
                                                  All Risk Policy designed for industrial client
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="industry-accordion">
                                        <div className="industry-accordion-header">
                                          <a className="collapsed card-link" data-toggle="collapse" href="#ITES-collapseFour">
                                            INDUSTRY CASE STUDY
                                            <img src="../assets/images/icons/arrow-up.svg" className="img-fluid plus" alt="Arrow Up" />
                                            <img src="../assets/images/icons/arrow-down.svg" className="img-fluid minus" alt="Arrow Down" />
                                          </a>
                                        </div>
                                        <div id="ITES-collapseFour" className="Home-slider-mob collapse" data-parent="#pharma-accordion4">
                                          <div id="ites-Ceo-slider" className="slidePharma">
                                            <div className="industry-accordion-body p-t-20 slideWidth">
                                              {/* <h3 class="p-t-10">Case Study 1</h3> */}
                                              <p>A leading IT company in India, with a workforce of approximately 5,000 employees, predominantly male (70%) with an average age of 34 years. The demographic trends suggested a higher propensity for certain health conditions including diabetes, pre-diabetes, obesity and pregnancy.</p>
                                            </div>
                                          </div>
                                          <Link to="/case-ites" className="case-studies-gaurav case-studies-know-more" style={{marginTop: '-40px'}}>
                                            Read More
                                            <img src="../assets/images/icons/next-arrow.svg" className="img-fluid" alt="Arrow" style={{marginLeft: '10px'}} />
                                          </Link>
                                        </div>
                                      </div>
                                      <div className="industry-accordion">
                                        <div className="industry-accordion-header">
                                          <a className="collapsed card-link" data-toggle="collapse" href="#ITES-collapseFive">
                                            TESTIMONIALS
                                            <img src="../assets/images/icons/arrow-up.svg" className="img-fluid plus" alt="Arrow Up" />
                                            <img src="../assets/images/icons/arrow-down.svg" className="img-fluid minus" alt="Arrow Down" />
                                          </a>
                                        </div>
                                        <div id="ITES-collapseFive" className="Home-slider-mob collapse mt-2" data-parent="#pharma-accordion4">
                                          <div className="testimonialSlider">
                                            <div className="industry-accordion-body">
                                              <h3>
                                                Lexmark International (India) Pvt ltd
                                              </h3>
                                              <p className="text-italic text-black">
                                                "ICICI
                                                Lombard has been managing our group
                                                health insurance for the last 5 years.
                                                The claim settlement is good."
                                              </p>
                                              <div className="testimonial-bio-wrapper m-t-20m">
                                                <div className="testimonial-name">
                                                  <p className="name-chief mb-0 mt-3" style={{fontSize: '17px', fontStyle: 'italic', color: '#0b406e'}}>
                                                    Arindam De
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="tab-pane fade show me-4" id="v-link-tab04" role="tabpanel" aria-labelledby="v-link-tab4">
                              <div className="row">
                                <div className="col-lg-5 industry-info-img">
                                  <img src="../assets/images/banking 1.png" className="img-fluid" alt="Industry-list" style={{marginLeft: '-50px'}} />
                                </div>
                                <div className="col-lg-7 industry-info-main p-l-0">
                                  <div id="pharma" className="industry-info p-l-0 pharmaSEC">
                                    <div className="industry-info-head">
                                      {/*<span class="sub-heading">Industry</span>*/}
                                      <h2>Banking &amp; Financial Services</h2>
                                      <a id="v-link-tab3" data-bs-toggle="pill" data-bs-target="#v-link-tab03" href="#v-link-tab03" type="button" role="tab" aria-controls="v-link-tab03" aria-selected="false" onClick={() => window.toggleActive && window.toggleActive(2)} className="next-industry" style={{float: 'left', position: 'absolute', WebkitTransform: 'scaleX(-1)', transform: 'scaleX(-1)', display: 'block', right: '50px'}}>
                                        <img src="../assets/images/icons/next-arrow.svg" className="img-fluid" alt="Arrow" />
                                      </a>
                                      <a id="v-link-tab4" data-bs-toggle="pill" data-bs-target="#v-link-tab05" href="#v-link-tab05" type="button" role="tab" aria-controls="v-link-tab05" aria-selected="false" onClick={() => window.toggleActive && window.toggleActive(4)} className="next-industry" style={{float: 'right'}}>
                                        <img src="../assets/images/icons/next-arrow.svg" className="img-fluid" alt="Arrow" />
                                      </a>
                                      <p>
                                        Navigating risks and fostering growth in the BFSI sector with 250+ customers
                                      </p>
                                    </div>
                                    <div id="pharma-accordion5">
                                      <div className="industry-accordion">
                                        <div className="industry-accordion-header">
                                          <a className=" card-link" data-toggle="collapse" href="#banking-collapseOne">
                                            OVERVIEW
                                            <img src="../assets/images/icons/arrow-up.svg" className="img-fluid plus" alt="Arrow Up" />
                                            <img src="../assets/images/icons/arrow-down.svg" className="img-fluid minus" alt="Arrow Down" />
                                          </a>
                                        </div>
                                        <div id="banking-collapseOne" className=" Home-slider-mob collapse show" data-parent="#pharma-accordion5" style={{width: '640px'}}>
                                          <section className="container p-l-0">
                                            <div className="testimonial mySwiper">
                                              <div className="testi-content swiper-wrapper">
                                                <div className="slide swiper-slide">
                                                  <h3 className="text-left w-100">
                                                    Industry
                                                    Size
                                                  </h3>
                                                  <p className="m-t-0f">
                                                    The Banking and Financial Services sector is a cornerstone of national growth, employing millions and valued at Rs.81 trillion. It is likely to become the fifth largest in the world by 2025. India is also one of the fastest growing Fintech markets in the world, with the highest fintech adoption rate globally of 87% which is significantly higher than the global average rate of 64%. This brings with it a host of opportunities like cashless economy, insurance technology &amp; greater acceptance of blockchain technologies.
                                                  </p>
                                                  <br /><br />
                                                </div>
                                                <div className="slide swiper-slide">
                                                  <h3 className="text-left w-100">
                                                    Way
                                                    forward
                                                  </h3>
                                                  <p className="m-t-0f">
                                                    The future state of the Indian Banking lies in the modernisation of the core banking system. Introduction of new, better and agile technologies is carving out new paths of growth and optimization. The desire for cashless transactions in the economy has led to the rise of digital-first banks or “Neo banks” with almost all major banks now providing some form of mobile banking. Digital payments across the country registered a growth of nearly 29 per cent in a year. Fintech firms are now partnering with traditional insurers to help automate operations and increase coverage. The scope of services offered includes insurance comparison platforms, claims management, sales platform, underwriting risk management, insurance infrastructure API, insurance product configurator, and policy admin system.
                                                  </p>
                                                  <br /><br />
                                                </div>
                                              </div>
                                              <div className="swiper-pagination" />
                                            </div>
                                          </section>
                                          <div id="banking-industry-slider" className="testimonialSlider" style={{display: 'none'}}>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="industry-accordion">
                                        <div className="industry-accordion-header">
                                          <a className="collapsed card-link" data-toggle="collapse" href="#banking-collapseTwo">
                                            ASSOCIATED RISKS
                                            <img src="../assets/images/icons/arrow-up.svg" className="img-fluid plus" alt="Arrow Up" />
                                            <img src="../assets/images/icons/arrow-down.svg" className="img-fluid minus" alt="Arrow Down" />
                                          </a>
                                        </div>
                                        <div id="banking-collapseTwo" className="Home-slider-mob collapse" data-parent="#pharma-accordion5">
                                          <div id="banking-industry-slider" className="testimonialSlider">
                                            <div className="industry-accordion-body">
                                              <p style={{marginBottom: 0}}>Within this dynamic sector, prudent risk management is indispensable. Vital risks include:</p>
                                              <div className="row p-t-10">
                                                <div className="col-md-6">
                                                  <ol className="industry-list" type={1} start={1}>
                                                    <li>
                                                      <span className="tooltipmsg">
                                                        Cybersecurity
                                                        <span className="tooltipmsg-text industry-list-tooltip w-300">Financial institutions are cyber-attack magnets due to sensitive data. Robust cybersecurity measures and insurance coverage are imperative.</span>
                                                      </span>
                                                    </li>
                                                    <li>
                                                      <span className="tooltipmsg">
                                                        Compliance and Regulations
                                                        <span className="tooltipmsg-text industry-list-tooltip w-300">
                                                          Navigating national and international regulations demands a comprehensive risk framework.
                                                        </span>
                                                      </span>
                                                    </li>
                                                    <li>
                                                      <span className="tooltipmsg">
                                                        Operational Risks
                                                        <span className="tooltipmsg-text industry-list-tooltip w-300">Complex financial transactions harbour error possibilities. Risk coverage is essential to mitigate impact.</span>
                                                      </span>
                                                    </li>
                                                  </ol>
                                                </div>
                                                <div className="col-md-6">
                                                  <ol className="industry-list" type={1} start={4}>
                                                    <li>
                                                      <span className="tooltipmsg">
                                                        Reputation Risks
                                                        <span className="tooltipmsg-text industry-list-tooltip w-300">Trust is paramount; negative publicity can result in substantial losses. Coverage against reputational damage is critical.</span>
                                                      </span>
                                                    </li>
                                                    <li>
                                                      <span className="tooltipmsg">
                                                        Fraud and Embezzlement
                                                        <span className="tooltipmsg-text industry-list-tooltip w-300">Vulnerable to fraud like cyber fraud and identity theft, risk management and insurance are vital safeguards.</span>
                                                      </span>
                                                    </li>
                                                  </ol>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="industry-accordion">
                                        <div className="industry-accordion-header">
                                          <a className="collapsed card-link" data-toggle="collapse" href="#banking-collapseThree">
                                            RECOMMENDED SOLUTIONS
                                            <img src="../assets/images/icons/arrow-up.svg" className="img-fluid plus" alt="Arrow Up" />
                                            <img src="../assets/images/icons/arrow-down.svg" className="img-fluid minus" alt="Arrow Down" />
                                          </a>
                                        </div>
                                        <div id="banking-collapseThree" className="Home-slider-mob collapse" data-parent="#pharma-accordion5">
                                          <div className="industry-accordion-body recommend-wrapper">
                                            {/* start */}
                                            <div id="carouselExampleIndicators1" className="carousel slide" data-ride="carousel">
                                              <ol className="carousel-indicators">
                                                <li data-target="#carouselExampleIndicators1" data-slide-to={0} className="active">
                                                </li>
                                                <li data-target="#carouselExampleIndicators1" data-slide-to={1} />
                                                <li data-target="#carouselExampleIndicators1" data-slide-to={2} />
                                              </ol>
                                              <div className="carousel-inner">
                                                <div className="carousel-item active">
                                                  <div className="row">
                                                    <div className="col-lg-3 col-6 industry-accordion-content  text-center">
                                                      <img src="../assets/images/product-img.svg" alt="Product" className="w-100" />
                                                      <h3>
                                                        Cyber Insurance
                                                      </h3>
                                                      <p>
                                                        Insures the corporate for their cyber risks
                                                      </p>
                                                    </div>
                                                    <div className="col-lg-3 col-6 industry-accordion-content  text-center">
                                                      <img src="../assets/images/general-img.svg" alt="General" className="w-100" />
                                                      <h3>
                                                        Directors &amp; Officers
                                                        Insurance
                                                      </h3>
                                                      <p>
                                                        Protection for breach of fiduciary duties
                                                      </p>
                                                    </div>
                                                    <div className="col-lg-3 col-6 industry-accordion-content text-center">
                                                      <img src="../assets/images/CGL.png" alt="Clinical" />
                                                      <h3>
                                                        Comprehensive General Liability Insurance (CGL)
                                                      </h3>
                                                      <p>
                                                        Cover against lawsuits for Injury/death/property damage
                                                      </p>
                                                    </div>
                                                    <div className="col-lg-3 col-6 industry-accordion-content text-center">
                                                      <img src="../assets/images/Property-All-Risk.png" alt="Clinical" />
                                                      <h3>
                                                        Property All Risk
                                                      </h3>
                                                      <p>
                                                        All Risk Policy designed for industrial client
                                                      </p>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              {/* <button class="carousel-control-prev" type="button"
                                          data-target="#carouselExampleIndicators1" data-slide="prev">
                                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                          <span class="sr-only">Previous</span>
                                          </button> */}
                                              {/* <button
                                          class="carousel-control-next orange-arrow"
                                          type="button"
                                          data-target="#carouselExampleIndicators1"
                                          data-slide="next">
                                          <span
                                          class="carousel-control-next-icon rightarrow"
                                          aria-hidden="true"><i
                                          class="fa-solid fa-arrow-right-long"><img
                                          class="orange-right-arrow"
                                          src="../assets/images/orange-right-arrow.png"></i></span>
                                          <span class="sr-only"><img
                                          src="../assets/images/arrow-right.svg">Next</span>
                                          </button> */}
                                            </div>
                                            {/* end */}
                                            <div className="rightarrow">
                                              <i className="fa-solid fa-arrow-right-long" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="industry-accordion">
                                        <div className="industry-accordion-header">
                                          <a className="collapsed card-link" data-toggle="collapse" href="#banking-collapseFour">
                                            INDUSTRY CASE STUDY
                                            <img src="../assets/images/icons/arrow-up.svg" className="img-fluid plus" alt="Arrow Up" />
                                            <img src="../assets/images/icons/arrow-down.svg" className="img-fluid minus" alt="Arrow Down" />
                                          </a>
                                        </div>
                                        <div id="banking-collapseFour" className="Home-slider-mob collapse" data-parent="#pharma-accordion5">
                                          <div id="banking-Ceo-slider" className="slidePharma">
                                            <div className="industry-accordion-body p-t-20 slideWidth">
                                              <p className="p-b-0f">
                                                The company is a Large Finance
                                                Conglomerate from the banking sector.
                                                The aim was to graduate to an integrated, centralized, cost-effective and tech-based wellness program that will be customized and user-friendly for the employees.
                                              </p>
                                            </div>
                                          </div>
                                          <Link to="/case-banking" className="case-studies-gaurav case-studies-know-more" style={{marginTop: '-40px'}}>
                                            Read More
                                            <img src="../assets/images/icons/next-arrow.svg" className="img-fluid" alt="Arrow" style={{marginLeft: '10px'}} />
                                          </Link>
                                        </div>
                                      </div>
                                      <div className="industry-accordion">
                                        <div className="industry-accordion-header">
                                          <a className="collapsed card-link" data-toggle="collapse" href="#banking-collapseFive">
                                            TESTIMONIALS
                                            <img src="../assets/images/icons/arrow-up.svg" className="img-fluid plus" alt="Arrow Up" />
                                            <img src="../assets/images/icons/arrow-down.svg" className="img-fluid minus" alt="Arrow Down" />
                                          </a>
                                        </div>
                                        <div id="banking-collapseFive" className="Home-slider-mob collapse mt-2" data-parent="#pharma-accordion5">
                                          <div className="testimonialSlider">
                                            <div className="industry-accordion-body">
                                              <h3>Amicorp</h3>
                                              <p className="text-black text-italic">
                                                "We would
                                                like to express our sincere appreciation
                                                for your service to us as one of our
                                                most reliable service providers. Ever
                                                since we signed as trusted partner for
                                                insurance requirements, you have
                                                provided the highest quality products
                                                with even better customer service.
                                                Solutions are often received earlier
                                                than expected, and you are quick to
                                                resolve any issues that arise. We have,
                                                and will continue to, recommend your
                                                services to other companies and
                                                contacts. We look forward to continuing
                                                this relationship for long."
                                              </p>
                                              <div className="testimonial-bio-wrapper m-t-20m">
                                                <div className="testimonial-name">
                                                  <p className="name-chief mb-0 mt-3" style={{fontSize: '17px', fontStyle: 'italic', color: '#0b406e'}}>
                                                    Naveen Ramanuja
                                                  </p>
                                                  <p className="title-chief mt-0">
                                                    Manager Finance at Amicorp group
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="tab-pane fade show me-4" id="v-link-tab05" role="tabpanel" aria-labelledby="v-link-tab5">
                              <div className="row">
                                <div className="col-lg-5 industry-info-img">
                                  <img src="../assets/images/FMCG 1.png" className="img-fluid" alt="Industry-list" />
                                </div>
                                <div className="col-lg-7 industry-info-main p-l-0">
                                  <div id="pharma" className="industry-info p-l-0 pharmaSEC">
                                    <div className="industry-info-head">
                                      {/*<span class="sub-heading">Industry</span>*/}
                                      <h2>FMCG &amp; Consumer Goods</h2>
                                      <a id="v-link-tab4" data-bs-toggle="pill" data-bs-target="#v-link-tab04" href="#v-link-tab04" type="button" role="tab" aria-controls="v-link-tab04" aria-selected="true" onClick={() => window.toggleActive && window.toggleActive(3)} className="next-industry" style={{float: 'left', position: 'absolute', WebkitTransform: 'scaleX(-1)', transform: 'scaleX(-1)', display: 'block', right: '50px'}}>
                                        <img src="../assets/images/icons/next-arrow.svg" className="img-fluid" alt="Arrow" />
                                      </a>
                                      {/* <a href="#carousel__slide1" class="next-industry" style="float: right;">
                                  <img src="../assets/images/icons/next-arrow.svg" class="img-fluid" alt="Arrow">
                                  </a> */}
                                      <p>
                                        Navigating Risks for 100+ customers with expert Insurance Solutions
                                      </p>
                                    </div>
                                    <div id="pharma-accordion6">
                                      <div className="industry-accordion">
                                        <div className="industry-accordion-header">
                                          <a className=" card-link" data-toggle="collapse" href="#fmcg-collapseOne">
                                            OVERVIEW
                                            <img src="../assets/images/icons/arrow-up.svg" className="img-fluid plus" alt="Arrow Up" />
                                            <img src="../assets/images/icons/arrow-down.svg" className="img-fluid minus" alt="Arrow Down" />
                                          </a>
                                        </div>
                                        <div id="fmcg-collapseOne" className="Home-slider-mob  collapse show" data-parent="#pharma-accordion6" style={{width: '640px'}}>
                                          <section className="container p-l-0">
                                            <div className="testimonial mySwiper">
                                              <div className="testi-content swiper-wrapper">
                                                <div className="slide swiper-slide">
                                                  <h3 className="text-left w-100">
                                                    Industry
                                                    Size
                                                  </h3>
                                                  <p className="m-t-0f">
                                                    The rise of urbanization and evolving consumer behaviours have spurred remarkable growth in the Indian food processing sector. The market expanded to US$ 307.2 trillion in 2022 and is forecasted to reach US$ 547.3 trillion by 2028, driven by a robust compounded Annual Growth Rate (CAGR) of 9.5% between 2023 and 2028.
                                                  </p>
                                                  <p>
                                                    According to the India Brand Equity Foundation, the FMCG market is projected to exhibit a remarkable Compound Annual Growth Rate (CAGR) of 14.9%. This momentum is expected to drive the market to US$ 220 billion by 2025.
                                                  </p>
                                                  <br /><br />
                                                </div>
                                                <div className="slide swiper-slide">
                                                  <h3 className="text-left w-100">
                                                    Way Forward for the FMCG Sector
                                                  </h3>
                                                  <p className="m-t-0f">
                                                    The FMCG sector has undergone remarkable transformation in recent years, marked by trends like digitization, the Direct-to-Consumer model, heightened brand awareness, affinity for foreign brands, and compelling merchandising strategies. Government initiatives, such as permitting 51% Foreign Direct Investment (FDI) in multi-brand retail and 100% FDI in food processing, are expected to invigorate production. In this landscape, insulating against sector-specific risks emerges as a prudent strategy to thrive and navigate challenges seamlessly. Insurance solutions tailored to the unique contours of the FMCG industry can empower businesses to embrace growth opportunities while mitigating potential setbacks.
                                                  </p>
                                                </div>
                                              </div>
                                              <div className="swiper-pagination" />
                                            </div>
                                          </section>
                                          <div id="fmcg-industry-slider" className="testimonialSlider" style={{display: 'none'}}>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="industry-accordion">
                                        <div className="industry-accordion-header">
                                          <a className="collapsed card-link" data-toggle="collapse" href="#fmcg-collapseTwo">
                                            ASSOCIATED RISKS
                                            <img src="../assets/images/icons/arrow-up.svg" className="img-fluid plus" alt="Arrow Up" />
                                            <img src="../assets/images/icons/arrow-down.svg" className="img-fluid minus" alt="Arrow Down" />
                                          </a>
                                        </div>
                                        <div id="fmcg-collapseTwo" className="Home-slider-mob collapse" data-parent="#pharma-accordion6">
                                          <div id="fmcg-industry-slider" className="testimonialSlider">
                                            <div className="industry-accordion-body">
                                              <p className="mb-0">The demand for fast-moving consumer goods is a confluence of increasing income levels and heightened aspirations. As a dynamic and fiercely competitive sector, FMCG faces an array of risks that can significantly impact its operations, financial health, and reputation:</p>
                                              <div className="row p-t-10">
                                                <div className="col-md-6">
                                                  <ol className="industry-list" type={1} start={1}>
                                                    <li>
                                                      <span className="tooltipmsg">
                                                        Reputational Risk
                                                        <span className="tooltipmsg-text industry-list-tooltip w-300">The potential for product recalls and deficiencies can reverberate across brand reputation and sales.</span>
                                                      </span>
                                                    </li>
                                                    <li>
                                                      <span className="tooltipmsg">
                                                        Product Risk
                                                        <span className="tooltipmsg-text industry-list-tooltip w-300">Lawsuits stemming from adulteration or mislabelling, resulting in customer ailments or other losses, pose substantial threats.</span>
                                                      </span>
                                                    </li>
                                                    <li>
                                                      <span className="tooltipmsg">
                                                        Business Interruption
                                                        Risk
                                                        <span className="tooltipmsg-text industry-list-tooltip w-300">Equipment breakdown and power outages can disrupt manufacturing sites, leading to supply shortages and product delivery delays.</span>
                                                      </span>
                                                    </li>
                                                    <li>
                                                      <span className="tooltipmsg">
                                                        Supply Chain Risks
                                                        <span className="tooltipmsg-text industry-list-tooltip w-300">Complex global supply chains are vulnerable to disruptions like transportation delays and trade restrictions, which can hamper production and distribution.</span>
                                                      </span>
                                                    </li>
                                                  </ol>
                                                </div>
                                                <div className="col-md-6">
                                                  <ol className="industry-list" type={1} start={5}>
                                                    <li>
                                                      <span className="tooltipmsg">
                                                        Competition and Pricing
                                                        Risks
                                                        <span className="tooltipmsg-text industry-list-tooltip w-300">Shifting consumer preferences and the emergence of subpar alternatives pose profit challenges for FMCG companies.</span>
                                                      </span>
                                                    </li>
                                                    <li>
                                                      <span className="tooltipmsg">
                                                        Regulatory Risks
                                                        <span className="tooltipmsg-text industry-list-tooltip w-300">Stringent regulations governing product quality, labelling, and marketing expose FMCG firms to fines and potential product recalls.</span>
                                                      </span>
                                                    </li>
                                                    <li>
                                                      <span className="tooltipmsg">
                                                        Environmental Risks
                                                        <span className="tooltipmsg-text industry-list-tooltip w-300">Companies that neglect sustainable practices or fail to mitigate their environmental footprint could face regulatory actions.</span>
                                                      </span>
                                                    </li>
                                                    <li>
                                                      <span className="tooltipmsg">
                                                        Technology Risks
                                                        <span className="tooltipmsg-text industry-list-tooltip w-300">While online platforms offer cost-effective sales channels, the failure to adopt and secure new technology might jeopardize operational continuity.</span>
                                                      </span>
                                                    </li>
                                                  </ol>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="industry-accordion">
                                        <div className="industry-accordion-header">
                                          <a className="collapsed card-link" data-toggle="collapse" href="#fmcg-collapseThree">
                                            RECOMMENDED SOLUTIONS
                                            <img src="../assets/images/icons/arrow-up.svg" className="img-fluid plus" alt="Arrow Up" />
                                            <img src="../assets/images/icons/arrow-down.svg" className="img-fluid minus" alt="Arrow Down" />
                                          </a>
                                        </div>
                                        <div id="fmcg-collapseThree" className="Home-slider-mob collapse" data-parent="#pharma-accordion6">
                                          <div className="industry-accordion-body recommend-wrapper">
                                            {/* start */}
                                            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                              <ol className="carousel-indicators">
                                                <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active">
                                                </li>
                                                <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                                                <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                                              </ol>
                                              <div className="carousel-inner">
                                                <div className="carousel-item active">
                                                  <div className="row">
                                                    <div className="col-lg-3 col-6 industry-accordion-content text-center">
                                                      <img src="../assets/images/marine-open-cover.png" alt="Clinical" className="w-100" />
                                                      <h3>
                                                        Marine Sales Turnover Policy
                                                      </h3>
                                                      <p>
                                                        All legs of transit are collectively covered (Export/Import/Domestic Sales/Stock transfer)
                                                      </p>
                                                    </div>
                                                    <div className="col-lg-3 col-6 industry-accordion-content  text-center">
                                                      <img src="../assets/images/product-img.svg" alt="Product" className="w-100" />
                                                      <h3>
                                                        Product recall cover
                                                      </h3>
                                                      <p>
                                                        Cover against customer lawsuits over defective product
                                                      </p>
                                                    </div>
                                                    <div className="col-lg-3 col-6 industry-accordion-content text-center">
                                                      <img src="../assets/images/CGL.png" alt="Clinical" />
                                                      <h3>
                                                        Comprehensive General Liability Insurance (CGL)
                                                      </h3>
                                                      <p>
                                                        Cover against lawsuits for Injury/death/property damage
                                                      </p>
                                                    </div>
                                                    <div className="col-lg-3 col-6 industry-accordion-content text-center">
                                                      <img src="../assets/images/clinical-img.svg" alt="Clinical" className="w-100" />
                                                      <h3>
                                                        Clinical Trials/BE Studies Liability
                                                      </h3>
                                                      <p>
                                                        Cover for injury/death of the trial participants
                                                      </p>
                                                    </div>
                                                    <div className="col-lg-3 col-6 industry-accordion-content  text-center">
                                                      <img src="../assets/images/SFSP.png" alt="Product" />
                                                      <h3>
                                                        SFSP
                                                      </h3>
                                                      <p>
                                                        Standard Fire and special peril Policy
                                                      </p>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <button className="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
                                                <span className="carousel-control-prev-icon" aria-hidden="true" />
                                                <span className="sr-only">Previous</span>
                                              </button>
                                              <button className="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
                                                <span className="carousel-control-next-icon" aria-hidden="true" />
                                                <span className="sr-only">Next</span>
                                              </button>
                                            </div>
                                            {/* end */}
                                            <div className="rightarrow">
                                              <i className="fa-solid fa-arrow-right-long" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="industry-accordion">
                                        <div className="industry-accordion-header">
                                          <a className="collapsed card-link" data-toggle="collapse" href="#fmcg-collapseFour">
                                            INDUSTRY CASE STUDY
                                            <img src="../assets/images/icons/arrow-up.svg" className="img-fluid plus" alt="Arrow Up" />
                                            <img src="../assets/images/icons/arrow-down.svg" className="img-fluid minus" alt="Arrow Down" />
                                          </a>
                                        </div>
                                        <div id="fmcg-collapseFour" className="Home-slider-mob collapse" data-parent="#pharma-accordion6">
                                          <div className="industry-accordion-body p-t-20">
                                            <p>
                                              An Edible oil manufacturing company located
                                              near a port in Andhra Pradesh, that is
                                              involved in the distribution, and branding
                                              of edible oils and specialty fats.
                                              The company wanted to prevent the property
                                              loss due to fire breakout.
                                            </p>
                                          </div>
                                          <Link to="/case-fmcg" className="case-studies-gaurav case-studies-know-more m-t-20" style={{marginTop: '-30px'}}>
                                            Read More
                                            <img src="../assets/images/icons/next-arrow.svg" className="img-fluid" alt="Arrow" style={{marginLeft: '10px'}} />
                                          </Link>
                                        </div>
                                      </div>
                                      <div className="industry-accordion">
                                        <div className="industry-accordion-header">
                                          <a className="collapsed card-link" data-toggle="collapse" href="#fmcg-collapseFive">
                                            TESTIMONIALS
                                            <img src="../assets/images/icons/arrow-up.svg" className="img-fluid plus" alt="Arrow Up" />
                                            <img src="../assets/images/icons/arrow-down.svg" className="img-fluid minus" alt="Arrow Down" />
                                          </a>
                                        </div>
                                        <div id="fmcg-collapseFive" className="Home-slider-mob  collapse mt-2" data-parent="#pharma-accordion6">
                                          <section className="container p-l-0">
                                            <div className="testimonial mySwiper">
                                              <div className="testi-content swiper-wrapper">
                                                <div className="slide swiper-slide">
                                                  <h3 className="text-left w-100">
                                                    LG
                                                    Electronics India Pvt Ltd
                                                  </h3>
                                                  <p className="text-black text-italic">
                                                    "We appreciate the interaction
                                                    of the ICICI lombard team. We
                                                    are looking forward to unique
                                                    solutions being offered."
                                                  </p>
                                                  <div className="testimonial-bio-wrapper m-t-0 text-left w-100">
                                                    <div className="testimonial-name">
                                                      <p className="name-chief mb-0 mt-3" style={{fontSize: '17px', fontStyle: 'italic', color: '#0b406e'}}>
                                                        Pranav Dayal
                                                      </p>
                                                      <p className="title-chief mt-0">
                                                        Manager - Insurance
                                                      </p>
                                                    </div>
                                                  </div>
                                                  <br />
                                                </div>
                                                <div className="slide swiper-slide">
                                                  <h3 className="text-left w-100">
                                                    Luxmi
                                                    Tea Company Private Limited
                                                  </h3>
                                                  <p className="m-t-0f">
                                                    We are associated
                                                    with ICICI Lombard since 2018.
                                                    They have been a phenomenal risk
                                                    solution partner &amp;
                                                    underwriter providing exceptional
                                                    service. Thank you for the
                                                    service, support &amp;
                                                    co-operation.
                                                  </p>
                                                  <div className="testimonial-bio-wrapper m-t-0 text-left w-100">
                                                    <div className="testimonial-name">
                                                      <p className="name-chief mb-0 mt-3" style={{fontSize: '17px', fontStyle: 'italic', color: '#0b406e'}}>
                                                        Abha Bafna
                                                      </p>
                                                      <p className="title-chief mt-0">
                                                        Director - CFO
                                                      </p>
                                                    </div>
                                                  </div>
                                                  <br />
                                                </div>
                                              </div>
                                              <div className="swiper-pagination" />
                                            </div>
                                          </section>
                                          <div id="fmcg-Ceo-slider" className="testimonialSlider" style={{display: 'none'}}>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* section we offer end */}
            {/* section our case-studies starts*/}
            <section className="our-case-studies-main">
              <div className="container case-studies-content-wrapper p-t-20f">
                <p>Employee Speak</p>
                <h2>Our Articles</h2>
              </div>
              <div id="image-slider" className="image-wrapper">
                <div className="position-relative img-effect">
                  <Link to="/explore1">
                    <img src="../assets/images/MouseOver_Wellness.jpg" className="img-fluid first-img" alt="employee-speak" />
                  </Link>
                  <div className="img-content employee-para">
                    <span className="employee-pill">Maximising returns on wellness</span>
                    <p>As organizations navigate the ever-changing landscape of the modern workplace, they are increasingly recognizing the profound impact.</p>
                    <Link to="/explore1" className="milestone-content-wrapper">Read More</Link>
                  </div>
                </div>
                <div className="position-relative img-effect">
                  <Link to="/explore2">
                    <img src="../assets/images/MouseOver_CYBERSECURITY.jpg" className="img-fluid second-img" alt="healthcare" />
                  </Link>
                  <div className="img-content pill-margin">
                    <span className="employee-pill">Cybersecurity</span>
                    <p>In today's rapidly evolving digital landscape, the rise of cybersecurity threats has become a paramount concern for organizations worldwide.</p>
                    <Link to="/explore2" className="milestone-content-wrapper">Read More</Link>
                  </div>
                </div>
                <div className="position-relative img-effect">
                  <Link to="/explore3">
                    <img src="../assets/images/MouseOver_Crisis_Management.jpg" className="img-fluid third-img" alt="ites" />
                  </Link>
                  <div className="img-content pill-margin">
                    <span className="employee-pill">Mitigating risk in crisis</span>
                    <p>The word crisis holds its origins to the Greek work - krisis (critical). It is defined as an event that can or has the potential to create ...</p>
                    <Link to="/explore3" className="milestone-content-wrapper">Read More</Link>
                  </div>
                </div>
              </div>
              {/* <div className="need-help-wrapper">
                <div className="need-help-content">
                  <img src="../assets/images/help-lady-img.svg" className="img-fluid" alt="assist-graphics" />
                  <div className="d-flex flex-column para-content">
                    <p>
                      Need Help?
                    </p>
                    <p>
                      Want to know more about our Products &amp; Risk Management Services?
                    </p>
                  </div>
                 <Link to="ContactUs" className="contact-us">Contact Us</Link>
                </div>
              </div> */}
            </section>
            <div id="milestone-wrapper" className="milestone-reached">
              <div className="milestone-content-wrapper">
                <p> Awards &amp; Accolades</p>
                <h2>Milestones we Reached </h2>
                <div className="slider-container">
                  <div className="slide">
                    <img src="../assets/images/highest-growth-GI.png" className="img-fluid" alt="Slide 1" />
                    <h3>Assocham 14th Global Insurance Awards in ‘Highest Growth GI’ Category</h3>
                  </div>
                  <div className="slide">
                    <img src="../assets/images/dun-bradstreet-BFSI.png" className="img-fluid" alt="Slide 2" />
                    <h3>Dun &amp; Bradstreet BFSI Fintech Awards in Best Insurance Company in Non-Life Insurance sector category</h3>
                  </div>
                  <div className="slide">
                    <img src="../assets/images/india-customer-excellence-summit-awards.png" className="img-fluid" alt="Slide 3" />
                    <h3>India Customer Excellence Summit &amp; Awards 2022 for Best Innovation in CX, CX Leader of the year</h3>
                  </div>
                  <div className="slide">
                    <img src="../assets/images/india-insurance-awards-2023.png" className="img-fluid" alt="Slide 3" />
                    <h3>India Insurance Awards 2023 for the Most Innovative General Insurance Company.</h3>
                  </div>
                  <div className="slide">
                    <img src="../assets/images/prime-times-awards-for-IL-takeCare.png" className="img-fluid" alt="Slide 3" />
                    <h3>Prime Times Awards for IL TakeCare app in the Best Mobile app category</h3>
                  </div>
                  <div className="slide">
                    <img src="../assets/images/economic-times-awards.png" className="img-fluid" alt="Slide 3" />
                    <h3>Economic Times Awards  for our ET Best BFSI Brand of the year</h3>
                  </div>
                  <div className="slide">
                    <img src="../assets/images/navbharat-BFSI-award.png" className="img-fluid" alt="Slide 3" />
                    <h3>Navbharat BFSI Award for the Best General Insurance Company of the year</h3>
                  </div>
                </div>
              </div>
            </div>
            {/* section our case-studies ends */}
            {/* section map starts  */}
            <section className="map-wrapper">
              <div className="container">
                <div className="row">
                  <div className="col-md-5 col-sm-6 visit-us-wrapper">
                    <div className="left">
                      <img src="../assets/images/location.svg" alt="location" />
                      <p className="para-1">
                        Visit us at any of our Branches!
                      </p>
                      <p className="para-2" style={{position: 'absolute', top: '92px'}}>Connect with us now!</p>
                    </div>
                    <div className="right">
          <button onClick={() => window.open('https://corporate.icicilombard.com/assets/pdf/CSG-office-address-Locate-us.pdf', '_blank')} className="contact-us">Locate Us</button>
                    </div>
                  </div>
                  <div className="col-md-5 col-sm-6 contact-us-wrapper">
                    <div className="left">
                      <img src="../assets/images/Calling.svg" alt="calling" />
                      <p className="para-1">
                        Want to know more about our products &amp; risk management services?
                      </p>
                      <p className="para-2" style={{position: 'absolute', top: '118px'}}>Connect with us now!</p>
                    </div>
                    <div className="right">
                     <Link to="ContactUs" className="contact-us">Contact Us</Link>

                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* section map ends  */}
            {/* Start FAQ */}
            {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" /> */}
            <link rel="stylesheet" href="../assets/css/faq-bootstrap.min.css" />
            <style dangerouslySetInnerHTML={{__html: "\n    .faq-section .accordion-item {\n        border-radius: 10px !important;\n        border: 1px solid #D9D9D9;\n        margin-bottom: 0px;\n        display: flow-root;\n    }\n\n    .faq-section .accordion-button:not(.collapsed) {\n        background: #F9F9F9;\n        color: #1E1E1E;\n    }\n\n\n    .faq-section .accordion-flush .accordion-collapse {\n        background: #FFF;\n        margin-top: -17px;\n        line-height: 32px;\n        padding-top: 15px;\n    }\n\n    .faq-section .accordion-button {\n        background: #F5F5F5;\n        font-size: 14px;\n        font-weight: bold;\n    }\n\n    .accordion-button:focus {\n        border-color: none;\n        box-shadow: none;\n    }\n\n    .faq-section .accordion-flush .accordion-item .accordion-button, .accordion-flush .accordion-item .accordion-button.collapsed {\n        border-radius: 10px;\n        border: 1px solid #D9D9D9;\n    }\n\n    .faqlink{\n        text-decoration: underline !important;\n        font-weight: bold !important; \n    }\n\n\n    .faq-section .tbl-gry-bdr {\n        border-radius: 8px;\n        padding: 0px;\n        margin: 0px;\n        border: 1px solid #B2B2B2;\n        position: relative;\n        margin-left: 8px;\n    }\n\n    .faq-section table {\n        width: 100%;\n        border-collapse: collapse; /* Ensures that borders are collapsed into one */\n        /* border: 2px solid #D9D9D9; */\n        border-radius: 10px; /* Optional: Rounded corners for the table */\n        overflow: hidden; /* Ensures the rounded corners are visible */\n    }\n\n    .faq-section th, td {\n        text-align: left;\n        padding: 7px 10px 7px 40px;\n        border-right: 1px solid #B2B2B2; /* Borders between columns */\n    }\n\n    .faq-section td {\n        font-weight: normal;\n        font-size: 15px;\n        color: #6C6C6C;\n    }\n\n    /* Table Header Styling */\n    .faq-section th {\n        background-color: #EEEEEE;\n        color: #333;\n        font-weight: bold;\n    }\n\n    /* Row Alternate Colors */\n    .faq-section tr:nth-child(odd) {\n        background-color: white;\n    }\n\n    .faq-section tr:nth-child(even) {\n        background-color: #F5F6F6;\n    }\n\n\n\n    /* Remove the border for the last column */\n    .faq-section td:last-child, th:last-child {\n        border-right: none; /* No right border for the last column */\n    }\n\n\n    .m-b-20 {\n        margin-bottom: 20px;\n    }\n\n    .m-b-0f {\n        margin-bottom: 0px !important;\n    }\n\n    .faq-section .faq-text {\n        font-size: 44px;\n        font-weight: 700;\n        margin-bottom: 0px !important;\n        padding-top: 20px;\n        color: #212121;\n    }\n\n    .faq-section {\n        padding-left: 10%;\n        padding-right: 10%;\n    }\n\n    .circle-list-f li {\n        list-style: circle !important;\n        display: list-item;\n        padding-left: 10px;\n        margin-left: 20px;\n    }\n\n    .disc-list-f li {\n        list-style-type: disc;\n    }\n\n\n\n\n\n    @media (max-device-width: 767px) and (min-width: 320px) {\n        .faq-section\n\n    {\n        padding-left: 7%;\n        padding-right: 7%;\n    }\n\n    }\n\n\n    .b-text {\n        color: #282828;\n        font-weight: bold;\n    }\n\n    .line-h-30 {\n        line-height: 30px;\n    }\n\n    .faq-gray-txt {\n        color: #6C6C6C;\n    }\n\n        .faq-section, .faq-gray-txt ol li {\n            color: #6C6C6C !important;\n        }\n\n            .faq-section ol {\n                padding-left: 20px;\n            }\n\n            .faq-section ul li {\n                margin-left: 30px;\n                color: #6C6C6C !important;\n            }\n\n            .faq-section p {\n                color: #6C6C6C !important;\n            }\n\n" }} />
            <section className="faq-section" style={{border: 'none'}}>
              <h2 className="text-left faq-text">FAQs</h2>
              
                <div className="accordion accordion-flush mt-4" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        1. What are the turnaround times (TAT) for corporate insurance services?
                      </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <div className="row">
                          <div className="col-md-12 m-b-20">
                            <span className="b-text">Here’s how long it typically takes to complete various insurance-related services:</span>
                          </div>
                        </div>
                        <div className="tbl-gry-bdr">
                          <table>
                            <thead>
                              <tr>
                                <th>Service</th>
                                <th>Time Taken</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Proposal acceptance</td>
                                <td>Within 7 days of receiving the proposal form</td>
                              </tr>
                              <tr>
                                <td>Policy issuance</td>
                                <td>Within 15 days of proposal acceptance</td>
                              </tr>
                              <tr>
                                <td>Endorsement processing</td>
                                <td>Within 7 days of receiving the request</td>
                              </tr>
                              <tr>
                                <td>Policy servicing</td>
                                <td>Within 7 days of receiving the request</td>
                              </tr>
                              <tr>
                                <td>Surveyor appointment for claims</td>
                                <td>Within 24 hours of claim intimation</td>
                              </tr>
                              <tr>
                                <td>Survey report submission</td>
                                <td>Within 15 days of the surveyor’s appointment</td>
                              </tr>
                              <tr>
                                <td>Claim approval</td>
                                <td>Within 7 days of receiving the survey report</td>
                              </tr>
                              <tr>
                                <td>Claim settlement</td>
                                <td>Within 7 days of receiving the survey report</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        2. How do I raise a claim in case of a loss?
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <div className="row line-h-30 faq-gray-txt">
                          <div className="col-md-12">
                            Follow these simple steps to file your claim:
                            <ol className="m-b-0f" style={{listStyleType: 'decimal'}}>
                              <li>
                                1. Notify us about your claim using any of these options:
                                <ul className="circle-list-f">
                                  <li>Call our toll-free number: 1800 2666</li>
                                  <li>Email us: customersupport@icicilombard.com</li>
                                  <li>Visit our website and use the <a href="https://www.icicilombard.com/claim-tracker" className="website">Claim Tracker</a></li>
                                </ul>
                              </li>
                              <li>2. Submit the required documents and claim form. Once your claim is registered, you’ll receive a reference number for tracking and communication.</li>
                              <li>3. For Health and Motor claims, download the IL Take Care App.</li>
                            </ol>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        3. What documents are required to raise a corporate insurance claim?
                      </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <div className="row faq-gray-txt">
                          <div className="col-md-12">
                            You may need the following documents to process your claim:
                            <ul className="m-b-0f disc-list-f faq-gray-txt">
                              <li>Filled claim form and bill</li>
                              <li>Photos or videos of the damaged property or item</li>
                              <li>FIR or final police report (if applicable)</li>
                              <li>Repair/replacement invoices, payment proof, and quotations (if applicable)</li>
                              <li>Proof of value and quantity for unrepaired/unreplaced items</li>
                              <li>Salvage retention offer (if applicable)</li>
                              <li>KYC documents and NEFT details as per AML guidelines</li>
                              <li>Any additional documents requested by the surveyor</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        4. How can I raise a complaint or grievance?
                      </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <div className="row faq-gray-txt">
                          <div className="col-md-12 m-b-20">
                            <p>If you have a grievance or query, here’s how you can seek help:</p>
                            <ul className="disc-list-f">
                              <li><strong>Call us</strong>: Toll-free number 1800 2666</li>
                              <li><strong>Visit our website</strong>: Go to the “Grievance Redressal” section in the Customer Support area at&nbsp;<a href="https://www.icicilombard.com/" className="faqlink">ICICI&nbsp;Lombard</a>.</li>
                              <li><strong>Visit a branch</strong>: Contact the nearest ICICI Lombard branch office.</li>
                            </ul>
                            <p>If you’re unsatisfied with the resolution:</p>
                            <ul className="disc-list-f">
                              <li>You can escalate your concern to the&nbsp;<strong>IRDAI</strong>&nbsp;through the&nbsp;<a href="https://bimabharosa.irdai.gov.in/" className="faqlink">Bima&nbsp;Bharosa&nbsp;Portal</a>&nbsp;or call the&nbsp;<strong>IRDAI Grievance Call Centre</strong>&nbsp;at 1800 4254 732 / 155255.</li>
                              <li>
                                Alternatively, you can approach the&nbsp;<strong>Insurance Ombudsman</strong>. Details are available on the&nbsp;<a href="https://irdai.gov.in/" className=" faqlink" >IRDAI&nbsp;website</a>&nbsp;or the&nbsp;<a href="https://www.icicilombard.com/" className="faqlink">ICICI&nbsp;Lombard&nbsp;website</a>.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> 
               </section>
              {/* <footer>
                <div className="footer-main">
                  <div className="container footer-content">
                    <div className="d-flex flex-row footer-content-wrapper">
                      <div className="footer-wrapper">
                        <div className="footer-left-block">
                          <h5>ICICI Lombard General Insurance Company Limited,</h5>
                          <p>ICICI Lombard House, 414, Veer Savarkar Marg, Near Siddhi Vinayak Temple, Prabhadevi, Mumbai - 400025.</p>
                          <p>Reg. No.115</p>
                          <p className="email-para">
                            Email: <span>cpcontactus@icicilombard.com</span>
                          </p>
                          <ul className="social-links">
                            <li style={{marginRight: '6px'}}><a title="icicilombard facebook" className="fb-ico" href="https://www.facebook.com/ICICILombard" target="_blank" /></li>
                            <li><a title="icicilombard linkedin" className="link-ico" href="https://www.linkedin.com/company/icici-lombard?trk=tyah" target="_blank" /></li>
                            <li><a title="icicilombard twitter" className="twt-ico" href="https://twitter.com/ICICILombard" target="_blank" /></li>
                            <li><a title="icicilombard youtube" className="yt-ico" href="https://www.youtube.com/user/ICICILombardLtd" target="_blank" /></li>
                            <li><a title="icicilombard insta" className="inst-ico" href="https://www.instagram.com/icicilombardofficial" target="_blank" /></li>
                          </ul>
                        </div>
                      </div>
                      <div className="footer-links product-solution">
                        <h5>Products</h5>
                        <ul>
                          <li><a href="/Portal/Standard_Fire_and_Special_perils_policy">Property</a></li>
                          <li><a href="/Portal/Marine_Inland_Open_Declaration_Policy">Marine</a></li>
                          <li><a href="/Portal/Comprehensive_General_Liability">Liability</a></li>
                          <li><a href="/Portal/Contractors_All_Risk">Engineering</a></li>
                          <li><a href="/Portal/Group_Health">Group Health </a></li>
                          <li><a href="https://www.icicilombard.com/" target="_blank">Retail Products</a></li>
                          <li><a href="https://sme.icicilombard.com/" target="_blank">SME Products</a></li>
                          <li><a href="../assets/pdf/BASEPRODUCTS.pdf" target="_blank">Base Products</a></li>
                        </ul>
                      </div>
                      <div className="footer-links explore">
                        <h5>Explore</h5>
                        <ul>
                          <li><a href="/Portal/Home">Website Home</a></li>
                          <li><a href="/Portal/Property_Loss_Prevention_exercise">Property services</a></li>
                          <li><a href="/Portal/Vas_Solution">Marine Services</a></li>
                          <li><a href="/Portal/risk_Health">Group Health Services</a></li>
                          <li><a href="/Portal/risk_Engineering">Engineering services</a></li>
                          <li><a href="/Portal/risk_liability">Liability Services</a></li>
                        </ul>
                      </div>
                      <div className=" footer-links">
                        <h5>Others</h5>
                        <ul>
                          <li><a href="https://www.icicilombard.com" target="_blank">Company Home</a></li>
                          <li><a href="https://www.icicilombard.com/about-us" target="_blank">About </a></li>
                          <li><a href="https://www.icicilombard.com/docs/default-source/default-document-library/1010586_26102022170853_hospital_empanelment_criteria.pdf" target="_blank">Hospital Empanelment Criteria</a></li>
                          <li><a href="https://www.icicilombard.com/legal/privacy-policy" target="_blank">Privacy Policy</a></li>
                          <li><a href="../assets/pdf/TAT.pdf" target="_blank">Retail Products TAT</a></li>
                        </ul>
                      </div>
                    </div>
                    <hr />
                    <div className="footer-dis-content">
                      <p>
                        ICICI Lombard General Insurance Company Ltd. is one of the leading private sector general insurance company in India offering insurance coverage for motor, health, travel, home, student travel and more. Policies can be purchased and renewed online as well. Immediate issuance of policy copy online.
                      </p>
                      <p>
                        ICICI trade logo displayed above belongs to ICICI Bank and is used by ICICI Lombard GIC Ltd. under license and Lombard logo belongs to ICICI Lombard GIC Ltd. Insurance is the subject matter of the solicitation. The advertisement contains only an indication of cover offered. For more details on risk factors, terms, conditions and exclusions, please read the sales brochure carefully before concluding a sale. CIN: L67200MH2000PLC129408
                      </p>
                    </div>
                  </div>
                </div>
              </footer> */}
            </div>
          {/* footer ends */}
          {/* Script End  */}
          {/* Gaurav Script Start */}
          {/* Gaurav Script END */}
        </div></div>
    

       
);

};

export default Home;
