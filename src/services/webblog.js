import axios from "axios";
import { useEffect, useState } from "react";
import { FaBloggerB } from "react-icons/fa";
import { HiArrowLongRight } from "react-icons/hi2";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {Link} from "react-router-dom";

function Webblog() {
  const [blogs, setBlogs] = useState([]);

  var settings = {
    dots: true,
    infinite: true,
    // speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
   
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
    axios.get("https://infygain.com/api/blogdata").then((res) => {

     // sorted by date
     const sortedBlogs = res.data.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB - dateA;
    });
      setBlogs(sortedBlogs);
    });
  }, []);

  const blogFiltered = blogs.filter((val,index) => val.category === "Web and App")


//       function dateSlice(id){
//         const rawDate = blogs[id].date;
//         const blogDate = rawDate.slice(0, 10);
//         return blogDate;
//     }
 
// console.log(blogs)
// console.log(blogFiltered)


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
            <div className="web-vb" data-aos="fade-left" data-aos-duration="3000">

            <Link to="/mainblogs" className="btns text-center text-light-blogss">
               View Blogs &nbsp; <span className="fa fa-arrow-right"></span>{" "}
              </Link>
            </div>
          </div>
        </div>

        <div className="blogbx container">

          <Slider {...settings}>
          {
            blogFiltered.map((blog, index) => (
              <div className="blogin">
              <div className="blgimbx">
                <img className="img-fluid" alt="best seo blogs" 
                src={"uploads/" + blog.img}
                // src="/images/cb.webp"
                ></img>
              </div>
              <div className="blgconbx">
                <div className="cat-tit">
                  <span>{blog.category}</span>
                </div>
                <div className="bgconbx mb-2">
                 {blog.title}
                </div>
                {/* <div className="bgparabx" dangerouslySetInnerHTML={{__html:blog.intro.length > 150 ? blog.intro.substring(0, 50) + '...' :  blog.intro.substring(0, 120) + '...' }}>

                </div> */}
                <div className="btn read-btn ">
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
          </Slider>
        </div>
      </div>
    </>
  );
}





export default Webblog;
