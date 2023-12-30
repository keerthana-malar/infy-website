import React, { useEffect, useState } from "react";
import PartnerBanner from "./PartnerBanner";
import Footer from "../common/footer";
import Header from "../common/header";
import "../css/Partner.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Carousel from "../about/carousel";
import Link from "antd/es/typography/Link";
import { Modal } from "antd";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Alert } from "react-bootstrap";
import { subYears } from "date-fns";
const NewPartner = () => {

  const districtOptions = [
    "Ariyalur",
    "Chengalpattu",
    "Chennai",
    "Coimbatore",
    "Cuddalore",
    "Dharmapuri",
    "Dindigul",
    "Erode",
    "Kallakurichi",
    "Kanchipuram",
    "Kanyakumari",
    "Karur",
    "Krishnagiri",
    "Madurai",
    "Nagapattinam",
    "Namakkal",
    "Nilgiris",
    "Perambalur",
    "Pudukkottai",
    "Ramanathapuram",
    "Ranipet",
    "Salem",
    "Sivaganga",
    "Tenkasi",
    "Thanjavur",
    "Theni",
    "Thoothukudi",
    "Tiruchirappalli",
    "Tirunelveli",
    "Tirupathur",
    "Tiruppur",
    "Tiruvallur",
    "Tiruvannamalai",
    "Tiruvarur",
    "Vellore",
    "Viluppuram",
    "Virudhunagar",
    // Add more district names as needed
  ];

  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);

  const handleRadioChange = (e) => {

    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setSelectedOption(e.target.value);
  };
  const handleRadioChange2 = (e) => {

    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setSelectedOption2(e.target.value);
  };
  const handleRadioChange1 = (e) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setSelectedOption1(e.target.value);
  };

  // const [showModal, setShowModal] = useState(false);
  const [open, setOpen] = useState(false);

  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phno, setPhno] = useState("");
  const [position, setPosition] = useState("");
  const [resume, setResume] = useState("");
  const [data, setData] = useState([]);
  const [fd, setFd] = useState("");
  const [errors, setErrors] = useState("");
  const [show, setShow] = useState(false);
  const [showMsg, setShowMsg] = useState(false);
  const [file, setFile] = useState(null);
  const [values, setValues] = useState({
    name: "",
    email: "",
    dob: "",
    phno: "",
    city: "",
    category: "",
    position: "",
    company: "",
    reasonForLeaving: "",
    businessname: "",
    businessexp: "",
    Business: "",
    selfintro: "",
    chooseus: "",
    Reach: ""
  });

  const handleInput = (e) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };


  const handleInput1 = (date) => {
    console.log(date)
    if (date instanceof Date) {
      // Extract day, month, and year components
      const day = date.getDate();
      const month = date.getMonth() + 1; // Month is zero-indexed, so adding 1 to match the actual month number
      const year = date.getFullYear();

      // Create the desired format ('21-12-2023')
      const formattedDate = `${day < 10 ? '0' : ''}${day}-${month < 10 ? '0' : ''}${month}-${year}`;

      setValues((prev) => ({
        ...prev,
        dob: formattedDate,
      }));
    }
  };
  const showModal = () => {
    console.log("hii");
    setOpen(true);
  };
  const handleOk = () => {
    setLoading(true);
    setFd({
      name,
      email,
      phno,
      position,
      resume,
    });
    setLoading(false);
    setOpen(false);
    setName("");
    setEmail("");
    setPhno("");
    setPosition("");
    setResume("");
  };

  const handleCancel = () => {
    setOpen(false);
    setName("");
    setEmail("");
    setPhno("");
    setPosition("");
    setResume("");
  };
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    setValues(prev => ({
      ...prev,
      position: "",
      company: "",
      reasonForLeaving: "",
      businessname: "",
      businessexp: "",
      Business: "",
    }));
  }, [values.category]);


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values)
    axios
      .post("https://infygain.com/api/partner", values)
      .then((res) => {
        var re = document.querySelectorAll(".careerForm");
        re.forEach((r) => {
          r.reset()
        })
        setErrors("Submited Successfully 😊😊");
        setShowMsg(true)

        //   setErrors("Blog Added Successfully 😊😊");
        //   setShowMsg(true);
        setOpen(false);

        setValues({
          name: "",
          email: "",
          dob: "",
          phno: "",
          city: "",
          category: "",
          position: "",
          company: "",
          reasonForLeaving: "",
          businessname: "",
          businessexp: "",
          Business: "",
          selfintro: "",
          chooseus: "",
          Reach: ""
        });
        setSelectedOption(null)
        setSelectedOption1(null)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // Inside your component function
  const [selectedReachOption, setSelectedReachOption] = useState(null);

  const handleReachChange = (e) => {
    setSelectedReachOption(e.target.value);
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
      <div className="webservice">
        <Header />
        <PartnerBanner />

        <div className="container  mt-3 mb-4">
          <div className="row partners-1  mt-3 mb-4">
            <div className="col-md-8 col-lg-8 marketing partner-col1">
              <div className="redline"></div>
              <div className="partnerrow">
                <h1>Infygain Technologies Offers Partners Program</h1>
                <div className="paraqueen">
                  <p>
                    Partners are expected to be reliable and dependable,
                    creating a foundation of trust in the relationship. Partners
                    provide emotional, practical, and moral support during
                    challenging times and in achieving common goals.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 slidepointimgbox">
              <img
                src="/images/infyboy-red-globe.svg"
                alt="best partners"
                className="slidepointimg partner-imgs"
              />
            </div>
          </div>

          <div className=" row mt-3 mb-4">
            <div
              className="col-md-4 col-lg-4 slidepointimgbox partner-col1"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <img
                src="/images/infy-boy-redd.webp"
                alt="best partners"
                className="slidepointimg-1 partner-imgs"
              />
            </div>
            <div
              className="col-md-8 col-lg-8 marketing1"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <p>
                ITConnects is an exclusive brand and innovative venture by
                Infygain Technologies to welcome aspiring entrepreneurs and
                investors to collaborate with us through a dynamic franchise
                model. Together, we can harness our experience and expertise for
                mutual growth and success in the area of Sales and Services of
                IoT products.
              </p>
            </div>
          </div>

          <div className=" partner-bottom row mt-3  mb-4">
            <div
              className="col-md-8 col-lg-8 marketing1 "
              data-aos="fade-right"
              data-aos-duration="1000"
              id="column2"
            >
              <h2>Who we are and What we do?</h2>
              <p className="parabullet">
                Infygain Technologies with a decade of experience, our ISO
                9001:2015 and GeM authorization establish us as a trusted IT
                brand in Coimbatore in the area of Sales and Services of IoT
                products. We specialize in building IT Infrastructure for
                Institutes and Industries, boasting a strong vendor network with
                over 100 top brands. Our experienced team excels in various IT
                skills, enabling us to drive Digital Transformation affordably.
                We pride ourselves on customer success stories, geographic
                reach, industry partnerships, and staying at the forefront of
                technology trends. Committed to quality and innovation, we look
                ahead to a future of expanding services and embracing emerging
                technologies.
              </p>
            </div>
            <div
              className="col-md-4 col-lg-4 slidepointimgbox partner-col1"
              data-aos="fade-left"
              data-aos-duration="1000"
              id="column1"
            >
              <img
                src="/images/bestpartner.webp"
                alt="best partners"
                className="slidepointimg-1 partner-imgs"
              />
            </div>
          </div>

          <Carousel />

          <div className=" partner-top row mt-3  mb-4">
            <div
              className="col-md-4 col-lg-4 slidepointimgbox partner-col1"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <img
                src="/images/success-partner.webp"
                alt="best partners"
                className="slidepointimg-1 partner-imgs"
              />
            </div>

            <div
              className="col-md-8 col-lg-8 marketing2"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <h2 className="itfieldtitle">Why to Invest in IT Field?</h2>
              <p className="parapiquename">
                Investing in the IT field is lucrative due to constant
                innovation and technological advancements. The sector offers
                global reach and scalability, allowing companies to tap into a
                wide audience and expand their market share
              </p>
            </div>
          </div>

          <div className=" row mt-3  mb-4">
            <div
              className="col-md-8 col-lg-8 marketing1 "
              id="column2"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <p className="parabullet">
                IT business in India is projected to total $124.6 billion in
                2024, an increase of 10.7% from 2023, according to the latest
                forecast by Gartner, Inc. with expansions in the key areas like
                digital transformation, cloud computing, cybersecurity, and
                artificial intelligence.
              </p>
              <p className="parabullet">
                With consistent high growth rates, the IT industry meets the
                increasing demand for services, software, and hardware. IT
                solutions contribute to cost efficiency and automation, making
                them attractive to businesses seeking operational improvements.
                Digital transformation initiatives across industries provide
                growth opportunities for IT companies. The sector's focus on
                emerging technologies, such as IoT and 5G, offers early-mover
                advantages.
              </p>
            </div>

            <div
              className="col-md-4 col-lg-4 slidepointimgbox partner-col1"
              id="column1"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <img
                src="https://img.freepik.com/free-photo/businessman-touching-tip-bar-chart_1232-898.jpg?w=900&t=st=1703309141~exp=1703309741~hmac=2f440897be3b54b34a52f7178b410d171204cd32f5a86bf3dc81b7f2376c7e7b"
                alt="best partners"
                className="slidepointimg-1 partner-imgs"
              />
            </div>
          </div>

          <div className="applynow mt-3 mb-3">
            <Link
              to="/about"
              className="btns links text-light"
              onClick={showModal}
            >
              apply now &nbsp; <span className="fa fa-arrow-right"></span>
            </Link>


          </div>
          {msgBox()}
          {/* form modal */}
          <Modal
            footer={null}
            open={open}
            onOk={() => {
              handleOk();
            }}
            onCancel={handleCancel}
            centered
          >
            <div className="container form-head">
              <h3>Partnership Application Form</h3>
              <form className="careerForm" onSubmit={handleSubmit}>
                {/* <div className='row'>
                                  <div className='col-6'>
                                    <input type='text' name='name' placeholder='Enter your name '  onChange={handleInput} required/>
                                  </div>
                                  <div className='col-'>
                                    <input type='text' name='name' placeholder='Enter your name '  onChange={handleInput} required/>
                                  </div>
                                </div> */}
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name *"
                  onChange={handleInput}
                  required
                />

                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email *"
                  onChange={handleInput}
                  required
                />

                {/* <input
                  type="date"
                  name="dob"
                  placeholder="Enter your DOB"
                  onChange={handleInput}
                  required
                /> */}
                {/* Replace the existing date input */}
                <DatePicker
                  placeholderText="Enter your DOB *"
                  selected={values.dob}
                  onChange={(date) => handleInput({ target: { name: "dob", value: date } })}
                  dateFormat="dd-MM-yyyy"
                  showYearDropdown
                  showMonthDropdown
                  yearDropdownItemNumber={100}
                  scrollableYearDropdown
                  maxDate={subYears(new Date(), 0)} // Set the maximum allowed date (1 year ago from the current date)
                  style={{ border: "2px solid red" }}
                  required
                  className="dob-input"
                />

                <input
                  type="text"
                  name="phno"
                  placeholder="Enter your phone number *"
                  onChange={handleInput}
                  maxLength={10} 
                  required
                />

                <div className="form-input">
                  <select name="city" onChange={handleInput} required>
                    <option>Please select your city *</option>
                    {/* Map through the districtOptions array to generate options */}
                    {districtOptions.map((district, index) => (
                      <option key={index}>{district}</option>
                    ))}

                  </select>
                </div>

                <div className="form-input">
                  <h5>Please Select that apply<span className=""> *</span></h5>
                  <label>
                    <input
                      type="radio"
                      name="category"
                      value="Work"
                      checked={selectedOption === "Work"}
                      onChange={handleRadioChange}
                      required
                    />
                    &nbsp;<span className="texttform">Work</span>&nbsp;
                  </label>

                  <label>
                    <input
                      type="radio"
                      name="category"
                      value="Business"
                      checked={selectedOption === "Business"}
                      onChange={handleRadioChange}
                      required
                    />
                    &nbsp;<span className="texttform">Business</span>
                  </label>

                  {/* Show relevant questions based on the selected radio button */}
                  {selectedOption === "Work" && (
                    <>
                      <input
                        type="text"
                        name="position"
                        onChange={handleInput}
                        placeholder="Enter your position"

                      />

                      {/* Add more relevant questions for work */}
                      {/* <label>Company:</label> */}
                      <input
                        type="text"
                        name="company"
                        onChange={handleInput}
                        placeholder="Enter your company"

                      />
                      <input
                        name="selfintro"
                        onChange={handleInput}
                        placeholder="About your work experience"

                      />
                      {/* ... (other relevant questions for work) */}

                      {/* <label>Date of Employment:</label> */}
                      {/* <input
                        type="date"
                        name="dateOfEmployment"
                        placeholder="Enter your dateOfEmployment"
                        onChange={handleInput}
                        required
                      /> */}

                      {/* <label>Reason for Leaving:</label> */}
                      <textarea
                        name="reasonForLeaving"
                        onChange={handleInput}
                        placeholder="Enter your reason for leaving"

                      />
                    </>
                  )}

                  {selectedOption === "Business" && (
                    <>
                      {/* <label>Trading Name:</label> */}
                      <input
                        type="text"
                        name="businessname"
                        onChange={handleInput}
                        placeholder="Enter your business name"

                      />

                      {/* Add more relevant questions for business */}
                      {/* <label>Nature of Business:</label> */}
                      {/* <input
                        type="text"
                        name="natureOfBusiness"
                        onChange={handleInput}
                        placeholder="Enter the nature of your business"
                        required
                      /> */}

                      {/* ... (other relevant questions for business) */}

                      {/* <label>Year of Trade:</label> */}
                      <input
                        type="number"
                        name="businessexp"
                        onChange={handleInput}
                        placeholder="Year of business experience"

                      />

                      {/* <label>Is the Business Still Operating? (Yes or No):</label> */}
                      <label>
                        <span className="texttform">Is the business still operating?</span>&nbsp;
                        <input
                          type="checkbox"
                          name="Business"
                          value="Yes"
                          checked={selectedOption1 === "Yes"}
                          onChange={handleRadioChange1}
                        />
                        &nbsp;<span className="textform">Yes </span>&nbsp;
                        <input
                          type="checkbox"
                          name="Business"
                          value="No"
                          checked={selectedOption1 === "No"}
                          onChange={handleRadioChange1}
                        />
                        &nbsp;<span className="textform">No</span>
                      </label>
                    </>
                  )}
                </div>
                <div className="form-input">
                  {/* <label>A brief about the candidate <span className='label-star'>*</span></label> */}
                  {/* <label>Comments <span className='label-star'>*</span></label> */}

                </div>
                <div className="form-input">
                  <select name="Reach" onChange={handleInput}>
                    <option value="Social Media">How do you know us</option>

                    <option value="Social Media">Social Media</option>
                    <option value="Website">Website</option>
                    <option value="Friends">Friends</option>
                    <option value="Google">Google</option>
                  </select>
                </div>
                <div className="form-input">
                  {/* <label>A brief about the candidate <span className='label-star'>*</span></label> */}
                  {/* <label>Comments <span className='label-star'>*</span></label> */}
                  <textarea
                    name="chooseus"
                    onChange={handleInput}
                    placeholder="Why choose us"

                  />
                </div>

                <button
                  className={`submit ${loading ? "btn-load" : ""}`}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </Modal>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default NewPartner;
