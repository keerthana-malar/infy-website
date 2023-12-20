import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { FaLink } from "react-icons/fa";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function Portfolio({componentRef1}) {
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4, 
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const protfolios= [
    {
      img:"/images/seo/travel1.webp",
      name:"Aspire Hoildays",
      cat:"TRAVEL WEBSITE",
      link:"https://www.aspireholidays.in/"
    },
    {
      img:"/images/seo/college.webp",
      name:"United College of Arts & Science",
      cat:"COLLEGE WEBSITE Of ARTS",
      link:"https://ucas.ac.in/"
    },
    {
      img:"/images/seo/pharmacys (1).webp",
      name:"United College Of Pharmacy",
      cat:"COLLEGE WEBSITE OF PHARMACY",
      link:"https://ucp.org.in/"
    },
    {
      img:"/images/seo/MRDICAL.webp",
      name:"United College Of Medical Science",
      cat:"MEDICAL SCIENCE WEBSITE",
      link:"https://ucms.edu.in/"
    },
    {
      img:"/images/seo/physiotherapy.webp",
      name:"United College Of Physiotherapy",
      cat:"COLLEGE WEBSITE OF PHYSIOTHERAPY",
      link:"https://ucpt.ac.in/"
    },
    {
      img:"/images/seo/NURSING.webp",
      name:"United College Of Nursing",
      cat:"COLLEGE WEBSITE OF NURSING",
      link:"https://ucn.ac.in/"
    },
    {
      img:"/images/seo/account.webp",
      name:"Meethalal Jain & Co",
      cat:"ACCOUNT SITE",
      link:"https://kaudit.org/"
    },
    {
      img:"/images/seo/god.webp",
      name:"Niagara Exports LLC",
      cat:"SCULPTURE SITE",
      link:"https://niagaraexports.com/"
    },
    {
      img:"/images/seo/travel2.webp",
      name:"Royal Travels",
      cat:"TRAVEL WEBSITE",
      link:"https://travelscoimbatore.in/"
    },
    {
      img:"/images/seo/e-com.webp",
      name:"Magizh Boutique",
      cat:"E-COMMERCE SITE",
      link:"https://infygain.in/magizhapparels/"
    },
  ]
  
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
      <div className="mainportbox" ref={componentRef1}>
      <Slider {...settings}>
        {
          protfolios.map((protfolio,index) => (
            <div className="portbxk pbx" key={index}>
                        <img className="portimgbxk" alt="best project" src={protfolio.img} title="best project"></img>
                        <div className="portoverbxk">
                          <button className="btn portbtn mb-3">{protfolio.cat}</button>
                          <p className="porttit mb-3">{protfolio.name}</p>
                          <span className="linkbx">
                            <a target="_blank"  rel="noopener noreferrer" href={protfolio.link}><FaLink /></a>
                          </span>
                        </div>
                        
            </div>
          ))
        }
        </Slider>
      </div>
    </>
  );
}
export default Portfolio;