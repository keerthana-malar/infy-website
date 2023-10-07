import "../css/home.css";
import { Link } from "react-router-dom";

const RecentProjects = () => {
  return (
    <>
      <section className="reProSec">
        <div className="container">
          <div className="reProTopCont d-flex justify-content-center text-center mb-3">
            <div className="mb-5">
              <p className="mini-title main-color">WE MAKE CONNECTIONS</p>
              <p className=" home-about-ttle">Discover Our Recent Projects</p>
              <p className="text-muted mb-5 home-baner-con-below">
              Explore the innovation and success of our most recent projects.
              </p>
              <Link to="/ServiceSeo" className="btns text-light">
                All Projects &nbsp; <span className="fa fa-arrow-right"></span>{" "}
              </Link>
            </div>
          </div>

          <div className="reProBox">
            <div className="row">
              <div className="col-md-4 p-5 p-lg-2 p-md-1">
                <div className="reProBoxInn">
                  <div className="img-box">
                    <img
                      className="img-fluid"
                      src="/images/seo/trip.jpg"
                    ></img>
                  </div>
                  <div className="cont-box d-flex justify-content-center align-items-center text-center">
                    <div className="cont-box-inn">
                      <p className="sm-title text-muted m-0 ">DEVELOPMENT</p>
                      <p className="mid-titles m-0">
                        <a className="links">Travel Website</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 p-5 p-lg-2 p-md-1">
                <div className="reProBoxInn">
                  <div className="img-box">
                    <img
                      className="img-fluid"
                      src="/images/seo/seo.jpg"
                    ></img>
                  </div>
                  <div className="cont-box d-flex justify-content-center align-items-center text-center">
                    <div className="cont-box-inn">
                      <p className="sm-title text-muted m-0">SEO</p>
                      <p className="mid-titles m-0">
                        <a className="links">Digital Marketing</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 p-5 p-lg-2 p-md-1">
                <div className="reProBoxInn">
                  <div className="img-box">
                    <img
                      className="img-fluid"
                      src="/images/seo/bsite.jpg"
                    ></img>
                  </div>
                  <div className="cont-box d-flex justify-content-center align-items-center text-center">
                    <div className="cont-box-inn">
                      <p className="sm-title text-muted m-0">DEVELOPMENT</p>
                      <p className="mid-titles m-0">
                        <a className="links">Ecommerce Website</a>
                      </p>
                    </div>
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

export default RecentProjects;
