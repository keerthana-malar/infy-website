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
               <img src="/images/static.webp" alt='best Complete Network services' className='image-fluid'/>
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
                Build your digital presence effortlessly with our static website solutions – simple, elegant, and effective in showcasing your brand to the world.
                </p>
                <p className='text-muted '>
                "Introducing our static website solutions designed for simplicity and impact. With a clean and elegant design, these websites offer a straightforward online presence, ideal for businesses and individuals looking to establish a solid foundation on the web. Emphasizing reliability and ease of use, our static websites are a cost-effective solution, ensuring your information is presented seamlessly to your audience. Explore the efficiency and effectiveness of our static website services as we help you make a lasting impression in the digital landscape."
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
                Experience dynamism online. Our dynamic websites bring your content to life, ensuring an engaging and interactive user experience.
                </p>
                <p className='text-muted'>
                "Step into the dynamic realm of web presence with our tailored solutions. Our dynamic websites offer more than just pages; they provide an interactive and engaging user experience. Seamlessly adapt to evolving needs with content that responds to user interactions, creating a personalized journey for every visitor. Elevate your online presence, enhance user engagement, and embrace the versatility of our dynamic website solutions, where your content comes to life in real-time."
                        <br />
                        <button className="serv-btns1 text-center text-light-blogss mt-2" >
                      <Link className='serv-link' to='/ServiceSeo?scrollTo=projects'>  View Our Projects  &nbsp; <span className="fa fa-arrow-right"></span>{" "}</Link> 
                      </button>
                    </p>
            </div>
          <div className='col-md-5 col-lg-5 olk' data-aos="fade-left"  data-aos-duration="1000">
               <div className='lmk2'>
                 <img src="/images/ecommerce.webp" alt='best server services' className='image-fluid'/>
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
               <img src="/seo-img.webp" alt='best Complete Network services' className='image-fluid'/>
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
                Unlock online success with our E-commerce websites – your gateway to seamless transactions and satisfied customers.
                </p>
                <p className='text-muted '>
                    
                "Elevate your business presence on the digital frontier with our E-commerce websites. Our solutions offer seamless shopping experiences, ensuring secure transactions and a user-friendly interface crafted for your success. Embrace the power of online commerce with confidence."                         <br />
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
         <li><p>Explore our expertise in creating websites that adapt seamlessly to different devices, ensuring a consistent and user-friendly experience.</p></li>
         <li><p>Tailor-made websites designed to align with your brand identity, goals, and user expectations.</p></li>
         <li><p>Elevate your online store with our specialized e-commerce website development, integrating secure and efficient transactional features.</p></li>
         <li><p>Benefit from the ease of content management with our implementation of robust Content Management Systems (CMS).</p></li>
         <li><p>Immerse your audience in visually appealing and intuitive interfaces, enhancing user engagement and satisfaction.</p></li>
         <li><p>Ensure your website loads quickly and performs optimally, providing a smooth and enjoyable browsing experience.</p></li>


        </ul>
             
        

       </div>

       <div className='col-md-6 col-lg-6 popp'  data-aos="fade-left" data-aos-duration="1000">
          <div className='lmk1 coverage'>
            <img src="/web-design-concept.webp" alt='best computer services'  className='image-fluid'/>
          </div>
          
            
         </div>

      </div>

        
    </div>) :null}
     {/* 2 */}
    {serv === "Seo"? (<div className='container lolp mt-5 mb-5'>
        <div className='hkl'>
        <h1 className='bril mb-5'> Search Engine Optimization </h1>
        </div>
        <div className='row'>
            <div className='col-md-4 col-lg-4 popp' data-aos="fade-right" data-aos-duration="1000">
             <div className='lmk'>
               <img src="/images/SEO PAGE VECTOR.webp" alt='best laptop services' className='image-fluid'/>
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
               
               <h3>On-Page SEO</h3>
            
               </div>
                <p className='text-muted '>
                Unlock the full potential of your website's visibility with our dedicated On-Page SEO services. At Infygain Technologies, we understand that the best on-page SEO practices are essential for a strong online presence. Our experts meticulously optimize every element of your web pages, from content and meta tags to headers and internal links. By strategically incorporating high-value keywords and ensuring a seamless user experience, we aim to propel your pages to the top of search engine results. Trust us to lay a robust foundation for your online success through the best on-page SEO strategies.                </p>
                <p className='text-muted '>Elevate your online presence with precision. Our On-Page SEO services ensure your website is finely tuned for search engine success. From strategic keyword integration to seamless user experience, trust us for the best On-Page SEO practices.
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
               <h3>Off-Page SEO</h3>
               </div>
               <div className='piol'>
                <p className='text-muted mt-2'>
                Elevate your online influence with our targeted Off-Page SEO strategies. Building a robust online presence requires more than just on-site optimizations. Our approach to off-page SEO at Infygain Technologies focuses on acquiring high-quality backlinks, fostering social media engagement, and managing your online reputation. We believe in securing the best off-page SEO elements that contribute to your website's authority and credibility. By strategically connecting your brand with the broader digital landscape, we ensure a lasting impact that extends beyond your website's boundaries.
                </p>
                <p className='text-muted'>Extend your impact beyond your website. Our Off-Page SEO strategies focus on building authority through high-quality backlinks, social engagement, and online reputation management. Choose us for the best Off-Page SEO elements that amplify your brand's influence.
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
                 <img src="/images/seo-sec.webp" alt='best desktop services' className='image-fluid'/>
               </div>
            
              </div>

        </div>
        
        <div className='row'>
            <div className='col-md-4 col-lg-4 popp' data-aos="fade-right" data-aos-duration="1000">
             <div className='lmk'>
               <img src="/images/seo-third.webp" alt='best laptop services' className='image-fluid'/>
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
               
               <h3>Ranking</h3>
            
               </div>
                <p className='text-muted '>
                Achieving and maintaining high rankings in search engine results is at the core of our SEO philosophy. At Infygain Technologies, we are dedicated to securing the best rankings for your business. Our comprehensive approach starts with thorough keyword research and strategic on-page targeting to ensure you rank for the most relevant terms. We extend our commitment to optimizing your website's speed, ensuring mobile responsiveness, and adhering to the best SEO practices. The culmination of these efforts positions your website for the best ranking in the dynamic landscape of search engine results. Trust us to secure and improve your rankings, ensuring your business stands out when your audience searches for relevant terms.
                </p>
                <p className='text-muted '>Reach the pinnacle of search engine results. Our comprehensive approach, blending strategic on-page optimization and authoritative off-page strategies, ensures your business secures and maintains the best rankings. Trust us to navigate the dynamic landscape for sustained online success.

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
            <li><p>In-depth analysis of your current online presence and Identification of optimization opportunities and challenges.</p></li>
            <li><p>Meticulous research to target high-performing keywords and Integration of strategically chosen keywords into your content. </p></li>
            <li><p>Optimization of meta tags, headings, and content structure.</p></li>
            <li><p>Building authoritative backlinks to boost domain authority.</p></li>
            <li><p>Google My Business optimization for enhanced local presence.</p></li>
            <li><p>Analytics-driven insights for continuous improvement.</p></li>
            <li><p>Proactive adjustments to stay current with search engine algorithms.</p></li>
            <li><p>Expert guidance on SEO best practices and Training sessions to empower your team for ongoing success.</p></li>


           </ul>
                
           

          </div>

          <div className='col-md-6 col-lg-6 popp'  data-aos="fade-left" data-aos-duration="1000">
             <div className='lmk1 coverage'>
               <img src="/images/seo-three.webp" alt='best computer services'  className='image-fluid'/>
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