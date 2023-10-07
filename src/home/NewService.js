import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { BsArrowLeft , BsArrowRight} from 'react-icons/bs';
import "../css/home.css";

const NewService = () => {
    const settings = {
        dots: true,
        // infinite: true,
        speed: 500,
        slidesToShow: 3 ,
        slidesToScroll: 1

      };
  return (
    <div className='container home-slider' >
            {/* arrows */}
             {/* <div className='ho-arr'>
                <button className='home-arrow'><BsArrowLeft /></button>
            </div>
            <div className='ho-arr1'>
                <button className='home-arrow1'><BsArrowRight /></button>
            </div> */}
         
        <Slider  {...settings}>
            <div className='home-slide'>
           
                <img className='hom-sld-img' src='/images/IT-img.jpg' />
        
                <div className='home-cont-overlay'>
                    
                    <img src="/images/icons/it.png" alt="service icons"></img>
                    <h2 className="mid-title">IT Services</h2>
                    <p className="text-muted">
                    Unlock IoT's Power. Strategy, Devices, Insights, and Security. Innovate with Us. </p>
                </div>
            
            </div>

            <div className='home-slide'>
                <img className='hom-sld-img' src='/images/web-img.jpg' />
                <div className='home-cont-overlay'>
                    
                    <img src="/images/icons/web.png" alt="service icons"></img>
                    <h2 className="mid-title">Web Development</h2>
                    <p className="text-muted">
                    Crafting Digital Excellence. Custom Websites, E-Commerce, SEO, Maintenance.</p>
                </div>
                
            </div>
            <div className='home-slide'>
                <img  className='hom-sld-img' src='/images/ISP-img.jpg' />
                <div className='home-cont-overlay'>
                    
                    <img src="/images/icons/isp.png" alt="service icons"></img>
                    <h2 className="mid-title">ISP Services</h2>
                    <p className="text-muted">
                    Seamless Connectivity. High-Speed Internet, Network Security, 24/7 Support. </p>
                </div>
            </div>
         
    
         
        </Slider>
        
        
    
                {/* <div>
                    <img src='/images/serv1.png' />
                </div>
                <div>
                    <img src='/images/serv1.png' />
                </div>
                <div>
                    <img src='/images/serv1.png' />
                </div> */}
            
      </div>
  )
}

export default NewService