import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../css/Category.css'
import AOS from 'aos';
import SubCateContent from './SubCateContent';


const Category = () => {
    const {id} = useParams()

        useEffect(() => {
            AOS.init();
            AOS.refresh();

            
        }, []);

        const laptop = [
          {
              id:1,
              path:"GamingLaptop",
              title:"Gaming Laptop",
              para:"High-performance gaming laptops with cutting-edge graphics and processing power for immersive gameplay.",
          },
          {
              id:2,
              path:"Consumerlaptops",
              title:"Consumer laptops",
              para:"Consumer laptops designed for everyday use, offering versatility, portability, and reliability for various tasks and entertainment",
          },
          {
              id:3,
              path:"WorkStation",
              title:"Work Station",
              para:"Powerful workstations crafted for high-performance computing and demanding professional applications.",
          },
      ];
      const desktop = [
          {
              id:1,
              path:"BrandedDesktop",
              title:"Branded Desktop",
              para:"Top-tier branded desktops featuring superior build quality, performance, and reliability for diverse computing needs.",
          },
          {
              id:2,
              path:"AssembledDesktop",
              title:"Assembled Desktop",
              para:"Tailor-made assembled desktops crafted to exact specifications, delivering personalized performance and versatility.",
          },
          {
              id:3,
              title:"Work Station Desktop",
              para:"Workstations: Engineered for elite performance in specialized tasks, from complex data analysis to professional content creation",
          },
          {
              id:4,
              path:"GamingDesktop",
              title:"Gaming Desktop",
              para:"High-powered gaming desktops designed to deliver top-tier performance, immersive graphics, and seamless gameplay experiences",
          },
      ];
      const printer = [
          {
              id:1,
              path:"BrandedDesktop",
              title:"Laser",
              para:"High-speed, efficient printers utilizing laser technology to produce crisp, high-quality prints ideal for bulk and text-heavy documents.",
          },
          {
              id:2,
              path:"AssembledDesktop",
              title:"Thermal",
              para:"Utilizing heat to produce high-quality prints, ideal for receipts, labels, and applications where fast, quiet printing is crucial.",
          },
          {
              id:3,
              path:"WorkStationDesktop",
              title:"Color",
              para:"Devices capable of producing vibrant, high-resolution prints in a variety of colors, ideal for photos, presentations, and creative projects.",
          },
          {
              id:4,
              path:"GamingDesktop",
              title:"Multi Function",
              para:"All-in-one devices combining printing, scanning, copying, and sometimes faxing functionalities for versatile office or home use.",
          },
          {
              id:5,
              path:"GamingDesktop",
              title:"Dot Matrix",
              para:"Utilizing impact-based technology, these printers create text and graphics through a matrix of pins, often used for continuous forms and basic prints.",
          },
      ];
      const scanner = [
          {
              id:1,
              title:"Flatbed",
              para:" Devices with a flat, glass surface for scanning documents or photos, offering high-quality, versatile scanning capabilities...",
          },
          {
              id:2,
              title:"Vertical",
              para:" Devices designed to scan documents in a vertical position, often optimized for quick, efficient scanning of multiple pages or documents",
          },
      ];
        
        const Networking = [
          {
              id:1,
              path:"GamingLaptop",
              title:"HUB",
              para:"Explore central connectivity with our HUB solutions. Streamline data sharing and communication within your network effortlessly.",
          },
          {
              id:2,
              path:"Consumerlaptops",
              title:"Switch",
              para:"Upgrade to high-performance networking with our cutting-edge switches. Experience efficient data transfer and network optimization.",
          },
          {
              id:3,
              path:"WorkStation",
              title:"Router",
              para:"we understand the pivotal role that routers play in the heart of modern networks. Our commitment is to provide cutting-edge router solutions. ",
          },
          {
              id:4,
              path:"GamingLaptop",
              title:"Firewall",
              para:"Safeguard your digital fortress with our robust firewall solutions. Defend against cyber threats and ensure a secure digital environment.",
          },
          {
              id:5,
              path:"Consumerlaptops",
              title:"End Point Security",
              para:"Fortify your network's endpoints against cyber threats. Our endpoint security solutions provide comprehensive protection for your devices.",
          },
          {
              id:6,
              path:"WorkStation",
              title:"Fiber",
              para:"Propel your network into the future with fiber optics. Enjoy lightning-fast data transfer, low latency, and unparalleled reliability.",
          },
      ];
        const Cctv = [
          {
              id:1,
              path:"GamingLaptop",
              title:"Analog",
              para:"Immerse yourself in timeless simplicity with our best Analog cameras and electronics. Experience clarity and reliability that stands the test of time.",
          },
          {
              id:2,
              path:"Consumerlaptops",
              title:"IP",
              para:"Step into the future with our best IP cameras and solutions. Harness the power of connectivity and high-definition surveillance for unparalleled security.",
          },
          {
              id:3,
              path:"WorkStation",
              title:"DVR",
              para:"Secure your space with confidence using our best DVR and NVR systems. Capture, store, and access footage seamlessly with advanced recording technologies.",
          },
          {
              id:4,
              path:"GamingLaptop",
              title:"NVR",
              para:"Secure your space with confidence using our best DVR and NVR systems. Capture, store, and access footage seamlessly with advanced recording technologies.              ",
          },
          {
              id:5,
              path:"Consumerlaptops",
              title:"360",
              para:"Experience comprehensive surveillance with our best 360-degree cameras. Eliminate blind spots and gain complete visibility for enhanced security.",
          },
          {
              id:6,
              path:"WorkStation",
              title:"PTZ",
              para:"Navigate your security landscape with precision using our best PTZ (Pan-Tilt-Zoom) cameras. Control, zoom, and focus for a customizable surveillance experience.",
          },
      ];
        const Accessories = [
          {
              id:1,
              title:"RAM",
              para:"Crucial hardware for a computer's performance, providing high-speed memory for quick access to data and applications.",
          },
          {
              id:2,
              title:"HDD,SSD",
              para:"Storage essentials for computers; HDDs offer high capacity, while SSDs deliver speed and reliability through flash memory technology.",
          },
          {
              id:3,
              title:"KeyBoard",
              para:" Essential input devices designed for comfort and efficiency, enabling user interaction and text input on computers.",
          },
          {
              id:4,
              title:"Mouse,Moniter",
              para:"Mouse: Precision navigation tool; Monitor: Visual display for computer output, offering varied sizes and resolutions",
          },
          {
              id:5,
              title:"Cabinet",
              para:"The housing unit that holds and organizes computer components, providing structure and protection within a PC setup",
          },
          {
              id:6,
              title:"Mother Board",
              para:" The central circuit board linking and powering all computer components, serving as the foundation for a system's functionality and expansion",
          },
          {
              id:7,
              title:"SMPS",
              para:"These suits are made from different materials based on the specific risks and requirements of the tasks.",
          },
          {
              id:8,
              title:"Cables,Charger",
              para:"Cables: Connectors vital for data transfer; Charger: Power supply for device replenishment, ensuring uninterrupted usage.",
          },
          {
              id:9,
              title:"Connector,Convertor",
              para:"Connectors create physical links between devices, while converters enable compatibility by adapting interfaces or signals.. ",
          },
      ];
        const Projectors = [
          {
              id:1,
              title:"LCD",
              para:"LCD projectors: Portable, high-resolution visual solutions, perfect for presentations, movies, and etc..",
          },
          {
              id:2,
              title:"LED",
              para:"LED projectors: Compact, energy-efficient devices providing vibrant, high-resolution projections for diverse entertainment.",
          },
          {
              id:3,
              title:"Smart Projector",
              para:"Smart projectors: All-in-one connectivity and interactive capabilities for dynamic, immersive projection experiences.",
          },
          
      ];
        const TV = [
          {
              id:1,
              title:"Andriod TV",
              para:"Android TV: Smart TV platform powered by Android OS, offering a range of apps, games, and streaming services directly on your television",
          },
          {
              id:2,
              title:"Smart TV",
              para:"Smart TVs: Integrated with internet connectivity and apps, offering a range of online content, streaming services, etc..",
          },        
      ];

      const InteractivePanel = [
        {
            id:1,
            title:"Interactive Panel 65",
            para:" A 65-inch touch-enabled display fostering collaboration and interactive engagement in presentations and educational environments",
        },
        {
            id:2,
            title:"Interactive Panel 75",
            para:"A 75-inch touch-enabled display facilitating dynamic and engaging interactions for presentations, education, and collaborative work. ",
        },
     
        
    ];
      const UPS = [
        {
            id:1,
            title:"Inventor",
            para:"A power backup system ensuring uninterrupted operation for devices during power outages, designed by an innovative creator",
        },
        {
            id:2,
            title:"Online UPS",
            para:"A power backup system offering continuous and stable electricity flow, safeguarding devices from power disruptions or fluctuations.",
        },
        
    ];
      const WIFI = [
        {
            id:1,
            title:"Access Point Controller",
            para:" Centralized network management for optimizing and coordinating multiple access points, ensuring efficient connectivity.",
        },
        {
            id:2,
            title:"Wifi-5",
            para:" The 802.11ac standard offering faster speeds and improved performance in wireless networks compared to earlier Wi-Fi generations",
        },
        {
            id:3,
            title:"Wifi-6",
            para:" The 802.11ax standard providing enhanced speed, capacity, and efficiency in wireless networks, etc..",
        },
        
    ];
      const pos = [
        {
            id:1,
            title:"POS",
            para:"Point of Sale (POS) systems are software and hardware used to complete transactions and manage sales in retail businesses.",
        },
        {
            id:2,
            title:"KIOSK",
            para:"A self-service interactive terminal providing information, services, or transactions in various settings like retail, airports, or informational booths",
        },
        {
            id:3,
            title:"Billing Apps",
            para:"Software applications facilitating streamlined invoicing, payment processing, and financial management for businesses or individuals.",
        },

        
    ];
      const InterCom = [
        {
            id:1,
            title:"EPABX",
            para:"An automated telephony system facilitating internal and external call management within organizations for streamlined communication.",
        },
        {
            id:2,
            title:"IPPBX",
            para:" Leveraging internet protocol for advanced call routing and communication capabilities within organizational networks",
        },
        {
            id:3,
            title:"InterCom",
            para:"Intercom offers a mobile app that allows users to manage conversations, support tickets, and engage with customers via their phones.",
        },
        
    ];
  return (
    <>
   
   {id=="laptop&desktop" &&  
        <>
        <div className='container mt-5 mp-5'>
            <div className='about1'>
            <div className='smallsss1'></div>
        <h4 className='aboutline_head1'>Laptop</h4>
            </div>
            <div className='biod biode'>
                
                    <h2 className='pill' data-aos="fade-right" data-aos-duration="1500">Infygain Technologies: Unlock boundless potential with our precision-engineered laptops, fortified with cutting-edge security and unrivaled performance. Choose innovation. Choose excellence.</h2>
                    <div className='text-muted pol' data-aos="fade-left" data-aos-duration="1500"><p>Discover a redefined standard of laptop performance. Our relentless focus on user satisfaction, paired with leading-edge technology, establishes us as the go-to choice for those seeking unparalleled computing. Elevate your computing experience with us – where excellence meets innovation
                        </p></div>
                </div>
          </div>
         <div className='container mt-5 mp-5'>
          <div className='subcategory1' >
                    {
                        laptop.map((val,index) => (
                            <>
                                <div className='subcategoryhead' key={index}>
                                
                                        <div className="subcategory2 ">
                                        
                                        <img src={`${val.id === 1 ? "/images/gaming lap.jpg" :val.id === 2 ? "/images/Consumerlaptop.webp" :val.id === 3 ? "/images/workstation laptop.webp" : ""}`} />

                                  

                                        </div>

                                        <div className='subcategory3'>
                                            <h4>{val.title}</h4>
                                            <div className='pilot'>
                                                <p>{val.para}</p>
                                                    <Link target='_blank' to={`/servicedetails/Laptop/${val.title.replace(/\s+/g, '')}`}><button className='btn btn-md warrier'>Read More &gt;&gt;</button></Link>
                                            </div>
                                        </div>
                                </div>
                            </>
                            ))
                        }

                        </div>
         </div>
         <div className='container mt-5 mp-5'>
            <div className='about1'>
            <div className='smallsss1'></div>
        <h4 className='aboutline_head1'> Desktop</h4>
            </div>
            <div className='biod biode'>
                
                    <h2 className='pill' data-aos="fade-right" data-aos-duration="1500">Infygain Technologies: Experience unparalleled power and reliability with our meticulously crafted desktops. Elevate your setup with top-tier performance and robust security, setting new standards for excellence</h2>
                    <div className='text-muted pol' data-aos="fade-left" data-aos-duration="1500"><p>Embrace a new benchmark in desktop computing. Our steadfast commitment to user satisfaction, combined with cutting-edge technology, positions us as the ultimate choice for those pursuing unparalleled performance. Elevate your computing prowess with us – where excellence intersects with innovation
                        </p></div>
                </div>
        </div>
         <div className='container mt-5 mp-5'>
          <div className='subcategory1' >
                    {
                        desktop.map((val,index) => (
                            <>
                                <div className='subcategoryhead' key={index}>
                                
                                        <div className="subcategory2 ">
                                        

                                        <img src={`${val.id === 1 ? "/images/brandeddesk.webp":val.id === 2 ? "/images/desktop-computer.jpg" :val.id === 3 ? "/images/workstation-inside.webp":val.id === 4 ? "/images/gaming desktop.jpg" : ""}`} />

             

                                        </div>

                                        <div className='subcategory3'>
                                            <h4>{val.title}</h4>
                                            <div className='pilot'>
                                                <p>{val.para}</p>
                                                    <Link target='_blank' to={`/servicedetails/Desktop/${val.title.replace(/\s+/g, '')}`}><button className='btn btn-md warrier'>Read More &gt;&gt;</button></Link>
                                            </div>
                                        </div>
                                </div>
                            </>
                            ))
                        }

                        </div>
         </div>
         
        </>
      }

    {id=="networking" &&  
        <>
         <SubCateContent />
         <div className='container mt-5 mp-5'>
          <div className='subcategory1' >
                    {
                        Networking.map((val,index) => (
                            <>
                                <div className='subcategoryhead' key={index}>
                                
                                        <div className="subcategory2 ">
                                        
                                        <img src={`${val.id === 1 ? "/images/Hub.webp" :val.id === 2 ? "/images/switch.webp":val.id === 3 ? "/images/Router.webp" :val.id === 4 ? "/images/firewall.webp":val.id === 5 ? "/images/end point security.webp" :val.id === 6 ? "/images/fibre.webp": ""}`} />

                                        </div>

                                        <div className='subcategory3'>
                                            <h4>{val.title}</h4>
                                            <div className='pilot'>
                                                <p>{val.para}</p>
                                                    <Link target='_blank' to={`/servicedetails/Networking/${val.title.replace(/\s+/g, '')}`}><button className='btn btn-md warrier'>Read More &gt;&gt;</button></Link>
                                            </div>
                                        </div>
                                </div>
                            </>
                            ))
                        }

                        </div>
         </div>
        </>
                    }
                
    {id=="cctv" &&  
        <>
         <SubCateContent />
         <div className='container mt-5 mp-5'>
          <div className='subcategory1' >
                    {
                        Cctv.map((val,index) => (
                            <>
                                <div className='subcategoryhead' key={index}>
                                
                                        <div className="subcategory2 ">
                                        
                                        <img src={`${val.id === 1 ? "/images/anolog.webp" :val.id === 2 ? "/images/IP.webp" : val.id === 3 ? "/images/dvr.webp" :val.id === 4 ? "/images/nvr.webp" :val.id === 5 ? "/images/360.webp" :val.id === 6 ? "/images/ptz.webp" :""}`} />

                                        </div>

                                        <div className='subcategory3'>
                                            <h4>{val.title}</h4>
                                            <div className='pilot'>
                                                <p>{val.para}</p>
                                                    <Link target='_blank' to={`/servicedetails/Cctv/${val.title.replace(/\s+/g, '')}`}><button className='btn btn-md warrier'>Read More &gt;&gt;</button></Link>
                                            </div>
                                        </div>
                                </div>
                            </>
                            ))
                        }

                        </div>
         </div>
        </>
                    }
    {id=="Accessories" &&  
        <>
         <SubCateContent />
         <div className='container mt-5 mp-5'>
          <div className='subcategory1' >
                    {
                        Accessories.map((val,index) => (
                            <>
                                <div className='subcategoryhead' key={index}>
                                
                                        <div className="subcategory2 ">
                                        
                                        <img src={`${val.id === 1 ? "/images/ram.webp" :val.id === 2 ? "/images/hdd.webp":val.id === 3 ? "/images/keyboard.webp" :val.id === 4 ? "/images/mouse.webp":val.id === 5 ? "/images/cabinet.webp" :val.id === 6 ? "/images/motherboard.webp":val.id === 7 ? "/images/SMPS.webp":val.id === 8 ? "/images/cable.webp":val.id === 9 ? "/images/connector.webp":""}`} />

                                        </div>

                                        <div className='subcategory3'>
                                            <h4>{val.title}</h4>
                                            <div className='pilot'>
                                                <p>{val.para}</p>
                                                    <Link target='_blank' to={`/servicedetails/Accessories/${val.title.replace(/\s+/g, '')}`}><button className='btn btn-md warrier'>Read More &gt;&gt;</button></Link>
                                            </div>
                                        </div>
                                </div>
                            </>
                            ))
                        }

                        </div>
         </div>
        </>
      }
    {id=="Projectors" &&  
        <>
         <SubCateContent />
         <div className='container mt-5 mp-5'>
          <div className='subcategory1' >
                    {
                        Projectors.map((val,index) => (
                            <>
                                <div className='subcategoryhead' key={index}>
                                
                                        <div className="subcategory2 ">
                                        
                                        <img src={`${val.id === 1 ? "/images/led projector.webp" : val.id === 2 ? "/images/lcd-projector.webp" :val.id === 3 ? "/images/smart-projectors.webp":""}`} />

                                        </div>

                                        <div className='subcategory3'>
                                            <h4>{val.title}</h4>
                                            <div className='pilot'>
                                                <p>{val.para}</p>
                                                    <Link target='_blank' to={`/servicedetails/Projectors/${val.title.replace(/\s+/g, '')}`}><button className='btn btn-md warrier'>Read More &gt;&gt;</button></Link>
                                            </div>
                                        </div>
                                </div>
                            </>
                            ))
                        }

                        </div>
         </div>
        </>
      }
    {id=="TV" &&  
        <>
         <SubCateContent />
         <div className='container mt-5 mp-5'>
          <div className='subcategory1' >
                    {
                        TV.map((val,index) => (
                            <>
                                <div className='subcategoryhead' key={index}>
                                
                                        <div className="subcategory2 ">
                                        
                                        <img src={`${val.id === 1 ? "/images/androidtv.webp" : val.id === 2 ? "/images/smart-tv.webp" :""}`} />

                                        </div>

                                        <div className='subcategory3'>
                                            <h4>{val.title}</h4>
                                            <div className='pilot'>
                                                <p>{val.para}</p>
                                                    <Link target='_blank' to={`/servicedetails/TV/${val.title.replace(/\s+/g, '')}`}><button className='btn btn-md warrier'>Read More &gt;&gt;</button></Link>
                                            </div>
                                        </div>
                                </div>
                            </>
                            ))
                        }

                        </div>
         </div>
        </>
      }

    {id=="Printer&Scanner" &&  
        <>
        <div className='container mt-5 mp-5'>
            <div className='about1'>
            <div className='smallsss1'></div>
        <h4 className='aboutline_head1'>Printer</h4>
            </div>
            <div className='biod biode'>
                
                    <h2 className='pill' data-aos="fade-right" data-aos-duration="1500">Infygain Technologies: Print with precision and reliability using our advanced printers. Elevate your efficiency with sharp, high-quality outputs, setting new standards for printing excellence</h2>
                    <div className='text-muted pol' data-aos="fade-left" data-aos-duration="1500"><p>At Infygain Technologies, redefine your printing standards. Our commitment to customer satisfaction, coupled with cutting-edge technology, makes us the preferred choice for those seeking high-quality printing solutions. Elevate your printing experience with us – where excellence converges with innovation.
                        </p></div>
                </div>
          </div>
         <div className='container mt-5 mp-5'>
          <div className='subcategory1' >
                    {
                        printer.map((val,index) => (
                            <>
                                <div className='subcategoryhead' key={index}>
                                
                                        <div className="subcategory2 ">
                                        
                                        <img src={`${val.id === 1 ? "/images/laser.webp" :val.id === 2 ? "/images/thermal.webp":val.id === 3 ? "/images/color-printer.webp" :val.id === 4 ? "/images/multi.webp":val.id === 5 ? "/images/dot-matrix.webp" :""}`} />

                                        </div>

                                        <div className='subcategory3'>
                                            <h4>{val.title}</h4>
                                            <div className='pilot'>
                                                <p>{val.para}</p>
                                                    <Link target='_blank' to={`/servicedetails/Printer/${val.title.replace(/\s+/g, '')}`}><button className='btn btn-md warrier'>Read More &gt;&gt;</button></Link>
                                            </div>
                                        </div>
                                </div>
                            </>
                            ))
                        }

                        </div>
         </div>
         <div className='container mt-5 mp-5'>
            <div className='about1'>
            <div className='smallsss1'></div>
        <h4 className='aboutline_head1'> Scanner</h4>
            </div>
            <div className='biod biode'>
                
                    <h2 className='pill' data-aos="fade-right" data-aos-duration="1500">Infygain Technologies: Capture perfection with our high-performance scanners. Elevate your scanning experience with precision and speed, setting new benchmarks for scanning excellence.</h2>
                    <div className='text-muted pol' data-aos="fade-left" data-aos-duration="1500"><p>At Infygain Technologies, elevate your scanning capabilities. Our dedication to customer satisfaction, fused with state-of-the-art technology, positions us as the top choice for those seeking superior scanning solutions. Streamline your workflow with us – where excellence and innovation seamlessly merge.
                        </p></div>
                </div>
        </div>
         <div className='container mt-5 mp-5'>
          <div className='subcategory1' >
                    {
                        scanner.map((val,index) => (
                            <>
                                <div className='subcategoryhead' key={index}>
                                
                                        <div className="subcategory2 ">
                                        
                                        <img src={`${val.id === 1 ? "/images/flatbad scanner.webp" : val.id === 2 ? "/images/verticalscanner.webp" : ""}`} />

                                        </div>

                                        <div className='subcategory3'>
                                            <h4>{val.title}</h4>
                                            <div className='pilot'>
                                                <p>{val.para}</p>
                                                    <Link target='_blank' to={`/servicedetails/Scanner/${val.title.replace(/\s+/g, '')}`}><button className='btn btn-md warrier'>Read More &gt;&gt;</button></Link>
                                            </div>
                                        </div>
                                </div>
                            </>
                            ))
                        }

                        </div>
         </div>
         
        </>
      }

      {id=="InteractivePanel" &&  
              <>
              <SubCateContent />
              <div className='container mt-5 mp-5'>
                <div className='subcategory1' >
                          {
                              InteractivePanel.map((val,index) => (
                                  <>
                                      <div className='subcategoryhead' key={index}>
                                      
                                              <div className="subcategory2 ">
                                              
                                              <img src={`${val.id === 1 ? "/images/interactivepanel65.webp" :val.id === 2 ? "/images/interactivepanel75.webp" : ""}`} />

                                              </div>

                                              <div className='subcategory3'>
                                                  <h4>{val.title}</h4>
                                                  <div className='pilot'>
                                                      <p>{val.para}</p>
                                                          <Link target='_blank' to={`/servicedetails/InteractivePanel/${val.title.replace(/\s+/g, '')}`}><button className='btn btn-md warrier'>Read More &gt;&gt;</button></Link>
                                                  </div>
                                              </div>
                                      </div>
                                  </>
                                  ))
                              }

                              </div>
              </div>
              </>
            } 
      
      {id=="UPS" &&  
              <>
              <SubCateContent />
              <div className='container mt-5 mp-5'>
                <div className='subcategory1' >
                          {
                              UPS.map((val,index) => (
                                  <>
                                      <div className='subcategoryhead' key={index}>
                                      
                                              <div className="subcategory2 ">
                                              
                                              <img src={`${val.id === 1 ? "/images/inventor.webp" :val.id === 2 ? "/images/onlineups.webp" : ""}`} />

                                              </div>

                                              <div className='subcategory3'>
                                                  <h4>{val.title}</h4>
                                                  <div className='pilot'>
                                                      <p>{val.para}</p>
                                                          <Link target='_blank' to={`/servicedetails/UPS/${val.title.replace(/\s+/g, '')}`}><button className='btn btn-md warrier'>Read More &gt;&gt;</button></Link>
                                                  </div>
                                              </div>
                                      </div>
                                  </>
                                  ))
                              }

                              </div>
              </div>
              </>
            } 
      {id=="WIFI" &&  
              <>
              <SubCateContent />
              <div className='container mt-5 mp-5'>
                <div className='subcategory1' >
                          {
                              WIFI.map((val,index) => (
                                  <>
                                      <div className='subcategoryhead' key={index}>
                                      
                                              <div className="subcategory2 ">
                                              
                                              <img src={`${val.id === 1 ? "/images/acespoint.webp" : val.id === 2 ? "/images/5gwifi.webp": val.id === 3 ? "/images/6gwifi.webp" : ""}`} />

                                              </div>

                                              <div className='subcategory3'>
                                                  <h4>{val.title}</h4>
                                                  <div className='pilot'>
                                                      <p>{val.para}</p>
                                                          <Link target='_blank' to={`/servicedetails/WIFI/${val.title.replace(/\s+/g, '')}`}><button className='btn btn-md warrier'>Read More &gt;&gt;</button></Link>
                                                  </div>
                                              </div>
                                      </div>
                                  </>
                                  ))
                              }

                              </div>
              </div>
              </>
            } 
      {id=="Pos" &&  
              <>
              <SubCateContent />
              <div className='container mt-5 mp-5'>
                <div className='subcategory1' >
                          {
                              pos.map((val,index) => (
                                  <>
                                      <div className='subcategoryhead' key={index}>
                                      
                                              <div className="subcategory2 ">
                                              
                                              <img src={`${val.id === 1 ? "/images/posoverall.webp":val.id === 2 ? "/images/kiosk.webp":val.id === 3 ? "/images/billingapp-web.webp" : ""}`} />

                                              </div>

                                              <div className='subcategory3'>
                                                  <h4>{val.title}</h4>
                                                  <div className='pilot'>
                                                      <p>{val.para}</p>
                                                          <Link target='_blank' to={`/servicedetails/Pos/${val.title.replace(/\s+/g, '')}`}><button className='btn btn-md warrier'>Read More &gt;&gt;</button></Link>
                                                  </div>
                                              </div>
                                      </div>
                                  </>
                                  ))
                              }

                              </div>
              </div>
              </>
            } 
      {id=="InterCom" &&  
              <>
              <SubCateContent />
              <div className='container mt-5 mp-5'>
                <div className='subcategory1' >
                          {
                              InterCom.map((val,index) => (
                                  <>
                                      <div className='subcategoryhead' key={index}>
                                      
                                              <div className="subcategory2 ">
                                              
                                              <img src={`${val.id === 1 ? "/images/epabx.webp" :val.id === 2 ? "/images/ipabx.webp":val.id === 3 ? "/images/intercom.webp":""}`} />

                                              </div>

                                              <div className='subcategory3'>
                                                  <h4>{val.title}</h4>
                                                  <div className='pilot'>
                                                      <p>{val.para}</p>
                                                          <Link target='_blank' to={`/servicedetails/InterCom/${val.title.replace(/\s+/g, '')}`}><button className='btn btn-md warrier'>Read More &gt;&gt;</button></Link>
                                                  </div>
                                              </div>
                                      </div>
                                  </>
                                  ))
                              }

                              </div>
              </div>
              </>
            } 
        </>
  )
}

export default Category