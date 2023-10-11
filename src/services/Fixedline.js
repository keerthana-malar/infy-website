import React from 'react';
import '../css/fixedline.css';
import { CiSettings } from "react-icons/ci";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { IoTicketOutline } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { ImTicket } from "react-icons/im";
import { Link } from 'react-router-dom';

function Fixedline(){
    return(
        <div>
            <div className='fixedline'>
                <div className='iconvalue'>
                    <a href="https://infygain.com/onlinestore/">
                    <AiOutlineShoppingCart className='valuekiller'/>
                     </a>     
                     <Link to="/Bookservicepage"><ImTicket className='valuekiller'/></Link>
                 
                   <Link to="/Contact"><AiOutlineMessage className='valuekiller'/></Link>
                
                 </div>
            </div>
        </div>
    )
}

export default Fixedline;
