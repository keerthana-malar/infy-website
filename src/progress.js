import ProgressBar from 'react-bootstrap/ProgressBar';
import "./css/about.css";

function progress() {
  return (
    <div>
      <p className="mini-title">Website / App Development</p>  
      <ProgressBar variant="primary" now={99} label={`99%`}/>
      <p className="mini-title">IT Support</p>
      <ProgressBar variant="primary" now={92} label={`92%`}/>
      <p className="mini-title">IPS Service</p>
      <ProgressBar variant="primary" now={95} label={`95%`}/>
      <p className="mini-title">Graphic Design</p>
      <ProgressBar variant="primary" now={90} label={`90%`}/>
    </div>
  );
}

export default progress;