import { useEffect, useState } from "react";
import "../css/admin.css";
import Sidebars from "./sidebar";
import Alert from "react-bootstrap/Alert";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditCareers = () => {
  const { id } = useParams();
  const [values, setValues] = useState({
    id: id,
    title: "",
    status: "Active",
    qualification:"",
    experience:"",
    jd:"",
    intro:""
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState("");
  const [show, setShow] = useState(false);
  const [showMsg, setShowMsg] = useState(false);

  useEffect(() => {
    axios
      .get("https://infygain.in/api/edit-career/"+ id)
      .then((res) => {
        const carData = res.data.result[0];
        console.log("cardata",carData)
        setValues({
          ...values,
          title: carData.title,
          status: carData.status,
          qualification: carData.degree,
          experience: carData.exp,
          jd: carData.content,
          intro: carData.intro,
        });
       
      })
      .catch((err) => {
      });
  }, [id]);
  

  const handleInput = (e) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: [e.target.value],
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.name === "") {
      setErrors("Category Name Must Be Filled");
      setShow(true);
    } else {
      axios
        .post("https://infygain.in/api/carupdate", values)
        .then((res) => {
          console.log(res)
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
  console.log("sam",values)
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
                  value={values.title}
                  onChange={handleInput}
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
                <textarea
                    className="form-control"
                    name="intro"
                    placeholder="Intro"
                    onChange={handleInput}
                    value={values.intro}
                  ></textarea>
                </div>
              <div className="col">
              <textarea
                  className="form-control"
                  name="jd"
                  placeholder="Job Description"
                  onChange={handleInput}
                  value={values.jd}
                ></textarea>
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
