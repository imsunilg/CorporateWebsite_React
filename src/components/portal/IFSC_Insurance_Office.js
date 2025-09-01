
import react from "react";
const IFSC_Insurance_Office=()=>{
return(

      <div>
        <style dangerouslySetInnerHTML={{__html: "\n    dropdown-item.active {\n        background: coral;\n    }\n" }} />
        <div className="container-fluid header-container">
          <div className="container">
            <div className="row pt-3">
              <div className="col-sm-12">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb"> 
                    <li className="breadcrumb-item">
                      <img src="../assets/images/home-icon.jpg" className="Homeicon mr-2" alt="home-icon" />\<a href="#" className="headerContent ml-2 disabled" style={{color: '#ec6625'}}>IFSC Insurance Office</a>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-10">
                <img src="../assets/images/ifsc-insurance-banner.png" alt="vas-solution-banner" className="NewProject mainbanner" />
              </div>
            </div>
            <h1 style={{fontWeight: 'bold'}}>IFSC Insurance Office</h1>
            <p>
              IFSC (International Financial Service Centre) located at GIFT (Gujarat International Finance-Tec)
              City is India’s first Financial Services SEZ dedicated to development and export of financial
              services in and from India. The Financial Services Centre is regulated by a unified regulator IFSCA
              ( International Financial Services Centre Authority) where the regulations are primarily aimed at
              matching the guidelines of other leading financial centres. ICICI Lombard is first and only private
              sector General Insurance Company to start its operations from IFSC. The Insurance office is termed
              as IFSC Insurance Office (IIO).
            </p>
            <ol className="basic-cover-list">
              <li>
                The IIO is different from other offices of ICICI Lombard. It is created and works under a regime
                designed to provide global solutions to the customers and hence it can follow law of the land to
                match the solutions provided by the local competition.
              </li>
              <li>
                The IIO will help ICICI Lombard to harness new opportunities in both insurance and reinsurance
                by offering solutions to Indian corporates and individuals overseas.
              </li>
              <li>
                The IIO operates in freely convertible foreign currencies thus providing solutions to local
                currency transactions in overseas jurisdictions.
              </li>
              <li>
                The IIO is the innovation hub of ICICI Lombard, developing products for the unique requirements
                of the IFSC and the export oriented industries. ICICI Lombard aims to continue supporting its
                customers whether in India or abroad and IIO is acting as a capability enhancer to provide this
                support.
              </li>
            </ol>
          </div>
        </div>
        {/* end */}
        {/* end section */}
        {/* end-section */}
      </div>
)

};

export default IFSC_Insurance_Office;