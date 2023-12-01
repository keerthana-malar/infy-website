import 'font-awesome/css/font-awesome.css';
import '../css/ispservice.css';
import { Link } from "react-router-dom";

function Secondbanner() {
    return (
        <>

            <div className=' ispservice1 '>
                <div className=" topbannersection1" data-aos="fade-up" data-aos-duration="1000">
                    <div className='container '
                    >
                        <div className='container row'>
                            <div className='col-md-5 bor' >
                                <div className=' contentsection'>
                                    {/* <div className='button' data-aos="fade-up" data-aos-duration="1000"><button className='btns-greens'>promo</button></div> */}

                                    <p className='bannercontentone' data-aos="fade-up" data-aos-duration="1000">Experience Lightning-Fast Internet Today!</p>

                                </div>
                                <div className='lists'>
                                    <p className='bannercontentpara' data-aos="fade-up" data-aos-duration="1000">Experience blazing-fast internet with Infygain. Say goodbye to buffering and lag – choose your speed, connect, and enjoy the future of connectivity.</p>
                                </div>
                                <div className='button' data-aos="fade-up" data-aos-duration="1000"><Link to="/About"><button className='btns-green'>get started</button></Link></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' bannerbelcon'>
                    <div className='container'>
                        <div className=' row ban-two-hea'>
                            <div className='col-md-6' data-aos="fade-right" data-aos-duration="1000">
                                <div className='button'><button className='btns-greens'>what we offer</button></div>
                                <p className='ban-two-bel'>We're Your Trusted Internet Service Professionals.</p>

                            </div>
                            <div className='col-md-6' data-aos="fade-left" data-aos-duration="1000">
                                <p className='text-muted ban-two-con'>Discover the expertise of our trusted Internet service professionals at Infygain technologies. Count on us for reliable connectivity solutions and exceptional service.</p>
                                <div className='button'><Link to="/isp-package"><button className='btns-green-learn'>learnmore</button></Link></div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Secondbanner;
