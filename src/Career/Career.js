import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Career.css'
import { BsArrowRight } from "react-icons/bs";

const Career = () => {
  return (
    <div className='container'>


        <div className=' row job-head'>
                <span>Current Openings</span>
                <div className='col-md-12 col-lg-4 c-serv-home-sec'>
                            <div className='c-home-slide'>
                            {/* https://img.freepik.com/free-photo/we-are-hiring-digital-collage_23-2149667063.jpg?w=900&t=st=1697864986~exp=1697865586~hmac=8b261325b329c9b6255e579f918f3a1eba0386c1cfd7ad597ae6916504d8f401 */}
                            <img src="/images/web.webp"/>

                                <div className='c-home-cont-overlay'>

                                    {/* <img src="/images/icons/it.png" alt="service icons"></img> */}
                                    

                                        <h2 className="c-mid-title c-serviceIt">Web Developer</h2>
                                    

                                    <p className="text-muted">
                                        Experience: Fresher / 1 to 2 yrs
                                    </p>
                                    <p className="text-muted">
                                        Location: Coimbatore
                                    </p>
                                    <button>
                                        Read More &nbsp;<BsArrowRight className='c-job-arrow'/>
                                    </button>
                                </div>
                                <div className='img-bg'>
                                </div>
                            </div>
                           
                </div>
                <div className='col-md-12 col-lg-4 c-serv-home-sec'>
                            <div className='c-home-slide'>

                            <img src="/images/web.webp"/>

                                <div className='c-home-cont-overlay'>

                                    {/* <img src="/images/icons/it.png" alt="service icons"></img> */}
                                    <Link to="/Iotservice" >

                                        <h2 className="c-mid-title c-serviceIt">Web Developer</h2>
                                    </Link>

                                    <p className="text-muted">
                                        Experience: Fresher / 1 to 2 yrs
                                    </p>
                                    <p className="text-muted">
                                        Location: Coimbatore
                                    </p>
                                    <button>
                                        Read More &nbsp;<BsArrowRight className='c-job-arrow'/>
                                    </button>
                                </div>
                                <div className='img-bg'>
                                </div>
                            </div>
                           
                </div>
                <div className='col-md-12 col-lg-4 c-serv-home-sec'>
                            <div className='c-home-slide'>

                            <img src="/images/web.webp"/>

                                <div className='c-home-cont-overlay'>

                                    {/* <img src="/images/icons/it.png" alt="service icons"></img> */}
                                    <Link to="/Iotservice" >

                                        <h2 className="c-mid-title c-serviceIt">Web Developer</h2>
                                    </Link>

                                    <p className="text-muted">
                                        Experience: Fresher / 1 to 2 yrs
                                    </p>
                                    <p className="text-muted">
                                        Location: Coimbatore
                                    </p>
                                    <button>
                                        Read More &nbsp;<BsArrowRight className='c-job-arrow'/>
                                    </button>
                                </div>
                                <div className='img-bg'>
                                </div>
                            </div>
                           
                </div>
        </div> 

    </div >
  ) 
}

export default Career