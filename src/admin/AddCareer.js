import { useEffect, useState } from "react";
import "../css/admin.css";
import Sidebars from "./sidebar";
import Alert from "react-bootstrap/Alert";
import axios from "axios";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

const AddCareer = () => {

  const modules = {
    toolbar: [
      [{ 'header': '1'}, { 'header': '2' }, { 'header': '3' }, { 'header': '4' }, 'bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }, ],
      ['undo', 'redo'], 
       [{ 'indent': '-1'}, { 'indent': '+1' }],
      ['clean'],
      [{ 'align': [] }],
      ['horizontal-line'],
    ],
  };


  const [values, setValues] = useState({
    title: "",
    status: "Active",
    qualification:"",
    experience:"",
    jd:"",
    intro:""
  });

  useEffect(() => {
    console.log("val",values)
  },[values])

  const [errors, setErrors] = useState("");
  const [show, setShow] = useState(false);
  const [showMsg, setShowMsg] = useState(false);

  const handleInput = (e) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: [e.target.value],
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.title === "" || values.degree === "" || values.content === "" || values.intro === "" || values.exp === "") {
      setErrors("Category Name Must Be Filled");
      setShow(true);
    } else {
      console.log(1)
      axios
        .post("https://infygain.in/api/addcar", values)
        .then((res) => {
          console.log("upd",res)
          setValues({ title: "", status: "Active" ,degree:"",
          exp:"",
          content:"",
          intro:""});
          document.querySelector(".form").reset()
          setErrors(res.data.res);
          setShowMsg(true);
        })
        .catch((err) => {
          console.log(err);
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

  return (
    <>
    <div className="adminMainBox">
      <div className="sideBarBox">
        <Sidebars />
      </div>
      <div className="mainContBox p-5">
        <h1 className="mb-5">Add Career</h1>
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
                  name="status"
                  onChange={handleInput}
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            </div>
            {/* Row 3  */}
            <div className="row mb-3">
              <div className="col">
              <input
                  className="form-control"
                  name="qualification"
                  placeholder="Qualification"
                  onChange={handleInput}
                ></input>
              </div>
              <div className="col">
                <input
                  className="form-control"
                  name="experience"
                  placeholder="Experience"
                  onChange={handleInput}
                ></input>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col">
              <textarea
                  className="form-control"
                  name="intro"
                  placeholder="Intro"
                  onChange={handleInput}
                ></textarea>
              </div>
              
              {/* <div className="col">
              <textarea
                  className="form-control"
                  name="jd"
                  placeholder="Job Description"
                  onChange={handleInput}
                ></textarea>
              </div> */}
            </div>

            <div className="row mb-3">
              <div className="col">
                <ReactQuill
                  theme="snow"
                  // value={values.jd}
                  onChange={(jd) =>
                  handleInput({
                    target: { name: "jd", value: jd },
                  })
                }
                placeholder={"Write something awesome..."}
                modules={modules}
                />

              {/* <ReactQuill
                  theme="snow"
                  value={values.content}
                  onChange={(content) =>
                  handleInput({
                    target: { name: "content", value: content },
                  })
                }
                placeholder={"Write something awesome..."}
                modules={modules}
              /> */}
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
export default AddCareer;
