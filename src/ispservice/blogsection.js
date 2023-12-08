import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HomeBlog = () => {
    const [blogs, setBlogs] = useState([]);

    var settings = {
        infinite: true,
        dots: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
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
 function dateSlice(id) {
    const rawDate = blogs[id].date;
    const blogDate = rawDate.slice(0, 10);
    return blogDate;
  }


    useEffect(() => {
        axios.get("https://infygain.com/api/blogdata").then((res) => {
            setBlogs(res.data);

        });
    }, []);
    function date(id) {
        const rawDate = blogs[id].date;
        const timestamp = new Date(rawDate);
        const month = timestamp.getMonth() + 1;
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
    console.log(blogs[0])
  const blogfilter = blogs.filter((val, index) => (
    val.category === "ISP Services"
  ));
    return (
        <>
            <section className="homeBlogSe">
                <div className="container">
                    <div className="homeBlogTopCont text-center">
                        <p className="maintitle-blo">Main Blogs</p>
                        <p className="details-blog-content">Discover Valuable Insights on Fast & Reliable Internet in Our Blogs.</p>
                        <Link to="/mainblogs" className="btns-greens-third" style={{ textDecoration: 'none' }}>
                            View Blogs &nbsp; <span className="fa fa-arrow-right" ></span>{" "}
                        </Link>
                    </div>

                    <div className="homeBloBox">
                        <Slider {...settings}>
                            {blogfilter.map((value, index) => (

                                <div key={value.id} className="col-md-4 blog-one-boxes">

                                    <div className="dw-blogs1">
                                        <div className="dw-blogs1">
                                            {/* <div className="blogDate">
                  13 <br/>
                  May
                </div> */}
                                            <a className="links" href={"/blogs/" + value.id}>
                                                <img className="dw-blogs1 "
                                                    src={`uploads/${value.img}`}

                                                    alt={value.title} />
                                                <div className='dw-blogs2'>
                                                    <span>Ispservice</span>
                                                </div>
                                            </a>

                                        </div>
                                        {/* <div className="blogDate1 ">

                                            {date(index)}
                                            {month(index)}
                                        </div> */}
                                        <div className="blogContBox dw-blogs6">
                                            {/* <p className="text-muted">{dateSlice(index)}</p> */}
                                            <p className='dw-blogs7'>{date(index)}{month(index)}</p>
                                            <div className="dwblog-tit"><Link className=' blog-inn-conse' to={"/blogs/"+value.id}><span className='blog-main-contentsss' href={"/blogs/" + value.id}>{value.title}</span></Link><br></br></div>
                                            <div className="btn-blogs"><a className="btns-greens-third" style={{ textDecoration: 'none' }} href={"/blogs/" + value.id}>
                                                READ MORE
                                            </a></div>
                                          

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
