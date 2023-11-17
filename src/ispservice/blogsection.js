import 'font-awesome/css/font-awesome.css';
import '../css/ispservice.css';
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import React,{useState,useEffect} from 'react'
import { Link } from "react-router-dom";
import '../css/DwBlog.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

function Blogsection() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
      axios.get("https://infygain.in/api/blogdata").then((res) => {

        // sorted by date
        const sortedBlogs = res.data.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB - dateA;
      });
        setBlogs(sortedBlogs);
      });
    }, []);
  
    function dateSlice(id){
      const rawDate = blogs[id].date;
      const blogDate = rawDate.slice(0, 10);
      return blogDate;
  }
  const blogfilter = blogs.filter((val, index) => (
    val.category === "ISP Services"
  ));

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
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
  
  console.log(blogfilter);
    return (
        <>
            <div className='isp-blog'>
                <div className='container isps-service'>
                    <div className='row'>
                        <div className='col-md-3' ></div>
                        <div className='col-md-6 banner-thi-con'>
                            <div className=' contentsection' data-aos="fade-up" data-aos-duration="2000" >
                                <div className='button'><button className='btns-greens-third'>Blog</button></div>
                                <p className="maintitle-thi">Experience the pinnacle of speed with our fiber-optic internet</p>
                                <p className='text-muted details-blog-content'>Surpass the speed limits with our fiber-optic internet experience. Elevate your connectivity to the pinnacle of speed and performance.</p>

                            </div>
                        </div>
                        <div className='col-md-3'></div>
                    </div>
                    <div className='row'>
                    <div className=' col-md-12 dw-blog'>
                
                <Slider {...settings}>

               {blogfilter.map((value, index) => (

            <div className='dw-blogs1'>

            <img src= {"uploads/" + value.img} alt='best isp blogs' />
            <div className='dw-blogs2'>
              <span>
                ISP Services
                {/* {value.title} */}
            </span>
            </div>
            <div className='dw-bg'>
              {/* hiii */}
            </div>
            <div className='dw-blogs3'>
              <Link className=' blog-inn-conse' to="/overblog"><span className=' blog-inn-conse '>{value.title}</span></Link>
              <div className='blog-main-contentss' dangerouslySetInnerHTML={{__html:value.intro}}>
                </div>
              <span className='dw-blog-date'>{dateSlice(index)}</span>
            </div>
          </div>
                ))}
      
                </Slider>
      </div>
                        {/* <div className='col-md-4' data-aos="zoom-in-right" data-aos-duration="2000" >
                            <div className=" image-sectionano-blog">
                                <div className="img-Box">
                                    <img
                                        className="img-fluid img-zoom"
                                        src="/images/provenrelaiable.webp"
                                    ></img>
                                </div>

                                <div className="content-box ">
                                    <div className="content-box-content">
                                        <p className='blog-inn-con'>99% Proven Reliability</p>
                                        <p className=" text-muted details-blog-content ">Count on 99% proven reliability with our services. Trust in a dependable connection with us.</p>

                                    </div>
                                </div>

                            </div>

                        </div> */}
                        {/* <div className='col-md-4 ' data-aos="zoom-in-right" data-aos-duration="2000">
                            <div className=" image-sectionano-blog">
                                <div className="img-Box">
                                    <img
                                        className="img-fluid"
                                        src="/images/OC_KI_083-web.webp"
                                    ></img>
                                </div>

                                <div className="content-box ">
                                    <div className="content-box-content">
                                        <p className='blog-inn-con'>Parental Control</p>

                                        <p className=" text-muted details-blog-content ">Ensure a safe online environment with our robust parental control features. </p>

                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className='col-md-4' data-aos="zoom-in-right" data-aos-duration="2000">
                            <div className=" image-sectionano-blog">
                                <div className="img-Box">
                                    <img
                                        className="img-fluid"
                                        src="/images/ispserweb.webp"
                                    ></img>
                                </div>

                                <div className="content-box ">
                                    <div className="content-box-content">
                                        <p className='blog-inn-con'>24/7 Premium Support</p>

                                        <p className=" text-muted details-blog-content  ">Access 24/7 premium support whenever you need it.</p>

                                    </div>
                                </div>

                            </div>

                        </div> */}
                    </div>
                    <div className='button-blog'><button className='btns-green-blog'>get started</button></div>
                </div>
            </div>

            <div className='container ispsservice'>
                <div className='row ' >
                    <div className='col-md-6' data-aos="fade-right" data-aos-duration="1000" >
                        <div className='back-blog'>
                            <div className='blo-tex'><h2 className=''>
                                Stay safe with our secure, firewall-protected connection.</h2>
                                <p className='backblog-para'>Experience peace of mind with our firewall-protected, secure connection. Your online safety is our top priority.</p></div>
                            <div className='buttonlearan'><button className='btns-green-learnmoreanother'>learnmore</button></div>

                        </div>

                    </div>
                    <div className='col-md-6 nextblog' data-aos="fade-left" data-aos-duration="1000" >
                        <div className='back-blog'>
                            <div className='blo-tex'><h2 className=''>
                                Next-Gen Wi-Fi® Tailored for Your Family's Connectivity Needs</h2>
                                <p className='backblog-para'>Unlock the potential of next-generation Wi-Fi® designed with your family in mind.</p></div>
                            <div className='buttonlearan'><button className='btns-green-learnmoreanother'>learnmore</button></div>

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

export default Blogsection;
