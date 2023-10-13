import "../css/enquiry.css";

function Enquiry() {
  return (
    <>
      <div className="mainenqbx">
        <div className="enqbx-head">
          <h5 className="mini-title main-color">CONTACT US</h5>
          <p className="home-about-ttle">We Always Here To Helps You</p>
        </div>
        <div className="enqbx-main">
          <div className="inn">
            <div className="short-abt">
              <div className="row">
                <div className="col-lg-5">
                  <div className="shortt-img">
                    <img className="img-fluid " src="./images/enquiry.webp"></img>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="enqbx2">
                  <form className="enqformm">
                    <div className="row box">
                      <div className="col-lg-6 form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your name *"
                          required
                        />
                      </div>
                      <div className="col-lg-6 form-group">
                        <input
                          type="phone"
                          className="form-control"
                          placeholder="Phone *"
                          required
                        />
                      </div>
                      <div className="col-lg-6 form-group">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email *"
                          required
                        />
                      </div>
                      <div className="col-lg-6 form-group">
                        <select
                          className="form-control"
                          name="category"
                          required
                        >
                          <option className="text-muted" value="nil">
                            Requirement Category
                          </option>
                          <optgroup label="IT Services">
                            <option value="Hardware">Hardware Issues</option>
                            <option value="Software">Software Problems</option>
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
                            <option value="Website">Website Development</option>
                            <option value="Hosting">Web Hosting</option>
                            <option value="Domain">Domain Registration</option>
                          </optgroup>
                        </select>
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Subject"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="textarea"
                          className="form-control"
                          placeholder="Your Message"
                          required
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
