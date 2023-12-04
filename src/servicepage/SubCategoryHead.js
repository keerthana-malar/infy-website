import React from 'react'
import IotHeader from '../services/IotHeader';
import ServiceBanner from './ServiceBanner';
import Enquiry from '../common/enquiry';
import IotFooter from '../services/IotFooter';
import { useParams } from 'react-router-dom';
import Four from '../404';
import SubCategories from './SubCategories';
import SubCateContent from './SubCateContent';

const SubCategoryHead = () => {
    const {id} = useParams()

    const valuePaths = ['laptop','desktop'];
  return (
    <>
     {
                valuePaths.includes(id)   ?
                <>
                <IotHeader />
                 <ServiceBanner/>

                <SubCateContent />
                <SubCategories />

                 <Enquiry/>
                  <IotFooter/>
                </> :
                
                <Four />
            }
    </>
  )
}

export default SubCategoryHead