import React from 'react';
import 'font-awesome/css/font-awesome.css'

function Footer() {
    const handleFacebookClick = (event) => {
        event.preventDefault(); // Prevent the default behavior (navigation)
        // Add your custom action here (e.g., show a Facebook modal or perform an action)
    };
    return (
        <footer>

            <div className="mainfooter">
                <div className='small-box'>
                    <div className='row' indhu>
                        <div className='col-xs-6 col-sm-3 mb-3 name'>
                            <p className='infy'>Infygain</p>
                        </div>
                        <div className='col-xs-6 col-sm-3 mb-3 calls'>
                            <p className='call'><b>CALL FOR SUPPORT</b></p>
                            <p className='phone'>9952141444</p>
                            <p className='email'>info@infygain.com</p>

                        </div>






                        
                        <div className='col-xs-6 col-sm-3 mb-3 nam'>
                            <h className='infyy'><b>Follow Us</b><br></br></h>
                            <p className='hari'> hari complex opp.prozone mall,
                                Sathy Rd, Saravanampatti,
                                Coimbatore, Tamil Nadu 641035</p>
                        </div>
                        <div className='col-xs-6 col-sm-3 mb-3 nam'>
                            <h className='infyy'><b>Follow Us </b><br></br></h>
                            <a href="#" className="socialicon"><i className="fa fab fa-facebook"></i></a>
                            <a href="#" className="socialicon"><i className="fa fab fa-twitter"></i></a>
                            <a href="#" className="socialicon"><i className="fa fab fa-instagram"></i></a>
                            <a href="#" className="socialicon"><i className="fa fab fa-youtube"></i></a>

                        </div>

                    </div>
                </div>
                <div className='row'>
                    <div className='col-xs-6 col-sm-3 mb-3 '>
                        <h1 className='mini-title one'>Our Services</h1>
                        <ul className='text-muted '>
                            <li>Complete Network Solutions</li>
                            <li> Laptop / Desktop Sales and Service</li>
                            <li>CCTV / Biometrics Sales and Service</li>
                            <li> Web Development / Graphic Designs</li>
                            <li> Printers / Devices</li>
                            <li>POS / Billing Software</li>
                        </ul>
                    </div>
                    <div className='col-s-6 col-sm-3'>
                        <h1 className='mini-title two'>Quick Links</h1>
                        <ul className='text-muted quicklinks mb-5'>
                            <li> Home</li>
                            <li> About Us</li>
                            <li> Services</li>
                            <li>Blog</li>
                            <li> Contact Us</li>
                            <button className="btns online">
                                Online Store &nbsp;<span className="fa fa-arrow-right"></span>
                            </button><br></br>
                            <button className="btns book">
                                Book Services &nbsp;<span className="fa fa-arrow-right"></span>
                            </button>
                        </ul>
                    </div>
                    <div className='col-xs-6 col-sm-3'>
                        <h1 className='mini-title three'>Address</h1>
                        <p className='text-muted address'><b>hari complex opp.prozone mall,
                            Sathy Rd, Saravanampatti,
                            Coimbatore, Tamil Nadu 641035</b></p><hr className='text-muted'></hr>
                        <p className='text-muted address'>9952141444</p>
                        <p className='text-muted address'><b>info[at]infygain[dot]com</b></p>
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
                <div className='socialmediaicons'>
                    <p className='mini-title follow'>Follow Us On</p>
                    <div className='icons'>
                        <a href="https://www.facebook.com/your-page-url" target="_blank" rel="noopener noreferrer" onClick={handleFacebookClick}>
                            <i className="fa fa-facebook"></i>
                        </a>
                        <a className='sm' href="" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-twitter"></i>
                        </a>
                        <a className='sm' href="" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-instagram"></i>
                        </a>
                        <a className='sm' href="" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-whatsapp"></i>
                        </a>
                        <a className='sm' href="" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-linkedin"></i>
                        </a>
                        <a className='sm' href="" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-youtube"></i>
                        </a>
                        <hr className='text-muted'></hr>
                        <div className='text-muted copyright'>
                            <div className='row'>
                                <div className='col-md-6 footercontent'>
                                    Copyright © 2023 Infygain. All Rights Reserved.
                                </div>
                                <div className='col-md-6 footercon'>
                                    <p className='abou'><b>About Us</b></p><p className='abou'><b>Contact Us</b></p>

                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </footer>
    );
}

export default Footer;