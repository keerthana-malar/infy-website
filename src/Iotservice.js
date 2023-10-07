import Header from './common/header';
import IotAbout from './services/IotAbout';
import IotActivities from './services/IotActivities';
import IotBanner from './services/IotBanner';
import IotOurService from './services/IotOurService';
import IotOverlay from './services/IotOverlay';
// import IotProjects from './services/IotProjects';
import IotService from './services/IotService';
import Footer from './common/footer';
import IotBlogs from './services/IotBlogs';

function Iotservices() {
  return (
    <div className="App">
      <Header/>
      <IotBanner />
      {/* <IotOverlay /> */}
      <IotAbout />
      <IotService />
      <IotActivities />
      <IotBlogs />
      {/* <IotProjects /> */}
      <IotOurService />
      
      <Footer/>

    
    </div>
  );
}

export default Iotservices;
