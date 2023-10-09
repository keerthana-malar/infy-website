import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import { GiNetworkBars } from 'react-icons/gi'
import { BiSolidCctv} from 'react-icons/bi'
import { BsArrowRight, BsLaptopFill , BsProjectorFill} from 'react-icons/bs'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'aos/dist/aos.css';
import '../css/IotBanner.css'

const IotBanner = () => {

    // services icons style
    let iconStyles = { color: "#ffc000", fontSize: "1.5em" };

    // banner slider usestate
    const [currSlide, setCurrSlide] = useState(0)

    const images = [
        '/images/Banner1.jpg',
        '/images/Baner2.jpg',
        '/images/Banner3.jpg',
      ];

    useEffect(() => {
        AOS.init();
        // console.log(currSlide)
        const interval = setInterval(() => {
          setCurrSlide((prevSlide) => (prevSlide + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    })

    // nextslide
    const goToSlide = (slideIndex) => {
        setCurrSlide(slideIndex);
      };

    // banner slider bg image style
    const backgroundImage = {
        backgroundImage: `url(${images[currSlide]})`,
        height:"100vh",
        backgroundSize:"cover", 
        backgroundPosition:"60%",
        // backgroundAttachment: "fixed",
    }

  return (
    <div className='iot-ban-and-serv'>
        {/* banner */}
        <div className='banner'>
          {(currSlide === 0 ) && (
              <div className='iot-bgimg' style={backgroundImage}>
               <div className='banner-content1 container'>
                  <p data-aos="fade-up" data-aos-duration="1000" style={{color:"#ffffff"}}>Welcome to</p>
                  <p data-aos="fade-up" data-aos-duration="1200" style={{color:"#ffc000",fontWeight:900}}>Infygain</p>
                  <p data-aos="fade-up" data-aos-duration="1400" style={{color:"#ffffff",fontWeight:900}}>IOT Services</p>
              </div>
       
                <div data-aos="fade-up" data-aos-duration="2000" className='banner-content2 container'>
                  <p style={{color:"#ffffff"}}>We've been lucky to collaborate with</p>
                  <p style={{color:"#ffc000"}}>a long list of customers</p>
                  <button  data-aos="fade-up" data-aos-duration="2500"  className="test-btns">
                    <span className="test-sc"> 
                    </span>
                    <span className="iot-text">About Us
                    <BsArrowRight className='btns-icons1'/>
                    </span>
                  </button>
                </div>

               
            </div>
        )}
        {(currSlide  === 1 ) && (
         <div className='iot-bgimg' style={backgroundImage}>
              <div  className='banner-content1 container'>
                  <p data-aos="fade-up" data-aos-duration="1000" style={{color:"#ffffff"}}>We are IT Solution </p>
                  <p data-aos="fade-up" data-aos-duration="1200" style={{color:"#ffc000",fontWeight:900}}>Provider and</p>
                  <p data-aos="fade-up" data-aos-duration="1400" style={{color:"#ffffff",fontWeight:900}}>We make IT Simple</p>
                 
              </div>
              <div data-aos="fade-up" data-aos-duration="2000" className='banner-content2 container'>
                <p style={{color:"#ffffff"}}>We've been lucky to collaborate with</p>
                <p style={{color:"#ffc000"}}>a long list of customers</p>
                <button  data-aos="fade-up" data-aos-duration="2500"  className="test-btns">
                    <span className="test-sc"> 
                    </span>
                    <span className="iot-text">About Us
                    <BsArrowRight className='btns-icons1'/>
                    </span>
                  </button>
              </div>

             
          </div>
          )}
         {(currSlide  === 2 ) && (
          <div className='iot-bgimg' style={backgroundImage}>
              <div className='banner-content1 container'>
                <p data-aos="fade-up" data-aos-duration="1000" style={{color:"#ffffff"}}>You have the </p>
                <p data-aos="fade-up" data-aos-duration="1200" style={{color:"#ffc000",fontWeight:900}}>Need, We have</p>
                <p data-aos="fade-up" data-aos-duration="1400" style={{color:"#ffffff",fontWeight:900}}>the SOLUTION</p>
            </div>
            <div data-aos="fade-up" data-aos-duration="2000" className='banner-content2 container'>
              <p style={{color:"#ffffff"}}>We've been lucky to collaborate with</p>
              <p style={{color:"#ffc000"}}>a long list of customers</p>
              <button  data-aos="fade-up" data-aos-duration="2500"  className="test-btns">
                    <span className="test-sc"> 
                    </span>
                    <span className="iot-text">About Us
                    <BsArrowRight className='btns-icons1'/>
                    </span>
                  </button>
            </div>

            
          </div>
          )} 
      </div>

      {/* dot container */}
      <div className="dots-container">
        {images.map((_, index) => (
          <>
             {(index === 0 ) && (
              <div className="line" />
            )}
            <span
              key={index}
              className={currSlide === index ? 'dots iot-active' : 'dots'}
              onClick={() => goToSlide(index)}
            ></span>
            {index < images.length+1 - 1 && (
              <span key={`line-${index}`} className="line"></span>
            )}
          </>
        ))}
      </div>

      {/* services */}
      
      <div className='container heading'>
        <div className='containers container '>
          <div className='bg1'>
            <div className='head'>
              <div className='sub-head'>
                <h1 className='icon'><GiNetworkBars style={iconStyles}/></h1>
                <h1 className='title'>
                  Complete<br/>Network Solutions
                </h1>
              </div>

              <div className='number'>
                01
              </div>  
            </div>

          </div>

          <div className='overlay'>
            <div className='texts'>
              <h4> Network <br /> Solutions </h4>
              <div className='texts-line'/>
              <p>Complete Networking refers to the integration of all the different components of a computer network into a single</p>
            </div>

            {/* arrow */}
            <div className='overlay-arrow'><BsArrowRight style={{fontSize:"22px",marginTop:"10px"}}/></div>
          </div>
        </div>

        <div className='containers container '>
          <div className='bg2'>
            <div className='head'>
              <div className='sub-head'>
                <h1 className='icon'><BiSolidCctv style={iconStyles}/></h1>
                <h1 className='title'>
                  Security<br />Services
                </h1>
              </div>

              <div className='number'>
                  02
              </div>  
            </div>
          </div>

          <div className='overlay'> 
            <div className='texts'>
              <h4> Security<br />Services</h4>
              <div className='texts-line'/>
              <p>
              Enhance security with our advanced CCTV and biometric systems for comprehensive protection and peace of mind.</p>
            </div>
             {/* arrow */}
            <div className='overlay-arrow'><BsArrowRight style={{fontSize:"22px",marginTop:"10px"}}/></div>
          </div>

        </div>

        <div className='containers container'>
          <div className='bg3'>
            <div className='head'>
              <div className='sub-head'>
                <h1 className='icon'><BsProjectorFill style={iconStyles}/></h1>
                <h1 className='title'>
                  AV <br /> Solutions
                </h1>
              </div>

              <div className='number'>
                  03
              </div>  
            </div>
          </div>

          <div className='overlay '>
            <div className='texts'>
              <h4>  AV <br /> Solutions</h4>
              <div className='texts-line'/>
                <p>Enhance your space with our seamless AV solutions for effortless and immersive audio-visual experiences.  </p>
              </div>
              {/* arrow */}
              <div className='overlay-arrow'><BsArrowRight className='arrow-icon' style={{fontSize:"22px",marginTop:"10px"}}/></div>
          </div>

        </div>

        <div className='containers container'>
          <div className='bg4'>
            <div className='head'>
              <div className='sub-head'>
                  <h1 className='icon'><BsLaptopFill style={iconStyles}/></h1>
                <h1 className='title'>
                  Laptop / Desktop <br /> Sales & Services
                </h1>
              </div>

              <div className='number'>
                  04
              </div>  
            </div>
          </div>

          <div className='overlay'>
            <div className='texts'>
              <h4>Laptop / Desktop <br /> Sales & Services</h4>
              <div className='texts-line'/>
              <p>Desktop sales and service providers offer a range of services to help individuals and businesses with their desktop computing</p>
            </div>
            {/* arrow */}
            <div className='overlay-arrow'><BsArrowRight style={{fontSize:"22px",marginTop:"10px"}}/></div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default IotBanner