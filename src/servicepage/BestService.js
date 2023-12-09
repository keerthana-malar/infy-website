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
            <div className='col-md-4 col-lg-4  popp' data-aos="fade-right"  data-aos-duration="1000">
             <div className='lmk'>
               <img src="/images/systemadmin_1.webp" alt='best Complete Network services' className='image-fluid'/>
             </div>

             {/* <div className='butk'>
               <button className='btn butks'>
               <a href="https://infygain.com/onlinestore/products/ca/178"><FaCartPlus/> buy now </a>
                </button>
               </div> */}

            </div>
            <div className='col-md-8 col-lg-8   wifit' data-aos="fade-left"  data-aos-duration="1000">
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
              <div className='col-md-7 col-lg-7 wifit1' id="column2" data-aos="fade-right"  data-aos-duration="1000">
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
          <div className='col-md-5 col-lg-5 olk' id="column1" data-aos="fade-left"  data-aos-duration="1000">
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
         
         <div className='col-md-6 col-lg-6  probl' id="column2" data-aos="fade-right"  data-aos-duration="1000" >
         
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

       <div className='col-md-6 col-lg-6  popp' id="column1" data-aos="fade-left" data-aos-duration="1000">
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
              <div className='col-md-7 col-lg-7  wifit1' id="column2" data-aos="fade-right"  data-aos-duration="1000">
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
          <div className='col-md-5 col-lg-5  olk' id="column1" data-aos="fade-left"  data-aos-duration="1000">
               
        
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
         
            <div className='col-md-6 col-lg-6 probl' id="column2" data-aos="fade-right"  data-aos-duration="1000" >
            
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

          <div className='col-md-6 col-lg-6 popp' id="column1" data-aos="fade-left" data-aos-duration="1000">
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
               <img src="/images/custom-web.webp" alt="best CCTV services" className='image-fluid'/>
             </div>
            </div>
            <div className='col-md-8 col-lg-8 wifit' data-aos="fade-left"  data-aos-duration="1000" >
            <div className='nmk'>
                <div className='libra2'>
                </div>
               <h3>Custom Web Application</h3>
               </div>
                <p className='text-muted mt-2'>
                At Infygain Technologies, we specialize in crafting tailored web applications that meet your unique business needs. Our expert team merges cutting-edge technology with innovative solutions to create scalable, secure, and user-friendly web applications. From conceptualization to deployment, we ensure your custom-built solution aligns seamlessly with your business objectives, offering a competitive edge in the digital landscape.
                </p>
                <p className='text-muted '>
                We prioritize understanding your business intricacies to develop customized web applications that optimize processes and drive growth. Our iterative development process involves constant communication and feedback, ensuring your vision is translated into a robust, functional application. Whether you require a new web app or enhancements to an existing one, Infygain Technologies is dedicated to delivering reliable, high-performance solutions that empower your business.
                <br />
                <Link className='serv-link' to='/ServiceSeo?scrollTo=projects'> 
                        <button className="serv-btns3 text-center text-light-blogss mt-2" >
                       View Our Projects  &nbsp; <span className="fa fa-arrow-right"></span>{" "}
                      </button>
                      </Link> </p>
          </div>

        </div>
       
        <div className='row'>
              <div className='col-md-7 col-lg-7   wifit1' id="column2" data-aos="fade-right"  data-aos-duration="1000" >
            <div className='nmk1'>
                <div className='libra2'>
                </div>
               <h3>Cross-Platform Application Development</h3>
               </div>
                <p className='text-muted mt-2'>
                At Infygain Technologies, we specialize in crafting versatile and efficient applications that run seamlessly across multiple platforms. Our skilled team harnesses the power of cross-platform development frameworks to create robust applications that offer a unified user experience on various devices and operating systems. From conceptualization to deployment, we ensure your app reaches a wider audience without compromising on performance or functionality.
                </p>
                <p className='text-muted'>
                We understand the significance of broad accessibility without sacrificing quality. Our iterative development process emphasizes client collaboration, ensuring your vision aligns perfectly with our technical expertise. Whether you're launching a new cross-platform app or looking to enhance an existing one, Infygain Technologies is dedicated to delivering scalable, reliable, and user-centric applications that drive engagement and growth
                        <br />
                <Link className='serv-link' to='/ServiceSeo?scrollTo=projects'> 
                        <button className="serv-btns3 text-center text-light-blogss mt-2" >
                       View Our Projects  &nbsp; <span className="fa fa-arrow-right"></span>{" "}
                      </button>
                      </Link> 
                    </p>
            </div>
          <div className='col-md-5 col-lg-5   olk' id="column1" data-aos="fade-left"  data-aos-duration="1000">
               <div className='lmk2'>
                 <img src="/images/cross-platform.webp" alt="best bio-metrices services" className='image-fluid'/>
               </div>
               </div>

        </div>
        <div className='row'>
            <div className='col-md-4 col-lg-4 popp' data-aos="fade-right"  data-aos-duration="1000">
             <div className='lmk'>
               <img src="/images/Api-integ.webp" alt="best CCTV services" className='image-fluid'/>
             </div>
            </div>
            <div className='col-md-8 col-lg-8 wifit' data-aos="fade-left"  data-aos-duration="1000" >
            <div className='nmk'>
                <div className='libra2'>
                </div>
               <h3>API Development and Integration</h3>
               </div>
                <p className='text-muted mt-2'>
                At Infygain Technologies, we specialize in crafting robust and scalable APIs tailored to streamline data exchange and enhance connectivity across diverse platforms and systems. Our expert team leverages cutting-edge technologies to design and develop APIs that enable seamless integration, empowering your applications with enhanced functionality and interoperability.
                </p>
                <p className='text-muted '>
                We prioritize understanding your unique business requirements to create APIs that perfectly align with your objectives. Our expertise lies in developing APIs that are secure, efficient, and easily adaptable to evolving technological landscapes. Whether you need custom API development, integration services, or API strategy consultation, Infygain Technologies ensures reliable solutions that optimize your workflows and drive efficiency.
                <br />
                <Link className='serv-link' to='/ServiceSeo?scrollTo=projects'> 
                        <button className="serv-btns3 text-center text-light-blogss mt-2" >
                       View Our Projects  &nbsp; <span className="fa fa-arrow-right"></span>{" "}
                      </button>
                </Link> 
                </p>
          </div>

        </div>
        <div className='row'>
         
         <div className='col-md-6 col-lg-6   probl' id="column2" data-aos="fade-right"  data-aos-duration="1000" >
         
         <div className='nmk1'>
             <div className='libra2'>
             </div>
            <h2>Discover Our Services</h2>
            </div>
        <ul className='text-muted'>
         <li><p> Crafting customized web applications aligned with specific business goals and requirements.</p></li>
         <li><p> Creating applications that adapt seamlessly to various devices and operating systems while maintaining consistent user experiences.</p></li>
         <li><p>Designing interfaces that ensure uniformity across different platforms, enhancing intuitive navigation for diverse users.</p></li>
         <li><p>Emphasizing performance through smart development practices and leveraging cross-platform technologies.</p></li>
         <li><p>Crafting scalable, secure APIs tailored precisely to meet business needs and ensuring compliance with industry standards.</p></li>
         <li><p>Seamlessly integrating APIs into existing systems to streamline operations and facilitate smooth data exchange.</p></li>


        </ul>
             
        

       </div>

       <div className='col-md-6 col-lg-6  popp'  id="column1" data-aos="fade-left" data-aos-duration="1000">
          <div className='lmk1 coverage'>
            <img src="/images/app-services.webp" alt='best computer services'  className='image-fluid'/>
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
             <div className='lmk1'>
               <img src="/images/graphic.webp" alt='best projector services' className='image-fluid'/>
             </div>
            </div>
            <div className='col-md-8 col-lg-8 wifit' data-aos="fade-left"  data-aos-duration="1000" >
            <div className='nmk'>
                <div className='libra3'>
                </div>
               <h3>Graphic Design</h3>
               </div>
                <p className='text-muted mt-2'>
                At Infygain Technologies, we specialize in crafting captivating visual experiences that elevate your brand presence. Our expert designers blend creativity with strategic thinking to deliver tailored graphic design solutions. From brand identity and print design to digital assets and user-friendly interfaces, we bring your vision to life with precision and impact.
                </p>
                <p className='text-muted '>
                    With a focus on understanding your brand's essence and goals, we create designs that resonate with your audience. Our collaborative approach ensures your input is valued throughout the process. Whether you're starting fresh or looking to revamp your brand, Infygain Technologies is dedicated to delivering timely, high-quality design solutions that leave a lasting impression.
                 <br />
                <Link className='serv-link' to='/ServiceSeo?scrollTo=projects'> 
                        <button className="serv-btns4 text-center text-light-blogss mt-2" >
                       View Our Projects  &nbsp; <span className="fa fa-arrow-right"></span>{" "}
                      </button>
                      </Link>  </p>
          </div>

        </div>
    
        <div className='row'>
              <div className='col-md-7 col-lg-7  wifit1' id="column2" data-aos="fade-right"  data-aos-duration="1000">
            <div className='nmk1'>
                <div className='libra3'>
                </div>
               <h3>Branding & Identity</h3>
               </div>
                <p className='text-muted mt-2'>
                At Infygain Technologies, we specialize in crafting comprehensive branding and identity solutions that resonate with your audience and embody the essence of your brand. From logos and color palettes to defining visual elements, our expert team creates cohesive and impactful designs that set your brand apart and leave a lasting impression.
                </p>
                <p className='text-muted'>
                At Infygain Technologies, we recognize the pivotal role branding plays in shaping a company's identity. Our approach revolves around deeply understanding your brand's values, target audience, and market positioning. We tailor our designs to encapsulate your brand's uniqueness, ensuring consistency across all touchpoints. With a keen eye for detail and a commitment to creativity, our designs not only stand out but also communicate your brand's story effectively.<br />
                <Link className='serv-link' to='/ServiceSeo?scrollTo=projects'> 
                        <button className="serv-btns4 text-center text-light-blogss mt-2" >
                       View Our Projects  &nbsp; <span className="fa fa-arrow-right"></span>{" "}
                      </button>
                      </Link></p>
            </div>
          <div className='col-md-5 col-lg-5  olk' id="column1" data-aos="fade-left"  data-aos-duration="1000">
               <div className='lmk2'>
                 <img src="/images/brand-design.webp" alt='best smarttv services' className='image-fluid'/>
               </div>
               </div>
        </div>

        <div className='row'>
            <div className='col-md-4 col-lg-4 popp' data-aos="fade-right"  data-aos-duration="1000">
             <div className='lmk2'>
               <img src="/images/uiandux.webp" alt='best projector services' className='image-fluid'/>
             </div>
            </div>
            <div className='col-md-8 col-lg-8 wifit' data-aos="fade-left"  data-aos-duration="1000" >
            <div className='nmk'>
                <div className='libra3'>
                </div>
               <h3>UI/UX Design</h3>
               </div>
                <p className='text-muted mt-2'>
                  At Infygain Technologies, we specialize in creating seamless and intuitive digital experiences. Our UI/UX design team combines aesthetics with functionality, crafting interfaces that captivate users and elevate your brand. From wireframes to prototypes, we prioritize user-centric design to ensure your digital platforms engage and delight your audience.  
                </p>
                <p className='text-muted '>
                  We understand the critical role of user experience in driving engagement. Our collaborative process involves you at every stage, ensuring your vision aligns with our expertise. Whether you're launching a new app or revamping an existing platform, Infygain Technologies is committed to delivering user-focused designs that enhance usability and leave a lasting impression.<br />
                 <Link className='serv-link' to='/ServiceSeo?scrollTo=projects'> 
                        <button className="serv-btns4 text-center text-light-blogss mt-2" >
                       View Our Projects  &nbsp; <span className="fa fa-arrow-right"></span>{" "}
                      </button>
                      </Link></p>
          </div>

        </div>
     
        <div className='row'>
         
            <div className='col-md-6 col-lg-6  probl' id="column2" data-aos="fade-right"  data-aos-duration="1000" >
            
            <div className='nmk1'>
                <div className='libra3'>
                </div>
               <h2>Discover Our Services</h2>
               </div>
           <ul className='text-muted'>
            <li><p>Crafting unique brand identities through logos, color schemes, and visual elements that resonate with your audience.</p></li>
            <li><p>Creating engaging graphics and illustrations for marketing materials, social media content, and print collateral to enhance brand storytelling.</p></li>
            <li><p>Designing user interfaces and experiences for websites and applications, ensuring seamless navigation and interaction for your audience.</p></li>
            <li><p>Producing custom illustrations and artwork tailored to digital and print media, offering versatile creative solutions.</p></li>
            <li><p>Utilizing typography and layout design to create visually appealing and readable content across different mediums and platforms.</p></li>
            <li><p>Providing expert advice and guidance on design strategies, aesthetics, and brand consistency to elevate your visual presence.</p></li>


           </ul>
                
           

          </div>

          <div className='col-md-6 col-lg-6  popp' id="column1" data-aos="fade-left" data-aos-duration="1000">
             <div className='lmk1 coverage'>
               <img src="/images/design-serv.webp" alt='best computer services'  className='image-fluid'/>
             </div>  
            </div>

        </div>

    </div>) :null}
 
    </>
    )
}


export default BestService;