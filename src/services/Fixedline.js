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
import { RiAdminLine } from "react-icons/ri";



function Fixedline(){
    return(
        <div>
            <div className='fixedline'>
                <div className='iconvalue'>
                    <a href="https://infygain.com/onlinestore/" target='_blank'>
                    <AiOutlineShoppingCart className='valuekiller'/>
                     </a>     
                     <Link to="/Bookservicepage" target='_blank'><GrTicket className='valuekiller' /></Link>
                 
                   <Link to="/Contact" target='_blank'><AiOutlineMessage className='valuekiller'/></Link>
                   <Link to="/admin" target='_blank'><RiAdminLine className='valuekiller' /></Link>
                
                 </div>
            </div>
        </div>
    )
}

export default Fixedline;
