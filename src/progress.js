import ProgressBar from 'react-bootstrap/ProgressBar';
import "./css/about.css";

function progress() {
  return (
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
  );
}

export default progress;