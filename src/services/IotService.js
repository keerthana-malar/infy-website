import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/IotService.css";
import { TbBrandDatabricks } from "react-icons/tb";
import { LuFileStack } from "react-icons/lu";
import { PiNotePencil } from "react-icons/pi";
import { GiEyeShield } from "react-icons/gi";
import { BsArrowRight } from 'react-icons/bs'
import { AiOutlineArrowRight } from "react-icons/ai";

function IotService() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <br></br>
      <br></br>

      <div className="bgBox mb-5">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Content Box  */}
            <div className="col-md-4 leftContBox">
              <div className="heads">
                <div className="small_line"></div>
                <div>
                  <p className="para">Services</p>
                </div>
              </div>
              <h1>
                We provide the <br></br>{" "}
                <span className="span2">best services.</span>
              </h1>
              <p className="box1_para">
            
                We understand that each client is unique, 
                and we tailor our services to meet your specific needs.
              </p>
              <button type="button" className=" box1_btn">
                {" "}
                Services
              </button>
            </div>
            {/* Left Content Box End  */}
            {/* Right Content Box  */}
            <div className="col-md-8">
              <div className="parent">
                <div className="divBox div1 downbox1">
                  <div className="row logo">
                    <div className="col-md-4">
                      <div className="rightsmall_line"></div>
                      <div>
                        <LuFileStack className="icon_size" />
                      </div>
                    </div>
                    <div className="col-md-8 text">
                      <h4> Computer Network Solutions</h4>
                      <p className="right_para">
                      Protect your digital assets with  
                       network security services.
                      </p>
                    </div>
                    {/* hidden row */}
                    <div>
                      <div className="hidden">
                        <p className="right_para1">Read more <span className="service-arrow"><BsArrowRight /> </span>  </p>
                      </div>
                    </div>
                    {/* hidden end */}
                  </div>
                </div>
                <div className="divBox div2 downbox1">
                  <div className="row logo">
                    <div className="col-md-4">
                      <div className="rightsmall_line"></div>
                      <div>
                        <LuFileStack className="icon_size" />
                      </div>
                    </div>
                    <div className="col-md-8 text">
                      <h4> Laptop/Desktop Sales & Service</h4>
                      <p className="right_para">
                      Explore our curated  laptops and desktops,
                       featuring  latest models.

                      </p>
                    </div>
                    {/* hidden row */}
                    <div>
                      <div className="hidden">
                      <p className="right_para1">Read more <span className="service-arrow"><BsArrowRight /> </span>  </p>
                      </div>
                    </div>
                    {/* hidden end */}
                  </div>
                </div>
                <div className="divBox div3 downbox1">
                  <div className="row ">
                    <div className="col-md-4">
                      <div className="rightsmall_line"></div>
                      <div>
                        <PiNotePencil className="icon_size" />
                      </div>
                    </div>
                    <div className="col-md-8 text">
                      <h4> Web Design</h4>
                      <p className="right_para">
                      We specialize in responsive web design, ensuring your site
                       looks.
                      </p>
                    </div>
                    {/* hidden row */}
                    <div>
                      <div className="hidden">
                      <p className="right_para1">Read more <span className="service-arrow"><BsArrowRight /> </span>  </p>
                      </div>
                    </div>
                    {/* hidden end */}
                  </div>
                </div>
                <div className="divBox div4 downbox1">
                  <div className="row ">
                    <div className="col-md-4">
                      <div className="rightsmall_line"></div>
                      <div>
                        <GiEyeShield className="icon_size" />
                      </div>
                    </div>
                    <div className="col-md-8 text">
                      <h4> CCTV / Bio-Metrics</h4>
                      <p className="right_para">
                      Our CCTV systems to meet your specific 
                      security needs.
                      </p>
                    </div>
                    {/* hidden row */}
                    <div>
                      <div className="hidden">
                      <p className="right_para1">Read more <span className="service-arrow"><BsArrowRight /> </span>  </p>
                      </div>
                    </div>
                    {/* hidden end */}
                  </div>
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