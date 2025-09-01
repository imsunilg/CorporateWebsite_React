import React from "react";
import { Link } from "react-router-dom";
const NeedHelp = () => {
  return (
    <div className="need-help-wrapper">
      <div className="need-help-content">
        <img
          src="/assets/images/help-lady-img.svg"
          className="img-fluid"
          alt="assist-graphics"
        />
        <div className="d-flex flex-column para-content">
          <p>Need Help?</p>
          <p>
            Want to know more about our Products &amp; Risk Management Services?
          </p>
        </div>
         
         <Link to="ContactUs" className="contact-us">Contact Us</Link>
      </div>
    </div>
  );
};

export default NeedHelp;
