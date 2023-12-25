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

const BusinessDetail = () => {
  const [categories, setCategories] = useState([]);
  const [errors, setErrors] = useState("");
  const [show, setShow] = useState(false);
  const [showMsg, setShowMsg] = useState(false);

  const modules = {
    
    toolbar: [
      // Define other toolbar options as needed
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{size: []}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, 
       {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image', 'video'],
      ['clean']
    ]
  };

  const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
  ];


  useEffect(() => {
    axios
      .get("https://infygain.com/api/catdata")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  const { id } = useParams();
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
  useEffect(() => {
    axios
      .get("https://infygain.com/api/editblog/" + id)
      .then((res) => {
        const blogData = res.data.result[0];
        setValues({
          ...values,
          id: blogData.id,
          title: blogData.title,
          category: blogData.category,
          quote: blogData.quote,
          content: blogData.content,
          metades: blogData.metades,
          metakey: blogData.metakey,
          img: blogData.img,
          status: blogData.status,
          intro:blogData.intro,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);



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
      <div className="mainContBox p-5">
        <h1 className="mb-5">Edit Blog</h1>
        {alertBox()}
        {msgBox()}
        <div className="formBox">
          
            <input name="id" type="hidden" value={values.id}></input>
            {/* Row 1  */}
            <div className="row mb-3">
              <div className="col">
                <input
                  className="form-control"
                  name="title"
                  placeholder="Title"
                  value={values.title}
                  onChange={handleInput}
                ></input>
              </div>
              <div className="col">
                <select
                  className="form-control catinput"
                  name="category"
                  onChange={handleInput}
                  value={values.category}
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.name}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {/* Row 2  */}
            <div className="row mb-3">
              <div className="col">
                <select
                  className="form-control"
                  name="status"
                  value={values.status}
                  onChange={handleInput}
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
              <div className="col">
                <input
                  className="form-control"
                  name="quote"
                  placeholder="Quote"
                  value={values.quote}
                  onChange={handleInput}
                ></input>
              </div>
            </div>
            {/* Row 3  */}
            <div className="row mb-3">
              <div className="col">
                <textarea
                  className="form-control"
                  name="metades"
                  placeholder="Meta Description"
                  value={values.metades}
                  onChange={handleInput}
                ></textarea>
              </div>
              <div className="col">
                  
                <textarea
                  className="form-control"
                  name="metakey"
                  placeholder="Meta Keyword"
                  value={values.metakey}
                  onChange={handleInput}
                ></textarea>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col">
                <textarea
                  className="form-control"
                  name="intro"
                  placeholder="intro"
                  value={values.intro}
                  onChange={handleInput}
                ></textarea>
              </div>
            </div>

  
           
                  
         
        </div>
      </div>
    </div>
  </>
  );
};
export default BusinessDetail;
