import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/home.css";

const Sliders = () => {
  const sliderImg = [
    {
      img: "/images/Banner11.jpg",
      title: "Welcome to Infygain Technologies",
      cont: "Best computer service in Coimbatore, We specialize in providing high-quality, professional computer repair and maintenance services to both individuals and businesses.",
    },
    {
      img: "/images/banner/banner1.jpg",
      title: "We Make IT Simple",
      cont: "We provide all the services related to computer, Laptop, Networking, Printer, Biometrics, AMC, Server, CCTV, and also Web Development and Graphics Designs",
    },
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

  const settings = {};

  return <Slider {...settings}>{slides}</Slider>;
};

export default Sliders;