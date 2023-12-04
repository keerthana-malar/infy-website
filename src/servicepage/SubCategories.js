import React from 'react'
import { Link, useParams } from 'react-router-dom'
import '../css/SubCatgories.css'

const SubCategories = () => {
    const {id} = useParams()

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

  return (
    <div className='container mt-5 mp-5'>

        {/* laptop&desktop */}
        {id=="laptop" &&  
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
                                                <Link target='_blank' to={`/servicedetails/Laptop/${val.path}`}><button className='btn btn-md warrier'>Read More &gt;&gt;</button></Link>
                                        </div>
                                    </div>
                            </div>
                        </>
                        ))
                    }

                    </div>
                }
        {id=="desktop" &&  
                    <div className='subcategory1'>
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
                                                <Link target='_blank' to={`/servicedetails/Desktop/${val.path}`} ><button className='btn btn-md warrier'>Read More &gt;&gt;</button></Link>
                                        </div>
                                    </div>
                            </div>
                        </>
                        ))
                    }

                            </div>
                }
    </div>
    
  )
}

export default SubCategories