import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const NeedHelp = () => {
  const [closed, setClosed] = useState(false);
  useEffect(() => {
    try { setClosed(sessionStorage.getItem('nh_closed') === '1'); } catch (_) {}
  }, []);
  const close = () => { setClosed(true); try { sessionStorage.setItem('nh_closed','1'); } catch(_){} };
  const reopen = () => { setClosed(false); try { sessionStorage.removeItem('nh_closed'); } catch(_){} };

  if (closed) {
    return (
      <button className="need-help-toggle" onClick={reopen} aria-label="Open Need Help">
        Need Help?
      </button>
    );
  }

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
        <button className="need-help-close" aria-label="Close Need Help" onClick={close}>×</button>
      </div>
    </div>
  );
};

export default NeedHelp;
