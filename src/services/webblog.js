import "../css/seo.css";
import "../css/common.css";
import { FaBloggerB } from "react-icons/fa";
import { HiArrowLongRight } from "react-icons/hi2";

function webblog() {
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
            <p className="su-title">
              We have achieved some great<br></br>
            </p>
            <span className="stt">Funfacts for experiences</span>
          </div>
        </div>
        <div className="blogbx2 container">
          <div className="blogin">
            <div className="blgimbx">
              <img className="img-fluid" src="./images/seo/blog.jpg"></img>
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
              <img className="img-fluid" src="./images/seo/blog.jpg"></img>
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
export default webblog;
