import "../css/seo.css";
import "../css/common.css";
import { MdWorkspacePremium } from "react-icons/md";
import ProgressBar from 'react-bootstrap/ProgressBar';

function aboutweb() {
  return (
    <>
      <div className="mainaboutweb">
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
            <p className="su-titlebx">
              Get More Leads, Customers,<br></br>
            </p>
            <span className="stbx">and More Sales with us</span>
            <p className="head-conbx">
              Helping families live intelligently means we’re always working to<br></br>
              bring our customers the latest technology. As one of the<br></br> premier
              providers of smart home technology.
            </p>
          </div>
          <div className="webprogress">
            <div>
                <p className="mini-title">Website / App Development</p>  
                <ProgressBar variant="primary" now={99} label={`99%`}/>
                <p className="mini-title">UI / UX Design</p>
                <ProgressBar variant="primary" now={82} label={`82%`}/>
                <p className="mini-title">IPS / IT Support</p>
                <ProgressBar variant="primary" now={95} label={`95%`}/>
                <p className="mini-title">Web / App Development</p>
                <ProgressBar variant="primary" now={80} label={`80%`}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default aboutweb;
