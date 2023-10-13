import { useEffect, useState } from "react";
import "../css/admin.css";
import Sidebars from "./sidebar";
import Alert from "react-bootstrap/Alert";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditCategory = () => {
  const { id } = useParams();
  const [values, setValues] = useState({
    id: id,
    name: "",
    status: "Active",
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState("");
  const [show, setShow] = useState(false);
  const [showMsg, setShowMsg] = useState(false);

  useEffect(() => {
    axios
      .get("https://infygain.in/api/editcat/"+ id)
      .then((res) => {
        const catData = res.data.result[0];
        setValues({
          ...values,
          name: catData.name,
          status: catData.status,
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
        .post("https://infygain.in/api/catupdate", values)
        .then((res) => {
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
          <h1 className="mb-5">Edit Category</h1>
          {alertBox()}
          {msgBox()}
          <div className="formBox">
            <form className="form" method="post" onSubmit={handleSubmit}>
              <input type="hidden" value={id}></input>
              <div className="row">
                <div className="col">
                  <input
                    className="form-control"
                    name="name"
                    placeholder="Category Name"
                    value={values.name}
                    onChange={handleInput}
                  ></input>
                </div>
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
                  <button className="btn btn-success" type="submit">
                    Update
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
export default EditCategory;
