import 'font-awesome/css/font-awesome.css';
import '../css/ispservice.css';
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
                                    <p className="maintitle" >Your World, Our Network.</p>
                                    <div className='smalline'></div>
                                    <p className='bannercontent' data-aos="fade-up" data-aos-duration="2000">Discover lightning-fast Internet, crystal-clear Voice, and immersive IPTV entertainment with Infygain technologies, your trusted ISP. Explore our broadband solutions, unbeatable connectivity, and competitive pricing today.</p>

                                </div>
                                <div className='lists' data-aos="fade-up" data-aos-duration="2000">
                                    <ul className='listlines'>
                                        <li><i class="fa fa-thin fa-check fa-2xs" style={{ color: "#15e037" }}></i>  Dedicated 24/7 customer care</li>
                                        <li><i className="fa fa-thin fa-check" style={{ color: '#15e037' }}></i>   Up to 300 GB</li>
                                        <li><i className="fa fa-thin fa-check" style={{ color: '#15e037' }}></i>  Plus, up to $600 in deals!*</li>
                                    </ul>
                                </div>
                                <div className='button' data-aos="fade-up" data-aos-duration="1000"><button className='btns-green'>see plan & deals</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Banner;
