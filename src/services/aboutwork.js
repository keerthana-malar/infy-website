import { MdWorkspacePremium } from "react-icons/md";
import ProgressBar from "react-bootstrap/ProgressBar";

function aboutweb() {
  return (
    <>
      <div className="mainaboutweb container">
        <div className="abtimgbx">
          <img className="img-fluid" src="./images/seo/seobanner.png"></img>
        </div>
        <div className="abtconbx">
          <div className="featurebox">
            <div className="iconbx">
              <MdWorkspacePremium />
            </div>
            <div className="conbx">About Work Effort</div>
          </div>
          <div className="sercon">
            <p className="su-titlebx" data-aos="fade-left" data-aos-duration="1000">
              Deal with the professional<br></br>
            </p>
            <span className="stbx" data-aos="fade-left" data-aos-duration="3000">The Count of Our Success</span>
            <p className="head-conbx">
              We are constantly working to bring you the products you need, at
              competitive prices. If you need a technology product that we don't
              carry we work with over 25 vendors and can get you whatever you
              need.
            </p>
          </div>
          <div className="webprogress">
            <div>
              <p className="mini-title">Dynamic Websites</p>
              <ProgressBar variant="primary" now={99} label={`99%`} />
              <p className="mini-title">Search Engine Optimization (SEO)</p>
              <ProgressBar variant="primary" now={95} label={`95%`} />
              <p className="mini-title">Application Development</p>
              <ProgressBar variant="primary" now={90} label={`90%`} />
              <p className="mini-title">UI / UX Design</p>
              <ProgressBar variant="primary" now={82} label={`82%`} />
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default aboutweb;
