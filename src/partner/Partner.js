import React from 'react';
import PartnerBanner from "../partner/PartnerBanner";
import Header from '../common/header';
import Footer from '../common/footer';
import '../css/Partner.css';
import PartnerBlog from "../partner/PartnerBlog";

function Partner(){
    return(
        <div className='responsive'>
            <Header/>
            <PartnerBanner/>
            <PartnerBlog/>
            <Footer/>
        </div>
    )
}

export default Partner;