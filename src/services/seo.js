import '../css/seo.css';
import '../css/common.css';
import { BsFacebook, BsTwitter, BsInstagram, BsWhatsapp } from "react-icons/bs";


function webservice(){
    return(
        <>
        <div className='mainheadbx'>
            <div className='headbx1'>
                <div className='imgbox1'>
                    <img className='box1 img-fluid'src="./images/seo/flight.png"></img>
                    <img className='box2 img-fluid'src="./images/seo/target.png"></img>
                </div>
            </div>
            <div className='headbx2'>
                <p className='head-title'>We make your<br></br> brand story<br></br><span>more powerful</span></p>
                <p className="text-muted head-con">We use storytelling principles and techniques for the creation of narratives around a brand’s story and identity.</p>
                <div className='btns head-btn'>GET YOUR FREE CONSULT</div>
                <a className='mid-title headlink' href="https://infygain.com">www.infygain.com</a>
                <div className='soicon'>
                        <li><a href=""><BsFacebook/></a></li>
                        <li><a href=""><BsTwitter/></a></li>
                        <li><a href=""><BsInstagram/></a></li>
                        <li><a href=""><BsWhatsapp/></a></li>
                </div>
                <div className='rock'>
                <img className='img-fluid' src="./images/seo/rockett.png"></img>
                </div>
            </div>
        </div>
        </>

    );
}
export default webservice;