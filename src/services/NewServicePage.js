import React from 'react';
import { useParams } from 'react-router-dom';
import IotHeader from './IotHeader';
import ServiceBanner from '../servicepage/ServiceBanner';
import Enquiry from '../common/enquiry';
import IotFooter from './IotFooter';
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
                <div className='webservice'>
                <IotHeader />
                 <ServiceBanner/>

                 <Category valuePaths={valuePaths}/>
                 
                 <Enquiry/>
                  <IotFooter/>
                  </div>
                </> :
                
                <Four />
            }
            
        </div>
    )
}

export default NewServicePage;