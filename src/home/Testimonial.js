import "../css/home.css";
import { Link } from "react-router-dom";
const Testimonial = () => {
  return (
    <>
      <section className="testimonialSec">
        <div className="container">
          <div className="testimonialBox">
            <div className="testiBox p-5">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <p className="mini-title main-color">Our Client's</p>
                  <p className="home-about-ttle">
                    Trusted From Over<br></br> 1,500 Clients
                  </p>
                </div>
                <div className="col-md-6">
                  <p className="text-muted  home-baner-con-belows">
                  "Great team to work with, they understood my requirements
                    and helped me go live within hours, and delivered the
                    results ahead of schedule."
                  </p>
                  <div className="clientBox">
                    <div className="clientImgBox">
                      <div className="clientImg">
                        <img className="img-fluid" src="/images/abt.webp" alt="Testimonial"></img>
                      </div>
                      <div className="clientQuotes">
                        <img src="/images/Quote.svg" alt="quote"></img>
                      </div>
                    </div>
                    <div className="clientName">
                      <p className="mid-title">Ragan</p>
                      <p className="text-muted">Ragan Dimension</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="testiCont">
            <div className="testiTopCont text-center">
              <p className="mini-title sec-color">TECHNOLOGY INDEX</p>
              <p className="test-head">
                We Deliver Solution with the Goal of<br></br> Trusting
                Relationships
              </p>
            </div>
            <div className="testMainCont">
              <div className="testInn">
                <div className="testiIconBox">
                  <svg
                    className="testIcon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 357.6 401.37"
                  >
                    <g id="Layer_2" data-name="Layer 2">
                      <g id="Layer_1-2" data-name="Layer 1">
                        <path
                          class="cls-2"
                          d="M357.6,282.36V119a37.33,37.33,0,0,0-18.66-32.33L197.47,5a37.32,37.32,0,0,0-37.33,0L18.67,86.68A37.33,37.33,0,0,0,0,119V282.36a37.32,37.32,0,0,0,18.67,32.33l141.47,81.68a37.32,37.32,0,0,0,37.33,0l141.47-81.68A37.31,37.31,0,0,0,357.6,282.36Z"
                        />
                      </g>
                    </g>
                  </svg>
                  <img className="img-fluid" src="/images/webs1.png" alt="Complete Networking"></img>
                </div>
                <div className="testiContBox">
                  <p className="mid-title"><Link to="/services/networking">Complete Networking</Link></p>
                  <p className="tech-desc">
                    Seamless Connectivity <br></br>Solutions
                  </p>
                </div>
              </div>
              <div className="testInn">
                <div className="testiIconBox">
                  <svg
                    className="testIcon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 357.6 401.37"
                  >
                    <g id="Layer_2" data-name="Layer 2">
                      <g id="Layer_1-2" data-name="Layer 1">
                        <path
                          class="cls-2"
                          d="M357.6,282.36V119a37.33,37.33,0,0,0-18.66-32.33L197.47,5a37.32,37.32,0,0,0-37.33,0L18.67,86.68A37.33,37.33,0,0,0,0,119V282.36a37.32,37.32,0,0,0,18.67,32.33l141.47,81.68a37.32,37.32,0,0,0,37.33,0l141.47-81.68A37.31,37.31,0,0,0,357.6,282.36Z"
                        />
                      </g>
                    </g>
                  </svg>
                  <img className="img-fluid 5" src="/images/fingerprint-modified.png" alt="Security Systems"></img>
                </div>
                <div className="testiContBox">
                  <p className="mid-title"><Link to="/services/cctv">Security Systems</Link></p>
                  <p className="tech-desc">24/7 Security Surveillance</p>
                </div>
              </div>
              <div className="testInn">
                <div className="testiIconBox">
                  <svg
                    className="testIcon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 357.6 401.37"
                  >
                    <g id="Layer_2" data-name="Layer 2">
                      <g id="Layer_1-2" data-name="Layer 1">
                        <path
                          class="cls-2"
                          d="M357.6,282.36V119a37.33,37.33,0,0,0-18.66-32.33L197.47,5a37.32,37.32,0,0,0-37.33,0L18.67,86.68A37.33,37.33,0,0,0,0,119V282.36a37.32,37.32,0,0,0,18.67,32.33l141.47,81.68a37.32,37.32,0,0,0,37.33,0l141.47-81.68A37.31,37.31,0,0,0,357.6,282.36Z"
                        />
                      </g>
                    </g>
                  </svg>
                  <img className="img-fluid" src="/images/webs6.png" alt="Web /Graphic Design"></img>
                </div>
                <div className="testiContBox">
                  <p className="mid-title"><Link to="/ServiceSeo">Web /Graphic Design</Link></p>
                  <p className="tech-desc">
                    Captivating Design<br></br>Experiences
                  </p>
                </div>
              </div>
              <div className="testInn">
                <div className="testiIconBox">
                  <svg
                    className="testIcon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 357.6 401.37"
                  >
                    <g id="Layer_2" data-name="Layer 2">
                      <g id="Layer_1-2" data-name="Layer 1">
                        <path
                          class="cls-2"
                          d="M357.6,282.36V119a37.33,37.33,0,0,0-18.66-32.33L197.47,5a37.32,37.32,0,0,0-37.33,0L18.67,86.68A37.33,37.33,0,0,0,0,119V282.36a37.32,37.32,0,0,0,18.67,32.33l141.47,81.68a37.32,37.32,0,0,0,37.33,0l141.47-81.68A37.31,37.31,0,0,0,357.6,282.36Z"
                        />
                      </g>
                    </g>
                  </svg>
                  <img className="img-fluid" src="/images/cctvs1.png" alt="AV Solutions"></img>
                </div>
                <div className="testiContBox">
                  <p className="mid-title"><Link to="/services/Projectors">AV Solutions</Link></p>
                  <p className="tech-desc">
                    Innovative Presentation <br></br>and Access
                  </p>
                </div>
              </div>
              <div className="testInn">
                <div className="testiIconBox">
                  <svg
                    className="testIcon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 357.6 401.37"
                  >
                    <g id="Layer_2" data-name="Layer 2">
                      <g id="Layer_1-2" data-name="Layer 1">
                        <path
                          class="cls-2"
                          d="M357.6,282.36V119a37.33,37.33,0,0,0-18.66-32.33L197.47,5a37.32,37.32,0,0,0-37.33,0L18.67,86.68A37.33,37.33,0,0,0,0,119V282.36a37.32,37.32,0,0,0,18.67,32.33l141.47,81.68a37.32,37.32,0,0,0,37.33,0l141.47-81.68A37.31,37.31,0,0,0,357.6,282.36Z"
                        />
                      </g>
                    </g>
                  </svg>
                  <img className="img-fluid" src="/images/laptops.png" alt="Computer & Laptop"></img>
                </div>
                <div className="testiContBox">
                  <p className="mid-title"><Link to="/services/laptop&desktop">Computer & Laptop</Link></p>
                  <p className="tech-desc">
                    Reliable Business<br></br> Computing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
