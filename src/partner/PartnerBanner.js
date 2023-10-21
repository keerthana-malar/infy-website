import React,{useEffect} from 'react';
import '../css/Partner.css';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


function PartnerBanner(){
    useEffect(() => {
        AOS.init();
        AOS.refresh();

    }, []);
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        dots:false
      };
    return(
        <div className='fullslider'>
             <Slider {...settings}>
           
                   <div className='imageclinic' data-aos="zoom-in">
             
                    </div> 
                  
            <div className='imageclinic1' data-aos="zoom-in">
            
            </div>
          
            {/* <div className='imageclinic2'>
            
            </div> */}
        
            <div className='imageclinic3' data-aos="zoom-in">
            
            </div>
            </Slider>
        </div>
    )
}

export default PartnerBanner;