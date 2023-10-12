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
// import Testimonialing from './services/iotTestimonial';
// import BookforServices from './services/BookforServices';
// import Existinguser from './services/Existinguser';
import Aboutclient from "./about/aboutclient";

function Iotservices() {
  return (
    <div className="App">
      <Header/>
      <IotBanner />
      {/* <IotOverlay /> */}
      <IotAbout />
      <IotService />
      <IotActivities />
      <Aboutclient/>
      {/* <Testimonialing/> */}
      <IotBlogs />
      {/* <IotProjects /> */}
      <IotOurService />
      {/* <BookforServices/>
      <Existinguser/> */}
      <Footer/>

    
    </div>
  );
}

export default Iotservices;
