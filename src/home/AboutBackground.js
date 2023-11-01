
import React,{useState,useEffect} from 'react';
import '../css/AboutBackground.css';
import { BiBadge } from 'react-icons/bi';


function AboutBackground(){

    const [para1,setPara1]=useState(true);
    const [para2,setPara2]=useState(false);
    const [para3,setPara3]=useState(false);

    const Clickonme=()=>
    {
        setPara1(true);
        setPara2(false);
        setPara3(false);
    }

    const Clickonme1=()=>{
       
        setPara1(false);
        setPara2(true);
        setPara3(false);
    }

    const Clickonme2=()=>{
        setPara1(false);
        setPara2(false);
        setPara3(true);
    }
    
    return(
        <div>
            {/* <div className='fullimageview'>
                <div className='container'>
                    <div className='parentviewing'>
                        <div className='left_col_value'>

                        </div>
                         <div className='right_col_value'>
                            <div className='zero'>
                            <div className='first'>
                            <p> Like What We Offer</p>
                            </div>
                            <div className='second'>
                            <h1>DO BUSINESS<br></br> WITH US!</h1>
                            </div>
                            <div className='third'>
                            <p>In order to acquire our services please kindly send us your inquiry of interest.
                                 We shall revert back immediately</p>
                           </div>
                           <div className='puffy'>
                           <button className='puffy1'>Contact us</button>
                           </div>
                           </div>
                         </div>
                    </div>

                </div>

            </div> */}
            <div className='downgirl' >
            <div className='container'>
                <div className='col-md-12'>
                <div className='inview'>
                    <div className='row gridcontroller'>
                    <div className='col-md-5 parajick'>
                    <p className='paranick'  onClick={Clickonme}>Our Vision</p>
                    <p className='paranick' onClick={Clickonme1}>Our Misssion</p>
                    <p className='paranick' onClick={Clickonme2}>Our Values</p>
                    </div>
                    <div className='col-md-2 coding'>
                    <div className={para1? 'codeview' : 'code'} onClick={Clickonme}></div>
                    <div className={para2?'codeview' :'code1' }onClick={Clickonme1}></div>
                    <div className={para3?'codeview' :'code2' }onClick={Clickonme2}></div>
                    </div>
                    <div className='col-md-5 parapart'>
                    {para1? <p className='ourpara1'> Our vision is to provide trustable service to the customer 
                    according to their needs. We aspire to make high-quality solutions available
                     to everyone, at affordable prices. Our vision is to provide reliable solutions.
                     </p> : null}
                   
                             {para2? <p className='ourpara1'>Our mission is work more focused into networking and analysis of the survey
                              based on the customer requirements. Also work back on any drawbacks and provide a wide 
                              platform for the young budding springs. </p> : null}
                        
                             

                             {para3? <p className='ourpara1'> Our values is customer satisfaction is at the heart of 
                             everything we do. We prioritize 
                             understanding our clients' needs, offering tailored solutions, 
                             and providing exceptional service to guarantee a positive.
                           </p> : null}
                             </div>
                    </div>
                </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default AboutBackground;