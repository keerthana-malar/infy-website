import React from 'react'
import IotHeader from '../services/IotHeader';
import ServiceBanner from './ServiceBanner';
import Enquiry from '../common/enquiry';
import IotFooter from '../services/IotFooter';
import Four from '../404';
import { useParams } from 'react-router-dom';
import ProductDetail from './ProductDetail';

const ServiceDetails = () => {
    const {id,cat} = useParams()

    const catPaths = ["Laptop","Desktop","Networking","Cctv"]

    const valuePaths = ['GamingLaptop','Consumerlaptops',"WorkStation","BrandedDesktop","AssembledDesktop","WorkStationDesktop","GamingDesktop"
                        ,"HUB","Switch","Router","Firewall","EndPointSecurity","Fiber"
                      ,"Analog","IP","DVR","NVR","360","PTZ"];
  return (
    <>
    {
      catPaths.includes(cat)   ?
      <>
       {
                                valuePaths.includes(id)   ?
                                <>
                                <IotHeader />
                                <ServiceBanner/>

                                <ProductDetail />

                                <Enquiry/>
                                <IotFooter/>
                                </> :
                                
                                <Four />
                            }
      </>:
      <Four />
    }
    </>
  )
}

export default ServiceDetails