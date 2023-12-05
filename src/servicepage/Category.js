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
              para:"These suits are made from different materials based on the specific risks and requirements of the tasks.",
          },
          {
              id:2,
              path:"Consumerlaptops",
              title:"Consumer laptops",
              para:"Foot protection is an integral part of a comprehensive personal protective equipment (PPE) program. ",
          },
          {
              id:3,
              path:"WorkStation",
              title:"Work Station",
              para:"Hand protection is an integral component of a comprehensive personal protective equipment (PPE) program. ",
          },
      ];
      const desktop = [
          {
              id:1,
              path:"BrandedDesktop",
              title:"Branded Desktop",
              para:"These suits are made from different materials based on the specific risks and requirements of the tasks.",
          },
          {
              id:2,
              path:"AssembledDesktop",
              title:"Assembled Desktop",
              para:"Foot protection is an integral part of a comprehensive personal protective equipment (PPE) program. ",
          },
          {
              id:3,
              path:"WorkStationDesktop",
              title:"Work Station",
              para:"Hand protection is an integral component of a comprehensive personal protective equipment (PPE) program. ",
          },
          {
              id:4,
              path:"GamingDesktop",
              title:"Gaming Desktop",
              para:"Hand protection is an integral component of a comprehensive personal protective equipment (PPE) program. ",
          },
      ];
      const printer = [
          {
              id:1,
              path:"BrandedDesktop",
              title:"Laser",
              para:"These suits are made from different materials based on the specific risks and requirements of the tasks.",
          },
          {
              id:2,
              path:"AssembledDesktop",
              title:"Thermal",
              para:"Foot protection is an integral part of a comprehensive personal protective equipment (PPE) program. ",
          },
          {
              id:3,
              path:"WorkStationDesktop",
              title:"Color",
              para:"Hand protection is an integral component of a comprehensive personal protective equipment (PPE) program. ",
          },
          {
              id:4,
              path:"GamingDesktop",
              title:"Multi Function",
              para:"Hand protection is an integral component of a comprehensive personal protective equipment (PPE) program. ",
          },
          {
              id:4,
              path:"GamingDesktop",
              title:"Dot Matrix",
              para:"Hand protection is an integral component of a comprehensive personal protective equipment (PPE) program. ",
          },
      ];
      const scanner = [
          {
              id:1,
              title:"Flatbed",
              para:"These suits are made from different materials based on the specific risks and requirements of the tasks.",
          },
          {
              id:2,
              title:"Vertical",
              para:"Foot protection is an integral part of a comprehensive personal protective equipment (PPE) program. ",
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
              para:"These suits are made from different materials based on the specific risks and requirements of the tasks.",
          },
          {
              id:2,
              title:"HDD,SSD",
              para:"Foot protection is an integral part of a comprehensive personal protective equipment (PPE) program. ",
          },
          {
              id:3,
              title:"KeyBoard",
              para:"Hand protection is an integral component of a comprehensive personal protective equipment (PPE) program. ",
          },
          {
              id:4,
              title:"Mouse,Mointer",
              para:"These suits are made from different materials based on the specific risks and requirements of the tasks.",
          },
          {
              id:5,
              title:"Cabinet",
              para:"Foot protection is an integral part of a comprehensive personal protective equipment (PPE) program. ",
          },
          {
              id:6,
              title:"Mother Board",
              para:"Hand protection is an integral component of a comprehensive personal protective equipment (PPE) program. ",
          },
          {
              id:7,
              title:"SMBS",
              para:"These suits are made from different materials based on the specific risks and requirements of the tasks.",
          },
          {
              id:8,
              title:"Cables,Charger",
              para:"Foot protection is an integral part of a comprehensive personal protective equipment (PPE) program. ",
          },
          {
              id:9,
              title:"Connector,Convertor",
              para:"Hand protection is an integral component of a comprehensive personal protective equipment (PPE) program. ",
          },
      ];
        const Projectors = [
          {
              id:1,
              title:"LCD",
              para:"These suits are made from different materials based on the specific risks and requirements of the tasks.",
          },
          {
              id:2,
              title:"LED",
              para:"Foot protection is an integral part of a comprehensive personal protective equipment (PPE) program. ",
          },
          {
              id:3,
              title:"Smart Projector",
              para:"Hand protection is an integral component of a comprehensive personal protective equipment (PPE) program. ",
          },
          
      ];
        const TV = [
          {
              id:1,
              title:"Andriod TV",
              para:"These suits are made from different materials based on the specific risks and requirements of the tasks.",
          },
          {
              id:2,
              title:"Smart TV",
              para:"Foot protection is an integral part of a comprehensive personal protective equipment (PPE) program. ",
          },        
      ];

      const InteractivePanel = [
        {
            id:1,
            title:"Interactive Panel 65",
            para:"These suits are made from different materials based on the specific risks and requirements of the tasks.",
        },
        {
            id:2,
            title:"Interactive Panel 75",
            para:"Foot protection is an integral part of a comprehensive personal protective equipment (PPE) program. ",
        },
     
        
    ];
      const UPS = [
        {
            id:1,
            title:"Inventor",
            para:"These suits are made from different materials based on the specific risks and requirements of the tasks.",
        },
        {
            id:2,
            title:"Online UPS",
            para:"Foot protection is an integral part of a comprehensive personal protective equipment (PPE) program. ",
        },
        
    ];
      const WIFI = [
        {
            id:1,
            title:"Access Point Controller",
            para:"These suits are made from different materials based on the specific risks and requirements of the tasks.",
        },
        {
            id:2,
            title:"Wifi-5",
            para:"Foot protection is an integral part of a comprehensive personal protective equipment (PPE) program. ",
        },
        {
            id:3,
            title:"Wifi-6",
            para:"Hand protection is an integral component of a comprehensive personal protective equipment (PPE) program. ",
        },
        
    ];
      const pos = [
        {
            id:1,
            title:"LCD",
            para:"These suits are made from different materials based on the specific risks and requirements of the tasks.",
        },
        {
            id:2,
            title:"LED",
            para:"Foot protection is an integral part of a comprehensive personal protective equipment (PPE) program. ",
        },
        {
            id:3,
            title:"Smart Projector",
            para:"Hand protection is an integral component of a comprehensive personal protective equipment (PPE) program. ",
        },
        
    ];
      const InterCom = [
        {
            id:1,
            title:"EPABX",
            para:"These suits are made from different materials based on the specific risks and requirements of the tasks.",
        },
        {
            id:2,
            title:"IPPBX",
            para:"Foot protection is an integral part of a comprehensive personal protective equipment (PPE) program. ",
        },
        
    ];
  return (
    <>
   
   {id=="laptop&desktop" &&  
        <>
        <div className='container mt-5 mp-5'>
            <div className='about1'>
            <div className='smallsss1'></div>
        <h4 className='aboutline_head1'>Printer</h4>
            </div>
            <div className='biod biode'>
                
                    <h2 className='pill' data-aos="fade-right" data-aos-duration="1500">Rust-X application engineers can recommend and implement the best corrosion management system from our
                    large selection of stock products or create a cost-effective custom solution.</h2>
                    <div className='text-muted pol' data-aos="fade-left" data-aos-duration="1500"><p>Rust-X is one of the leading VCI Film
                        manufacturer & supplier in India and worldwide. We are expert in VCI technology.
                            Integrated combinations of VCI Packaging protection systems, such as VCI corrosion protection
                        with acid-gas scavenger and anti-static (ESD) are available to provide the best result.
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
                                        
                                        <img src={`${val.id === 1 ? "/images/laptop.webp" : ""}`} />

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
        <h4 className='aboutline_head1'> Scanner</h4>
            </div>
            <div className='biod biode'>
                
                    <h2 className='pill' data-aos="fade-right" data-aos-duration="1500">Rust-X application engineers can recommend and implement the best corrosion management system from our
                    large selection of stock products or create a cost-effective custom solution.</h2>
                    <div className='text-muted pol' data-aos="fade-left" data-aos-duration="1500"><p>Rust-X is one of the leading VCI Film
                        manufacturer & supplier in India and worldwide. We are expert in VCI technology.
                            Integrated combinations of VCI Packaging protection systems, such as VCI corrosion protection
                        with acid-gas scavenger and anti-static (ESD) are available to provide the best result.
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
                                        
                                        <img src={`${val.id === 1 ? "/images/laptop.webp" : ""}`} />

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
                                        
                                        <img src={`${val.id === 2 ? "/images/laptop.webp" : ""}`} />

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
                                        
                                        <img src={`${val.id === 1 ? "/images/laptop.webp" : ""}`} />

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
                                        
                                        <img src={`${val.id === 1 ? "/images/laptop.webp" : ""}`} />

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
                                        
                                        <img src={`${val.id === 1 ? "/images/laptop.webp" : ""}`} />

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
                
                    <h2 className='pill' data-aos="fade-right" data-aos-duration="1500">Rust-X application engineers can recommend and implement the best corrosion management system from our
                    large selection of stock products or create a cost-effective custom solution.</h2>
                    <div className='text-muted pol' data-aos="fade-left" data-aos-duration="1500"><p>Rust-X is one of the leading VCI Film
                        manufacturer & supplier in India and worldwide. We are expert in VCI technology.
                            Integrated combinations of VCI Packaging protection systems, such as VCI corrosion protection
                        with acid-gas scavenger and anti-static (ESD) are available to provide the best result.
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
                                        
                                        <img src={`${val.id === 1 ? "/images/laptop.webp" : ""}`} />

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
                
                    <h2 className='pill' data-aos="fade-right" data-aos-duration="1500">Rust-X application engineers can recommend and implement the best corrosion management system from our
                    large selection of stock products or create a cost-effective custom solution.</h2>
                    <div className='text-muted pol' data-aos="fade-left" data-aos-duration="1500"><p>Rust-X is one of the leading VCI Film
                        manufacturer & supplier in India and worldwide. We are expert in VCI technology.
                            Integrated combinations of VCI Packaging protection systems, such as VCI corrosion protection
                        with acid-gas scavenger and anti-static (ESD) are available to provide the best result.
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
                                        
                                        <img src={`${val.id === 1 ? "/images/laptop.webp" : ""}`} />

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
                                              
                                              <img src={`${val.id === 1 ? "/images/laptop.webp" : ""}`} />

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
                                              
                                              <img src={`${val.id === 1 ? "/images/laptop.webp" : ""}`} />

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
                                              
                                              <img src={`${val.id === 1 ? "/images/laptop.webp" : ""}`} />

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
                              Projectors.map((val,index) => (
                                  <>
                                      <div className='subcategoryhead' key={index}>
                                      
                                              <div className="subcategory2 ">
                                              
                                              <img src={`${val.id === 1 ? "/images/laptop.webp" : ""}`} />

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
                                              
                                              <img src={`${val.id === 1 ? "/images/laptop.webp" : ""}`} />

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