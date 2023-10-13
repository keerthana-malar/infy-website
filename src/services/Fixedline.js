import React from 'react';
import '../css/fixedline.css';
import { CiSettings } from "react-icons/ci";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { IoTicketOutline } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { ImTicket } from "react-icons/im";
import { Link } from 'react-router-dom';
import { GrTicket } from "react-icons/gr";
import { GiArchiveRegister } from "react-icons/gi";
import { RiAdminLine } from "react-icons/ri";
import { Tooltip as ReactTooltip } from "react-tooltip";
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
function Fixedline() {

    return(
        <div>
            <div className='fixedline'>
                <div className='iconvalue'>
                    <a href="https://infygain.com/onlinestore/"  target='_blank'>
                    <ShoppingCartCheckoutIcon data-tooltip-id="my-tooltip-1" className='valuekiller'/> 
                     </a>  

                     <Link to="/Bookservicepage" target='_blank'><LocalActivityIcon data-tooltip-id="my-tooltip-2" className='valuekiller' /></Link>
                 
                   <Link to="/Contact" target='_blank'><ContactSupportOutlinedIcon data-tooltip-id="my-tooltip-3" className='valuekiller'/></Link>
                
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
