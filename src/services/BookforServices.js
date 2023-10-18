import React,{useEffect} from 'react';
import '../css/BookforServices.css';
import { FaHandPointRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

function BookforServices(){
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return(
        <div className='container'>
            <div className='grandgrandparent'>
            <div className='row grandparent'>
                <div className='col-md-12 rightboxing' data-aos-delay="300"
                data-aos="zoom-in-left">
                    <div className='rightboxborder'>
                    <div className='headingregisteration'>
                  <h3 className='headingtag'>New User </h3>
                  <p className='headingtagunder'>You don't have the username and password</p>
                  </div>
                  
                  <div className='contentpara'>

                    {/* 1 */}
                  <div className='orders'>
                  <div className='iconpotti'>
                     <FaHandPointRight/>
                  </div>
                  <p>Fill out the required details from the registration page and click Submit</p>
                  </div>
                  {/* 2 */}
                  <div className='orders'>
                  <div className='iconpotti'>
                     <FaHandPointRight/>
                  </div>
                  <p>Once you submit, you will receive an e-mail notification from us</p>
                  </div>
                  {/* 3 */}
                  <div className='orders'>
                  <div className='iconpotti'>
                     <FaHandPointRight/>
                  </div>
                  <p>Please provide the correct email id in the registration form</p>
                  </div>
                  {/* 4 */}
                  <div className='orders'>
                  <div className='iconpotti'>
                     <FaHandPointRight/>
                  </div>
                  <p>After receiving the email, you will get the username, password and login link as well</p>
                  </div>
                  {/* 5 */}
                  <div className='orders'>
                  <div className='iconpotti'>
                     <FaHandPointRight/>
                  </div>
                  <p>Once you have logged in to the client portal, you will see the three categories (accounts, cases, orders)</p>
                  </div>
                  {/* 6 */}
                  <div className='orders'>
                  <div className='iconpotti'>
                     <FaHandPointRight/>
                  </div>
                  <p>The same process should be followed in existing guidance for users</p>
                  </div>
                  {/* 7 */}
                  <div className='orders'>
                  <div className='iconpotti'>
                     <FaHandPointRight/>
                  </div>
                  <p>Would you like to view the services of infygain technologies go to our services</p>
                  </div>
                  <div className='buttontaging'>
                 <button className="btn insidebtn">User Registration</button>
                 </div>
                </div>
                </div>
                </div>
                </div>
        </div>
        </div>
    )
}

export default BookforServices;
