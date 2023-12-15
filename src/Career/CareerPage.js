import React from 'react';
import Career from './Career';
import Footer from '../common/footer';
import Header from '../common/header';
import CareerForm from './CareerForm';
import CarrerBaner from './CarrerBanner';
import { Helmet } from 'react-helmet';

// Get the current URL using window.location.href
const currentUrl = window.location.href;

let metaContent = {
  des: "We provide the best computer and laptop service in coimbatore and also we best in networking, cctv camera,b server, billing software, graphic design, amc.",
  key: "computer,laptop,cctv,printer,AMC,networking,web development,graphics",
  ogt: "Best IT Solutions Provider in Coimbatore",
  og: "We provide the best computer and laptop service in coimbatore and also we best in networking, cctv camera,b server, billing software, graphic design, amc.",

}
const CareerPage = () => {
  return (
    <>
     
      <Header />
      <CarrerBaner />
      <Career />
      <CareerForm />
      <Footer />
    </>
  )
}

export default CareerPage