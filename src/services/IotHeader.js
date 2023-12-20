import {
    FaRegClock,
    FaLocationDot,
    FaCartPlus,
    FaPhone,
  } from "react-icons/fa6";
  import { IoMdArrowDropdown } from "react-icons/io";
  import { LiaFacebookF, LiaInstagram, LiaLinkedinIn, LiaWhatsapp, LiaYoutube, LiaTwitter } from "react-icons/lia";
  import React from "react";
  import { HiOutlineMail } from "react-icons/hi";
  import "../css/IotHeader.css";
  import { HiMenuAlt1 } from "react-icons/hi";
  import { Link } from "react-router-dom";
  import Fixedline from './Fixedline';
import { MdOutlinePhone } from "react-icons/md";

import { Tooltip as ReactTooltip } from "react-tooltip";
  
  function IotHeader() {
    function DropdownMenu() {
      let dropBox = document.querySelector(".iot-menu-box-drop");
  
      if (dropBox.classList.contains("iot-drop-show")) {
        dropBox.classList.remove("iot-drop-show");
      } else {
        dropBox.classList.add("iot-drop-show");
      }
    }
   function DropdownMenuSub(e){
    let eve = e.target.style.display;
    if(eve === "block"){
        eve="none";
    }
    else{eve = "block" }
   }
  
  
    return (
      <>
        <section>
          {/* Top head section */}
          <div className="iot-top-head  d-none d-md-block">
            <div className="row">
              <div className="d-none d-md-block col-md-6 col-lg-3">
                <p>
                <a className="iot-head-link" href="tel:+91 9952141444">
                <MdOutlinePhone   />
                  &nbsp;&nbsp;&nbsp;&nbsp; +91 99521 41444
                  </a>{" "}
                </p>
              </div>
              <div className="d-none d-md-block col-md-3 col-lg-3">
                <p>
                  <a className="iot-head-link" href="mailto:info@infygain.com">
                    <HiOutlineMail />
                    &nbsp;&nbsp;&nbsp;&nbsp; info@infygain.com
                  </a>
                </p>
              </div>
              <div className="d-none d-lg-block col-lg-3">
                <div className="iot-headhr">
                  <p>
                    <a className="iot-head-link" href="/contact">
                      <FaRegClock />
                      &nbsp;&nbsp;&nbsp;&nbsp; Office Hours: 9:45 am - 7:30 pm
                    </a>
                  </p>
                </div>
              </div>
              <div className="d-none d-md-block col-md-3 col-lg-3">
                {/* <div className="iot-socialicons">
                  <a
                    className="iot-head-link iot-sm"
                    href="https://www.facebook.com/infygain/"
                    target="_blank"  rel="noopener noreferrer"
                  >
                    <LiaFacebookF />
                  </a>
                  <a
                    className="iot-head-link iot-sm"
                    href="https://www.instagram.com/infygain/"
                    target="_blank"  rel="noopener noreferrer"
                  >
                    <LiaInstagram />
                  </a>
                  <a className="iot-head-link iot-sm" href="https://twitter.com/infygain"  target="_blank"  rel="noopener noreferrer">
                    <LiaTwitter />
                  </a>
                
                  <a
                    className="iot-head-link iot-sm"
                    href="https://api.whatsapp.com/send/?phone=919952141444&text&type=phone_number&app_absent=0"
                    target="_blank"  rel="noopener noreferrer"
                  >
                    <LiaWhatsapp />
                  </a>
                  <a
                    className="iot-head-link iot-sm"
                    href="https://www.linkedin.com/company/infygain-technologies/"
                    target="_blank"  rel="noopener noreferrer"
                  >
                    <LiaLinkedinIn />
                  </a>
                  <a
                    className="iot-head-link iot-sm"
                    href="https://www.youtube.com/@infygain6707"
                    target="_blank"  rel="noopener noreferrer"
                  >
                    <LiaYoutube />
                  </a>
                </div> */}
                 <div className="iot-socialicons">
                <a
                  className="iot-head-link iot-sm"
                  href="https://www.facebook.com/infygain/"
                  target="_blank"
                >
                  <LiaFacebookF data-tooltip-id="my-tooltip-4"/>
                </a>
                <ReactTooltip
                 id="my-tooltip-4"
                 place="bottom"
                 content="Facebook"/>
                <a
                  className="iot-head-link iot-sm"
                  href="https://www.instagram.com/infygain/"
                  target="_blank"
                >
                  <LiaInstagram  data-tooltip-id="my-tooltip-5"/>
                </a>
                <ReactTooltip
                 id="my-tooltip-5"
                 place="bottom"
                 content="Instagram"/>
                <a
                  className="iot-head-link iot-sm"
                  href="https://twitter.com/infygain"
                  target="_blank"
                >
                  <LiaTwitter data-tooltip-id="my-tooltip-6" />
                </a>
                <ReactTooltip
                 id="my-tooltip-6"
                 place="bottom"
                 content="Twitter"/>
         
                <a
                  className="iot-head-link iot-sm"
                  href="https://api.whatsapp.com/send/?phone=919952141444&text&type=phone_number&app_absent=0"
                  target="_blank"
                >
                  <LiaWhatsapp data-tooltip-id="my-tooltip-7"/>
                </a>
                <ReactTooltip
                 id="my-tooltip-7"
                 place="bottom"
                 content="Whatsapp"/>
                <a
                  className="iot-head-link iot-sm"
                  href="https://www.linkedin.com/company/infygain-technologies/"
                  target="_blank"
                >
                  <LiaLinkedinIn data-tooltip-id="my-tooltip-8"/>
                </a>
                <ReactTooltip
                 id="my-tooltip-8"
                 place="bottom"
                 content="LinkedinIn"/>
                <a
                  className="iot-head-link iot-sm"
                  href="https://www.youtube.com/@infygain6707"
                  target="_blank"
                >
                  <LiaYoutube data-tooltip-id="my-tooltip-9"/>
                </a>
                <ReactTooltip
                 id="my-tooltip-9"
                 place="bottom"
                 content="Youtube"/>
              </div>
              </div>
            </div>
          </div>
  
          {/* Main head section */}
          <div className="iot-main-head">
            <div className="iot-main-head-box">
              <div className="iot-logoo-box">
                <a href="/">
                <img
                  className="img-fluid1"
                  src="/images/others/logo-alt.svg"
                  alt="best it supports"
                  title="infygain logo"
                ></img></a>
              </div>
              <div className="iot-menu-box">
                <li>
                  <Link className="iot-mlink" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="iot-mlink" to="/about">
                    About
                  </Link>
                </li>
                <li className="iot-sub">
                  <Link className="iot-mlink">
                    Services <IoMdArrowDropdown/>
                  </Link>
                  <div className="iot-submenu">
                      <li>
                        <Link className="iot-mlink" to="/Iotservice">
                          IT Supports
                        </Link>
                      </li>
                      <li>
                        <Link className="iot-mlink" to="/ispservice">
                          ISP Services
                        </Link>
                      </li>
                      <li>
                        <Link className="iot-mlink" to="/ServiceSeo">
                          Web Services
                        </Link>
                      </li>
                  </div>
                </li>
                <li>
                  <Link className="iot-mlink" to="/mainblogs">
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link className="iot-mlink" to="/career">
                    Career
                  </Link>
                </li>
                <li>
                  <Link className="iot-mlink" to="/Partner">
                    Partner
                  </Link>
                </li>
                <li>
                  <Link className="iot-mlink" to="/contact">
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
              <div className="iot-enquiry-box">
                <a className="iot-head-link" href="/contact">
                  <button className="iot-btn iot-btnss">
                    Get a quote &nbsp;&nbsp;<i className="fa fa-arrow-right"></i>
                  </button>
                </a>
                <a className="iot-head-link" target="_blank"  rel="noopener noreferrer" href="https://infygain.com/onlinestore/">
                  <FaCartPlus/>
                </a>
                {/* <a className="iot-head-link" target="_blank" href="https://grayquest.com/institute/united-master">
                < FaCcAmazonPay/>
              </a> */}
              </div>
            
              <div className="iot-dropDownMenu">
                <HiMenuAlt1 role="button" onClick={() => DropdownMenu()} />
              </div>
            </div>
          </div>
        </section>
  
        <div className="iot-menu-box-drop">
          <li>
            <Link className="iot-mlink" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="iot-mlink" to="/about">
              About
            </Link>
          </li>
          <li className="iot-sub">
                  <Link className="iot-mlink " onClick={DropdownMenuSub}>
                    Services <IoMdArrowDropdown/>
                  </Link>
                  <div className="iot-submenu">
                      <li>
                        <Link className="iot-mlink" to="/Iotservice">
                          IT Supports
                        </Link>
                      </li>
                      <li>
                        <Link className="iot-mlink" to="/ispservice">
                          ISP Services
                        </Link>
                      </li>
                      <li>
                        <Link className="iot-mlink" to="/ServiceSeo">
                          Web Services
                        </Link>
                      </li>
                  </div>
                </li>
          <li>
            <Link className="iot-mlink" to="/career">
              Career
            </Link>
          </li>
          <li>
            <Link className="iot-mlink" to="/Partner">
              Partner
            </Link>
          </li>
          <li>
            <Link className="iot-mlink" to="/blogs">
              Blog
            </Link>
          </li>
          <li>
            <Link className="iot-mlink" to="/contact">
              Contact
            </Link>
          </li>
          <Fixedline/>     
        </div>
      </>
    );
  }
  
  export default IotHeader;