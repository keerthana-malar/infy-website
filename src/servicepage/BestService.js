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
    const [cns, setCns] = useState(false)
    const [lds, setLds] = useState(false)
    const [cb, setCb] = useState(false) 
    const [pro, setPro] = useState(false)
    const [ca, setCa] = useState(false)
    const [ldr, setLdr] = useState(false)
    const [ip, setIp] = useState(false)
    const [sm, setSm] = useState(false) 

    useEffect(() => {
        if(id==='networking'){
            setCns(true)
            setLds(false)
            setCb(false)
            setPro(false)
            setCa(false)
            setLdr(false)
            setIp(false)
            setSm(false)
        }
        if(id==='laptop&desktop'){
            setCns(false)
            setLds(true)
            setCb(false)
            setPro(false)
            setCa(false)
            setLdr(false)
            setIp(false)
            setSm(false)
        }
        if(id==='cctv'){
            setCns(false)
            setLds(false)
            setCb(true)
            setPro(false)
            setCa(false)
            setLdr(false)
            setIp(false)
            setSm(false)
        }
        if(id==='Projectors'){
            setCns(false)
            setLds(false)
            setCb(false)
            setPro(true)
            setCa(false)
            setLdr(false)
            setIp(false)
            setSm(false)
        }if(id==='Accessories'){
            setCns(false)
            setLds(false)
            setCb(false)
            setPro(false)
            setCa(true)
            setLdr(false)
            setIp(false)
            setSm(false)
        }
        if(id==='Laptop&DesktopRent'){
            setCns(false)
            setLds(false)
            setCb(false)
            setPro(false)
            setCa(false)
            setLdr(true)
            setIp(false)
            setSm(false)
        }
    },[id])

    const [box1, setBox1] = useState(true);
    const [box2, setBox2] = useState(false);
    const [box3, setBox3] = useState(false);
    const [box4, setBox4] = useState(false);
    const [box5, setBox5] = useState(false);
    const [box6, setBox6] = useState(false);
    const [box7, setBox7] = useState(false);
    const [box8, setBox8] = useState(false);

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

      const Clickon6=()=>{
        handleClick();
        Value6();
      }
      const Clickon7=()=>{
        handleClick();
        Value7();
      }
      const Clickon8=()=>{
        handleClick();
        Value8();
      }



    const Value1 = () => {
        setBox1(true);
        setBox2(false);
        setBox3(false);
        setBox4(false);
        setBox5(false);
        setBox6(false);
        setBox7(false);
        setBox8(false);

    }
    const Value2 = () => {
        setBox1(false);
        setBox2(true);
        setBox3(false);
        setBox4(false);
        setBox5(false);
        setBox6(false);
        setBox7(false);
        setBox8(false);
    }
    const Value3 = () => {
        setBox1(false);
        setBox2(false);
        setBox3(true);
        setBox4(false);
        setBox5(false);
        setBox6(false);
        setBox7(false);
        setBox8(false);
    }
    const Value4 = () => {
        setBox1(false);
        setBox2(false);
        setBox3(false);
        setBox4(true);
        setBox5(false);
        setBox6(false);
        setBox7(false);
        setBox8(false);
    }
    const Value5 = () => {
        setBox1(false);
        setBox2(false);
        setBox3(false);
        setBox4(false);
        setBox5(true);
        setBox6(false);
        setBox7(false);
        setBox8(false);
    }

    const Value6= () => {
        setBox1(false);
        setBox2(false);
        setBox3(false);
        setBox4(false);
        setBox5(false);
        setBox6(true);
        setBox7(false);
        setBox8(false);
    }
    const Value7 = () => {
        setBox1(false);
        setBox2(false);
        setBox3(false);
        setBox4(false);
        setBox5(false);
        setBox6(false);
        setBox7(true);
        setBox8(false);
    }
    const Value8 = () => {
        setBox1(false);
        setBox2(false);
        setBox3(false);
        setBox4(false);
        setBox5(false);
        setBox6(false);
        setBox7(false);
        setBox8(true);
    }
    return (
    //     <div className='container'>
    // <div className={isLoading ? "opaque" :  "opaque1"}>
    //     <div className='row overall'>
    //             <div className='col-md-4 '>

    //             <div className='rightboxheadcol'>
    //             <Link to='/ServicePage/1'>
    //                             <button  onClick={() => setLoad(true)} className={`btn-categ ${cns ? 'categ-active' : ''}`}>
    //                                 <span>
    //                                     Complete Networking
    //                                 </span>   
    //                                 <span>
    //                                     <IoIosArrowForward />
    //                                 </span> 
    //                             </button>
    //                         </Link>
                            
    //                         <Link to='/ServicePage/2'>
    //                             <button onClick={() => setLoad(true)}  className={`btn-categ ${lds ? 'categ-active' : ''}`}>
    //                                 <span>
    //                                     Laptop Desktop Sales and Service 
    //                                 </span>   
    //                                 <span>
    //                                     <IoIosArrowForward />
    //                                 </span> 
    //                             </button>
    //                         </Link>
    //                         <Link to='/ServicePage/3'>
    //                             <button onClick={() => setLoad(true)}  className={`btn-categ ${cb ? 'categ-active' : ''}`} >
    //                                 <span>
    //                                     CCTV & Bio-Metrics
    //                                 </span>   
    //                                 <span>
    //                                     <IoIosArrowForward />
    //                                 </span> 
    //                             </button>
    //                         </Link>
    //                          <Link to='/ServicePage/4'>
    //                             <button  onClick={() => setLoad(true)} className={`btn-categ ${pro ? 'categ-active' : ''}`}>
    //                                 <span>
    //                                      Projectors
    //                                 </span>   
    //                                 <span>
    //                                     <IoIosArrowForward />
    //                                 </span> 
    //                             </button>
    //                         </Link>
    //                         <Link to='/ServicePage/5'>
    //                             <button onClick={() => setLoad(true)} className={`btn-categ ${ca ? 'categ-active' : ''}`}>
    //                                 <span>
    //                                     Custom PC Build
    //                                 </span>   
    //                                 <span>
    //                                     <IoIosArrowForward />
    //                                 </span> 
    //                             </button>
    //                         </Link>
                            
    //                         <Link to='/ServicePage/6'>
    //                             <button onClick={() => setLoad(true)} className={`btn-categ ${ldr ? 'categ-active' : ''}`}>
    //                                 <span>
    //                                     Laptop and Desktop Rent
    //                                 </span>   
    //                                 <span>
    //                                     <IoIosArrowForward />
    //                                 </span> 
    //                             </button>
    //                         </Link>
    //                         <Link to='/ServicePage/7'>
    //                             <button onClick={() => setLoad(true)}  className={`btn-categ ${ip ? 'categ-active' : ''}`}>
    //                                 <span>
    //                                     Interactive Panels
    //                                 </span>   
    //                                 <span>
    //                                     <IoIosArrowForward />
    //                                 </span> 
    //                             </button>
    //                         </Link>
    //                         <Link to='/ServicePage/8'>
    //                             <button onClick={() => setLoad(true)}  className={`btn-categ ${sm ? 'categ-active' : ''}`}>
    //                                 <span>
    //                                     Smart TV
    //                                 </span>   
    //                                 <span>
    //                                     <IoIosArrowForward />
    //                                 </span> 
    //                             </button>
    //                         </Link>
                           
                           

    //                         {/* <Link to='/GasPipeline/7'>
    //                             <button   className={`btn-categ ${bc ? 'categ-active' : ''}`}>
    //                                 <span>
    //                                     Bottles & Containers
    //                                 </span>   
    //                                 <span>
    //                                     <IoIosArrowForward />
    //                                 </span> 
    //                             </button>
    //                         </Link>
    //                         <Link to='/GasPipeline/8'>
    //                             <button  className={`btn-categ ${cut ? 'categ-active' : ''}`}>
    //                                 <span>
    //                                     Cutlery
    //                                 </span>   
    //                                 <span>
    //                                     <IoIosArrowForward />
    //                                 </span> 
    //                             </button>
    //                         </Link>
    //                         <Link to='/GasPipeline/9'>
    //                             <button  className={`btn-categ ${cgb ? 'categ-active' : ''}`}>
    //                                 <span>                       
    //                                     Compostable Garbage Bags
    //                                 </span>   
    //                                 <span>
    //                                     <IoIosArrowForward />
    //                                 </span> 
    //                             </button>
    //                         </Link> */}

    //                         {/* <div className='rightbox' onClick={Clickon1}>
    //                             <p> CCTV & Bio-Metrics</p>
    //                             <span className='iconindex1'><IoIosArrowForward /></span>
    //                         </div>
    //                         <br></br>
    //                         <div className='rightbox' onClick={Clickon2}> <p>Laptop Desktop Sales and Service </p>
    //                             <span className='iconindex2'><IoIosArrowForward /></span></div><br></br>
    //                         <div className='rightbox' onClick={Clickon3}> <p>Custom PC Build</p>
    //                             <span className='iconindex3'><IoIosArrowForward /></span></div><br></br>
    //                         <div className='rightbox' onClick={Clickon4}> <p>Complete Networking</p>
    //                             <span className='iconindex4'>
    //                                 <IoIosArrowForward /></span></div><br></br>
    //                         <div className='rightbox' onClick={Clickon5}><p>Laptop and Desktop Rent</p>
    //                             <span className='iconindex5'><IoIosArrowForward /></span></div>
    //                             <br></br>
    //                             <div className='rightbox' onClick={Clickon6}><p>Smart TV</p>
    //                             <span className='iconindex6'><IoIosArrowForward /></span></div>
    //                             <br></br>
    //                             <div className='rightbox' onClick={Clickon7}><p>Interactive Panels</p>
    //                             <span className='iconindex7'><IoIosArrowForward /></span></div>
    //                             <br></br>
    //                             <div className='rightbox' onClick={Clickon8}><p>Projectors</p>
    //                             <span className='iconindex8'><IoIosArrowForward /></span></div> */}
    //             </div>
    //                 {/* <div className='rightboxheadcol'>
    //                     <div className='rightbox' onClick={Clickon1}>
    //                         <p> CCTV & Bio-Metrics</p>
    //                         <span className='iconindex1'><IoIosArrowForward /></span>
    //                     </div>
    //                     <br></br>
    //                     <div className='rightbox' onClick={Clickon2}> <p>Laptop Desktop Sales and Service </p>
    //                         <span className='iconindex2'><IoIosArrowForward /></span></div><br></br>
    //                     <div className='rightbox' onClick={Clickon3}> <p>Custom PC Build</p>
    //                         <span className='iconindex3'><IoIosArrowForward /></span></div><br></br>
    //                     <div className='rightbox' onClick={Clickon4}> <p>Complete Networking</p>
    //                         <span className='iconindex4'>
    //                             <IoIosArrowForward /></span></div><br></br>
    //                     <div className='rightbox' onClick={Clickon5}><p>Laptop and Desktop Rent</p>
    //                         <span className='iconindex5'><IoIosArrowForward /></span></div>
    //                         <br></br>
    //                         <div className='rightbox' onClick={Clickon6}><p>Smart TV</p>
    //                         <span className='iconindex6'><IoIosArrowForward /></span></div>
    //                         <br></br>
    //                         <div className='rightbox' onClick={Clickon7}><p>Interactive Panels</p>
    //                         <span className='iconindex7'><IoIosArrowForward /></span></div>
    //                         <br></br>
    //                         <div className='rightbox' onClick={Clickon8}><p>Projectors</p>
    //                         <span className='iconindex8'><IoIosArrowForward /></span></div>
    //                 </div> */}

    //             </div>
    //             <div className='col-md-8'>
    //                 <div className='firstlineflex'>
    //                     <div className='yellowbreak'></div>
    //                     <div className='firstheading'>
    //                         <h1>{   
    //                             cns ? "Complete Networking" : lds ? " Laptop Desktop Sales and Service ": ca? " Custom PC Build" :
    //                             cb ? "CCTV & Bio-Metrics":ldr ? "Laptop and Desktop Rent":sm? " Smart TV" : ip ? "Interactive Panels" : pro ? "  Projectors" : ""
                                
    //                         }
    //                         </h1>
    //                     </div>
    //                 </div>  
    //                 <div className='paraoutdoor'>
    //                     {cb ? <p className='text-muted firstparavalue'>Facial recognition technology allows
    //                         users to log in to websites by
    //                         scanning their faces. It's becoming more common for user
    //                         verification and authentication in mobile applications. Voice recognition technology can be used for voice-based
    //                         user authentication.
    //                         CCTV cameras capture high-resolution video footage, allowing for continuous monitoring of a premises.
    //                          The addition of biometrics enhances the surveillance system by providing a reliable way to identify individuals
    //                     </p> : null}
    //                     {lds ? <p className='text-muted firstparavalue'>Is your laptop or desktop not performing at its best?
    //                         Our skilled technicians can diagnose and repair a variety of issues,
    //                         from hardware problems to software glitches. We also offer upgrades to boost your system's performance.
    //                         Most reputable laptop sellers provide warranties and after-sales support, giving you peace of mind in case you encounter any issues with your new laptop.
    //                     </p> : null}
    //                     {ca ? <p className='text-muted firstparavalue'>In the realm of personal computing, a custom PC build
    //                      service stands as a testament to individuality and performance. It allows you to design and create a computer that perfectly aligns with your needs, preferences, and budget. Whether you're a gamer seeking the ultimate 
    //                     rig or a professional demanding optimal performance, custom PC builds offer a tailored solution.
    //                     </p> : null}
    //                     {cns ? <p className='text-muted firstparavalue'>Computer network services play a pivotal role in the modern 
    //                     digital landscape, enabling the seamless flow of information and resources across the globe. These services encompass a wide range of functionalities,
    //                     ensuring connectivity, communication, and efficient data transfer in our increasingly interconnected world.
    //                     </p> : null}
    //                     {ldr ? <p className='text-muted firstparavalue'>Our rental packages often include technical support and maintenance,
    //                         ensuring your equipment runs smoothly.Renting is a cost-effective solution, with no upfront
    //                         investment and predictable monthly costs.Renting is a cost-effective solution, with no upfront investment and predictable monthly costs
    //                     </p> : null}
    //                     {sm? <p className='text-muted firstparavalue'>Smart TVs have transformed the way we consume entertainment. These cutting-edge devices offer a world of content, features, and convenience, making them a centerpiece of modern living rooms. Smart TV services bring streaming, 
    //                     apps, and internet connectivity to your television, offering a wide range of entertainment options.
    //                     </p> : null}
    //                     {ip ? <p className='text-muted firstparavalue'>Interactive panel services have redefined the way we engage with digital content in both educational and professional settings. These services offer comprehensive solutions for interactive panel setup, maintenance,
    //                      and training, ensuring that users can harness the full potential of this transformative technology.
    //                     </p> : null}
    //                     {pro ? <p className='text-muted firstparavalue'>Projectors are versatile devices that have become indispensable in both educational and business environments. To ensure optimal performance and longevity, 
    //                     projector services offer a range of solutions, from installation and maintenance to custom setups and support.
    //                     </p> : null}
    //                 </div>
    //           {/*  1 line */}
    //                  <div className='downsession'>
    //                     <div className='downparasession'>
    //                         <img src="\images\download.svg" className='image-fluid iconroller'/>
    //                         <span className='clinicpara'>
    //                             {cb?<p>Our integrated service offers advanced security 
    //                             through CCTV surveillance and biometric authentication, ensuring that only 
    //                             authorized individuals can access secure areas.</p>: null}

    //                             {lds?<p>Sales points offer a wide selection of laptops and desktops from various brands, catering to 
    //                                 different budgets and requirements. This includes options for gaming, business, ultraportability, and more.</p>: null}

    //                             {ca?<p>Custom PC build services offer personalized solutions that cater to your unique 
    //                                 computing needs, whether it's for gaming, content creation, business, or specialized tasks.</p>: null}

    //                             {cns?<p>Networking services connect people, businesses, and governments worldwide, 
    //                                 enabling the exchange of information, collaboration, and global commerce..</p>: null}

    //                             {ldr?<p>The adoption of software-defined networking (SDN) and network functions virtualization 
    //                                 (NFV) allows for more flexible, dynamic, and cost-effective network management.</p>: null}

    //                             {sm?<p>Our integrated service offers advanced security 
    //                             through CCTV surveillance and biometric authentication, ensuring that only 
    //                             authorized individuals can access secure areas.</p>: null}

    //                             {ip?<p>Our integrated service offers advanced security 
    //                             through CCTV surveillance and biometric authentication, ensuring that only 
    //                             authorized individuals can access secure areas.</p>: null}

    //                             {pro?<p>Our integrated service offers advanced security 
    //                             through CCTV surveillance and biometric authentication, ensuring that only 
    //                             authorized individuals can access secure areas.</p>: null}

    //                             </span>
    //                          </div>
    //                          {/* 2 point */}
    //                     <div className='downparasession'>
    //                     <img src="\images\download.svg" className='image-fluid iconroller'/>
    //                         <span className='clinicpara'>
    //                             {cb? <p>Biometrics provide a highly accurate method of verifying
    //                              individuals, reducing the risk of unauthorized access or security breaches.</p> : null}

    //                              {lds? <p>Customers can get assistance with hardware upgrades, such as increasing 
    //                                 RAM, swapping out hard drives for SSDs, or upgrading graphics cards to improve performance.</p> : null}

    //                              {ca? <p>Skilled technicians assemble the components, ensuring proper installation, 
    //                                 cable management, and system stability, reducing the risk of hardware issues.</p> : null}

    //                              {cns? <p>Organizations rely on networking services for efficient communication, 
    //                                 data sharing, and access to cloud-based tools, enhancing productivity and competitiveness.</p> : null}

    //                              {ldr? <p>Renting relieves you of the burden of maintenance and repairs. The rental company takes care of device maintenance,
    //                                  updates, and technical support.</p> : null}

    //                              {sm? <p>Biometrics provide a highly accurate method of verifying
    //                              individuals, reducing the risk of unauthorized access or security breaches.</p> : null}

    //                              {ip? <p>Biometrics provide a highly accurate method of verifying
    //                              individuals, reducing the risk of unauthorized access or security breaches.</p> : null}

    //                              {pro? <p>Biometrics provide a highly accurate method of verifying
    //                              individuals, reducing the risk of unauthorized access or security breaches.</p> : null}
    //                              </span>
    //                     </div>
    //                     {/* 3 point */}
    //                     <div className='downparasession'>
    //                     <img src="\images\download.svg" className='image-fluid iconroller'/>
    //                         <span className='clinicpara'>
    //                             {cb?<p>With CCTV cameras and motion detection,
    //                              you can monitor your premises in real time and receive alerts when unusual activities
    //                               are detected.</p>: null}
                                  
    //                               {lds? <p>Service points help users with virus and malware removal, 
    //                                 ensuring that their computers are free from security threats.</p> : null}

    //                              {ca? <p>Before building your PC, custom PC builders verify that all selected
    //                                 components are compatible, preventing conflicts and ensuring a smooth setup.</p> : null}

    //                              {cns? <p>e deployment of 5G networks promises faster and more reliable wireless connections,
    //                                  opening up opportunities for a wide range of applications and services.</p> : null}

    //                              {ldr? <p>With laptop and desktop rentals, you can access the latest technology without the need
    //                                  to continuously purchase new devices, ensuring you're always using up-to-date equipment.</p> : null}

    //                              {sm? <p>Biometrics provide a highly accurate method of verifying
    //                              individuals, reducing the risk of unauthorized access or security breaches.</p> : null}

    //                              {ip? <p>Biometrics provide a highly accurate method of verifying
    //                              individuals, reducing the risk of unauthorized access or security breaches.</p> : null}

    //                              {pro? <p>Biometrics provide a highly accurate method of verifying
    //                              individuals, reducing the risk of unauthorized access or security breaches.</p> : null}
                                 
    //                              </span>
    //                     </div>
    //                     {/*  4 points */}
    //                     <div className='downparasession'>
    //                     <img src="\images\download.svg" className='image-fluid iconroller'/>
    //                         <span className='clinicpara'>
    //                         {cb ?<p>You can access and control your 
    //                             CCTV and biometrics system remotely, providing flexibility and convenience
    //                              in monitoring multiple locations.</p>: null}
                                 
    //                              {lds? <p> Service centers provide assistance with software installation, updates,
    //                                  and configuration to keep systems up to date.</p> : null}

    //                              {ca? <p>Effective cable management not only enhances aesthetics but also improves 
    //                                 airflow and cooling, contributing to the system's overall performance..</p> : null}

    //                              {cns? <p>Network security services are vital for safeguarding sensitive 
    //                                 data and protecting against cyber threats and unauthorized access.</p> : null}

    //                              {ldr? <p>Biometrics provide a highly accurate method of verifying
    //                              individuals, reducing the risk of unauthorized access or security breaches.</p> : null}

    //                              {sm? <p>Biometrics provide a highly accurate method of verifying
    //                              individuals, reducing the risk of unauthorized access or security breaches.</p> : null}

    //                              {ip? <p>Biometrics provide a highly accurate method of verifying
    //                              individuals, reducing the risk of unauthorized access or security breaches.</p> : null}

    //                              {pro? <p>Biometrics provide a highly accurate method of verifying
    //                              individuals, reducing the risk of unauthorized access or security breaches.</p> : null}</span>
    //                     </div>
    //                     {/* 5 points */}
    //                     <div className='downparasession'>
    //                     <img src="\images\download.svg" className='image-fluid iconroller'/>
    //                         <span className='clinicpara'>
    //                         {cb ?<p>Our service can be 
    //                             seamlessly integrated with your existing security systems, streamlining operations 
    //                             and data management.</p>: null}
    //                             {lds? <p>Service centers assist with resolving operating system issues and
    //                                  optimizing system performance. Can facilitate repairs or replacements for eligible products.</p> : null}

    //                              {ca? <p>Rigorous testing and benchmarking are conducted to confirm 
    //                                 that your custom PC meets or exceeds the desired performance levels..</p> : null}

    //                              {cns? <p>Networking services will increasingly support the vast array of devices and sensors that make up the Internet of Things 
    //                                 (IoT), requiring efficient data transfer and management.</p> : null}

    //                              {ldr? <p>Biometrics provide a highly accurate method of verifying
    //                              individuals, reducing the risk of unauthorized access or security breaches.</p> : null}

    //                              {sm? <p>Biometrics provide a highly accurate method of verifying
    //                              individuals, reducing the risk of unauthorized access or security breaches.</p> : null}

    //                              {ip? <p>Biometrics provide a highly accurate method of verifying
    //                              individuals, reducing the risk of unauthorized access or security breaches.</p> : null}

    //                              {pro? <p>Biometrics provide a highly accurate method of verifying
    //                              individuals, reducing the risk of unauthorized access or security breaches.</p> : null}
    //                              </span>
    //                     </div>
    //                     {/*  6 points  */}
    //                     <div className='downparasession'>
    //                     <img src="\images\download.svg" className='image-fluid iconroller'/>
    //                         <span className='clinicpara'>
    //                         {cb ?<p>We offer the flexibility to customize the service to your specific needs,
    //                              whether you require facial recognition, fingerprint scanning, or 
    //                              iris recognition for access control.</p>: null}
                                 
    //                              {lds? <p>Reputable sales and service points offer quality products and ensure that
    //                                  repairs and maintenance are carried out to high standards.</p> : null}

    //                              {ca? <p>For gamers and performance enthusiasts, custom PC builders
    //                                  can provide overclocking services to push the hardware to its limits.</p> : null}

    //                              {cns? <p>Edge computing services bring data processing and analysis closer to
    //                                  the source of data, reducing latency and enabling real-time applications.</p> : null}

    //                              {ldr? <p>Biometrics provide a highly accurate method of verifying
    //                              individuals, reducing the risk of unauthorized access or security breaches.</p> : null}

    //                              {sm? <p>Biometrics provide a highly accurate method of verifying
    //                              individuals, reducing the risk of unauthorized access or security breaches.</p> : null}

    //                              {ip? <p>Biometrics provide a highly accurate method of verifying
    //                              individuals, reducing the risk of unauthorized access or security breaches.</p> : null}

    //                              {pro? <p>Biometrics provide a highly accurate method of verifying
    //                              individuals, reducing the risk of unauthorized access or security breaches.</p> : null}</span>
    //                     </div>
    //                     {/* 7 points  */}
    //                     <div className='downparasession'>
    //                     <img src="\images\download.svg" className='image-fluid iconroller'/>
    //                         <span className='clinicpara'>
    //                         {cb ?<p>Biometric authentication eliminates the need for keys or PINs,
    //                              simplifying access control and reducing the risk of lost or stolen access credentials.</p>: null}
                                 
    //                              {lds? <p>Customers can find competitive pricing on laptops, desktops,
    //                                 and accessories while receiving reliable service at the same location.</p> : null}

    //                              {ca? <p>Custom PC builders offer solutions optimized for content creators,
    //                                 professionals, and those who require powerful workstations..</p> : null}

    //                              {cns? <p>The adoption of software-defined networking (SDN) and network functions virtualization (NFV) 
    //                                 allows for more flexible, dynamic, and cost-effective network management.</p> : null}

    //                              {ldr? <p>Biometrics provide a highly accurate method of verifying
    //                              individuals, reducing the risk of unauthorized access or security breaches.</p> : null}

    //                              {sm? <p>Biometrics provide a highly accurate method of verifying
    //                              individuals, reducing the risk of unauthorized access or security breaches.</p> : null}

    //                              {ip? <p>Biometrics provide a highly accurate method of verifying
    //                              individuals, reducing the risk of unauthorized access or security breaches.</p> : null}

    //                              {pro? <p>Biometrics provide a highly accurate method of verifying
    //                              individuals, reducing the risk of unauthorized access or security breaches.</p> : null}
                                 
    //                              </span>
    //                     </div>
    //                 </div>
    //             </div>

    //         </div>
    //         </div>

    //            {/* {showLoader ?(
    //             <div className="centeralised">
    //               <Spinner animation="border" role="status">
    //                 <span className="sr-only">Loading...</span>
    //               </Spinner>
    //             </div>
    //           ): null}  */}
    //     </div>
    <>
    {/* 1 */}
    {lds ? (<div className='container lolp mt-5 mb-5'>
        <div className='hkl'>
        <h1 className='bril mb-5'> Laptop and Desktop Sales and Services </h1>
        </div>
        <div className='row'>
            <div className='col-md-4 col-lg-4 popp' data-aos="fade-right" data-aos-duration="1000">
             <div className='lmk'>
               <img src="/images/laptopabout.jpg" className='image-fluid'/>
             </div>
             <div className='butk'>
               <button className='btn butks'>
                <a href="https://infygain.com/onlinestore/"><FaCartPlus/> buy now </a></button>
               </div>
               
            </div>
            <div className='col-md-8 col-lg-8 wifit' data-aos="fade-left"  data-aos-duration="1000" >
            <div className='nmk'>
                <div className='libra'>
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
                    </p>
           

          </div>

        </div>
        <div className='pinar'>
        
          <div className='row idiot'>
            <div className='col-md-6 klop' data-aos="fade-right"  data-aos-duration="1000">
                 <h1> We are Specialized in repair of all varieties of Laptops and Desktops </h1>
                 <div className='bul'>
                 <ul className='text-muted'>
                  <li>Broken, Cracked Screen Replacement </li>
                  <li>Troubleshoot Internet Related Issues</li>
                  <li> Notebook Computer Hinge Repair</li>
                  <li>Laptop Screen Repair / Replacement</li>
                  <li>Memory Upgrade And Replacement</li>
                  <li>Laptop Keyboard Repair / Replacement</li>
                  <li>Hardware problem diagnosis, repair and rectification</li>
                  <li>Fabrication of physically damaged units</li>
                  <li>Complete health check-up</li>
                  <li>Spare replacements</li>
                  <li>Monitor repair</li>
                  <li>Power supply repair</li>
                  <li>Spare replacements</li>
                  <li>Fabrication of physically damaged units</li>
                  <li>Warranty extension care packs</li>
                 </ul>
                 </div>
            </div>
            <div className='col-md-6 idioy4'>
             <div className='mirrow'>
              <div className='div10' data-aos="fade-right"  data-aos-duration="1000">
                <h2>Door Step Repair</h2>
                <p>The impact of home computer repairs 
                  can be felt quickly by the whole family if your computer runs slowly,
                   freezes up or even refuses to start.</p>
              </div>
              <div className='div11' data-aos="fade-left"  data-aos-duration="1000">
              <h2>System Service </h2>
              <p>Most desktops these days, 
                either from a reputed brand manufacturer 
                or assembled, can easily be serviced by a good technician. </p>
              </div>
              <div>

              </div>

             </div>
             <div className='mirrow'>
              <div className='div10' data-aos="fade-right"  data-aos-duration="1000">
              <h2>Auto Backup</h2>
              <p>With the aid of our deft team of experts, 
                we are engaged in providing Auto Data Backup Service to our patrons.</p>
              </div>
              <div className='div11' data-aos="fade-left"  data-aos-duration="1000">
              <h2>Desktop Support</h2>
              <p> On-demand technical support serving custimers globally which relieves your clients from the discomfort.</p>
              </div>
              <div>

              </div>

             </div>
             <div className='mirrow'>
              <div className='div10' data-aos="fade-right"  data-aos-duration="1000">
              <h2>Desktop Repair</h2>
              <p>We are spcialist in providing on site Desktop 
                Repair service and Network support for all sized business, 
                on site computer and network services.</p>
              </div>
              <div className='div11' data-aos="fade-left"  data-aos-duration="1000">
              <h2>Laptop Service</h2>
              <p>We are laptop service specialist having more experience 
                and technicians
                 in repair, upgrade, maintenance and replacement of all laptops.</p>
              </div>
              <div>

              </div>

             </div>
            </div>
            

          </div>

        </div>
        <div className='row'>
              <div className='col-md-7 col-lg-7 wifit1' data-aos="fade-right"  data-aos-duration="1000">
            <div className='nmk1'>
                <div className='libra'>
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
                    </p>
                    </div>
           

          </div>
          <div className='col-md-5 col-lg-5 olk' data-aos="fade-left"  data-aos-duration="1000">
               
        
               <div className='lmk1'>
                 <img src="/images/desk.jpg" className='image-fluid'/>
               </div>
               <div className='butk'>
               <button className='btn butks'><a href="https://infygain.com/onlinestore/products/ca/148" className='hol '><FaCartPlus/>  buy now</a></button>
               </div>
              </div>

        </div>
        

        <div className='row'>
            <div className='col-md-6 col-lg-6 popp' data-aos="fade-right" data-aos-duration="1000">
             <div className='lmk1 coverage'>
               <img src="/images/cns.jpg" className='image-fluid'/>
             </div>
             
               
            </div>
            <div className='col-md-6 col-lg-6 probl' data-aos="fade-left"  data-aos-duration="1000" >
            
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

        </div>

        
        
       
    </div>) :null}
    {/* 2 */}
    {cns? (<div className='container lolp mt-5 mb-5'>
        <div className='hkl'>
        <h1 className='bril mb-5'> Complete Network Solutions </h1>
        </div>
        <div className='row'>
            <div className='col-md-4 col-lg-4 popp' data-aos="fade-right"  data-aos-duration="1000">
             <div className='lmk'>
               <img src="/images/systemadmin_1.jpg" className='image-fluid'/>
             </div>
             <div className='butk'>
               <button className='btn butks'>
               <a href="https://infygain.com/onlinestore/products/ca/178"><FaCartPlus/> buy now </a>
                </button>
               </div>
            </div>
            <div className='col-md-8 col-lg-8 wifit' data-aos="fade-left"  data-aos-duration="1000">
            <div className='nmk'>
                <div className='libra'>
                </div>
               <h3 >Server and Firewall</h3>
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
                    </p>
           

          </div>

        </div>
        <div className='pinar'>
        
        <div className='row idiot'>
          <div className='col-md-6 klop' data-aos="fade-right"  data-aos-duration="1000">
               <h1> We are Specialized in repair of all varieties of Laptops and Desktops </h1>
               <div className='bul'>
               <ul className='text-muted'>
               <li>Internet Service </li>
                <li>Intranet Service</li>
                <li> Extranet Service</li>
                <li>Virtual Private Network (VPN)</li>
                <li>Wireless Services</li>
                <li>Email Services</li>
                <li>File Transfer Services</li>
                <li>Domain Name System (DNS)</li>
                <li>VoIP Services</li>
                <li>Network Security Services</li>
                <li>Cloud Services</li>
                <li>Remote Access Services</li>
                <li>Firewall Maintenance</li>
                <li>Network Installation</li>
                <li>Server Maintenance</li>
                <li>IT Man Power Solution</li>
                <li>Corporate AMC Services</li>
       
               </ul>
               </div>
          </div>
          <div className='col-md-6 idioy4'>
           <div className='mirrow'>
            <div className='div10' data-aos="fade-right"  data-aos-duration="1000">
              <h2>Man Power  </h2>
              <p>Service is teamed up with an average of 40+ employees 
                in Coimbatore and Banglore and each of our 
                competence is fully insured and licensed.</p>
            </div>
            <div className='div11' data-aos="fade-left"  data-aos-duration="1000">
            <h2>Amc Service </h2>
            <p> we acquire complete computer
               service contract from corporate companies
                and serve them in affordable price.  </p>
            </div>
            <div>

            </div>

           </div>
           <div className='mirrow'>
            <div className='div10' data-aos="fade-right"  data-aos-duration="1000">
            <h2>Server</h2>
            <p>As we know server is the heart of any IT sector,
               we help in proactive server maintenance and prevent
                your data before the problem arrives.</p>
            </div>
            <div className='div11' data-aos="fade-left"  data-aos-duration="1000">
            <h2>Network </h2>
            <p>Under expert guidance 
              of our skilled professionals, we provide quality of 
              work that meets international standards</p>
            </div>
            <div>

            </div>

           </div>
           <div className='mirrow'>
            <div className='div10' data-aos="fade-right"  data-aos-duration="1000">
            <h2>Firewall</h2>
            <p>The advanced level of 
              implementation done on security systems 
              in a company is equal to the monetary investment.</p>
            </div>
            <div className='div11' data-aos="fade-left"  data-aos-duration="1000">
            <h2>Cloud Services</h2>
            <p>Offer various network-based services such as storage, 
              computing power, and software applications over the internet.</p>
            </div>
            <div>

            </div>

           </div>
          </div>
          

        </div>

      </div>
        <div className='row'>
              <div className='col-md-7 col-lg-7 wifit1' data-aos="fade-right"  data-aos-duration="1000">
            <div className='nmk1'>
                <div className='libra'>
                </div>
               <h3>Router & Switch</h3>
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
                    </p>
            </div>
          <div className='col-md-5 col-lg-5 olk' data-aos="fade-left"  data-aos-duration="1000">
               <div className='lmk2'>
                 <img src="/images/network1.jpg" className='image-fluid'/>
               </div>
               <div className='butk'>
               <button className='btn butks'>
               <a href="https://infygain.com/onlinestore/products/ca/181"><FaCartPlus/> buy now </a> 
               </button>
               </div>
               </div>

        </div>

       
        <div className='row'>
            <div className='col-md-6 col-lg-6 popp' data-aos="fade-right" data-aos-duration="1000">
             <div className='lmk coved'>
               <img src="/images/ld.avif" className='image-fluid'/>
             </div>
             
               
            </div>
            <div className='col-md-6 col-lg-6 probl' data-aos="fade-left"  data-aos-duration="1000" >
            
            <div className='nmk1'>
                <div className='libra'>
                </div>
               <h2>Discover Our Services</h2>
               </div>
           <ul className='text-muted'>
           <li><p>Explore a wide range of laptops for various needs and budgets, including business and gaming laptops.</p></li>
            <li><p>We prioritize your privacy, employing strict protocols to handle your data securely during repairs.</p></li>
            <li><p>Trust our certified technicians for quick and transparent laptop repairs, ensuring your device functions flawlessly.</p></li>
            <li><p>Experience prompt service with our fast turnaround times, minimizing downtime and inconvenience.</p></li>
            <li><p>Count on our knowledgeable and friendly staff for excellent customer support, guiding you through laptop purchases and repairs.</p></li>
            <li><p>Count on our knowledgeable and friendly staff for excellent customer support, guiding you through laptop purchases and repairs.</p></li>
           </ul>
                
           

          </div>

        </div>

        
    </div>) :null}
    {/* 3 */}
    {cb? (<div className='container lolp mt-5 mb-5'>
        <div className='hkl'>
        <h1 className='bril mb-5'> CCTV Camera and Biometrics Sales and Serives </h1>
        </div>
        <div className='row'>
            <div className='col-md-4 col-lg-4 popp' data-aos="fade-right"  data-aos-duration="1000">
             <div className='lmk'>
               <img src="/images/cctvservice.avif" className='image-fluid'/>
             </div>
             <div className='butk'>
               <button className='btn butks'>
               <a href="https://infygain.com/onlinestore/products/ca/152"><FaCartPlus/> buy now </a>
                </button>
               </div>
            </div>
            <div className='col-md-8 col-lg-8 wifit' data-aos="fade-left"  data-aos-duration="1000" >
            <div className='nmk'>
                <div className='libra'>
                </div>
               <h3>CCTV</h3>
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
                    </p>
          </div>

        </div>
        <div className='pinar'>
        
        <div className='row idiot'>
          <div className='col-md-6 klop' data-aos="fade-right"  data-aos-duration="1000">
               <h1>Best CCTV Camera and Biometrics Sales and Service Provider </h1>
               <div className='bul'>
               <ul className='text-muted'>
                <li>Dome Cameras </li>
                <li>Bullet Cameras</li>
                <li> PTZ Cameras (Pan-Tilt-Zoom)</li>
                <li>Day/Night Cameras</li>
                <li>Wireless Cameras</li>
                <li>IP Cameras</li>
                <li>Thermal Cameras</li>
                <li>Fingerprint Recognition</li>
                <li>Facial Recognition</li>
                <li>Iris Recognition</li>
                <li>Voice Recognition</li>
                <li>Hand Geometry Recognition</li>
                <li>Vein Pattern Recognition</li>
                <li>Gait Recognition</li>
               </ul>
               </div>
          </div>
          <div className='col-md-6 idioy4'>
           <div className='mirrow'>
            <div className='div10' data-aos="fade-right"  data-aos-duration="1000">
              <h2>Door Step Repair</h2>
              <p>The impact of home camera repairs 
                can be felt quickly by the whole family if your camera have a problem,
                 freezes up or even refuses to start.</p>
            </div>
            <div className='div11' data-aos="fade-left"  data-aos-duration="1000">
            <h2>Wireless Cameras </h2>
            <p>Wireless cameras use Wi-Fi or Bluetooth to connect to a network,
               enabling them to transmit video and data without 
               relying on physical cables. </p>
            </div>
            <div>

            </div>

           </div>
           <div className='mirrow'>
            <div className='div10' data-aos="fade-right"  data-aos-duration="1000">
            <h2>Facial Recognition</h2>
            <p>We are identifies individuals by analyzing
               and comparing patterns based on facial features.
             </p>
            </div>
            <div className='div11' data-aos="fade-left"  data-aos-duration="1000">
            <h2>IP Cameras</h2>
            <p> We provide best Digital cameras that send and receive data via the internet or a computer network. </p>
            </div>
            <div>

            </div>

           </div>
           <div className='mirrow'>
            <div className='div10' data-aos="fade-right"  data-aos-duration="1000">
            <h2>Bullet Cameras</h2>
            <p>Shaped like a cylinder, these are suitable 
              for outdoor surveillance due to their weatherproof design.
               They're often easily noticeable.</p>
            </div>
            <div className='div11' data-aos="fade-left"  data-aos-duration="1000">
            <h2>Voice Recognition</h2>
            <p>Analyzes a person's voice for identification.
               It’s utilized in authentication processes and automated telephone systems.</p>
            </div>
            <div>

            </div>

           </div>
          </div>
          

        </div>

      </div>
        <div className='row'>
              <div className='col-md-7 col-lg-7 wifit1' data-aos="fade-right"  data-aos-duration="1000" >
            <div className='nmk1'>
                <div className='libra'>
                </div>
               <h3>Bio-Metrics</h3>
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
                    </p>
            </div>
          <div className='col-md-5 col-lg-5 olk' data-aos="fade-left"  data-aos-duration="1000">
               <div className='lmk2'>
                 <img src="/images/biometric.avif" className='image-fluid'/>
               </div>
               <div className='butk'>
               <button className='btn butks'>
               <a href="https://infygain.com/onlinestore/products/ca/184"><FaCartPlus/> buy now </a>
                </button>
               </div>
               </div>

        </div>
        

       

        <div className='row'>
            <div className='col-md-6 col-lg-6 popp' data-aos="fade-right" data-aos-duration="1000">
             <div className='lmk covera'>
               <img src="/images/cb.jpg" className='image-fluid'/>
             </div>
             
               
            </div>
            <div className='col-md-6 col-lg-6 probl' data-aos="fade-left"  data-aos-duration="1000" >
            
            <div className='nmk1'>
                <div className='libra'>
                </div>
               <h2>Discover Our Services</h2>
               </div>
           <ul className='text-muted'>
           <li><p> Cutting-edge CCTV systems ensuring real-time monitoring and secure premises, enhancing safety and deterring potential threats.</p></li>
            <li><p> State-of-the-art biometric technology for secure access, allowing seamless and efficient control over entry points, safeguarding sensitive areas..</p></li>
            <li><p> Tailored CCTV and biometric solutions designed to fit your specific requirements, providing personalized security solutions for your business.</p></li>
            <li><p> Access your CCTV feeds remotely via mobile devices, ensuring 24/7 monitoring and peace of mind, even when you're not on-site.</p></li>
            <li><p>High-accuracy biometric systems for precise identification, minimizing unauthorized access and enhancing overall security protocols.</p></li>
            <li><p>: Expert installation services for both CCTV and biometric systems, backed by reliable technical support, ensuring optimal performance and customer satisfaction.</p></li>
           </ul>
                
           

          </div>

        </div>

    </div>) :null}
    {/* 4 */}
    {pro? (<div className='container lolp mt-5 mb-5'>
        <div className='hkl'>
        <h1 className='bril mb-5'> Projectors, Smart Class And Smart Tv </h1>
        </div>
        <div className='row'>
            <div className='col-md-4 col-lg-4 popp' data-aos="fade-right"  data-aos-duration="1000">
             <div className='lmk'>
               <img src="/images/projectorsservice.avif" className='image-fluid'/>
             </div>
             <div className='butk'>
               <button className='btn butks'>
               <a href="https://infygain.com/onlinestore/products/ca/195"><FaCartPlus/> buy now </a>
                </button>
               </div>
            </div>
            <div className='col-md-8 col-lg-8 wifit' data-aos="fade-left"  data-aos-duration="1000" >
            <div className='nmk'>
                <div className='libra'>
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
                    </p>
          </div>

        </div>
        <div className='pinar'>
        
        <div className='row idiot'>
          <div className='col-md-6 klop' data-aos="fade-right"  data-aos-duration="1000">
               <h1> We are Specialized in repair of all varieties of Projectors, Smart Class and Smart TV </h1>
               <div className='bul'>
               <ul className='text-muted'>
                <li>Projection Equipment </li>
                <li>Installation and Maintenance</li>
                <li>Interactive Whiteboards and Software</li>
                <li>Professional Development </li>
                <li>Content Integration</li>
                <li>Smart TV Installation</li>
                <li>Content and Educational Apps</li>
                <li>User Interface and Management</li>
                <li>Security and Access Control</li>
                <li>Collaborative Features</li>
                <li>Projector Repair</li>
                <li>Projection Installation</li>
                <li>Smart Tv Repair</li>
                <li>Fabrication of physically damaged units</li>
                <li>Warranty extension care packs</li>
               </ul>
               </div>
          </div>
          <div className='col-md-6 idioy4'>
           <div className='mirrow'>
            <div className='div10' data-aos="fade-right"  data-aos-duration="1000">
              <h2>Security</h2>
              <p>Providers can assist in implementing security 
                measures and access controls to manage content 
                and restrict access as necessary.</p>
            </div>
            <div className='div11' data-aos="fade-left"  data-aos-duration="1000">
            <h2>User Interface </h2>
            <p> Services might include setting up user-friendly 
              interfaces and providing tools for managing and controlling multiple smart TV. </p>
            </div>
            <div>

            </div>

           </div>
           <div className='mirrow'>
            <div className='div10' data-aos="fade-right"  data-aos-duration="1000">
            <h2>High-quality</h2>
            <p>Our projectors offer high-resolution images that are bright and clear,
               making them perfect for presentations, movies, and other uses.</p>
            </div>
            <div className='div11' data-aos="fade-left"  data-aos-duration="1000">
            <h2>Portable</h2>
            <p>Our projectors are lightweight and easy to transport,
               making them perfect for traveling professionals, 
              educators, who needs a high-quality projector.</p>
            </div>
            <div>

            </div>

           </div>
           <div className='mirrow'>
            <div className='div10' data-aos="fade-right"  data-aos-duration="1000">
            <h2>Projection </h2>
            <p>Service providers offer a range of projectors suitable for 
              classrooms, with varying brightness, resolution, and connectivity options. </p>
            </div>
            <div className='div11' data-aos="fade-left"  data-aos-duration="1000">
            <h2>Long lamp life</h2>
            <p>Our projectors are built with high-quality lamps that last a long time,
               so you won't have to replace them as often. </p>
            </div>
            <div>

            </div>

           </div>
          </div>
          

        </div>

      </div>
        <div className='row'>
              <div className='col-md-7 col-lg-7 wifit1' data-aos="fade-right"  data-aos-duration="1000">
            <div className='nmk1'>
                <div className='libra'>
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
                They're filled with the latest tech and developments,Surf the web.
                    </p>
            </div>
          <div className='col-md-5 col-lg-5 olk' data-aos="fade-left"  data-aos-duration="1000">
               <div className='lmk2'>
                 <img src="/images/smartclass.avif" className='image-fluid'/>
               </div>
               <div className='butk'>
               <button className='btn butks'>
               <a href="https://infygain.com/onlinestore/products/ca/151"><FaCartPlus/> buy now </a>
                </button>
               </div>
               </div>
        </div>

       
     
        <div className='row'>
            <div className='col-md-6 col-lg-6 popp' data-aos="fade-right" data-aos-duration="1000">
             <div className='lmk1 coverage'>
               <img src="/images/pro.jpg" className='image-fluid'/>
             </div>
             
               
            </div>
            <div className='col-md-6 col-lg-6 probl' data-aos="fade-left"  data-aos-duration="1000" >
            
            <div className='nmk1'>
                <div className='libra'>
                </div>
               <h2>Discover Our Services</h2>
               </div>
           <ul className='text-muted'>
           <li><p>Cutting-edge projectors and Smart TVs for immersive and interactive learning experiences in classrooms, promoting better understanding and engagement.</p></li>
            <li><p>High-quality projectors and Smart TVs for clear and impactful business presentations, ensuring effective communication in professional environments.</p></li>
            <li><p> Intuitive interfaces on Smart TVs, making it easy to access educational apps and multimedia content, enhancing teaching and learning efficiency.</p></li>
            <li><p>Smart classroom solutions with interactive features, enabling collaborative learning and dynamic content delivery for students and educators.</p></li>
            <li><p>Expert installation services for seamless setup of projectors and Smart TVs, ensuring optimal performance and reliability.</p></li>
            <li><p>Reliable technical support and assistance for educators and presenters, ensuring smooth operation and addressing any issues promptly.</p></li>
           </ul>
                
           

          </div>

        </div>
        

    </div>) :null}
    {/* 5 */}
    {ca? (<div className='container lolp mt-5 mb-5'>
        <div className='hkl'>
        <h1 className='bril'>Computer Accessories </h1>
        </div>
        <div className='row'>
            <div className='col-md-4 col-lg-4 popp' data-aos="fade-right"  data-aos-duration="1000">
             <div className='lmk1'>
               <img src="/images/compurter_access.avif" className='image-fluid'/>
             </div>
             <div className='butk'>
               <button className='btn butks'>
               <a href="https://infygain.com/onlinestore/products/ca/173"><FaCartPlus/> buy now </a>
                </button>
               </div>
            </div>
            <div className='col-md-8 col-lg-8 wifit' data-aos="fade-left"  data-aos-duration="1000">
            <div className='nmk'>
                <div className='libra'>
                </div>
               <h3>Keyboards and Monitors</h3>
               </div>
                <p className='text-muted mt-2'>
                Explore our diverse collection of keyboards and mice featuring
                 ergonomic designs, wireless connectivity, customizable RGB lighting,
                  and responsive, precise performance for every task.
                  Enhance your visual experience with our range of monitors,
                   featuring stunning resolutions, fast refresh rates,
                    and various sizes to suit your workspace or gaming setup.
                </p>
                <p className='text-muted '>
                We stock products from reputable brands, ensuring durability, reliability, and top-notch performance.
                Our skilled technicians are equipped to handle repairs and maintenance,
                 aiming to restore your accessories to their full functionality.
                    </p>
           

          </div>

        </div>
        <div className='pinar'>
        
        <div className='row idiot'>
          <div className='col-md-6 klop' data-aos="fade-right"  data-aos-duration="1000">
               <h1> We are Specialized in repair of all varieties of Computer Accessories</h1>
               <div className='bul'>
               <ul className='text-muted'>
              <li>Sales and Distribution Services</li>
              <li>Installation and Setup Services</li>
              <li>Repair and Maintenance Services</li>
              <li>Customization and Upgrades</li>
              <li>Warranty and Support Services</li>
              <li>Consultation and Recommendations</li>
              <li>Trade-in and Recycling Programs</li>
              <li>Technical Training Services</li>
              <li>Bulk Purchase and Corporate Services</li>
              <li>Security and Anti-Theft Services for Accessories</li>
              <li>Accessories Rental Services</li>
              <li>Compatibility Testing and Verification Services</li>
              <li>Refurbishment and Resale Services</li>
              <li>Asset Management Services for Accessories</li>
              <li>Custom Manufacturing and Design Services</li>
              <li>Specialized Cable Management Services</li>
              <li>On-Site Setup and Configuration Services</li>
                
               </ul>
               </div>
          </div>
          <div className='col-md-6 idioy4'>
           <div className='mirrow'>
            <div className='div10' data-aos="fade-right"  data-aos-duration="1000">
              <h2>Sales</h2>
              <p>Provide a wide range of computer accessories, 
                including monitors, keyboards, mice, cables,
                 adapters, storage devices, and more.</p>
            </div>
            <div className='div11' data-aos="fade-left"  data-aos-duration="1000">
            <h2>Setup Services </h2>
            <p>Assistance in setting up and installing hardware components
               such as graphics cards, RAM, hard drives,etc., </p>
            </div>
            <div>

            </div>

           </div>
           <div className='mirrow'>
            <div className='div10' data-aos="fade-right"  data-aos-duration="1000">
            <h2>Repair</h2>
            <p>Repairs and maintenance for damaged or malfunctioning
               computer accessories including keyboards, 
               mice, monitors, printers, and external drives.</p>
            </div>
            <div className='div11' data-aos="fade-left"  data-aos-duration="1000">
            <h2>Customization</h2>
            <p>  Assistance in building custom systems, 
              upgrading components, and optimizing hardware for better performance.</p>
            </div>
            <div>

            </div>

           </div>
           <div className='mirrow'>
            <div className='div10' data-aos="fade-right"  data-aos-duration="1000">
            <h2>Consultation</h2>
            <p>Consultation services to assist customers in selecting the right 
              accessories for their specific needs, based on budget and requirements.</p>
            </div>
            <div className='div11' data-aos="fade-left"  data-aos-duration="1000">
            <h2>Warranty  </h2>
            <p> Warranty coverage for accessories, technical support, 
              and customer service for troubleshooting issues.</p>
            </div>
            <div>

            </div>

           </div>
          </div>
          

        </div>

      </div>
        <div className='row'>
              <div className='col-md-7 col-lg-7 wifit1' data-aos="fade-right"  data-aos-duration="1000">
            <div className='nmk1'>
                <div className='libra'>
                </div>
               <h3>External Storage, Cables and Adaptors  </h3>
               </div>
                <p className='text-muted mt-2'>
                Find the right connectivity solutions with our 
                assortment of cables, adapters, and connectors, 
                ensuring seamless compatibility across various devices.
                Keep your data secure and accessible with our selection 
                of external hard drives, SSDs, and USB drives, 
                offering ample storage space and rapid data transfer rates.
                </p>
                <p className='text-muted'>
                We provide assistance with setting up your
                 newly acquired accessories to ensure optimal performance.
                 Our skilled technicians are equipped to handle repairs 
                 and maintenance, aiming to restore your accessories to their full functionality.
                 We offer customization services for gaming peripherals, 
                 allowing you to personalize your equipment according to your preferences.
                    </p>
            </div>
          <div className='col-md-5 col-lg-5 olk' data-aos="fade-left"  data-aos-duration="1000">
               <div className='lmk2 covera'>
                 <img src="/images/com_acc.jpg" className='image-fluid mt-5'/>
               </div>
               <div className='butk'>
               <button className='btn butks'>
               <a href="https://infygain.com/onlinestore/products/ca/185"><FaCartPlus/> buy now </a>
                </button>
               </div>
               </div>
        </div>

        

        <div className='row'>
            <div className='col-md-6 col-lg-6 popp' data-aos="fade-right" data-aos-duration="1000">
             <div className='lmk'>
               <img src="/images/ca.jpg" className='image-fluid'/>
             </div>
             
               
            </div>
            <div className='col-md-6 col-lg-6 probl' data-aos="fade-left"  data-aos-duration="1000" >
            
            <div className='nmk1'>
                <div className='libra'>
                </div>
               <h2>Discover Our Services</h2>
               </div>
           <ul className='text-muted'>
           <li><p>Explore a diverse selection of computer accessories, including keyboards, mice, headphones, and more, catering to various needs and preferences.</p></li>
            <li><p> Offering high-quality accessories from trusted brands, ensuring durability and optimal performance for your computer setup.</p></li>
            <li><p> Ergonomic keyboards, precision mice, and other accessories designed for comfort, boosting productivity and reducing strain during extended computer use.</p></li>
            <li><p>Specialized gaming keyboards, mice, and headphones for gamers, providing a competitive edge and immersive gaming experience.</p></li>
            <li><p>Cable organizers, extensions, and management tools to keep your workspace tidy and free from clutter, enhancing efficiency and aesthetics.</p></li>
            <li><p>Knowledgeable staff providing expert recommendations, helping you choose the right accessories tailored to your specific needs and requirements.</p></li>
           </ul>
                
           

          </div>

        </div>
        
    </div>) :null}
    {/* 6 */}
    {ldr? (<div className='container lolp mt-5 mb-5'>
        <div className='hkl'>
        <h1 className='bril '> Laptop Desktop Rent </h1>
        </div>
        <div className='row'>
            <div className='col-md-4 col-lg-4 popp' data-aos="fade-right"  data-aos-duration="1000">
             <div className='lmk1'>
               <img src="/images/7832583.jpg" className='image-fluid'/>
             </div>
             <div className='butk'>
               <button className='btn butks mt-5'>
               <a href="https://infygain.com/onlinestore/products/ca/153"><FaCartPlus/> buy now </a>
                </button>
               </div>
            </div>
            <div className='col-md-8 col-lg-8 wifit' data-aos="fade-left"  data-aos-duration="1000">
            <div className='nmk'>
                <div className='libra'>
                </div>
               <h3>Laptops for Rent</h3>
               </div>
                <p className='text-muted mt-2'>
                Choose from a wide array of laptops suited for various purposes, 
                including business,
                 gaming, design, and general use. Our inventory includes 
                 the latest models equipped with the specifications you require.
                 We provide flexible rental durations, allowing you to choose the
                  rental period that best suits your needs, 
                  whether it's for a day, a week, a month, or longer.
                </p>
                <p className='text-muted '>
                We provide delivery services and 
                can assist with the setup of rented equipment 
                at your desired location for your convenience.
                Our team is available to offer technical assistance
                 and troubleshooting during the rental period, ensuring that your work is uninterrupted.
                    </p>
           

          </div>

        </div>
        <div className='pinar'>
        
        <div className='row idiot'>
          <div className='col-md-6 klop' data-aos="fade-right"  data-aos-duration="1000">
               <h1> We are Provide wide range of Desktops and Laptops for Rent </h1>
               <div className='bul'>
               <ul className='text-muted'>
                <li>Device Selection and Configuration</li>
                <li>Short-Term and Long-Term Rental Options</li>
                <li> Delivery and Setup Services</li>
                <li>Technical Support and Maintenance</li>
                <li>Software Installation and Configuration</li>
                <li>Accessories and Peripherals</li>
                <li>Upgrades and Customization</li>
                <li>Data Security and Wipe Services</li>
                <li>Insurance and Liability Coverage</li>
                <li>Pickup and Return Services</li>
                <li>Monitor repair</li>
                <li>Power supply repair</li>
                <li>Spare replacements</li>
                <li>Fabrication of physically damaged units</li>
                <li>Warranty extension care packs</li>
               </ul>
               </div>
          </div>
          <div className='col-md-6 idioy4'>
           <div className='mirrow'>
            <div className='div10' data-aos="fade-right"  data-aos-duration="1000">
              <h2>Device Selection</h2>
              <p>Various models of desktops and laptops 
                for rent, with different specifications,
                 processing power, memory, storage, etc.</p>
            </div>
            <div className='div11' data-aos="fade-left"  data-aos-duration="1000">
            <h2> Rental Options </h2>
            <p>Flexibility in rental terms, whether short-term 
              (daily, weekly) or long-term (monthly, annually).</p>
            </div>
            <div>

            </div>

           </div>
           <div className='mirrow'>
            <div className='div10' data-aos="fade-right"  data-aos-duration="1000">
            <h2>Setup Services</h2>
            <p>On-site delivery, setup, and installation of
               rented devices at the customer's location.</p>
            </div>
            <div className='div11' data-aos="fade-left"  data-aos-duration="1000">
            <h2>Technical Support</h2>
            <p> Assistance for technical issues, 
              maintenance services, and repairs during the rental period.</p>
            </div>
            <div>

            </div>

           </div>
           <div className='mirrow'>
            <div className='div10' data-aos="fade-right"  data-aos-duration="1000">
            <h2>Customization</h2>
            <p>Options to upgrade or customize the 
              devices according to specific customer 
              needs during the rental period.</p>
            </div>
            <div className='div11' data-aos="fade-left"  data-aos-duration="1000">
            <h2>Data Security</h2>
            <p>Ensuring the secure erasure of any user 
              data before and after the rental period.</p>
            </div>
            <div>

            </div>

           </div>
          </div>
          

        </div>

      </div>


        <div className='row'>
              <div className='col-md-7 col-lg-7 wifit1' data-aos="fade-right"  data-aos-duration="1000">
            <div className='nmk1'>
                <div className='libra'>
                </div>
               <h3>Desktops for Rent</h3>
               </div>
                <p className='text-muted mt-2'>
                Explore our selection of high-performance desktops tailored
                 to meet your specific computing demands.
                 Whether for office use, development, design,
                  or other specialized tasks, we have the ideal setup for you.
                  We offer technical support and assistance during your 
                  rental duration, ensuring that your experience is hassle-free.
                </p>
                <p className='text-muted'>
                Visit our website or get in touch with our customer service
                 team to discuss your requirements and select the ideal 
                laptop or desktop for your needs. We'll guide you through the
                 rental process, making it simple and efficient.
                 If needed, we can customize the software or 
                 settings on rented devices to meet your specific requirements.
                    </p>
            </div>
          <div className='col-md-5 col-lg-5 olk' data-aos="fade-left"  data-aos-duration="1000">
               <div className='lmk2'>
                 <img src="/images/desktop_rent.jpg" className='image-fluid'/>
               </div>
               <div className='butk'>
               <button className='btn butks'>
               <a href="https://infygain.com/onlinestore/products/ca/149"><FaCartPlus/> buy now </a>
                </button>
               </div>
               </div>
        </div>  

        

        <div className='row'>
            <div className='col-md-6 col-lg-6 popp' data-aos="fade-right" data-aos-duration="1000">
             <div className='lmk1'>
               <img src="/images/laptop.jpg" className='image-fluid'/>
             </div>
             
               
            </div>
            <div className='col-md-6 col-lg-6 probl' data-aos="fade-left"  data-aos-duration="1000" >
            
            <div className='nmk1'>
                <div className='libra'>
                </div>
               <h2>Discover Our Services</h2>
               </div>
           <ul className='text-muted'>
           <li><p> Choose from a range of laptops and desktops available for short-term and long-term rental, tailored to your specific requirements and duration.</p></li>
            <li><p>Access up-to-date laptops and desktops featuring the latest hardware and software, ensuring optimal performance and compatibility with modern applications</p></li>
            <li><p>Renting eliminates the need for significant upfront investments, offering a budget-friendly alternative for businesses, events, and temporary projects.</p></li>
            <li><p> Customize your rental package with specific hardware configurations, software installations, and accessories, meeting your exact computing needs.</p></li>
            <li><p>Benefit from dedicated technical support throughout the rental period, ensuring smooth operation and timely assistance in case of issues or queries.</p></li>
            <li><p>Enjoy hassle-free service with punctual delivery and pickup of rented laptops and desktops, saving you time and effort.</p></li>
           </ul>
                
           

          </div>

        </div>

    </div>) : null}
    </>
    )
}


export default BestService;