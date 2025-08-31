import React, { useEffect, useState, useRef } from "react";
const CPTLoginMFA = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [errors, setErrors] = useState({});
  const [captchaCode, setCaptchaCode] = useState("");
  const toastRef = useRef(null);

  const generateCaptcha = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // omit ambiguous chars
    let code = "";
    for (let i = 0; i < 4; i++) code += chars[Math.floor(Math.random() * chars.length)];
    setCaptchaCode(code);
    setCaptcha("");
    setErrors((e) => ({ ...e, captcha: undefined }));
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = {};
    if (!username.trim()) nextErrors.username = "User ID is required";
    if (!password) nextErrors.password = "Password is required";
    if (!captcha.trim()) nextErrors.captcha = "Captcha is required";
    // Captcha match check
    if (!nextErrors.captcha) {
      if (captcha.trim().toUpperCase() !== captchaCode.toUpperCase()) {
        nextErrors.captcha = "Invalid captcha";
        // trigger toast if present
        const toast = document.getElementById("liveToast");
        if (toast) {
          toast.classList.remove("hide");
          toast.classList.add("show");
          setTimeout(() => {
            toast.classList.remove("show");
            toast.classList.add("hide");
          }, 1200);
        }
      }
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    // TODO: integrate API call here
    // Clear fields after successful validation
    setUsername("");
    setPassword("");
    setCaptcha("");
    generateCaptcha();
  };

  return (

      <div>
      
        <div className="container-fluid p-t-65" style={{backgroundColor: 'var(--bg-grey1)'}}>
          <div className="row">
            <div className="col-sm-7" style={{backgroundColor: 'var(--bg-grey1)'}}>
              <div className="justify-content-center loginSection">
                <h1 className="login-header mt-2" style={{color: '#004A80', fontWeight: 'bold'}}>Welcome to the Corporate Portal</h1>
                <img src="../assets/images/login-img.png" style={{marginLeft: '21%'}} alt="login" className="mt-0 justify-content-center loginportalimg" />
              </div>
            </div>
            <div className="col-sm-5 companylogo login-screen" style={{backgroundColor: 'white'}}>
              <span className="d-flex justify-content-center">
                <img src="../assets/images/login-log.png" alt="logo" className="companylogo w-100" />
              </span>
              <h1 style={{color: 'darkslateblue'}}>Please fill the details below to login</h1>
              <div className="container">
                <form onSubmit={handleSubmit} action="/Portal/CPTLoginMFA" className="login-form" id="form_Login" method="post">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="mb-2 login-label">Username</label>
                    <input
                      autoComplete="off"
                      className="form-control loginInput"
                      id="txtUserName"
                      maxLength={50}
                      name="txtUserName"
                      placeholder="Enter your Login ID"
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    {errors.username ? (
                      <div className="text-danger mt-1" style={{ fontSize: 12 }}>{errors.username}</div>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1" className="mb-2 labelPassward">Password</label>
                    <input
                      autoComplete="off"
                      className="form-control passwordinput"
                      id="txtPassword"
                      maxLength={50}
                      name="txtPassword"
                      placeholder="Enter your Password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onCopy={(e) => e.preventDefault()}
                      onPaste={(e) => e.preventDefault()}
                    />
                    {errors.password ? (
                      <div className="text-danger mt-1" style={{ fontSize: 12 }}>{errors.password}</div>
                    ) : null}
                  </div>
                  <style dangerouslySetInnerHTML={{__html: "\n                        img.captcha-img {\n                            width: 132px;\n                            height: 46px;\n                        }\n\n                        img.captcha-icon {\n                            width: 20px;\n                            height: 20px;\n                            margin-top: 16px;\n                            margin-left: 10px;\n                        }\n\n\n                        .p-lr-0 {\n                            padding-left: 0px;\n                            padding-right: 0px;\n                        }\n\n                        .forgetbtn {\n                            margin: 15px auto 40px auto;\n                            float: none;\n                            width: fit-content;\n                        }\n\n                    " }} />
                  <div className="captca-div">
                    <div className="row" />
                    <div className="col-12 m-t-20 p-l-0">
                      <label htmlFor="exampleInputPassword1" className="mb-2 labelPassward">Enter Captcha</label>
                    </div>
                    <div className="col-md-12 p-lr-0 d-flex">
                      <div id="captchaCode" className="captcha-img captchatxtbox d-flex align-items-center justify-content-center" style={{fontWeight: 700, letterSpacing: 4, userSelect: 'none'}}>
                        {captchaCode}
                      </div>
                      <img
                        src="../assets/cp_images/refresh-icon.png"
                        id="refreshCaptcha"
                        className="captcha-icon"
                        onClick={generateCaptcha}
                        alt="refresh captcha"
                        role="button"
                      />
                      <input
                        type="text"
                        className="form-control enter-cap"
                        id="captchaInput"
                        placeholder="Enter Captcha"
                        maxLength={4}
                        value={captcha}
                        onChange={(e) => setCaptcha(e.target.value)}
                      />
                  </div>
                  {errors.captcha ? (
                    <div className="text-danger mt-1" style={{ fontSize: 12 }}>{errors.captcha}</div>
                  ) : null}
                  </div>
                  <div className="position-fixed bottom-0 right-0 p-3" style={{zIndex: 5, right: 0, bottom: 0}}>
                    <div id="liveToast" className="toast hide" role="alert" aria-live="assertive" aria-atomic="true" data-delay={1000}>
                      <div className="toast-body  text-danger text-center">
                        Invalid CAPTCHA! Please try again. 
                      </div>
                    </div>
                  </div>                                          
                  <input id="hdnIV_Chavi" name="hdnIV_Chavi1" type="hidden" defaultValue="hdnIV_Chavi2" /><input id="hdnEncKey_Chavi" name="hdnEncKey_Chavi1" type="hidden" defaultValue="hdnEncKey_Chavi2" /><input id="hfkv" name="hfkv" type="hidden" defaultValue="" /><input data-val="true" data-val-length="Exceeding maxlength of 50" data-val-length-max={100} id="hdnEncUserName" name="UserName" type="hidden" defaultValue="" /><input data-val="true" data-val-length="Exceeding maxlength of 20" data-val-length-max={100} id="hdnEncPassword" name="Password" type="hidden" defaultValue="" />                    <div className="text-center mt-5">
                    <input type="submit" className="btn  text-white loginbtn" style={{backgroundColor: '#ec6625'}} name="signin" title="Log In" id="btnLogin" defaultValue="Log In" />
                  </div> 
                  <div className="col-md-12">
                    <a
                      href="#"
                      className="form-text text-muted forgetbtn text-center"
                      id="forgot-password-link"
                      onClick={(e) => { e.preventDefault(); const elLogin = document.querySelector('.login-screen'); const elForgot = document.querySelector('.forgot-password-screen'); if (elLogin && elForgot) { elLogin.style.display = 'none'; elForgot.style.display = 'block'; } }}
                    >
                      Forgot Password?
                    </a> 
                  </div>
                  <input name="__RequestVerificationToken" type="hidden" defaultValue="CfDJ8AgBdJ4LsolOvhLEbdyVbX-VHv8QaC_gfwhG7b-k4n-e2I0EOazHd2cZpSn_pUHI_MqvGSKbRBocHk00ZTkA-GFpI-x9Ij91hbQmO_lzp_gX90Crqc-GxBypWqi8RJMq368-H63NLnJScHRcfmutp-8" /></form>          </div>
            </div>
            <div className="col-sm-5 companylogo forgot-password-screen" style={{backgroundColor: 'white', display: 'none'}}>
              <span className="d-flex justify-content-center">
                <img src="../assets/images/login-log.png" alt="logo" className="companylogo w-100" />
              </span>
              <h1 style={{color: 'darkslateblue'}}>Forgot Password</h1>
              <div className="container">
                <form id="forgotPasswordForm">
                  <div id="userIdDiv">
                    <label htmlFor="userId" className="mb-2 login-label">User ID</label>
                    <input autoComplete="off" className="form-control loginInput m-b-20" id="txtFPUserId" name="txtFPUserId" maxLength={50} placeholder="Enter user id" type="text" required />
                    <input type="button" className="btn  text-white loginbtn" style={{backgroundColor: '#ec6625'}} name="btnsubmitUserId" title="Log In" id="btnsubmitUserId" defaultValue="Submit" />
                  </div>
                  <div className="form-textfield" id="otpDiv" style={{display: 'none'}}>
                    <div className="row">
                      <div className="col-md-4 p-t-6"><label className="login-label">User ID:</label></div>
                      <div className="col-md-8">
                        <input autoComplete="off" className="form-control loginInput m-b-20" id="txtDISPUserId" name="txtDISPUserId" maxLength={50} placeholder="Enter user id" type="text" required />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-4 p-t-6">
                        <label htmlFor="NewPass" className="mb-2 labelPassward">New Password</label>
                      </div>
                      <div className="col-md-8">
                        <input autoComplete="off" className="form-control passwordinput" id="txtNewPass" name="txtNewPass" maxLength={50} placeholder="New Password" type="password" required />
                        <div className="error-msg">
                          <span className="text-danger font-12 ">Passwords should be </span>
                          <span>Minimum 8 chars long</span>
                          <span>Have at least 1 small and 1 capital letter</span>
                          <span>Have one number and one out of the following: !@#$%^&amp;*</span>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-4 p-t-6">
                        <label htmlFor="confirmPass" className="mb-2 labelPassward">Confirm New Password</label>
                      </div>
                      <div className="col-md-8">
                        <input autoComplete="off" className="form-control passwordinput m-b-20" id="txtconfirmPass" name="txtconfirmPass" maxLength={50} placeholder="Confirm New Password" type="password" required />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-4 p-t-6">
                        <label htmlFor="otp" className="mb-2 labelPassward">Enter OTP</label>
                      </div>
                      <div className="col-md-8">
                        <input autoComplete="off" className="form-control passwordinput" id="txtotp" name="txtotp" maxLength={50} placeholder="Enter otp" type="text" required />
                      </div>
                    </div>
                    <div className="otp-btn">
                      <input type="button" id="resendOTP" className="btn text-white loginbtn" defaultValue="Resend OTP" />
                      <input type="button" className="btn text-white loginbtn" name="verifyOTP" title="Log In" id="verifyOTP" defaultValue="Verify OTP" />
                    </div>
                  </div>
                  <div className="text-center mt-3">
                  </div>
                </form>
                <p id="otpMessage" />
                <a
                  href="#"
                  className="form-text text-muted forgetbtn"
                  id="login-link"
                  onClick={(e) => { e.preventDefault(); const elLogin = document.querySelector('.login-screen'); const elForgot = document.querySelector('.forgot-password-screen'); if (elLogin && elForgot) { elLogin.style.display = 'block'; elForgot.style.display = 'none'; } }}
                >
                  Login Here
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
)

};

export default CPTLoginMFA;
