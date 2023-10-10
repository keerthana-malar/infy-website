import Header from './common/header';
import Aboutmain from './about/about';
import Aboutcounter from "./about/aboutcounter";
// import HomeAbout from './home/about';
import Enquiry from './common/enquiry';
import Aboutclient from "./about/aboutclient";
import Carouselabout from './about/carousel';
// import Aboutus from './about/aboutus';
import Footer from './common/footer';
import React, { useEffect } from 'react'; 
import './css/about.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function About(){
    useEffect(() => {
        AOS.init();
           AOS.refresh();
    }, []);
    return(
        <>
        <Header/>
        <Aboutmain/>
        {/* <HomeAbout/> */}
        <Aboutcounter/>
        <Aboutclient/>
        <Carouselabout/>
        {/* <Aboutus/> */}
        <Enquiry/>
        <Footer/>
        </>
    );
}

export default About;