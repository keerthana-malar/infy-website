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

