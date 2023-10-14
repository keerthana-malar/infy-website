import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import '../css/IotServSlider.css';
import { FaLocationDot } from 'react-icons/fa6';
import { BiSolidDownload  } from 'react-icons/bi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { AiFillMail } from 'react-icons/ai';
import { LuStickyNote } from 'react-icons/lu';

const IotServSlider = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: false,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
  return (
    <div className='container servicepage-head'>
        <div className='service-slider'>
        <Slider className='serv-sliders'  {...settings}>
           <div>
                <img src='https://demo.casethemes.net/consultio-digital-marketing/wp-content/uploads/2019/11/theme-05-475x600.jpg' />
           </div>
           <div>
                <img src='https://demo.casethemes.net/consultio-digital-marketing/wp-content/uploads/2019/11/theme-05-475x600.jpg' />
           </div>
           <div>
                <img src='https://demo.casethemes.net/consultio-digital-marketing/wp-content/uploads/2019/11/theme-05-475x600.jpg' />
           </div>
           <div>
                <img src='https://demo.casethemes.net/consultio-digital-marketing/wp-content/uploads/2019/11/theme-05-475x600.jpg' />
           </div>
        </Slider>
        </div>

        <div className='serv-details'>

            <div className='serv-details1'>
                <h3>Contact</h3>
                <div className='serv-details2'>
                    <FaLocationDot style={{fontSize:"40px"}} className='servpage-icon'/>
                    <span>Hari complex opp.prozone mall, Sathy Rd, Saravanampatti, Coimbatore, Tamil Nadu 641035</span>
                </div>
                <div className='serv-details2'>
                    <BsFillTelephoneFill className='servpage-icon'/>
                    <div>
                      <span>+91 99521 41444</span> <br/>
                      <span>+91 9087724444</span>
                    </div>
                </div>
                <div className='serv-details2'>
                    <AiFillMail className='servpage-icon'/>
                    <span>Infygain@gmail.com</span>
                </div>

            </div>
            <div className='serv-details3'>
                <h3>Brochures</h3>
                <div className='serv-details4'>
                    <button><span className='serv-btn-icon'><BiSolidDownload /> </span>&nbsp;<span className='serv-btn-cont'>Download Brochure</span> </button> <br/>
                    <button><span className='serv-btn-icon'><LuStickyNote /> </span> <span className='serv-btn-cont'>Characteristics</span></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default IotServSlider;