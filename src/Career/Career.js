
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

    // <div className="container">
    //   <div className=" row job-head">
    //     <div className="container">
    //       <div className="row">
    //         <div className="col-md-4">
    //           <div class="card">
    //             <h3 class="card-header">Marketing</h3>

    // <div className="container">
    //   <div className=" row job-head">
    //     <span>Current Openings</span>
    //     <div className="container">
    //       <div className="row">
    //         {
    //           data.map((data) => (
    //             <div className="col-md-4">
    //             <div class="card">
    //               <h3 class="card-header">{data.title}</h3>
  
    //               <div class="card-body">
    //                 <p class="job-sub">Qualification</p>
    //                 <p>{data.degree}</p>
  
    //                 <p class="job-sub">Experience</p>
    //                 <p>{data.exp}</p>
  
    //                 <p class="job-sub">Required Skills</p>
    //                 <ul>
    //                   {/* <li>{data.content}</li> */}
    //                   <li>
    //                     To generate the leads by applying effective strategies
    //                   </li>
    //                   <li>
    //                     To maintain effective relationship with the customers
    //                   </li>
    //                   <li>To be a good team player and self motivated</li>
    //                   <li>To increase sales in routine base</li>
    //                 </ul>
    //                 <Link to={"/career/"+data.id}><button className="btns btns-main">
    //                   Read More</button></Link>
    //               </div>
    //             </div>
    //             </div>
    //           ))
    //         }
    //         {/* <div className="col-md-4">
    //           <div class="card">
    //             <h3 class="card-header">Marketing</h3>

// import React from "react";
// import { Link } from "react-router-dom";
// import "../css/Career.css";
// import { useEffect } from "react";
// import axios from "axios";
// import { useState } from "react";

// const Career = () => {

//   const [data, setData] = useState([])
//   // const [carData, setCarData] = useState({
//   //   title: "",
//   //   status: "Active",
//   //   qualification:"",
//   //   experience:"",
//   //   jd:"",
//   //   intro:""
//   // })
//   useEffect(() => {
//     axios
//     .get("https://infygain.in/api/career-data")
//     .then((res) => {
//      const dataa= res.data
//      setData(dataa)
//       console.log('car',data)
//       // setCarData({
//       //   title: dataa.title,
//       //   status: "Active",
//       //   qualification:dataa.degree,
//       //   experience:"",
//       //   jd:"",
//       //   intro:""
//       // })
//       // console.log(carData)
//     })
//     .catch((err) => {
//       console.log(err);
//     });
//   },[])
//   console.log(data)
//   return (

//     // <div className="container">
//     //   <div className=" row job-head">
//     //     <div className="container">
//     //       <div className="row">
//     //         <div className="col-md-4">
//     //           <div class="card">
//     //             <h3 class="card-header">Marketing</h3>

//     <div className="container">
//       <div className=" row job-head">
//         <span>Current Openings</span>
//         <div className="container">
//           <div className="row">
//             {
//               data.map((data) => (
//                 <div className="col-md-4">
//                 <div class="card">
//                   <h3 class="card-header">{data.title}</h3>
  
//                   <div class="card-body">
//                     <p class="job-sub">Qualification</p>
//                     <p>{data.degree}</p>
  
//                     <p class="job-sub">Experience</p>
//                     <p>{data.exp}</p>
  

                    <p class="job-sub">Required Skills</p>
                    {data.intro}
                    {/* <ul>
                      <li>{data.intro}</li> */}
                      {/* <li>
                        To generate the leads by applying effective strategies
                      </li>
                      <li>
                        To maintain effective relationship with the customers
                      </li>
                      <li>To be a good team player and self motivated</li>
                      <li>To increase sales in routine base</li> */}
                    {/* </ul> */} <br/>
                    <Link to={"/career/"+data.id}><button className="btns btns-main">Read More</button></Link>
                  </div>
                </div>
                </div>
              ))
            }
            {/* <div className="col-md-4">
              <div class="card">
                <h3 class="card-header">Marketing</h3>


                <div class="card-body">
                  <p class="job-sub">Qualification</p>
                  <p>Any degree</p>


    // //             <div class="card-body">
    // //               <p class="job-sub">Qualification</p>
    // //               <p>Any degree</p>

    // //               <p class="job-sub">Experience</p>
    // //               <p>1 Year / Fresher</p>

    // //               <p class="job-sub">Required Skills</p>
    // //               <ul>
    // //                 <li>
    // //                   To generate the leads by applying effective strategies
    // //                 </li>
    // //                 <li>
    // //                   To maintain effective relationship with the customers
    // //                 </li>
    // //                 <li>To be a good team player and self motivated</li>
    // //                 <li>To increase sales in routine base</li>
    // //               </ul>
    // //               <button className="btns btns-main">Read More</button>
    // //             </div>
    // //           </div>
    // //         </div>
    // //         <div className="col-md-4">
    // //           <div class="card">
    // //             <h3 class="card-header">Marketing</h3>

    // //             <div class="card-body">
    // //               <p class="job-sub">Qualification</p>
    // //               <p>Any degree</p>

    // //               <p class="job-sub">Experience</p>
    // //               <p>1 Year / Fresher</p>

    // //               <p class="job-sub">Required Skills</p>
    // //               <ul>
    // //                 <li>
    // //                   To generate the leads by applying effective strategies
    // //                 </li>
    // //                 <li>
    // //                   To maintain effective relationship with the customers
    // //                 </li>
    // //                 <li>To be a good team player and self motivated</li>
    // //                 <li>To increase sales in routine base</li>
    // //               </ul>
    // //               <button className="btns btns-main">Read More</button>
    // //             </div>
    // //           </div>
    // //         </div>
    // //         <div className="col-md-4">
    // //           <div class="card">
    // //             <h3 class="card-header">Marketing</h3>

    // //             <div class="card-body">
    // //               <p class="job-sub">Qualification</p>
    // //               <p>Any degree</p>

    // //               <p class="job-sub">Experience</p>
    // //               <p>1 Year / Fresher</p>


    // //               <p class="job-sub">Required Skills</p>
    // //               <ul>
    // //                 <li>
    // //                   To generate the leads by applying effective strategies
    // //                 </li>
    // //                 <li>
    // //                   To maintain effective relationship with the customers
    // //                 </li>
    // //                 <li>To be a good team player and self motivated</li>
    // //                 <li>To increase sales in routine base</li>
    // //               </ul>
    // //               <button className="btns btns-main">Read More</button>
    // //             </div>
    // //           </div>
    // //         </div>
    // //       </div>
    // //     </div>

    //               <p class="job-sub">Required Skills</p>
    //               <ul>
    //                 <li>
    //                   To generate the leads by applying effective strategies
    //                 </li>
    //                 <li>
    //                   To maintain effective relationship with the customers
    //                 </li>
    //                 <li>To be a good team player and self motivated</li>
    //                 <li>To increase sales in routine base</li>
    //               </ul>
    //               <button className="btns btns-main">Read More</button>
    //             </div>
    //           </div>
    //         </div> */}

    //       </div>
    //     </div>

    // //   </div>
    // // </div>

  //   useEffect(() => {
  //     axios.get("https://infygain.in/api/blogdata").then((res) => {
  //       setBlogs(res.data);
  //     });
  //   }, []);
  
  //   const blogFiltered = blogs.filter((val,index) => val.category === "Web Services")
  
  //       function dateSlice(id){
  //         const rawDate = blogs[id].date;
  //         const blogDate = rawDate.slice(0, 10);
  //         return blogDate;
  //     }
   
  // console.log(blogs)
  // console.log(blogFiltered)

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
        // footer={[
        //   <button key="back" className='close' onClick={handleCancel}>
        //     Close
        //   </button>,
        //   <button key="submit" className={`submit ${loading ? "btn-load" : ""}`}  onClick={handleOk}>
        //     Submit
        //   </button>,
        // ]}
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

                  <p class="job-sub">Experience</p>
                  <p>1 Year / Fresher</p>

                  <p class="job-sub">Required Skills</p>
                  <ul>
                    <li>
                      To generate the leads by applying effective strategies
                    </li>
                    <li>
                      To maintain effective relationship with the customers
                    </li>
                    <li>To be a good team player and self motivated</li>
                    <li>To increase sales in routine base</li>
                  </ul>
                  <button className="btns btns-main">Read More</button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="card">
                <h3 class="card-header">Marketing</h3>

                <div class="card-body">
                  <p class="job-sub">Qualification</p>
                  <p>Any degree</p>

                  <p class="job-sub">Experience</p>
                  <p>1 Year / Fresher</p>

                  <p class="job-sub">Required Skills</p>
                  <ul>
                    <li>
                      To generate the leads by applying effective strategies
                    </li>
                    <li>
                      To maintain effective relationship with the customers
                    </li>
                    <li>To be a good team player and self motivated</li>
                    <li>To increase sales in routine base</li>
                  </ul>
                  <button className="btns btns-main">Read More</button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="card">
                <h3 class="card-header">Marketing</h3>

                <div class="card-body">
                  <p class="job-sub">Qualification</p>
                  <p>Any degree</p>

                  <p class="job-sub">Experience</p>
                  <p>1 Year / Fresher</p>

                  <p class="job-sub">Required Skills</p>
                  <ul>
                    <li>
                      To generate the leads by applying effective strategies
                    </li>
                    <li>
                      To maintain effective relationship with the customers
                    </li>
                    <li>To be a good team player and self motivated</li>
                    <li>To increase sales in routine base</li>
                  </ul>
                  <button className="btns btns-main">Read More</button>
                </div>
              </div>
            </div> */}

          </div>
        </div>

      </div>
    </div>

  );
};
function stripHTMLTags(html) {
  const temp = document.createElement('div');
  temp.innerHTML = html;
  return temp.textContent || temp.innerText;
}

export default Career;

//                     <p class="job-sub">Required Skills</p>
//                     <ul>
//                       {/* <li>{data.content}</li> */}
//                       <li>
//                         To generate the leads by applying effective strategies
//                       </li>
//                       <li>
//                         To maintain effective relationship with the customers
//                       </li>
//                       <li>To be a good team player and self motivated</li>
//                       <li>To increase sales in routine base</li>
//                     </ul>
//                     <Link to={"/career/"+data.id}><button className="btns btns-main">Read More</button></Link>
//                   </div>
//                 </div>
//                 </div>
//               ))
//             }
//             {/* <div className="col-md-4">
//               <div class="card">
//                 <h3 class="card-header">Marketing</h3>


//     //             <div class="card-body">
//     //               <p class="job-sub">Qualification</p>
//     //               <p>Any degree</p>

//     //               <p class="job-sub">Experience</p>
//     //               <p>1 Year / Fresher</p>

//     //               <p class="job-sub">Required Skills</p>
//     //               <ul>
//     //                 <li>
//     //                   To generate the leads by applying effective strategies
//     //                 </li>
//     //                 <li>
//     //                   To maintain effective relationship with the customers
//     //                 </li>
//     //                 <li>To be a good team player and self motivated</li>
//     //                 <li>To increase sales in routine base</li>
//     //               </ul>
//     //               <button className="btns btns-main">Read More</button>
//     //             </div>
//     //           </div>
//     //         </div>
//     //         <div className="col-md-4">
//     //           <div class="card">
//     //             <h3 class="card-header">Marketing</h3>

//     //             <div class="card-body">
//     //               <p class="job-sub">Qualification</p>
//     //               <p>Any degree</p>

//     //               <p class="job-sub">Experience</p>
//     //               <p>1 Year / Fresher</p>

//     //               <p class="job-sub">Required Skills</p>
//     //               <ul>
//     //                 <li>
//     //                   To generate the leads by applying effective strategies
//     //                 </li>
//     //                 <li>
//     //                   To maintain effective relationship with the customers
//     //                 </li>
//     //                 <li>To be a good team player and self motivated</li>
//     //                 <li>To increase sales in routine base</li>
//     //               </ul>
//     //               <button className="btns btns-main">Read More</button>
//     //             </div>
//     //           </div>
//     //         </div>
//     //         <div className="col-md-4">
//     //           <div class="card">
//     //             <h3 class="card-header">Marketing</h3>

//     //             <div class="card-body">
//     //               <p class="job-sub">Qualification</p>
//     //               <p>Any degree</p>

//     //               <p class="job-sub">Experience</p>
//     //               <p>1 Year / Fresher</p>


//     //               <p class="job-sub">Required Skills</p>
//     //               <ul>
//     //                 <li>
//     //                   To generate the leads by applying effective strategies
//     //                 </li>
//     //                 <li>
//     //                   To maintain effective relationship with the customers
//     //                 </li>
//     //                 <li>To be a good team player and self motivated</li>
//     //                 <li>To increase sales in routine base</li>
//     //               </ul>
//     //               <button className="btns btns-main">Read More</button>
//     //             </div>
//     //           </div>
//     //         </div>
//     //       </div>
//     //     </div>

//                   <p class="job-sub">Required Skills</p>
//                   <ul>
//                     <li>
//                       To generate the leads by applying effective strategies
//                     </li>
//                     <li>
//                       To maintain effective relationship with the customers
//                     </li>
//                     <li>To be a good team player and self motivated</li>
//                     <li>To increase sales in routine base</li>
//                   </ul>
//                   <button className="btns btns-main">Read More</button>
//                 </div>
//               </div>
//             </div> */}

//           </div>
//         </div>

//     //   </div>
//     // </div>


// <div className="container careerpage">
//   <div className=" row carhead">
//   <div className='col-md-6 smalliness'></div>
// <p className="col-md-6 car-heading">career</p>
//   </div>
//   <div className="row carhead1">
//     <div className="col-md-6 car-para1">From startups to Fortune 500s, WayUp offers the best internships and jobs.</div>
//     <div className="col-md-6 car-para">Easily apply to multiple jobs with one click! Quick Apply shows you recommended jobs based off your most recent search and allows you to apply to 25+ jobs in a matter of seconds!</div>
//   </div>
//   <div className="row car-box">
//   <div class="col-md-4 box">
//       <h2>Box 1</h2>
//       <p>Job Opportunity 1</p>
//     </div>
//     <div class="col-md-4 box">
//       <h2>Box 1</h2>
//       <p>Job Opportunity 1</p>
//     </div>
//     <div class="col-md-4 box">
//       <h2>Box 1</h2>
//       <p>Job Opportunity 1</p>
//     </div>
//     </div>
//     </div>

//   );
// };

// export default Career;

