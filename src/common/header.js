import {
  FaRegClock,
  FaLocationDot,
  FaHeadset,
  FaSquareXTwitter,
  FaSquareFacebook,
  FaSquareInstagram,
  FaLinkedin,
  FaSquareWhatsapp,
  FaSquareYoutube,
} from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import "../css/header.css";
import { HiMenuAlt1 } from "react-icons/hi";
// import {Link} from 'react-router-dom';

function header() {
  function DropdownMenu() {
    let dropBox = document.querySelector(".menu-box-drop");

    if (dropBox.classList.contains("drop-show")) {
      dropBox.classList.remove("drop-show");
    } else {
      dropBox.classList.add("drop-show");
    }
  }

  return (
    <>
      <section>
        {/* Top head section */}
        <div className="top-head  d-none d-md-block">
          <div className="row">
            <div className="d-none d-md-block col-md-6 col-lg-3">
              <p>
                <a className="head-link" href="/contact">
                  <FaLocationDot />
                  &nbsp;&nbsp;&nbsp;&nbsp; Coimbatore, Tamil Nadu 641035
                </a>{" "}
              </p>
            </div>
            <div className="d-none d-md-block col-md-3 col-lg-3">
              <p>
                <a className="head-link" href="mailto:info@infygain.com">
                  <HiOutlineMail />
                  &nbsp;&nbsp;&nbsp;&nbsp; info@infygain.com
                </a>
              </p>
            </div>
            <div className="d-none d-lg-block col-lg-3">
              <div className="headhr">
                <p>
                  <a className="head-link" href="#">
                    <FaRegClock />
                    &nbsp;&nbsp;&nbsp;&nbsp; Office Hours: 9:45 am - 7:30 pm
                  </a>
                </p>
              </div>
            </div>
            <div className="d-none d-md-block col-md-3 col-lg-3">
              <div className="socialicons">
              <a
                className="head-link sm"
                href="https://www.facebook.com/infygain/"
              >
                <FaSquareFacebook />
              </a>
              <a
                className="head-link sm"
                href="https://www.instagram.com/infygain/"
              >
                <FaSquareInstagram />
              </a>
              <a className="head-link sm" href="https://twitter.com/infygain">
                <FaSquareXTwitter />
              </a>
              <a
                className="head-link sm"
                href="https://www.linkedin.com/company/infygain-technologies/"
              >
                <FaLinkedin />
              </a>
              <a
                className="head-link sm"
                href="https://api.whatsapp.com/send/?phone=919952141444&text&type=phone_number&app_absent=0"
              >
                <FaSquareWhatsapp />
              </a>
              <a
                className="head-link sm"
                href="https://www.youtube.com/@infygain6707"
              >
                <FaSquareYoutube />
              </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main head section */}
        <div className="main-head">
          <div className="main-head-box">
            <div className="logoo-box">
              <img
                className="img-fluid"
                src="./images/icons/infy-logo.png"
                alt="infygain logo"
              ></img>
            </div>
            <div className="menu-box">
              <li>
                <a className="mlink" href="/">
                  home
                </a>
              </li>
              <li>
                <a className="mlink" href="/about">
                  About us
                </a>
              </li>
              <li>
                <a className="mlink" href="#">
                  Services
                </a>
              </li>
              <li>
                <a className="mlink" href="#">
                  Blog
                </a>
              </li>
              <li>
                <a className="mlink" href="/contact">
                  Contact
                </a>
              </li>
            </div>
            <div className="contact-box">
              <div className="row align-items-center">
                <div className="col-md-2 query">
                  <a className="head-link" href="#">
                    <FaHeadset />
                  </a>
                </div>
                <div className="col-md-10 q-cont">
                  <p>
                    Have Any Questions?<br></br>
                    <span className="">+91 &nbsp;99342567810</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="enquiry-box">
              <a className="head-link" href="/contact">
                <button className="btns">
                  Get a quote &nbsp;&nbsp;<i className="fa fa-arrow-right"></i>
                </button>
              </a>
            </div>
            <div className="dropDownMenu">
              <HiMenuAlt1 role="button" onClick={() => DropdownMenu()} />
            </div>
          </div>
        </div>
      </section>

      <div className="menu-box-drop">
        <li>
          <a className="mlink" href="/">
            home
          </a>
        </li>
        <li>
          <a className="mlink" href="/about">
            About us
          </a>
        </li>
        <li>
          <a className="mlink" href="#">
            Services
          </a>
        </li>
        <li>
          <a className="mlink" href="#">
            Blog
          </a>
        </li>
        <li>
          <a className="mlink" href="/contact">
            Contact
          </a>
        </li>
      </div>
    </>
  );
}

export default header;
