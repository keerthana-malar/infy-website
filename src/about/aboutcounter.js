import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import ProgressBar from "@ramonak/react-progress-bar";

function AboutCounter() {
  const [counterOn, setCounterOn] = useState();
  const [bar, setBar] = useState(true);
  
  return (
    <ScrollTrigger
      onEnter={() => {
        setCounterOn(true);
        setBar(true);
      }}
      onExit={() => {
        setCounterOn(false);
        setBar(false);
      }}
    >
      <div className="load">
        <div className="testbox">
          <div className="counter-sec">
            <div className="row">
              <div className="col-md-4 main-bx">
                <div className="coun-box">
                  <div className="count">
                    {counterOn && (
                      <CountUp start={0} end={487} duration={5} delay={0} />
                    )}
                    +
                  </div>
                </div>
                <div className="title">
                  <p className="sub-title">Completed Projects</p>
                </div>
              </div>
              <div className="col-md-4 main-bx">
                <div className="coun-box">
                  <div className="count">
                    {counterOn && (
                      <CountUp start={0} end={416} duration={5} delay={0} />
                    )}
                  </div>
                </div>
                <div className="title">
                  <p className="sub-title">Happy Clients</p>
                </div>
              </div>
              <div className="col-md-4 main-bx">
                <div className="coun-box">
                  <div className="count">
                    {counterOn && (
                      <CountUp start={0} end={68} duration={5} delay={0} />
                    )}
                    +
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
              <div className="row ">
                <div className="col-lg-5 col-md-6">
                  <div className="short-img">
                    <img className="img-fluid " src="./images/abt.webp"></img>
                  </div>
                </div>
                <div className="col-lg-7 col-md-6">
                  <div className="sh-abt-bx p-5">
                    <p className="mini-title main-color">about us</p>
                    <p className="s-title">
                      We Deal With The Aspects Of Professional IT Services
                    </p>
                    <p>
                      We specialize in addressing every facet of professional IT
                      services. We take immense pride in our ability to serve a
                      diverse range of clients, including large organizations,
                      institutions, industries, and individual customers. Our
                      primary objective is to deliver top-tier doorstep
                      services, consistently offering competitive rates and
                      exceptional value to our clients."
                    </p>
                    <p className="mini-title mb-0">Website / App Development</p>
                    {bar && (
                      <ProgressBar
                        className="pbar"
                        completed={100}
                        bgColor="#6363cd"
                        labelColor="#ffffff"
                        transitionDuration="2s"
                        animateOnRender
                        maxCompleted={98}
                        customLabel="100%"
                      />
                    )}
                    <p className="mini-title mb-0">IT Support</p>
                    {bar && (
                      <ProgressBar
                        className="pbar"
                        completed={100}
                        bgColor="#6363cd"
                        labelColor="#ffffff"
                        transitionDuration="3s"
                        animateOnRender
                        maxCompleted={99}
                        customLabel="99%"
                      />
                    )}
                    <p className="mini-title mb-0">ISP Service</p>
                    {bar && (
                      <ProgressBar
                        className="pbar"
                        completed={100}
                        bgColor="#6363cd"
                        labelColor="#ffffff"
                        transitionDuration="2s"
                        animateOnRender
                        maxCompleted={98}
                        customLabel="100%"
                      />
                    )}
                    <p className="mini-title mb-0">Graphic Design</p>
                    {bar && (
                      <ProgressBar
                        className="pbar"
                        completed={100}
                        bgColor="#6363cd"
                        labelColor="#ffffff"
                        transitionDuration="3s"
                        animateOnRender
                        maxCompleted={98}
                        customLabel="99%"
                      />
                    )}
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
