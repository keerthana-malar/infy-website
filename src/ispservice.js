import Header from './common/header';
import Banner from './ispservice/banner';
import Blogsection from './ispservice/blogsection';
import Finalbanner from './ispservice/finalbanner';
import Firstsection from './ispservice/firstsection';
import Secondbanner from './ispservice/secondbanner';
import Servbelowcont from './ispservice/service-below-con';
import Services from './ispservice/services';
import Footer from './common/footer';
import Enquiry from "./common/enquiry";
import { Helmet } from 'react-helmet';
import './css/ispservice.css';

import Thirdbanner from './ispservice/thirdbanner';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// Get the current URL using window.location.href
const currentUrl = window.location.href;

let metaContent = {
  des: "We provide the best computer and laptop service in coimbatore and also we best in networking, cctv camera,b server, billing software, graphic design, amc.",
  key: "computer,laptop,cctv,printer,AMC,networking,web development,graphics",
  ogt: "Best IT Solutions Provider in Coimbatore",
  og: "We provide the best computer and laptop service in coimbatore and also we best in networking, cctv camera,b server, billing software, graphic design, amc.",

}
function Ispservice() {
  useEffect(() => {

    AOS.init();
    AOS.refresh();

  }, []);
  return (
    <>
      
      <Header />
      <div className='ispmainservice'>
        <Banner />
        <Firstsection />
        <Secondbanner />
        <Services />
        <Servbelowcont />
        <Thirdbanner />
        <Blogsection />
        <Finalbanner />
      </div>
      <Enquiry />
      <Footer />
    </>
  );
}

export default Ispservice;