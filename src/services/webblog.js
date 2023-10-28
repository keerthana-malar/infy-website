import axios from "axios";
import { useEffect, useState } from "react";
import { FaBloggerB } from "react-icons/fa";
import { HiArrowLongRight } from "react-icons/hi2";
import Slider from "react-slick";
import {Link} from "react-router-dom";

function Webblog() {
  const [blogs, setBlogs] = useState([]);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // initialSlide: 0,
    // adaptiveHeight: true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    appendDots: dots => (
     <div>

     </div>
    ),
    customPaging: i => (
      <div
      style={{
        width: "30px",
        color: "blue",
        border: "1px blue solid"
      }}
    >
      {i + 1}
    </div>
    ),
    
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: false,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
};
  useEffect(() => {
    axios.get("https://infygain.in/api/blogdata").then((res) => {
      setBlogs(res.data);
    });
  }, []);

  const blogFiltered = blogs.filter((val,index) => val.category === "Web Services")

      function dateSlice(id){
        const rawDate = blogs[id].date;
        const blogDate = rawDate.slice(0, 10);
        return blogDate;
    }
 
console.log(blogs)
console.log(blogFiltered)

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

          {/* <Slider {...settings}> */}
          {
            blogFiltered.map((blog, index) => (
              <div className="blogin">
              <div className="blgimbx">
                <img className="img-fluid" src={blog.img}></img>
              </div>
              <div className="blgconbx">
                <div className="cat-tit">
                  <span>{blog.category}</span>
                </div>
                <div className="bgconbx">
                 {blog.title}
                </div>
                <div className="bgparabx">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </div>
                <div className="btn read-btn">
                  <Link to={"/blogs/" + blog.id}> Read More <HiArrowLongRight/></Link> 
                  </div>
              </div>
              </div>
            ))
          }
          {/* <div className="blogin">
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
          </div> */}
          {/* </Slider> */}
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



export default Webblog;
