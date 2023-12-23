import React, { useState, useEffect } from 'react';  // Combine the import statements
import {  Modal } from 'antd';
import '../css/Partner.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../css/BestService.css';
import Carousel from '../about/carousel';
import Link from 'antd/es/typography/Link';

function PartnerBlog() {
     // Define an array of district names
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
    "Virudhunagar"
    // Add more district names as needed
  ];
  const [selectedOption, setSelectedOption] = useState(null);

  const handleRadioChange = (value) => {
    setSelectedOption(value);
  };
    // const [showModal, setShowModal] = useState(false);
    const [open, setOpen] = useState(false);

    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phno, setPhno] = useState('')
    const [position, setPosition] = useState('')
    const [resume, setResume] = useState('')
    const [data, setData] = useState([]);
    const [fd,setFd] = useState('')
    const [errors, setErrors] = useState("");
    const [show, setShow] = useState(false);
    const [showMsg, setShowMsg] = useState(false);
    const [file, setFile] = useState(null);
    const [values, setValues] = useState({
       
        title: "",
        status: "Active",
        qualification:"",
        experience:"",
        openings:"",
        jd:"",
        content:"",
        intro:""
      });

    const handleInput = (e) => {
        setValues((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
        }));
      };

    const showModal = () => {
        console.log("hii")
        setOpen(true);
      };
      const handleOk = () => {
        setLoading(true);
        setFd({
            name,
            email,
            phno,
            position,
            resume
        })
        setLoading(false);
        setOpen(false);
        setName('')
        setEmail('')
        setPhno('')
        setPosition('')
        setResume('')  
      };
    
      const handleCancel = () => {
        setOpen(false);
        setName('')
        setEmail('')
        setPhno('')
        setPosition('')
        setResume('') 
      };
    useEffect(() => {
        AOS.init();
        AOS.refresh();

    }, []);
    const partnerLogos = [
        "/images/partner/1.svg",
        "/images/partner/2.svg",
        "/images/partner/3.svg",
        "/images/partner/4.svg",
        "/images/partner/5.svg",
        "/images/partner/6.svg",
        "/images/partner/7.svg",
        "/images/partner/AMD.svg",
        "/images/partner/ARUBA.svg",
        "/images/partner/BENQ.svg",
        "/images/partner/CAMBIUM.svg",
        "/images/partner/CISCO.svg",
        "/images/partner/CITRIX.svg",
        "/images/partner/COMMSCOPE.svg",
        "/images/partner/D LINK.svg",
        "/images/partner/DAHUA.svg",
        "/images/partner/DELL EMC.svg",
        "/images/partner/DRAYTEK.svg",
        "/images/partner/EXTREME.svg",
        "/images/partner/FORTINET.svg",
        "/images/partner/HIKVISION.svg",
        "/images/partner/HOLKOI.svg",
        "/images/partner/HP ENTERPRISE.svg",
        "/images/partner/IBM.svg",
        "/images/partner/INTEL.svg",
        "/images/partner/LENOVA.svg",
        "/images/partner/N COMPUTING.svg",
        "/images/partner/NETFOX.svg",
        "/images/partner/OPTOMA.svg",
        "/images/partner/POSIFLEX.svg",
        "/images/partner/RUCKUS.svg",
        "/images/partner/UBIQUTI.svg",
        "/images/partner/VMWARE.svg",
        "/images/partner/VYAPAR.svg"
    ];

    const logos = partnerLogos.map((item, index) => (
        <div key={index} className="logo-box1">
            <img src={item} alt='best partners' className='infyimg' title='Partners' />
        </div>
    ));
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 1000,


    };
    return (
        <div className='overallpartnerblog'>
            <div className='container mt-4'>
                <div className='row '>
                    <div className='col-md-8 marketing'>
                        <div className='redline'></div>
                        <div className='partnerrow'>
                            <h1>Infygain Technologies Offers Partner Program</h1>
                            <div className='paraqueen'>
                                <p>Partners are expected to be reliable and dependable,
                                    creating a foundation of trust in the relationship.
                                    Partners provide emotional, practical, and moral support during
                                    challenging times and in achieving common goals.
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className='col-md-4 slidepointimgbox'>
                        <img src="/images/infy-boy.svg" alt='best partners' className='slidepointimg' />
                    </div>
                </div>

                <div className="container">
                <div className='row titlebox'>
                    <div className='col-md-7 box1withtexttitle' data-aos="fade-right"
                        data-aos-duration="1000">
                            {/* <h1>ITConnects</h1> */}
                        <p className='parabullet'>ITConnects is an exclusive brand and innovative venture by Infygain Technologies to welcome aspiring entrepreneurs and investors to collaborate with us through a dynamic franchise model. Together, we can harness our experience and expertise for mutual growth and success in the area of Sales and Services of IoT products.</p>
                    </div>
                    <div className='col-md-1'></div>
                   
                    <div className=' col-md-4 partnerphototitle' data-aos="fade-left"
                        data-aos-duration="1000">
                        <img src="/images/icons/Logos IT Connects.webp" alt='best partners'className='slidepointimg' />
                    </div>
                    </div>
                </div>
                {/* first one */}
                <div className='row firstonebox'>
                    <div className='col-md-8 box1withtext' data-aos="fade-right"
                        data-aos-duration="1000">
                            <h2>Who we are and What we do?</h2>
                        <p className='parabullet'>Infygain Technologies with a decade of experience, our ISO 9001:2015 and GeM authorization establish us as a trusted IT brand in Coimbatore in the area of Sales and Services of IoT products. We specialize in building IT Infrastructure for Institutes and Industries, boasting a strong vendor network with over 100 top brands. Our experienced team excels in various IT skills, enabling us to drive Digital Transformation affordably. We pride ourselves on customer success stories, geographic reach, industry partnerships, and staying at the forefront of technology trends. Committed to quality and innovation, we look ahead to a future of expanding services and embracing emerging technologies.</p>
                    </div>
                    <div className=' col-md-4 partnerphoto' data-aos="fade-left"
                        data-aos-duration="1000">
                        <img src="/images/bestpartner.webp" alt='best partners' />
                    </div>
                </div>
                <Carousel />

                {/* second one */}
                <div className='row firstonebox 'id="column2">
                    <div className=' col-md-4 partnerphoto2' data-aos="fade-right"
                        data-aos-duration="1000">
                        <img src="/images/success-partner.webp" alt='best partners' />
                    </div>
                    <div className='col-md-8 box1withtext firsttow1' data-aos="fade-left"
                        data-aos-duration="1000" id="column1">
                            <h2 className='itfieldtitle'>Why to Invest in IT Field?</h2>
                        <p className='parapiquename'>Investing in the IT field is lucrative due to constant innovation and technological advancements. The sector offers global reach and scalability, allowing companies to tap into a wide audience and expand their market share</p>
                    </div>
                    </div>
                     {/* first one */}
                <div className='row firstonebox'>
                    <div className='col-md-8 box1withtext' data-aos="fade-right"
                        data-aos-duration="1000">
                       
                        <p className='parabullet'>IT business in India is projected to total $124.6 billion in 2024, an increase of 10.7% from 2023, according to the latest forecast by Gartner, Inc. with expansions in the key areas like digital transformation, cloud computing, cybersecurity, and artificial intelligence.</p>
                        <p className='parabullet'>With consistent high growth rates, the IT industry meets the increasing demand for services, software, and hardware. IT solutions contribute to cost efficiency and automation, making them attractive to businesses seeking operational improvements. Digital transformation initiatives across industries provide growth opportunities for IT companies. The sector's focus on emerging technologies, such as IoT and 5G, offers early-mover advantages.</p>
                    </div>
                    <div className=' col-md-4 partnerphoto' data-aos="fade-left"
                        data-aos-duration="1000">
                        <img src="https://img.freepik.com/free-photo/businessman-touching-tip-bar-chart_1232-898.jpg?w=900&t=st=1703309141~exp=1703309741~hmac=2f440897be3b54b34a52f7178b410d171204cd32f5a86bf3dc81b7f2376c7e7b" alt='best partners' />
                    </div>
                </div>
                {/* <div className='row firstonebox '>
                    <div className=' col-md-4 partnerphoto2' data-aos="fade-right"
                        data-aos-duration="1000">
                        <img src="/images/partner_groupcirlce.webp" alt='best partners' />
                    </div>
                    <div className='col-md-8 box1withtext firsttow1' data-aos="fade-left"
                        data-aos-duration="1000">
                            
                        <p className='parapiquename'>With consistent high growth rates, the IT industry meets the increasing demand for services, software, and hardware. IT solutions contribute to cost efficiency and automation, making them attractive to businesses seeking operational improvements. Digital transformation initiatives across industries provide growth opportunities for IT companies. The sector's focus on emerging technologies, such as IoT and 5G, offers early-mover advantages.</p>
                    </div>
                    </div> */}

                

            </div>
            <div className='applynow'>
            <Link to="/about" className="btns links text-light" onClick={showModal}>
                apply now &nbsp; <span className="fa fa-arrow-right"></span>
              </Link>
              </div>
              {/* <Modal showModal={showModal} closeModal={() => setShowModal(false)} /> */}


              <Modal
                        footer={null}
                        open={open}
                        onOk={
                            () => {
                                handleOk()
                            }
                        }
                        onCancel={handleCancel}
                        centered
                
                    >
                        
                        <div className='container form-head'>
                       
                      
                            <h3>Partnership Application Form</h3>
                            <form className='careerForm' >   
                                
                          
                               
                                <input type='text' name='name' placeholder='Enter your name '  onChange={handleInput} required/>
                             
                                <input type='text' name='email' placeholder='Enter your Email'  onChange={handleInput} required/>
                               
                            



                                
                                <input type='text' name='email' placeholder='Enter your DOB'  onChange={handleInput} required/>
                                <input type='text' name='phno' placeholder='Phone No'   onChange={handleInput} required/>


                                
                                <div className='form-input'>
                                
                           
                                        
                                        <select name='exp'  onChange={handleInput}>
                                            <option>Please Select Your city</option>
                                           {/* Map through the districtOptions array to generate options */}
            {districtOptions.map((district, index) => (
              <option key={index}>{district}</option>
            ))}
                                            
                                        </select> 
                                    </div>
                            
                                
                                <div className='form-input'>
                                    <h5>Please Select that apply</h5>
          <label>
            <input
              type='radio'
              name='exp'
              value='Work'
              checked={selectedOption === 'Work'}
              onChange={() => handleRadioChange('Work')}
            />
            Work&nbsp;
          </label>

          <label>
            <input
              type='radio'
              name='exp'
              value='Business'
              checked={selectedOption === 'Business'}
              onChange={() => handleRadioChange('Business')}
            />
            Business
          </label>

          {/* Show relevant questions based on the selected radio button */}
          {selectedOption === 'Work' && (
            <>
                  <input
                    type='text'
                    name='position'
                    onChange={handleInput}
                    placeholder='Enter your position'
                    required
                  />

                  {/* Add more relevant questions for work */}
                  {/* <label>Company:</label> */}
                  <input
                    type='text'
                    name='company'
                    onChange={handleInput}
                    placeholder='Enter your company'
                    required
                  />

                  {/* ... (other relevant questions for work) */}

                  {/* <label>Date of Employment:</label> */}
                  <input
                    type='date'
                    name='dateOfEmployment'
                    onChange={handleInput}
                    required
                  />

                  {/* <label>Reason for Leaving:</label> */}
                  <textarea
                    name='reasonForLeaving'
                    onChange={handleInput}
                    placeholder='Enter your reason for leaving'
                    required
                  />
            </>
          )}

          {selectedOption === 'Business' && (
            <>
             {/* <label>Trading Name:</label> */}
                  <input
                    type='text'
                    name='tradingName'
                    onChange={handleInput}
                    placeholder='Enter your business name'
                    required
                  />

                  {/* Add more relevant questions for business */}
                  {/* <label>Nature of Business:</label> */}
                  <input
                    type='text'
                    name='natureOfBusiness'
                    onChange={handleInput}
                    placeholder='Enter the nature of your business'
                    required
                  />

                  {/* ... (other relevant questions for business) */}

                  {/* <label>Year of Trade:</label> */}
                  <input
                    type='number'
                    name='yearOfTrade'
                    onChange={handleInput}
                    placeholder='Year of business experience'
                    required
                  />

                  {/* <label>Is the Business Still Operating? (Yes or No):</label> */}
                  <label>
                    Is the Business Still Operating?&nbsp;
                    <input
                      type='checkbox'
                      name='isBusinessOperating'
                    //   checked={isBusinessOperating}
                    //   onChange={handleCheckboxChange}
                    />
                     &nbsp;Yes &nbsp;
                    <input
                      type='checkbox'
                      name='isBusinessOperating'
                    //   checked={isBusinessOperating}
                    //   onChange={handleCheckboxChange}
                    />
                    &nbsp;No
                    
                  </label>
            </>
          )}
          </div>
          <div className='form-input'>
                                        {/* <label>A brief about the candidate <span className='label-star'>*</span></label> */}
                                        {/* <label>Comments <span className='label-star'>*</span></label> */}
                                        <textarea name='selfintro' onChange={handleInput}  placeholder='About Your Work experience' required/> 
                                </div>
                                <div className='form-input'>
                                        {/* <label>A brief about the candidate <span className='label-star'>*</span></label> */}
                                        {/* <label>Comments <span className='label-star'>*</span></label> */}
                                        <textarea name='selfintro' onChange={handleInput}  placeholder='Why Choose Us' required/> 
                                </div>
                                
                                <button className={`submit ${loading ? "btn-load" : ""}`} type="submit">Submit</button>
                            </form>
                    
                        </div>
                        
                </Modal>
        </div>
        
    )
}

export default PartnerBlog;