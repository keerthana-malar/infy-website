import React,{useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../css/IotOurService.css';
import { TfiLayoutMediaCenterAlt } from "react-icons/tfi";
import { SiWebtrees } from "react-icons/si";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { MdNetworkWifi3Bar } from "react-icons/md";
import { GiCctvCamera } from "react-icons/gi";
import { LuLaptop2 } from "react-icons/lu";
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUps, FaWifi } from 'react-icons/fa';


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
                            <h2 className='aboutline_head'>Services</h2>
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
            {/* <div className="container rightsidegrid">
           

              
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
                
                
                <div className='firstrow' data-aos="zoom-in-right">
                    <div className='divline'></div>
                    <SiWebtrees className='icons'/>
                    <h3>
                        AV Solutions
                    </h3>
                    <div className='divideline'></div>
                    <p className='param'>Our projectors and Smart TVs deliver stunning 
                        visuals that bring lessons and entertainment to life.</p>
                       
                        <SiWebtrees className='icon2'/>
                      
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
                  
                
                </div>
               
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
               
            </div> */}

            <div className="container rightsidegrid">
           

       
                {/* first row */}
                
                <div className='firstrow' data-aos="zoom-in-right">
                    <div className='divline'></div>
                    <MdNetworkWifi3Bar className='icons'/>
                    <h3>
                    Complete Network   <br></br>Solutions 
                    </h3>
                    <div className='divideline'></div>
                    <p className='param'>Empower your business with our comprehensive network solutions, ensuring seamless connectivity and optimal performance. </p>
                        {/* <div className='iconbox'> */}
                        <MdNetworkWifi3Bar className='icon2'/>
                        {/* </div> */}
                           {/* {Hidden} */}
                           <div className='hiddenrowsa'>
                           <div className='pros'>
                           <div className='divline'></div>
                   <h4 className='edgehead'> Complete Network Solutions </h4>
                   <div className='buttongroup'>
                   <Link to="/services/networking" >
                    <button className='butt btn1'>+</button></Link>
                   </div>
                   </div>
                    </div>
                        </div>
                        {/* dummy */}
                        <div className='firstrow' data-aos="zoom-in-right">
                    <div className='divline'></div>
                    <TfiLayoutMediaCenterAlt className='icons'/>
                    <h3>
                    Laptop / Desktop Sales and Service
                    </h3>
                    <div className='divideline'></div>
                    <p className='param'>Upgrade your tech seamlessly with our top-notch laptop and desktop solutions, offering expert sales and service.</p>
                        {/* <div className='iconbox'> */}
                        <TfiLayoutMediaCenterAlt className='icon2'/>
                        {/* </div> */}
                           {/* {Hidden} */}
                           <div className='hiddenrowsb'>
                           <div className='pros'>
                           <div className='divline'></div>
                   <h4 className='edgehead'> Laptop / Desktop Sales and Service </h4>
                   <div className='buttongroup'>
                   <Link to="/services/laptopanddesktop" >
                    <button className='butt btn1'>+</button></Link>
                   </div>
                   </div>
                    </div>
                        </div>
                        {/* dummy */}
                        <div className='firstrow' data-aos="zoom-in-right">
                    <div className='divline'></div>
                    <GiCctvCamera className='icons'/>
                    <h3>
                    Security Solutions
                    </h3>
                    <div className='divideline'></div>
                    <p className='param'>Secure peace of mind with our streamlined security solutions – your shield in a digital world.</p>
                        {/* <div className='iconbox'> */}
                        <GiCctvCamera className='icon2'/>
                        {/* </div> */}
                           {/* {Hidden} */}
                           <div className='hiddenrowsc'>
                           <div className='pros'>
                           <div className='divline'></div>
                   <h4 className='edgehead'>  Security Solutions </h4>
                   <div className='buttongroup'>
                   <Link to="/services/cctv">
                    <button className='butt btn1'>+</button></Link>
                   </div>
                   </div>
                    </div>
                        </div>
                        {/* dummy */}
                        <div className='firstrow' data-aos="zoom-in-right">
                    <div className='divline'></div>
                    <SiWebtrees className='icons'/>
                    <h3>
                    AV Solutions
                    </h3>
                    <div className='divideline'></div>
                    <p className='param'>Illuminate your presentations with our powerful projectors – delivering clarity, brilliance, and impactful visuals for every projection need.</p>
                        {/* <div className='iconbox'> */}
                        <SiWebtrees className='icon2'/>
                        {/* </div> */}
                           {/* {Hidden} */}
                           <div className='hiddenrowsd'>
                           <div className='pros'>
                           <div className='divline'></div>
                   <h4 className='edgehead'> AV Solutions </h4>
                   <div className='buttongroup'>
                   <Link to="/services/Projectors">
                    <button className='butt btn1'>+</button></Link>
                   </div>
                   </div>
                    </div>
                        </div>
                        {/* dummy */}
                        <div className='firstrow' data-aos="zoom-in-left">
                    <div className='divline'></div>
                    <img src="/images/accessories.png" alt='icon' className='icons'/>
                    {/* <RiLightbulbFlashLine className='icons'/> */}
                    <h3>
                    Computer Accessories
                    </h3>
                    <div className='divideline'></div>
                    <p className='param'>Elevate your setup with our premium computer accessories – the perfect blend of style, functionality, and performance for a seamless computing experience.</p>
                        {/* <div className='iconbox'> */}
                        <RiLightbulbFlashLine className='icon2'/>
                        {/* </div> */}
                           {/* {Hidden} */}
                           <div className='hiddenrowse'>
                           <div className='pros'>
                           <div className='divline'></div>
                   <h4 className='edgehead'> Computer Accessories </h4>
                   <div className='buttongroup'>
                   <Link to="/services/Accessories">
                    <button className='butt btn1'>+</button></Link>
                   </div>
                   </div>
                    </div>
                        </div>
                {/* second row */}
                <div className='firstrow' data-aos="zoom-in-left">
                <div className='divline'></div>
                <LuLaptop2 className='icons'/>
                    <h3>
                    TV
                    </h3>
                    <div className='divideline'></div>
                    <p className='param'>Immerse yourself in entertainment with our sleek and cutting-edge TVs – where stunning visuals meet unparalleled viewing experiences. 
                </p>
                    <LuLaptop2 className='icon2'/>
                       {/* {Hidden} */}
                       <div className='hiddenrows44'>
                       <div className='pros'>
                       <div className='divline'></div>
                   <h4 className='edgehead'>TV </h4>
                   <div className='buttongroup'>
                   <Link to="/services/TV" >
                    <button className='butt btn1'>+</button></Link>
                   </div>
                   </div>
                    </div>
                    {/* {hidden row} */}
                
                </div>
                {/* third row */}
                <div className='firstrow' data-aos="zoom-in-left">
                <div className='divline'></div>
                <img src="/images/printer.png" alt='icon' className='icons'/>
                    <h3>
                    Printer & Scanner
                    </h3>
                    <div className='divideline'></div>
                    <p className='param'>Efficiency meets precision with our advanced printers and scanners – empowering your workspace with seamless document handling and sharp, professional results.
            </p>
                    <MdNetworkWifi3Bar className='icon2'/>
                       {/* {Hidden} */}
                       <div className='hiddenrows55'>
                       <div className='pros'>
                       <div className='divline'></div>
                   <h4 className='edgehead'> Printer & Scanner</h4>
                   <div className='buttongroup'>
                   <Link to="/services/Printer&Scanner">
                    <button className='butt btn1'>+</button></Link>
                   </div>
                   </div>
                    </div>
                </div>
                {/* fourth row */}
                <div className='firstrow' data-aos="zoom-in-left">
                <div className='divline'></div>
                <img src="/images/panel.png" alt='icon' className='icons'/>
                    <h3>
                    Interactive Panel
                    </h3>
                    <div className='divideline'></div>
                    <p className='param'>Transform collaboration with our interactive panels – where innovation meets engagement for dynamic and productive meetings and presentations.  
            </p>
                    <MdNetworkWifi3Bar className='icon2'/>
                       {/* {Hidden} */}
                       <div className='hiddenrows6'>
                       <div className='pros'>
                       <div className='divline'></div>
                   <h4 className='edgehead'> Interactive Panel</h4>
                   <div className='buttongroup'>
                   <Link to="/services/InteractivePanel">
                    <button className='butt btn1'>+</button></Link>
                   </div>
                   </div>
                    </div>
                </div>
                {/* row completed */}

                <div className='firstrow' data-aos="zoom-in-right">
                    <div className='divline'></div>
                    <FaUps  className='icons'/>
                    <h3>
                        UPS
                    </h3>
                    <div className='divideline'></div>
                    <p className='param'>Reliable power protection starts here. Explore our UPS solutions – ensuring uninterrupted performance and peace of mind for your critical systems.</p>
                        {/* <div className='iconbox'> */}
                        <MdNetworkWifi3Bar className='icon2'/>
                        {/* </div> */}
                           {/* {Hidden} */}
                           <div className='hiddenrowsass'>
                           <div className='pros'>
                           <div className='divline'></div>
                   <h4 className='edgehead'>  UPS </h4>
                   <div className='buttongroup'>
                   <Link to="/services/UPS" >
                    <button className='butt btn1'>+</button></Link>
                   </div>
                   </div>
                    </div>
                        </div>
                        {/* dummy */}
                        <div className='firstrow' data-aos="zoom-in-right">
                    <div className='divline'></div>
                    <FaWifi  className='icons'/>
                    <h3>
                    WIFI
                    </h3>
                    <div className='divideline'></div>
                    <p className='param'>Experience connectivity without limits. Our WiFi solutions redefine seamless and high-speed internet access, ensuring a world of connectivity at your fingertips.</p>
                        {/* <div className='iconbox'> */}
                        <TfiLayoutMediaCenterAlt className='icon2'/>
                        {/* </div> */}
                           {/* {Hidden} */}
                           <div className='hiddenrowsbbb'>
                           <div className='pros'>
                           <div className='divline'></div>
                   <h4 className='edgehead'>WIFI</h4>
                   <div className='buttongroup'>
                   <Link to="/services/WIFI" >
                    <button className='butt btn1'>+</button></Link>
                   </div>
                   </div>
                    </div>
                        </div>
                        {/* dummy */}
                        <div className='firstrow' data-aos="zoom-in-right">
                    <div className='divline'></div>
                    <img src="/images/pos.png" alt='icon' className='icons'/>
                    <h3>
                     Point Of Sale
                    </h3>
                    <div className='divideline'></div>
                    <p className='param'>Your point of solution – where challenges meet innovation, and seamless resolutions redefine success.</p>
                        {/* <div className='iconbox'> */}
                        <GiCctvCamera className='icon2'/>
                        {/* </div> */}
                           {/* {Hidden} */}
                           <div className='hiddenrowsccc'>
                           <div className='pros'>
                           <div className='divline'></div>
                   <h4 className='edgehead'>  Point Of Sale </h4>
                   <div className='buttongroup'>
                   <Link to="/services/Pos">
                    <button className='butt btn1'>+</button></Link>
                   </div>
                   </div>
                    </div>
                        </div>
                        {/* dummy */}
                        <div className='firstrow' data-aos="zoom-in-right">
                    <div className='divline'></div>
                    <img src="/images/intercom.png" alt='icon' className='icons'/>
                    <h3>
                    InterCom
                    </h3>
                    <div className='divideline'></div>
                    <p className='param'>Stay connected effortlessly with our intercom solutions – redefining communication simplicity for seamless and secure conversations.</p>
                        {/* <div className='iconbox'> */}
                        <SiWebtrees className='icon2'/>
                        {/* </div> */}
                           {/* {Hidden} */}
                           <div className='hiddenrowsddd'>
                           <div className='pros'>
                           <div className='divline'></div>
                   <h4 className='edgehead'> InterCom </h4>
                   <div className='buttongroup'>
                   <Link to="/services/InterCom">
                    <button className='butt btn1'>+</button></Link>
                   </div>
                   </div>
                    </div>
                        </div>
            </div>
            
            </div>
        </div>
    )
}

export default IotOurService;