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
        
        const Networking = [
          {
              id:1,
              path:"GamingLaptop",
              title:"HUB",
              para:"These suits are made from different materials based on the specific risks and requirements of the tasks.",
          },
          {
              id:2,
              path:"Consumerlaptops",
              title:"Switch",
              para:"Foot protection is an integral part of a comprehensive personal protective equipment (PPE) program. ",
          },
          {
              id:3,
              path:"WorkStation",
              title:"Router",
              para:"Hand protection is an integral component of a comprehensive personal protective equipment (PPE) program. ",
          },
          {
              id:4,
              path:"GamingLaptop",
              title:"Firewall",
              para:"These suits are made from different materials based on the specific risks and requirements of the tasks.",
          },
          {
              id:5,
              path:"Consumerlaptops",
              title:"End Point Security",
              para:"Foot protection is an integral part of a comprehensive personal protective equipment (PPE) program. ",
          },
          {
              id:6,
              path:"WorkStation",
              title:"Fiber",
              para:"Hand protection is an integral component of a comprehensive personal protective equipment (PPE) program. ",
          },
      ];
  return (
    <>
   
     {id == "laptop&desktop" && (
        <>
          <div className="container prdtname">
            <div className="about1">
              <div className="smallsss1"></div>
              <h4 className="aboutline_head1">Laptop / Desktop Sales and Service</h4>
            </div>

            <div className="colspin">
              <div className="biod">
                <h3 className="pill"  data-aos="fade-right" data-aos-duration="1500">
                  Dr Bio is India’s first approved bio polymer manufacturer,
                  focusing on compostable polymers, packaging, cutlery, and
                  straws, contributing to sustainable and environmentally
                  friendly solutions.
                </h3>
                <div className="text-muted pol"  data-aos="fade-left" data-aos-duration="1500">
                  <p>
                    Dr. Bio Polymers are the new eco-friendly resins that are
                    made up of Compostable polymers & starch blends. The Dr.BIO
                    Resin is a film grade resin and can be processed on standard
                    blown film lines or blow moulding lines. The manufactured
                    products using this resin are degradable in normal land fill
                    environment and get disintegrated within 3-6 months after
                    being disposed off in a land-fill.
                  </p>
                </div>
              </div>
              <div className="ghj">
                <div className="biots">
                  <img src="/images/laptopabout.webp" className="iml image-fluid" />
                  <div className="plo"></div>
                  <div className="testplo">
                    <h3 className="biops">Laptop</h3>
                    <Link
                      to="/categories/laptop"
                      target="_blank"
                    >
                      <button className="butts btn1">+</button>
                    </Link>
                  </div>
                </div>
                <div className="biots">
                  <img src="/images/desktop.jpg" className="iml image-fluid" />
                  <div className="plo"></div>
                  <div className="testplo">
                    <h3 className="biops">Desktop </h3>
                    <Link to="/categories/desktop" target="_blank">
                      <button className="butts btn1">+</button>
                    </Link>
                  </div>
                </div>

               
              </div>
            </div>
          </div>
        </>
      )}

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
                                        
                                        <img src={`${val.id === 1 ? "/images/laptop.webp" : ""}`} />

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
                        Networking.map((val,index) => (
                            <>
                                <div className='subcategoryhead' key={index}>
                                
                                        <div className="subcategory2 ">
                                        
                                        <img src={`${val.id === 1 ? "/images/laptop.webp" : ""}`} />

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
        </>
  )
}

export default Category