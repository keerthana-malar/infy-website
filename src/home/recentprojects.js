import "../css/home.css";

const RecentProjects = () => {
  return (
    <>
      <section className="reProSec">
        <div className="container">
          <div className="reProTopCont d-flex justify-content-center text-center mb-3">
            <div className="mb-5">
              <p className="mini-title main-color">WE MAKE CONNECTIONS</p>
              <p className="sub-title">Discover Our Recent Projects</p>
              <p className="text-muted mb-5">
              Explore the innovation and success of our most recent projects.
              </p>
              <a className="btns">
                All Projects &nbsp; <span className="fa fa-arrow-right"></span>{" "}
              </a>
            </div>
          </div>

          <div className="reProBox">
            <div className="row">
              <div className="col-md-4 p-5 p-lg-2 p-md-1">
                <div className="reProBoxInn">
                  <div className="img-box">
                    <img
                      className="img-fluid"
                      src="/images/project-1.jpg"
                    ></img>
                  </div>
                  <div className="cont-box d-flex justify-content-center align-items-center text-center">
                    <div className="cont-box-inn">
                      <p className="sm-title text-muted m-0">DEVELOPMENT</p>
                      <p className="mid-title m-0">
                        <a className="links">Ecom Website</a>
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
                      src="/images/project-1.jpg"
                    ></img>
                  </div>
                  <div className="cont-box d-flex justify-content-center align-items-center text-center">
                    <div className="cont-box-inn">
                      <p className="sm-title text-muted m-0">DEVELOPMENT</p>
                      <p className="mid-title m-0">
                        <a className="links">Travels Website</a>
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
                      src="/images/project-1.jpg"
                    ></img>
                  </div>
                  <div className="cont-box d-flex justify-content-center align-items-center text-center">
                    <div className="cont-box-inn">
                      <p className="sm-title text-muted m-0">DEVELOPMENT</p>
                      <p className="mid-title m-0">
                        <a className="links">Boutique Website</a>
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
