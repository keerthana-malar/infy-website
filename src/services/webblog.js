import React,{useState,useEffect} from "react";
import { FaBloggerB } from "react-icons/fa";
import { HiArrowLongRight } from "react-icons/hi2";
import axios from "axios";


function Webblog() {

  return (
    <>
      <div className="web-blog">
        <div className="blogbx1">
          <div className="featurebox">
            <div className="iconbx">
              <FaBloggerB />
            </div>
            <div className="conbx">Latest Blog</div>
          </div>
          <div className="sercon">
            <p className="su-title" data-aos="fade-left" data-aos-duration="1000">
              We have some interesting blog<br></br>
            </p>
            <span className="stt" data-aos="fade-left" data-aos-duration="3000">facts for experiences</span>
          </div>
        </div>
        <div className="blogbx2 container">
          <div className="blogin">
            <div className="blgimbx">
              <img className="img-fluid" src="./images/seo/blog.webp"></img>
            </div>
          
            <div className="blgconbx">
              <div className="cat-tit">
                <span>optimization</span>
              </div>
              <div className="bgconbx">
                Strategy for Norway’s Peion to Fund Global
              </div>
              <div className="bgparabx">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              </div>
              <div className="btn read-btn">Read More <HiArrowLongRight/></div>
            </div>
          
          </div>
          <div className="blogin">
            <div className="blgimbx">
              <img className="img-fluid" src="./images/seo/blog.webp"></img>
            </div>
            <div className="blgconbx">
              <div className="cat-tit">
                <span>optimization</span>
              </div>
              <div className="bgconbx">
                Strategy for Norway’s Peion to Fund Global
              </div>
              <div className="bgparabx">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              </div>
              <div className="btn read-btn">Read More <HiArrowLongRight/></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Webblog;
