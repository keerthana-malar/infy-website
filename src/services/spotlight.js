import { FiSettings } from "react-icons/fi";
import { HiArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

function webservice() {
  return (
    <>
      <div className="main-services">
        <div className="featurebox">
          <div className="iconbx">
            <FiSettings />
          </div>
          <div className="conbx">Featured Services</div>
        </div>
        <div className="sercon">
          <p className="su-title" data-aos="fade-left" data-aos-duration="1000">
            Major Services That Will<br></br>
          </p>
          <span className="stt"   data-aos="fade-left" data-aos-duration="3000">Grow Your Business</span>
          <p className="head-conn">
            These services are essential for a robust online presence and
            effective digital engagement.
          </p>
        </div>
        <div className="mserv">
          <div className="sb sbox1">
            <div className="simgbox" data-aos="flip-left" data-aos-duration="1000">
              <img className="fluid" src="./images/seo/website.png"></img>
            </div>
            <div className="st">Websites</div>
            <div className="scon text-muted">
            We sketch the essential requirement listed out by clients and satisfy them.
We provide custom website design and development solutions that are not 
only visually striking but also optimized for performance and user experience.
.
            </div>
            <div className="smore smb1">
            <Link to="/contact">
                <span>Contact us &nbsp;
                  <HiArrowLongRight className="arr" />
                </span>
            </Link>
            </div>
          </div>
          <div className="sb sbox2">
            <div className="simgbox" data-aos="flip-left" data-aos-duration="1000">
              <img className="fluid" src="./images/seo/seo.png"></img>
            </div>
            <div className="st">SEO</div>
            <div className="scon text-muted">
            Our main motive is to eventually diminish the buffering in our websites.
            SEO is an investment just like a tree that needs effort,
             patience and time to grow before you can see the result, 
             ultimately leading.
            </div>
            <div className="smore smb2">
            <Link to="/contact">
                <span>Contact us &nbsp;
                  <HiArrowLongRight />
                </span>
            </Link>
            </div>
          </div>
          <div className="sb sbox3">
            <div className="simgbox" data-aos="flip-left" data-aos-duration="1000">
              <img className="fluid" src="./images/seo/app.png"></img>
            </div>
            <div className="st">Applications</div>
            <div className="scon text-muted">
            Web application service is all about bringing your ideas to life with cutting-edge technology.
             We develop custom web applications that cater to your specific business needs and goals.
            </div>
            <div className="smore smb3">
            <Link to="/contact">
                <span>Contact us &nbsp;
                  <HiArrowLongRight />
                </span>
            </Link>
            </div>
          </div>
          <div className="sb sbox4">
            <div className="simgbox" data-aos="flip-left" data-aos-duration="1000">
              <img className="fluid" src="./images/seo/graphic.png"></img>
            </div>
            <div className="st">Designing</div>
            <div className="scon text-muted">
            We provide a customized crafted design that will 
            help your customers to fascinate. And that helps to
             align with your brand identity and engage your audience.
              We offer a wide range of design solutions.
            </div>
            <div className="smore smb4">
            <Link to="/contact">
                <span>Contact us &nbsp;
                  <HiArrowLongRight />
                </span>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default webservice;
