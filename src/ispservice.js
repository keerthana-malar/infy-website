import Header from './common/header';
import Banner from './ispservice/banner';
import Blogsection from './ispservice/blogsection';
import Finalbanner from './ispservice/finalbanner';
import Firstsection from './ispservice/firstsection';
import Secondbanner from './ispservice/secondbanner';
import Servbelowcont from './ispservice/service-below-con';
import Services from './ispservice/services';
import Footer from './common/footer';

import Thirdbanner from './ispservice/thirdbanner';
import React, { useEffect } from 'react'; 
import AOS from 'aos';
import 'aos/dist/aos.css';

function Ispservice(){
     useEffect(() => {
   
        AOS.init();
           AOS.refresh();
        
    }, []); 
    return(
        <>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <Header/>
        <Banner/>
        <Firstsection/>
        <Secondbanner/>
        <Services/>
        <Servbelowcont/>
        <Thirdbanner/>
        <Blogsection/>
        <Finalbanner/>
        <Footer />
        </>
    );
}

export default Ispservice;