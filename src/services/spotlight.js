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
          <div className="conbx">Featured Service</div>
        </div>
        <div className="sercon">
          <p className="su-title">
            Additional Services that will<br></br>
          </p>
          <span className="stt">Grow Your Business</span>
          <p className="head-conn">
            As a SEO Advisor or web crawler expert, I help organizations
            <br></br> adjust to the expanding significance of internet
            promoting.
          </p>
        </div>
        <div className="mserv">
          <div className="sb sbox1">
            <div className="simgbox">
              <img className="fluid" src="./images/seo/website.png"></img>
            </div>
            <div className="st">Websites</div>
            <div className="scon text-muted">
                A website is a collection of web pages and related digital
                content that is accessible via the internet.
            </div>
            <div className="smore smb1">
                <a href=""><span>Contact us &nbsp;<HiArrowLongRight/></span></a>
            </div>
          </div>
          <div className="sb sbox2">
            <div className="simgbox">
              <img className="fluid" src="./images/seo/app.png"></img>
            </div>
            <div className="st">SEO</div>
            <div className="scon text-muted">
                A website is a collection of web pages and related digital
                content that is accessible via the internet.
            </div>
            <div className="smore smb2">
                <a href=""><span>Contact us  &nbsp;<HiArrowLongRight/></span></a>
            </div>
          </div>
          <div className="sb sbox3">
            <div className="simgbox">
              <img className="fluid" src="./images/seo/seo.png"></img>
            </div>
            <div className="st">Applications</div>
            <div className="scon text-muted">
                A website is a collection of web pages and related digital
                content that is accessible via the internet.
            </div>
            <div className="smore smb3">
                <a href=""><span>Contact us  &nbsp;<HiArrowLongRight/></span></a>
            </div>
          </div>
          <div className="sb sbox4"> 
            <div className="simgbox">
              <img className="fluid" src="./images/seo/graphic.png"></img>
            </div>
            <div className="st">Designing</div>
            <div className="scon text-muted">
                A website is a collection of web pages and related digital
                content that is accessible via the internet.
            </div>
            <div className="smore smb4">
                <a href=""><span>Contact us  &nbsp;<HiArrowLongRight/></span></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default webservice;
