import React from 'react';
import BestService from './servicepage/BestService';
import ServiceBanner from './servicepage/ServiceBanner';
import IotServSlider from './servicepage/IotServSlider';
import IotServBtns from './servicepage/IotServBtns';
import IotFooter from './services/IotFooter';

import Enquiry from './common/enquiry';
import IotLoadPage from './services/IotLoadPage';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import IotHeader from './services/IotHeader';


function ServicePage(){
    const [load, setLoad] = useState(false)
    const {id} = useParams()

    const valuePaths = ['1','2','3','4','5','6','7','8']

    console.log(id)
    return(
        <div>
            {
                valuePaths.includes(id)  && !load ?
                <>
                <IotHeader />
                 <ServiceBanner/>
                 <BestService load={load} setLoad={setLoad}/>
                 {/* <IotServSlider/> */}
                 <IotServBtns/>
                 <Enquiry/>
                  <IotFooter/>
                </> :
                !valuePaths.includes(id)  && !load ?
                <>
                    404 not Found
                </> :
                <IotLoadPage setLoad={setLoad} />
            }
            
        </div>
    )
}

export default ServicePage;