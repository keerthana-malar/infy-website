import React, { useEffect, useState, useRef } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../css/Testimonial.css';
import { BsFillStarFill } from "react-icons/bs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import AOS from 'aos';
import 'aos/dist/aos.css';
import CustomPrevArrow from './iotprevarrow';
import CustomNextArrow from './iotcustomnextarrow';
import { Tilt } from 'react-tilt'



function Testimonialing() {
  const defaultOptions = {
    reverse:        false,  // reverse the tilt direction
    max:            35,     // max tilt rotation (degrees)
    perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
    speed:          1000,   // Speed of the enter/exit transition
    transition:     true,   // Set a transition on enter/exit.
    axis:           null,   // What axis should be disabled. Can be X or Y.
    reset:          true,    // If the tilt effect has to be reset on exit.
    easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  }

  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    AOS.init();
    AOS.refresh();

  }, []);
  const settings = {
    prevArrow: <CustomPrevArrow onClick={() => sliderRef.current.slickPrev()} />,
    nextArrow: <CustomNextArrow onClick={() => sliderRef.current.slickNext()} />,
    afterChange: (current) => setCurrentSlide(current),
  };
  return (
    <div className='container' >
      <div className='row fulline'>
        <div className='col-md-12 col-sm-12 col-lg-6 fullleftcompany'>
          <div className='line_with_testimonial' >
            <p>Testimonials</p>
          </div>
          <div className='header'>
          <h1> Some feedbacks <span className='tm-span'>from <br></br>{" "}
            honarble Clients</span> </h1>
          {" "}
          </div>
          <div className='movingslick'>
            <div className="slide">
            <Slider ref={sliderRef} {...settings} >
                <div>
                  <BsFillStarFill className='rating' />{" "}
                  <BsFillStarFill className='rating' />{" "}
                  <BsFillStarFill className='rating' />{" "}
                  <BsFillStarFill className='rating' />{" "}
                  <BsFillStarFill className='rating' />{" "}
                  <p className='text-muted mummypara'>"Best service and Low price customer friendly,
                   He explained every technical details and timely completion of work with 100% perfection.
                    so I highly recommend
                   "INFYGAIN TECHNOLOGY".</p>
                  <div className='slideinside'>
                    <h4 className='bluecolor'>Liji Rbz</h4>
                  </div>
                </div>
                <div>
                  <BsFillStarFill className='rating' />{" "}
                  <BsFillStarFill className='rating' />{" "}
                  <BsFillStarFill className='rating' />{" "}
                  <BsFillStarFill className='rating' />{" "}
                  <BsFillStarFill className='rating' />{" "}
                  <p className='text-muted mummypara'>"I struggle with my favorite computer. 
                  That time i search best computer repair service in browser then 
                  I choose infygain technologies really they satisfied my computer issue. 
                ".</p>
                  <div className='slideinside'>
                  <h4 className='bluecolor'>Dhanush Praveen</h4>
                  </div>
                </div>
                <div>
                  <BsFillStarFill className='rating' />{" "}
                  <BsFillStarFill className='rating' />{" "}
                  <BsFillStarFill className='rating' />{" "}
                  <BsFillStarFill className='rating' />{" "}
                  <BsFillStarFill className='rating' />{" "}
                  <p className='text-muted mummypara'>"I started my self business so i searched
                   top one website development that time i found infygain technologies. Really they provide good
                   dynamic website. The price was affordable thanks for support team.".</p>
                  <div className='slideinside'>
                 
                  <h4 className='bluecolor'>Ananthi Anu</h4>
                  </div>
                </div>
                <div>
                  <BsFillStarFill className='rating' />{" "}
                  <BsFillStarFill className='rating' />{" "}
                  <BsFillStarFill className='rating' />{" "}
                  <BsFillStarFill className='rating' />{" "}
                  <BsFillStarFill className='rating' />{" "}
                  <p className='text-muted mummypara'>"I feel the best laptop service center in
                   coimbatore is infygain technologies. My laptop display was fully crashes they 
                  clear that all and laptop look like fresh piece".</p>
                  <div className='slideinside'>
            
                  <h4 className='bluecolor'>Ezhu Malai MR</h4>
                  </div>
                </div>
                <div>
                  <BsFillStarFill className='rating' />{" "}
                  <BsFillStarFill className='rating' />{" "}
                  <BsFillStarFill className='rating' />{" "}
                  <BsFillStarFill className='rating' />{" "}
                  <BsFillStarFill className='rating' />{" "}
                  <p className='text-muted mummypara'>"Best laptop and desktop service center in Coimbatore,
                   Infygain is the best service center for cctv and network setup, they deal with 
                   very cheap price,
        
                   I prefer everyone.".</p>
                  <div className='slideinside'>
                    <h4 className='bluecolor'>Gautham </h4>
                  </div>
                </div>
              </Slider>

            </div>
          </div>
        </div>

        <div className='col-md-12 col-sm-12 col-lg-6'>
        <Tilt options={defaultOptions} >
          <img src="https://demo.casethemes.net/consultio-digital-marketing/wp-content/uploads/2021/02/testimonials-group.png"
            alt="value"
            data-aos="zoom-in-up" 
           className='reviewphoto'/>
            </Tilt>
        </div>
      </div>


    </div>
  )
}

export default Testimonialing;