import Header from './common/header';
import Sliders from './home/slider';
import Service from './home/service';
import HomeAbout from './home/about';
import SubService from './home/subService';
import RecentProjects from './home/recentprojects';
import OurExp from './home/experience';
import Testimonial from './home/Testimonial';
import HomeBlog from './home/HomeBlog';
import Footer from './common/footer';

function Home(){

    // var slickSlide = document.querySelector(".slick-track");
    // slickSlide.classList.add("d-none");
    
    return(
        <>
        <Header/>
        <Sliders/>
        <Service/>
        <HomeAbout/>
        <SubService/>
        <RecentProjects/>
        <OurExp />
        <Testimonial />
        <HomeBlog />
        <Footer />
        </>
    );
}

export default Home;