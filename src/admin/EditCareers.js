import { useEffect, useState } from "react";
import "../css/admin.css";
import Sidebars from "./sidebar";
import Alert from "react-bootstrap/Alert";
import axios from "axios";
import {useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';


const EditCareers = () => {

  
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
    'header','header',  'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
  ];

  const { id } = useParams();
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

  const [errors, setErrors] = useState("");
  const [show, setShow] = useState(false);
  const [showMsg, setShowMsg] = useState(false);

  useEffect(() => {
    axios
      .get("https://infygain.com/api/edit-career/"+ id)
      .then((res) => {
        const carData = res.data.result[0];

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
      });
  }, [id]);


  console.log("val",values)

  const handleInput = (e) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.title === "") {
      setErrors("Career Name Must Be Filled");
      setShow(true);
    }
    else if(!parseInt(values.openings)){
      console.log(values.openings)
      setErrors("No of openings must be in numbers");
      setShow(true);
    }
    
    else {
      axios
        .post("https://infygain.com/api/carupdate", values)
        .then((res) => {
          // console.log("check",res.data)
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
          <h1 className="mb-5">Edit Career</h1>
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
                  value={values.title}
                 
                ></input>
              </div>
              <div className="col">
                <select
                  className="form-control"
                  name="status"
                  onChange={handleInput}
                  value={values.status}
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
                  value={values.qualification}
                ></input>
              </div>
              <div className="col">
                <input
                  className="form-control"
                  name="experience"
                  placeholder="Experience"
                  onChange={handleInput}
                  value={values.experience}
                ></input>
              </div>
            
            </div>

            <div className="row mb-3">
            <div className="col">
              <input
                  className="form-control"
                  name="openings"
                  value={values.openings}
                  placeholder="No.of.openings"
                  onChange={handleInput}
                />
                </div>
             
              <div className="col">
              <input
                  className="form-control"
                  name="intro"
                  value={values.intro}
                  placeholder="Intro"
                  onChange={handleInput}
                ></input>
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
              <input
                  className="form-control"
                  name="shift"
                  value={values.shift}
                  placeholder="shift"
                  onChange={handleInput}
                />
                </div>
              <div className="col">
              <input
                  className="form-control"
                  name="jobtype"
                  value={values.jobtype}
                  placeholder="jobtype"
                  onChange={handleInput}
                ></input>
              </div>

            </div>


            <div className="row mb-3">
            <div className="col">
              <input
                  className="form-control"
                  name="benefit"
                  value={values.benefit}
                  placeholder="benefit"
                  onChange={handleInput}
                />
                </div>
              <div className="col">
              <input
                  className="form-control"
                  name="paytype"
                  value={values.paytype}
                  placeholder="paytype"
                  onChange={handleInput}
                ></input>
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
                  value={values.roles.toString()}
                  onChange={(roles) =>
                  handleInput({
                    target: { name: "roles", value: roles },
                  })
                }
                placeholder={"Roles..."}
                modules={modules}
                formats={formats}
                />
              </div>
              
            </div>
            <div className="row mb-3">
            <div className="col">
                <ReactQuill
                  theme="snow"
                  value={values.skill.toString()}
                  onChange={(skill) =>
                  handleInput({
                    target: { name: "skill", value: skill },
                  })
                }
                placeholder={"Skills..."}
                modules={modules}
                formats={formats}
                />
              </div>
              
            </div>

            <div className="row mb-3">
              <div className="col">
                <ReactQuill
                  theme="snow"
                  value={values.jd.toString()}
                  onChange={(jd) =>
                  handleInput({
                    target: { name: "jd", value: jd },
                  })
                }
                placeholder={"Write something awesome..."}
                modules={modules}
                  formats={formats}
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
                Update
              </button>
            </div>
          </form>
        </div>
        </div>
      </div>
    </>
  );
};
export default EditCareers;
