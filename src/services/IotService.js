import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/IotService.css";
import { MdNetworkWifi3Bar } from "react-icons/md";
import { BsArrowRight } from 'react-icons/bs'
import { LuLaptop2 } from "react-icons/lu";
import { MdOutlineSecurity } from "react-icons/md";
import { LuFileAudio2 } from "react-icons/lu";
import { Link } from "react-router-dom";



function IotService({scrollToComponent}) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <br></br>
      <br></br>

      <div className="bgBox mb-5">
        <div>
          <div className="row align-items-center indeed">
            {/* Left Content Box  */}
            <div className="col-md-4 leftContBox">
              <div className="leftparagraph">
              <div className="heads">
                <div className="small_line"></div>
                <div>
                  <p className="para">Services</p>
                </div>
              </div>
              <h1 className="ser-h1">
                We provide the{" "}
                <span className="span2">best services.</span>
              </h1>
              <p className="box1_para text-muted">
                We understand that each client is unique,
                and we tailor our services to meet your specific needs.
              </p>

              <button className="about-btns">
                    <span className="about-sc"> 
                    </span>
                    <span className="iot-about-text" onClick={() => scrollToComponent()}>Services
                    <BsArrowRight className='about-btns-icons1'/>
                    </span>
              </button>
              {/* <button type="button" className="btn btn-lg box1_btn button">
                {" "}
                Services
                <div className="smallcode"></div>
              </button> */}


            </div>
            </div>
            {/* Left Content Box End  */}
            {/* Right Content Box  */}
            <div className="col-md-8">
              <div className="parent">
               
                
                  <div className="divBox div1 downbox1" data-aos="zoom-in">
                     <Link  className="iot-service-link" to='/services/networking'  rel="noopener noreferrer">
                    <div className="row logo">
                      <div className="col-md-4">
                        <div className="rightsmall_line"></div>
                        <div className="iconsiot">
                          <MdNetworkWifi3Bar className="icon_size" />
                        </div>
                      </div>
                      <div className="col-md-8 text">
                        <h4> Complete Network Solutions</h4>
                        <p className="right_para">
                        Network Solutions provides 
                        web services such as web hosting, website design.
                        </p>
                      </div>
                      {/* hidden row */}
                      <div>
                        <div className="hidden">
                          <Link to='/services/networking'  rel="noopener noreferrer"><p className="right_para1">Read more<span className="service-arrow"><BsArrowRight /> </span>  </p></Link>
                          </div>
                      </div>
                      {/* hidden end */}
                    </div>
                      </Link>
                  </div>
              
                <div className="divBox div2 downbox1" data-aos="zoom-in">
                <Link  className="iot-service-link" to='/services/laptopanddesktop'  rel="noopener noreferrer">
                  <div className="row logo">
                    <div className="col-md-4">
                      <div className="rightsmall_line"></div>
                      <div className="iconsiot">
                        <LuLaptop2 className="icon_size" />
                      </div>
                    </div>
                    <div className="col-md-8 text">
                      <h4> Laptop / Desktop <br></br>Sales, Service</h4>
                      <p className="right_para">
                      Advises customers on technical matters and 
                      recommends appropriate. 
            
                       </p>
                    </div>
                    {/* hidden row */}
                    <div>
                      <div className="hidden1">
                      <Link to='/services/laptopanddesktop'  rel="noopener noreferrer"><p>Read more <span className="service-arrow"><BsArrowRight /> </span>  </p></Link>
                      
                      </div>
                    </div>
                   
                    {/* hidden end */}
                  </div>
                  </Link>
                  
                  </div>
                <div className="divBox div3 downbox1" data-aos="zoom-in">
                <Link  className="iot-service-link" to='/services/cctv'  rel="noopener noreferrer">
                  <div className="row ">
                    <div className="col-md-4">
                      <div className="rightsmall_line"></div>
                      <div className="iconsiot">
                        <MdOutlineSecurity className="icon_size" />
                      </div>
                    </div>
                    <div className="col-md-8 text">
                      <h4> Security Solutions</h4>
                      <p className="right_para">
                      Enhance security with our advanced 
                      CCTV and biometric systems for
                       comprehensive.
                      </p>
                    </div>
                    {/* hidden row */}
                    <div>
                      <div className="hidden2">
                      <Link to='/services/cctv'   rel="noopener noreferrer"><p className="right_para1">Read more <span className="service-arrow"><BsArrowRight /> </span>  </p></Link>
                      </div>
                    </div>
                    {/* hidden end */}
                  </div>
                  </Link>
                </div>
                <div className="divBox div4 downbox1" data-aos="zoom-in">
                <Link className="iot-service-link" to='/services/Projectors'  rel="noopener noreferrer">
                  <div className="row ">
                    <div className="col-md-4">
                      <div className="rightsmall_line"></div>
                      <div className="iconsiot">
                        <LuFileAudio2 className="icon_size" />
                      </div>
                    </div>
                    <div className="col-md-8 text">
                      <h4>AV Solutions</h4>
                      <p className="right_para">
                      Audio and video solutions used for
                       improved communication and collaboration. 
                      </p>
                    </div>
                    {/* hidden row */}
                    <div>
                      <div className="hidden3">
                      <Link to='/services/Projectors'   rel="noopener noreferrer"><p className="right_para1">Read more <span className="service-arrow"><BsArrowRight /> </span>  </p></Link>
                </div>
                    </div>
                    {/* hidden end */}
                  </div>
                  </Link>
                </div>
              </div>
            </div>
            {/* Right Content Box End */}
          </div>
        </div>
      </div>
    </>
  );
}

export default IotService;