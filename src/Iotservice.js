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
import { Link } from 'react-router-dom';
import { useRef } from 'react';


function Iotservices() {
  const componentRef = useRef(null);

  const scrollToComponent = () => {
    componentRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="App">
      {/* <Header/> */}
      <IotHeader />
      <IotBanner />
      <IotAbout />
      <IotService scrollToComponent={scrollToComponent}/>
      <IotActivities />
      <Aboutclient/>
      {/* <Testimonialing/> */}
      <IotBlogs />
      <IotOurService componentRef={componentRef}/>
      {/* <BookforServices/>
      <Existinguser/> */}

      <Enquiry/>
      <IotFooter />
      {/* <Footer/> */}
      

      
    </div>
  );
}

export default Iotservices;
