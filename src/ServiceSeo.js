import Header from './common/header';
import Footer from './common/footer';
import Seo from './services/seo';
import Spotlight from './services/spotlight';
import Aboutweb from './services/aboutwork';
import Solution from './services/solution';
import Subscribe from './services/subscribe';
import Webblog from './services/webblog';
import React, { useEffect } from 'react'; 
import AOS from 'aos';
import 'aos/dist/aos.css';


function ServiceSeo(){
    useEffect(() => {
   
        AOS.init();
           AOS.refresh();
        
    }, []);
    return(
        <>
        <Header/>
        <Seo/>
        <Spotlight/>
        <Aboutweb/>
        <Solution/>
        <Subscribe/>
        <Webblog/>
        <Footer/>
        </>
    ); 
}

export default ServiceSeo;