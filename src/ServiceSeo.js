import Header from './common/header';
// import Footer from './common/footer';
import Seo from './services/seo';
import Spotlight from './services/spotlight';
import Aboutweb from './services/aboutwork';
// import Solution from './services/solution';
// import Subscribe from './services/subscribe';
// import Webblog from './services/webblog';


function ServiceSeo(){
    return(
        <>
        <Header/>
        <Seo/>
        <Spotlight/>
        <Aboutweb/>
        {/* <Solution/>
        <Subscribe/> */}
        {/* <Webblog/> */}
        {/* <Footer/> */}
        </>
    ); 
}

export default ServiceSeo;