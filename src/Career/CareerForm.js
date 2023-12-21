import { useEffect,useState } from 'react'
import React from 'react'
import '../css/CareerForm.css'
import axios from "axios";
import { Alert } from 'react-bootstrap';

const CareerForm = () => {
  
    // file upload max size 1mb 
    const maxSizeInBytes = 1048576;

    const [errors, setErrors] = useState("");
    const [show, setShow] = useState(false);
    const [showMsg, setShowMsg] = useState(false);
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
        .get("https://infygain.com/api/career-data")
        .then((res) => {
         const dataa= res.data
         setData(dataa);

        })
        .catch((err) => {
          console.log(err);
        });
      },[]);

      const [values, setValues] = useState({
        name: "",
        email: "",
        phno: "",
        position: "",
        exp: "",
        selfintro: "",
        img: "",
      });

      const [file, setFile] = useState(null);

      const handleInput = (e) => {
        setValues((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
        }));
      };

      const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];

          setFile(selectedFile);

      };

      const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(values)
        // console.log(file)

        if (values.name === "") {
            setErrors("Title Must Be Filled 🤔");
            setShow(true);
          
          } 
          else if(file && file.size > maxSizeInBytes) {
            setErrors("File size exceeds the limit (1MB)🤔");
            setShow(true);
          }
          
          else {
            console.log(0)
            const formData = new FormData();
            formData.append("file", file);
            formData.append("name", values.name);
            formData.append("email", values.email);
            formData.append("phno", values.phno);
            formData.append("position", values.position);
            formData.append("exp", values.exp);
            formData.append("selfintro", values.selfintro);


        
            
            axios.post("https://infygain.com/api/carformdata", formData)

            .then((res) => {
              console.log(res)
              document.querySelector(".careerForm").reset();
                setErrors("Submited Successfully 😊😊");
              setShowMsg(true)

            //   setErrors("Blog Added Successfully 😊😊");
            //   setShowMsg(true);
            })
            .catch((err) => {
              console.log("helloooo" + err);
            //   setErrors("Something Wrong Pls Try again Later 😥");
            //   // setErrors(err);
            //   setShow(true);
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
    <div className='cop'>
  <div className='container'>
    <div className='row'>
    <div className='col-md-6 col-lg-6'>
        <div className='rcs'>
            <div className='sml'></div>
        <p className='pq'>About us</p>
        </div>
        <h1 className='hthing'> Opportunities Never happen, your Create them..!</h1>
        <div className='prk'>
        <p className='text-muted' >We are commitment to diversity, equity,
         and inclusion. This might include programs, initiatives,
         or employee resource groups focused on fostering a diverse and inclusive workplace.
         You have a opportunities for career advancement and growth within Infygain.
          This might include details on mentorship programs, 
          training, or pathways for career progression.</p>
    </div>

        <div className='form-img'>
           <img src='/images/careerForm.webp' alt='best jobs' className='image-fluid' title='Jobs'/>
        </div> 
    </div>
    <div className='col-md-6 col-lg-6'>
    <div className='test-job'>
      

        <div>

        {alertBox()}
        {msgBox()}

        <div className='job-allhead'>
          
            <div className='job-form-head'>
                    <h2>Apply Now</h2>
                    {/* <span>Opportunities don’t happen, you create them.</span> */}
                </div>
                <div className='job-form'>
                <form className='careerForm' onSubmit={handleSubmit}>
                    <div className='form-input'>
                        {/* <label>Name <span className='label-star'>*</span></label> */}
                        <input type='text' name='name' placeholder='Name' onChange={handleInput} required/>
                    </div>
                <div className='form-input' > 
                        {/* <label>Email <span className='label-star'>*</span></label> */}
                        <input type='text' name='email' placeholder='Email'  onChange={handleInput} required/>
                </div>
                    <div className='form-input'>
                        {/* <label>Phone No <span className='label-star'>*</span></label> */}
                        <input type='text' name='phno' placeholder='phone No'  onChange={handleInput} required/>
                    </div>
                    <div className='form-input'>
                    {/* <label>Position <span className='label-star'>*</span></label> */}
                    <select name='position'  onChange={handleInput}>
           <option>--Please select the position--</option>
            {data.map((vale, index) => (
            <option key={index} value={vale.title}>
               {vale.title}
           </option>
    ))}
</select>
                    </div>
                    <div className='form-input'>
                        {/* <label>Experience <span className='label-star'>*</span></label> */}
                        <select name='exp'  onChange={handleInput}>
                            <option>Please Choose an Experience</option>
                            <option>1</option>
                            <option>2</option>
                            <option>2+</option>
                        </select> 
                    </div>
                
                    <div className='form-input'>
                        {/* <label>A brief about the candidate <span className='label-star'>*</span></label> */}
                        {/* <label>Comments <span className='label-star'>*</span></label> */}
                        <textarea name='selfintro' onChange={handleInput}  placeholder='Comment here' required/> 
                </div>
                <div className='form-input'>
                    <label>Upload Resume <span className='label-star'>*</span></label>
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
                <div className='job-btn'>
                      <button type='submit'>Submit</button>
                </div>
                </form>
            </div>
        </div>

        </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default CareerForm;
