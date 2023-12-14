import { BsFacebook, BsTwitter, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";

function Webservice() {
  return (
    <>
      <div className="mainheadbx">
        <div className="headbx1" data-aos="fade-left">
          <div className="imgbox1">
            <img className="box1 img-fluid" alt="best seo services" data-aos="fade-up" data-aos-duration="3000" src="./images/seo/flight.png"></img>
            <img className="box2 img-fluid" alt="top seo services" data-aos="zoom-in" data-aos-duration="2000" src="./images/seo/target.png"></img>
          </div>
        </div>
        <div className="headbx2">
          <p className="head-title">
            We make your <br></br>brand story <br></br>
            <span>more powerful</span>
          </p>
          <p className="head-con">
            "We infygains offer comprehensive web design 
            and development services that are predominantly 
            tailored to meet the unique needs of our customers."
            
          </p>
          <Link to="/contact"><div className="btns head-btn">GET YOUR FREE CONSULT</div></Link>
          <a className="mid-title headlink" target="_blank"  rel="noopener noreferrer" href="https://infygain.com">
            www.infygain.com
          </a>
          <div className="soicon">
            <li>
              <a target="_blank"  rel="noopener noreferrer" href="https://www.facebook.com/infygain/">
                <BsFacebook />
              </a>
            </li>
            <li>
              <a target="_blank"  rel="noopener noreferrer" href="https://twitter.com/infygain">
                <BsTwitter />
              </a>
            </li>
            <li>
              <a target="_blank"  rel="noopener noreferrer" href="https://www.instagram.com/infygain/">
                <BsInstagram />
              </a>
            </li>
            <li>
              <a target="_blank"   rel="noopener noreferrer" href="https://wa.me/919952141444">
                <BsWhatsapp />
              </a>
            </li>
          </div>
          <div className="rock">
            <img className="img-fluid" alt="seo services" data-aos="fade-up-right" data-aos-duration="3000"  src="./images/seo/rockett.png"></img>
          </div>
        </div>
      </div>
    </>
  );
}
export default Webservice;
