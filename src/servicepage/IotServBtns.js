import React, { useState } from 'react';
import '../css/IotServBtns.css';

const IotServBtns = () => {

    const [show, setShow] = useState("pc1")
  return (
    <div className='container serv-acc-head'>
        <div className='serv-accd-btn'>
            <button className={`${show === 'pc1' ? "active" : ""}`} onClick={() => setShow('pc1')}>Personal Care</button>
            <button className={`${show === 'pc2' ? "active" : ""}`} onClick={() => setShow('pc2')}>Personal Care</button>
            <button className={`${show === 'pc3' ? "active" : ""}`} onClick={() => setShow('pc3')}>Personal Care</button>
            <hr />
        </div>

        { show === 'pc1' && 
            <>
                 <div className='serv-accd-cont'>
                    <p className='sev-cont1'>Sed1 ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque lau dantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi archi tecto beatae vitae dicta sunt explicabo.</p>
                    <p className='sev-cont1'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conse quuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                </div>
            </>
        
        }
         { show === 'pc2' && 
            <>
                 <div className='serv-accd-cont'>
                    <p className='sev-cont1'>Sed2 Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conse quuntur magni dolores eos qui ratione voluptatem sequi nesciunt. eaque ipsa quae ab illo inventore veritatis et quasi archi tecto beatae vitae dicta sunt explicabo.</p>
                    <p className='sev-cont1'>ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque lau dantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi archi tecto beatae vitae dicta sunt explicabo.</p>
                </div>
            </>
        
        }
         { show === 'pc3' && 
            <>
                 <div className='serv-accd-cont'>
                    <p className='sev-cont1'>.iciatis unde omnis iste natus error sit voluptatem accusantium doloremque lau danticiatis unde omnis iste natus error sit voluptatem accusantium doloremque lau dant</p>
                    <p className='sev-cont1'>Nemo enim ipsam voluptatem quia Sed3 ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque lau dantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi archi tecto beatae vitae dicta sunt explicabo</p>
                </div>
            </>
        
        }
    </div>
  )
}

export default IotServBtns;
