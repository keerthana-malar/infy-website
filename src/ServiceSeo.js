import Header from './common/header';
import Footer from './common/footer';
import Seo from './services/seo';
import Spotlight from './services/spotlight';
import Aboutweb from './services/aboutwork';
import Solution from './services/solution';
import Subscribe from './services/subscribe';
import Webblog from './services/webblog';
import Flow from './services/flow';
import Portfolio from './services/portfolio';
import React, { useEffect } from 'react'; 
import AOS from 'aos';
import 'aos/dist/aos.css';
import './css/seo.css';
import './css/common.css';


function ServiceSeo(){
    useEffect(() => {
        AOS.init();
           AOS.refresh();
    }, []);
    return(
        <>
        <Header/>
        <div className='webservice'>
        <Seo/>
        <Spotlight/>
        <Aboutweb/>
        <Subscribe/>
        <Portfolio/>
        <Solution/>
        <Webblog/>
        <Flow/>
        
        </div>
        <Footer/>
        </>
    ); 
}

export default ServiceSeo;