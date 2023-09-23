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
                  <p className="sub-title">Trusted From Over 1,500 Clients</p>
                </div>
                <div className="col-md-6">
                  <p className="text-muted">
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
                <p className="sub-title">We Deliver Solution with the Goal of Trusting Relationships</p>
            </div>
            <div className="testMainCont">
                <div className="testInn">
                    <div className="testiIconBox">
                        <img className="img-fluid" src="/images/icons/web-i.png"></img>
                    </div>
                    <div className="testiContBox">
                        <p className="mid-title">Web Design</p>
                        <p className="">Top Notch and Modern Design Websites</p>
                    </div>
                </div>
                <div className="testInn">
                    <div className="testiIconBox">
                        <img className="img-fluid" src="/images/icons/web-i.png"></img>
                    </div>
                    <div className="testiContBox">
                        <p className="mid-title">Web Design</p>
                        <p className="">Top Notch and Modern Design Websites</p>
                    </div>
                </div>
                <div className="testInn">
                    <div className="testiIconBox">
                        <img className="img-fluid" src="/images/icons/web-i.png"></img>
                    </div>
                    <div className="testiContBox">
                        <p className="mid-title">Web Design</p>
                        <p className="">Top Notch and Modern Design Websites</p>
                    </div>
                </div>
                <div className="testInn">
                    <div className="testiIconBox">
                        <img className="img-fluid" src="/images/icons/web-i.png"></img>
                    </div>
                    <div className="testiContBox">
                        <p className="mid-title">Web Design</p>
                        <p className="">Top Notch and Modern Design Websites</p>
                    </div>
                </div>
                <div className="testInn">
                    <div className="testiIconBox">
                        <img className="img-fluid" src="/images/icons/web-i.png"></img>
                    </div>
                    <div className="testiContBox">
                        <p className="mid-title">Web Design</p>
                        <p className="">Top Notch and Modern Design Websites</p>
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