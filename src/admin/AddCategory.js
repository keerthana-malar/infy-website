import { useState } from "react";
import "../css/admin.css";
import Sidebars from "./sidebar";
import Alert from "react-bootstrap/Alert";
import axios from "axios";

const AddCategory = () => {
  const [values, setValues] = useState({
    name: "",
    status: "Active",
  });


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
    if (values.name === "") {
      setErrors("Category Name Must Be Filled");
      setShow(true);
    } else {
      axios
        .post("https://infygain.in/api/cat", values)
        .then((res) => {
          setValues({ name: "", status: "Active" });
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
          <h1 className="mb-5">Add Category</h1>
          {alertBox()}
          {msgBox()}
          <div className="formBox">
            <form className="form" method="post" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col">
                  <input
                    className="form-control"
                    name="name"
                    placeholder="Category Name"
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
                <div className="col">
                  <button className="btn btn-success" type="submit">
                    Add
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddCategory;
