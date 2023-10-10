import "../css/home.css";

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
                  <p className="home-about-ttle">Trusted From Over<br></br> 1,500 Clients</p>
                </div>
                <div className="col-md-6">
                  <p className="text-muted  home-baner-con-below">
                  "Great team to work with, they understood my requirements
                    and helped me go live within hours, and delivered the
                    results ahead of schedule."
                  </p>
                  <div className="clientBox">
                    <div className="clientImgBox">
                        <div className="clientImg">
                            <img className="img-fluid" src="/images/abt.jpg"></img>
                        </div>
                        <div className="clientQuote">
                            <img src="/images/Quote.svg"></img>
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
                <p className="test-head">We Deliver Solution with the Goal of<br></br> Trusting Relationships</p>
            </div>
            <div className="testMainCont">
                <div className="testInn">
                    <div className="testiIconBox">
                        <img className="img-fluid" src="/images/webs1.png"></img>
                    </div>
                    <div className="testiContBox">
                        <p className="mid-title">Complete Networking</p>
                        <p className="tech-desc">Seamless Connectivity <br></br>Solutions</p>
                    </div>
                </div>
                <div className="testInn">
                    <div className="testiIconBox">
                        <img className="img-fluid" src="/images/cctv2.png"></img>
                    </div>
                    <div className="testiContBox">
                        <p className="mid-title">CCTV Camera</p>
                        <p className="tech-desc">24/7 Security Surveillance</p>
                    </div>
                </div>
                <div className="testInn">
                    <div className="testiIconBox">
                        <img className="img-fluid" src="/images/webs6.png"></img>
                    </div>
                    <div className="testiContBox">
                        <p className="mid-title">Web /Graphic Design</p>
                        <p className="tech-desc">Captivating Design<br></br>Experiences</p>
                    </div>
                </div>
                <div className="testInn">
                    <div className="testiIconBox">
                        <img className="img-fluid" src="/images/cctvs1.png"></img>
                    </div>
                    <div className="testiContBox">
                        <p className="mid-title">Projectors/Biometrics</p>
                        <p className="tech-desc">Innovative Presentation <br></br>and Access</p>
                    </div>
                </div>
                <div className="testInn">
                    <div className="testiIconBox">
                        <img className="img-fluid" src="/images/laptops.png"></img>
                    </div>
                    <div className="testiContBox">
                        <p className="mid-title">Computer & Laptop</p>
                        <p className="tech-desc">Reliable Business<br></br> Computing</p>
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