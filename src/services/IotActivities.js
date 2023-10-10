import React, { useEffect, useState } from 'react'
import { BsPersonFill } from 'react-icons/bs'
import '../css/IotActivities.css'
import {BiSolidPhoneCall } from 'react-icons/bi'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'


const IotActivities = () => {

    const [scroll, setScroll] = useState(false)
    
  return (
    <ScrollTrigger onEnter={() => setScroll(true)}>
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
                        <BsPersonFill className='person-icon'/>
                        {scroll && 
                        <>
                            <CountUp className='activity-nos' start={0} end={105} duration={2} delay={0} /> <span className='activity-nos'>+</span>
                        </>
                        }
                        </div>
                        <div className='activityName'>
                          <p>Winning awards</p>
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
                            <CountUp className='activity-nos' start={0} end={15} duration={5} delay={0} /> <span className='activity-nos'>+</span>
                        </>
                        }
                        </div>
                        <div className='activityName'>
                          <p>Completed project</p>
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
                            <CountUp className='activity-nos' start={0} end={10} duration={5} delay={0} /> <span className='activity-nos'>K+</span>
                        </>
                        }
                        </div>
                        <div className='activityName'>
                          <p>Client’s reviews</p>
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
                            <CountUp className='activity-nos' start={0} end={805} duration={2} delay={0} /> <span className='activity-nos'>+</span>
                        </>
                        }
                        </div>
                        <div className='activityName'>
                         <p>Team Members</p>
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