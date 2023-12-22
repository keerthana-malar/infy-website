import React from "react";
import "../css/Career.css";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import {  Modal } from 'antd';
import "../css/careermodal.css";
import "../css/CareerForm.css"
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

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
  const [file, setFile] = useState(null);
  const [values, setValues] = useState({
    name: "",
    email: "",
    phno: "",
    position: "",
    exp: "",
    openings:"",
    selfintro: "",
    img: "",
  });

  const showModal = () => {
    setOpen(true);
  };

  const handleInput = (e) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  
    if (values.name === "") {
        // setErrors("Title Must Be Filled 🤔");
        // setShow(true);
        // console.log(1)
      } else {
        // console.log(0)
        const formData = new FormData();
        formData.append("file", file);
        formData.append("name", values.name);
        formData.append("email", values.email);
        formData.append("phno", values.phno);
        formData.append("position", values.position);
        formData.append("exp", values.exp);
        formData.append("selfintro", values.selfintro);


        console.log("fd",formData)

        axios.post("https://infygain.com/api/carformdata", formData)

        .then((res) => {
          var re = document.querySelectorAll(".careerForm");
          re.forEach((r)=>{
            r.reset()
          })

        //   setErrors("Blog Added Successfully 😊😊");
        //   setShowMsg(true);
        setOpen(false);
      setValues({
        name: "",
        email: "",
        phno: "",
        position: "",
        exp: "",
        selfintro: "",
        img: "",
      });
        })
        .catch((err) => {
          console.log("helloooo" + err);
        //   setErrors("Something Wrong Pls Try again Later 😥");
        //   // setErrors(err);
        //   setShow(true);
        });
      }
      
    
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
    .get("https://infygain.com/api/career-data")
    .then((res) => {
     const dataa= res.data
     setData(dataa);
    })
    .catch((err) => {
      console.log(err);
    });
  },[]);


  console.log("d",data)

  return (

 <div className="container careerpage">
  <div className="rcs">
    <div className='sml'></div>
    <h2 className="pq">Career</h2>
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


  {
    !(data.length === 0) ?
      data.map((values, index) =>(
      <div class="col-md-4 col-lg-4 col-sm-4 boxs" >
      
          <div className="title_head">
          <img src="/images/title-1.png" alt="best career" className="title_side" title="Career"/>
            <div className="headerpart" >{values.title}</div>
            </div>
            <div className="imc">
              <div className="open">
            <img src="/images/qulification.png" alt="best career" className="qua" title="Career"/>
            <p className="parl">Qualification - {values.degree} </p>
            </div >
            <div className="open">
              <img src="/images/openings.png" alt="best career" className="ope" title="Career"/>
          
          <p className="parl">Openings - {values.noofopening} </p>
            </div>
            <div className="open">
            <img src="/images/experience.png" alt="best career" className="exp" title="Career"/> 
            
            <p className="parl">Experience - {values.exp} </p>
            </div>
            <div className="open">
            <img src="/images/salary.png" alt="best career" className="exp" title="Career"/> 
            {/* <RiMoneyDollarCircleLine  className="loc"/> */}
            <p className="parl">Salary - {values.intro} </p>
            </div>
          <div className="open">
            <img src="/images/location.png" alt="best career" className="loc" title="Career"/>
            <p className="parl" >Location - Coimbatore </p></div>
          </div>
          {/* <div className="bth">
          {values.intro}
          </div> */}
          <div className="bop1">
          <Link to={`/careerdetail/${values.id}`}><button className="btn bop" > <img src="\images\rightarrow.png" alt="career" title="Career"/>
          Read More </button></Link>
          </div>
          
        </div>
      ))
  : 
  <>
    <span className="car-info">Currently No Openings</span>
  </>
  }
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
            <form className='careerForm' onSubmit={handleSubmit}>   
                  
                <input type='text' name='name' placeholder='Name'  onChange={handleInput} required/>
                <input type='text' name='email' placeholder='Email'  onChange={handleInput} required/>
                <input type='text' name='phno' placeholder='phone No'   onChange={handleInput} required/>

                <select name='position' onChange={handleInput}>
           <option>--Please select the position--</option>
            {data.map((vale, index) => (
            <option key={index}>
               {vale.title}
           </option>
    ))}
</select>
                
                <div className='form-input'>
                   
                <select name='exp'  onChange={handleInput}>
                            <option>Please Choose an Experience</option>
                            <option>Fresher</option>
                            <option>1</option>
                            {/* <option>2</option> */}
                            <option>2+</option>
                        </select> 
                    </div>
                <div className='form-input'>
                        {/* <label>A brief about the candidate <span className='label-star'>*</span></label> */}
                        {/* <label>Comments <span className='label-star'>*</span></label> */}
                        <textarea name='selfintro' onChange={handleInput}  placeholder='Comment here' required/> 
                </div>
               
                <input
                            type="file"
                            name="img"
                            
                            className="form-group"
                            onChange={(e) => {
                            handleInput(e);
                            handleFileChange(e);
                    }}
                  ></input>
                <button className={`submit ${loading ? "btn-load" : ""}`} type="submit">Submit</button>
            </form>
       
        </div>
        
    </Modal>
    </div> 

  );
};


export default Career;