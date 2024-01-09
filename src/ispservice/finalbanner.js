import "font-awesome/css/font-awesome.css";
import "../css/ispservice.css";
import { Link } from "react-router-dom";
function Finalbanner() {
  return (
    <>
      <div className=" ispservice1 ">
        <div className=" topbannersection2">
          <div className="container ">
            <div className="row">
              <div
                className="col-md-5 dashed"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <div className=" contentsection">
                  <div className="button">
                    <Link to="/contact">
                      <button className="btns-greens">need more help</button>
                    </Link>
                  </div>

                  <p className="bannercontentone">
                    Contact our team of experts to explore plan options.
                  </p>
                </div>
                <div className="lists">
                  <p className="bannercontentpara">
                    Consult our experts for personalized plan options. Your
                    connectivity needs, our expertise.
                  </p>
                </div>
              </div>
            </div>

            <div className="services-bllog ">
              <div className="row Boxss">
                <div
                  className="servicebox col-lg-4"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                >
                  <div className="serviceContents">
                    <div className="des-blog">
                      <i class="fa fa-solid fa-phone phones isp-fb-icon"></i>
                    </div>

                    <h2 className="las-blo-title">Customer Services</h2>
                    <p className="text-muted box-conin">
                      At Infygain technologies, exceptional customer service is
                      our promise. We're here to assist you every step of the
                      way.{" "}
                    </p>
                    <div className="buttons">
                      {" "}
                      <a href="tel:+1234567890" className="btns-greenbox">
                        Call now
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="servicebox col-lg-4"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <div className="serviceContents">
                    <div className="des-blog">
                      <i class="fa fa-solid fa-envelope isp-fb-icon"></i>
                    </div>

                    <h2 className="las-blo-title">Ticket Support</h2>
                    <p className="text-muted box-conin">
                      Efficient Ticket Support: Quick solutions to your
                      technical queries. Submit a ticket, track progress, and
                      get back to what matters.{" "}
                    </p>
                    <div className="buttons">
                      {" "}
                      <a
                        href="mailto:info@infygain.com"
                        className="btns-greenbox"
                      >
                        mail now
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="servicebox col-lg-4"
                  data-aos="fade-left"
                  data-aos-duration="2000"
                >
                  <div className="serviceContents">
                    <div className="des-blog">
                      <i class="fa fa-user isp-fb-icon"></i>
                    </div>

                    <h2 className="las-blo-title">Insight</h2>
                    <p className="text-muted box-conin">
                      Our in-depth analysis helps you make informed decisions
                      for a superior online experience. Explore the power of
                      insights today.{" "}
                    </p>
                    <div className="buttons">
                      {" "}
                      <a
                        href="https://api.whatsapp.com/send?phone=9952141444"
                        className="btns-greenbox"
                      >
                        chat now
                      </a>
                    </div>
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

export default Finalbanner;
