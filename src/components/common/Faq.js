import React from "react"; 

const Faq = () => {
  return (
  <> <link rel="stylesheet" href="/assets/css/faq-bootstrap.min.css" />
  
    <section className="faq-section" style={{ border: "none" }}>
      <h2 className="text-left faq-text">FAQs</h2>

      <div>
        <div className="accordion accordion-flush mt-4" id="accordionExample">
          {/* Item 1 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                1. What are the turnaround times (TAT) for corporate insurance services?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <div className="row">
                  <div className="col-md-12 m-b-20">
                    <span className="b-text">
                      Here’s how long it typically takes to complete various insurance-related services:
                    </span>
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

          {/* Repeat similar for items 2–4, just replace class with className and fix styles */}
        </div>
      </div>
    </section>
    
    
    </>
  );
};

export default Faq;
