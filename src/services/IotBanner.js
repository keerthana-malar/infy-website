import React, { useEffect, useState } from "react";
import AOS from "aos";
import { GiNetworkBars } from "react-icons/gi";
import { BsArrowRight, BsLaptopFill, BsProjectorFill } from "react-icons/bs";
import { MdOutlineSecurity } from "react-icons/md";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "../css/IotBanner.css";
import { Link } from "react-router-dom";

const IotBanner = () => {
  // services icons style


  // banner slider usestate
  const [currSlide, setCurrSlide] = useState(0);

  const images = [
    "/images/Banner1.webp",
    "/images/Baner2.webp",
    "/images/Banner3.webp",
  ];

  useEffect(() => {
    AOS.init();
    const interval = setInterval(() => {
      setCurrSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  });

  // nextslide
  const goToSlide = (slideIndex) => {
    setCurrSlide(slideIndex);
  };

  // banner slider bg image style
  const backgroundImage = {
    // backgroundImage: `url(${images[currSlide]})`,
    // height: "100vh",
    // backgroundSize: "cover",
    // backgroundPosition: "center",
    // gridArea:" 1 / 1 / 5 / 5",
    // width: "100%"
    backgroundImage: `url(${images[currSlide]})`,
    height: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "70%",
    width: "100vw",
  };

  return (
    <div className="iot-ban-and-serv">
      {/* banner */}
      <div className="banner">
        {currSlide === 0 && (
          <div className="iot-bgimg" style={backgroundImage}>
            <div className="banner-content1 container">
              <p
                data-aos="fade-up"
                data-aos-duration="1000"
                className="iot-cnt1"
              >
                We are lucky 
              </p>
              <p
                data-aos="fade-up"
                data-aos-duration="1200"
                className="iot-cnt2"
              >
             to help 
              </p>
              <p
                data-aos="fade-up"
                data-aos-duration="1400"
                className="iot-cnt3"
              >you out!!!
              </p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              className="banner-content2 container"
            >
              <p className="iot-cnt1">
                We've been lucky to collaborate with
              </p>
              <p style={{ color: "#ffc000" }}>a long list of customers</p>
              <button
                data-aos="fade-up"
                data-aos-duration="2500"
                className="test-btns"
              >
                <span className="test-sc"></span>
                
                  <span className="iot-text">
                  <Link to="/about">
                    About Us
                    <BsArrowRight className="btns-icons1" />
                    </Link>
                  </span>
               
               
              </button>
            </div>
            <img
              className="iot-ani-img"
              src="/images/slider-shape1.png"
              alt="best it supports"
              title="IT animation button"
            />
            <img
              className="iot-ani1-img"
              src="/images/slider-shape2.png"
              alt="best it services"
              title="IT animation button"
            />
          </div>
        )}
        {currSlide === 1 && (
          <div className="iot-bgimg" style={backgroundImage}>
            <div className="banner-content1 container">
              <p
                data-aos="fade-up"
                data-aos-duration="1000"
                className="iot-cnt1"
              >
                We are IT Solution{" "}
              </p>
              <p
                data-aos="fade-up"
                data-aos-duration="1200"
                className="iot-cnt2"
              >
                Provider and
              </p>
              <p
                data-aos="fade-up"
                data-aos-duration="1400"
                className="iot-cnt3"
              >
                We make IT Simple
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              className="banner-content2 container"
            >
              <p  className="iot-cnt1">
                We've been lucky to collaborate with
              </p>
              <p style={{ color: "#ffc000" }}>a long list of customers</p>
              <button
                data-aos="fade-up"
                data-aos-duration="2500"
                className="test-btns"
              >
                <span className="test-sc"></span>
                <span className="iot-text">
                <Link to="/about">
                    About Us
                    <BsArrowRight className="btns-icons1" />
                    </Link>
                </span>
              </button>
            </div>

            <img className='iot-ani-img' src='/images/slider-shape1.png' alt="animation"/>
               <img className='iot-ani1-img' src='/images/slider-shape2.png'  alt="animation"/>
          </div>
        )}
        {currSlide === 2 && (
          <div className="iot-bgimg" style={backgroundImage}>
            <div className="banner-content1 container">
              <p
                data-aos="fade-up"
                data-aos-duration="1000"
                className="iot-cnt1"
              >
                You have the{" "}
              </p>
              <p
                data-aos="fade-up"
                data-aos-duration="1200"
                className="iot-cnt2"
              >
                Need, We have
              </p>
              <p
                data-aos="fade-up"
                data-aos-duration="1400"
                className="iot-cnt3"
              >
                the SOLUTION
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              className="banner-content2 container"
            >
              <p  className="iot-cnt1">
                We've been lucky to collaborate with
              </p>
              <p style={{ color: "#ffc000" }}>a long list of customers</p>
              <button
                data-aos="fade-up"
                data-aos-duration="2500"
                className="test-btns"
              >
                <span className="test-sc"></span>
                <span className="iot-text">
                <Link to="/about">
                    About Us
                    <BsArrowRight className="btns-icons1" />
                    </Link>
                </span>
              </button>
            </div>
            
            <img className='iot-ani-img' src='/images/slider-shape1.png'  alt="animation"/>
               {/* <img className='iot-ani1-img' src='https://demo.casethemes.net/consultio-digital-marketing/wp-content/uploads/2021/02/slider-shape4.png'/> */}
          </div>
        )}
      </div>

      {/* dot container */}
      <div className="dots-container">
        {images.map((_, index) => (
          <>
            {index === 0 && <div className="line" />}
            <span
              key={index}
              className={currSlide === index ? "dots active" : "dots"}
              onClick={() => goToSlide(index)}
            ></span>
            {index < images.length + 1 - 1 && (
              <span key={`line-${index}`} className="line"></span>
            )}
          </>
        ))}
      </div>

      {/* services */}

      <div className="container heading">
      <Link className="ban-serv-link"  to='/services/networking' target="_blank"  rel="noopener noreferrer">
          <div className="containers container ">
            <div className="bg1">
              <div className="head">
                <div className="sub-head">
                  <h2 className="icon">
                    <GiNetworkBars className="iot-iconStyles"  />
                  </h2>
                  <h2 className="title">
                    Complete
                    <br />
                    Network Solutions
                  </h2>
                </div>

                <div className="number">01</div>
              </div>
            </div>

            <div className="overlay1">
              <div className="texts">
                <h4>
                  {" "}
                  Network <br /> Solutions{" "}
                </h4>
                <div className="texts-line" />
                <p>
                  Complete Networking refers to the integration of all the
                  different components of a computer network into a single
                </p>
              </div>

              {/* arrow */}
              <div className="overlay-arrow">

              <Link to='/services/networking' target="_blank"  rel="noopener noreferrer"><BsArrowRight style={{ fontSize: "22px", marginTop: "10px" }} /></Link>

              </div>
            </div>
          </div>
        </Link>

        <Link className="ban-serv-link"  to='/services/cctv' target="_blank"  rel="noopener noreferrer">
          <div className="containers container ">
            <div className="bg2">
              <div className="head">
                <div className="sub-head">
                  <h2 className="icon">
                    <MdOutlineSecurity className="iot-iconStyles"   />
                  </h2>
                  <h2 className="title">
                    Security
                    <br />
                    Solutions
                  </h2>
                </div>

                <div className="number">02</div>
              </div>
            </div>

            <div className="overlay1">
              <div className="texts">
                <h4>
                  {" "}
                  Security
                  <br />
                  Services
                </h4>
                <div className="texts-line" />
                <p>
                  Enhance security with our advanced CCTV and biometric systems
                  for comprehensive protection and peace of mind.
                </p>
              </div>
              {/* arrow */}
              <div className="overlay-arrow">

              <Link to='/services/cctv' target="_blank"  rel="noopener noreferrer"><BsArrowRight style={{ fontSize: "22px", marginTop: "10px" }} /></Link>

              </div>
            </div>
          </div>
        </Link>

        <Link className="ban-serv-link"  to='/services/Projectors' target="_blank"  rel="noopener noreferrer">
          <div className="containers container">
            <div className="bg3">
              <div className="head">
                <div className="sub-head">
                  <h2 className="icon">
                    <BsProjectorFill className="iot-iconStyles"   />
                  </h2>
                  <h2 className="title">
                    AV <br /> Solutions
                  </h2>
                </div>

                <div className="number">03</div>
              </div>
            </div>

            <div className="overlay1 ">
              <div className="texts">
                <h4>
                  {" "}
                  AV <br /> Solutions
                </h4>
                <div className="texts-line" />
                <p>
                  Enhance your space with our seamless AV solutions for effortless
                  and immersive audio-visual experiences.{" "}
                </p>
              </div>
              {/* arrow */}
              <div className="overlay-arrow">

              <Link to='/services/Projectors' target="_blank"  rel="noopener noreferrer"><BsArrowRight
                  className="arrow-icon"
                  style={{ fontSize: "22px", marginTop: "10px" }}
                /></Link>
              </div>
            </div>
          </div>
        </Link>

        <Link className="ban-serv-link" to='/services/laptopanddesktop' target="_blank"  rel="noopener noreferrer">
          <div className="containers container">
            <div className="bg4">
              <div className="head">
                <div className="sub-head">
                  <h2 className="icon">
                    <BsLaptopFill className="iot-iconStyles"   />
                  </h2>
                  <h2 className="title">
                    Laptop / Desktop <br /> Sales & Services
                  </h2> 
                </div>

                <div className="number">04</div>
              </div>
            </div>

            <div className="overlay1">
              <div className="texts">
                <h4>
                  Laptop / Desktop <br /> Sales & Services
                </h4>
                <div className="texts-line" />
                <p>
                  Desktop sales and service providers offer a range of services to
                  help individuals and businesses with their desktop computing
                </p>
              </div>
              {/* arrow */}
              <div className="overlay-arrow">

              <Link to='/services/laptopanddesktop' target="_blank"  rel="noopener noreferrer"><BsArrowRight style={{ fontSize: "22px", marginTop: "10px" }} /> </Link>

              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default IotBanner;
