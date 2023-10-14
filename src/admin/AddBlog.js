import { useState, useEffect } from "react";
import "../css/admin.css";
import Sidebars from "./sidebar";
import Alert from "react-bootstrap/Alert";
import axios from "axios";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import FroalaEditor from "react-froala-wysiwyg";

const AddBlog = () => {
  const [categories, setCategories] = useState([]);
  const [errors, setErrors] = useState("");
  const [show, setShow] = useState(false);
  const [showMsg, setShowMsg] = useState(false);

  // ! Get Category Data
  useEffect(() => {
    axios
      .get("https://infygain.in/api/catdata")
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
    } else {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("title", values.title);
      formData.append("category", values.category);
      formData.append("quote", values.quote);
      formData.append("metades", values.metades);
      formData.append("metakey", values.metakey);
      formData.append("content", values.content);
      formData.append("status", values.status);

      axios
        .post("https://infygain.in/api/addblog", formData)
        .then((res) => {
          document.querySelector(".form").reset();
          setErrors("Blog Added Successfully 😊😊");
          setShowMsg(true);
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

              {/* Row 4 */}
              <div className="row mb-3">
                <div className="col">
                  <FroalaEditor
                    tag="textarea"
                    name="content"
                    value={values.content}
                    onModelChange={(content) =>
                      handleInput({
                        target: { name: "content", value: content },
                      })
                    }
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
