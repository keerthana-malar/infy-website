import React from "react";
import "../css/home.css";
import "animate.css";

const Service = () => {
  return (
    <>
      <div className="serviceContainer container-lg text-center issue">
        <div className="serviceTopBox">
            <p className="mini-title main-color">Our Service</p>
            <p className="sub-title">We Offer a Wide Variety of IT Services</p>
        </div>
      <div className="row serviceBox">
        <div className="serviceBoxInn col-lg-4">
          <div className="serviceCont">
            <img src="/images/icons/it.png" alt="service icons"></img>
            <h2 className="mid-title">IOT Services</h2>
            <p className="text-muted">
            Unlock IoT's Power. Strategy, Devices, Insights, and Security. Innovate with Us.
            </p>
          </div>
        </div>
        <div className="serviceBoxInn col-lg-4">
          <div className="serviceCont">
            <img src="/images/icons/web.png" alt="service icons"></img>
            <h2 className="mid-title">Web Development</h2>
            <p className="text-muted">
            Crafting Digital Excellence. Custom Websites, E-Commerce, SEO, Maintenance.
            </p>
          </div>
        </div>
        <div className="serviceBoxInn col-lg-4">
          <div className="serviceCont">
            <img src="/images/icons/isp.png" alt="service icons"></img>
            <h2 className="mid-title">ISP Services</h2>
            <p className="text-muted">
            Seamless Connectivity. High-Speed Internet, Network Security, 24/7 Support.
            </p>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Service;
