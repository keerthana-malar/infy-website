import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { Link } from "react-router-dom";

function websolution() {
  return (
    <>
      <div className="mainsolution">
        <div className="solbx1">
          <div className="featurebox">
            <div className="iconbx">
              <HiOutlineRocketLaunch />
            </div>
            <div className="conbx">Reason for Success</div>
          </div>
          <div className="sercon">
            <p
              className="su-titlebx"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              The best is not a title<br></br>
            </p>
            <span
              className="stbx"
              data-aos="fade-left"
              data-aos-duration="3000"
            >
              it's a reputation we've earned
            </span>
            <p className="head-conbx">
              Helping families live intelligently means we’re always working to
              bring our customers the latest technology. As one of the premier
              providers of smart home technology.
            </p>
            <Link to="/contact">
              <div className="btns cont-btn">Contact US</div>
            </Link>
          </div>
        </div>
        <div className="sl">
          <div className="solbox solbx2">
            <div className="solimgbx">
              <img
                className="img-fluid"
                alt="best seo services"
                src="./images/seo/expert.png"
                title="best seo services"
              ></img>
            </div>
            <div className="soltit">Expert team</div>
            <div className="soline"></div>
            <div className="solcon">
              We take pride in our expert team of professionals who excel in
              delivering top-notch services
            </div>
          </div>
          <div className="solbox solbx3">
            <div className="solimgbx">
              <img
                className="img-fluid"
                alt="best seo services"
                src="./images/seo/progress.png"
                title="best seo services"
              ></img>
            </div>
            <div className="soltit">Best Analysis</div>
            <div className="soline"></div>
            <div className="solcon">
              We possess the best analysis skills with a strong commitment to
              business ethics
            </div>
          </div>
          <div className="solbox solbx4">
            <div className="solimgbx">
              <img
                className="img-fluid"
                alt="best seo services"
                src="./images/seo/update.png"
                title="best seo services"
              ></img>
            </div>
            <div className="soltit">Auto Update</div>
            <div className="soline"></div>
            <div className="solcon">
              We stay updated with the new technology through automatic updates
              and new release.
            </div>
          </div>
          <div className="solbox solbx5">
            <div className="solimgbx">
              <img
                className="img-fluid"
                alt="best seo services"
                src="./images/seo/achieve.png"
                title="best seo services"
              ></img>
            </div>
            <div className="soltit">Target Fullfill</div>
            <div className="soline"></div>
            <div className="solcon">
              We ensure that every target set is accomplished with the perfect
              excellence.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default websolution;
