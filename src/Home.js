import Sliders from './home/slider';
import Service from './home/service';
import HomeAbout from './home/about';
import SubService from './home/subService';
import RecentProjects from './home/recentprojects';
import OurExp from './home/experience';
import Testimonial from './home/Testimonial';
import HomeBlog from './home/HomeBlog';

function Home(){
    return(
        <>
        <Sliders/>
        <Service/>
        <HomeAbout/>
        <SubService/>
        <RecentProjects/>
        <OurExp />
        <Testimonial />
        <HomeBlog />
        </>
    );
}

export default Home;