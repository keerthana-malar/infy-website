import Header from './common/header';
import Footer from './common/footer';
import Seo from './services/seo';
import Spotlight from './services/spotlight';
import Aboutweb from './services/aboutwork';

function ServiceSeo(){
    return(
        <>
        <Header/>
        <Seo/>
        <Spotlight/>
        <Aboutweb/>
        <Footer/>
        </>
    ); 
}

export default ServiceSeo;