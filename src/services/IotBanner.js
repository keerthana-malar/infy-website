import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import { FaCubes } from 'react-icons/fa'
import { BsArrowRight } from 'react-icons/bs'
import 'aos/dist/aos.css';
import '../css/IotBanner.css'

const IotBanner = () => {

    // services icons style
    let iconStyles = { color: "#ffc000", fontSize: "1.5em" };

    // banner slider usestate
    const [currSlide, setCurrSlide] = useState(0)

    const images = [
        '/images/banner.jpg',
        '/images/image2.jpg',
        '/images/banner.jpg',
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
    <div>
        {/* banner */}
        <div className='banner'>
          {(currSlide === 0 ) && (
              <div style={backgroundImage}>
                <div  className='banner-content1'>
                  <p data-aos="fade-up" data-aos-duration="1000" style={{color:"#ffffff"}}>We are IT</p>
                  <p data-aos="fade-up" data-aos-duration="1200" style={{color:"#ffc000",fontWeight:600}}>Solution</p>
                  <p data-aos="fade-up" data-aos-duration="1400" style={{color:"#ffffff",fontWeight:600}}>Provider</p>
                </div>
       
                <div data-aos="fade-up" data-aos-duration="2000" className='banner-content2'>
                  <p style={{color:"#ffffff"}}>We've been lucky to collaborate with</p>
                  <p style={{color:"#ffc000"}}>a long list of customers</p>
                </div>

                <button data-aos="fade-up" data-aos-duration="2100">About us</button>
            </div>
        )}
        {(currSlide  === 1 ) && (
         <div style={backgroundImage}>
              <div className='banner-content1'>
                <p data-aos="fade-up" data-aos-duration="1000" style={{color:"#ffffff"}}>Infygain is</p>
                <p data-aos="fade-up" data-aos-duration="1200" style={{color:"#ffc000",fontWeight:600}}>The Best</p>
                <p data-aos="fade-up" data-aos-duration="1400" style={{color:"#ffffff",fontWeight:600}}>Corporate</p>
              </div>
              <div data-aos="fade-up" data-aos-duration="2000" className='banner-content2'>
                <p style={{color:"#ffffff"}}>We've been lucky to collaborate with</p>
                <p style={{color:"#ffc000"}}>a long list of customers</p>
              </div>

              <button data-aos="fade-up" data-aos-duration="2500">About us</button>
          </div>
          )}
         {(currSlide  === 2 ) && (
          <div style={backgroundImage}>
              <div className='banner-content1'>
                <p data-aos="fade-up" data-aos-duration="1000" style={{color:"#ffffff"}}>Infygain is</p>
                <p data-aos="fade-up" data-aos-duration="1200" style={{color:"#ffc000",fontWeight:600}}>The Best</p>
                <p data-aos="fade-up" data-aos-duration="1400" style={{color:"#ffffff",fontWeight:600}}>Corporate</p>
            </div>
            <div data-aos="fade-up" data-aos-duration="2000" className='banner-content2'>
              <p style={{color:"#ffffff"}}>We've been lucky to collaborate with</p>
              <p style={{color:"#ffc000"}}>a long list of customers</p>
            </div>

            <button data-aos="fade-up" data-aos-duration="2500">About us</button>
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
              className={currSlide === index ? 'dot active' : 'dot'}
              onClick={() => goToSlide(index)}
            ></span>
            {index < images.length+1 - 1 && (
              <span key={`line-${index}`} className="line"></span>
            )}
          </>
        ))}
      </div>

      {/* services */}
      <div className='heading'>
        <div className='containers'>
          <div className='bg1'>
            <div className='head'>
              <div className='sub-head'>
                <h1 className='icon'><FaCubes style={iconStyles}/></h1>
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

        <div className='containers'>
          <div className='bg2'>
            <div className='head'>
              <div className='sub-head'>
                <h1 className='icon'><FaCubes style={iconStyles}/></h1>
                <h1 className='title'>
                  CCTV / Bio-Metrics <br /> Sales & Services
                </h1>
              </div>

              <div className='number'>
                  02
              </div>  
            </div>
          </div>

          <div className='overlay'> 
            <div className='texts'>
              <h4> CCTV / Bio-Metrics <br /> Sales & Services</h4>
              <div className='texts-line'/>
              <p>
                  CCTV/Bio-Metrics Sales & Services offer security solutions through cameras and biometric systems for effective monitoring and access control.</p>
            </div>
             {/* arrow */}
            <div className='overlay-arrow'><BsArrowRight style={{fontSize:"22px",marginTop:"10px"}}/></div>
          </div>

        </div>

        <div className='containers'>
          <div className='bg3'>
            <div className='head'>
              <div className='sub-head'>
                <h1 className='icon'><FaCubes style={iconStyles}/></h1>
                <h1 className='title'>
                  Projectors / <br /> Smart TV
                </h1>
              </div>

              <div className='number'>
                  03
              </div>  
            </div>
          </div>

          <div className='overlay '>
            <div className='texts'>
              <h4> Projectors / <br /> Smart TV</h4>
              <div className='texts-line'/>
                <p>Projectors provide large screen displays, while Smart TVs offer internet connectivity and interactive features.  </p>
              </div>
              {/* arrow */}
              <div className='overlay-arrow'><BsArrowRight className='arrow-icon' style={{fontSize:"22px",marginTop:"10px"}}/></div>
          </div>

        </div>

        <div className='containers'>
          <div className='bg4'>
            <div className='head'>
              <div className='sub-head'>
                <h1 className='icon'><FaCubes style={iconStyles}/></h1>
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