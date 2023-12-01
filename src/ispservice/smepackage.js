import Header from '../common/header';
import Footer from '../common/footer';
import '../css/mainpackage.css';
import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';


function SMEpackage() {
  return (
    <>


<div className='ispmainservice'>

<div className='container services'>
    
                            <div className='row Boxss'>
                                <div className="servicebox col-lg-4" data-aos="fade-right" data-aos-duration="2000">
                                    <div className="serviceContent-thiban">
                                        <div className='des'><img
                                            className=""
                                            src="../images/banner/Group 1 copy.jpg">
                                        </img></div>
                                        <p className="midss-title">BASIC PACKAGE</p>
                                        <p className="midess-title">
                                        10 Mbps</p>
                                        <p className="text-muted  midesss-title">Speed Up to 10 Mbps</p><hr className='smallserline'></hr>

                                        {/* <p className="text-muted midesss-title">Unlimited Data</p><hr className='smallserline'></hr> */}

                                        <p className="text-muted midesss-title">100% Uptime</p><hr className='smallserline'></hr>

                                        <p className="text-muted midesss-title">Public IP</p><hr className='smallserline'></hr>

                                        <p className="text-muted midesss-title">24/7 customer support</p>

                                        <p className='pac-amount'> Rs 3500/-<br></br><p className='par-package'>/Monthly</p></p>


                                        <div className='buttons'><button className='btns-greenbox'>                <Link className="mlink" to="/contact">
                                            subscribe now                </Link>
                                        </button></div>


                                    </div>
                                </div>
                                <div className="servicebox col-lg-4" data-aos="fade-up" data-aos-duration="2000">
                                    <div className="serviceContent-thiban">
                                        <div className='des'><img
                                            className="img-fluid"
                                            src="../images/banner/Group 2 copy.jpg">
                                        </img></div>

                                        <p className="midss-title">PREMIUM PACKAGE</p>
                                        <p className="midess-title">
                                        50 Mbps</p>
                                        <p className="text-muted  midesss-title">Speed Up to 50 Mbps</p><hr className='smallserline'></hr>

                                        {/* <p className="text-muted midesss-title">Unlimited Data </p><hr className='smallserline'></hr> */}

                                        <p className="text-muted midesss-title">100% Uptime</p><hr className='smallserline'></hr>

                                        <p className="text-muted midesss-title">Public IP</p><hr className='smallserline'></hr>

                                        <p className="text-muted midesss-title">24/7 customer support</p>

                                        <p className='pac-amount'> Rs 9500/-<br></br><p className='par-package'>/Monthly</p></p>


                                        <div className='buttons'><button className='btns-greenbox'>                <Link className="mlink" to="/contact">
                                            subscribe now                </Link>
                                        </button></div>

                                    </div>
                                </div>
                                <div className="servicebox col-lg-4" data-aos="fade-left" data-aos-duration="2000">
                                    <div className="serviceContent-thiban">
                                        <div className='des'><img
                                            className="img-fluid"
                                            src="../images/banner/Group 3 copy.jpg">
                                        </img></div>
                                        <p className="midss-title">HYPE PACKAGE</p>
                                        <p className="midess-title">
                                        100 Mbps</p>
                                        <p className="text-muted  midesss-title">Speed Up to  100 Mbps</p><hr className='smallserline'></hr>

                                        {/* <p className="text-muted midesss-title">Unlimited Data </p><hr className='smallserline'></hr> */}

                                        <p className="text-muted midesss-title">100% Uptime</p><hr className='smallserline'></hr>

                                        <p className="text-muted midesss-title">Public IP</p><hr className='smallserline'></hr>

                                        <p className="text-muted midesss-title">24/7 customer support</p>
                                        <p className='pac-amount'> Rs 15000/-<br></br><p className='par-package'>/Monthly</p></p>



                                        <div className='buttons'><button className='btns-greenbox'>

                                            <Link className="mlink" to="/contact">
                                                subscribe now
                                            </Link>
                                        </button></div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>

    </>
  );
}

export default SMEpackage;
