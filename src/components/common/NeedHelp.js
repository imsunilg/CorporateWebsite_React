import React from "react";

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
        <a href="/Portal/ContactUs" className="contact-us">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default NeedHelp;
