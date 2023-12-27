import React, { useState, useEffect } from "react";
import "../css/admin.css";
import Sidebars from "./sidebar";
import Alert from "react-bootstrap/Alert";
import axios from "axios";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Quill styles


const AddBlog = () => {
  const [categories, setCategories] = useState([]);
  const [errors, setErrors] = useState("");
  const [show, setShow] = useState(false);
  const [showMsg, setShowMsg] = useState(false);



  // ! Get Category Data
  useEffect(() => {
    axios
      .get("https://infygain.com/api/catdata")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((error) => {});
  }, []);

  // ! For Data State
  const [values, setValues] = useState({
    title: "",
    category: "Other",
    quote: "",
    metades: "",
    metakey: "",
    content: "",
    img: "",
    status: "Active",
    intro:"",
  });







  const handleInput = (e) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (values.title === "") {
      setErrors("Title Must Be Filled 🤔");
      setShow(true);
    }
    else if(values.intro[0].length > 125){
      setErrors("Intro should be max 125 char's");
      setShow(true);
    }
     else {
      const formData = new FormData();
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
        .post("https://infygain.com/api/addblog", formData)
        .then((res) => {
          document.querySelector(".form").reset();
          setErrors("Blog Added Successfully 😊😊");
          setShowMsg(true);
          setValues({
            title: "",
            category: "Other",
            quote: "",
            metades: "",
            metakey: "",
            content: "",
            img: "",
            status: "Active",
            intro:"",
          })
        })
        .catch((err) => {
          console.log("helloooo" + err);
          setErrors("Something Wrong Pls Try again Later 😥");
          // setErrors(err);
          setShow(true);
        });
    }
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
  const modules = {
    
    toolbar: [
      // Define other toolbar options as needed
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [ { 'header': [ 3, 4, 5, 6] },],
      [{size: []}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, 
       {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image', 'video'],
      ['clean']
    ]
  };


  const formats = [
    'header','header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
  ];


  return (
    <>
      <div className="adminMainBox">
        <div className="sideBarBox">
          <Sidebars />
        </div>
        <div className="mainContBox p-5">
          <h1 className="mb-5">Add Blog</h1>
          {alertBox()}
          {msgBox()}

          <div className="formBox">
            <form className="form" method="post" onSubmit={handleSubmit}>
              {/* Row 1  */}
              <div className="row mb-3">
                <div className="col">
                  <input
                    className="form-control"
                    name="title"
                    placeholder="Title"
                    onChange={handleInput}
                  ></input>
                </div>
                <div className="col">
                  <select
                    className="form-control"
                    name="category"
                    onChange={handleInput}
                  >
                    <option value={"Other"}>Other</option>
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
                    onChange={handleInput}
                  ></textarea>
                </div>
                <div className="col">
                  <textarea
                    className="form-control"
                    name="metakey"
                    placeholder="Meta Keyword"
                    onChange={handleInput}
                  ></textarea>
                </div>
              </div>
              {/* 5 */}
              <div className="row mb-3">
                <div className="col">
                  <textarea
                    className="form-control"
                    name="intro"
                    placeholder="intro"
                    onChange={handleInput}
                  ></textarea>
                </div>
              </div>

              {/* Row 4 */}
              <div className="row mb-3">
                <div className="col">
                  {/* <FroalaEditor
                    tag="textarea"
                    name="content"
                    value={values.content}
                    onModelChange={(content) =>
                      handleInput({
                        target: { name: "content", value: content },
                      })
                    }
                  /> */}
                     <ReactQuill
                    theme="snow"
                    value={values.content}
                   onChange={(content) =>
                   handleInput({
                    target: { name: "content", value: content },
                 })
                }
                  placeholder={"Write something awesome..."}
                  modules={modules}
                  formats={formats}
              />
                  
                </div>
              </div>
              {/* Row 5 */}
              <div className="row mb-3">
                <div className="col">
                  <input
                    type="file"
                    name="img"
                    className="form-group"
                    onChange={(e) => {
                      handleInput(e);
                      handleFileChange(e);
                    }}
                  ></input>
                </div>
              </div>
              <div className="col">
                <button className="btn btn-success" type="submit">
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddBlog;
