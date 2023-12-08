import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { FaLink } from "react-icons/fa";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function Portfolio({componentRef1}) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

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
         
          <div className="portbxk ">
            <img className="portimgbxk" alt="best projects" src="./images/seo/physiotherapy.webp"></img>
            <div className="portoverbxk">
              <button className="btn portbtn mb-3">COLLEGE WEBSITE OF PHYSIOTHERAPY</button>
              <p className="porttit mb-3">United College Of Physiotherapy</p>
              <span className="linkbx">
                <a target="_blank" href="https://ucpt.ac.in/"><FaLink /></a>
              </span>
            </div>
          </div>
          <div className="portbxk pbx">
            <img className="portimgbxk" alt="top projects" src="./images/seo/college.webp"></img>
            <div className="portoverbxk">
              <button className="btn portbtn mb-3">COLLEGE WEBSITE Of ARTS</button>
              <p className="porttit mb-3">United College of Arts & Science</p>
              <span className="linkbx">
                <a target="_blank" href="https://ucas.ac.in/"><FaLink /></a>
              </span>
            </div>
          </div>
          <div className="portbxk pbx">
            <img className="portimgbxk" alt="best seo services" src="./images/seo/pharmacys (1).webp"></img>
            <div className="portoverbxk">
              <button className="btn portbtn mb-3">COLLEGE WEBSITE OF PHARMACY</button>
              <p className="porttit mb-3">United College Of Pharmacy</p>
              <span className="linkbx">
                <a target="_blank" href="https://ucp.org.in/"><FaLink /></a>
              </span>
            </div>
          </div>
          <div className="portbxk pbx">
            <img className="portimgbxk" alt="best seo services" src="./images/seo/MRDICAL.webp"></img>
            <div className="portoverbxk">
              <button className="btn portbtn mb-3">MEDICAL SCIENCE WEBSITE</button>
              <p className="porttit mb-3">United College Of Medical Science</p>
              <span className="linkbx">
                <a target="_blank" href="https://ucms.edu.in/"><FaLink /></a>
              </span>
            </div>
            
          </div>

          <div className="portbxk pbx">
            <img className="portimgbxk" src="./images/seo/NURSING.webp"></img>
            <div className="portoverbxk">
              <button className="btn portbtn mb-3">COLLEGE WEBSITE OF NURSING</button>
              <p className="porttit mb-3">United College Of Nursing</p>
              <span className="linkbx">
                <a target="_blank" href="https://ucn.ac.in/"><FaLink /></a>
              </span>
            </div>
            
          </div>

          <div className="portbxk pbx">
            <img className="portimgbxk" alt="best project" src="./images/seo/account.webp"></img>
            <div className="portoverbxk">
              <button className="btn portbtn mb-3">ACCOUNT SITE</button>
              <p className="porttit mb-3">Meethalal Jain & Co</p>
              <span className="linkbx">
               <a target="_blank" href="https://kaudit.org/"><FaLink /></a>
              </span>
            </div>
            
          </div>

          <div className="portbxk pbx">
            <img className="portimgbxk" alt="top seo services" src="./images/seo/god.webp"></img>
            <div className="portoverbxk">
              <button className="btn portbtn mb-3">SCULPTURE SITE</button>
              <p className="porttit mb-3">Niagara Exports LLC</p>
              <span className="linkbx">
               . <a target="_blank" href="https://niagaraexports.com/"><FaLink /></a>
              </span>
            </div>
            
          </div>
        
        </Slider>
      </div>
    </>
  );
}
export default Portfolio;