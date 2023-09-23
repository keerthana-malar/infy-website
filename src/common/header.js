import { FaRegClock, FaLocationDot, FaHeadset, FaSquareXTwitter, FaSquareFacebook, FaSquareInstagram, FaLinkedin, FaSquareWhatsapp, FaSquareYoutube } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import '../css/header.css';

function header() {
  return (
    <section>
      {/* Top head section */}
      <div className="top-head">
        <div className="row">
          <div className="col-lg-2 col-md-2">
          <p><a className="head-link" href="/contact"><FaLocationDot />&nbsp;&nbsp;&nbsp;&nbsp; Coimbatore, Tamil Nadu 641035</a> </p>
          </div>
          <div className="col-lg-2 col-md-2">
            <p><a className="head-link" href="mailto:info@infygain.com"><HiOutlineMail/>&nbsp;&nbsp;&nbsp;&nbsp; info@infygain.com</a></p>
          </div>
          <div className='col-lg-4 col-md-4'>
          </div>
          <div className="col-lg-2 col-md-2">
            <p><a className="head-link" href="#"><FaRegClock/>&nbsp;&nbsp;&nbsp;&nbsp; Office Hours: 9:45 am - 7:30 pm</a></p>
          </div>
          <div className="col-lg-2 col-md-2">
          <a className='head-link sm' href="https://www.facebook.com/infygain/"><FaSquareFacebook/></a>
          <a className='head-link sm' href="https://www.instagram.com/infygain/"><FaSquareInstagram/></a>
          <a className='head-link sm' href="https://twitter.com/infygain"><FaSquareXTwitter/></a>
          <a className='head-link sm' href="https://www.linkedin.com/company/infygain-technologies/"><FaLinkedin/></a>
          <a className='head-link sm' href="https://api.whatsapp.com/send/?phone=919952141444&text&type=phone_number&app_absent=0"><FaSquareWhatsapp/></a>
          <a className='head-link sm' href="https://www.youtube.com/@infygain6707"><FaSquareYoutube/></a>
          </div>
        </div>
      </div>

      {/* Main head section */}
      <div className='main-head'>
        <div className='row'>
          <div className='col-md-2'>
            <div className='logoo-box'>
            <img src="./images/icons/infy-logo.png" alt="infygain logo"></img>
            </div>
          </div>
          <div className='col-md-5'>
            <div className='menu-box'>
                <li><a className='mlink' href="/">home</a></li>
                <li><a className='mlink' href="/about">About us</a></li>
                <li><a className='mlink' href="#">Services</a></li>
                <li><a className='mlink' href="#">Blog</a></li>
                <li><a className='mlink' href="/contact">Contact</a></li>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='contact-box'>
              <div className='row'>
                <div className='col-md-2 query'>
                  <a className='head-link' href="#"><FaHeadset /></a>
                </div>
                <div className='col-md-10'>
                  <p>Have Any Questions?<br></br><span>+91 &nbsp;99342567810</span></p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-2'>
            <div className='enquiry-box'>
            <a className='head-link' href="/contact"><button className='btns'>Get a quote &nbsp;&nbsp;<i className='fa fa-arrow-right'></i></button></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default header;
