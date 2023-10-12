import 'font-awesome/css/font-awesome.css';
import '../css/ispservice.css';
import { AiOutlineCheckCircle } from "react-icons/ai";
function Servbelowcont() {

    return (
        <>
            <div className=' container service-below-sec'>
                <div className='row align-items-center'>
                    <div className='col-md-6 con-boxse' data-aos="zoom-in-right" data-aos-duration="2000">
                        <div className='button '><button className='btns-greens'>WHO WE ARE</button></div>
                        <h1 className='head-serv'>Empowering people through technology.</h1>
                        <p className='text-muted ser-below-cont'>Providing Cutting-Edge Solutions for a Connected World. Experience the future with us.</p>
                        <div className='servlists'>
                            <ul className='servlistlines'>
                                <li className='firlis'><AiOutlineCheckCircle className='roundicon' />
                                    <h className='mintit'> Internet for home</h></li>
                                <p className='text-muted servparaone'>Experience the convenience of high-speed Internet at home. Stay connected with seamless streaming, remote work capabilities, and online entertainment.</p>
                                <li><AiOutlineCheckCircle className='roundicon' />
                                    <h className='mintit'> Internet for Business</h></li>
                                <p className='text-muted servparaone'>Power your business operations with dependable Internet connectivity. Enhance productivity, communication, and growth with tailored business solutions.</p>
                                <li><AiOutlineCheckCircle className='roundicon' />
                                    <h className='mintit'> Internet for Educations</h></li>
                                <p className='text-muted servparaone'>Enable effective learning and collaboration with reliable Internet services for educational institutions. Empower students and educators with quality online connectivity.</p>

                            </ul>
                        </div>                </div>
                    <div className='col-md-6  bocximage' data-aos="zoom-in-right" data-aos-duration="2000">
                        <img src="/images/banner/green-man.webp" alt="service icons" className=' img-fluid experience'></img>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Servbelowcont;