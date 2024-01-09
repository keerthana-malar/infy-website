import { useState, useEffect } from "react";
import Alert from "react-bootstrap/Alert";
import "font-awesome/css/font-awesome.css";
import "../css/contact.css";
import axios from "axios";

function Contactform() {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    category: "",
    subject: "",
    message: "",
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
      .post("https://infygain.com/api/contact", values)
      .then((res) => {
        if (res.data.info) {
          setValues({
            name: "",
            phone: "",
            email: "",
            category: "",
            subject: "",
            message: "",
          });
          document.querySelector(".form").reset();
          setErrors(res.data.info);
          setShowMsg(true);
        } else {
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
      <div className="main container">
        <div className="row">
          <div className="col-md-6 form-details">
            <h className="medium-title ready">Ready to Get started ?</h>
            <br></br>
            <br></br>
            {alertBox()}
            {msgBox()}
            <p className="text-muted">
              You may simply complete the form below and click ‘send’ to submit
              an enquiry. Our customer service team will get in touch with you
              within 3 business days.
            </p>
            <form className="form" method="POST" onSubmit={handleSubmit}>
              <div className="row box">
                <div className="col-md-6 form-group">
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="Your name *"
                    onChange={handleInput}
                    required
                  />
                </div>
                <div className="col-md-6 form-group">
                  <input
                    name="phone"
                    type="phone"
                    className="form-control"
                    placeholder="Phone *"
                    onChange={handleInput}
                    required
                  />
                </div>
                <div className="col-md-6 form-group">
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="Email *"
                    onChange={handleInput}
                    required
                  />
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="category" hidden>
                    Requirement Category
                  </label>
                  <select
                    id="category"
                    className="form-control"
                    name="category"
                    required
                    onChange={handleInput}
                  >
                    <option className="text-muted" value="nil">
                      Select a Requirement Category
                    </option>
                    <optgroup label="IT Services">
                      <option value="Hardware Issues">Hardware Issues</option>
                      <option value="Software Problems">
                        Software Problems
                      </option>
                      <option value="Network Troubleshooting">
                        Network Troubleshooting
                      </option>
                    </optgroup>
                    <optgroup label="ISP Services">
                      <option value="Connection Problems">
                        Connection Problems
                      </option>
                      <option value="Slow Internet Speed">
                        Slow Internet Speed
                      </option>
                    </optgroup>
                    <optgroup label="Web Services">
                      <option value="Website Development">
                        Website Development
                      </option>
                      <option value="Web Hosting">Web Hosting</option>
                      <option value="Domain Registration">
                        Domain Registration
                      </option>
                    </optgroup>
                  </select>
                </div>
                <div className="form-group">
                  <input
                    name="subject"
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                    required
                    onChange={handleInput}
                  />
                </div>
                <div className=" form-group">
                  <input
                    name="message"
                    type="textarea"
                    className="form-control"
                    placeholder="Your Message"
                    required
                    onChange={handleInput}
                  />
                </div>
              </div>
              <button className="btns send">
                Send Message &nbsp;<span className="fa fa-arrow-right"></span>
              </button>
            </form>
          </div>
          <div className="col-md-6 map">
            {" "}
            <iframe
              className="
                infymap"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.7810369745266!2d76.99267347504593!3d11.055036689111168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8fb6fed9cc5d5%3A0xdf0b5bd38b8e7b7c!2sInfygain%20Technologies%20-%20Best%20computer%2C%20laptop%20and%20networking%20services!5e0!3m2!1sen!2sin!4v1694516298402!5m2!1sen!2sin"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contactform;
