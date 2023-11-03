import React from 'react'
import { saveAs } from 'file-saver';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import '../css/IotServSlider.css';
import { FaCartPlus, FaLocationDot } from 'react-icons/fa6';
import { BiSolidDownload  } from 'react-icons/bi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { AiFillMail } from 'react-icons/ai';;


const IotServSlider = () => {

  return (
    <div className='container servicepage-head'>
    <div className='service-slider'>
  
       <div className='servsl-head'>
            <img src='/images/laptop.jpg' />
            <div className='servsl-overlay'>
              {/* <p>Complete Network Solutions</p> */}
              <button className='btn butks'>
            <a href="https://infygain.com/onlinestore/"><FaCartPlus/> buy now </a></button>
            </div>
       </div>
    </div> 

    <div className='serv-details text-muted'>
       <ul>
        <li><p>Explore a wide range of laptops for various needs and budgets, including business and gaming laptops.</p></li>
        <li><p>We prioritize your privacy, employing strict protocols to handle your data securely during repairs.</p></li>
        <li><p>Trust our certified technicians for quick and transparent laptop repairs, ensuring your device functions flawlessly.</p></li>
        <li><p>Experience prompt service with our fast turnaround times, minimizing downtime and inconvenience.</p></li>
        <li><p>Count on our knowledgeable and friendly staff for excellent customer support, guiding you through laptop purchases and repairs.</p></li>
       </ul>
    </div>
</div>

  )
}

export default IotServSlider