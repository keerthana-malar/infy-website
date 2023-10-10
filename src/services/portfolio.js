import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { FaLink } from "react-icons/fa";
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';


function Portfolio() {
  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 5,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 1000,
  //   responsive: [
  //     {
  //       breakpoint: 900,
  //       settings: {
  //         slidesToShow: 4,
  //       },
  //     },
  //     {
  //       breakpoint: 700,
  //       settings: {
  //         slidesToShow: 3,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 400,
  //       settings: {
  //         slidesToShow: 1,
  //       },
  //     },
  //   ],
  // };

  return (
    <>
      <div className="portbox1">
        <div className="solbx1">
          <div className="featurebox">
            <div className="iconbx">
              <HiOutlineRocketLaunch />
            </div>
            <div className="conbx">Portfolio</div>
          </div>
          <div className="sercon">
            <p
              className="su-titlebx"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              There are many sites we did<br></br>
            </p>
            <span
              className="stbx"
              data-aos="fade-left"
              data-aos-duration="3000"
            >
              Reason to Choose us?
            </span>
          </div>
        </div>
      </div>
      <div className="mainportbox">
      {/* <Slider {...settings}> */}
        <div className="portbox2">
          <div className="portbx pbx">
            <img className="portimgbx" src="./images/seo/travel1.jpg"></img>
            <div className="portoverbx">
              <button className="btn portbtn mb-3">TRAVEL WEBSITE</button>
              <p className="porttit mb-3">Aspire Holidays</p>
              <span className="linkbx">
                <a target="_blank" href="https://aspireholidays.in/"><FaLink /></a>
              </span>
            </div>
          </div>
          <div className="portbx pbx">
            <img className="portimgbx" src="./images/seo/college.jpg"></img>
            <div className="portoverbx">
              <button className="btn portbtn mb-3">COLLEGE WEBSITE</button>
              <p className="porttit mb-3">United Educational Institution</p>
              <span className="linkbx">
                <a target="_blank" href="http://uit.ac.in/"><FaLink /></a>
              </span>
            </div>
          </div>
          <div className="portbx pbx">
            <img className="portimgbx" src="./images/seo/boutique.jpg"></img>
            <div className="portoverbx">
              <button className="btn portbtn mb-3">ECOMMERCE SITE</button>
              <p className="porttit mb-3">Magizh Boutique</p>
              <span className="linkbx">
                <a target="_blank" href="https://infygain.com/magizhapparels/"><FaLink /></a>
              </span>
            </div>
          </div>
          <div className="portbx pbx">
            <img className="portimgbx" src="./images/seo/travel2.jpg"></img>
            <div className="portoverbx">
              <button className="btn portbtn mb-3">TRAVEL SITE</button>
              <p className="porttit mb-3">Royal Travels</p>
              <span className="linkbx">
                <a target="_blank" href="https://travelscoimbatore.in/"><FaLink /></a>
              </span>
            </div>
          </div>
        </div>
        {/* </Slider> */}
      </div>
    </>
  );
}
export default Portfolio;
