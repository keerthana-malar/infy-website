import React from 'react';
import '../css/Testimonial.css';
import { AiOutlineRight } from "react-icons/ai";


const CustomNextArrow = ({ onClick }) => (
  <div className="custom-next-arrow1" onClick={onClick}>
   <AiOutlineRight className='leftrighticon1'/>
  </div>
);

export default CustomNextArrow;