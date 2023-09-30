
import './css/App.css';
import IotAbout from './services/IotAbout';
import IotActivities from './services/IotActivities';
import IotBanner from './services/IotBanner';
import IotOurService from './services/IotOurService';
import IotOverlay from './services/IotOverlay';
import IotProjects from './services/IotProjects';
import IotService from './services/IotService';

function Iotservices() {
  return (
    <div className="App">
      <IotBanner />
      <IotOverlay />
      <IotAbout />
      <IotService />
      <IotProjects />
      <IotActivities />
      <IotOurService />


    
    </div>
  );
}

export default Iotservices;
