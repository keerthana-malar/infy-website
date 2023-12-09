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
               <img src="/images/static.webp" alt='best Complete Network services' className='image-fluid'/>
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
              <div className='col-md-7 col-lg-7 wifit1' id="column2" data-aos="fade-right"  data-aos-duration="1000">
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
          <div className='col-md-5 col-lg-5 olk' id="column1" data-aos="fade-left"  data-aos-duration="1000">
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
         
         <div className='col-md-6 col-lg-6  probl' id="column2" data-aos="fade-right"  data-aos-duration="1000" >
         
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

       <div className='col-md-6 col-lg-6  popp' id="column1" data-aos="fade-left" data-aos-duration="1000">
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
              <div className='col-md-7 col-lg-7  wifit1' id="column2" data-aos="fade-right"  data-aos-duration="1000">
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
          <div className='col-md-5 col-lg-5  olk' id="column1" data-aos="fade-left"  data-aos-duration="1000">
               
        
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
         
            <div className='col-md-6 col-lg-6 probl' id="column2" data-aos="fade-right"  data-aos-duration="1000" >
            
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

          <div className='col-md-6 col-lg-6 popp' id="column1" data-aos="fade-left" data-aos-duration="1000">
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