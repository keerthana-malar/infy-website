import React, { useEffect, useRef, useState } from 'react'
import  Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { BsArrowRight , BsArrowLeft } from 'react-icons/bs';
import '../css/IotProjects.css'


const IotProjects = () => {

    // slider reference
    const slider = useRef(null);

    //state for slide
    const [active, setActive] = useState(0)

    // left arrow fn
    const leftArrow = () => {
        if(active===0){
            setActive(5)
        }else{
            setActive(active-1)
        }
        slider?.current?.slickPrev()
    } 
    // right arrow fn
    const rightArrow = () => {
        if(active===5){
            setActive(0)
        }else{
            setActive(active+1)
        }
        slider?.current?.slickNext()
    } 
    // gotoslide gn
    const goToSlide = (slideIndex) => {
      if (slider.current) {
        setActive(slideIndex)
        slider.current.slickGoTo(slideIndex);
      }
    };

    //   slide settings
    var settings = {
        infinite: true,
        dots: false, 
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows:false,
        adaptiveHeight: true,
        afterChange: (index) => {
            setActive(index);
        },
        
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: false,
                dots: true
              }
            },
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
                breakpoint: 400,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 1
                }
              }
          ]
    };

    // images for slides
    const images = [
          { src : "/images/slide1.jpg", con1: "Finance Strategy" , con2:"Facilitation1"},
          { src : "/images/slide2.jpg", con1: "Busniess Growth" , con2:"Coaching"},
          { src : "/images/slide3.jpg", con1: "Chan Agency" , con2:"Coaching"},
          { src : "/images/slide4.jpg", con1: "Data Analytics" , con2:"Strategy"},
          { src : "/images/slide5.jpg", con1: "Court Impertical" , con2:"Facilitation"},
          { src : "/images/slide6.jpg", con1: "Revenue Growth" , con2:"Stakeholder realation"},
    ]

  return (
    <div className='head-project'>

        {/* column-1 */}
        <div className='colu-1'>
            <div className='line-heading'>
                <div className='under-line'></div>
                <span> Projects</span>
            </div>
            <p className='cont con-1'>We are very active to </p>
            <p className='cont con-2'>perform any work!</p>
            <Accordion defaultActiveKey="0" id='accordion' >
                        <Accordion.Item eventKey="0" >
                            <Accordion.Header className='header'>
                                <div style={{display:"flex"}}>
                                    <span>1. Why you will choose our services?</span>
                                    <span className='plus'>+</span>
                                </div>
                            </Accordion.Header>
                                <Accordion.Body  > 
                                Elevate your business with us! Expert IT solutions, from advanced network setups to quality laptops, CCTV, biometrics, and accessories. Personalized service, unbeatable expertise – your success, our commitment.
                                </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header className='header'>
                                <div style={{display:"flex"}}>
                                    <span>2. How can you contact us?</span>
                                    <span className='plus'>+</span>
                                </div>
                            </Accordion.Header>
                                <Accordion.Body>
                                    Forging relationships between multi-national cor porations, governments and global NGOs begins with connections between people.
                                </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header className='header'>
                                <div style={{display:"flex"}}>
                                    <span>3. Why you work with us?</span>
                                    <span className='plus'>+</span>
                                </div>
                            </Accordion.Header>
                                <Accordion.Body>
                                Choose us for personalized IT solutions, not just services. With cutting-edge networks, superior devices, and dedicated support, we ensure your business thrives. Experience innovation, reliability, and a tailored partnership for your success.
                                </Accordion.Body>
                        </Accordion.Item>
            </Accordion>
        </div>

        {/* column-2 */}
        <div className="col-2" >
            <Slider ref={slider} {...settings} className='slider'>
                {images.map((image,index) => (
                    <div>
                        <div key={index}  className={`slider-item slide${index}`}>
                            <div style={{margin:"10px"}}>
                                <img src={image.src} />
                            </div>
                                    
                            <div className='silder-content'>
                                        <p className='con-1'>{image.con1}</p>
                                        <p className='con-2'>{image.con2}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
                       
                       <div className='colu-2'>{/* background color */}</div>
                        
                        <div className='slide-arrows'>

                          <div className='slide-head'>
                            <div className={`slideToGo ${active===0? "active": ""}`} onClick={() => goToSlide(0)}></div>
                            <div className={`slideToGo ${active===1? "active": ""}`} onClick={() => goToSlide(1)}></div>
                            <div className={`slideToGo ${active===2? "active": ""}`} onClick={() => goToSlide(2)}></div>
                            <div className={`slideToGo ${active===3? "active": ""}`} onClick={() => goToSlide(3)}></div>
                            <div className={`slideToGo ${active===4? "active": ""}`} onClick={() => goToSlide(4)}></div>
                            <div className={`slideToGo ${active===5? "active": ""}`} onClick={() => goToSlide(5)}></div>
                          </div>
                            
                            <div>
                            <span className='slide-arrow' onClick={() => leftArrow()}><BsArrowLeft /></span>
                            <span className='slide-arrow' onClick={() => rightArrow()}><BsArrowRight  /></span>
                            </div>
                        </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
        </div>
        </div>
    
  )
}

export default IotProjects;
