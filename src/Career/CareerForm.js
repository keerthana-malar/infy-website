import { useEffect,useState } from 'react'
import React from 'react'
import '../css/CareerForm.css'
import axios from "axios";

const CareerForm = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
        .get("https://infygain.in/api/career-data")
        .then((res) => {
         const dataa= res.data
         setData(dataa);
          console.log('car',data)
        })
        .catch((err) => {
          console.log(err);
        });
      },[]);
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
           <img src='/images/careerForm.webp' className='image-fluid'/>
        </div> 
    </div>
    <div className='col-md-6 col-lg-6'>
    <div className='test-job'>
      

        <div>
        <div className='job-allhead '>
            <div className='job-form-head'>
                <h2>Apply Now</h2>
                {/* <span>Opportunities don’t happen, you create them.</span> */}
            </div>
            <div className='job-form'>
                <form className=''>
                    <div className='form-input'>

                        {/* <label>Name <span className='label-star'>*</span></label> */}
                        <input type='text'  placeholder='Name' required/>
                    </div>
                <div className='form-input' > 
                        {/* <label>Email <span className='label-star'>*</span></label> */}
                        <input type='text' placeholder='Email' required/>
                </div>
                    <div className='form-input'>
                        {/* <label>Phone No <span className='label-star'>*</span></label> */}
                        <input type='text' placeholder='Phone No'required/>
                    </div>
                    <div className='form-input'>
                    {/* <label>Position <span className='label-star'>*</span></label> */}
                    <select>
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
                        <select>

                        <label>Name <span className='label-star'>*</span></label>
                        <input type='text' name='name' required/>
                    </div>
                <div className='form-input' > 
                        <label>Email <span className='label-star'>*</span></label>
                        <input type='text' name='email' required/>
                </div>
                    <div className='form-input'>
                        <label>Phone No <span className='label-star'>*</span></label>
                        <input type='text' name='phno' required/>
                    </div>
                    <div className='form-input'>
                    <label>Position <span className='label-star'>*</span></label>
                        <select name='position'>
                            <option>Please Choose an Position</option>
                            <option>Web Developer</option>
                            <option>Web Developer</option>
                            <option>Web Developer</option>
                        </select>
                    </div>
                    <div className='form-input'>
                        <label>Experience <span className='label-star'>*</span></label>
                        <select name='exp'>

                            <option>Please Choose an Experience</option>
                            <option>1</option>
                            <option>2</option>
                            <option>2+</option>
                        </select> 
                    </div>
                
                <div className='form-input'>
                        {/* <label>A brief about the candidate <span className='label-star'>*</span></label> */}
                        {/* <label>Comments <span className='label-star'>*</span></label> */}

                        <textarea type='text' placeholder='Comment here' required/> 

                        <textarea type='text' name='selfintro' required/> 

                </div>
                <div className='form-input'>
                    <label>Upload Resume <span className='label-star'>*</span></label>
                        <input type='file' name="img" required/>
                </div>
                <div className='job-btn'>
                        <button>Submit</button>
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

export default CareerForm