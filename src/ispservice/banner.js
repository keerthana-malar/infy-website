import 'font-awesome/css/font-awesome.css';
import '../css/ispservice.css';
import { Link } from "react-router-dom";

function Banner() {
    return (
        <>

            <div className=' ispservice '>
                <div className=" topbannersection">
                    <div className='container '
                    >
                        <div className='row'>
                            <div className='col-md-7' data-aos="fade-up" data-aos-duration="1000">
                                <div className=' contentsection'>
                                    <p className="maintitle" >“Your network our future”.</p>
                                    <div className='smalline'></div>
                                    <p className='bannercontent' data-aos="fade-up" data-aos-duration="2000">
                                    Internet service provider (ISP) we provide access to the internet to both 
                                    personal and business customers.
                                     ISPs make it possible for their customers to surf the web, shop online, 
                                     conduct business, and connect with family and friends.</p>

                                </div>
                                <div className='lists' data-aos="fade-up" data-aos-duration="2000">
                                    <ul className='listlines'>
                                        <li><i class="fa fa-thin fa-check fa-2xs" style={{ color: "#15e037" }}></i>  Dedicated 24/7 customer care</li>
                                        <li><i className="fa fa-thin fa-check" style={{ color: '#15e037' }}></i>   Unlimited Data usage</li>
                                        <li><i className="fa fa-thin fa-check" style={{ color: '#15e037' }}></i>  Plan Starts from Rs.349</li>
                                    </ul>
                                </div>
                                <Link to="/isp-package">
                                <div className='button' data-aos="fade-up" data-aos-duration="1000"><button className='btns-green'>see plan & deals</button></div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Banner;
