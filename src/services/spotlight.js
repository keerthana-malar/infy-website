import "../css/seo.css";
import "../css/common.css";
import { FiSettings } from "react-icons/fi";
import { HiArrowLongRight } from "react-icons/hi2";

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
          <p className="su-title">
            Major Services That Will<br></br>
          </p>
          <span className="stt">Grow Your Business</span>
          <p className="head-conn">
            These services are essential for a robust online presence and
            effective digital engagement.
          </p>
        </div>
        <div className="mserv">
          <div className="sb sbox1">
            <div className="simgbox">
              <img className="fluid" src="./images/seo/website.png"></img>
            </div>
            <div className="st">Websites</div>
            <div className="scon text-muted">
              We provide custom website design and development solutions that
              are not only visually striking but also optimized for performance
              and user experience and elevate your brand with us.
            </div>
            <div className="smore smb1">
              <a href="">
                <span>
                  Contact us &nbsp;
                  <HiArrowLongRight />
                </span>
              </a>
            </div>
          </div>
          <div className="sb sbox2">
            <div className="simgbox">
              <img className="fluid" src="./images/seo/seo.png"></img>
            </div>
            <div className="st">SEO</div>
            <div className="scon text-muted">
              Our goal is to drive organic traffic, boost your online authority,
              and help you reach a wider audience, ultimately leading to
              increased brand recognition and higher conversion rates.
            </div>
            <div className="smore smb2">
              <a href="">
                <span>
                  Contact us &nbsp;
                  <HiArrowLongRight />
                </span>
              </a>
            </div>
          </div>
          <div className="sb sbox3">
            <div className="simgbox">
              <img className="fluid" src="./images/seo/app.png"></img>
            </div>
            <div className="st">Applications</div>
            <div className="scon text-muted">
              Web application service is all about bringing your ideas to life
              with cutting-edge technology. We develop custom web applications
              that cater to your specific business needs and goals.
            </div>
            <div className="smore smb3">
              <a href="">
                <span>
                  Contact us &nbsp;
                  <HiArrowLongRight />
                </span>
              </a>
            </div>
          </div>
          <div className="sb sbox4">
            <div className="simgbox">
              <img className="fluid" src="./images/seo/graphic.png"></img>
            </div>
            <div className="st">Designing</div>
            <div className="scon text-muted">
              We craft captivating visuals, from logos to marketing materials,
              that align with your brand identity and engage your audience. We
              offer a wide range of design solutions to elevate branding.
            </div>
            <div className="smore smb4">
              <a href="">
                <span>
                  Contact us &nbsp;
                  <HiArrowLongRight />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default webservice;
