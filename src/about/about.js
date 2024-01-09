import "../css/home.css";
import { Tilt } from "react-tilt";

function about() {
  return (
    <>
      <div className="top-banner">
        <p className="main-title">About Us</p>
      </div>
      <div className="aboutSec container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6 image-home-about">
            <div className="aboutImg">
              <Tilt className="Tilt" options={{ max: 30, scale: 0.9 }}>
                <div className="Tilt-inner">
                  <img
                    className="img-fluid"
                    src="/images/others/services.webp"
                    alt="best services"
                    title="About Services"
                  />
                </div>
              </Tilt>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="aboutCont">
              <p className="mini-title main-color">ABOUT US</p>
              <p className=" home-about-ttle">
                We are here to IT Solution with 10 years of experience
              </p>
              <p className="text-muted  home-baner-con">
                We are a prominent IT service provider, based in Coimbatore,
                with a wide range of products and services, to meet the
                exclusive needs of our customers. We offer end-to-end solutions
                to enable a reliable and uninterrupted workflow for our
                customers.
              </p>
              <div className="abtBoxes">
                <div className="row">
                  <div className="col-12 col-md-6 mb-3 ">
                    <div className="row abtBoxInn">
                      <div className="col-3">
                        <img
                          className="img-fluid experienceimg"
                          src="/images/icons/certificatenew.webp"
                          alt="best services"
                          title="Experience"
                        ></img>
                      </div>
                      <div className="col-9">
                        <p className="mid-title home-tit">Experience</p>
                        <p className="text-muted">
                          10+ experts, years of experience.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="row abtBoxInn">
                      <div className="col-3">
                        <img
                          className="img-fluid"
                          src="/images/icons/supportnew.webp"
                          alt="best services"
                          title="Support"
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
              <div className="authorize">
                <p className="home-tit">
                  We Trusted ISO Certified and GEM Authorized Partner for
                  Success
                </p>
                <div className="row">
                  <div className="col-12">
                    <img
                      className="img-fluid auth"
                      src="./images/others/iso.svg"
                      alt="best services"
                      title="ISO"
                    ></img>
                    <img
                      className="img-fluid auth"
                      src="./images/others/gem-auth.svg"
                      alt="best services"
                      title="Gem-Auth"
                    ></img>
                    <img
                      className="img-fluid auth"
                      src="./images/others/bni-logo.png"
                      alt="best services"
                      title="BNI"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default about;
