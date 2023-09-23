import "../css/home.css";

const ourClient = () => {
  return (
    <>
      <section className="ourExpSec">
        <div className="container">
          <div className="ourExp">
            <div className="row align-items-center">
              <div className="col-md-6">
                <img className="img-fluid" src="/images/IT-10YEARS.png"></img>
              </div>
              <div className="col-md-6">
                <p className="mini-title main-color">OUR EXPERIENCE</p>
                <p className="sub-title">Experts With Experience</p>
                <p className="text-muted">
                  Quality & Customer version of lorem ipsum proin gravida nibh
                  vel velit auctor aliquet aenean sollicitudin lorem quis
                  bibendum auctor nisi elit consequat ipsum nec sagittis sem
                  nibh id elit.
                </p>
                <div class="row align-items-center ourExpList">
                  <div class="col-md-6">
                    <li>Experience in AMC</li>
                    <li>Experience in AMC</li>
                    <li>Experience in AMC</li>
                  </div>
                  <div class="col-md-6">
                    <li>Experience in AMC</li>
                    <li>Experience in AMC</li>
                    <li>Experience in AMC</li>
                  </div>
                </div>
                <hr></hr>
                <div className="ourExpFoot">
                  <div className="ourExpFootIconBox">
                    <img
                      className="img-fluid"
                      src="/images/top-rated.svg"
                    ></img>
                  </div>
                  <div className="ourExpFootContBox">
                    <p className="mid-title">
                      Best Practices From Industry Experts
                    </p>
                    <p className="text-muted">
                      We've designed a culture that allows our stewards to
                      assimilate with our clients and bring.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ourExp;