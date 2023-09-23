import Aboutmain from './about/about';
import Aboutcounter from "./about/aboutcounter";
import HomeAbout from './home/about';
import Aboutclient from "./about/aboutclient";
import Carouselabout from './about/carousel';
import Aboutus from './about/aboutus';
import Footer from './common/footer';
import './css/about.css';

function About(){
    return(
        <>
        <Aboutmain/>
        <HomeAbout/>
        <Aboutcounter/>
        <Aboutclient/>
        <Carouselabout/>
        <Aboutus/>
        <Footer/>
        </>
    );
}

export default About;