import React, { useState } from 'react'
import { BsPersonFill } from 'react-icons/bs'
import '../css/IotActivities.css'
import {BiSolidPhoneCall } from 'react-icons/bi'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'


const IotActivities = () => {

    const [scroll, setScroll] = useState(false)
    
  return (
    <ScrollTrigger onEnter={() => setScroll(true)} onExit={() => setScroll(false)}>
        <div className='activities'>

            {/* col-1 */}
            <div className='activity'>

                <div className='activity-1'>
                    <div className='hover'>
                        <span className='line-hover lh-1'></span>
                        <span className='line-hover lh-2'></span>
                        <span className='line-hover lh-3'></span>
                    </div>
                    <div className='active-1' style={{display:"flex", flexDirection:"column"}}>
                        <div style={{display:"flex",alignItems:"center"}}>
                        {/* <BsPersonFill className='person-icon'/> */}
                        <img className='person-icon' alt='top iot services' style={{color:"#ffc000"}} src='/images/proj.webp'/>
                        {scroll && 
                        <>
                            <CountUp className='activity-nos' start={0} end={487} duration={5} delay={0} /> <span className='activity-nos'>+</span>
                        </>
                        }
                        </div>
                        <div className='activityName'>
                          <p>Completed Projects</p>
                        </div>
                    </div>
                </div>

                <div className='activity-1'>
                    <div className='hover'>
                        <span className='line-hover lh-1'></span>
                        <span className='line-hover lh-2'></span>
                        <span className='line-hover lh-3'></span>
                    </div>
                    <div style={{display:"flex", flexDirection:"column"}}>
                        <div style={{display:"flex",alignItems:"center"}}>
                        <BsPersonFill className='person-icon'/>
                        {scroll && 
                        <>
                            <CountUp className='activity-nos' start={0} end={416} duration={5} delay={0} /> <span className='activity-nos'>+</span>
                        </>
                        }
                        </div>
                        <div className='activityName'>
                          <p>Happy Clients</p>
                        </div>
                    </div>
                </div>

                <div className='activity-1'>
                    <div className='hover'>
                        <span className='line-hover lh-1'></span>
                        <span className='line-hover lh-2'></span>
                        <span className='line-hover lh-3'></span>
                    </div>
                    <div style={{display:"flex", flexDirection:"column"}}>
                        <div style={{display:"flex",alignItems:"center"}}>
                        {/* <BsPersonFill className='person-icon'/> */}
                        <img alt='top it services' className='person-icon' style={{color:"#ffc000"}} src='/images/sp.webp'/>
                        {scroll && 
                        <>
                            <CountUp className='activity-nos' start={0} end={68} duration={5} delay={0} /> <span className='activity-nos'>+</span>
                        </>
                        }
                        </div>
                        <div className='activityName'>
                          <p>Services Provider</p>
                        </div>
                    </div>
                </div>

                <div className='activity-1'>
                    <div className='hover'>
                        <span className='line-hover lh-1'></span>
                        <span className='line-hover lh-2'></span>
                        <span className='line-hover lh-3'></span>
                    </div>
                    <div style={{display:"flex", flexDirection:"column"}}>
                        <div style={{display:"flex",alignItems:"center"}}>
                        <img className='person-icon' style={{color:"#ffc000"}} src='/images/eng.webp' alt='best Services'/>
                        {scroll && 
                        <>
                            <CountUp className='activity-nos' start={0} end={12} duration={5} delay={0} /> <span className='activity-nos'>+</span>
                        </>
                        }
                        </div>
                        <div className='activityName'>
                         <p>Service engineers</p>
                        </div>
                    </div>
                </div>

            </div>

            {/* col-2 */}
            <div className='help'>
                <div className='cont-help'>
                    <BiSolidPhoneCall className='phone-icon'/>
                    <p>Call For Help</p>
                </div>
            <p className='cont-no'>+91 99521 41444</p>
            </div>
        </div>
    </ScrollTrigger>
  )
}

export default IotActivities