import React from "react";
import { Link, useParams } from "react-router-dom";
import "../css/Career.css";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import CarrerBaner from "./CarrerBanner";
import CareerForm from "./CareerForm";
import Footer from "../common/footer";
import Header from '../common/header';

const CareerDetails = () => {

  const { id } = useParams();
  const [data, setData] = useState({
    id: "",
    title: "",
    status: "Active",
    qualification:"",
    experience:"",
    jd:"",
    intro:""
  });
  useEffect(() => {
    axios
    .get("https://infygain.in/api/edit-career/"+id)
    .then((res) => {
     const dataa=  res.data.result[0]
     setData({
        ...data,
        id: dataa.id,
        title:dataa.title,
        status: dataa.status,
        qualification:dataa.degree,
        experience:dataa.exp,
        jd:dataa.jdcontent,
        intro:dataa.intro
      });
      console.log('car',dataa)
      // setCarData({
      //   title: dataa.title,
      //   status: "Active",
      //   qualification:dataa.degree,
      //   experience:"",
      //   jd:"",
      //   intro:""
      // })
      // console.log(carData)
    })
    .catch((err) => {
      console.log(err);
    });
  },[id])
  console.log("d",data)
  return (
    <>
    <Header/>
    <CarrerBaner />

    <div className="container">
      <div className=" row job-head">
        <span>Job Description</span>
        <div className="container">
          <div className="row">

              <div className="col-md-12">
              <div class="card">
                <h3 class="card-header">{data.title}</h3>

                <div class="card-body">
                  <p class="job-sub">Qualification</p>
                  <p>{data.qualification}</p>

                  <p class="job-sub">Experience</p>
                  <p>{data.experience}</p>

                  <p class="job-sub">Job Description</p>
                  <ul dangerouslySetInnerHTML={{__html: data.jd }}>
                    {/* {data.jd} */}
                    {/* <li>
                      To generate the leads by applying effective strategies
                    </li>
                    <li>
                      To maintain effective relationship with the customers
                    </li>
                    <li>To be a good team player and self motivated</li>
                    <li>To increase sales in routine base</li> */}
                  </ul>
                  <button className="btns btns-main">Read More</button>
                </div>
              </div>
            </div>
            {
            //   data.map((data) => (
            //     <div className="col-md-4">
            //     <div class="card">
            //       <h3 class="card-header">{data.title}</h3>
  
            //       <div class="card-body">
            //         <p class="job-sub">Qualification</p>
            //         <p>{data.degree}</p>
  
            //         <p class="job-sub">Experience</p>
            //         <p>{data.exp}</p>
  
            //         <p class="job-sub">Required Skills</p>
            //         <ul>
            //           {/* <li>{data.content}</li> */}
            //           <li>
            //             To generate the leads by applying effective strategies
            //           </li>
            //           <li>
            //             To maintain effective relationship with the customers
            //           </li>
            //           <li>To be a good team player and self motivated</li>
            //           <li>To increase sales in routine base</li>
            //         </ul>
            //         <button className="btns btns-main">Read More</button>
            //       </div>
            //     </div>
            //     </div>
            //   ))
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

    <CareerForm />
    <Footer />
    
    </>
  );
};

export default CareerDetails;
