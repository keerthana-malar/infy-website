import React,{useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../css/IotOurService.css';
import { TfiAnnouncement } from "react-icons/tfi";
import { TfiLayoutMediaCenterAlt } from "react-icons/tfi";
import { RiGlobalFill } from "react-icons/ri";
import { SiWebtrees } from "react-icons/si";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { GiProgression } from "react-icons/gi";
import { MdNetworkWifi3Bar } from "react-icons/md";
import { GiCctvCamera } from "react-icons/gi";
import { LuLaptop2 } from "react-icons/lu";
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import { Hidden } from '@mui/material';


function IotOurService({componentRef}) {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <div className='firsthead' ref={componentRef}>
           <div className='container'>
            {/* left side start  */}
           <div className=' Ourservice_leftside'>

                    <div className=' header1'>
                        <div className='abouts'>
                            <div className='small_line'></div>
                            <h4 className='aboutline_head'>Services</h4>
                        </div>
                        <p className='service-head'>Discover a world of possibilities with our comprehensive 
                            range of services tailored to meet your needs.</p>
                    </div>
               
                    <div className=' header2 text-muted'>
                        <p>Join us on a journey of digital excellence.
                         Let's shape your vision into reality and take your online presence 
                         and technology infrastructure to new heights.</p>
                    </div>
            </div>
            {/* leftside end */}


            {/* rows 1 */}
            <div className="container rightsidegrid">
           

                {/* first row */}
                <div className='firstrow' data-aos="zoom-in-right" >
                <div className='divline'></div>
                   <MdNetworkWifi3Bar className='icons'/>
                    <h3>
                       Computer Network Solutions 
                    </h3>
                    <div className='divideline'></div>
                    <p className='param'>We specialize in crafting cutting-edge Computer
                     Network Solutions that empower your enterprise to thrive in the connected world.
                  </p>
                    <MdNetworkWifi3Bar className='icon2'/>
                    {/* {hiddenrow} */}
                    <div className='hiddenrows'>
                   <div className='pros'>
                   <div className='divline'></div>
                   <h2 className='edgehead'> Computer Network Solutions </h2>
                   <div className='buttongroup'>
                   <Link to="/services/networking" target='_blank'>
                   <button className='butt'>+</button>
                    </Link>
                   </div>
                   </div>
                    </div>
                 </div>
                {/* second row */}
                <div className='firstrow1'>
                <div className='firstrow' data-aos="zoom-in-up">
                <div className='divline'></div>
                <TfiLayoutMediaCenterAlt className='icons'/>
                    <h3>
                        Laptop / Desktop Sales and Service
                    </h3>
                    <div className='divideline'></div>
                    <p className='param'>Highlight the power and performance 
                        of your laptops and desktops. 
                        Convey that your devices can handle any task...</p>
                        <TfiLayoutMediaCenterAlt className='icon2'/>
                        {/* {Hidden} */}
                        <div className='hiddenrows1'>
                        <div className='pros'>
                        <div className='divline'></div>
                   <h2 className='edgehead'>Laptop / Desktop Sales and Service </h2>
                   <div className='buttongroup'>
                   <Link to="/services/laptop&desktop" target='_blank'>
                    <button className='butt'>+</button></Link>

                   </div>
                   </div>
                    </div>
                        
                
                </div>
                </div>
                {/* third row */}
                <div className='firstrow' data-aos="zoom-in-left">
                <div className='divline'></div>
                <GiCctvCamera className='icons'/>
                    <h3>
                     Security Solutions
                    </h3>
                    <div className='divideline'></div>
                    <p className='param'>Our CCTV systems offer 24/7 surveillance, 
                        keeping a vigilant eye on your property, both inside and out. 
                       </p>
                         <GiCctvCamera className='icon2'/>
                            {/* {Hidden} */}
                        <div className='hiddenrows2'>
                        <div className='pros'>
                        <div className='divline'></div>
                   <h2 className='edgehead'>    Security Solutions </h2>
                   <div className='buttongroup'>
                    <Link to="/services/cctv" target='_blank'>
                        <button className='butt '>+</button></Link>
                   </div>
                   </div>
                    </div>
                </div>
                {/* row completed */}
           
            {/* rows 2 */}
       
                {/* first row */}
                
                <div className='firstrow' data-aos="zoom-in-right">
                    <div className='divline'></div>
                    <SiWebtrees className='icons'/>
                    <h3>
                        AV Solutions
                    </h3>
                    <div className='divideline'></div>
                    <p className='param'>Our projectors and Smart TVs deliver stunning 
                        visuals that bring lessons and entertainment to life.</p>
                        {/* <div className='iconbox'> */}
                        <SiWebtrees className='icon2'/>
                        {/* </div> */}
                           {/* {Hidden} */}
                           <div className='hiddenrows3'>
                           <div className='pros'>
                           <div className='divline'></div>
                   <h2 className='edgehead'>   AV Solutions </h2>
                   <div className='buttongroup'>
                   <Link to="/services/Projectors" target='_blank'>
                    <button className='butt '>+</button></Link>
                   </div>
                   </div>
                    </div>
                        </div>
                {/* second row */}
                <div className='firstrow' data-aos="zoom-in-up">
                <div className='divline'></div>
                <RiLightbulbFlashLine className='icons'/>
                    <h3>
                       Computer Accessories 
                    </h3>
                    <div className='divideline'></div>
                    <p className='param'>We provide top-notch products from trusted brands, 
                    ensuring reliability and performance. Your satisfaction is our priority. 
                </p>
                    <RiLightbulbFlashLine className='icon2'/>
                       {/* {Hidden} */}
                       <div className='hiddenrows4'>
                       <div className='pros'>
                       <div className='divline'></div>
                   <h2 className='edgehead'> Computer Accessories </h2>
                   <div className='buttongroup'>
                   <Link to="/services/Accessories" target='_blank'>
                    <button className='butt '>+</button></Link>
                   </div>
                   </div>
                    </div>
                    {/* {hidden row} */}
                
                </div>
                {/* third row */}
                <div className='firstrow' data-aos="zoom-in-left">
                <div className='divline'></div>
                <LuLaptop2 className='icons'/>
                    <h3>
                       Laptop / Desktop Rent
                    </h3>
                    <div className='divideline'></div>
                    <p className='param'>Get access to high-quality laptops and desktops 
                    when you need them, without the commitment of ownership. 
            </p>
                    <LuLaptop2 className='icon2'/>
                       {/* {Hidden} */}
                       <div className='hiddenrows5'>
                       <div className='pros'>
                       <div className='divline'></div>
                   <h2 className='edgehead'> Laptop / Desktop Rent </h2>
                   <div className='buttongroup'>
                   <Link to="/services/Laptop&DesktopRent" target='_blank'>
                    <button className='butt'>+</button></Link>
                   </div>
                   </div>
                    </div>
                </div>
                {/* row completed */}
            </div>
            </div>
        </div>
    )
}

export default IotOurService;