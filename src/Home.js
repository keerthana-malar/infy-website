import Sliders from './home/slider';
import Service from './home/service';
import HomeAbout from './home/about';
import SubService from './home/subService';
import RecentProjects from './home/recentprojects';

function Home(){
    return(
        <>
        <Sliders/>
        <Service/>
        <HomeAbout/>
        <SubService/>
        <RecentProjects/>
        </>
    );
}

export default Home;