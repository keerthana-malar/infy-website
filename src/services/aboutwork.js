import { MdWorkspacePremium } from "react-icons/md";
import React, { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import ProgressBar from "@ramonak/react-progress-bar";

function Aboutweb() {
  const [bar, setBar] = useState();
  return (
    <>
      <ScrollTrigger onEnter={() => setBar(true)} onExit={() => setBar(false)}>
        <div className="container">
          <div className="mainaboutweb">
            <div className="abtimgbx">
              <img className="img-fluid" alt="top seo services" src="./images/seo/seobanner.webp"></img>
            </div>
            <div className="abtconbx">
              <div className="featurebox">
                <div className="iconbx">
                  <MdWorkspacePremium />
                </div>
                <div className="conbx">About Work Effort</div>
              </div>
              <div className="sercon">
                <p
                  className="su-titlebx"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                >
                  Deal with the professional<br></br>
                </p>
                <span
                  className="stbx"
                  data-aos="fade-left"
                  data-aos-duration="3000"
                >
                  The Count of Our Success
                </span>
                <p className="head-conbx">
                  We are constantly working to bring you the products you need,
                  at competitive prices. If you need a technology product that
                  we don't carry we work with over 25 vendors and can get you
                  whatever you need.
                </p>
              </div>
              <div className="webprogress">
                <p className="mini-title mb-0">Dynamic Websites</p>
                {bar && (
                  <ProgressBar
                    className="pbar"
                    completed={100}
                    bgColor="linear-gradient(90deg, rgba(244,53,159,1) 0%, rgba(255,132,67,1) 63%)"
                    labelColor="#ffffff"
                    transitionDuration="2s"
                    animateOnRender
                    maxCompleted={98}
                    customLabel="100%"
                    height="15px"
                  />
                )}
                <p className="mini-title mb-0">
                  Search Engine Optimization (SEO)
                </p>
                {bar && (
                  <ProgressBar
                    className="pbar"
                    completed={100}
                    bgColor="linear-gradient(90deg, rgba(244,53,159,1) 0%, rgba(255,132,67,1) 63%)"
                    labelColor="#ffffff"
                    transitionDuration="3s"
                    animateOnRender
                    maxCompleted={99}
                    customLabel="100%"
                    height="15px"
                  />
                )}
                <p className="mini-title mb-0">Application Development</p>
                {bar && (
                  <ProgressBar
                    className="pbar"
                    completed={100}
                    bgColor="linear-gradient(90deg, rgba(244,53,159,1) 0%, rgba(255,132,67,1) 63%)"
                    labelColor="#ffffff"
                    transitionDuration="2s"
                    animateOnRender
                    maxCompleted={98}
                    customLabel="98%"
                    height="15px"
                  />
                )}
                <p className="mini-title mb-0">UI / UX Design</p>
                {bar && (
                  <ProgressBar
                    className="pbar"
                    completed={100}
                    bgColor="linear-gradient(90deg, rgba(244,53,159,1) 0%, rgba(255,132,67,1) 63%)"
                    labelColor="#ffffff"
                    transitionDuration="3s"
                    animateOnRender
                    maxCompleted={98}
                    customLabel="99%"
                    height="15px"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </>
  );
}
export default Aboutweb;
