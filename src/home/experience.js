import "../css/home.css";
import 'font-awesome/css/font-awesome.css';

const ourExp = () => {
  return (
    <>
      <section className="ourExpSec">
        <div className="container">
          <div className="ourExp">
            <div className="row align-items-center">
             
              <div className="col-lg-6">
                <p className="mini-title main-color">OUR EXPERIENCE</p>
                <p className="home-about-ttle">Experts With Experience</p>
                <p className="text-muted">
                Our journey is a testament to our expertise. With years of experience and a 
                commitment to quality, we've honed our skills to deliver excellence. 
                At Infygain Technologies, we're not just experts; we're your partners in success
                </p>
                <div class="row align-items-center ourExpList">
                  <div class="col-md-6">
                  <ul class="list-home">
                    <li> <i className="fa fas fa-check-circle ico-list-colo"></i>Complete Network Solutions</li>
                    <li><i className="fa fas fa-check-circle ico-list-colo"></i>Computer/Laptop Sales and Service</li>
                    <li><i className="fa fas fa-check-circle ico-list-colo"></i>CCTV / Biometrics</li>
                    <li><i className="fa fas fa-check-circle ico-list-colo"></i>Computer Accessories</li>
                    <li><i className="fa fas fa-check-circle ico-list-colo"></i>AMC for Computers</li>
                    </ul>

                  </div>
                  <div class="col-md-6">
                  <ul class="list-home">
                    <li><i className="fa fas fa-check-circle ico-list-colo"></i>Website/SEO Development</li>
                    <li><i className="fa fas fa-check-circle ico-list-colo"></i>Graphic Designs</li>
                    <li><i className="fa fas fa-check-circle ico-list-colo"></i>Doorstep Computer Services</li>
                    <li><i className="fa fas fa-check-circle ico-list-colo"></i>Network Components</li>
                    <li><i className="fa fas fa-check-circle ico-list-colo"></i>POS / Billing Software</li>
                    </ul>

                  </div>
                </div>
                <hr></hr>
                <div className="ourExpFoot">
                  <div className="ourExpFootIconBox">
                    <img
                      className="img-fluid"
                      src="/images/top-rated (2).svg"
                    ></img>
                  </div>
                  <div className="ourExpFootContBox">
                    <p className="mid-title exp-home-tit">
                    Built on Expertise and Experience
                    </p>
                    <p className="text-muted">
                    expertise isn't just a word; it's our foundation. Our seasoned team of industry veterans brings a wealth of knowledge and a passion for excellence to every project.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <img className="img-fluid" src="/images/Exp .png"></img>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ourExp;
