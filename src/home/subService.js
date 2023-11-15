import "../css/home.css";
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { BsPlay } from "react-icons/bs";
import { Link } from "react-router-dom";
function SubService() {
  const [showVideo, setShowVideo] = useState(false);

  const openVideo = () => {
    setShowVideo(true);
  };

  const closeVideo = () => {
    setShowVideo(false);
  };

  function handleHover(item) {
    let svg = document.querySelectorAll(".cls-1");
    svg[item].style.fill = "#1f3195";
  }
  function handleHoverOut(item) {
    let svg = document.querySelectorAll(".cls-1");
    svg[item].style.fill = "#ee6196";
  }

  return (
    <>
      <div className="subServiceSec text-light">
        <div className="container">
          <div className="subServiceTop">
            <p className="home-ser-con-pink text-center">Our Services</p>
            <p className=" text-center home-ser-con">
              How why Help of Your Business <br></br>Grow And Successful
            </p>
          </div>
          <div className="subServiceBox row">
            <div className="col-sm-12 col-md-6 col-xl-3 subServiceBoxInn">
              <svg className="hexShape">
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <path
                      className="cls-1"
                      d="M357.6,282.36V119a37.33,37.33,0,0,0-18.66-32.33L197.47,5a37.32,37.32,0,0,0-37.33,0L18.67,86.68A37.33,37.33,0,0,0,0,119V282.36a37.32,37.32,0,0,0,18.67,32.33l141.47,81.68a37.32,37.32,0,0,0,37.33,0l141.47-81.68A37.31,37.31,0,0,0,357.6,282.36Z"
                    />
                  </g>
                </g>
              </svg>
              <img className="hexIcon" src="/images/icons/cloud.png" alt="best Enterprise Solutions"></img>
              <Link to={"/iotservice"}>
                <div
                  className="subServiceCont service1"
                  onMouseOver={() => {
                    handleHover(0);
                  }}
                  onMouseLeave={() => {
                    handleHoverOut(0);
                  }}
                >
                  <p className="mid-title subser-title">Enterprise Solutions</p>
                  <li>Laptop Services</li>
                  <li>Desktop Services</li>
                  <li>Server Services</li>
                </div>
              </Link>
            </div>
            <div className="col-sm-12 col-md-6 col-xl-3 subServiceBoxInn">
              <svg className="hexShape">
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <path
                      className="cls-1"
                      d="M357.6,282.36V119a37.33,37.33,0,0,0-18.66-32.33L197.47,5a37.32,37.32,0,0,0-37.33,0L18.67,86.68A37.33,37.33,0,0,0,0,119V282.36a37.32,37.32,0,0,0,18.67,32.33l141.47,81.68a37.32,37.32,0,0,0,37.33,0l141.47-81.68A37.31,37.31,0,0,0,357.6,282.36Z"
                    />
                  </g>
                </g>
              </svg>
              <img
                className="hexIcon"
                src="/images/icons/data-security.png"
                alt="best Security Solutions"
              ></img>
              <Link to={"/iotservice"}>
                <div
                  className="subServiceCont service2"
                  onMouseOver={() => {
                    handleHover(1);
                  }}
                  onMouseLeave={() => {
                    handleHoverOut(1);
                  }}
                >
                  <p className="mid-title subser-title">Security Solutions</p>
                  <li>CCTV Services</li>
                  <li>Biometrics</li>
                  <li>Firewall</li>
                </div>
              </Link>
            </div>
            <div className="col-sm-12 col-md-6 col-xl-3 subServiceBoxInn">
              <svg className="hexShape">
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <path
                      className="cls-1"
                      d="M357.6,282.36V119a37.33,37.33,0,0,0-18.66-32.33L197.47,5a37.32,37.32,0,0,0-37.33,0L18.67,86.68A37.33,37.33,0,0,0,0,119V282.36a37.32,37.32,0,0,0,18.67,32.33l141.47,81.68a37.32,37.32,0,0,0,37.33,0l141.47-81.68A37.31,37.31,0,0,0,357.6,282.36Z"
                    />
                  </g>
                </g>
              </svg>
              <img className="hexIcon" src="/images/icons/iot.png" alt="best Network Solutions"></img>
              <Link to={"/iotservice"}>
                <div
                  className="subServiceCont service3"
                  onMouseOver={() => {
                    handleHover(2);
                  }}
                  onMouseLeave={() => {
                    handleHoverOut(2);
                  }}
                >
                  <p className="mid-title subser-title">Network Solutions</p>
                  <li>Active</li>
                  <li>Passive</li>
                  <li>Wireless</li>
                </div>
              </Link>
            </div>
            <div className="col-sm-12 col-md-6 col-xl-3 subServiceBoxInn">
              <svg className="hexShape">
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <path
                      className="cls-1"
                      d="M357.6,282.36V119a37.33,37.33,0,0,0-18.66-32.33L197.47,5a37.32,37.32,0,0,0-37.33,0L18.67,86.68A37.33,37.33,0,0,0,0,119V282.36a37.32,37.32,0,0,0,18.67,32.33l141.47,81.68a37.32,37.32,0,0,0,37.33,0l141.47-81.68A37.31,37.31,0,0,0,357.6,282.36Z"
                    />
                  </g>
                </g>
              </svg>
              <img className="hexIcon" src="/images/icons/audio.png" alt="best AV Solutions"></img>
              <Link to={"/iotservice"}>
                <div
                  className="subServiceCont service4"
                  onMouseOver={() => {
                    handleHover(3);
                  }}
                  onMouseLeave={() => {
                    handleHoverOut(3);
                  }}
                >
                  <p className="mid-title subser-title">AV Solutions</p>
                  <li>Projector</li>
                  <li>Interactive Panel</li>
                  <li>Smart TV</li>
                </div>
              </Link>
            </div>
            <div className="col-sm-12 col-md-6 col-xl-3 subServiceBoxInn">
              <svg className="hexShape">
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <path
                      className="cls-1"
                      d="M357.6,282.36V119a37.33,37.33,0,0,0-18.66-32.33L197.47,5a37.32,37.32,0,0,0-37.33,0L18.67,86.68A37.33,37.33,0,0,0,0,119V282.36a37.32,37.32,0,0,0,18.67,32.33l141.47,81.68a37.32,37.32,0,0,0,37.33,0l141.47-81.68A37.31,37.31,0,0,0,357.6,282.36Z"
                    />
                  </g>
                </g>
              </svg>
              <img
                className="hexIcon"
                src="/images/icons/wifi-router.png"
                alt="best Infrastructure"
              ></img>
              <Link to={"/iotservice"}>
                <div
                  className="subServiceCont service5"
                  onMouseOver={() => {
                    handleHover(4);
                  }}
                  onMouseLeave={() => {
                    handleHoverOut(4);
                  }}
                >
                  <p className="mid-title subser-title">Infrastructure</p>

                  <li>IP PBX</li>

                  <li>EPABX</li>

                  <li>Wifi Solutions</li>
                </div>
              </Link>
            </div>
            <div className="col-sm-12 col-md-6 col-xl-3 subServiceBoxInn">
              <svg className="hexShape">
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <path
                      className="cls-1"
                      d="M357.6,282.36V119a37.33,37.33,0,0,0-18.66-32.33L197.47,5a37.32,37.32,0,0,0-37.33,0L18.67,86.68A37.33,37.33,0,0,0,0,119V282.36a37.32,37.32,0,0,0,18.67,32.33l141.47,81.68a37.32,37.32,0,0,0,37.33,0l141.47-81.68A37.31,37.31,0,0,0,357.6,282.36Z"
                    />
                  </g>
                </g>
              </svg>
              <img
                className="hexIcon"
                src="/images/icons/app-development.png"
                alt="best Website Development services"
              ></img>
              <Link to={"/ServiceSeo"}>
                <div
                  className="subServiceCont service6"
                  onMouseOver={() => {
                    handleHover(5);
                  }}
                  onMouseLeave={() => {
                    handleHoverOut(5);
                  }}
                >
                  <p className="mid-title subser-title">Website Development</p>
                  <li>Static/Dynamic Website</li>
                  <li>E-commerce Sites</li>
                  <li>Search Engine Optimization</li>
                </div>
              </Link>
            </div>
            <div className="col-sm-12 col-md-6 col-xl-3 subServiceBoxInn">
              <svg className="hexShape">
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <path
                      className="cls-1"
                      d="M357.6,282.36V119a37.33,37.33,0,0,0-18.66-32.33L197.47,5a37.32,37.32,0,0,0-37.33,0L18.67,86.68A37.33,37.33,0,0,0,0,119V282.36a37.32,37.32,0,0,0,18.67,32.33l141.47,81.68a37.32,37.32,0,0,0,37.33,0l141.47-81.68A37.31,37.31,0,0,0,357.6,282.36Z"
                    />
                  </g>
                </g>
              </svg>
              <img className="hexIcon" src="/images/icons/feature.png" alt="best web application services"></img>
              <Link to={"/ServiceSeo"}>
                <div
                  className="subServiceCont service7"
                  onMouseOver={() => {
                    handleHover(6);
                  }}
                  onMouseLeave={() => {
                    handleHoverOut(6);
                  }}
                >
                  <p className="mid-title subser-title">Web Applications</p>
                  <li>Stand-alone Software</li>
                  <li>CRM software</li>
                  <li>ERP Software</li>
                </div>
              </Link>
            </div>
            <div className="col-sm-12 col-md-6 col-xl-3 subServiceBoxInn">
              <svg className="hexShape">
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <path
                      className="cls-1"
                      d="M357.6,282.36V119a37.33,37.33,0,0,0-18.66-32.33L197.47,5a37.32,37.32,0,0,0-37.33,0L18.67,86.68A37.33,37.33,0,0,0,0,119V282.36a37.32,37.32,0,0,0,18.67,32.33l141.47,81.68a37.32,37.32,0,0,0,37.33,0l141.47-81.68A37.31,37.31,0,0,0,357.6,282.36Z"
                    />
                  </g>
                </g>
              </svg>
              <img
                className="hexIcon"
                src="/images/icons/security-system.png"
                alt="best ISP Solutions"
              ></img>
              <Link to={"/ispservice"}>
                <div
                  className="subServiceCont service8"
                  onMouseOver={() => {
                    handleHover(7);
                  }}
                  onMouseLeave={() => {
                    handleHoverOut(7);
                  }}
                >
                  <p className="mid-title subser-title">ISP Solutions</p>
                  <li>Broadbrand</li>
                  <li>SME</li>
                  <li>ILL</li>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="vide-img-service">
          <div className="row">
            <div className="col-md-12 vide-img-services">
              <div className="video-thumbnail">
                <img
                  className="img-fluid vid-home"
                  src="/images/icons/Readmore Banner web.webp"
                  alt="best it,web and isp services in coimbatore"
                />
                <div className="play-button" onClick={openVideo}>
                  <BsPlay className="iconings" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Modal */}
        <Modal show={showVideo} onHide={closeVideo} centered>
          <Modal.Body>
            {/* Add your YouTube video iframe or video player here */}
            <iframe
              title="YouTube Video"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/CdP9VCScVmQ"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeVideo}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default SubService;
