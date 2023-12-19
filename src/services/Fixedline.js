import React from 'react';
import '../css/fixedline.css';
import { Link } from 'react-router-dom';
import { Tooltip as ReactTooltip } from "react-tooltip";
import LocalActivityIcon from '@mui/icons-material/LocalActivity';

import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
// import HeadphonesIcon from '@mui/icons-material/Headphones';
import SupportAgentSharpIcon from '@mui/icons-material/SupportAgentSharp';
function Fixedline() {

    return(
        <div>
            <div className='fixedline'>
                <div className='iconvalue'>
                    <a href="https://infygain.com/onlinestore/"  target='_blank'  rel="noopener noreferrer">
                    <ShoppingCartCheckoutIcon data-tooltip-id="my-tooltip-1" className='valuekiller'/> 
                     </a>  
                     <Link to="/Bookservicepage" target='_blank'  rel="noopener noreferrer"><LocalActivityIcon data-tooltip-id="my-tooltip-2" className='valuekiller' /></Link>
                 
                 
                   <Link to="/Contact" target='_blank'  rel="noopener noreferrer"><SupportAgentSharpIcon data-tooltip-id="my-tooltip-3" className='valuekiller'/></Link>
                
                 </div>
                 <ReactTooltip
                 id="my-tooltip-1"
                 place="left"
                 content="Purchase Items"/>
                 <ReactTooltip
                 id="my-tooltip-2"
                 place="left"
                 content="Submit Tickets"/>
                 <ReactTooltip
                 id="my-tooltip-3"
                 place="left"
                 content="Drop your Enquiry"/>
            </div>
        </div>
    )
}

export default Fixedline;
