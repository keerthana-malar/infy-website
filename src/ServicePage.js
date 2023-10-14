import React from 'react';
import BestService from './servicepage/BestService';
import ServiceBanner from './servicepage/ServiceBanner';
import IotServSlider from './servicepage/IotServSlider';
import IotServBtns from './servicepage/IotServBtns';
import IotFooter from './services/IotFooter';
import IotHeader from './services/IotHeader';
import Enquiry from './common/enquiry';

function ServicePage(){
    return(
        <div>
            <IotHeader/>
             <ServiceBanner/>
             <BestService/>
             <IotServSlider/>
             <IotServBtns/>
             <Enquiry/>
            <IotFooter/>
        </div>
    )
}

export default ServicePage;