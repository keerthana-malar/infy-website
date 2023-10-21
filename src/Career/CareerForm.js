import React from 'react'
import '../css/CareerForm.css'

const CareerForm = () => {
  return (
    <div className='container test-job'>
        <div className='form-img'>
           <img src='/images/careerForm.webp'/>
        </div>

        <div className=' job-allhead'>
            <div className='job-form-head'>
                <h2>Apply Now</h2>
                <span>Opportunities don’t happen, you create them.</span>
            </div>
            <div className='job-form'>
                <form className=''>
                    <div className='form-input'>
                        <label>Name <span className='label-star'>*</span></label>
                        <input type='text' required/>
                    </div>
                <div className='form-input' > 
                        <label>Email <span className='label-star'>*</span></label>
                        <input type='text' required/>
                </div>
                    <div className='form-input'>
                        <label>Phone No <span className='label-star'>*</span></label>
                        <input type='text' required/>
                    </div>
                    <div className='form-input'>
                    <label>Position <span className='label-star'>*</span></label>
                        <select>
                            <option>Please Choose an Position</option>
                            <option>Web Developer</option>
                            <option>Web Developer</option>
                            <option>Web Developer</option>
                        </select>
                    </div>
                    <div className='form-input'>
                        <label>Experience <span className='label-star'>*</span></label>
                        <select>
                            <option>Please Choose an Experience</option>
                            <option>1</option>
                            <option>2</option>
                            <option>2+</option>
                        </select> 
                    </div>
                
                <div className='form-input'>
                        <label>A brief about the candidate <span className='label-star'>*</span></label>
                        {/* <label>Comments <span className='label-star'>*</span></label> */}
                        <textarea type='text' required/> 
                </div>
                <div className='form-input'>
                    <label>Upload Resume <span className='label-star'>*</span></label>
                        <input type='file' required/>
                </div>
                <div className='job-btn'>
                        <button>Submit</button>
                </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default CareerForm