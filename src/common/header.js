import { FaRegClock, FaLocationDot, FaCartPlus, FaPhone } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import {
  LiaFacebookF,
  LiaInstagram,
  LiaLinkedinIn,
  LiaWhatsapp,
  LiaYoutube,
  LiaTwitter,
} from "react-icons/lia";
import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import "../css/header.css";
import { HiMenuAlt1 } from "react-icons/hi";
import { Link } from "react-router-dom";
import Fixedline from "../services/Fixedline";
import { MdOutlinePhone } from "react-icons/md";


function header() {
  function DropdownMenu() {
    let dropBox = document.querySelector(".menu-box-drop");

    if (dropBox.classList.contains("drop-show")) {
      dropBox.classList.remove("drop-show");
    } else {
      dropBox.classList.add("drop-show");
    }
  }
  function DropdownMenuSub(e) {
    let eve = e.target.style.display;
    if (eve === "block") {
      eve = "none";
    } else {
      eve = "block";
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
                <a className="head-link" href="tel:+91 9952141444">
                  <MdOutlinePhone   />
                  &nbsp;&nbsp;&nbsp;&nbsp; +91  99521 41444
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
                  <a className="head-link" href="/contact">
                    <FaRegClock />
                    &nbsp;&nbsp;&nbsp;&nbsp; Office Hours: 10.00 am - 7:00 pm
                  </a>
                </p>
              </div>
            </div>
            <div className="d-none d-md-block col-md-3 col-lg-3">
              <div className="socialicons">
                <a
                  className="head-link sm"
                  href="https://www.facebook.com/infygain/"
                  target="_blank"
                >
                  <LiaFacebookF />
                </a>
                <a
                  className="head-link sm"
                  href="https://www.instagram.com/infygain/"
                  target="_blank"
                >
                  <LiaInstagram />
                </a>
                <a
                  className="head-link sm"
                  href="https://twitter.com/infygain"
                  target="_blank"
                >
                  <LiaTwitter />
                </a>
         
                <a
                  className="head-link sm"
                  href="https://api.whatsapp.com/send/?phone=919952141444&text&type=phone_number&app_absent=0"
                  target="_blank"
                >
                  <LiaWhatsapp />
                </a>
                <a
                  className="head-link sm"
                  href="https://www.linkedin.com/company/infygain-technologies/"
                  target="_blank"
                >
                  <LiaLinkedinIn />
                </a>
                <a
                  className="head-link sm"
                  href="https://www.youtube.com/@infygain6707"
                  target="_blank"
                >
                  <LiaYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main head section */}
        <div className="main-head">
          <div className="main-head-box">
            <div className="logoo-box">
              <Link to="/">
              
              <img
                className="img-fluid1"
                src="/images/icons/infy-logo.svg"
                alt="best web services"
              ></img>
              </Link>
            </div>
            <div className="menu-box">
              <li>
                <Link className="mlink" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="mlink" to="/about">
                  About
                </Link>
              </li>
              <li className="sub">
                <Link className="mlink">
                  Services <IoMdArrowDropdown />
                </Link>
                <div className="submenu">
                  <li>
                    <Link className="mlink" to="/Iotservice">
                      IT Supports
                    </Link>
                  </li>
                  <li>
                    <Link className="mlink" to="/ispservice">
                      ISP Services
                    </Link>
                  </li>
                  <li>
                    <Link className="mlink" to="/ServiceSeo">
                      Web Services
                    </Link>
                  </li>
                </div>
              </li>
              <li>
                <Link className="mlink" to="/mainblogs">
                  Blogs
                </Link>
              </li>
              <li>
                <Link className="mlink" to="/career">
                  Career
                </Link>
              </li>
              <li>
                <Link className="mlink" to="/Partner">
                  Partner
                </Link>
              </li>
              <li>
                <Link className="mlink" to="/contact">
                  Contact
                </Link>
              </li>
            </div>
            {/* <div className="contact-box">
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
            </div> */}
            <div className="enquiry-box">
              <a className="head-link" href="/contact">
                <button className="btn btns">
                  Get a quote &nbsp;&nbsp;<i className="fa fa-arrow-right"></i>
                </button>
              </a>
              <a
                className="head-links"
                target="_blank"
                href="https://infygain.com/onlinestore/"
              >
                <FaCartPlus />
              </a>

              {/* <a className="head-links" target="_blank" href="https://grayquest.com/institute/united-master">
                < FaCcAmazonPay/>
              </a> */}
            </div>

            <div className="dropDownMenu">
              <HiMenuAlt1 role="button" onClick={() => DropdownMenu()} />
            </div>
          </div>
        </div>
      </section>

      <div className="menu-box-drop">
        <li>
          <Link className="mlink" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="mlink" to="/about">
            About
          </Link>
        </li>
        <li className="sub">
          <Link className="mlink " onClick={DropdownMenuSub}>
            Services <IoMdArrowDropdown />
          </Link>
          <div className="submenu">
            <li>
              <Link className="mlink" to="/Iotservice">
                IT Supports
              </Link>
            </li>
            <li>
              <Link className="mlink" to="/ispservice">
                ISP Services
              </Link>
            </li>
            <li>
              <Link className="mlink" to="/ServiceSeo">
                Web Services
              </Link>
            </li>
          </div>
        </li>
        <li>
          <Link className="mlink" to="/mainblogs">
            Blog
          </Link>
        </li>
        <li>
          <Link className="mlink" to="/career">
            Career
          </Link>
        </li>
        <li>
          <Link className="mlink" to="/partner">
            Partner
          </Link>
        </li>
        <li>
          <Link className="mlink" to="/contact">
            Contact
          </Link>
        </li>
        <Fixedline />
      </div>
    </>
  );
}

export default header;
