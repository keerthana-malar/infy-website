import React from 'react';
import Header from './common/header';
import Footer from './common/footer';
import BookforServices from './services/BookforServices';
import Existinguser from './services/Existinguser';

function Bookservicepage(){
    return(
        <div>
        <Header/>
        <BookforServices/>
        <Existinguser/>
        <Footer/>
        </div>
    )
}
export default Bookservicepage;