import React from 'react'
import Career from './Career'
import Footer from '../common/footer'
import Header from '../common/header';
import Enquiry from '../common/enquiry'
import CareerForm from './CareerForm';
import CarrerBaner from './CarrerBanner';

const CareerPage = () => {
  return (
   <>
        <Header/>
        <CarrerBaner />
        <Career />
        <CareerForm />
        <Footer />
   </>
  )
}

export default CareerPage