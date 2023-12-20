import React from "react";
import "font-awesome/css/font-awesome.css";
import '../css/IotFooter.css'
import { Link } from "react-router-dom";
import { TbArrowBigUpFilled } from "react-icons/tb";

import { Tooltip as ReactTooltip } from "react-tooltip";

function IotFooter() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const openGoogleMaps = () => {
    const address = "Hari complex opp.prozone mall, Sathy Rd, Saravanampatti, Coimbatore, Tamil Nadu 641035";
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps?q=${encodedAddress}`, "_blank");
  };
  return (
    <footer>
      <div className="iot-mainfooter">
        <div className="container">
          <div className="iot-small-box">
            <div className="row iot-small">
              <div className="col-lg-3  iot-name">
                <p className="iot-infy">
                  <img
                    className="img-fluid"
                    src="/images/others/logo-alt.svg"
                    alt="best it services"title="Infygain logo"
                  ></img>
                </p>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-12  iot-nam iot-nam1">
                <p className="iot-call">
                  <b>CALL FOR SUPPORT</b>
                </p>
        
                <p className="iot-phone">
                <a  href="tel:+91 9952141444"> +91 99521&nbsp;&nbsp;&nbsp;41444</a><br></br>
                <a  href="tel:+91 9952141444">+91 90877&nbsp;&nbsp;&nbsp;24444</a>
                </p>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-12 iot-nam">
                <p className="iot-infyy">
                  <b>ADDRESS</b>
                  <br></br>
                </p>
                <p className="iot-hari text-muted" >
              
                  <p className="iot-addr" onClick={openGoogleMaps}>
                  Hari complex opp.prozone mall, Sathy Rd, Saravanampatti,
                  Coimbatore, Tamil Nadu 641035.</p>
                </p>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-12  iot-nam-icon">
                <p className="iot-infyy-icon">
                  <b>FOLLOW US </b>
                  <br></br>
                </p>
                <div className="iot-infyicon">
                  <a
                    target="_blank"  rel="noopener noreferrer"
                    href="https://www.facebook.com/infygain/"
                    className="iot-infyicon iot-infyicon1"
                  >
                    <i data-tooltip-id="my-tooltip-11" className="fa fab fa-facebook"></i>
                  </a>
                      <ReactTooltip
                    id="my-tooltip-11"
                    place="bottom"
                    content="Facebook"/>
                  <a
                    target="_blank"  rel="noopener noreferrer"
                    href="https://wa.me/919952141444"
                    className="iot-infyicon iot-infyicon1"
                  >
                    <i data-tooltip-id="my-tooltip-12" className="fa fab fa-whatsapp"></i>
                  </a>
                  <ReactTooltip
                    id="my-tooltip-12"
                    place="bottom"
                    content="Whatsapp"/>
                  <a
                    target="_blank"  rel="noopener noreferrer"
                    href="https://www.linkedin.com/company/infygain-technologies/"
                    className="iot-infyicon iot-infyicon1"
                  >
                    <i data-tooltip-id="my-tooltip-13" className="fa fab fa-linkedin"></i>
                  </a>
                  <ReactTooltip
                    id="my-tooltip-13"
                    place="bottom"
                    content="Linkedin"/>
                  <a
                    target="_blank"  rel="noopener noreferrer"
                    href="https://www.instagram.com/infygain/"
                    className="iot-infyicon iot-infyicon1"
                  >
                    <i data-tooltip-id="my-tooltip-14" className="fa fab fa-instagram"></i>
                  </a>
                  <ReactTooltip
                    id="my-tooltip-14"
                    place="bottom"
                    content="Instagram"/>
                 
                  <a
                    target="_blank"  rel="noopener noreferrer"
                    href="https://twitter.com/infygain"
                    className="iot-infyicon iot-infyicon1"
                  >
                    <i data-tooltip-id="my-tooltip-15" className="fa fab fa-twitter"></i>
                  </a>
                  <ReactTooltip
                    id="my-tooltip-15"
                    place="bottom"
                    content="Twitter"/>
                  <a
                    target="_blank"  rel="noopener noreferrer"
                    href="https://www.youtube.com/@infygain6707"
                    className="iot-infyicon iot-infyicon1"
                  >
                    <i data-tooltip-id="my-tooltip-16" className="fa fab fa-youtube"></i>
                  </a>
                  <ReactTooltip
                    id="my-tooltip-16"
                    place="bottom"
                    content="Youtube"/>
                </div>
              </div>
            </div>
          </div>

          <div className="iot-smallbox-1">
            <div className="row">
              <div className="col-xs-6 col-sm-3 mb-3 ">
                <p className="iot-mini-title iot-one">Our Services</p>
                <ul>
                  <li className="iot-quicklinks">
                    <Link to="/Iotservice">IT Supports</Link>
                  </li>
                  <li className="iot-quicklinks">
                    <Link to="/ServiceSeo">Website / App</Link>
                  </li>
                  <li className="iot-quicklinks">
                    <Link to="/ispservice">ISP Services</Link>
                  </li>
                </ul>
              </div>
              <div className="col-xs-6 col-sm-3">
                <p className="iot-mini-title iot-two">Quick Links</p>
                <ul className="text-muted iot-quicklinks mb-5">
                  {/* <li> <Link to="/">Home</Link></li> */}
                  <li>
                    {" "}
                    <Link to="/about">About Us</Link>
                  </li>
                  {/* <li> <Link to="/service">Services</Link></li> */}
                  <li>
                    <Link to="/">Blog</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/contact">Contact Us</Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      target="_blank"  rel="noopener noreferrer"
                      to="https://infygain.com/onlinestore/"
                    >
                      Online Store
                    </Link>
                  </li>
                  {/* <li> <Link to="/contact">Book Services</Link></li> */}
                </ul>
              </div>
              <div className="col-xs-6 col-sm-3">
                <p className="iot-mini-title iot-three">Address</p>
                <p className="iot-address">
                <p className="cmn-footer text-muted">
                <a
                    href="#"
                    onClick={() =>
                      openGoogleMaps(
                        "Hari complex opp.prozone mall, Sathy Rd, Saravanampatti, Coimbatore, Tamil Nadu 641035"
                      )
                    }
                    style={{ color: "white" }}
                  >
                    Hari complex opp.prozone mall, Sathy Rd, Saravanampatti,
                    Coimbatore, Tamil Nadu 641035.
                  </a></p>
                </p>
                <hr className="iot-hrline"></hr>
                <p className="iot-address iot-ph"> <a className="link-foot" href="tel:+91 9952141444">+91 &nbsp;99521&nbsp;&nbsp;&nbsp;41444</a></p>
                <p className="iot-address iot-ph"> <a className="link-foot" href="tel:+91 9087724444">+91 &nbsp;90877&nbsp;&nbsp;&nbsp;24444</a></p>
                <p className="iot-address">
                <a className="link-foot" href="mailto:info@infygain.com">
                info@infygain.com</a>
                  {/* <b>info@infygain.com</b> */}
                </p>
              </div>
              <div className="col-xs-6 col-sm-3">
                <p className="iot-mini-title iot-four">Legal Links</p>
                <ul className="text-muted iot-legallinks">
                  <li><Link to="/privacypolicy">Privacy Policy</Link></li>
                  <li><Link to="/termspage">Terms and Conditions</Link></li>
                  <li><Link to="/delivery">Delivery and Shipping Policy</Link></li>
                  <li><Link to="/refund">Refund and Cancellation Policy</Link></li>
                  <li><Link to="/quality">Quality Policy</Link></li>
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
      <div className="iot-topmenu" onClick={scrollToTop}>
        <svg
          className="iot-testIcon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 357.6 401.37"
        >
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <path
                class="iot-cls-3"
                d="M357.6,282.36V119a37.33,37.33,0,0,0-18.66-32.33L197.47,5a37.32,37.32,0,0,0-37.33,0L18.67,86.68A37.33,37.33,0,0,0,0,119V282.36a37.32,37.32,0,0,0,18.67,32.33l141.47,81.68a37.32,37.32,0,0,0,37.33,0l141.47-81.68A37.31,37.31,0,0,0,357.6,282.36Z"
              />
            </g>
          </g>
        </svg>

        <TbArrowBigUpFilled className="iot-topIcon" />
      </div>
    </footer>
  );
}

export default IotFooter;
