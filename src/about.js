import Progress from "./progress";
import Carousel from "./carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function about() {
  return (
    <>
      <div className="load">
        <div className="top-banner">
          <p className="main-title">About Us</p>
        </div>

        {/* counter box start */}
        <div className="testbox">
          <div className="counter-sec">
            <div className="row">
              <div className="col-md-4 main-bx">
                <div className="coun-box">
                  <div className="count"></div>
                </div>
                <div className="title">
                  <p className="sub-title">Completed Projects</p>
                </div>
              </div>
              <div className="col-md-4 main-bx">
                <div className="coun-box">
                  <div className="count"></div>
                </div>
                <div className="title">
                  <p className="sub-title">Happy Clients</p>
                </div>
              </div>
              <div className="col-md-4 main-bx">
                <div className="coun-box">
                  <div className="count"></div>
                </div>
                <div className="title">
                  <p className="sub-title">Services Provider</p>
                </div>
              </div>
            </div>
          </div>

          {/* short about content */}
          <div className="inn">
            <div className="short-abt">
              <div className="row">
                <div className="col-md-6">
                  <img className="img-fluid " src="./images/abt.jpg"></img>
                </div>
                <div className="col-md-6">
                  <div className="sh-abt-bx p-5">
                    <p className="mini-title main-color">about us</p>
                    <p className="s-title">
                      We deal With The Aspects Of Professional IT Services
                    </p>
                    <p>
                      We take pride in ourselves being able to cater to the
                      needs of big organizations, institutions, industries and
                      individual clients, with the prime goal of providing
                      top-class doorstep services at highly competitive rates
                      and value for our customers.
                    </p>
                    <Progress />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Client feeedback section */}
      <div className="client-sec">
        <div className="row">
          <div className="col-md-6">
            <div className="client-pro">
              <img className="img-fluid " src="./images/1.png"></img>
            </div>
          </div>
          <div className="col-md-6">
            <div className="review-main">
            <div className="client-con sh-abt-bx">
              <p className="mini-title main-color">CLIENT FEEDBACK</p>
              <p className="s-title mb-5">What Our Clients Say</p>
              <i className="text-muted">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim laborum. Sed ut perspiciatis
                unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantiumtam rem aperiam eaque ipsa quae inventore
                veritatis quasi architecto beatae vitae.
              </i>
            </div>
            <div className="review">
              <div className="row">
                <div className="col-md-2">
                  <div className="rev-bx1">
                  <FontAwesomeIcon icon="fa fa-quote-left" />
                  </div>
                  <div className="rev-bx2">
                    <img className="img-fluid " src="./images/abt.jpg"></img>
                  </div>
                </div>
                <div className="col-md-10">
                    <p><b>John Smith</b></p>
                    <p className="text-muted">A leading Company</p>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <Carousel/>
    </>
  );
}
export default about;
