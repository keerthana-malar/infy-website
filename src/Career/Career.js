import React from "react";
import { Link } from "react-router-dom";
import "../css/Career.css";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import {  Modal } from 'antd';
import "../css/careermodal.css";
import "../css/CareerForm.css"
import { cardActionAreaClasses } from "@mui/material";

const Career =()=>{
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phno, setPhno] = useState('')
  const [position, setPosition] = useState('')
  const [resume, setResume] = useState('')
  const [data, setData] = useState([]);
  const [fd,setFd] = useState('')
  const [carData, setCarData] = useState({
    title: "",
    status: "Active",
    qualification:"",
    experience:"",
    jd:"",
    intro:""
  })

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setLoading(true);
    setFd({
        name,
        email,
        phno,
        position,
        resume
    })
    setLoading(false);
    setOpen(false);
    setName('')
    setEmail('')
    setPhno('')
    setPosition('')
    setResume('')  
  };

  const handleCancel = () => {
    setOpen(false);
    setName('')
    setEmail('')
    setPhno('')
    setPosition('')
    setResume('') 
  };

 
  useEffect(() => {
    axios
    .get("https://infygain.in/api/career-data")
    .then((res) => {
     const dataa= res.data
     setData(dataa);
      console.log('car',data)
    })
    .catch((err) => {
      console.log(err);
    });
  },[]);

  
  return (

 <div className="container careerpage">
  <div className="rcs">
    <div className='sml'></div>
    <h5 className="pq">career</h5>
     </div>
      <div className="row ">
       <div className="col-md-6 car-para1">From startups to Fortune 500s,
        WayUp offers the best internships and jobs.
        </div>
       <div className="col-md-6 car-para">Easily apply to multiple
     jobs with one click! Quick Apply shows you recommended jobs based 
     off your most recent search and allows you to apply to 25+ jobs in a matter of seconds!
     </div>
  </div>
 

  <div className="row car-boxs">
  {data.map((values, index) =>(
  <div class="col-md-4 col-lg-4 col-sm-4 boxs" >
  
      <div className="title_head">
      <img src="/images/title.png" className="title_side"/>
        <div className="headerpart" >{values.title}</div>
        </div>
        <div className="imc">
          <div className="open">
        <img src="/images/qulification.png" className="qua"/>
        <p className="parl">{values.degree} </p>
        </div >
        <div className="open">
          <img src="/images/openings.png" className="ope"/>
       
       <p className="parl"> {values.degree} </p>
        </div>
        <div className="open">
        <img src="/images/experience.png" className="exp"/> 
        
        <p className="parl">{values.exp} </p>
        </div>
      <div className="open">
        <img src="/images/location.png" className="loc"/>
         <p className="parl" >Coimbatore </p></div>
      </div>
      <div className="bth">
       {values.intro}
      </div>
      <div className="bop1">
      <button className="btn bop" onClick={showModal}><img src="\images\rightarrow.png"/> 
      Apply now </button>
      </div>
      
    </div>
   ))}
    </div>
  
    <Modal
        footer={null}
        open={open}
        onOk={
            () => {
                handleOk()
            }
        }
        onCancel={handleCancel}
        centered
   
      >
         
         <div className='container form-head'>
          
            <h3>Enter Your Details</h3>
            <form onSubmit={(e) => {
                e.preventDefault()
                handleOk()}}
                >   
                  
                <input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} required />
                <input type='email' placeholder='Email-Id' value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type='text' placeholder='Phone No' value={phno} onChange={(e) => setPhno(e.target.value)} required />

                <select value={position} onChange={(e) => setPosition(e.target.value)} required>
           <option>--Please select the position--</option>
            {data.map((vale, index) => (
            <option key={index} value={vale.title}>
               {vale.title}
           </option>
    ))}
</select>
                
                <div className='form-input'>
                   
                        <select>
                            <option>Please Choose an Experience</option>
                            <option>1</option>
                            <option>2</option>
                            <option>2+</option>
                        </select> 
                    </div>
                <div className='form-input'>
                        {/* <label>A brief about the candidate <span className='label-star'>*</span></label> */}
                        {/* <label>Comments <span className='label-star'>*</span></label> */}
                        <textarea type='text' placeholder='Comment here' required/> 
                </div>
               
                <input type='file' value={resume} onChange={(e) => setResume(e.target.value)} required />
                <button className={`submit ${loading ? "btn-load" : ""}`} type="submit">Submit</button>
            </form>
       
        </div>
        
        </Modal>
    </div> 

  );
};
function stripHTMLTags(html) {
  const temp = document.createElement('div');
  temp.innerHTML = html;
  return temp.textContent || temp.innerText;
}

export default Career;