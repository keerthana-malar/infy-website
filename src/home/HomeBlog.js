import "../css/home.css";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';  

const HomeBlog = () => {
    const [blogs, setBlogs] = useState([]);

    var settings = {
      infinite: true,
      dots: false, 
      // speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      arrows:false,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      adaptiveHeight: true,
      responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: false,
              dots: true
            }
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
              breakpoint: 400,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
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

      setBlogs( sortedBlogs);
      
    });
  }, []);

  function date(id) {
    const rawDate = blogs[id].date;
    const timestamp = new Date(rawDate);
    const date = timestamp.getDate();
    return date
  }
  function month(id) {
    const rawDate = blogs[id].date;
    const timestamp = new Date(rawDate);
    const monthIndex = timestamp.getMonth();
    const monthNames = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const monthName = monthNames[monthIndex];
    return monthName;
}

  return (
    <>
      <section className="homeBlogSec">
        <div className="container">
            <div className="homeBlogTopCont text-center">
                <p className="mini-title main-color">From Our Blogs</p>
                <p className="test-head">Here’s What’s Happening</p>
                <div className="viewblog-redirect"><Link to="/mainblogs" className="btns text-light-blogss">
               View Blogs &nbsp; <span className="fa fa-arrow-right"></span>{" "}
              </Link></div>
            </div>
            
              <div className="homeBlogBox">
              <Slider {...settings}>
              {blogs.map((value, index) => (
                
                <div key={value.id} className="col-md-4 blog-one-boxes">
                
                  <div className="blogBoxInn blogh">
                    <div className="blogImgBox">
                    {/* <div className="blogDate">
                        13 <br/>
                        May
                      </div> */}
                      <a className="links" href='/mainblogs'>
                          <img className="img-fluid" 
                          src={`uploads/${value.img}`} 
                        
                          alt={value.title} />  
                        </a>
                        
                    </div>
                    <div className="blogDate1">
                      
                    {date(index)} <br/>
                    {month(index)}
                      </div>
                    <div className="blogContBox blogp">
                      {/* <p className="text-muted">{dateSlice(index)}</p> */}
                      <div className="hb-tilte">
                        <p className="mid-title">{value.title}</p>
                      </div>
                      <p >
                          <Link to={"/blogs/" + value.id}>
                            <button className="h-btns">READ MORE</button>
                          </Link>
                        </p>
                      {/* Alternatively, you can use React Router's Link component:
                      <Link to={`/blogs/${value.id}`}>READ MORE</Link> */}
                    </div>
                  </div>
                </div>
              ))}
      </Slider>
              </div>
           
        </div>
      </section>
    </>
  );
};
export default HomeBlog;
