import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../css/home.css";
import { Link } from 'react-router-dom';


const NewService = () => {
    // const settings = {
    //     dots: true,
    //     // infinite: true,
    //     speed: 500,
    //     slidesToShow: 3,
    //     slidesToScroll: 1

    // };
    return (
        <div className='container home-sliderr' >
            {/* arrows */}
            {/* <div className='ho-arr'>
                <button className='home-arrow'><BsArrowLeft /></button>
            </div>
            <div className='ho-arr1'>
                <button className='home-arrow1'><BsArrowRight /></button>
            </div> */}
            <div className='container slider-below-content'>
                <p className=' mains-heading-color'>OUR SERVICE</p>

                <div className='row'>
                    <div className='col-lg-6'>
                        <p className=' home-about-title'>We Offer a WideVariety of IT Services</p>
                    </div>
                    <div className='col-lg-4'>
                        <p className='text-muted home-ourservice-des'>Web designing in a powerful way of just not a profession, however, in a passion for our Company. We have a tendency to believe the idea that smart looking.</p>
                    </div>
                    <div className=' col-lg-2 ourser-btn'>

                        <Link to="/contact" className="btns btn-servicehome">
                            REACH US &nbsp; <span className="fa fa-arrow-right"></span>
                        </Link>
                    </div>

                </div>

            </div>

            {/* <Slider  {...settings}> */}
            <div className='row '>
                <div className='col-md-4 col-lg-4 serv-home-sec'>
                    <div className='home-slide'>

                        <img className='hom-sld-img' 
                        // src='/images/WEB-img3.webp'
                        src='/images/w-3.webp'
                         alt='best It supports'
                         title="Best IT supports"/>

                        <div className='home-cont-overlay'>

                            <img src="/images/icons/it.webp" alt="service icons" title='Best IT supports'></img>
                            <Link to="/Iotservice" >

                                <h2 className="mid-title serviceIt">IT Support</h2>
                            </Link>

                            <p className="text-muted">
                                Unlock IoT's Power. Strategy, Devices, Insights, and Security. Innovate with Us. </p>
                        </div>

                    </div>
                </div>
                <div className='col-md-4 col-lg-4 serv-home-sec'>

                    <div className='home-slide'>
                        <img className='hom-sld-img' 
                        // src='/images/WEB 2-02.webp' 
                        src='/images/w-2.webp' 
                        alt='best web services' title='Best Web Services'/>
                        <div className='home-cont-overlay'>

                            <img src="/images/icons/web.webp" alt="service icons"  title='Best Web Services'></img>
                            <Link to="/ServiceSeo" >

                            <h2 className="mid-title serviceIt">Web Development</h2>
                            </Link >
                            <p className="text-muted">
                                Crafting Digital Excellence. Custom Websites, E-Commerce, SEO, Maintenance.</p>
                        </div>

                    </div>
                </div>
                <div className='col-md-4 col-lg-4 serv-home-sec'>

                    <div className='home-slide'>
                        <img className='hom-sld-img' 
                        // src='/images/WEB 1-01.webp' 
                        src='/images/w-1.webp' 
                        alt='best isp services' title='Best ISP Services'/>
                        <div className='home-cont-overlay'>

                            <img src="/images/icons/isp.webp" alt="service icons" title='Best ISP Services'></img>
                            <Link to="/ispservice" >
                            <h2 className="mid-title serviceIt">ISP Services</h2>
                            </Link>
                            <p className="text-muted">
                                Seamless Connectivity. High-Speed Internet, Network Security, 24/7 Support. </p>
                        </div>
                    </div>
                </div>
            </div>



            {/* </Slider> */}



            {/* <div>
                    <img src='/images/serv1.png' />
                </div>
                <div>
                    <img src='/images/serv1.png' />
                </div>
                <div>
                    <img src='/images/serv1.png' />
                </div> */}

        </div>
    )
}

export default NewService;