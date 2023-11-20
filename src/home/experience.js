import "../css/home.css";
import 'font-awesome/css/font-awesome.css';
import { Link } from 'react-router-dom';
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
                    <li className="network-solutions-item"> <i className="fa fas fa-check-circle ico-list-colo"></i><Link to="/services/networking">Complete Network Solutions</Link></li>
                    <li className="network-solutions-item"><i className="fa fas fa-check-circle ico-list-colo"></i><Link to="/services/laptop&desktop">Computer/Laptop Sales and Service</Link></li>
                    <li className="network-solutions-item"><i className="fa fas fa-check-circle ico-list-colo"></i><Link to="/services/cctv">CCTV / Biometrics</Link></li>
                    <li className="network-solutions-item"><i className="fa fas fa-check-circle ico-list-colo"></i><Link to="/services/laptop&desktop">Computer Accessories</Link></li>
                    <li className="network-solutions-item"><i className="fa fas fa-check-circle ico-list-colo"></i><Link to="/services/laptop&desktop">AMC for Computers</Link></li>
                    </ul>

                  </div>
                  <div class="col-md-6">
                  <ul class="list-home">
                    <li className="network-solutions-item"><i className="fa fas fa-check-circle ico-list-colo"></i><Link to="/ServiceSeo">Website/SEO Development</Link></li>
                    <li className="network-solutions-item"><i className="fa fas fa-check-circle ico-list-colo"></i><Link to="/ServiceSeo">Graphic Designs</Link></li>
                    <li className="network-solutions-item"><i className="fa fas fa-check-circle ico-list-colo"></i><Link to="/services/networking">Doorstep Computer Services</Link></li>
                    <li className="network-solutions-item"><i className="fa fas fa-check-circle ico-list-colo"></i><Link to="/services/networking">Network Components</Link></li>
                    <li className="network-solutions-item"><i className="fa fas fa-check-circle ico-list-colo"></i><Link to="/services/laptop&desktop">POS / Billing Software</Link></li>
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
