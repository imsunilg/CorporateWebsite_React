import React from "react";

const Ourcasestudiesmain = () => {
  return (
    <section className="our-case-studies-main">
      <div className="container case-studies-content-wrapper p-t-20f">
        <p>Employee Speak</p>
        <h2>Our Articles</h2>
      </div>

      <div id="image-slider" className="image-wrapper">
        {/* First Article */}
        <div className="position-relative img-effect">
          <a href="/Portal/Explore1">
            <img
              src="/assets/images/MouseOver_Wellness.jpg"
              className="img-fluid first-img"
              alt="employee-speak"
            />
          </a>
          <div className="img-content employee-para">
            <span className="employee-pill">Maximising returns on wellness</span>
            <p>
              As organizations navigate the ever-changing landscape of the
              modern workplace, they are increasingly recognizing the profound
              impact.
            </p>
            <a href="/Portal/Explore1" className="milestone-content-wrapper">
              Read More
            </a>
          </div>
        </div>

        {/* Second Article */}
        <div className="position-relative img-effect">
          <a href="/Portal/Explore2">
            <img
              src="/assets/images/MouseOver_CYBERSECURITY.jpg"
              className="img-fluid second-img"
              alt="healthcare"
            />
          </a>
          <div className="img-content pill-margin">
            <span className="employee-pill">Cybersecurity</span>
            <p>
              In today's rapidly evolving digital landscape, the rise of
              cybersecurity threats has become a paramount concern for
              organizations worldwide.
            </p>
            <a href="/Portal/Explore2" className="milestone-content-wrapper">
              Read More
            </a>
          </div>
        </div>

        {/* Third Article */}
        <div className="position-relative img-effect">
          <a href="/Portal/Explore3">
            <img
              src="/assets/images/MouseOver_Crisis_Management.jpg"
              className="img-fluid third-img"
              alt="ites"
            />
          </a>
          <div className="img-content pill-margin">
            <span className="employee-pill">Mitigating risk in crisis</span>
            <p>
              The word crisis holds its origins to the Greek word - krisis
              (critical). It is defined as an event that can or has the
              potential to create ...
            </p>
            <a href="/Portal/Explore3" className="milestone-content-wrapper">
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ourcasestudiesmain;
