import "../css/home.css";
import { Tilt } from "react-tilt";
import { Link } from "react-router-dom";

const HomeAbout = () => {
  return (
    <>
      <div className="aboutSec container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6 image-home-about">
            <div className="aboutImg">
              <Tilt className="Tilt" options={{ max: 35, scale: 1.1 }}>
                <div className="Tilt-inner">
                  <img
                    className="img-fluid"
                    src="/images/about_us.webp"
                    alt="best It, web, and isp services in coimbatore"
                  />
                </div>
              </Tilt>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="aboutCont">
              <p className="mini-title main-color">ABOUT US</p>
              <p className=" home-about-ttle">
              We are ISO certified and GEM authorized company
              </p>
              <p className="text-muted  home-baner-con">
              We predominantly provide IT services in our company 
              in and around Coimbatore, Our main purpose is to amplify
               our services to the best with a wide range of product and services. 
              We help our clients to address their needs and challenges effectively.
              </p>
              <div className="abtBoxes">
                <div className="row">
                  <div className="col-12 col-md-6 mb-3 ">
                    <div className="row abtBoxInn">
                      <div className="col-3">
                        <img
                          className="img-fluid experienceimg"
                          src="/images/icons/certificatenew.webp"
                          alt="experience"
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
                          alt="Quick Support"
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
              
              <p className="text-muted home-baner-con-below">
                We take pride in ourselves being able to cater to the needs of
                big organizations, institutions, industries and individual
                clients, with the prime goal of providing top-class doorstep
                services at highly competitive rates and value for our
                customers.
              </p>
              <Link to="/about" className="btns links text-light">
                Learn More &nbsp; <span className="fa fa-arrow-right"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeAbout;
