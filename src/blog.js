import Banner from './blog/banner';
import  Mainsection from './blog/mainsection';
import "font-awesome/css/font-awesome.css";
import "./css/footer.css";
import { TbArrowBigUpFilled } from "react-icons/tb";

import {
    FaRegClock,
    FaLocationDot,
    FaCartPlus,
    FaPhone
  } from "react-icons/fa6";
  import { IoMdArrowDropdown } from "react-icons/io";
  import { LiaFacebookF, LiaInstagram, LiaLinkedinIn, LiaWhatsapp, LiaYoutube, LiaTwitter } from "react-icons/lia";
  import React from "react";
  import { HiOutlineMail } from "react-icons/hi";
  import "./css/header.css";
  import { HiMenuAlt1 } from "react-icons/hi";
  import { Link } from "react-router-dom";
  import Fixedline from './services/Fixedline';
import { MdOutlinePhone } from 'react-icons/md';
  

function Blogs(){
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };

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
      if(eve === "block"){
          eve="none";
      }
      else{eve = "block" }
     }
    

    return(
        <>
 
        {/* Header */}
        <section>
        {/* Top head section */}
        <div className="top-head  d-none d-md-block">
          <div className="row"> 
            <div className="d-none d-md-block col-md-6 col-lg-3">
              <p>
              <a className="head-link" href="tel:+91 9952141444">
              <MdOutlinePhone   />
                  &nbsp;&nbsp;&nbsp;&nbsp; +91 99521 41444
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
                src="../images/icons/infy-logo.png"
                alt="best isp services"
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
              <a className="head-links" target="_blank"  rel="noopener noreferrer" href="https://infygain.com/onlinestore/">
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
        <Fixedline/>
      </div>

      {/* End Header */}

        <Banner/>
        <Mainsection/>

        {/* Enquiry */}
        <div className="mainenqbx">
        <div className="enqbx-head">
          <h5 className="mini-title main-color">CONTACT US</h5>
          <p className="home-about-ttle">We Always Here To Helps You</p>
        </div>
        <div className="enqbx-main">
          <div className="inn">
            <div className="short-abt">
              <div className="row">
                <div className="col-lg-5">
                  <div className="shortt-img">
                    <img className="img-fluid " src="../images/abt.webp" alt='best web services'></img>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="enqbx2">
                    <form className="enqformm">
                      <div className="row box">
                        <div className="col-lg-6 form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Your name *"
                            required
                          />
                        </div>
                        <div className="col-lg-6 form-group">
                          <input
                            type="phone"
                            className="form-control"
                            placeholder="Phone *"
                            required
                          />
                        </div>
                        <div className="col-lg-6 form-group">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email *"
                            required
                          />
                        </div>
                        <div className="col-lg-6 form-group">
                          <select
                            className="form-control"
                            name="category"
                            required
                          >
                            <option className="text-muted" value="nil">
                              Requirement Category
                            </option>
                            <optgroup label="IT Services">
                              <option value="Hardware">Hardware Issues</option>
                              <option value="Software">
                                Software Problems
                              </option>
                              <option value="Network">
                                Network Troubleshooting
                              </option>
                            </optgroup>
                            <optgroup label="ISP Services">
                              <option value="Connection">
                                Connection Problems
                              </option>
                              <option value="Speed">Slow Internet Speed</option>
                            </optgroup>
                            <optgroup label="Web Services">
                              <option value="Website">
                                Website Development
                              </option>
                              <option value="Hosting">Web Hosting</option>
                              <option value="Domain">
                                Domain Registration
                              </option>
                            </optgroup>
                          </select>
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Subject"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="textarea"
                            className="form-control"
                            placeholder="Your Message"
                            required
                          />
                        </div>

                        <div className="send-enquiry">
                          <button className="btns send-enquiry">
                            Send Message &nbsp;
                            <span className="fa fa-arrow-right"></span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="maineqem"></div>

        {/* Footer */}
        <footer>
      <div className="mainfooter">
        <div className="container">
          <div className="small-box">
            <div className="row small">
              <div className="col-lg-3  name">
                <p className="infy">
                  <img
                    className="img-fluid"
                    src="../images/others/logo-alt.svg"
                    alt="best it supports"
                  ></img>
                </p>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-12  nam nam1">
                <p className="call">
                  <b>CALL FOR SUPPORT</b>
                </p>
                <p className="phone">
                <a className="head-link-footer" href="tel:+91 9952141444">+91 99521 41444</a><br></br>
                <a className="head-link-footer" href="tel:+91 9952141444">+91 9087724444</a>
                </p>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-12 nam">
                <p className="infyy">
                  <b>ADDRESS</b>
                  <br></br>
                </p>
                <p className="hari text-muted">
                  {" "}
                  <Link className="cmn-footer text-muted"  to={"/contact"}>
                  Hari complex opp.prozone mall, Sathy Rd, Saravanampatti,
                  Coimbatore, Tamil Nadu 641035</Link>
                </p>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-12  nam-icon">
                <p className="infyy-icon">
                  <b>FOLLOW US </b>
                  <br></br>
                </p>
                <div className="infyicon">
                  <a
                    target="_blank"  rel="noopener noreferrer"
                    href="https://www.facebook.com/infygain/"
                    className="infyicon infyicon1"
                  >
                    <i className="fa fab fa-facebook"></i>
                  </a>
                  <a
                    target="_blank"  rel="noopener noreferrer"
                    href="https://wa.me/919952141444"
                    className="infyicon infyicon1"
                  >
                    <i className="fa fab fa-whatsapp"></i>
                  </a>
                  <a
                    target="_blank"  rel="noopener noreferrer"
                    href="https://www.instagram.com/infygain/"
                    className="infyicon infyicon1"
                  >
                    <i className="fa fab fa-instagram"></i>
                  </a>
                  <a
                    target="_blank"  rel="noopener noreferrer"
                    href="https://www.linkedin.com/company/infygain-technologies/"
                    className="infyicon infyicon1"
                  >
                    <i className="fa fab fa-linkedin"></i>
                  </a>
                  <a
                    target="_blank"  rel="noopener noreferrer"
                    href="https://twitter.com/infygain"
                    className="infyicon infyicon1"
                  >
                    <i className="fa fab fa-twitter"></i>
                  </a>
                  <a
                    target="_blank"  rel="noopener noreferrer"
                    href="https://www.youtube.com/@infygain6707"
                    className="infyicon infyicon1"
                  >
                    <i className="fa fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="smallbox-1">
            <div className="row">
              <div className="col-xs-6 col-sm-3 mb-3 ">
                <p className="mini-title one">Our Services</p>
                <ul>
                  <li className="quicklinks">
                    <Link to="/Iotservice">IT Supports</Link>
                  </li>
                  <li className="quicklinks">
                    <Link to="/ServiceSeo">Website / App</Link>
                  </li>
                  <li className="quicklinks">
                    <Link to="/ispservice">ISP Services</Link>
                  </li>
                </ul>
              </div>
              <div className="col-xs-6 col-sm-3">
                <p className="mini-title two">Quick Links</p>
                <ul className="text-muted quicklinks mb-5">
                  {/* <li> <Link to="/">Home</Link></li> */}
                  <li>
                    {" "}
                    <Link to="/about">About Us</Link>
                  </li>
                  {/* <li> <Link to="/service">Services</Link></li> */}
                  <li>
                    <Link to="/mainblogs">Blog</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/contact">Contact Us</Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      target="_blank"
                      to="https://infygain.com/onlinestore/"
                    >
                      Online Store
                    </Link>
                  </li>
                  {/* <li> <Link to="/contact">Book Services</Link></li> */}
                </ul>
              </div>
              <div className="col-xs-6 col-sm-3">
                <p className="mini-title three">Address</p>
                <p className="address">
                <Link className="cmn-footer text-muted"  to={"/contact"}>
                  <p>
                    Hari complex opp.prozone mall, Sathy Rd, Saravanampatti,
                    Coimbatore, Tamil Nadu 641035
                  </p></Link>
                </p>
                <hr className="hrline"></hr>
                <p className="address ph"> <a className="link-foot" href="tel:+91 9952141444">+91 &nbsp;9952141444 </a></p>
                <p className="address ph"> <a className="link-foot" href="tel:+91  9087724444">+91 &nbsp;9087724444 </a></p>
              

                <p className="address">
                  <b>info@infygain.com</b>
                </p>
              </div>
              <div className="col-xs-6 col-sm-3">
                <p className="mini-title four">Legal Links</p>
                <ul className="text-muted legallinks">
                  <li className="quicklinks"><Link to="/privacypolicy">Privacy Policy</Link></li>
                  <li className="quicklinks"><Link to="/termspage">Terms and Conditions</Link></li>
                  <li className="quicklinks"><Link to="/delivery">Delivery and Shipping Policy</Link></li>
                  <li className="quicklinks"><Link to="/refund">Refund and Cancellation Policy</Link></li>
                  <li className="quicklinks"><Link to="/quality">Quality Policy</Link></li>
                </ul>
              </div>
            </div>
          </div>


          {/* <div className="socialmediaicons">
            <p className="mini-title follow">Follow Us On</p>
            <div className="iconss">
              <a
                href="https://www.facebook.com/your-page-url"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-facebook facebook"></i>
              </a>
              <a
                className=""
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-twitter twitter"></i>
              </a>
              <a
                className=""
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-instagram instagram"></i>
              </a>
              <a
                className=""
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-whatsapp whatsapp"></i>
              </a>
              <a
                className=""
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-linkedin linkedin"></i>
              </a>
              <a
                className=""
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-youtube youtube"></i>
              </a>
              <hr className="text-muted"></hr>
              <div className="text-muted copyright">
                <div className="row">
                  <div className="col-md-6 footercontent">
                    Copyright © 2023 Infygain. All Rights Reserved.
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div className="topmenu" onClick={scrollToTop}>
        <svg
          className="testIcon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 357.6 401.37"
        >
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <path
                class="cls-3"
                d="M357.6,282.36V119a37.33,37.33,0,0,0-18.66-32.33L197.47,5a37.32,37.32,0,0,0-37.33,0L18.67,86.68A37.33,37.33,0,0,0,0,119V282.36a37.32,37.32,0,0,0,18.67,32.33l141.47,81.68a37.32,37.32,0,0,0,37.33,0l141.47-81.68A37.31,37.31,0,0,0,357.6,282.36Z"
              />
            </g>
          </g>
        </svg>

        <TbArrowBigUpFilled className="topIcon" />
      </div>
    </footer>
        {/* End Footer */}
        </>
    );
}

export default Blogs;