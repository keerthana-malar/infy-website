import React, { useEffect } from 'react';
import '../css/IotAbout.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BsFillPlayFill } from "react-icons/bs";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { SiMicrosoftteams } from "react-icons/si";
import { GoGoal } from "react-icons/go";


function IotAbout() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();

    }, []);
    return (
        <div className='container'>

            <div className='row leftside'>

                <div className='col-md-6 image'>
                    <img className="img-fluid" src="/images/about_page.png" alt="about page" data-aos="fade-right" />
                </div>
                
                {/* 2 column start */}
                <div className='col-md-6 rightside'>
                    {/* about line  */}
                    <div className='about'>
                        <div className='small_line'></div>
                        <h4 className='aboutline_head'>About us</h4>
                    </div>
                    {/* we always line */}
                    <div className='para'>

                        <h3><span className='span12'>"Everything You Need,</span>
                            <span className='span13'> All in One Place!."</span></h3>
                        <img src="/images/round 2.png" alt="round" className='round1' />
                    </div>
                    {/* datawings line */}
                    <div className='datawings'>

                        <p className="datawings_para text-muted"> At Infygain Technologies,
                         we're your technology partner, specializing in complete network solutions that connect, laptop and desktop sales and service that empower, and flexible laptop/desktop rentals that adapt to your needs. With a commitment to excellence, 
                        we navigate the digital world with you, ensuring your success in every endeavor.
                             </p>

                        <div className='containers'>
                            <img src="/images/video_intro.jpg" alt="intro" className='image-fluid' />
                            <div className="icon-container">
                                <BsFillPlayFill className='iconing' />
                            </div>
                        </div>
                    </div>

                    <hr />
                    <div className='row downpart'>
                        <div className='col-md-2'>
                            <SiMicrosoftteams className='down_icons' />
                        </div>
                        <div className='col-md-3  ' >
                            <h3><b>Professional Technicians</b></h3>
                        </div>
                        <div className='col-md-2 vertical_line'></div>
                        <div className='col-md-2'>
                            <GoGoal className='down_icons' />
                        </div>
                        <div className='col-md-3'>
                            <h3><b> Quality Assurance</b></h3>
                        </div>
                    </div>
                </div >
            </div >
        </div>

    )

}

export default IotAbout;