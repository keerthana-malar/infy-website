import React from 'react';
import 'font-awesome/css/font-awesome.css'
import '../css/footer.css';
import {Link} from 'react-router-dom';
import { TbArrowBigUpFilled } from "react-icons/tb";


function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth', 
        });
      };
    
    return (
        <footer>
            <div className="mainfooter">
                <div className='container'>
                <div className='small-box '>
                    <div className='row small'>
                        <div className='col-lg-3  name'>
                            <p className='infy'>Infygain</p>
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-12  nam nam1'>
                            <p className='call'><b>CALL FOR SUPPORT</b></p>
                            <p className='phone'>9952141444</p>
                        </div>


                        <div className='col-lg-3 col-md-4 col-sm-12 nam'>

                            <h1 className='infyy'><b>Follow Us</b><br></br></h1>
                            <p className='hari text-muted'> Hari complex opp.prozone mall,
                                Sathy Rd, Saravanampatti,
                                Coimbatore, Tamil Nadu 641035</p>
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-12  nam-icon'>
                            <h1 className='infyy-icon'><b>Follow Us </b><br></br></h1>
                            <div className='infyicon'>
                            <a href="#" className="infyicon infyicon1"><i className="fa fab fa-facebook"></i></a>
                            <a href="#" className="infyicon infyicon1"><i className="fa fab fa-twitter"></i></a>
                            <a href="#" className="infyicon infyicon1"><i className="fa fab fa-instagram"></i></a>
                            <a href="#" className="infyicon infyicon1"><i className="fa fab fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='smallbox-1'>
                    <div className='row'>
                        <div className='col-xs-6 col-sm-3 mb-3 '>
                            <h1 className='mini-title one'>Our Services</h1>
                            <ul className='text-muted '>
                                {/* <li>Complete Network Solutions</li>
                                <li> Laptop / Desktop Sales and Service</li>
                                <li>CCTV / Biometrics Sales and Service</li>
                                <li> Web Development / Graphic Designs</li>
                                <li> Printers / Devices</li>
                                <li>POS / Billing Software</li> */}
                                <li>IT Supports</li>
                                <li>ISP</li>
                                <li>Web / App</li>
                            </ul>
                        </div>
                        <div className='col-xs-6 col-sm-3'>
                            <h1 className='mini-title two'>Quick Links</h1>
                            <ul className='text-muted quicklinks mb-5'>
                                {/* <li> <Link to="/">Home</Link></li> */}
                                <li> <Link to="/about">About Us</Link></li>
                                {/* <li> <Link to="/service">Services</Link></li> */}
                                <li><Link to="/blog">Blog</Link></li>
                                <li> <Link to="/contact">Contact Us</Link></li>
                                <li> <Link to="/contact">Online Store</Link></li>
                                {/* <li> <Link to="/contact">Book Services</Link></li> */}
                            </ul>
                        </div>
                        <div className='col-xs-6 col-sm-3'>
                            <h1 className='mini-title three'>Address</h1>
                            <p className='text-muted address'><b>hari complex opp.prozone mall,
                                Sathy Rd, Saravanampatti,
                                Coimbatore, Tamil Nadu 641035</b></p><hr className='text-muted'></hr>
                            <p className='text-muted address'>9952141444</p>
                            <p className='text-muted address'><b>info@infygain.com</b></p>
                        </div>
                        <div className='col-xs-6 col-sm-3'>
                            <h1 className='mini-title four'>Legal Links</h1>
                            <ul className='text-muted legallinks'>
                                <li>Privacy Policy</li>
                                <li>Terms and Conditions</li>
                                <li> Delivery and Shipping Policy</li>
                                <li> Refund and Cancellation Policy</li>
                                <li> Quality Policy</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='socialmediaicons'>
                    <p className='mini-title follow'>Follow Us On</p>
                    <div className='iconss'>
                        <a href="https://www.facebook.com/your-page-url" target="_blank" rel="noopener noreferrer" >
                            <i className="fa fa-facebook facebook"></i>
                        </a>
                        <a className='' href="#" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-twitter twitter"></i>
                        </a>
                        <a className='' href="#" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-instagram instagram"></i>
                        </a>
                        <a className='' href="#" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-whatsapp whatsapp"></i>
                        </a>
                        <a className='' href="#" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-linkedin linkedin"></i>
                        </a>
                        <a className='' href="#" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-youtube youtube"></i>
                        </a>
                        <hr className='text-muted'></hr>
                        <div className='text-muted copyright'>
                            <div className='row'>
                                <div className='col-md-6 footercontent'>
                                    Copyright © 2023 Infygain. All Rights Reserved.
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="topmenu" onClick={scrollToTop}>
                <TbArrowBigUpFilled/>
            </div>
        </footer>
    );
}

export default Footer;