import "font-awesome/css/font-awesome.css";
import "../css/mainblog.css";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import axios from "axios";

function Mainsection() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get("https://infygain.in/api/blogdata").then((res) => {
      setBlogs(res.data);
    });
  }, []);
  return (
    <>
      <div className="container main-blogs">
          
            <div  className="row">
            {blogs.map((index)=>(
              <div key={index.id} className="col-md-4 col-sm-4 mainblogsection">
            <div className=" image-section">
              <div className="img">
                <img className="img-fluid" 
                // src="/images/registeration.jpg"
                src={"uploads/" + index.img}
                ></img>
              </div>
              <div className="buttonss">
                {/* <button className="btns firstbutton">Desktop</button> */}
                {/* <button className="btns secondbutton">infygain</button> */}
              </div>
              <div className="content-box p-3">
                <div className="content-box-content">
              <p className="sub-title pri-color t-c">{index.title}</p>
                  <p className=" text-muted detailscontent ">
                    {stripHTMLTags(index.content)}
                  </p>
                </div>
              </div>
              <div className="readmorelink t-c pb-3">
                <p className=" readmoretext"><Link to={"/blogs/"+index.id}>
                  <button className="btn btn-primary">READ MORE</button></Link></p>
              </div>
            </div>
          </div>
          ) 
          )}
            </div>
          
      </div>

      {/*  */}
      <div className="container mb-5 main-blogs">
          
            <div  className="row">
          
              <div className="col-md-4 col-sm-4 mainblogsection">
            <div className=" image-section">
              <div className="img">
                <img className="img-fluid" 
          
                src="/images/pro.jpg"
                ></img>
              </div>
              <div className="buttonss">
                {/* <button className="btns firstbutton">Desktop</button> */}
                {/* <button className="btns secondbutton">infygain</button> */}
              </div>
              <div className="content-box p-3">
                <div className="content-box-content">
              <p className="sub-title pri-color t-c">it subbort</p>
                  <p className=" text-muted detailscontent ">
                    web series cctv camera lubricants 
                  </p>
                </div>
              </div>
              <div className="readmorelink t-c pb-3">
                <p className=" readmoretext"><Link to={""}>
                  <button className="btn btn-primary">READ MORE</button></Link></p>
              </div>
            </div>
          </div>
         
            </div>
          
      </div>
    </>
  );
}

function stripHTMLTags(html) {
  const temp = document.createElement('div');
  temp.innerHTML = html;
  return temp.textContent || temp.innerText;
}

export default Mainsection;
