import React, { useEffect, useState } from 'react';
import "../css/BestService.css";
import { BsCheckLg } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Spinner from 'react-bootstrap/Spinner';
import { Link, useParams } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {

  FaCartPlus
 
} from "react-icons/fa6";


function BestService({load,setLoad}) {


  useEffect(() => {
    AOS.init();
    AOS.refresh();

}, []);

    const [isLoading, setIsLoading] = useState(false);
    const [showLoader, setShowLoader] = useState(false);

    const {id } = useParams()

    const [serv, setServ] = useState(null)

    useEffect(() => {
        if(id==='Websites'){
          setServ("Websites")
        }
        if(id==='Seo'){
          setServ("Seo")
        }
        if(id==='Application'){
          setServ("Application")
        }
        if(id==='Designing'){
          setServ("Designing")
        }
    },[id])

    return (
    <>

      <div className="top-banner">
          <p className="main-title">Services</p>
      </div>

    {/* 1 */}
    {serv === "Websites" ? (<div className='container lolp mt-5 mb-5'>
        <div className='hkl'>
        <h1 className='bril mb-5'> Website Development</h1>
        </div>
        <div className='row'>
            <div className='col-md-4 col-lg-4 popp' data-aos="fade-right"  data-aos-duration="1000">
             <div className='lmk'>
               <img src="/images/systemadmin_1.webp" alt='best Complete Network services' className='image-fluid'/>
             </div>

             {/* <div className='butk'>
               <button className='btn butks'>
               <a href="https://infygain.com/onlinestore/products/ca/178"><FaCartPlus/> buy now </a>
                </button>
               </div> */}

            </div>
            <div className='col-md-8 col-lg-8 wifit' data-aos="fade-left"  data-aos-duration="1000">
            <div className='nmk'>
                <div className='libra'>
                </div>
               <h3 >Static Website</h3>
               </div>
                <p className='text-muted mt-2'>
                A server is a computer program or device
                 that provides a service to another 
                 computer program and its user, also 
                 known as the client. In a data center, 
                 the physical computer that a server
                  program runs on is also frequently 
                  referred to as a server.Having one 
                  central repository to manage the
                   identity of all users and to store
                    all company files, application data,
                     and other resources ensures that 
                     every team member will have access 
                     to what they need when they need it.
                </p>
                <p className='text-muted '>
                    A Firewall is a network security 
                    device that monitors and filters 
                    incoming and outgoing network traffic
                     based on an organization's previously
                      established security policies.
                       At its most basic, a firewall 
                       is essentially the barrier that
                        sits between a private internal
                         network and the public Internet.

                         <br /> 

                         <button className="serv-btns1 text-center text-light-blogss mt-2" >
                      <Link className='serv-link' to='/ServiceSeo?scrollTo=projects'>  View Our Projects  &nbsp; <span className="fa fa-arrow-right"></span>{" "}</Link> 
                      </button>
                    </p>
              
            
          </div>

        </div>
       
        <div className='row'>   
              <div className='col-md-7 col-lg-7 wifit1' data-aos="fade-right"  data-aos-duration="1000">
            <div className='nmk1'>
                <div className='libra'>
                </div>
               <h3>Dynamic Website</h3>
               </div>
                <p className='text-muted mt-2'>
                A router is a device that connects
                 two or more packet-switched networks 
                 or subnetworks.It serves two primary 
                 functions: managing traffic between 
                 these networks by forwarding data 
                 packets to their intended IP addresses, 
                 and allowing multiple devices to use the
                  same Internet connection.
                </p>
                <p className='text-muted'>
                    A switch is used in a wired network
                     to connect to other devices using 
                     Ethernet cables. The switch allows
                      each connected device to talk to 
                      the others. Wireless-only networks
                       do not use switches because devices
                        such as wireless routers and 
                        adapters communicate directly 
                        with one another.
                        <br />
                        <button className="serv-btns1 text-center text-light-blogss mt-2" >
                      <Link className='serv-link' to='/ServiceSeo?scrollTo=projects'>  View Our Projects  &nbsp; <span className="fa fa-arrow-right"></span>{" "}</Link> 
                      </button>
                    </p>
            </div>
          <div className='col-md-5 col-lg-5 olk' data-aos="fade-left"  data-aos-duration="1000">
               <div className='lmk2'>
                 <img src="/images/network1.webp" alt='best server services' className='image-fluid'/>
               </div>

               {/* <div className='butk'>
               <button className='btn butks'>
               <a href="https://infygain.com/onlinestore/products/ca/181"><FaCartPlus/> buy now </a> 
               </button>
               </div> */}
               </div>

        </div>

        <div className='row'>
            <div className='col-md-4 col-lg-4 popp' data-aos="fade-right"  data-aos-duration="1000">
             <div className='lmk'>
               <img src="/images/systemadmin_1.webp" alt='best Complete Network services' className='image-fluid'/>
             </div>

             {/* <div className='butk'>
               <button className='btn butks'>
               <a href="https://infygain.com/onlinestore/products/ca/178"><FaCartPlus/> buy now </a>
                </button>
               </div> */}

            </div>
            <div className='col-md-8 col-lg-8 wifit' data-aos="fade-left"  data-aos-duration="1000">
            <div className='nmk'>
                <div className='libra'>
                </div>
               <h3 >E-commerce Website</h3>
               </div>
                <p className='text-muted mt-2'>
                A server is a computer program or device
                 that provides a service to another 
                 computer program and its user, also 
                 known as the client. In a data center, 
                 the physical computer that a server
                  program runs on is also frequently 
                  referred to as a server.Having one 
                  central repository to manage the
                   identity of all users and to store
                    all company files, application data,
                     and other resources ensures that 
                     every team member will have access 
                     to what they need when they need it.
                </p>
                <p className='text-muted '>
                    A Firewall is a network security 
                    device that monitors and filters 
                    incoming and outgoing network traffic
                     based on an organization's previously
                      established security policies.
                       At its most basic, a firewall 
                       is essentially the barrier that
                        sits between a private internal
                         network and the public Internet.
                         <br />
                        <button className="serv-btns1 text-center text-light-blogss mt-2" >
                      <Link className='serv-link' to='/ServiceSeo?scrollTo=projects'>  View Our Projects  &nbsp; <span className="fa fa-arrow-right"></span>{" "}</Link> 
                      </button>
                    </p>
           

          </div>

        </div>
        <div className='row'>
         
         <div className='col-md-6 col-lg-6 probl' data-aos="fade-right"  data-aos-duration="1000" >
         
         <div className='nmk1'>
             <div className='libra'>
             </div>
            <h2>Discover Our Services</h2>
            </div>
        <ul className='text-muted'>
         <li><p> Customized and efficient networking solutions designed to match your business needs.</p></li>
         <li><p>Hassle-free installation and seamless setup of networking equipment for reliable operations.</p></li>
         <li><p>Robust security measures, including firewalls and encryption, ensuring data confidentiality and protection against cyber threats.</p></li>
         <li><p>Experience prompt service with our fast turnaround times, minimizing downtime and inconvenience.</p></li>
         <li><p>Future-ready networks that scale with your business, accommodating new devices and increasing traffic demands effortlessly.</p></li>
         <li><p>Comprehensive integration of cloud services, enhancing collaboration, data storage, and accessibility for maximum productivity.</p></li>


        </ul>
             
        

       </div>

       <div className='col-md-6 col-lg-6 popp'  data-aos="fade-left" data-aos-duration="1000">
          <div className='lmk1 coverage'>
            <img src="/images/cns.webp" alt='best computer services'  className='image-fluid'/>
          </div>
          
            
         </div>

      </div>

        
    </div>) :null}
     {/* 2 */}
    {serv === "Seo"? (<div className='container lolp mt-5 mb-5'>
        <div className='hkl'>
        <h1 className='bril mb-5'> Search engine optimization </h1>
        </div>
        <div className='row'>
            <div className='col-md-4 col-lg-4 popp' data-aos="fade-right" data-aos-duration="1000">
             <div className='lmk'>
               <img src="/images/laptopabout.webp" alt='best laptop services' className='image-fluid'/>
             </div>

             {/* <div className='butk'>
               <button className='btn butks'>
                <a href="https://infygain.com/onlinestore/"><FaCartPlus/> buy now </a></button>
               </div> */}
               
            </div>
            <div className='col-md-8 col-lg-8 wifit' data-aos="fade-left"  data-aos-duration="1000" >
            <div className='nmk'>
                <div className='libra1'>
                </div>
               
               <h3>Laptops</h3>
            
               </div>
                <p className='text-muted '>
                Our expert technicians
                 specialize in professional 
                 laptop repair service in 
                 Coimbatore, covering issues
                  like hardware replacement, 
                  screen repair, software 
                  troubleshooting and more. 
                  We understand the significance 
                  of having access to a reliable 
                  device in daily life so our goal 
                  is to deliver fast and efficient 
                  repair solutions with guaranteed 
                  performance enhancements that 
                  restore its functionality and performance. 
                Trust us to help restore it back into shape!
                </p>
                <p className='text-muted '>Wichmann offers an impressive selection of 
                    top-quality laptops at our Coimbatore 
                    branch for sale, perfect for business
                     on the move or creative projects alike.
                     Our knowledgeable staff can guide you
                      in choosing one to meet your preferences 
                      and requirements - you're in good hands here.
                       Experience seamless 
                    computing with reliable devices that 
                    offer superior performance and durability from us!
                    <br />
                <Link className='serv-link' to='/ServiceSeo?scrollTo=projects'> 
                        <button className="serv-btns2 text-center text-light-blogss mt-2" >
                       View Our Projects  &nbsp; <span className="fa fa-arrow-right"></span>{" "}
                      </button>
                      </Link> 
                    </p>
           

          </div>

        </div>
        
        <div className='row'>
              <div className='col-md-7 col-lg-7 wifit1' data-aos="fade-right"  data-aos-duration="1000">
            <div className='nmk1'>
                <div className='libra1'>
                </div>
               <h3>Desktops</h3>
               </div>
               <div className='piol'>
                <p className='text-muted mt-2'>
                Don't let technical issues hinder you. 
                Our experienced technicians specialize 
                in professional computer repair in Coimbatore. 
                Whether it's software glitch, hardware 
                malfunction or virus attack; our specialists 
                possess the know-how necessary to identify 
                and solve it swiftly - trust us with all
                 your computer service needs with care and precision!
                </p>
                <p className='text-muted'>Description of regular
                 maintenance, 
                updates, and system checks.Information about 
                on-site or remote repair options available.
                Details about 24/7 customer assistance for 
                any desktop-related queries.
                <br />
                <Link className='serv-link' to='/ServiceSeo?scrollTo=projects'> 
                        <button className="serv-btns2 text-center text-light-blogss mt-2" >
                       View Our Projects  &nbsp; <span className="fa fa-arrow-right"></span>{" "}
                      </button>
                      </Link> 
                    </p>
                    </div>
           

          </div>
          <div className='col-md-5 col-lg-5 olk' data-aos="fade-left"  data-aos-duration="1000">
               
        
               <div className='lmk1'>
                 <img src="/images/desk.webp" alt='best desktop services' className='image-fluid'/>
               </div>
            
              </div>

        </div>
        
        <div className='row'>
            <div className='col-md-4 col-lg-4 popp' data-aos="fade-right" data-aos-duration="1000">
             <div className='lmk'>
               <img src="/images/laptopabout.webp" alt='best laptop services' className='image-fluid'/>
             </div>

             {/* <div className='butk'>
               <button className='btn butks'>
                <a href="https://infygain.com/onlinestore/"><FaCartPlus/> buy now </a></button>
               </div> */}
               
            </div>
            <div className='col-md-8 col-lg-8 wifit' data-aos="fade-left"  data-aos-duration="1000" >
            <div className='nmk'>
                <div className='libra1'>
                </div>
               
               <h3>Laptops</h3>
            
               </div>
                <p className='text-muted '>
                Our expert technicians
                 specialize in professional 
                 laptop repair service in 
                 Coimbatore, covering issues
                  like hardware replacement, 
                  screen repair, software 
                  troubleshooting and more. 
                  We understand the significance 
                  of having access to a reliable 
                  device in daily life so our goal 
                  is to deliver fast and efficient 
                  repair solutions with guaranteed 
                  performance enhancements that 
                  restore its functionality and performance. 
                Trust us to help restore it back into shape!
                </p>
                <p className='text-muted '>Wichmann offers an impressive selection of 
                    top-quality laptops at our Coimbatore 
                    branch for sale, perfect for business
                     on the move or creative projects alike.
                     Our knowledgeable staff can guide you
                      in choosing one to meet your preferences 
                      and requirements - you're in good hands here.
                       Experience seamless 
                    computing with reliable devices that 
                    offer superior performance and durability from us!

                    <br />
                <Link className='serv-link' to='/ServiceSeo?scrollTo=projects'> 
                        <button className="serv-btns2 text-center text-light-blogss mt-2" >
                       View Our Projects  &nbsp; <span className="fa fa-arrow-right"></span>{" "}
                      </button>
                      </Link> 
                    </p>
           

          </div>

        </div>

        <div className='row'>
         
            <div className='col-md-6 col-lg-6 probl' data-aos="fade-right"  data-aos-duration="1000" >
            
            <div className='nmk1'>
                <div className='libra1'>
                </div>
               <h2>Discover Our Services</h2>
               </div>
           <ul className='text-muted'>
            <li><p> Customized and efficient networking solutions designed to match your business needs.</p></li>
            <li><p>Hassle-free installation and seamless setup of networking equipment for reliable operations.</p></li>
            <li><p>Robust security measures, including firewalls and encryption, ensuring data confidentiality and protection against cyber threats.</p></li>
            <li><p>Experience prompt service with our fast turnaround times, minimizing downtime and inconvenience.</p></li>
            <li><p>Future-ready networks that scale with your business, accommodating new devices and increasing traffic demands effortlessly.</p></li>
            <li><p>Comprehensive integration of cloud services, enhancing collaboration, data storage, and accessibility for maximum productivity.</p></li>


           </ul>
                
           

          </div>

          <div className='col-md-6 col-lg-6 popp'  data-aos="fade-left" data-aos-duration="1000">
             <div className='lmk1 coverage'>
               <img src="/images/cns.webp" alt='best computer services'  className='image-fluid'/>
             </div>
             
               
            </div>

        </div>

        
        
       
    </div>) :null}
    {/* 3 */}
    {serv === "Application"? (<div className='container lolp mt-5 mb-5'>
        <div className='hkl'>
        <h1 className='bril mb-5'>Application Development</h1>
        </div>
        <div className='row'>
            <div className='col-md-4 col-lg-4 popp' data-aos="fade-right"  data-aos-duration="1000">
             <div className='lmk'>
               <img src="/images/cctvservice.webp" alt="best CCTV services" className='image-fluid'/>
             </div>
            </div>
            <div className='col-md-8 col-lg-8 wifit' data-aos="fade-left"  data-aos-duration="1000" >
            <div className='nmk'>
                <div className='libra2'>
                </div>
               <h3>Custom Web Application</h3>
               </div>
                <p className='text-muted mt-2'>
                Infygain Technologies is the company 
                to choose if you're seeking for the best
                 CCTV camera sales, installation, and servicing
                  company. We are committed to assisting you 
                  in protecting what matters most by providing 
                  you with high-quality CCTV cameras, dependable
                   installation services,
                 and dependable maintenance and support.
                </p>
                <p className='text-muted '>
                As the industry's top supplier, we provide premium CCTV cameras from well-known manufacturers including Hikvision, D-Link, CP Plus, EZVIZ, TrueView, and more. We are here to offer you the best security solutions catered to your unique needs thanks to our knowledge and dedication to client satisfaction.
                    
                <br />
                <Link className='serv-link' to='/ServiceSeo?scrollTo=projects'> 
                        <button className="serv-btns3 text-center text-light-blogss mt-2" >
                       View Our Projects  &nbsp; <span className="fa fa-arrow-right"></span>{" "}
                      </button>
                      </Link> </p>
          </div>

        </div>
       
        <div className='row'>
              <div className='col-md-7 col-lg-7 wifit1' data-aos="fade-right"  data-aos-duration="1000" >
            <div className='nmk1'>
                <div className='libra2'>
                </div>
               <h3>Cross-Platform Application Development</h3>
               </div>
                <p className='text-muted mt-2'>
                Biometrics service allow organizations 
                to quickly deploy and start using 
                biometrics technology in their 
                day-to-day identity management 
                operations. Biometrics can be
                 defined as the most practical
                  means of identifying and 
                  authenticating individuals 
                  in a reliable and fast way 
                  through unique biological 
                  characteristics. Biometric 
                  authentication is used in 
                  computer science as a form of
                   identification and access control.
                    It is also used to identify
                     individuals in groups that 
                     are under surveillance.
                </p>
                <p className='text-muted'>
                    A switch is used in a wired network
                     to connect to other devices using 
                     Ethernet cables. The switch allows
                      each connected device to talk to 
                      the others. Wireless-only networks
                       do not use switches because devices
                        such as wireless routers and 
                        adapters communicate directly 
                        with one another.
                        <br />
                <Link className='serv-link' to='/ServiceSeo?scrollTo=projects'> 
                        <button className="serv-btns3 text-center text-light-blogss mt-2" >
                       View Our Projects  &nbsp; <span className="fa fa-arrow-right"></span>{" "}
                      </button>
                      </Link> 
                    </p>
            </div>
          <div className='col-md-5 col-lg-5 olk' data-aos="fade-left"  data-aos-duration="1000">
               <div className='lmk2'>
                 <img src="/images/biometric.webp" alt="best bio-metrices services" className='image-fluid'/>
               </div>
               </div>

        </div>
        <div className='row'>
            <div className='col-md-4 col-lg-4 popp' data-aos="fade-right"  data-aos-duration="1000">
             <div className='lmk'>
               <img src="/images/cctvservice.webp" alt="best CCTV services" className='image-fluid'/>
             </div>
            </div>
            <div className='col-md-8 col-lg-8 wifit' data-aos="fade-left"  data-aos-duration="1000" >
            <div className='nmk'>
                <div className='libra2'>
                </div>
               <h3>API Development and Integration</h3>
               </div>
                <p className='text-muted mt-2'>
                Infygain Technologies is the company 
                to choose if you're seeking for the best
                 CCTV camera sales, installation, and servicing
                  company. We are committed to assisting you 
                  in protecting what matters most by providing 
                  you with high-quality CCTV cameras, dependable
                   installation services,
                 and dependable maintenance and support.
                </p>
                <p className='text-muted '>
                As the industry's top supplier, we provide premium CCTV cameras from well-known manufacturers including Hikvision, D-Link, CP Plus, EZVIZ, TrueView, and more. We are here to offer you the best security solutions catered to your unique needs thanks to our knowledge and dedication to client satisfaction.
                <br />
                <Link className='serv-link' to='/ServiceSeo?scrollTo=projects'> 
                        <button className="serv-btns3 text-center text-light-blogss mt-2" >
                       View Our Projects  &nbsp; <span className="fa fa-arrow-right"></span>{" "}
                      </button>
                      </Link> </p>
          </div>

        </div>
        <div className='row'>
         
         <div className='col-md-6 col-lg-6 probl' data-aos="fade-right"  data-aos-duration="1000" >
         
         <div className='nmk1'>
             <div className='libra2'>
             </div>
            <h2>Discover Our Services</h2>
            </div>
        <ul className='text-muted'>
         <li><p> Customized and efficient networking solutions designed to match your business needs.</p></li>
         <li><p>Hassle-free installation and seamless setup of networking equipment for reliable operations.</p></li>
         <li><p>Robust security measures, including firewalls and encryption, ensuring data confidentiality and protection against cyber threats.</p></li>
         <li><p>Experience prompt service with our fast turnaround times, minimizing downtime and inconvenience.</p></li>
         <li><p>Future-ready networks that scale with your business, accommodating new devices and increasing traffic demands effortlessly.</p></li>
         <li><p>Comprehensive integration of cloud services, enhancing collaboration, data storage, and accessibility for maximum productivity.</p></li>


        </ul>
             
        

       </div>

       <div className='col-md-6 col-lg-6 popp'  data-aos="fade-left" data-aos-duration="1000">
          <div className='lmk1 coverage'>
            <img src="/images/cns.webp" alt='best computer services'  className='image-fluid'/>
          </div>
          
            
         </div>

     </div>
    </div>) :null}
    {/* 4 */}
    {serv === "Designing"? (<div className='container lolp mt-5 mb-5'>
        <div className='hkl'>
        <h1 className='bril mb-5'>Designing</h1>
        </div>
        <div className='row'>
            <div className='col-md-4 col-lg-4 popp' data-aos="fade-right"  data-aos-duration="1000">
             <div className='lmk'>
               <img src="/images/projectorsservice.webp" alt='best projector services' className='image-fluid'/>
             </div>
            </div>
            <div className='col-md-8 col-lg-8 wifit' data-aos="fade-left"  data-aos-duration="1000" >
            <div className='nmk'>
                <div className='libra3'>
                </div>
               <h3>Projectors </h3>
               </div>
                <p className='text-muted mt-2'>
                Our projectors offer high-resolution images that are bright
                 and clear, making them perfect for presentations, movies,
                  and other uses.Our projectors offer high-resolution images 
                  that are bright and clear, making them perfect for
                   presentations, movies, and other uses.
                   Our projectors are built with high-quality lamps that
                    last a long time, so you won't have to replace
                     them as often. This means less downtime and lower costs over the long term.
                  
                </p>
                <p className='text-muted '>
                Our projectors are lightweight and easy to transport,
                 making them perfect for traveling professionals, 
                 educators, and anyone who needs a high-quality projector.Our projectors come with a variety of customizable features,
                 such as zoom, focus, and keystone correction, 
                 so you can adjust the image to fit your specific needs.
                 <br />
                <Link className='serv-link' to='/ServiceSeo?scrollTo=projects'> 
                        <button className="serv-btns4 text-center text-light-blogss mt-2" >
                       View Our Projects  &nbsp; <span className="fa fa-arrow-right"></span>{" "}
                      </button>
                      </Link>  </p>
          </div>

        </div>
    
        <div className='row'>
              <div className='col-md-7 col-lg-7 wifit1' data-aos="fade-right"  data-aos-duration="1000">
            <div className='nmk1'>
                <div className='libra3'>
                </div>
               <h3>Smart Class and Smart Tv</h3>
               </div>
                <p className='text-muted mt-2'>
                A Smart TVs are very much like smartphones; 
                they stream entertainment straight to your 
                TV via an internet connection. This means 
                that you can watch all the 
                latest films, box sets and play games on 
                your smart TV without the need for an aerial, cable or separate streaming device.
                </p>
                <p className='text-muted'>
                Stream your favourite shows,
                Voice recognition,Streamline your devices 
                They're filled with the latest tech and developments,Surf the web. <br />
                <Link className='serv-link' to='/ServiceSeo?scrollTo=projects'> 
                        <button className="serv-btns4 text-center text-light-blogss mt-2" >
                       View Our Projects  &nbsp; <span className="fa fa-arrow-right"></span>{" "}
                      </button>
                      </Link></p>
            </div>
          <div className='col-md-5 col-lg-5 olk' data-aos="fade-left"  data-aos-duration="1000">
               <div className='lmk2'>
                 <img src="/images/smartclass.webp" alt='best smarttv services' className='image-fluid'/>
               </div>
               </div>
        </div>

        <div className='row'>
            <div className='col-md-4 col-lg-4 popp' data-aos="fade-right"  data-aos-duration="1000">
             <div className='lmk'>
               <img src="/images/projectorsservice.webp" alt='best projector services' className='image-fluid'/>
             </div>
            </div>
            <div className='col-md-8 col-lg-8 wifit' data-aos="fade-left"  data-aos-duration="1000" >
            <div className='nmk'>
                <div className='libra3'>
                </div>
               <h3>Projectors </h3>
               </div>
                <p className='text-muted mt-2'>
                Our projectors offer high-resolution images that are bright
                 and clear, making them perfect for presentations, movies,
                  and other uses.Our projectors offer high-resolution images 
                  that are bright and clear, making them perfect for
                   presentations, movies, and other uses.
                   Our projectors are built with high-quality lamps that
                    last a long time, so you won't have to replace
                     them as often. This means less downtime and lower costs over the long term.
                  
                </p>
                <p className='text-muted '>
                Our projectors are lightweight and easy to transport,
                 making them perfect for traveling professionals, 
                 educators, and anyone who needs a high-quality projector.Our projectors come with a variety of customizable features,
                 such as zoom, focus, and keystone correction, 
                 so you can adjust the image to fit your specific needs.<br />
                 <Link className='serv-link' to='/ServiceSeo?scrollTo=projects'> 
                        <button className="serv-btns4 text-center text-light-blogss mt-2" >
                       View Our Projects  &nbsp; <span className="fa fa-arrow-right"></span>{" "}
                      </button>
                      </Link></p>
          </div>

        </div>
     
        <div className='row'>
         
            <div className='col-md-6 col-lg-6 probl' data-aos="fade-right"  data-aos-duration="1000" >
            
            <div className='nmk1'>
                <div className='libra3'>
                </div>
               <h2>Discover Our Services</h2>
               </div>
           <ul className='text-muted'>
            <li><p> Customized and efficient networking solutions designed to match your business needs.</p></li>
            <li><p>Hassle-free installation and seamless setup of networking equipment for reliable operations.</p></li>
            <li><p>Robust security measures, including firewalls and encryption, ensuring data confidentiality and protection against cyber threats.</p></li>
            <li><p>Experience prompt service with our fast turnaround times, minimizing downtime and inconvenience.</p></li>
            <li><p>Future-ready networks that scale with your business, accommodating new devices and increasing traffic demands effortlessly.</p></li>
            <li><p>Comprehensive integration of cloud services, enhancing collaboration, data storage, and accessibility for maximum productivity.</p></li>


           </ul>
                
           

          </div>

          <div className='col-md-6 col-lg-6 popp'  data-aos="fade-left" data-aos-duration="1000">
             <div className='lmk1 coverage'>
               <img src="/images/cns.webp" alt='best computer services'  className='image-fluid'/>
             </div>
             
               
            </div>

        </div>

    </div>) :null}
 
    </>
    )
}


export default BestService;