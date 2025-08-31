
import react from "react";
const ContactUs=()=>{
return(

      <div>
        <div className="container-fluid header-container">
          <div className="container">
            <div className="row pt-3">
              <div className="col-sm-12">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <img src="../assets/images/home-icon.jpg" className="Homeicon mr-2" alt="home-icon" />\<a href="#" className="headerContent ml-2 disabled" style={{color: '#ec6625'}}>Contact Us</a>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <img src="../assets/images/Contact-banner.jpg" alt="contact-banner" className="NewProject mainbanner d-none d-sm-block" />
                <img src="../assets/images/contact-mobile.png" alt="contact-banner" className="mainbanner d-block d-sm-none img-fluid" />
              </div>
            </div>
            <h1 className="d-none d-sm-block">Contact Us</h1>
          </div>
        </div>
        
        <div className="container mt-5">
          <div className="row">
            <div className="col-sm-5">
              <form>
                <div className="form-group">
                  <label htmlFor="txtfirstname">First Name <span style={{color: 'red'}}>*</span></label>
                  <input type="text" maxLength={50} className="form-control mt-2 py-4 contactinput" id="txtfirstname" aria-describedby="emailHelp" placeholder="Enter Your First name" />
                  <span className="requiredText" />
                </div>
              </form>
            </div>
            <div className="col-sm-5">
              <form>
                <div className="form-group">
                  <label htmlFor="txtlastname">Last Name <span style={{color: 'red'}}>*</span></label>
                  <input type="text" maxLength={50} className="form-control mt-2 py-4 contactinput" id="txtlastname" aria-describedby="emailHelp" placeholder="Enter Your last name" />
                  <span className="requiredText" />
                </div>
              </form>
            </div>
            <div className="col-sm-5 mt-3 mt-xs">
              <form>
                <div className="form-group">
                  <label htmlFor="txtorgemailid">Organizational Email ID <span style={{color: 'red'}}>*</span></label>
                  <input type="email" maxLength={100} className="form-control mt-2 py-4 contactinput" id="txtorgemailid" aria-describedby="emailHelp" placeholder="Enter your Email" />
                  <span className="requiredText" />
                </div>
              </form>
            </div>
            <div className="col-sm-5 mt-3 mt-xs">
              <form>
                <div className="form-group">
                  <label htmlFor="txtphone">Phone <span style={{color: 'red'}}>*</span></label>
                  <input type="text" maxLength={12} className="form-control mt-2 py-4 contactinput" id="txtphone" aria-describedby="emailHelp" placeholder="Enter your mobile number" />
                  <span className="requiredText" id="spanphone" />
                </div>
              </form>
            </div>
            <div className="col-sm-5 mt-3 mt-xs">
              <form>
                <div className="form-group">
                  <label htmlFor="txtcompanyname">Company name <span style={{color: 'red'}}>*</span></label>
                  <input type="text" maxLength={150} className="form-control mt-2 py-4 contactinput" id="txtcompanyname" aria-describedby="emailHelp" placeholder="Enter your company name" />
                  <span className="requiredText" />
                </div>
              </form>
            </div>
            <div className="col-sm-5 mt-3 mt-xs">
              <form>
                <div className="form-group">
                  <label htmlFor="txtdesignation">Designation <span style={{color: 'red'}}>*</span></label>
                  <input type="text" maxLength={50} className="form-control mt-2 py-4 contactinput" id="txtdesignation" aria-describedby="emailHelp" placeholder="Enter your Designation" />
                  <span className="requiredText" />
                </div>
              </form>
            </div>
            <div className="col-sm-10 mt-3 mt-xs">
              <form>
                <div className="form-group">
                  <label htmlFor="txtyourmessagequery">Your message/query <span style={{color: 'red'}}>*</span></label>
                  <input type="text" maxLength={1000} className="form-control mt-2 pb-5 pt-3 contactinput" id="txtyourmessagequery" aria-describedby="emailHelp" placeholder="Please enter your message/query" />
                  <span className="requiredText" />
                </div>
              </form>
            </div>
          </div>
          <input type="submit" className="btn mt-3 mb-5 submitbtn px-4 py-2" style={{backgroundColor: '#ec6625'}} name="submit" title="submit" id="btnSubmit" defaultValue="Submit" />
        </div>
        <div style={{backgroundColor: '#F4F4F4'}}>
          <div className="container pt-5 pb-5 pb-xs">
            <div className="row">
              <div className="col-sm-12 reachsection">
                <p>Reach Out To Us</p>
                <h1>Our experts would be more than happy to assist you</h1>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-sm-12">
                <div className="accordion" id="accordionExample3" style={{border: '1px solid #ec6625', borderRadius: '5px'}}>
                  <div className="card">
                    <div className="card-header" id="headingOne3" style={{backgroundColor: 'white'}}>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="row">
                            <div className="col-md-3">
                              <h3 className="m-t-10 mt-xs" style={{fontSize: '20px', color: 'rgb(119, 113, 113)', fontWeight: 'bold'}}>Registered Address</h3>
                              <h3 className="m-t-10" style={{fontSize: '17px', color: 'rgb(119, 113, 113)'}}>ICICI Lombard House</h3>
                            </div>
                            <div className="col-md-4 pl-xs" style={{paddingLeft: 0, marginLeft: '0px'}}>
                              <p className="address_xs" style={{display: 'inline-block', width: '87%', paddingBottom: '36px', marginTop: '10px', borderRight: '1px solid #DFDFDF', paddingRight: '50px'}}>
                                414, P.Balu Marg, Off Veer <br /> Sawarkar Marg,<br /> near Siddhivinayak
                                Temple,<br /> Prabhadevi, Mumbai-400025
                              </p>
                            </div>
                            <div className="col-md-4 m-t-10">
                              <b>Email us Here</b>
                              <span style={{paddingTop: '10px', display: 'block'}}>cpcontactus@icicilombard.com</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="collapseOne3" className="collapse" aria-labelledby="headingOne3" data-parent="#accordionExample3">
                      <div className="card-body">
                        <img src="../assets/images/map-icon.jpg" alt="map-icon" style={{marginTop: '-148px', width: '22px'}} />
                        <p style={{display: 'inline-block', paddingBottom: '36px'}}>
                          414, P.Balu Marg,Off Veer <br /> Sawarkar Marg,<br /> near Siddhivinayak
                          Temple,<br /> Prabhadevi,Mumbai-400025
                        </p>
                        <span style={{visibility: 'hidden'}}>&nbsp;</span>
                        <span style={{visibility: 'hidden'}}>&nbsp;</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="contact-map-wrapper pt-4" style={{backgroundColor: '#F4F4F4', top: '-2px'}}>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-sm-12 contactpage-us-wrapper">
                <div className="left">
                  <p className="para-1">
                    <img src="../assets/images/location.svg" alt="location" /> Visit us at any of our Branches! 
                  </p>
                  <span className="para-2">Connect with us now!</span>
                </div>
                <div className="right">
                  <button onClick={() => window.open('../assets/pdf/CSG-office-address-Locate-us.pdf', '_blank')} className="contact-us">Locate Us</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="clearfix" style={{marginTop: '-36px'}}>
        </div>
        {/* pending check class */}
        {/* end section */}
        {/* end-section */}
      </div>
)

};

export default ContactUs;
