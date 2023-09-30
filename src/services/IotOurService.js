import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../css/IotOurService.css';
import { TfiAnnouncement } from "react-icons/tfi";
import { TfiLayoutMediaCenterAlt } from "react-icons/tfi";
import { RiGlobalFill } from "react-icons/ri";
import { SiWebtrees } from "react-icons/si";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { GiProgression } from "react-icons/gi";


function IotOurService() {
    return (
        <div className='firsthead'>

            {/* left side start  */}
           <div className='Ourservice_leftside'>
               
                    <div className='header1'>
                        <div className='about'>
                            <div className='small_line'></div>
                            <h4 className='aboutline_head'>Services</h4>
                        </div>
                        <p className='service-head'>Discover a world of possibilities with our comprehensive 
                            range of services tailored to meet your needs.</p>
                    </div>
               
                    <div className='header2'>
                        <p>Join us on a journey of digital excellence.
                         Let's shape your vision into reality and take your online presence 
                         and technology infrastructure to new heights.</p>
                    </div>
            </div>
            {/* leftside end */}


            {/* rows 1 */}
            <div className="rightsidegrid">
           

                {/* first row */}
                <div className='firstrow'>
                <div className='divline'></div>
                   <TfiAnnouncement className='icons'/>
                    <h3>
                       Computer Network Solutions 
                    </h3>
                    <div className='divideline'></div>
                    <p className='param'>We specialize in crafting cutting-edge Computer
                     Network Solutions that empower your enterprise to thrive in the connected world.
                    One of best network support and service in coimbatore. we specialize in two 
                    pillars of digital defense: firewall protection and cybersecurity.</p>
                </div>
                {/* second row */}
                <div className='firstrow'>
                <div className='divline'></div>
                <TfiLayoutMediaCenterAlt className='icons'/>
                    <h3>
                        Laptop / Desktop Sales and Service
                    </h3>
                    <div className='divideline'></div>
                    <p className='param'>Highlight the power and performance 
                        of your laptops and desktops. 
                        Convey that your devices can handle any task...</p>
                </div>
                {/* third row */}
                <div className='firstrow'>
                <div className='divline'></div>
                <RiGlobalFill className='icons'/>
                    <h3>
                        CCTV / Bio - Metrics
                    </h3>
                    <div className='divideline'></div>
                    <p className='param'>Our CCTV systems offer 24/7 surveillance, 
                        keeping a vigilant eye on your property, both inside and out. We understand that every property is unique.
                         Our solutions are tailored to meet your specific needs and concerns.</p>
                </div>
                {/* row completed */}
           
            {/* rows 2 */}
       
                {/* first row */}
                <div className='firstrow'>
                    <div className='divline'></div>
                    <SiWebtrees className='icons'/>
                    <h3>
                       Projectors / Smart Class Smart Tv
                    </h3>
                    <div className='divideline'></div>
                    <p className='param'>Our projectors and Smart TVs deliver stunning 
                        visuals that bring lessons and entertainment to life. With touch screens, 
                        interactive whiteboards, 
                        and intuitive interfaces, we redefine classroom and home entertainment interaction.</p>
                </div>
                {/* second row */}
                <div className='firstrow'>
                <div className='divline'></div>
                <RiLightbulbFlashLine className='icons'/>
                    <h3>
                       Computer Accessories 
                    </h3>
                    <div className='divideline'></div>
                    <p className='param'>We provide top-notch products from trusted brands, 
                    ensuring reliability and performance. Your satisfaction is our priority. 
                    We're here to make your tech journey seamless.</p>
                </div>
                {/* third row */}
                <div className='firstrow'>
                <div className='divline'></div>
                <GiProgression className='icons'/>
                    <h3>
                       Laptop / Desktop Rent
                    </h3>
                    <div className='divideline'></div>
                    <p className='param'>Get access to high-quality laptops and desktops 
                    when you need them, without the commitment of ownership. 
                    Our rentals come with maintenance and support, 
                    ensuring your devices run smoothly throughout your rental period.</p>
                </div>
                {/* row completed */}
           
            </div>
       
           

        </div>
    )
}

export default IotOurService;