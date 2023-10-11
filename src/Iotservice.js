import Header from './common/header';
import IotAbout from './services/IotAbout';
import IotActivities from './services/IotActivities';
import IotBanner from './services/IotBanner';
import IotOurService from './services/IotOurService';
import IotService from './services/IotService';
import Footer from './common/footer';
import IotBlogs from './services/IotBlogs';
// import Testimonialing from './services/iotTestimonial';
// import BookforServices from './services/BookforServices';
// import Existinguser from './services/Existinguser';
import Aboutclient from "./about/aboutclient";
import Testimonial from './services/iotTestimonial';
import IotFooter from './services/IotFooter';
import IotHeader from './services/IotHeader';
import Enquiry from "./common/enquiry";


function Iotservices() {
  return (
    <div className="App">
      {/* <Header/> */}
      <IotHeader />
      <IotBanner />
      <IotAbout />
      <IotService />
      <IotActivities />
      <Aboutclient/>
      {/* <Testimonialing/> */}
      <IotBlogs />
      <IotOurService /
      {/* <BookforServices/>
      <Existinguser/> */}

      
      <IotFooter />
      {/* <Footer/> */}
      <Enquiry/>

      
    </div>
  );
}

export default Iotservices;
