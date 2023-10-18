import React, { useState } from 'react';
import "../css/BestService.css";
import { BsCheckLg } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Spinner from 'react-bootstrap/Spinner';


function BestService() {
    const [isLoading, setIsLoading] = useState(false);
    const [showLoader, setShowLoader] = useState(false);

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
        <div className='container'>
    <div className={isLoading ? "opaque" :  "opaque1"}>
        <div className='row overall'>
                <div className='col-md-4'>
                    <div className='rightboxheadcol'>
                        <div className='rightbox' onClick={Clickon1}>
                            <p> CCTV & Bio-Metrics</p>
                            <span className='iconindex1'><IoIosArrowForward /></span>
                        </div>
                        <br></br>

                        <div className='rightbox' onClick={Clickon2}> <p>Laptop Desktop Sales and Service </p>
                            <span className='iconindex2'><IoIosArrowForward /></span></div><br></br>
                        <div className='rightbox' onClick={Clickon3}> <p>Custom PC Build</p>
                            <span className='iconindex3'><IoIosArrowForward /></span></div><br></br>
                        <div className='rightbox' onClick={Clickon4}> <p>Complete Networking
</p>
                            <span className='iconindex4'>
                                <IoIosArrowForward /></span></div><br></br>
                        <div className='rightbox' onClick={Clickon5}><p>Laptop and Desktop Rent</p>
                            <span className='iconindex5'><IoIosArrowForward /></span></div>
                            <br></br>
                            <div className='rightbox' onClick={Clickon6}><p>Smart TV</p>
                            <span className='iconindex6'><IoIosArrowForward /></span></div>
                            <br></br>
                            <div className='rightbox' onClick={Clickon7}><p>Interactive Panels</p>
                            <span className='iconindex7'><IoIosArrowForward /></span></div>
                            <br></br>
                            <div className='rightbox' onClick={Clickon8}><p>Projectors</p>
                            <span className='iconindex8'><IoIosArrowForward /></span></div>
                    </div>
                </div>
                <div className='col-md-8'>
                    <div className='firstlineflex'>
                        <div className='yellowbreak'></div>
                        <div className='firstheading'>
                            <h1>We give the best Services </h1>
                        </div>
                    </div>
                    <div className='paraoutdoor'>
                        {box1 ? <p className='text-muted firstparavalue'>Facial recognition technology allows
                            users to log in to websites by
                            scanning their faces. It's becoming more common for user
                            verification and authentication in mobile applications. Voice recognition technology can be used for voice-based
                            user authentication.
                            CCTV cameras capture high-resolution video footage, allowing for continuous monitoring of a premises.
                             The addition of biometrics enhances the surveillance system by providing a reliable way to identify individuals
                        </p> : null}
                        {box2 ? <p className='text-muted firstparavalue'>Is your laptop or desktop not performing at its best?
                            Our skilled technicians can diagnose and repair a variety of issues,
                            from hardware problems to software glitches. We also offer upgrades to boost your system's performance.
                            Most reputable laptop sellers provide warranties and after-sales support, giving you peace of mind in case you encounter any issues with your new laptop.
                        </p> : null}
                        {box3 ? <p className='text-muted firstparavalue'>In the realm of personal computing, a custom PC build
                         service stands as a testament to individuality and performance. It allows you to design and create a computer that perfectly aligns with your needs, preferences, and budget. Whether you're a gamer seeking the ultimate 
                        rig or a professional demanding optimal performance, custom PC builds offer a tailored solution.
                        </p> : null}
                        {box4 ? <p className='text-muted firstparavalue'>Computer network services play a pivotal role in the modern 
                        digital landscape, enabling the seamless flow of information and resources across the globe. These services encompass a wide range of functionalities,
                        ensuring connectivity, communication, and efficient data transfer in our increasingly interconnected world.
                        </p> : null}
                        {box5 ? <p className='text-muted firstparavalue'>Our rental packages often include technical support and maintenance,
                            ensuring your equipment runs smoothly.Renting is a cost-effective solution, with no upfront
                            investment and predictable monthly costs.Renting is a cost-effective solution, with no upfront investment and predictable monthly costs
                        </p> : null}
                        {box6? <p className='text-muted firstparavalue'>Smart TVs have transformed the way we consume entertainment. These cutting-edge devices offer a world of content, features, and convenience, making them a centerpiece of modern living rooms. Smart TV services bring streaming, 
                        apps, and internet connectivity to your television, offering a wide range of entertainment options.
                        </p> : null}
                        {box7 ? <p className='text-muted firstparavalue'>Interactive panel services have redefined the way we engage with digital content in both educational and professional settings. These services offer comprehensive solutions for interactive panel setup, maintenance,
                         and training, ensuring that users can harness the full potential of this transformative technology.
                        </p> : null}
                        {box8 ? <p className='text-muted firstparavalue'>Projectors are versatile devices that have become indispensable in both educational and business environments. To ensure optimal performance and longevity, 
                        projector services offer a range of solutions, from installation and maintenance to custom setups and support.
                        </p> : null}
                    </div>
              {/*  1 line */}
                     <div className='downsession'>
                        <div className='downparasession'>
                            <img src="\images\download.svg" className='image-fluid iconroller'/>
                            <span className='clinicpara'>
                                {box1?<p>Our integrated service offers advanced security 
                                through CCTV surveillance and biometric authentication, ensuring that only 
                                authorized individuals can access secure areas.</p>: null}

                                {box2?<p>Sales points offer a wide selection of laptops and desktops from various brands, catering to 
                                    different budgets and requirements. This includes options for gaming, business, ultraportability, and more.</p>: null}

                                {box3?<p>Custom PC build services offer personalized solutions that cater to your unique 
                                    computing needs, whether it's for gaming, content creation, business, or specialized tasks.</p>: null}

                                {box4?<p>Networking services connect people, businesses, and governments worldwide, 
                                    enabling the exchange of information, collaboration, and global commerce..</p>: null}

                                {box5?<p>The adoption of software-defined networking (SDN) and network functions virtualization 
                                    (NFV) allows for more flexible, dynamic, and cost-effective network management.</p>: null}

                                {box6?<p>Our integrated service offers advanced security 
                                through CCTV surveillance and biometric authentication, ensuring that only 
                                authorized individuals can access secure areas.</p>: null}

                                {box7?<p>Our integrated service offers advanced security 
                                through CCTV surveillance and biometric authentication, ensuring that only 
                                authorized individuals can access secure areas.</p>: null}

                                {box8?<p>Our integrated service offers advanced security 
                                through CCTV surveillance and biometric authentication, ensuring that only 
                                authorized individuals can access secure areas.</p>: null}

                                </span>
                             </div>
                             {/* 2 point */}
                        <div className='downparasession'>
                        <img src="\images\download.svg" className='image-fluid iconroller'/>
                            <span className='clinicpara'>
                                {box1? <p>Biometrics provide a highly accurate method of verifying
                                 individuals, reducing the risk of unauthorized access or security breaches.</p> : null}

                                 {box2? <p>Customers can get assistance with hardware upgrades, such as increasing 
                                    RAM, swapping out hard drives for SSDs, or upgrading graphics cards to improve performance.</p> : null}

                                 {box3? <p>Skilled technicians assemble the components, ensuring proper installation, 
                                    cable management, and system stability, reducing the risk of hardware issues.</p> : null}

                                 {box4? <p>Organizations rely on networking services for efficient communication, 
                                    data sharing, and access to cloud-based tools, enhancing productivity and competitiveness.</p> : null}

                                 {box5? <p>Renting relieves you of the burden of maintenance and repairs. The rental company takes care of device maintenance,
                                     updates, and technical support.</p> : null}

                                 {box6? <p>Biometrics provide a highly accurate method of verifying
                                 individuals, reducing the risk of unauthorized access or security breaches.</p> : null}

                                 {box7? <p>Biometrics provide a highly accurate method of verifying
                                 individuals, reducing the risk of unauthorized access or security breaches.</p> : null}

                                 {box8? <p>Biometrics provide a highly accurate method of verifying
                                 individuals, reducing the risk of unauthorized access or security breaches.</p> : null}
                                 </span>
                        </div>
                        {/* 3 point */}
                        <div className='downparasession'>
                        <img src="\images\download.svg" className='image-fluid iconroller'/>
                            <span className='clinicpara'>
                                {box1?<p>With CCTV cameras and motion detection,
                                 you can monitor your premises in real time and receive alerts when unusual activities
                                  are detected.</p>: null}
                                  
                                  {box2? <p>Service points help users with virus and malware removal, 
                                    ensuring that their computers are free from security threats.</p> : null}

                                 {box3? <p>Before building your PC, custom PC builders verify that all selected
                                    components are compatible, preventing conflicts and ensuring a smooth setup.</p> : null}

                                 {box4? <p>e deployment of 5G networks promises faster and more reliable wireless connections,
                                     opening up opportunities for a wide range of applications and services.</p> : null}

                                 {box5? <p>With laptop and desktop rentals, you can access the latest technology without the need
                                     to continuously purchase new devices, ensuring you're always using up-to-date equipment.</p> : null}

                                 {box6? <p>Biometrics provide a highly accurate method of verifying
                                 individuals, reducing the risk of unauthorized access or security breaches.</p> : null}

                                 {box7? <p>Biometrics provide a highly accurate method of verifying
                                 individuals, reducing the risk of unauthorized access or security breaches.</p> : null}

                                 {box8? <p>Biometrics provide a highly accurate method of verifying
                                 individuals, reducing the risk of unauthorized access or security breaches.</p> : null}
                                 
                                 </span>
                        </div>
                        {/*  4 points */}
                        <div className='downparasession'>
                        <img src="\images\download.svg" className='image-fluid iconroller'/>
                            <span className='clinicpara'>
                            {box1 ?<p>You can access and control your 
                                CCTV and biometrics system remotely, providing flexibility and convenience
                                 in monitoring multiple locations.</p>: null}
                                 
                                 {box2? <p> Service centers provide assistance with software installation, updates,
                                     and configuration to keep systems up to date.</p> : null}

                                 {box3? <p>Effective cable management not only enhances aesthetics but also improves 
                                    airflow and cooling, contributing to the system's overall performance..</p> : null}

                                 {box4? <p>Network security services are vital for safeguarding sensitive 
                                    data and protecting against cyber threats and unauthorized access.</p> : null}

                                 {box5? <p>Biometrics provide a highly accurate method of verifying
                                 individuals, reducing the risk of unauthorized access or security breaches.</p> : null}

                                 {box6? <p>Biometrics provide a highly accurate method of verifying
                                 individuals, reducing the risk of unauthorized access or security breaches.</p> : null}

                                 {box7? <p>Biometrics provide a highly accurate method of verifying
                                 individuals, reducing the risk of unauthorized access or security breaches.</p> : null}

                                 {box8? <p>Biometrics provide a highly accurate method of verifying
                                 individuals, reducing the risk of unauthorized access or security breaches.</p> : null}</span>
                        </div>
                        {/* 5 points */}
                        <div className='downparasession'>
                        <img src="\images\download.svg" className='image-fluid iconroller'/>
                            <span className='clinicpara'>
                            {box1 ?<p>Our service can be 
                                seamlessly integrated with your existing security systems, streamlining operations 
                                and data management.</p>: null}
                                {box2? <p>Service centers assist with resolving operating system issues and
                                     optimizing system performance. Can facilitate repairs or replacements for eligible products.</p> : null}

                                 {box3? <p>Rigorous testing and benchmarking are conducted to confirm 
                                    that your custom PC meets or exceeds the desired performance levels..</p> : null}

                                 {box4? <p>Networking services will increasingly support the vast array of devices and sensors that make up the Internet of Things 
                                    (IoT), requiring efficient data transfer and management.</p> : null}

                                 {box5? <p>Biometrics provide a highly accurate method of verifying
                                 individuals, reducing the risk of unauthorized access or security breaches.</p> : null}

                                 {box6? <p>Biometrics provide a highly accurate method of verifying
                                 individuals, reducing the risk of unauthorized access or security breaches.</p> : null}

                                 {box7? <p>Biometrics provide a highly accurate method of verifying
                                 individuals, reducing the risk of unauthorized access or security breaches.</p> : null}

                                 {box8? <p>Biometrics provide a highly accurate method of verifying
                                 individuals, reducing the risk of unauthorized access or security breaches.</p> : null}
                                 </span>
                        </div>
                        {/*  6 points  */}
                        <div className='downparasession'>
                        <img src="\images\download.svg" className='image-fluid iconroller'/>
                            <span className='clinicpara'>
                            {box1 ?<p>We offer the flexibility to customize the service to your specific needs,
                                 whether you require facial recognition, fingerprint scanning, or 
                                 iris recognition for access control.</p>: null}
                                 
                                 {box2? <p>Reputable sales and service points offer quality products and ensure that
                                     repairs and maintenance are carried out to high standards.</p> : null}

                                 {box3? <p>For gamers and performance enthusiasts, custom PC builders
                                     can provide overclocking services to push the hardware to its limits.</p> : null}

                                 {box4? <p>Edge computing services bring data processing and analysis closer to
                                     the source of data, reducing latency and enabling real-time applications.</p> : null}

                                 {box5? <p>Biometrics provide a highly accurate method of verifying
                                 individuals, reducing the risk of unauthorized access or security breaches.</p> : null}

                                 {box6? <p>Biometrics provide a highly accurate method of verifying
                                 individuals, reducing the risk of unauthorized access or security breaches.</p> : null}

                                 {box7? <p>Biometrics provide a highly accurate method of verifying
                                 individuals, reducing the risk of unauthorized access or security breaches.</p> : null}

                                 {box8? <p>Biometrics provide a highly accurate method of verifying
                                 individuals, reducing the risk of unauthorized access or security breaches.</p> : null}</span>
                        </div>
                        {/* 7 points  */}
                        <div className='downparasession'>
                        <img src="\images\download.svg" className='image-fluid iconroller'/>
                            <span className='clinicpara'>
                            {box1 ?<p>Biometric authentication eliminates the need for keys or PINs,
                                 simplifying access control and reducing the risk of lost or stolen access credentials.</p>: null}
                                 
                                 {box2? <p>Customers can find competitive pricing on laptops, desktops,
                                    and accessories while receiving reliable service at the same location.</p> : null}

                                 {box3? <p>Custom PC builders offer solutions optimized for content creators,
                                    professionals, and those who require powerful workstations..</p> : null}

                                 {box4? <p>The adoption of software-defined networking (SDN) and network functions virtualization (NFV) 
                                    allows for more flexible, dynamic, and cost-effective network management.</p> : null}

                                 {box5? <p>Biometrics provide a highly accurate method of verifying
                                 individuals, reducing the risk of unauthorized access or security breaches.</p> : null}

                                 {box6? <p>Biometrics provide a highly accurate method of verifying
                                 individuals, reducing the risk of unauthorized access or security breaches.</p> : null}

                                 {box7? <p>Biometrics provide a highly accurate method of verifying
                                 individuals, reducing the risk of unauthorized access or security breaches.</p> : null}

                                 {box8? <p>Biometrics provide a highly accurate method of verifying
                                 individuals, reducing the risk of unauthorized access or security breaches.</p> : null}
                                 
                                 </span>
                        </div>
                    </div>
                </div>

            </div>
            </div>

               {showLoader ?(
                <div className="centeralised">
                  <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                  </Spinner>
                </div>
              ): null} 
        </div>
    )
}

export default BestService;