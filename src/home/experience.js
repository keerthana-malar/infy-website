import "../css/home.css";

const ourExp = () => {
  return (
    <>
      <section className="ourExpSec">
        <div className="container">
          <div className="ourExp">
            <div className="row align-items-center">
              <div className="col-md-6">
                <img className="img-fluid" src="/images/IT-10YEARS.png"></img>
              </div>
              <div className="col-md-6">
                <p className="mini-title main-color">OUR EXPERIENCE</p>
                <p className="sub-title">Experts With Experience</p>
                <p className="text-muted">
                Our journey is a testament to our expertise. With years of experience and a 
                commitment to quality, we've honed our skills to deliver excellence. 
                At Infygain Technologies, we're not just experts; we're your partners in success
                </p>
                <div class="row align-items-center ourExpList">
                  <div class="col-md-6">
                    <li> Complete Network Solutions</li>
                    <li>Computer/Laptop Sales and Service</li>
                    <li>CCTV / Biometrics</li>
                    <li>Computer Accessories</li>
                    <li>AMC for Computers</li>


                  </div>
                  <div class="col-md-6">
                    <li> Website/SEO Development</li>
                    <li>Graphic Designs</li>
                    <li> Doorstep Computer Services</li>
                    <li>Network Components</li>
                    <li> POS / Billing Software</li>


                  </div>
                </div>
                <hr></hr>
                <div className="ourExpFoot">
                  <div className="ourExpFootIconBox">
                    <img
                      className="img-fluid"
                      src="/images/top-rated.svg"
                    ></img>
                  </div>
                  <div className="ourExpFootContBox">
                    <p className="mid-title">
                    Built on Expertise and Experience
                    </p>
                    <p className="text-muted">
                    expertise isn't just a word; it's our foundation. Our seasoned team of industry veterans brings a wealth of knowledge and a passion for excellence to every project.
                    </p>
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

export default ourExp;
