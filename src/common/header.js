import {
  FaRegClock,
  FaLocationDot,
  FaCartPlus,
  FaHeadset
} from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { LiaFacebookF, LiaInstagram, LiaLinkedinIn, LiaWhatsapp, LiaYoutube, LiaTwitter } from "react-icons/lia";
import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import "../css/header.css";
import { HiMenuAlt1 } from "react-icons/hi";
import { Link } from "react-router-dom";

function header() {
  function DropdownMenu() {
    let dropBox = document.querySelector(".menu-box-drop");

    if (dropBox.classList.contains("drop-show")) {
      dropBox.classList.remove("drop-show");
    } else {
      dropBox.classList.add("drop-show");
    }
  }
 function DropdownMenuSub(e){
  let eve = e.target.style.display;
  if(eve == "block"){
      eve="none";
  }
  else{eve = "block" }
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
                  <LiaFacebookF />
                </a>
                <a
                  className="head-link sm"
                  href="https://www.instagram.com/infygain/"
                >
                  <LiaInstagram />
                </a>
                <a className="head-link sm" href="https://twitter.com/infygain">
                  <LiaTwitter />
                </a>
                <a
                  className="head-link sm"
                  href="https://www.linkedin.com/company/infygain-technologies/"
                >
                  <LiaLinkedinIn />
                </a>
                <a
                  className="head-link sm"
                  href="https://api.whatsapp.com/send/?phone=919952141444&text&type=phone_number&app_absent=0"
                >
                  <LiaWhatsapp />
                </a>
                <a
                  className="head-link sm"
                  href="https://www.youtube.com/@infygain6707"
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
              <img
                className="img-fluid"
                src="./images/icons/infy-logo.png"
                alt="infygain logo"
              ></img>
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
                  Services <IoMdArrowDropdown/>
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
                <Link className="mlink" to="/blogs">
                  Blogs
                </Link>
              </li>
              <li>
                <Link className="mlink" to="/blogs">
                  Career
                </Link>
              </li>
              <li>
                <Link className="mlink" to="/blogs">
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
              <a className="head-link" target="_blank" href="https://infygain.com/onlinestore/">
                <FaCartPlus/>
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
                  Services <IoMdArrowDropdown/>
                </Link>
                <div className="submenu">
                    <li>
                      <Link className="mlink" to="/Iotservice">
                        IT Supports
                      </Link>
                    </li>
                    <li>
                      <Link className="mlink" to="/ispservice">
                        ISP
                      </Link>
                    </li>
                    <li>
                      <Link className="mlink" to="/ServiceSeo">
                        Web / App
                      </Link>
                    </li>
                </div>
              </li>
        <li>
          <Link className="mlink" to="/blogs">
            Blog
          </Link>
        </li>
        <li>
          <Link className="mlink" to="/contact">
            Contact
          </Link>
        </li>
      </div>
    </>
  );
}

export default header;
