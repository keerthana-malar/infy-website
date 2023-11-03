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


const IotServ = () => {

  return (
    <div className='container servicepage-head' >
        <div className='service-slider'  data-aos="fade-right"  data-aos-duration="1000">
      
           <div className='servsl-head'>
                {/* <img src='https://img.freepik.com/free-vector/computer-repair-support-service-isometric-illustration_1284-57663.jpg?w=740&t=st=1698987668~exp=1698988268~hmac=a05e8453345cbe4ab2154b3f4d4509d0ca8a775b35f00269a08a1b1a0ad7ef26' /> */}
                <img src='https://img.freepik.com/free-vector/computer-tablets-audio-electronics-devices-household-business-appliances-repair-service-center-isometric-icons-set_1284-32400.jpg?w=740&t=st=1698989827~exp=1698990427~hmac=01a1b1b60c4a4c263db4266964f10a5ad782c70f86217f4451a7dfbab235fe3f' />
                {/* <div className='servsl-overlay'>
                
                  <button className='btn butks'>
                <a href="https://infygain.com/onlinestore/"><FaCartPlus/> buy now </a></button>

                </div> */}
           </div>
           
        </div> 

        <div className='serv-details '  data-aos="fade-left"  data-aos-duration="1000">
        <div className='nmk1'>
                <div className='libra'>
                </div>
               <h2>Discover Our Services</h2>
               </div>
           <ul className='text-muted'>
            <li><p>Explore a wide range of laptops for various needs and budgets, including business and gaming laptops.</p></li>
            <li><p>We prioritize your privacy, employing strict protocols to handle your data securely during repairs.</p></li>
            <li><p>Trust our certified technicians for quick and transparent laptop repairs, ensuring your device functions flawlessly.</p></li>
            <li><p>Experience prompt service with our fast turnaround times, minimizing downtime and inconvenience.</p></li>
            <li><p>Count on our knowledgeable and friendly staff for excellent customer support, guiding you through laptop purchases and repairs.</p></li>
            <li><p>Count on our knowledgeable and friendly staff for excellent customer support, guiding you through laptop purchases and repairs.</p></li>

{/*             
            <li>Hardware problem diagnosis, repair and rectification</li>
            <li>Fabrication of physically damaged units</li>
            <li>Thermal pad replacement</li>
            <li>Internal dust cleaning</li>
            <li>Power supply repair</li>
            <li>Monitor repair</li>
           <li> Operating system repair</li>
           <li> Formatting, installing and configuring drivers and softwares</li>
            <li>Spare replacements</li>
            <li>Upgradation of memory, hard disk drive and processor, system boards</li>
            <li>Warranty extension care packs</li>
           <li> Complete health check-up</li> */}
           </ul>
        </div>
    </div>
  )
}

export default IotServ