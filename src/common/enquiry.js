import "../css/enquiry.css";
import { useState, useEffect } from "react";
import Alert from "react-bootstrap/Alert";
import axios from "axios";

function Enquiry() {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email:"",
    category: "",
    subject: "",
    message: ""
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
      axios
        .post("https://infygain.in/api/contact", values)
        .then((res) => {
            if(res.data.info){
                setValues({
                    name: "",
                    phone: "",
                    email:"",
                    category: "",
                    subject: "",
                    message: ""
                  });
                  document.querySelector(".form").reset()
                  setErrors(res.data.info);
                  setShowMsg(true);
            }
            else{
                setErrors(res.data.err);
                setShow(true);
            }
          
        })
        .catch((err) => {
          console.log(err);
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
      <div className="mainenqbx">
        <div className="enqbx-head">
          <h5 className="mini-title main-color">CONTACT US</h5>
          <p className="home-about-ttle">We Always Here To Helps You</p>
          <div className="container">
          {alertBox()}
          {msgBox()}
          </div>
        </div>
        <div className="enqbx-main">
          <div className="inn">
            <div className="short-abt">
              <div className="row">
                <div className="col-lg-5">
                  <div className="shortt-img">
                    <img className="img-fluid " src="/images/abt.webp"></img>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="enqbx2">
                    <form className="form enqformm" method='POST' onSubmit={handleSubmit}>
                      <div className="row box">
                        <div className="col-lg-6 form-group">
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Your name *"
                            required
                            onChange={handleInput}
                          />
                        </div>
                        <div className="col-lg-6 form-group">
                          <input
                            type="phone"
                            name="phone"
                            className="form-control"
                            placeholder="Phone *"
                            required
                            onChange={handleInput}
                          />
                        </div>
                        <div className="col-lg-6 form-group">
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Email *"
                            required
                            onChange={handleInput}
                          />
                        </div>
                        <div className="col-lg-6 form-group">
                          <select
                            className="form-control"
                            name="category"
                            required
                            onChange={handleInput}
                          >
                            <option className="text-muted" value="nil">
                              Requirement Category
                            </option>
                            <optgroup label="IT Services">
                              <option value="Hardware">Hardware Issues</option>
                              <option value="Software">
                                Software Problems
                              </option>
                              <option value="Network">
                                Network Troubleshooting
                              </option>
                            </optgroup>
                            <optgroup label="ISP Services">
                              <option value="Connection">
                                Connection Problems
                              </option>
                              <option value="Speed">Slow Internet Speed</option>
                            </optgroup>
                            <optgroup label="Web Services">
                              <option value="Website">
                                Website Development
                              </option>
                              <option value="Hosting">Web Hosting</option>
                              <option value="Domain">
                                Domain Registration
                              </option>
                            </optgroup>
                          </select>
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            name="subject"
                            className="form-control"
                            placeholder="Subject"
                            required
                            onChange={handleInput}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="textarea"
                            name="message"
                            className="form-control"
                            placeholder="Your Message"
                            required
                            onChange={handleInput}
                          />
                        </div>

                        <div className="send-enquiry">
                          <button className="btns send-enquiry">
                            Send Message &nbsp;
                            <span className="fa fa-arrow-right"></span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="maineqem"></div>
    </>
  );
}

export default Enquiry;
