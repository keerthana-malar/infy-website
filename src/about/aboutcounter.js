import React, { useState } from "react";
import Progress from "../progress";
import CountUp from 'react-countup';
import ScrollTrigger from "react-scroll-trigger";


function AboutCounter(){

  const [counterOn, setCounterOn] = useState();

    return(
      <ScrollTrigger onEnter= {()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
<div className="load">
    <div className="testbox">
        <div className="counter-sec">
            <div className="row">
              <div className="col-md-4 main-bx">
                <div className="coun-box">
                  <div className="count">
                  {counterOn && <CountUp start={0} end={487} duration={5} delay={0}/>}+
                  </div>
                </div>
                <div className="title">
                  <p className="sub-title">Completed Projects</p>
                </div>
              </div>
              <div className="col-md-4 main-bx">
                <div className="coun-box">
                  <div className="count">
                  {counterOn && <CountUp start={0} end={416} duration={5} delay={0}/>}
                  </div>
                </div>
                <div className="title">
                  <p className="sub-title">Happy Clients</p>
                </div>
              </div>
              <div className="col-md-4 main-bx">
                <div className="coun-box">
                  <div className="count">
                  {counterOn && <CountUp start={0} end={68} duration={5} delay={0}/>}+
                  </div>
                </div>
                <div className="title">
                  <p className="sub-title">Services Provider</p>
                </div>
              </div>
            </div>
        </div>

        <div className="inn">
        <div className="short-abt">
          <div className="row">
            <div className="col-md-6">
              <div className="short-img">
              <img className="img-fluid " src="./images/abt.jpg"></img>
              </div>
            </div>
            <div className="col-md-6">
              <div className="sh-abt-bx p-5">
                <p className="mini-title main-color">about us</p>
                <p className="s-title">
                  We Deal With The Aspects Of Professional IT Services
                </p>
                <p>
                We specialize in addressing every facet of professional IT services. We take immense pride in our ability to serve a diverse range of clients, including large organizations, institutions, industries, and individual customers. Our primary objective is to deliver top-tier doorstep services, consistently offering competitive rates and exceptional value to our clients."
                </p>
                <Progress />
              </div>
            </div>
          </div>
        </div>
       </div>
    </div>
 </div>
 </ScrollTrigger>
    );
}

export default AboutCounter;