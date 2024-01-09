import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/home.css";
import FindWindowSize from "../Hooks/FindWindowSize";
import { useEffect } from "react";

const Sliders = () => {
  const windowSize = FindWindowSize();

  const sliderImg = [
    {
      img: `${
        windowSize[0] <= 450
          ? "/images/banner/ph-bann2.webp"
          : "/images/banner/bann2.webp"
      }`,
      // title: "Welcome to Infygain Technologies",
      // cont: "Best computer service in Coimbatore, We specialize in providing high-quality, professional computer repair and maintenance services to both individuals and businesses.",
    },
    {
      img: `${
        windowSize[0] <= 450
          ? "/images/banner/ph-bann1.webp"
          : "/images/banner/bannn.webp"
      }`,
      // title: "We Make IT Simple",
      // cont: "We provide all the services related to computer, Laptop, Networking, Printer, Biometrics, AMC, Server, CCTV, and also Web Development and Graphics Designs",
    },
    {
      img: `${
        windowSize[0] <= 450
          ? "/images/banner/ph-bann3.webp"
          : "/images/banner/bann3.webp"
      }`,
      // title: "You Have the need, We have the solutions",
      // cont: "Experience lightning-speed internet with our ISP! Stream, game, and work seamlessly with our high-speed, reliable connectivity.",
    },
    // {
    //   img: "/images/banner/banner33.jpg",
    //   title: "You have the NEED, We have the SOLUTION",
    //   cont: "We provide all the services related to computer, Laptop, Networking, Printer, Biometrics, AMC, Server, CCTV, and also Web Development and Graphics Designs",
    // },
  ];
  // Preload images
  useEffect(() => {
    sliderImg.forEach((item) => {
      const imgPreloader = new Image();
      imgPreloader.src = item.img;
      imgPreloader.onload = () => {
        // Image loaded successfully
      };
      imgPreloader.onerror = (error) => {
        console.error("Error preloading image:", error);
      };
    });
  }, [sliderImg]);

  const slides = sliderImg.map((item, index) => (
    <div key={index} className="slider">
      <div className="sliderBox">
        <img
          className="sliderImg"
          src={item.img}
          alt={`Slide ${index}`}
          title="Infygain Banner Image"
        />
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
