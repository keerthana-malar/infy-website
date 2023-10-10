import Header from './common/header';
import IotAbout from './services/IotAbout';
import IotActivities from './services/IotActivities';
import IotBanner from './services/IotBanner';
import IotOurService from './services/IotOurService';
import IotService from './services/IotService';
import Footer from './common/footer';
import IotBlogs from './services/IotBlogs';
import Testimonial from './services/iotTestimonial';
import Enquiry from "./common/enquiry";


function Iotservices() {
  return (
    <div className="App">
      <Header/>
      <IotBanner />
      <IotAbout />
      <IotService />
      <IotActivities />
      <Testimonial/>
      <IotBlogs />
      <IotOurService />
      <Enquiry/>
      <Footer/>

    
    </div>
  );
}

export default Iotservices;
