import React from 'react';

import { useState } from 'react';
import { useParams } from 'react-router-dom';
import IotHeader from './IotHeader';
import ServiceBanner from '../servicepage/ServiceBanner';
import BestService from '../servicepage/BestService';
import IotServBtns from '../servicepage/IotServBtns';
import Enquiry from '../common/enquiry';
import IotFooter from './IotFooter';
import IotLoadPage from './IotLoadPage';
import Four from '../404';
import Category from '../servicepage/Category';



function NewServicePage(){
    const {id} = useParams()

    const valuePaths = ['networking','laptop&desktop','cctv','Projectors','Accessories','Laptop&DesktopRent',"TV","Printer&Scanner","InteractivePanel","UPS","WIFI","Pos","InterCom"];

  
    return(
        <div>
            {
                valuePaths.includes(id)   ?
                <>
                <IotHeader />
                 <ServiceBanner/>

                 <Category valuePaths={valuePaths}/>
                 
                 <Enquiry/>
                  <IotFooter/>
                </> :
                
                <Four />
            }
            
        </div>
    )
}

export default NewServicePage;