import React, { useEffect } from "react";
import "jquery";
import "owl.carousel/dist/assets/owl.carousel.css"; // Import Owl Carousel CSS
import "owl.carousel"; // Import Owl Carousel JavaScript

function Slider() {
  
  useEffect(() => {
    $(document).ready(function () {
      const owl = $(".owl-carousel");
      owl.owlCarousel({
        items: 3,
        loop: true,
        autoplay: true,
      });
    });
  }, []);

  const sliderImg = [
    {
      img: "/images/banner/top-banner.webp",
      title: "Slide One",
      cont: "It looks like you're trying to create a slider component in React using the keen-slider library",
    },
    {
      img: "/images/banner/sample.jpg",
      title: "Slide Two",
      cont: "It looks like you're trying to create a slider component in React using the keen-slider library",
    },
  ];

  const slides = sliderImg.map((item, index) => (
    <div key={index} className="item">
      <img
        className="image-fluid slider-img"
        src={item.img}
        alt={`Slide ${index}`}
      />
      <div className="slide-cont">
        <div>
          <p className="main-title">{item.title}</p>
          <p>{item.cont}</p>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="owl-carousel">
      {slides}
    </div>
  );
}

export default Slider;
