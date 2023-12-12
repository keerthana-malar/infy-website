import React, { useEffect } from 'react'
import '../css/Commonbtn.css';
import { IoIosArrowForward } from 'react-icons/io';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';

const CommonBtns = ({pid,id,cat}) => {
    const [openCategory, setOpenCategory] = useState(null);
    const [openCategory1, setOpenCategory1] = useState(null);

    const categories = [
        {
          id: 1,
          name: 'Complete Network Solutions',
          brands: ['HUB', 'Switch', 'Router', 'Firewall',
           'End Point Security ', 'Fiber',],
          paths :['1','2','3','4','5','6','7','8','9']
        },
        {
          id: 2,
          name: 'CCTV',
          brands: ['Analog', 'IP', 'DVR', 'NVR', '360','PTZ'],
          paths :['1','2','3','4','5']
        },
        {
          id: 3,
          name: 'Computer Accessories',
          brands: ['RAM', 'HDD,SSD', 'KeyBoard', 'Mouse,Moniter','Cabinet','Mother Board','SMPS','Cables,Charger','Connector,Convertor'],
          paths :['1','2','3','4','5','6','7','8']
        },
        {
          id: 4,
          name: 'Printer & Scanner',
          brands: ['Printer','Scanner'],
          subPaths:{
            paths:["Laser",'Thermal',"Color",'Multi Function',"Dot Matrix"],
            paths1:["Flatbed",'Vertical']
        }
        },
        {
          id: 5,
          name: 'Laptop/Desktop Sales and Service',
          brands: ['Laptop','Desktop'],
          subPaths:{
            paths:["Gaming Laptop",'Consumer laptops',"Work Station"],
            paths1:["Branded Desktop",'Assembled Desktop',"Work Station Desktop","Gaming Desktop"]
        }
        },
        {
          id: 6,
          name: 'AV Solutions',
          brands: ['LCD', 'LED', 'Smart Projector',],
          paths :['1','2','3','4',]
        },
        {
          id: 7,
          name: 'Interactive Panel',
          brands: ['Interactive Panel 65', 'Interactive Panel 75',],
          paths :['foodPacking','2','3','4','5','6','7','8']
        },
        {
          id: 8,
          name: 'TV',
          brands: ['Andriod TV', 'Smart TV',],
          paths :['1','2','3','4','5','6',]
        },
        {
          id: 9,
          name: 'UPS',
          brands: ['Inventor', 'Online UPS',],
          paths :['1','2','3','4','5','6',]
        },
        {
          id: 10,
          name: 'WiFi',
          brands: ['Access Point Controller', 'Wifi-5','Wifi-6'],
          paths :['1','2','3','4','5','6',]
        },
        {
          id: 11,
          name: 'POS',
          brands: ['POS','KIOSK', 'Billing Apps',],
          paths :['1','2','3','4','5','6',]
        },
        {
          id: 12,
          name: 'InterCom',
          brands: ['EPABX', 'IPPBX',"InterCom"],
          paths :['1','2','3','4','5','6',]
        },
    ]

    const toggleCategory = (categoryId) => {
        setOpenCategory(openCategory === categoryId ? null : categoryId);
      };
    const toggleCategory1 = (categoryId) => {
        setOpenCategory1(openCategory1 === categoryId ? null : categoryId);
      };

      useEffect(() => {
        if(cat === "Networking"){
            setOpenCategory(1)
        }
        if(cat === "Cctv"){
            setOpenCategory(2)
        }
        if(cat === "Accessories"){
            setOpenCategory(3)
        }
        if(cat === "Projectors"){
            setOpenCategory(6)
        }
        if(cat === "TV"){
            setOpenCategory(8)
        }
        if(cat === "InteractivePanel"){
            setOpenCategory(7)
        }
        if(cat ==="Printer" || cat ==="Scanner"){
            setOpenCategory(4) 
        }
        if(id==="Laser" || id==="Thermal" || id==="Color" || id==="MultiFunction" || id === "DotMatrix"){
            setOpenCategory1("Printer")
        }
        if(id==="Flatbed" || id==="Vertical" ){
            setOpenCategory1("Scanner")
        }
        if(cat ==="Laptop" || cat ==="Desktop"){
            setOpenCategory(5) 
        }
        if(id==="GamingLaptop" || id==="Consumerlaptops" || id==="WorkStation"){
            setOpenCategory1("Laptop")
        }
        if(id==="BrandedDesktop" || id==="AssembledDesktop" || id==="WorkStationDesktop"  || id==="GamingDesktop"){
            setOpenCategory1("Desktop")
        }
        if(cat === "UPS"){
            setOpenCategory(9)
        }
        if(cat === "WIFI"){
            setOpenCategory(10)
        }
        if(cat === "InterCom"){
            setOpenCategory(12)
        }
        if(cat === "Pos"){
            setOpenCategory(11)
        }
      
    },[])

  return (
   <>
        <div className='rightboxheadcol'>
            {categories.map((category,index) => (
                <div>
                    <button onClick={() => toggleCategory(category.id)} className={`btn-categ ${ cat==="Laptop" && index===4 ? 'categ-active': cat==="Desktop" && index===4 ? 'categ-active'
                                                                                    :cat==="Networking" && index===0 ? 'categ-active':cat==="Cctv" && index===1 ? 'categ-active'
                                                                                    :cat==="Accessories" && index===2 ? 'categ-active':cat==="Projectors" && index===5 ? 'categ-active'
                                                                                    :cat==="TV" && index===7 ? 'categ-active' :cat==="UPS" && index===8 ? 'categ-active'
                                                                                    :cat==="WIFI" && index===9 ? 'categ-active' :cat==="InterCom" && index===11 ? 'categ-active': 
                                                                                    cat==="Pos" && index===10 ? 'categ-active':  cat==="InteractivePanel" && index===6 ? 'categ-active':
                                                                                    cat==="Printer" && index===3 ? 'categ-active': cat==="Scanner" && index===3 ? 'categ-active':''}`} >
                            <span>
                                {category.name}
                            </span>   
                            <span>
                                <IoIosArrowForward />
                            </span> 
                    </button>
                

                    {openCategory === category.id && (
                        <span className='btn-categ1'>
                        <ul>
                            {
                                index === 0 &&
                                <>
                                    {category.brands.map((brand, index) => (
                                    <Link 
                                    className={ `${id === brand.replace(/\s+/g, '') ? "prdt-active" : ""}`} to={`/servicedetails/Networking/${brand.replace(/\s+/g, '')}`} key={index}><span><li key={index}>{brand}</li>  <IoIosArrowForward /></span></Link>
                                    ))}
                                </>
                            }
                            {
                                index === 1&&
                                <>
                                    {category.brands.map((brand, index) => (
                                    <Link 
                                    className={ `${id === brand.replace(/\s+/g, '') ? "prdt-active" : ""}`} to={`/servicedetails/Cctv/${brand.replace(/\s+/g, '')}`} key={index}><span><li key={index}>{brand}</li>  <IoIosArrowForward /></span></Link>
                                    ))}
                                </>
                            }
                            {
                                index === 2&&
                                <>
                                    {category.brands.map((brand, index) => (
                                    <Link 
                                    className={ `${id === brand.replace(/\s+/g, '') ? "prdt-active" : ""}`}
                                    to={`/servicedetails/Accessories/${brand.replace(/\s+/g, '')}`} key={index}><span><li key={index}>{brand}</li>  <IoIosArrowForward /></span></Link>
                                    ))}
                                </>
                            }
                           {
                                index === 3 && (
                                <>
                                    {category.brands.map((brand, brandIndex) => (
                                        <div key={brandIndex}>
                                            <span className={`${cat === brand ? 'prdt-active' : ''}`} onClick={ () => toggleCategory1(brand) }>
                                                <Link className={`${cat === brand ? 'prdt-active' : ''}`} >
                                                    {brand}
                                                </Link>
                                                <IoIosArrowForward />
                                            </span>
                                            { openCategory1 === brand && (
                                                <span className='nested-dropdown'>
                                                    <ul>
                                                        {/* Render the specific paths related to the selected brand */}
                                                        {
                                                        brand === 'Printer' &&
                                                         (
                                                            category.subPaths.paths.map((subPath, subIndex) => (
                                                                <Link
                                                                    to={`/servicedetails/Printer/${subPath.replace(/\s+/g, '')}`}
                                                                    className={`${id === subPath.replace(/\s+/g, '') ? 'prdt-active' : ''}`}
                                                                    key={subIndex}
                                                                >
                                                                    <li>{subPath}</li>
                                                                </Link>
                                                            ))
                                                        )}
                                                        {
                                                        brand === 'Scanner' &&
                                                         (
                                                            category.subPaths.paths1.map((subPath, subIndex) => (
                                                                <Link
                                                                    to={`/servicedetails/Scanner/${subPath.replace(/\s+/g, '')}`}
                                                                    className={`${id === subPath.replace(/\s+/g, '') ? 'prdt-active' : ''}`}
                                                                    key={subIndex}
                                                                >
                                                                    <li>{subPath}</li>
                                                                </Link>
                                                            ))
                                                        )}
                                                    </ul>
                                                </span>
                                            )}
                                        </div>
                                    ))}
                                </>
                                    )
                                }
                               {
                                index === 4 && (
                                <>
                                    {category.brands.map((brand, brandIndex) => (
                                        <div key={brandIndex}>
                                            <span className={`${cat === brand ? 'prdt-active' : ''}`} onClick={ () => toggleCategory1(brand) }>
                                                <Link className={`${cat === brand ? 'prdt-active' : ''}`} >
                                                    {brand}
                                                </Link>
                                                <IoIosArrowForward />
                                            </span>
                                            { openCategory1 === brand && (
                                                <span className='nested-dropdown'>
                                                    <ul>
                                                        {/* Render the specific paths related to the selected brand */}
                                                        {
                                                        brand === 'Laptop' &&
                                                         (
                                                            category.subPaths.paths.map((subPath, subIndex) => (
                                                                <Link
                                                                    to={`/servicedetails/Laptop/${subPath.replace(/\s+/g, '')}`}
                                                                    className={`${id === subPath.replace(/\s+/g, '') ? 'prdt-active' : ''}`}
                                                                    key={subIndex}
                                                                >
                                                                    <li>{subPath}</li>
                                                                </Link>
                                                            ))
                                                        )}
                                                        {
                                                        brand === 'Desktop' &&
                                                         (
                                                            category.subPaths.paths1.map((subPath, subIndex) => (
                                                                <Link
                                                                    to={`/servicedetails/Desktop/${subPath.replace(/\s+/g, '')}`}
                                                                    className={`${id === subPath.replace(/\s+/g, '') ? 'prdt-active' : ''}`}
                                                                    key={subIndex}
                                                                >
                                                                    <li>{subPath}</li>
                                                                </Link>
                                                            ))
                                                        )}
                                                    </ul>
                                                </span>
                                            )}
                                        </div>
                                    ))}
                                </>
                                    )
                                }

                            {
                                index === 5&&
                                <>
                                    {category.brands.map((brand, index) => (
                                    <Link to={`/servicedetails/Projectors/${brand.replace(/\s+/g, '')}`} 
                                    className={`${id === brand.replace(/\s+/g, '') ? "prdt-active" : ""}`} 
                                    key={index}><span><li key={index}>{brand}</li>  <IoIosArrowForward /></span></Link>
                                    ))}
                                </>
                            }
                            {
                                index === 6&&
                                <>
                                    {category.brands.map((brand, index) => (
                                    <Link 
                                    className={ `${id === brand.replace(/\s+/g, '') ? "prdt-active" : ""}`} 
                                    to={`/servicedetails/InteractivePanel/${brand.replace(/\s+/g, '')}`}  key={index}><span><li key={index}>{brand}</li>  <IoIosArrowForward /></span></Link>
                                    ))}
                                </>
                            }
                            {
                                index === 7&&
                                <>
                                    {category.brands.map((brand, index) => (
                                    <Link to={`/servicedetails/TV/${brand.replace(/\s+/g, '')}`} 
                                    className={ `${id === brand.replace(/\s+/g, '') ? "prdt-active" : ""}`} 
                                    key={index}><span><li key={index}>{brand}</li>  <IoIosArrowForward /></span></Link>
                                    ))}
                                </>
                            }
                            {
                                index === 8&&
                                <>
                                    {category.brands.map((brand, index) => (
                                    <Link to={`/servicedetails/UPS/${brand.replace(/\s+/g, '')}`} 
                                    className={ `${id === brand.replace(/\s+/g, '') ? "prdt-active" : ""}`}
                                    key={index}><span><li key={index}>{brand}</li>  <IoIosArrowForward /></span></Link>
                                    ))}
                                </>
                            }
                            {
                                index === 9&&
                                <>
                                    {category.brands.map((brand, index) => (
                                    <Link to={`/servicedetails/WIFI/${brand.replace(/\s+/g, '')}`}
                                    className={ `${id === brand.replace(/\s+/g, '') ? "prdt-active" : ""}`} 
                                    key={index}><span><li key={index}>{brand}</li>  <IoIosArrowForward /></span></Link>
                                    ))}
                                </>
                            }
                            {
                                index === 10&&
                                <>
                                    {category.brands.map((brand, index) => (
                                    <Link to={`/servicedetails/Pos/${brand.replace(/\s+/g, '')}`} 
                                    className={`${id === brand.replace(/\s+/g, '') ? "prdt-active" : ""}`} 
                                    key={index}><span><li key={index}>{brand}</li>  <IoIosArrowForward /></span></Link>
                                    ))}
                                </>
                            }
                            {
                                index === 11&&
                                <>
                                    {category.brands.map((brand, index) => (
                                    <Link to={`/servicedetails/InterCom/${brand.replace(/\s+/g, '')}`}
                                    className={ `${id === brand.replace(/\s+/g, '') ? "prdt-active" : ""}`} 
                                    key={index}><span><li key={index}>{brand}</li>  <IoIosArrowForward /></span></Link>
                                    ))}
                                </>
                            }
                        </ul>
                        </span>
                    )}
                    
                </div>
            ))}
        </div>
   </>
  )
}

export default CommonBtns