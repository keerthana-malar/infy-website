import React, { useEffect, useState } from 'react'
import Footer from "../common/footer";
import Header from '../common/header';
import CarrerBaner from './CarrerBanner';
import {  Modal } from 'antd';
import axios from 'axios';
import "../css/Career.css";
import { useParams } from 'react-router-dom';
import { Alert } from 'react-bootstrap';

const JobDec = () => {



     // file upload max size 1mb 
     const maxSizeInBytes = 1048576;


    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phno, setPhno] = useState('')
    const [position, setPosition] = useState('')
    const [resume, setResume] = useState('')
    const [data, setData] = useState([]);
    const [fd,setFd] = useState('')
    const [open, setOpen] = useState(false);
    const [errors, setErrors] = useState("");
    const [show, setShow] = useState(false);
    const [showMsg, setShowMsg] = useState(false);
    const [file, setFile] = useState(null);
    const [values, setValues] = useState({
        id: id,
        title: "",
        status: "Active",
        qualification:"",
        experience:"",
        openings:"",
        jd:"",
        content:"",
        intro:"",
        benefit:"",
        paytype:"",
        jobtype:"",
        roles:"",
        shift:"",
        skill:"",
      });
    const [values1,  setValues1] = useState({
            name: "",
            email: "",
            phno: "",
            position: "",
            exp: "",
            selfintro: "",
            img: "",
          });




      useEffect(() => {
        axios
        .get("https://infygain.com/api/edit-career/"+ id)
        // .get("https://infygain.com/api/career-data")
        //   .get("https://infygain.com/api/careerdetail/" + id)
        .then((res) => {
            const carData = res.data.result[0];
            console.log(carData)
            setValues({
                ...values,
                title: carData.title,
                status: carData.status,
                qualification: carData.degree,
                experience: carData.exp,
                jd: carData.content,
                openings:carData.noofopening,  
                content:carData.jdcontent,
                intro: carData.intro,
                benefit:carData.benefit,
                paytype:carData.paytype,
                jobtype:carData.jobtype,
                roles:carData.roles,
                shift:carData.shift,
                skill:carData.skill,
              });
        })
           .catch((err) => {
             console.log(err);
           });
         },[id]);

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
            // setErrors("All  Must Be Filled 🤔");
            // setShow(true);
            // console.log(1)
            
          } 
          else if(file && file.size > maxSizeInBytes) {
            setErrors("File size exceeds the limit (1MB)🤔");
            setShow(true);
          }else {
            // console.log(0)
            const formData = new FormData();
            formData.append("file", file);
            formData.append("name", values.name);
            formData.append("email", values.email);
            formData.append("phno", values.phno);
            formData.append("position", values.position);
            formData.append("exp", values.exp);
            formData.append("selfintro", values.selfintro);
    
    
            // console.log("fd",formData)
    
            axios.post("https://infygain.com/api/carformdata", formData)
    
            .then((res) => {
              var re = document.querySelectorAll(".careerForm");
              re.forEach((r)=>{
                r.reset()
              })
              setErrors("Submited Successfully 😊😊");
              setShowMsg(true)
    
            //   setErrors("Blog Added Successfully 😊😊");
            //   setShowMsg(true);
            setOpen(false);
          setValues1({
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

      function alertBox() {
        if (show) {
          return (
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
              {errors}
            </Alert>
          );
        }
      }

      function msgBox() {
        if (showMsg) {
          return (
            <Alert variant="success" onClose={() => setShowMsg(false)} dismissible>
              {errors}
            </Alert>
          );
        }
      }

      console.log("val",values.jd)
  return (
    <div>
            <Header/>
            <CarrerBaner />
            <div>
{/* 
                {
                    data.map((data,index) => (
                        <> */}
                               <div className='hkl'>
                                    <h3 className='jd-title bril mt-5 mb-2'>{values.title} </h3>
                                </div>


                                <div className='container job-dec'>
                                  
                                <div className='job-dd mt-4'>
                                    <p><img src="/images/qulification.png" alt="best career" className="title_side" title="Career"/><span className='jd-cont'>Qualification :</span> {values.qualification}</p>
                                        <p><img src="/images/openings.png" alt="best career" className="title_side" title="Career"/><span className='jd-cont'>No.of.Openings :</span> {values.openings}</p>
                                        <p><img src="/images/experience.png" alt="best career" className="title_side" title="Career"/><span className='jd-cont'>Experience :</span> {values.experience}</p>
                                        <p><img src="/images/salary.png" alt="best career" className="title_side" title="Career" height="10px"/><span className='jd-cont'>Salary :</span> {values.intro}</p>
                                        <p><img src="/images/location.png" alt="best career" className="title_side" title="Career"/><span className='jd-cont'>Location :</span> Coimbatore</p>
                                        <p><img src="/images/shift.png" alt="best career" className="title_side" title="Career"/><span className='jd-cont'>Shift Schedule :</span> {values.shift}</p>
                                        <p><img src="/images/businessman.png" height="10px" alt="best career" className="title_side" title="Career"/><span className='jd-cont'>Job Type :</span> {values.jobtype}</p>

                                    </div>
                                    <div className='job-ddd'>
                                        <p><img src="/images/growth.png" alt="best career" className="title_side" title="Career" height="10px"/><span className='jd-cont'>Benefits :</span> {values.benefit}</p>
                                        <p><img src="/images/credit-card.png" alt="best career" className="title_side" title="Career"/><span className='jd-cont'>Supplemental Pay Types :</span> {values.paytype}</p>
                                    </div>
                                <h2 className='jd-title mt-2 mb-2'>Job Description</h2>
                                    <div className='container jd-main-content' dangerouslySetInnerHTML={{__html:values.jd }}>
                                </div>
                               
                                   <div className='container row'>
                                      <div className=' col-md-6 col-xs-12'>
                                        <h2 className=' mr-3'>Roles</h2>
                                        <div dangerouslySetInnerHTML={{__html:values.roles}}></div>
                                      </div>
                                      <div className=' col-md-6 col-xs-12'>
                                        <h2 className='ml-3'>Skills</h2>
                                        <div dangerouslySetInnerHTML={{__html:values.skill }}></div>
                                      </div>
                                   </div>
                                   
                                    <button className="btn bop mt-2 mb-4" onClick={showModal}><img src="\images\rightarrow.png" alt="career" title="Career"/> 
                                Apply now 
                                </button>
                                {msgBox() }  
                                </div>
                                

                        {/* </>
                    ))
                } */}
             

             
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
                        {alertBox()}
                      
                            <h3>Enter Your Details</h3>
                            <form className='careerForm' onSubmit={handleSubmit}>   
                                
                                <input type='text' name='name' placeholder='Name'  onChange={handleInput} required/>
                                <input type='text' name='email' placeholder='Email'  onChange={handleInput} required/>
                                <input type='text' name='phno' placeholder='phone No'   onChange={handleInput} required/>

                                <select name='position' onChange={handleInput}>
                        <option>--Please select the position--</option>
                           <option>{values.title}</option>
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
            <Footer />
    </div>
  )
}

export default JobDec