import React, { useState } from 'react'
import '../css/IotServBtns.css'

const IotServBtns = () => {

    const [show, setShow] = useState("pc1")
  return (
    <div className='container serv-acc-head'>
        <div className='serv-accd-btn'>
            <button className={`${show === 'pc1' ? "active" : ""}`} onClick={() => setShow('pc1')}>Our Vision</button>
            <button className={`${show === 'pc2' ? "active" : ""}`} onClick={() => setShow('pc2')}>Our Mission</button>
            <button className={`${show === 'pc3' ? "active" : ""}`} onClick={() => setShow('pc3')}>Philosophy</button>
            <hr />
        </div>

        { show === 'pc1' && 
            <>
                 <div className='serv-accd-cont'>
                    <p className='sev-cont1'>To be the most trusted IT sales and service provider, for organizations and individuals alike. We aspire to make high-quality solutions available to everyone, at affordable prices.</p>
                    <p className='sev-cont1'>Our vision is to be the most trusted IT sales and service provider for both organizations and individuals. We are dedicated to making high-quality solutions accessible to everyone at affordable prices.</p>
                </div>
            </>
        
        }
         { show === 'pc2' && 
            <>
                 <div className='serv-accd-cont'>
                    <p className='sev-cont1'>To deliver top-class, comprehensive IT solutions for any and every need of our clients. Our reliable and solid back-end support will guarantee a smooth and uninterrupted workflow for the customers.      </p>
                    <p className='sev-cont1'>We provide top-notch IT solutions tailored to your needs. Our expert team ensures smooth operations with reliable back-end support, guaranteeing uninterrupted workflow. Partner with us for seamless and effective technology integration.</p>
                </div>
            </>
        
        }
         { show === 'pc3' && 
            <>
                 <div className='serv-accd-cont'>
                    <p className='sev-cont1'>Our philosophy centers on innovation, viewing technology as a tool for empowerment. By cultivating creativity, we inspire individuals and businesses to reach their zenith, catalyzing progress in diverse fields. </p>
                    <p className='sev-cont1'>We prioritize inclusivity, breaking down digital barriers to make technology universally accessible. Upholding unwavering ethical principles, we shape a responsible digital realm, ensuring sustainability and fairness for a harmonious future.</p>
                </div>
            </>
        
        }
    </div>  
  )
}

export default IotServBtns