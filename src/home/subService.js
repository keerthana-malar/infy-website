import "../css/home.css";
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { BsPlay } from "react-icons/bs";function SubService() {
  const [showVideo, setShowVideo] = useState(false);

  const openVideo = () => {
    setShowVideo(true);
  };

  const closeVideo = () => {
    setShowVideo(false);
  };  return (
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
              <div className="subServiceCont service1">
                <p className="mid-title subser-title">Enterprise Systems Group</p>
                <li>Data Services</li>
                <li>Network Services</li>
                <li>Cloud Services</li>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-xl-3 subServiceBoxInn">
              <div className="subServiceCont service2">
                <p className="mid-title subser-title">Information Security</p>
                <li>Application Security</li>
                <li>Mobile Application</li>
                <li>Network Security</li>
                <li>Information Security Consulting</li>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-xl-3 subServiceBoxInn">
              <div className="subServiceCont service3">
                <p className="mid-title subser-title">IoT Services</p>
                <li>Flexible Deployment</li>
                <li>Multiple Connections</li>
                <li>Intelligent Management</li>
                <li>Data Security</li>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-xl-3 subServiceBoxInn">
              <div className="subServiceCont service4">
                <p className="mid-title subser-title">AV Solutions</p>
                <li>Intelligent Video Solutions</li>
                <li>Command & Control Centers</li>
                <li>Crisis Management Centers</li>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-xl-3 subServiceBoxInn">
              <div className="subServiceCont service5">
                <p className="mid-title subser-title">Infrastructure Systems </p>
                <li>Structured Cabling</li>
           
                <li>Wifi Solutions</li>
                <li>AV Solutions</li>
           
                <li>IP Telephony</li>
           
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-xl-3 subServiceBoxInn">
              <div className="subServiceCont service6">
                <p className="mid-title subser-title">Website Development</p>
                <li>Static/Dynamic Website</li>
                <li>E-commerce Sites</li>
            
               
                <li>Search Engine Optimization</li>
                <li>Graphic Design</li>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-xl-3 subServiceBoxInn">
              <div className="subServiceCont service7">
                <p className="mid-title subser-title">Web Applications</p>
                <li>Stand-alone Software</li>
                <li>CRM software</li>
                <li>ERP Software</li>
                <li>Customized Software</li>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-xl-3 subServiceBoxInn">
              <div className="subServiceCont service8">
                <p className="mid-title subser-title">Security Systems</p>
                <li>CCTV Solutions</li>
                <li>Access Control Systems</li>
                <li>Gate Barrier</li>
                <li>AV Intercom</li>
              </div>
            </div>
          </div>
          </div>
          <div className="vide-img-service">
  
          <div className="row">
            <div className="col-md-12 vide-img-services">
              <div className="video-thumbnail">
                <img
                  className="img-fluid vid-home"
                  src="/images/icons/Readmore Banner 1.jpg"
                  alt="Video Thumbnail"
               
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
};

export default SubService;
