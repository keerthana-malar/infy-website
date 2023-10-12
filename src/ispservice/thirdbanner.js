import 'font-awesome/css/font-awesome.css';
import '../css/ispservice.css';
import { Link } from "react-router-dom";

function Thirdbanner() {
    return (
        <>

            <div className='ispservice '>
                <div className=" topbannersectionthird">
                    <div className='container thi-ban'
                    ><div className='row'>
                            <div className='col-md-3'></div>
                            <div className='col-md-6 banner-thi-con' data-aos="fade-up" data-aos-duration="2000">
                                <div className=' contentsection'>
                                    <div className='button'><button className='btns-greens-third'>choose your package</button></div>
                                    <p className="maintitlethi">Unlock the Biggest Savings Ever on Home Satellite Internet!</p>
                                    <p className='bannercontent'>Experience unmatched savings on home satellite internet. Get connected with lightning speed.</p>

                                </div>

                            </div>
                            <div className='col-md-3'></div>
                        </div>
                        <div className=' services'>
                            <div className='row Boxss'>
                                <div className="servicebox col-lg-4" data-aos="fade-right" data-aos-duration="2000">
                                    <div className="serviceContent-thiban">
                                        <div className='des'><img
                                            className="img-fluid"
                                            src="../images/banner/Group 1 copy.jpg">
                                        </img></div>
                                        <p className="midss-title">BASIC PACKAGE</p>
                                        <p className="midess-title">
                                        50 Mbps</p>
                                        <p className="text-muted  midesss-title">Speed Up to 50 Mbps</p><hr className='smallserline'></hr>

                                        <p className="text-muted midesss-title">Unlimited Data</p><hr className='smallserline'></hr>

                                        <p className="text-muted midesss-title">100% Uptime</p><hr className='smallserline'></hr>

                                        <p className="text-muted midesss-title">IP Private</p><hr className='smallserline'></hr>

                                        <p className="text-muted midesss-title">24/7 customer support</p>

                                        <p className='pac-amount'> Rs 1500/-<br></br><p className='par-package'>/Monthly</p></p>


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
                                        100 Mbps</p>
                                        <p className="text-muted  midesss-title">Speed Up to 100 Mbps</p><hr className='smallserline'></hr>

                                        <p className="text-muted midesss-title">Unlimited Data </p><hr className='smallserline'></hr>

                                        <p className="text-muted midesss-title">100% Uptime</p><hr className='smallserline'></hr>

                                        <p className="text-muted midesss-title">Free Public IP</p><hr className='smallserline'></hr>

                                        <p className="text-muted midesss-title">24/7 customer support</p>

                                        <p className='pac-amount'> Rs 2500/-<br></br><p className='par-package'>/Monthly</p></p>


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
                                        250 Mbps</p>
                                        <p className="text-muted  midesss-title">Speed Up to  250 Mbps</p><hr className='smallserline'></hr>

                                        <p className="text-muted midesss-title">Unlimited Data </p><hr className='smallserline'></hr>

                                        <p className="text-muted midesss-title">100% Uptime</p><hr className='smallserline'></hr>

                                        <p className="text-muted midesss-title">Free Public IP</p><hr className='smallserline'></hr>

                                        <p className="text-muted midesss-title">24/7 customer support</p>
                                        <p className='pac-amount'> Rs 5000/-<br></br><p className='par-package'>/Monthly</p></p>



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
                </div>
            </div>
        </>

    );
}

export default Thirdbanner;
