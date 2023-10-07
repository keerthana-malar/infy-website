import React from 'react'
import Slider from 'react-slick';
import {BsFillPersonFill} from 'react-icons/bs'
import {AiFillCalendar} from 'react-icons/ai'
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../css/IotBlogs.css'


const IotBlogs = () => {
  const customDots = () => {
   
  }
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        // initialSlide: 0,
        // adaptiveHeight: true,
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
  return (
    <div className='container iot-blogs'>
        
        <div className='container blogs-row1'>

            <div className='container blog-col1'>
                <div className='blog-head'>
                    <div className='blog-line'></div>
                    <h4>Blog</h4>
                </div>
                <div className='blogs-content'>
                    <span>Learn more from our </span><span className='blog-color'>latest news</span>
                </div>
            </div>

            <div className='blog-col2'>
                <p>
                    Follow our latest news and thoughts which focuses exclusively on design, art, vintage, and also work updates
                </p>
            </div>

        </div>

        <Slider className='blog-sliders'  {...settings}>
            <div className='blog-slide '>
              
                <img className='bl-image'  src='/images/image1.jpg'/>
                <div className=' blog-overtext' >
                    
                    <div className='bl-col1'>
                      <p><AiFillCalendar className='bl-icons'/> &nbsp; 5Nov,2019 &nbsp;</p>
                      <p><BsFillPersonFill className='bl-icons'/> &nbsp; Rinnah</p>
                    </div>
                    <p className='bl-over-para1'>Reason to explian fast business builder</p>

                    <div className='blog-overlay-text'>
                      <p className='bl-overlay-para1'>Reason to explian fast business builder</p>
                      <p className='bl-overlay-para2'>Read More &gt;&gt;</p>
                  </div>
              </div>
            </div>


            <div className='blog-slide'>
                <img className='bl-image' src='/images/image1.jpg'/>
                <div className=' blog-overtext' >
                    
                    <div className='bl-col1'>
                      <p><AiFillCalendar className='bl-icons'/> &nbsp; 5Nov,2019 &nbsp;</p>
                      <p><BsFillPersonFill className='bl-icons'/> &nbsp; Rinnah</p>
                    </div>
                    <p className='bl-over-para1'>Reason to explian fast business builder</p>

                    <div className='blog-overlay-text'>
                      <p className='bl-overlay-para1'>Reason to explian fast business builder</p>
                      <p className='bl-overlay-para2'>Read More &gt;&gt;</p>
                  </div>
              </div>
            </div>
            <div className='blog-slide'>
                <img className='bl-image' src='/images/image1.jpg'/>
                <div className=' blog-overtext' >
                    
                    <div className='bl-col1'>
                      <p><AiFillCalendar className='bl-icons'/> &nbsp; 5Nov,2019 &nbsp;</p>
                      <p><BsFillPersonFill className='bl-icons'/> &nbsp; Rinnah</p>
                    </div>
                    <p className='bl-over-para1'>Reason to explian fast business builder</p>

                    <div className='blog-overlay-text'>
                      <p className='bl-overlay-para1'>Reason to explian fast business builder</p>
                      <p className='bl-overlay-para2'>Read More &gt;&gt;</p>
                  </div>
              </div>
            </div>
            <div className='blog-slide'>
                <img className='bl-image' src='/images/image1.jpg'/>
                <div className=' blog-overtext' >
                    
                    <div className='bl-col1'>
                      <p><AiFillCalendar className='bl-icons'/> &nbsp; 5Nov,2019 &nbsp;</p>
                      <p><BsFillPersonFill className='bl-icons'/> &nbsp; Rinnah</p>
                    </div>
                    <p className='bl-over-para1'>Reason to explian fast business builder</p>

                    <div className='blog-overlay-text'>
                      <p className='bl-overlay-para1'>Reason to explian fast business builder</p>
                      <p className='bl-overlay-para2'>Read More &gt;&gt;</p>
                  </div>
              </div>
            </div>
            <div className='blog-slide'>
                <img className='bl-image' src='/images/image1.jpg'/>
                <div className=' blog-overtext' >
                    
                    <div className='bl-col1'>
                      <p><AiFillCalendar className='bl-icons'/> &nbsp; 5Nov,2019 &nbsp;</p>
                      <p><BsFillPersonFill className='bl-icons'/> &nbsp; Rinnah</p>
                    </div>
                    <p className='bl-over-para1'>Reason to explian fast business builder</p>

                    <div className='blog-overlay-text'>
                      <p className='bl-overlay-para1'>Reason to explian fast business builder</p>
                      <p className='bl-overlay-para2'>Read More &gt;&gt;</p>
                  </div>
              </div>
            </div>
            <div className='blog-slide'>
                <img className='bl-image'  src='/images/image1.jpg'/>
                <div className=' blog-overtext' >
                    
                    <div className='bl-col1'>
                      <p><AiFillCalendar className='bl-icons'/> &nbsp; 5Nov,2019 &nbsp;</p>
                      <p><BsFillPersonFill className='bl-icons'/> &nbsp; Rinnah</p>
                    </div>
                    <p className='bl-over-para1'>Reason to explian fast business builder</p>

                    <div className='blog-overlay-text'>
                      <p className='bl-overlay-para1'>Reason to explian fast business builder</p>
                      <p className='bl-overlay-para2'>Read More &gt;&gt;</p>
                  </div>
              </div>
            </div>


        </Slider>
    </div>
  )
}

export default IotBlogs