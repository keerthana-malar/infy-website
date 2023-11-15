import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/home.css";


const Sliders = () => {
  
  const sliderImg = [
    {
      img: "/images/banner/bann2.webp",
      // title: "Welcome to Infygain Technologies",
      // cont: "Best computer service in Coimbatore, We specialize in providing high-quality, professional computer repair and maintenance services to both individuals and businesses.",
    },
    {
      img: "/images/banner/bannn.webp",
      // title: "We Make IT Simple",
      // cont: "We provide all the services related to computer, Laptop, Networking, Printer, Biometrics, AMC, Server, CCTV, and also Web Development and Graphics Designs",
    },
    {
      img: "/images/banner/bann3.webp",
      // title: "You Have the need, We have the solutions",
      // cont: "Experience lightning-speed internet with our ISP! Stream, game, and work seamlessly with our high-speed, reliable connectivity.",
    },
    // {
    //   img: "/images/banner/banner33.jpg",
    //   title: "You have the NEED, We have the SOLUTION",
    //   cont: "We provide all the services related to computer, Laptop, Networking, Printer, Biometrics, AMC, Server, CCTV, and also Web Development and Graphics Designs",
    // },
  ];

  const slides = sliderImg.map((item, index) => (
    <div key={index} className="slider">
      <div className="sliderBox">
        <img className="sliderImg" src={item.img} alt={`Slide ${index}`} />
        <div className="slideCont">
          <div>
            <p className="main-title banner-title">{item.title}</p>
            <p className="home-baner-con">{item.cont}</p>
          </div>
        </div>
      </div>
    </div>
  ));

  const settings = {
    fade: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
  };

  return <Slider {...settings}>{slides}</Slider>;
};

export default Sliders;