import "../css/seo.css";
import "../css/common.css";
import { FaBloggerB } from "react-icons/fa";

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
        <div className="blogbx2">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default webblog;
