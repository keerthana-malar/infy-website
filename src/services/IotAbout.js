import React, { useEffect, useState } from 'react';
import '../css/IotAbout.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BsFillPlayFill } from "react-icons/bs";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { SiMicrosoftteams } from "react-icons/si";
import { GoGoal } from "react-icons/go";
import YouTube from 'react-youtube';
import { DefaultPlayer as Video } from 'react-html5video';
import Modal from 'react-bootstrap/Modal';
import { Tilt } from 'react-tilt';
import { FaUserCog } from "react-icons/fa";


function IotAbout() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();

    }, []);

    const videoId = "https://youtu.be/CdP9VCScVmQ";
    const [showVideo, setShowVideo] = useState(false);

    const defaultOptions = {
        reverse:        false,  // reverse the tilt direction
        max:            35,     // max tilt rotation (degrees)
        perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
        speed:          1000,   // Speed of the enter/exit transition
        transition:     true,   // Set a transition on enter/exit.
        axis:           null,   // What axis should be disabled. Can be X or Y.
        reset:          true,    // If the tilt effect has to be reset on exit.
        easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    }

    const toggleVideo = () => {
        setShowVideo(true);
    };
    const toggleclose = () => {
        setShowVideo(false);
    };

    return (
        <div className='container'>
            <div className='row leftside'>
                <div className='col-md-1'></div>
                <div className='col-md-5 image'>
                <Tilt options={defaultOptions}>
                    <img className="img-fluid" src="/images/about_page.png" 
                    alt="about page" data-aos="fade-right" />
                     </Tilt>
                </div>
                {/* 2 column start */}
                <div className='col-md-5 rightside'>
                    <div className='custom-modal-background'>
                    <Modal size="lg" show={showVideo} onHide={toggleclose} >
                        <Modal.Header closeButton>
                        </Modal.Header>
                        <Modal.Body>
                            <iframe
                                src="https://www.youtube.com/embed/CdP9VCScVmQ"
                                title="INFYGAIN - Leading Computer Service at Doorstep in Coimbatore"
                                frameborder="0" allow="accelerometer; autoplay; clipboard-write;
                               encrypted-media; gyroscope; picture-in-picture; 
                               web-share" allowfullscreen></iframe></Modal.Body>

                    </Modal>
                    </div>

                    <div className='about'>
                        <div className='smallsss'></div>
                        <h4 className='aboutline_head'>About us</h4>
                    </div>
                    
                     <div className='paragraph'>
                        <h3><span className='span12'>The future of computing,</span>
                            <span className='span13'>  available today</span></h3>

                      
                    </div> 
                    {/* datawings line */}
                   
                    <div className='datawings'>
                        <p className="datawings_para text-muted">
                            We're your technology partner, specializing in complete network solutions that connect,
                            laptop and desktop sales and service that empower.
                   
                        </p>
                        <div className='containers'>
                            <img src="/images/small boy.jpg" alt="intro" className='image-fluid img' />
                            <div className="icon-container">
                                <BsFillPlayFill onClick={toggleVideo} className='iconing' />
                            </div>
                        </div>
                    </div>

                    <hr />
                    <div className='row downpart'>
                        <div className='col-md-2'>
                            <FaUserCog className='down_icons' />
                        </div>
                        <div className='col-md-3 value' >
                            <h3>Proficient Service</h3>
                        </div>
                    <div className='col-md-1 vertical_line'></div>
                        <div className='col-md-2'>
                            <GoGoal className='down_icons' />
                        </div>
                        <div className='col-md-3 value' >
                            <h3> Time Efficiency</h3>
                        </div>
                    </div>
                </div >
                <div className='col-md-1'>
                      <img src="/images/round 2.png" alt="round" className='round1' />
                </div>
            </div >
        </div>

    )

}

export default IotAbout;
