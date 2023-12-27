import { useState } from "react";
import "../css/admin.css";
import Sidebars from "./sidebar";
import Alert from "react-bootstrap/Alert";
import axios from "axios";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

const AddCareer = () => {

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

  const [values, setValues] = useState({
    title: "",
    status: "Active",
    qualification:"",
    experience:"",
    jd:"",
    shift:"",
    jobtypepe:"",
    benefit:"",
    paytype:"",
    roles:"",
    skill:"",
    intro:"",
    openings:""
  });



  const [errors, setErrors] = useState("");
  const [show, setShow] = useState(false);
  const [showMsg, setShowMsg] = useState(false);

  const handleInput = (e) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.title === "" || values.degree === "" || values.content === "" || values.intro === "" || values.exp === "" || values.openings === "") {
      setErrors("All fields Must Be Filled");
      setShow(true);
    }
    else if(!parseInt(values.openings[0])){
      console.log(values.openings[0])
      setErrors("No of openings must be in numbers");
      setShow(true);
    }
    else {
      axios
        .post("https://infygain.com/api/addcar", values)
        .then((res) => {
          setValues({
            title: "",
            status: "Active",
            qualification:"",
            experience:"",
            jd:"",
            shift:"",
            jobtypepe:"",
            benefit:"",
            paytype:"",
            roles:"",
            skill:"",
            intro:"",
            openings:""
          });
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
  // console.log(!parseInt(values.openings[0]))
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
              <input
                  className="form-control"
                  name="openings"
                  placeholder="No.of.openings"
                  onChange={handleInput}
                />
                </div>
              <div className="col">
              <input
                  className="form-control"
                  name="intro"
                  placeholder="Salary"
                  onChange={handleInput}
                ></input>
              </div>
       
            </div>
            <div className="row mb-3">
            <div className="col">
              <input
                  className="form-control"
                  name="shift"
                  placeholder="shift"
                  onChange={handleInput}
                />
                </div>
              <div className="col">
              <input
                  className="form-control"
                  name="jobtype"
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
                  placeholder="benefit"
                  onChange={handleInput}
                />
                </div>
              <div className="col">
              <input
                  className="form-control"
                  name="paytype"
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
                  // value={values.jd}
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
                  // value={values.jd}
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
                  // value={values.jd}
                  onChange={(jd) =>
                  handleInput({
                    target: { name: "jd", value: jd },
                  })
                }
                placeholder={"Job Description..."}
                modules={modules}
                formats={formats}
                />
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
