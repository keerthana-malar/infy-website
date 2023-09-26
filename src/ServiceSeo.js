import Header from './common/header';
import Footer from './common/footer';
import Seo from './services/seo';
import Spotlight from './services/spotlight';

function ServiceSeo(){
    return(
        <>
        <Header/>
        <Seo/>
        <Spotlight/>
        <Footer/>
        </>
    ); 
}

export default ServiceSeo;