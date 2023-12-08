import React from 'react'
import { FaCartPlus } from 'react-icons/fa'

const ProductContent = ({value}) => {
   
  return (
    <div className='col-md-8' key={value.name}>
    <div className='firstlineflex'>
        <div className='yellowbreak'></div>
        <div className='firstheading'>
            <h1>
             {value.name}
            </h1>
        </div>
    </div>
    <div className='row paraoutdoor'>
        <div className='col-md-4 col-sm-12'>
                <img src={value.img} alt='dummy'/>  
              
        </div>
        
        <div  className='col-md-8 col-sm-12'>
         <p className='text-muted firstparavalue'>

            {value.para}
            <div className='butk'>
                {/* To Check Our product  */}
               <button className='btn butks'>
               <a target='_blank' href={value.link}><FaCartPlus className='butk-icons'/> buy now </a>
                </button>
               </div>
            </p> 
            

        </div>
    </div>
    

    <div className='downsession'>

        <div className='downparasession'>
            <img src="/images/download.svg" alt='points' className='image-fluid iconroller'/>
            <span className='clinicpara'>
               <p>{value.p1}</p>

              

                </span>
            </div>
            {/* 2 point */}
        <div className='downparasession'>
        <img src="/images/download.svg" alt='points' className='image-fluid iconroller'/>
            <span className='clinicpara'>
               <p> {value.p2}</p>

               
                </span>
        </div>
        {/* 3 point */}
        <div className='downparasession'>
        <img src="/images/download.svg" alt='points' className='image-fluid iconroller'/>
            <span className='clinicpara'>
               <p>{value.p3}</p>
                
                
                
                </span>
        </div>
        {/*  4 points */}
        <div className='downparasession'>
        <img src="/images/download.svg" alt='points' className='image-fluid iconroller'/>
            <span className='clinicpara'>
            <p>{value.p4}</p>
                
            </span >
        </div>
        {/* 5 points */}
        <div className='downparasession'>
        <img src="/images/download.svg" alt='points' className='image-fluid iconroller'/>
            <span className='clinicpara'>
             <p>{value.p5}</p>
               
                </span>
        </div>
        {/*  6 points  */}
        <div className='downparasession'>
        <img src="/images/download.svg" alt='points' className='image-fluid iconroller'/>
            <span className='clinicpara'>
           <p>{value.p6}</p>
                </span>
        </div>
        {/* 7 points */}
        <div className='downparasession'>
        <img src="/images/download.svg" alt='points' className='image-fluid iconroller'/>
            <span className='clinicpara'>
             <p>{value.p7}</p>
            </span>
        </div>
        {/*  8 points  */}
        <div className='downparasession'>
        <img src="/images/download.svg" alt='points' className='image-fluid iconroller'/>
            <span className='clinicpara'>
           <p>{value.p8}</p>
                
              
                
                </span>
        </div>
       
     
    </div>
    </div>
  )
}

export default ProductContent