import { useEffect, useState } from "react";
import React from "react";
import "../css/admin.css";
import Sidebars from "./sidebar";
import Alert from "react-bootstrap/Alert";
import axios from "axios";
import { useParams } from "react-router-dom";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import 'froala-editor/js/froala_editor.pkgd.min.js';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const WorkDetail = () => {
  const [categories, setCategories] = useState([]);
  const [errors, setErrors] = useState("");
  const [show, setShow] = useState(false);
  const [showMsg, setShowMsg] = useState(false);


  const { id } = useParams();
  useEffect(() => {
    axios
      .get("https://infygain.com/api/partnerdata/"+ id)
      .then((res) => {
        setCategories( res.data.result[0]);
        console.log(categories)
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, [id]);

  const [values, setValues] = useState({
    id: "",
    title: "",
    category: "",
    quote: "",
    metades: "",
    metakey: "",
    content: "",
    img: "",
    status: "Active",
    intro: "",
  });




  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };
  const handleInput = (e) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
      const formData = new FormData();
      formData.append("id", values.id);
      formData.append("file", file);
      formData.append("title", values.title);
      formData.append("category", values.category);
      formData.append("quote", values.quote);
      formData.append("metades", values.metades);
      formData.append("metakey", values.metakey);
      formData.append("content", values.content);
      formData.append("status", values.status);
      formData.append("intro", values.intro);

      axios
        .post("https://infygain.com/api/updateblog", formData)
        .then((res) => {
          document.querySelector(".form").reset();
          setErrors("Blog Updated Successfully 😊😊");
          setShowMsg(true);
        })
        .catch((err) => {
          setErrors("Something Wrong Pls Try again Later 😥");
          setShow(true);
        });
    
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



  return (
    <>
      <div className="adminMainBox">
        <div className="sideBarBox">
          <Sidebars />
        </div>
        <div className="mainContBox p-5 ">

          {/* <div className="container">
            <div className="row mb-3">
              <div className="col">
                <h4>Name : <span>{categories.name}</span></h4>
              </div>
              <div className="col">
                <h4>Email:<span>{categories.email}</span></h4>
              </div>
            </div>
            <div className="row mb-3">
           
              <div className="col">
                <h4>Number: <span>{categories.phno}</span></h4>
              </div>
              <div className="col">
                <h4>Date Of Birth: <span>{categories.date}</span></h4>
              </div>
            </div>
            <div className="row mb-3">
            
              <div className="col">
                <h4>Position: <span>{categories.position}</span></h4>
              </div>
              <div className="col">
                <h4>City: <span>{categories.city}</span></h4>
              </div>
            </div>

            <div className="row mb-3">
             
              <div className="col">
                <h4>Company:<span>{categories.company}</span></h4>
              </div>
              <div className="col">
                <h4>Reason For Leaving :<span>{categories.resonforleave}</span></h4>
              </div>
            </div>
  
            <div className="row mb-3">
              <div className="col">
                <h4>Chooseus: <span>{categories.chooseus}</span></h4>
              </div>
              <div className="col">
                <h4>Work Experience : <span>{categories.workexp}</span></h4>
              </div>
            
             
            </div>
            
            <div className="row mb-3">
            <div className="col">
                <h4>Reach Us : <span>{categories.reachus}</span></h4>
              </div>
            </div>


          </div> */}

          
        <div className="container">
        <h1 className="mb-5">Partner Details</h1>
            <div className="row mb-3">
              <div className="col">
                <h4>Name : <span className="partner-value">{categories.name}</span></h4>
              </div>
            </div>
            
            <div className="row mb-3">
              <div className="col">
                <h4>Email : <span  className="partner-value">{categories.email}</span></h4>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <h4>Number : <span  className="partner-value">{categories.phno}</span></h4>
              </div>
            </div>
            
            <div className="row mb-3">
              <div className="col">
                <h4>Date Of Birth : <span  className="partner-value">{categories.date}</span></h4>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <h4>City: <span  className="partner-value">{categories.city}</span></h4>
              </div>
            </div>
            
            <div className="row mb-3">
              <div className="col">
                <h4>Choose Us : <span  className="partner-value">{categories.chooseus}</span></h4>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <h4>Position : <span  className="partner-value">{categories.position}</span></h4>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <h4>Company: <span  className="partner-value">{categories.company}</span></h4>
              </div>
            </div>
            
            <div className="row mb-3">
              <div className="col">
                <h4>Reason For Leaving : <span  className="partner-value">{categories.resonforleave}</span></h4>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <h4>Work Experience : <span  className="partner-value">{categories.workexp}</span></h4>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <h4>Reach Us: <span  className="partner-value"> {categories.reachus}</span></h4>
              </div>
            </div>
            


          </div>
        </div>
      </div>
    </>
  );
};
export default WorkDetail;
