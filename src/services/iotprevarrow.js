import React from "react";
import "../css/Testimonial.css";
import { AiOutlineLeft } from "react-icons/ai";

const CustomPrevArrow = ({ onClick }) => (
  <div className="custom-prev-arrow1" onClick={onClick}>
    <AiOutlineLeft className="leftright2" />
  </div>
);

export default CustomPrevArrow;
