import React from 'react'
import { saveAs } from 'file-saver';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import '../css/IotServSlider.css';
import { FaLocationDot } from 'react-icons/fa6';
import { BiSolidDownload  } from 'react-icons/bi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { AiFillMail } from 'react-icons/ai';import { Link } from 'react-router-dom';
;


const IotServSlider = () => {

  // pdf download fn
  const downloadPdf = () => {
    // Path to your PDF file
    const pdfFilePath = '/Brochure/Infy Brochure Final_compressed.pdf';

    // Fetch the PDF file as a blob
    fetch(pdfFilePath)
      .then(response => response.blob())
      .then(blob => {
        saveAs(blob, 'Infygain-Brochure.pdf'); 
      })
      .catch(error => {
        console.error('Error downloading PDF:', error);
      });
  };
 
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
                slidesToShow: 1,
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
           <div className='servsl-head'>
                <Link to="https://infygain.com/onlinestore/products/ca/178" target="_blank"><img src='/images/iot-network.webp' /></Link>
                <div className=' servsl-overlay'>
                  <p>Complete Network Solutions</p>
                </div>
           </div>
           <div className='servsl-head'>
           <Link to="https://infygain.com/onlinestore/products/ca/178" target="_blank"><img src='/images/iot-laptop.webp'/></Link>
                <div className=' servsl-overlay'>
                  <p>Laptop / Desktop Sales & Services</p>
                </div>
           </div>
           <div className='servsl-head'>
           <Link to="https://infygain.com/onlinestore/products/ca/178" target="_blank"> <img src='/images/iot-camera.png'/></Link>
                <div className=' servsl-overlay'>
                  <p>CCTV / Bio - Metrics</p>
                </div>
           </div>
           <div className='servsl-head'>
           <Link to="https://infygain.com/onlinestore/products/ca/178" target="_blank"><img src='/images/iot-projectors.png'/></Link>
                <div className=' servsl-overlay'>
                  <p>Projectors / Smart Class Smart Tv</p>
                </div>
           </div>
           <div className='servsl-head'>
           <Link to="https://infygain.com/onlinestore/products/ca/178" target="_blank"><img src='/images/PC.webp'/></Link>
              <div className=' servsl-overlay'>
                  <p>Computer Accessories</p>
                </div>
           </div>
           <div className='servsl-head'>
           <Link to="https://infygain.com/onlinestore/products/ca/178" target="_blank"><img src='/images/lapcon.webp' /></Link>
                <div className=' servsl-overlay'>
                  <p>Laptop / Desktop Rent</p>
                </div>
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
                    <span>Info@infygain.com</span>
                </div>

            </div>
            <div className='serv-details3'>
                <h3>Brochures</h3>
                <div className='serv-details4'>
                      <button onClick={downloadPdf}><span className='serv-btn-icon'><BiSolidDownload /> </span>&nbsp;<span className='serv-btn-cont'>Download Brochure</span> </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default IotServSlider