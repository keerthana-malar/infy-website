import React, { useState } from 'react';
import "../css/BestService.css";
import { BsCheckLg } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Spinner from 'react-bootstrap/Spinner';


function BestService() {
    const [isLoading, setIsLoading] = useState(false);
    const [showLoader, setShowLoader] = useState(false);

    const [box1, setBox1] = useState(true);
    const [box2, setBox2] = useState(false);
    const [box3, setBox3] = useState(false);
    const [box4, setBox4] = useState(false);
    const [box5, setBox5] = useState(false);

    const handleClick = () => {
        setIsLoading(true);
        setShowLoader(true); 
    
        setTimeout(() => {
          setIsLoading(false); 
          setShowLoader(false);
        }, 1000);
      };
      const Clickon1=()=>{
        handleClick();
        Value1();
      }
      const Clickon2=()=>{
        handleClick();
        Value2();
      }
      const Clickon3=()=>{
        handleClick();
        Value3();
      }
      const Clickon4=()=>{
        handleClick();
        Value4();
      }
      const Clickon5=()=>{
        handleClick();
        Value5();
      }

    const Value1 = () => {
        setBox1(true);
        setBox2(false);
        setBox3(false);
        setBox4(false);
        setBox5(false);

    }
    const Value2 = () => {
        setBox1(false);
        setBox2(true);
        setBox3(false);
        setBox4(false);
        setBox5(false);
    }
    const Value3 = () => {
        setBox1(false);
        setBox2(false);
        setBox3(true);
        setBox4(false);
        setBox5(false);
    }
    const Value4 = () => {
        setBox1(false);
        setBox2(false);
        setBox3(false);
        setBox4(true);
        setBox5(false);
    }
    const Value5 = () => {
        setBox1(false);
        setBox2(false);
        setBox3(false);
        setBox4(false);
        setBox5(true);
    }
    return (
        <div className='container'>
    <div className={isLoading ? "opaque" :  "opaque1"}>
        <div className='row overall'>
                <div className='col-md-4'>
                    <div className='rightboxheadcol'>
                        <div className='rightbox' onClick={Clickon1}>
                            <p> CCTV & Bio-Metrics</p>
                            <span className='iconindex1'><IoIosArrowForward /></span>
                        </div>
                        <br></br>
                        <div className='rightbox' onClick={Clickon2}> <p>Laptop Desktop Sales and Service </p>
                            <span className='iconindex2'><IoIosArrowForward /></span></div><br></br>
                        <div className='rightbox' onClick={Clickon3}> <p>Web Development</p>
                            <span className='iconindex3'><IoIosArrowForward /></span></div><br></br>
                        <div className='rightbox' onClick={Clickon4}> <p>Av Solutions</p>
                            <span className='iconindex4'>
                                <IoIosArrowForward /></span></div><br></br>
                        <div className='rightbox' onClick={Clickon5}><p>Laptop and Desktop Rent</p>
                            <span className='iconindex5'><IoIosArrowForward /></span></div>
                    </div>
                </div>
                <div className='col-md-8'>
                    <div className='firstlineflex'>
                        <div className='yellowbreak'></div>
                        <div className='firstheading'>
                            <h1>We give the best Services </h1>
                        </div>
                    </div>
                    <div className='paraoutdoor'>
                        {box1 ? <p className='text-muted firstparavalue'>Facial recognition technology allows
                            users to log in to websites by
                            scanning their faces. It's becoming more common for user
                            verification and authentication in mobile applications. Voice recognition technology can be used for voice-based
                            user authentication.
                        </p> : null}
                        {box2 ? <p className='text-muted firstparavalue'>Is your laptop or desktop not performing at its best?
                            Our skilled technicians can diagnose and repair a variety of issues,
                            from hardware problems to software glitches. We also offer upgrades to boost your system's performance.
                        </p> : null}
                        {box3 ? <p className='text-muted firstparavalue'>Discover our top-notch website design and
                            development services. We build custom websites
                            tailored to your unique needs,
                            whether it's a simple site or a complex e-commerce platform.We don't believe in one-size-fits-all.
                            Our solutions are customized to fit your unique business goals and requirements.
                        </p> : null}
                        {box4 ? <p className='text-muted firstparavalue'>We believe in tailoring AV solutions to your specific needs,
                            ensuring they match your goals and budget.We specialize in designing and installing integrated AV systems for meeting
                            rooms, auditoriums, classrooms, and more.
                        </p> : null}
                        {box5 ? <p className='text-muted firstparavalue'>Our rental packages often include technical support and maintenance,
                            ensuring your equipment runs smoothly.Renting is a cost-effective solution, with no upfront
                            investment and predictable monthly costs.Renting is a cost-effective solution, with no upfront investment and predictable monthly costs
                        </p> : null}
                    </div>
                    <div className='paraoutdoor1'>
                        {box1 ? <p className='text-muted secondparavalue'>MFA combines two or more authentication methods, including biometrics, to enhance security.
                            For example, a user might need to provide their fingerprint and a password to access a website.</p> : null}
                        {box2 ? <p className='text-muted secondparavalue'>

                            We believe in offering only top-quality products and services. When you choose us, you're
                            choosing reliability and performance.</p> : null}
                        {box3 ? <p className='text-muted secondparavalue'>

                            We follow rigorous quality assurance and testing
                            processes to ensure your website is bug-free and ready to perform.</p> : null}
                        {box4 ? <p className='text-muted secondparavalue'>
                            Enable seamless and high-quality video conferencing with our
                            AV solutions, perfect for remote collaboration.</p> : null}
                        {box5 ? <p className='text-muted secondparavalue'> Choose from short-term to long-term rental options, tailored to your needs.Rent desktop computers for your office, events, or any short-term needs.</p> : null}
                    </div>
                    <div className='downsession'>
                        <div className='downparasession'>
                            <span className='iconboutique'><BsCheckLg /></span>
                            <span className='clinicpara'><p>High-performance workhorse.</p></span>
                        </div>
                        <div className='downparasession'>
                            <span className='iconboutique'><BsCheckLg /></span>
                            <span className='clinicpara'><p>24/7 vigilant surveillance eye.</p></span>
                        </div>
                        <div className='downparasession'>
                            <span className='iconboutique'><BsCheckLg /></span>
                            <span className='clinicpara'><p>Elevating audio and visual experiences.</p></span>
                        </div>
                    </div>
                </div>

            </div>
            </div>

               {showLoader ?(
                <div className="centeralised">
                  <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                  </Spinner>
                </div>
              ): null} 
        </div>
    )
}

export default BestService;