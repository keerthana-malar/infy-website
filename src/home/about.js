import "../css/home.css";

const HomeAbout = () => {
  return (
    <>
      <div className="aboutSec container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6 image-home-about">
            <div className="aboutImg">
              <img
                className="img-fluid"
                src="/images/about.png"
                alt="Service Image"
              ></img>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="aboutCont">
              <p className="mini-title main-color">ABOUT US</p>
              <p className=" home-about-ttle">
                We are here to IT Solution with 10 years of experience
              </p>
              <p className="text-muted">
                We are a prominent IT service provider, based in Coimbatore,
                with a wide range of products and services, to meet the
                exclusive needs of our customers. We offer end-to-end solutions
                to enable a reliable and uninterrupted workflow for our
                customers.
              </p>
              <div className="abtBoxes">
                <div className="row">
                  <div className="col-6">
                    <div className="row abtBoxInn">
                      <div className="col-3">
                        <img
                          className="img-fluid experienceimg"
                          src="/images/icons/certificate.png"
                        ></img>
                      </div>
                      <div className="col-9">
                        <p className="mid-title home-tit">Experience</p>
                        <p className="text-muted">
                          Our great team of more than 30 experts
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="row abtBoxInn">
                      <div className="col-3">
                        <img
                          className="img-fluid"
                          src="/images/icons/support.png"
                        ></img>
                      </div>
                      <div className="col-9">
                        <p className="mid-title home-tit">Quick Support</p>
                        <p className="text-muted">
                          No waiting, no hassle – Just quick solutions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-muted">
                We take pride in ourselves being able to cater to the needs of
                big organizations, institutions, industries and individual
                clients, with the prime goal of providing top-class doorstep
                services at highly competitive rates and value for our
                customers.
              </p>
              <a className="btns links text-light">
                Learn More &nbsp; <span className="fa fa-arrow-right"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeAbout;
